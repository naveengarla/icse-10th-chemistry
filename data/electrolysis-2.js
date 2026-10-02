/* Electrolysis 2 (Dalal ICSE Class 10, Ch.5): standard cells, electroplating, refining & extraction.
   Theory p.112–122 · Questions p.122 worksheet, p.123–124 previous questions, p.124 MCQ, p.125 HOTS, p.126 unit test.
   Needs lib/common.js and data/electro-common.js (CELL, METHOD5, CASE, LADDER). */

/* compact 5-step model answer: IONS → GO → WIN → WRITE → SEE */
const ANS5=(ions,go,win,write,see)=>`<ol class="sol" style="margin:4px 0">
<li><b>Ions:</b> ${ions}</li><li><b>Go:</b> ${go}</li><li><b>Win:</b> ${win}</li><li><b>Write:</b> ${write}</li><li><b>See:</b> ${see}</li></ol>`;
const RULES=`<table class="cmp"><tr><th>Rule</th><th>What decides it</th><th>Example</th></tr>${tr(
['<b>1 · Series</b>','The ion <b>lower</b> in the electrochemical (activity) series is discharged first.','Cu²⁺ before H⁺; OH⁻ before SO₄²⁻'],
['<b>2 · Concentration</b>','A much more <b>concentrated</b> ion can be discharged even if it is higher in the series.','conc. NaCl: Cl⁻ before OH⁻'],
['<b>3 · Electrode</b>','An <b>active</b> anode (Cu, Ni, Ag) itself loses electrons and dissolves, so <b>no anion</b> is discharged. An <b>inert</b> anode (Pt, graphite) lets the anion be discharged.','Cu anode in CuSO₄ → Cu − 2e⁻ → Cu²⁺'])}</table>`;

/* ---------------- Diagrams ---------------- */
const D={
pb:CELL({cat:['Pb²⁺'],an:['Br⁻'],win:{cat:'Pb²⁺',an:'Br⁻'},anode:'graphite',cathode:'iron / graphite',title:'Molten PbBr₂ · graphite electrodes (inert)',atC:'silvery grey Pb',atA:'reddish-brown Br₂',gasA:true,molten:true,liquid:'#fde68a'}),
water:CELL({cat:['H⁺'],an:['SO₄²⁻','OH⁻'],win:{cat:'H⁺',an:'OH⁻'},anode:'Pt foil',cathode:'Pt foil',title:'Acidified water · Pt electrodes (inert)',atC:'H₂ · 2 volumes',atA:'O₂ · 1 volume',gasA:true,gasC:true,liquid:'#e0f2fe'}),
cuCu:CELL({cat:['Cu²⁺','H⁺'],an:['SO₄²⁻','OH⁻'],win:{cat:'Cu²⁺'},anode:'Cu (active)',cathode:'Cu',title:'Aq. CuSO₄ · copper electrodes (active anode)',atC:'pink-brown Cu deposits',atA:'Cu anode dissolves',liquid:'#93c5fd'}),
cuPt:CELL({cat:['Cu²⁺','H⁺'],an:['SO₄²⁻','OH⁻'],win:{cat:'Cu²⁺',an:'OH⁻'},anode:'Pt (inert)',cathode:'Pt',title:'Aq. CuSO₄ · platinum electrodes (inert anode)',atC:'pink-brown Cu deposits',atA:'O₂ bubbles · blue fades',gasA:true,liquid:'#bfdbfe'}),
ni:CELL({cat:['Ni²⁺','H⁺'],an:['SO₄²⁻','OH⁻'],win:{cat:'Ni²⁺'},anode:'Ni block (active)',cathode:'article',title:'Nickel plating · aq. NiSO₄',atC:'Ni coats the article',atA:'Ni block dissolves',liquid:'#bbf7d0'}),
ag:CELL({cat:['Ag⁺','Na⁺','H⁺'],an:['CN⁻','OH⁻'],win:{cat:'Ag⁺'},anode:'Ag block (active)',cathode:'article',title:'Silver plating · aq. Na[Ag(CN)₂]',atC:'Ag coats the article',atA:'Ag block dissolves',liquid:'#f1f5f9'}),
ref:CELL({cat:['Cu²⁺','H⁺'],an:['SO₄²⁻','OH⁻'],win:{cat:'Cu²⁺'},anode:'impure Cu block',cathode:'thin pure Cu sheet',title:'Electrorefining of copper · acidified aq. CuSO₄',atC:'pure Cu builds up',atA:'anode thins · anode mud',liquid:'#93c5fd'}),
na:CELL({cat:['Na⁺'],an:['Cl⁻'],win:{cat:'Na⁺',an:'Cl⁻'},anode:'graphite',cathode:'iron',title:'Extraction of sodium · fused NaCl',atC:'Na metal',atA:'Cl₂ gas',gasA:true,molten:true,liquid:'#fef3c7'}),
al:CELL({cat:['Al³⁺'],an:['O²⁻'],win:{cat:'Al³⁺',an:'O²⁻'},anode:'graphite',cathode:'graphite lining',title:'Extraction of aluminium · fused alumina',atC:'molten Al',atA:'O₂ gas',gasA:true,molten:true,liquid:'#fef3c7'})
};

/* ---------------- Case files (same rows as the book's summary, p.121) ---------------- */
const C={
pb:CASE({name:'Molten lead bromide',electrolyte:'PbBr₂ (molten, above 380 °C) in a silica crucible',electrodes:'Cathode: iron or graphite · Anode: graphite (both <b>inert</b>)',ions:'PbBr₂ ⇌ Pb²⁺ + 2Br⁻ (no water, so no H⁺/OH⁻)',
 cathode:'Pb²⁺ + 2e⁻ → Pb (reduction)',anode:'Br⁻ − 1e⁻ → Br ; Br + Br → Br₂ (oxidation)',products:'Cathode: lead metal · Anode: bromine vapour',
 see:'Silvery grey deposit at the cathode; reddish-brown fumes at the anode',why:'Only one cation and one anion, so there is no competition. Inert electrodes, so the ions themselves are discharged.'}),
water:CASE({name:'Acidified water',electrolyte:'Water + a few drops of dil. H₂SO₄',electrodes:'Cathode: Pt foil · Anode: Pt foil (both <b>inert</b>)',ions:'H₂SO₄ ⇌ 2H⁺ + SO₄²⁻ ; H₂O ⇌ H⁺ + OH⁻ → H⁺, SO₄²⁻, OH⁻',
 cathode:'H⁺ + 1e⁻ → H (×4) ; 2H + 2H → 2H₂',anode:'OH⁻ − 1e⁻ → OH (×4) ; 4OH → 2H₂O + O₂',products:'Cathode: hydrogen (2 vol) · Anode: oxygen (1 vol)',
 see:'Colourless gas bubbles at both electrodes; volume at cathode is twice that at the anode',why:'<b>Rule 1:</b> OH⁻ is lower in the series than SO₄²⁻, so OH⁻ is discharged. Inert Pt (<b>rule 3</b>) lets OH⁻ be discharged.'}),
cuCu:CASE({name:'Aq. CuSO₄ with copper electrodes',electrolyte:'Aqueous CuSO₄ (may be acidified with dil. H₂SO₄)',electrodes:'Cathode: Cu · Anode: Cu (<b>active</b>)',ions:'CuSO₄ ⇌ Cu²⁺ + SO₄²⁻ ; H₂O ⇌ H⁺ + OH⁻',
 cathode:'Cu²⁺ + 2e⁻ → Cu',anode:'Cu − 2e⁻ → Cu²⁺ (the anode itself dissolves)',products:'Cathode: copper metal · Anode: nil (Cu²⁺ ions formed)',
 see:'Pink-brown copper deposits on the cathode (gains mass); the anode loses mass; the <b>blue colour stays the same</b>',
 why:'Cathode: <b>rule 1</b>, Cu²⁺ is below H⁺. Anode: <b>rule 3</b>, the active Cu anode loses electrons more easily than SO₄²⁻ or OH⁻, so neither anion is discharged.'}),
cuPt:CASE({name:'Aq. CuSO₄ with platinum electrodes',electrolyte:'Aqueous CuSO₄',electrodes:'Cathode: Pt (or C) · Anode: Pt or carbon (<b>inert</b>)',ions:'CuSO₄ ⇌ Cu²⁺ + SO₄²⁻ ; H₂O ⇌ H⁺ + OH⁻',
 cathode:'Cu²⁺ + 2e⁻ → Cu',anode:'OH⁻ − 1e⁻ → OH (×4) ; 4OH → 2H₂O + O₂',products:'Cathode: copper metal · Anode: oxygen gas',
 see:'Pink-brown copper on the cathode; colourless gas bubbles at the anode; the <b>blue colour fades</b> (solution slowly becomes acidic, H₂SO₄ left)',
 why:'Cathode: <b>rule 1</b>, Cu²⁺ below H⁺. Anode: inert (<b>rule 3</b>) so an anion must go; <b>rule 1</b>, OH⁻ below SO₄²⁻.'}),
ni:CASE({name:'Electroplating with nickel',electrolyte:'Aqueous nickel sulphate NiSO₄',electrodes:'Cathode: cleaned article · Anode: block of nickel (<b>active</b>)',ions:'NiSO₄ ⇌ Ni²⁺ + SO₄²⁻ ; H₂O ⇌ H⁺ + OH⁻',
 cathode:'Ni²⁺ + 2e⁻ → Ni (deposited on article)',anode:'Ni − 2e⁻ → Ni²⁺',products:'Cathode: nickel coat · Anode: nil (Ni²⁺ ions formed)',
 see:'Article gets a silvery-grey nickel coat; Ni anode diminishes in mass; colour of solution unchanged',why:'Cathode: Ni²⁺ preferred to H⁺ by <b>rule 2</b> (concentration): Ni sits <i>above</i> H in the series, so rule 1 alone would pick H⁺, but Ni²⁺ ions vastly outnumber H⁺ ions. Anode: active Ni (<b>rule 3</b>).'}),
ag:CASE({name:'Electroplating with silver',electrolyte:'Aq. sodium argentocyanide Na[Ag(CN)₂] (sodium silver cyanide)',electrodes:'Cathode: cleaned article · Anode: block of silver (<b>active</b>)',ions:'Na[Ag(CN)₂] ⇌ Na⁺ + Ag⁺ + 2CN⁻ ; H₂O ⇌ H⁺ + OH⁻',
 cathode:'Ag⁺ + 1e⁻ → Ag (deposited on article)',anode:'Ag − 1e⁻ → Ag⁺',products:'Cathode: silver coat · Anode: nil (Ag⁺ ions formed)',
 see:'Shiny silver coat on the article; Ag anode diminishes in mass',why:'Cathode: Ag⁺ is lowest in the series, below Na⁺ and H⁺ (<b>rule 1</b>). Anode: active Ag (<b>rule 3</b>), so CN⁻ and OH⁻ are not discharged.'}),
ref:CASE({name:'Electrorefining of copper',electrolyte:'Acidified aqueous CuSO₄',electrodes:'Cathode: thin sheet of <b>pure</b> Cu · Anode: thick block of <b>impure</b> Cu (<b>active</b>)',ions:'CuSO₄ ⇌ Cu²⁺ + SO₄²⁻ ; H₂O ⇌ H⁺ + OH⁻',
 cathode:'Cu²⁺ + 2e⁻ → Cu (pure, on the thin sheet)',anode:'Cu − 2e⁻ → Cu²⁺',products:'Cathode: pure copper · Anode: nil (Cu²⁺ ions); impurities as anode mud',
 see:'Cathode grows thicker; impure anode gets used up; anode mud (Au, Ag) collects below the anode',why:'Same chemistry as CuSO₄ with Cu electrodes: <b>rule 1</b> at the cathode, <b>rule 3</b> (active anode) at the anode.'}),
na:CASE({name:'Extraction of sodium',electrolyte:'Fused (molten) NaCl',electrodes:'Inert electrodes (iron cathode, graphite anode)',ions:'NaCl ⇌ Na⁺ + Cl⁻',
 cathode:'Na⁺ + 1e⁻ → Na',anode:'Cl⁻ − 1e⁻ → Cl ; Cl + Cl → Cl₂',products:'Cathode: sodium metal · Anode: chlorine gas',
 see:'Molten silvery sodium at the cathode; greenish-yellow chlorine gas at the anode',why:'Molten, so there is no water: no H⁺ to compete, and Na⁺ is the only cation. Na is too high in the series to be got by reducing its oxide with C.'}),
al:CASE({name:'Extraction of aluminium',electrolyte:'Fused pure alumina Al₂O₃',electrodes:'Inert electrodes (graphite)',ions:'Al₂O₃ ⇌ 2Al³⁺ + 3O²⁻',
 cathode:'2Al³⁺ + 6e⁻ → 2Al',anode:'3O²⁻ − 6e⁻ → 3[O] ; 3[O] + 3[O] → 3O₂',products:'Cathode: aluminium · Anode: oxygen',
 see:'Molten aluminium collects at the cathode; oxygen at the anode',why:'Al₂O₃ is a very stable oxide and Al has a strong affinity for oxygen, so C, CO or H₂ cannot reduce it: electrolysis is the only way.'})
};

