/* Electrolysis helpers shared by data/electrolysis-1.js and data/electrolysis-2.js.
   Load after lib/common.js and before the page's data file. */

/* CELL({...}) → animated SVG of an electrolytic cell.
   cat:['Cu²⁺','H⁺']  cations (drift to the cathode)   an:['SO₄²⁻','OH⁻']  anions (drift to the anode)
   win:{cat:'Cu²⁺', an:'OH⁻'}   the ion discharged at each electrode (drawn bold, others faded "stay")
   anode:'Pt', cathode:'Pt'     electrode labels      title:'Aq. CuSO₄ · Pt electrodes'
   atC:'Cu deposits', atA:'O₂ bubbles'   what you SEE at each electrode
   gasC / gasA: true → draw bubbles     liquid:'#bfdbfe' (fill colour)     molten:true → heat flame */
function CELL(o){
  const W=640,H=344,ax=170,cx=470,top=110,bot=290,liq=o.liquid||'#dbeafe';
  let s=`<rect x="80" y="${top}" width="480" height="${bot-top}" rx="10" fill="${liq}" stroke="#64748b"/>`;
  // wire, battery (long plate = +) and electron arrows: e⁻ leave the anode, enter the cathode through the WIRE only
  s+=`<path d="M${ax} ${top-10} V40 H300 M314 40 H${cx} V${top-10}" fill="none" stroke="#334155" stroke-width="2"/>`
   +`<line x1="300" y1="22" x2="300" y2="58" stroke="#334155" stroke-width="3"/><line x1="314" y1="30" x2="314" y2="50" stroke="#334155" stroke-width="6"/>`
   +T(300,12,'+','chg')+T(316,12,'−','chg');
  s+=ARR(ax+10,40,250,40,'#f59e0b')+ARR(390,40,cx-10,40,'#f59e0b')+T(225,28,'e⁻ →','eL')+T(420,28,'e⁻ →','eL');
  // electrodes
  const el=(x,lab,sign,col)=>`<rect x="${x-9}" y="${top-12}" width="18" height="${bot-top-20}" fill="${col}" stroke="#334155"/>`+T(x+(x<320?-58:58),top-38,`${lab} (${sign})`,'eLab');
  s+=el(ax,'Anode','+','#94a3b8')+el(cx,'Cathode','−','#94a3b8');
  s+=T(ax-58,top-20,o.anode||'','eSm')+T(cx+58,top-20,o.cathode||'','eSm');
  // ions: cations start near anode side and drift right; anions start near cathode side and drift left
  const ion=(lab,x0,x1,y,col,bold,i)=>{
    const dur=(3+i*0.6).toFixed(1);
    return `<g opacity="${bold?1:.45}"><circle r="${bold?17:14}" fill="${col}" stroke="${bold?'#111827':'none'}" stroke-width="2"/>`
     +`<text class="ionT" text-anchor="middle" dominant-baseline="central">${lab}</text>`
     +`<animateTransform attributeName="transform" type="translate" values="${x0} ${y};${x1} ${y};${x1} ${y}" keyTimes="0;0.8;1" dur="${dur}s" repeatCount="indefinite"/></g>`};
  (o.cat||[]).forEach((c,i)=>s+=ion(c,250+i*30,cx-32,150+i*44,'#fecaca',o.win&&o.win.cat===c,i));
  (o.an||[]).forEach((a,i)=>s+=ion(a,390-i*30,ax+32,170+i*44,'#bfdbfe',o.win&&o.win.an===a,i));
  // bubbles
  const bub=x=>[0,1,2].map(i=>`<circle cx="${x+(i-1)*7}" r="4" fill="#fff" stroke="#64748b"><animate attributeName="cy" values="${bot-40};${top+6}" dur="${1.4+i*.4}s" repeatCount="indefinite"/></circle>`).join('');
  if(o.gasA)s+=bub(ax+22);if(o.gasC)s+=bub(cx-22);
  if(o.molten)s+=`<path d="M300 ${bot+8} q10 -14 20 0 q10 -14 20 0" fill="#fb923c" stroke="#ea580c"/>`+T(320,bot+24,'heat (molten)','eSm');
  s+=T(ax,bot+14,o.atA||'','eOut')+T(cx,bot+14,o.atC||'','eOut');
  if(o.title)s+=T(W/2,H-14,o.title,'eTit');
  return `<style>.ionT{font:600 11px system-ui}.eLab{font:700 13px system-ui}.eSm{font:12px system-ui;fill:#475569}.eOut{font:700 12.5px system-ui;fill:#065f46}.eTit{font:600 13px system-ui;fill:#334155}.eL{font:12px system-ui;fill:#b45309}</style>`+svg(W,H,s)
   +`<div class="key">Red = cations → cathode (−), blue = anions → anode (+). Bold ion = the one discharged; faded ions stay in solution. Electrons (e⁻) travel only in the <b>wire</b>, never through the liquid: in the liquid, <b>ions</b> carry the current.</div>`;
}

