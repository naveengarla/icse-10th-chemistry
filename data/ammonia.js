/* Chapter 7B: Ammonia (Dalal, printed p.163–182).
   Theory p.163–176 (syllabus & introduction p.163 · lab preparation p.164–165 · from nitrides p.166 · Haber's process p.167–169 ·
   physical properties & fountain p.170 · burning & catalytic oxidation p.171 · basic nature p.172–173 · reducing action p.174 ·
   tests p.175 · uses p.176) · Equation worksheet items 1–29 p.177–178 · Previous ICSE questions p.179–180 (2015–2023 Q4 on p.179,
   2023 Q5 to 2025 on p.180) · MCQ 1–8 p.180 · Additional & HOTS Q.1–16 p.181 · Unit test paper 7B p.182. */

/* ---------------- Topics ---------------- */
const TOPICS=[
{id:'pr',name:'1. Lab preparation from ammonium salts (drying, collection, identification)',ref:'p.164–165'},
{id:'ni',name:'2. Ammonia from metal nitrides (Mg₃N₂, Ca₃N₂, AlN + warm water)',ref:'p.166'},
{id:'hb',name:'3. Manufacture: Haber’s process',ref:'p.167–169'},
{id:'pp',name:'4. Introduction, physical properties & fountain experiment',ref:'p.163, 170'},
{id:'ox',name:'5. Burning in oxygen & catalytic oxidation (Pt)',ref:'p.171'},
{id:'bs',name:'6. Basic nature: ammonium salts & precipitates with NH₄OH',ref:'p.172–173'},
{id:'rd',name:'7. Reducing action: CuO, PbO, chlorine',ref:'p.174'},
{id:'tu',name:'8. Tests & uses (refrigerant, CFCs)',ref:'p.175–176'},
{id:'eq',name:'9. Equation worksheet & conversions',ref:'p.177–178, 182'}
];

