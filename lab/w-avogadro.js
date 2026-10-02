/* Avogadro's boxes: equal volumes of gases (same T, P) hold the same number of molecules.
   Three views: boxes + scales, vapour density balance, atomicity (H₂ + Cl₂ → 2HCl). */
LAB.add({id:'avogadro',icon:'📦',name:'Avogadro’s boxes',
 blurb:'same volume = same number of molecules',ref:'p.74, 77–79 · practice page 4.2',
 mount(el){
 /* ---------- data & helpers ---------- */
 const GASES=['H2','O2','Cl2','NH3','CO2','CH4','N2','HCl','SO2','CO','NO2','He','C2H6'];
 const ACOL={H:'#e2e8f0',O:'#ef4444',N:'#3b82f6',Cl:'#84cc16',C:'#374151',S:'#eab308',He:'#f472b6'};
 const AR={H:3.5,He:5,C:5.5,N:5.5,O:5.5,S:6.5,Cl:6.5};
 const M=f=>molarMass(f), sb=f=>sub(f);
 const S={view:'box',V:2,pick:'CO2',vd:'CO2',dalton:false};
 /* draw one molecule centred at (x,y): central atom with the others around it */
 function glyph(f,x,y,k=1){
  const c=parseFormula(f),atoms=[];for(const e in c)for(let i=0;i<c[e];i++)atoms.push(e);
  const at=(e,ax,ay)=>`<circle cx="${ax.toFixed(1)}" cy="${ay.toFixed(1)}" r="${AR[e]*k}" fill="${ACOL[e]}" stroke="#334155" stroke-width="0.9"/>`;
  if(atoms.length===1)return at(atoms[0],x,y);
  const keys=Object.keys(c),centre=keys.find(e=>c[e]===1&&e!=='H')||(keys.length===1?null:keys.find(e=>e!=='H'));
  if(!centre||atoms.length===2){ // same-element or 2 atoms: a row
   const d=(AR[atoms[0]]+AR[atoms[atoms.length-1]])*k*0.7;return atoms.map((e,i)=>at(e,x+(i-(atoms.length-1)/2)*d,y)).join('');
  }
  const rest=atoms.slice();rest.splice(rest.indexOf(centre),1);
  const n=rest.length,R=(AR[centre]+3)*k;
  let s=rest.map((e,i)=>{const a=Math.PI*(n===2?i:2*i/n)+(n===2?0:-Math.PI/2);return at(e,x+R*Math.cos(a),y+R*Math.sin(a))}).join('');
  return s+at(centre,x,y);
 }
 const rnd=i=>{const v=Math.sin(i*12.9898)*43758.5453;return v-Math.floor(v)};
 /* a gas box holding `rows` rows of 3 molecules */
 function gasBox(f,cx,bottom,rows,w=110,k=1){
  const h=rows*22+16,top=bottom-h;
  let s=`<rect x="${cx-w/2}" y="${top}" width="${w}" height="${h}" rx="8" fill="#eef2ff" stroke="#6366f1" stroke-width="1.6"/>`;
  for(let r=0;r<rows;r++)for(let c=0;c<3;c++){const i=r*3+c;
   s+=glyph(f,cx-w/2+w*(c+0.5)/3+(rnd(i+f.length)-0.5)*8,top+19+r*22+(rnd(i*7+3)-0.5)*5,k)}
  return {s,top};
 }
 const txt=(x,y,t,o='')=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="13" fill="#1f2937" ${o}>${t}</text>`;

 /* ---------- layout ---------- */
 el.innerHTML=`<p class="tip">📦 <b>What to try:</b> slide the volume and count the molecules in each box. Same number every time! Then look at the scales: why are they different?</p>
 <div class="row" id="av-tabs"><button class="chip" data-v="box">📦 Boxes &amp; scales</button><button class="chip" data-v="vd">⚖️ Vapour density</button><button class="chip" data-v="atom">🔬 Is hydrogen H or H₂?</button></div>
 <div id="av-ctl"></div><div id="av-svg"></div><div id="av-flow"></div><div class="work" id="av-work"></div>
 <div class="try">
  <details><summary>🎯 Try this (book p.97 summary C): 30 L of O₂ has X molecules</summary>Predict the molecules in 10 L H₂, 60 L Cl₂ and 5 L NH₃ (same T, P). Check with the slider: molecules only follow the volume.<br><b>Answer:</b> 1 L ↔ X/30. So 10 L H₂ = <b>X/3</b>, 60 L Cl₂ = <b>2X</b>, 5 L NH₃ = <b>X/6</b>. The kind of gas does not matter.</details>
  <details><summary>🎯 Try this (book p.84 solved D 17): a cylinder holds 1 kg of H₂</summary>Open ⚖️ Vapour density and pick CO₂. Predict the mass of CO₂ the same cylinder holds, and the number of molecules if H₂ had X.<br><b>Answer:</b> VD of CO₂ = 44 ÷ 2 = 22, so <b>22 kg</b> of CO₂. Molecules: still <b>X</b> (same volume, same T and P).</details>
  <details><summary>🎯 Try this (book p.86 Q.3(2)): 85 g of gas X vs 8.5 g of H₂</summary>Same cylinder, same T and P. Predict VD and the molecular weight before you check.<br><b>Answer:</b> VD = 85 ÷ 8.5 = 10; M = 2 × VD = <b>20</b>.</details>
  <details><summary>🎯 Try this (book p.86 Q.3(5)): VD = atomic mass = 35.5</summary>Predict the atomicity. Hint: pick Cl₂ in the VD view.<br><b>Answer:</b> M = 2 × 35.5 = 71; atomicity = 71 ÷ 35.5 = <b>2</b> (diatomic, like Cl₂).</details>
 </div>
 <p class="idea">💡 <b>Big idea:</b> equal volumes of all gases (same T and P) hold the same number of molecules, so a heavier box simply means heavier molecules, and M = 2 × VD.</p>`;
 const $=id=>el.querySelector('#'+id);
 const opts=(sel)=>GASES.filter(g=>g!=='H2').map(g=>`<option value="${g}"${g===sel?' selected':''}>${sb(g)} (M = ${M(g)})</option>`).join('');

 /* ---------- view 1: boxes & scales ---------- */
 function viewBox(){
  const list=['H2','O2','Cl2','NH3',S.pick],V=S.V,n=V/VM,N=n*NA;
  const maxM=6/VM*Math.max(...list.map(M));
  let s=txt(360,22,`Same T, same P, same volume → every box holds ${3*V} molecules (count them!)`,'font-size="14" font-weight="700" fill="#4f46e5"');
  s+=txt(360,42,'each dot stands for lots of real molecules · the dial shows the mass','fill="#6b7280" font-size="12"');
  list.forEach((f,i)=>{
   const cx=76+i*142,b=gasBox(f,cx,180,V);s+=b.s;
   s+=txt(cx,b.top-10,`${sb(f)} · ${V} L`,'font-weight="700"');
   // platform scale with a dial; needle angle grows with mass
   const m=n*M(f),ang=-120+240*Math.min(1,m/maxM),r=ang*Math.PI/180;
   s+=`<rect x="${cx-50}" y="186" width="100" height="6" rx="3" fill="#94a3b8"/><rect x="${cx-4}" y="192" width="8" height="10" fill="#94a3b8"/>
    <rect x="${cx-46}" y="202" width="92" height="68" rx="10" fill="#f1f5f9" stroke="#64748b"/>
    <circle cx="${cx}" cy="238" r="24" fill="#fff" stroke="#64748b"/>
    <line x1="${cx}" y1="238" x2="${(cx+20*Math.sin(r)).toFixed(1)}" y2="${(238-20*Math.cos(r)).toFixed(1)}" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="${cx}" cy="238" r="3" fill="#dc2626"/>`;
   s+=txt(cx,290,`${fmt(m,3)} g`,'font-weight="700" fill="#4f46e5"');
   s+=txt(cx,307,`${fmt(n,3)} × ${M(f)}`,'font-size="11.5" fill="#6b7280"');
  });
  $('av-svg').innerHTML=svg(720,318,s);
  $('av-flow').innerHTML='';
  $('av-work').innerHTML=`<b>Working</b> (at s.t.p.)<ol><li>Moles in each box = ${V} L ÷ 22.4 L = <b>${fmt(n)} mol</b> (same for every gas!)</li>
   <li>Molecules = ${fmt(n)} × 6.023 × 10²³ = <b>${fmt(N)}</b> in <i>every</i> box (each dot here stands for lots of molecules)</li>
   <li>Mass = moles × M: ${list.map(f=>`${sb(f)} = ${fmt(n)} × ${M(f)} = <b>${fmt(n*M(f),3)} g</b>`).join('; ')}</li>
   <li>Same number of molecules, so the mass ratio is just the ratio of molecule masses: e.g. ${sb('Cl2')} : ${sb('H2')} = 71 : 2</li></ol>`;
 }

 /* ---------- view 2: vapour density balance ---------- */
 function viewVD(){
  const f=S.vd,Mg=M(f),vd=Mg/2,tilt=Math.max(-14,Math.min(14,14*(Mg-2)/(Mg+2)))*Math.PI/180;
  const px=360,py=82,L=230,lx=px-L*Math.cos(tilt),ly=py-L*Math.sin(tilt),rx=px+L*Math.cos(tilt),ry=py+L*Math.sin(tilt);
  let s=`<polygon points="${px},${py} ${px-26},${py+190} ${px+26},${py+190}" fill="#cbd5e1"/><rect x="${px-70}" y="${py+190}" width="140" height="10" rx="4" fill="#94a3b8"/>
   <line x1="${lx.toFixed(1)}" y1="${ly.toFixed(1)}" x2="${rx.toFixed(1)}" y2="${ry.toFixed(1)}" stroke="#475569" stroke-width="6" stroke-linecap="round"/><circle cx="${px}" cy="${py}" r="7" fill="#475569"/>`;
  [[lx,ly,'H2'],[rx,ry,f]].forEach(([x,y,g])=>{
   s+=`<line x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${(x-55).toFixed(1)}" y2="${(y+110).toFixed(1)}" stroke="#94a3b8"/><line x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${(x+55).toFixed(1)}" y2="${(y+110).toFixed(1)}" stroke="#94a3b8"/>
    <path d="M${(x-62).toFixed(1)} ${(y+110).toFixed(1)} h124 l-12 10 h-100z" fill="#64748b"/>`;
   s+=gasBox(g,x,y+108,2,104).s;
   s+=txt(x,y+140,`${sb(g)}: 6 molecules × ${M(g)} u = ${fmt(6*M(g))} u`,'font-weight="700"');
  });
  s+=txt(px,16,`Same box size, same T &amp; P → same number of molecules on each side`,'fill="#4f46e5" font-weight="700"');
  $('av-svg').innerHTML=svg(720,300,s);
  $('av-flow').innerHTML=flow(`VD = mass of V L of ${sb(f)} ÷ mass of V L of H₂`,
   'same no. of molecules (Avogadro) → = mass of 1 molecule ÷ mass of 1 H₂ molecule',
   'H₂ is diatomic → = mass of 1 molecule ÷ mass of 2 H atoms',
   `× 2 → 2 × VD = molecular weight`,`<b>M = 2 × VD</b>`);
  $('av-work').innerHTML=`<b>Working</b><ol><li>M of ${sb(f)} = ${Object.entries(parseFormula(f)).map(([e,c])=>(c>1?c+' × ':'')+AM[e]).join(' + ')} = ${Mg}</li>
   <li>Mass ratio = ${fmt(6*Mg)} ÷ ${fmt(12)} = ${fmt(Mg)} ÷ 2 = <b>${fmt(vd)}</b>: this is the vapour density (no unit)</li>
   <li>So VD = M ÷ 2 = ${Mg} ÷ 2 = ${fmt(vd)}, and back again M = 2 × ${fmt(vd)} = ${Mg}</li>
   <li>A cylinder that holds 1 g of H₂ would hold <b>${fmt(vd)} g</b> of ${sb(f)} (same T, P)</li></ol>`;
 }

 /* ---------- view 3: atomicity, H₂ + Cl₂ → 2HCl ---------- */
 function viewAtom(){
  const D=S.dalton,hf=D?'H':'H2',cf=D?'Cl':'Cl2';
  const one=(f,cx)=>{let s=`<rect x="${cx-55}" y="50" width="110" height="80" rx="8" fill="#eef2ff" stroke="#6366f1" stroke-width="1.6"/>`;
   for(let i=0;i<4;i++)s+=glyph(f,cx-27+54*(i%2),72+36*Math.floor(i/2),1.3);return s};
  let s=one(hf,70)+txt(70,40,`1 vol ${sb(hf)}`,'font-weight="700"')+txt(150,92,'+','font-size="28"')+
   one(cf,230)+txt(230,40,`1 vol ${sb(cf)}`,'font-weight="700"')+txt(315,92,'→','font-size="28" fill="#6366f1"');
  s+=one('HCl',420)+txt(420,40,'1 vol HCl','font-weight="700"');
  if(D)s+=`<rect x="485" y="50" width="110" height="80" rx="8" fill="#fff" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="6 4"/>`+
   txt(540,90,'no atoms left!','fill="#dc2626" font-weight="700"')+txt(540,40,'✗ 2nd vol missing','fill="#dc2626" font-weight="700"');
  else s+=one('HCl',540)+txt(540,40,'1 vol HCl','font-weight="700"');
  s+=txt(660,80,'Experiment:','font-weight="700"')+txt(660,100,'2 vol HCl','fill="#059669" font-weight="700"')+
   txt(660,120,D?'✗ does not match':'✓ matches','fill="'+(D?'#dc2626':'#059669')+'" font-weight="700"');
  s+=txt(360,170,D?'With single atoms: 4 H + 4 Cl make only 4 HCl = 1 volume. But the experiment gives 2 volumes!'
   :'4 H₂ + 4 Cl₂ split into 8 H + 8 Cl atoms → 8 HCl molecules = 2 volumes ✓','font-size="13.5"');
  $('av-svg').innerHTML=svg(720,190,s);
  $('av-flow').innerHTML=flow('1 vol H₂ + 1 vol Cl₂ → 2 vol HCl','Avogadro: n H₂ + n Cl₂ → 2n HCl','1 H₂ + 1 Cl₂ → 2 HCl','each HCl gets ½ an H₂ molecule','<b>H₂ must split in two → diatomic</b>');
  $('av-work').innerHTML=`<b>Working</b> (book p.77–78)<ol><li>Gay-Lussac (experiment): 1 vol hydrogen + 1 vol chlorine → 2 vol hydrogen chloride</li>
   <li>Avogadro: 1 vol has n molecules, so n hydrogen + n chlorine → 2n HCl, i.e. 1 molecule + 1 molecule → 2 molecules</li>
   <li>Each HCl molecule has at least 1 H atom, so 2 HCl need 2 H atoms from <b>1</b> hydrogen molecule</li>
   <li>So each HCl takes <b>½ a hydrogen molecule</b>: a molecule of hydrogen must contain 2 atoms (H₂). Same for chlorine: Cl₂</li></ol>
   <span class="tip">${D?'Tap the other chip to see how H₂ and Cl₂ fix it.':'Tap “If they were single atoms” to see why that fails.'}</span>`;
 }

 /* ---------- controls & render ---------- */
 function controls(){
  el.querySelectorAll('#av-tabs .chip').forEach(b=>b.classList.toggle('on',b.dataset.v===S.view));
  const c=$('av-ctl');
  if(S.view==='box')c.innerHTML=`<div class="row"><label>Volume of each box</label><input type="range" id="av-v" min="1" max="6" step="1" value="${S.V}"><b id="av-vt">${S.V} L</b>
   <label>5th box gas</label><select id="av-pick">${opts(S.pick)}</select></div>`;
  else if(S.view==='vd')c.innerHTML=`<div class="row"><label>Compare H₂ with</label><select id="av-vdg">${opts(S.vd)}</select></div>`;
  else c.innerHTML=`<div class="row"><button class="chip ${S.dalton?'':'on'}" data-d="0">Avogadro: H₂ and Cl₂ molecules</button><button class="chip ${S.dalton?'on':''}" data-d="1">If they were single atoms (H, Cl)</button></div>`;
 }
 function render(){({box:viewBox,vd:viewVD,atom:viewAtom})[S.view]()}
 $('av-tabs').onclick=e=>{const b=e.target.closest('[data-v]');if(!b)return;S.view=b.dataset.v;controls();render()};
 const onCtl=e=>{
  if(e.target.id==='av-v'){const v=Math.round(+e.target.value);S.V=v>=1&&v<=6?v:2;$('av-vt').textContent=S.V+' L'}
  if(e.target.id==='av-pick'&&GASES.includes(e.target.value))S.pick=e.target.value;
  if(e.target.id==='av-vdg'&&GASES.includes(e.target.value))S.vd=e.target.value;
  render();
 };
 $('av-ctl').addEventListener('input',onCtl);$('av-ctl').addEventListener('change',onCtl);
 $('av-ctl').addEventListener('click',e=>{const b=e.target.closest('[data-d]');if(!b)return;S.dalton=b.dataset.d==='1';controls();render()});
 controls();render();
}});
