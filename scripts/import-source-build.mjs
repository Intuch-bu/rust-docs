import fs from 'node:fs';
import { EARLY_ENRICHMENT } from './early-chapters.mjs';
const { FORMATTED_EXAMPLES } = fs.existsSync('scripts/formatted-examples.mjs') ? await import('./formatted-examples.mjs') : {FORMATTED_EXAMPLES:{}};
export function build(rows) {
 const supplementary=JSON.parse(fs.readFileSync('vendor/supplemental-references.json','utf8'));
 const inventory=JSON.parse(fs.readFileSync('vendor/inventory.json','utf8'));
 const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
 const byId=new Map(rows.map(r=>[r.id,r])); let section='เริ่มต้น';
 const chapters=inventory.filter(e=>byId.has(e.id)).map(e=>{
  const r={...byId.get(e.id), ...EARLY_ENRICHMENT[e.id]}; r.code=FORMATTED_EXAMPLES[r.id] ?? r.code; r.references=[...(r.references||[]),...(supplementary[r.id]||[])]; if(e.depth===0) section=r.title;
  return {id:r.id,title:r.title,section,source:'https://doc.rust-lang.org/'+(r.id==='scope/lifetime/struct'?'stable/':'')+'rust-by-example/'+r.id+'.html',body:'<h2>แนวคิดที่ต้องรู้</h2><p>'+escape(r.concept)+'</p><h2>เมื่อนำไปใช้ในแอป</h2><p>'+escape(r.app)+'</p>'+(r.references?.length?'<h2>อ้างอิงเพิ่มเติม</h2><ul>'+r.references.map(ref=>'<li><a href="'+escape(typeof ref === 'string' ? ref : ref.url)+'">'+escape(typeof ref === 'string' ? ref : ref.title || ref.label || ref.url)+'</a></li>').join('')+'</ul>':''),examples:[{title:'ตัวอย่างในบริบทแอป',code:r.code,expected:r.expected,mode:r.mode,edition:'2021',...(['compile_fail','should_panic'].includes(r.mode)?{expectedError:r.expectedError || ({'fn/diverging':'task invariant broken','error/panic':'negative task count','std/panic':'task state corrupted'}[r.id])}:{}),...(r.note?{note:r.note}:{})},...(r.extraExamples||[])],tips:[r.tip]};
 });
 const book={meta:{title:'Rust ผ่านแอปจริง',sourceCommit:null,sourceUrl:'https://github.com/rust-lang/rust-by-example',snapshotDate:'2026-11-12',provenance:'Official documentation retrieved through web cache; exact upstream revision unavailable. Cached extracted sources retained under vendor/.',coverage:{written:chapters.length,total:inventory.length}},chapters};
 fs.writeFileSync('dist/content.js','window.BOOK = '+JSON.stringify(book,null,2)+';\n');
 console.log('Wrote '+chapters.length+'/'+inventory.length+' chapters');
}
