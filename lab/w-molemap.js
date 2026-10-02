/* Mole Map converter: mass ↔ MOLES ↔ molecules ↔ volume at s.t.p. (+ atoms).
   Pick a substance, say what you know, and the route through MOLES lights up. */
LAB.add({id:'molemap',icon:'🗺️',name:'Mole Map converter',
 blurb:'mass ↔ moles ↔ molecules ↔ litres',ref:'p.76–84 · practice page 4.2',
 mount(el){
  /* ---------- data ---------- */
  // [formula, is it a gas at s.t.p.?]
  const PRESETS=[['CO2',1],['H2O',0],['NH3',1],['O2',1],['N2',1],['HCl',1],['CH4',1],['NaCl',0],['CaCO3',0],['H2SO4',0]];
  const KNOWN={mass:['mass','g'],moles:['moles','mol'],molecules:['number of molecules',''],volume:['volume at s.t.p.','L']};
  const st={f:'CO2',preset:'CO2',custom:false,cgas:true,known:'volume',val:'2.8'};
  let lastRoute='';

  /* ---------- one-time styles ---------- */
  if(!document.getElementById('st-molemap')){
   const s=document.createElement('style');s.id='st-molemap';
   s.textContent=`#w-molemap .mm-lit{stroke-dasharray:400;stroke-dashoffset:0}
#w-molemap .mm-go .mm-lit{animation:mmDraw .9s ease-out}
@keyframes mmDraw{from{stroke-dashoffset:400}to{stroke-dashoffset:0}}
#w-molemap .mm-res td:first-child{text-align:left}
#w-molemap .bigidea{background:#eef2ff;border-radius:10px;padding:8px 14px;margin-top:12px}`;
   document.head.appendChild(s);
  }

  /* ---------- layout ---------- */
  el.innerHTML=`
<p class="tip" style="font-size:15px">🎯 <b>What to try:</b> pick a substance, choose what you know, type a number, and follow the glowing route <b>through MOLES</b>.</p>
<div class="row" id="mmChips">${PRESETS.map(([f])=>`<button class="chip" data-f="${f}">${sub(f)}</button>`).join('')}</div>
<div class="row"><label for="mmF">or type any formula:</label><input type="text" id="mmF" placeholder="e.g. Cl2, C2H6, NaOH" style="width:150px">
 <label><input type="checkbox" id="mmGas" checked> this is a gas</label></div>
<div class="row"><label for="mmK">I know the</label>
 <select id="mmK">${Object.entries(KNOWN).map(([k,[t,u]])=>`<option value="${k}">${t}${u?' ('+u+')':''}</option>`).join('')}</select>
 <input type="text" id="mmV" style="width:150px"> <span id="mmU"></span></div>
<div id="mmMsg"></div>
<div id="mmSvg"></div>
<table class="t mm-res" id="mmOut"></table>
<div class="work" id="mmWork"></div>
<div id="mmTry"></div>
<p class="idea">💡 <b>Big idea:</b> you can never jump straight from grams to litres or to molecules — always go <b>through moles</b> first.</p>`;
  const $=id=>el.querySelector('#'+id);
  $('mmK').value=st.known;$('mmV').value=st.val;

  /* ---------- chemistry ---------- */
  function calc(){
   const r={err:'',f:st.f};
   try{r.counts=parseFormula(st.f);r.M=molarMass(st.f)}catch(e){r.err='Hmm, I can’t read that formula. Use capital letters for elements, e.g. Cl2, CaCO3, Ca(OH)2.'}
   if(!r.err&&!(r.M>0))r.err='Type a formula like Cl2 or C2H6.';
   r.gas=st.custom?st.cgas:!!PRESETS.find(p=>p[0]===st.f)[1];
   if(r.err)return r;
   r.k=Object.values(r.counts).reduce((a,b)=>a+b,0);
   const x=readNum(st.val);
   if(!isFinite(x)){r.err='Type a number in the box (e.g. 2.8 or 6.023x10^23).';return r}
   if(x<=0){r.err='Type a number bigger than 0.';return r}
   if(st.known==='volume'&&!r.gas){r.err='⚠️ 22.4 L only for gases at s.t.p. — '+sub(st.f)+' is not a gas there. Choose mass, moles or molecules instead.';return r}
   r.x=x;
   r.n={mass:x/r.M,moles:x,molecules:x/NA,volume:x/VM}[st.known];
   r.mass=r.n*r.M;r.mol=r.n*NA;r.vol=r.n*VM;r.atoms=r.mol*r.k;
   return r;
  }
  // "M(CO₂) = 12 + 2 × 16 = 44"
  const mExpr=r=>`M(${sub(r.f)}) = `+Object.entries(r.counts).map(([e,c])=>c>1?`${c} × ${AM[e]}`:`${AM[e]}`).join(' + ')+` = ${fmt(r.M)}`;

  /* ---------- SVG map ---------- */
  const LIT='#f59e0b',DIM='#cbd5e1';
  const arrow=(x1,y1,x2,y2,on)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${on?LIT:DIM}" stroke-width="${on?4:2}" ${on?'class="mm-lit"':''} marker-end="url(#mmA${on?1:0})"/>`;
  const txt=(x,y,t,sz=13,col='#374151',w=400,anc='middle')=>`<text x="${x}" y="${y}" font-size="${sz}" fill="${col}" font-weight="${w}" text-anchor="${anc}" dominant-baseline="central" font-family="Segoe UI,sans-serif">${t}</text>`;
  function box(x,y,w,h,title,val,mode){ // mode: known | hub | off | normal
   const fill={known:'#dbeafe',hub:'#fde68a',off:'#f1f5f9',normal:'#ecfdf5'}[mode];
   const stroke={known:'#2563eb',hub:'#d97706',off:'#94a3b8',normal:'#059669'}[mode];
   return `<rect x="${x-w/2}" y="${y-h/2}" width="${w}" height="${h}" rx="12" fill="${fill}" stroke="${stroke}" stroke-width="${mode==='known'?3:1.5}" ${mode==='off'?'stroke-dasharray="6 4"':''}/>`+
    txt(x,y-14,title,13,mode==='off'?'#94a3b8':'#1f2937',700)+txt(x,y+12,val,14,mode==='off'?'#94a3b8':'#111827',600)+
    (mode==='known'?txt(x,y-h/2-10,'you know this',11.5,'#2563eb',600):'');
  }
  function drawMap(r){
   const ok=!r.err, K=st.known, M=ok||r.M>0?fmt(r.M)+' g':'M';
   const inn=q=>ok&&K===q, out=q=>ok&&K!==q&&(q!=='volume'||r.gas);
   const v=(q,val)=>ok?val:'?';
   const mode=q=>K===q&&ok?'known':(q==='volume'&&!r.gas?'off':'normal');
   let s=`<defs>${[0,1].map(i=>`<marker id="mmA${i}" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="${i?LIT:DIM}"/></marker>`).join('')}</defs>`;
   s+=txt(20,22,'Always go THROUGH moles',14,'#6b7280',600,'start');
   // mass ↔ moles
   s+=arrow(168,176,268,176,inn('mass'))+arrow(268,204,168,204,out('mass'));
   s+=txt(218,158,'÷ '+M,13,'#b45309',600)+txt(218,222,'× '+M,13,'#047857',600);
   // moles ↔ molecules
   s+=arrow(532,176,432,176,inn('molecules'))+arrow(432,204,532,204,out('molecules'));
   s+=txt(482,158,'÷ 6.023×10²³',12.5,'#b45309',600)+txt(482,222,'× 6.023×10²³',12.5,'#047857',600);
   // moles ↔ volume
   s+=arrow(335,292,335,226,inn('volume'))+arrow(365,226,365,292,out('volume'));
   s+=txt(325,259,'÷ 22.4 L',13,'#b45309',600,'end')+txt(375,259,'× 22.4 L',13,'#047857',600,'start');
   // molecules → atoms
   s+=arrow(610,152,610,96,ok);
   s+=txt(612,124,`× ${ok?r.k:'k'} atoms each`,12.5,'#047857',600,'end');
   // boxes
   s+=box(350,190,160,64,'MOLES (n)',v('moles',fmt(r.n)+' mol'),'hub');
   s+=box(90,190,150,70,'MASS',v('mass',fmt(r.mass)+' g'),mode('mass'));
   s+=box(610,190,150,70,'MOLECULES',v('molecules',fmt(r.mol)),mode('molecules'));
   s+=box(350,325,190,62,'VOLUME at s.t.p.',r.gas?v('volume',fmt(r.vol)+' L'):'not a gas',mode('volume'));
   s+=box(610,62,150,58,'ATOMS',v('atoms',fmt(r.atoms)),'normal');
   if(!r.gas)s+=txt(350,372,'22.4 L only for gases at s.t.p.',12.5,'#b91c1c',600);
   const key=[K,r.gas,ok,st.f].join('|'),go=key!==lastRoute;lastRoute=key;
   return `<svg viewBox="0 0 700 385" class="${go?'mm-go':''}" style="max-width:760px">${s}</svg>`;
  }

  /* ---------- working + results ---------- */
  function work(r){
   const L=[],x=r.x,un=fmt(r.n);
   L.push(mExpr(r)+` → 1 mole of ${sub(r.f)} = ${fmt(r.M)} g`);
   if(st.known==='mass')L.push(`Moles = mass ÷ M = ${fmt(x)} g ÷ ${fmt(r.M)} g = <b>${un} mol</b>`);
   if(st.known==='moles')L.push(`Moles = <b>${un} mol</b> (given)`);
   if(st.known==='molecules')L.push(`Moles = ${fmt(x)} ÷ 6.023 × 10²³ = <b>${un} mol</b>`);
   if(st.known==='volume')L.push(`Moles = ${fmt(x)} L ÷ 22.4 L = <b>${un} mol</b>`);
   if(st.known!=='mass')L.push(`Mass = ${un} mol × ${fmt(r.M)} g = <b>${fmt(r.mass)} g</b>`);
   if(st.known!=='molecules')L.push(`Molecules = ${un} × 6.023 × 10²³ = <b>${fmt(r.mol)}</b>`);
   if(st.known!=='volume')L.push(r.gas?`Volume at s.t.p. = ${un} × 22.4 L = <b>${fmt(r.vol)} L</b>`
     :`Volume: <i>skip it</i> — ${sub(r.f)} is not a gas at s.t.p., so 22.4 L does not apply.`);
   const parts=Object.entries(r.counts).map(([e,c])=>`${c} ${e}`).join(' + ');
   L.push(`Each ${sub(r.f)} has ${parts} = ${r.k} atoms → atoms = ${r.k} × ${fmt(r.mol)} = <b>${fmt(r.atoms)}</b>`);
   return '<b>Working (book style)</b><ol>'+L.map(l=>`<li>${l}</li>`).join('')+'</ol>'+
    (/^(NaCl|CaCO3)$/.test(r.f)?'<p class="tip">NaCl and CaCO₃ are ionic: their “molecules” are really formula units, but the book counts them the same way.</p>':'');
  }
  function render(){
   const r=calc();
   el.querySelectorAll('#mmChips .chip').forEach(b=>b.classList.toggle('on',!st.custom&&b.dataset.f===st.f));
   $('mmGas').disabled=!st.custom;
   if(!st.custom)$('mmGas').checked=!!PRESETS.find(p=>p[0]===st.f)[1];
   $('mmU').textContent=KNOWN[st.known][1];
   $('mmMsg').innerHTML=r.err?`<div class="warnbox">${r.err}</div>`:(!r.gas?'<div class="warnbox">🧊 '+sub(st.f)+' is not a gas at s.t.p. — the volume box is greyed out. <b>22.4 L only for gases at s.t.p.</b></div>':'');
   $('mmSvg').innerHTML=drawMap(r);
   if(r.err){$('mmOut').innerHTML='';$('mmWork').innerHTML='<b>Working</b><p class="tip">Fix the input above and the steps appear here.</p>';return}
   $('mmOut').innerHTML='<tr><th>Quantity</th><th>Value</th></tr>'+tr(
    ['Molar mass M',fmt(r.M)+' g/mol'],['Mass',fmt(r.mass)+' g'],['Moles',fmt(r.n)+' mol'],['Molecules',fmt(r.mol)],
    ['Volume at s.t.p.',r.gas?fmt(r.vol)+' L':'— (not a gas)'],['Atoms',fmt(r.atoms)]);
   $('mmWork').innerHTML=work(r);
  }

  /* ---------- events ---------- */
  $('mmChips').addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;
   st.f=st.preset=b.dataset.f;st.custom=false;$('mmF').value='';render()});
  $('mmF').addEventListener('input',e=>{const v=e.target.value.trim();
   if(v){st.custom=true;st.f=v}else{st.custom=false;st.f=st.preset}render()});
  $('mmGas').addEventListener('change',e=>{st.cgas=e.target.checked;render()});
  $('mmK').addEventListener('change',e=>{st.known=e.target.value;render()});
  $('mmV').addEventListener('input',e=>{st.val=e.target.value;render()});

  /* ---------- try this (book problems, numbers checked with chem.js) ---------- */
  const TRY=[
   ['Pick CO₂, choose <i>volume at s.t.p.</i>, type 2.8. Predict the mass before you look! <span class="tip">(book p.86 Q.2 (1))</span>',
    '2.8 L ÷ 22.4 L = 0.125 mol; 0.125 × 44 g = <b>5.5 g</b>.'],
   ['Pick H₂SO₄, type 294 g. How many moles, molecules and atoms? Why is the volume box grey? <span class="tip">(book p.82 solved ex.11)</span>',
    '294 ÷ 98 = <b>3 mol</b>; molecules = 3 × 6.023 × 10²³ = 1.807 × 10²⁴; each H₂SO₄ has 7 atoms → atoms = 21 × 6.023 × 10²³ = <b>1.265 × 10²⁵</b>. H₂SO₄ is a liquid, so 22.4 L does not apply.'],
   ['Pick NH₃, choose volume, type 10. Guess the number of atoms. <span class="tip">(book p.86 Q.2 (16))</span>',
    '10 ÷ 22.4 = 0.4464 mol → molecules = 2.689 × 10²³; 4 atoms each → <b>1.076 × 10²⁴ atoms</b> (= 1.786 × 6.023 × 10²³).'],
   ['Type the formula Cl2, tick “this is a gas”, choose mass and type 53.5. What volume at s.t.p.? <span class="tip">(book p.86 Q.2 (2))</span>',
    'M(Cl₂) = 71 → 53.5 ÷ 71 = 0.7535 mol; 0.7535 × 22.4 L = <b>16.88 L</b>.']];
  $('mmTry').innerHTML=TRY.map(([q,a])=>`<details class="try"><summary>🎯 Try this: ${q}</summary><p>✅ ${a}</p></details>`).join('');

  render();
 }});
