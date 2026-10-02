/* Shared practice engine. A data file must define, before this script loads:
   PAGE    {key, title, lab?:'mole-lab.html' (adds a 🧪 Lab link), formulas?:html, pages?:{86:'description', ...}}
   TOPICS  [{id, name, ref}]
   CONCEPT {topicId: html}          (shown on each card's 📘 Concept)
   CHAPTER [{id, title, ref, t:[topicIds], html}]   (Concepts tab, book order)
   TOPIC_SEC {topicId: chapterSectionId}
   Q       [{id, t, src, ref, type, q, hint, steps?, exp?, ...type fields}]
   Types: mcq, fill, match, toggle, multi, word, open (same as Bonding) and
   num: parts:[{l:'label', a:Number|'text', u:'unit', tol?:0.02}]
   PAGE.book {dir, from, to} (optional): page numbers in refs link to book/<dir>/p<N>.jpg (tools/book.py).
   Those scans are local only, so the links appear only when the page is opened from disk.          */

/* ---------------- State ---------------- */
const KEY=PAGE.key;
const st=Object.assign({s:{},m:{},a:{},drill:[],tab:'practice',topic:TOPICS[0].id,filter:'all'},JSON.parse(localStorage.getItem(KEY)||'{}'));
const byId=Object.fromEntries(Q.map(q=>[q.id,q]));
const tname=id=>TOPICS.find(t=>t.id===id).name;
const save=()=>{localStorage.setItem(KEY,JSON.stringify(st));localStorage.setItem(KEY+'-sum',JSON.stringify({done:Q.filter(q=>st.s[q.id]==='ok').length,total:Q.length}))};

/* ---------------- Number parsing for numericals ---------------- */
const SUP={'⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁻':'-'};
function parseNum(s){
  s=String(s).trim().replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+/g,m=>'^('+[...m].map(c=>SUP[c]).join('')+')')
   .replace(/(\d|\))\s*[x×✕*·]\s*(?=[\d(])/g,'$1*').replace(/,/g,'').replace(/\^/g,'**')
   .replace(/(?<![\d.])[eE]|[eE](?![\d+\-])|[a-df-zA-DF-Z%°]/g,'').replace(/\s+/g,'');
  if(!s||!/^[\d.eE+\-*/()]+$/.test(s))return NaN;
  try{return Function('return ('+s+')')()}catch(e){return NaN}
}
const normTxt=s=>String(s).toLowerCase().replace(/[₀-₉]/g,c=>'0123456789'['₀₁₂₃₄₅₆₇₈₉'.indexOf(c)]).replace(/[\s.\[\]]/g,'');
function partOk(p,v){
  if(typeof p.a==='string')return [p.a,...(p.alt||[])].some(x=>normTxt(x)===normTxt(v));
  const n=parseNum(v);return isFinite(n)&&Math.abs(n-p.a)<=(p.tol??0.02)*Math.abs(p.a||1);
}
const showNum=p=>typeof p.a==='string'?p.a:(p.show||p.a);