const PAGE={key:'electrolysis-2-v1',title:'⚡ Electrolysis 2 · Standard cells, electroplating, refining & extraction',lab:'electrolysis-lab.html#cell',
 pages:{122:'Equation worksheet (items 1–24 + CuSO₄/Pt rows)',123:'Previous questions 2016–2020, 2021-22 Q1',124:'Previous questions 2021-22 Q4, Q8 · 2023 · 2024 · 2025 · MCQ 2, 4',125:'Additional & HOTS Q10–Q15',126:'Unit test paper 5: Q.2, Q.4, Q.6'},
 formulas:`<h3>📐 Quick sheet: electrolysis cells</h3>
<p><b>The routine for ANY cell:</b></p>${METHOD5()}
<p><b>The 3 discharge rules</b></p>${RULES}
${LADDER(['Cu²⁺','Ag⁺','OH⁻','H⁺'])}
<p><b>Key electrode equations</b> (book style)</p>
<table class="cmp"><tr><th>Cell</th><th>Cathode (−) · reduction</th><th>Anode (+) · oxidation</th></tr>${tr(
['Molten PbBr₂ (graphite)','Pb²⁺ + 2e⁻ → Pb','Br⁻ − 1e⁻ → Br ; Br + Br → Br₂'],
['Acidified water (Pt)','H⁺ + 1e⁻ → H (×4) ; 2H + 2H → 2H₂','OH⁻ − 1e⁻ → OH (×4) ; 4OH → 2H₂O + O₂'],
['Aq. CuSO₄ (Cu)','Cu²⁺ + 2e⁻ → Cu','Cu − 2e⁻ → Cu²⁺'],
['Aq. CuSO₄ (Pt)','Cu²⁺ + 2e⁻ → Cu','4OH⁻ − 4e⁻ → 2H₂O + O₂'],
['Ni plating (NiSO₄)','Ni²⁺ + 2e⁻ → Ni','Ni − 2e⁻ → Ni²⁺'],
['Ag plating (Na[Ag(CN)₂])','Ag⁺ + 1e⁻ → Ag','Ag − 1e⁻ → Ag⁺'],
['Cu refining (acid. CuSO₄)','Cu²⁺ + 2e⁻ → Cu (pure)','Cu − 2e⁻ → Cu²⁺ (impure block)'],
['Fused NaCl','Na⁺ + 1e⁻ → Na','Cl⁻ − 1e⁻ → Cl ; Cl + Cl → Cl₂'],
['Fused Al₂O₃','2Al³⁺ + 6e⁻ → 2Al','3O²⁻ − 6e⁻ → 3[O] ; 3[O] + 3[O] → 3O₂'])}</table>
<p class="key">Check every equation: atoms the same on both sides, and total charge the same on both sides (treat “− ne⁻” on the left as adding +n).</p>`};

/* ---------------- Topics & concept lessons ---------------- */
const TOPICS=[
{id:'t1',name:'1. Molten lead bromide',ref:'p.112–113'},
{id:'t2',name:'2. Acidified water (and acids/alkalis)',ref:'p.114–115'},
{id:'t3',name:'3. Copper sulphate: Cu vs Pt electrodes',ref:'p.116–117'},
{id:'t4',name:'4. Electroplating (Ni, Ag)',ref:'p.118–119'},
{id:'t5',name:'5. Electrorefining & electrometallurgy',ref:'p.120–121'},
{id:'t6',name:'6. Equation practice (worksheet) & mixed',ref:'p.121–122'}
];

