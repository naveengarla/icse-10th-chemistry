/* Electrolysis 1: electrolytes, ions & selective discharge (Dalal, printed p.102–111; questions p.123–126, Page-1 items).
   Needs lib/common.js and data/electro-common.js (CELL, METHOD5, CASE, LADDER) loaded first. */

/* ---------------- Local diagrams ---------------- */
const D1={
/* bulb test: strong / weak / non-electrolyte */
bulb:(()=>{
  const ion=(x,y,s)=>`<circle cx="${x}" cy="${y}" r="7" fill="${s==='+'?'#fecaca':'#bfdbfe'}"/>`+T(x,y,s,'bT');
  const mol=(x,y)=>`<ellipse cx="${x}" cy="${y}" rx="10" ry="6" fill="#d1fae5" stroke="#059669"/>`;
  const panel=(x0,lvl,title,sub,parts)=>{
    let s=`<rect x="${x0+20}" y="110" width="150" height="110" rx="8" fill="#e0f2fe" stroke="#64748b"/>`
     +`<rect x="${x0+55}" y="95" width="10" height="95" fill="#475569"/><rect x="${x0+125}" y="95" width="10" height="95" fill="#475569"/>`
     +`<path d="M${x0+60} 95 V40 H${x0+80} M${x0+110} 40 H${x0+130} V95" fill="none" stroke="#334155" stroke-width="2"/>`
     +`<circle cx="${x0+95}" cy="40" r="14" fill="${['#fde047','#fef9c3','#f1f5f9'][lvl]}" stroke="#334155"/>`;
    if(lvl===0)[0,1,2,3,4,5,6,7].forEach(i=>{const a=i*Math.PI/4;s+=`<line x1="${(x0+95+19*Math.cos(a)).toFixed(1)}" y1="${(40+19*Math.sin(a)).toFixed(1)}" x2="${(x0+95+28*Math.cos(a)).toFixed(1)}" y2="${(40+28*Math.sin(a)).toFixed(1)}" stroke="#eab308" stroke-width="2"/>`});
    s+=parts(x0);
    return s+T(x0+95,240,title,'bH')+T(x0+95,258,sub,'bS');
  };
  const strong=x0=>[[80,130],[100,150],[150,135],[90,190],[115,175],[145,200],[160,165],[75,160]].map(([x,y],i)=>ion(x0+x,y,i%2?'−':'+')).join('');
  const weak=x0=>mol(x0+85,135)+mol(x0+150,145)+mol(x0+95,180)+mol(x0+150,195)+ion(x0+115,160,'+')+ion(x0+80,205,'−');
  const non=x0=>mol(x0+85,135)+mol(x0+150,145)+mol(x0+95,180)+mol(x0+150,195)+mol(x0+118,160)+mol(x0+80,205);
  return `<style>.bT{font:700 10px system-ui}.bH{font:700 13px system-ui}.bS{font:12px system-ui;fill:#475569}</style>`+svg(600,270,
    panel(0,0,'Strong electrolyte','bulb glows BRIGHTLY',strong)+panel(200,1,'Weak electrolyte','bulb glows DIMLY',weak)+panel(400,2,'Non-electrolyte','bulb does NOT glow',non))
   +`<div class="key">Red/blue circles = ions (+ / −). Green ovals = whole molecules (no charge). Only <b>ions</b> can carry current through a liquid.</div>`;
})(),
/* dissociation vs ionisation */
dis:svg(620,170,
  T(150,16,'DISSOCIATION (ions already there)','frm')+
  `<rect x="20" y="35" width="90" height="60" rx="6" fill="#f1f5f9" stroke="#94a3b8"/>`+
  [[38,52,'Pb²⁺'],[80,52,'Br⁻'],[38,80,'Br⁻'],[80,80,'Pb²⁺']].map(([x,y,t])=>`<circle cx="${x+5}" cy="${y}" r="13" fill="${t[0]==='P'?'#fecaca':'#bfdbfe'}"/>`+T(x+5,y,t,'bT2')).join('')+
  ARR(120,65,175,65,'#16a34a')+T(148,50,'melt / dissolve','eS2')+
  [[200,45,'Pb²⁺'],[250,85,'Br⁻'],[215,120,'Br⁻'],[270,40,'Pb²⁺']].map(([x,y,t])=>`<circle cx="${x}" cy="${y}" r="13" fill="${t[0]==='P'?'#fecaca':'#bfdbfe'}"/>`+T(x,y,t,'bT2')).join('')+
  T(150,155,'PbBr₂ ⇌ Pb²⁺ + 2Br⁻ : ions just SEPARATE','eS2')+
  T(470,16,'IONISATION (ions are MADE)','frm')+
  `<ellipse cx="370" cy="65" rx="34" ry="18" fill="#d1fae5" stroke="#059669"/>`+T(370,65,'H–Cl','bT2')+
  ARR(410,65,465,65,'#16a34a')+T(438,50,'+ water','eS2')+
  `<circle cx="500" cy="50" r="14" fill="#fecaca"/>`+T(500,50,'H₃O⁺','bT2')+`<circle cx="560" cy="85" r="13" fill="#bfdbfe"/>`+T(560,85,'Cl⁻','bT2')+
  T(470,155,'HCl + H₂O → H₃O⁺ + Cl⁻ : molecule → NEW ions','eS2')+
  `<style>.bT2{font:600 10.5px system-ui}.eS2{font:12px system-ui;fill:#334155}</style>`),
/* rule decision flow */
rules:flow('<b>Step A</b><br>Anode made of Cu / Ni / Ag?<br>→ <b>Rule 3</b>: the anode metal itself dissolves','<b>Step B</b><br>Concentrated Cl⁻ (or Br⁻, I⁻)?<br>→ <b>Rule 2</b>: the crowded ion wins','<b>Step C</b><br>Otherwise<br>→ <b>Rule 1</b>: the ion LOWER in the series wins')
};

/* reusable cells for this page */
const C1={
nacl:CELL({cat:['Na⁺'],an:['Cl⁻'],win:{cat:'Na⁺',an:'Cl⁻'},anode:'graphite',cathode:'iron',molten:true,gasA:true,atA:'Cl₂ gas',atC:'Na metal',liquid:'#fde68a',title:'Molten NaCl (the book’s example, p.103–104)'}),
dil:CELL({cat:['Na⁺','H⁺'],an:['Cl⁻','OH⁻'],win:{cat:'H⁺',an:'OH⁻'},anode:'Pt / graphite',cathode:'Pt / graphite',gasA:true,gasC:true,atA:'O₂ bubbles',atC:'H₂ bubbles',title:'DILUTE NaCl solution (p.111)'}),
conc:CELL({cat:['Na⁺','H⁺'],an:['Cl⁻','OH⁻'],win:{cat:'H⁺',an:'Cl⁻'},anode:'graphite',cathode:'graphite',gasA:true,gasC:true,atA:'Cl₂ (greenish-yellow)',atC:'H₂ bubbles',title:'CONCENTRATED NaCl solution (p.111)'}),
cuPt:CELL({cat:['Cu²⁺','H⁺'],an:['SO₄²⁻','OH⁻'],win:{cat:'Cu²⁺',an:'OH⁻'},anode:'Pt',cathode:'Cu',gasA:true,atA:'O₂ bubbles',atC:'Cu deposits',liquid:'#bfdbfe',title:'Aq. CuSO₄ · Pt anode (inert)'}),
cuCu:CELL({cat:['Cu²⁺','H⁺'],an:['SO₄²⁻','OH⁻'],win:{cat:'Cu²⁺'},anode:'Cu',cathode:'Cu',atA:'Cu anode dissolves',atC:'Cu deposits',liquid:'#93c5fd',title:'Aq. CuSO₄ · Cu anode (active): no anion is discharged'})
};
const M_NACL=METHOD5('Molten NaCl: Na⁺, Cl⁻ only (no water, so no H⁺ / OH⁻).','Na⁺ → cathode (−). Cl⁻ → anode (+).','Only one ion at each electrode, so each one is discharged.','Cathode: Na⁺ + 1e⁻ → Na (reduction)<br>Anode: Cl⁻ − 1e⁻ → Cl; Cl + Cl → Cl₂ (oxidation)','Cathode: sodium metal. Anode: greenish-yellow chlorine gas.');
const M_DIL=METHOD5('Na⁺, Cl⁻ (from NaCl) + H⁺, OH⁻ (from water).','Na⁺, H⁺ → cathode. Cl⁻, OH⁻ → anode.','Cathode: <b>H⁺</b> (Rule 1: H is below Na). Anode: <b>OH⁻</b> (Rule 1: OH⁻ is lowest; Cl⁻ is too dilute to use Rule 2).','Cathode: 2H⁺ + 2e⁻ → H₂<br>Anode: 4OH⁻ − 4e⁻ → 2H₂O + O₂','H₂ at the cathode, O₂ at the anode.');
const M_CONC=METHOD5('Na⁺, Cl⁻ (lots) + H⁺, OH⁻ (very few).','Na⁺, H⁺ → cathode. Cl⁻, OH⁻ → anode.','Cathode: <b>H⁺</b> (Rule 1, even though Na⁺ is crowded). Anode: <b>Cl⁻</b> (Rule 2: high concentration of Cl⁻).','Cathode: 2H⁺ + 2e⁻ → H₂<br>Anode: 2Cl⁻ − 2e⁻ → Cl₂','H₂ at the cathode, greenish-yellow Cl₂ at the anode.');
const M_CUPT=METHOD5('Cu²⁺, SO₄²⁻ (from CuSO₄) + H⁺, OH⁻ (from water).','Cu²⁺, H⁺ → cathode. SO₄²⁻, OH⁻ → anode.','Cathode: <b>Cu²⁺</b> (Rule 1: Cu below H). Anode: <b>OH⁻</b> (Rule 1: OH⁻ below SO₄²⁻; Pt is inert, so Rule 3 does not act).','Cathode: Cu²⁺ + 2e⁻ → Cu<br>Anode: 4OH⁻ − 4e⁻ → 2H₂O + O₂','Reddish-brown Cu on the cathode; O₂ bubbles at the anode; blue colour <b>fades</b> (Cu²⁺ used up).');
const M_CUCU=METHOD5('Cu²⁺, SO₄²⁻, H⁺, OH⁻.','Cu²⁺, H⁺ → cathode. SO₄²⁻, OH⁻ → anode.','Cathode: <b>Cu²⁺</b> (Rule 1). Anode: <b>no anion</b>: the Cu anode itself loses electrons (Rule 3: active electrode).','Cathode: Cu²⁺ + 2e⁻ → Cu<br>Anode: Cu − 2e⁻ → Cu²⁺','Cathode gains mass, anode loses mass; blue colour <b>stays</b> (each Cu²⁺ removed is replaced).');

/* ---------------- Topics ---------------- */
const TOPICS=[
{id:'el',name:'1. Electrolytes & non-electrolytes; strong & weak',ref:'p.102–103, 108–109'},
{id:'tm',name:'2. Terms: electrodes, ions, oxidation & reduction',ref:'p.103–104'},
{id:'dc',name:'3. Dissociation, ionisation & conduction',ref:'p.105–107'},
{id:'sd',name:'4. Selective discharge: the 3 rules',ref:'p.110–111'},
{id:'mx',name:'5. Mixed & HOTS (objective)',ref:'p.102–111'}
];

