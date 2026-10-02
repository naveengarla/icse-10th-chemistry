/* Empirical formula builder (Dalal p.88–91): % → ÷ atomic mass → ÷ smallest → whole numbers → EF → (EF)n.
   Second view: % composition of any formula (incl. water of crystallisation). */
LAB.add({id:'empirical',icon:'🧮',name:'Empirical formula builder',blurb:'% → simplest ratio → formula',
 ref:'p.88–91 · practice page 4.3',
 mount(el){
 /* ---------- styles (once) ---------- */
 if(!document.getElementById('ewb-css')){const s=document.createElement('style');s.id='ewb-css';s.textContent=`
#w-empirical .ewb-r{display:flex;gap:8px;align-items:center;margin:4px 0}
#w-empirical .ewb-r input{width:90px;min-width:0}
#w-empirical .ewb-r select{min-width:70px}
#w-empirical td.amb{background:#fef3c7;font-weight:700;color:#92400e}
#w-empirical td.min{font-weight:700;color:#4f46e5}
#w-empirical td.hid,#w-empirical th.hid{color:#cbd5e1;background:#f8fafc}
#w-empirical .amber{background:#fef3c7;border:1px solid #f59e0b;border-radius:10px;padding:10px 14px;margin:10px 0}
#w-empirical h4{margin:16px 0 4px}
#w-empirical .blk{animation:ewbdrop .45s ease-out both}
@keyframes ewbdrop{from{transform:translateY(-40px);opacity:0}to{transform:none;opacity:1}}
#w-empirical .lg{display:inline-flex;align-items:center;gap:4px;margin-right:12px;font-size:14px}
#w-empirical .lg i{width:12px;height:12px;border-radius:3px;display:inline-block}`;document.head.appendChild(s)}

 /* ---------- data & helpers ---------- */
 const W='H2O', am=e=>e===W?18:AM[e], nm=e=>e===W?'H₂O':e;
 const COL={H:'#e5e7eb',C:'#374151',N:'#3b82f6',O:'#ef4444',S:'#facc15',Na:'#a855f7',K:'#c084fc',Cu:'#d97706',
  Fe:'#92400e',Al:'#94a3b8',Cl:'#22c55e',Zn:'#64748b',Ca:'#14b8a6',Mg:'#10b981',P:'#f97316',Cr:'#16a34a',[W]:'#60a5fa'};
 const col=(e,i)=>COL[e]||['#f472b6','#2dd4bf','#818cf8','#fb923c'][i%4];
 const tx=(x,y,t,o='')=>`<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central" font-family="Segoe UI,sans-serif" ${o}>${t}</text>`;
 const PRE=[
  {n:'Na₂S₂O₃ (book p.88)',rows:[['Na',29.11],['S',40.51],['O',30.38]]},
  {n:'C 26.59, H 2.22, O 71.19 %, VD 45 (p.89)',rows:[['C',26.59],['H',2.22],['O',71.19]],vd:45},
  {n:'C 40, H 6.7, O 53.3 %, VD 30 (p.90 F1)',rows:[['C',40],['H',6.7],['O',53.3]],vd:30},
  {n:'Hydrocarbon 82.8 % C, VD 29 (p.96 Q.2(7))',rows:[['C',82.8]],rest:'H',vd:29},
  {n:'C 57.82, O 38.58 %, rest H, VD 83 (p.95 Q.2(1))',rows:[['C',57.82],['O',38.58]],rest:'H',vd:83},
  {n:'Hydrated salt, rest is water (p.96 Q.2(9))',rows:[['Cu',25.5],['S',12.9],['O',25.6]],rest:W},
  {n:'Al, K, S, rest oxygen (p.96 Q.2(11))',rows:[['Al',10.5],['K',15.1],['S',24.8]],rest:'O'},
  {n:'Fe 72.41, O 27.59 % (extra: a ×3 case)',rows:[['Fe',72.41],['O',27.59]]}];
 const S={rows:[],rest:'O',mt:'VD',mv:'',col:2,mode:'b',pf:'Na2CO3.10H2O'};
 const load=i=>{const p=PRE[i];S.rows=p.rows.map(([e,v])=>({e,p:String(v)}));S.rest=p.rest||'O';S.mv=p.vd?String(p.vd):'';S.mt='VD';S.col=2;draw()};

 /* ---------- skeleton ---------- */
 el.innerHTML=`<p class="tip">🎯 <b>What to try:</b> pick a book problem (or type your own %), then press <b>Next column ▶</b> and predict each column before it appears.</p>
<div class="row"><button class="chip on" data-m="b">% → formula</button><button class="chip" data-m="p">formula → % composition</button></div>
<div class="ewb-b">
 <div class="row"><label>Book problem</label><select class="ewb-pre"><option value="">— type your own —</option>${PRE.map((p,i)=>`<option value="${i}">${p.n}</option>`).join('')}</select></div>
 <div class="ewb-rows"></div>
 <div class="row"><button class="btn ghost ewb-add">＋ Add element</button></div>
 <div class="ewb-sum"></div>
 <div class="row"><button class="btn ewb-next">Next column ▶</button><button class="btn ghost ewb-all">Show all</button><button class="btn ghost ewb-reset">Hide columns</button></div>
 <div class="ewb-tbl"></div><div class="ewb-rule"></div><div class="ewb-ef"></div>
 <h4>Empirical → molecular formula</h4>
 <div class="row"><button class="chip" data-t="M">I know M (molecular weight)</button><button class="chip" data-t="VD">I know VD (vapour density)</button>
  <input type="text" class="ewb-mv" placeholder="e.g. 29"></div>
 <div class="ewb-mf"></div>
</div>
<div class="ewb-p" style="display:none">
 <div class="row"><label>Formula</label><input type="text" class="ewb-f" value="${S.pf}" placeholder="e.g. CuSO4.5H2O">
  ${[['Na2CO3.10H2O','washing soda'],['CuSO4.5H2O','blue vitriol'],['K2Cr2O7',''],['CO(NH2)2','urea']].map(([f,n])=>`<button class="chip" data-f="${f}">${sub(f)}${n?' '+n:''}</button>`).join('')}</div>
 <div class="ewb-pc"></div>
</div>
<p class="idea">💡 <b>Big idea:</b> % by mass ÷ atomic mass gives the ratio of ATOMS. Make it whole (×2, ×3, ×4 if needed), then n = M ÷ EF weight.</p>
<div class="try"><b>🎯 Try this</b>
<details><summary>1. Na₂S₂O₃ (book p.88): which element will NOT give a whole number in the “÷ smallest” column?</summary><p>Oxygen: 30.38 ÷ 16 = 1.898, and 1.898 ÷ 1.266 = 1.5. It ends in .5, so multiply ALL by 2 → 2 : 2 : 3 = <b>Na₂S₂O₃</b>. <button class="btn ghost" data-l="0">Load it</button></p></details>
<details><summary>2. A hydrocarbon has 82.8 % C and VD 29 (book p.96 Q.2(7)). Predict the molecular formula.</summary><p>The rest is H = 17.2 %. C 6.9 : H 17.2 = 1 : 2.49 → ×2 → C₂H₅ (EF weight 29). M = 2 × 29 = 58, n = 58 ÷ 29 = 2 → <b>C₄H₁₀</b> (butane). <button class="btn ghost" data-l="3">Load it</button></p></details>
<details><summary>3. Cu 25.5, S 12.9, O 25.6 %, the rest is water (book p.96 Q.2(9)). What is the formula?</summary><p>Water = 36 %. Treat H₂O as one unit, M = 18: 36 ÷ 18 = 2.0. Divide by 0.398 → Cu 1, S 1, O 4, H₂O 5 → <b>CuSO₄·5H₂O</b>. <button class="btn ghost" data-l="5">Load it</button></p></details>
<details><summary>4. Guess first: what % of washing soda Na₂CO₃·10H₂O is just water (book p.87 E 3)? Check it in the % composition view.</summary><p>Molar mass = 286 g; water = 10 × 18 = 180 g → 180 ÷ 286 × 100 = <b>62.94 %</b>. Almost two-thirds of the crystal is water!</p></details>
</div>`;
 const $=q=>el.querySelector(q);

 /* ---------- input rows ---------- */
 const opts=sel=>Object.keys(AM).concat(W).map(e=>`<option value="${e}"${e===sel?' selected':''}>${nm(e)}</option>`).join('');
 function drawRows(){
  $('.ewb-rows').innerHTML=S.rows.map((r,i)=>`<div class="ewb-r"><select data-i="${i}" class="ewb-e">${opts(r.e)}</select>
   <input type="text" data-i="${i}" class="ewb-v" value="${r.p}" placeholder="%"> % <button class="chip" data-x="${i}" title="remove">✕</button></div>`).join('');
 }
 function draw(){drawRows();$('.ewb-mv').value=S.mv;update()}

 /* ---------- the maths ---------- */
 function analyse(){
  const rs=[],seen={};
  for(const [i,r] of S.rows.entries()){
   const p=readNum(r.p);
   if(String(r.p).trim()==='')return{err:`Row ${i+1} (${nm(r.e)}): type a number`};
   if(!isFinite(p)||p<=0)return{err:`Row ${i+1} (${nm(r.e)}): “${r.p}” is not a number. Type a % like 40`};
   if(seen[r.e])return{err:`${nm(r.e)} is listed twice. Remove one row`};
   seen[r.e]=1;rs.push({e:r.e,p,m:p/am(r.e)});
  }
  if(rs.length<2)return{err:'Add at least two elements (or use “the rest is …” below)',rs};
  const sum=rs.reduce((a,x)=>a+x.p,0),min=Math.min(...rs.map(x=>x.m));
  rs.forEach(x=>x.r=x.m/min);
  let k=[1,2,3,4,5,6].find(m=>rs.every(x=>Math.abs(x.r*m-Math.round(x.r*m))<=0.1)),fail=!k;k=k||1;
  rs.forEach(x=>x.n=Math.max(1,Math.round(x.r*k)));
  const g=rs.reduce((a,x)=>gcd(a,x.n),0);if(g>1)rs.forEach(x=>x.n/=g);
  const efw=rs.reduce((a,x)=>a+x.n*am(x.e),0);
  return{rs,sum,min,k,fail,efw};
 }
 const formula=(rs,n=1)=>{const w=rs.find(x=>x.e===W),c=x=>x.n*n>1?x.n*n:'';
  const o=x=>rs.some(y=>y.e==='C')?({C:0,H:1}[x.e]??2):0; // carbon compounds: write C, H first (book style)
  return sub(rs.filter(x=>x.e!==W).slice().sort((a,b)=>o(a)-o(b)).map(x=>x.e+c(x)).join('')+(w?'·'+c(w)+'H2O':''))};

 /* ---------- render: sum check, table, rule, EF, MF ---------- */
 function update(){
  const A=analyse(),present=S.rows.map(r=>r.e);
  // % sum check + "the rest is …"
  let sumH='';
  if(!A.err||A.rs){const rs=A.rs||[],sum=rs.reduce((a,x)=>a+x.p,0);
   if(A.err&&!rs.length)sumH='';
   else if(sum<99.5){const free=Object.keys(AM).concat(W).filter(e=>!present.includes(e));if(!free.includes(S.rest))S.rest=free[0];
    sumH=`<div class="warnbox">⚠️ The % add up to only <b>${fmt(sum)} %</b>, so <b>${fmt(100-sum)} %</b> is missing. The book often says “the rest is oxygen” (or water).
     <div class="row">The rest is <select class="ewb-rest">${free.map(e=>`<option value="${e}"${e===S.rest?' selected':''}>${nm(e)}</option>`).join('')}</select><button class="btn ewb-fill">Fill the rest ▶</button></div></div>`}
   else if(sum>100.5)sumH=`<div class="warnbox">⚠️ The % add up to <b>${fmt(sum)} %</b>: that is more than 100 %. Check for a typing mistake.</div>`;
   else sumH=`<p class="tip">✅ Total = ${fmt(sum)} % (close enough to 100 %).</p>`}
  $('.ewb-sum').innerHTML=sumH;
  ['.ewb-tbl','.ewb-rule','.ewb-ef','.ewb-mf'].forEach(q=>$(q).innerHTML='');
  if(A.err){$('.ewb-tbl').innerHTML=`<div class="warnbox">✏️ ${A.err}</div>`;return}
  const {rs,k,fail,efw}=A,c=S.col,h=i=>c>=i?'':' class="hid"';
  // table, column by column
  const cell=(i,txt,cls='')=>c>=i?`<td${cls?` class="${cls}"`:''}>${txt}</td>`:'<td class="hid">?</td>';
  $('.ewb-tbl').innerHTML=`<table class="t"><tr><th>Element</th><th>% by mass</th><th${h(3)}>÷ atomic mass<br><small>(relative no. of atoms)</small></th><th${h(4)}>÷ smallest</th><th${h(5)}>simple whole-number ratio</th></tr>`+
   rs.map(x=>{const near=Math.abs(x.r-Math.round(x.r))<=0.1;
    const last=k>1?`${x.r.toFixed(2)} × ${k} = ${x.n}`:near&&Math.abs(x.r-Math.round(x.r))>0.005?`${x.r.toFixed(2)} ≈ ${x.n}`:`${x.n}`;
    return `<tr><td><b>${nm(x.e)}</b></td><td>${fmt(x.p)}</td>${cell(3,`${fmt(x.p)} ÷ ${am(x.e)} = ${fmt(x.m)}`,x.m===A.min?'min':'')}
     ${cell(4,`${fmt(x.m)} ÷ ${fmt(A.min)} = ${x.r.toFixed(2)}`,k>1&&!near?'amb':'')}${cell(5,last,k>1?'amb':'')}</tr>`}).join('')+'</table>'+
   (c===3?'<p class="tip">The smallest number is in <b style="color:#4f46e5">bold</b>. Next, divide every row by it.</p>':'');
  // rounding rule, made visible
  if(c>=4){const bad=rs.find(x=>Math.abs(x.r-Math.round(x.r))>0.1),why={2:'ends in about .5',3:'ends in about .33 or .67',4:'ends in about .25 or .75'}[k]||'is far from a whole number';
   $('.ewb-rule').innerHTML=fail?`<div class="warnbox">⚠️ No neat multiplier (×2 … ×6) makes these whole. The data may be rough: the table just rounds to the nearest whole number. Check your %.</div>`:
    k>1?`<div class="amber">🟧 <b>${nm(bad.e)}</b> came out <b>${bad.r.toFixed(2)}</b>, which ${why}. Do NOT round it! Multiply <b>ALL</b> the ratios by <b>${k}</b>.</div>`:
    `<div class="out">✅ Every ratio is within 0.1 of a whole number, so just round them.</div>`}
  if(c<5){$('.ewb-mf').innerHTML='<p class="tip">Finish the table first (press <b>Show all</b>).</p>';return}
  // empirical formula
  const ef=formula(rs),wsum=rs.map(x=>`${x.n>1?x.n+' × ':''}${am(x.e)}`).join(' + ');
  $('.ewb-ef').innerHTML=`<div class="out">${rs.map(x=>nm(x.e)).join(' : ')} = ${rs.map(x=>x.n).join(' : ')} &nbsp;→&nbsp; Empirical formula = <span class="big">${ef}</span>
   ${rs.some(x=>x.e===W)?'<br><small>Water of crystallisation is treated as one unit, H₂O = 18.</small>':''}</div>`;
  // molecular formula
  const v=readNum(S.mv),M=S.mt==='VD'?2*v:v;
  let w=`<li>Empirical formula weight of ${ef} = ${wsum} = <b>${fmt(efw)}</b></li>`;
  if(String(S.mv).trim()===''||!isFinite(v)||v<=0){$('.ewb-mf').innerHTML=`<ol class="work">${w}<li>Type the ${S.mt==='VD'?'vapour density':'molecular weight'} above (a number) to find the molecular formula.</li></ol>`;return}
  if(S.mt==='VD')w+=`<li>Molecular weight = 2 × V.D. = 2 × ${fmt(v)} = <b>${fmt(M)}</b></li>`;
  const n=M/efw,nr=Math.round(n);w+=`<li>n = molecular weight ÷ EF weight = ${fmt(M)} ÷ ${fmt(efw)} = <b>${fmt(n,3)}</b></li>`;
  if(nr<1||Math.abs(n-nr)>0.1){$('.ewb-mf').innerHTML=`<ol class="work">${w}</ol><div class="warnbox">⚠️ n must be a whole number (1, 2, 3 …). ${fmt(n,3)} is not, so check M / VD or the %.</div>`;return}
  const mf=formula(rs,nr);
  w+=`<li>Molecular formula = (${ef})${nr>1?sub('x'+nr).slice(1):''} = <b>${mf}</b></li>`;
  $('.ewb-mf').innerHTML=`<ol class="work">${w}</ol>`+blocks(rs,ef,mf,nr,efw);
 }

 /* ---------- SVG: n copies of the EF block stack into the molecule ---------- */
 function blocks(rs,ef,mf,n,efw){
  const show=Math.min(n,8),bh=36,H=Math.max(150,50+show*bh);let s='';
  for(let i=0;i<show;i++){const y=H-20-(i+1)*bh;let atoms='',ax=150;
   rs.forEach((x,j)=>{for(let a=0;a<Math.min(x.n,6);a++){atoms+=`<circle cx="${ax}" cy="${y+bh/2-2}" r="6" fill="${col(x.e,j)}" stroke="#334155" stroke-width=".8"/>`;ax+=14}ax+=6});
   s+=`<g class="blk" style="animation-delay:${(i*0.12).toFixed(2)}s"><rect x="40" y="${y}" width="${Math.max(200,ax-30)}" height="${bh-4}" rx="8" fill="#eef2ff" stroke="#6366f1"/>${tx(90,y+bh/2-2,ef,'font-size="15" font-weight="600" fill="#4f46e5"')}${atoms}</g>`}
  if(n>show)s+=tx(150,22,`… ${n} blocks in all`,'font-size="13" fill="#6b7280"');
  s+=`<path d="M380 ${H/2}h80" stroke="#059669" stroke-width="3" marker-end="url(#ewbA)"/>`+
   tx(420,H/2-16,`× ${n}`,'font-size="15" fill="#059669" font-weight="700"')+
   tx(580,H/2-12,mf,'font-size="22" font-weight="700" fill="#065f46"')+tx(580,H/2+16,`M = ${n} × ${fmt(efw)} = ${fmt(n*efw)}`,'font-size="13" fill="#374151"');
  return `<svg viewBox="0 0 700 ${H}"><defs><marker id="ewbA" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="#059669"/></marker></defs>${s}</svg>`;
 }

 /* ---------- % composition view ---------- */
 function pc(){
  const box=$('.ewb-pc'),f=String(S.pf).trim();let c,M;
  try{if(!f)throw 0;c=parseFormula(f);M=molarMass(f);if(!(M>0))throw 0}
  catch(e){box.innerHTML='<div class="warnbox">✏️ Type a formula like CuSO4.5H2O or Na2CO3.10H2O (capital letter for each element).</div>';return}
  const nf=f.replace(/[₀-₉]/g,d=>'₀₁₂₃₄₅₆₇₈₉'.indexOf(d)).replace(/[·•*]/g,'.').replace(/\s/g,'');
  const wm=nf.split('.').slice(1).map(p=>p.match(/^(\d*)H2O$/)).filter(Boolean).reduce((a,m)=>a+(+m[1]||1)*18,0);
  const anh=nf.split('.').filter(p=>!/^\d*H2O$/.test(p)).join('.'),ca=anh?parseFormula(anh):{}; // anhydrous part
  const els=Object.keys(c),parts=els.map((e,i)=>({e,m:c[e]*AM[e],c:col(e,i)}));
  let x=20,bar='';const bw=660;
  parts.forEach(p=>{const w=bw*p.m/M;bar+=`<rect x="${x}" y="40" width="${w}" height="50" fill="${p.c}" stroke="#fff"/>`+(w>55?tx(x+w/2,65,`${p.e} ${(100*p.m/M).toFixed(1)}%`,`font-size="13" font-weight="600" fill="${['C','Fe','Zn','Cr'].includes(p.e)?'#fff':'#111'}"`):'');x+=w});
  if(wm){const w1=bw*(M-wm)/M;bar+=`<rect x="20" y="115" width="${w1}" height="40" fill="#e5e7eb" stroke="#6b7280"/><rect x="${20+w1}" y="115" width="${bw-w1}" height="40" fill="#bfdbfe" stroke="#1d4ed8"/>`+
   tx(20+w1/2,135,`rest ${fmt(M-wm)} g`,'font-size="13"')+tx(20+w1+(bw-w1)/2,135,`water ${fmt(wm)} g = ${(100*wm/M).toFixed(2)} %`,'font-size="13" font-weight="700" fill="#1d4ed8"')}
  box.innerHTML=`<svg viewBox="0 0 700 ${wm?170:105}">${tx(350,20,`${sub(nf)}: molar mass = ${fmt(M)} g`,'font-size="15" font-weight="600" fill="#4f46e5"')}${bar}</svg>
   <div>${parts.map(p=>`<span class="lg"><i style="background:${p.c}"></i>${p.e} ${(100*p.m/M).toFixed(2)} %</span>`).join('')}</div>
   <ol class="work"><li>Molar mass = ${Object.entries(ca).map(([e,k])=>(k>1?k+' × ':'')+AM[e]).join(' + ')}${wm?` + ${wm/18>1?wm/18+' × ':''}18`:''} = <b>${fmt(M)} g</b></li>
   ${parts.map(p=>`<li>% ${p.e} = ${fmt(p.m)} ÷ ${fmt(M)} × 100 = <b>${(100*p.m/M).toFixed(2)} %</b></li>`).join('')}
   ${wm?`<li>% water of crystallisation = ${fmt(wm)} ÷ ${fmt(M)} × 100 = <b>${(100*wm/M).toFixed(2)} %</b></li>`:''}</ol>`;
 }

 /* ---------- events ---------- */
 el.addEventListener('input',e=>{const t=e.target;
  if(t.matches('.ewb-v')){S.rows[+t.dataset.i].p=t.value;update()}
  else if(t.matches('.ewb-mv')){S.mv=t.value;update()}
  else if(t.matches('.ewb-f')){S.pf=t.value;pc()}});
 el.addEventListener('change',e=>{const t=e.target;
  if(t.matches('.ewb-pre')){if(t.value!=='')load(+t.value)}
  else if(t.matches('.ewb-e')){S.rows[+t.dataset.i].e=t.value;update()}
  else if(t.matches('.ewb-rest'))S.rest=t.value});
 el.addEventListener('click',e=>{const t=e.target.closest('button');if(!t)return;
  if(t.dataset.m){S.mode=t.dataset.m;el.querySelectorAll('[data-m]').forEach(b=>b.classList.toggle('on',b===t));
   $('.ewb-b').style.display=S.mode==='b'?'':'none';$('.ewb-p').style.display=S.mode==='p'?'':'none';return}
  if(t.dataset.t){S.mt=t.dataset.t;el.querySelectorAll('[data-t]').forEach(b=>b.classList.toggle('on',b===t));update();return}
  if(t.dataset.f){S.pf=t.dataset.f;$('.ewb-f').value=S.pf;pc();return}
  if(t.dataset.l){load(+t.dataset.l);$('.ewb-pre').value=t.dataset.l;if(S.mode!=='b')el.querySelector('[data-m="b"]').click();return}
  if(t.dataset.x){S.rows.splice(+t.dataset.x,1);draw();return}
  if(t.matches('.ewb-add')){const used=S.rows.map(r=>r.e);S.rows.push({e:['C','H','O','N','S'].find(x=>!used.includes(x))||'Cl',p:''});draw();return}
  if(t.matches('.ewb-fill')){const sum=S.rows.reduce((a,r)=>a+(readNum(r.p)>0?readNum(r.p):0),0);
   if(sum<100&&!S.rows.some(r=>r.e===S.rest)){S.rows.push({e:S.rest,p:String(+(100-sum).toFixed(2))});draw()}return}
  if(t.matches('.ewb-next')){S.col=Math.min(5,S.col+1);update();return}
  if(t.matches('.ewb-all')){S.col=5;update();return}
  if(t.matches('.ewb-reset')){S.col=2;update()}});
 el.querySelector('[data-t="VD"]').classList.add('on');
 load(0);pc();
 }});
