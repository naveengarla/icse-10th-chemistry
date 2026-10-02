// Usage (from the repo root):  node tools/labsmoke.js [widgetId]
// Loads every chapters/*lab.html in jsdom, mounts each widget (or just one), pokes every input/select/button,
// and fails on exceptions, console errors, or 'NaN' / 'undefined' / 'Infinity' in visible text.
const fs=require('fs'),path=require('path'),{JSDOM,VirtualConsole}=require('jsdom');
const root=process.cwd(),only=process.argv[2];
const errs=[];const vc=new VirtualConsole();
vc.on('jsdomError',e=>errs.push('jsdomError: '+(e.detail&&e.detail.stack||e.message)));
vc.on('error',(...a)=>errs.push('console.error: '+a.join(' ')));
let problems=[];
(async()=>{
 for(const page of fs.readdirSync(path.join(root,'chapters')).filter(f=>f.endsWith('lab.html'))){
 const dom=await JSDOM.fromFile(path.join(root,'chapters',page),{runScripts:'dangerously',resources:'usable',pretendToBeVisual:true,virtualConsole:vc,url:'file:///'+root.split(path.sep).join('/')+'/chapters/'+page});
 await new Promise(r=>dom.window.addEventListener('load',r));
 const w=dom.window,d=w.document;
 if(!w.LAB){console.log('FAIL: LAB not defined',errs);process.exit(1)}
 const ids=w.LAB.list.map(x=>x.id);console.log(page+' widgets:',ids.join(', '));
 const bad=t=>/\bNaN\b|undefined|Infinity|\[object/.test(t);
 for(const id of ids){
  if(only&&id!==only)continue;
  const before=errs.length;
  w.location.hash='#'+id;w.dispatchEvent(new w.HashChangeEvent('hashchange'));
  const el=d.querySelector('.lab');
  if(!el||!el.innerHTML.trim()){problems.push(id+': empty');continue}
  const check=stage=>{const t=d.getElementById('main').textContent;if(bad(t))problems.push(`${id} after ${stage}: bad text near "${t.match(/.{0,60}(NaN|undefined|Infinity|\[object).{0,40}/s)?.[0]}"`)};
  check('mount');
  // selects: try every option
  for(const s of [...el.querySelectorAll('select')]){for(let i=0;i<s.options.length;i++){s.selectedIndex=i;s.dispatchEvent(new w.Event('change',{bubbles:true}));s.dispatchEvent(new w.Event('input',{bubbles:true}));check('select '+(s.id||s.name)+'='+s.value)}}
  // ranges: min, max, mid
  for(const r of [...el.querySelectorAll('input[type=range]')]){for(const v of [r.min||0,r.max||100,((+r.min||0)+(+r.max||100))/2]){r.value=v;r.dispatchEvent(new w.Event('input',{bubbles:true}));r.dispatchEvent(new w.Event('change',{bubbles:true}));check('range '+(r.id||'')+'='+v)}}
  // text/number inputs: a normal value, then garbage, then empty (widget must cope gracefully)
  for(const inp of [...el.querySelectorAll('input[type=text],input[type=number],input:not([type])')]){for(const v of ['12','abc','']){inp.value=v;inp.dispatchEvent(new w.Event('input',{bubbles:true}));inp.dispatchEvent(new w.Event('change',{bubbles:true}));if(v==='12')check('input '+(inp.id||'')+'=12')}inp.value='12';inp.dispatchEvent(new w.Event('input',{bubbles:true}))}
  // buttons/chips: click each once (re-query since DOM may re-render)
  for(let k=0;k<60;k++){const b=[...d.querySelectorAll('.lab button')][k];if(!b)break;b.click();check('click "'+b.textContent.trim().slice(0,25)+'"')}
  await new Promise(r=>setTimeout(r,1500)); // let animations/timers run
  check('timers');
  if(errs.length>before)problems.push(id+': '+errs.slice(before).join('\n   '));
  console.log(id.padEnd(12),'text chars:',d.getElementById('main').textContent.length,'svg:',el.querySelectorAll('svg').length);
 }
 w.close();
 }
 if(errs.length&&!problems.length)problems.push(...errs);
 console.log(problems.length?'PROBLEMS:\n - '+[...new Set(problems)].slice(0,30).join('\n - '):'OK');
 process.exit(problems.length?1:0);
})();
