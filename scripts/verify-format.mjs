import fs from 'node:fs';
import vm from 'node:vm';
import { FORMATTED_EXAMPLES } from './formatted-examples.mjs';
const context={process:{on(){}}};
vm.runInNewContext(fs.readFileSync(new URL('./import-source-content.mjs',import.meta.url),'utf8').replace(/^import .*;$/gm,'')+'\nglobalThis.rowsOut=rows;',context);
function tokens(source) {
 let i=0; const result=[];
 while(i<source.length) {
  if(/\s/.test(source[i])) {i++;continue;}
  if(source.startsWith('//',i)) {let end=source.indexOf('\n',i); if(end<0)end=source.length; result.push(source.slice(i,end));i=end;continue;}
  if(source.startsWith('/*',i)) {
   let end=i+2,depth=1;
   while(end<source.length&&depth) {if(source.startsWith('/*',end)){depth++;end+=2;}else if(source.startsWith('*/',end)){depth--;end+=2;}else end++;}
   result.push(source.slice(i,end));i=end;continue;
  }
  if(source[i]==='"') {let end=i+1;while(end<source.length){if(source[end]==='\\'){end+=2;continue;}if(source[end++]==='"')break;}result.push(source.slice(i,end));i=end;continue;}
  let match;
  if(source[i]==="'"&&(match=source.slice(i).match(/^'(?:\\.|[^'\\])'/))) {result.push(match[0]);i+=match[0].length;continue;}
  match=source.slice(i).match(/^(?:[A-Za-z_][A-Za-z_0-9]*|[0-9][A-Za-z_0-9]*(?:\.[0-9]+)?|::|->|=>|\.\.=|\.\.|==|!=|<=|>=|&&|\|\||\+=|-=|\*=|\/=|%=|<<|>>|.)/s);
  result.push(match[0]);i+=match[0].length;
 }
 return result;
}
// This checker covers these authored examples, not Rust raw-string lexing in general.
const failures=[];
for(const [id,formatted] of Object.entries(FORMATTED_EXAMPLES)) {
 const original=context.rowsOut.find(row=>row.id===id);
 if(!original){failures.push(id+': original missing');continue;}
 if(/\b(?:line|column|file|stringify|include_str|include_bytes)\s*!/.test(original.code)){failures.push(id+': location/text-sensitive macro needs manual comparison');continue;}
 if(/\b(?:br|r)#*"/.test(original.code)){failures.push(id+': raw string needs manual literal comparison');continue;}
 if(JSON.stringify(tokens(original.code))!==JSON.stringify(tokens(typeof formatted==='string'?formatted:formatted.code)))failures.push(id+': tokens or literal/comment text changed');
}
console.log(JSON.stringify({checked:Object.keys(FORMATTED_EXAMPLES).length,failures},null,2));
process.exitCode=failures.length?1:0;