/* ---------------- Concept lessons ---------------- */
const CONCEPT={
el:`<h3>Electrolytes: which liquids let current through, and how well?</h3>
${hook('Sugar dissolves completely in water, and so does salt. Put a bulb in the circuit: with salt water it glows, with sugar water it stays dark. Both solutions look identical. What does salt water have that sugar water does not?')}
${D1.bulb}
${story('A current through a liquid is like a <b>relay race</b>: it needs <b>runners</b> that carry something. In a liquid the runners are <b>ions</b>, because they carry charge. Molecules (sugar, alcohol, kerosene) are like <b>spectators sitting in the stands</b>: there may be millions of them, but they carry no charge and run nowhere. Many runners (strong electrolyte) → bright bulb. A few runners among many spectators (weak electrolyte) → dim bulb. Only spectators (non-electrolyte) → no glow.')}
<p><b>★ Electrolytes</b> (p.103): <i>Chemical compounds which conduct electricity in the fused or in aq. solution state &amp; undergo chemical decomposition due to the flow of current through it.</i></p>
<p><b>★ Non-electrolytes</b>: <i>Chemical compounds which do not conduct electricity in the fused or aq. soln. state &amp; do not undergo chemical decomposition due to the flow of current through it.</i></p>
<p><b>★ Strong electrolytes</b> (p.109): <i>Compounds which in the fused or in the aqueous solution state are almost completely dissociated and are good conductors of electricity.</i></p>
<p><b>★ Weak electrolytes</b>: <i>Compounds which in the fused or in the aqueous solution state are feebly or partially dissociated and are poor conductors of electricity.</i></p>
<table class="cmp"><tr><th></th><th>Strong electrolyte</th><th>Weak electrolyte</th><th>Non-electrolyte</th></tr>
${tr(['Particles','<b>Mainly ions only</b>','<b>Ions &amp; unionised molecules</b>','<b>Molecules only</b>'],
['Bulb','glows brightly','glows dimly','does not glow'],
['Acids','dil. HCl, H₂SO₄, HNO₃, HBr, HI','carbonic, acetic, oxalic, formic','—'],
['Bases','NaOH, KOH, LiOH soln.','NH₄OH, Ca(OH)₂, Mg(OH)₂, Zn(OH)₂','—'],
['Salts','NaCl, Na₂SO₄, NaNO₃, CuCl₂, CuSO₄, PbBr₂ (molten), AgNO₃','sodium carbonate, bicarbonate, oxalate, formate; lead acetate (aq.)','—'],
['Others','','','pure water, alcohol, kerosene, CS₂, CCl₄, sugar (sucrose, glucose) solution'])}</table>
${steps('The bulb experiment (p.108): how to test any compound',[
'Put the compound, <b>fused or in aqueous solution</b>, in the voltameter (X) with <b>graphite</b> electrodes (Y), a bulb and a key.',
'Switch on and watch the bulb.',
'Bright glow → <b>strong</b> electrolyte. Dim glow → <b>weak</b> electrolyte. No glow → <b>non-electrolyte</b>.'])}
<p><b>Shortcut for the board:</b> strong acids + strong alkalis + almost all salts of strong acids → strong. Organic acids (acetic, formic, oxalic), carbonic acid and NH₄OH → weak. Covalent organic liquids and sugar → non-electrolytes.</p>
${trap('<b>Solid</b> salts are non-electrolytes (p.103): the ions are present but locked in place. Always say "in the <b>fused or aqueous</b> state".',
'Pure (distilled) water is listed as a <b>non-electrolyte</b>. Tap water conducts only because of dissolved salts.',
'NaOH is strong but NH₄OH is weak; HCl is strong but acetic acid is weak. Learn the pairs.',
'Copper conducts, but it is <b>not</b> an electrolyte: it is not decomposed (p.107).')}
${cy(['Dil. HCl or acetic acid: which makes the bulb glow brighter, and why?','<b>Dil. HCl</b>: it is a strong electrolyte, almost completely ionised, so it has many more ions.'],
['What particles are in a weak electrolyte?','<b>Ions and unionised molecules.</b>'],
['Is CCl₄ an electrolyte?','No. It is a covalent liquid made of <b>molecules only</b>: a non-electrolyte.'])}
${exam('Strong electrolytes, e.g. dil. HCl, are almost completely dissociated in the fused or aqueous state and contain mainly ions, so they are good conductors. Weak electrolytes, e.g. acetic acid, are only partially dissociated and contain ions and unionised molecules, so they are poor conductors.')}
<div class="tip">Textbook: p.102–103 (definitions), p.108–109 (experiment and classification table).</div>`,

tm:`<h3>The words of electrolysis, and the one picture that explains them all</h3>
${hook('A copper wire carries current because electrons run through it. Molten salt also carries current. Do electrons swim through the molten salt from one electrode to the other?')}
${C1.nacl}
${story('Think of the circuit as a <b>road and a river</b>. The wire is the road: <b>electrons</b> drive along it. The liquid is the river: electrons cannot cross it. Instead <b>ions</b> act as boats. Cations sail to the cathode, anions to the anode. At each bank (electrode) there is a <b>swap</b>: at the cathode, electrons from the road jump <i>onto</i> the cations (gain = reduction); at the anode, the anions <i>hand over</i> electrons to the road (loss = oxidation). That swap at the banks is what keeps the current flowing round the whole circuit.')}
<p><b>★ Electrolysis</b> (p.103): <i>the decomposition of a chemical compound [electrolyte] in the aqueous or fused [molten] state by the passage of a direct electric current resulting in discharge of ions as neutral atoms at the respective electrodes.</i></p>
<ul><li><b>Electrolytic cell (voltameter)</b>: the device in which electrolysis is carried out. It contains electrodes and the electrolytic solution.</li>
<li><b>Electrodes</b>: allow the electric current to enter or leave the electrolytic solution. Made of metal or carbon (graphite).</li>
<li><b>★ Anode</b>: <i>the electrode connected to the positive terminal of the battery.</i> <b>★ Cathode</b>: <i>the electrode connected to the negative terminal of the battery.</i></li>
<li><b>Anions</b>: negatively charged ions. They migrate to the anode, lose electrons there and are oxidised to neutral atoms. <b>Cations</b>: positively charged ions. They migrate to the cathode, gain electrons and are reduced.</li>
<li><b>Oxidation</b> = loss of electrons; <b>reduction</b> = gain of electrons. So the <b>anode is the oxidising electrode</b> and the <b>cathode is the reducing electrode</b>.</li></ul>
<h3>The 5-step routine, filled in for molten NaCl</h3>
${M_NACL}
<p>Use this same routine for <b>every</b> cell in the chapter. Only step 3 (WIN) ever needs thinking, and that is topic 4.</p>
<table class="cmp"><tr><th>Anode</th><th>Cathode</th></tr>
${tr(['Connected to the <b>+</b> terminal','Connected to the <b>−</b> terminal'],['Attracts <b>anions</b>','Attracts <b>cations</b>'],['Anions <b>lose</b> e⁻ → <b>oxidation</b>','Cations <b>gain</b> e⁻ → <b>reduction</b>'],['<b>Oxidising</b> electrode: electrons leave the electrolyte here','<b>Reducing</b> electrode: electrons enter the electrolyte here'],['Cl⁻ − 1e⁻ → Cl','Na⁺ + 1e⁻ → Na'])}</table>
${trap('<b>Electrons flow in the wire; ions carry the current in the liquid.</b> Never draw electrons swimming through the electrolyte.',
'In electrolysis the <b>anode is +</b> and the cathode is −. PANIC: <b>P</b>ositive <b>A</b>node, <b>N</b>egative <b>I</b>s <b>C</b>athode.',
'Oxidation happens at the <b>anode</b>, reduction at the <b>cathode</b>: AN OX, RED CAT.',
'"Anion" goes to the <b>an</b>ode (both start with "an"). Only H₂ and metals form at the cathode; non-metals form at the anode (p.105).')}
${cy(['Which electrode is the reducing electrode, and why?','The <b>cathode</b>: cations gain electrons there, and gain of electrons is reduction.'],
['In which part of the circuit do electrons move?','Only in the <b>external wire</b> (and electrodes). In the liquid, <b>ions</b> move.'],
['Write the anode reaction for molten NaCl.','2Cl⁻ − 2e⁻ → Cl₂ (oxidation).'])}
${exam('The anode is the electrode connected to the positive terminal of the battery. Anions migrate to it and lose electrons, i.e. they are oxidised, so the anode is called the oxidising electrode, e.g. Cl⁻ − 1e⁻ → Cl.')}
<div class="tip">Textbook: p.103 (electrolysis), p.104 (electrolytic cell, electrodes, ions).</div>`,

dc:`<h3>Where do the ions come from? Dissociation, ionisation, and two kinds of conduction</h3>
${hook('Solid salt held between two wires: the bulb stays dark. Melt it, or dissolve it in water: the bulb lights. Hydrogen chloride gas: dark. Bubble it into water: it lights. What changed in each case?')}
${D1.dis}
${story('<b>Dissociation</b> is like a class whose students are <b>already wearing name tags</b> (ions already exist in NaCl or PbBr₂). Heating or water simply lets them <b>walk apart</b>. <b>Ionisation</b> is like <b>printing new name tags</b>: HCl is a molecule with no ions at all, and water <b>creates</b> them (H⁺ joins water as H₃O⁺, leaving Cl⁻).')}
<p><b>Arrhenius’ theory (1887), p.105:</b> an electrolyte dissociates into free cations and anions; the <b>degree of dissociation</b> is the extent to which it breaks up into ions; ions carry the current, and <b>the amount of electricity conducted depends on the concentration of the ions</b>; total positive charge = total negative charge.</p>
<p><b>★ Electrolytic dissociation</b> (p.105): <i>the process due to which an ionic compound in the fused [molten] state or in aqueous solution state dissociates into ions.</i></p>
${steps('Why NaCl conducts only when molten or dissolved (p.106)',[
'Solid: Na⁺ and Cl⁻ are held by <b>strong electrostatic forces</b> in fixed positions, so they are <b>not free</b> → no conduction.',
'Molten: heating gives the ions <b>kinetic energy</b>; they break loose and move freely → good conductor.',
'Aqueous: water is a <b>polar solvent</b>. Its δ− oxygen pulls Na⁺ and its δ+ hydrogen pulls Cl⁻, so the ions separate and move freely.'])}
${steps('Why HCl gas conducts only in water (p.107)',[
'Gaseous or pure liquid HCl is <b>polar covalent</b> and unionised → no ions → no conduction.',
'In water, the δ− O of water pulls the H of HCl: H⁺ + H₂O → H₃O⁺ (hydronium ion), and Cl⁻ is left in solution.',
'Ammonia behaves the same way: NH₃ + H₂O → NH₄OH ⇌ NH₄⁺ + OH⁻.'])}
<table class="cmp"><tr><th>Electrolytic dissociation</th><th>Ionisation</th></tr>
${tr(['Takes place in <b>electrovalent</b> (ionic) compounds','Takes place in <b>covalent</b> (polar) compounds'],['<b>Separation</b> of ions already present','<b>Formation</b> of ions from molecules'],['PbBr₂ ⇌ Pb²⁺ + 2Br⁻','HCl (aq) ⇌ H⁺ + Cl⁻'])}</table>
<table class="cmp"><tr><th></th><th>Metallic conduction (e.g. Cu)</th><th>Electrolytic conduction (e.g. CuSO₄)</th></tr>
${tr(['Carriers','flow of <b>electrons</b> (negligible mass)','flow of <b>ions</b> (much heavier)'],['Decomposition','<b>none</b>; properties of the metal unchanged','electrolyte <b>decomposes</b>; properties altered'],['State','conducts as solid and molten','conducts in aq. soln. or molten, <b>not</b> solid'],['Matter','<b>no transfer of matter</b>; only heat, no new products','<b>transfer of ions</b>; new products formed'])}</table>
${cy(['Cover the right-hand column. In electrolytic conduction, what carries the charge and what happens to the electrolyte?','<b>Ions</b> carry the charge, and the electrolyte is <b>decomposed</b> into new products.'])}
${trap('Solid NaCl <b>does</b> contain ions; they are just not <b>free</b>. "It has no ions" loses the mark.',
'Melting or dissolving frees the ions. The current only makes the free ions <b>drift</b>; it does not create them (the book’s wording "dissociates by passage of current" means "in the cell when current flows").',
'HCl is <b>covalent</b>, yet its solution is a strong electrolyte. So "electrolytes are ionic compounds" is only true for salts and bases.',
'Copper is a <b>conductor</b> but a <b>non-electrolyte</b>: no chemical decomposition.')}
${cy(['NaCl in water: dissociation or ionisation?','<b>Dissociation</b>: the ions already exist in NaCl.'],
['Why does HCl gas not conduct?','It has only <b>molecules</b>; no ions are formed until it reacts with water.'],
['On what does the amount of electricity conducted by an electrolyte depend?','The <b>concentration of the ions</b> in the solution (Arrhenius).'])}
${exam('In solid NaCl the ions are held in fixed positions by strong electrostatic forces. In the molten state (heat) or in aqueous solution (pull of polar water molecules) the ions become free and mobile, so NaCl conducts electricity only in the fused or aqueous state.')}
<div class="tip">Textbook: p.105 (Arrhenius, characteristics), p.106 (NaCl), p.107 (HCl, metallic vs electrolytic conduction).</div>`,

sd:`<h3>Selective discharge: when two ions race to the same electrode, who wins?</h3>
${hook('Aqueous copper sulphate contains Cu²⁺ <i>and</i> H⁺ (from water). Both are pulled to the cathode. Yet only copper ever comes out, never hydrogen. Who decides?')}
${story('Picture a <b>ticket counter</b> (the electrode) with a queue of ions. Three things decide who is served first. <b>Rule 1, the series:</b> some ions are "keen" to be turned back into atoms (Cu²⁺, Ag⁺, OH⁻), others are happy staying as ions (K⁺, Na⁺, SO₄²⁻). <b>Rule 2, crowd size:</b> if one kind of ion vastly outnumbers the rest (concentrated Cl⁻), it gets served even if it is not first in line. <b>Rule 3, an active electrode:</b> a Cu, Ni or Ag anode is itself a customer that <b>jumps the queue</b>: its own atoms give up electrons more easily than any anion.')}
<p><b>★ Selective discharge</b> (p.111): <i>the preferential discharge of ions present in an electrolyte at the respective electrodes.</i></p>
<h3>Rule 1 · Relative position in the electrochemical series</h3>
<p><i>Lower the position of the ion-forming element in the series, greater the tendency to be liberated at the respective electrode.</i></p>
${LADDER(['H⁺','Cu²⁺','Ag⁺','OH⁻'])}
<p>So Cu²⁺ beats H⁺; Ag⁺ beats H⁺; OH⁻ beats SO₄²⁻ (and NO₃⁻). Metals high in the series (K, Na) <b>lose</b> electrons most easily, so their ions <b>gain</b> them back with the greatest difficulty.</p>
<h3>Rule 2 · Concentration of the ions</h3>
<p><i>Higher the concentration of the ion, greater the probability of it being discharged.</i> Compare dilute and concentrated NaCl:</p>
${C1.dil}${M_DIL}
${C1.conc}${M_CONC}
<p>Note: at the cathode H⁺ wins in <b>both</b>. Even a crowd of Na⁺ cannot beat H⁺ (Na is far too high in the series). Rule 2 only matters when the two ions are fairly close (Cl⁻ vs OH⁻).</p>
<h3>Rule 3 · Nature of the electrode</h3>
<p><b>Inert</b> electrodes (platinum, graphite; iron, as a cathode) do not take part. <b>Active</b> electrodes (copper, nickel, silver) take part: as the anode, the metal itself loses electrons, and the anions migrate to it but are <b>not</b> discharged.</p>
${C1.cuPt}${M_CUPT}
${C1.cuCu}${M_CUCU}
${CASE({name:'aq. CuSO₄ · Pt anode vs Cu anode (p.111)',electrolyte:'aq. CuSO₄ (blue)',electrodes:'Cathode Cu in both · Anode <b>Pt</b> (inert) or <b>Cu</b> (active)',ions:'Cu²⁺, SO₄²⁻, H⁺, OH⁻',cathode:'Cu²⁺ + 2e⁻ → Cu (both cases)',anode:'Pt: 4OH⁻ − 4e⁻ → 2H₂O + O₂ &nbsp;|&nbsp; Cu: Cu − 2e⁻ → Cu²⁺',products:'Pt: Cu + O₂ (solution becomes acidic) · Cu: Cu moves from anode to cathode',see:'Pt: blue colour fades, O₂ bubbles · Cu: blue stays, anode thins',why:'Rule 1 at the cathode; Rule 3 decides the anode'})}
${D1.rules}
${trap('SO₄²⁻ and NO₃⁻ are <b>never</b> discharged from aqueous solution; OH⁻ always beats them.',
'The blue colour <b>fades with Pt</b> electrodes (Cu²⁺ used up) but <b>stays with Cu</b> electrodes (anode replaces the Cu²⁺).',
'"Lower in the series" = discharged <b>more easily</b>. K⁺ at the top is discharged with the <b>most</b> difficulty.',
'Every "give reason" answer must <b>name the rule</b>: "due to its lower position in the electrochemical series" / "due to high concentration of Cl⁻" / "because copper is an active electrode".')}
${cy(['Aq. AgNO₃ with Pt electrodes: which ion is discharged at the cathode, and by which rule?','<b>Ag⁺</b>, by Rule 1 (Ag is below H in the series).'],
['Concentrated NaCl: what forms at the anode, and why?','<b>Cl₂</b>, by Rule 2 (high concentration of Cl⁻ ions).'],
['Aq. CuSO₄ with a Cu anode: which anion is discharged?','<b>None</b>. Rule 3: the copper anode itself loses electrons, Cu − 2e⁻ → Cu²⁺.'])}
${exam('In aq. CuSO₄ both Cu²⁺ and H⁺ migrate to the cathode, but Cu²⁺ ions are discharged (Cu²⁺ + 2e⁻ → Cu) because copper is lower than hydrogen in the electrochemical series (Rule 1: lower the position, greater the tendency to be discharged).')}
<div class="tip">Textbook: p.110 (electrochemical series), p.111 (the 3 factors).</div>`,

mx:`<h3>Putting it all together: one chain for every question</h3>
${hook('The board can ask about the same cell in ten different ways: name the ion, the electrode, the observation, the equation, the reason. Is there one way of thinking that answers them all?')}
${story('Yes. Every question is one link of the same chain, like a recipe with five fixed steps. Find which step the question is asking about, and run the steps before it in your head.')}
${flow('<b>IONS</b><br>present','where they <b>GO</b>','who <b>WINS</b><br>(3 rules)','<b>WRITE</b><br>equations','what you <b>SEE</b>')}
${METHOD5()}
${C1.cuPt}
${steps('Map the question to the step',[
'"Name the particles / is it an electrolyte?" → step 1 (topic 1 and 3).',
'"Which electrode does X migrate to? Anode or cathode?" → step 2 (PANIC; anions → anode).',
'"Which ion is discharged / arrange in order / why preferred?" → step 3 (the 3 rules, topic 4).',
'"Write the reaction / oxidation or reduction?" → step 4 (AN OX, RED CAT).',
'"State the observation" → step 5 (gas colour, deposit, solution colour, electrode mass).'])}
${trap('Do not mix up "migrates to" (step 2: every ion moves) with "is discharged" (step 3: only the winner).','A <b>spectator ion</b> is one that migrates but is not discharged (e.g. SO₄²⁻ in CuSO₄).','Always say molten <i>or</i> aqueous: it changes step 1.')}
${cy(['In molten PbBr₂, what is seen at the anode?','<b>Reddish-brown fumes of bromine</b> (2Br⁻ − 2e⁻ → Br₂).'],['Which step answers "the ion discharged most readily at the cathode"?','Step 3 (WIN), using Rule 1.'],['Which electrode do the [Ag(CN)₂]⁻ ions of Na[Ag(CN)₂] go to?','The <b>anode</b>: they are anions.'])}
${exam('Ions present → migration (cations to cathode, anions to anode) → selective discharge (series, concentration, electrode) → electrode equations (reduction at cathode, oxidation at anode) → observations.')}
<div class="tip">Textbook: p.102–111. The standard cells are on Page 2 (p.112–122).</div>`
};

