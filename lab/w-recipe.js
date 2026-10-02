/* Equation recipe scaler: a balanced equation is a recipe in moles.
   Pick the GIVEN substance + amount; every other substance scales live. */
LAB.add({id:'recipe',icon:'🍳',name:'Equation recipe scaler',
 blurb:'scale a balanced equation like a recipe',ref:'p.92–98 · practice page 4.4',
 mount(el){
 /* ---------- presets (book equations; gases at s.t.p. listed; water is liquid) ---------- */
 const PRE=[
  {e:'2KClO3 -> 2KCl + 3O2',gas:'O2',g:0,a:20,u:'g',w:2,wu:'L',ref:'p.96 Q.3(2)'},
  {e:'CaCO3 + 2HCl -> CaCl2 + H2O + CO2',gas:'CO2',g:0,a:10,u:'g',w:2,wu:'g',ref:'p.93 ex.3'},
  {e:'3Cu + 8HNO3 -> 3Cu(NO3)2 + 4H2O + 2NO',gas:'NO',g:1,a:126,u:'g',w:0,wu:'g',ref:'p.98'},
  {e:'2ZnS + 3O2 -> 2ZnO + 2SO2',gas:'O2 SO2',g:0,a:776,u:'g',w:3,wu:'mol',ref:'p.96 Q.3(4)'},
  {e:'2NH3 + H2SO4 -> (NH4)2SO4',gas:'NH3',g:2,a:59,u:'g',w:0,wu:'L',ref:'p.96 Q.3(5)'},
  {e:'2Pb(NO3)2 -> 2PbO + 4NO2 + O2',gas:'NO2 O2',g:0,a:8.5,u:'g',w:2,wu:'L',ref:'p.96 Q.3(6)'},
  {e:'2NH4Cl + Ca(OH)2 -> CaCl2 + 2H2O + 2NH3',gas:'NH3',g:0,a:32.6,u:'g',w:4,wu:'g',ref:'p.96 Q.3(8)'},
  {e:'Na2CO3 + H2SO4 -> Na2SO4 + H2O + CO2',gas:'CO2',g:0,a:106,u:'g',w:2,wu:'g',ref:'p.96 Q.3(9)'},
  {e:'Zn + H2SO4 -> ZnSO4 + H2',gas:'H2',g:0,a:6.5,u:'g',w:3,wu:'L',ref:'p.92–98'},
  {e:'Mg + H2SO4 -> MgSO4 + H2',gas:'H2',g:3,a:0.2986,u:'L',w:0,wu:'g',ref:'p.96 Q.3(11)'},
  {e:'2H2O -> 2H2 + O2',gas:'H2 O2',g:0,a:18,u:'g',w:2,wu:'L',ref:'p.92'},
  {e:'2KNO3 -> 2KNO2 + O2',gas:'O2',g:0,a:15.15,u:'g',w:1,wu:'g',ref:'p.93 ex.1'},
  {e:'2C4H10 + 13O2 -> 8CO2 + 10H2O',gas:'C4H10 O2 CO2',g:0,a:58,u:'g',w:1,wu:'mol',ref:'p.94 ex.4'},
  {e:'2Ca(NO3)2 -> 2CaO + 4NO2 + O2',gas:'NO2 O2',g:0,a:16.4,u:'g',w:2,wu:'L',ref:'p.94 ex.5'}];
 const GASES='H2 O2 N2 Cl2 CO2 CO SO2 NO NO2 N2O NH3 CH4 C2H6 C2H4 C2H2 C3H8 C4H10 H2S'.split(' ');
 const COL=['#6366f1','#f59e0b','#10b981','#ef4444','#0ea5e9','#a855f7'];
 const UN={g:'g',mol:'mol',L:'L at s.t.p.',molecules:'molecules'};

 /* ---------- small helpers ---------- */
 const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
 const num=x=>String(+(+x).toFixed(3));                 // exact book-line numbers
 const sp1=s=>(s.c>1?s.c:'')+sub(s.f);                  // '2KClO₃'
 const eqText=E=>E.sp.filter(s=>!s.side).map(sp1).join(' + ')+' → '+E.sp.filter(s=>s.side).map(sp1).join(' + ');
 const toMol=(x,u,M)=>u==='g'?x/M:u==='L'?x/VM:u==='molecules'?x/NA:x;
 const fromMol=(n,u,M)=>u==='g'?n*M:u==='L'?n*VM:u==='molecules'?n*NA:n;
 const perMol=(u,M)=>u==='g'?num(M)+' g/mol':u==='L'?'22.4 L':u==='molecules'?'6.023 × 10²³':'1';
 // book-line amount of a species in a unit: '2 × 122.5 = 245 g'
 const book=(s,u)=>u==='g'?(s.c>1?`${s.c} × ${num(s.M)} = `:'')+num(s.c*s.M)+' g'
  :u==='L'?(s.c>1?`${s.c} × 22.4 = `:'')+num(s.c*VM)+' L'
  :u==='molecules'?(s.c>1?s.c+' × ':'')+'6.023 × 10²³ molecules':s.c+' mol';
 const bookVal=(s,u)=>u==='g'?num(s.c*s.M)+' g':u==='L'?num(s.c*VM)+' L':u==='molecules'?(s.c>1?s.c+' × ':'')+'6.023 × 10²³ molecules':s.c+' mol';
 const T=(x,y,t,o='')=>`<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central" font-family="Segoe UI,sans-serif" ${o}>${t}</text>`;

 /* ---------- parse a typed equation and check atom balance ---------- */
 const customGas={};
 function parseEq(str,gasList){
  const s=String(str).replace(/[₀-₉]/g,d=>'₀₁₂₃₄₅₆₇₈₉'.indexOf(d)).replace(/⟶|→|=+>?|-+>/g,'>');
  const sides=s.split('>');
  if(sides.length!==2)return{err:'Put one arrow (->) between the two sides, e.g. 2KClO3 -> 2KCl + 3O2'};
  const sp=[];
  for(let side=0;side<2;side++){
   const terms=sides[side].split('+').map(t=>t.trim()).filter(Boolean);
   if(!terms.length)return{err:'Each side needs at least one substance.'};
   for(let t of terms){
    const typedGas=/\(g\)|↑/.test(t);
    t=t.replace(/\((s|l|g|aq)\)|[↑↓]/g,'').replace(/\s/g,'');
    const m=t.match(/^(\d*)(.*)$/),c=m[1]?+m[1]:1,f=m[2];
    if(!c)return{err:'A coefficient cannot be 0.'};
    if(!/^[A-Z(\[]/.test(f))return{err:`Cannot read "${esc(t)}". Start each formula with a capital letter.`};
    let atoms,M;
    try{atoms=parseFormula(f);M=molarMass(f)}catch(e){return{err:esc(e.message)}}
    if(!(M>0))return{err:`Cannot read "${esc(t)}".`};
    const gas=gasList?gasList.includes(f):(f in customGas?customGas[f]:typedGas||GASES.includes(f));
    sp.push({f,c,side,atoms,M,gas});
   }
  }
  const cnt=[{},{}];
  sp.forEach(x=>{for(const e in x.atoms)cnt[x.side][e]=(cnt[x.side][e]||0)+x.atoms[e]*x.c});
  const els=[...new Set([...Object.keys(cnt[0]),...Object.keys(cnt[1])])];
  const unbal=els.filter(e=>(cnt[0][e]||0)!==(cnt[1][e]||0)).map(e=>({e,l:cnt[0][e]||0,r:cnt[1][e]||0}));
  return{sp,unbal,cnt,els};
 }

 /* ---------- static UI ---------- */
 if(!document.getElementById('rc-style')){const st=document.createElement('style');st.id='rc-style';
  st.textContent='#w-recipe tr.giv td{background:#eef2ff}#w-recipe tr.wan td{background:#ecfdf5}#w-recipe .rc-two{display:flex;flex-wrap:wrap;gap:12px}#w-recipe .rc-two>div{flex:1 1 300px}#w-recipe .rc-link{border:1px solid var(--line);border-radius:10px;padding:8px 12px;margin:12px 0}#w-recipe .rc-link summary{cursor:pointer;font-weight:600}';
  document.head.appendChild(st)}
 const opt=(v,t)=>`<option value="${v}">${t}</option>`;
 el.innerHTML=`<p class="tip">🎯 <b>What to try:</b> pick a reaction, type how much you have, and watch every other substance scale like a recipe.</p>
 <div class="row"><label>Reaction</label><select id="rc-pre">${PRE.map((p,i)=>opt(i,eqText(parseEq(p.e,[]))+' ('+p.ref+')')).join('')}${opt('c','✏️ Type my own…')}</select></div>
 <div class="row" id="rc-crow" hidden><input type="text" id="rc-eq" size="36" value="2KClO3 -> 2KCl + 3O2"><span class="tip">use -> between sides; tick the gases in the table</span></div>
 <div class="row"><label>I have</label><input type="text" id="rc-amt" size="9"><select id="rc-u">${Object.keys(UN).map(k=>opt(k,UN[k])).join('')}</select>
  <label>of</label><select id="rc-g"></select><label>purity</label><input type="number" id="rc-pur" value="100" min="1" max="100" style="min-width:60px;width:70px"><label>%</label></div>
 <div class="row"><label>Find</label><select id="rc-w"></select><label>in</label><select id="rc-wu">${Object.keys(UN).map(k=>opt(k,UN[k])).join('')}</select></div>
 <div id="rc-msg"></div><div id="rc-svg"></div><div id="rc-tab"></div><div id="rc-work"></div>
 <details class="rc-link"><summary>🔗 Linked equations: one product feeds the next reaction (p.96)</summary>
  <div class="row"><label>Burn</label><input type="text" id="lk-m" size="6" value="16"><label>g of</label>
   <select id="lk-1">${opt('S','sulphur: S + O₂ → SO₂')}${opt('C','carbon: C + O₂ → CO₂')}</select></div>
  <div class="row"><label>Make that O₂ by heating</label><select id="lk-2">${opt('KNO3','2KNO₃ → 2KNO₂ + O₂')}${opt('KClO3','2KClO₃ → 2KCl + 3O₂')}</select></div>
  <div id="lk-out"></div></details>
 <p class="idea">💡 <b>Big idea:</b> the coefficients are a recipe in <b>moles</b>: turn what you have into moles, multiply by (coefficient wanted ÷ coefficient given), then turn it back into g or L.</p>
 ${[['Heat 20 g of KClO₃ (first reaction). Predict the volume of O₂ at s.t.p., then check. (book p.96 Q.3(2))','245 g of KClO₃ gives 3 × 22.4 = 67.2 L of O₂ ∴ 20 g gives 67.2 × 20 ÷ 245 = <b>5.486 L</b> (0.2449 mol O₂).'],
   ['Copper + nitric acid: type 63 g of HNO₃. How much Cu reacts, and how much NO forms? (book p.96 Q.3(3))','504 g HNO₃ reacts with 192 g Cu ∴ 63 g reacts with <b>24 g Cu</b>; 504 g gives 44.8 L NO ∴ 63 g gives <b>5.6 L NO</b>.'],
   ['Na₂CO₃ + H₂SO₄: 300 g of Na₂CO₃ that is only 80% pure. Predict the mass of Na₂SO₄. (book p.96 Q.3(9))','Pure Na₂CO₃ = 80 × 300 ÷ 100 = 240 g. 106 g gives 142 g ∴ 240 g gives 142 × 240 ÷ 106 = <b>321.5 g Na₂SO₄</b>.'],
   ['Linked: burn 24 g of carbon; how much KClO₃ must be heated to supply the O₂? (book p.96 Q.3(7))','24 g C = 2 mol, needs 2 mol O₂. 3 mol O₂ come from 2 mol KClO₃ ∴ 2 mol O₂ from 4/3 mol = 4/3 × 122.5 = <b>163.3 g KClO₃</b>.']]
  .map(([q,a])=>`<details class="try"><summary>🎯 Try this: ${q}</summary><p>${a}</p></details>`).join('')}`;
 const $=id=>el.querySelector('#'+id);
 const pre=$('rc-pre'),ceq=$('rc-eq'),amt=$('rc-amt'),u=$('rc-u'),gs=$('rc-g'),pur=$('rc-pur'),ws=$('rc-w'),wu=$('rc-wu');
 let E=null;

 function fillSpecies(){
  const gi=+gs.value||0,wi=+ws.value||0,o=E.sp?E.sp.map((s,i)=>opt(i,sub(s.f))).join(''):'';
  gs.innerHTML=o;ws.innerHTML=o;
  if(E.sp){gs.value=gi<E.sp.length?gi:0;ws.value=wi<E.sp.length?wi:E.sp.length-1}
 }
 function loadPreset(){
  const custom=pre.value==='c';$('rc-crow').hidden=!custom;
  if(custom){E=parseEq(ceq.value);fillSpecies();return}
  const p=PRE[+pre.value];E=parseEq(p.e,p.gas.split(' '));fillSpecies();
  gs.value=p.g;ws.value=p.w;u.value=p.u;wu.value=p.wu;amt.value=p.a;pur.value=100;
 }

 /* ---------- SVG: recipe card + flow + bars ---------- */
 function draw(sp,G,W,ui,wui,given,nG,k,wOut){
  const n=sp.length,colW=720/n;let s='';
  s+=T(380,14,'The recipe (book line): coefficients = moles','font-size="13" fill="#6b7280"');
  sp.forEach((x,i)=>{
   const cx=20+colW*(i+.5),c=COL[i%COL.length],m=Math.min(x.c,13);
   for(let j=0;j<m;j++)s+=`<circle cx="${cx-(m-1)*7+j*14}" cy="38" r="6" fill="${c}" opacity=".85"/>`;
   s+=T(cx,62,sp1(x)+(x.gas?' (g)':''),`font-size="15" font-weight="600" fill="${c}"`);
   if(i<n-1)s+=T(20+colW*(i+1),50,sp[i+1].side!==x.side?'→':'+','font-size="20" fill="#374151"');
  });
  s+=T(380,86,k>0?`Your batch = ${fmt(k)} × the recipe`:'Your batch = ? (type an amount)','font-size="14" font-weight="600" fill="#4f46e5"');
  // flow: given → moles → moles wanted → wanted
  const box=[[given,UN[ui]+' '+sub(G.f)],[nG,'mol '+sub(G.f)],[nG*W.c/G.c,'mol '+sub(W.f)],[wOut,UN[wui]+' '+sub(W.f)]];
  const op=[ui==='mol'?'(already mol)':'÷ '+perMol(ui,G.M),`× ${W.c}/${G.c}`,wui==='mol'?'(already mol)':'× '+perMol(wui,W.M)];
  box.forEach(([v,l],i)=>{const x=10+i*190,fill=i===0?'#eef2ff':i===3?'#ecfdf5':'#f9fafb';
   s+=`<rect x="${x}" y="112" width="150" height="54" rx="10" fill="${fill}" stroke="${i===3?'#059669':'#6366f1'}"/>`;
   s+=T(x+75,131,k>0?fmt(v):'?','font-size="16" font-weight="700" fill="#111827"')+T(x+75,153,l,'font-size="12" fill="#374151"');
   if(i<3){s+=`<line x1="${x+152}" y1="139" x2="${x+186}" y2="139" stroke="#6366f1" stroke-width="2" marker-end="url(#rc-ar)"/>`;
    s+=T(x+170,104,op[i],'font-size="11.5" fill="#4f46e5"')}
  });
  // bars ∝ mass
  const masses=sp.map(x=>k>0?k*x.c*x.M:x.c*x.M),mx=Math.max(...masses);
  s+=T(380,190,k>0?'Your batch, bar length ∝ mass':'Book line, bar length ∝ mass','font-size="13" fill="#6b7280"');
  sp.forEach((x,i)=>{const y=204+i*28,c=COL[i%COL.length],w=Math.max(2,500*masses[i]/mx);
   s+=`<text x="120" y="${y+10}" text-anchor="end" dominant-baseline="central" font-family="Segoe UI,sans-serif" font-size="14" fill="${c}" font-weight="600">${sub(x.f)}${x===G?' ◀ given':''}</text>`;
   s+=`<rect x="130" y="${y}" width="${w}" height="20" rx="5" fill="${c}" opacity="${x===W||x===G?1:.55}"/>`;
   s+=`<text x="${Math.min(135+w,560)}" y="${y+10}" dominant-baseline="central" font-family="Segoe UI,sans-serif" font-size="12" fill="#111827">${fmt(masses[i])} g${x.gas?' · '+fmt(masses[i]/x.M*VM)+' L':''}</text>`;
  });
  return `<svg viewBox="0 0 760 ${214+n*28}" style="max-width:760px"><defs><marker id="rc-ar" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="#6366f1"/></marker></defs>${s}</svg>`;
 }

 /* ---------- main render ---------- */
 function render(){
  const msg=$('rc-msg'),sv=$('rc-svg'),tb=$('rc-tab'),wk=$('rc-work');
  if(E.err){msg.innerHTML=`<div class="warnbox">✋ ${E.err}</div>`;sv.innerHTML=tb.innerHTML=wk.innerHTML='';return}
  if(E.unbal.length){
   msg.innerHTML=`<div class="warnbox">⚖️ <b>Not balanced yet:</b> ${E.unbal.map(b=>`${b.e} has ${b.l} on the left but ${b.r} on the right`).join('; ')}. Fix the coefficients first; a recipe that loses atoms cannot be scaled.</div>`;
   tb.innerHTML=`<table class="t"><tr><th>Atom</th>${E.els.map(e=>`<th>${e}</th>`).join('')}</tr><tr><td>Left</td>${E.els.map(e=>`<td>${E.cnt[0][e]||0}</td>`).join('')}</tr><tr><td>Right</td>${E.els.map(e=>`<td>${E.cnt[1][e]||0}</td>`).join('')}</tr></table>`;
   sv.innerHTML=wk.innerHTML='';return}
  const sp=E.sp,G=sp[+gs.value]||sp[0],W=sp[+ws.value]||sp[sp.length-1];
  const a=readNum(amt.value),p=readNum(pur.value),ui=u.value;let wui=wu.value;const notes=[];
  let ok=a>0&&isFinite(a);
  if(!ok)notes.push('Type an amount above 0 (e.g. 20 or 6.023x10^23).');
  if(ui==='L'&&!G.gas){ok=false;notes.push(`${sub(G.f)} is not a gas at s.t.p., so give it in g, mol or molecules.`)}
  if(wui==='L'&&!W.gas){wui='g';notes.push(`${sub(W.f)} is not a gas, so it is shown in g.`)}
  const pOK=p>0&&p<=100,usePur=ui==='g'&&pOK&&p<100;
  if(!pOK)notes.push('Purity must be between 1 and 100 % (using 100 %).');
  if(pOK&&p<100&&ui!=='g')notes.push('Purity only applies to a mass in g.');
  const pure=ok?(usePur?a*p/100:a):0,nG=ok?toMol(pure,ui,G.M):0,k=ok?nG/G.c:0,wOut=ok?fromMol(nG*W.c/G.c,wui,W.M):0;
  msg.innerHTML=notes.length?`<div class="warnbox">✋ ${notes.join('<br>')}</div>`:'';
  sv.innerHTML=draw(sp,G,W,ui,wui,ok?pure:0,nG,k,wOut);
  // recipe table
  const custom=pre.value==='c',sum=side=>sp.filter(x=>x.side===side).reduce((t,x)=>t+x.c*x.M,0);
  tb.innerHTML=`<table class="t"><tr><th></th><th>Substance</th><th>Coef.</th><th>M (g/mol)</th><th>Book line</th><th>Your moles</th><th>Your mass</th><th>Gas vol. (s.t.p.)</th>${custom?'<th>gas?</th>':''}</tr>
  ${sp.map((x,i)=>{const n=k*x.c;return `<tr class="${x===G?'giv':x===W?'wan':''}"><td>${x.side?'product':'reactant'}</td><td><b style="color:${COL[i%COL.length]}">${sub(x.f)}</b></td><td>${x.c}</td><td>${num(x.M)}</td>
   <td>${x.c} × ${num(x.M)} = ${num(x.c*x.M)} g${x.gas?` = ${num(x.c*VM)} L`:''}</td><td>${ok?fmt(n)+' mol':'—'}</td><td>${ok?fmt(n*x.M)+' g':'—'}</td><td>${x.gas?(ok?fmt(n*VM)+' L':'—'):'not a gas'}</td>
   ${custom?`<td><input type="checkbox" data-gi="${i}" ${x.gas?'checked':''}></td>`:''}</tr>`}).join('')}</table>
  <p class="tip">⚖️ Mass is conserved: reactants ${num(sum(0))} g = products ${num(sum(1))} g in the book line.</p>`;
  tb.querySelectorAll('input[data-gi]').forEach(cb=>cb.onchange=()=>{const x=sp[+cb.dataset.gi];x.gas=customGas[x.f]=cb.checked;render()});
  if(!ok){wk.innerHTML='';return}
  // working: proportion (p.92) + mole method
  const verb=G===W?'is':!G.side&&W.side?'gives':G.side&&!W.side?'comes from':!G.side?'reacts with':'is formed along with';
  const gU=ui==='L'?'L':UN[ui],wU=wui==='L'?'L':UN[wui],bg=bookVal(G,ui),bw=bookVal(W,wui);
  const bgN=+fromMol(G.c,ui,G.M).toPrecision(6),bwN=+fromMol(W.c,wui,W.M).toPrecision(6);
  const bigU=(x,c)=>v=>x==='molecules'?(c>1?c+' × ':'')+'6.023 × 10²³':num(v);
  const prop=[`${eqText(E)}`,
   ...(usePur?[`Pure ${sub(G.f)} = ${num(p)} × ${num(a)} ÷ 100 = ${fmt(pure)} g (only the pure part reacts)`]:[]),
   `${sp1(G)} = ${book(G,ui)}; ${sp1(W)} = ${book(W,wui)}`,
   `${bg} of ${sub(G.f)} ${verb} ${bw} of ${sub(W.f)}`,
   `∴ ${fmt(pure)} ${gU} ${verb} ${bigU(wui,W.c)(bwN)} × ${fmt(pure)} ÷ ${bigU(ui,G.c)(bgN)} = <b>${fmt(wOut)} ${wU}</b> of ${sub(W.f)}`];
  const mole=[ui==='mol'?`${sub(G.f)} = ${fmt(nG)} mol`:`${fmt(pure)} ${gU} ÷ ${perMol(ui,G.M)} = ${fmt(nG)} mol ${sub(G.f)}`,
   `${sub(G.f)} : ${sub(W.f)} = ${G.c} : ${W.c} ∴ ${fmt(nG)} × ${W.c}/${G.c} = ${fmt(nG*W.c/G.c)} mol ${sub(W.f)}`,
   wui==='mol'?`= <b>${fmt(wOut)} mol</b>`:`${fmt(nG*W.c/G.c)} mol × ${perMol(wui,W.M)} = <b>${fmt(wOut)} ${wU}</b>`];
  wk.innerHTML=`<div class="rc-two"><div class="work"><b>Book proportion method (p.92)</b><ol>${prop.map(x=>`<li>${x}</li>`).join('')}</ol></div>
   <div class="work"><b>Mole method</b><ol>${mole.map(x=>`<li>${x}</li>`).join('')}</ol></div></div>`;
 }

 /* ---------- linked equations mini-mode ---------- */
 function linked(){
  const out=$('lk-out'),m=readNum($('lk-m').value),f=$('lk-1').value,src=$('lk-2').value;
  if(!(m>0&&isFinite(m))){out.innerHTML='<div class="warnbox">Type a mass above 0.</div>';return}
  const Mf=AM[f],S=src==='KNO3'?{f:'KNO3',c:2,o:1,M:molarMass('KNO3')}:{f:'KClO3',c:2,o:3,M:molarMass('KClO3')};
  const nf=m/Mf,nO=nf,ns=nO*S.c/S.o;
  out.innerHTML=`<div class="work"><ol><li>${f} + O₂ → ${f}O₂: ${num(m)} g ${f} ÷ ${Mf} = ${fmt(nf)} mol ${f}, needs ${fmt(nO)} mol O₂ (= ${fmt(nO*VM)} L = ${fmt(nO*VM*1000)} cc at s.t.p.) ← the link</li>
   <li>${S.c}${sub(S.f)} → … + ${S.o>1?S.o:''}O₂: ${S.o} mol O₂ ${S.o>1?'come':'comes'} from ${S.c} mol ${sub(S.f)} ∴ ${fmt(nO)} × ${S.c}/${S.o} = ${fmt(ns)} mol ${sub(S.f)}</li>
   <li>${sub(S.f)} = ${num(S.M)} g/mol ∴ mass = ${fmt(ns)} × ${num(S.M)} = <b>${fmt(ns*S.M)} g ${sub(S.f)}</b></li></ol>
   <p class="tip">Stay in moles across the link: no need to work out the cc.</p></div>`;
 }

 /* ---------- events ---------- */
 pre.addEventListener('change',()=>{loadPreset();render()});
 ceq.addEventListener('input',()=>{E=parseEq(ceq.value);fillSpecies();render()});
 [amt,u,gs,pur,ws,wu].forEach(x=>{x.addEventListener('input',render);x.addEventListener('change',render)});
 ['lk-m','lk-1','lk-2'].forEach(id=>{$(id).addEventListener('input',linked);$(id).addEventListener('change',linked)});
 loadPreset();render();linked();
 }});