/* ---------------- Concept lessons (shown on each card) ---------------- */
const CONCEPT={
pr:`<h3>Making dry ammonia gas in the laboratory</h3>
${hook('Every ammonium salt hides NH₃ inside it (NH₄⁺ = NH₃ + H⁺). What do you need to add to pull the ammonia out, and why is the gas jar held <b>upside down</b>?')}
${story('An alkali (OH⁻) grabs the extra H⁺ from NH₄⁺: NH₄⁺ + OH⁻ → NH₃ + H₂O. The ammonia that is left behind is a gas and escapes. Salts that are not ammonium salts (NaCl, Na₂SO₄) have no NH₄⁺, so an alkali gives no ammonia with them. That is the test that tells them apart.')}
<p><b>The apparatus, in order</b> (book diagram p.164):</p>
${flow('🧪 <b>Round-bottom flask X</b><br>NH₄Cl + Ca(OH)₂ (powdered)<br>neck sloping <b>downwards</b>','🔥 <b>Heat gently</b>','🗼 <b>Drying tower</b><br>quicklime CaO','⬇️ <b>Gas jar Y, inverted</b><br>downward displacement of air','🧫 <b>Test</b><br>conc. HCl rod → white fumes')}
${watch('laboratory preparation of ammonia gas')}
<table class="cmp"><tr><th>Point</th><th>What to write</th></tr>${tr(
['Reactants','Ammonium chloride (sal ammoniac) + calcium hydroxide (slaked lime)'],
['Equation (heat)','<b>2NH₄Cl + Ca(OH)₂ → CaCl₂ + 2H₂O + 2NH₃↑</b>'],
['Other ammonium salts (p.164)','(NH₄)₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O + 2NH₃ · (NH₄)₂SO₄ + Ca(OH)₂ → CaSO₄ + 2H₂O + 2NH₃ · NH₄Cl + NaOH → NaCl + H₂O + NH₃'],
['Procedure','Reactants ground together and heated slowly in a round-bottom flask with its neck sloping downwards'],
['Why Ca(OH)₂','Cheap and, unlike other caustic alkalis, <b>not deliquescent</b>'],
['Why more alkali (higher ratio)','To make up for the loss of NH₄Cl by <b>sublimation</b> on heating'],
['Why finely powdered','Maximum surface area for the reaction'],
['Why flask inclined','So that the <b>water vapour formed does not trickle back</b> and crack the hot flask'],
['Why not NH₄NO₃','It is <b>explosive</b> and may itself decompose (to nitrous oxide and water vapour)'],
['Drying agent','<b>Quicklime CaO</b>: basic, so it does not react with basic ammonia'],
['Not used for drying','Conc. H₂SO₄, P₂O₅, fused CaCl₂: all react with NH₃ (see table below)'],
['Collection','<b>Downward displacement of air</b> (jar inverted): lighter than air, VD 8.5 vs air 14.4 · NOT over water: 1 vol water dissolves about <b>702 vols</b> NH₃ at 20 °C, 1 atm'],
['Identification','Glass rod dipped in <b>conc. HCl</b> near the mouth of the jar → <b>dense white fumes</b> of NH₄Cl'])}</table>
<table class="cmp"><tr><th>Drying agent NOT used</th><th>Why: it reacts (p.165)</th></tr>${tr(
['Conc. H₂SO₄ (acid)','2NH₃ + H₂SO₄ → (NH₄)₂SO₄ (ammonium sulphate)'],
['P₂O₅ (acidic oxide)','6NH₃ + P₂O₅ + 3H₂O → 2(NH₄)₃PO₄ (ammonium phosphate)'],
['Fused CaCl₂','8NH₃ + CaCl₂ → CaCl₂·8NH₃ (addition product)'])}</table>
${trap('Ammonia is collected by <b>downward</b> displacement of air (HCl was upward). The jar is <b>inverted</b>.','The drying agent is <b>quicklime CaO</b>, not conc. H₂SO₄ (which was right for HCl). Even fused CaCl₂, a neutral drying agent, is wrong here.','The test rod is dipped in <b>conc. HCl</b>, not ammonia.','Balance: <b>2</b>NH₄Cl + Ca(OH)₂ → CaCl₂ + <b>2</b>H₂O + <b>2</b>NH₃.')}
${cy(['How would you tell NH₄Cl from NaCl?','Heat each with an alkali (NaOH or Ca(OH)₂). NH₄Cl gives pungent ammonia (white fumes with conc. HCl); NaCl gives nothing.'],['Why is quicklime used to dry ammonia?','It is basic, so it does not react with the basic gas ammonia.'],['Why is ammonia not collected over water?','It is highly soluble in water (702 vols per vol).'])}
${exam('2NH₄Cl + Ca(OH)₂ —Δ→ CaCl₂ + 2H₂O + 2NH₃. Dried by quicklime (CaO); collected by downward displacement of air, as ammonia is lighter than air and highly soluble in water.')}`,

ni:`<h3>Ammonia from metal nitrides and warm water</h3>
${hook('Burn magnesium ribbon in nitrogen and you get a yellowish powder. Drop warm water on it and the room smells of ammonia. Where did the hydrogen come from?')}
${story('From the water. The nitride is <b>hydrolysed</b>: water splits it. The metal takes the OH and becomes an insoluble hydroxide; the nitrogen takes the H and becomes NH₃.')}
<table class="cmp"><tr><th>Step</th><th>Equations (p.166)</th></tr>${tr(
['1. Make the nitride (burning metal + N₂)','3Mg + N₂ → Mg₃N₂ · 3Ca + N₂ → Ca₃N₂ · 2Al + N₂ → 2AlN'],
['2. Hydrolysis with <b>warm</b> water','<b>Mg₃N₂ + 6H₂O → 3Mg(OH)₂ + 2NH₃</b><br>Ca₃N₂ + 6H₂O → 3Ca(OH)₂ + 2NH₃<br><b>AlN + 3H₂O → Al(OH)₃ + NH₃</b>'])}</table>
${flow('🧪 <b>Flask X</b><br>Mg₃N₂ (dry)','💧 <b>Tap / thistle funnel Y</b><br>warm water trickles in<br>(end dips below the water)','🗼 <b>Drying tower</b><br>quicklime CaO','⬇️ <b>Inverted gas jar</b><br>downward displacement of air')}
${watch('magnesium nitride water ammonia')}
<table class="cmp"><tr><th>Point</th><th>What to write</th></tr>${tr(
['Reactants','Metal nitride (e.g. Mg₃N₂) and <b>warm water</b>'],
['Type of reaction','<b>Hydrolysis</b>'],['Drying · collection · test','Same as before: CaO · downward displacement of air · white fumes with conc. HCl'],
['Precaution','The lower end of the thistle funnel must dip below the warm water (or the gas escapes through it)'],
['Why seldom used','<b>Nitrides are expensive</b>'])}</table>
${trap('Valency trick: metal X (valency 2) + non-metal Y (valency 3, diatomic) → 3X + Y₂ → X₃Y₂, e.g. 3Mg + N₂ → Mg₃N₂.','AlN needs only <b>3</b>H₂O and gives only <b>1</b> NH₃; Mg₃N₂ and Ca₃N₂ need 6H₂O and give 2NH₃.','Collected over water? Never: the 2025 paper set a trap with a water trough.')}
${cy(['Name the reaction of a nitride with water.','Hydrolysis.'],['Why is this method seldom used?','Metal nitrides are expensive.'])}
${exam('Mg₃N₂ + 6H₂O (warm) → 3Mg(OH)₂ + 2NH₃; AlN + 3H₂O → Al(OH)₃ + NH₃. The gas is dried over CaO and collected by downward displacement of air.')}`,

hb:`<h3>Manufacture of ammonia: Haber’s process</h3>
${hook('Nitrogen is 78% of the air, but plants cannot use it. In 1909 Haber found the conditions to tie it to hydrogen. Why not just use the highest pressure and the lowest temperature, which "favour" ammonia?')}
<p class="eq"><b>N₂ + 3H₂ ⇌ 2NH₃ + Δ</b> (22,400 cals) &nbsp; 1 vol + 3 vols → 2 vols</p>
<table class="cmp"><tr><th>Condition (book p.167)</th><th>Value</th><th>Why (p.169)</th></tr>${tr(
['Reactants','N₂ : H₂ = <b>1 : 3</b> by volume, pure and dry','N₂ from fractional distillation of liquid air; H₂ from water gas (Bosch process). Impurities (CO, CO₂, H₂S) <b>poison</b> the catalyst'],
['Temperature','<b>450–500 °C</b> (optimum)','Exothermic, so low temperature gives more ammonia, but then the reaction is too slow; above this NH₃ decomposes. No external heating after the start: the heat evolved keeps the temperature up'],
['Pressure','<b>200–900 atm</b> (optimum)','Volume decreases (4 vols → 2 vols), so high pressure favours ammonia; but too high a pressure the plant cannot withstand'],
['Catalyst','<b>Finely divided iron</b> (Fe)','Speeds up the reaction; does not change the % yield. (Fe₂O₃ with about 1% K₂O and 3% Al₂O₃ may also be used)'],
['Promoter','<b>Molybdenum</b> (Mo)','Increases the efficiency of the catalyst'])}</table>
${flow('dry N₂ (1 vol) + dry H₂ (3 vols)','Ⓐ <b>Compression pump</b><br>200–900 atm','Ⓑ <b>Catalytic chamber</b><br>Fe + Mo, 450–500 °C<br>heat exchanger','Ⓒ <b>Condenser / cooling pipes</b><br>sudden expansion cools → liquid NH₃','♻️ unreacted N₂ + H₂ recycled to Ⓐ')}
${watch('Haber process manufacture of ammonia')}
<table class="cmp"><tr><th>Separating NH₃ from N₂ and H₂</th><th>Property used</th></tr>${tr(
['Liquefaction','NH₃ is <b>easily liquefiable</b> (it condenses at −33 °C, or at room temperature under about 8 atm); N₂ (−196 °C) and H₂ (−253 °C) are difficult to liquefy'],
['Dissolving in water','NH₃ is <b>highly soluble</b> (702 vols); N₂ and H₂ are almost insoluble'])}</table>
${trap('The catalyst is <b>iron</b>; molybdenum is the <b>promoter</b>. (Platinum is the catalyst for oxidising ammonia, not for making it.)','A catalyst does <b>not</b> change the percentage yield; it only gets there faster.','Write ⇌ (reversible) and "+ heat"; balance as N₂ + <b>3</b>H₂ ⇌ <b>2</b>NH₃.')}
${cy(['Which two physical properties of NH₃ are used to separate it?','Easily liquefiable and highly soluble in water.'],['Why is external heating not needed after the start?','The reaction is exothermic; the heat given out maintains the temperature.'])}
${exam('Haber’s process: N₂ + 3H₂ ⇌ 2NH₃ + Δ, at 450–500 °C and 200–900 atm, with finely divided iron as catalyst and molybdenum as promoter.')}`,

pp:`<h3>Introduction, physical properties and the fountain experiment</h3>
<p><b>★ Discovery (p.163):</b> 1774 Priestley heated slaked lime with sal ammoniac and called the gas <b>"alkaline air"</b> (it was basic). 1785 Berthelot studied its composition; 1800 Davy proved it is a compound of nitrogen and hydrogen.</p>
<p><b>Occurrence:</b> free in small amounts in air and natural water; formed when nitrogenous matter decays (putrefying bacteria, urine). Combined: ammonium salts and <b>ammoniacal liquor</b> (from destructive distillation of coal).</p>
<table class="cmp"><tr><th>Property (p.170)</th><th>Ammonia</th></tr>${tr(
['Colour, odour, taste','Colourless; strong <b>pungent</b> smell; slightly alkaline taste'],
['Physiological nature','Non-poisonous, but affects the respiratory system; fatal in large doses'],
['Density','<b>Lighter than air</b> (VD 8.5, air 14.4)'],
['Solubility','<b>Highly soluble</b>: 1 vol water dissolves about 702 vols at 20 °C and 1 atm (fountain experiment)'],
['Liquefaction · b.p. · m.p.','Easily liquefied at low temperature · liquid boils at −33.5 °C · solid melts at −77.7 °C'])}</table>
${steps('Fountain experiment (p.170)',['Dry round-bottom flask filled with <b>dry</b> ammonia; rubber stopper with a jet tube and a dropper of water.','<b>Red litmus</b> solution in the trough below.','Squeeze the dropper: ammonia dissolves in that water, making a <b>partial vacuum</b> in the flask.','The higher outside pressure pushes the red litmus up the jet tube.','It comes out as a <b>blue fountain</b>.','Inference: ammonia is <b>highly soluble</b> in water and <b>basic</b>.'])}
${flow('💧 Few drops of water squeezed in','NH₃ dissolves → <b>partial vacuum</b>','Outside air pressure <b>higher</b>','Red litmus pushed up the jet','⛲ <b>Blue fountain</b>')}
${watch('ammonia fountain experiment')}
<table class="cmp"><tr><th>Indicator in the trough</th><th>Fountain with NH₃</th></tr>${tr(['Red litmus','Blue'],['Neutral (purple) litmus','Blue'],['Methyl orange (orange)','Yellow'],['Phenolphthalein (colourless)','Pink'])}</table>
${trap('The flask must be <b>dry</b>: water already in it would dissolve the ammonia beforehand and no vacuum (no fountain) would form.','The push comes from <b>outside air pressure</b>.','HCl gives a <b>red</b> fountain with blue litmus; NH₃ gives a <b>blue</b> fountain with red litmus.')}
${cy(['What does the fountain experiment show about ammonia?','High solubility in water (and its basic nature).'],['What colour would the fountain be with methyl orange in the trough?','Yellow.'])}`,

ox:`<h3>Ammonia and oxygen: burning vs catalytic oxidation</h3>
${hook('Ammonia does not burn in air and puts out a flame. Yet the same gas burns with a greenish-yellow flame in oxygen, and over hot platinum it turns into the starting material for nitric acid. Same reactants, different products: what decides?')}
<table class="cmp"><tr><th></th><th>Burning in oxygen</th><th>Catalytic oxidation</th></tr>${tr(
['Equation','<b>4NH₃ + 3O₂ → 2N₂ + 6H₂O</b>','<b>4NH₃ + 5O₂ —(Pt, 800 °C)→ 4NO + 6H₂O + Δ</b>'],
['Conditions','Excess oxygen; ignite at the nozzle','Platinum catalyst at about 800 °C; dry NH₃ and O₂ in the ratio 1 : 2'],
['Observation','NH₃ alone does not burn; with oxygen it burns with a <b>green or greenish-yellow flame</b>','Pt <b>continues to glow</b> after heating stops (exothermic); colourless NO → <b>reddish-brown NO₂</b>: 2NO + O₂ → 2NO₂'],
['Products','Nitrogen and water','Nitric oxide and steam'],
['Importance','Shows ammonia burns only in oxygen','Starting reaction of <b>Ostwald’s process</b> (manufacture of nitric acid)'])}</table>
${flow('Dry NH₃ through tube A','Ignite at nozzle X: <b>does not burn</b>','Pass O₂ through tube B','Re-ignite: 🟢 <b>greenish-yellow flame</b>','N₂ + H₂O')}
${flow('Dry NH₃ + dry O₂ (1 : 2)','🔥 over <b>heated platinum</b> (800 °C)','✨ Pt keeps <b>glowing</b> (exothermic)','Colourless NO','+ O₂ → 🟤 <b>reddish-brown NO₂</b>')}
${watch('burning of ammonia in oxygen')} ${watch('catalytic oxidation of ammonia platinum glow')}
${trap('Ammonia is <b>neither combustible nor a supporter of combustion</b> in air.','Without catalyst → <b>N₂</b>. With platinum → <b>NO</b>. Count O₂: 3 for N₂, 5 for NO.','The catalyst for oxidation is <b>platinum</b>, not iron.')}
${cy(['Which reaction of ammonia with oxygen does not produce nitrogen?','Catalytic oxidation (gives NO).'],['Why does the platinum keep glowing?','The reaction is exothermic; its heat keeps the Pt hot.'])}
${exam('4NH₃ + 5O₂ —Pt, 800 °C→ 4NO + 6H₂O + heat; the platinum continues to glow and reddish-brown NO₂ forms (2NO + O₂ → 2NO₂).')}`,

bs:`<h3>Basic nature: ammonium hydroxide, ammonium salts and precipitates</h3>
${story('Ammonia has a <b>lone pair</b> on nitrogen. It uses it to grab a proton: NH₃ + H⁺ → NH₄⁺. With water it grabs H⁺ from H₂O and leaves OH⁻ behind, a few at a time: so liquor ammonia is a <b>weak</b> base. With acids it grabs the H⁺ and forms ammonium salts.')}
<table class="cmp"><tr><th>Point (p.172)</th><th>What to write</th></tr>${tr(
['Dry gas / liquid NH₃','<b>Neutral</b> to dry litmus'],
['★ Liquor ammonia','Aqueous solution of ammonia (liquor ammonia fortis: saturated, sp. gr. 0.88); made by the funnel arrangement, like hydrochloric acid'],
['Weak base','NH₃ + H₂O → NH₄OH ; NH₄OH ⇌ NH₄⁺ + OH⁻ : partial dissociation, OH⁻ in <b>low concentration</b>. The alkaline behaviour is due to <b>OH⁻</b> ions'],
['Indicators','Red litmus → blue · phenolphthalein → pink · methyl orange → yellow'],
['With acids (gas)','NH₃ + HCl → NH₄Cl · NH₃ + HNO₃ → NH₄NO₃ · 2NH₃ + H₂SO₄ → (NH₄)₂SO₄'],
['With acids (aq.) = neutralisation','NH₄OH + HCl → NH₄Cl + H₂O · NH₄OH + HNO₃ → NH₄NO₃ + H₂O · 2NH₄OH + H₂SO₄ → (NH₄)₂SO₄ + 2H₂O'],
['Thermal dissociation','NH₄Cl ⇌ NH₃ + HCl (on heating; recombines on cooling)'])}</table>
<p><b>Precipitates with NH₄OH (p.173)</b> (salts of Na and K excluded). The colour and the solubility in excess identify the cation:</p>
<table class="cmp"><tr><th>Salt solution</th><th>Equation</th><th>Precipitate</th><th>Excess NH₄OH</th></tr>${tr(
['Iron(II) FeSO₄','FeSO₄ + 2NH₄OH → (NH₄)₂SO₄ + Fe(OH)₂↓','<b>Dirty green</b>','Insoluble'],
['Iron(III) FeCl₃','FeCl₃ + 3NH₄OH → 3NH₄Cl + Fe(OH)₃↓','<b>Reddish brown</b>','Insoluble'],
['Lead Pb(NO₃)₂','Pb(NO₃)₂ + 2NH₄OH → 2NH₄NO₃ + Pb(OH)₂↓','<b>Chalky white</b>','<b>Insoluble</b>'],
['Zinc ZnSO₄','ZnSO₄ + 2NH₄OH → (NH₄)₂SO₄ + Zn(OH)₂↓<br>Zn(OH)₂ + (NH₄)₂SO₄ + 2NH₄OH → [Zn(NH₃)₄]SO₄ + 4H₂O','<b>White gelatinous</b>','<b>Soluble</b> (colourless solution)'],
['Copper CuSO₄','CuSO₄ + 2NH₄OH → (NH₄)₂SO₄ + Cu(OH)₂↓<br>Cu(OH)₂ + (NH₄)₂SO₄ + 2NH₄OH → [Cu(NH₃)₄]SO₄ + 4H₂O','<b>Pale blue</b>','<b>Soluble</b> → <b>deep (inky) blue</b> solution of tetrammine copper(II) sulphate'])}</table>
${flow('CuSO₄ solution (blue)','+ a little NH₄OH','🔵 <b>Pale blue ppt</b> Cu(OH)₂','+ excess NH₄OH','🟦 <b>Deep / inky blue</b> solution [Cu(NH₃)₄]SO₄')}
${flow('Pb²⁺ or Zn²⁺ solution','+ NH₄OH: white ppt in both','+ excess NH₄OH','Pb(OH)₂ <b>stays</b> (chalky white) · Zn(OH)₂ <b>dissolves</b>')}
${watch('ammonium hydroxide copper sulphate deep blue tetraammine')} ${watch('ammonium hydroxide precipitate iron zinc lead')}
${trap('Lead vs zinc: both give a white ppt; only <b>zinc</b> dissolves in excess NH₄OH. (With NaOH both dissolve: that was the other chapter.)','Iron(II) → dirty <b>green</b>; iron(III) → reddish <b>brown</b>.','"Alkaline behaviour is due to" → <b>hydroxyl (OH⁻)</b> ions, not NH₄⁺.','Liquid ammonia is <b>neutral</b>; liquor ammonia (aqueous) is basic.')}
${cy(['A salt solution gives a white ppt with NH₄OH that does not dissolve in excess. Cation?','Pb²⁺ (lead).'],['Why is the reaction of NH₄OH with HCl called neutralisation?','A base reacts with an acid to give a salt and water only.'],['Which salt solution gives no ppt with NH₄OH: Mg(NO₃)₂, NaNO₃, Cu(NO₃)₂?','NaNO₃ (sodium salts are excluded).'])}
${exam('NH₄OH ⇌ NH₄⁺ + OH⁻: it dissociates only partially, giving OH⁻ ions in low concentration, so it is a weak base.')}`,

rd:`<h3>Ammonia as a reducing agent: metal oxides and chlorine</h3>
${story('Ammonia carries hydrogen that it is willing to give away. Hot copper oxide takes that hydrogen (as water) and is left as copper metal; the nitrogen left over comes off as N₂ gas. Chlorine also pulls the hydrogen off to make HCl, and what happens next depends on <b>which gas is in excess</b>.')}
<table class="cmp"><tr><th>Reaction (p.174)</th><th>Equation</th><th>Observation</th></tr>${tr(
['Copper(II) oxide (heated, basic oxide)','<b>2NH₃ + 3CuO → 3Cu + 3H₂O + N₂</b>','<b>Black</b> CuO → <b>reddish-brown</b> (pinkish brown) copper; water condenses in the U-tube; N₂ collects over water'],
['Lead(II) oxide (heated, amphoteric, litharge)','<b>2NH₃ + 3PbO → 3Pb + 3H₂O + N₂</b>','<b>Buff yellow</b> PbO → <b>greyish</b> metallic lead'],
['Lead(IV) oxide (book)','2NH₃ + 3PbO₂ → 3PbO + 3H₂O + N₂',''],
['Chlorine, <b>ammonia in excess</b>','2NH₃ + 3Cl₂ → 6HCl + N₂ ; 6NH₃ + 6HCl → 6NH₄Cl<br><b>8NH₃ + 3Cl₂ → 6NH₄Cl + N₂</b>','Greenish-yellow Cl₂ disappears; <b>dense white fumes</b> of NH₄Cl'],
['Chlorine, <b>chlorine in excess</b>','<b>NH₃ + 3Cl₂ → NCl₃ + 3HCl</b>','<b>Yellow explosive oily liquid</b>, nitrogen trichloride'])}</table>
${flow('💨 Dry NH₃','🔥 over heated <b>black CuO</b> in combustion tube A','🟤 <b>reddish-brown Cu</b> left','💧 water condenses in U-tube B','🫙 N₂ collected over water in jar C')}
${watch('ammonia reduces copper oxide')} ${watch('ammonia and chlorine reaction nitrogen trichloride')}
<p><b>Reference: nitrogen gas (p.174).</b> From air: remove CO₂ (conc. KOH), water vapour (CaO) and O₂ (heated copper, 2Cu + O₂ → 2CuO); collect the residual N₂ over water. From ammonium nitrite: NH₄Cl + NaNO₂ → NaCl + NH₄NO₂; <b>NH₄NO₂ → 2H₂O + N₂</b> on heating.</p>
${trap('In every reducing reaction the gas given off is <b>nitrogen</b>.','Excess NH₃ → NH₄Cl + N₂ (white fumes). Excess Cl₂ → NCl₃ + HCl (yellow explosive oily liquid). Do not mix them up.','"Ammonia reduces chlorine to <b>hydrogen chloride</b>" (book heading); ammonia itself is <b>oxidised</b> to nitrogen.')}
${cy(['Which property of ammonia is shown when CuO turns reddish-brown?','Reducing property.'],['Name the gas evolved when ammonia reacts with heated CuO.','Nitrogen.'])}
${exam('2NH₃ + 3CuO —Δ→ 3Cu + 3H₂O + N₂: black copper(II) oxide turns reddish-brown, showing that ammonia is a reducing agent.')}`,

tu:`<h3>Tests for ammonia · uses · CFCs</h3>
<table class="cmp"><tr><th>Test (p.175)</th><th>Observation</th></tr>${tr(
['Odour · physiological','Irritating, pungent smell; burning sensation in the nose; brings tears to the eyes'],
['Indicators (moist / solution)','Red litmus → blue · methyl orange orange → yellow · phenolphthalein colourless → pink · neutral (purple) litmus → blue'],
['Glass rod dipped in <b>conc. HCl</b>','<b>Dense white fumes</b> of NH₄Cl: NH₃ + HCl → NH₄Cl'],
['Through copper sulphate solution','<b>Pale blue ppt</b> of Cu(OH)₂, which turns into a <b>deep blue solution</b> with excess ammonia'],
['Through <b>Nessler’s reagent</b> K₂HgI₄','Colourless reagent turns <b>pale brown</b>; with excess ammonia a <b>brown precipitate</b>'])}</table>
${watch('test for ammonia gas Nessler reagent')}
<table class="cmp"><tr><th>Form</th><th>Uses (p.176)</th></tr>${tr(
['Ammonia gas','Source of hydrogen and of nitric acid (Ostwald’s process) · manufacture of explosives (NH₄NO₃), dyes & drugs, plastics & resins, baking soda, washing soda (Solvay process), artificial silk'],
['Fertilizers','Urea NH₂CONH₂ · ammonium sulphate · ammonium nitrate · calcium ammonium nitrate · diammonium hydrogen phosphate'],
['Ammonium compounds','(NH₄)₂CO₃: smelling salt (revives a fainted person), baking, dyeing · NH₄Cl: cleaning metal surfaces, dry cells, medicine, textiles · (NH₄)₂SO₄: fertilizer, alum'],
['<b>Liquor ammonia</b>','<b>Cleansing agent</b>: emulsifies fats and grease, removes oil/grease stains; cleans window panes and porcelain'],
['<b>Liquid ammonia</b>','<b>Refrigerant</b> in ice plants: highly volatile with a high latent heat of evaporation, easily liquefied under pressure. NH₃(l) → NH₃(g) − 5.7 kcal (absorbs heat)'])}</table>
<p><b>★ CFCs and the ozone layer:</b> chlorofluorocarbons (CFCl₃, freon) are also refrigerant gases, used in refrigerators, A/C and aerosol sprays. Unlike liquid ammonia they reach the stratosphere, where UV breaks them up: CFCl₃ → Cl atom; Cl + O₃ → ClO + O₂. This <b>depletes the ozone layer</b> that blocks harmful UV. Non-ozone-depleting substitutes: <b>hydrochlorofluorocarbons (HCFCs)</b>, e.g. HCFC-123 (2,2-dichloro-1,1,1-trifluoroethane) and HCFC-124 (2-chloro-1,1,1,2-tetrafluoroethane).</p>
${trap('Cleansing agent = <b>liquor</b> ammonia (solution). Refrigerant = <b>liquid</b> ammonia.','Ammonia does <b>not</b> deplete ozone; CFCs do.','Ammonia test rod: <b>conc. HCl</b>. HCl test rod: ammonia.')}
${cy(['What does Nessler’s reagent show with ammonia?','A brown precipitate (pale brown colour).'],['Why is liquid ammonia a good refrigerant?','On evaporating it absorbs a large amount of heat (high latent heat) and it is easily liquefied.'])}`,

eq:`<h3>Equation bank for chapter 7B</h3>
<p>Balance by counting N and H first: every NH₃ carries 3 H. Then fix O with water.</p>
<table class="cmp"><tr><th>Reaction</th><th>Balanced equation</th></tr>${tr(
['Lab preparation','2NH₄Cl + Ca(OH)₂ → CaCl₂ + 2H₂O + 2NH₃'],
['Nitrides','Mg₃N₂ + 6H₂O → 3Mg(OH)₂ + 2NH₃ · AlN + 3H₂O → Al(OH)₃ + NH₃'],
['Haber','N₂ + 3H₂ ⇌ 2NH₃ + Δ (450–500 °C, 200–900 atm, Fe + Mo)'],
['Burning / catalytic oxidation','4NH₃ + 3O₂ → 2N₂ + 6H₂O · 4NH₃ + 5O₂ —Pt, 800 °C→ 4NO + 6H₂O'],
['Basic nature','NH₃ + H₂O → NH₄OH ⇌ NH₄⁺ + OH⁻ · 2NH₃ + H₂SO₄ → (NH₄)₂SO₄'],
['Reducing','2NH₃ + 3CuO → 3Cu + 3H₂O + N₂ · 8NH₃ + 3Cl₂ → 6NH₄Cl + N₂ · NH₃ + 3Cl₂ → NCl₃ + 3HCl'],
['Nitrogen','NH₄NO₂ → 2H₂O + N₂'])}</table>
<p>The drying-agent, salt and precipitate equations are in the tables of sections 1 and 6.</p>`
};