const CONCEPT={
t1:`<h3>Molten lead bromide: the simplest cell</h3>
${hook('Solid lead bromide does not conduct at all. Heat it until it melts and the bulb glows. What changed, when no new substance was added?')}
${story('In the solid, the ions are like students locked in their desks (held by electrostatic attraction). Melting rings the bell: the ions are now free to walk. Put a <b>−</b> door on one side and a <b>+</b> door on the other: the Pb²⁺ students walk to the − door and the Br⁻ students to the + door. Nobody walks through the wire: in the wire it is <b>electrons</b> that move, in the melt it is <b>ions</b>.')}
<p>★ <i>The electrolytic cell is made of silica and the crucible is heated slowly from outside.</i> The crucible is silica since it is non-reactive, withstands high temperature and is almost a non-conductor. <i>Solid lead bromide is a non-conductor since its ions are not free but held together by an electrostatic force of attraction. The ions become free when lead bromide is in the fused or molten state.</i></p>
${D.pb}
${METHOD5('Pb²⁺, Br⁻ only (molten: no water, so no H⁺/OH⁻)','Pb²⁺ → cathode (−); Br⁻ → anode (+)','No competition: one cation, one anion. Electrodes inert (graphite).','Cathode: Pb²⁺ + 2e⁻ → Pb (reduction)<br>Anode: Br⁻ − 1e⁻ → Br ; Br + Br → Br₂ (oxidation)','Silvery grey lead at the cathode; reddish-brown bromine vapour at the anode')}
${C.pb}
<p>★ <i>A graphite anode is preferred to other inert electrodes such as platinum since graphite is unaffected by the reactive bromine vapours.</i> The electrodes must be inert, since they should not take part in the reaction, otherwise they would prevent the discharge of the respective ions.</p>
<p>Because reduction (cathode) and oxidation (anode) both happen, the electrolysis of molten PbBr₂ is a <b>redox reaction</b>.</p>
${trap('<b>Electrons do NOT swim through the melt.</b> Electrons flow in the wire; ions carry the current in the liquid.','The anode is <b>+</b> in electrolysis (PANIC: Positive Anode, Negative Is Cathode).','Lead deposits at the <b>cathode</b>, never the anode. Brown fumes are at the <b>anode</b>.','“Temperature is not maintained” is false: the crucible is kept above 380 °C or the ions freeze in place again.')}
${cy(['Why is graphite preferred to platinum as the anode here?','Graphite is <b>unaffected by the reactive bromine vapours</b>, which would attack platinum.'],['Write the anode reaction.','Br⁻ − 1e⁻ → Br ; Br + Br → Br₂'],['Why is it a redox reaction?','Pb²⁺ <b>gains</b> electrons at the cathode (reduction) and Br⁻ <b>loses</b> electrons at the anode (oxidation).'])}
${exam('Molten PbBr₂ ⇌ Pb²⁺ + 2Br⁻. At the cathode Pb²⁺ + 2e⁻ → Pb (silvery grey lead); at the anode Br⁻ − 1e⁻ → Br, Br + Br → Br₂ (reddish-brown vapours).')}
<div class="tip">Textbook: p.112–113.</div>`,

t2:`<h3>Acidified water: why do we get 2 H₂ : 1 O₂?</h3>
${hook('Pure water hardly conducts. Add a few drops of dilute sulphuric acid and it splits into two gases. Which gas comes off at which electrode, and why is one tube twice as full?')}
${story('The acid is like a ticket seller who lets a crowd into the stadium: it supplies plenty of ions so current can flow. But at the gates, the <b>water’s own ions</b> (H⁺ and OH⁻) are the ones that get “discharged”. SO₄²⁻ queues at the anode but never gets in, because OH⁻ is lower in the series and always goes first.')}
${D.water}
${METHOD5('H₂SO₄ ⇌ 2H⁺ + SO₄²⁻ ; H₂O ⇌ H⁺ + OH⁻ → H⁺, SO₄²⁻, OH⁻','H⁺ → cathode; SO₄²⁻ and OH⁻ → anode','Cathode: H⁺ (only cation). Anode: <b>OH⁻</b>, lower in the series than SO₄²⁻ (rule 1); Pt is inert (rule 3).','Cathode: H⁺ + 1e⁻ → H (×4); 2H + 2H → 2H₂<br>Anode: OH⁻ − 1e⁻ → OH (×4); 4OH → 2H₂O + O₂','Colourless gas bubbles at both: H₂ (2 vol) at cathode, O₂ (1 vol) at anode')}
${C.water}
<p>★ <i>Dilute sulphuric acid is preferred to dilute nitric acid for acidification since nitric acid is a volatile acid, may decompose and the nitrate radical [NO₃⁻] may tend to interfere with the electrolytic reaction.</i></p>
<p>★ <i>The ratio of hydrogen and oxygen liberated at cathode and anode is 2 : 1 by volume.</i> 4H⁺ are needed at the cathode and 4OH⁻ at the anode: for every 2 molecules of water, 2 molecules of H₂ and 1 molecule of O₂ are liberated: 2H₂O → 2H₂ + O₂.</p>
<p>Concentration of SO₄²⁻ (and so of H₂SO₄) increases near the anode, but the total amount of acid stays the same because only H⁺ and OH⁻ are discharged.</p>
${trap('SO₄²⁻ (and NO₃⁻) are <b>never</b> discharged in aqueous solution: OH⁻ goes instead.','Oxygen is at the <b>anode</b> (+), hydrogen at the <b>cathode</b> (−). Not the other way round.','The 2 : 1 ratio is by <b>volume</b>, and H₂ is the bigger one.','Inert electrode here is <b>platinum</b>, not copper or nickel.')}
${cy(['Name the ion discharged at the anode and the rule used.','OH⁻: rule 1 (lower in the series than SO₄²⁻). Pt is inert, so an anion must be discharged.'],['Why is dil. H₂SO₄ added?','Pure water is almost a non-electrolyte; the acid supplies ions so that water conducts and can be electrolysed.'],['Why not dil. HNO₃?','It is volatile, may decompose, and NO₃⁻ may interfere with the reaction.'])}
${exam('In acidified water, OH⁻ ions are discharged at the anode in preference to SO₄²⁻ (lower in the electrochemical series): 4OH⁻ − 4e⁻ → 2H₂O + O₂, giving 1 volume of oxygen; at the cathode 4H⁺ + 4e⁻ → 2H₂ gives 2 volumes of hydrogen.')}
<div class="tip">Textbook: p.114–115.</div>`,

t3:`<h3>Copper sulphate: same solution, different anode, different result</h3>
${hook('Two beakers of the same blue CuSO₄. One uses copper electrodes, the other platinum. After an hour one is still deep blue and the other has gone pale. Which is which?')}
${story('Think of the blue colour as the number of Cu²⁺ “blue marbles” in the jar. At the cathode, both cells take marbles <b>out</b> (Cu²⁺ → Cu). A <b>copper</b> anode drops a fresh marble <b>in</b> for every one taken out (Cu → Cu²⁺), so the colour stays. A <b>platinum</b> anode adds no marbles; it makes oxygen from OH⁻ instead, so the blue fades.')}
${D.cuCu}${D.cuPt}
<table class="cmp"><tr><th></th><th>Copper electrodes (active)</th><th>Platinum electrodes (inert)</th></tr>${tr(
['Cathode','Cu²⁺ + 2e⁻ → Cu','Cu²⁺ + 2e⁻ → Cu'],
['Anode','Cu − 2e⁻ → Cu²⁺ (anode dissolves)','OH⁻ − 1e⁻ → OH (×4); 4OH → 2H₂O + O₂'],
['Product at anode','Nil (Cu²⁺ ions formed)','Oxygen gas'],
['Blue colour','<b>Stays the same</b>','<b>Fades</b>'],
['Anode mass','Decreases','No change'],
['Rule at anode','Rule 3: active anode ionises instead of any anion','Rule 3 inert → anion goes; rule 1: OH⁻ before SO₄²⁻'])}</table>
${cy(['Cover the “Platinum” column. What is the anode reaction and the colour change with Pt?','4OH⁻ − 4e⁻ → 2H₂O + O₂ ; the blue colour fades.'],['Cover the “Copper” column. What happens to the copper anode?','Cu − 2e⁻ → Cu²⁺: it dissolves and loses mass; blue colour stays.'],['Which ion is the spectator at the cathode in both?','H⁺ (it migrates to the cathode but is not discharged, as Cu²⁺ is lower in the series).'])}
${METHOD5('CuSO₄ ⇌ Cu²⁺ + SO₄²⁻ ; H₂O ⇌ H⁺ + OH⁻','Cu²⁺, H⁺ → cathode; SO₄²⁻, OH⁻ → anode','Cathode: Cu²⁺ (rule 1, below H⁺). Anode: Cu electrode → the Cu itself ionises (rule 3); Pt electrode → OH⁻ (rule 1).','Cathode: Cu²⁺ + 2e⁻ → Cu. Anode (Cu): Cu − 2e⁻ → Cu²⁺. Anode (Pt): 4OH⁻ − 4e⁻ → 2H₂O + O₂','Pink-brown Cu on cathode. Cu: anode thins, blue stays. Pt: O₂ bubbles, blue fades.')}
${C.cuCu}${C.cuPt}
<p>★ <i>Acidification of the electrolyte with traces of dilute sulphuric acid enhances the conductivity of the electrolyte and may prevent hydrolysis of the electrolyte.</i> The cathode is the <b>reducing electrode</b> (reduction takes place there); the anode is the <b>oxidising electrode</b>.</p>
${trap('Blue colour: <b>stays</b> with Cu electrodes, <b>fades</b> with Pt electrodes. This is the most-asked point.','With Cu electrodes <b>neither</b> SO₄²⁻ nor OH⁻ is discharged: the anode itself loses electrons.','SO₄²⁻ is <b>never</b> discharged in aqueous solution.','The number of Cu²⁺ ions does <b>not</b> decrease with Cu electrodes: one is added at the anode for each one removed at the cathode.')}
${exam('With copper electrodes, the copper anode (active) loses electrons, Cu − 2e⁻ → Cu²⁺, replacing the Cu²⁺ discharged at the cathode, Cu²⁺ + 2e⁻ → Cu. So the number of Cu²⁺ ions, and hence the blue colour, remains unchanged.')}
<div class="tip">Textbook: p.116–117.</div>`,

t4:`<h3>Electroplating: put the article where metal is made</h3>
${hook('A spoon made of cheap brass comes out of a tank shining like silver. Where in the cell was the spoon, and where did the silver come from?')}
${story('Metal atoms are only ever <b>made</b> at the cathode, because that is where metal ions receive electrons. So whatever you want coated must sit at the cathode. The anode is the “supply shop”: a block of the plating metal that slowly dissolves to keep the solution stocked with metal ions.')}
<p>★ <i>Electroplating is the electrolytic process of deposition of a superior metal [e.g. nickel, silver, chromium, gold] on the surface of a baser metal or article [e.g. iron, copper, brass].</i></p>
<p><b>Reasons:</b> it prevents corrosion or rusting of the base metal (iron plated with nickel or chromium); it makes the article attractive and gives it an expensive appearance (brass plated with silver or gold).</p>
<table class="cmp"><tr><th>Condition</th><th>Reason</th></tr>${tr(
['1. The <b>article</b> is always placed at the <b>cathode</b>.','The metal is always deposited at the cathode by gain of electrons.'],
['2. The <b>metal to be plated</b> is made the <b>anode</b> (replaced periodically).','The metal anode continuously dissolves as ions in solution.'],
['3. The <b>electrolyte must contain ions of the plating metal</b>.','These ions migrate to the cathode and are deposited as neutral metal atoms on the article.'],
['4. A <b>low current</b> for a <b>longer time</b>.','High current gives uneven deposition; low current for a long time gives a smooth, firm, uniform, long-lasting deposit.'],
['5. <b>Direct current</b>, not A.C.','A.C. makes discharge and ionisation alternate at the cathode, giving no effective coating.'])}</table>
${D.ni}
${METHOD5('NiSO₄ ⇌ Ni²⁺ + SO₄²⁻ ; H₂O ⇌ H⁺ + OH⁻','Ni²⁺, H⁺ → cathode (article); SO₄²⁻, OH⁻ → anode (Ni block)','Cathode: Ni²⁺ in preference to H⁺. Anode: active Ni ionises (rule 3), no anion discharged.','Cathode: Ni²⁺ + 2e⁻ → Ni. Anode: Ni − 2e⁻ → Ni²⁺','Article gets a nickel coat; Ni anode diminishes in mass')}
${C.ni}
${D.ag}
${C.ag}
<p>★ <i>Migration of Ag⁺ ions from the complex salt solution is slow compared to that from AgNO₃. Hence an even deposition of the metal silver is obtained on the article. Therefore sodium argentocyanide is preferred to AgNO₃.</i> (Preparation: AgCN + NaCN → Na[Ag(CN)₂].)</p>
<p><b>Iron nail plated with copper:</b> iron nail at the cathode, copper sheet at the anode, aqueous copper(II) sulphate as electrolyte. <b>Silver-plated cutlery</b> is not pure silver, since only its top coating is silver.</p>
<table class="cmp"><tr><th></th><th>Electroplating</th><th>Electrorefining</th></tr>${tr(['Aim','Coat a baser article with a superior metal','Purify an impure metal'],['Cathode','The article','Thin sheet of pure metal'],['Anode','Block of pure plating metal','Block of impure metal'])}</table>
${cy(['Cover the Electrorefining column: what is the anode in Cu refining?','A thick block of <b>impure</b> copper.'],['Why must the article be the cathode?','Metal ions gain electrons and are deposited as metal only at the cathode.'],['Why Na[Ag(CN)₂] and not AgNO₃?','Ag⁺ is released slowly from the complex, so the silver deposits evenly.'])}
${trap('The article is <b>never</b> the anode: it would dissolve instead of being coated.','The electrolyte must contain ions of the <b>plating</b> metal (silver plating → a silver salt, not CuSO₄).','High current gives a rough, uneven coat. Use low current, longer time, D.C.','At the anode no gas is formed: the metal block dissolves, so “product at anode: nil”.')}
${exam('The article is made the cathode because metal ions migrate to the cathode, gain electrons and are deposited as metal on it: Ni²⁺ + 2e⁻ → Ni. The nickel anode dissolves, Ni − 2e⁻ → Ni²⁺, keeping up the supply of Ni²⁺ ions.')}
<div class="tip">Textbook: p.118–119.</div>`,

t5:`<h3>Electrorefining and electrometallurgy</h3>
${hook('Copper for electric wires must be 99.9 % pure. How can a cell move only the copper atoms from a dirty block onto a clean sheet, and leave gold and silver behind as mud?')}
${story('It is a copper “moving company”. The impure block (anode) hands over its copper atoms as Cu²⁺ ions; the ions travel through the solution and are rebuilt as pure copper on the thin sheet (cathode). Gold and silver are too unreactive to be picked up, so they drop to the floor as <b>anode mud</b>. Iron and zinc are too reactive to be put down again, so they stay dissolved.')}
<p>★ <i>Electrorefining is a process by which metals containing impurities are purified electrolytically to give a pure metal.</i></p>
${D.ref}
${METHOD5('CuSO₄ ⇌ Cu²⁺ + SO₄²⁻ ; H₂O ⇌ H⁺ + OH⁻ (acidified)','Cu²⁺, H⁺ → cathode (pure sheet); SO₄²⁻, OH⁻ → anode (impure block)','Cathode: Cu²⁺ (rule 1). Anode: active impure Cu ionises (rule 3); neither anion is discharged.','Cathode: Cu²⁺ + 2e⁻ → Cu. Anode: Cu − 2e⁻ → Cu²⁺','Cathode thickens with pure Cu; anode used up; anode mud (Au, Ag) settles')}
${C.ref}
<p>Metals generally refined by electrolysis: zinc, lead, copper, mercury and silver. Metals that are <b>extracted</b> by electrolysis (highly electropositive, e.g. Na) are already deposited pure at the cathode, so need not be refined further.</p>
<h3>Electrometallurgy (extraction by electrolysis)</h3>
<p>★ <i>The method of extraction of a metal depends on its position in the activity series.</i></p>
<table class="cmp"><tr><th>Metals</th><th>Method</th><th>Why / example</th></tr>${tr(
['K, Na, Ca, Mg, Al','Electrolysis of their fused salts','Oxides are highly stable; the metal has a strong affinity for oxygen. Metal deposits at the cathode.'],
['Zn, Fe, Pb, Cu','Reduction by C, CO, H₂','Oxides less stable. CuO + C → Cu + CO (heat)'],
['Hg, Ag','Thermal decomposition','Oxides least stable. 2HgO → 2Hg + O₂ (heat)'])}</table>
${D.na}${C.na}${D.al}${C.al}
${trap('In refining, the <b>impure</b> metal is the <b>anode</b> and the <b>pure</b> thin sheet is the <b>cathode</b>.','The electrolyte must contain ions of the metal being refined (acidified CuSO₄ for copper, not NiSO₄).','Anode mud contains the <b>less</b> reactive metals (Au, Ag); more reactive ones (Fe, Zn) dissolve.','Na cannot be refined from aqueous solution: H⁺ would be discharged instead and Na reacts with water. It is extracted from <b>fused</b> NaCl.')}
${cy(['What is the cathode made of in Cu refining?','A thin sheet of pure copper.'],['Write the anode reaction in Cu refining.','Cu − 2e⁻ → Cu²⁺'],['Why is Al extracted by electrolysis and not by heating with carbon?','Al₂O₃ is a very stable oxide and Al has a strong affinity for oxygen, so carbon cannot reduce it.'])}
${exam('In electrorefining of copper, impure copper is the anode and a thin sheet of pure copper the cathode, in acidified CuSO₄. At the anode Cu − 2e⁻ → Cu²⁺; at the cathode Cu²⁺ + 2e⁻ → Cu (pure). Insoluble impurities settle as anode mud.')}
<div class="tip">Textbook: p.120–121.</div>`,

t6:`<h3>Writing electrode equations without mistakes</h3>
${hook('Every cell question ends with “write the equations”. Can you write all three lines (dissociation, cathode, anode) for any cell in under a minute?')}
${story('Treat each equation like a bank statement: the atoms must match, and the charges must match. If you take away 2 electrons on the left (− 2e⁻), you have added +2 of charge. Cu − 2e⁻: 0 − (−2) = +2, and Cu²⁺ on the right is +2. Balanced!')}
${METHOD5()}
${steps('Three lines for any cell',[
'<b>Dissociation:</b> compound ⇌ ions (with the right numbers): PbBr₂ ⇌ Pb²⁺ + 2Br⁻. If aqueous, add H₂O ⇌ H⁺ + OH⁻.',
'<b>Cathode</b> (reduction, + e⁻): the winning cation gains as many electrons as its charge: Cu²⁺ + 2e⁻ → Cu; Al³⁺ + 3e⁻ → Al.',
'<b>Anode</b> (oxidation, − e⁻): the winning anion loses electrons, then the atoms pair up: Cl⁻ − 1e⁻ → Cl; Cl + Cl → Cl₂. For OH⁻: 4OH⁻ − 4e⁻ → 2H₂O + O₂. For an active anode: the metal loses e⁻: Ag − 1e⁻ → Ag⁺.',
'<b>Check</b> atoms and charge on both sides.'])}
${LADDER(['Cu²⁺','Ag⁺','H⁺','OH⁻'])}
${trap('Electrons go on the <b>left</b> with + at the cathode, and with − at the anode (book style).','OH⁻ gives <b>water and oxygen</b>: 4OH → 2H₂O + O₂, not 2OH → O₂ + H₂.','Molten salts have <b>no</b> H⁺/OH⁻ from water.','Na[Ag(CN)₂] gives Ag⁺ with charge 1+, so Ag⁺ + 1e⁻ → Ag (one electron).')}
${cy(['Cathode equation for fused Al₂O₃?','Al³⁺ + 3e⁻ → Al (or 2Al³⁺ + 6e⁻ → 2Al)'],['Anode equation in fused NaCl?','Cl⁻ − 1e⁻ → Cl ; Cl + Cl → Cl₂'],['Anode equation for Ni plating?','Ni − 2e⁻ → Ni²⁺'])}
${exam('Electrolysis of fused NaCl: NaCl ⇌ Na⁺ + Cl⁻. Cathode: Na⁺ + 1e⁻ → Na. Anode: Cl⁻ − 1e⁻ → Cl ; Cl + Cl → Cl₂.')}
<div class="tip">Textbook: p.121 (summary tables) and p.122 (equation worksheet).</div>`
};