/* ---------------- Questions ---------------- */
const RULES='Which of the 3 discharge rules applies here: series position, concentration, or an active electrode?';
const Q=[
/* ===== 1. Electrolytes ===== */
{id:'y16-1',t:'el',src:'p.123 · 2016 Q1',ref:'p.103',type:'mcq',q:'The particles present in <b>strong electrolytes</b> are:',
 opts:['only molecules','mainly ions','ions &amp; molecules','only atoms'],ans:1,
 hint:'Step 1 (IONS). A strong electrolyte is almost completely dissociated. What is left?',
 exp:'Strong electrolytes are almost completely dissociated, so they contain <b>mainly ions only</b>. "Ions &amp; molecules" describes a weak electrolyte.'},
{id:'y17-1ii',t:'el',src:'p.123 · 2017 Q1(ii)',ref:'p.103',type:'word',q:'Identify the substance underlined: The <u>particles</u> present in a liquid such as kerosene, that is a non-electrolyte.',
 accept:['molecules','molecule','molecules only','only molecules'],ansText:'Molecules (only)',
 hint:'Non-electrolyte → no charged particles. What kind of particle is left?',
 exp:'A non-electrolyte contains <b>molecules only</b>; with no ions there is nothing to carry the current.'},
{id:'y18-3',t:'el',src:'p.123 · 2018 Q3',ref:'p.103, 105',type:'open',q:'Give a reason: Conductivity of <b>dilute hydrochloric acid</b> is greater than that of <b>acetic acid</b>.',
 hint:'Strong or weak electrolyte? And Arrhenius: what does the amount of electricity conducted depend on?',
 model:`Dilute HCl is a <b>strong electrolyte</b>: it is almost completely ionised (HCl ⇌ H⁺ + Cl⁻), so its solution has a <b>large number of free ions</b>.<br>Acetic acid is a <b>weak electrolyte</b>: it is only partially ionised (CH₃COOH ⇌ CH₃COO⁻ + H⁺), so it contains few ions and mostly <b>unionised molecules</b>.<br>Conductivity depends on the concentration of ions, so dil. HCl conducts better.`},
{id:'y19-1',t:'el',src:'p.123 · 2019 Q1',ref:'p.103',type:'mcq',q:'An electrolyte which <b>completely</b> dissociates into ions is:',
 opts:['Alcohol','Carbonic acid','Sucrose','Sodium hydroxide'],ans:3,
 hint:'Two of these are non-electrolytes and one is weak.',
 exp:'NaOH is a strong alkali: NaOH → Na⁺ + OH⁻ almost completely. Carbonic acid is weak; alcohol and sucrose are non-electrolytes.'},
{id:'y19-4',t:'el',src:'p.123 · 2019 Q4(i)(ii)(iii)',ref:'p.103',type:'fill',q:'Name the particles present in:<br>i] a strong electrolyte: {0}<br>ii] a non-electrolyte: {1}<br>iii] a weak electrolyte: {2}',
 blanks:[{o:['ions only (mainly)','molecules only','ions &amp; unionised molecules'],a:0},{o:['ions only (mainly)','molecules only','ions &amp; unionised molecules'],a:1},{o:['ions only (mainly)','molecules only','ions &amp; unionised molecules'],a:2}],
 hint:'Think of the bulb: bright, none, dim. Which particles give each?',
 exp:'Strong: almost completely dissociated → mainly ions. Non-electrolyte: molecules only. Weak: partially dissociated → ions and unionised molecules.'},
{id:'y20-4',t:'el',src:'p.123 · 2020 Q4',ref:'p.103, 109',type:'fill',q:'An alkali which completely dissociates into ions is {0}.',
 blanks:[{o:['ammonium hydroxide','calcium hydroxide','lithium hydroxide'],a:2}],
 hint:'Strong bases on p.103: NaOH, KOH, … ; weak bases: NH₄OH, Ca(OH)₂, …',
 exp:'LiOH ⇌ Li⁺ + OH⁻ is a strong electrolyte (p.109). NH₄OH and Ca(OH)₂ are listed as weak.'},
{id:'y23-5',t:'el',src:'p.124 · 2023 Q5',ref:'p.103',type:'mcq',q:'State a compound which is a <b>non-electrolyte</b> from:',
 opts:['CCl₄','PbO','NaCl','CuO','NH₄Cl'],ans:0,
 hint:'Which one is a covalent liquid made of molecules only?',
 exp:'Liquid carbon tetrachloride is covalent and contains molecules only (p.103). The others are ionic.'},
{id:'mcq1',t:'el',src:'p.124 · MCQ 1',ref:'p.103',type:'mcq',q:'<b>Assertion (A):</b> Electrolytes are covalent compounds.<br><b>Reason (R):</b> Particles in electrolytes are ions or ions &amp; molecules.',
 opts:['Both A &amp; R are true and R is the correct explanation of A','Both A &amp; R are true but R is not the correct explanation of A','A is true but R is false','A is false but R is true'],ans:3,
 hint:'p.103: what kind of compounds are electrolytes, and which are non-electrolytes?',
 exp:'A is false: the book says electrolytes are <b>ionic</b> compounds; non-electrolytes are covalent. R is true: strong electrolytes contain ions, weak ones ions and molecules.'},
{id:'mcq3',t:'el',src:'p.124 · MCQ 3',ref:'p.103, 109',type:'mcq',q:'A compound which on electrolysis yields <b>mainly ions</b>:',
 opts:['NaHCO₃','NH₄OH','Cu(NO₃)₂','Zn(OH)₂'],ans:2,
 hint:'Mainly ions = strong electrolyte. Which is a salt of a strong acid?',
 exp:'Copper nitrate is a salt of the strong acid HNO₃: a strong electrolyte. NaHCO₃ (bicarbonate), NH₄OH and Zn(OH)₂ are listed as weak.'},
{id:'a2a',t:'el',src:'p.125 · Q.2(a)',ref:'p.103',type:'open',q:'Differentiate between <b>electrolyte</b> and <b>non-electrolyte</b> [conduction of electricity].',
 hint:'Two things to compare: does it conduct (fused/aq), and is it decomposed?',
 model:`<table class="cmp"><tr><th>Electrolyte</th><th>Non-electrolyte</th></tr>${tr(['<b>Conducts</b> electricity in the fused or aqueous solution state','Does <b>not conduct</b> electricity in the fused or aqueous state'],['<b>Undergoes chemical decomposition</b> as current flows','Does <b>not</b> decompose'],['Contains ions (or ions &amp; molecules)','Contains molecules only'],['e.g. dil. HCl, NaOH soln., molten PbBr₂, aq. CuSO₄','e.g. alcohol, kerosene, sugar solution, CCl₄'])}</table>${cy(['Cover the left column. Does an electrolyte decompose when current flows?','Yes: it undergoes chemical decomposition.'])}`},
{id:'a2b',t:'el',src:'p.125 · Q.2(b)',ref:'p.103',type:'open',q:'Differentiate between <b>strong</b> and <b>weak electrolyte</b> [presence of particles in them].',
 hint:'Almost completely vs partially dissociated. What does that leave in the solution?',
 model:`<table class="cmp"><tr><th>Strong electrolyte</th><th>Weak electrolyte</th></tr>${tr(['Almost <b>completely</b> dissociated','<b>Partially</b> dissociated'],['Particles: <b>mainly ions only</b>','Particles: <b>ions and unionised molecules</b>'],['Good conductor (bright bulb)','Poor conductor (dim bulb)'],['e.g. dil. HCl, NaOH, NaCl soln.','e.g. acetic acid, NH₄OH, carbonic acid'])}</table>${cy(['Cover the right column. Name the particles of a weak electrolyte and one example.','Ions and unionised molecules; e.g. acetic acid.'])}`},
{id:'a3a',t:'el',src:'p.125 · Q.3(a)',ref:'p.103',type:'mcq',q:'From the list, select <b>an electrolyte</b>: CS₂, methyl alcohol, conc. sugar soln., caustic soda soln.',
 opts:['CS₂','methyl alcohol','conc. sugar soln.','caustic soda soln.'],ans:3,
 hint:'Which one gives ions in water?',
 exp:'Caustic soda = NaOH, a strong electrolyte. The others are covalent non-electrolytes.'},
{id:'a3b',t:'el',src:'p.125 · Q.3(b)',ref:'p.103',type:'mcq',q:'From the list, select a <b>weak electrolyte</b>: solution of K₂SO₄, silver iodide, NaHCO₃, KCl, KOH.',
 opts:['K₂SO₄','silver iodide','NaHCO₃','KCl','KOH'],ans:2,
 hint:'Weak salts on p.103: salts of weak acids (carbonate, bicarbonate, oxalate, formate).',
 exp:'Sodium bicarbonate is the salt of the weak carbonic acid, listed as weak (p.103). K₂SO₄, AgI, KCl and KOH are listed as strong.'},
{id:'a4',t:'el',src:'p.125 · Q.4',ref:'p.103, 109',type:'match',q:'State which of the following contains (a) <b>molecules only</b>, (b) <b>ions only</b>, (c) <b>both molecules &amp; ions</b>. <span class="key">(Classify the dissolved substance; ignore the water molecules.)</span>',
 left:['i] CS₂','ii] CH₃COOH','iii] NH₄OH','iv] NaOH','v] dil. HNO₃','vi] Na₂CO₃','vii] CuCl₂','viii] oxalic acid','ix] pure H₂O','x] HI'],
 right:['(a) Molecules only','(b) Ions only','(c) Both molecules &amp; ions'],ans:[0,2,2,1,1,2,1,2,0,1],
 hint:'Non-electrolyte → molecules only. Strong electrolyte → ions only. Weak electrolyte → both. Use the lists on p.103 and p.109.',
 exp:'Molecules only (non-electrolytes): CS₂, pure H₂O. Ions only (strong): NaOH, dil. HNO₃, CuCl₂, HI. Both (weak): CH₃COOH, NH₄OH, oxalic acid, Na₂CO₃.<br><i>Note:</i> the book (p.109) lists sodium carbonate as a weak electrolyte, so the expected answer is "both". (Strictly, Na₂CO₃ dissociates fully; it is the carbonate ion reacting with water that leaves some molecules.) Pure water is very feebly ionised, but the book treats it as a non-electrolyte.'},

/* ===== 2. Terms ===== */
{id:'y18-6',t:'tm',src:'p.123 · 2018 Q6(i)(ii)',ref:'p.104, 121',type:'open',q:`Copy and complete the table, which refers to the conversion of <i>ions</i> to <i>neutral particles</i>:<table class="cmp"><tr><th>Conversion</th><th>Ionic equation</th><th>Oxidation / Reduction</th></tr>${tr(['i] Chloride ion to chlorine molecule','',''],['ii] Lead [II] ion to lead','',''])}</table>`,
 hint:'Step 4 (WRITE). Is the ion losing or gaining electrons? OIL RIG.',
 model:`<table class="cmp"><tr><th>Conversion</th><th>Ionic equation</th><th>Oxidation / Reduction</th></tr>${tr(['i] Cl⁻ → Cl₂','2Cl⁻ − 2e⁻ → Cl₂','<b>Oxidation</b> (loss of e⁻, at the anode)'],['ii] Pb²⁺ → Pb','Pb²⁺ + 2e⁻ → Pb','<b>Reduction</b> (gain of e⁻, at the cathode)'])}</table>Check: charges balance on each side (−2 = −2; +2 − 2 = 0).`},
{id:'y21-7',t:'tm',src:'p.124 · 2021-22 Q7',ref:'p.104',type:'mcq',q:'State which one of the following is a <b>non-metallic cation</b>:',
 opts:['K⁺','NH₄⁺','Cu²⁺','Na⁺'],ans:1,
 hint:'A cation is +. Which + ion is not made from a metal atom?',
 exp:'NH₄⁺ (ammonium) is positive but made of N and H, both non-metals. K⁺, Cu²⁺, Na⁺ are metal ions.'},
{id:'y24-3',t:'tm',src:'p.124 · 2024 Q3',ref:'p.104',type:'word',q:'State the term: Two metal plates or wires through which the current <b>enters and leaves</b> the electrolytic cell.',
 accept:['electrodes','electrode','the electrodes'],ansText:'Electrodes',
 hint:'p.104, section 5.',
 exp:'<b>Electrodes</b> allow the current to enter or leave the electrolytic solution (anode and cathode).'},
{id:'y25-3a',t:'tm',src:'p.124 · 2025 Q3(a)',ref:'p.104',type:'open',q:'Justify: <b>Anode is known as the oxidising electrode.</b>',
 hint:'Step 2 and 4: which ions arrive at the anode, and do they lose or gain electrons there?',
 model:`The anode is connected to the positive terminal, so <b>anions migrate to it</b>. There they <b>lose (donate) electrons</b> to the anode and become neutral atoms, e.g. Cl⁻ − 1e⁻ → Cl. Loss of electrons is <b>oxidation</b>, and the electrons leave the electrolyte through the anode. Since oxidation takes place at the anode, it is called the oxidising electrode.`},
{id:'a1',t:'tm',src:'p.125 · Q.1(a)–(d)',ref:'p.103–104',type:'fill',q:'Select the correct term from: Ionization, Ions, Anode, Non-electrolyte, Electrolysis, Cathode.<br>(a) Ions which are positively charged migrate to it: {0}<br>(b) Involves a chemical change &amp; is a redox reaction: {1}<br>(c) Become free &amp; mobile on passage of electric current through aq. solution of the compound: {2}<br>(d) Are covalent compounds containing molecules only: {3}',
 blanks:[{o:['Ionization','Ions','Anode','Non-electrolyte','Electrolysis','Cathode'],a:5},{o:['Ionization','Ions','Anode','Non-electrolyte','Electrolysis','Cathode'],a:4},{o:['Ionization','Ions','Anode','Non-electrolyte','Electrolysis','Cathode'],a:1},{o:['Ionization','Ions','Anode','Non-electrolyte','Electrolysis','Cathode'],a:3}],
 hint:'PANIC for (a). (b): what process both oxidises and reduces? (c): what carries current in a liquid?',
 exp:'(a) Cathode (cations go to the − electrode). (b) Electrolysis (oxidation at anode + reduction at cathode). (c) Ions (p.104). (d) Non-electrolytes.<br><i>Note:</i> ions are actually freed by dissolving or melting; the current only makes them move.'},
{id:'a2c',t:'tm',src:'p.125 · Q.2(c)',ref:'p.104',type:'open',q:'Differentiate between <b>anode</b> and <b>cathode</b> [reducing &amp; oxidising electrodes].',
 hint:'AN OX, RED CAT. Which ions arrive at each, and do electrons leave or enter there?',
 model:`<table class="cmp"><tr><th>Anode</th><th>Cathode</th></tr>${tr(['Connected to the <b>positive</b> terminal','Connected to the <b>negative</b> terminal'],['<b>Oxidising</b> electrode: anions <b>lose</b> electrons here','<b>Reducing</b> electrode: cations <b>gain</b> electrons here'],['Electrons <b>leave</b> the electrolyte here','Electrons <b>enter</b> the electrolyte here'],['e.g. Cl⁻ − 1e⁻ → Cl','e.g. Na⁺ + 1e⁻ → Na'])}</table>${cy(['Cover the right column. Is the cathode oxidising or reducing, and why?','Reducing: cations gain electrons at the cathode.'])}`},
{id:'ut3-1',t:'tm',src:'p.126 · Unit test Q.3(1)',ref:'p.104',type:'fill',q:'The electrode at which anions donate excess electrons and are oxidised to neutral atoms is the {0}.',
 blanks:[{o:['anode','cathode'],a:0}],hint:'"Anion" → "an"ode. AN OX.',exp:'Anions go to the <b>anode</b> and are oxidised there.'},
{id:'ut3-3',t:'tm',src:'p.126 · Unit test Q.3(3)',ref:'p.103–104',type:'fill',q:'Electrolysis is a/an {0} reaction in which reduction takes place at the {1}.',
 blanks:[{o:['oxidation','reduction','redox'],a:2},{o:['cathode','anode'],a:0}],
 hint:'Two things happen in every cell, one at each electrode. RED CAT.',
 exp:'Oxidation at the anode + reduction at the cathode → <b>redox</b>. Reduction is at the <b>cathode</b>.'},

/* ===== 3. Dissociation, ionisation, conduction ===== */
{id:'y16-4i',t:'dc',src:'p.123 · 2016 Q4(i)',ref:'p.106',type:'open',q:'Give a reason: <b>Sodium chloride will conduct electricity only in fused or aqueous solution state.</b>',
 hint:'Step 1 (IONS): the ions are there in the solid. Are they free to move?',
 model:`In solid NaCl the Na⁺ and Cl⁻ ions are held in fixed positions by <b>strong electrostatic forces of attraction</b>, so they are not free to move and cannot carry current.<br>On <b>fusing</b>, the ions gain kinetic energy and move freely. In <b>water</b> (a polar solvent) the δ− oxygen pulls Na⁺ and the δ+ hydrogen pulls Cl⁻, so the ions separate and move freely.<br>Free, mobile ions are essential for conduction, so NaCl conducts only in the fused or aqueous state.`},
{id:'y16-4iii',t:'dc',src:'p.123 · 2016 Q4(iii)',ref:'p.107',type:'open',q:'Give a reason: <b>Although copper is a good conductor of electricity, it is a non-electrolyte.</b>',
 hint:'Check the definition of an electrolyte: it must conduct AND …?',
 model:`Copper conducts by the <b>flow of electrons</b> (metallic conduction). It does <b>not undergo chemical decomposition</b> when current flows; its chemical properties are unchanged and no new products form.<br>An electrolyte must conduct <b>and</b> be decomposed by the current (flow of ions). So copper is a conductor but a non-electrolyte.`},
{id:'y20-6',t:'dc',src:'p.123 · 2020 Q6',ref:'p.107',type:'open',q:'Differentiate between a <b>conductor</b> and an <b>electrolyte</b> [conducting particles].',
 hint:'What moves in a copper wire? What moves in copper sulphate solution?',
 model:`<table class="cmp"><tr><th>Conductor (metal, e.g. Cu)</th><th>Electrolyte (e.g. aq. CuSO₄)</th></tr>${tr(['Current carried by <b>electrons</b>','Current carried by <b>ions</b>'],['No decomposition; no new products','Decomposes; new products form'],['Conducts in the solid (and molten) state','Conducts only fused or in aq. solution'])}</table>${cy(['Cover the left column. Name the conducting particles in a metal.','Electrons (free electrons).'])}`},
{id:'y21-2',t:'dc',src:'p.123 · 2021-22 Q2',ref:'p.106',type:'mcq',q:'Solid sodium chloride does <b>not</b> conduct electricity as:',
 opts:['The strength of the bond is weak','It contains free ions','It does not contain any free ions','It contains free ions as well as molecules'],ans:2,
 hint:'The ions are present, but are they free?',
 exp:'In the solid the ions are held in fixed positions by strong electrostatic forces, so there are <b>no free ions</b>.'},
{id:'y21-5',t:'dc',src:'p.124 · 2021-22 Q5',ref:'p.107',type:'mcq',q:'State which statement about <b>conduction of electricity</b> is correct:',
 opts:['Electricity is conducted in aqueous solution by electrons','Electricity is conducted in a metal wire by ions','Electricity is conducted in a molten electrolyte by electrons','Electricity is conducted in an acid solution by ions'],ans:3,
 hint:'Electrons in the wire; ions in the liquid.',
 exp:'An acid solution is an electrolyte, so <b>ions</b> carry the current. Metals conduct by electrons; solutions and molten electrolytes by ions. (The ends of options ii and iv are cut off at the page edge; read as "by ions".)'},
{id:'y24-4',t:'dc',src:'p.124 · 2024 Q4(a)(b)',ref:'p.105',type:'fill',q:'X: HCl ⇌ H⁺ + Cl⁻ [in solution state]; &nbsp; Y: PbBr₂ ⇌ Pb²⁺ + 2Br⁻ [in molten state].<br>Identify the reaction which exhibits (a) electrolytic dissociation: {0} &nbsp; (b) ionisation: {1}',
 blanks:[{o:['X','Y'],a:1},{o:['X','Y'],a:0}],
 hint:'Ionic compound (ions already there) or covalent compound (ions made)?',
 exp:'PbBr₂ is ionic: its ions just separate → <b>dissociation (Y)</b>. HCl is covalent: ions are formed from molecules → <b>ionisation (X)</b>.'},
{id:'y25-2a',t:'dc',src:'p.124 · 2025 Q2(a)',ref:'p.106–107',type:'fill',q:'{0} conducts electricity by the movement of ions.',
 blanks:[{o:['Molten iron','Molten sodium chloride'],a:1}],
 hint:'Metallic conduction vs electrolytic conduction.',
 exp:'Molten NaCl contains free Na⁺ and Cl⁻ ions. Molten iron is a metal and conducts by electrons.'},
{id:'a2d',t:'dc',src:'p.125 · Q.2(d)',ref:'p.105',type:'open',q:'Differentiate between <b>electrolytic dissociation</b> and <b>ionisation</b> [formation or separation of ions].',
 hint:'Ions already present (ionic compound) or made from molecules (covalent compound)?',
 model:`<table class="cmp"><tr><th>Electrolytic dissociation</th><th>Ionisation</th></tr>${tr(['Takes place in <b>electrovalent</b> compounds','Takes place in <b>covalent</b> compounds'],['<b>Separation</b> of ions already present','<b>Formation</b> of charged ions from molecules not in the ionic state'],['PbBr₂ ⇌ Pb²⁺ + 2Br⁻','HCl (aq) ⇌ H⁺ + Cl⁻ (H⁺ + H₂O → H₃O⁺)'])}</table>${cy(['Cover the left column. In which type of compound does dissociation occur, and what happens to the ions?','Electrovalent (ionic) compounds; ions already present simply separate.'])}`},
{id:'a3c',t:'dc',src:'p.125 · Q.3(c)',ref:'p.105',type:'mcq',q:'From the solutions of CuSO₄, PbBr₂, NiSO₄, HCl, MgCl₂, NaCl, select the one which undergoes <b>ionisation</b>.',
 opts:['CuSO₄','PbBr₂','NiSO₄','HCl','MgCl₂','NaCl'],ans:3,
 hint:'Ionisation happens to a covalent compound. Which one is covalent?',
 exp:'HCl is polar covalent; its ions are formed in water. All the others are ionic and undergo dissociation.'},
{id:'a5a',t:'dc',src:'p.125 · Q.5(a)',ref:'p.106',type:'open',q:'State, giving reasons, in what state or medium <b>NaCl</b> conducts electricity.',
 hint:'Step 1 (IONS): when are the ions free?',
 model:`NaCl conducts in the <b>molten (fused) state</b> or in <b>aqueous solution</b>, not as a solid. It is ionic; in the solid the ions are held by strong electrostatic forces. Heating gives them kinetic energy to move freely; in water the polar water molecules pull them apart. Free ions carry the current. (Dissociation: NaCl → Na⁺ + Cl⁻.)`},
{id:'a5bc',t:'dc',src:'p.125 · Q.5(b)(c)',ref:'p.107',type:'open',q:'State, giving reasons, in what state or medium (b) <b>HCl gas</b> and (c) <b>NH₃ gas</b> conduct electricity.',
 hint:'Polar covalent gases: no ions until they react with water.',
 model:`(b) <b>HCl</b> conducts only in <b>aqueous solution</b>. As a gas or pure liquid it is unionised (molecules only). In water it ionises: HCl + H₂O → H₃O⁺ + Cl⁻.<br>(c) <b>NH₃</b> conducts only in <b>aqueous solution</b>. The gas has molecules only; in water: NH₃ + H₂O → NH₄OH ⇌ NH₄⁺ + OH⁻ (a weak electrolyte, so it conducts poorly).<br>Both are polar covalent: water (a polar solvent) produces the ions by <b>ionisation</b>.`},
{id:'a6',t:'dc',src:'p.125 · Q.6',ref:'p.107',type:'open',q:'A teacher demonstrates the flow of electric current through a <b>nickel wire</b> and through <b>NiSO₄ solution</b>. State <b>three differences</b> which she makes a theoretical note of during the process.',
 hint:'Metallic vs electrolytic conduction table, p.107.',
 model:`<table class="cmp"><tr><th>Nickel wire (metallic)</th><th>NiSO₄ soln. (electrolytic)</th></tr>${tr(['1. Current flows by <b>electrons</b>','1. Current flows by <b>ions</b> (Ni²⁺, SO₄²⁻, H⁺, OH⁻)'],['2. <b>No decomposition</b>; nickel unchanged','2. Solution is <b>decomposed</b>; chemical change at the electrodes'],['3. <b>No transfer of matter</b>; only heat produced, no new products','3. <b>Transfer of ions</b>; new products formed at the electrodes'])}</table>${cy(['Cover the left column. What carries the current in the nickel wire?','Electrons.'])}`},
{id:'ut3-4',t:'dc',src:'p.126 · Unit test Q.3(4)',ref:'p.105',type:'fill',q:'According to Arrhenius’s theory, the amount of electricity conducted by the electrolyte depends on the {0} of the ions in solution.',
 blanks:[{o:['nature','concentration'],a:1}],hint:'More runners → bigger current.',exp:'Arrhenius (p.105): it depends on the <b>concentration</b> of the ions.'},
{id:'ut3-5',t:'dc',src:'p.126 · Unit test Q.3(5)',ref:'p.109',type:'fill',q:'Salts ionise in aq. soln. on passage of electric current to give {0} ions other than H⁺ ions.',
 blanks:[{o:['negative','positive'],a:1}],
 hint:'Acids give H⁺, bases give OH⁻. Salts give the "other" ions of each sign.',
 exp:'Salts furnish <b>positive</b> ions other than H⁺ (and negative ions other than OH⁻), p.109.<br><i>Book wording:</i> salts are ionic, so strictly they <b>dissociate</b> (ions already present) on melting or dissolving; the current is not needed to form them.'},
{id:'ut5-5',t:'dc',src:'p.126 · Unit test Q.5(5)',ref:'p.107',type:'mcq',q:'A covalent compound which in aqueous state conducts electricity:',
 opts:['CCl₄','CS₂','NH₃','C₂H₆'],ans:2,
 hint:'Which one is polar and reacts with water to form ions?',
 exp:'NH₃ + H₂O → NH₄⁺ + OH⁻. CCl₄, CS₂ and the hydrocarbon stay as molecules. (The last option is partly cut off at the page edge; it is a hydrocarbon, C₂H₄ or C₂H₆, either way a non-electrolyte.)'},

/* ===== 4. Selective discharge ===== */
{id:'y17-3i',t:'sd',src:'p.123 · 2017 Q3(i)',ref:'p.110–111',type:'mcq',q:'Select the ion that would get selectively discharged from the aqueous mixture: SO₄²⁻, NO₃⁻ &amp; OH⁻.',
 opts:['SO₄²⁻','NO₃⁻','OH⁻'],ans:2,
 hint:RULES+' All three are anions: find them on the ladder.',
 exp:'Rule 1: OH⁻ is <b>lowest</b> in the anion series, so it is discharged: 4OH⁻ − 4e⁻ → 2H₂O + O₂. SO₄²⁻ and NO₃⁻ are never discharged from aqueous solution.'},
{id:'y17-3ii',t:'sd',src:'p.123 · 2017 Q3(ii)',ref:'p.110–111',type:'mcq',q:'Select the ion that would get selectively discharged from the aqueous mixture: Pb²⁺, Ag⁺ &amp; Cu²⁺.',
 opts:['Pb²⁺','Ag⁺','Cu²⁺'],ans:1,
 hint:RULES+' Which metal is lowest in the series?',
 exp:'Rule 1: Ag is the lowest of the three (Pb above H; Cu, then Ag below H), so Ag⁺ + 1e⁻ → Ag.<br><i>Book misprint:</i> the question prints "Pb²⁻"; lead forms Pb²⁺.'},
{id:'y18-5',t:'sd',src:'p.123 · 2018 Q5',ref:'p.111',type:'fill',q:'Electrolysis of aqueous sodium chloride solution will form {0} at the cathode.',
 blanks:[{o:['hydrogen gas','sodium metal'],a:0}],
 hint:'Step 1: which cations are present in an AQUEOUS solution? Then '+RULES,
 exp:'IONS Na⁺, H⁺ → both GO to the cathode → WIN: H⁺ (Rule 1: H is far below Na; even a high concentration of Na⁺ does not help) → 2H⁺ + 2e⁻ → H₂ → SEE hydrogen bubbles.'},
{id:'y19-3',t:'sd',src:'p.123 · 2019 Q3',ref:'p.110',type:'fill',q:'Arrange Mg²⁺, Cu²⁺, Na⁺, H⁺ in the order of <b>preferential discharge at the cathode</b> (most easily discharged first):<br>1st {0} → 2nd {1} → 3rd {2} → 4th {3}',
 blanks:[{o:['Na⁺','Cu²⁺','Mg²⁺','H⁺'],a:1},{o:['Na⁺','Cu²⁺','Mg²⁺','H⁺'],a:3},{o:['Na⁺','Cu²⁺','Mg²⁺','H⁺'],a:2},{o:['Na⁺','Cu²⁺','Mg²⁺','H⁺'],a:0}],
 hint:'Rule 1. Read the cation ladder from the BOTTOM up: K, Ca, Na, Mg, Al, Zn, Fe, Pb, H, Cu, Ag.',
 exp:'Lower in the series = discharged more easily: <b>Cu²⁺ &gt; H⁺ &gt; Mg²⁺ &gt; Na⁺</b>.'},
{id:'y21-3',t:'sd',src:'p.124 · 2021-22 Q3',ref:'p.110',type:'mcq',q:'If a solution of an electrolyte mixture has calcium, zinc, cupric and magnesium ions, which of these ions would you see preferentially discharged at the cathode?',
 opts:['Calcium ions','Zinc ions','Cupric ions','Magnesium ions'],ans:2,
 hint:RULES,
 exp:'Rule 1: Cu is the lowest of Ca, Mg, Zn, Cu, so Cu²⁺ + 2e⁻ → Cu (reddish-brown deposit).'},
{id:'y23-2ii',t:'sd',src:'p.124 · 2023 Q2(ii)',ref:'p.110',type:'fill',q:'The ion which could be discharged most readily during electrolysis is {0}.',
 blanks:[{o:['Fe²⁺','Cu²⁺'],a:1}],hint:RULES,
 exp:'Rule 1: Cu is below Fe (and below H) in the series, so Cu²⁺ is discharged more readily.'},
{id:'y23-4',t:'sd',src:'p.124 · 2023 Q4',ref:'p.110',type:'fill',q:'Arrange Cu²⁺, Na⁺, Zn²⁺, Ag⁺ in order of <b>preferential discharge at the cathode</b> (most readily first):<br>1st {0} → 2nd {1} → 3rd {2} → 4th {3}',
 blanks:[{o:['Zn²⁺','Ag⁺','Na⁺','Cu²⁺'],a:1},{o:['Zn²⁺','Ag⁺','Na⁺','Cu²⁺'],a:3},{o:['Zn²⁺','Ag⁺','Na⁺','Cu²⁺'],a:0},{o:['Zn²⁺','Ag⁺','Na⁺','Cu²⁺'],a:2}],
 hint:'Rule 1: start from the bottom of the cation ladder.',
 exp:'<b>Ag⁺ &gt; Cu²⁺ &gt; Zn²⁺ &gt; Na⁺</b> (Na is highest in the series, so hardest to discharge).'},
{id:'a7a',t:'sd',src:'p.125 · Q.7(a)',ref:'p.110',type:'fill',q:'In the electrochemical series the tendency of the anion to get {0} at the {1} {2} on descending the series.',
 blanks:[{o:['reduced','oxidised'],a:1},{o:['cathode','anode'],a:1},{o:['decreases','increases'],a:1}],
 hint:'Anions go to the anode and lose electrons. Which anion (top or bottom) is discharged most easily?',
 exp:'Anions are <b>oxidised</b> at the <b>anode</b>, and the tendency <b>increases</b> on descending: SO₄²⁻ (hardest) … OH⁻ (easiest).'},
{id:'a7b',t:'sd',src:'p.125 · Q.7(b)',ref:'p.111',type:'fill',q:'One factor affecting selective discharge of ions is the relative position of the ion: {0} the position of the ion, the {1} is the tendency to be liberated at the respective electrode.',
 blanks:[{o:['higher','lower'],a:1},{o:['greater','lesser'],a:0}],
 hint:'This is Rule 1 word for word (p.111).',
 exp:'"<b>Lower</b> the position of the ion-forming element in the series, <b>greater</b> the tendency to be liberated."'},
{id:'a8a',t:'sd',src:'p.125 · Q.8(a)',ref:'p.110–111',type:'open',q:'From the ions SO₄²⁻ &amp; OH⁻, state, giving reasons, which ion is discharged at the respective electrode.',
 hint:'Step 2: which electrode? Step 3: '+RULES,
 model:`<b>IONS</b> SO₄²⁻, OH⁻ → <b>GO</b> both to the anode → <b>WIN</b> <b>OH⁻</b>. Reason (Rule 1): OH⁻ is lower than SO₄²⁻ in the electrochemical series, so it has the greater tendency to be discharged → <b>WRITE</b> 4OH⁻ − 4e⁻ → 2H₂O + O₂ → <b>SEE</b> O₂ bubbles at the anode.`},
{id:'a8b',t:'sd',src:'p.125 · Q.8(b)',ref:'p.110–111',type:'open',q:'From the ions Cu²⁺ &amp; H⁺, state, giving reasons, which ion is discharged at the respective electrode.',
 hint:'Step 2: which electrode? Step 3: '+RULES,
 model:`<b>IONS</b> Cu²⁺, H⁺ → <b>GO</b> both to the cathode → <b>WIN</b> <b>Cu²⁺</b>. Reason (Rule 1): copper is lower than hydrogen in the electrochemical series, so Cu²⁺ gains electrons more easily → <b>WRITE</b> Cu²⁺ + 2e⁻ → Cu → <b>SEE</b> reddish-brown copper deposited on the cathode.`},
{id:'a8c',t:'sd',src:'p.125 · Q.8(c)',ref:'p.110–111',type:'open',q:'From the ions Ag⁺ &amp; H⁺, state, giving reasons, which ion is discharged at the respective electrode.',
 hint:'Step 2: which electrode? Step 3: '+RULES,
 model:`<b>IONS</b> Ag⁺, H⁺ → <b>GO</b> both to the cathode → <b>WIN</b> <b>Ag⁺</b>. Reason (Rule 1): silver is lower than hydrogen in the electrochemical series, so Ag⁺ is discharged preferentially → <b>WRITE</b> Ag⁺ + 1e⁻ → Ag → <b>SEE</b> greyish-white silver deposited on the cathode.`},
{id:'a9',t:'sd',src:'p.125 · Q.9',ref:'p.111',type:'mcq',q:'From the electrodes copper, graphite, iron, platinum, select <b>a metallic active electrode</b>.',
 opts:['copper','graphite','iron','platinum'],ans:0,
 hint:'Rule 3: p.111 lists the active electrodes as copper, nickel, silver.',
 exp:'<b>Copper</b> takes part in the reaction (Cu − 2e⁻ → Cu²⁺ at the anode). Graphite, platinum (and iron, per the book) are inert.'},
{id:'ut3-2',t:'sd',src:'p.126 · Unit test Q.3(2)',ref:'p.111',type:'fill',q:'On electrolysis, Ag¹⁺ &amp; H¹⁺ ions migrate to the {0} &amp; {1} ions are discharged.',
 blanks:[{o:['cathode','anode'],a:0},{o:['Ag¹⁺','H¹⁺'],a:0}],
 hint:'Step 2: cations go where? Step 3: '+RULES,
 exp:'Cations → <b>cathode</b>. Rule 1: Ag is below H, so <b>Ag⁺</b> is discharged: Ag⁺ + 1e⁻ → Ag.'},
{id:'ut5-1',t:'sd',src:'p.126 · Unit test Q.5(1)',ref:'p.110',type:'mcq',q:'The cation discharged at the cathode <b>most readily</b>:',
 opts:['Fe²⁺','Cu²⁺','Pb²⁺','H¹⁺'],ans:1,hint:RULES,
 exp:'Rule 1: of Fe, Pb, H, Cu, copper is lowest, so Cu²⁺ is discharged most readily.'},
{id:'ut5-2',t:'sd',src:'p.126 · Unit test Q.5(2)',ref:'p.110',type:'mcq',q:'The anion discharged at the anode with <b>most difficulty</b>:',
 opts:['SO₄²⁻','Br¹⁻','NO₃¹⁻','OH¹⁻'],ans:0,hint:'Rule 1: the anion at the TOP of the anion series is hardest to discharge.',
 exp:'Anion order (hardest → easiest): <b>SO₄²⁻</b>, NO₃⁻, Cl⁻, Br⁻, I⁻, OH⁻.'},
{id:'ut5-3',t:'sd',src:'p.126 · Unit test Q.5(3)',ref:'p.111',type:'mcq',q:'The metallic electrode which does <b>not</b> take part in an electrolytic reaction:',
 opts:['Cu','Ag','Fe','Ni'],ans:2,hint:'Rule 3: active electrodes are Cu, Ni, Ag (p.111).',
 exp:'The book lists iron with graphite and platinum as inert. Cu, Ag and Ni are active. (Iron is used as an inert <b>cathode</b>; as an anode it would actually dissolve, but that is beyond this question.)'},
{id:'ut5-4',t:'sd',src:'p.126 · Unit test Q.5(4)',ref:'p.111',type:'mcq',q:'The ion/s discharged during electrolysis of aq. CuSO₄ using <b>Cu electrodes</b>:',
 opts:['Cu²⁺','SO₄²⁻','H¹⁺','OH¹⁻'],ans:0,
 hint:'Cathode: Rule 1. Anode: is it active (Rule 3)?',
 exp:'Cathode: Cu²⁺ + 2e⁻ → Cu (Rule 1). Anode: Cu is active, so the anode dissolves (Cu − 2e⁻ → Cu²⁺) and <b>no anion</b> is discharged (Rule 3). Only Cu²⁺ is discharged.'},

/* ===== 5. Mixed ===== */
{id:'y20-5',t:'mx',src:'p.123 · 2020 Q5(i)–(iv)',ref:'p.103–104',type:'match',q:'Choose the correct word (A: Oxidation, B: Cathode, C: Anode, D: An electrolyte, E: Reduction) to match each description:',
 left:['i] Conducts electricity in aq. or in molten state.','ii] Loss of electron takes place at anode.','iii] A reducing electrode.','iv] Electrode connected to the positive end or terminal of the battery.'],
 right:['A: Oxidation','B: Cathode','C: Anode','D: An electrolyte','E: Reduction'],ans:[3,0,1,2],
 hint:'OIL RIG, AN OX / RED CAT, PANIC.',
 exp:'i → D (electrolyte). ii → A (loss of e⁻ = oxidation). iii → B (cathode: cations gain e⁻). iv → C (anode is +). E (reduction) is the distractor.'},
{id:'y21-6',t:'mx',src:'p.124 · 2021-22 Q6',ref:'p.103',type:'mcq',q:'In a circuit (battery, lamp and two electrodes dipping in substance X), the <b>lamp lights up</b>. What could X be?',
 opts:['a soln. of alcohol in water','a soln. of sodium chloride in water','sugar solution','solid potassium chloride'],ans:1,
 hint:'The lamp lights only if X has free ions.',
 exp:'Aq. NaCl has free Na⁺ and Cl⁻. Alcohol and sugar are non-electrolytes; <b>solid</b> KCl has ions that are not free.'},
{id:'y23-2i',t:'mx',src:'p.124 · 2023 Q2(i)',ref:'p.112',type:'fill',q:'During electrolysis, {0} in its molten state liberates reddish-brown fumes at the anode.',
 blanks:[{o:['NaCl','PbBr₂'],a:1}],
 hint:'Step 5 (SEE). Which halogen is a reddish-brown vapour?',
 exp:'Molten PbBr₂: 2Br⁻ − 2e⁻ → Br₂, <b>reddish-brown</b> bromine vapour. Molten NaCl would give greenish-yellow Cl₂.'},
{id:'ut1',t:'mx',src:'p.126 · Unit test Q.1(1)–(5)',ref:'p.103–107, 118–120',type:'match',q:'Match statements 1 to 5 with answers from A to J.',
 left:['1] A compound containing molecules only.','2] A compound which ionises in soln. state but not in gaseous state.','3] The ion which accepts electrons from the cathode and gets reduced to neutral atoms.','4] The electrode to which the cyanide ions of aq. Na[Ag(CN)₂] migrate during electrolysis.','5] An application of electrolysis in which the anode does not generally diminish in size.'],
 right:['A: Cathode','B: Sucrose soln.','C: Cl¹⁻','D: Formic acid','E: Electrometallurgy','F: Ammonia','G: Mg²⁺','H: Electrorefining','I: Sulphur dioxide','J: Anode'],ans:[1,5,6,9,4],
 hint:'1: non-electrolyte. 2: polar covalent gas (p.107). 3: a cation. 4: complex ions [Ag(CN)₂]⁻ are anions. 5: in refining the impure anode dissolves away.',
 exp:'1 → B (sucrose: molecules only). 2 → F (ammonia: NH₃ + H₂O → NH₄⁺ + OH⁻). 3 → G (Mg²⁺ is the only cation). 4 → J (anions → anode). 5 → E (electrometallurgy, e.g. extraction of Na, uses inert graphite anodes; in electrorefining the anode dissolves). Note: in the extraction of aluminium the carbon anodes do burn away, hence "generally".'}
];

