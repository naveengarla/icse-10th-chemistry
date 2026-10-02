/* Chapter 7C: Nitric acid (Dalal, printed p.183–202).
   Theory p.183–196 (syllabus, introduction & occurrence p.183 · lab preparation p.184–185 · product colour p.186 ·
   Ostwald's process p.186–189 · physical properties p.190 · stability, indicators, ionisation & acidic properties p.191 ·
   oxidising nature: non-metals & metals p.192–193, passivity & aqua regia p.193, inorganic & organic compounds p.194 ·
   tests & brown ring p.195 · uses & nitrates p.196) · Equation worksheet items 1–34 p.197–198 · Previous ICSE questions
   2010–2019 p.199, 2020–2025 p.200 · MCQ 1–9 p.200 · Additional & HOTS Q.1–14 p.201 · Unit test paper 7C p.202.
   No solved examples in this chapter. */

/* ---------------- Topics ---------------- */
const TOPICS=[
{id:'pr',name:'1. Lab preparation from KNO₃ / NaNO₃ (all-glass retort, below 200 °C)',ref:'p.184–185'},
{id:'st',name:'2. Colour & stability: why conc. HNO₃ turns yellow',ref:'p.186, 191'},
{id:'ow',name:'3. Manufacture: Ostwald’s process',ref:'p.186–189'},
{id:'in',name:'4. Introduction, occurrence & physical properties',ref:'p.183, 190'},
{id:'ac',name:'5. Acidic properties of dilute HNO₃ (ionisation, indicators, salts)',ref:'p.191'},
{id:'nm',name:'6. Oxidising action: non-metals C, S, P',ref:'p.192'},
{id:'mt',name:'7. Oxidising action: metals (Mg/Mn, Cu, Zn, Fe), passivity, aqua regia',ref:'p.192–193'},
{id:'cp',name:'8. Oxidising action: inorganic & organic compounds',ref:'p.194'},
{id:'ts',name:'9. Tests for nitric acid & nitrates: brown ring test',ref:'p.195'},
{id:'us',name:'10. Uses · nitrates & their thermal decomposition',ref:'p.196'},
{id:'eq',name:'11. Equation worksheet',ref:'p.197–198'}
];