/* ---------------- Questions ---------------- */
const AR=['Both A and R are true, and R is the correct explanation of A','Both A and R are true, but R is not the correct explanation of A','A is true but R is false','A is false but R is true'];
const Q=[
/* ===== T1 Molten PbBr₂ ===== */
{id:'y16-2ii',t:'t1',src:'p.123 · 2016 Q2(ii)',ref:'p.112–113',type:'open',q:'Write equations for the reactions taking place at the two electrodes during the electrolysis of <b>molten PbBr₂ with inert electrodes</b>. [Mention clearly the name of the electrode in each case.]',
 hint:'Run the 5 steps. Molten: are there any H⁺/OH⁻ ions? Which electrode is −?',
 model:ANS5('Pb²⁺, Br⁻ (PbBr₂ ⇌ Pb²⁺ + 2Br⁻)','Pb²⁺ → cathode, Br⁻ → anode','Only one of each, inert electrodes','<b>Cathode:</b> Pb²⁺ + 2e⁻ → Pb<br><b>Anode:</b> Br⁻ − 1e⁻ → Br ; Br + Br → Br₂','lead at cathode, bromine vapour at anode')},
{id:'y17-2i',t:'t1',src:'p.123 · 2017 Q2(i)',ref:'p.112–113',type:'open',q:'State the observations at the <b>anode</b> and at the <b>cathode</b> during the electrolysis of <b>fused lead bromide using graphite electrodes</b>.',
 hint:'Step 5 (SEE): which element forms at each electrode, and what does it look like?',
 model:'<b>Anode:</b> reddish-brown vapours (fumes) of bromine are evolved.<br><b>Cathode:</b> a silvery grey deposit (metallic lead) forms.'},
{id:'y18-2',t:'t1',src:'p.123 · 2018 Q2',ref:'p.112–113',type:'open',q:'State one observation: At the anode, when molten lead bromide is electrolysed using graphite electrodes.',
 hint:'Which ion goes to the + electrode? What colour is the element it forms?',
 model:'<b>Reddish-brown vapours of bromine</b> are seen at the anode (Br⁻ − 1e⁻ → Br; Br + Br → Br₂).'},
{id:'y20-2',t:'t1',src:'p.123 · 2020 Q2',ref:'p.113',type:'open',q:'State one reason for: Graphite anode is preferred to platinum in the electrolysis of molten lead bromide.',
 hint:'What is formed at the anode, and how does it treat metals?',
 model:'Graphite is <b>unaffected by the reactive bromine vapours</b> liberated at the anode, whereas platinum would be attacked. (This is about keeping the electrode <b>inert</b>, rule 3.)'},
{id:'y25-3b',t:'t1',src:'p.124 · 2025 Q3(b)',ref:'p.113',type:'open',q:'Justify: Graphite electrodes are preferred in the electrolysis of molten lead bromide.',
 hint:'An electrode must stay inert. What attacks it here?',
 model:'The electrodes must be <b>inert</b> (not take part in the reaction), otherwise they would prevent the discharge of the ions. Graphite is inert and <b>unaffected by the reactive bromine vapours</b> formed at the anode, so it is preferred (rule 3: inert electrode).'},
{id:'y21-1',t:'t1',src:'p.123 · 2021-22 Q1',ref:'p.112',type:'mcq',q:'Identify one statement that holds true for the electrolysis of <b>molten lead bromide</b>:',
 opts:['Silver grey metal deposits at the anode','Temperature is not maintained during the electrolysis','Brown vapours of bromine are obtained at the anode','Electrolyte contains H⁺ ions along with Pb²⁺ ions'],ans:2,
 hint:'Step 2 (GO): which ion goes to the anode? Is there any water in a melt?',
 exp:'Lead deposits at the cathode, the melt must be kept above 380 °C, and a molten salt has no water, so no H⁺. Bromine vapour forms at the anode.'},
{id:'a10a',t:'t1',src:'p.125 · Q.10(a)',ref:'p.112',type:'open',q:'Give the <b>oxidation reaction</b> for the electrolysis of <b>molten PbBr₂</b> [graphite electrodes].',
 hint:'Oxidation = loss of electrons = which electrode? (AN OX)',
 model:'Oxidation takes place at the <b>anode</b>: Br⁻ − 1e⁻ → Br ; Br + Br → Br₂ (i.e. 2Br⁻ − 2e⁻ → Br₂).'},
{id:'a11a',t:'t1',src:'p.125 · Q.11(a)',ref:'p.112',type:'mcq',q:'Select the ion discharged at the <b>anode</b> during electrolysis of <b>molten PbBr₂</b>, from Pb²⁺ and Br⁻.',
 opts:['Pb²⁺','Br⁻'],ans:1,hint:'GO: anions go to the anode.',exp:'Br⁻ is the anion, so it migrates to the anode (+) and is discharged: Br⁻ − 1e⁻ → Br.'},
{id:'a13a',t:'t1',src:'p.125 · Q.13(a)',ref:'p.113',type:'open',q:'State which is preferred, giving reasons: <b>A: graphite anode</b> or <b>B: platinum anode</b> [both inert] during electrolysis of molten PbBr₂.',
 hint:'Both are inert. Which one survives what is formed at the anode?',
 model:'<b>A: graphite.</b> Graphite is unaffected by the reactive bromine vapours liberated at the anode; platinum would be attacked by bromine, and is also costly.'},
{id:'ut6-1',t:'t1',src:'p.126 · Unit test Q.6(1)',ref:'p.112',type:'open',q:'Give reason: Electrolysis of molten lead bromide is considered a <b>redox reaction</b>.',
 hint:'What happens to electrons at each electrode?',
 model:'At the cathode Pb²⁺ <b>gains</b> electrons: Pb²⁺ + 2e⁻ → Pb (<b>reduction</b>). At the anode Br⁻ <b>loses</b> electrons: Br⁻ − 1e⁻ → Br (<b>oxidation</b>). Both reduction and oxidation occur together, so it is a redox reaction.'},
{id:'ut6-2',t:'t1',src:'p.126 · Unit test Q.6(2)',ref:'p.113',type:'open',q:'Give reason: Lead bromide undergoes electrolytic dissociation in the <b>molten</b> state but is a non-electrolyte in the <b>solid</b> state.',
 hint:'Ions are present in both. When are they free to move?',
 model:'In solid PbBr₂ the ions are <b>not free</b>: they are held in fixed positions by strong electrostatic forces of attraction, so it cannot conduct. On melting, the ions become <b>free and mobile</b> (PbBr₂ ⇌ Pb²⁺ + 2Br⁻), so molten PbBr₂ conducts and is electrolysed.'},

/* ===== T2 Acidified water ===== */
{id:'y16-3i',t:'t2',src:'p.123 · 2016 Q3(i)',ref:'p.114',type:'word',q:'Name the product formed at the <b>anode</b> during electrolysis of acidified water using platinum electrodes.',
 accept:['oxygen','oxygen gas','o2','o₂'],ansText:'Oxygen gas',hint:'Which anion WINS: SO₄²⁻ or OH⁻? What does it form?',exp:'OH⁻ is discharged (rule 1): 4OH⁻ − 4e⁻ → 2H₂O + O₂.'},
{id:'y18-1',t:'t2',src:'p.123 · 2018 Q1',ref:'p.114',type:'mcq',q:'The electrolysis of acidified water is an example of:',opts:['Reduction','Oxidation','Redox reaction','Synthesis'],ans:2,
 hint:'What happens at the cathode, and what at the anode?',exp:'Reduction (H⁺ gains e⁻) at the cathode and oxidation (OH⁻ loses e⁻) at the anode: a redox reaction.'},
{id:'y18-4',t:'t2',src:'p.123 · 2018 Q4',ref:'p.114',type:'word',q:'Name the gas produced at the <b>anode</b> during the electrolysis of acidified water.',
 accept:['oxygen','oxygen gas','o2','o₂'],ansText:'Oxygen',hint:'Anions go to the anode. Which one is discharged?',exp:'4OH⁻ − 4e⁻ → 2H₂O + O₂.'},
{id:'y20-1',t:'t2',src:'p.123 · 2020 Q1',ref:'p.114',type:'mcq',q:'The <b>inert</b> electrode used in the electrolysis of acidified water is:',opts:['Nickel','Platinum','Copper','Silver'],ans:1,
 hint:'Rule 3: which of these does not take part in the reaction?',exp:'Platinum foil is used for both electrodes (inert).'},
{id:'y21-4',t:'t2',src:'p.124 · 2021-22 Q4',ref:'p.114',type:'mcq',q:'State the ion discharged at the <b>anode</b> during electrolysis of acidified water.',opts:['OH⁻','SO₄²⁻','Cl⁻','H⁺'],ans:0,
 hint:'Rule 1: compare SO₄²⁻ and OH⁻ in the series.',exp:'OH⁻ is lower in the series than SO₄²⁻, so OH⁻ is discharged. (The options i] OH⁻ ii] SO₄²⁻ iii] Cl⁻ iv] H⁺ are printed at the end of Q3’s line in the book.)'},
{id:'y24-5',t:'t2',src:'p.124 · 2024 Q5',ref:'p.114',type:'fill',q:'During electrolysis of acidulated water, the gas liberated at the <b>anode</b> is {0}.',
 blanks:[{o:['oxygen','hydrogen'],a:0}],hint:'Anode = + = where anions go.',exp:'OH⁻ ions are discharged at the anode, giving oxygen.'},
{id:'y25-4a',t:'t2',src:'p.124 · 2025 Q4(a)',ref:'p.115',type:'open',q:'Acidulated water is electrolysed using platinum electrodes. Why is <b>dilute sulphuric acid</b> added to water?',
 hint:'Does pure water conduct? What does the acid supply?',
 model:'Pure water is almost a <b>non-electrolyte</b> (mostly molecules) and does not normally conduct. Dilute H₂SO₄ dissociates (H₂SO₄ ⇌ 2H⁺ + SO₄²⁻), supplying ions so the water conducts and can be electrolysed.'},
{id:'y25-4b',t:'t2',src:'p.124 · 2025 Q4(b)',ref:'p.114',type:'open',q:'Acidulated water is electrolysed using platinum electrodes. Write the reaction taking place at the <b>cathode</b>.',
 hint:'Only one cation. Gain of electrons, then the atoms pair up.',model:'H⁺ + 1e⁻ → H (×4) ; 2H + 2H → 2H₂ &nbsp; (i.e. 4H⁺ + 4e⁻ → 2H₂)'},
{id:'y25-4c',t:'t2',src:'p.124 · 2025 Q4(c)',ref:'p.114',type:'open',q:'Acidulated water is electrolysed using platinum electrodes. What is the observation at the <b>anode</b>?',
 hint:'Step 5: which gas, what colour, how much compared with the cathode?',model:'Bubbles of a <b>colourless gas (oxygen)</b> are seen; its volume is <b>half</b> that of hydrogen at the cathode (1 volume).'},
{id:'a10b',t:'t2',src:'p.125 · Q.10(b)',ref:'p.114',type:'open',q:'Give the <b>oxidation reaction</b> for the electrolysis of <b>acidified water</b> [platinum electrodes].',
 hint:'Oxidation is at the anode. Which anion wins there?',model:'At the anode: OH⁻ − 1e⁻ → OH (×4) ; 4OH → 2H₂O + O₂ &nbsp; (i.e. 4OH⁻ − 4e⁻ → 2H₂O + O₂)'},
{id:'a11b',t:'t2',src:'p.125 · Q.11(b)',ref:'p.114',type:'mcq',q:'Select the ion discharged at the <b>anode</b> during electrolysis of <b>acidified water</b>, from H⁺, SO₄²⁻ and OH⁻.',
 opts:['H⁺','SO₄²⁻','OH⁻'],ans:2,hint:'Rule 1 among the anions.',exp:'OH⁻ (lower in the series than SO₄²⁻). H⁺ is a cation and goes to the cathode.'},
{id:'a13b',t:'t2',src:'p.125 · Q.13(b)',ref:'p.115',type:'open',q:'State which is preferred, giving reasons: <b>A: conc. sulphuric acid</b> or <b>B: dil. sulphuric acid</b> for acidification during electrolysis of acidified water.',
 hint:'Only a few ions are needed. What would a concentrated acid change at the anode?',
 model:'<b>B: dilute sulphuric acid.</b> Only traces of acid are needed to supply ions for conduction; the dilute acid gives H⁺ and the water still gives OH⁻, which are discharged as H₂ and O₂ (2 : 1). Concentrated acid is not needed and is hazardous; with a high concentration of SO₄²⁻ at the anode the products would not be just oxygen (concentration, rule 2).'},
{id:'ut6-5',t:'t2',src:'p.126 · Unit test Q.6(5)',ref:'p.115',type:'open',q:'Give reason: In the electrolysis of acidified water, dilute sulphuric acid is preferred to dilute nitric acid.',
 hint:'Think about how stable nitric acid is.',
 model:'Nitric acid is a <b>volatile</b> acid and may <b>decompose</b>, and the nitrate radical (NO₃⁻) may <b>interfere</b> with the electrolytic reaction. Sulphuric acid is non-volatile and its SO₄²⁻ ion is not discharged.'},

/* ===== T3 Copper sulphate ===== */
{id:'y16-2i',t:'t3',src:'p.123 · 2016 Q2(i)',ref:'p.116–117',type:'open',q:'Write equations for the reactions taking place at the two electrodes during electrolysis of <b>acidified CuSO₄ solution with copper electrodes</b>. [Mention clearly the name of the electrode in each case.]',
 hint:'Step 3: is the anode active or inert? (Rule 3)',
 model:ANS5('Cu²⁺, H⁺, SO₄²⁻, OH⁻','Cu²⁺, H⁺ → cathode; SO₄²⁻, OH⁻ → anode','Cathode: Cu²⁺ (rule 1, below H⁺). Anode: active Cu ionises (rule 3).','<b>Cathode:</b> Cu²⁺ + 2e⁻ → Cu<br><b>Anode:</b> Cu − 2e⁻ → Cu²⁺','Cu deposited on cathode; anode loses mass')},
{id:'y17-2ii',t:'t3',src:'p.123 · 2017 Q2(ii)',ref:'p.116–117',type:'open',q:'State the observations at the anode and at the cathode during the electrolysis of <b>copper sulphate solution using copper electrodes</b>.',
 hint:'Step 5 at each electrode, plus: does the anode stay the same size?',
 model:'<b>Cathode:</b> a reddish/pinkish-brown deposit of copper forms; the cathode gains mass.<br><b>Anode:</b> no gas; the copper anode dissolves and loses mass.<br>(The blue colour of the solution stays the same.)'},
{id:'y19-2',t:'t3',src:'p.123 · 2019 Q2',ref:'p.117',type:'open',q:'State one observation for: Copper sulphate solution is electrolysed using copper electrodes.',
 hint:'The colour of the solution, or the anode’s mass.',model:'The <b>blue colour of the solution remains unchanged</b> (or: pinkish-brown copper deposits on the cathode, and the copper anode diminishes in mass).'},
{id:'y24-2',t:'t3',src:'p.124 · 2024 Q2',ref:'p.117',type:'fill',q:'During the electrolysis of copper sulphate solution, if {0} is used as electrodes, the colour of the electrolyte does not fade.',
 blanks:[{o:['copper','platinum'],a:0}],hint:'Which anode puts Cu²⁺ back into solution? (Rule 3)',exp:'A copper anode ionises (Cu − 2e⁻ → Cu²⁺), replacing the Cu²⁺ removed at the cathode.'},
{id:'y25-1',t:'t3',src:'p.124 · 2025 Q1',ref:'p.116–117',type:'mcq',q:'Aqueous copper(II) sulphate is electrolysed using copper electrodes. Which statement about the electrolysis is <b>not correct</b>?',
 opts:['An oxidation reaction occurs at the positive electrode','The current is carried through the electrolyte by ions','The positive electrode loses mass','The number of copper(II) ions in the electrolyte decreases'],ans:3,
 hint:'Count the Cu²⁺ ions: how many leave at the cathode and how many enter at the anode?',exp:'For every Cu²⁺ discharged at the cathode, one is formed at the anode, so the number of Cu²⁺ ions stays the same.'},
{id:'mcq4',t:'t3',src:'p.124 · MCQ 4',ref:'p.116–117',type:'mcq',q:'During electrolysis of aq. CuSO₄ using Cu electrodes, the ion which <b>migrates to the cathode but is not discharged</b> is:',
 opts:['Copper ions','Sulphate ions','Hydroxyl ions','Hydrogen ions'],ans:3,hint:'Which cations go to the cathode? Which one loses on rule 1?',exp:'H⁺ is higher in the series than Cu²⁺, so it stays as a spectator ion.'},
{id:'a10c',t:'t3',src:'p.125 · Q.10(c)',ref:'p.116',type:'open',q:'Give the <b>oxidation reaction</b> for the electrolysis of <b>aq. copper(II) sulphate</b> [Cu electrodes].',
 hint:'Oxidation is at the anode, and the anode is active.',model:'At the anode (active copper): Cu − 2e⁻ → Cu²⁺'},
{id:'a11c',t:'t3',src:'p.125 · Q.11(c)',ref:'p.117',type:'fill',q:'Select the correct ion discharged at the <b>anode</b> during electrolysis of aq. CuSO₄ (from Cu²⁺, H⁺, SO₄²⁻, OH⁻) using:<br>i] <b>active</b> electrodes: {0}<br>ii] <b>inert</b> electrodes: {1}',
 blanks:[{o:['Cu²⁺','H⁺','SO₄²⁻','OH⁻','none: the Cu anode itself ionises'],a:4},{o:['Cu²⁺','H⁺','SO₄²⁻','OH⁻','none: the anode itself ionises'],a:3}],
 hint:'Rule 3 decides whether any anion is discharged at all; rule 1 decides which one.',exp:'Active Cu anode: neither SO₄²⁻ nor OH⁻ is discharged; Cu − 2e⁻ → Cu²⁺. Inert anode: OH⁻ (below SO₄²⁻): 4OH⁻ − 4e⁻ → 2H₂O + O₂.'},
{id:'a12a',t:'t3',src:'p.125 · Q.12(a)',ref:'p.117',type:'mcq',q:'Name the <b>spectator ion</b> at the <b>cathode</b> (from Cu²⁺, H⁺, SO₄²⁻, OH⁻) during electrolysis of CuSO₄ solution using active electrodes.',
 opts:['Cu²⁺','H⁺','SO₄²⁻','OH⁻'],ans:1,hint:'A spectator migrates to the electrode but is not discharged.',exp:'H⁺ migrates to the cathode but Cu²⁺ is discharged in preference (rule 1).'},
{id:'a12b',t:'t3',src:'p.125 · Q.12(b)',ref:'p.117',type:'multi',q:'Name the <b>spectator ion(s)</b> at the <b>anode</b> (from Cu²⁺, H⁺, SO₄²⁻, OH⁻) during electrolysis of CuSO₄ solution using active electrodes. Tick all that apply.',
 opts:['Cu²⁺','H⁺','SO₄²⁻','OH⁻'],ans:[2,3],hint:'Rule 3: with an active anode, are any anions discharged?',exp:'Both SO₄²⁻ and OH⁻ migrate to the anode but neither is discharged; the copper anode ionises instead.'},
{id:'a13c',t:'t3',src:'p.125 · Q.13(c)',ref:'p.117',type:'open',q:'State which is preferred, giving reasons: <b>A: copper electrode</b> or <b>B: platinum electrode</b>, if the blue colour of copper(II) sulphate has to remain unchanged and not fade.',
 hint:'Rule 3: which anode replaces the Cu²⁺ ions?',
 model:'<b>A: copper.</b> The copper anode is active: Cu − 2e⁻ → Cu²⁺. For every Cu²⁺ discharged at the cathode (Cu²⁺ + 2e⁻ → Cu), one Cu²⁺ is added at the anode, so the number of Cu²⁺ ions and the blue colour stay the same. With platinum (inert) OH⁻ is discharged instead and Cu²⁺ is not replaced, so the colour fades.'},
{id:'ut6-3',t:'t3',src:'p.126 · Unit test Q.6(3)',ref:'p.117',type:'open',q:'Give reason: The blue colour of aq. copper sulphate does not change when it is electrolysed using copper electrodes.',
 hint:'Count Cu²⁺ ions in and out.',
 model:'The blue colour is due to Cu²⁺ ions. At the cathode Cu²⁺ + 2e⁻ → Cu removes Cu²⁺, but the active copper anode ionises, Cu − 2e⁻ → Cu²⁺, adding the same number back (rule 3). The total number of Cu²⁺ ions stays the same, so the colour does not change.'},

/* ===== T4 Electroplating ===== */
{id:'y16-3ii',t:'t4',src:'p.123 · 2016 Q3(ii)',ref:'p.119',type:'word',q:'Name the <b>metallic ions</b> that should be present in the electrolyte when an article made of copper is to be electroplated with silver.',
 accept:['silver ions','silver ion','ag+','ag⁺','ag1+','ag¹⁺','silver','argentous ions'],ansText:'Silver ions (Ag⁺)',hint:'Condition 3: the electrolyte must contain ions of which metal?',exp:'The electrolyte must contain ions of the plating metal: Ag⁺ (from Na[Ag(CN)₂]).'},
{id:'y16-4ii',t:'t4',src:'p.123 · 2016 Q4(ii)',ref:'p.119',type:'open',q:'Give reason: In the electroplating of an article with silver, the electrolyte <b>sodium argentocyanide</b> solution is preferred over silver nitrate solution.',
 hint:'How fast are Ag⁺ ions released by each salt, and what does that do to the coat?',
 model:'Migration of Ag⁺ ions from the complex salt Na[Ag(CN)₂] is <b>slow</b> compared with that from AgNO₃. Hence silver is deposited <b>evenly</b> (smooth, firm coat) on the article. With AgNO₃, the deposit forms too fast and is uneven.'},
{id:'y17-1i',t:'t4',src:'p.123 · 2017 Q1(i)',ref:'p.119',type:'word',q:'Identify the substance: The <b>electrolyte</b> used for electroplating an article with silver.',
 accept:['sodium argentocyanide','sodium silver cyanide','na[ag(cn)2]','naag(cn)2','sodium argentocyanide solution','aqueous sodium argentocyanide'],ansText:'Sodium argentocyanide, Na[Ag(CN)₂]',hint:'It is a complex salt, preferred to AgNO₃.',exp:'Aq. sodium argentocyanide (sodium silver cyanide), Na[Ag(CN)₂].'},
{id:'y20-8i',t:'t4',src:'p.123 · 2020 Q8(i)',ref:'p.116–117, 119',type:'open',q:'An aq. solution of nickel(II) sulphate was electrolysed using <b>Ni electrodes</b>. What do you observe at the cathode and at the anode respectively?',
 hint:'This is the copper-electrode cell with Ni instead of Cu. Is the anode active?',
 model:ANS5('Ni²⁺, H⁺, SO₄²⁻, OH⁻','Ni²⁺, H⁺ → cathode; SO₄²⁻, OH⁻ → anode','Cathode: Ni²⁺. Anode: active Ni ionises (rule 3).','Cathode: Ni²⁺ + 2e⁻ → Ni ; Anode: Ni − 2e⁻ → Ni²⁺','<b>Cathode:</b> greyish-white nickel deposits and the cathode gains mass. <b>Anode:</b> no gas; the nickel anode dissolves and loses mass. (The green colour of the solution stays the same.)')},
{id:'y20-8ii',t:'t4',src:'p.123 · 2020 Q8(ii)',ref:'p.117',type:'word',q:'An aq. solution of nickel(II) sulphate was electrolysed using Ni electrodes. Name the <b>cation</b> that remains as a spectator ion in the solution.',
 accept:['h+','h⁺','h1+','h¹⁺','hydrogen ion','hydrogen ions','hydrogen'],ansText:'Hydrogen ion, H⁺',hint:'Two cations go to the cathode. One of them is present in far larger numbers: which rule is that?',exp:'Ni²⁺ is discharged in preference to H⁺ (rule 2: Ni²⁺ ions vastly outnumber H⁺; Ni is actually above H in the series), so H⁺ remains as a spectator.'},
{id:'y20-8iii',t:'t4',src:'p.123 · 2020 Q8(iii)',ref:'p.119',type:'mcq',q:'An aq. solution of nickel(II) sulphate was electrolysed using Ni electrodes. Which equation for the reaction at the <b>anode</b> is correct?',
 opts:['Ni → Ni²⁺ + 2e⁻','Ni + 2e⁻ → Ni²⁺','Ni²⁺ → Ni + 2e⁻','Ni²⁺ + 2e⁻ → Ni'],ans:0,hint:'Anode = oxidation = loss of electrons by the active anode. Check the charges balance.',
 exp:'Ni → Ni²⁺ + 2e⁻ (same as Ni − 2e⁻ → Ni²⁺). Option 4 is the cathode reaction; 2 and 3 do not balance in charge.'},
{id:'y21-8',t:'t4',src:'p.124 · 2021-22 Q8',ref:'p.119',type:'mcq',q:'State which apparatus could be used to <b>electroplate an iron nail with copper</b>. (In each diagram of the book, the left electrode is joined to the + terminal.)',
 opts:['i] Copper sheet at + (anode), iron nail at − (cathode), in aq. copper(II) sulphate','ii] Iron nail at + (anode), copper sheet at − (cathode), in aq. copper(II) sulphate','iii] Copper sheet at + (anode), iron nail at − (cathode), in aq. iron(II) sulphate','iv] Iron nail at + (anode), copper sheet at − (cathode), in aq. iron(II) sulphate'],ans:0,
 hint:'Three conditions: article at cathode, plating metal at anode, electrolyte contains ions of the plating metal.',exp:'Nail (article) at the cathode, copper at the anode, and the electrolyte must contain Cu²⁺: diagram i].'},
{id:'y23-1',t:'t4',src:'p.124 · 2023 Q1',ref:'p.119',type:'mcq',q:'Which of the following reactions takes place at the <b>anode</b> during the electroplating of an article with silver?',
 opts:['Ag − 1e⁻ → Ag¹⁺','Ag + 1e⁻ → Ag¹⁻','Ag − 1e⁻ → Ag','None of the above'],ans:0,hint:'Active silver anode: loss of electrons. Check that charge balances.',exp:'The silver anode loses an electron: Ag − 1e⁻ → Ag⁺. Option iii] does not balance in charge.'},
{id:'y24-1a',t:'t4',src:'p.124 · 2024 Q1(a)',ref:'p.118',type:'open',q:'The sketch represents the electroplating of an <b>iron cup with nickel</b>. Give reason: during electroplating the iron cup is placed at the cathode.',
 hint:'Where are metal ions turned into metal atoms?',
 model:'Ni²⁺ ions (cations) migrate to the cathode, <b>gain electrons</b> and are deposited as neutral nickel atoms: Ni²⁺ + 2e⁻ → Ni. The metal is always deposited at the cathode, so the cup must be the cathode to be coated.'},
{id:'y24-1b',t:'t4',src:'p.124 · 2024 Q1(b)',ref:'p.118',type:'word',q:'Electroplating an iron cup with nickel: name the <b>ion</b> that must be present in the electrolyte.',
 accept:['ni2+','ni²⁺','nickel ion','nickel ions','nickel(ii) ion','nickel(ii) ions','nickel ii ion','nickel'],ansText:'Ni²⁺ (nickel ion)',hint:'Condition 3 for electroplating.',exp:'The electrolyte (aq. NiSO₄) must contain ions of the plating metal, Ni²⁺.'},
{id:'y24-1c',t:'t4',src:'p.124 · 2024 Q1(c)',ref:'p.118',type:'open',q:'Electroplating an iron cup with nickel: state one condition that is necessary to ensure that the deposit is <b>smooth, firm and even</b>.',
 hint:'Think about the size and type of current.',model:'A <b>low current for a longer time</b> should be used (also: direct current, not A.C.; a clean article).'},
{id:'y24-1d',t:'t4',src:'p.124 · 2024 Q1(d)',ref:'p.119',type:'open',q:'Electroplating an iron cup with nickel: write the reaction at the <b>cathode</b>.',
 hint:'The cation gains as many electrons as its charge.',model:'Ni²⁺ + 2e⁻ → Ni (deposited on the cup)'},
{id:'y24-1e',t:'t4',src:'p.124 · 2024 Q1(e)',ref:'p.119',type:'open',q:'Electroplating an iron cup with nickel: what change would you observe at the <b>anode</b>?',
 hint:'The anode is an active nickel block (rule 3).',model:'The nickel anode slowly <b>dissolves and diminishes in mass/size</b> (Ni − 2e⁻ → Ni²⁺); no gas is evolved.'},
{id:'y25-2b',t:'t4',src:'p.124 · 2025 Q2(b)',ref:'p.119',type:'fill',q:'The reaction that takes place at the anode during the electrolysis of aqueous sodium argentocyanide with silver electrodes is {0}.',
 blanks:[{o:['Ag → Ag⁺ + e⁻','Ag⁺ + e⁻ → Ag'],a:0}],hint:'Anode = oxidation = loss of electrons.',exp:'The active silver anode ionises: Ag → Ag⁺ + e⁻. The other one is the cathode reaction.'},
{id:'a14a',t:'t4',src:'p.125 · Q.14(a)',ref:'p.118',type:'open',q:'‘Iron is <i>electroplated</i> with silver.’ Define the term in italics.',
 hint:'Superior metal on baser metal, by electrolysis.',model:'★ <b>Electroplating</b> is the electrolytic process of deposition of a <b>superior metal</b> (e.g. nickel, silver, chromium, gold) on the surface of a <b>baser metal</b> or article (e.g. iron, copper, brass).'},
{id:'a14b',t:'t4',src:'p.125 · Q.14(b)',ref:'p.118',type:'open',q:'‘Iron is electroplated with silver.’ State two <b>reasons</b> for electroplating.',
 hint:'One is about protection, one is about looks.',model:'1. To <b>prevent corrosion or rusting</b> of the base metal (e.g. iron plated with nickel or chromium).<br>2. To make the article <b>attractive</b> and give it an expensive appearance (e.g. brass plated with silver or gold).'},
{id:'a14c',t:'t4',src:'p.125 · Q.14(c)',ref:'p.118',type:'open',q:'‘Iron is electroplated with silver.’ State why the iron is <b>not</b> placed at the anode and silver at the cathode during electroplating.',
 hint:'What happens to a metal at the anode, and where is metal deposited?',
 model:'Metal is deposited only at the <b>cathode</b> (Ag⁺ + 1e⁻ → Ag), so the iron must be the cathode to be coated. At the anode the metal <b>loses electrons and dissolves</b>: an iron anode would dissolve (Fe − 2e⁻ → Fe²⁺) instead of being plated, and there would be no silver block to keep supplying Ag⁺ (Ag − 1e⁻ → Ag⁺).'},
{id:'a15La',t:'t4',src:'p.125 · Q.15 left (a)',ref:'p.118–119',type:'open',q:'Diagram (book p.125, left): <i>Electroplating of an article with silver</i>. It shows: ANODE (+) = article to be plated; CATHODE (−) = block of metal; electrolyte = silver nitrate soln. <b>State the errors</b> in the diagram.',
 hint:'Check the 3 conditions: where the article goes, where the plating metal goes, what the electrolyte must be.',
 model:'1. The <b>article</b> is shown at the anode; it must be the <b>cathode</b>.<br>2. The <b>block of (silver) metal</b> is shown at the cathode; it must be the <b>anode</b>.<br>3. The electrolyte is <b>silver nitrate</b>; it should be <b>sodium argentocyanide</b>, Na[Ag(CN)₂], for an even deposit.',
 exp:'This question deliberately contains wrong diagrams: the errors are the question.'},
{id:'a15Lb',t:'t4',src:'p.125 · Q.15 left (b)',ref:'p.119',type:'open',q:'Electroplating with silver: give the electrode reaction at the electrode which <b>diminishes in mass</b>.',
 hint:'Which electrode dissolves? It is active.',model:'The silver <b>anode</b> diminishes in mass: Ag − 1e⁻ → Ag⁺'},
{id:'a15Lc',t:'t4',src:'p.125 · Q.15 left (c)',ref:'p.118–119',type:'open',q:'Electroplating with silver: state why Ag is deposited at the <b>cathode</b> and not at the anode.',
 hint:'GO: where do cations go? WRITE: where are electrons gained?',
 model:'Ag⁺ ions are <b>cations</b>, so they migrate to the cathode (−). The cathode supplies electrons, and Ag⁺ <b>gains</b> an electron there (reduction): Ag⁺ + 1e⁻ → Ag. At the anode electrons are lost (oxidation), so silver atoms there become ions, not deposits.'},
{id:'ut2-1',t:'t4',src:'p.126 · Unit test Q.2(1)',ref:'p.119',type:'open',q:'Complete the table for <b>electroplating an iron rod with silver</b>: nature of anode · nature of cathode · ions present in electrolyte · ion(s) discharged at cathode / anode.',
 hint:'Use the silver-plating case file. Is the anode active?',
 model:`<table class="cmp">${tr(['Anode','Block of pure silver (active)'],['Cathode','The iron rod (article)'],['Ions present','Na⁺, Ag⁺, CN⁻ (from Na[Ag(CN)₂]), H⁺, OH⁻'],['Discharged at cathode','Ag⁺ (Ag⁺ + 1e⁻ → Ag)'],['Discharged at anode','None: the Ag anode ionises (Ag − 1e⁻ → Ag⁺)'])}</table>`},
{id:'ut2-2',t:'t4',src:'p.126 · Unit test Q.2(2)',ref:'p.119',type:'open',q:'Complete the table for <b>electroplating a copper sheet with nickel</b>: nature of anode · nature of cathode · ions present · ion(s) discharged at cathode / anode.',
 hint:'Use the nickel-plating case file.',
 model:`<table class="cmp">${tr(['Anode','Block of nickel (active)'],['Cathode','The copper sheet (article)'],['Ions present','Ni²⁺, SO₄²⁻ (from NiSO₄), H⁺, OH⁻'],['Discharged at cathode','Ni²⁺ (Ni²⁺ + 2e⁻ → Ni)'],['Discharged at anode','None: the Ni anode ionises (Ni − 2e⁻ → Ni²⁺)'])}</table>`},

/* ===== T5 Refining & electrometallurgy ===== */
{id:'y18-7i',t:'t5',src:'p.123 · 2018 Q7(i)',ref:'p.120',type:'word',q:'In electro-refining of copper, state what the <b>cathode</b> is made of.',
 accept:['pure copper','thin sheet of pure copper','pure thin sheet of copper','pure copper sheet','thin pure copper sheet'],ansText:'A thin sheet of pure copper',hint:'Pure copper collects on it.',exp:'Cathode: thin sheet of pure copper. Anode: thick block of impure copper.'},
{id:'y18-7ii',t:'t5',src:'p.123 · 2018 Q7(ii)',ref:'p.120',type:'open',q:'In electro-refining of copper, write the reaction at the <b>anode</b>.',
 hint:'The anode is active impure copper (rule 3).',model:'Cu − 2e⁻ → Cu²⁺ (the impure copper anode dissolves)'},
{id:'y20-3',t:'t5',src:'p.123 · 2020 Q3',ref:'p.120',type:'word',q:'Give one word or phrase for: The electrode used as <b>cathode</b> in electrorefining of impure copper.',
 accept:['pure copper','thin sheet of pure copper','pure thin sheet of copper','pure copper sheet','thin pure copper sheet','pure copper electrode'],ansText:'Thin sheet of pure copper',hint:'Where does the purified metal build up?'},
{id:'y20-7',t:'t5',src:'p.123 · 2020 Q7',ref:'p.120',type:'word',q:'Identify the underlined substance: The <u>electrode</u> that increases in mass during the electro-refining of silver.',
 accept:['cathode','pure silver','thin sheet of pure silver','pure silver cathode','cathode of pure silver'],ansText:'The cathode (thin sheet of pure silver)',hint:'Metal is deposited where cations gain electrons.',exp:'Pure silver is deposited on the cathode, a thin sheet of pure silver, which gains mass.'},
{id:'y23-3i',t:'t5',src:'p.124 · 2023 Q3(i)',ref:'p.120',type:'word',q:'With reference to electrorefining of copper: state what the <b>anode</b> is made of.',
 accept:['impure copper','thick block of impure copper','impure copper block','block of impure copper'],ansText:'A thick block of impure copper',hint:'The metal to be purified is the one that dissolves.'},
{id:'y23-3ii',t:'t5',src:'p.124 · 2023 Q3(ii)',ref:'p.120',type:'open',q:'With reference to electrorefining of copper: what do you observe at the <b>cathode</b>?',
 hint:'Step 5 at the cathode.',model:'Reddish/pinkish-brown <b>pure copper deposits</b> on the thin sheet, which becomes thicker (gains mass).'},
{id:'y23-3iii',t:'t5',src:'p.124 · 2023 Q3(iii)',ref:'p.120',type:'open',q:'With reference to electrorefining of copper: write the reaction taking place at the <b>cathode</b>.',
 hint:'Cu²⁺ wins on rule 1.',model:'Cu²⁺ + 2e⁻ → Cu (pure copper deposited)'},
{id:'mcq2',t:'t5',src:'p.124 · MCQ 2',ref:'p.120',type:'mcq',q:'<b>Assertion (A):</b> During electro-refining of copper, Cu²⁺ ions are discharged at the cathode.<br><b>Reason (R):</b> SO₄²⁻ and OH⁻ ions migrate to the anode but neither are discharged.',
 opts:AR,ans:1,hint:'Check each statement. Then ask: does R talk about the same electrode as A?',
 exp:'Both are true. But A is about the <b>cathode</b> (Cu²⁺ wins over H⁺ by rule 1), while R is about the <b>anode</b> (active Cu, rule 3). R does not explain A.'},
{id:'a15Ra',t:'t5',src:'p.125 · Q.15 right (a)',ref:'p.120',type:'open',q:'Diagram (book p.125, right): <i>Electrorefining of copper</i>. It shows: ANODE = thin sheet of pure copper; CATHODE = block of impure copper; electrolyte = nickel sulphate soln.; anode mud under the anode. <b>State the errors</b> in the diagram.',
 hint:'Which block is impure, and which electrode dissolves? What ions must the electrolyte supply?',
 model:'1. The anode must be the <b>block of impure copper</b>, not the thin sheet of pure copper.<br>2. The cathode must be the <b>thin sheet of pure copper</b>, not the block of impure copper.<br>3. The electrolyte must be <b>acidified copper(II) sulphate</b> solution, not nickel sulphate (it must contain Cu²⁺ ions).',
 exp:'This question deliberately contains wrong diagrams: the errors are the question.'},
{id:'a15Rb',t:'t5',src:'p.125 · Q.15 right (b)',ref:'p.120',type:'open',q:'Electrorefining of copper: give the electrode reaction at the electrode where <b>pure Cu is deposited</b>.',
 hint:'Pure Cu is deposited at which electrode?',model:'At the cathode: Cu²⁺ + 2e⁻ → Cu'},
{id:'a15Rc',t:'t5',src:'p.125 · Q.15 right (c)',ref:'p.120–121',type:'open',q:'State why Cu is <b>electrorefined</b> but Na is not.',
 hint:'How is Na obtained in the first place? Where is Na in the series compared with H?',
 model:'Sodium is a highly electropositive metal extracted by electrolysis of <b>fused</b> NaCl, so it is already deposited <b>pure</b> at the cathode and needs no refining. It also could not be refined from an aqueous solution: Na⁺ is above H⁺, so H⁺ would be discharged instead, and Na reacts with water. Copper is below hydrogen, so Cu²⁺ is discharged from aqueous CuSO₄, and copper obtained by reduction contains impurities, so it is electrorefined.'},
{id:'ut2-3',t:'t5',src:'p.126 · Unit test Q.2(3)',ref:'p.120',type:'open',q:'Complete the table for <b>electrorefining of silver</b>: nature of anode · nature of cathode · ions present · ion(s) discharged at cathode / anode.',
 hint:'Same pattern as copper refining: impure block, pure sheet, ions of the metal.',
 model:`<table class="cmp">${tr(['Anode','Block of impure silver (active)'],['Cathode','Thin sheet of pure silver'],['Ions present','A silver salt solution, e.g. AgNO₃ acidified with HNO₃: Ag⁺, NO₃⁻, H⁺, OH⁻'],['Discharged at cathode','Ag⁺ (Ag⁺ + 1e⁻ → Ag)'],['Discharged at anode','None: the Ag anode ionises (Ag − 1e⁻ → Ag⁺)'])}</table>`,
 exp:'The book does not describe silver refining in the theory; this follows the same pattern as copper refining (p.120). The electrolyte must contain Ag⁺ ions.'},
{id:'ut2-4',t:'t5',src:'p.126 · Unit test Q.2(4)',ref:'p.121',type:'open',q:'Complete the table for <b>extraction of potassium from KCl</b>: nature of anode · nature of cathode · ions present · ion(s) discharged at cathode / anode.',
 hint:'Electrometallurgy uses a fused salt and inert electrodes, like fused NaCl.',
 model:`<table class="cmp">${tr(['Anode','Inert (graphite)'],['Cathode','Inert (e.g. iron / graphite)'],['Ions present','Fused KCl ⇌ K⁺ + Cl⁻'],['Discharged at cathode','K⁺ (K⁺ + 1e⁻ → K)'],['Discharged at anode','Cl⁻ (Cl⁻ − 1e⁻ → Cl ; Cl + Cl → Cl₂)'])}</table>`},
{id:'ut2-5',t:'t5',src:'p.126 · Unit test Q.2(5)',ref:'p.121',type:'open',q:'Complete the table for <b>extraction of aluminium from Al₂O₃</b>: nature of anode · nature of cathode · ions present · ion(s) discharged at cathode / anode.',
 hint:'Use the aluminium case file.',
 model:`<table class="cmp">${tr(['Anode','Inert (graphite)'],['Cathode','Inert (graphite)'],['Ions present','Fused Al₂O₃ ⇌ 2Al³⁺ + 3O²⁻'],['Discharged at cathode','Al³⁺ (2Al³⁺ + 6e⁻ → 2Al)'],['Discharged at anode','O²⁻ (3O²⁻ − 6e⁻ → 3[O] ; 3[O] + 3[O] → 3O₂)'])}</table>`},
{id:'ut6-4',t:'t5',src:'p.126 · Unit test Q.6(4)',ref:'p.121',type:'open',q:'Give reason: During electrolytic dissociation (electrolysis) of [fused] sodium chloride, the sodium ions are discharged at the cathode.',
 hint:'GO: where do cations go? What does that electrode give them?',
 model:'Na⁺ ions are positively charged (cations), so they migrate to the negative electrode, the <b>cathode</b>. The cathode supplies electrons; Na⁺ gains one and is discharged as sodium metal: Na⁺ + 1e⁻ → Na. In <b>fused</b> NaCl there is no water, so no H⁺ competes, and Na⁺ is the only cation.'},

/* ===== T6 Worksheet & mixed equations ===== */
{id:'ws1-3',t:'t6',src:'p.122 · Worksheet 1–3',ref:'p.112, 121',type:'open',q:'<b>Electrolysis of fused lead bromide</b> (graphite electrodes). Write: 1. dissociation · 2. reaction at cathode · 3. reaction at anode.',
 hint:'Molten: only the ions of the salt. Balance charges.',model:'1. PbBr₂ ⇌ Pb²⁺ + 2Br⁻<br>2. Pb²⁺ + 2e⁻ → Pb [lead metal]<br>3. Br⁻ − 1e⁻ → Br ; Br + Br → Br₂ [bromine vapours]'},
{id:'ws4-6',t:'t6',src:'p.122 · Worksheet 4–6',ref:'p.114, 121',type:'open',q:'<b>Electrolysis of acidified water</b> (platinum electrodes). Write: 4. dissociation · 5. reaction at cathode · 6. reaction at anode.',
 hint:'Two dissociations (acid and water). Which anion wins?',model:'4. H₂SO₄ ⇌ 2H⁺ + SO₄²⁻ ; H₂O ⇌ H⁺ + OH⁻<br>5. H⁺ + 1e⁻ → H (×4) ; 2H + 2H → 2H₂ [hydrogen gas]<br>6. OH⁻ − 1e⁻ → OH (×4) ; 4OH → 2H₂O + O₂ [oxygen gas]'},
{id:'ws7-9',t:'t6',src:'p.122 · Worksheet 7–9',ref:'p.116, 121',type:'open',q:'<b>Electrolysis of aq. copper sulphate, active copper electrodes</b>. Write: 7. dissociation · 8. reaction at cathode · 9. reaction at anode.',
 hint:'Rule 3 at the anode.',model:'7. CuSO₄ ⇌ Cu²⁺ + SO₄²⁻ ; H₂O ⇌ H⁺ + OH⁻<br>8. Cu²⁺ + 2e⁻ → Cu [copper metal]<br>9. Cu − 2e⁻ → Cu²⁺ [product nil: Cu²⁺ ions]'},
{id:'ws-pt',t:'t6',src:'p.122 · Worksheet (CuSO₄, Pt electrodes)',ref:'p.117',type:'open',q:'<b>Electrolysis of aq. copper sulphate, inert platinum electrodes</b> (the unnumbered rows after item 9). Write the dissociation, the reaction at the cathode and the reaction at the anode.',
 hint:'Same cathode as with Cu electrodes. Inert anode: rule 1 among the anions.',model:'CuSO₄ ⇌ Cu²⁺ + SO₄²⁻ ; H₂O ⇌ H⁺ + OH⁻<br>Cathode: Cu²⁺ + 2e⁻ → Cu [copper metal]<br>Anode: OH⁻ − 1e⁻ → OH (×4) ; 4OH → 2H₂O + O₂ [oxygen gas]'},
{id:'ws10-12',t:'t6',src:'p.122 · Worksheet 10–12',ref:'p.119, 121',type:'open',q:'<b>Electroplating an article with nickel</b>. Write: 10. dissociation of aq. nickel sulphate · 11. reaction at cathode (article) · 12. reaction at anode (active nickel block).',
 hint:'Nickel ion is Ni²⁺. Active anode.',model:'10. NiSO₄ ⇌ Ni²⁺ + SO₄²⁻ ; H₂O ⇌ H⁺ + OH⁻<br>11. Ni²⁺ + 2e⁻ → Ni [deposited on article]<br>12. Ni − 2e⁻ → Ni²⁺ [product nil: Ni²⁺ ions]'},
{id:'ws13-15',t:'t6',src:'p.122 · Worksheet 13–15',ref:'p.119, 121',type:'open',q:'<b>Electroplating an article with silver</b>. Write: 13. dissociation of sodium silver cyanide · 14. reaction at cathode (article) · 15. reaction at anode (active silver block).',
 hint:'Na[Ag(CN)₂] gives three kinds of ions. Silver ion has charge 1+.',model:'13. Na[Ag(CN)₂] ⇌ Na⁺ + Ag⁺ + 2CN⁻ ; H₂O ⇌ H⁺ + OH⁻<br>14. Ag⁺ + 1e⁻ → Ag [deposited on article]<br>15. Ag − 1e⁻ → Ag⁺ [product nil: Ag⁺ ions]',
 exp:'Strictly, the complex ionises in two steps: Na[Ag(CN)₂] ⇌ Na⁺ + [Ag(CN)₂]⁻, then [Ag(CN)₂]⁻ ⇌ Ag⁺ + 2CN⁻. The book writes it in one line (p.119), which is balanced. On p.119 the note “[Ag → Ag⁺ + e⁻]” printed beside the cathode reaction is actually the anode reaction.'},
{id:'ws16-18',t:'t6',src:'p.122 · Worksheet 16–18',ref:'p.120, 121',type:'open',q:'<b>Electrorefining of copper</b>. Write: 16. dissociation of aq. copper sulphate · 17. reaction at cathode (pure thin sheet) · 18. reaction at anode (impure block of active Cu).',
 hint:'Same equations as CuSO₄ with copper electrodes.',model:'16. CuSO₄ ⇌ Cu²⁺ + SO₄²⁻ ; H₂O ⇌ H⁺ + OH⁻<br>17. Cu²⁺ + 2e⁻ → Cu [deposited on the thin sheet]<br>18. Cu − 2e⁻ → Cu²⁺ [product nil: Cu²⁺ ions]'},
{id:'ws19-21',t:'t6',src:'p.122 · Worksheet 19–21',ref:'p.121',type:'open',q:'<b>Electrometallurgy of sodium</b>. Write: 19. dissociation of fused sodium chloride · 20. reaction at cathode (inert) · 21. reaction at anode (inert).',
 hint:'Fused: no water. Chlorine atoms pair up.',model:'19. NaCl ⇌ Na⁺ + Cl⁻<br>20. Na⁺ + 1e⁻ → Na [sodium metal]<br>21. Cl⁻ − 1e⁻ → Cl ; Cl + Cl → Cl₂ [chlorine gas]'},
{id:'ws22-24',t:'t6',src:'p.122 · Worksheet 22–24',ref:'p.121',type:'open',q:'<b>Electrometallurgy of aluminium</b>. Write: 22. dissociation of pure alumina · 23. reaction at cathode (inert) · 24. reaction at anode (inert), ending in 3O₂.',
 hint:'Al³⁺ needs 3 electrons; O²⁻ gives up 2. Balance electrons, then pair [O] atoms.',model:'22. Al₂O₃ ⇌ 2Al³⁺ + 3O²⁻<br>23. Al³⁺ + 3e⁻ → Al (i.e. 2Al³⁺ + 6e⁻ → 2Al) [aluminium metal]<br>24. O²⁻ − 2e⁻ → [O] (i.e. 3O²⁻ − 6e⁻ → 3[O]) ; 3[O] + 3[O] → 3O₂ [oxygen gas]',
 exp:'Electron check: 2 Al₂O₃ give 4Al³⁺ + 6O²⁻ → 4Al (12e⁻ gained) and 3O₂ (12e⁻ lost).'},
{id:'ut4-1',t:'t6',src:'p.126 · Unit test Q.4(1)',ref:'p.117, 121',type:'open',q:'Give balanced electrode equations for the conversions: <b>Aluminium oxide → Oxygen gas ← Copper(II) sulphate</b>.',
 hint:'Both give oxygen at an inert anode. Which anion is discharged in each?',model:'Fused Al₂O₃ (anode): 3O²⁻ − 6e⁻ → 3[O] ; 3[O] + 3[O] → 3O₂ (overall 2O²⁻ − 4e⁻ → O₂)<br>Aq. CuSO₄, Pt anode: OH⁻ − 1e⁻ → OH (×4) ; 4OH → 2H₂O + O₂'},
{id:'ut4-2',t:'t6',src:'p.126 · Unit test Q.4(2)',ref:'p.116',type:'open',q:'Give balanced electrode equations for the conversions: <b>Copper metal → Copper ions → Copper metal</b>.',
 hint:'First arrow: active anode. Second arrow: cathode.',model:'Anode (active Cu): Cu − 2e⁻ → Cu²⁺<br>Cathode: Cu²⁺ + 2e⁻ → Cu'},
{id:'ut4-3',t:'t6',src:'p.126 · Unit test Q.4(3)',ref:'p.121',type:'open',q:'Give balanced electrode equations for the conversions: <b>Lead(II) chloride → Chlorine gas ← Hydrochloric acid</b>.',
 hint:'Both give chlorine at the anode from Cl⁻.',model:'Fused PbCl₂ (anode): Cl⁻ − 1e⁻ → Cl ; Cl + Cl → Cl₂<br>Hydrochloric acid (anode): Cl⁻ − 1e⁻ → Cl ; Cl + Cl → Cl₂ (Cl⁻ is discharged in preference to OH⁻ because of its higher concentration, rule 2)'},
{id:'ut4-4',t:'t6',src:'p.126 · Unit test Q.4(4)',ref:'p.114–115',type:'open',q:'Give balanced equations for the conversions: <b>Hydroxyl ions ← Acidified water → Oxygen gas</b>.',
 hint:'Where do the OH⁻ ions come from, and what happens to them at the anode?',model:'Acidified water → hydroxyl ions (dissociation): H₂O ⇌ H⁺ + OH⁻<br>Hydroxyl ions → oxygen gas (anode): OH⁻ − 1e⁻ → OH (×4) ; 4OH → 2H₂O + O₂',
 exp:'The arrows in the book’s row 4 are confusing; read it as: acidified water supplies OH⁻ ions, which are discharged at the anode as oxygen.'},
{id:'ut4-5',t:'t6',src:'p.126 · Unit test Q.4(5)',ref:'p.112, 121',type:'open',q:'Give balanced electrode equations for the conversions: <b>Potassium bromide → Bromine gas ← Lead bromide</b>.',
 hint:'Both are molten bromides: same anode reaction.',model:'Fused KBr (anode): Br⁻ − 1e⁻ → Br ; Br + Br → Br₂<br>Fused PbBr₂ (anode): Br⁻ − 1e⁻ → Br ; Br + Br → Br₂',
 exp:'The book says “bromine gas”; at these temperatures bromine is given off as reddish-brown <b>vapour</b>.'}
];