/* ---------------- Concepts tab: the chapter in book order ---------------- */
const CHAPTER=[
{id:'s-a',title:'Syllabus & A. Introduction',ref:'p.163',t:['pp'],html:`
<p><b>Syllabus (from March 2027):</b> laboratory preparation from ammonium chloride and collection (apparatus, procedure, observation, collection, identification); ammonia from nitrides like Mg₃N₂ and AlN using warm water; from ammonium salts using alkalis; manufacture by Haber’s process; density and solubility (fountain experiment); burning in oxygen; catalytic oxidation (conditions and reaction); reactions with hydrogen chloride, hot copper(II) oxide, lead(IV)/lead(II) oxide and chlorine (both in excess); aqueous ammonia with sulphuric, nitric and hydrochloric acids and with solutions of iron(III) chloride, iron(II) sulphate, lead nitrate, zinc nitrate and copper sulphate; uses (fertilizers, explosives, nitric acid, refrigerant gas, CFCs and their non-ozone-depleting alternatives, cleansing agents); tests for ammonia.</p>
<p><b>★ Discovery:</b> Priestley (1774) called it "alkaline air". <b>Occurrence:</b> free in air and natural water, from decaying nitrogenous matter; combined as ammonium salts and ammoniacal liquor (destructive distillation of coal).</p>`},
{id:'s-b',title:'B1. Laboratory preparation from ammonium salts',ref:'p.164–165',t:['pr'],html:()=>CONCEPT.pr},
{id:'s-c',title:'B2. From metal nitrides',ref:'p.166',t:['ni'],html:()=>CONCEPT.ni},
{id:'s-d',title:'B3. Manufacture: Haber’s process',ref:'p.167–169',t:['hb'],html:()=>CONCEPT.hb},
{id:'s-e',title:'C1. Physical properties · fountain experiment',ref:'p.170',t:['pp'],html:()=>CONCEPT.pp},
{id:'s-f',title:'C2.1 Combustibility: burning & catalytic oxidation',ref:'p.171',t:['ox'],html:()=>CONCEPT.ox},
{id:'s-g',title:'C2.2 Basic nature: ammonium salts & precipitates',ref:'p.172–173',t:['bs'],html:()=>CONCEPT.bs},
{id:'s-h',title:'C2.3 Reducing action',ref:'p.174',t:['rd'],html:()=>CONCEPT.rd},
{id:'s-i',title:'D. Tests · E. Uses',ref:'p.175–176',t:['tu'],html:()=>CONCEPT.tu},
{id:'s-j',title:'Summary of equations',ref:'p.177–178',t:['eq'],html:()=>CONCEPT.eq}
].map(s=>({...s,html:typeof s.html==='function'?s.html():s.html}));
const TOPIC_SEC={pr:'s-b',ni:'s-c',hb:'s-d',pp:'s-e',ox:'s-f',bs:'s-g',rd:'s-h',tu:'s-i',eq:'s-j'};

const AR=['Both A and R are true, and R is the correct explanation of A','Both A and R are true, but R is not the correct explanation of A','A is true but R is false','A is false but R is true'];