/* ---------------- Concept lessons (shown on each card) ---------------- */
const CONCEPT={
pr:`<h3>Making nitric acid in the laboratory</h3>
${hook('Nitric acid is volatile: it boils at 86 °C. How can you push it out of its salt, saltpetre, and why must every part of the apparatus be made of <b>glass</b>?')}
${story('A strong acid that does <b>not</b> evaporate (conc. H₂SO₄, b.p. about 338 °C) drives out a more <b>volatile</b> acid from its salt. On gentle heating the nitric acid boils off as vapour, and the cold receiver turns it back into liquid. Its hot vapours eat rubber and cork, so there are no stoppers or tubing: just a glass retort and a glass receiver.')}
<p><b>The apparatus, in order</b> (book diagram p.184):</p>
${flow('🧪 <b>Glass retort X</b><br>KNO₃ (nitre) or NaNO₃ (Chile saltpetre)<br>+ conc. H₂SO₄, equal parts by weight','🔥 <b>Heat gently</b><br>keep <b>below 200 °C</b>','💨 HNO₃ <b>vapours</b> pass down the retort neck<br>(no rubber, no cork: all glass)','❄️ <b>Receiver Y</b><br>cooled from outside by cold water','💧 Conc. HNO₃ (liquid) collects in Y','🧫 <b>Identify</b>: heat with Cu turnings → reddish-brown NO₂')}
${watch('laboratory preparation of nitric acid retort')}
<table class="cmp"><tr><th>Point (p.184–185)</th><th>What to write</th></tr>${tr(
['Reactants','Potassium nitrate (nitre) or sodium nitrate (Chile saltpetre) + <b>conc. sulphuric acid</b>, in a glass retort'],
['Equations (below 200 °C)','<b>KNO₃ + H₂SO₄ → KHSO₄ + HNO₃</b><br><b>NaNO₃ + H₂SO₄ → NaHSO₄ + HNO₃</b>'],
['Products','Potassium (or sodium) <b>bisulphate</b>, an <b>acid salt</b>, and nitric acid vapours'],
['Condition','Temperature <b>less than 200 °C</b>, properly maintained and controlled'],
['Procedure','Equal parts by weight of the nitrate and conc. H₂SO₄ heated gently in the glass retort'],
['Collection','The vapours <b>condense</b> and are collected in the <b>water-cooled receiver</b>'],
['Why conc. H₂SO₄','Strong, <b>non-volatile</b> acid: it displaces the more volatile nitric acid from its salt'],
['Why not conc. HCl','HCl is itself <b>volatile</b>, so it cannot be used to displace another volatile acid (its vapours would come over too)'],
['Why ratio 1 : 1 (nitre : acid)','Although H₂SO₄ is dibasic, only the <b>acid salt</b> (NaHSO₄ / KHSO₄) is to be formed: only half the hydrogen of the acid is used'],
['Why all-glass apparatus','Nitric acid vapours are <b>highly corrosive</b> and attack rubber, cork, etc.'],
['Identification','The vapours, heated alone or with <b>copper turnings</b>, give <b>reddish-brown fumes of NO₂</b>, which turn acidified iron(II) sulphate solution brown'])}</table>
<table class="cmp"><tr><th>Temperature</th><th>Reaction (p.185)</th></tr>${tr(
['Below / around 200 °C (used)','NaNO₃ + H₂SO₄ → NaHSO₄ + HNO₃'],
['Above 200 °C (avoided)','NaNO₃ + NaHSO₄ → Na₂SO₄ + HNO₃ (normal salt)'])}</table>
<p><b>Why not above 200 °C</b>: (1) it may <b>damage</b> the glass apparatus; (2) the nitric acid itself <b>decomposes</b> further; (3) a <b>hard crust</b> of the normal sulphate (Na₂SO₄ / K₂SO₄) forms, which is a <b>poor conductor of heat</b>, sticks to the glass and cannot easily be removed.</p>
${trap('The salt formed below 200 °C is the <b>acid salt</b> KHSO₄ / NaHSO₄, not K₂SO₄. 2KNO₃ + H₂SO₄ → K₂SO₄ + 2HNO₃ is <b>wrong</b> for the lab method.','The acid used is <b>concentrated</b> H₂SO₄ (dilute would not work and HCl is volatile).','The receiver is cooled with water: the product is collected as a <b>liquid</b>, not as a gas in a jar.')}
${cy(['Why is the complete apparatus made of glass?','HNO₃ vapours are highly corrosive and attack rubber and cork.'],['Name the type of salt formed in the lab preparation.','An acid salt (KHSO₄ or NaHSO₄).'],['Why is the temperature kept below 200 °C?','Higher temperatures may damage the glass, decompose the HNO₃ and leave a hard crust of Na₂SO₄/K₂SO₄ that sticks to the glass.'])}
${exam('KNO₃ + H₂SO₄(conc.) —below 200 °C→ KHSO₄ + HNO₃, in an all-glass retort; the nitric acid vapours condense in a water-cooled receiver.')}`,

st:`<h3>Why conc. nitric acid looks yellow, and how to remove the colour</h3>
${hook('Pure nitric acid is colourless. Yet the acid in the lab bottle, or the acid you just distilled, is yellowish brown. Where does the colour come from?')}
${story('Nitric acid is <b>unstable</b>. Even at room temperature, and faster in sunlight or when heated, a little of it breaks down into reddish-brown <b>nitrogen dioxide</b>. That NO₂ stays <b>dissolved</b> in the acid and tints it yellow.')}
<p class="eq"><b>4HNO₃ → 4NO₂ + 2H₂O + O₂</b> &nbsp; (light or heat)</p>
<table class="cmp"><tr><th>Point (p.186, 191)</th><th>What to write</th></tr>${tr(
['Pure acid','<b>Colourless</b>'],
['Lab acid / acid left standing in a plain glass bottle','<b>Slightly yellowish brown</b>: decomposition gives NO₂, which dissolves in the acid'],
['High temperature or long time','Decomposition more complete: a <b>darker</b> yellowish-brown colour'],
['Remove the colour: bubble <b>air or CO₂</b> through the warm acid (60–80 °C)','Drives out the NO₂ gas, and the air also oxidises NO₂ back to nitric acid (4NO₂ + 2H₂O + O₂ → 4HNO₃)'],
['Remove the colour: <b>dilute with water</b>','NO₂ is soluble in water and dissolves'],
['Prevent it (standard practice)','Store conc. HNO₃ in <b>dark brown bottles</b>, away from light and heat'])}</table>
${flow('☀️ light / 🔥 heat','4HNO₃ → 4NO₂ + 2H₂O + O₂','🟤 NO₂ <b>dissolves</b> in the acid','🟡 acid looks <b>yellow / yellowish brown</b>','💨 bubble air (warm acid) → colourless again')}
${trap('The colour is due to <b>dissolved NO₂</b>, not to any impurity in the reactants.','Decomposition gives <b>three</b> products: NO₂, water and oxygen. Balance as <b>4</b>HNO₃ → <b>4</b>NO₂ + <b>2</b>H₂O + O₂.','Bubbling air works in two ways: it drives out NO₂ <b>and</b> oxidises it back to HNO₃.')}
${cy(['Why does conc. HNO₃ appear yellow when left standing in a glass bottle?','It decomposes slightly (light/heat) to give NO₂, which dissolves in the acid and colours it yellow.'],['Name two ways of removing the yellow colour.','Bubbling air (or CO₂) through the warm acid; diluting with water.'])}
${exam('4HNO₃ → 4NO₂ + 2H₂O + O₂: the reddish-brown NO₂ formed dissolves in the acid and makes it yellow. Bubbling air through the warm acid removes it.')}`,

ow:`<h3>Manufacture of nitric acid: Ostwald’s process</h3>
${hook('Ammonia from Haber’s process is the raw material. How do you turn NH₃ into HNO₃ in three steps, and why is ten times as much air as ammonia fed in?')}
${story('Step by step, nitrogen is <b>oxidised</b>: NH₃ → NO → NO₂ → HNO₃. Every step needs oxygen, and air is only about one-fifth oxygen, so lots of air is used.')}
${flow('dry NH₃ (1 vol) + dry air (10 vols)','Ⓐ <b>Catalytic chamber</b><br>Pt gauze, 700–800 °C<br>4NH₃ + 5O₂ → 4NO + 6H₂O + Δ','Ⓑ <b>Heat exchanger + cooling coils</b><br>gases cooled to about 50 °C','Ⓒ <b>Oxidation chamber</b><br>about 50 °C<br>2NO + O₂ → 2NO₂','Ⓓ <b>Absorption tower</b><br>quartz, water spray, ordinary temp.<br>4NO₂ + 2H₂O + O₂ → 4HNO₃','about 50% HNO₃ collects at the base')}
${watch('Ostwald process manufacture of nitric acid')}
<table class="cmp"><tr><th>Step (p.187)</th><th>Chamber</th><th>Equation</th><th>Conditions</th></tr>${tr(
['I','Catalytic chamber','<b>4NH₃ + 5O₂ —Pt→ 4NO + 6H₂O + 21.5 kcal</b> (the book’s figure)','Pure dry NH₃ + dry air, <b>1 : 10</b> by volume · <b>platinum gauze</b> · <b>700–800 °C</b> (800 °C on p.188), heated electrically at the start only · exothermic · about 95% of NH₃ → NO (the rest burns to N₂ and steam)'],
['II','Oxidation chamber','<b>2NO + O₂ → 2NO₂</b>','About <b>50 °C</b>; colourless NO turns <b>reddish brown</b>'],
['III','Absorption tower','<b>4NO₂ + 2H₂O + O₂ → 4HNO₃</b>','<b>Ordinary temperature</b>; water in the presence of <b>excess air</b>'])}</table>
<p><b>Note:</b> the book gives the heat of step I as “21.5 K cals”. The data-book value for 4 mol of NH₃ is much larger (about 216 kcal, or 905 kJ). Learn only that the reaction is <b>exothermic</b>. The book also calls step II “catalytic oxidation” of NO, but no catalyst is used in the oxidation chamber: NO simply combines with the oxygen of the air.</p>
<table class="cmp"><tr><th>Why? (p.188–189)</th><th>Reason</th></tr>${tr(
['Much higher ratio of air (1 : 10)','Air (oxygen) is needed in <b>all three</b> reactions, including the oxidation of NO to NO₂ which needs excess air; and only about 21% (1/5) of air is oxygen'],
['Pt heated only at the start','The reaction is <b>exothermic</b>: the heat given out keeps up the required temperature'],
['Gases cooled to about 50 °C before the oxidation chamber','Low temperature helps the easy oxidation of NO to NO₂ and avoids decomposition of NO₂ at higher temperatures'],
['Absorption tower packed with quartz','Quartz is <b>acid resistant</b>; packed in layers it <b>slows down</b> the rising NO₂ and gives better solution of NO₂ in the water trickling down'],
['Product','Dilute acid, about <b>50%</b>. Distillation concentrates it up to the <b>constant boiling mixture</b> (68%, b.p. 121 °C). Distilling with conc. H₂SO₄ under reduced pressure gives <b>fuming nitric acid</b> (98%)'])}</table>
${trap('The catalyst is <b>platinum gauze</b> (Haber’s process uses iron).','Step I gives <b>NO</b> (nitric oxide), not NO₂ and not N₂.','Ratio NH₃ : air = <b>1 : 10</b> (air is in excess, not ammonia).','The catalysed step is the oxidation of <b>ammonia</b> (step I), at 700–800 °C; NO → NO₂ happens at about 50 °C.')}
${cy(['Name the catalyst in Ostwald’s process.','Platinum gauze.'],['Why is the catalyst heated only at the start?','The catalytic oxidation of NH₃ is exothermic, and its heat keeps the temperature up.'],['Why is quartz used in the absorption tower?','It is acid resistant; packed in layers it slows the gas and helps NO₂ dissolve.'])}
${exam('Ostwald’s process: 4NH₃ + 5O₂ —Pt, 700–800 °C→ 4NO + 6H₂O + Δ; 2NO + O₂ —50 °C→ 2NO₂; 4NO₂ + 2H₂O + O₂ → 4HNO₃.')}`,

in:`<h3>Introduction, occurrence and physical properties</h3>
<p><b>★ Aqua fortis:</b> the old name of nitric acid used by 8th-century alchemists. It means “strong water”, because of its corrosive action on many metals. Glauber (1658) made it by distilling nitre (KNO₃) with conc. H₂SO₄, hence the name “nitric acid”. Cavendish (1784) found its composition.</p>
<p><b>★ Fixation of atmospheric nitrogen:</b> the conversion of free nitrogen of the air into useful nitrogen compounds in the soil (p.183).</p>
<table class="cmp"><tr><th>Occurrence (p.183)</th><th>Equations</th></tr>${tr(
['Free state: lightning','N₂ + O₂ —lightning discharge→ 2NO (nitric oxide)<br>2NO + O₂ → 2NO₂ (nitrogen dioxide)<br>4NO₂ + 2H₂O + O₂ → 4HNO₃ (nitric acid in rain: acid rain)'],
['In the soil','2HNO₃ + CaCO₃ → Ca(NO₃)₂ + H₂O + CO₂ (soluble nitrates)'],
['Combined state','As nitrates: <b>Chile saltpetre NaNO₃</b>; <b>Bengal saltpetre (nitre) KNO₃</b>'])}</table>
<table class="cmp"><tr><th>Property (p.190)</th><th>Nitric acid</th></tr>${tr(
['Colour','Pure acid (98%): colourless · commercial acid (68%): yellowish brown'],
['Odour · taste','Suffocating · sour'],
['Physiological nature','Book: “non-poisonous, highly corrosive” (the vapour and the acid are in fact harmful: treat it as dangerous)'],
['Density','Heavier than water: pure acid sp. gr. 1.54 (book), commercial acid 1.42'],
['Solubility','Highly soluble in water'],
['★ Constant boiling mixture','With water it forms a mixture boiling at <b>121 °C</b> containing <b>68%</b> acid. A constant boiling mixture boils <b>without change in composition</b>: acid and water vapours leave in the same proportion as in the liquid, so dilute HNO₃ cannot be concentrated beyond 68% by boiling'],
['Boiling point · freezing point','Pure acid boils at 86 °C (book) · freezes to a white solid, m.p. −42 °C'],
['Concentrating beyond 68%','Only by distilling under <b>reduced pressure</b> with <b>conc. H₂SO₄</b>: about 98% acid, <b>fuming nitric acid</b>'])}</table>
<p><b>On the skin (p.190):</b> it is extremely corrosive and causes painful blisters; it combines with skin <b>protein</b> to form the yellow compound <b>xanthoproteic acid</b>, so it stains the skin <b>yellow</b>.</p>
<p><b>Note:</b> the book’s pure-acid figures (sp. gr. 1.54, b.p. 86 °C) are a little higher than data-book values (about 1.51 and 83 °C). Use the book’s numbers in the exam.</p>
${trap('Constant boiling mixture: <b>68%</b>, <b>121 °C</b>. Fuming acid: <b>98%</b>.','Yellow stain on the skin = <b>xanthoproteic acid</b> (nitration of protein).','Chile saltpetre is <b>NaNO₃</b>; nitre / Bengal saltpetre is <b>KNO₃</b>.')}
${cy(['What does “aqua fortis” mean?','Strong water.'],['Why can’t dilute HNO₃ be concentrated beyond 68% by boiling?','It forms a constant boiling mixture (121 °C), whose vapour has the same composition as the liquid.'])}`,

ac:`<h3>Acidic properties of dilute nitric acid</h3>
${story('In water, dilute nitric acid is <b>almost completely ionised</b>: every molecule hands one H⁺ to water. Lots of H⁺ = strongly acidic. So dilute HNO₃ behaves like a typical acid with bases, carbonates and sulphites. The one exception is <b>metals</b> (next topics), because it is also an oxidising agent. Conc. HNO₃ is <b>poorly ionised</b>, so its <b>oxidising</b> nature takes over.')}
<p class="eq">HNO₃ + H₂O ⇌ H₃O⁺ + NO₃⁻ &nbsp; [HNO₃ → H⁺ + NO₃⁻ ; H⁺ + H₂O → H₃O⁺]</p>
<p>One H⁺ per molecule: nitric acid is <b>monobasic</b>. The high concentration of H⁺ ions gives it its acidic nature. (The book writes ⇌, but for dilute nitric acid the ionisation is almost complete.)</p>
<table class="cmp"><tr><th>Indicator (p.191)</th><th>Original colour</th><th>With HNO₃</th></tr>${tr(['Moist (blue) litmus','Blue','Red'],['Methyl orange','Orange','Pink'],['Phenolphthalein','Colourless','Colourless'])}</table>
<table class="cmp"><tr><th>Dilute HNO₃ with</th><th>Equation (p.191)</th></tr>${tr(
['Basic oxide','CuO + 2HNO₃ → Cu(NO₃)₂ + H₂O'],
['Alkali / hydroxide','NaOH + HNO₃ → NaNO₃ + H₂O · Fe(OH)₃ + 3HNO₃ → Fe(NO₃)₃ + 3H₂O'],
['Carbonates','CaCO₃ + 2HNO₃ → Ca(NO₃)₂ + H₂O + CO₂ · ZnCO₃ / CuCO₃ likewise · FeCO₃ + 2HNO₃ → Fe(NO₃)₂ + H₂O + CO₂ (book)'],
['Hydrogen carbonate','NaHCO₃ + HNO₃ → NaNO₃ + H₂O + CO₂'],
['Sulphite · bisulphite','CuSO₃ + 2HNO₃ → Cu(NO₃)₂ + H₂O + SO₂ · Ca(HSO₃)₂ + 2HNO₃ → Ca(NO₃)₂ + 2H₂O + 2SO₂'])}</table>
<p><b>Note:</b> the book treats these as simple acid reactions. In practice nitric acid, being an oxidising agent, would also oxidise some Fe²⁺ to Fe³⁺ and some sulphite to sulphate; write the book’s equations in the exam.</p>
${trap('Phenolphthalein stays <b>colourless</b> in an acid; methyl orange turns <b>pink</b>.','Monobasic: <b>one</b> replaceable H per molecule; a nitrate is the normal salt (there are no acid salts of HNO₃).','A neutralisation gives salt + water <b>only</b>: CaO/CuO/NaOH qualify; carbonates and sulphites give a gas too.')}
${cy(['Why is nitric acid called monobasic?','Each molecule gives one H⁺ ion in water.'],['Which gas forms when calcium bisulphite reacts with dilute HNO₃?','Sulphur dioxide.'])}
${exam('HNO₃ + H₂O ⇌ H₃O⁺ + NO₃⁻: dilute nitric acid is almost completely ionised; the high concentration of H⁺ ions makes it strongly acidic, and it gives one H⁺ per molecule (monobasic).')}`,

nm:`<h3>Nitric acid as an oxidising agent: non-metals</h3>
${story('Hot conc. nitric acid falls apart and releases <b>nascent oxygen</b> [O], fresh and very reactive. That oxygen grabs the non-metal and turns it into its highest oxide or oxyacid; the nitric acid itself is <b>reduced</b> to reddish-brown NO₂.')}
<p class="eq">2HNO₃ (hot conc.) → H₂O + 2NO₂ + [O] &nbsp;·&nbsp; 2HNO₃ (moderately conc.) → H₂O + 2NO + 3[O]</p>
<table class="cmp"><tr><th>Non-metal + hot conc. HNO₃ (p.192)</th><th>Equation</th><th>Oxidised product</th></tr>${tr(
['Carbon','<b>C + 4HNO₃ → CO₂ + 2H₂O + 4NO₂</b>','Carbon dioxide'],
['Sulphur','<b>S + 6HNO₃ → H₂SO₄ + 2H₂O + 6NO₂</b>','Sulphuric acid'],
['Phosphorus','<b>P + 5HNO₃ → H₃PO₄ + H₂O + 5NO₂</b> (book) · standard form P₄ + 20HNO₃ → 4H₃PO₄ + 20NO₂ + 4H₂O','Phosphoric acid'])}</table>
${flow('⚫ <b>Carbon</b> + hot conc. HNO₃','[O] oxidises C','CO₂ (acidic gas, turns lime water milky)','+ 🟤 <b>reddish-brown NO₂</b> + water')}
${flow('🟡 <b>Sulphur</b> + hot conc. HNO₃','[O] oxidises S','<b>H₂SO₄</b> (its own acid, non-volatile)','+ 🟤 <b>reddish-brown NO₂</b> + water')}
${flow('<b>Phosphorus</b> + hot conc. HNO₃','[O] oxidises P','<b>H₃PO₄</b>','+ 🟤 <b>reddish-brown NO₂</b> + water')}
${watch('carbon reaction with concentrated nitric acid')} ${watch('sulphur reaction with concentrated nitric acid')}
<p><b>Note:</b> the book writes phosphorus as P (one atom). The standard equation uses P₄; it is the same equation multiplied by 4. Both are balanced.</p>
${trap('Every one of these reactions gives off <b>reddish-brown NO₂</b> (the reduced product).','Sulphur forms <b>its own acid</b> H₂SO₄: volatile nitric acid can be used to prepare non-volatile sulphuric acid.','Count: C needs <b>4</b>, S needs <b>6</b>, P needs <b>5</b> HNO₃, the same as the number of NO₂.')}
${cy(['Which non-metal forms a non-volatile acid with conc. HNO₃?','Sulphur (H₂SO₄).'],['Which acidic gas, turning lime water milky, forms when carbon reacts with conc. HNO₃?','CO₂ (along with NO₂).'])}
${exam('S + 6HNO₃ (hot, conc.) → H₂SO₄ + 2H₂O + 6NO₂: sulphur is oxidised to sulphuric acid and reddish-brown fumes of nitrogen dioxide are evolved.')}`,

mt:`<h3>Nitric acid and metals · passivity · aqua regia</h3>
${hook('Every typical dilute acid gives hydrogen with an active metal. Dilute nitric acid almost never does. Where does the hydrogen go?')}
${story('Nitric acid decomposes to give <b>nascent oxygen</b>, which at once oxidises the hydrogen to <b>water</b>. So you get a <b>reduction product of the acid</b> instead (NO with dilute acid, NO₂ with conc. acid). Only when the acid is so dilute (about 1%, cold) that its oxidising power is almost gone do Mg and Mn give hydrogen.')}
<table class="cmp"><tr><th>Acid (p.192–193)</th><th>Metal</th><th>Equation</th><th>Gas</th></tr>${tr(
['Cold, very dilute (about 1%)','Mg, Mn only','<b>Mg + 2HNO₃ → Mg(NO₃)₂ + H₂</b><br>Mn + 2HNO₃ → Mn(NO₃)₂ + H₂','Hydrogen'],
['Dilute (cold)','Copper','<b>3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 4H₂O + 2NO</b>','<b>Nitric oxide</b>, colourless, turns brown in air (2NO + O₂ → 2NO₂)'],
['Dilute (cold)','Zinc · iron (book)','3Zn + 8HNO₃ → 3Zn(NO₃)₂ + 4H₂O + 2NO<br>3Fe + 8HNO₃ → 3Fe(NO₃)₂ + 4H₂O + 2NO','Nitric oxide'],
['Conc. (hot) [or hot dilute]','Copper','<b>Cu + 4HNO₃ → Cu(NO₃)₂ + 2H₂O + 2NO₂</b>','<b>Reddish-brown NO₂</b>; blue solution'],
['Conc. (hot)','Zinc · iron','Zn + 4HNO₃ → Zn(NO₃)₂ + 2H₂O + 2NO₂<br>Fe + 6HNO₃ → Fe(NO₃)₃ + 3H₂O + 3NO₂','NO₂'])}</table>
<p><b>How Cu + conc. HNO₃ works (p.192):</b> 2HNO₃ → H₂O + 2NO₂ + [O]; Cu + [O] → CuO; CuO + 2HNO₃ → Cu(NO₃)₂ + H₂O. Adding up: Cu + 4HNO₃ → Cu(NO₃)₂ + 2H₂O + 2NO₂. The property that lets HNO₃ react with copper (which is below hydrogen) is its <b>oxidising nature</b>.</p>
${flow('🟠 <b>Copper</b> + conc. HNO₃','[O] oxidises Cu → CuO → Cu(NO₃)₂','🟤 <b>dense reddish-brown NO₂</b>','🔵 <b>blue</b> copper nitrate solution')}
${flow('🟠 <b>Copper</b> + dilute HNO₃ (cold)','3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 4H₂O + 2NO','⚪ <b>colourless NO</b>','meets air: 2NO + O₂ → 🟤 NO₂')}
${watch('copper and concentrated nitric acid reaction')} ${watch('copper dilute nitric acid nitric oxide')}
<p><b>Note (book vs standard chemistry):</b> the book’s equations for Zn and Fe with dilute HNO₃ give NO and iron(II) nitrate. In real practice zinc with dilute nitric acid gives mainly N₂O (or NH₄NO₃ if very dilute), and iron gives iron(III) nitrate (Fe + 4HNO₃ → Fe(NO₃)₃ + NO + 2H₂O). For the exam, write the book’s equations.</p>
<p><b>★ Passivity (p.193):</b> the inertness shown by certain metals under conditions in which chemical activity is expected. <b>Pure conc. or fuming</b> nitric acid renders <b>iron and aluminium passive</b> by forming a <b>thin oxide coating</b> on the surface, which prevents further reaction. If the oxide layer is removed (mechanically or chemically), the metal becomes active again. (The book’s table for hot conc. acid still lists Fe → Fe(NO₃)₃; passivity is for pure conc. / fuming acid.)</p>
<p><b>★ Aqua regia:</b> a mixture of <b>1 part conc. HNO₃ + 3 parts conc. HCl by volume</b>. Nitric acid <b>oxidises</b> hydrochloric acid to chlorine; the nascent chlorine dissolves gold and platinum as soluble higher chlorides.</p>
<p class="eq">HNO₃ + 3HCl → 2H₂O + NOCl (nitrosyl chloride) + 2[Cl] &nbsp;·&nbsp; Au + 3[Cl] → AuCl₃ &nbsp;·&nbsp; Pt + 4[Cl] → PtCl₄</p>
${trap('Dilute HNO₃ + Cu gives <b>NO</b> (colourless); conc. HNO₃ + Cu gives <b>NO₂</b> (reddish brown). Ratios 3 : 8 and 1 : 4.','Only <b>Mg and Mn</b>, only with <b>cold, very dilute (about 1%)</b> acid, give hydrogen.','Passive metals: <b>Fe and Al</b>, due to an <b>oxide layer</b>.','Aqua regia: <b>1</b> HNO₃ : <b>3</b> HCl, by <b>volume</b>; HNO₃ is the oxidising agent.')}
${cy(['Why does dilute HNO₃ not normally give hydrogen with metals?','The nascent oxygen from its decomposition oxidises the hydrogen to water.'],['Which gas forms when copper reacts with cold dilute HNO₃?','Nitric oxide, NO.'],['Why is iron rendered passive by fuming HNO₃?','A thin oxide layer forms on its surface and stops further reaction.'])}
${exam('Cu + 4HNO₃ (conc.) → Cu(NO₃)₂ + 2H₂O + 2NO₂ (reddish-brown fumes, blue solution); 3Cu + 8HNO₃ (dil.) → 3Cu(NO₃)₂ + 4H₂O + 2NO.')}`,

cp:`<h3>Oxidising action on inorganic and organic compounds</h3>
<table class="cmp"><tr><th>Compound + dilute HNO₃ (p.194)</th><th>Equation</th><th>Oxidised product</th></tr>${tr(
['Sulphur dioxide (aq.) [H₂SO₃]','<b>3SO₂ + 2H₂O + 2HNO₃ → 3H₂SO₄ + 2NO</b>','Sulphuric acid'],
['Hydrogen sulphide','<b>3H₂S + 2HNO₃ → 3S + 4H₂O + 2NO</b>','Sulphur (yellow)'],
['Iron(II) sulphate (acidified)','<b>6FeSO₄ + 3H₂SO₄ + 2HNO₃ → 3Fe₂(SO₄)₃ + 4H₂O + 2NO</b>','Iron(III) sulphate'])}</table>
<table class="cmp"><tr><th>Organic compound + hot conc. HNO₃</th><th>Products</th></tr>${tr(
['<b>Oxidation</b>: saw dust [C₆H₁₀O₅]ₙ, turpentine, alcohol','CO₂ + water + NO₂: they <b>burst into flames</b> when hot conc. HNO₃ is poured on them, with brown fumes of NO₂'],
['<b>Nitration</b>: toluene C₇H₈ + 3HNO₃','C₇H₅(NO₂)₃ (<b>TNT</b>, trinitrotoluene) + 3H₂O (in practice conc. H₂SO₄ is also added)'],
['Nitration of protein (skin)','<b>Xanthoproteic acid</b>: stains the skin yellow'])}</table>
<p><b>★ Nitration:</b> replacement of one or more hydrogen atoms of an organic compound by the nitro group (−NO₂), e.g. nitration of toluene and benzene.</p>
${watch('sawdust concentrated nitric acid burst into flames')}
${trap('With dilute HNO₃ the reduced product here is <b>NO</b>; the oxidised products are H₂SO₄, S and Fe₂(SO₄)₃.','Fe²⁺ (green) → Fe³⁺ (yellow-brown): this same reaction starts the brown ring test.')}
${cy(['Name the oxidised product of H₂S with dilute HNO₃.','Sulphur.'],['What happens when hot conc. HNO₃ is poured on saw dust?','It bursts into flames, giving CO₂, water and brown fumes of NO₂.'])}`,

ts:`<h3>Tests for nitric acid and nitrates · the brown ring test</h3>
<table class="cmp"><tr><th>Test (p.195)</th><th>Observation and equation</th></tr>${tr(
['Heat conc. HNO₃','4HNO₃ —Δ→ 2H₂O + 4NO₂ + O₂: <b>reddish-brown fumes</b>'],
['Heat a nitrate (other than K, Na, NH₄)','Metal nitrate → metal oxide (or metal) + NO₂ + O₂: <b>reddish-brown fumes</b>'],
['Heat with copper turnings and conc. HNO₃','Cu + 4HNO₃ —Δ→ Cu(NO₃)₂ + 2H₂O + 2NO₂'],
['Nitrate + copper + conc. H₂SO₄','Cu + 4NaNO₃ + 4H₂SO₄ → 4NaHSO₄ + Cu(NO₃)₂ + 2H₂O + 2NO₂: <b>dense reddish-brown fumes</b>; <b>blue</b> copper nitrate solution remains'],
['Litmus','HNO₃ answers the nitrate tests and also turns blue litmus red'])}</table>
<p><b>Brown ring test (for the nitrate ion, NO₃⁻):</b></p>
${steps('Procedure (p.195)',['Take a solution of a <b>nitrate</b> or <b>dilute nitric acid</b> in a test tube.','Add a <b>freshly prepared</b> saturated solution of <b>iron(II) sulphate</b>.','Add <b>conc. sulphuric acid carefully down the side</b> of the test tube (it mixes with water very exothermically and may spurt).','Cool the test tube under a tap and keep it aside in a stand for a short time.','Observation: a <b>brown ring</b> appears at the <b>junction</b> of the two liquids.'])}
${flow('🧪 Nitrate / dil. HNO₃','+ <b>freshly prepared FeSO₄</b> solution','+ <b>conc. H₂SO₄</b> poured slowly down the side<br>(sinks: heavier)','6FeSO₄ + 3H₂SO₄ + 2HNO₃ → 3Fe₂(SO₄)₃ + 4H₂O + 2NO','FeSO₄ + NO → <b>FeSO₄·NO</b>','🟤 <b>Brown ring</b> at the junction')}
${watch('brown ring test for nitrate')}
<table class="cmp"><tr><th>Why? (p.195)</th><th>Reason</th></tr>${tr(
['Freshly prepared FeSO₄','On standing in air FeSO₄ is oxidised to iron(III) sulphate, which does not give the test'],
['Ring forms at the junction','Conc. H₂SO₄ is <b>heavier</b> and settles at the bottom; the FeSO₄ layer stays above. FeSO₄·NO is unstable and breaks up if it moves down into the acid, so it stays at the junction'],
['Ring decomposes on shaking','Shaking mixes the conc. H₂SO₄ with water; the heat evolved decomposes the unstable brown compound'])}</table>
<p><b>★ Nitroso iron(II) sulphate (nitroso ferrous sulphate), FeSO₄·NO:</b> the brown compound in the brown ring.</p>
${trap('The ring is <b>FeSO₄·NO</b>, nitroso iron(II) sulphate, not Fe₂(SO₄)₃.','FeSO₄ must be <b>freshly prepared</b> (iron(II), not iron(III)).','The conc. H₂SO₄ forms the <b>bottom</b> layer; FeSO₄ solution is on top; the ring is in between.')}
${cy(['Which ion is detected by the brown ring test?','The nitrate ion, NO₃⁻.'],['Name the gas formed when acidified FeSO₄ reacts with dilute HNO₃ in the test.','Nitric oxide, NO.'])}
${exam('A freshly prepared FeSO₄ solution is added to the nitrate solution and conc. H₂SO₄ is poured carefully down the side: a brown ring of nitroso iron(II) sulphate, FeSO₄·NO, forms at the junction of the two liquids.')}`,

us:`<h3>Uses of nitric acid · nitrates and their decomposition</h3>
<table class="cmp"><tr><th>Industrial use (p.196)</th><th>Examples</th></tr>${tr(
['Explosives','Trinitrotoluene (TNT) C₇H₅(NO₂)₃ · trinitrocellulose (book: [C₆H₇O₂(NO₂)₃]ₙ) · trinitroglycerine C₃H₅O₃(NO₂)₃'],
['Nitrates','Potassium nitrate (gunpowder) · ammonium nitrate (fertilisers) · silver nitrate (photography)'],
['Dyes, drugs, perfumes','From coal-tar products; azo dyes from aniline'],
['Synthetic fibres','Artificial silk (cellulose nitrate) · nylon (HNO₃ as oxidising agent)'])}</table>
<table class="cmp"><tr><th>General use</th><th>Why</th></tr>${tr(
['Etching designs on copper and brassware','It dissolves most metals except noble metals'],
['Purification of gold','Impurities (Cu, Ag, Zn, Pb) dissolve in HNO₃; gold is unaffected'],
['Rocket fuels','As the oxidant'],
['Fertilisers','Calcium nitrate, ammonium nitrate, nitro chalk (NH₄NO₃ + CaCO₃)'],
['Aqua regia','Conc. HNO₃ + conc. HCl (1 : 3 by vol.) dissolves noble metals'],
['Preparation of nitrates','KOH + HNO₃ → KNO₃ + H₂O · Pb + 4HNO₃(conc.) → Pb(NO₃)₂ + 2H₂O + 2NO₂ · CuO + 2HNO₃ → Cu(NO₃)₂ + H₂O'])}</table>
<p><b>Note:</b> the book writes trinitrocellulose as [C₆H₇O₂(NO₂)₃]ₙ. Cellulose nitrate is properly [C₆H₇O₂(ONO₂)₃]ₙ (three more O atoms); the nitroglycerine formula C₃H₅O₃(NO₂)₃ is written the correct way.</p>
<table class="cmp"><tr><th>Nitrate heated (p.196)</th><th>Equation</th><th>Observation</th></tr>${tr(
['Alkali metal (K, Na)','<b>2KNO₃ → 2KNO₂ + O₂</b>','Only oxygen (relights a glowing splint); no brown gas'],
['Heavy metal (Ca, Zn, Pb, Cu)','<b>2Pb(NO₃)₂ → 2PbO + O₂ + 4NO₂</b><br><b>2Cu(NO₃)₂ → 2CuO + O₂ + 4NO₂</b><br>2Zn(NO₃)₂ → 2ZnO + O₂ + 4NO₂ · 2Ca(NO₃)₂ → 2CaO + O₂ + 4NO₂','Reddish-brown NO₂ + O₂. PbO residue buff (yellow); CuO residue black (blue crystals turn black); ZnO yellow when hot, white when cold'],
['Silver / mercury(II)','2AgNO₃ → 2Ag + O₂ + 2NO₂ · Hg(NO₃)₂ → Hg + O₂ + 2NO₂','Metal left; NO₂ + O₂'],
['Ammonium nitrate','<b>NH₄NO₃ → N₂O + 2H₂O</b>','Nitrous oxide (laughing gas) + steam; no residue'])}</table>
${trap('Brown gas on heating: nitrates of <b>Ca, Zn, Pb, Cu</b> (and Ag, Hg). <b>Not</b> K or Na nitrate (they give only O₂).','Black residue: <b>copper</b> nitrate (CuO). Metallic residue: <b>silver</b> nitrate. No residue: <b>ammonium</b> nitrate.')}
${cy(['Which nitrate leaves a black residue on heating?','Copper nitrate (CuO).'],['Name the gas from heating KNO₃.','Oxygen.'])}`,

eq:`<h3>Equation bank for chapter 7C</h3>
<p>Balancing tip: in oxidising reactions, first write the products (oxidised product + water + NO or NO₂), then balance N in HNO₃ against the nitrate and the NO/NO₂, and finally fix H and O with water.</p>
<table class="cmp"><tr><th>Reaction</th><th>Balanced equation</th></tr>${tr(
['Lab preparation','KNO₃ + H₂SO₄ —<200 °C→ KHSO₄ + HNO₃ · NaNO₃ + H₂SO₄ → NaHSO₄ + HNO₃ · (>200 °C) NaNO₃ + NaHSO₄ → Na₂SO₄ + HNO₃'],
['Atmospheric N₂','N₂ + O₂ → 2NO · 2NO + O₂ → 2NO₂ · 4NO₂ + 2H₂O + O₂ → 4HNO₃ · 2HNO₃ + CaCO₃ → Ca(NO₃)₂ + H₂O + CO₂'],
['Ostwald','4NH₃ + 5O₂ —Pt, 700–800 °C→ 4NO + 6H₂O · 2NO + O₂ —50 °C→ 2NO₂ · 4NO₂ + 2H₂O + O₂ → 4HNO₃'],
['Decomposition','4HNO₃ → 4NO₂ + 2H₂O + O₂'],
['Non-metals (hot conc.)','C + 4HNO₃ → CO₂ + 2H₂O + 4NO₂ · S + 6HNO₃ → H₂SO₄ + 2H₂O + 6NO₂ · P + 5HNO₃ → H₃PO₄ + H₂O + 5NO₂'],
['Metals','Mg + 2HNO₃ (very dil.) → Mg(NO₃)₂ + H₂ · 3Cu + 8HNO₃ (dil.) → 3Cu(NO₃)₂ + 4H₂O + 2NO · Cu + 4HNO₃ (conc.) → Cu(NO₃)₂ + 2H₂O + 2NO₂'],
['Aqua regia','HNO₃ + 3HCl → 2H₂O + NOCl + 2[Cl] · Au + 3[Cl] → AuCl₃ · Pt + 4[Cl] → PtCl₄'],
['Brown ring','6FeSO₄ + 3H₂SO₄ + 2HNO₃ → 3Fe₂(SO₄)₃ + 4H₂O + 2NO · FeSO₄ + NO → FeSO₄·NO'])}</table>
<p>The acid-property equations are in topic 5 and the nitrate decompositions in topic 10.</p>`
};

