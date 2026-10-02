/* How big is a mole? A hook that makes 6.023 × 10²³ feel real.
   Every number shown is computed here from NA (chem.js) and the stated assumptions. */
LAB.add({id:'bigmole',icon:'🥚',name:'How big is a mole?',blurb:'6.023 × 10²³ is HUGE — feel it',ref:'p.76',
 mount(el){
  /* ---------- facts & assumptions ---------- */
  const YEAR=365.25*24*3600;            // seconds in a year
  const UNIVERSE=13.8e9;                // age of the universe, years
  const INDIA=3.287e12;                 // area of India, m² (3.287 million km²)
  const EARTH_V=1.083e21;               // volume of the Earth, m³
  const RATES=[
   {id:'one',t:'1 person',rate:1,d:'one person counting 1 number every second, non-stop'},
   {id:'all',t:'all 8 billion people',rate:8e9,d:'all ~8 billion people on Earth, each counting 1 per second'},
   {id:'pc',t:'a computer',rate:1e9,d:'a computer counting 1 billion every second'}];
  const THINGS=[ // v = volume of ONE item in m³
   {id:'sand',t:'grains of sand',v:Math.PI/6*0.5e-3**3,a:'a sand grain = a ball 0.5 mm across'},
   {id:'rice',t:'grains of rice',v:20e-9,a:'a rice grain ≈ 20 mm³'},
   {id:'drop',t:'drops of water',v:0.05e-6,a:'a drop of water = 0.05 mL, i.e. 20 drops per mL'},
   {id:'ball',t:'footballs',v:Math.PI/6*0.22**3,a:'a football = a ball 22 cm across'}];
  const st={rate:'one',thing:'rice',n:1};

  /* ---------- styles (prefixed) ---------- */
  if(!document.getElementById('st-bigmole')){
   const s=document.createElement('style');s.id='st-bigmole';
   s.textContent=`#w-bigmole h3{margin:18px 0 4px;font-size:17px}
#w-bigmole .bm-mark{transition:transform .6s ease-out}
#w-bigmole .bigidea{background:#eef2ff;border-radius:10px;padding:8px 14px;margin-top:12px}`;
   document.head.appendChild(s);
  }

  /* ---------- helpers ---------- */
  const txt=(x,y,t,sz=13,col='#374151',w=400,anc='middle')=>`<text x="${x}" y="${y}" font-size="${sz}" fill="${col}" font-weight="${w}" text-anchor="${anc}" dominant-baseline="central" font-family="Segoe UI,sans-serif">${t}</text>`;
  const nice=x=>x>=1e6&&x<1e12?(x>=1e9?fmt(x/1e9,3)+' billion':fmt(x/1e6,3)+' million'):fmt(x,3);
  const len=m=>m>=1000?nice(m/1000)+' km':m>=1?fmt(m,3)+' m':fmt(m*100,3)+' cm';
  /* log ladder: landmarks above the axis, the live value as a big marker below */
  function ladder(lo,hi,marks,val,label,unitFn){
   const X=v=>40+(Math.log10(v)-lo)/(hi-lo)*620;
   let s=`<line x1="40" y1="120" x2="660" y2="120" stroke="#94a3b8" stroke-width="3"/>`;
   for(let e=Math.ceil(lo);e<=hi;e++)s+=`<line x1="${X(10**e)}" y1="115" x2="${X(10**e)}" y2="125" stroke="#94a3b8"/>`+
    txt(X(10**e),136,'10'+sup(e),10.5,'#94a3b8');
   marks.forEach(([v,t],i)=>{const x=X(v),y=[88,62,36][i%3];
    s+=`<line x1="${x}" y1="${y+8}" x2="${x}" y2="120" stroke="#a5b4fc" stroke-dasharray="3 3"/><circle cx="${x}" cy="120" r="4" fill="#6366f1"/>`+txt(x,y,t,12,'#4338ca',600)});
   const xv=Math.min(660,Math.max(40,X(val)));
   s+=`<g class="bm-mark" style="transform:translateX(${xv}px)"><path d="M0 128 L-9 146 L9 146Z" fill="#f59e0b"/>`+
    `<rect x="-90" y="150" width="180" height="40" rx="8" fill="#fef3c7" stroke="#f59e0b"/>`+txt(0,163,label,12.5,'#92400e',700)+txt(0,180,unitFn(val),12.5,'#92400e',600)+`</g>`;
   return `<svg viewBox="-60 10 820 190" style="max-width:780px">${s}</svg>`;
  }

  /* ---------- layout ---------- */
  el.innerHTML=`
<p class="tip" style="font-size:15px">🎯 <b>What to try:</b> before each click, guess the answer out loud — then see how wrong your gut feeling is about 6.023 × 10²³!</p>
<h3>⏱️ 1. Count to one mole</h3>
<div class="row" id="bmRate">${RATES.map(r=>`<button class="chip" data-r="${r.id}">${r.t}</button>`).join('')}</div>
<div id="bmCountSvg"></div><div class="out" id="bmCount"></div>
<h3>🌏 2. Pour one mole of things over India</h3>
<div class="row" id="bmThing">${THINGS.map(t=>`<button class="chip" data-t="${t.id}">${t.t}</button>`).join('')}</div>
<div id="bmPileSvg"></div><div class="out" id="bmPile"></div>
<h3>🥄 3. But one mole of chemicals is just a handful</h3>
<div id="bmHand"></div>
<h3>💧 4. Slide the moles of water</h3>
<div class="row"><label for="bmS">moles</label><input type="range" id="bmS" min="-3" max="1" step="0.01" value="0">
 <label for="bmN">or type:</label><input type="text" id="bmN" value="1" style="width:90px"> mol</div>
<div id="bmWaterRow" style="display:flex;flex-wrap:wrap;gap:12px;align-items:center"><div id="bmCyl"></div><div id="bmWaterOut" class="big" style="flex:1;min-width:240px"></div></div>
<div class="work" id="bmWork"></div>
<div id="bmTry"></div>
<p class="tip">📏 Assumptions: 1 year = 365.25 days; universe ≈ 13.8 billion years; India’s area = 3.287 million km²; Earth’s volume = 1.083 × 10²¹ m³; items packed with no gaps; water density 1 g/mL.</p>
<p class="idea">💡 <b>Big idea:</b> a mole is an unimaginably huge <i>number</i> of particles, yet because atoms are so tiny, one mole of a substance is just its gram molecular mass — a handful you can hold.</p>`;
  const $=id=>el.querySelector('#'+id);

  /* ---------- 1. counting ---------- */
  function drawCount(){
   const r=RATES.find(x=>x.id===st.rate),yrs=NA/r.rate/YEAR,ratio=yrs/UNIVERSE;
   el.querySelectorAll('#bmRate .chip').forEach(b=>b.classList.toggle('on',b.dataset.r===st.rate));
   $('bmCountSvg').innerHTML=ladder(0,17,[[80,'a lifetime'],[3e5,'humans exist'],[6.6e7,'dinosaurs die'],[4.54e9,'Earth forms'],[UNIVERSE,'universe']],
    yrs,r.t,v=>nice(v)+' years');
   $('bmCount').innerHTML=`With ${r.d}: <b>${nice(yrs)} years</b>. `+(ratio>=1?`That is about <b>${nice(ratio)} times</b> the age of the universe!`
    :`Still about <b>${fmt(yrs/3e5,2)} ×</b> as long as humans have existed (≈ 300 000 years).`);
   return [r,yrs];
  }
  /* ---------- 2. pile over India ---------- */
  function drawPile(){
   const t=THINGS.find(x=>x.id===st.thing),V=NA*t.v,depth=V/INDIA,earths=V/EARTH_V;
   el.querySelectorAll('#bmThing .chip').forEach(b=>b.classList.toggle('on',b.dataset.t===st.thing));
   $('bmPileSvg').innerHTML=ladder(-1,10,[[1.6,'you'],[73,'Qutub Minar'],[8849,'Everest'],[1.2742e7,'Earth’s width'],[3.844e8,'to the Moon']],
    depth,'1 mole of '+t.t,v=>len(v)+' deep');
   $('bmPile').innerHTML=`Total volume = 6.023 × 10²³ × ${fmt(t.v)} m³ = <b>${fmt(V)} m³</b>. Spread over all of India, the layer is <b>${len(depth)} deep</b>`+
    (earths>=1?` — and the pile is as big as <b>${fmt(earths,2)} Earths</b>!`:'.')+` <span class="tip">(${t.a})</span>`;
  }
  /* ---------- 3. a handful (all drawn to the same scale, as cubes of equal volume) ---------- */
  function drawHand(){
   const S=6, items=[ // [label, mass text, volume cm³, colour, note]
    ['water H₂O','18 g',18,'#60a5fa','18 mL — a big sip'],
    ['carbon C','12 g',12/2.26,'#374151','graphite, 5.3 cm³'],
    ['salt NaCl','58.5 g',58.5/2.165,'#e5e7eb','crystal, 27 cm³'],
    ['any gas at s.t.p.','e.g. 32 g O₂',22400,'#bbf7d0','22.4 L']];
   let s='',x=60;const base=240;
   items.forEach(([n,m,v,c,note])=>{const a=Math.cbrt(v)*S,d=a*0.35;
    s+=`<path d="M${x} ${base-a} l${d} ${-d} h${a} l${-d} ${d}z" fill="${c}" opacity=".7" stroke="#475569"/>`+
     `<path d="M${x+a} ${base} l${d} ${-d} v${-a} l${-d} ${d}z" fill="${c}" opacity=".55" stroke="#475569"/>`+
     `<rect x="${x}" y="${base-a}" width="${a}" height="${a}" fill="${c}" stroke="#475569"/>`;
    const cx=x+(a+d)/2;
    s+=txt(cx,base+16,n,13,'#111827',700)+txt(cx,base+33,m+' = 1 mole',12,'#4338ca',600)+txt(cx,base+49,note,11.5,'#6b7280');
    if(v>1000)s+=txt(x+a/2,base-a/2,Math.cbrt(v).toFixed(1)+' cm',14,'#065f46',700)+txt(x+a/2,base-a/2+18,'each side',11.5,'#065f46');
    x+=Math.max(a+d+70,130);
   });
   $('bmHand').innerHTML=`<svg viewBox="0 0 720 300" style="max-width:760px">${s}</svg>
<p class="tip">Each one holds 6.023 × 10²³ particles and is drawn to the same scale as a cube of the same volume (densities: graphite 2.26, salt 2.165 g/cm³).</p>`;
  }
  /* ---------- 4. water slider ---------- */
  function drawWater(){
   const n=st.n,ok=isFinite(n)&&n>0;
   if(!ok){$('bmCyl').innerHTML='';$('bmWaterOut').innerHTML='<span class="warnbox" style="display:inline-block">type a number bigger than 0</span>';
    $('bmWork').innerHTML='<b>Working</b><p class="tip">Type a number of moles to see the steps.</p>';return}
   const g=n*18,mol=n*NA,H=180,cap=200,h=Math.min(g,cap)/cap*H;
   let s=`<rect x="30" y="${200-h}" width="70" height="${h}" fill="#60a5fa" opacity=".8" style="transition:all .4s"/>`+
    `<path d="M30 15 V200 H100 V15" fill="none" stroke="#475569" stroke-width="2.5"/>`;
   [[18,'18 mL = 1 mol'],[90,'90 mL'],[180,'180 mL = 10 mol']].forEach(([v,t])=>{const y=200-v/cap*H;
    s+=`<line x1="100" y1="${y}" x2="112" y2="${y}" stroke="#475569"/>`+txt(116,y,t,11.5,'#475569',400,'start')});
   if(g>cap)s+=txt(65,8,'overflows!',12,'#b91c1c',700);
   $('bmCyl').innerHTML=`<svg viewBox="0 0 220 210" style="width:220px;margin:0">${s}</svg>`;
   $('bmWaterOut').innerHTML=`${fmt(n)} mol of water<br>= ${fmt(g)} g ≈ ${fmt(g)} mL<br>= ${fmt(mol)} molecules`;
   $('bmWork').innerHTML=`<b>Working (book style)</b><ol>
<li>M(H₂O) = 2 × 1 + 16 = 18 → 1 mole of water = 18 g</li>
<li>Mass = ${fmt(n)} mol × 18 g = <b>${fmt(g)} g</b> (= ${fmt(g)} mL, since 1 g of water ≈ 1 mL)</li>
<li>Molecules = ${fmt(n)} × 6.023 × 10²³ = <b>${fmt(mol)}</b></li>
<li>Counting them at 1 per second: ${fmt(mol)} ÷ (365.25 × 24 × 3600 s) = <b>${nice(mol/YEAR)} years</b></li></ol>`;
  }

  /* ---------- events ---------- */
  $('bmRate').addEventListener('click',e=>{const b=e.target.closest('.chip');if(b){st.rate=b.dataset.r;drawCount()}});
  $('bmThing').addEventListener('click',e=>{const b=e.target.closest('.chip');if(b){st.thing=b.dataset.t;drawPile()}});
  $('bmS').addEventListener('input',e=>{st.n=+(10**(+e.target.value)).toPrecision(3);$('bmN').value=st.n;drawWater()});
  $('bmN').addEventListener('input',e=>{const v=readNum(e.target.value);st.n=v;
   if(isFinite(v)&&v>0)$('bmS').value=Math.min(1,Math.max(-3,Math.log10(v)));drawWater()});

  /* ---------- try this ---------- */
  const TRY=[
   ['Guess first: one person counting 1 number per second, never sleeping — how long to count one mole?',
    '6.023 × 10²³ s ÷ 3.156 × 10⁷ s per year ≈ <b>1.9 × 10¹⁶ years</b> — about 1.4 million times the age of the universe.'],
   ['Set the moles to 2.5. How many grams of water is that? <span class="tip">(book p.81 solved ex.9: gram molecules in 45 g of water)</span>',
    '2.5 × 18 g = <b>45 g</b> — so 45 g of water = 2.5 gram molecules.'],
   ['Type 83.33 mol (that is 1½ litres of water ÷ 18). How many molecules are in a big water bottle? <span class="tip">(book p.86 Q.2 (9))</span>',
    '1500 g ÷ 18 g = 83.33 mol → 83.33 × 6.023 × 10²³ = <b>5.019 × 10²⁵ molecules</b>.'],
   ['Why is the 22.4 L gas cube about 28.2 cm on each side?',
    '22.4 L = 22 400 cm³, and the cube root of 22 400 = <b>28.2 cm</b> (28.2 × 28.2 × 28.2 ≈ 22 400).']];
  $('bmTry').innerHTML=TRY.map(([q,a])=>`<details class="try"><summary>🎯 Try this: ${q}</summary><p>✅ ${a}</p></details>`).join('');

  drawCount();drawPile();drawHand();drawWater();
 }});