/* ---------------- Rendering ---------------- */
const BOOK=PAGE.book&&typeof location!=='undefined'&&location.protocol==='file:'?PAGE.book:null;
const bookRef=r=>BOOK?r.replace(/\d+/g,n=>n>=BOOK.from&&n<=BOOK.to?`<a href="../book/${BOOK.dir}/p${n}.jpg" target="_blank" title="Open the book page">${n}</a>`:n):r;
function body(q){
  const id=q.id;
  if(q.type==='mcq')return `<div class="opts">${q.opts.map((o,i)=>`<button class="opt" data-act="opt" data-id="${id}" data-i="${i}">${String.fromCharCode(97+i)}) ${o}</button>`).join('')}</div>`;
  if(q.type==='fill')return `<div class="q">${q.q.replace(/\{(\d+)\}/g,(_,n)=>`<select data-b="${n}"><option value="">— choose —</option>${q.blanks[n].o.map((o,i)=>`<option value="${i}">${o}</option>`).join('')}</select>`)}</div>`;
  if(q.type==='match')return q.left.map((l,i)=>`<div class="row"><span class="eq">${l}</span><select data-b="${i}"><option value="">— match —</option>${q.right.map((r,j)=>`<option value="${j}">${r}</option>`).join('')}</select></div>`).join('');
  if(q.type==='toggle')return q.items.map((it,i)=>`<div class="row"><span class="eq">${it[0]}</span><span class="tg" data-b="${i}"><button data-act="tog" data-v="0">${q.labels?.[0]||'O'}</button><button data-act="tog" data-v="1">${q.labels?.[1]||'R'}</button></span></div>`).join('');
  if(q.type==='multi')return `<div class="multi">${q.opts.map((o,i)=>`<label><input type="checkbox" value="${i}"> ${o}</label>`).join('')}</div>`;
  if(q.type==='word')return `<input type="text" style="width:min(420px,100%)" placeholder="Type your answer…">`;
  if(q.type==='open')return `<textarea placeholder="Write your answer first, then compare with the model answer…"></textarea>`;
  if(q.type==='num')return `<div class="given">Work it out in your notebook, then type the result. You can type 5.5, 0.75 × 6.023 × 10^23, or 1.8e24.</div>`+
    q.parts.map((p,i)=>`<div class="np"><span class="pl">${p.l}</span><input type="text" data-b="${i}" placeholder="${typeof p.a==='string'?'formula / word':'number'}"><span class="u">${p.u||''}</span></div>`).join('');
}
function finalHTML(q){
  if(q.type==='mcq')return `<b>Answer: ${String.fromCharCode(97+q.ans)}) ${q.opts[q.ans]}</b>`;
  if(q.type==='fill')return `<b>Answer:</b> ${q.blanks.map((b,i)=>`(${i+1}) ${b.o[b.a]}`).join(' · ')}`;
  if(q.type==='match')return `<b>Answer:</b> ${q.left.map((l,i)=>`${l.split(']')[0]}] → ${q.right[q.ans[i]]}`).join('<br>')}`;
  if(q.type==='toggle')return `<b>Answer:</b> ${q.items.map(it=>`${it[0].split(']')[0]}] ${(q.labels||['O','R'])[it[1]]}`).join(' · ')}`;
  if(q.type==='multi')return `<b>Answer:</b> ${q.ans.map(i=>q.opts[i]).join(', ')}`;
  if(q.type==='word')return `<b>Answer:</b> ${q.ansText}`;
  if(q.type==='num')return `<b>Answer:</b> ${q.parts.map(p=>`${q.parts.length>1?p.l+' ':''}<b>${showNum(p)}</b> ${p.u||''}`).join(' · ')}`;
  if(q.type==='open')return `<b>Model answer</b><br>${q.model}`;
}
function answerHTML(q){
  const self=q.type==='open'?`<div class="self">How did you do? <button class="y" data-act="self" data-v="ok">✓ I got it</button><button class="n" data-act="self" data-v="bad">✗ Need to revise</button></div>`:'';
  const exp=q.exp?`<div style="margin-top:6px">${q.exp}</div>`:'';
  if(!q.steps)return finalHTML(q)+exp+self;
  const items=[...q.steps.map(s=>`<li>${s}</li>`),`<li class="fin">${finalHTML(q)}</li>`];
  return `<b>Solution, one step at a time</b> <span class="key">Try to finish it yourself after each step!</span>
  <ol class="sol">${items.map((li,i)=>i?li.replace('<li','<li hidden'):li).join('')}</ol>
  <div class="stepbtns"><button data-act="nextstep">Next step ▸</button><button data-act="allsteps">Show all</button></div>${exp}${self}`;
}
function badge(id){const s=st.s[id];return s==='ok'?(st.m[id]?'<span class="badge m">✓ done (missed once)</span>':'<span class="badge ok">✓ mastered</span>'):s==='bad'?'<span class="badge bad">↻ revise</span>':'<span class="badge"></span>'}
function card(q,showTopic){
  const chk=q.type==='mcq'||q.type==='open'?'':`<button class="chk" data-act="check">Check</button>`;
  const ans=q.type==='open'?'Show model answer':q.steps?'Show solution':'Show answer';
  return `<div class="card ${st.s[q.id]||''}" id="c-${q.id}" data-id="${q.id}">
  <div class="meta"><span class="src">${q.src}</span><span class="ref">📖 Textbook ${bookRef(q.ref)}</span>${q.solved?'<span class="solved">solved example in the book: try it before looking!</span>':''}${showTopic?`<span class="ref" style="background:#f3f4f6;color:#374151">${tname(q.t)}</span>`:''}${badge(q.id)}</div>
  ${q.type==='fill'?'':`<div class="q">${q.q}</div>`}
  <div class="body">${body(q)}</div>
  <div class="actions">${chk}<button data-act="hint">💡 Hint</button><button data-act="concept">📘 Concept</button><button data-act="answer">${ans}</button><button data-act="reset">↺ Reset</button></div>
  <div class="fb"></div>
  <div class="hint" hidden>💡 ${q.hint||'Read the 📘 Concept, then try again.'}</div>
  <div class="concept" hidden>${CONCEPT[q.t]||''}${TOPIC_SEC[q.t]?`<p><button class="opt" style="width:auto" data-act="goconcept" data-v="${TOPIC_SEC[q.t]}">📚 Read the full textbook section in Concepts →</button></p>`:''}</div>
  <div class="ans" hidden>${answerHTML(q)}</div></div>`;
}
function stats(list){const ok=list.filter(q=>st.s[q.id]==='ok').length;return {ok,n:list.length}}
function renderHeader(){
  document.querySelector('header').innerHTML=`<a class="home" href="../index.html">🏠 All chapters</a>${PAGE.lab?`<a class="home" href="${PAGE.lab}">🧪 Lab</a>`:''}<h1>${PAGE.title}</h1>
  <div class="tabs"><button data-act="tab" data-v="practice">Practice</button><button data-act="tab" data-v="concepts">Concepts</button><button data-act="tab" data-v="drill">🎯 Mixed drill</button><button data-act="tab" data-v="coverage">All questions</button></div>
  ${PAGE.formulas?'<button class="fsbtn" data-act="fs">📐 Formulas</button>':''}
  <div class="prog"><span id="ptxt"></span><div class="bar"><i id="pbar"></i></div></div>`;
  if(PAGE.formulas){const d=document.createElement('div');d.id='fs';d.hidden=true;d.innerHTML=`<div style="text-align:right"><button class="fsbtn" data-act="fs">✕ Close</button></div>${PAGE.formulas}`;document.body.appendChild(d)}
  document.title=PAGE.title.replace(/<[^>]+>/g,'');
}
function renderTop(){
  const {ok,n}=stats(Q);document.getElementById('ptxt').textContent=`${ok} / ${n} done`;document.getElementById('pbar').style.width=(100*ok/n)+'%';
  document.querySelectorAll('.tabs button').forEach(b=>b.classList.toggle('on',b.dataset.v===st.tab));
}
function renderNav(){
  const nav=document.getElementById('nav');
  if(st.tab==='concepts'){nav.style.display='';nav.innerHTML=CHAPTER.map(s=>`<button data-act="goconcept" data-v="${s.id}">${s.title}<small>📖 ${s.ref}</small></button>`).join('');return}
  if(st.tab!=='practice'){nav.innerHTML='';nav.style.display='none';return}
  nav.style.display='';
  nav.innerHTML=TOPICS.map(t=>{const l=Q.filter(q=>q.t===t.id),{ok,n}=stats(l),bad=l.filter(q=>st.s[q.id]==='bad').length;
   return `<button data-act="topic" data-v="${t.id}" class="${st.topic===t.id?'on':''}">${t.name}<small>${ok}/${n} done${bad?` · <span style="color:#dc2626">${bad} to revise</span>`:''} · ${t.ref}</small><div class="mini"><i style="width:${n?100*ok/n:0}%"></i></div></button>`}).join('');
}
// Drill priority: wrong → not tried → missed once → mastered
function newDrill(){
  const rank=q=>st.s[q.id]==='bad'?0:!st.s[q.id]?1:st.m[q.id]?2:3;
  st.drill=Q.map(q=>({q,k:rank(q)+Math.random()})).sort((a,b)=>a.k-b.k).slice(0,10).map(x=>x.q.id).sort(()=>Math.random()-.5);
  save();
}
const pg=q=>+(q.src.match(/p\.(\d+)/)||[0,0])[1];
function renderMain(){
  const m=document.getElementById('main');
  if(st.tab==='concepts'){
    m.innerHTML=`<div class="howto">The chapter, section by section, in textbook order. Read a section, then press <b>✍️ Practice</b> to test yourself on it.</div>`+
    CHAPTER.map(s=>`<div class="ccard" id="${s.id}"><div class="meta"><span class="src">${s.title}</span><span class="ref">📖 Textbook ${bookRef(s.ref)}</span></div>${s.html}
    <p>${s.t.map(t=>`<button class="opt" style="width:auto;display:inline-block;margin-right:6px" data-act="topic" data-v="${t}">✍️ Practice: ${tname(t)} (${Q.filter(q=>q.t===t).length}) →</button>`).join('')}</p></div>`).join('');return}
  if(st.tab==='coverage'){
    const pages=[...new Set(Q.map(pg))].sort((a,b)=>a-b);
    const rows=[...Q].sort((a,b)=>pg(a)-pg(b)||Q.indexOf(a)-Q.indexOf(b));
    m.innerHTML=`<div class="howto">Every question on this page, by textbook page, with the topic it is practised under. Click a row to jump to it.
    <table class="cmp" style="margin-top:8px"><tr><th>Book page</th><th>What is on it</th><th>Cards</th></tr>
    ${pages.map(p=>`<tr><td>p.${p}</td><td>${(PAGE.pages||{})[p]||''}</td><td><b>${Q.filter(q=>pg(q)===p).length}</b></td></tr>`).join('')}
    <tr><th colspan="2">Total</th><th>${Q.length}</th></tr></table></div>
    <table class="cmp cov"><tr><th>Source</th><th>Question (start)</th><th>Topic</th><th>Status</th></tr>${rows.map(q=>`<tr data-act="goto" data-v="${q.id}"><td>${q.src}</td><td>${q.q.replace(/<svg[\s\S]*?<\/svg>/g,'').replace(/<[^>]+>/g,' ').replace(/\{\d+\}/g,'___').slice(0,90)}…</td><td>${tname(q.t)}</td><td>${st.s[q.id]==='ok'?'✅':st.s[q.id]==='bad'?'🔁':'—'}</td></tr>`).join('')}</table>`;return}
  if(st.tab==='drill'){
    if(!st.drill.length||st.drill.some(id=>!byId[id]))newDrill();
    const list=st.drill.map(id=>byId[id]),{ok}=stats(list);
    m.innerHTML=`<div class="howto"><b>🎯 Mixed drill:</b> 10 questions from all topics mixed together, like the real exam. Questions you got wrong or haven't tried come first. This drill: <b>${ok}/${list.length}</b> done.</div>
    <p><button class="opt" style="width:auto" data-act="newdrill">🔀 New drill</button></p>${list.map(q=>card(q,true)).join('')}`;
    restore(m);return}
  const t=TOPICS.find(x=>x.id===st.topic)||TOPICS[0];
  let list=Q.filter(q=>q.t===t.id);
  if(st.filter==='todo')list=list.filter(q=>!st.s[q.id]);
  if(st.filter==='rev')list=list.filter(q=>st.s[q.id]==='bad'||st.m[q.id]);
  m.innerHTML=`<div class="howto"><b>How to use:</b> ✍️ Solve it in your notebook first → type the answer and <b>Check</b> → if stuck: 💡 <b>Hint</b> → 📘 <b>Concept</b> → then <b>Show solution</b> one step at a time and finish it yourself. Progress and answers save automatically.</div>
  <div class="thead"><h2>${t.name} <span style="font-size:14px;color:#6b7280">📖 ${t.ref}</span></h2>
  <div class="filters"><button data-act="filter" data-v="all" class="${st.filter==='all'?'on':''}">All</button><button data-act="filter" data-v="todo" class="${st.filter==='todo'?'on':''}">Not done</button><button data-act="filter" data-v="rev" class="${st.filter==='rev'?'on':''}">Revise (wrong once)</button></div></div>
  ${list.length?list.map(q=>card(q)).join(''):'<p>Nothing here 🎉</p>'}
  ${(()=>{const i=TOPICS.indexOf(t);return i<TOPICS.length-1?`<p style="text-align:right"><button class="opt" style="width:auto;display:inline-block" data-act="topic" data-v="${TOPICS[i+1].id}">Next topic: ${TOPICS[i+1].name} →</button></p>`:''})()}`;
  restore(m);
}
function renderAll(){renderTop();renderNav();renderMain()}