/* ---------------- Concepts tab: the chapter in book order ---------------- */
const CHAPTER=[
{id:'s-a',title:'Syllabus & A. Introduction',ref:'p.183',t:['in'],html:`
<p><b>Syllabus (from March 2027):</b> one laboratory method of preparation of nitric acid from potassium nitrate or sodium nitrate (reactants, products, conditions, equations, setting up of apparatus, diagram, precautions, collection and identification); manufacture by Ostwald’s process (only equations with conditions where applicable); nitric acid as an oxidising agent: its reaction with copper, carbon and sulphur; acidic properties of its solution: reaction with magnesium and manganese, oxides, hydroxides, carbonates, hydrogen carbonates, sulphites and hydrogen sulphites; tests for nitric acid.</p>
<p><b>★ Aqua fortis</b> (“strong water”): the alchemists’ name for nitric acid. Glauber (1658) distilled nitre with conc. H₂SO₄; Cavendish (1784) found its composition. <b>Occurrence:</b> free, in rain after lightning (N₂ + O₂ → 2NO → NO₂ → HNO₃); combined, as Chile saltpetre NaNO₃ and Bengal saltpetre KNO₃.</p>`},
{id:'s-b',title:'B1. Laboratory preparation',ref:'p.184–185',t:['pr'],html:()=>CONCEPT.pr},
{id:'s-c',title:'B2. The product: colour of nitric acid',ref:'p.186, 191',t:['st'],html:()=>CONCEPT.st},
{id:'s-d',title:'B3. Manufacture: Ostwald’s process',ref:'p.186–189',t:['ow'],html:()=>CONCEPT.ow},
{id:'s-e',title:'C1. Physical properties',ref:'p.190',t:['in'],html:()=>CONCEPT.in},
{id:'s-f',title:'C2.1 Stability, indicators, ionisation & acidic properties',ref:'p.191',t:['ac'],html:()=>CONCEPT.ac},
{id:'s-g',title:'C2.2 Oxidising nature: non-metals',ref:'p.192',t:['nm'],html:()=>CONCEPT.nm},
{id:'s-h',title:'C2.3 Oxidising nature: metals · passivity · aqua regia',ref:'p.192–193',t:['mt'],html:()=>CONCEPT.mt},
{id:'s-i',title:'C2.4 Oxidising nature: inorganic & organic compounds',ref:'p.194',t:['cp'],html:()=>CONCEPT.cp},
{id:'s-j',title:'D. Tests · brown ring test',ref:'p.195',t:['ts'],html:()=>CONCEPT.ts},
{id:'s-k',title:'E. Uses · nitrates',ref:'p.196',t:['us'],html:()=>CONCEPT.us},
{id:'s-l',title:'Summary of equations',ref:'p.197–198',t:['eq'],html:()=>CONCEPT.eq}
].map(s=>({...s,html:typeof s.html==='function'?s.html():s.html}));
const TOPIC_SEC={pr:'s-b',st:'s-c',ow:'s-d',in:'s-e',ac:'s-f',nm:'s-g',mt:'s-h',cp:'s-i',ts:'s-j',us:'s-k',eq:'s-l'};

