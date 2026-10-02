// usage (from the repo root): node tools/smoke.js [data/<helpers>.js ...] data/<page>.js   (files load in the given order, page last)
const fs=require('fs');const files=process.argv.slice(2),dataFile=files[files.length-1];
const src=['lib/common.js',...files].map(f=>fs.readFileSync(f,'utf8')).join('\n;\n');
const eng=fs.readFileSync('lib/engine.js','utf8');
const el=()=>({innerHTML:'',style:{},textContent:'',hidden:false,classList:{toggle(){},add(){},remove(){}},querySelectorAll:()=>[],appendChild(){}});
const els={};global.document={getElementById:id=>els[id]||(els[id]=el()),querySelector:()=>els.header||(els.header=el()),querySelectorAll:()=>[],addEventListener(){},createElement:()=>el(),body:el()};
const store={};global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v};global.scrollTo=()=>{};
let x;try{x=new Function(src+';\n'+eng+';return {st,renderAll,CHAPTER,Q,TOPIC_SEC,TOPICS,CONCEPT,partOk,PAGE};')()}catch(e){console.log('LOAD ERROR',e.stack.split('\n').slice(0,3).join('\n'));process.exit(1)}
let err=0;const E=m=>{err++;console.log('ERR',m)};
for(const t of ['practice','concepts','drill','coverage']){x.st.tab=t;x.renderAll();const m=els.main.innerHTML;if(/undefined|bNaNb/.test(m))E(t+' tab contains undefined/NaN')}
for(const t of x.TOPICS){x.st.tab='practice';x.st.topic=t.id;x.renderAll();if(/undefined|bNaNb/.test(els.main.innerHTML))E('topic '+t.id+' renders undefined/NaN');if(!x.CONCEPT[t.id])E('no CONCEPT for '+t.id);if(!x.CHAPTER.find(s=>s.id===x.TOPIC_SEC[t.id]))E('TOPIC_SEC missing/invalid for '+t.id)}
const ids=new Set();const need={mcq:['opts','ans'],fill:['blanks'],match:['left','right','ans'],toggle:['items'],multi:['opts','ans'],word:['accept','ansText'],open:['model'],num:['parts']};
for(const q of x.Q){if(ids.has(q.id))E('dup id '+q.id);ids.add(q.id);
 for(const f of ['id','t','src','ref','type','q'])if(q[f]==null)E(q.id+' missing '+f);
 if(!x.TOPICS.find(t=>t.id===q.t))E(q.id+' bad topic '+q.t);
 if(!/p\.\d+/.test(q.src))E(q.id+' src needs p.NN');
 for(const f of need[q.type]||['?'])if(q[f]==null)E(q.id+' ('+q.type+') missing '+f);
 if(q.type==='num')q.parts.forEach((p,i)=>{if(typeof p.a==='number'&&!isFinite(p.a))E(q.id+' part '+i+' bad a');const s=typeof p.a==='string'?p.a:(p.show||String(p.a));if(!x.partOk(p,s))E(q.id+' part '+i+' own answer "'+s+'" does not pass grading')});
 if(q.type==='mcq'&&!(q.ans>=0&&q.ans<q.opts.length))E(q.id+' mcq ans out of range');
}
const pages={};x.Q.forEach(q=>{const p=q.src.match(/p\.(\d+)/)[1];pages[p]=(pages[p]||0)+1});
console.log(err?`${err} problem(s)`:'OK', '| questions:',x.Q.length,'| topics:',x.TOPICS.length,'| sections:',x.CHAPTER.length,'| per page:',JSON.stringify(pages));
