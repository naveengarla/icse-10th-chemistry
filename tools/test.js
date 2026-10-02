// Runs every check. Usage (from the repo root): npm test   (or: node tools/test.js)
// 1) each practice data file listed in data/chapters.js → tools/smoke.js
// 2) data/chapters.js links point at real files
// 3) the Lab page → tools/labsmoke.js
// 4) every HTML page loads without errors and its links resolve → tools/pages.js
const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const root=path.join(__dirname,'..');process.chdir(root);
let fail=0;
const run=(label,args)=>{try{const out=execFileSync(process.execPath,args,{encoding:'utf8'});console.log('✔',label.padEnd(26),out.trim().split('\n').pop())}
 catch(e){fail++;console.log('✘',label);console.log(((e.stdout||'')+(e.stderr||'')).trim())}};
const CHAPTERS=new Function(fs.readFileSync('data/chapters.js','utf8')+';return CHAPTERS')();
for(const c of CHAPTERS.filter(c=>c.f)){
 if(!fs.existsSync(path.join('chapters',c.f))){fail++;console.log('✘ missing page chapters/'+c.f);continue}
 if(c.lab)continue;
 const html=fs.readFileSync(path.join('chapters',c.f),'utf8'),ds=[...html.matchAll(/src="\.\.\/(data\/[^"]+\.js)"/g)].map(m=>m[1]);
 if(!ds.length){fail++;console.log('✘ no data script in chapters/'+c.f);continue}
 const page=ds[ds.length-1],data=fs.readFileSync(page,'utf8');   // helpers (e.g. data/electro-common.js) first, page data last
 if(!data.includes(`key:'${c.key}'`)){fail++;console.log(`✘ ${page} PAGE.key is not '${c.key}' (chapters.js)`)}
 run(page,[path.join('tools','smoke.js'),...ds]);
}
run('lab widgets',[path.join('tools','labsmoke.js')]);
run('pages & links',[path.join('tools','pages.js')]);
console.log(fail?`\n${fail} problem(s)`:'\nAll checks passed');process.exit(fail?1:0);