const AR=['Both A and R are true, and R is the correct explanation of A','Both A and R are true, but R is not the correct explanation of A','A is true but R is false','A is false but R is true'];
const NO2W=['nitrogen dioxide','no2','nitrogen dioxide no2','nitrogen peroxide','nitrogen iv oxide','nitrogeniv oxide'];
const NOW=['nitric oxide','no','nitrogen monoxide','nitric oxide no','nitrogen ii oxide','nitrogenii oxide'];

/* ---------------- Questions ---------------- */
const Q=[
/* ===== Equation worksheet p.197–198 (items 1–34) ===== */
{id:'ws1',t:'eq',src:'p.197 · Worksheet 1',ref:'p.184',type:'open',q:'Laboratory preparation: complete and balance. KNO₃ + H₂SO₄ —[below 200 °C]→',
 hint:'Below 200 °C only the acid salt forms.',model:'KNO₃ + H₂SO₄ → KHSO₄ + HNO₃<br>Conc. H₂SO₄ (non-volatile) displaces the volatile HNO₃; the acid salt potassium bisulphate is left in the retort.'},
{id:'ws2',t:'eq',src:'p.197 · Worksheet 2',ref:'p.184–185',type:'open',q:'Complete and balance: NaNO₃ + H₂SO₄ —[below 200 °C]→ … and [NaNO₃ + NaHSO₄ —above 200 °C→ …]',
 hint:'Acid salt below 200 °C; normal salt above.',model:'NaNO₃ + H₂SO₄ → NaHSO₄ + HNO₃ (below 200 °C)<br>[NaNO₃ + NaHSO₄ → Na₂SO₄ + HNO₃ (above 200 °C): avoided, because the hard Na₂SO₄ crust sticks to the glass, and the acid decomposes]'},
{id:'ws3',t:'eq',src:'p.197 · Worksheet 3',ref:'p.183',type:'open',q:'Fixation of atmospheric nitrogen: complete and balance. N₂ + O₂ —[lightning discharge]→',
 hint:'Nitric oxide.',model:'N₂ + O₂ → 2NO<br>The high temperature of the lightning makes nitrogen combine with oxygen.'},
{id:'ws4',t:'eq',src:'p.197 · Worksheet 4',ref:'p.183',type:'open',q:'Complete and balance: NO + O₂ →',
 hint:'NO is oxidised further by air.',model:'2NO + O₂ → 2NO₂ (colourless NO → reddish-brown NO₂)'},
{id:'ws5',t:'eq',src:'p.197 · Worksheet 5',ref:'p.183',type:'open',q:'Complete and balance: NO₂ + H₂O + O₂ → … and [HNO₃ + CaCO₃ → …]',
 hint:'Acid rain, then soluble nitrates in the soil.',model:'4NO₂ + 2H₂O + O₂ → 4HNO₃ (nitric acid in rain)<br>[2HNO₃ + CaCO₃ → Ca(NO₃)₂ + H₂O + CO₂: soluble calcium nitrate in the soil]'},
{id:'ws6',t:'eq',src:'p.197 · Worksheet 6',ref:'p.187',type:'open',q:'Ostwald’s process step I: complete and balance, with conditions. NH₃ + O₂ —[catalyst, temp.]→',
 hint:'Platinum gauze; 4 : 5.',model:'4NH₃ + 5O₂ —Pt, 700–800 °C→ 4NO + 6H₂O + Δ (book: + 21.5 kcal)<br>Catalytic oxidation of ammonia; exothermic, so the Pt is heated only at the start. (The book’s 21.5 kcal is far below the data-book value of about 216 kcal (905 kJ); just remember “exothermic”.)'},
{id:'ws7',t:'eq',src:'p.197 · Worksheet 7',ref:'p.187',type:'open',q:'Ostwald’s process step II: complete and balance, with condition. NO + O₂ →',
 hint:'Oxidation chamber, about 50 °C.',model:'2NO + O₂ —about 50 °C→ 2NO₂<br>Low temperature favours oxidation of NO and avoids decomposition of NO₂.'},
{id:'ws8',t:'eq',src:'p.197 · Worksheet 8',ref:'p.187',type:'open',q:'Ostwald’s process step III: complete and balance. NO₂ + H₂O + O₂ →',
 hint:'Absorption tower, excess air.',model:'4NO₂ + 2H₂O + O₂ → 4HNO₃ (ordinary temperature, excess air)'},
{id:'ws9',t:'eq',src:'p.197 · Worksheet 9',ref:'p.186, 191',type:'open',q:'Decomposition of nitric acid: complete and balance. HNO₃ —[heat or sunlight]→',
 hint:'Three products: a coloured gas, water, a colourless gas.',model:'4HNO₃ → 4NO₂ + 2H₂O + O₂<br>The NO₂ dissolves in the acid and makes it yellow.'},
{id:'ws10',t:'eq',src:'p.197 · Worksheet 10',ref:'p.191',type:'open',q:'Dissociation of nitric acid in water: write the equation(s).',
 hint:'Hydronium ion.',model:'HNO₃ + H₂O ⇌ H₃O⁺ + NO₃⁻<br>[HNO₃ ⇌ H⁺ + NO₃⁻ ; H⁺ + H₂O ⇌ H₃O⁺]<br>One H⁺ per molecule: monobasic. (The book uses ⇌, although dilute HNO₃ is almost completely ionised.)'},
{id:'ws11',t:'eq',src:'p.197 · Worksheet 11',ref:'p.191',type:'open',q:'Reaction with an alkali: complete and balance. NaOH + HNO₃ →',
 hint:'Neutralisation.',model:'NaOH + HNO₃ → NaNO₃ + H₂O'},
{id:'ws12',t:'eq',src:'p.197 · Worksheet 12',ref:'p.191',type:'open',q:'Reaction with a hydroxide: complete and balance. Mg(OH)₂ + HNO₃ →',
 hint:'Two OH, so two HNO₃.',model:'Mg(OH)₂ + 2HNO₃ → Mg(NO₃)₂ + 2H₂O'},
{id:'ws13',t:'eq',src:'p.197 · Worksheet 13',ref:'p.191',type:'open',q:'Reaction with a carbonate: complete and balance. PbCO₃ + HNO₃ →',
 hint:'Salt + water + CO₂.',model:'PbCO₃ + 2HNO₃ → Pb(NO₃)₂ + H₂O + CO₂ (lead nitrate is soluble, so the reaction goes on)'},
{id:'ws14',t:'eq',src:'p.197 · Worksheet 14',ref:'p.191',type:'open',q:'Reaction with a bicarbonate: complete and balance. Ca(HCO₃)₂ + HNO₃ →',
 hint:'Two HCO₃ groups.',model:'Ca(HCO₃)₂ + 2HNO₃ → Ca(NO₃)₂ + 2H₂O + 2CO₂'},
{id:'ws15',t:'eq',src:'p.197 · Worksheet 15',ref:'p.191',type:'open',q:'Reaction with a sulphite: complete and balance. K₂SO₃ + HNO₃ →',
 hint:'Salt + water + SO₂.',model:'K₂SO₃ + 2HNO₃ → 2KNO₃ + H₂O + SO₂ (book’s simple acid reaction)'},
{id:'ws16',t:'eq',src:'p.197 · Worksheet 16',ref:'p.191',type:'open',q:'Reaction with a bisulphite: complete and balance. Ca(HSO₃)₂ + HNO₃ →',
 hint:'Two HSO₃ groups.',model:'Ca(HSO₃)₂ + 2HNO₃ → Ca(NO₃)₂ + 2H₂O + 2SO₂'},
{id:'ws17',t:'eq',src:'p.198 · Worksheet 17',ref:'p.192',type:'open',q:'Oxidising nature, non-metal (conc. acid): complete and balance. C + HNO₃ →',
 hint:'Two acidic gases and water.',model:'C + 4HNO₃ → CO₂ + 2H₂O + 4NO₂ (reddish-brown fumes)'},
{id:'ws18',t:'eq',src:'p.198 · Worksheet 18',ref:'p.192',type:'open',q:'Complete and balance: S + HNO₃ (conc.) →',
 hint:'Sulphur forms its own acid.',model:'S + 6HNO₃ → H₂SO₄ + 2H₂O + 6NO₂'},
{id:'ws19',t:'eq',src:'p.198 · Worksheet 19',ref:'p.192',type:'open',q:'Complete and balance: P + HNO₃ (conc.) →',
 hint:'Phosphoric acid.',model:'P + 5HNO₃ → H₃PO₄ + H₂O + 5NO₂<br>Note: the book writes P; the standard form is P₄ + 20HNO₃ → 4H₃PO₄ + 20NO₂ + 4H₂O (same equation ×4).'},
{id:'ws20',t:'eq',src:'p.198 · Worksheet 20',ref:'p.192',type:'open',q:'Metal with cold, very dilute (below 1%) acid: complete and balance. Mg + HNO₃ →',
 hint:'One of the two exceptions that give hydrogen.',model:'Mg + 2HNO₃ → Mg(NO₃)₂ + H₂<br>Very dilute acid has almost no oxidising power, so the H₂ is not oxidised to water.'},
{id:'ws21',t:'eq',src:'p.198 · Worksheet 21',ref:'p.192',type:'open',q:'Complete and balance (cold, very dilute acid): Mn + HNO₃ →',
 hint:'Same as magnesium.',model:'Mn + 2HNO₃ → Mn(NO₃)₂ + H₂'},
{id:'ws22',t:'eq',src:'p.198 · Worksheet 22',ref:'p.193',type:'open',q:'Metal with dilute acid: complete and balance. Cu + HNO₃ (dil.) →',
 hint:'3 : 8 · nitric oxide.',model:'3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 4H₂O + 2NO<br>Colourless NO, which turns brown in air.'},
{id:'ws23',t:'eq',src:'p.198 · Worksheet 23',ref:'p.193',type:'open',q:'Complete and balance: Zn + HNO₃ (dil.) →',
 hint:'Book: same pattern as copper.',model:'3Zn + 8HNO₃ → 3Zn(NO₃)₂ + 4H₂O + 2NO (book)<br>Note: the book’s version. In practice zinc with dilute HNO₃ mainly gives N₂O (or NH₄NO₃ when very dilute).'},
{id:'ws24',t:'eq',src:'p.198 · Worksheet 24',ref:'p.193',type:'open',q:'Complete and balance: Fe + HNO₃ (dil.) →',
 hint:'Book: same pattern as copper.',model:'3Fe + 8HNO₃ → 3Fe(NO₃)₂ + 4H₂O + 2NO (book)<br>Note: the book’s version. Standard chemistry gives iron(III) nitrate: Fe + 4HNO₃ → Fe(NO₃)₃ + NO + 2H₂O.'},
{id:'ws25',t:'eq',src:'p.198 · Worksheet 25',ref:'p.193',type:'open',q:'Metal with conc. acid (or hot dilute): complete and balance. Cu + HNO₃ (conc.) →',
 hint:'1 : 4 · nitrogen dioxide.',model:'Cu + 4HNO₃ → Cu(NO₃)₂ + 2H₂O + 2NO₂ (reddish-brown fumes, blue solution)'},
{id:'ws26',t:'eq',src:'p.198 · Worksheet 26',ref:'p.193',type:'open',q:'Complete and balance: Zn + HNO₃ (conc.) →',
 hint:'Same as copper.',model:'Zn + 4HNO₃ → Zn(NO₃)₂ + 2H₂O + 2NO₂'},
{id:'ws27',t:'eq',src:'p.198 · Worksheet 27',ref:'p.193',type:'open',q:'Complete and balance: Fe + HNO₃ (conc., hot) →',
 hint:'Iron(III) nitrate; 1 : 6.',model:'Fe + 6HNO₃ → Fe(NO₃)₃ + 3H₂O + 3NO₂<br>Note: pure conc. or fuming acid makes iron passive (oxide layer); the book gives this equation for hot conc. acid.'},
{id:'ws28',t:'eq',src:'p.198 · Worksheet 28',ref:'p.193',type:'open',q:'Aqua regia: complete. HNO₃ + HCl → … ; Au + [Cl] → … ; Pt + [Cl] → …',
 hint:'HNO₃ oxidises HCl to nascent chlorine.',model:'HNO₃ + 3HCl → 2H₂O + NOCl + 2[Cl]<br>Au + 3[Cl] → AuCl₃<br>Pt + 4[Cl] → PtCl₄'},
{id:'ws29',t:'eq',src:'p.198 · Worksheet 29',ref:'p.194',type:'open',q:'Inorganic compound with dilute acid: complete and balance. SO₂ + H₂O + HNO₃ →',
 hint:'Sulphurous acid is oxidised to sulphuric acid.',model:'3SO₂ + 2H₂O + 2HNO₃ → 3H₂SO₄ + 2NO'},
{id:'ws30',t:'eq',src:'p.198 · Worksheet 30',ref:'p.194',type:'open',q:'Complete and balance: H₂S + HNO₃ (dil.) →',
 hint:'Yellow sulphur.',model:'3H₂S + 2HNO₃ → 3S + 4H₂O + 2NO'},
{id:'ws31',t:'eq',src:'p.198 · Worksheet 31',ref:'p.194',type:'open',q:'Complete and balance: FeSO₄ + H₂SO₄ + HNO₃ (dil.) →',
 hint:'Iron(II) → iron(III).',model:'6FeSO₄ + 3H₂SO₄ + 2HNO₃ → 3Fe₂(SO₄)₃ + 4H₂O + 2NO'},
{id:'ws32',t:'eq',src:'p.198 · Worksheet 32',ref:'p.195',type:'open',q:'Test for nitric acid: action of heat. HNO₃ —Δ→',
 hint:'Reddish-brown fumes.',model:'4HNO₃ → 2H₂O + 4NO₂ + O₂'},
{id:'ws33',t:'eq',src:'p.198 · Worksheet 33',ref:'p.195',type:'open',q:'Test for nitric acid: heat on copper and conc. HNO₃. Complete and balance, and state the observation.',
 hint:'1 : 4.',model:'Cu + 4HNO₃ → Cu(NO₃)₂ + 2H₂O + 2NO₂<br>Dense reddish-brown fumes; blue solution of copper nitrate.'},
{id:'ws34',t:'eq',src:'p.198 · Worksheet 34',ref:'p.195',type:'open',q:'Brown ring test: give both equations.',
 hint:'First NO forms, then it joins FeSO₄.',model:'6FeSO₄ + 3H₂SO₄ + 2HNO₃ → 3Fe₂(SO₄)₃ + 4H₂O + 2NO<br>FeSO₄ + NO → FeSO₄·NO (nitroso iron(II) sulphate: the brown ring)'},
/* ===== Previous ICSE questions 2010–2019 (p.199) ===== */
{id:'y10-1',t:'ts',src:'p.199 · 2010 Q1',ref:'p.195',type:'mcq',q:'From the list, choose the compound responsible for the brown ring in the brown ring test for the nitrate ion.',
 opts:['A nitroso iron(II) sulphate','B iron(III) chloride','C chromium sulphate','D lead(II) chloride','E sodium chloride'],ans:0,
 hint:'FeSO₄ + NO → ?',exp:'FeSO₄·NO, nitroso iron(II) sulphate, forms at the junction of the two liquids.'},
{id:'y10-2',t:'us',src:'p.199 · 2010 Q2',ref:'p.196, 195',type:'open',q:'A blue crystalline solid X, on heating, gives a gas that relights a glowing splint, a reddish-brown gas Y and a black residue. Identify X and Y and write the equation.',
 hint:'Blue crystals → black residue.',model:'X = copper nitrate, Cu(NO₃)₂; Y = nitrogen dioxide, NO₂.<br>2Cu(NO₃)₂ → 2CuO (black) + 4NO₂ + O₂ (O₂ relights a glowing splint).'},
{id:'y11-1',t:'ow',src:'p.199 · 2011 Q1',ref:'p.187',type:'mcq',q:'From the list, choose the catalyst used in Ostwald’s process.',
 opts:['acetylene','aqua fortis','coke','brass','barium chloride','bronze','platinum'],ans:6,
 hint:'Gauze catalyst at 700–800 °C.',exp:'Platinum gauze catalyses 4NH₃ + 5O₂ → 4NO + 6H₂O. (Aqua fortis is nitric acid itself.)'},
{id:'y11-2',t:'ts',src:'p.199 · 2011 Q2',ref:'p.195',type:'open',q:'State your observation when copper is heated with conc. nitric acid in a hard glass test tube.',
 hint:'Gas colour and solution colour.',model:'Dense reddish-brown fumes of NO₂ are evolved and a blue solution of copper nitrate forms.<br>Cu + 4HNO₃ → Cu(NO₃)₂ + 2H₂O + 2NO₂'},
{id:'y11-3',t:'ts',src:'p.199 · 2011 Q3',ref:'p.195',type:'mcq',q:'The brown ring test is used for the detection of:',
 opts:['A CO₃²⁻','B NO₃⁻','C SO₃²⁻','D Cl⁻'],ans:1,
 hint:'Ring of FeSO₄·NO.',exp:'The nitrate ion: it is reduced to NO, which forms FeSO₄·NO.'},
{id:'y11-4i',t:'pr',src:'p.199 · 2011 Q4(i)',ref:'p.185',type:'open',q:'In the laboratory preparation of nitric acid, state the special feature of the apparatus used.',
 hint:'No rubber, no cork.',model:'The apparatus is made completely of glass (glass retort and receiver), because nitric acid vapours are corrosive and attack rubber and cork.'},
{id:'y11-4ii',t:'pr',src:'p.199 · 2011 Q4(ii)',ref:'p.185',type:'open',q:'Why is the temperature of the reaction mixture of nitric acid not allowed to rise above 200 °C?',
 hint:'Three reasons: glass, the acid, the crust.',model:'Above 200 °C the glass apparatus may be damaged; nitric acid decomposes further; and a hard crust of the normal salt (Na₂SO₄/K₂SO₄) forms (NaNO₃ + NaHSO₄ → Na₂SO₄ + HNO₃), which sticks to the glass, conducts heat poorly and is hard to remove.'},
{id:'y11-5',t:'ac',src:'p.199 · 2011 Q5',ref:'p.191',type:'open',q:'Write the equation for the reaction of ferric hydroxide with nitric acid.',
 hint:'Three OH groups.',model:'Fe(OH)₃ + 3HNO₃ → Fe(NO₃)₃ + 3H₂O (neutralisation)'},
{id:'y12-1',t:'mt',src:'p.199 · 2012 Q1',ref:'p.193',type:'word',q:'Name the gas produced when copper reacts with concentrated nitric acid.',
 accept:NO2W,ansText:'Nitrogen dioxide (NO₂)',hint:'Reddish brown.',exp:'Cu + 4HNO₃ → Cu(NO₃)₂ + 2H₂O + 2NO₂.'},
{id:'y12-2',t:'us',src:'p.199 · 2012 Q2',ref:'p.196',type:'open',q:'State your observation when zinc nitrate crystals are strongly heated.',
 hint:'Like lead nitrate.',model:'Reddish-brown fumes of NO₂ and a colourless gas (O₂) that relights a glowing splint; the residue (ZnO) is yellow when hot and white when cold.<br>2Zn(NO₃)₂ → 2ZnO + 4NO₂ + O₂'},
{id:'y12-3',t:'mt',src:'p.199 · 2012 Q3',ref:'p.192',type:'fill',q:'Correct the statement by adding a word: “Magnesium reacts with {0} nitric acid to liberate hydrogen gas.”',
 blanks:[{o:['very dilute (cold, about 1%)','concentrated','hot concentrated','fuming'],a:0}],
 hint:'When is the oxidising action almost absent?',exp:'Only cold, very dilute (about 1%) HNO₃ gives H₂ with Mg (and Mn): Mg + 2HNO₃ → Mg(NO₃)₂ + H₂.'},
{id:'y12-4',t:'mt',src:'p.199 · 2012 Q4',ref:'p.193',type:'open',q:'Give a reason: iron is rendered passive with fuming nitric acid.',
 hint:'A coating.',model:'Fuming nitric acid forms a thin, protective oxide layer on the surface of iron, which stops further reaction. Removing the layer makes the iron active again.'},
{id:'y12-5',t:'ac',src:'p.199 · 2012 Q5',ref:'p.191',type:'open',q:'Write the equation: dilute nitric acid and copper carbonate.',
 hint:'Salt + water + CO₂.',model:'CuCO₃ + 2HNO₃ → Cu(NO₃)₂ + H₂O + CO₂'},
{id:'y13-1i',t:'nm',src:'p.199 · 2013 Q1(i)',ref:'p.192',type:'word',q:'Name the gas evolved when sulphur is treated with concentrated nitric acid.',
 accept:NO2W,ansText:'Nitrogen dioxide (NO₂)',hint:'Reduction product of the conc. acid.',exp:'S + 6HNO₃ → H₂SO₄ + 2H₂O + 6NO₂.'},
{id:'y13-1ii',t:'us',src:'p.199 · 2013 Q1(ii)',ref:'p.196',type:'word',q:'Name the gas evolved when potassium nitrate crystals are heated.',
 accept:['oxygen','o2','oxygen gas'],ansText:'Oxygen (O₂)',hint:'Alkali-metal nitrate.',exp:'2KNO₃ → 2KNO₂ + O₂ (no brown gas).'},
{id:'y13-2',t:'us',src:'p.199 · 2013 Q2',ref:'p.196',type:'open',q:'State two observations when lead nitrate is heated in a hard glass test tube.',
 hint:'Gas and residue.',model:'(1) Reddish-brown fumes of NO₂ (with O₂, which relights a glowing splint). (2) A buff/yellow residue of lead monoxide (the crystals crackle).<br>2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂'},
{id:'y13-3',t:'nm',src:'p.199 · 2013 Q3',ref:'p.192',type:'open',q:'Write the equation: carbon reacts with concentrated nitric acid.',
 hint:'1 : 4.',model:'C + 4HNO₃ → CO₂ + 2H₂O + 4NO₂'},
{id:'y14-1',t:'mt',src:'p.199 · 2014 Q1',ref:'p.193',type:'fill',q:'Choose the correct answer: cold, dilute nitric acid reacts with copper to give {0}.',
 blanks:[{o:['hydrogen','nitrogen dioxide','nitric oxide'],a:2}],
 hint:'Dilute → NO.',exp:'3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 4H₂O + 2NO.'},
{id:'y14-2i',t:'pr',src:'p.199 · 2014 Q2(i)',ref:'p.184',type:'open',q:'Write the equation for the laboratory preparation of nitric acid from potassium nitrate and conc. sulphuric acid.',
 hint:'Below 200 °C; acid salt.',model:'KNO₃ + H₂SO₄ —below 200 °C→ KHSO₄ + HNO₃'},
{id:'y14-2ii',t:'ts',src:'p.199 · 2014 Q2(ii)',ref:'p.193',type:'open',q:'Write the equation for the action of heat on a mixture of copper and conc. nitric acid.',
 hint:'1 : 4.',model:'Cu + 4HNO₃ → Cu(NO₃)₂ + 2H₂O + 2NO₂'},
{id:'y15-1',t:'us',src:'p.199 · 2015 Q1',ref:'p.196',type:'open',q:'State your observation when crystals of copper nitrate are heated in a test tube.',
 hint:'Colour change of the solid; gas colour.',model:'The blue crystals leave a black residue (CuO); reddish-brown fumes of NO₂ and a gas (O₂) that relights a glowing splint are given off.<br>2Cu(NO₃)₂ → 2CuO + 4NO₂ + O₂'},
{id:'y15-2',t:'ow',src:'p.199 · 2015 Q2',ref:'p.187',type:'word',q:'Name the acid prepared by the catalytic oxidation of ammonia.',
 accept:['nitric acid','hno3','nitric'],ansText:'Nitric acid',hint:'Ostwald’s process.',exp:'NH₃ → NO → NO₂ → HNO₃.'},
{id:'y15-3i',t:'mt',src:'p.199 · 2015 Q3(i)',ref:'p.192',type:'open',q:'Give a reason: dilute nitric acid is generally considered a typical acid, but not so in its reaction with metals.',
 hint:'What happens to the hydrogen?',model:'With metals it does not give hydrogen: the nascent oxygen from its decomposition oxidises the H₂ to water, and an oxide of nitrogen (e.g. NO) forms instead. (Only Mg and Mn give H₂, with cold, very dilute acid.)'},
{id:'y15-3ii',t:'st',src:'p.199 · 2015 Q3(ii)',ref:'p.191',type:'open',q:'Give a reason: concentrated nitric acid appears yellow when it is left standing in a glass bottle.',
 hint:'Decomposition.',model:'It decomposes slightly in light at room temperature: 4HNO₃ → 4NO₂ + 2H₂O + O₂. The reddish-brown NO₂ dissolves in the acid and makes it yellow.'},
{id:'y15-3iii',t:'pr',src:'p.199 · 2015 Q3(iii)',ref:'p.185',type:'open',q:'Give a reason: an all-glass apparatus is used in the laboratory preparation of nitric acid.',
 hint:'Corrosive vapours.',model:'Nitric acid vapours are highly corrosive and attack rubber and cork, so no rubber or cork stoppers or tubes are used.'},
{id:'y15-4',t:'us',src:'p.199 · 2015 Q4',ref:'p.196',type:'mcq',q:'From the list, choose the salt that gives a brown gas on heating.',
 opts:['AgCl','MgCl₂','NaHSO₄','PbCO₃','ZnCO₃','KNO₃','Ca(NO₃)₂'],ans:6,
 hint:'A nitrate, but not an alkali-metal nitrate.',exp:'2Ca(NO₃)₂ → 2CaO + 4NO₂ + O₂. KNO₃ gives only O₂.'},
{id:'y16-1',t:'mt',src:'p.199 · 2016 Q1',ref:'p.193',type:'open',q:'Write the balanced equation for the action of hot concentrated nitric acid on copper.',
 hint:'1 : 4.',model:'Cu + 4HNO₃ → Cu(NO₃)₂ + 2H₂O + 2NO₂'},
{id:'y16-2i',t:'mt',src:'p.199 · 2016 Q2(i)',ref:'p.193',type:'fill',q:'Choose from sulphur dioxide, nitrogen dioxide, nitric oxide, sulphuric acid: cold, dilute nitric acid reacts with copper to form {0}.',
 blanks:[{o:['sulphur dioxide','nitrogen dioxide','nitric oxide','sulphuric acid'],a:2}],
 hint:'Dilute acid.',exp:'3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 4H₂O + 2NO.'},
{id:'y16-2ii',t:'nm',src:'p.199 · 2016 Q2(ii)',ref:'p.192',type:'fill',q:'Choose from sulphur dioxide, nitrogen dioxide, nitric oxide, sulphuric acid: hot, concentrated nitric acid reacts with sulphur to form {0}.',
 blanks:[{o:['sulphur dioxide','nitrogen dioxide','nitric oxide','sulphuric acid'],a:3}],
 hint:'The oxidised product.',exp:'S + 6HNO₃ → H₂SO₄ + 2H₂O + 6NO₂ (NO₂ also forms, but the sulphur is converted to sulphuric acid).'},
{id:'y17-1i',t:'mt',src:'p.199 · 2017 Q1(i)',ref:'p.193',type:'open',q:'Write the balanced equation: cold, dilute nitric acid and copper.',
 hint:'3 : 8.',model:'3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 4H₂O + 2NO'},
{id:'y17-1ii',t:'nm',src:'p.199 · 2017 Q1(ii)',ref:'p.192',type:'open',q:'Write the balanced equation: concentrated nitric acid and sulphur.',
 hint:'1 : 6.',model:'S + 6HNO₃ → H₂SO₄ + 2H₂O + 6NO₂'},
{id:'y17-1iii',t:'pr',src:'p.199 · 2017 Q1(iii)',ref:'p.184',type:'open',q:'Write the balanced equation for the laboratory preparation of nitric acid.',
 hint:'Nitre + conc. H₂SO₄.',model:'KNO₃ + H₂SO₄ —below 200 °C→ KHSO₄ + HNO₃ (or NaNO₃ + H₂SO₄ → NaHSO₄ + HNO₃)'},
{id:'y18-1i',t:'nm',src:'p.199 · 2018 Q1(i)',ref:'p.192',type:'word',q:'Name the gas evolved when sulphur is oxidised by concentrated nitric acid.',
 accept:NO2W,ansText:'Nitrogen dioxide (NO₂)',hint:'Reddish brown.',exp:'S + 6HNO₃ → H₂SO₄ + 2H₂O + 6NO₂.'},
{id:'y18-1ii',t:'mt',src:'p.199 · 2018 Q1(ii)',ref:'p.193',type:'word',q:'Name the gas evolved when cold, dilute nitric acid reacts with copper.',
 accept:NOW,ansText:'Nitric oxide (NO)',hint:'Colourless; turns brown in air.',exp:'3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 4H₂O + 2NO.'},
{id:'y18-2',t:'pr',src:'p.199 · 2018 Q2',ref:'p.184, 185',type:'word',q:'Name the type of salt formed during the laboratory preparation of nitric acid.',
 accept:['acid salt','an acid salt','acidic salt','bisulphate','hydrogen sulphate','potassium bisulphate','sodium bisulphate','potassium hydrogen sulphate','sodium hydrogen sulphate','khso4','nahso4'],ansText:'Acid salt (KHSO₄ / NaHSO₄)',hint:'Only half the hydrogen of H₂SO₄ is replaced.',exp:'KNO₃ + H₂SO₄ → KHSO₄ + HNO₃: potassium bisulphate is an acid salt.'},
{id:'y18-3',t:'pr',src:'p.199 · 2018 Q3',ref:'p.185',type:'open',q:'State a reason why an all-glass apparatus is used in the laboratory preparation of nitric acid.',
 hint:'Rubber and cork.',model:'Nitric acid vapours are corrosive and attack rubber, cork, etc., so only glass is used.'},
{id:'y19-1',t:'nm',src:'p.199 · 2019 Q1',ref:'p.192',type:'open',q:'State your observation when concentrated nitric acid is added to sulphur and heated.',
 hint:'Gas colour.',model:'Reddish-brown fumes of nitrogen dioxide are evolved (the sulphur is oxidised to sulphuric acid).<br>S + 6HNO₃ → H₂SO₄ + 2H₂O + 6NO₂'},
{id:'y19-2i',t:'nm',src:'p.199 · 2019 Q2(i)',ref:'p.192',type:'open',q:'Complete and balance: S + conc. HNO₃ →',
 hint:'1 : 6.',model:'S + 6HNO₃ → H₂SO₄ + 2H₂O + 6NO₂'},
{id:'y19-2ii',t:'mt',src:'p.199 · 2019 Q2(ii)',ref:'p.193',type:'open',q:'Complete and balance: Cu + dil. HNO₃ →',
 hint:'3 : 8.',model:'3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 4H₂O + 2NO'},
{id:'y19-3',t:'mt',src:'p.199 · 2019 Q3',ref:'p.193',type:'word',q:'Name the dilute acid which is an oxidising agent.',
 accept:['nitric acid','dilute nitric acid','hno3','nitric','dil nitric acid'],ansText:'Nitric acid',hint:'It oxidises copper even when dilute.',exp:'Dilute HNO₃ oxidises copper: 3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 4H₂O + 2NO.'},
/* ===== Previous ICSE questions 2020–2025 (p.200) ===== */
{id:'y20-1',t:'mt',src:'p.200 · 2020 Q1',ref:'p.193',type:'open',q:'State your observation when concentrated nitric acid is added to copper.',
 hint:'Gas and solution.',model:'The copper dissolves with brisk effervescence, giving dense reddish-brown fumes of NO₂ and a blue (greenish-blue) solution of copper nitrate.<br>Cu + 4HNO₃ → Cu(NO₃)₂ + 2H₂O + 2NO₂'},
{id:'y20-2',t:'nm',src:'p.200 · 2020 Q2',ref:'p.192',type:'open',q:'Write the balanced equation: carbon powder is heated with concentrated nitric acid.',
 hint:'1 : 4.',model:'C + 4HNO₃ → CO₂ + 2H₂O + 4NO₂'},
{id:'y20-3',t:'st',src:'p.200 · 2020 Q3',ref:'p.191',type:'open',q:'Give a reason: concentrated nitric acid appears yellow when it is left standing in a glass bottle.',
 hint:'Dissolved gas.',model:'Nitric acid decomposes in light or heat: 4HNO₃ → 4NO₂ + 2H₂O + O₂. The reddish-brown NO₂ dissolves in the acid and colours it yellow.'},
{id:'y20-4',t:'mt',src:'p.200 · 2020 Q4',ref:'p.193',type:'mcq',q:'Match the gas nitric oxide with its property:',
 opts:['A Turns acidified K₂Cr₂O₇ green','B Turns lime water milky','C Turns reddish brown when it reacts with oxygen','D Turns moist lead acetate paper silvery black'],ans:2,
 hint:'2NO + O₂ → ?',exp:'2NO + O₂ → 2NO₂ (reddish brown). A is SO₂, B is CO₂ (or SO₂), D is H₂S.'},
{id:'y21-1',t:'ac',src:'p.200 · 2021-22 Q1',ref:'p.191',type:'mcq',q:'The gas evolved when calcium bisulphite reacts with dilute nitric acid:',
 opts:['A SO₃','B H₂','C SO₂','D H₂S'],ans:2,
 hint:'Bisulphite + acid.',exp:'Ca(HSO₃)₂ + 2HNO₃ → Ca(NO₃)₂ + 2H₂O + 2SO₂.'},
{id:'y21-2',t:'nm',src:'p.200 · 2021-22 Q2',ref:'p.192',type:'open',q:'State your observation when carbon is heated with hot concentrated nitric acid.',
 hint:'Gas colour.',model:'Reddish-brown fumes of NO₂ are evolved (with CO₂) as the carbon is oxidised.<br>C + 4HNO₃ → CO₂ + 2H₂O + 4NO₂'},
{id:'y21-3',t:'ac',src:'p.200 · 2021-22 Q3',ref:'p.191',type:'open',q:'Write the balanced equation for the preparation of ferric nitrate from ferric hydroxide.',
 hint:'Neutralisation.',model:'Fe(OH)₃ + 3HNO₃ → Fe(NO₃)₃ + 3H₂O'},
{id:'y21-4i',t:'ts',src:'p.200 · 2021-22 Q4(i)',ref:'p.195',type:'word',q:'In the brown ring test, which ion is detected?',
 accept:['nitrate','nitrate ion','no3','nitrate radical','no3-','nitrate ion no3'],ansText:'Nitrate ion (NO₃⁻)',hint:'Ring = FeSO₄·NO.',exp:'NO₃⁻ is reduced to NO, which forms FeSO₄·NO.'},
{id:'y21-4ii',t:'ts',src:'p.200 · 2021-22 Q4(ii)',ref:'p.195',type:'open',q:'In the brown ring test, why is a freshly prepared FeSO₄ solution used?',
 hint:'Air oxidation.',model:'On standing, FeSO₄ is oxidised by air to iron(III) sulphate, which cannot form the brown compound with NO, so the test would fail.'},
{id:'y21-4iii',t:'ts',src:'p.200 · 2021-22 Q4(iii)',ref:'p.195',type:'word',q:'In the brown ring test, name the substance Z added carefully along the sides of the test tube.',
 accept:['conc sulphuric acid','concentrated sulphuric acid','sulphuric acid','h2so4','conc h2so4','concentrated sulfuric acid','conc sulfuric acid','sulfuric acid'],ansText:'Concentrated sulphuric acid',hint:'Heavy; sinks to the bottom.',exp:'Conc. H₂SO₄ is heavier and forms the lower layer; the ring forms at the junction.'},
{id:'y21-5',t:'nm',src:'p.200 · 2021-22 Q5',ref:'p.192',type:'word',q:'Name the acid formed when sulphur reacts with concentrated nitric acid.',
 accept:['sulphuric acid','sulfuric acid','h2so4'],ansText:'Sulphuric acid (H₂SO₄)',hint:'Its own acid.',exp:'S + 6HNO₃ → H₂SO₄ + 2H₂O + 6NO₂.'},
{id:'y23-1',t:'mt',src:'p.200 · 2023 Q1',ref:'p.193',type:'open',q:'Complete and balance: Cu + conc. HNO₃ →',
 hint:'1 : 4.',model:'Cu + 4HNO₃ → Cu(NO₃)₂ + 2H₂O + 2NO₂'},
{id:'y24-1',t:'us',src:'p.200 · 2024 Q1',ref:'p.196',type:'fill',q:'Choose the correct answer: {0} leaves a black residue on heating.',
 blanks:[{o:['zinc nitrate','copper nitrate'],a:1}],
 hint:'CuO is black.',exp:'2Cu(NO₃)₂ → 2CuO (black) + 4NO₂ + O₂. ZnO is yellow when hot and white when cold.'},
{id:'y24-2',t:'ts',src:'p.200 · 2024 Q2',ref:'p.195',type:'word',q:'Name the only anion that gives a brown ring with conc. H₂SO₄ and freshly prepared FeSO₄ solution.',
 accept:['nitrate','nitrate ion','no3','no3-','nitrate radical'],ansText:'Nitrate ion (NO₃⁻)',hint:'Brown ring test.',exp:'NO₃⁻ → NO → FeSO₄·NO (brown ring).'},
{id:'y24-3',t:'mt',src:'p.200 · 2024 Q3',ref:'p.193',type:'open',q:'Write the balanced equation for the reaction of copper with concentrated nitric acid.',
 hint:'1 : 4.',model:'Cu + 4HNO₃ → Cu(NO₃)₂ + 2H₂O + 2NO₂'},
{id:'y25-1',t:'mt',src:'p.200 · 2025 Q1',ref:'p.193',type:'word',q:'Name the gas produced when copper reacts with hot concentrated nitric acid.',
 accept:NO2W,ansText:'Nitrogen dioxide (NO₂)',hint:'Reddish brown.',exp:'Cu + 4HNO₃ → Cu(NO₃)₂ + 2H₂O + 2NO₂.'},
{id:'y25-2',t:'nm',src:'p.200 · 2025 Q2',ref:'p.192',type:'open',q:'Write the balanced equation: sulphur and hot concentrated nitric acid.',
 hint:'1 : 6.',model:'S + 6HNO₃ → H₂SO₄ + 2H₂O + 6NO₂'},
{id:'y25-3a',t:'mt',src:'p.200 · 2025 Q3(a)',ref:'p.193',type:'word',q:'Seema added copper turnings to a concentrated acid P and saw a reddish-brown gas. Identify P.',
 accept:['conc nitric acid','concentrated nitric acid','nitric acid','hno3','conc hno3'],ansText:'Concentrated nitric acid',hint:'Which acid oxidises copper and gives NO₂?',exp:'Copper (below hydrogen) reacts only with an oxidising acid; NO₂ is the reddish-brown gas.'},
{id:'y25-3b',t:'mt',src:'p.200 · 2025 Q3(b)',ref:'p.193',type:'open',q:'Write the balanced equation for Seema’s reaction (copper + concentrated acid P).',
 hint:'1 : 4.',model:'Cu + 4HNO₃ → Cu(NO₃)₂ + 2H₂O + 2NO₂'},

/* ===== MCQ 1–9 (p.200) ===== */
{id:'mcq1',t:'ac',src:'p.200 · MCQ 1',ref:'p.191',type:'mcq',q:'<b>Assertion (A):</b> Nitric acid is a monobasic acid.<br><b>Reason (R):</b> The high concentration of H⁺ ions in nitric acid is responsible for its acidic nature.',opts:AR,ans:1,
 hint:'Does “high H⁺ concentration” explain “one H per molecule”?',exp:'Both are true, but monobasic means each molecule gives <b>one</b> H⁺. The high H⁺ concentration explains its <b>acidic strength</b>, not its basicity.'},
{id:'mcq2',t:'mt',src:'p.200 · MCQ 2',ref:'p.193',type:'mcq',q:'<b>Assertion (A):</b> The oxidising nature of nitric acid enables it to react with copper.<br><b>Reason (R):</b> Copper reacts with concentrated nitric acid to give brown fumes of nitrogen dioxide.',opts:AR,ans:1,
 hint:'Is R the cause of A, or just an observation?',exp:'Both are true. R describes what is seen (NO₂ fumes); it does not explain <b>why</b> HNO₃ reacts with copper (its nascent oxygen oxidises Cu to CuO). So (b). Note: this item is ambiguous, and some answer keys accept (a), treating NO₂ as evidence of the oxidation.'},
{id:'mcq3',t:'pr',src:'p.200 · MCQ 3',ref:'p.184',type:'mcq',q:'Nitric acid is prepared in the laboratory from:',
 opts:['(a) KNO₃ and dilute H₂SO₄','(b) NaNO₃ and conc. HCl','(c) KNO₃ and conc. H₂SO₄','(d) NH₃ and air'],ans:2,
 hint:'A non-volatile acid displaces a volatile acid.',exp:'KNO₃ + H₂SO₄(conc.) → KHSO₄ + HNO₃. HCl is volatile; NH₃ + air is Ostwald’s industrial process.'},
{id:'mcq4',t:'ow',src:'p.200 · MCQ 4',ref:'p.187',type:'mcq',q:'In Ostwald’s process for the manufacture of nitric acid:',
 opts:['(a) the catalyst is iron','(b) NO₂ is formed in the catalytic chamber','(c) the conversion of NH₃ to NO is the catalysed reaction','(d) ammonia and air are taken in the ratio 10 : 1'],ans:2,
 hint:'Which step uses Pt?',exp:'4NH₃ + 5O₂ —Pt→ 4NO + 6H₂O. The catalyst is platinum; NO (not NO₂) forms; NH₃ : air = 1 : 10.'},
{id:'mcq5',t:'st',src:'p.200 · MCQ 5',ref:'p.191',type:'mcq',q:'On strong heating, nitric acid gives:',
 opts:['(a) a neutral gas, an acidic liquid and a coloured gas','(b) a coloured acidic gas, a neutral liquid and a neutral gas','(c) only coloured gases','(d) two neutral gases'],ans:1,
 hint:'4HNO₃ → 4NO₂ + 2H₂O + O₂.',exp:'NO₂ (coloured, acidic gas) + H₂O (neutral liquid) + O₂ (neutral gas).'},
{id:'mcq6',t:'nm',src:'p.200 · MCQ 6',ref:'p.191, 192',type:'mcq',q:'Nitric acid is a strong oxidising agent since:',
 opts:['(a) it is a strong acid','(b) it is completely ionised','(c) its decomposition yields nascent oxygen','(d) it is volatile'],ans:2,
 hint:'2HNO₃ → H₂O + 2NO₂ + [O].',exp:'Nascent oxygen [O] from its decomposition oxidises metals, non-metals and compounds.'},
{id:'mcq7',t:'nm',src:'p.200 · MCQ 7',ref:'p.192',type:'mcq',q:'Carbon reacts with concentrated nitric acid to give:',
 opts:['(a) one acidic gas and one neutral gas','(b) two acidic gases and a neutral compound','(c) an acid and a gas','(d) a basic gas and water'],ans:1,
 hint:'C + 4HNO₃ → CO₂ + 2H₂O + 4NO₂.',exp:'CO₂ and NO₂ are acidic gases; water is neutral.'},
{id:'mcq8',t:'nm',src:'p.200 · MCQ 8',ref:'p.192',type:'mcq',q:'Concentrated nitric acid can be used to make sulphuric acid by reacting it with:',
 opts:['(a) carbon','(b) phosphorus','(c) copper','(d) sulphur'],ans:3,
 hint:'Which element is in H₂SO₄?',exp:'S + 6HNO₃ → H₂SO₄ + 2H₂O + 6NO₂.'},
{id:'mcq9',t:'mt',src:'p.200 · MCQ 9',ref:'p.193, 195',type:'mcq',q:'Copper reacts with hot concentrated nitric acid to give:',
 opts:['(a) colourless nitric oxide','(b) dense reddish-brown fumes of NO₂','(c) hydrogen','(d) nitrous oxide'],ans:1,
 hint:'Concentrated acid.',exp:'Cu + 4HNO₃ → Cu(NO₃)₂ + 2H₂O + 2NO₂.'},

/* ===== Additional & HOTS Q.1–14 (p.201) ===== */
{id:'h1',t:'in',src:'p.201 · HOTS Q1',ref:'p.183',type:'open',q:'N₂ —A→ NO —B→ NO₂ —C→ HNO₃ (acid rain). Give balanced equations for A, B and C.',
 hint:'Lightning, air, rain water.',model:'A: N₂ + O₂ —lightning→ 2NO<br>B: 2NO + O₂ → 2NO₂<br>C: 4NO₂ + 2H₂O + O₂ → 4HNO₃'},
{id:'h2',t:'pr',src:'p.201 · HOTS Q2',ref:'p.184, 185',type:'multi',q:'Which of the following reactions for the laboratory preparation of nitric acid are <b>incorrect</b>?',
 opts:['(a) 2KNO₃ + H₂SO₄ —<200 °C→ K₂SO₄ + 2HNO₃','(b) KNO₃ + H₂SO₄ —<200 °C→ KHSO₄ + HNO₃','(c) KNO₃ + H₂SO₄ —>200 °C→ KHSO₄ + HNO₃'],ans:[0,2],
 hint:'Correct salt AND correct temperature.',exp:'(a) is wrong: below 200 °C only the acid salt KHSO₄ forms. (c) is wrong: the temperature must be kept below 200 °C. (b) is correct.'},
{id:'h3',t:'pr',src:'p.201 · HOTS Q3',ref:'p.184, 185',type:'open',q:'In the laboratory preparation of nitric acid, give reasons: (a) conc. H₂SO₄ is used and not conc. HCl; (b) rubber or cork is not used; (c) the temperature is controlled; (d) the vapours are identified with copper turnings.',
 hint:'Volatility · corrosion · 200 °C · NO₂.',model:'(a) Conc. H₂SO₄ is non-volatile and displaces the volatile HNO₃; HCl is itself volatile and would distil over.<br>(b) HNO₃ vapours are corrosive and attack rubber and cork.<br>(c) Above 200 °C the glass may be damaged, HNO₃ decomposes and a hard crust of K₂SO₄/Na₂SO₄ forms.<br>(d) HNO₃ with copper gives reddish-brown NO₂, which identifies it (it also turns acidified FeSO₄ brown).'},
{id:'h4',t:'st',src:'p.201 · HOTS Q4',ref:'p.186',type:'match',q:'Match the type of nitric acid with its colour:',
 left:['(a) Pure nitric acid','(b) Nitric acid obtained in the laboratory','(c) Lab nitric acid after air is bubbled through it'],right:['1. Faint yellowish or nearly colourless','2. Colourless','3. Slightly yellowish brown'],ans:[1,2,0],
 hint:'Dissolved NO₂.',exp:'(a) → 2 colourless · (b) → 3 slightly yellowish brown (dissolved NO₂) · (c) → 1 faint yellowish or nearly colourless (air drives out the NO₂).'},
{id:'h5',t:'ow',src:'p.201 · HOTS Q5',ref:'p.187',type:'open',q:'Ostwald’s process: match each chamber (a) catalytic chamber, (b) oxidation chamber, (c) absorption tower with (1) about 50 °C, NO₂ formed; (2) ordinary temperature, HNO₃ formed; (3) 700–800 °C, NO and steam formed. Give the equation for each.',
 hint:'Follow NH₃ → NO → NO₂ → HNO₃.',model:'(a) → 3: 4NH₃ + 5O₂ —Pt, 700–800 °C→ 4NO + 6H₂O<br>(b) → 1: 2NO + O₂ —50 °C→ 2NO₂<br>(c) → 2: 4NO₂ + 2H₂O + O₂ → 4HNO₃'},
{id:'h6',t:'ac',src:'p.201 · HOTS Q6',ref:'p.190–192',type:'open',q:'Give reasons. Dilute nitric acid: (i) stains the skin yellow; (ii) is strongly acidic and a typical acid; (iii) does not normally give hydrogen with metals. Concentrated nitric acid: (i) turns yellowish brown in plain glass bottles; (ii) is a strong oxidising agent.',
 hint:'Protein · ionisation · nascent oxygen · NO₂.',model:'Dilute: (i) it reacts with skin protein to form yellow xanthoproteic acid. (ii) It is almost completely ionised, giving a high concentration of H⁺ ions. (iii) Nascent oxygen from its decomposition oxidises the H₂ to water.<br>Conc.: (i) it decomposes in light: 4HNO₃ → 4NO₂ + 2H₂O + O₂, and the NO₂ dissolves and colours it. (ii) It is poorly ionised and decomposes readily to give nascent oxygen: 2HNO₃ → H₂O + 2NO₂ + [O].'},
{id:'h7',t:'in',src:'p.201 · HOTS Q7',ref:'p.190, 193',type:'fill',q:'Give the term: (a) a mixture which boils without change in composition: {0}; (b) the inertness of iron or aluminium towards fuming nitric acid, due to an oxide coating: {1}.',
 blanks:[{o:['constant boiling mixture','fuming acid','aqua regia'],a:0},{o:['passivity','nitration','fixation'],a:0}],
 hint:'68% at 121 °C · oxide layer.',exp:'(a) Constant boiling mixture (68% HNO₃, b.p. 121 °C). (b) Passivity.'},
{id:'h8',t:'nm',src:'p.201 · HOTS Q8',ref:'p.191, 192',type:'open',q:'(a) Name the cation in dilute HNO₃ that turns methyl orange pink. (b) Name the non-metal which, with conc. HNO₃, gives: (i) an acidic gas that turns lime water milky; (ii) a non-volatile acid.',
 hint:'Ionisation · C and S.',model:'(a) H⁺ (as the hydronium ion, H₃O⁺).<br>(b)(i) Carbon: C + 4HNO₃ → CO₂ + 2H₂O + 4NO₂ (CO₂ turns lime water milky).<br>(b)(ii) Sulphur: S + 6HNO₃ → H₂SO₄ + 2H₂O + 6NO₂ (non-volatile H₂SO₄). [Phosphorus also gives non-volatile H₃PO₄, but sulphur is the book’s answer.]'},
{id:'h9',t:'mt',src:'p.201 · HOTS Q9',ref:'p.192, 193',type:'open',q:'Complete and balance, then name (i)–(v) the oxidised product in each, and (vi) the reduced product in reaction 4:<br>1. C + HNO₃ (conc.) · 2. S + HNO₃ (conc.) · 3. Cu + HNO₃ (conc.) · 4. Cu + HNO₃ (dil.) · 5. Mg + HNO₃ (very dil.)',
 hint:'Oxidised = what the element becomes; reduced = what HNO₃ becomes.',model:'1. C + 4HNO₃ → CO₂ + 2H₂O + 4NO₂: (i) CO₂<br>2. S + 6HNO₃ → H₂SO₄ + 2H₂O + 6NO₂: (ii) H₂SO₄<br>3. Cu + 4HNO₃ → Cu(NO₃)₂ + 2H₂O + 2NO₂: (iii) Cu(NO₃)₂<br>4. 3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 4H₂O + 2NO: (iv) Cu(NO₃)₂; (vi) reduced product NO<br>5. Mg + 2HNO₃ → Mg(NO₃)₂ + H₂: (v) Mg(NO₃)₂'},
{id:'h10',t:'mt',src:'p.201 · HOTS Q10',ref:'p.193',type:'fill',q:'Fill in using: hydrogen, oxidizes, conc. HCl, reduces, weight, conc. HNO₃, volume, chlorine.<br>Aqua regia is a mixture of 1 part of {0} and 3 parts of {1} by {2}. Nitric acid {3} hydrochloric acid to {4}.',
 blanks:[{o:['conc. HNO₃','conc. HCl'],a:0},{o:['conc. HNO₃','conc. HCl'],a:1},{o:['weight','volume'],a:1},{o:['oxidizes','reduces'],a:0},{o:['hydrogen','chlorine'],a:1}],
 hint:'1 : 3 by volume; HNO₃ is the oxidising agent.',exp:'1 part conc. HNO₃ + 3 parts conc. HCl by volume; HNO₃ oxidises HCl to (nascent) chlorine: HNO₃ + 3HCl → 2H₂O + NOCl + 2[Cl].'},
{id:'h11',t:'cp',src:'p.201 · HOTS Q11',ref:'p.194, 191, 195',type:'open',q:'State your observations when concentrated nitric acid is: (a) added to saw dust; (b) heated alone; (c) heated with copper.',
 hint:'Flames · brown fumes · blue solution.',model:'(a) The saw dust bursts into flames with reddish-brown fumes of NO₂ (it is oxidised to CO₂ + H₂O).<br>(b) Reddish-brown fumes of NO₂: 4HNO₃ → 4NO₂ + 2H₂O + O₂.<br>(c) Dense reddish-brown fumes and a blue solution: Cu + 4HNO₃ → Cu(NO₃)₂ + 2H₂O + 2NO₂.'},
{id:'h12',t:'ts',src:'p.201 · HOTS Q12',ref:'p.195',type:'open',q:'A teacher gives you iron(II) sulphate solution, conc. H₂SO₄ and dilute HNO₃. (a) How would you show the presence of the nitrate radical? (b) Name the test. (c) Give two precautions.',
 hint:'The order of adding the reagents.',model:'(a) To dilute HNO₃ in a test tube, add freshly prepared FeSO₄ solution, then pour conc. H₂SO₄ slowly down the side; a brown ring (FeSO₄·NO) forms at the junction.<br>(b) The brown ring test.<br>(c) Use freshly prepared FeSO₄; add the conc. H₂SO₄ carefully along the side and cool the tube; do not shake it.'},
{id:'h13',t:'us',src:'p.201 · HOTS Q13',ref:'p.196',type:'fill',q:'From Pb(NO₃)₂, NH₄NO₃, KNO₃ and AgNO₃, choose the nitrate that: (a) is used in photography and leaves a metallic residue on heating: {0}; (b) leaves no residue on heating: {1}.',
 blanks:[{o:['Pb(NO₃)₂','NH₄NO₃','KNO₃','AgNO₃'],a:3},{o:['Pb(NO₃)₂','NH₄NO₃','KNO₃','AgNO₃'],a:1}],
 hint:'Silver · laughing gas.',exp:'(a) 2AgNO₃ → 2Ag + 2NO₂ + O₂. (b) NH₄NO₃ → N₂O + 2H₂O (only gas and vapour).'},
{id:'h14',t:'us',src:'p.201 · HOTS Q14',ref:'p.196',type:'open',q:'Name the gas(es) evolved on heating: (a) ammonium nitrate; (b) potassium nitrate; (c) copper nitrate.',
 hint:'Three different patterns.',model:'(a) Nitrous oxide (N₂O) and steam: NH₄NO₃ → N₂O + 2H₂O.<br>(b) Oxygen: 2KNO₃ → 2KNO₂ + O₂.<br>(c) Nitrogen dioxide and oxygen: 2Cu(NO₃)₂ → 2CuO + 4NO₂ + O₂.'},

/* ===== Unit test paper 7C (p.202) ===== */
{id:'u1-1',t:'mt',src:'p.202 · Unit test Q.1(1)',ref:'p.192',type:'mcq',q:'Select the gas(es) evolved: manganese + cold, very dilute nitric acid.',
 opts:['A NO₂ only','B NO only','C hydrogen','D NO₂ and O₂','E NO₂ and CO₂'],ans:2,
 hint:'One of the two exceptions.',exp:'Mn + 2HNO₃ → Mn(NO₃)₂ + H₂.'},
{id:'u1-2',t:'nm',src:'p.202 · Unit test Q.1(2)',ref:'p.192',type:'mcq',q:'Select the gas(es) evolved: sulphur + concentrated nitric acid.',
 opts:['A NO₂ only','B NO only','C hydrogen','D NO₂ and O₂','E NO₂ and CO₂'],ans:0,
 hint:'The sulphur stays in solution as an acid.',exp:'S + 6HNO₃ → H₂SO₄ + 2H₂O + 6NO₂.'},
{id:'u1-3',t:'mt',src:'p.202 · Unit test Q.1(3)',ref:'p.193',type:'mcq',q:'Select the gas(es) evolved: zinc + dilute nitric acid.',
 opts:['A NO₂ only','B NO only','C hydrogen','D NO₂ and O₂','E NO₂ and CO₂'],ans:1,
 hint:'In the book, the same as copper.',exp:'Book: 3Zn + 8HNO₃ → 3Zn(NO₃)₂ + 4H₂O + 2NO. Note: this is the book’s version; in practice zinc mostly gives N₂O (or NH₄NO₃) with dilute HNO₃.'},
{id:'u1-4',t:'nm',src:'p.202 · Unit test Q.1(4)',ref:'p.192',type:'mcq',q:'Select the gas(es) evolved: carbon + concentrated nitric acid.',
 opts:['A NO₂ only','B NO only','C hydrogen','D NO₂ and O₂','E NO₂ and CO₂'],ans:4,
 hint:'The carbon leaves as a gas.',exp:'C + 4HNO₃ → CO₂ + 2H₂O + 4NO₂.'},
{id:'u1-5',t:'st',src:'p.202 · Unit test Q.1(5)',ref:'p.191, 195',type:'mcq',q:'Select the gas(es) evolved: action of heat on nitric acid.',
 opts:['A NO₂ only','B NO only','C hydrogen','D NO₂ and O₂','E NO₂ and CO₂'],ans:3,
 hint:'4HNO₃ → ?',exp:'4HNO₃ → 4NO₂ + 2H₂O + O₂.'},
{id:'u2-1',t:'cp',src:'p.202 · Unit test Q.2(1)',ref:'p.194',type:'fill',q:'The oxidised product formed when hydrogen sulphide reacts with dilute nitric acid is {0}.',
 blanks:[{o:['sulphur','sulphur dioxide','sulphuric acid'],a:0}],
 hint:'A yellow solid.',exp:'3H₂S + 2HNO₃ → 3S + 4H₂O + 2NO.'},
{id:'u2-2',t:'mt',src:'p.202 · Unit test Q.2(2)',ref:'p.193',type:'fill',q:'Aqua regia is a mixture of 1 part {0} and 3 parts {1}; the nitric acid {2} the hydrochloric acid.',
 blanks:[{o:['conc. nitric acid','conc. hydrochloric acid'],a:0},{o:['conc. nitric acid','conc. hydrochloric acid'],a:1},{o:['oxidises','reduces'],a:0}],
 hint:'1 : 3 by volume.',exp:'HNO₃ + 3HCl → 2H₂O + NOCl + 2[Cl]: HNO₃ oxidises HCl to nascent chlorine.'},
{id:'u2-3',t:'mt',src:'p.202 · Unit test Q.2(3)',ref:'p.193',type:'fill',q:'A metal rendered passive by fuming nitric acid is {0}.',
 blanks:[{o:['iron','copper','zinc','magnesium'],a:0}],
 hint:'Fe or Al.',exp:'Iron (also aluminium): a thin oxide layer stops further reaction.'},
{id:'u2-4',t:'nm',src:'p.202 · Unit test Q.2(4)',ref:'p.192',type:'fill',q:'Volatile nitric acid can be used to prepare the non-volatile mineral acid {0} from a non-metal.',
 blanks:[{o:['sulphuric acid','hydrochloric acid','carbonic acid'],a:0}],
 hint:'S + conc. HNO₃.',exp:'S + 6HNO₃ → H₂SO₄ + 2H₂O + 6NO₂.'},
{id:'u2-5',t:'ac',src:'p.202 · Unit test Q.2(5)',ref:'p.191',type:'fill',q:'Dilute nitric acid reacts with {0} to give a salt and water only (neutralisation).',
 blanks:[{o:['calcium oxide','calcium carbonate','calcium sulphite','calcium'],a:0}],
 hint:'No gas.',exp:'CaO + 2HNO₃ → Ca(NO₃)₂ + H₂O. A carbonate also gives CO₂ and a sulphite gives SO₂.'},
{id:'u3-a',t:'mt',src:'p.202 · Unit test Q.3 (A)',ref:'p.193',type:'open',q:'Cu —A→ Cu(NO₃)₂ —B→ CuO —C→ Cu. Give the balanced equation for conversion A.',
 hint:'Copper + conc. HNO₃.',model:'Cu + 4HNO₃ (conc.) → Cu(NO₃)₂ + 2H₂O + 2NO₂ (or 3Cu + 8HNO₃ (dil.) → 3Cu(NO₃)₂ + 4H₂O + 2NO)'},
{id:'u3-b',t:'us',src:'p.202 · Unit test Q.3 (B)',ref:'p.196',type:'open',q:'Cu(NO₃)₂ —B→ CuO. Give the balanced equation for conversion B.',
 hint:'Heat.',model:'2Cu(NO₃)₂ —Δ→ 2CuO + 4NO₂ + O₂'},
{id:'u3-c',t:'mt',src:'p.202 · Unit test Q.3 (C)',ref:'p.196',type:'open',q:'CuO —C→ Cu. Give the balanced equation for conversion C.',
 hint:'Reduce it with hydrogen (or ammonia).',model:'CuO + H₂ —Δ→ Cu + H₂O (or 3CuO + 2NH₃ → 3Cu + 3H₂O + N₂). This step uses reduction from earlier chapters, not the nitric acid text.'},
{id:'u3-d',t:'nm',src:'p.202 · Unit test Q.3 (D)',ref:'p.192',type:'open',q:'S —D→ H₂SO₄. Give the balanced equation for conversion D.',
 hint:'Conc. HNO₃.',model:'S + 6HNO₃ → H₂SO₄ + 2H₂O + 6NO₂'},
{id:'u3-e',t:'cp',src:'p.202 · Unit test Q.3 (E)',ref:'p.194',type:'open',q:'SO₂ —E→ H₂SO₄. Give the balanced equation for conversion E, using nitric acid.',
 hint:'Dilute HNO₃ with SO₂ solution.',model:'3SO₂ + 2H₂O + 2HNO₃ → 3H₂SO₄ + 2NO'},
{id:'u4-1',t:'nm',src:'p.202 · Unit test Q.4(1)',ref:'p.192',type:'word',q:'Name the oxidised product: sulphur + concentrated nitric acid.',
 accept:['sulphuric acid','sulfuric acid','h2so4'],ansText:'Sulphuric acid (H₂SO₄)',hint:'An acid.',exp:'S + 6HNO₃ → H₂SO₄ + 2H₂O + 6NO₂.'},
{id:'u4-2',t:'mt',src:'p.202 · Unit test Q.4(2)',ref:'p.193',type:'word',q:'Name the oxidised product: zinc + dilute nitric acid.',
 accept:['zinc nitrate','znno32','zn no3 2','znno3 2'],ansText:'Zinc nitrate, Zn(NO₃)₂',hint:'The zinc ends up as its salt.',exp:'3Zn + 8HNO₃ → 3Zn(NO₃)₂ + 4H₂O + 2NO (book).'},
{id:'u4-3',t:'cp',src:'p.202 · Unit test Q.4(3)',ref:'p.194',type:'word',q:'Name the oxidised product: sulphur dioxide solution + dilute nitric acid.',
 accept:['sulphuric acid','sulfuric acid','h2so4'],ansText:'Sulphuric acid (H₂SO₄)',hint:'H₂SO₃ → ?',exp:'3SO₂ + 2H₂O + 2HNO₃ → 3H₂SO₄ + 2NO.'},
{id:'u4-4',t:'cp',src:'p.202 · Unit test Q.4(4)',ref:'p.194',type:'word',q:'Name the oxidised product: acidified iron(II) sulphate + dilute nitric acid.',
 accept:['iron iii sulphate','ironiii sulphate','ferric sulphate','fe2so43','fe2 so4 3','iron iii sulfate','ironiii sulfate','ferric sulfate'],ansText:'Iron(III) sulphate, Fe₂(SO₄)₃',hint:'Fe²⁺ → Fe³⁺.',exp:'6FeSO₄ + 3H₂SO₄ + 2HNO₃ → 3Fe₂(SO₄)₃ + 4H₂O + 2NO.'},
{id:'u4-5',t:'nm',src:'p.202 · Unit test Q.4(5)',ref:'p.192',type:'word',q:'Name the oxidised product: carbon + concentrated nitric acid.',
 accept:['carbon dioxide','co2'],ansText:'Carbon dioxide (CO₂)',hint:'It turns lime water milky.',exp:'C + 4HNO₃ → CO₂ + 2H₂O + 4NO₂.'},
{id:'u5-1',t:'ow',src:'p.202 · Unit test Q.5(1)',ref:'p.183, 187',type:'open',q:'Give a reason: nitric acid is not manufactured directly from atmospheric nitrogen.',
 hint:'What makes N₂ and O₂ combine in nature?',model:'Nitrogen is very unreactive (strong N≡N triple bond). N₂ and O₂ combine only at very high temperatures (lightning or an electric arc, about 3000 °C), which is uneconomical. So nitrogen is first fixed as NH₃ (Haber’s process) and the NH₃ is then oxidised (Ostwald’s process). (The book has no direct text for this; this is the standard answer.)'},
{id:'u5-2',t:'in',src:'p.202 · Unit test Q.5(2)',ref:'p.190, 194',type:'open',q:'Give a reason: nitric acid stains the skin yellow.',
 hint:'Protein.',model:'It reacts with (nitrates) the skin protein to form the yellow compound xanthoproteic acid.'},
{id:'u5-3',t:'st',src:'p.202 · Unit test Q.5(3)',ref:'p.186, 191',type:'open',q:'Give a reason: bubbling air through warm, yellow nitric acid makes it colourless.',
 hint:'Two effects of the air.',model:'The yellow colour is due to dissolved NO₂. The air drives out the NO₂ and also oxidises it back to nitric acid: 4NO₂ + 2H₂O + O₂ → 4HNO₃.'},
{id:'u5-4',t:'us',src:'p.202 · Unit test Q.5(4)',ref:'p.196',type:'open',q:'Give a reason: nitric acid is used in the purification of gold.',
 hint:'What dissolves, and what does not?',model:'The impurities (Cu, Ag, Zn, Pb) dissolve in nitric acid as their nitrates, while gold, a noble metal, is not attacked, so pure gold is left behind.'},
{id:'u5-5',t:'nm',src:'p.202 · Unit test Q.5(5)',ref:'p.191, 192',type:'open',q:'Give a reason: concentrated nitric acid is a stronger oxidising agent than dilute nitric acid.',
 hint:'Ionisation vs decomposition.',model:'Conc. HNO₃ is poorly ionised and decomposes readily to give nascent oxygen (2HNO₃ → H₂O + 2NO₂ + [O]), so its oxidising nature predominates. The dilute acid is almost completely ionised, so its acidic nature predominates.'},
{id:'u6-1',t:'ts',src:'p.202 · Unit test Q.6(1)',ref:'p.195',type:'word',q:'Brown ring test diagram: name the brown compound Y that forms the ring.',
 accept:['nitroso iron ii sulphate','nitroso ironii sulphate','nitroso ferrous sulphate','feso4no','feso4 no','fesono','nitroso iron ii sulfate','nitroso ironii sulfate','nitroso ferrous sulfate','ferrous nitroso sulphate'],ansText:'Nitroso iron(II) sulphate, FeSO₄·NO',hint:'FeSO₄ + NO.',exp:'FeSO₄ + NO → FeSO₄·NO.'},
{id:'u6-2',t:'ts',src:'p.202 · Unit test Q.6(2)',ref:'p.195',type:'fill',q:'Brown ring test diagram: the upper layer X is {0} and the lower layer Z is {1}.',
 blanks:[{o:['FeSO₄ solution (with the nitrate)','conc. H₂SO₄'],a:0},{o:['FeSO₄ solution (with the nitrate)','conc. H₂SO₄'],a:1}],
 hint:'Which liquid is heavier?',exp:'Conc. H₂SO₄ is heavier and sinks to the bottom (Z); the FeSO₄ + nitrate solution stays above (X).'},
{id:'u6-3',t:'ts',src:'p.202 · Unit test Q.6(3)',ref:'p.195',type:'open',q:'Why does the brown ring decompose when the test tube is shaken?',
 hint:'Heat.',model:'Shaking mixes the conc. H₂SO₄ with the water; a lot of heat is evolved, which decomposes the unstable FeSO₄·NO.'},
{id:'u6-4',t:'ts',src:'p.202 · Unit test Q.6(4)',ref:'p.195',type:'open',q:'Why does the brown ring form at the junction and not settle at the bottom of the test tube?',
 hint:'Heavier acid below; unstable compound.',model:'Conc. H₂SO₄ is heavier and forms the bottom layer. FeSO₄·NO forms where the two liquids meet; it is unstable and breaks up if it moves down into the conc. acid, so it stays as a ring at the junction.'},
{id:'u6-5',t:'ts',src:'p.202 · Unit test Q.6(5)',ref:'p.195',type:'word',q:'Name the gas evolved in the brown ring test that combines with FeSO₄.',
 accept:NOW,ansText:'Nitric oxide (NO)',hint:'The reduction product of HNO₃ with FeSO₄.',exp:'6FeSO₄ + 3H₂SO₄ + 2HNO₃ → 3Fe₂(SO₄)₃ + 4H₂O + 2NO.'}
];

