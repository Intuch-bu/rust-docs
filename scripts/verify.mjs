#!/usr/bin/env node
// Validate the book inventory and execute its authored examples without third-party packages.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import vm from 'node:vm';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
const root = path.resolve(import.meta.dirname || path.dirname(new URL(import.meta.url).pathname), '..');
const contentPath = path.join(root, 'dist/content.js');
const issues = [];
const issue = (message) => issues.push(message);
function findSummary(dir) {
 if (!fs.existsSync(dir)) return null;
 for (const ent of fs.readdirSync(dir, {withFileTypes:true})) {
  const file = path.join(dir,ent.name);
  if (ent.isFile() && ent.name === 'SUMMARY.md') return file;
  if (ent.isDirectory() && ent.name !== '.git') { const found = findSummary(file); if (found) return found; }
 }
 return null;
}
function fail(message) { console.error(message); process.exit(1); }
if (!fs.existsSync(contentPath)) fail('Missing dist/content.js; no content was verified.');
const content = fs.readFileSync(contentPath,'utf8');
const sandbox = {window:{}};
vm.runInNewContext(content,sandbox,{timeout:5000,filename:contentPath});
const book=sandbox.window.BOOK;
if (!book || !Array.isArray(book.chapters)) fail('content.js must define window.BOOK.chapters.');
const summary=findSummary(path.join(root,'vendor'));
let inventory=[];
if (!summary) issue('Missing official vendor/**/SUMMARY.md; exhaustive coverage cannot be established.');
else {
 const markdown=fs.readFileSync(summary,'utf8');
 inventory=[...markdown.matchAll(/\[[^\]]+\]\(([^)]+\.md)\)/g)].map(m=>m[1].replace(/^\.\//,'').replace(/\.md$/,''));
 if (!inventory.length) issue('Official SUMMARY.md has no page inventory.');
}
const actual=book.chapters.map(c=>c.id);
const bodies=new Map();
for (const c of book.chapters) { const key=(c.body||'').trim(); if(key) bodies.set(key,[...(bodies.get(key)||[]),c.id]); }
for (const ids of bodies.values()) if(ids.length>1) issue('Identical chapter bodies: '+ids.join(', '));
const missing=inventory.filter(id=>!actual.includes(id));
const extra=actual.filter(id=>!inventory.includes(id));
const orderMatches=inventory.length===actual.length&&inventory.every((id,i)=>id===actual[i]);
if (missing.length) issue('Missing official chapters: '+missing.join(', '));
if (extra.length) issue('Unmapped chapters: '+extra.join(', '));
if (!orderMatches) issue('Chapter order does not match the official SUMMARY.md.');
if (new Set(actual).size!==actual.length) issue('Duplicate chapter IDs.');
const commit=book.meta?.sourceCommit;
if (!/^[a-f0-9]{40}$/.test(commit||'')) issue('sourceCommit must identify a full upstream Git SHA.');
const rustc=process.env.RUSTC?.includes('/')?path.resolve(process.env.RUSTC):(process.env.RUSTC || 'rustc');
const rustVersionResult=spawnSync(rustc,['--version'],{encoding:'utf8',timeout:15000});
const rustAvailable=!rustVersionResult.error&&rustVersionResult.status===0;
const rustVersion=rustAvailable?rustVersionResult.stdout.trim():null;
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'rust-book-verify-'));
const results=[];
const sourceCache=[];
for (const id of inventory) {
 const file=path.join(root,'vendor/rust-by-example/extracted',id+'.txt');
 if (!fs.existsSync(file)) {issue('Missing cached source extract: '+id);continue;}
 const bytes=fs.readFileSync(file);
 sourceCache.push({id,path:path.relative(root,file),bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')});
}

const normalize=s=>s.replace(/\r\n/g,'\n').replace(/\n$/,'');
try {
 for (const chapter of book.chapters) {
  const problems=[];
  const source=chapter.source||'';
  if (!source.startsWith(`https://github.com/rust-lang/rust-by-example/blob/${commit}/src/`) || !source.endsWith(chapter.id+'.md')) problems.push('Source is not a pinned official permalink for this page.');
  if (!chapter.title || !/[ก-๙]/.test(chapter.title)) problems.push('Missing Thai chapter title.');
  if (typeof chapter.body!=='string'||chapter.body.length<100||!/[ก-๙]/.test(chapter.body)) problems.push('Missing substantive Thai body.');
  if (/\bTODO\b|placeholder content|coming soon|กำลังจัดทำ|รอแปล/i.test(chapter.body||'')) problems.push('Placeholder text found.');
  if (/<script|\bon\w+\s*=|javascript:/i.test(chapter.body||'')) problems.push('Executable HTML found in authored body.');
  if (!Array.isArray(chapter.examples)||!chapter.examples.length) problems.push('No authored examples.');
  const examples=[];
  for (const [index,example] of (chapter.examples||[]).entries()) {
   const result={index,title:example.title,mode:example.mode,status:'failed',codeHash:createHash('sha256').update(example.code||'').digest('hex')};
   examples.push(result);
   if (!example.code?.trim()) {result.reason='Empty code.';continue;}
   if (example.mode==='text') {result.status='manual';result.reason=example.note||'Requires manual validation.'; if (!example.note) problems.push('Text example has no validation note.');continue;}
   if (!['run','compile_fail','should_panic'].includes(example.mode)) {result.reason='Unknown example mode.';continue;}
   if (!['2015','2018','2021','2024'].includes(example.edition)) {result.reason='Missing or invalid Rust edition.';continue;}
   if (['run','should_panic'].includes(example.mode)&&typeof example.expected!=='string') {result.reason=example.mode+' requires exact expected stdout.';continue;}
   if (['compile_fail','should_panic'].includes(example.mode)&&!example.expectedError) {result.reason=example.mode+' requires expectedError.';continue;}
   if (!rustAvailable) {result.status='blocked';result.reason='Rust compiler unavailable. Set RUSTC to an installed compiler and rerun.';continue;}
   const exampleDir=fs.mkdtempSync(path.join(temp,'example-'));
   const stem=path.join(exampleDir,'example'); const src=stem+'.rs';
   fs.writeFileSync(src,example.code);
   const compile=spawnSync(rustc,[src,'--edition',example.edition,'--crate-name','book_example','-o',stem],{encoding:'utf8',timeout:30000,maxBuffer:1024*1024,cwd:exampleDir});
   if (compile.error) {result.reason=compile.error.message;continue;}
   if (example.mode==='compile_fail') {
    result.stderr=compile.stderr;
    if (!example.expectedError) {result.reason='compile_fail requires expectedError to reject unrelated compiler failures.';continue;}
    result.status=compile.status!==0&&compile.stderr.includes(example.expectedError)?'passed':'failed';
    if(result.status==='failed') result.reason='Expected compiler error not found.';
    continue;
   }
   if (compile.status!==0) {result.reason='Compilation failed.';result.stderr=compile.stderr;continue;}
   const run=spawnSync(stem,[],{encoding:'utf8',timeout:10000,maxBuffer:1024*1024,cwd:exampleDir});
   result.stdout=run.stdout||'';
   if (run.error) {result.reason=run.error.message;continue;}
   if (example.mode==='should_panic') {
    result.stderr=run.stderr;
    if (!example.expectedError) {result.reason='should_panic requires expectedError.';continue;}
    result.status=run.status!==0&&run.stderr.includes(example.expectedError)&&normalize(run.stdout)===normalize(example.expected)?'passed':'failed';
    if(result.status==='failed') result.reason='Expected panic diagnostic or stdout not found.';
   } else {
    result.status=run.status===0&&typeof example.expected==='string'&&normalize(run.stdout)===normalize(example.expected)?'passed':'failed';
    if(result.status==='failed'){result.reason='Exit status or stdout differs from expected.';result.stderr=run.stderr;result.expected=example.expected;}
   }
  }
  for (const problem of problems) issue(`${chapter.id}: ${problem}`);
  const status=problems.length||examples.some(e=>e.status==='failed')?'failed':examples.some(e=>e.status==='blocked')?'blocked':examples.some(e=>e.status==='manual')?'manual':'passed';
  results.push({id:chapter.id,status,problems,examples});
 }
} finally {fs.rmSync(temp,{recursive:true,force:true});}
const totals={passed:0,failed:0,blocked:0,manual:0};
for (const c of results) for (const e of c.examples) totals[e.status]++;
const status=issues.length||totals.failed?'failed':totals.blocked?'blocked':totals.manual?'manual':'passed';
const report={generatedAt:new Date().toISOString(),sourceCommit:commit,rustVersion,status,documentationProvider:{requested:'Context7',available:false,fallback:'Official Rust documentation and retained rendered-page extracts'},contentHash:createHash('sha256').update(content).digest('hex'),bookHash:createHash('sha256').update(JSON.stringify(book)).digest('hex'),sourceCache:{kind:'rendered-page-extract',verifiedUpstreamRevision:false,files:sourceCache},coverage:{expected:inventory.length,actual:actual.length,missing,extra,orderMatches},totals,chapters:results,issues,limits:['Compiler checks validate the supplied examples only; they do not prove every prose claim.','Text examples require the manual checks described in their notes.','Cached rendered-page extract hashes prove local file identity, not the upstream Git revision.']};
fs.writeFileSync(path.join(root,'dist/verification.json'),JSON.stringify(report,null,2)+'\n');
fs.writeFileSync(path.join(root,'dist/verification.js'),'window.VERIFICATION = '+JSON.stringify(report)+';\n');
console.log(JSON.stringify({status,rustVersion,coverage:report.coverage,totals,issueCount:issues.length,issues:issues.slice(0,15)},null,2));
process.exitCode=status==='passed'?0:1;
