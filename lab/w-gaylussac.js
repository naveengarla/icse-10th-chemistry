/* Gay-Lussac gas reactor: pick a gas reaction, set the two reactant volumes, press React.
   Shows BEFORE/AFTER bars, the limiting gas "used up", the excess left, and book-style working. */
LAB.add({id:'gaylussac',icon:'🎈',name:'Gay-Lussac gas reactor',
 blurb:'mix gases, react, see what is left',ref:'p.71–73 · practice page 4.1',
 mount(el){
 /* ---------- data ---------- */
 // r/p: [formula, coefficient]; water is the only product that can be liquid
 const RX=[
  {r:[['H2',2],['O2',1]],p:[['H2O',2]],a:[20,20]},
  {r:[['N2',1],['H2',3]],p:[['NH3',2]],a:[100,240]},
  {r:[['H2',1],['Cl2',1]],p:[['HCl',2]],a:[6,4],u:'L'},
  {r:[['CO',2],['O2',1]],p:[['CO2',2]],a:[450,200],u:'cm³'},
  {r:[['CH4',1],['O2',2]],p:[['CO2',1],['H2O',2]],a:[40,60],u:'cm³'},
  {r:[['C2H6',2],['O2',7]],p:[['CO2',4],['H2O',6]],a:[300,4000]},
  {r:[['C2H4',1],['O2',3]],p:[['CO2',2],['H2O',2]],a:[200,600],u:'ml'},
  {r:[['C3H8',1],['O2',5]],p:[['CO2',3],['H2O',4]],a:[50,300]},
  {r:[['C2H2',2],['O2',5]],p:[['CO2',4],['H2O',2]],a:[100,300]},
  {r:[['N2',1],['O2',1]],p:[['NO',2]],a:[125,200],u:'ml'}];
 const COL={H2:'#60a5fa',O2:'#f87171',N2:'#a78bfa',Cl2:'#a3e635',CO:'#94a3b8',CH4:'#fb923c',C2H6:'#f59e0b',
  C2H4:'#facc15',C3H8:'#ea580c',C2H2:'#d97706',H2O:'#38bdf8',NH3:'#c084fc',HCl:'#34d399',CO2:'#64748b',NO:'#f472b6'};
 const term=([f,c])=>(c>1?c:'')+sub(f);
 const eqText=(R,st)=>R.r.map(x=>term(x)+'(g)').join(' + ')+' → '+R.p.map(x=>term(x)+(x[0]==='H2O'?st:'(g)')).join(' + ');
 /* ---------- state ---------- */
 const S={i:5,steam:false,water:false,koh:false,t:0,raf:0};
 /* ---------- one-time styles ---------- */
 if(!document.getElementById('st-gaylussac')){const st=document.createElement('style');st.id='st-gaylussac';
  st.textContent=`#w-gaylussac .gl-in{width:110px}#w-gaylussac .gl-msg{color:#b91c1c;font-size:13px}
  #w-gaylussac .gl-rule{font-size:14px;margin:6px 0}#w-gaylussac select{max-width:100%}`;document.head.appendChild(st)}
 /* ---------- layout ---------- */
 el.innerHTML=`<p class="tip">🧪 <b>What to try:</b> pick a reaction, type two gas volumes, guess which gas runs out, then press <b>React ▶</b>.</p>
 <div class="row"><label>Reaction</label><select id="gl-rx">${RX.map((R,k)=>`<option value="${k}">${eqText(R,'')}</option>`).join('')}</select></div>
 <div class="row"><label id="gl-la"></label><input type="text" class="gl-in" id="gl-a">
  <label id="gl-lb"></label><input type="text" class="gl-in" id="gl-b">
  <select id="gl-u"><option>cc</option><option>cm³</option><option>ml</option><option>L</option></select>
  <span class="gl-msg" id="gl-msg"></span></div>
 <div class="row" id="gl-tog"></div>
 <div class="row"><button class="btn" id="gl-go">React ▶</button><button class="btn ghost" id="gl-reset">↺ Before</button></div>
 <div id="gl-svg"></div>
 <div class="work" id="gl-work"></div>
 <p class="gl-rule">📏 <b>Rule:</b> only <b>gas</b> volumes add up. A liquid (like water at room temperature) takes up almost no space (≈ 0), so leave it out of the total.</p>
 <div class="try">
  <details><summary>🎯 Try this (book p.72 ex.1): 450 cm³ CO + 200 cm³ O₂</summary>Set up 2CO + O₂ with these volumes. Predict: which gas is used up, and what is the mixture after? Then React.<br><b>Answer:</b> O₂ is used up (200 cm³ O₂ needs only 400 cm³ CO). 50 cm³ CO is left and 400 cm³ CO₂ forms: total 450 cm³.</details>
  <details><summary>🎯 Try this (book p.97 summary A): 300 cc ethane + 4000 cc O₂</summary>Pick 2C₂H₆ + 7O₂, room temperature. Predict the CO₂ formed and the O₂ left.<br><b>Answer:</b> ratio 2 : 7 : 4, scale = 300 ÷ 2 = 150. O₂ used = 1050 cc, so <b>2950 cc O₂ left</b>; <b>600 cc CO₂</b> formed. Water is liquid, ≈ 0.</details>
  <details><summary>🎯 Try this (book p.99, 2015): 6 L H₂ + 4 L Cl₂, then add water</summary>Pick H₂ + Cl₂, set litres and switch on “Add water”. Predict the volume of gas left.<br><b>Answer:</b> 4 L Cl₂ uses 4 L H₂ and makes 8 L HCl, which dissolves in the water. Residual gas = <b>2 L H₂</b>.</details>
  <details><summary>🎯 Try this (book p.99, 2025): 40 cm³ CH₄ + 60 cm³ O₂</summary>Room temperature. Predict the total gas volume after. Then switch to steam: does it change?<br><b>Answer:</b> O₂ is used up (60 ÷ 2 = 30 cm³ CH₄ burns). Left: 10 cm³ CH₄ + 30 cm³ CO₂ = <b>40 cm³</b>. As steam, add 60 cm³ H₂O(g): 100 cm³.</details>
 </div>
 <p class="idea">💡 <b>Big idea:</b> gases react in simple whole-number volume ratios, the same as the coefficients in the balanced equation; the gas that runs out first decides everything.</p>`;
 const $=id=>el.querySelector('#'+id);

 /* ---------- maths ---------- */
 function calc(){
  const R=RX[S.i],A=readNum($('gl-a').value),B=readNum($('gl-b').value);
  if(!(A>=0&&B>=0)||A+B===0)return null;
  const [[fa,ca],[fb,cb]]=R.r,k=Math.min(A/ca,B/cb);
  const lim=A/ca<B/cb-1e-12?0:(B/cb<A/ca-1e-12?1:-1);   // -1 = exact amounts
  const prods=R.p.map(([f,c])=>{const v=c*k;let fate='gas';
   if(f==='H2O'&&!S.steam)fate='liquid';
   if((f==='HCl'||f==='NH3')&&S.water)fate='dissolved';
   if(f==='CO2'&&S.koh)fate='KOH';
   return {f,c,v,fate}});
  const left=[{f:fa,v:A-ca*k},{f:fb,v:B-cb*k}];
  const before=A+B,after=left.reduce((s,x)=>s+x.v,0)+prods.filter(p=>p.fate==='gas').reduce((s,p)=>s+p.v,0);
  return {R,A,B,k,lim,prods,left,before,after,fa,fb,ca,cb};
 }

 /* ---------- toggles ---------- */
 function drawToggles(){
  const R=RX[S.i],has=f=>R.p.some(p=>p[0]===f);
  let h='';
  if(has('H2O'))h+=`<button class="chip ${S.steam?'':'on'}" data-t="cool">❄️ Cool to room temp (water → liquid)</button><button class="chip ${S.steam?'on':''}" data-t="steam">♨️ Above 100 °C (steam)</button>`;
  if(has('HCl')||has('NH3'))h+=`<button class="chip ${S.water?'on':''}" data-t="water">💧 Add water (dissolves ${has('HCl')?'HCl':'NH₃'})</button>`;
  if(has('CO2'))h+=`<button class="chip ${S.koh?'on':''}" data-t="koh">🧴 Pass through KOH (absorbs CO₂)</button>`;
  $('gl-tog').innerHTML=h||'<span class="tip">No liquids or absorbers for this one: every product is a gas.</span>';
 }

 /* ---------- SVG ---------- */
 function bar(x,base,w,hgt,col,lab,val,u,o={}){
  const dash=o.dash?' stroke-dasharray="5 4"':'';
  let s=`<rect x="${x}" y="${(base-hgt).toFixed(1)}" width="${w}" height="${Math.max(hgt,0).toFixed(1)}" rx="6" fill="${o.ghost?'#fff':col}" fill-opacity="${o.op??0.9}" stroke="${col}" stroke-width="2"${dash}/>`;
  s+=`<text x="${x+w/2}" y="${base+16}" text-anchor="middle" font-size="13" font-weight="600" fill="#1f2937">${lab}</text>`;
  if(val!=='')s+=`<text x="${x+w/2}" y="${(base-hgt-8).toFixed(1)}" text-anchor="middle" font-size="12" fill="#374151">${val}</text>`;
  if(o.tag)s+=`<text x="${x+w/2}" y="${base+31}" text-anchor="middle" font-size="11.5" font-weight="700" fill="${o.tagc||'#b91c1c'}">${o.tag}</text>`;
  return s;
 }
 function draw(c){
  const W=720,H=290,base=225,u=$('gl-u').value;
  let s=`<rect x="8" y="8" width="320" height="270" rx="12" fill="#f8fafc" stroke="#e5e7eb"/><rect x="390" y="8" width="322" height="270" rx="12" fill="#f0fdf4" stroke="#e5e7eb"/>`;
  s+=`<text x="168" y="28" text-anchor="middle" font-size="15" font-weight="700" fill="#4f46e5">BEFORE</text><text x="551" y="28" text-anchor="middle" font-size="15" font-weight="700" fill="#059669">AFTER</text>`;
  s+=`<text x="359" y="140" text-anchor="middle" font-size="30" fill="#6366f1">→</text>`;
  if(!c){$('gl-svg').innerHTML=svg(W,H,s+`<text x="360" y="150" text-anchor="middle" font-size="15" fill="#b91c1c">type two volumes</text>`);return}
  const t=S.t,vals=[c.A,c.B,...c.prods.map(p=>p.v)],max=Math.max(...vals,1e-9),sc=v=>165*v/max;
  // BEFORE: reactant bars; used part fades as t grows
  [[c.fa,c.A,0],[c.fb,c.B,1]].forEach(([f,v,j])=>{
   const x=60+j*140,w=80,used=v-c.left[j].v,col=COL[f];
   s+=bar(x,base,w,sc(v),col,sub(f),fmt(v)+' '+u,u,{op:0.25});
   const keep=sc(c.left[j].v),fade=sc(used)*(1-t);
   s+=`<rect x="${x}" y="${(base-keep-fade).toFixed(1)}" width="${w}" height="${(keep+fade).toFixed(1)}" rx="6" fill="${col}" fill-opacity="0.9"/>`;
   if(t>=1)s+=c.lim===j||c.lim===-1?`<text x="${x+w/2}" y="${base+31}" text-anchor="middle" font-size="11.5" font-weight="700" fill="#b91c1c">used up</text>`
    :`<text x="${x+w/2}" y="${base+31}" text-anchor="middle" font-size="11.5" font-weight="700" fill="#059669">excess</text>`;
  });
  s+=`<text x="168" y="272" text-anchor="middle" font-size="12.5" fill="#374151">total gas = ${fmt(c.before)} ${u}</text>`;
  // AFTER: leftover reactant(s) then products
  const items=c.left.filter(x=>x.v>1e-9).map(x=>({f:x.f,v:x.v,tag:'left over',tagc:'#d97706',hl:true}))
   .concat(c.prods.map(p=>({f:p.f,v:p.v,fate:p.fate,
     tag:p.fate==='liquid'?'liquid ≈ 0':p.fate==='dissolved'?'dissolved':p.fate==='KOH'?'absorbed':'formed',
     tagc:p.fate==='gas'?'#059669':'#6b7280'})));
  const n=items.length,w=Math.min(70,250/n),gap=(300-n*w)/(n+1);
  items.forEach((it,k)=>{
   const x=400+gap+k*(w+gap),col=COL[it.f],gas=!it.fate||it.fate==='gas';
   if(it.fate==='liquid')s+=bar(x,base,w,6*t,col,sub(it.f),t>=1?'(l)':'',u,{tag:t>=1?it.tag:'',tagc:it.tagc});
   else s+=bar(x,base,w,sc(it.v)*t,col,sub(it.f),t>=1?fmt(it.v)+' '+u:'',u,{ghost:!gas,dash:!gas,tag:t>=1?it.tag:'',tagc:it.tagc});
   if(it.hl&&t>=1)s+=`<rect x="${x-4}" y="${(base-sc(it.v)-24).toFixed(1)}" width="${w+8}" height="${(sc(it.v)+28).toFixed(1)}" rx="8" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6 3"/>`;
  });
  s+=t>=1?`<text x="551" y="272" text-anchor="middle" font-size="12.5" fill="#374151">total gas = ${fmt(c.after)} ${u}</text>`
   :`<text x="551" y="150" text-anchor="middle" font-size="14" fill="#9ca3af">${t>0?'reacting…':'press React ▶'}</text>`;
  $('gl-svg').innerHTML=svg(W,H,s);
 }

 /* ---------- working ---------- */
 function work(c){
  if(!c){$('gl-work').innerHTML='Type a number in both boxes (e.g. 200).';return}
  const R=c.R,u=$('gl-u').value,st=S.steam?'(g)':'(l)';
  const ratio=R.r.concat(R.p).map(x=>x[1]+' vol').join(' : ');
  const na=sub(c.fa),nb=sub(c.fb);
  let L=[`${eqText(R,st)}`,`Volume ratio (from coefficients) = ${ratio}`,
   `Which runs out? ${na}: ${fmt(c.A)} ÷ ${c.ca} = ${fmt(c.A/c.ca)}; ${nb}: ${fmt(c.B)} ÷ ${c.cb} = ${fmt(c.B/c.cb)} → ${c.lim<0?'equal, so <b>both</b> are used up exactly':`the smaller one is used up: <b>${sub(c.lim?c.fb:c.fa)}</b>`}`,
   `Scale factor = <b>${fmt(c.k)} ${u}</b> per “1 vol”`,
   `Used: ${na} = ${c.ca} × ${fmt(c.k)} = ${fmt(c.ca*c.k)} ${u}; ${nb} = ${c.cb} × ${fmt(c.k)} = ${fmt(c.cb*c.k)} ${u}`,
   'Formed: '+c.prods.map(p=>`${sub(p.f)} = ${p.c} × ${fmt(c.k)} = ${fmt(p.v)} ${u}`+(p.fate==='liquid'?' (liquid, ≈ 0 volume)':p.fate==='dissolved'?' (dissolves in water)':p.fate==='KOH'?' (absorbed by KOH)':'')).join('; ')];
  const lf=c.left.filter(x=>x.v>1e-9);
  L.push('Left: '+(lf.length?lf.map(x=>`${sub(x.f)} = ${fmt(x.f===c.fa?c.A:c.B)} − ${fmt((x.f===c.fa?c.A:c.B)-x.v)} = <b>${fmt(x.v)} ${u}</b>`).join('; '):'nothing, both gases fully used'));
  const parts=lf.map(x=>fmt(x.v)).concat(c.prods.filter(p=>p.fate==='gas').map(p=>fmt(p.v)));
  L.push(`Total gas after = ${parts.length>1?parts.join(' + ')+' = ':''}<b>${fmt(c.after)} ${u}</b> (before: ${fmt(c.before)} ${u})`);
  $('gl-work').innerHTML='<b>Working</b><ol>'+L.map(x=>`<li>${x}</li>`).join('')+'</ol>';
 }

 /* ---------- update / events ---------- */
 function update(){
  const R=RX[S.i];
  $('gl-lb').textContent=sub(R.r[1][0]);$('gl-la').textContent=sub(R.r[0][0]);
  const c=calc();$('gl-msg').textContent=c?'':'type a number';
  draw(c);work(c);
 }
 function loadRx(i){S.i=i;S.water=false;S.koh=false;const R=RX[i];$('gl-a').value=R.a[0];$('gl-b').value=R.a[1];$('gl-u').value=R.u||'cc';S.t=0;drawToggles();update()}
 function animate(){
  cancelAnimationFrame(S.raf);const t0=performance.now();
  const step=now=>{S.t=Math.min(1,(now-t0)/1100);update();if(S.t<1&&el.isConnected)S.raf=requestAnimationFrame(step)};
  S.raf=requestAnimationFrame(step);
 }
 $('gl-rx').addEventListener('change',e=>loadRx(+e.target.value||0));
 ['gl-a','gl-b'].forEach(id=>$(id).addEventListener('input',update));
 $('gl-u').addEventListener('change',update);
 $('gl-go').onclick=()=>{S.t=0;animate()};
 $('gl-reset').onclick=()=>{cancelAnimationFrame(S.raf);S.t=0;update()};
 $('gl-tog').onclick=e=>{const b=e.target.closest('[data-t]');if(!b)return;const t=b.dataset.t;
  if(t==='cool')S.steam=false;if(t==='steam')S.steam=true;if(t==='water')S.water=!S.water;if(t==='koh')S.koh=!S.koh;drawToggles();update()};
 $('gl-rx').value='5';loadRx(5);
}});