/* ---------------- Chapter (book order, p.102–111) ---------------- */
const CHAPTER=[
{id:'s-a',title:'Syllabus & A. Introduction · the electrolytic cell',ref:'p.102',t:['el','mx'],html:`
${hook('Why does a bulb in a circuit glow brightly with salt water, dimly with vinegar, and not at all with sugar water?')}
<p><b>Syllabus (from March 2027):</b> I. electrolytes &amp; non-electrolytes; II. substances containing molecules only, ions only, both (strong, weak, non-electrolytes); III. definitions: electrolysis, electrolyte, electrode, anode, cathode, anion, cation, oxidation &amp; reduction (loss &amp; gain of electrons); IV. migration of ions and the factors influencing <b>selective discharge</b> (activity series), illustrated by molten lead bromide, acidified water with Pt electrodes, aq. CuSO₄ with Cu and Pt electrodes; V. applications: electroplating with Ni and Ag (NiSO₄ and sodium argentocyanide), electrorefining of copper.</p>
<ul><li><b>Electrolysis</b>: <i>electro</i> (electricity, i.e. flow of electrons) + <i>lysis</i> (pertaining to).</li>
<li><b>Electrolytes</b>: compounds which conduct electricity when dissolved in water or in the molten state, e.g. NaCl, CuSO₄. <b>Non-electrolytes</b> do not, e.g. alcohol, sugar soln.</li>
<li><b>Electrolytic cell</b>: a non-conducting vessel containing the electrolyte (aq. or fused). <b>Anode</b> → + terminal; <b>cathode</b> → − terminal (via wire, bulb and key).</li>
<li>The glow of the bulb (current kept the same) shows: <b>strong electrolyte</b> → bright; <b>weak</b> → dim; <b>non-electrolyte</b> → no glow.</li></ul>
${D1.bulb}`},
{id:'s-b',title:'B. Terms 1–3: electrolysis, electrolytes, strong & weak',ref:'p.103',t:['el','tm'],html:`
<p><b>★ 1. Electrolysis</b>: <i>the decomposition of a chemical compound [electrolyte] in the aqueous or fused [molten] state by the passage of a direct electric current resulting in discharge of ions as neutral atoms at the respective electrodes.</i></p>
<p>NaCl ⇌ Na⁺ + Cl⁻. At the cathode: Na⁺ + 1e⁻ → Na (reduction). At the anode: Cl⁻ − 1e⁻ → Cl (oxidation). Electrolysis is a chemical change and a <b>redox</b> reaction.</p>
<table class="cmp"><tr><th>2a. Electrolytes</th><th>2b. Non-electrolytes</th></tr>
${tr(['★ Compounds which conduct electricity in the fused or aq. solution state &amp; undergo chemical decomposition due to the flow of current','★ Compounds which do not conduct in the fused or aq. state &amp; do not undergo chemical decomposition'],['Are <b>ionic</b> compounds','Are <b>covalent</b> compounds'],['Particles: ions only, or ions &amp; molecules','Particles: <b>molecules only</b>'],['Acids: dil. HCl, HNO₃, H₂SO₄. Alkalis: KOH, NaOH soln. Salts: PbBr₂ (molten), CuSO₄ (aq.)','Pure / distilled water, alcohol, kerosene, CS₂, liq. CCl₄, sucrose, glucose, sugar soln.'])}</table>
<table class="cmp"><tr><th>3a. Strong electrolytes</th><th>3b. Weak electrolytes</th></tr>
${tr(['Allow a large amount of electricity to flow: <b>good conductors</b>','Allow small amounts: <b>poor conductors</b>'],['<b>Almost completely dissociated</b> in fused or aq. state','<b>Partially dissociated</b>'],['Particles: <b>mainly ions only</b>','Particles: <b>ions &amp; unionised molecules</b>'],['Acids: dil. HCl, H₂SO₄, HNO₃, HBr, HI. Bases: NaOH, KOH, LiOH soln. Salts: NaCl (KCl), Na₂SO₄, NaNO₃, CuCl₂, PbSO₄, Pb(NO₃)₂, PbBr₂, AgI aq. solns.','Acids: carbonic, acetic, oxalic, formic. Bases: NH₄OH, Ca(OH)₂, Mg(OH)₂, Zn(OH)₂. Salts: sodium carbonate, bicarbonate, oxalate and formate aq. solns.'])}</table>
<p class="key">Salts in the solid state are non-electrolytes. Electricity is conducted in an acid solution by ions. (HCl is covalent but ionises in water; see p.107.)</p>`},
{id:'s-c',title:'B. Terms 4–6: electrolytic cell, electrodes, ions',ref:'p.104',t:['tm'],html:`
<p><b>4. Electrolytic cell (voltameter)</b>: the device in which electrolysis is carried out; it contains electrodes (cathode &amp; anode) and the electrolytic solution.</p>
<p><b>5. Electrodes</b>: allow the current to enter or leave the electrolytic solution; two in number; made of metal or carbon. Graphite electrodes are used when the products react with metallic electrodes. Classified as anode or cathode by their connection to the battery.</p>
<table class="cmp"><tr><th>5a. Anode (positive electrode)</th><th>5b. Cathode (negative electrode)</th></tr>
${tr(['Connected to the <b>positive</b> terminal; acquires a + charge, so <b>anions migrate</b> to it','Connected to the <b>negative</b> terminal; acquires a − charge, so <b>cations migrate</b> to it'],['Anions <b>donate</b> excess electrons to the anode and are <b>oxidised</b> to neutral atoms','Cations <b>gain</b> electrons from the cathode and are <b>reduced</b> to neutral atoms'],['<b>Oxidising electrode</b>: electrons leave the electrolyte here. Loss of electrons = oxidation','<b>Reducing electrode</b>: electrons enter the electrolyte here. Gain of electrons = reduction'],['Anode: Cl⁻ − 1e⁻ → Cl','Cathode: Na⁺ + 1e⁻ → Na'])}</table>
<p><b>6. Ions</b>: atoms (or groups of atoms) which carry a positive or negative charge and become free and mobile in an aqueous solution (or melt) of a compound.</p>
<table class="cmp"><tr><th>6a. Anions</th><th>6b. Cations</th></tr>
${tr(['Negatively charged ions','Positively charged ions'],['Migrate to the <b>anode</b> and are discharged there','Migrate to the <b>cathode</b> and are discharged there'],['Lose electrons (oxidation)','Gain electrons (reduction)'])}</table>
${C1.nacl}${M_NACL}`},
{id:'s-d',title:'C. Mechanism: Arrhenius, characteristics, dissociation vs ionisation',ref:'p.105',t:['dc'],html:`
<p><b>Arrhenius’ theory (1887):</b></p>
<ul><li>An electrolyte on dissolving in water dissociates into free cations and anions and allows current to flow.</li>
<li>The <b>degree of dissociation</b> is the extent to which an electrolyte dissociates into ions.</li>
<li>Ions carry the current; the amount of electricity conducted depends on the <b>concentration of the ions</b>.</li>
<li>Number of positive charges = number of negative charges (electrolytic equilibrium, also between ions and unionised molecules).</li></ul>
<p><b>1. Characteristics of electrolysis:</b></p>
<ul><li>Cations (metallic ions) migrate to the cathode; anions (non-metallic ions) to the anode.</li>
<li>Preferential discharge depends on the ion’s position in the <b>electrochemical series</b>.</li>
<li>The number of electrons gained by the anode equals the number donated by the cathode.</li>
<li>Products are formed <b>at the electrodes only</b>, since electron exchange takes place at their surface.</li>
<li>Only hydrogen and metals are liberated at the cathode (<b>electropositive</b>); only non-metals at the anode (<b>electronegative</b>).</li></ul>
<p><b>★ 2. Electrolytic dissociation</b>: <i>the process due to which an ionic compound in the fused [molten] state or in aqueous solution state dissociates into ions</i> (the book adds "by passage of electric current"; in fact melting or dissolving frees the ions, and the current moves them).</p>
${D1.dis}
<table class="cmp"><tr><th>Electrolytic dissociation</th><th>Ionisation</th></tr>
${tr(['Takes place in <b>electrovalent</b> compounds','Takes place in <b>covalent</b> compounds'],['<b>Separation</b> of ions already present','<b>Formation</b> of charged ions from molecules not in the ionic state'],['PbBr₂ ⇌ Pb²⁺ + 2Br⁻','HCl (aq) ⇌ H⁺ + Cl⁻; also atoms → ions, e.g. Mg → Mg²⁺ + 2e⁻'])}</table>`},
{id:'s-e',title:'C3. Electrolytic dissociation of NaCl (molten & aqueous)',ref:'p.106',t:['dc'],html:`
<p>Solid NaCl is a <b>non-electrolyte</b>; it conducts only in the <b>fused or aqueous</b> state.</p>
${steps('a] Molten (fused) state',['NaCl contains Na⁺ and Cl⁻ held by a <b>strong electrostatic force of attraction</b>; the ions are not free, so the solid is a bad conductor.','When heated strongly, the ions gain kinetic energy, break loose and move freely.','The melt becomes a <b>good conductor</b>.'])}
${steps('b] Aqueous solution state',['Water is a <b>polar solvent</b>: each H has a slight + charge (δ+), O a slight − charge (δ−).','The δ− oxygen pulls on Na⁺; the δ+ hydrogens pull on Cl⁻.','Na⁺ and Cl⁻ become free and move about in solution.'])}`},
{id:'s-f',title:'C4. Ionisation of HCl · metallic vs electrolytic conduction',ref:'p.107',t:['dc'],html:`
<p><b>★</b> <i>Polar covalent compounds [e.g. ammonia, hydrogen chloride] are non-electrolytes in the gaseous state, but ionise in aqueous solution state.</i></p>
<ul><li>HCl gas or pure liquid is unionised and does not conduct.</li>
<li>HCl is polar covalent: H is δ+, Cl is δ−.</li>
<li>In water, the δ− O of water pulls the H⁺ of HCl: H⁺ + H₂O → H₃O⁺ (hydronium ion); Cl⁻ remains in solution.</li></ul>
<table class="cmp"><tr><th>Metal (e.g. Cu)</th><th>Electrolyte (e.g. CuSO₄)</th></tr>
${tr(['1. Flow of <b>electrons</b> (negligible mass)','1. Flow of <b>ions</b> (denser than electrons)'],['2. <b>No decomposition</b>; chemical properties intact','2. <b>Decomposition</b> of the electrolyte; properties altered'],['3. Good conductors in the <b>solid</b> and molten state','3. Good conductors in <b>aq. soln. or molten</b>, not solid'],['4. <b>No transfer of matter</b>; only heat, no new products','4. <b>Transfer of ions</b>; new products formed'])}</table>
${cy(['Cover the right column. Does an electrolyte conduct in the solid state?','No: only in aqueous solution or molten state.'])}
<p><b>Copper metal</b> is a good conductor but a <b>non-electrolyte</b> (not decomposed). <b>Copper(II) sulphate</b> is an electrolyte: it forms Cu²⁺ and SO₄²⁻, and Cu²⁺ is discharged at the cathode as Cu metal.</p>`},
{id:'s-g',title:'D. Acids, bases and salts as electrolytes',ref:'p.108–109',t:['el'],html:`
${steps('Experiment: is compound A a strong or a weak electrolyte? (p.108)',['<b>Apparatus:</b> voltameter; X = electrolytic solution of the compound; Y = graphite electrodes connected to a bulb and a current source through a key.','<b>Procedure:</b> put A (fused or aqueous) in the cell and switch on.','<b>Observation:</b> bulb glows <b>brightly</b> → strong electrolyte; glow <b>very dim</b> → weak electrolyte.'])}
<p>Acids, bases (alkalis) and salts dissolved in water (or fused, for salts) give free mobile ions and are <b>strong or weak</b> depending on the <b>degree of dissociation</b>.</p>
<table class="cmp"><tr><th></th><th>Acids (furnish H⁺)</th><th>Bases (furnish OH⁻)</th><th>Salts (other ions)</th></tr>
${tr(['<b>Strong</b>','HCl ⇌ H⁺ + Cl⁻<br>HNO₃ ⇌ H⁺ + NO₃⁻<br>H₂SO₄ ⇌ 2H⁺ + SO₄²⁻','KOH ⇌ K⁺ + OH⁻<br>NaOH ⇌ Na⁺ + OH⁻<br>LiOH ⇌ Li⁺ + OH⁻','PbBr₂ ⇌ Pb²⁺ + 2Br⁻ (molten)<br>CuCl₂ ⇌ Cu²⁺ + 2Cl⁻<br>AgNO₃ ⇌ Ag⁺ + NO₃⁻'],
['<b>Weak</b>','CH₃COOH ⇌ CH₃COO⁻ + H⁺<br>HCOOH ⇌ HCOO⁻ + H⁺<br>H₂CO₃ ⇌ 2H⁺ + CO₃²⁻','Ca(OH)₂ ⇌ Ca²⁺ + 2OH⁻<br>Mg(OH)₂ ⇌ Mg²⁺ + 2OH⁻<br>NH₄OH ⇌ NH₄⁺ + OH⁻','Na₂CO₃ ⇌ 2Na⁺ + CO₃²⁻<br>KHCO₃ ⇌ K⁺ + HCO₃⁻<br>(CH₃COO)₂Pb ⇌ 2CH₃COO⁻ + Pb²⁺'])}</table>
<p class="key">The book says bases and salts "ionise"; strictly, ionic bases and salts <b>dissociate</b> (their ions already exist), and only covalent acids ionise. The book’s placing of Na₂CO₃ and KHCO₃ among weak electrolytes follows the ICSE convention for salts of weak acids.</p>`},
{id:'s-h',title:'E. Electrochemical series',ref:'p.110',t:['sd'],html:`
<p>Metals are arranged by the ease with which they <b>lose electrons and form ions</b>: the <b>metal activity series</b> or <b>electrochemical series</b>.</p>
<ul><li><b>Top:</b> metals which ionise most readily (K − 1e⁻ → K⁺). Their cations gain electrons with the <b>greatest difficulty</b> (K⁺ + 1e⁻ → K).</li>
<li><b>Lower end:</b> metals which ionise least readily (Cu − 2e⁻ → Cu²⁺; Ag − 1e⁻ → Ag⁺). Their cations are discharged <b>most readily</b> (Cu²⁺ + 2e⁻ → Cu; Ag⁺ + 1e⁻ → Ag).</li></ul>
<table class="cmp"><tr><th>Metal</th><th>Cation</th><th>Anion</th></tr>
${tr(['K','K⁺','SO₄²⁻'],['Ca','Ca²⁺','NO₃⁻'],['Na','Na⁺','Cl⁻'],['Mg','Mg²⁺','Br⁻'],['Al','Al³⁺','I⁻'],['Zn','Zn²⁺','OH⁻'],['Fe','Fe²⁺',''],['Pb','Pb²⁺',''],['[H]','H⁺',''],['Cu','Cu²⁺',''],['Hg','Hg²⁺',''],['Ag','Ag⁺',''])}</table>
<p>Down the cation column: increasing ease of <b>reduction</b> at the cathode. Down the anion column: increasing ease of <b>oxidation</b> at the anode. Top = discharged with most difficulty; bottom = discharged most easily.</p>
${LADDER()}`},
{id:'s-i',title:'F. Selective discharge of ions: the 3 factors',ref:'p.111',t:['sd','mx'],html:`
<p><b>★ Selective discharge</b>: <i>the preferential discharge of ions present in an electrolyte at the respective electrodes.</i></p>
<p><b>1. Relative position in the electrochemical series:</b> lower the position of the ion-forming element, greater the tendency to be liberated. Cu²⁺ &amp; H⁺ → Cu²⁺ discharged; Ag⁺ &amp; H⁺ → Ag⁺ discharged; SO₄²⁻ &amp; OH⁻ → OH⁻ discharged.</p>
<p><b>2. Concentration of the ions:</b> higher the concentration, greater the probability of being discharged.</p>
<table class="cmp"><tr><th>Dilute NaCl soln.</th><th>Conc. NaCl soln.</th></tr>
${tr(['NaCl ⇌ Na⁺ + Cl⁻; H₂O ⇌ H⁺ + OH⁻','NaCl ⇌ Na⁺ + Cl⁻; H₂O ⇌ H⁺ + OH⁻'],['Cathode: H⁺ discharged (gains e⁻ more easily than Na⁺)','Cathode: H⁺ discharged (despite the high conc. of Na⁺)'],['Anode: OH⁻ discharged (lower position in the series)','Anode: Cl⁻ discharged (high conc. of Cl⁻)'],['H₂ at cathode; O₂ at anode','H₂ at cathode; Cl₂ at anode'])}</table>
<p><b>3. Nature of the electrode:</b> <b>inert</b> electrodes (iron, graphite, platinum) do not take part; <b>active</b> electrodes (copper, nickel, silver) take part.</p>
<table class="cmp"><tr><th>Active electrode: Cu anode</th><th>Aq. CuSO₄</th><th>Inert electrode: Pt anode</th></tr>
${tr(['Anode: Cu − 2e⁻ → Cu²⁺<br>Product: Cu²⁺ ions','CuSO₄ ⇌ Cu²⁺ + SO₄²⁻<br>H₂O ⇌ H⁺ + OH⁻','Anode: OH⁻ − 1e⁻ → OH (× 4)<br>4OH → 2H₂O + O₂'])}</table>
<p>With an active anode (Cu, Ni, Ag) the anions (SO₄²⁻, OH⁻) migrate to the anode but are <b>not discharged</b>; the anode itself loses electrons and forms ions (Cu²⁺, Ni²⁺, Ag⁺).</p>
${D1.rules}`}
];
const TOPIC_SEC={el:'s-b',tm:'s-c',dc:'s-d',sd:'s-i',mx:'s-a'};