/* ---------------- Questions ---------------- */
const Q=[
/* ===== 1. Lab preparation from ammonium salts ===== */
{id:'y15-4i',t:'pr',src:'p.179 · 2015 Q4(i)',ref:'p.164',type:'open',q:'Give a balanced chemical equation for the laboratory preparation of ammonia using an ammonium salt.',
 hint:'Ammonium chloride + slaked lime, heated.',model:'2NH₄Cl + Ca(OH)₂ —Δ→ CaCl₂ + 2H₂O + 2NH₃'},
{id:'y16-2i',t:'pr',src:'p.179 · 2016 Q2(i)',ref:'p.164',type:'word',q:'Name the gas evolved when a mixture of calcium hydroxide and ammonium chloride is heated.',
 accept:['ammonia','ammonia gas','nh3','nh'],ansText:'Ammonia (NH₃)',hint:'Ammonium salt + alkali.',exp:'2NH₄Cl + Ca(OH)₂ → CaCl₂ + 2H₂O + 2NH₃.'},
{id:'y17-1ii',t:'pr',src:'p.179 · 2017 Q1(ii)',ref:'p.164',type:'open',q:'Write the balanced chemical equation for the laboratory preparation of ammonia from ammonium chloride.',
 hint:'Two NH₄Cl per Ca(OH)₂.',model:'2NH₄Cl + Ca(OH)₂ —Δ→ CaCl₂ + 2H₂O + 2NH₃'},
{id:'y18-1',t:'pr',src:'p.179 · 2018 Q1',ref:'p.164',type:'open',q:'Write a balanced chemical equation to prepare ammonia gas in the laboratory by using an alkali.',
 hint:'Any ammonium salt + alkali; the standard one uses slaked lime.',model:'2NH₄Cl + Ca(OH)₂ —Δ→ CaCl₂ + 2H₂O + 2NH₃<br>(also accepted: NH₄Cl + NaOH → NaCl + H₂O + NH₃)'},
{id:'y18-2',t:'pr',src:'p.179 · 2018 Q2(i)(ii)',ref:'p.165',type:'open',q:'Give reasons:<br>i] Conc. H₂SO₄ is not used for drying ammonia.<br>ii] Ammonia gas is not collected over water.',
 hint:'Acid + base. Solubility.',model:'i] Conc. H₂SO₄ is an acid and reacts with the basic ammonia: 2NH₃ + H₂SO₄ → (NH₄)₂SO₄.<br>ii] Ammonia is <b>highly soluble</b> in water (1 vol dissolves about 702 vols), so it would dissolve instead of collecting.'},
{id:'y20-2',t:'pr',src:'p.179 · 2020 Q2',ref:'p.164',type:'open',q:'Distinguish between the following pair using a reagent as a chemical test: ammonium sulphate crystals and sodium sulphate crystals.',
 hint:'Only one of them is an ammonium salt.',model:'Heat each with <b>sodium hydroxide</b> (or slaked lime). Ammonium sulphate gives off pungent <b>ammonia</b> (turns moist red litmus blue, white fumes with conc. HCl): (NH₄)₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O + 2NH₃. Sodium sulphate gives no gas.'},
{id:'y21-5',t:'pr',src:'p.179 · 2021-22 Q5',ref:'p.164–165',type:'fill',q:'Complete the table for the lab preparation of ammonia gas: reactants used {0} → products calcium chloride + water + ammonia · drying agent {1} · method of collection {2}',
 blanks:[{o:['ammonium chloride + calcium hydroxide','ammonium nitrate + calcium hydroxide','sodium chloride + calcium hydroxide'],a:0},{o:['quicklime (CaO)','conc. H₂SO₄','fused CaCl₂'],a:0},{o:['downward displacement of air','upward displacement of air','over water'],a:0}],
 hint:'The product is calcium chloride, so which salt and which alkali?',exp:'[a] NH₄Cl + Ca(OH)₂ [b] quicklime (CaO) [c] downward displacement of air (lighter than air, highly soluble).'},
{id:'y23-2',t:'pr',src:'p.179 · 2023 Q2',ref:'p.164',type:'open',q:'Complete and balance the equation: NH₄Cl + Ca(OH)₂ →',
 hint:'Count the N: it needs two NH₄Cl.',model:'2NH₄Cl + Ca(OH)₂ → CaCl₂ + 2H₂O + 2NH₃'},
{id:'y23-3',t:'pr',src:'p.179 · 2023 Q3',ref:'p.165',type:'open',q:'State a relevant reason: Ammonia gas is not collected over water.',
 hint:'702 vols!',model:'Ammonia is <b>highly soluble</b> in water (1 vol of water dissolves about 702 vols of NH₃ at 20 °C and 1 atm).'},
{id:'y25-5',t:'pr',src:'p.180 · 2025 Q5',ref:'p.164',type:'open',q:'Differentiate between ammonium chloride and sodium chloride using an alkali.',
 hint:'Salts other than ammonium salts do not give ammonia with alkalis.',model:'Warm each with an alkali (NaOH or Ca(OH)₂). <b>Ammonium chloride</b> liberates pungent ammonia (white fumes with a rod dipped in conc. HCl; turns moist red litmus blue): NH₄Cl + NaOH → NaCl + H₂O + NH₃. <b>Sodium chloride</b> gives no ammonia.'},
{id:'mcq1',t:'pr',src:'p.180 · MCQ 1',ref:'p.165',type:'mcq',q:'<b>Assertion (A):</b> In the laboratory preparation of ammonia, the gas is dried by passage through quicklime.<br><b>Reason (R):</b> Quicklime being basic, does not react with basic ammonia.',opts:AR,ans:0,
 hint:'Is R the reason quicklime is chosen?',exp:'Both are true and R is exactly why CaO is the drying agent.'},
{id:'mcq3',t:'pr',src:'p.180 · MCQ 3',ref:'p.164',type:'mcq',q:'Ammonia is prepared in the laboratory by heating a mixture of:',opts:['(NH₄)₂CO₃ & Ca(OH)₂','NH₄Cl & Ca(OH)₂','NH₄NO₃ & Ca(OH)₂','(NH₄)₂SO₄ & Ca(OH)₂'],ans:1,
 hint:'Sal ammoniac + slaked lime.',exp:'NH₄Cl + Ca(OH)₂ is the laboratory method. NH₄NO₃ is explosive.'},
{id:'h2',t:'pr',src:'p.181 · HOTS Q2',ref:'p.164–165',type:'mcq',q:'Which of the reactions is <b>not true</b> for the lab preparation of ammonia?<br>A: NH₄NO₃ + NaOH —Δ→ NaNO₃ + H₂O + NH₃<br>B: (NH₄)₂SO₄ + 2NaOH —Δ→ Na₂SO₄ + 2H₂O + 2NH₃<br>C: 2NH₄Cl + Ca(OH)₂ —Δ→ CaCl₂ + 2H₂O + 2NH₃',opts:['A','B','C'],ans:0,
 hint:'Which ammonium salt is dangerous?',exp:'<b>A</b> is not used: ammonium nitrate is <b>explosive</b> and may itself decompose (to nitrous oxide and water vapour). B and C are correct ways to get ammonia from an ammonium salt and an alkali (C is the usual one).'},
{id:'h3',t:'pr',src:'p.181 · HOTS Q3',ref:'p.164–165',type:'open',q:'In the lab preparation of ammonia, give reasons why the following are preferred or used:<br>(a) Procedure: the flask is heated with its neck sloping downwards and the reactants inside are finely powdered.<br>(b) Observation: the gas is passed through a drying tower containing calcium oxide and not phosphorus pentoxide.<br>(c) Collection: the gas is collected in an inverted gas jar.<br>(d) Identification: a glass rod dipped in conc. HCl is used to identify NH₃ gas.',
 hint:'Water trickling back · acid vs base · lighter than air · white fumes.',
 model:'(a) Neck sloping down: the water vapour formed does not trickle back onto the hot flask and crack it. Finely powdered: maximum surface area for the reaction.<br>(b) CaO is basic and does not react with ammonia; P₂O₅ is acidic and reacts: 6NH₃ + P₂O₅ + 3H₂O → 2(NH₄)₃PO₄.<br>(c) Ammonia is lighter than air (VD 8.5 vs 14.4), so it is collected by downward displacement of air in an inverted jar.<br>(d) Ammonia forms dense white fumes of NH₄Cl with HCl: NH₃ + HCl → NH₄Cl.'},
{id:'u4-2',t:'pr',src:'p.182 · Unit test Q.4(2)',ref:'p.165',type:'open',q:'Give a reason: A mixture of ammonium nitrate and slaked lime is not used in the lab preparation of ammonia gas.',
 hint:'Nature of NH₄NO₃.',model:'Ammonium nitrate is <b>explosive</b> in nature and may itself decompose on heating (forming nitrous oxide and water vapour) instead of giving ammonia.'},

/* ===== 2. From metal nitrides ===== */
{id:'y15-3',t:'ni',src:'p.179 · 2015 Q3',ref:'p.166, 128',type:'open',q:'Write an equation for the direct combination of X and Y to form a compound, if the metal X has valency 2 and the non-metal Y has valency 3 and Y is a diatomic gas.',
 hint:'Cross the valencies: X₃Y₂. Y is diatomic, Y₂.',model:'3X + Y₂ → X₃Y₂<br>(for example, 3Mg + N₂ → Mg₃N₂)'},
{id:'y16-1i',t:'ni',src:'p.179 · 2016 Q1(i)',ref:'p.166',type:'open',q:'Write a balanced equation for the action of warm water on AlN.',
 hint:'Al(OH)₃ + NH₃.',model:'AlN + 3H₂O → Al(OH)₃ + NH₃'},
{id:'y17-3',t:'ni',src:'p.179 · 2017 Q3',ref:'p.166',type:'fill',q:'Identify C, D and E. Lab preparation of NH₃ gas · reactants used: {0} · products formed Mg(OH)₂, NH₃ · drying agent: {1} · method of collection: {2}',
 blanks:[{o:['Mg₃N₂ + warm water','MgCl₂ + NaOH','Mg + N₂'],a:0},{o:['quicklime (CaO)','conc. H₂SO₄','P₂O₅'],a:0},{o:['downward displacement of air','upward displacement of air','over water'],a:0}],
 hint:'Mg(OH)₂ is a product: it came from a nitride and water.',exp:'C: magnesium nitride and warm water (Mg₃N₂ + 6H₂O → 3Mg(OH)₂ + 2NH₃). D: quicklime. E: downward displacement of air.'},
{id:'y19-5',t:'ni',src:'p.179 · 2019 Q5',ref:'p.166, 172',type:'open',q:'Give balanced equations for the reactions A, B and C in the flow chart: Mg₃N₂ —A→ NH₃ ⇌ NH₄Cl (B forward, C back).',
 hint:'A: warm water. B: an acidic gas. C: thermal dissociation.',model:'A: Mg₃N₂ + 6H₂O → 3Mg(OH)₂ + 2NH₃<br>B: NH₃ + HCl → NH₄Cl<br>C: NH₄Cl —Δ⇌ NH₃ + HCl'},
{id:'y23-4',t:'ni',src:'p.179 · 2023 Q4',ref:'p.166',type:'open',q:'In the lab preparation of ammonia gas from magnesium nitride:<br>i] Write a balanced chemical equation for its preparation.<br>ii] State why this method is seldom used.<br>iii] State how the gas formed is identified.',
 hint:'Cost of nitrides. The conc. HCl rod.',model:'i] Mg₃N₂ + 6H₂O → 3Mg(OH)₂ + 2NH₃<br>ii] Metal nitrides are <b>expensive</b>.<br>iii] A glass rod dipped in conc. HCl brought near the mouth of the jar gives <b>dense white fumes</b> of NH₄Cl (NH₃ + HCl → NH₄Cl).'},
{id:'y24-3',t:'ni',src:'p.180 · 2024 Q3',ref:'p.166',type:'open',q:'Give a balanced equation: Aluminium nitride is treated with warm water.',
 hint:'Hydrolysis.',model:'AlN + 3H₂O → Al(OH)₃ + NH₃'},
{id:'y25-1',t:'ni',src:'p.180 · 2025 Q1',ref:'p.166, 165',type:'open',q:'A student was asked to prepare and collect ammonia gas in the laboratory using <b>aluminium nitride</b>. He set up: flask of aluminium nitride, thistle funnel X, a tower Y packed with lumps, and a gas jar inverted over a trough of <b>water</b>.<br>a] Name the substance X added through the thistle funnel.<br>b] Write a balanced equation for the reaction between aluminium nitride and X.<br>c] Identify the substance Y.<br>d] State the function of Y.<br>e] State why the student could not collect NH₃ gas at the end of the experiment.',
 hint:'Look at how the gas is being collected.',model:'a] Warm water.<br>b] AlN + 3H₂O → Al(OH)₃ + NH₃<br>c] Quicklime (calcium oxide, CaO).<br>d] It is the <b>drying agent</b>: removes moisture from the ammonia.<br>e] He tried to collect it <b>over water</b>; ammonia is highly soluble in water and dissolved in it. It must be collected by downward displacement of air.'},
{id:'mcq4',t:'ni',src:'p.180 · MCQ 4',ref:'p.166',type:'mcq',q:'Metal nitrides react with warm water to liberate ammonia. The metal nitride undergoes:',opts:['Dissociation','Hydrolysis','Dehydration','Decomposition'],ans:1,
 hint:'Splitting by water.',exp:'<b>Hydrolysis</b>: Mg₃N₂ + 6H₂O → 3Mg(OH)₂ + 2NH₃.'},
{id:'h4',t:'ni',src:'p.181 · HOTS Q4',ref:'p.166',type:'open',q:'Ammonia may also be prepared from metal nitrides, though the method is seldom used in the laboratory.<br>(a) Give balanced equations for the conversion: Mg —A→ Mg₃N₂ —B→ NH₃<br>(b) Give a balanced equation of a <b>trivalent</b> metal nitride which reacts similarly to give ammonia.',
 hint:'Trivalent metal: aluminium.',model:'(a) A: 3Mg + N₂ → Mg₃N₂ ; B: Mg₃N₂ + 6H₂O → 3Mg(OH)₂ + 2NH₃<br>(b) AlN + 3H₂O → Al(OH)₃ + NH₃'},

/* ===== 3. Haber's process ===== */
{id:'y19-6',t:'hb',src:'p.179 · 2019 Q6',ref:'p.167',type:'fill',q:'Complete the table for the industrial method for preparation of ammonia: name of the process {0} · catalytic equation (with the catalyst) {1}',
 blanks:[{o:['Haber’s process','Ostwald’s process','Contact process'],a:0},{o:['N₂ + 3H₂ ⇌ 2NH₃ (finely divided iron)','4NH₃ + 5O₂ → 4NO + 6H₂O (platinum)','N₂ + 3H₂ ⇌ 2NH₃ (platinum)'],a:0}],
 hint:'Iron, not platinum.',exp:'Haber’s process: N₂ + 3H₂ —Fe (Mo promoter), 450–500 °C, 200–900 atm⇌ 2NH₃ + Δ.'},
{id:'y23-1',t:'hb',src:'p.179 · 2023 Q1',ref:'p.167',type:'word',q:'State the name of the process by which ammonia is manufactured on a large scale.',
 accept:['haber process','habers process','haber s process','the haber process','haber'],ansText:'Haber’s process',hint:'Named after a German chemist.',exp:'<b>Haber’s process</b>.'},
{id:'y25-2',t:'hb',src:'p.180 · 2025 Q2',ref:'p.167, 171',type:'match',q:'Match Column A with the catalyst in Column B:',
 left:['a] N₂ + 3H₂ ⇌ 2NH₃','b] 4NH₃ + 5O₂ → 4NO + 6H₂O'],right:['1. Vanadium pentoxide','2. Nickel','3. Iron','4. Concentrated sulphuric acid','5. Platinum'],ans:[2,4],
 hint:'Haber vs Ostwald.',exp:'a → 3 Iron (Haber’s process). b → 5 Platinum (catalytic oxidation, 800 °C).'},
{id:'mcq2',t:'hb',src:'p.180 · MCQ 2',ref:'p.169',type:'mcq',q:'<b>Assertion (A):</b> Finely divided molybdenum is used as a catalyst in Haber’s process.<br><b>Reason (R):</b> The catalyst accelerates the reaction, but does not affect the percentage yield of NH₃.',opts:AR,ans:3,
 hint:'What is molybdenum’s job?',exp:'A is false: the catalyst is finely divided <b>iron</b>; molybdenum is the <b>promoter</b>. R is true.'},
{id:'h5',t:'hb',src:'p.181 · HOTS Q5',ref:'p.167',type:'fill',q:'In the manufacture of ammonia by Haber’s process, state which is correct, A or B, in each case:<br>Reaction: A: N₂ + 2H₂ ⇌ 3NH₃ + Δ · B: N₂ + 3H₂ ⇌ 2NH₃ + Δ → {0}<br>Temperature: A: 450–500 °C · B: 150–200 °C → {1}<br>Pressure: A: 200–900 atm · B: 150–500 atm → {2}<br>Catalyst: A: Fe · B: K₂O → {3}<br>Promoter: A: Fe₂O₃ · B: Mo → {4}',
 blanks:[{o:['A','B'],a:1},{o:['A','B'],a:0},{o:['A','B'],a:0},{o:['A','B'],a:0},{o:['A','B'],a:1}],
 hint:'Check the balancing of the reaction first.',exp:'Reaction B (balanced) · temperature A (450–500 °C) · pressure A (200–900 atm) · catalyst A (Fe) · promoter B (Mo).'},
{id:'h6',t:'hb',src:'p.181 · HOTS Q6',ref:'p.169',type:'multi',q:'Identify which of the physical properties of ammonia enable separation of NH₃ from a mixture of NH₃, N₂ and H₂:',
 opts:['(a) Difficult to liquefy','(b) Lighter than air','(c) Easily liquefiable','(d) Non-poisonous','(e) Highly soluble in water'],ans:[2,4],
 hint:'Two techniques: liquefaction and dissolving in water.',exp:'(c) and (e). NH₃ liquefies easily (−33 °C, or about 8 atm at room temperature) while N₂ and H₂ do not; NH₃ dissolves (702 vols) while N₂ and H₂ are almost insoluble.'},
{id:'u4-3',t:'hb',src:'p.182 · Unit test Q.4(3)',ref:'p.169',type:'open',q:'Give a reason: Finely divided iron catalyst does not affect the percentage yield of ammonia in Haber’s process.',
 hint:'What does a catalyst change?',model:'A catalyst only <b>accelerates</b> the reaction (speeds up both forward and backward reactions equally) and does not form part of the reaction, so it does not change the percentage yield; it only helps reach it faster.'},

/* ===== 4. Introduction, physical properties & fountain ===== */
{id:'y24-1ii',t:'pp',src:'p.180 · 2024 Q1(ii)',ref:'p.165, 170',type:'mcq',q:'Ammonia gas is collected by downward displacement of air, since ammonia is:',opts:['very slightly soluble in water','heavier than air','lighter than air','insoluble in water'],ans:2,
 hint:'VD 8.5 vs air 14.4.',exp:'<b>Lighter than air</b> (VD 8.5 vs 14.4). It is highly soluble, so (a) and (d) are wrong.'},
{id:'h1',t:'pp',src:'p.181 · HOTS Q1',ref:'p.163',type:'fill',q:'(a) The gas initially called ‘alkaline air’: {0}<br>(b) A liquid source of ammonia: {1}',
 blanks:[{o:['nitrogen dioxide','ammonia','hydrogen sulphide'],a:1},{o:['nitrogen trichloride','ammoniacal liquor','ammonium chloride'],a:1}],
 hint:'Priestley, 1774. Destructive distillation of coal.',exp:'(a) Ammonia (Priestley called it alkaline air as it was basic). (b) Ammoniacal liquor (from destructive distillation of coal). NCl₃ is a liquid but not a source of ammonia; NH₄Cl is a solid.'},
{id:'h7',t:'pp',src:'p.181 · HOTS Q7',ref:'p.170',type:'open',q:'In the fountain experiment, give reasons for the following:<br>(a) Dry ammonia is used in the flask.<br>(b) A partial vacuum is created in the flask on squeezing the dropper.<br>(c) The colour of the fountain would change if methyl orange is kept in the trough.',
 hint:'Pre-dissolving · solubility · indicator colours in alkali.',model:'(a) If the flask or gas were moist, ammonia would dissolve in that water beforehand and no partial vacuum (no fountain) would form.<br>(b) Ammonia is <b>highly soluble</b>: it dissolves in the few drops of water, so the pressure inside falls.<br>(c) Ammonia solution is alkaline; methyl orange is <b>yellow</b> in alkali, so the fountain would be <b>yellow</b> instead of blue.'},

/* ===== 5. Burning & catalytic oxidation ===== */
{id:'y15-2',t:'ox',src:'p.179 · 2015 Q2',ref:'p.171',type:'open',q:'State one relevant observation: Ammonia gas is burnt in an atmosphere of excess oxygen.',
 hint:'Colour of the flame.',model:'Ammonia burns with a <b>green (greenish-yellow) flame</b>, forming nitrogen and water vapour: 4NH₃ + 3O₂ → 2N₂ + 6H₂O.'},
{id:'y17-2',t:'ox',src:'p.179 · 2017 Q2',ref:'p.171',type:'open',q:'State one relevant observation for the reaction of burning of ammonia in air.',
 hint:'Ammonia is neither combustible nor a supporter of combustion in air.',model:'Ammonia does <b>not burn in air</b> (it is non-combustible). It burns only in <b>oxygen</b>, with a <b>greenish-yellow flame</b>: 4NH₃ + 3O₂ → 2N₂ + 6H₂O.',
 exp:'The paper says "in air"; the book (p.171) describes burning in an atmosphere of oxygen. Write the flame observation and mention that oxygen is needed.'},
{id:'y17-4i',t:'ox',src:'p.179 · 2017 Q4(i)',ref:'p.171',type:'open',q:'Give a balanced chemical equation for the catalytic oxidation of ammonia.',
 hint:'Pt, 800 °C, gives NO.',model:'4NH₃ + 5O₂ —(Pt, 800 °C)→ 4NO + 6H₂O + Δ'},
{id:'y19-3',t:'ox',src:'p.179 · 2019 Q3',ref:'p.171',type:'word',q:'Identify the substance italicised: the <i>catalyst</i> used to oxidise ammonia.',
 accept:['platinum','pt','platinum gauze','heated platinum'],ansText:'Platinum (Pt)',hint:'It keeps glowing.',exp:'<b>Platinum</b>: 4NH₃ + 5O₂ —Pt, 800 °C→ 4NO + 6H₂O.'},
{id:'y20-3',t:'ox',src:'p.179 · 2020 Q3',ref:'p.171',type:'word',q:'Identify the substance underlined: The <u>catalyst</u> used to oxidise ammonia into nitric oxide.',
 accept:['platinum','pt','platinum gauze','heated platinum'],ansText:'Platinum (Pt)',hint:'Ostwald’s process.',exp:'<b>Platinum</b> at about 800 °C.'},
{id:'y21-4i',t:'ox',src:'p.179 · 2021-22 Q4(i)',ref:'p.171',type:'open',q:'State the observation: Dry ammonia gas reacts with oxygen in the presence of a catalyst.',
 hint:'What does the Pt do? What colour appears?',model:'The heated platinum <b>continues to glow</b> even after heating is stopped (exothermic reaction), and <b>reddish-brown fumes</b> of NO₂ appear as the colourless nitric oxide formed reacts with more oxygen (2NO + O₂ → 2NO₂).'},
{id:'y23-5i',t:'ox',src:'p.180 · 2023 Q5(i)',ref:'p.171',type:'open',q:'State one relevant observation: Burning of ammonia in excess of oxygen.',
 hint:'Flame colour.',model:'Ammonia burns with a <b>green or greenish-yellow flame</b> (4NH₃ + 3O₂ → 2N₂ + 6H₂O).'},
{id:'y23-6',t:'ox',src:'p.180 · 2023 Q6',ref:'p.171',type:'open',q:'Write a balanced equation: Ammonia to nitric oxide, using oxygen and platinum catalyst.',
 hint:'5O₂.',model:'4NH₃ + 5O₂ —(Pt, 800 °C)→ 4NO + 6H₂O + Δ'},
{id:'y25-3',t:'ox',src:'p.180 · 2025 Q3',ref:'p.171',type:'word',q:'Name the gas produced when ammonia is burnt in an atmosphere of oxygen.',
 accept:['nitrogen','nitrogen gas','n2','n'],ansText:'Nitrogen (N₂) (with water vapour)',hint:'No catalyst.',exp:'4NH₃ + 3O₂ → <b>2N₂</b> + 6H₂O.'},
{id:'mcq5',t:'ox',src:'p.180 · MCQ 5',ref:'p.171',type:'mcq',q:'Ammonia gas burns in excess oxygen to give:',opts:['Nitric oxide','Nitrogen dioxide','Nitrogen & nitric oxide','Nitrogen'],ans:3,
 hint:'NO needs platinum.',exp:'4NH₃ + 3O₂ → 2N₂ + 6H₂O: <b>nitrogen</b> (and water).'},
{id:'mcq7',t:'ox',src:'p.180 · MCQ 7',ref:'p.174, 171',type:'mcq',q:'The chemical reaction which does <b>not</b> produce nitrogen is the reaction of:',opts:['Excess ammonia with chlorine','Heat on ammonium nitrite','Catalytic oxidation of ammonia','Ammonia heated with copper(II) oxide'],ans:2,
 hint:'Which product is NO?',exp:'Catalytic oxidation gives <b>NO</b>. The others all give N₂: 8NH₃ + 3Cl₂ → 6NH₄Cl + N₂; NH₄NO₂ → 2H₂O + N₂; 2NH₃ + 3CuO → 3Cu + 3H₂O + N₂.'},
{id:'h8',t:'ox',src:'p.181 · HOTS Q8',ref:'p.171',type:'open',q:'The equations A and B represent the combustibility of NH₃:<br>A: 4NH₃ + 3O₂ → ‘X’ + 6H₂O &nbsp; B: 4NH₃ + 5O₂ —(Pt, 800 °C)→ ‘Y’ + 6H₂O<br>(a) Fill in X and Y.<br>(b) Reaction B is the starting reaction for the manufacture of which acid?<br>(c) Give a reason why the colourless gas Y changes to a coloured gas.<br>(d) State which reaction, A or B, is exothermic. What effect does it have on the reaction?',
 hint:'Ostwald. NO meets more oxygen.',model:'(a) X = 2N₂ ; Y = 4NO<br>(b) Nitric acid (Ostwald’s process).<br>(c) Colourless nitric oxide combines with more oxygen to form reddish-brown nitrogen dioxide: 2NO + O₂ → 2NO₂.<br>(d) <b>B</b> (catalytic oxidation) is exothermic: the heat given out keeps the platinum glowing, so the reaction continues even after external heating is stopped.',
 exp:'Burning (A) also gives out heat, but the book marks B (“+ Δ”, Pt continues to glow) as the exothermic one.'},
{id:'u1',t:'ox',src:'p.182 · Unit test Q.1',ref:'p.171, 174',type:'fill',q:'Choose from A: NO₂, B: NO, C: N₂, D: N₂O. The gas obtained when:<br>1. Dry ammonia and dry oxygen are ignited together: {0}<br>2. Ammonia is passed over heated litharge: {1}<br>3. A greenish-yellow gas reacts with excess ammonia: {2}<br>4. a] Dry NH₃ and O₂ are passed over heated Pt: {3} b] The gaseous product obtained is further oxidised: {4}<br>5. Ammonium nitrite undergoes thermal decomposition: {5}',
 blanks:[0,1,2,3,4,5].map(i=>({o:['A: NO₂','B: NO','C: N₂','D: N₂O'],a:[2,2,2,1,0,2][i]})),
 hint:'Litharge = PbO. Greenish-yellow gas = Cl₂.',exp:'1 C (4NH₃ + 3O₂ → 2N₂ + 6H₂O) · 2 C (2NH₃ + 3PbO → 3Pb + 3H₂O + N₂) · 3 C (8NH₃ + 3Cl₂ → 6NH₄Cl + N₂) · 4a B (NO, with Pt) · 4b A (2NO + O₂ → 2NO₂) · 5 C (NH₄NO₂ → 2H₂O + N₂).'},
{id:'u2-3',t:'ox',src:'p.182 · Unit test Q.2(3)(5)',ref:'p.171',type:'open',q:'State the colour of:<br>3. The flame obtained on burning dry ammonia in oxygen.<br>5. The vapours obtained when an ammonia–oxygen gas mixture is passed over heated Pt.',
 hint:'Flame: green. NO meets air.',model:'3. <b>Green or greenish-yellow</b> flame.<br>5. Nitric oxide formed is <b>colourless</b>, but it is at once oxidised to <b>reddish-brown</b> nitrogen dioxide (2NO + O₂ → 2NO₂), so reddish-brown vapours are seen.'},

/* ===== 6. Basic nature ===== */
{id:'y15-4iii',t:'bs',src:'p.179 · 2015 Q4(iii)',ref:'p.172',type:'open',q:'Give a balanced chemical equation for the reaction of ammonia with sulphuric acid.',
 hint:'Two NH₃ per H₂SO₄.',model:'2NH₃ + H₂SO₄ → (NH₄)₂SO₄'},
{id:'y17-4ii',t:'bs',src:'p.179 · 2017 Q4(ii)',ref:'p.172',type:'open',q:'Give a balanced chemical equation for the reaction of ammonia with nitric acid.',
 hint:'Ammonium nitrate.',model:'NH₃ + HNO₃ → NH₄NO₃'},
{id:'y20-1ii',t:'bs',src:'p.179 · 2020 Q1(ii)',ref:'p.173',type:'open',q:'Write a balanced chemical equation for the reaction of lead nitrate solution with ammonium hydroxide.',
 hint:'Chalky white ppt.',model:'Pb(NO₃)₂ + 2NH₄OH → 2NH₄NO₃ + Pb(OH)₂↓ (chalky white)'},
{id:'y21-1',t:'bs',src:'p.179 · 2021-22 Q1',ref:'p.172',type:'mcq',q:'An aqueous solution of ammonia is:',opts:['Neutral','Acidic','Basic','Amphoteric'],ans:2,
 hint:'NH₄OH ⇌ NH₄⁺ + OH⁻.',exp:'<b>Basic</b> (a weak alkali): it gives OH⁻ ions.'},
{id:'y21-2',t:'bs',src:'p.179 · 2021-22 Q2',ref:'p.172',type:'open',q:'Write a balanced equation for the conversion: ammonium sulphate from ammonium hydroxide and sulphuric acid.',
 hint:'Neutralisation: salt + water.',model:'2NH₄OH + H₂SO₄ → (NH₄)₂SO₄ + 2H₂O'},
{id:'y23-7',t:'bs',src:'p.180 · 2023 Q7',ref:'p.172',type:'mcq',q:'From the list CCl₄, PbO, NaCl, CuO, NH₄Cl, select the compound which undergoes thermal dissociation.',opts:['CCl₄','PbO','NaCl','CuO','NH₄Cl'],ans:4,
 hint:'Splits on heating and joins back on cooling.',exp:'NH₄Cl ⇌ NH₃ + HCl.'},
{id:'y23-8',t:'bs',src:'p.180 · 2023 Q8',ref:'p.173',type:'word',q:'Identify the cation in solution B: ammonium hydroxide solution, when added to solution B, gives a white precipitate which does not dissolve in excess of ammonium hydroxide solution.',
 accept:['lead','lead ion','lead ii','lead ii ion','pb','pb2','pb2+','plumbous','plumbous ion','lead2'],ansText:'Lead ion, Pb²⁺',hint:'Zinc also gives a white ppt, but it dissolves.',exp:'Pb²⁺: Pb(OH)₂ is chalky white and insoluble in excess NH₄OH. (Zn(OH)₂ dissolves.)'},
{id:'mcq8',t:'bs',src:'p.180 · MCQ 8',ref:'p.175, 47',type:'mcq',q:'An aqueous solution of ammonia turns:',opts:['Neutral litmus purple to red','Methyl orange to pink','Phenolphthalein pink to colourless','Alkaline phenolphthalein: pink'],ans:3,
 hint:'It is an alkali.',exp:'(d): alkaline phenolphthalein stays <b>pink</b>. Ammonia turns neutral litmus blue, methyl orange yellow, and colourless phenolphthalein pink.'},
{id:'h9',t:'bs',src:'p.181 · HOTS Q9',ref:'p.172',type:'fill',q:'Liquor ammonia turns red litmus blue, due to the presence of {0} ions.',
 blanks:[{o:['NH₄⁺','OH⁻'],a:1}],hint:'Alkaline behaviour.',exp:'<b>OH⁻</b> (hydroxyl) ions: NH₄OH ⇌ NH₄⁺ + OH⁻.'},
{id:'h10',t:'bs',src:'p.181 · HOTS Q10',ref:'p.172',type:'open',q:'(a) Give a reason why ammonia reacts with acids to form ammonium salts.<br>(b) Give balanced equations for the conversions: NH₃ —A→ NH₄OH —B→ NH₄Cl ⇌(C) NH₃<br>Give a reason why reaction B is called a neutralization reaction and C a thermal dissociation reaction.',
 hint:'Lone pair on N accepts a proton.',model:'(a) Ammonia is a (weak) base; it accepts protons (H⁺) from acids: NH₃ + H⁺ → NH₄⁺, forming ammonium salts.<br>(b) A: NH₃ + H₂O → NH₄OH<br>B: NH₄OH + HCl → NH₄Cl + H₂O<br>C: NH₄Cl —Δ⇌ NH₃ + HCl<br>B is <b>neutralisation</b>: a base reacts with an acid to give a salt and water only. C is <b>thermal dissociation</b>: on heating NH₄Cl splits into NH₃ and HCl, which recombine on cooling (reversible).'},
{id:'h11',t:'bs',src:'p.181 · HOTS Q11',ref:'p.173',type:'open',q:'A student was given 5 test tubes containing solutions of A: FeSO₄, B: CuSO₄, C: ZnSO₄, D: Fe₂(SO₄)₃, E: Pb(NO₃)₂.<br>(a) Using NH₄OH solution, state how he would distinguish i] A & D ii] B & C iii] C & E.<br>(b) Give a balanced equation in each case.<br>(c) Give a reason for: the pale blue ppt of Cu(OH)₂ changes colour on addition of excess NH₄OH.',
 hint:'Colour of ppt, then excess.',model:'(a) i] A gives a <b>dirty green</b> ppt; D gives a <b>reddish-brown</b> ppt (both insoluble in excess).<br>ii] B gives a <b>pale blue</b> ppt that dissolves in excess to a <b>deep (inky) blue</b> solution; C gives a <b>white gelatinous</b> ppt that dissolves in excess to a colourless solution.<br>iii] C: white ppt <b>soluble</b> in excess; E: chalky white ppt <b>insoluble</b> in excess.<br>(b) FeSO₄ + 2NH₄OH → (NH₄)₂SO₄ + Fe(OH)₂↓<br>Fe₂(SO₄)₃ + 6NH₄OH → 3(NH₄)₂SO₄ + 2Fe(OH)₃↓<br>CuSO₄ + 2NH₄OH → (NH₄)₂SO₄ + Cu(OH)₂↓ ; Cu(OH)₂ + (NH₄)₂SO₄ + 2NH₄OH → [Cu(NH₃)₄]SO₄ + 4H₂O<br>ZnSO₄ + 2NH₄OH → (NH₄)₂SO₄ + Zn(OH)₂↓ ; Zn(OH)₂ + (NH₄)₂SO₄ + 2NH₄OH → [Zn(NH₃)₄]SO₄ + 4H₂O<br>Pb(NO₃)₂ + 2NH₄OH → 2NH₄NO₃ + Pb(OH)₂↓<br>(c) Cu(OH)₂ dissolves in excess NH₄OH, forming the soluble complex <b>tetrammine copper(II) sulphate</b> [Cu(NH₃)₄]SO₄, which is deep (inky) blue.'},
{id:'u2-1',t:'bs',src:'p.182 · Unit test Q.2(1)',ref:'p.172, 175',type:'fill',q:'The colour of phenolphthalein solution after passage of ammonia through it: {0}',
 blanks:[{o:['colourless','pink','yellow'],a:1}],hint:'Alkali.',exp:'<b>Pink</b> (colourless → pink in alkali).'},
{id:'u2-2',t:'bs',src:'p.182 · Unit test Q.2(2)(4)',ref:'p.173',type:'fill',q:'State the colour of:<br>2. Copper(II) hydroxide after addition of ammonium hydroxide in excess to it: {0}<br>4. The solution obtained on addition of excess ammonium hydroxide to zinc sulphate solution: {1}',
 blanks:[{o:['pale blue precipitate','deep (inky) blue solution','dirty green'],a:1},{o:['colourless','white','pale blue'],a:0}],
 hint:'Both dissolve in excess: what complex forms?',exp:'2. <b>Deep / inky blue</b> solution of [Cu(NH₃)₄]SO₄. 4. <b>Colourless</b> solution: the white Zn(OH)₂ dissolves as [Zn(NH₃)₄]SO₄.'},
{id:'u4-1',t:'bs',src:'p.182 · Unit test Q.4(1)',ref:'p.172',type:'open',q:'Give a reason: An aqueous solution of ammonia acts as a weak base.',
 hint:'Partial dissociation.',model:'NH₄OH undergoes only <b>partial dissociation</b> in water (NH₄OH ⇌ NH₄⁺ + OH⁻), giving hydroxyl ions in <b>low concentration</b>.'},
{id:'u4-4',t:'bs',src:'p.182 · Unit test Q.4(4)',ref:'p.172',type:'open',q:'Give a reason: Ammonium salts are formed when ammonia reacts with dilute acids in the gaseous or aqueous medium.',
 hint:'Proton acceptor.',model:'Ammonia is a base; it accepts protons (H⁺) from the acid to form ammonium ions (NH₃ + H⁺ → NH₄⁺), which with the acid radical give ammonium salts, e.g. NH₃ + HCl → NH₄Cl; NH₄OH + HCl → NH₄Cl + H₂O.'},
{id:'u4-5',t:'bs',src:'p.182 · Unit test Q.4(5)',ref:'p.173',type:'open',q:'Give a reason: Aqueous solutions of lead nitrate and zinc nitrate can be distinguished using an aqueous solution of ammonia.',
 hint:'Both white; only one dissolves.',model:'Both give a white ppt with NH₄OH, but in <b>excess</b> NH₄OH the white Zn(OH)₂ <b>dissolves</b> (soluble complex [Zn(NH₃)₄]²⁺), while the chalky white Pb(OH)₂ <b>does not dissolve</b>.'},
{id:'u5-1',t:'bs',src:'p.182 · Unit test Q.5(1)(2)(3)',ref:'p.172–173',type:'fill',q:'1. The salt solution which does not give an insoluble precipitate on addition of ammonium hydroxide in small amount is {0}.<br>2. The alkaline behaviour of liquor ammonia is due to the presence of {1} ions.<br>3. Ammonia in the liquefied form is {2}.',
 blanks:[{o:['Mg(NO₃)₂','NaNO₃','Cu(NO₃)₂'],a:1},{o:['ammonium','hydronium','hydroxyl'],a:2},{o:['acidic','basic','neutral'],a:2}],
 hint:'Na and K salts are excluded. Liquid NH₃ has no water to give OH⁻.',exp:'1. NaNO₃ (sodium hydroxide is soluble). 2. Hydroxyl (OH⁻). 3. Neutral (perfectly dry or liquid ammonia is neutral to dry litmus).'},

/* ===== 7. Reducing action ===== */
{id:'y15-1',t:'rd',src:'p.179 · 2015 Q1',ref:'p.174',type:'mcq',q:'Select the gas from ammonia, ethane, hydrogen chloride, hydrogen sulphide, ethyne which is used as a reducing agent in reducing copper oxide to copper.',opts:['Ammonia','Ethane','Hydrogen chloride','Hydrogen sulphide','Ethyne'],ans:0,
 hint:'Gives N₂ and water.',exp:'2NH₃ + 3CuO → 3Cu + 3H₂O + N₂.'},
{id:'y15-4ii',t:'rd',src:'p.179 · 2015 Q4(ii)',ref:'p.174',type:'open',q:'Give a balanced chemical equation for the reaction of ammonia with excess chlorine.',
 hint:'Excess Cl₂ → nitrogen trichloride.',model:'NH₃ + 3Cl₂ → NCl₃ + 3HCl'},
{id:'y16-1ii',t:'rd',src:'p.179 · 2016 Q1(ii)',ref:'p.174',type:'open',q:'Write a balanced equation: Excess of ammonia is treated with chlorine.',
 hint:'White fumes of NH₄Cl + N₂.',model:'8NH₃ + 3Cl₂ → 6NH₄Cl + N₂'},
{id:'y16-1iii',t:'rd',src:'p.179 · 2016 Q1(iii)',ref:'p.174',type:'open',q:'Write an equation to illustrate the reducing nature of ammonia.',
 hint:'Heated copper oxide.',model:'2NH₃ + 3CuO —Δ→ 3Cu + 3H₂O + N₂ (also: 2NH₃ + 3PbO → 3Pb + 3H₂O + N₂)'},
{id:'y16-2ii',t:'rd',src:'p.179 · 2016 Q2(ii)',ref:'p.174',type:'word',q:'Name the gas evolved when a mixture of sodium nitrite and ammonium chloride is heated.',
 accept:['nitrogen','nitrogen gas','n2','n'],ansText:'Nitrogen (N₂)',hint:'Ammonium nitrite forms first.',exp:'NH₄Cl + NaNO₂ → NaCl + NH₄NO₂ ; NH₄NO₂ → 2H₂O + N₂.'},
{id:'y17-1i',t:'rd',src:'p.179 · 2017 Q1(i)',ref:'p.174',type:'open',q:'Write the balanced chemical equation for the reaction of ammonia with heated copper oxide.',
 hint:'2 : 3.',model:'2NH₃ + 3CuO → 3Cu + 3H₂O + N₂'},
{id:'y19-1',t:'rd',src:'p.179 · 2019 Q1',ref:'p.174',type:'fill',q:'Ammonia reacts with excess chlorine to form {0}.',
 blanks:[{o:['nitrogen','nitrogen trichloride','ammonium chloride'],a:1}],hint:'Chlorine in excess.',exp:'NH₃ + 3Cl₂ → <b>NCl₃</b> + 3HCl.'},
{id:'y19-2',t:'rd',src:'p.179 · 2019 Q2',ref:'p.174',type:'open',q:'State one observation: Ammonia gas is passed over heated copper(II) oxide.',
 hint:'Colour change of the solid.',model:'The <b>black</b> copper(II) oxide turns <b>reddish-brown</b> (copper); droplets of water condense and a colourless gas (N₂) is given off. 2NH₃ + 3CuO → 3Cu + 3H₂O + N₂.'},
{id:'y19-4',t:'rd',src:'p.179 · 2019 Q4',ref:'p.174',type:'word',q:'Name the gas evolved when ammonia reacts with heated copper(II) oxide.',
 accept:['nitrogen','nitrogen gas','n2','n'],ansText:'Nitrogen (N₂)',hint:'Ammonia is oxidised.',exp:'2NH₃ + 3CuO → 3Cu + 3H₂O + <b>N₂</b>.'},
{id:'y20-1i',t:'rd',src:'p.179 · 2020 Q1(i)',ref:'p.174',type:'open',q:'Write a balanced chemical equation for the reaction of excess ammonia with chlorine.',
 hint:'8 : 3.',model:'8NH₃ + 3Cl₂ → 6NH₄Cl + N₂'},
{id:'y21-3',t:'rd',src:'p.179 · 2021-22 Q3',ref:'p.174',type:'word',q:'State the compound formed when excess ammonia gas reacts with chlorine.',
 accept:['ammonium chloride','nh4cl','nhcl'],ansText:'Ammonium chloride (NH₄Cl) (with nitrogen)',hint:'Dense white fumes.',exp:'8NH₃ + 3Cl₂ → <b>6NH₄Cl</b> + N₂.'},
{id:'y21-4ii',t:'rd',src:'p.179 · 2021-22 Q4(ii)',ref:'p.174',type:'open',q:'State the observation: Excess chlorine gas reacts with ammonia gas.',
 hint:'NCl₃.',model:'A <b>yellow, explosive, oily liquid</b> (nitrogen trichloride) is formed; the greenish-yellow colour of chlorine remains. NH₃ + 3Cl₂ → NCl₃ + 3HCl.'},
{id:'y23-5ii',t:'rd',src:'p.180 · 2023 Q5(ii)',ref:'p.174',type:'open',q:'State one relevant observation: Dry ammonia gas is passed over heated PbO.',
 hint:'Buff yellow → ?',model:'<b>Buff yellow</b> lead(II) oxide is reduced to <b>greyish metallic lead</b>; water droplets form. 2NH₃ + 3PbO → 3Pb + 3H₂O + N₂.'},
{id:'y24-1i',t:'rd',src:'p.180 · 2024 Q1(i)',ref:'p.174',type:'mcq',q:'On passing ammonia gas over heated copper oxide for some time, a reddish-brown residue is left behind. What property of ammonia is demonstrated here?',opts:['Basic property','Oxidising property','Reducing property','Acidic property'],ans:2,
 hint:'CuO lost its oxygen.',exp:'<b>Reducing property</b>: CuO is reduced to Cu.'},
{id:'y24-2',t:'rd',src:'p.180 · 2024 Q2',ref:'p.174',type:'fill',q:'Rewrite by adding the correct word (example: “Ammonia changes moist red litmus to blue” → “<b>Aqueous</b> ammonia changes moist red litmus to blue”).<br>Statement: “{0} ammonia reacts with chlorine to give ammonium chloride and nitrogen.”',
 blanks:[{o:['Excess','Liquid','Aqueous','Dry'],a:0}],hint:'Which gas is in excess decides the products.',exp:'<b>Excess</b> ammonia reacts with chlorine to give ammonium chloride and nitrogen: 8NH₃ + 3Cl₂ → 6NH₄Cl + N₂. (With excess chlorine, NCl₃ forms.)'},
{id:'y25-4',t:'rd',src:'p.180 · 2025 Q4',ref:'p.174',type:'fill',q:'Ammonia gas is passed over heated copper(II) oxide in a combustion tube.<br>(a) The gas evolved: {0}<br>(b) Colour of the residue left in the tube at the end: {1}',
 blanks:[{o:['nitrogen','oxygen','hydrogen','nitric oxide'],a:0},{o:['reddish-brown','black','white','blue'],a:0}],
 hint:'CuO → Cu.',exp:'(a) Nitrogen. (b) Reddish-brown (copper). 2NH₃ + 3CuO → 3Cu + 3H₂O + N₂.'},
{id:'y25-6',t:'rd',src:'p.180 · 2025 Q6',ref:'p.174',type:'mcq',q:'From PbO, CH₄, PbO₂, CO₂, HCl, NCl₃, SO₂, choose: A yellow explosive oily liquid formed when excess chlorine gas reacts with ammonia gas.',opts:['PbO','CH₄','PbO₂','CO₂','HCl','NCl₃','SO₂'],ans:5,
 hint:'Nitrogen trichloride.',exp:'NH₃ + 3Cl₂ → <b>NCl₃</b> + 3HCl.'},
{id:'mcq6',t:'rd',src:'p.180 · MCQ 6',ref:'p.174',type:'mcq',q:'When excess ammonia and chlorine are mixed:',opts:['Ammonia is reduced to ammonium chloride','Chlorine is oxidised to hydrogen chloride','Ammonia is oxidised to nitrogen trichloride','Chlorine is reduced to hydrogen chloride'],ans:3,
 hint:'Ammonia is the reducing agent.',exp:'Chlorine is <b>reduced</b> to HCl (2NH₃ + 3Cl₂ → 6HCl + N₂), which then combines with excess NH₃ to form NH₄Cl. Ammonia is oxidised to nitrogen (not NCl₃, which needs excess chlorine).'},
{id:'h12',t:'rd',src:'p.181 · HOTS Q12',ref:'p.174',type:'open',q:'Give balanced equations for the following reducing reactions of ammonia:<br>(a) Reduction of a black basic oxide to a reduced pinkish-brown metallic product.<br>(b) Oxidation of ammonia by a buff yellow amphoteric oxide.<br>(c) Reduction of a greenish-yellow acidic gas to hydrogen chloride by excess ammonia.<br>(d) Conversion of ammonia to a yellow explosive liquid.',
 hint:'CuO, PbO, Cl₂ (excess NH₃), Cl₂ (excess Cl₂).',model:'(a) 2NH₃ + 3CuO → 3Cu + 3H₂O + N₂<br>(b) 2NH₃ + 3PbO → 3Pb + 3H₂O + N₂<br>(c) 2NH₃ + 3Cl₂ → 6HCl + N₂ ; 6NH₃ + 6HCl → 6NH₄Cl ; overall 8NH₃ + 3Cl₂ → 6NH₄Cl + N₂<br>(d) NH₃ + 3Cl₂ → NCl₃ + 3HCl'},
{id:'u5-4',t:'rd',src:'p.182 · Unit test Q.5(4)',ref:'p.174',type:'fill',q:'Ammonia reduces chlorine to {0}.',
 blanks:[{o:['nitrogen','hydrogen chloride','ammonium chloride'],a:1}],hint:'Chlorine gains hydrogen.',exp:'<b>Hydrogen chloride</b> (book p.174: "Ammonia reduces chlorine to hydrogen chloride"). Nitrogen is what ammonia itself is <b>oxidised</b> to; NH₄Cl forms afterwards from HCl + excess NH₃.'},

/* ===== 8. Tests & uses ===== */
{id:'h13',t:'tu',src:'p.181 · HOTS Q13',ref:'p.175',type:'open',q:'State the colour change occurring in each case with ammonia gas, serving as a test for ammonia, with: (a) neutral litmus (b) moist red litmus (c) conc. HCl (d) a blue copper salt (e) Nessler’s reagent.',
 hint:'Four colour changes and one fume.',model:'(a) Purple → <b>blue</b><br>(b) Red → <b>blue</b><br>(c) <b>Dense white fumes</b> of NH₄Cl<br>(d) Pale blue ppt of Cu(OH)₂, which turns into a <b>deep (inky) blue</b> solution with excess ammonia<br>(e) Colourless → <b>pale brown</b>; with excess ammonia a <b>brown precipitate</b>'},
{id:'h14',t:'tu',src:'p.181 · HOTS Q14',ref:'p.176',type:'open',q:'Identify, obtained from ammonia: (a) a light neutral gas (b) a fertilizer (c) an explosive (d) an acid.',
 hint:'Look at the uses table (p.176).',model:'(a) <b>Hydrogen</b> (ammonia is a source of hydrogen)<br>(b) Urea / ammonium sulphate (or ammonium nitrate, CAN, DAP)<br>(c) <b>Ammonium nitrate</b><br>(d) <b>Nitric acid</b> (Ostwald’s process)',
 exp:'For (a) the book’s uses table lists ammonia as a “source of hydrogen”. Nitrogen (from burning ammonia) is also a neutral gas slightly lighter than air.'},
{id:'h15',t:'tu',src:'p.181 · HOTS Q15',ref:'p.176',type:'fill',q:'State the form of ammonia used as:<br>(a) a cleansing agent: {0}<br>(b) a refrigerant gas: {1}',
 blanks:[{o:['liquor ammonia','liquid ammonia'],a:0},{o:['liquor ammonia','liquid ammonia'],a:1}],
 hint:'Liquor = solution; liquid = liquefied gas.',exp:'(a) Liquor ammonia: emulsifies fats and grease. (b) Liquid ammonia: highly volatile, high latent heat of evaporation.'},
{id:'h16',t:'tu',src:'p.181 · HOTS Q16',ref:'p.176',type:'open',q:'Give reasons:<br>(a) C.F.C. (freon), which like liquid NH₃ is used as a refrigerant gas, causes ozone depletion.<br>(b) H.C.F.C. acts as a substitute for C.F.C.',
 hint:'UV + CFC → Cl atoms.',model:'(a) CFCs escape into the atmosphere (from refrigerators, A/C plants, aerosol sprays) and reach the stratosphere, where UV rays decompose them to free <b>chlorine atoms</b> (CFCl₃ → Cl); Cl + O₃ → ClO + O₂, which breaks down the ozone layer.<br>(b) Hydrochlorofluorocarbons (e.g. HCFC-123, HCFC-124) are <b>non-ozone depleting</b> alternatives that can do the same cooling job.'},
{id:'u5-5',t:'tu',src:'p.182 · Unit test Q.5(5)',ref:'p.176',type:'fill',q:'The chemical not responsible for ozone depletion is {0}.',
 blanks:[{o:['methyl chloride','ammonia','chlorofluorocarbons'],a:1}],hint:'A refrigerant that does not reach the ozone layer.',exp:'<b>Ammonia</b>. CFCs (and chlorine compounds such as methyl chloride) release Cl atoms that destroy ozone.'},
{id:'u6',t:'tu',src:'p.182 · Unit test Q.6',ref:'p.164, 172–175',type:'match',q:'Select the most probable substance to be added to distinguish each pair:',
 left:['1] Ammonium sulphate and ammonium chloride','2] Potassium sulphate and ammonium sulphate','3] Liquor ammonia and liquid ammonia','4] Ammonia and sulphur dioxide gas','5] Copper(II) oxide and copper(II) chloride'],
 right:['A: Conc. hydrochloric acid','B: Ammonia gas','C: Barium chloride','D: Phenolphthalein','E: Sodium hydroxide'],ans:[2,4,3,0,1],
 hint:'Sulphate test · ammonium test · basic or neutral · white fumes · deep blue.',
 exp:'1 → C: BaCl₂ gives a white ppt (BaSO₄) with the sulphate only. 2 → E: NaOH liberates NH₃ only from the ammonium salt. 3 → D: phenolphthalein turns pink with liquor ammonia (basic); liquid ammonia is neutral. 4 → A: conc. HCl gives dense white fumes with NH₃ only. 5 → B: ammonia gas passed into CuCl₂ solution gives a pale blue ppt that turns deep blue in excess; insoluble CuO shows no such change.'},

/* ===== 9. Equation worksheet (p.177–178) & conversions ===== */
{id:'ws1-4',t:'eq',src:'p.177 · Worksheet 1–4',ref:'p.164',type:'open',q:'Complete and balance (ammonium salt + alkali):<br>1. NH₄Cl + Ca(OH)₂ → ____ + H₂O + ____<br>2. NH₄Cl + NaOH → ____ + H₂O + ____<br>3. (NH₄)₂SO₄ + NaOH → ____ + H₂O + ____<br>4. (NH₄)₂SO₄ + Ca(OH)₂ → ____ + H₂O + ____',
 hint:'Salt + water + ammonia every time.',model:'1. 2NH₄Cl + Ca(OH)₂ → CaCl₂ + 2H₂O + 2NH₃<br>2. NH₄Cl + NaOH → NaCl + H₂O + NH₃<br>3. (NH₄)₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O + 2NH₃<br>4. (NH₄)₂SO₄ + Ca(OH)₂ → CaSO₄ + 2H₂O + 2NH₃'},
{id:'ws5-7',t:'eq',src:'p.177 · Worksheet 5–7',ref:'p.165',type:'open',q:'Complete and balance (ammonia with drying agents):<br>5. NH₃ + H₂SO₄ →<br>6. NH₃ + P₂O₅ + H₂O →<br>7. NH₃ + CaCl₂ →',
 hint:'Sulphate, phosphate, addition product.',model:'5. 2NH₃ + H₂SO₄ → (NH₄)₂SO₄<br>6. 6NH₃ + P₂O₅ + 3H₂O → 2(NH₄)₃PO₄<br>7. 8NH₃ + CaCl₂ → CaCl₂·8NH₃'},
{id:'ws8-10',t:'eq',src:'p.177 · Worksheet 8–10',ref:'p.166',type:'open',q:'Complete and balance (metal nitrides + warm water):<br>8. Mg₃N₂ + H₂O →<br>9. Ca₃N₂ + H₂O →<br>10. AlN + H₂O →',
 hint:'Metal hydroxide + ammonia.',model:'8. Mg₃N₂ + 6H₂O → 3Mg(OH)₂ + 2NH₃<br>9. Ca₃N₂ + 6H₂O → 3Ca(OH)₂ + 2NH₃<br>10. AlN + 3H₂O → Al(OH)₃ + NH₃'},
{id:'ws11',t:'eq',src:'p.177 · Worksheet 11',ref:'p.167',type:'open',q:'11. Haber’s process: N₂ + H₂ ⇌ ____ + Δ. State the temperature, pressure, catalyst, promoter, and the favourable conditions (temperature high/low, pressure high/low).',
 hint:'Exothermic, volume decreases.',model:'N₂ + 3H₂ ⇌ 2NH₃ + Δ<br>Temperature 450–500 °C · pressure 200–900 atm · catalyst finely divided iron · promoter molybdenum<br>Favourable: <b>low</b> temperature (exothermic) and <b>high</b> pressure (volume decreases); 450–500 °C is an optimum so that the rate is not too slow.'},
{id:'ws12-13',t:'eq',src:'p.178 · Worksheet 12–13',ref:'p.171',type:'open',q:'Complete and balance:<br>12. NH₃ + O₂ → ____ + ____ (burning in oxygen)<br>13. NH₃ + O₂ —(Pt, 800 °C)→ ____ + ____ + Δ (catalytic oxidation)',
 hint:'3O₂ vs 5O₂.',model:'12. 4NH₃ + 3O₂ → 2N₂ + 6H₂O<br>13. 4NH₃ + 5O₂ → 4NO + 6H₂O + Δ'},
{id:'ws14-17',t:'eq',src:'p.178 · Worksheet 14–17',ref:'p.172',type:'open',q:'Complete (ammonia gas with):<br>14. NH₃ + HCl →<br>15. NH₃ + HNO₃ →<br>16. NH₃ + H₂SO₄ →<br>17. NH₃ + H₂O → ____ ; [NH₄OH ⇌ NH₄⁺ + ____]',
 hint:'Gas + acid gives the salt only.',model:'14. NH₃ + HCl → NH₄Cl<br>15. NH₃ + HNO₃ → NH₄NO₃<br>16. 2NH₃ + H₂SO₄ → (NH₄)₂SO₄<br>17. NH₃ + H₂O → NH₄OH ; NH₄OH ⇌ NH₄⁺ + OH⁻'},
{id:'ws18-20',t:'eq',src:'p.178 · Worksheet 18–20',ref:'p.172',type:'open',q:'Complete and balance (ammonia solution with):<br>18. NH₄OH + HCl →<br>19. NH₄OH + HNO₃ →<br>20. NH₄OH + H₂SO₄ →',
 hint:'Salt + water.',model:'18. NH₄OH + HCl → NH₄Cl + H₂O<br>19. NH₄OH + HNO₃ → NH₄NO₃ + H₂O<br>20. 2NH₄OH + H₂SO₄ → (NH₄)₂SO₄ + 2H₂O'},
{id:'ws21-25',t:'eq',src:'p.178 · Worksheet 21–25',ref:'p.173',type:'open',q:'Complete and balance (NH₄OH with metallic salt solutions):<br>21. FeSO₄ + NH₄OH →<br>22. FeCl₃ + NH₄OH →<br>23. Pb(NO₃)₂ + NH₄OH →<br>24. ZnSO₄ + NH₄OH → ; [Zn(OH)₂ + (NH₄)₂SO₄ + 2NH₄OH → ____ + H₂O]<br>25. CuSO₄ + NH₄OH → ; [Cu(OH)₂ + (NH₄)₂SO₄ + 2NH₄OH → ____ + H₂O]',
 hint:'Ammonium salt + metal hydroxide ppt; then the tetrammine complexes.',model:'21. FeSO₄ + 2NH₄OH → (NH₄)₂SO₄ + Fe(OH)₂↓ (dirty green)<br>22. FeCl₃ + 3NH₄OH → 3NH₄Cl + Fe(OH)₃↓ (reddish brown)<br>23. Pb(NO₃)₂ + 2NH₄OH → 2NH₄NO₃ + Pb(OH)₂↓ (chalky white)<br>24. ZnSO₄ + 2NH₄OH → (NH₄)₂SO₄ + Zn(OH)₂↓ (white gelatinous); Zn(OH)₂ + (NH₄)₂SO₄ + 2NH₄OH → [Zn(NH₃)₄]SO₄ + 4H₂O<br>25. CuSO₄ + 2NH₄OH → (NH₄)₂SO₄ + Cu(OH)₂↓ (pale blue); Cu(OH)₂ + (NH₄)₂SO₄ + 2NH₄OH → [Cu(NH₃)₄]SO₄ + 4H₂O (deep blue)'},
{id:'ws26-29',t:'eq',src:'p.178 · Worksheet 26–29',ref:'p.174',type:'open',q:'Complete and balance (ammonia as a reducing agent):<br>26. CuO + NH₃ → ____ + H₂O + ____<br>27. PbO + NH₃ → ____ + H₂O + ____<br>28. (ammonia in excess) NH₃ + Cl₂ → ____ + N₂ ; NH₃ + HCl → ____ ; overall 8NH₃ + Cl₂ → ____ + ____<br>29. (chlorine in excess) NH₃ + Cl₂ → ____ + ____',
 hint:'All the oxides give N₂. Excess Cl₂ gives NCl₃.',model:'26. 3CuO + 2NH₃ → 3Cu + 3H₂O + N₂<br>27. 3PbO + 2NH₃ → 3Pb + 3H₂O + N₂<br>28. 2NH₃ + 3Cl₂ → 6HCl + N₂ ; 6NH₃ + 6HCl → 6NH₄Cl ; 8NH₃ + 3Cl₂ → 6NH₄Cl + N₂<br>29. NH₃ + 3Cl₂ → NCl₃ + 3HCl'},
{id:'u3-1',t:'eq',src:'p.182 · Unit test Q.3(1)',ref:'p.164, 172',type:'open',q:'Give balanced equations for the conversions: NH₄OH —A→ (NH₄)₂SO₄ —B→ NH₃',
 hint:'A: an acid. B: an alkali.',model:'A: 2NH₄OH + H₂SO₄ → (NH₄)₂SO₄ + 2H₂O<br>B: (NH₄)₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O + 2NH₃ (or with Ca(OH)₂ → CaSO₄ + 2H₂O + 2NH₃)'},
{id:'u3-2',t:'eq',src:'p.182 · Unit test Q.3(2)',ref:'p.171–174',type:'open',q:'Give balanced equations: NH₄Cl ←C— NH₃ —D→ NH₄Cl, and NH₃ —E→ N₂, where C, D and E are three different gases.',
 hint:'C: a greenish-yellow gas. D: an acidic gas. E: a gas that burns ammonia.',model:'C (chlorine): 8NH₃ + 3Cl₂ → 6NH₄Cl + N₂<br>D (hydrogen chloride): NH₃ + HCl → NH₄Cl<br>E (oxygen): 4NH₃ + 3O₂ → 2N₂ + 6H₂O'}
];