/* ---------------- Saving & restoring answers ---------------- */
function capture(c){
  const q=byId[c.dataset.id];let v;
  if(q.type==='fill'||q.type==='match')v=[...c.querySelectorAll('select')].map(s=>s.value);
  else if(q.type==='toggle')v=[...c.querySelectorAll('.tg')].map(g=>{const s=g.querySelector('.sel');return s?s.dataset.v:''});
  else if(q.type==='multi')v=[...c.querySelectorAll('.multi input')].map(i=>i.checked);
  else if(q.type==='word')v=c.querySelector('.body input').value;
  else if(q.type==='num')v=[...c.querySelectorAll('.np input')].map(i=>i.value);
  else if(q.type==='open')v=c.querySelector('textarea').value;
  else if(q.type==='mcq')v=[...c.querySelectorAll('.opt')].map(b=>b.classList.contains('r')?'r':b.classList.contains('w')?'w':'');
  st.a[q.id]=v;save();
}
function restore(root){
  root.querySelectorAll('.card').forEach(c=>{
    const q=byId[c.dataset.id],v=st.a[q.id];
    if(v!=null){
      if(q.type==='fill'||q.type==='match')c.querySelectorAll('select').forEach((s,i)=>s.value=v[i]||'');
      else if(q.type==='toggle')c.querySelectorAll('.tg').forEach((g,i)=>{if(v[i])g.querySelector(`[data-v="${v[i]}"]`).classList.add('sel')});
      else if(q.type==='multi')c.querySelectorAll('.multi input').forEach((x,i)=>x.checked=!!v[i]);
      else if(q.type==='word')c.querySelector('.body input').value=v;
      else if(q.type==='num')c.querySelectorAll('.np input').forEach((x,i)=>x.value=v[i]||'');
      else if(q.type==='open')c.querySelector('textarea').value=v;
      else if(q.type==='mcq')c.querySelectorAll('.opt').forEach((b,i)=>{if(v[i])b.classList.add(v[i])});
      if(st.s[q.id]&&!['mcq','open'].includes(q.type))grade(c,q);
    }
    if(st.s[q.id]==='ok')showAns(c,true);
  });
}
function showAns(c,all){
  const a=c.querySelector('.ans');a.hidden=false;
  if(all){a.querySelectorAll('.sol li').forEach(li=>li.hidden=false);const b=a.querySelector('.stepbtns');if(b)b.hidden=true}
}