/* METHOD5 — the 5-step routine used in every lesson and solution. Pass 5 strings to fill it for a specific cell,
   or call with no args for the blank routine. */
function METHOD5(ions,go,win,write,see){
  const r=[['1 · IONS','List every ion — from the compound <b>and</b> from water (H⁺, OH⁻) if it is aqueous.',ions],
   ['2 · GO','Cations → cathode (−). Anions → anode (+). <i>PANIC: Positive Anode, Negative Is Cathode.</i>',go],
   ['3 · WIN','Which ion is discharged? Check the 3 rules: series position · concentration · electrode (active/inert).',win],
   ['4 · WRITE','Cathode: gain of e⁻ = <b>reduction</b>. Anode: loss of e⁻ = <b>oxidation</b>. <i>OIL RIG · AN OX / RED CAT.</i>',write],
   ['5 · SEE','What would you observe? Gas (colour/smell) · deposit (colour) · electrode mass · solution colour.',see]];
  return `<table class="cmp m5">${r.map(([h,g,x])=>`<tr><th>${h}</th><td>${x||g}</td></tr>`).join('')}</table>`;
}

/* CASE({...}) — fixed-row "case file" for one standard electrolysis (mirrors the book's summary table p.121). */
function CASE(o){
  const rows=[['Electrolyte',o.electrolyte],['Electrodes',o.electrodes],['Ions present',o.ions],
   ['Cathode reaction',o.cathode],['Anode reaction',o.anode],['Products',o.products],['You observe',o.see],['Why (the rule)',o.why]];
  return `<div class="case"><div class="caseH">🗂️ Case file: ${o.name}</div><table class="cmp">${rows.filter(r=>r[1]).map(([a,b])=>`<tr><th>${a}</th><td>${b}</td></tr>`).join('')}</table></div>`;
}

/* LADDER — discharge order at each electrode (activity series), with an optional highlight list. */
function LADDER(hi=[]){
  const cats=['K⁺','Ca²⁺','Na⁺','Mg²⁺','Al³⁺','Zn²⁺','Fe²⁺','Pb²⁺','H⁺','Cu²⁺','Ag⁺'],ans=['SO₄²⁻','NO₃⁻','Cl⁻','Br⁻','I⁻','OH⁻'];
  const col=(arr,x,title)=>T(x,18,title,'eLab')+arr.map((a,i)=>`<rect x="${x-46}" y="${34+i*24}" width="92" height="20" rx="5" fill="${hi.includes(a)?'#fde68a':'#f1f5f9'}" stroke="#94a3b8"/>`+T(x,44+i*24,a,'ionT')).join('');
  let s=col(cats,140,'Cations (at cathode)')+col(ans,430,'Anions (at anode)');
  s+=ARR(220,40,220,300,'#16a34a')+T(272,170,'easier','eSm')+T(272,186,'to discharge','eSm')+ARR(510,40,510,180,'#16a34a')+T(548,110,'easier','eSm');
  return `<style>.ionT{font:600 12px system-ui}.eLab{font:700 13px system-ui}.eSm{font:12px system-ui;fill:#166534}</style>`+svg(600,320,s)
   +`<div class="key">Lower in the series → more easily discharged. (Concentration and active electrodes can overrule this, see rules 2 &amp; 3.)</div>`;
}

/* Little CSS for the above, injected once. */
if(document.head)document.head.insertAdjacentHTML('beforeend',`<style>.case{border:1px solid #c7d2fe;border-radius:12px;margin:12px 0;overflow:hidden}.caseH{background:#eef2ff;padding:7px 12px;font-weight:700}.case table{margin:0;width:100%}.m5 th{white-space:nowrap;background:#eef2ff}</style>`);
