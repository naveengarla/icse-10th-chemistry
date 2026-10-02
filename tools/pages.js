// Loads index.html and every chapters/*.html in jsdom: fails on script errors or links to missing files.
// Usage (from the repo root): node tools/pages.js
const path=require('path'),fs=require('fs'),{JSDOM,VirtualConsole}=require('jsdom');
const root=path.join(__dirname,'..');
(async()=>{
 let bad=0;
 const files=['index.html',...fs.readdirSync(path.join(root,'chapters')).filter(f=>f.endsWith('.html')).map(f=>'chapters/'+f)];
 for(const f of files){
  const abs=path.join(root,f),errs=[],vc=new VirtualConsole();
  vc.on('jsdomError',e=>errs.push(e.message));vc.on('error',(...a)=>errs.push(a.join(' ')));
  const dom=await JSDOM.fromFile(abs,{runScripts:'dangerously',resources:'usable',pretendToBeVisual:true,virtualConsole:vc,
   beforeParse(w){const m={};Object.defineProperty(w,'localStorage',{value:{getItem:k=>k in m?m[k]:null,setItem:(k,v)=>{m[k]=String(v)},removeItem:k=>{delete m[k]}}})}, // jsdom has no localStorage on file://
   url:'file:///'+abs.split(path.sep).join('/')});
  await new Promise(r=>dom.window.addEventListener('load',r));
  const d=dom.window.document;
  const refs=[...d.querySelectorAll('a[href],script[src],link[href]')].map(e=>e.getAttribute('href')||e.getAttribute('src'))
   .filter(h=>!/^(#|blob:|https?:|mailto:|\.\.\/book\/)/.test(h));   // book/ scans are local only (git-ignored)
  const broken=refs.filter(h=>!fs.existsSync(path.join(path.dirname(abs),decodeURI(h.split('#')[0]))));
  const empty=!d.body.textContent.trim();
  if(errs.length||broken.length||empty){bad++;console.log('✘',f,errs.slice(0,3).join(' | '),broken.length?'broken: '+broken.join(', '):'',empty?'(blank page)':'')}
  dom.window.close();
 }
 console.log(bad?`${bad} page(s) with problems`:`OK | ${files.length} pages load, all links resolve`);process.exit(bad?1:0);
})();