/* ---------------- Page ---------------- */
const PAGE={key:'nitric-v1',title:'🧪 7C · Nitric acid',book:{dir:'nitric',from:183,to:202},
 pages:{197:'Equation worksheet items 1–16',198:'Equation worksheet items 17–34',199:'Previous ICSE questions 2010 to 2019',200:'Previous ICSE 2020 to 2025 · MCQ 1–9',201:'Additional &amp; HOTS Q.1–14',202:'Unit test paper 7C: Q.1–6'},
 formulas:`<h3>📐 Quick sheet: nitric acid</h3>
<table class="cmp"><tr><th></th><th></th></tr>${tr(
['Lab prep','KNO₃ + H₂SO₄(conc.) —<200 °C→ KHSO₄ + HNO₃ · all-glass retort · water-cooled receiver · acid salt'],
['Ostwald','4NH₃ + 5O₂ —Pt, 700–800 °C→ 4NO + 6H₂O · 2NO + O₂ —50 °C→ 2NO₂ · 4NO₂ + 2H₂O + O₂ → 4HNO₃ · NH₃ : air = 1 : 10'],
['Yellow colour','4HNO₃ → 4NO₂ + 2H₂O + O₂ (NO₂ dissolves) · remove it: bubble air through the warm acid, or dilute'],
['Numbers','constant boiling 68%, 121 °C · fuming 98% · b.p. 86 °C · m.p. −42 °C · sp. gr. 1.54 (book)'],
['Non-metals (conc.)','C + 4HNO₃ → CO₂ + 2H₂O + 4NO₂ · S + 6HNO₃ → H₂SO₄ + 2H₂O + 6NO₂ · P + 5HNO₃ → H₃PO₄ + H₂O + 5NO₂'],
['Copper','conc.: Cu + 4HNO₃ → Cu(NO₃)₂ + 2H₂O + 2NO₂ · dil.: 3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 4H₂O + 2NO'],
['Special cases','H₂ only from Mg / Mn + cold, very dilute (1%) HNO₃ · passivity: Fe, Al (oxide layer) · aqua regia 1 HNO₃ : 3 HCl (by vol.)'],
['Brown ring','fresh FeSO₄ + conc. H₂SO₄ down the side · FeSO₄ + NO → FeSO₄·NO at the junction'],
['Nitrates heated','KNO₃ → KNO₂ + O₂ · Pb/Cu/Zn/Ca → oxide + NO₂ + O₂ · Ag → metal · NH₄NO₃ → N₂O + 2H₂O'])}</table>`};
