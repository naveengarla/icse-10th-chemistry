/* Electrolysis Cell Simulator: every ICSE cell (Dalal p.110–122, summary p.121).
   Predict which ion wins at each electrode, press Play, watch ions drift / discharge / deposit / bubble,
   then read the 5-step working (IONS → GO → WIN → WRITE → SEE). Uses METHOD5 from data/electro-common.js. */
LAB.add({id:'cell',icon:'⚡',name:'Electrolysis Cell Simulator',
 blurb:'predict the winner at each electrode, then watch',ref:'p.110–122 (summary p.121)',
 mount(el){
 /* ---------- the 3 rules (+ "no contest") ---------- */
 const RULE={0:'No contest: only one ion goes there',1:'Rule 1 · activity-series position',
  2:'Rule 2 · concentration',3:'Rule 3 · active electrode'};
 const DISS='dissolve';                      // the "anode itself dissolves" choice
 /* ---------- case table ----------
   cat/an: ions present · win: {c,a} (a:null → active anode dissolves) · rule: which rule decided
   eqC/eqA: book-style electrode equations · dep: cathode deposit colour · gasC/gasA: gas label
   liq/fade: solution colour (fade → colour when Cu²⁺/Ni²⁺ are used up) · thin: anode thins */
 const C={
  pbbr2:{name:'Molten PbBr₂',pg:'p.112–113',an_el:'graphite',ca_el:'graphite',aCol:'#374151',cCol:'#374151',molten:1,
   liq:'#fde9c8',cat:['Pb²⁺'],an:['Br⁻'],diss:['PbBr₂ ⇌ Pb²⁺ + 2Br⁻'],win:{c:'Pb²⁺',a:'Br⁻'},rule:{c:0,a:0},
   why:{c:'Molten, no water: Pb²⁺ is the only cation, so it must be discharged.',a:'Br⁻ is the only anion, so it is discharged.'},
   eqC:'Pb²⁺ + 2e⁻ → Pb',eqA:'2Br⁻ − 2e⁻ → Br₂ &nbsp;<span class="cw-pg">(Br⁻ − 1e⁻ → Br; Br + Br → Br₂)</span>',
   dep:'#6b7280',vapA:'Br₂ vapour',atC:'grey Pb deposit',atA:'red-brown Br₂ fumes',
   obs:['Silvery-grey <b>lead</b> deposits on the cathode.','<b>Reddish-brown bromine vapours</b> at the anode.','Current flows only once PbBr₂ <b>melts</b> (ions free to move). Silica crucible.'],
   mass:'Cathode gains mass; graphite anode: no change.'},
  water:{name:'Acidified water',pg:'p.114–115',an_el:'Pt',ca_el:'Pt',aCol:'#e5e7eb',cCol:'#e5e7eb',
   liq:'#eef6ff',cat:['H⁺'],an:['SO₄²⁻','OH⁻'],diss:['H₂SO₄ ⇌ 2H⁺ + SO₄²⁻','H₂O ⇌ H⁺ + OH⁻'],win:{c:'H⁺',a:'OH⁻'},rule:{c:0,a:1},
   why:{c:'H⁺ is the only cation present, so it is discharged.',a:'OH⁻ is lower than SO₄²⁻ in the series, so OH⁻ is discharged; SO₄²⁻ is never discharged in water.'},
   eqC:'4H⁺ + 4e⁻ → 2H₂',eqA:'4OH⁻ − 4e⁻ → 2H₂O + O₂',gasC:'H₂',gasA:'O₂',rateA:.5,atC:'H₂ (2 vol)',atA:'O₂ (1 vol)',
   obs:['Colourless gas bubbles at both electrodes.','<b>H₂ : O₂ = 2 : 1</b> by volume (4e⁻ give 2H₂ but only 1 O₂).','Dil. H₂SO₄ is added only to make water conduct; the acid is not used up.'],
   mass:'No change in mass of either Pt electrode.'},
  cuso4pt:{name:'aq. CuSO₄ · Pt electrodes',pg:'p.116–117',an_el:'Pt (inert)',ca_el:'Pt / Cu',aCol:'#e5e7eb',cCol:'#e5e7eb',
   liq:'#60a5fa',fade:'#e0f2fe',cat:['Cu²⁺','H⁺'],an:['SO₄²⁻','OH⁻'],diss:['CuSO₄ ⇌ Cu²⁺ + SO₄²⁻','H₂O ⇌ H⁺ + OH⁻'],win:{c:'Cu²⁺',a:'OH⁻'},rule:{c:1,a:1},
   why:{c:'Cu²⁺ is lower than H⁺ in the series, so Cu²⁺ is discharged; H⁺ stays.',a:'Pt is inert, so an anion must go: OH⁻ is lower than SO₄²⁻ in the series.'},
   eqC:'Cu²⁺ + 2e⁻ → Cu',eqA:'4OH⁻ − 4e⁻ → 2H₂O + O₂',dep:'#b45f3c',gasA:'O₂',atC:'pink-brown Cu',atA:'O₂ bubbles',
   obs:['Reddish-brown (pink) <b>copper</b> deposits on the cathode.','Colourless <b>O₂</b> bubbles at the anode.','<b>Blue colour fades</b>: Cu²⁺ removed at the cathode is not replaced. Solution turns acidic (H⁺ + SO₄²⁻ left).'],
   mass:'Cathode gains mass; Pt anode: no change.'},
  cuso4cu:{name:'aq. CuSO₄ · Cu electrodes',pg:'p.116–117',an_el:'Cu (active)',ca_el:'Cu',aCol:'#c2410c',cCol:'#c2410c',thin:1,
   liq:'#60a5fa',cat:['Cu²⁺','H⁺'],an:['SO₄²⁻','OH⁻'],diss:['CuSO₄ ⇌ Cu²⁺ + SO₄²⁻','H₂O ⇌ H⁺ + OH⁻'],win:{c:'Cu²⁺',a:null},rule:{c:1,a:3},
   why:{c:'Cu²⁺ is lower than H⁺ in the series, so Cu²⁺ is discharged; H⁺ stays.',a:'The Cu anode is active: Cu atoms lose electrons more easily than SO₄²⁻ or OH⁻, so the anode dissolves and NO anion is discharged.'},
   eqC:'Cu²⁺ + 2e⁻ → Cu',eqA:'Cu − 2e⁻ → Cu²⁺',dep:'#b45f3c',made:'Cu²⁺',atC:'pink-brown Cu',atA:'anode thins',
   obs:['Pink-brown <b>copper</b> deposits on the cathode.','No gas at the anode: the anode gets <b>thinner</b>.','<b>Blue colour stays</b>: every Cu²⁺ removed at the cathode is replaced by one from the anode.'],
   mass:'Cathode gains mass; anode loses the same mass.'},
  refine:{name:'Electrorefining of Cu',pg:'p.120',an_el:'impure Cu block',ca_el:'pure Cu sheet',aCol:'#7c2d12',cCol:'#c2410c',thin:1,mud:1,
   liq:'#60a5fa',cat:['Cu²⁺','H⁺'],an:['SO₄²⁻','OH⁻'],diss:['CuSO₄ ⇌ Cu²⁺ + SO₄²⁻ (acidified)','H₂O ⇌ H⁺ + OH⁻'],win:{c:'Cu²⁺',a:null},rule:{c:1,a:3},
   why:{c:'Cu²⁺ is lower than H⁺ in the series, so pure Cu is deposited.',a:'The impure Cu anode is active: its Cu dissolves as Cu²⁺; SO₄²⁻ and OH⁻ are not discharged.'},
   eqC:'Cu²⁺ + 2e⁻ → Cu',eqA:'Cu − 2e⁻ → Cu²⁺',dep:'#b45f3c',made:'Cu²⁺',atC:'pure Cu builds up',atA:'anode mud below',
   obs:['<b>Pure copper</b> builds up on the thin cathode sheet.','The impure anode is used up; insoluble impurities (Ag, Au) fall as <b>anode mud</b>.','Fe, Zn impurities dissolve and stay in solution. Blue colour stays.'],
   mass:'Cathode gains mass; impure anode loses mass.'},
  niplate:{name:'Ni plating',pg:'p.118–119',an_el:'Ni block (active)',ca_el:'article',aCol:'#a3a3a3',cCol:'#78716c',thin:1,
   liq:'#86efac',cat:['Ni²⁺','H⁺'],an:['SO₄²⁻','OH⁻'],diss:['NiSO₄ ⇌ Ni²⁺ + SO₄²⁻','H₂O ⇌ H⁺ + OH⁻'],win:{c:'Ni²⁺',a:null},rule:{c:2,a:3},
   why:{c:'Ni is ABOVE H in the series, yet Ni²⁺ wins: there are far more Ni²⁺ ions than H⁺ ions from water.',a:'The Ni anode is active: it dissolves as Ni²⁺; SO₄²⁻ and OH⁻ are not discharged.'},
   eqC:'Ni²⁺ + 2e⁻ → Ni',eqA:'Ni − 2e⁻ → Ni²⁺',dep:'#d4d4d8',made:'Ni²⁺',atC:'silvery Ni coat',atA:'Ni anode thins',
   obs:['A shiny <b>nickel</b> coat forms on the article (cathode).','The Ni anode thins; it must be replaced periodically.','Green colour stays. Use low current for a long time, and d.c. (p.118).'],
   mass:'Article (cathode) gains mass; Ni anode loses mass.'},
  nipt:{name:'NiSO₄ · Pt anode',pg:'p.111, 118–119',an_el:'Pt (inert)',ca_el:'article',aCol:'#e5e7eb',cCol:'#78716c',hidden:1,
   liq:'#86efac',fade:'#f0fdf4',cat:['Ni²⁺','H⁺'],an:['SO₄²⁻','OH⁻'],diss:['NiSO₄ ⇌ Ni²⁺ + SO₄²⁻','H₂O ⇌ H⁺ + OH⁻'],win:{c:'Ni²⁺',a:'OH⁻'},rule:{c:2,a:1},
   why:{c:'Ni²⁺ far outnumbers H⁺, so Ni²⁺ is discharged.',a:'Pt is inert, so an anion must go: OH⁻ is lower than SO₄²⁻.'},
   eqC:'Ni²⁺ + 2e⁻ → Ni',eqA:'4OH⁻ − 4e⁻ → 2H₂O + O₂',dep:'#d4d4d8',gasA:'O₂',atC:'Ni coat',atA:'O₂ bubbles',
   obs:['Nickel still coats the article…','…but O₂ bubbles at the anode and the <b>green fades</b>: Ni²⁺ is not replaced.','That is why plating uses an <b>active</b> Ni anode.'],
   mass:'Cathode gains mass; Pt anode: no change.'},
  agplate:{name:'Ag plating',pg:'p.119',an_el:'Ag block (active)',ca_el:'article',aCol:'#e5e7eb',cCol:'#78716c',thin:1,
   liq:'#f1f5f9',cat:['Na⁺','Ag⁺','H⁺'],an:['CN⁻','OH⁻'],diss:['Na[Ag(CN)₂] ⇌ Na⁺ + Ag⁺ + 2CN⁻','H₂O ⇌ H⁺ + OH⁻'],win:{c:'Ag⁺',a:null},rule:{c:1,a:3},
   why:{c:'Ag⁺ is the lowest in the series (below H⁺ and Na⁺), so Ag⁺ is discharged.',a:'The Ag anode is active: it dissolves as Ag⁺; CN⁻ and OH⁻ are not discharged.'},
   eqC:'Ag⁺ + 1e⁻ → Ag',eqA:'Ag − 1e⁻ → Ag⁺',dep:'#e5e7eb',made:'Ag⁺',atC:'silver coat',atA:'Ag anode thins',
   obs:['A smooth <b>silver</b> coat forms on the article.','The Ag anode thins (replaced periodically).','Complex salt gives Ag⁺ slowly → even, firm coating (better than AgNO₃).'],
   mass:'Article gains mass; Ag anode loses mass.'},
  dnacl:{name:'Dilute NaCl',pg:'p.111',an_el:'graphite / Pt',ca_el:'graphite / Pt',aCol:'#374151',cCol:'#374151',
   liq:'#f0f9ff',cat:['Na⁺','H⁺'],an:['Cl⁻','OH⁻'],diss:['NaCl ⇌ Na⁺ + Cl⁻','H₂O ⇌ H⁺ + OH⁻'],win:{c:'H⁺',a:'OH⁻'},rule:{c:1,a:1},
   why:{c:'H⁺ is lower than Na⁺ in the series, so H⁺ gains electrons more easily.',a:'Dilute, so few Cl⁻: the series decides, and OH⁻ is lower than Cl⁻.'},
   eqC:'4H⁺ + 4e⁻ → 2H₂',eqA:'4OH⁻ − 4e⁻ → 2H₂O + O₂',gasC:'H₂',gasA:'O₂',rateA:.5,atC:'H₂',atA:'O₂',
   obs:['H₂ at the cathode, O₂ at the anode (2 : 1).','Only water is used up, so the NaCl gets more concentrated.'],
   mass:'No change in mass of the inert electrodes.'},
  cnacl:{name:'Conc. NaCl (brine)',pg:'p.111',an_el:'graphite',ca_el:'graphite / Pt',aCol:'#374151',cCol:'#374151',
   liq:'#f0f9ff',cat:['Na⁺','H⁺'],an:['Cl⁻','OH⁻'],many:'Cl⁻',diss:['NaCl ⇌ Na⁺ + Cl⁻','H₂O ⇌ H⁺ + OH⁻'],win:{c:'H⁺',a:'Cl⁻'},rule:{c:1,a:2},
   why:{c:'Even with lots of Na⁺, H⁺ (lower in the series) is discharged.',a:'Concentrated: the very high concentration of Cl⁻ makes Cl⁻ win over OH⁻.'},
   eqC:'2H⁺ + 2e⁻ → H₂',eqA:'2Cl⁻ − 2e⁻ → Cl₂',gasC:'H₂',gasA:'Cl₂',atC:'H₂',atA:'greenish-yellow Cl₂',
   obs:['H₂ at the cathode; <b>greenish-yellow Cl₂</b> (pungent) at the anode.','Na⁺ and OH⁻ are left behind, so the solution becomes alkaline (NaOH).'],
   mass:'No change in mass of the inert electrodes.'},
  mnacl:{name:'Molten NaCl',pg:'p.121',an_el:'graphite',ca_el:'iron',aCol:'#374151',cCol:'#57534e',molten:1,
   liq:'#fff1e0',cat:['Na⁺'],an:['Cl⁻'],diss:['NaCl ⇌ Na⁺ + Cl⁻ (fused, no water)'],win:{c:'Na⁺',a:'Cl⁻'},rule:{c:0,a:0},
   why:{c:'Molten, no water, so no H⁺: Na⁺ is the only cation and must be discharged.',a:'Cl⁻ is the only anion.'},
   eqC:'Na⁺ + 1e⁻ → Na',eqA:'2Cl⁻ − 2e⁻ → Cl₂',dep:'#9ca3af',gasA:'Cl₂',atC:'grey Na metal',atA:'Cl₂ gas',
   obs:['Silvery-grey <b>sodium</b> metal at the cathode.','Greenish-yellow <b>Cl₂</b> at the anode.','Na is high in the series, so it is extracted by electrolysis of its fused salt (p.121).'],
   mass:'Cathode collects Na; graphite anode: no change.'},
  al2o3:{name:'Fused Al₂O₃ (extraction)',pg:'p.121',an_el:'graphite (burns away)',ca_el:'carbon lining',aCol:'#374151',cCol:'#374151',molten:1,thin:1,
   liq:'#fde68a',cat:['Al³⁺'],an:['O²⁻'],diss:['2Al₂O₃ ⇌ 4Al³⁺ + 6O²⁻ (in molten cryolite)'],win:{c:'Al³⁺',a:'O²⁻'},rule:{c:0,a:0},
   why:{c:'Fused, no water: Al³⁺ is the only cation, so it is discharged.',a:'O²⁻ is the only anion; the graphite anode is NOT active here, it just burns in the O₂ formed.'},
   eqC:'4Al³⁺ + 12e⁻ → 4Al',eqA:'6O²⁻ − 12e⁻ → 3O₂',dep:'#9ca3af',gasA:'O₂',atC:'molten Al',atA:'O₂ + C → CO₂',
   obs:['Molten <b>aluminium</b> collects at the cathode.','O₂ at the anode reacts with the hot graphite: C + O₂ → CO₂, so the anode <b>burns away</b> and is replaced.','Cryolite lowers the melting point and improves conductivity.'],
   mass:'Cathode collects Al; graphite anode loses mass (burnt to CO₂, not dissolved).'}};
 const MENU=['pbbr2','water','cuso4pt','cuso4cu','refine','niplate','agplate','dnacl','cnacl','mnacl','al2o3'];
 // switchable pairs: [first, second, label, first-name, second-name]
 const PAIRS=[['cuso4pt','cuso4cu','Anode','inert Pt','active Cu'],['nipt','niplate','Anode','inert Pt','active Ni'],
  ['dnacl','cnacl','NaCl solution','dilute','concentrated']];
 const isCat=i=>/⁺$/.test(i);

 /* ---------- state ---------- */
 const S={id:'cuso4pt',mode:'predict',pc:null,pa:null,played:false,t:0,run:false};
 let raf=0,t0=0;

 /* ---------- particles (seeded so the picture is stable) ---------- */
 const W=720,H=400,AX=250,CX=470,TOP=140,BOT=330,ET=96,EB=305;
 function rng(seed){let s=seed;return()=>(s=(s*16807)%2147483647)/2147483647}
 function particles(c){
  let h=7;for(const ch of c.name)h=(h*31+ch.charCodeAt(0))%2147483647;
  const r=rng(h+1),ps=[];
  const homes=[],home=()=>{let x,y,k=0;
   do{x=135+r()*450;y=158+r()*160;k++}while(k<300&&(Math.abs(x-AX)<30||Math.abs(x-CX)<30||homes.some(h=>Math.hypot(h.x-x,h.y-y)<42)));
   const p={x,y};homes.push(p);return{x,y}};
  [...c.cat.map(i=>[i,1]),...c.an.map(i=>[i,0])].forEach(([ion,cat])=>{
   const win=cat?c.win.c===ion:c.win.a===ion,n=win?6:(c.many===ion?5:3);
   for(let k=0;k<n;k++){const p=home();
    p.ion=ion;p.cat=cat;p.win=win;p.go=win&&k<4;p.delay=win?k*0.17:0;
    if(p.go){p.tx=cat?(p.x>CX?CX+26:CX-26):(p.x<AX?AX-26:AX+26);p.ty=TOP+30+r()*(BOT-TOP-60)}   // reach the nearest face
    else{p.tx=cat?(p.x<AX?AX-28:Math.max(p.x,CX-50-r()*90)):(p.x>CX?CX+28:Math.min(p.x,AX+50+r()*90));p.ty=p.y}ps.push(p)}});  // drift, never cross an electrode
  if(c.made)for(let k=0;k<5;k++){const h=home();ps.push({ion:c.made,cat:1,born:k*0.17,x:AX+16,y:TOP+30+r()*130,tx:h.x,ty:h.y})}
  return ps;
 }
 const ease=p=>p<0?0:p>1?1:p*p*(3-2*p);
 const mix=(a,b,f)=>'#'+[1,3,5].map(i=>Math.round(parseInt(a.substr(i,2),16)*(1-f)+parseInt(b.substr(i,2),16)*f).toString(16).padStart(2,'0')).join('');
 const tx=(x,y,t,cls,extra='')=>`<text x="${x}" y="${y}" class="${cls}" text-anchor="middle" dominant-baseline="central" ${extra}>${t}</text>`;

 /* ---------- SVG drawing for progress t (0…1) ---------- */
 function draw(c,t,clock){
  const reveal=S.played||S.mode==='watch';
  const liq=c.fade?mix(c.liq,c.fade,ease(t)):c.liq;
  let s=`<rect x="110" y="128" width="500" height="${BOT-128+6}" rx="12" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>`
   +`<rect x="113" y="${TOP}" width="494" height="${BOT-TOP}" rx="9" fill="${liq}" opacity=".85"/>`;
  // wire + battery (long plate = +, faces the anode) and electrons in the wire only
  s+=`<path d="M${AX} ${ET} V50 H352 M368 50 H${CX} V${ET}" fill="none" stroke="#334155" stroke-width="2.5"/>`
   +`<line x1="352" y1="30" x2="352" y2="70" stroke="#334155" stroke-width="3"/><line x1="368" y1="38" x2="368" y2="62" stroke="#334155" stroke-width="7"/>`
   +tx(352,20,'+','cw-big')+tx(370,20,'−','cw-big')+tx(360,84,'battery','cw-sm');
  s+=tx(300,36,'e⁻ →','cw-e')+tx(420,36,'e⁻ →','cw-e')+tx(AX-18,72,'e⁻ ↑','cw-e')+tx(CX+18,72,'e⁻ ↓','cw-e');
  if(S.run){const L1=ET-50,L2=352-AX,L3=CX-368,L4=ET-50,tot=L1+L2+L3+L4;
   for(let k=0;k<10;k++){let d=((k/10+clock*0.35)%1)*tot,x,y;
    if(d<L1){x=AX;y=ET-d}else if((d-=L1)<L2){x=AX+d;y=50}else if((d-=L2)<L3){x=368+d;y=50}else{d-=L3;x=CX;y=50+d}
    s+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" fill="#f59e0b" stroke="#b45309"/>`}}
  // electrodes: anode (left, +) may thin; cathode (right, −) gets a deposit on its inner face
  const aw=c.thin?20-11*ease(t):20,dep=c.dep?9*ease(t):0;
  s+=`<rect x="${AX-10}" y="${ET}" width="20" height="${TOP-ET}" fill="${c.aCol}" stroke="#334155"/>`
   +`<rect x="${AX-aw/2}" y="${TOP}" width="${aw}" height="${EB-TOP}" fill="${c.aCol}" stroke="#334155"/>`
   +`<rect x="${CX-10}" y="${ET}" width="20" height="${EB-ET}" fill="${c.cCol}" stroke="#334155"/>`;
  if(dep)s+=`<rect x="${CX-10-dep}" y="${TOP}" width="${dep}" height="${EB-TOP}" fill="${c.dep}" stroke="#57534e" stroke-width=".8"/>`;
  s+=tx(160,92,'Anode (+)','cw-lab')+tx(160,110,c.an_el,'cw-sm')+tx(560,92,'Cathode (−)','cw-lab')+tx(560,110,c.ca_el,'cw-sm');
  // anode mud (electrorefining)
  if(c.mud)for(let k=0;k<Math.round(14*ease(t));k++)s+=`<circle cx="${AX-24+(k*13)%48}" cy="${BOT-5-(k%3)*4}" r="3" fill="#ca8a04"/>`;
  // ions
  for(const p of PS){
   let x,y,op=1,r=15;
   if(p.born!=null){const q=ease((t-p.born)/0.45);if(t<=p.born)continue;x=p.x+(p.tx-p.x)*q;y=p.y+(p.ty-p.y)*q;r=8+7*Math.min(1,q*3)}
   else{const q=p.go?ease((t-p.delay)/0.4):ease(t/0.8)*(p.win?0.35:0.7);
    x=p.x+(p.tx-p.x)*q;y=p.y+(p.ty-p.y)*q;if(p.go&&q>=1)continue;if(p.go&&q>0.85)op=(1-q)/0.15}
   const bold=reveal&&p.win,fade=reveal&&!p.win&&p.born==null&&t>0;
   s+=`<g opacity="${(fade?.5:1)*op}"><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${p.cat?'#fecaca':'#bfdbfe'}" stroke="${bold?'#111827':'#94a3b8'}" stroke-width="${bold?2.2:1}"/>`
    +tx(x.toFixed(1),y.toFixed(1),p.ion,'cw-ion')+'</g>';
  }
  // gas bubbles (rate ∝ volume) and vapour
  const bub=(x,gas,rate)=>{let b='';const n=Math.round(8*rate*ease(t*1.4));
   for(let k=0;k<n;k++){const y=EB-((k*0.137+clock*0.45)%1)*(EB-TOP-8);b+=`<circle cx="${x+((k%3)-1)*6}" cy="${y.toFixed(1)}" r="${3+k%3}" fill="#fff" stroke="#64748b"/>`}
   if(t>0.15)b+=tx(x+(x<360?40:-40),114,gas+' ↑','cw-gas');return b};
  if(c.gasA)s+=bub(AX+(AX<CX?22:-22),c.gasA,c.rateA||1);
  if(c.gasC)s+=bub(CX-22,c.gasC,1);
  if(c.vapA&&t>0.1)s+=[0,1,2,3].map(k=>`<circle cx="${AX+18+k*10}" cy="${TOP-6-k*6}" r="${5+k}" fill="#9a3412" opacity="${0.35*ease(t)}"/>`).join('')+tx(AX+82,104,c.vapA,'cw-gas');
  if(c.molten)s+=`<path d="M345 ${BOT+12} q8 -16 16 0 q8 -16 16 0" fill="#fb923c" stroke="#ea580c"/>`+tx(361,BOT+28,'heat','cw-sm');
  if(t>0.5){s+=tx(AX,BOT+20,c.atA,'cw-out')+tx(CX,BOT+20,c.atC,'cw-out')}
  s+=tx(W/2,H-16,c.name+(c.molten?' (molten, no water)':' (aqueous)'),'cw-tit');
  return `<svg viewBox="0 0 ${W} ${H}" style="max-width:${W}px">${s}</svg>`;
 }

 /* ---------- grading ---------- */
 function verdict(c){
  const ruleTag=r=>`<b>[${RULE[r]}]</b>`;
  const one=(pick,side)=>{
   const right=side==='c'?c.win.c:(c.win.a||DISS),ok=pick===right,why=c.why[side]+' '+ruleTag(c.rule[side]);
   const nm=pick===DISS?'"anode dissolves"':pick;
   if(ok)return`<li>✔ <b>${side==='c'?'Cathode':'Anode'}: ${nm}</b>. ${why}</li>`;
   let msg;
   if(pick!==DISS&&side==='c'&&!isCat(pick))msg=`${pick} is negative, so it goes to the <b>anode (+)</b>, never the cathode.`;
   else if(pick!==DISS&&side==='a'&&isCat(pick))msg=`${pick} is positive, so it goes to the <b>cathode (−)</b>, not the anode.`;
   else if(pick===DISS)msg=`${c.an_el} does not dissolve here.`;
   else msg=`${pick} gets there but loses.`;
   return`<li>✘ <b>${side==='c'?'Cathode':'Anode'}: you picked ${nm}</b>. ${msg} Answer: <b>${right===DISS?'the anode itself dissolves':right}</b>. ${why}</li>`;
  };
  return `<ul style="margin:4px 0;padding-left:20px;list-style:none">${one(S.pc,'c')}${one(S.pa,'a')}</ul>`;
 }

 /* ---------- working box (METHOD5) ---------- */
 function working(c,show){
  const lock='🔒 <i>predict, then press ▶ Play to unlock</i>';
  const ions=c.diss.join('<br>')+`<br>Ions present: <b>${[...c.cat,...c.an].join(', ')}</b>`;
  const go=`${c.cat.join(', ')} → <b>cathode (−)</b> &nbsp;·&nbsp; ${c.an.join(', ')} → <b>anode (+)</b>`;
  if(!show)return METHOD5(ions,go,lock,lock,lock);
  const win=`Cathode: <b>${c.win.c}</b> discharged. ${c.why.c} <i>(${RULE[c.rule.c]})</i><br>`
   +`Anode: <b>${c.win.a||'no anion: the anode dissolves'}</b>. ${c.why.a} <i>(${RULE[c.rule.a]})</i>`;
  const write=`Cathode (reduction, gain of e⁻): <b>${c.eqC}</b><br>Anode (oxidation, loss of e⁻): <b>${c.eqA}</b>`;
  const see=`<ul style="margin:0;padding-left:18px">${c.obs.map(o=>`<li>${o}</li>`).join('')}<li>⚖️ ${c.mass}</li></ul>`;
  return METHOD5(ions,go,win,write,see);
 }

 /* ---------- static UI ---------- */
 if(!document.getElementById('cw-style')){const st=document.createElement('style');st.id='cw-style';
  st.textContent='#w-cell .cw-ion{font:600 11px system-ui}#w-cell .cw-lab{font:700 14px system-ui;fill:#1f2937}#w-cell .cw-sm{font:12px system-ui;fill:#475569}'
   +'#w-cell .cw-big{font:700 15px system-ui}#w-cell .cw-e{font:600 12px system-ui;fill:#b45309}#w-cell .cw-gas{font:700 13px system-ui;fill:#0f766e}'
   +'#w-cell .cw-out{font:700 13px system-ui;fill:#065f46}#w-cell .cw-tit{font:600 14px system-ui;fill:#334155}'
   +'#w-cell .cw-lbl{min-width:118px;font-weight:600;color:#374151;font-size:14px}#w-cell .chip.ok{background:#ecfdf5;border-color:#059669}#w-cell .chip.no{background:#fef2f2;border-color:#dc2626}'
   +'#w-cell .cw-pg{color:var(--mut);font-size:13px}#w-cell .m5 td{font-size:14px}';
  document.head.appendChild(st)}
 const TRY=[
  ['Why does the blue colour stay with Cu electrodes but fade with Pt? Set up aq. CuSO₄, predict, play both anodes and watch the colour. (p.117)','cuso4pt',
   'With a <b>Cu anode</b> (Rule 3) every Cu²⁺ discharged at the cathode is replaced by a Cu²⁺ from the anode: Cu − 2e⁻ → Cu²⁺, so [Cu²⁺] and the blue stay the same. With <b>Pt</b> the anode only gives O₂ (4OH⁻ − 4e⁻ → 2H₂O + O₂), so Cu²⁺ is used up and the blue fades.'],
  ['Dilute vs concentrated NaCl: which gas comes off at the anode in each? Predict, then flip the concentration. (p.111)','dnacl',
   'Cathode: H₂ in both (Rule 1, H⁺ below Na⁺). Anode: <b>dilute → O₂</b> (Rule 1, OH⁻ below Cl⁻); <b>concentrated → Cl₂</b> (Rule 2, the high concentration of Cl⁻ wins).'],
  ['Silver plating: why is Na[Ag(CN)₂] used and not AgNO₃? Watch the Ag plating cell. (p.119)','agplate',
   'The complex salt releases Ag⁺ ions <b>slowly</b>, so silver deposits evenly as a smooth, firm coat. AgNO₃ gives Ag⁺ too fast: an uneven, rough deposit that does not stick.'],
  ['Why does molten NaCl give sodium at the cathode but brine gives H₂? Compare the two cells. (p.111, p.121)','mnacl',
   'Molten NaCl has no water, so Na⁺ is the only cation (no contest): Na⁺ + 1e⁻ → Na. In water, H⁺ is present and is lower than Na⁺ (Rule 1), so H₂ forms instead. That is why Na, Al and other reactive metals are extracted from their <b>fused</b> compounds.']];
 el.innerHTML=`<p class="tip">🎯 <b>What to try:</b> pick a cell, choose the ion you think is discharged at each electrode, then press ▶ Play to see if you were right.</p>
 <div class="row" id="cw-cases"></div><div class="row" id="cw-pair"></div>
 <div class="row"><span class="cw-lbl">Mode</span><button class="chip" data-mode="predict">🤔 Predict first</button><button class="chip" data-mode="watch">👀 Just watch</button></div>
 <div id="cw-pred"></div>
 <div class="row"><button class="btn" id="cw-play">▶ Play</button><button class="btn ghost" id="cw-reset">↺ Reset</button><span class="cw-pg" id="cw-pg"></span></div>
 <div id="cw-msg"></div><div id="cw-svg"></div>
 <div class="key">Red = cations → cathode (−), blue = anions → anode (+). Bold ring = the ion that is discharged; faded ions are spectators and stay. Electrons (orange) move only in the <b>wire</b>, anode → battery → cathode; in the liquid, <b>ions</b> carry the current.</div>
 <div class="work" id="cw-work"></div>
 <p class="idea">💡 <b>Big idea:</b> cations go to the cathode and anions to the anode; which one is discharged is decided by <b>(1) series position, (2) concentration, (3) an active anode</b> that dissolves itself. Electrons flow only in the wire, ions in the liquid.</p>
 ${TRY.map(([q,id,a],i)=>`<details class="try"><summary>🎯 Try this: ${q}</summary><p><button class="btn ghost" data-try="${id}">Set it up</button></p><p>${a}</p></details>`).join('')}`;
 const $=id=>el.querySelector('#'+id);
 let PS=[];

 /* ---------- render ---------- */
 function chips(){
  const c=C[S.id],pair=PAIRS.find(p=>p.includes(S.id)),onMenu=c.hidden?pair[1]:S.id;
  $('cw-cases').innerHTML='<span class="cw-lbl">Cell</span>'+MENU.map(k=>`<button class="chip${k===onMenu?' on':''}" data-case="${k}">${C[k].name}</button>`).join('');
  $('cw-pair').innerHTML=pair?`<span class="cw-lbl">${pair[2]}</span>`+[0,1].map(i=>`<button class="chip${pair[i]===S.id?' on':''}" data-case="${pair[i]}">${pair[i+3]}</button>`).join('')+`<span class="cw-pg">← switch and compare!</span>`:'';
  el.querySelectorAll('[data-mode]').forEach(b=>b.classList.toggle('on',b.dataset.mode===S.mode));
  $('cw-pg').textContent='📖 '+c.pg;
  if(S.mode==='watch'){$('cw-pred').innerHTML='';return}
  const all=[...c.cat,...c.an],mark=(side,v)=>{if(!S.played)return'';const r=side==='c'?c.win.c:(c.win.a||DISS);
   return v===r?' ok':(v===(side==='c'?S.pc:S.pa)?' no':'')};
  const row=(side,lab,list)=>`<div class="row"><span class="cw-lbl">${lab}</span>${list.map(v=>`<button class="chip${(side==='c'?S.pc:S.pa)===v?' on':''}${mark(side,v)}" data-p${side}="${v}">${v===DISS?'⚙ none: the anode metal dissolves':v}</button>`).join('')}</div>`;
  $('cw-pred').innerHTML=row('c','Cathode (−) discharges',all)+row('a','Anode (+) discharges',[...all,DISS]);
 }
 function frame(){
  const c=C[S.id];$('cw-svg').innerHTML=draw(c,S.t,performance.now()/1000);
 }
 function render(){
  const c=C[S.id];chips();frame();
  const show=S.mode==='watch'||S.played;
  $('cw-work').innerHTML=`<b>Working: the 5 steps for ${c.name}</b>`+working(c,show);
  const m=$('cw-msg');
  if(S.played&&S.mode==='predict'&&!S.run)m.innerHTML=`<div class="${S.pc===c.win.c&&S.pa===(c.win.a||DISS)?'out':'warnbox'}">${verdict(c)}</div>`;
  else if(!S.played&&S.mode==='predict')m.innerHTML=`<div class="tip">Pick one ion at each electrode${S.pc&&S.pa?', then press ▶ Play.':'.'}</div>`;
  else m.innerHTML='';
 }
 function stop(){if(raf)cancelAnimationFrame(raf);raf=0;S.run=false}
 function setCase(id){if(!C[id])return;stop();S.id=id;S.pc=S.pa=null;S.played=false;S.t=0;PS=particles(C[id]);render()}
 function play(){
  if(S.mode==='predict'&&!(S.pc&&S.pa)){$('cw-msg').innerHTML='<div class="warnbox">✋ First pick the ion discharged at the cathode <b>and</b> at the anode (or choose 👀 Just watch).</div>';return}
  stop();S.played=true;S.run=true;S.t=0;t0=performance.now();render();
  const step=now=>{
   if(!el.isConnected){stop();return}
   S.t=Math.min(1,(now-t0)/3200);frame();
   if(S.t<1)raf=requestAnimationFrame(step);else{S.run=false;raf=0;render()}};
  raf=requestAnimationFrame(step);
 }

 /* ---------- events ---------- */
 el.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.dataset.case){setCase(b.dataset.case);return}
  if(b.dataset.try){setCase(b.dataset.try);el.querySelector('#cw-svg').scrollIntoView&&el.querySelector('#cw-svg').scrollIntoView({behavior:'smooth',block:'center'});return}
  if(b.dataset.mode){stop();S.mode=b.dataset.mode;S.played=false;S.t=0;render();return}
  if(b.dataset.pc!=null||b.dataset.pa!=null){if(S.run)return;
   if(b.dataset.pc!=null)S.pc=b.dataset.pc;else S.pa=b.dataset.pa;
   if(S.played){S.played=false;S.t=0}render();return}
  if(b.id==='cw-play'){play();return}
  if(b.id==='cw-reset'){setCase(S.id)}
 });
 setCase(S.id);
 }});
