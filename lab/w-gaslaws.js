/* Boyle & Charles sliders (Dalal p.70): piston + live graphs, and a P1V1/T1 = P2V2/T2 calculator (convert to s.t.p.). */
LAB.add({id:'gaslaws',icon:'🌡️',name:'Boyle & Charles sliders',blurb:'squeeze it, heat it, convert to s.t.p.',
 ref:'p.70 · practice page 4.1',
 mount(el){
 /* ---------- helpers ---------- */
 const tx=(x,y,t,o='')=>`<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central" font-family="Segoe UI,sans-serif" font-size="13" ${o}>${t}</text>`;
 const ln=(x1,y1,x2,y2,o='stroke="#94a3b8"')=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" ${o}/>`;
 const rnd=i=>{const v=Math.sin(i*12.9898+78.233)*43758.5453;return v-Math.floor(v)};
 const DOTS=Array.from({length:36},(_,i)=>[rnd(i),rnd(i+100)]);
 const r0=x=>fmt(+x.toFixed(2));
 /* cylinder with piston: gas fills height h above floor y=270 */
 function cyl(h,extra=''){const top=270-h;
  let s=`<rect x="60" y="30" width="160" height="242" fill="none" stroke="#475569" stroke-width="3"/>
   <rect x="62" y="${top}" width="156" height="${h}" fill="#e0f2fe"/>`;
  DOTS.forEach(([fx,fy])=>{s+=`<circle cx="${(70+fx*140).toFixed(1)}" cy="${(268-fy*(h-8)).toFixed(1)}" r="4" fill="#2563eb"/>`});
  return s+`<rect x="62" y="${top-12}" width="156" height="12" fill="#64748b"/><rect x="134" y="${top-40}" width="12" height="28" fill="#64748b"/>`+extra;
 }
 const AX=(x0,y0,w,h,xl,yl)=>ln(x0,y0,x0+w,y0,'stroke="#334155" stroke-width="1.5"')+ln(x0,y0,x0,y0-h,'stroke="#334155" stroke-width="1.5"')+
  tx(x0+w/2,y0+34,xl,'fill="#334155"')+tx(x0-38,y0-h/2,yl,`fill="#334155" transform="rotate(-90 ${x0-38} ${y0-h/2})"`);

 /* ---------- skeleton ---------- */
 const unitSel=(c,list,v)=>`<select class="${c}">${list.map(u=>`<option${u===v?' selected':''}>${u}</option>`).join('')}</select>`;
 const PU=['mm Hg','cm Hg','atm'],TU=['°C','K'],VU=['cm³','ml','litre','dm³'];
 el.innerHTML=`<p class="tip">🎯 <b>What to try:</b> drag the slider and watch the piston. Predict first: what happens to the volume if you <b>double</b> the pressure, or the <b>kelvin</b> temperature?</p>
<div class="row"><button class="chip on" data-p="b">Boyle (squeeze)</button><button class="chip" data-p="c">Charles (heat)</button><button class="chip" data-p="g">P₁V₁/T₁ = P₂V₂/T₂ → s.t.p.</button></div>
<div data-pane="b"><div class="row"><label>Pressure</label><input type="range" class="gl-p" min="190" max="1520" step="10" value="760"><b class="gl-pv"></b><span class="tip">Temperature kept constant</span></div>
 <div class="gl-bsvg"></div><ol class="work gl-bw"></ol></div>
<div data-pane="c" style="display:none"><div class="row"><label>Heater</label><input type="range" class="gl-t" min="-273" max="400" step="1" value="27"><b class="gl-tv"></b><span class="tip">Pressure kept constant</span></div>
 <div class="gl-csvg"></div><ol class="work gl-cw"></ol></div>
<div data-pane="g" style="display:none">
 <div class="row"><b>Before:</b> <label>V₁</label><input type="text" class="gl-v1" value="290">${unitSel('gl-vu',VU,'ml')}
  <label>P₁</label><input type="text" class="gl-p1" value="1520">${unitSel('gl-p1u',PU,'mm Hg')}
  <label>t₁</label><input type="text" class="gl-t1" value="17">${unitSel('gl-t1u',TU,'°C')}</div>
 <div class="row"><b>After:</b> <button class="chip on" data-s="1">s.t.p. (273 K, 760 mm Hg)</button><button class="chip" data-s="0">other conditions</button>
  <span class="gl-p2box" style="display:none"><label>P₂</label><input type="text" class="gl-p2" value="740">${unitSel('gl-p2u',PU,'mm Hg')}
  <label>t₂</label><input type="text" class="gl-t2" value="27">${unitSel('gl-t2u',TU,'°C')}</span></div>
 <div class="gl-gsvg"></div><div class="gl-gw"></div></div>
<p class="idea">💡 <b>Big idea:</b> a gas’s volume depends on P and T, so always use kelvin (°C + 273) and one pressure unit, and convert to s.t.p. (273 K, 760 mm Hg) before comparing volumes.</p>
<div class="try"><b>🎯 Try this</b>
<details><summary>1. Boyle (book p.70): 100 cm³ of gas at 760 mm Hg. Predict the volume at 1520 mm Hg, then slide to check.</summary><p>Pressure doubled → volume halves: 760 × 100 = 1520 × V₂ → <b>V₂ = 50 cm³</b>. P × V is still 76000. <button class="btn ghost" data-g="b">Set P = 1520</button></p></details>
<details><summary>2. Charles (book p.70 worked example): 500 cm³ at 27 °C is heated to 327 °C. Predict the new volume. Does 27 °C → 54 °C double it?</summary><p>T₁ = 300 K, T₂ = 600 K → kelvin doubled → <b>1000 cm³</b>. But 27 → 54 °C is 300 → 327 K, so V = 500 × 327 ÷ 300 = <b>545 cm³</b>, NOT 1000. Trap: always add 273 first! <button class="btn ghost" data-g="c">Set 327 °C</button></p></details>
<details><summary>3. Convert to s.t.p. (book p.86 Q.3(3)): 290 ml of gas at 17 °C and 1520 mm. What volume at s.t.p.?</summary><p>V₂ = 1520 × 290 × 273 ÷ (290 × 760) = <b>546 ml</b>. <button class="btn ghost" data-g="s">Load it</button></p></details>
<details><summary>4. Mixed-units trap (book p.86 Q.2(16)): 3.5 g O₂ is 2.45 L at s.t.p. What volume at 27 °C and 74 cm Hg?</summary><p>First make the units match: 74 cm Hg = 740 mm Hg, 27 °C = 300 K. 760 × 2.45 ÷ 273 = 740 × V₂ ÷ 300 → <b>V₂ = 2.76 L</b>. (Plugging in 74 next to 760 would give ten times too much!) <button class="btn ghost" data-g="o">Load it</button></p></details>
</div>`;
 const $=q=>el.querySelector(q);

 /* ---------- Boyle ---------- */
 function boyle(){
  const P=+$('.gl-p').value||760,V=76000/P,h=V*0.55;
  $('.gl-pv').textContent=`${P} mm Hg`;
  const wts=Math.round(P/190);let w='';
  for(let i=0;i<wts;i++)w+=`<rect x="${108+(i%2)*32}" y="${270-h-52-Math.floor(i/2)*14}" width="30" height="12" rx="2" fill="#f59e0b" stroke="#92400e"/>`;
  const gx=x=>330+x*0.22,gy=v=>270-v*0.55;let curve='';
  for(let p=190;p<=1600;p+=10)curve+=`${p===190?'M':'L'}${gx(p).toFixed(1)} ${gy(76000/p).toFixed(1)}`;
  const ticksX=[0,380,760,1140,1520].map(p=>ln(gx(p),270,gx(p),275,'stroke="#334155"')+tx(gx(p),286,p,'fill="#475569"')).join('');
  const ticksY=[0,100,200,300,400].map(v=>ln(325,gy(v),330,gy(v),'stroke="#334155"')+tx(312,gy(v),v,'fill="#475569"')).join('');
  $('.gl-bsvg').innerHTML=`<svg viewBox="0 0 700 330">${cyl(h,w)}${tx(140,300,`V = ${r0(V)} cm³`,'font-weight="700" fill="#1d4ed8" font-size="15"')}
   <rect x="${gx(0)}" y="${gy(V)}" width="${gx(P)-gx(0)}" height="${gy(0)-gy(V)}" fill="#fde68a" opacity=".45"/>
   ${AX(330,270,360,240,'P (mm Hg)','V (cm³)')}${ticksX}${ticksY}
   <path d="${curve}" fill="none" stroke="#6366f1" stroke-width="2.5"/>
   ${ln(gx(P),gy(V),gx(P),270,'stroke="#dc2626" stroke-dasharray="4 3"')}${ln(330,gy(V),gx(P),gy(V),'stroke="#dc2626" stroke-dasharray="4 3"')}
   <circle cx="${gx(P)}" cy="${gy(V)}" r="7" fill="#dc2626"/>
   ${tx(560,40,`P × V = ${P} × ${r0(V)} = 76000`,'font-weight="700" fill="#92400e" font-size="15"')}${tx(560,60,'(shaded area stays the same!)','fill="#92400e"')}</svg>`;
  $('.gl-bw').innerHTML=`<li>Boyle’s law (T constant): P₁V₁ = P₂V₂</li><li>760 mm Hg × 100 cm³ = ${P} mm Hg × V₂</li>
   <li>V₂ = 760 × 100 ÷ ${P} = <b>${r0(V)} cm³</b></li><li>${P>760?'More pressure → smaller volume → molecules crowd closer.':P<760?'Less pressure → gas spreads out → bigger volume.':'Starting point: 100 cm³ at 760 mm Hg.'}</li>`;
 }

 /* ---------- Charles ---------- */
 function charles(){
  const t=+$('.gl-t').value,T=t+273,V=500*T/300,h=Math.max(V*0.18,2);
  $('.gl-tv').textContent=`${t} °C = ${T} K`;
  const fl=Math.max(0,T/673);
  const flame=T>0?`<path d="M140 ${318-40*fl} q-${12+14*fl} ${22*fl+8} 0 ${30*fl+10} q${12+14*fl} -${8*fl+2} 0 -${30*fl+10}z" fill="${t>150?'#ef4444':'#f59e0b'}" opacity=".85"/>`:tx(140,305,'❄ very cold','fill="#0369a1"');
  const gx=c=>360+(c+300)*0.47,gy=v=>270-v*0.2;
  const tick=[-273,-100,0,100,200,300,400].map(c=>ln(gx(c),270,gx(c),275,'stroke="#334155"')+tx(gx(c),284,c,'fill="#475569" font-size="11"')+tx(gx(c),298,c+273,'fill="#059669" font-size="11"')).join('');
  const yt=[0,400,800,1200].map(v=>ln(355,gy(v),360,gy(v),'stroke="#334155"')+tx(338,gy(v),v,'fill="#475569" font-size="11"')).join('');
  $('.gl-csvg').innerHTML=`<svg viewBox="0 0 700 340">${cyl(Math.min(h,236),flame)}${tx(140,15,`V = ${r0(V)} cm³`,'font-weight="700" fill="#1d4ed8" font-size="15"')}
   ${ln(360,270,690,270,'stroke="#334155" stroke-width="1.5"')}${ln(gx(-273),270,gx(-273),40,'stroke="#334155" stroke-width="1.5"')}${tick}${yt}
   ${tx(320,284,'°C','fill="#475569" font-size="11"')}${tx(320,298,'K','fill="#059669" font-size="11"')}${tx(525,322,'temperature','fill="#334155"')}
   ${ln(gx(-273),gy(0),gx(-100),gy(500*173/300),'stroke="#6366f1" stroke-width="2.5" stroke-dasharray="6 5"')}${ln(gx(-100),gy(500*173/300),gx(400),gy(500*673/300),'stroke="#6366f1" stroke-width="2.5"')}
   <circle cx="${gx(-273)}" cy="${gy(0)}" r="6" fill="#0f172a"/>${tx(gx(-273)+70,250,'−273 °C = 0 K: V → 0','fill="#0f172a" font-weight="600"')}${tx(gx(-273)+70,232,'(absolute zero)','fill="#0f172a"')}
   ${tx(gx(-180),gy(500*93/300)-34,'extrapolated','fill="#6366f1" font-size="11"')}
   ${ln(gx(t),gy(V),gx(t),270,'stroke="#dc2626" stroke-dasharray="4 3"')}<circle cx="${gx(t)}" cy="${gy(V)}" r="7" fill="#dc2626"/>
   ${tx(540,30,`V ÷ T = ${r0(V)} ÷ ${T} = ${T>0?r0(V/T):'—'}`,'font-weight="700" fill="#92400e" font-size="14"')}</svg>`;
  const wrong=500*t/27;
  $('.gl-cw').innerHTML=`<li>Charles’ law (P constant): V₁/T₁ = V₂/T₂, with T in <b>kelvin</b></li>
   <li>T₁ = 27 + 273 = 300 K; T₂ = ${t} + 273 = <b>${T} K</b></li>
   <li>V₂ = 500 × ${T} ÷ 300 = <b>${r0(V)} cm³</b></li>
   ${t===27?'':`<li style="color:#dc2626">✗ Trap, using °C: 500 × ${t} ÷ 27 = ${r0(wrong)} cm³ ${wrong<=0?'→ a zero or negative volume is impossible!':'→ wrong!'}</li>`}
   ${T===0?'<li>At 0 K the volume would be zero. (Real gases turn liquid long before this.) That is why the kelvin scale starts here.</li>':''}`;
 }

 /* ---------- combined gas equation ---------- */
 let stp=true;
 const toMM=(p,u)=>u==='cm Hg'?p*10:u==='atm'?p*760:p, toK=(t,u)=>u==='K'?t:t+273;
 const pStep=(p,u,s)=>u==='mm Hg'?`${s} = ${fmt(p)} mm Hg`:u==='cm Hg'?`${s} = ${fmt(p)} cm Hg = ${fmt(p)} × 10 = <b>${fmt(p*10)} mm Hg</b>`:`${s} = ${fmt(p)} atm = ${fmt(p)} × 760 = <b>${fmt(p*760)} mm Hg</b>`;
 const tStep=(t,u,s)=>u==='K'?`${s} = ${fmt(t)} K`:`${s} = ${fmt(t)} + 273 = <b>${fmt(t+273)} K</b>`;
 function gas(){
  const g=c=>readNum($(c).value),v=c=>$(c).value;
  const V1=g('.gl-v1'),p1=g('.gl-p1'),t1=g('.gl-t1'),p2=stp?760:g('.gl-p2'),t2=stp?0:g('.gl-t2');
  const vu=v('.gl-vu'),p1u=v('.gl-p1u'),t1u=v('.gl-t1u'),p2u=stp?'mm Hg':v('.gl-p2u'),t2u=stp?'°C':v('.gl-t2u');
  $('.gl-p2box').style.display=stp?'none':'';
  const bad=[[V1,'V₁'],[p1,'P₁'],[t1,'t₁'],[p2,'P₂'],[t2,'t₂']].filter(([x])=>!isFinite(x)).map(([,n])=>n);
  if(bad.length){$('.gl-gsvg').innerHTML='';$('.gl-gw').innerHTML=`<div class="warnbox">✏️ Type a number for ${bad.join(', ')}.</div>`;return}
  const P1=toMM(p1,p1u),P2=toMM(p2,p2u),T1=toK(t1,t1u),T2=toK(t2,t2u);
  const err=V1<=0?'Volume must be more than 0.':P1<=0||P2<=0?'Pressure must be more than 0.':T1<=0||T2<=0?'That is at or below absolute zero (0 K = −273 °C), which is impossible!':'';
  if(err){$('.gl-gsvg').innerHTML='';$('.gl-gw').innerHTML=`<div class="warnbox">⚠️ ${err}</div>`;return}
  const V2=P1*V1*T2/(T1*P2),mx=Math.max(V1,V2),hb=x=>Math.max(4,170*x/mx);
  const box=(x,lab,V,P,T,c)=>`<rect x="${x}" y="${210-hb(V)}" width="150" height="${hb(V)}" rx="6" fill="${c}" stroke="#475569"/>`+tx(x+75,25,lab,'font-weight="700" font-size="15"')+
   tx(x+75,225,`V = ${fmt(V)} ${vu}`,'font-weight="700" fill="#1d4ed8"')+tx(x+75,243,`P = ${fmt(P)} mm Hg`)+tx(x+75,261,`T = ${fmt(T)} K`);
  $('.gl-gsvg').innerHTML=`<svg viewBox="0 0 700 275">${box(120,'Before',V1,P1,T1,'#e0f2fe')}${box(430,stp?'At s.t.p.':'After',V2,P2,T2,'#dcfce7')}
   <path d="M290 120h120" stroke="#059669" stroke-width="3"/><path d="M410 113l12 7-12 7z" fill="#059669"/>${tx(350,100,'PV/T stays the same','fill="#059669"')}</svg>`;
  const wrongT=t1u==='°C'&&t2u==='°C'&&t1!==0?P1*V1*t2/(t1*P2):NaN;
  $('.gl-gw').innerHTML=`<ol class="work"><li>${pStep(p1,p1u,'P₁')}, V₁ = ${fmt(V1)} ${vu}, ${tStep(t1,t1u,'T₁')}</li>
   <li>${stp?'s.t.p.: P₂ = 760 mm Hg, T₂ = 273 K':pStep(p2,p2u,'P₂')+', '+tStep(t2,t2u,'T₂')}, V₂ = ?</li>
   <li>P₁V₁/T₁ = P₂V₂/T₂ → ${fmt(P1)} × ${fmt(V1)} ÷ ${fmt(T1)} = ${fmt(P2)} × V₂ ÷ ${fmt(T2)}</li>
   <li>V₂ = P₁ × V₁ × T₂ ÷ (T₁ × P₂) = ${fmt(P1)} × ${fmt(V1)} × ${fmt(T2)} ÷ (${fmt(T1)} × ${fmt(P2)}) = <b>${fmt(V2)} ${vu}</b></li></ol>
   <p class="tip" style="color:#dc2626">✗ Trap: forget kelvin and you’d get ${isFinite(wrongT)?(wrongT<=0?`${fmt(wrongT)} ${vu}: an impossible zero or negative volume`:`${fmt(wrongT)} ${vu}: wrong`):'nonsense (you can’t divide by 0 °C)'}. ${p1u!==p2u?`✗ Trap: mixing units (${fmt(p1)} ${p1u} with ${fmt(p2)} ${p2u}) gives ${fmt(p1*V1*T2/(T1*p2))} ${vu}. Change both to mm Hg first!`:''}</p>`;
 }

 /* ---------- events ---------- */
 const show=p=>{el.querySelectorAll('[data-pane]').forEach(d=>d.style.display=d.dataset.pane===p?'':'none');el.querySelectorAll('[data-p]').forEach(b=>b.classList.toggle('on',b.dataset.p===p))};
 const setStp=s=>{stp=s;el.querySelectorAll('[data-s]').forEach(b=>b.classList.toggle('on',(b.dataset.s==='1')===s));gas()};
 const setv=(c,v)=>{$(c).value=v};
 el.addEventListener('input',e=>{const t=e.target;if(t.matches('.gl-p'))boyle();else if(t.matches('.gl-t'))charles();else if(t.closest('[data-pane="g"]'))gas()});
 el.addEventListener('change',e=>{if(e.target.closest('[data-pane="g"]'))gas()});
 el.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
  if(b.dataset.p)show(b.dataset.p);
  else if(b.dataset.s)setStp(b.dataset.s==='1');
  else if(b.dataset.g==='b'){setv('.gl-p',1520);show('b');boyle()}
  else if(b.dataset.g==='c'){setv('.gl-t',327);show('c');charles()}
  else if(b.dataset.g==='s'){[['.gl-v1',290],['.gl-vu','ml'],['.gl-p1',1520],['.gl-p1u','mm Hg'],['.gl-t1',17],['.gl-t1u','°C']].forEach(a=>setv(...a));show('g');setStp(true)}
  else if(b.dataset.g==='o'){[['.gl-v1',2.45],['.gl-vu','litre'],['.gl-p1',760],['.gl-p1u','mm Hg'],['.gl-t1',0],['.gl-t1u','°C'],['.gl-p2',74],['.gl-p2u','cm Hg'],['.gl-t2',27],['.gl-t2u','°C']].forEach(a=>setv(...a));show('g');setStp(false)}});
 boyle();charles();gas();
 }});