/* ---------------- Grading ---------------- */
function setStatus(id,s){st.s[id]=s;if(s==='bad')st.m[id]=true;save();const c=document.getElementById('c-'+id);if(c){c.classList.remove('ok','bad');c.classList.add(s);c.querySelector('.badge').outerHTML=badge(id)}renderTop();renderNav()}
function feedback(c,ok,msg){const f=c.querySelector('.fb');f.className='fb '+(ok?'ok':'bad');f.innerHTML=msg||(ok?'✅ Correct! Well done.':'❌ Not yet. Check your working. Stuck? Open 💡 Hint, then 📘 Concept.');}
function grade(c,q){
  let all=true;
  if(q.type==='fill'||q.type==='match'){c.querySelectorAll('select').forEach(s=>{const b=+s.dataset.b,want=q.type==='fill'?q.blanks[b].a:q.ans[b],ok=s.value!==''&&+s.value===want;s.classList.remove('r','w');s.classList.add(ok?'r':'w');if(!ok)all=false})}
  if(q.type==='toggle'){c.querySelectorAll('.tg').forEach(g=>{const b=+g.dataset.b,sel=g.querySelector('.sel'),ok=sel&&+sel.dataset.v===q.items[b][1];g.classList.remove('r','w');g.classList.add(ok?'r':'w');if(!ok)all=false})}
  if(q.type==='multi'){c.querySelectorAll('label').forEach(l=>{const i=+l.querySelector('input').value,on=l.querySelector('input').checked,want=q.ans.includes(i);l.classList.remove('r','w');if(on||want)l.classList.add(on===want?'r':'w');if(on!==want)all=false})}
  if(q.type==='word'){const inp=c.querySelector('.body input'),v=inp.value.toLowerCase().replace(/[^a-z0-9\- ]/g,'').replace(/\s+/g,' ').trim(),ok=q.accept.includes(v);inp.classList.remove('r','w');inp.classList.add(ok?'r':'w');all=ok}
  if(q.type==='num'){c.querySelectorAll('.np input').forEach(inp=>{const ok=partOk(q.parts[+inp.dataset.b],inp.value);inp.classList.remove('r','w');inp.classList.add(ok?'r':'w');if(!ok)all=false})}
  return all;
}
function check(c,q){
  capture(c);const all=grade(c,q);feedback(c,all,!all&&q.type==='num'?'❌ Not yet. Check units, molar masses and the mole ratio. Stuck? 💡 Hint, or reveal just the first step of the solution.':'');
  if(all){setStatus(q.id,'ok');showAns(c,true)}else setStatus(q.id,'bad');
}