/* ---------------- Page ---------------- */
const PAGE={key:'ammonia-v1',title:'🧪 7B · Ammonia',book:{dir:'ammonia',from:163,to:182},
 pages:{177:'Equation worksheet items 1–11',178:'Equation worksheet items 12–29',179:'Previous ICSE questions 2015 to 2023 Q4',180:'Previous ICSE 2023 Q5 to 2025 · MCQ 1–8',181:'Additional &amp; HOTS Q.1–16',182:'Unit test paper 7B: Q.1–6'},
 formulas:`<h3>📐 Quick sheet: ammonia</h3>
<table class="cmp"><tr><th></th><th></th></tr>${tr(
['Lab prep','2NH₄Cl + Ca(OH)₂ —Δ→ CaCl₂ + 2H₂O + 2NH₃ · dry: <b>quicklime CaO</b> · collect: <b>downward</b> displacement of air'],
['Nitrides','Mg₃N₂ + 6H₂O → 3Mg(OH)₂ + 2NH₃ · AlN + 3H₂O → Al(OH)₃ + NH₃ (hydrolysis, warm water)'],
['Haber','N₂ + 3H₂ ⇌ 2NH₃ + Δ · 450–500 °C · 200–900 atm · Fe catalyst · Mo promoter'],
['Oxygen','burn: 4NH₃ + 3O₂ → 2N₂ + 6H₂O (green / greenish-yellow flame) · Pt, 800 °C: 4NH₃ + 5O₂ → 4NO + 6H₂O'],
['Reducing','2NH₃ + 3CuO → 3Cu + 3H₂O + N₂ · 8NH₃ + 3Cl₂ → 6NH₄Cl + N₂ · NH₃ + 3Cl₂ → NCl₃ + 3HCl'],
['NH₄OH ppts','Fe(OH)₂ dirty green · Fe(OH)₃ reddish brown · Pb(OH)₂ chalky white (stays) · Zn(OH)₂ white gelatinous (dissolves) · Cu(OH)₂ pale blue → deep blue'],
['Tests','conc. HCl rod → white fumes · red litmus → blue · Nessler’s → brown ppt'],
['Numbers','VD 8.5 (air 14.4) · 702 vols per vol water · b.p. −33.5 °C · m.p. −77.7 °C'])}</table>`};