/* ---------------- Page ---------------- */
const PAGE={key:'electrolysis-1-v1',title:'⚡ Electrolysis 1 · Electrolytes, ions & selective discharge',lab:'electrolysis-lab.html#cell',
 pages:{123:'Previous ICSE questions 2016–2021-22 (Page-1 items)',124:'Previous ICSE 2021-22 to 2025 and MCQ 1, 3',125:'Additional &amp; HOTS Q.1–9',126:'Unit Test Paper 5: Q.1, Q.3, Q.5'},
 formulas:`<h3>📐 Quick sheet: electrolysis basics</h3>
<p><b>The routine for every cell:</b></p>${METHOD5()}
<p><b>PANIC</b>: Positive Anode, Negative Is Cathode. <b>AN OX, RED CAT</b>: oxidation at anode, reduction at cathode. <b>OIL RIG</b>: oxidation is loss, reduction is gain (of e⁻). Electrons move in the <b>wire</b>; ions move in the <b>liquid</b>.</p>
${LADDER()}
<table class="cmp"><tr><th>Rule</th><th>Says</th><th>Classic example</th></tr>${tr(
 ['1 · Series position','Lower in the series → discharged more easily','Cu²⁺ beats H⁺; Ag⁺ beats H⁺; OH⁻ beats SO₄²⁻, NO₃⁻'],
 ['2 · Concentration','Higher concentration → more likely discharged','Conc. NaCl: Cl⁻ beats OH⁻ (Cl₂ at anode)'],
 ['3 · Electrode','Active anode (Cu, Ni, Ag) dissolves itself; no anion discharged','Cu anode: Cu − 2e⁻ → Cu²⁺'])}</table>
<table class="cmp"><tr><th>Particles</th><th>Type</th><th>Examples</th></tr>${tr(
 ['Mainly ions only','Strong electrolyte','dil. HCl, H₂SO₄, HNO₃; NaOH, KOH; NaCl, CuSO₄, AgNO₃'],
 ['Ions + unionised molecules','Weak electrolyte','acetic, formic, oxalic, carbonic acid; NH₄OH, Ca(OH)₂; Na₂CO₃, NaHCO₃'],
 ['Molecules only','Non-electrolyte','pure water, alcohol, kerosene, CS₂, CCl₄, sugar'])}</table>
<table class="cmp"><tr><th>Key equations</th><th></th></tr>${tr(
 ['Cathode (reduction)','Na⁺ + 1e⁻ → Na · Pb²⁺ + 2e⁻ → Pb · Cu²⁺ + 2e⁻ → Cu · Ag⁺ + 1e⁻ → Ag · 2H⁺ + 2e⁻ → H₂'],
 ['Anode (oxidation)','2Cl⁻ − 2e⁻ → Cl₂ · 2Br⁻ − 2e⁻ → Br₂ · 4OH⁻ − 4e⁻ → 2H₂O + O₂ · Cu − 2e⁻ → Cu²⁺'],
 ['Dissociation','PbBr₂ ⇌ Pb²⁺ + 2Br⁻ · NaCl ⇌ Na⁺ + Cl⁻ · CuSO₄ ⇌ Cu²⁺ + SO₄²⁻'],
 ['Ionisation','HCl + H₂O → H₃O⁺ + Cl⁻ · NH₃ + H₂O → NH₄⁺ + OH⁻ · H₂O ⇌ H⁺ + OH⁻'])}</table>`};