/* ---------------- Concepts tab (book order, p.112–122) ---------------- */
const CHAPTER=[
{id:'s-pb',title:'G1. Electrolysis of molten lead bromide',ref:'p.112–113',t:['t1'],html:`${CONCEPT.t1}
<p>★ <i>Compound formed between a metal ‘X’ [e.g. Pb] and a non-metal ‘Y’ [e.g. Br], on electrolysis in the molten or aq. soln. state, generally liberates at the cathode the metal ‘X’ in pure state, and at the anode the non-metal ‘Y’ in gaseous or vapour state.</i></p>
<p>Book data: silica crucible · temperature above 380 °C (m.p. of PbBr₂) · current 3 amperes.</p>`},
{id:'s-aw',title:'G2. Electrolysis of acidified water',ref:'p.114–115',t:['t2'],html:`${CONCEPT.t2}
<p>★ <i>The current is passed for a prolonged period of time before collection of the gases for the purpose of accurate comparison. This ensures saturation of the gases in the electrolyte, since solubility of oxygen differs from that of hydrogen.</i></p>
<p>Book data: Pt foil electrodes · ordinary temperature · current 3 amps. The book calls the electrolysis of acidulated water an example of <i>catalysis</i> (the acid is not used up).</p>`},
{id:'s-acid',title:'Dissociation of acids and alkalis',ref:'p.115',t:['t2'],html:`
${hook('Which ions are really there when HCl or NaOH dissolves in water, and which ones get discharged?')}
<table class="cmp"><tr><th></th><th>Strong acids</th><th>Weak acids</th></tr>${tr(
['Dissociation','Almost completely: HX → H⁺ + X⁻ ; H⁺ + H₂O → H₃O⁺','Partially: HX → H⁺ + X⁻ ; H⁺ + H₂O → H₃O⁺'],
['Particles in solution','H₃O⁺, X⁻ and minimum undissociated HX molecules','H₃O⁺, X⁻ and undissociated HX molecules'])}</table>
${cy(['Cover the “Weak acids” column: what particles does a weak acid solution contain?','Ions (H₃O⁺, X⁻) <b>and</b> many undissociated molecules.'])}
<p><b>Aqueous NaOH (inert electrodes):</b></p>
${METHOD5('NaOH ⇌ Na⁺ + OH⁻ ; H₂O ⇌ H⁺ + OH⁻','Na⁺, H⁺ → cathode; OH⁻ → anode','Cathode: H⁺ (lower in the series than Na⁺, rule 1). Anode: OH⁻.','Cathode: H⁺ + 1e⁻ → H (×4); 2H + 2H → 2H₂<br>Anode: OH⁻ − 1e⁻ → OH (×4); 4OH → 2H₂O + O₂','Hydrogen at cathode, oxygen at anode')}
<p>★ <i>Fused NaOH, however, discharges Na⁺ at the cathode and OH⁻ at the anode</i> (no water, so no H⁺ to compete).</p>
${trap('In aqueous NaOH, sodium is <b>not</b> formed: H⁺ is discharged instead.','Strong acid solution still has a minimum of molecules; weak acid has many.')}`},
{id:'s-cu',title:'G3. Electrolysis of aq. copper(II) sulphate (Cu and Pt electrodes)',ref:'p.116–117',t:['t3'],html:CONCEPT.t3},
{id:'s-app',title:'H1. Applications · Electroplating: term, reasons, conditions',ref:'p.118',t:['t4'],html:`
<p>The main applications of electrolysis are: <b>a]</b> electroplating of metals, <b>b]</b> electro-refining (purification) of metals, and extraction of metals, i.e. <b>electrometallurgy</b>.</p>${CONCEPT.t4}`},
{id:'s-niag',title:'H1. Electroplating with nickel and with silver',ref:'p.119',t:['t4'],html:`${D.ni}${C.ni}${D.ag}
${METHOD5('Na[Ag(CN)₂] ⇌ Na⁺ + Ag⁺ + 2CN⁻ ; H₂O ⇌ H⁺ + OH⁻','Ag⁺, Na⁺, H⁺ → cathode (article); CN⁻, OH⁻ → anode (Ag block)','Cathode: Ag⁺ in preference to Na⁺ and H⁺ (rule 1). Anode: active Ag ionises (rule 3).','Cathode: Ag⁺ + 1e⁻ → Ag. Anode: Ag − 1e⁻ → Ag⁺','Silver coat on the article; Ag anode diminishes in mass')}
${C.ag}
<p class="key">Book note (p.119): the complex really ionises as Na[Ag(CN)₂] ⇌ Na⁺ + [Ag(CN)₂]⁻, then [Ag(CN)₂]⁻ ⇌ Ag⁺ + 2CN⁻; the book writes the overall line. The “[Ag → Ag⁺ + e⁻]” printed beside the cathode reaction is the anode reaction.</p>`},
{id:'s-ref',title:'H2. Electrorefining of copper',ref:'p.120',t:['t5'],html:CONCEPT.t5},
{id:'s-met',title:'Electrometallurgy: extraction of Na, Ca, Al',ref:'p.121',t:['t5'],html:`
<p>★ <i>Electrometallurgy is the process of extraction of metals by electrolysis.</i> Metals high in the series (K, Na, Ca, Mg, Al) are extracted by electrolysis of their fused salts; the metal is deposited at the cathode.</p>
${C.na}
<p><b>Fused calcium chloride:</b> CaCl₂ ⇌ Ca²⁺ + 2Cl⁻ · Cathode: Ca²⁺ + 2e⁻ → Ca · Anode: 2Cl⁻ − 2e⁻ → 2Cl ; Cl + Cl → Cl₂</p>
${C.al}
<p>e.g. Al₂O₃ is a highly stable oxide and Al has a strong affinity for oxygen; conventional reducing agents like C, CO and H₂ cannot reduce Al₂O₃ to Al, hence Al is extracted by electrolysis.</p>`},
{id:'s-sum',title:'Summary tables: electrode reactions & applications',ref:'p.121',t:['t6'],html:`
<p>The book’s two summary tables, as case files with the same rows. Learn to rebuild each from the 5-step routine rather than memorising it.</p>
${C.pb}${C.water}${C.cuCu}${C.ni}${C.ag}${C.ref}
<table class="cmp"><tr><th></th><th>Ni plating</th><th>Ag plating</th><th>Cu refining</th></tr>${tr(
['Electrolyte','NiSO₄ (aq)','Na[Ag(CN)₂] (aq)','CuSO₄ (acidified aq)'],
['Cathode used','Article to be plated','Article to be plated','Pure thin sheet of Cu'],
['Anode used','Thick block of nickel','Thick block of silver','Impure block of Cu'],
['Cathode reaction','Ni²⁺ + 2e⁻ → Ni','Ag⁺ + 1e⁻ → Ag','Cu²⁺ + 2e⁻ → Cu'],
['Anode reaction','Ni − 2e⁻ → Ni²⁺','Ag − 1e⁻ → Ag⁺','Cu − 2e⁻ → Cu²⁺'])}</table>
${cy(['Cover the Ag plating column: name its electrolyte and anode reaction.','Na[Ag(CN)₂]; Ag − 1e⁻ → Ag⁺'],['Cover the Cu refining column: what is the cathode?','A pure thin sheet of copper.'],['What do all three anode reactions have in common?','The active metal anode loses electrons and dissolves (rule 3); no anion is discharged.'])}`},
{id:'s-ws',title:'Equation worksheet',ref:'p.122',t:['t6'],html:CONCEPT.t6+`<p>The worksheet on p.122 (items 1–24 and the CuSO₄/Pt rows) is practised card by card under topic 6. Fill each line in your notebook first.</p>`}
];
const TOPIC_SEC={t1:'s-pb',t2:'s-aw',t3:'s-cu',t4:'s-app',t5:'s-ref',t6:'s-sum'};