/* ---------------- Events ---------------- */
document.addEventListener('change',e=>{const c=e.target.closest('.card');if(c)capture(c)});
document.addEventListener('input',e=>{const c=e.target.closest('.card');if(c&&e.target.matches('textarea,input[type=text]'))capture(c)});
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.matches('.card input[type=text]')){const c=e.target.closest('.card');check(c,byId[c.dataset.id])}});
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-act]');if(!b)return;
  const act=b.dataset.act,c=b.closest('.card'),q=c&&byId[c.dataset.id];
  if(act==='tab'){st.tab=b.dataset.v;save();renderAll();scrollTo(0,0)}
  else if(act==='fs'){const f=document.getElementById('fs');f.hidden=!f.hidden}
  else if(act==='topic'){st.topic=b.dataset.v;st.tab='practice';st.filter='all';save();renderAll();scrollTo(0,0)}
  else if(act==='filter'){st.filter=b.dataset.v;save();renderMain()}
  else if(act==='newdrill'){newDrill();renderMain();scrollTo(0,0)}
  else if(act==='goconcept'){if(st.tab!=='concepts'){st.tab='concepts';save();renderAll()}const el=document.getElementById(b.dataset.v);el.scrollIntoView({behavior:'smooth'});el.classList.remove('flash');void el.offsetWidth;el.classList.add('flash')}
  else if(act==='goto'){const q2=byId[b.dataset.v];st.tab='practice';st.topic=q2.t;st.filter='all';save();renderAll();const el=document.getElementById('c-'+q2.id);el.scrollIntoView({behavior:'smooth'});el.classList.add('flash')}
  else if(act==='opt'){const i=+b.dataset.i;if(b.classList.contains('r'))return;
    if(i===q.ans){b.classList.add('r');feedback(c,true);if(st.s[q.id]!=='ok')setStatus(q.id,'ok');showAns(c,true)}
    else{b.classList.add('w');feedback(c,false);setStatus(q.id,'bad')}
    capture(c)}
  else if(act==='tog'){b.parentElement.querySelectorAll('button').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');b.parentElement.classList.remove('r','w');capture(c)}
  else if(act==='check')check(c,q);
  else if(act==='hint'){const h=c.querySelector('.hint');h.hidden=!h.hidden}
  else if(act==='concept'){const h=c.querySelector('.concept');h.hidden=!h.hidden}
  else if(act==='nextstep'){const h=c.querySelector('.sol li[hidden]');if(h)h.hidden=false;if(!c.querySelector('.sol li[hidden]'))b.parentElement.hidden=true;revealed(c,q)}
  else if(act==='allsteps'){showAns(c,true);revealed(c,q)}
  else if(act==='answer'){showAns(c,!q.steps);if(!q.steps)revealed(c,q)}
  else if(act==='self'){setStatus(q.id,b.dataset.v);feedback(c,b.dataset.v==='ok',b.dataset.v==='ok'?'✅ Great!':'🔁 Marked for revision. Read the 📘 Concept and try again tomorrow.')}
  else if(act==='reset'){delete st.s[q.id];delete st.a[q.id];save();c.outerHTML=card(q,st.tab==='drill');renderTop();renderNav()}
});
// Seeing the final answer before solving it counts as "revise"
function revealed(c,q){
  const fin=c.querySelector('.sol li.fin');if(fin&&fin.hidden)return;
  if(q.type!=='open'&&st.s[q.id]!=='ok'){setStatus(q.id,'bad');feedback(c,false,'📌 Answer revealed. This card is marked "revise". Press ↺ Reset later and solve it again from memory.')}
}
renderHeader();renderAll();
