/* Chapter 7A: Hydrogen chloride & hydrochloric acid (Dalal, printed p.149–162).
   Theory p.149–157 · Equation worksheet p.158 · Previous questions p.159–160 · MCQ p.160 · HOTS p.161 · Unit test 7A p.162. */

/* ---------------- Topics ---------------- */
const TOPICS=[
{id:'pr',name:'1. HCl gas: laboratory preparation',ref:'p.149–151'},
{id:'pp',name:'2. Physical properties, heavier than air & fountain experiment',ref:'p.151–152'},
{id:'cp',name:'3. HCl gas: indicators, dissociation, ammonia, metals',ref:'p.153'},
{id:'ap',name:'4. Hydrochloric acid: funnel arrangement & physical properties',ref:'p.154'},
{id:'ac',name:'5. Dilute HCl as an acid (metals, bases, carbonates, sulphites, sulphides, precipitates)',ref:'p.155'},
{id:'ox',name:'6. Oxidising agents, aqua regia, tests & uses',ref:'p.156–157'},
{id:'eq',name:'7. Equation worksheet & conversions',ref:'p.158, 162'}
];

/* ---------------- Concept lessons (shown on each card) ---------------- */
const CONCEPT={
pr:`<h3>Making dry HCl gas in the laboratory</h3>
${hook('Table salt is NaCl and it contains chlorine. How do you get HCl gas out of it, and why does the book insist on <b>sulphuric</b> acid and not nitric acid?')}
${story('A strong, <b>non-volatile</b> acid (conc. H₂SO₄, b.p. about 338 °C) pushes a <b>volatile</b> acid (HCl, a gas) out of its salt. The volatile one escapes as a gas, so the reaction keeps going forward. Nitric acid is itself volatile, so its vapour would come out along with the HCl and spoil the product.')}
<p><b>The apparatus, in order</b> (book diagram p.150):</p>
${flow('🧪 <b>Round-bottom flask X</b><br>NaCl + conc. H₂SO₄<br>thistle funnel dips in acid','🔥 <b>Heat gently</b><br>below 200 °C','🫧 <b>Washer bottle A</b><br>conc. H₂SO₄<br>removes moisture','⬆️ <b>Gas jar Y, upright</b><br>upward displacement of air','🧫 <b>Test</b><br>NH₃ rod → white fumes')}
${watch('laboratory preparation of hydrogen chloride gas')}
<table class="cmp"><tr><th>Point</th><th>What to write</th></tr>${tr(
['Reactants','Sodium chloride (rock salt) + <b>conc.</b> H₂SO₄'],
['Equation (&lt; 200 °C)','<b>NaCl + H₂SO₄ → NaHSO₄ + HCl↑</b> (sodium bisulphate = acid salt)'],
['Above 200 °C (not used)','2NaCl + H₂SO₄ → Na₂SO₄ + 2HCl : a] fuel wasted b] glass may crack c] Na₂SO₄ forms a hard crust that sticks to the flask'],
['Why NaCl','Cheap and easily available'],
['Why conc. H₂SO₄','Non-volatile, high boiling point, so it displaces the volatile HCl'],
['Drying agent','<b>Conc. H₂SO₄</b> (in a washer bottle). It removes only moisture and does not react with HCl'],
['Not used for drying','Quicklime CaO (alkaline): CaO + 2HCl → CaCl₂ + H₂O · P₂O₅: 2P₂O₅ + 3HCl → POCl₃ + 3HPO₃'],
['Precautions','Heat slowly at first (controls the gas) · thistle funnel end dips below the acid (or gas escapes)'],
['Collection','<b>Upward displacement of air</b>: 1.28 times heavier than air (VD 18.25 vs 14.4) · NOT over water (1 vol water dissolves about 452 vols HCl)'],
['Identification','Glass rod dipped in ammonia solution → <b>dense white fumes</b> of NH₄Cl'])}</table>
<p><b>Other methods (p.149):</b> direct synthesis H₂ + Cl₂ → 2HCl in <b>diffused sunlight</b> (explosive in direct sunlight, negligible in the dark; moisture is a catalyst). A burning jet of hydrogen also burns in chlorine.</p>
${trap('Write <b>conc.</b> next to H₂SO₄ and the condition <b>&lt; 200 °C</b> (or "heat") over the arrow.','The product salt is sodium <b>bisulphate</b> NaHSO₄ (hydrogen sulphate), not bisulphite and not sulphate.','Upward displacement of air = gas jar <b>upright</b> (heavy gas sinks and pushes air up).')}
${cy(['Why is HCl not collected over water?','It is highly soluble in water.'],['Which two drying agents are NOT used, and why?','CaO and P₂O₅: they react with HCl.'])}
${exam('NaCl + H₂SO₄ (conc.) —(&lt;200 °C)→ NaHSO₄ + HCl. Dried by conc. H₂SO₄; collected by upward displacement of air, as HCl is heavier than air and highly soluble in water.')}`,

pp:`<h3>Physical properties of HCl gas and the two classic experiments</h3>
${hook('Squeeze a few drops of water into a flask of HCl gas and a red fountain shoots up from the trough below. Where did the push come from?')}
<table class="cmp"><tr><th>Property</th><th>HCl gas</th></tr>${tr(
['Colour, odour, taste','Colourless, pungent choking smell, slightly sour'],
['Nature','Non-poisonous; causes a burning sensation if inhaled'],
['Density','1.28 times heavier than air (VD 18.25, air 14.4)'],
['Solubility','Highly soluble: 1 vol water dissolves about 452 vols'],
['Fumes in moist air','Dissolves in the moisture of air and forms a mist of tiny droplets of hydrochloric acid'],
['Liquefaction · b.p. · m.p.','About 10 °C at 40 atm · liquid boils at −83 °C · solid melts at −113 °C'])}</table>
${steps('Heavier than air (p.152)',['Pour HCl from a dry gas jar into a lower jar with a burning candle.','HCl sinks, pushes the air out, and the candle is <b>extinguished</b> (HCl does not support combustion).','Blue litmus solution in the lower jar turns red.','Inference: HCl is heavier than air.'])}
${flow('Dry HCl jar held <b>above</b>','HCl is heavier: it <b>sinks</b> into the lower jar','Air pushed out','🕯️ Candle goes <b>out</b>')}
${steps('Fountain experiment (p.152)',['Dry round-bottom flask filled with <b>dry</b> HCl; stopper with a jet tube and a dropper of water; trough of <b>blue litmus</b> solution below.','Squeeze the dropper: the HCl dissolves in that water, making a <b>partial vacuum</b> inside the flask.','Outside air pressure is higher, so it pushes the litmus solution up the jet tube.','It comes out as a <b>red fountain</b>.','Inference: HCl is <b>highly soluble</b> in water and <b>acidic</b>.'])}
${flow('💧 Few drops of water squeezed in','HCl dissolves → <b>partial vacuum</b> in flask','Outside air pressure <b>higher</b>','Pushes blue litmus up the jet','⛲ <b>Red fountain</b>')}
${watch('HCl fountain experiment')}
<table class="cmp"><tr><th>Gas in flask</th><th>Litmus in trough</th><th>Fountain</th></tr>${tr(
['HCl (acidic)','Blue','Red'],['HCl (acidic)','Red','Red (no change)'],['NH₃ (basic)','Neutral purple','Blue'],['NH₃ (basic)','Red','Blue'])}</table>
${trap('The flask must be <b>dry</b>: water already inside would dissolve the HCl before the experiment starts.','The fountain is caused by <b>outside atmospheric pressure</b>, not by the gas "sucking".','Ammonia gives the same kind of fountain (high solubility), but blue.')}
${cy(['Why does HCl fume in moist air but H₂S does not?','HCl is highly soluble and forms droplets of acid; H₂S is only fairly soluble.'],['Name another gas whose high solubility can be shown by the fountain experiment.','Ammonia.'])}`,

cp:`<h3>Chemical properties of HCl gas</h3>
<table class="cmp"><tr><th>Property</th><th>What happens</th></tr>${tr(
['Combustion','Non-combustible and does not support combustion (extinguishes a glowing splint)'],
['Indicators (moist)','Blue litmus → red · methyl orange orange → pink · phenolphthalein stays colourless · <b>alkaline</b> phenolphthalein pink → colourless'],
['Thermal dissociation','2HCl ⇌ H₂ + Cl₂ above 500 °C (reversible)'],
['Ammonia','NH₃ + HCl → NH₄Cl : <b>dense white fumes</b> (solid particles of NH₄Cl). Two gases give a solid. Used as a <b>test for HCl</b>.'],
['Metals (heated)','Zn + 2HCl → ZnCl₂ + H₂ · Mg + 2HCl → MgCl₂ + H₂ · Fe + 2HCl → <b>FeCl₂</b> + H₂ (the <b>lower</b> chloride)'])}</table>
${story('Ammonia is a <b>basic</b> gas and HCl is an <b>acidic</b> gas. They neutralise each other in mid-air, and the salt NH₄Cl appears as white "smoke". On strong heating NH₄Cl splits back (thermal dissociation), and on cooling the two gases join again.')}
${flow('Jar of HCl (acidic gas)','inverted over a jar of NH₃ (basic gas)','☁️ <b>Dense white fumes</b> of solid NH₄Cl')}
${watch('ammonia and hydrogen chloride white fumes')}
${trap('Phenolphthalein (plain) does <b>not</b> change colour with HCl. It is colourless in acid and in neutral; only an <b>alkaline</b> (pink) phenolphthalein turns colourless.','Iron with HCl gives iron(<b>II</b>) chloride FeCl₂, not FeCl₃. FeCl₃ needs chlorine: 2Fe + 3Cl₂ → 2FeCl₃.')}
${cy(['Which indicator shows no change with HCl gas?','Phenolphthalein.'],['A + B → C ⇌ A + B, with A basic and B acidic gas. Name them.','NH₃ + HCl → NH₄Cl; NH₄Cl ⇌ NH₃ + HCl.'])}`,

ap:`<h3>Hydrochloric acid: dissolving HCl gas without back-suction</h3>
${hook('If you just bubble HCl gas into water through a tube, water rushes back up the tube into the hot flask. Why, and how does an upturned funnel stop it?')}
${steps('Why a plain delivery tube fails (back suction)',['HCl is extremely soluble, so it dissolves very fast at the end of the tube.','A partial vacuum forms in the tube.','The higher outside pressure pushes water up the delivery tube into the apparatus and damages it: <b>back suction</b>.'])}
${flow('Tube dipped in water','HCl dissolves very fast','Partial vacuum in the tube','Water rushes <b>back</b> into the hot flask','💥 Apparatus damaged')}
${steps('The funnel arrangement',['An inverted funnel is attached to the delivery tube; its <b>rim just touches</b> the water in the trough.','It gives a <b>large surface area</b> for absorption and prevents back suction.','If water rises inside the funnel, the level outside falls, and an <b>air gap</b> opens between the rim and the water.','Pressure inside and outside become equal, and the water in the funnel falls back.','This repeats until the water is saturated with HCl: hydrochloric acid.'])}
${flow('Water rises inside the funnel','Level outside <b>falls</b>','<b>Air gap</b> at the rim','Pressures equal','Water falls back ✅')}
${watch('funnel arrangement preparation of hydrochloric acid back suction')}
<table class="cmp"><tr><th>Property</th><th>Hydrochloric acid</th></tr>${tr(
['Colour','Colourless when pure'],['Odour, taste','Slightly pungent; sharp sour taste'],['Nature','Corrosive; causes blisters on the skin'],['Density','1.2 g/cc (40% by weight of acid)'],
['★ Constant boiling mixture','HCl and water form a mixture that boils at about 110 °C with 22.2% HCl by weight. On boiling, acid and water both escape in the same proportion as in the liquid, so dilute HCl <b>cannot be concentrated beyond this</b> by boiling or distilling.'])}</table>
${trap('Two reasons for the funnel: (a) prevents back suction (b) large surface area for absorption. Exams often ask for both.','"Rim just touches the water" is the key phrase; a funnel dipped deep would behave like the tube.')}
${exam('Direct absorption causes back suction as HCl is highly soluble; an inverted funnel whose rim just touches the water is used, which prevents back suction and gives a large surface area for absorption.')}`,

ac:`<h3>Dilute hydrochloric acid behaves as a typical acid</h3>
<p><b>Monobasic:</b> HCl ⇌ H⁺ + Cl⁻ gives one H⁺ per molecule; H⁺ + H₂O → H₃O⁺ (hydronium ion). The <b>H⁺ ion</b> gives the acidic properties.</p>
<p><b>In water vs in toluene:</b> water is polar and ionises HCl, so the solution is acidic and an electrolyte. Toluene is non-polar, does not ionise HCl, so that solution shows no acidic properties (blue litmus unchanged) and is a non-electrolyte. HCl is covalent, but behaves like an ionic compound in water.</p>
<table class="cmp"><tr><th>Acid +</th><th>gives</th><th>Examples (book p.155)</th></tr>${tr(
['Active metal','salt + hydrogen','Mg + 2HCl → MgCl₂ + H₂ · Zn + 2HCl → ZnCl₂ + H₂ · Fe + 2HCl → FeCl₂ + H₂ (effervescence)'],
['Base (oxide / hydroxide)','salt + water only','CuO + 2HCl → CuCl₂ + H₂O · Na₂O + 2HCl → 2NaCl + H₂O · NH₄OH + HCl → NH₄Cl + H₂O'],
['Carbonate','salt + water + CO₂','Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂ · CuCO₃ + 2HCl → CuCl₂ + H₂O + CO₂ · (NH₄)₂CO₃ + 2HCl → 2NH₄Cl + H₂O + CO₂'],
['Bicarbonate','salt + water + CO₂','NaHCO₃ + HCl → NaCl + H₂O + CO₂ · Ca(HCO₃)₂ + 2HCl → CaCl₂ + 2H₂O + 2CO₂'],
['Sulphite / bisulphite','salt + water + SO₂','Na₂SO₃ + 2HCl → 2NaCl + H₂O + SO₂ · MgSO₃ + 2HCl → MgCl₂ + H₂O + SO₂ · NaHSO₃ + HCl → NaCl + H₂O + SO₂'],
['Sulphide','salt + H₂S (rotten-egg smell)','Na₂S + 2HCl → 2NaCl + H₂S · FeS + 2HCl → FeCl₂ + H₂S · CuS + 2HCl → CuCl₂ + H₂S'],
['Silver nitrate','white ppt','AgNO₃ + HCl → AgCl↓ + HNO₃ (curdy white)'],
['Lead nitrate','white ppt','Pb(NO₃)₂ + 2HCl → PbCl₂↓ + 2HNO₃ (white, <b>soluble in hot water</b>)'],
['Thiosulphate','yellow S + SO₂','Na₂S₂O₃ + 2HCl → 2NaCl + H₂O + SO₂ + S↓ (pale yellow)'])}</table>
<table class="cmp"><tr><th>Gas</th><th>How to test it</th></tr>${tr(
['H₂','Burns with a pop sound'],['CO₂','Turns lime water milky'],['SO₂','Smell of burning sulphur; turns acidified K₂Cr₂O₇ from orange to green (and pink KMnO₄ colourless)'],['H₂S','Rotten-egg smell; turns moist lead acetate paper black'])}</table>
${watch('reaction of dilute hydrochloric acid with metals carbonates')} ${watch('lead nitrate and silver nitrate with hydrochloric acid precipitate')}
${trap('Metals <b>below hydrogen</b> (Cu, Ag, Hg, Au) give no hydrogen with dil. HCl.','Sulph<b>ite</b> → SO₂; sulph<b>ide</b> → H₂S; sulph<b>ate</b> → no gas. Read the ending!','A base gives salt and water <b>only</b>, no gas.')}
${cy(['Which gives a foul-smelling gas with dil. HCl: Na₂SO₃, Na₂S, NaHSO₃ or Na₂SO₄?','Na₂S (gives H₂S).'],['What ion makes the solution acidic?','H⁺ (as H₃O⁺).'])}`,

ox:`<h3>Conc. HCl with oxidising agents · aqua regia · tests · uses</h3>
${story('An oxidising agent <b>removes hydrogen</b> from HCl. Take the H away from H–Cl and what is left is chlorine. That is why every oxidising agent here releases Cl₂, and why these reactions are used to <b>prepare chlorine</b>. HCl itself is a mild <b>reducing</b> agent.')}
<table class="cmp"><tr><th>Oxidising agent</th><th>Equation (with <b>conc.</b> HCl, heat)</th></tr>${tr(
['MnO₂ (black-brown)','MnO₂ + 4HCl → MnCl₂ (pale pink) + 2H₂O + Cl₂'],
['PbO₂ (dark brown)','PbO₂ + 4HCl → PbCl₂ (white) + 2H₂O + Cl₂'],
['Pb₃O₄ red lead (bright red)','Pb₃O₄ + 8HCl → 3PbCl₂ + 4H₂O + Cl₂'],
['KMnO₄','2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 8H₂O + 5Cl₂'],
['K₂Cr₂O₇','K₂Cr₂O₇ + 14HCl → 2KCl + 2CrCl₃ + 7H₂O + 3Cl₂'],
['conc. HNO₃','HNO₃ + 3HCl → NOCl (nitrosyl chloride) + 2H₂O + 2[Cl] (nascent)'])}</table>
<p><b>★ Aqua regia:</b> 1 part conc. HNO₃ + 3 parts conc. HCl (by volume). Its nascent chlorine dissolves the noble metals: Au + 3[Cl] → AuCl₃ (gold(III) chloride); Pt + 4[Cl] → PtCl₄ (platinum(IV) chloride). These metals are insoluble in all other acids.</p>
<table class="cmp"><tr><th>Test for HCl</th><th>Observation</th></tr>${tr(
['Glass rod dipped in ammonia solution near the vapours','Dense white fumes of NH₄Cl: NH₃ + HCl → NH₄Cl'],
['AgNO₃ solution to dil. HCl (acidified with dil. HNO₃)','Curdy white ppt of AgCl, <b>soluble in excess NH₄OH</b> (AgCl + 2NH₄OH → [Ag(NH₃)₂]Cl + 2H₂O, diammine silver chloride), <b>insoluble</b> in dil. HNO₃. This also tells dil. HCl apart from dil. HNO₃.'],
['Heat with MnO₂ (conc. HCl)','Greenish-yellow Cl₂ evolved: proves HCl contains chlorine'],
['Blue litmus','Turns red'])}</table>
${flow('Add AgNO₃ to the solution','⚪ Curdy <b>white</b> ppt','Add excess NH₄OH','AgCl <b>dissolves</b> → chloride (HCl) confirmed')}
${watch('test for chloride ion silver nitrate ammonium hydroxide')} ${watch('manganese dioxide concentrated hydrochloric acid chlorine')}
<p><b>Proving HCl contains hydrogen:</b> add an active metal such as Mg, Zn or Fe: H₂ is given off.</p>
<table class="cmp"><tr><th>Uses</th><th></th></tr>${tr(
['Manufacture','dyes, drugs, paints · AgCl for photographic films · glucose from starch'],['Industries','tanning, soldering'],
['Glue from bones','dissolves the calcium phosphate in bones'],['Pickling before galvanizing','dissolves the oxide coating and cleans the metal surface'],['Aqua regia','dissolves gold and platinum'])}</table>
${trap('AgCl dissolves in excess NH₄OH; PbCl₂ does <b>not</b>. PbCl₂ dissolves in <b>hot water</b>.','Use <b>conc.</b> HCl with the oxidising agents.','Conc. HNO₃ and conc. H₂SO₄ are oxidising agents; conc. HCl is not.')}`,

eq:`<h3>Equation bank for chapter 7A</h3>
<p>Balance each one by counting Cl last: write the products, balance the metal, then put the right number in front of HCl.</p>
<table class="cmp"><tr><th>Reaction</th><th>Balanced equation</th></tr>${tr(
['Synthesis','H₂ + Cl₂ → 2HCl (diffused sunlight)'],
['Lab, &lt; 200 °C','NaCl + H₂SO₄ → NaHSO₄ + HCl'],
['Above 200 °C','NaCl + NaHSO₄ → Na₂SO₄ + HCl · overall 2NaCl + H₂SO₄ → Na₂SO₄ + 2HCl'],
['Dissociation','2HCl ⇌ H₂ + Cl₂ (&gt;500 °C)'],
['Ammonia','NH₃ + HCl → NH₄Cl'],
['Monobasic','HCl ⇌ H⁺ + Cl⁻ ; H⁺ + H₂O → H₃O⁺'],
['Aluminium','2Al + 6HCl → 2AlCl₃ + 3H₂'],
['Iron with chlorine (not HCl)','2Fe + 3Cl₂ → 2FeCl₃'])}</table>
<p>All the acid, oxidising-agent and test equations are in the tables of sections 5 and 6.</p>`
};

/* ---------------- Concepts tab: the chapter in book order ---------------- */
const CHAPTER=[
{id:'s-a',title:'Syllabus & A. Introduction',ref:'p.149',t:['pr'],html:`
<p><b>Syllabus (from March 2027):</b> preparation of HCl from sodium chloride (reactants, product, condition, equation, observation, precaution, apparatus, procedure, collection, identification); simple experiment to show density (heavier than air); solubility (fountain experiment); preparation of hydrochloric acid by dissolving the gas in water (the special arrangement that avoids back suction); reaction with ammonia; acidic properties of its solution (metals, oxides, hydroxides, carbonates, hydrogen carbonates, sulphides, sulphites); aqua regia (composition and uses); precipitation with silver nitrate and lead nitrate; tests for HCl gas and hydrochloric acid.</p>
<ul><li><b>★ Discovery:</b> a solution of HCl gas was named <b>muriatic acid</b>. 1648 Glauber made HCl from rock salt and conc. H₂SO₄; 1772 Priestley got it pure and called the solution "marine acid", later named muriatic acid by Lavoisier; 1810 Davy named it hydrogen chloride.</li>
<li><b>Occurrence:</b> free state in volcanic gases and in the gastric juices of mammals. The H–Cl bond is <b>polar covalent</b> (different electronegativities).</li></ul>`},
{id:'s-b',title:'B. Preparation of HCl gas',ref:'p.149–151',t:['pr'],html:()=>CONCEPT.pr},
{id:'s-c',title:'C1. Physical properties · heavier than air · fountain',ref:'p.151–152',t:['pp'],html:()=>CONCEPT.pp},
{id:'s-d',title:'C2. Chemical properties of HCl gas',ref:'p.153',t:['cp'],html:()=>CONCEPT.cp},
{id:'s-e',title:'D. Hydrochloric acid: preparation · E1. physical properties',ref:'p.154',t:['ap'],html:()=>CONCEPT.ap},
{id:'s-f',title:'E2. Dilute HCl as an acid',ref:'p.155',t:['ac'],html:()=>CONCEPT.ac},
{id:'s-g',title:'E2. Oxidising agents & aqua regia · F. Tests · G. Uses',ref:'p.156–157',t:['ox'],html:()=>CONCEPT.ox},
{id:'s-h',title:'Summary of equations',ref:'p.158',t:['eq'],html:()=>CONCEPT.eq}
].map(s=>({...s,html:typeof s.html==='function'?s.html():s.html}));
const TOPIC_SEC={pr:'s-b',pp:'s-c',cp:'s-d',ap:'s-e',ac:'s-f',ox:'s-g',eq:'s-h'};

/* ---------------- Questions ---------------- */
const Q=[
/* ===== 1. Preparation of HCl gas ===== */
{id:'y14-1',t:'pr',src:'p.159 · 2014 Q1',ref:'p.151',type:'fill',q:'Quicklime is not used to dry HCl gas because {0}.',
 blanks:[{o:['CaO is alkaline','CaO is acidic','CaO is neutral'],a:0}],
 hint:'HCl is an acid. What does an acid do with a base?',exp:'CaO is a basic (alkaline) oxide, so it reacts with the acid gas: CaO + 2HCl → CaCl₂ + H₂O.'},
{id:'y15-3',t:'pr',src:'p.159 · 2015 Q3(i)(ii)',ref:'p.150–151',type:'open',q:'With reference to the laboratory preparation of hydrogen chloride gas:<br>i] Write the equation for its preparation, mentioning the condition required.<br>ii] Name the drying agent used and give a reason for the choice.',
 hint:'Rock salt + an acid that is non-volatile. The drying agent must not react with HCl.',
 model:'i] NaCl + H₂SO₄ (conc.) —(below 200 °C)→ NaHSO₄ + HCl<br>ii] <b>Conc. sulphuric acid</b>: it absorbs moisture but does not react with HCl (CaO and P₂O₅ react with it).'},
{id:'y17-4',t:'pr',src:'p.159 · 2017 Q4',ref:'p.150',type:'fill',q:'Identify A and B. Lab preparation of HCl gas · reactants NaCl + H₂SO₄ · products formed: {0} · drying agent conc. H₂SO₄ · method of collection: {1}',
 blanks:[{o:['NaHSO₄ + HCl','Na₂SO₄ + H₂O','NaHSO₃ + HCl'],a:0},{o:['Upward displacement of air','Downward displacement of air','Over water'],a:0}],
 hint:'Below 200 °C the acid salt forms. HCl is heavier than air.',exp:'A = sodium bisulphate NaHSO₄ and HCl gas. B = upward displacement of air (HCl is 1.28 times heavier than air and highly soluble in water).'},
{id:'y18-4',t:'pr',src:'p.159 · 2018 Q4',ref:'p.151',type:'fill',q:'Dry hydrogen chloride gas can be collected by {0} displacement of air.',
 blanks:[{o:['downward','upward'],a:1}],hint:'Heavier than air: gas jar kept upright.',exp:'<b>Upward</b> displacement of air: the heavier HCl sinks and pushes the air up and out.'},
{id:'y18-5',t:'pr',src:'p.159 · 2018 Q5',ref:'p.151',type:'open',q:'In the preparation of hydrogen chloride gas in the laboratory, name the acid used and state why this particular acid is preferred to other acids.',
 hint:'Think about volatility.',model:'<b>Concentrated sulphuric acid</b>. It is non-volatile with a high boiling point, so it displaces the volatile HCl from NaCl. (Conc. HNO₃ is volatile and would come out with the HCl.)'},
{id:'y18-6',t:'pr',src:'p.159 · 2018 Q6',ref:'p.150',type:'open',q:'Write a balanced chemical equation for the laboratory preparation of hydrogen chloride gas.',
 hint:'Below 200 °C.',model:'NaCl + H₂SO₄ —(&lt;200 °C)→ NaHSO₄ + HCl'},
{id:'y19-1',t:'pr',src:'p.159 · 2019 Q1',ref:'p.151',type:'mcq',q:'The drying agent used to dry HCl gas is:',opts:['Conc. H₂SO₄','ZnO','Al₂O₃','CaO'],ans:0,
 hint:'It must not react with an acid gas.',exp:'Conc. H₂SO₄. CaO, ZnO and Al₂O₃ are basic or amphoteric oxides that would react with HCl.'},
{id:'y19-2',t:'pr',src:'p.159 · 2019 Q2',ref:'p.150',type:'fill',q:'When sodium chloride is heated with conc. sulphuric acid below 200 °C, one of the products formed is {0}.',
 blanks:[{o:['sodium hydrogen sulphate','sodium sulphate','chlorine'],a:0}],hint:'Acid salt below 200 °C.',exp:'NaCl + H₂SO₄ → <b>NaHSO₄</b> (sodium hydrogen sulphate) + HCl.'},
{id:'y20-3',t:'pr',src:'p.160 · 2020 Q3',ref:'p.150–151',type:'open',q:'HCl gas is prepared in the lab using conc. H₂SO₄ and NaCl.<br>i] Give the balanced equation with suitable condition(s).<br>ii] State why conc. sulphuric acid is used instead of conc. nitric acid.<br>iii] How is the gas collected?<br>iv] Name the drying agent <b>not</b> used for drying the gas.',
 hint:'Volatility, density, and which oxide reacts with acids.',
 model:'i] NaCl + H₂SO₄ —(&lt;200 °C)→ NaHSO₄ + HCl<br>ii] Conc. H₂SO₄ is non-volatile; conc. HNO₃ is volatile and would volatilise along with the HCl.<br>iii] By upward displacement of air.<br>iv] Quicklime (CaO) or phosphorus pentoxide (P₂O₅).'},
{id:'y21-1i',t:'pr',src:'p.160 · 2021-22 Q1(i)',ref:'p.151',type:'mcq',q:'Hydrogen chloride gas is not collected over water, as it is:',opts:['Highly soluble in water','Less soluble in water','Lighter than air','Heavier than air'],ans:0,
 hint:'What would the water do to it?',exp:'It is highly soluble (1 vol water dissolves about 452 vols HCl), so it would dissolve instead of collecting.'},
{id:'y23-1',t:'pr',src:'p.160 · 2023 Q1',ref:'p.151',type:'mcq',q:'In the lab preparation, HCl gas is dried by passing through:',opts:['Dil. nitric acid','Conc. sulphuric acid','Dil. sulphuric acid','Acidified water'],ans:1,
 hint:'A dilute acid is mostly water.',exp:'Conc. H₂SO₄ is the drying agent. Dilute acids and water would dissolve the gas.'},
{id:'y23-3',t:'pr',src:'p.160 · 2023 Q3',ref:'p.151',type:'open',q:'State a relevant reason: Hydrogen chloride gas cannot be dried over quicklime.',
 hint:'Nature of CaO.',model:'Quicklime is alkaline (basic) and reacts with the acidic HCl gas: CaO + 2HCl → CaCl₂ + H₂O.'},
{id:'y24-2',t:'pr',src:'p.160 · 2024 Q2',ref:'p.150–151',type:'open',q:'HCl gas is prepared in the laboratory by the action of conc. sulphuric acid on sodium chloride.<br>a] Give a balanced equation for the reaction.<br>b] State the method of collection of the gas.<br>c] What is the property of sulphuric acid that makes it a suitable reagent for the reaction?',
 hint:'Below 200 °C · density · volatility.',model:'a] NaCl + H₂SO₄ —(&lt;200 °C)→ NaHSO₄ + HCl<br>b] Upward displacement of air.<br>c] It is <b>non-volatile</b> (high boiling point), so it displaces the volatile HCl.'},
{id:'mcq3',t:'pr',src:'p.160 · MCQ 3',ref:'p.150',type:'mcq',q:'In the lab preparation of HCl gas from rock salt and conc. acid, the salt formed as a by-product contains:',opts:['Sulphate ions','Bisulphate ions','Bisulphite ions','Both (a) and (b)'],ans:1,
 hint:'Below 200 °C the product is NaHSO₄.',exp:'NaHSO₄ contains <b>bisulphate</b> (HSO₄⁻) ions. Bisulphite is HSO₃⁻, a different ion.'},
{id:'h1',t:'pr',src:'p.161 · HOTS Q1',ref:'p.149',type:'fill',q:'(a) A solution of HCl gas was named {0}.<br>(b) The two conditions for synthesis of HCl gas are moisture and {1}.',
 blanks:[{o:['aquafortis','muriatic acid'],a:1},{o:['diffused sunlight','direct sunlight'],a:0}],
 hint:'Direct sunlight makes it explode.',exp:'Muriatic acid. H₂ + Cl₂ → 2HCl in diffused sunlight (explosive in direct sunlight); moisture is a catalyst. (Aqua fortis is nitric acid.)'},
{id:'h2',t:'pr',src:'p.161 · HOTS Q2',ref:'p.150–151',type:'mcq',q:'Which reaction is <b>incorrect</b> for the lab preparation of HCl gas?<br>A: 2NaCl + H₂SO₄ (conc.) —(&gt;200 °C)→ Na₂SO₄ + 2HCl<br>B: NaCl + H₂SO₄ (conc.) —(&lt;200 °C)→ NaHSO₄ + HCl',opts:['A','B'],ans:0,
 hint:'Which temperature is not used, and why?',exp:'<b>A</b> is not used. Above 200 °C fuel is wasted, the glass apparatus may crack, and sodium sulphate forms a hard crust that sticks to the flask and is difficult to remove.'},
{id:'h3',t:'pr',src:'p.161 · HOTS Q3',ref:'p.150–151',type:'fill',q:'In the lab preparation of HCl gas from rock salt, choose what is used or preferred:<br>(a) metallic chloride: {0} (b) acid: {1} (c) temperature: {2} (d) drying agent: {3}<br>(e) precaution: {4} (f) collection: {5} (g) identification: {6}',
 blanks:[{o:['NaCl','CaCl₂'],a:0},{o:['conc. H₂SO₄','conc. HNO₃'],a:0},{o:['less than 200 °C','over 200 °C'],a:0},{o:['conc. H₂SO₄','P₂O₅'],a:0},{o:['heating the mixture initially slowly','rapid heating'],a:0},{o:['upward displacement of air','downward displacement of air'],a:0},{o:['glass rod dipped in NH₄OH soln.','NaOH soln.'],a:0}],
 hint:'Give a reason for each one too.',exp:'(a) NaCl: cheap and easily available. (b) conc. H₂SO₄: non-volatile. (c) &lt;200 °C: saves fuel, glass does not crack, no hard crust. (d) conc. H₂SO₄: P₂O₅ reacts with HCl. (e) heat slowly: controls the evolution of HCl. (f) upward displacement: HCl is heavier than air. (g) NH₄OH: dense white fumes of NH₄Cl.'},
{id:'u2-1',t:'pr',src:'p.162 · Unit test Q.2(1)',ref:'p.151',type:'open',q:'Give a reason: In the laboratory preparation of HCl from NaCl and conc. H₂SO₄, the residual salt formed at temperatures above 200 °C forms a hard crust and sticks to the glass.',
 hint:'Which salt forms above 200 °C?',model:'Above 200 °C the normal salt <b>sodium sulphate</b> forms (2NaCl + H₂SO₄ → Na₂SO₄ + 2HCl). Na₂SO₄ forms a hard crust that sticks to the glass and is difficult to remove; so the temperature is kept below 200 °C.'},
{id:'u3-2',t:'pr',src:'p.162 · Unit test Q.3(1)(2)',ref:'p.149–150',type:'fill',q:'1. An aqueous solution of HCl gas is named {0}.<br>2. The salt obtained when rock salt reacts with conc. H₂SO₄ below 200 °C is a/an {1} salt.',
 blanks:[{o:['aqua fortis','muriatic acid','oil of vitriol'],a:1},{o:['acid','normal'],a:0}],hint:'NaHSO₄ still has a replaceable H.',exp:'Muriatic acid (aqua fortis = HNO₃, oil of vitriol = H₂SO₄). NaHSO₄ is an <b>acid</b> salt.'},

/* ===== 2. Physical properties & fountain ===== */
{id:'y14-4',t:'pp',src:'p.159 · 2014 Q4',ref:'p.152, 170',type:'open',q:'Study the figure: a flask of gas Y with a jet tube and a dropper of water stands over a trough of blue litmus; a spray comes out of the jet.<br>i] Identify the gas Y.<br>ii] What property of gas Y does this experiment demonstrate?<br>iii] Name another gas with the same property that can be similarly demonstrated.',
 hint:'Fountain experiment · blue litmus turns red.',model:'i] Hydrogen chloride (HCl).<br>ii] Its <b>high solubility</b> in water (and that it is acidic: red fountain).<br>iii] Ammonia (NH₃).'},
{id:'y16-1',t:'pp',src:'p.159 · 2016 Q1',ref:'p.152',type:'mcq',q:'The aim of the fountain experiment is to prove that:',opts:['HCl turns blue litmus red','HCl is denser than air','HCl is highly soluble in water','HCl fumes in moist air'],ans:2,
 hint:'Why does the partial vacuum form?',exp:'The fountain shows <b>high solubility</b> of HCl in water.'},
{id:'y20-1',t:'pp',src:'p.159 · 2020 Q1',ref:'p.152',type:'open',q:'State one relevant reason: Hydrogen chloride gas fumes in moist air.',
 hint:'Solubility.',model:'HCl is highly soluble in water. It dissolves in the moisture of the air and forms a mist of tiny droplets of hydrochloric acid, seen as fumes.'},
{id:'y21-2',t:'pp',src:'p.160 · 2021-22 Q2',ref:'p.152',type:'word',q:'Identify the term: the experiment used to demonstrate the high solubility of HCl gas.',
 accept:['fountain experiment','fountain','the fountain experiment'],ansText:'Fountain experiment',hint:'Something shoots up.',exp:'The <b>fountain experiment</b>.'},
{id:'mcq4',t:'pp',src:'p.160 · MCQ 4',ref:'p.151',type:'mcq',q:'The gases both highly soluble in water and heavier than air:',opts:['Ammonia & oxygen','Hydrogen chloride gas & ammonia','Nitrogen & hydrogen chloride gas','Hydrogen chloride gas & sulphur dioxide'],ans:3,
 hint:'NH₃ is lighter than air; O₂ and N₂ are only slightly soluble.',exp:'HCl and SO₂ are both highly soluble and heavier than air (VD 18.25 and 32 vs air 14.4).'},
{id:'mcq5',t:'pp',src:'p.160 · MCQ 5',ref:'p.152',type:'mcq',q:'The fountain experiment:',opts:['Infers acidic nature of HCl','Shows that HCl is heavier than air','Demonstrates high solubility of HCl in water','Both (a) & (c)'],ans:3,
 hint:'What does the red colour tell you? What does the fountain tell you?',exp:'The fountain shows high solubility, and the blue litmus turning red shows HCl is acidic: both (a) and (c).'},
{id:'h5',t:'pp',src:'p.161 · HOTS Q5',ref:'p.152, 47, 175',type:'open',q:'State your observations in each case of the fountain experiment:<br>A: dry HCl gas, trough of <b>blue</b> litmus solution.<br>B: dry HCl gas, trough of <b>red</b> litmus solution.<br>C: dry <b>ammonia</b> gas, trough of <b>neutral (purple)</b> litmus solution.',
 hint:'Acidic gas → red; basic gas → blue.',model:'A: blue litmus rises up the jet tube and comes out as a <b>red</b> fountain.<br>B: red litmus rises and comes out as a <b>red</b> fountain (no colour change).<br>C: purple litmus rises and comes out as a <b>blue</b> fountain.'},
{id:'u2-3',t:'pp',src:'p.162 · Unit test Q.2(3)',ref:'p.152',type:'open',q:'Give a reason: In the fountain experiment, <i>dry</i> HCl gas is filled in the round-bottom flask.',
 hint:'What would water already in the flask do?',model:'If the flask were moist, HCl would dissolve in that water beforehand; the gas would be used up, and no partial vacuum (no fountain) would form when the dropper is squeezed.'},
{id:'u2-5',t:'pp',src:'p.162 · Unit test Q.2(5)',ref:'p.151–152',type:'open',q:'Give a reason: Hydrogen chloride gas fumes in moist air but hydrogen sulphide gas does not.',
 hint:'Compare solubilities (p.151).',model:'HCl is <b>highly</b> soluble in water and forms droplets of acid in moist air (fumes). H₂S is only <b>fairly</b> soluble, so it does not form such droplets.'},
{id:'u5-3',t:'pp',src:'p.162 · Unit test Q.5(3)',ref:'p.151',type:'mcq',q:'The gas which is heavier than air and highly soluble in water:',opts:['NH₃','HCl','CO₂','H₂S'],ans:1,
 hint:'NH₃ is lighter; CO₂ and H₂S are only fairly soluble.',exp:'<b>HCl</b>.'},

/* ===== 3. Chemical properties of HCl gas ===== */
{id:'y15-1',t:'cp',src:'p.159 · 2015 Q1',ref:'p.153',type:'mcq',q:'From ammonia, ethane, hydrogen chloride, hydrogen sulphide, ethyne: the gas which produces dense white fumes with ammonia gas is',opts:['Ammonia','Ethane','Hydrogen chloride','Hydrogen sulphide','Ethyne'],ans:2,
 hint:'Acid gas + basic gas → solid salt.',exp:'NH₃ + HCl → NH₄Cl (dense white fumes).'},
{id:'y17-2',t:'cp',src:'p.159 · 2017 Q2',ref:'p.153',type:'word',q:'Identify the substance: a <u>solid</u> formed by the reaction of two gases, one of which is acidic and the other basic in nature.',
 accept:['ammonium chloride','nh4cl'],ansText:'Ammonium chloride (NH₄Cl)',hint:'NH₃ + HCl.',exp:'NH₃ (basic) + HCl (acidic) → NH₄Cl (solid).'},
{id:'y20-2i',t:'cp',src:'p.160 · 2020 Q2(i)',ref:'p.153',type:'mcq',q:'The indicator which does not change colour on passage of HCl gas is:',opts:['Methyl orange','Moist blue litmus','Phenolphthalein'],ans:2,
 hint:'Which one is colourless in both acid and neutral?',exp:'Phenolphthalein stays colourless in acid. Methyl orange turns pink and blue litmus turns red.'},
{id:'h4',t:'cp',src:'p.161 · HOTS Q4',ref:'p.152–153',type:'fill',q:'(a) The gas which fumes in moist air: {0}<br>(b) The gas which combines with HCl gas to give dense white fumes of solid particles: {1}<br>(c) The simple displacement reaction between iron and HCl gas gives {2}',
 blanks:[{o:['H₂S','HCl','H₂'],a:1},{o:['Cl₂','NH₃','H₂S'],a:1},{o:['iron(III) chloride','iron(II) chloride'],a:1}],
 hint:'The lower chloride forms with iron.',exp:'(a) HCl (b) NH₃ → NH₄Cl (c) Fe + 2HCl → FeCl₂ + H₂: iron(II) chloride.'},
{id:'h6',t:'cp',src:'p.161 · HOTS Q6',ref:'p.153',type:'mcq',q:'Which indicator reaction represents HCl gas?<br>A: methyl orange remains orange; alkaline phenolphthalein turns pink<br>B: methyl orange turns pink; alkaline phenolphthalein turns colourless<br>C: methyl orange turns pink; alkaline phenolphthalein remains colourless',opts:['A','B','C'],ans:1,
 hint:'Alkaline phenolphthalein starts pink.',exp:'<b>B</b>. Methyl orange: orange → pink. Alkaline phenolphthalein starts pink, so the acid turns it colourless (it cannot "remain" colourless).'},
{id:'h7',t:'cp',src:'p.161 · HOTS Q7',ref:'p.153, 172',type:'open',q:'Give balanced equations for the conversions A + B → C and C ⇌ A + B (thermal dissociation), where A is a basic gas, B an acidic gas and C an ammonium salt.',
 hint:'The dense white fumes reaction.',model:'NH₃ + HCl → NH₄Cl<br>NH₄Cl ⇌ NH₃ + HCl (on heating)'},
{id:'u2-2',t:'cp',src:'p.162 · Unit test Q.2(2)',ref:'p.153',type:'open',q:'Give a reason: Dense white fumes are obtained when a jar of HCl gas is inverted over a jar of ammonia gas.',
 hint:'Two gases make a solid.',model:'Basic ammonia combines with acidic HCl to form solid ammonium chloride, whose fine particles are suspended in air as dense white fumes: NH₃ + HCl → NH₄Cl.'},
{id:'u3-5',t:'cp',src:'p.162 · Unit test Q.3(5)',ref:'p.153',type:'fill',q:'The indicator which does not change colour on passage of hydrogen chloride gas is {0}.',
 blanks:[{o:['moist blue litmus','phenolphthalein','methyl orange'],a:1}],hint:'Colourless in acid and neutral.',exp:'Phenolphthalein.'},

/* ===== 4. Hydrochloric acid: preparation & physical ===== */
{id:'y15-3iii',t:'ap',src:'p.159 · 2015 Q3(iii)',ref:'p.154',type:'open',q:'State a safety precaution taken during the preparation of hydrochloric acid.',
 hint:'Back suction.',model:'HCl gas is not passed directly into water through a delivery tube; an <b>inverted funnel</b> whose rim just touches the water is used, to prevent back suction.'},
{id:'y18-7',t:'ap',src:'p.159 · 2018 Q7',ref:'p.154',type:'open',q:'For the preparation of hydrochloric acid in the laboratory:<br>i] State why direct absorption of HCl gas in water is not feasible.<br>ii] State what arrangement is used to dissolve HCl gas in water.',
 hint:'Very high solubility → partial vacuum.',model:'i] HCl is extremely soluble, so a partial vacuum forms in the delivery tube and water is pushed back into the apparatus (<b>back suction</b>), damaging it.<br>ii] An <b>inverted funnel arrangement</b>: rim just touching the water. It prevents back suction and gives a large surface area for absorption.'},
{id:'mcq6',t:'ap',src:'p.160 · MCQ 6',ref:'p.154',type:'mcq',q:'Hydrochloric acid is not prepared by direct absorption in water using a delivery tube since:',opts:['HCl gas is absorbed slowly','A complete vacuum is created in the tube','The water pushed up may damage the apparatus','A larger surface area for absorption is made available'],ans:2,
 hint:'Partial, not complete, vacuum.',exp:'Back suction pushes water into the apparatus and damages it.'},
{id:'h8',t:'ap',src:'p.161 · HOTS Q8',ref:'p.154',type:'open',q:'State the arrangements (a) not used and (b) used for converting HCl gas to hydrochloric acid.',
 hint:'Tube vs funnel.',model:'(a) Not used: a delivery tube dipped directly into water (causes back suction).<br>(b) Used: an inverted funnel attached to the delivery tube with its rim just touching the water in the trough.'},
{id:'h9',t:'ap',src:'p.161 · HOTS Q9',ref:'p.154',type:'open',q:'Is this statement true? Justify: "Dilute HCl acid cannot be concentrated beyond a certain concentration by distilling or boiling the dilute acid."',
 hint:'Constant boiling mixture.',model:'<b>True.</b> HCl and water form a <b>constant boiling mixture</b> (about 22.2% HCl by weight, b.p. about 110 °C). On boiling, acid and water vaporise in the same proportion as in the liquid, so the concentration does not rise further.'},
{id:'u3-3',t:'ap',src:'p.162 · Unit test Q.3(3)',ref:'p.154',type:'fill',q:'In the preparation of HCl acid from HCl gas, a funnel arrangement provides {0} surface area for absorption of the gas.',
 blanks:[{o:['less','more'],a:1}],hint:'The wide mouth of the funnel.',exp:'<b>More</b> (a large) surface area.'},

/* ===== 5. Dilute HCl as an acid ===== */
{id:'y13-1i',t:'ac',src:'p.159 · 2013 Q1(i)',ref:'p.155',type:'word',q:'Identify the gas evolved when potassium sulphite is treated with dil. hydrochloric acid.',
 accept:['sulphur dioxide','sulfur dioxide','so2','so'],ansText:'Sulphur dioxide (SO₂)',hint:'Sulph-ITE.',exp:'K₂SO₃ + 2HCl → 2KCl + H₂O + SO₂.'},
{id:'y13-2i',t:'ac',src:'p.159 · 2013 Q2(i)',ref:'p.155',type:'open',q:'State one appropriate observation: Copper sulphide is treated with dil. hydrochloric acid.',
 hint:'Sulph-IDE → which gas?',model:'A gas with a <b>rotten-egg smell</b> (H₂S) is evolved; it turns moist lead acetate paper black. CuS + 2HCl → CuCl₂ + H₂S.',
 exp:'This is the book’s answer (p.155). In a real lab, black CuS hardly reacts with dilute HCl; the exam expects H₂S.'},
{id:'y14-2',t:'ac',src:'p.159 · 2014 Q2',ref:'p.155',type:'open',q:'Write a balanced equation for the action of dilute hydrochloric acid on sodium sulphide.',
 hint:'Sulphide → H₂S.',model:'Na₂S + 2HCl → 2NaCl + H₂S'},
{id:'y14-3',t:'ac',src:'p.159 · 2014 Q3',ref:'p.155',type:'open',q:'State your observation: Dilute HCl is added to sodium carbonate crystals.',
 hint:'Carbonate → which gas?',model:'Brisk <b>effervescence</b> of a colourless, odourless gas (CO₂) that turns lime water milky. Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂.'},
{id:'y16-3',t:'ac',src:'p.159 · 2016 Q3',ref:'p.155',type:'open',q:'Write a balanced chemical equation for the action of hydrochloric acid on sodium bicarbonate.',
 hint:'One HCl per NaHCO₃.',model:'NaHCO₃ + HCl → NaCl + H₂O + CO₂'},
{id:'y16-4',t:'ac',src:'p.159 · 2016 Q4',ref:'p.155',type:'open',q:'State your observations when dilute hydrochloric acid is added to:<br>i] lead nitrate solution and the mixture is heated<br>ii] copper carbonate<br>iii] sodium thiosulphate.',
 hint:'PbCl₂ is soluble in hot water. CuCl₂ solution is blue-green. Thiosulphate gives sulphur.',
 model:'i] A <b>white precipitate</b> of PbCl₂ forms, which <b>dissolves on heating</b> (soluble in hot water).<br>ii] The green solid dissolves with brisk <b>effervescence</b> of CO₂ (turns lime water milky), giving a bluish-green solution of CuCl₂.<br>iii] A <b>pale yellow precipitate</b> (turbidity) of sulphur forms and SO₂ with a burning-sulphur smell is given off: Na₂S₂O₃ + 2HCl → 2NaCl + H₂O + SO₂ + S.'},
{id:'y16-5',t:'ac',src:'p.159 · 2016 Q5',ref:'p.155',type:'open',q:'Give the chemical test for the gas formed when dil. HCl reacts with: i] sodium sulphite ii] iron(II) sulphide.',
 hint:'SO₂ and H₂S each have a paper test.',model:'i] SO₂: turns <b>acidified potassium dichromate</b> paper/solution from orange to <b>green</b> (also smells of burning sulphur).<br>ii] H₂S: turns moist <b>lead acetate</b> paper <b>black</b> (rotten-egg smell).'},
{id:'y17-1',t:'ac',src:'p.159 · 2017 Q1',ref:'p.155',type:'fill',q:'Potassium sulphite on reacting with dil. HCl releases {0} gas.',
 blanks:[{o:['Cl₂','SO₂','H₂S'],a:1}],hint:'Sulph-ITE.',exp:'K₂SO₃ + 2HCl → 2KCl + H₂O + SO₂.'},
{id:'y17-3',t:'ac',src:'p.159 · 2017 Q3',ref:'p.155',type:'open',q:'State one relevant observation: action of dilute hydrochloric acid on iron(II) sulphide.',
 hint:'Smell.',model:'A colourless gas with a <b>rotten-egg smell</b> (H₂S) is evolved; it turns lead acetate paper black. FeS + 2HCl → FeCl₂ + H₂S.'},
{id:'y18-1',t:'ac',src:'p.159 · 2018 Q1',ref:'p.155',type:'open',q:'Write a balanced chemical equation for the action of dil. hydrochloric acid on magnesium sulphite.',
 hint:'Sulphite → SO₂.',model:'MgSO₃ + 2HCl → MgCl₂ + H₂O + SO₂'},
{id:'y18-2',t:'ac',src:'p.159 · 2018 Q2',ref:'p.155',type:'open',q:'State one observation: Lead nitrate solution is mixed with dilute hydrochloric acid and heated.',
 hint:'PbCl₂ and hot water.',model:'A white precipitate of lead chloride forms, which dissolves on heating. Pb(NO₃)₂ + 2HCl → PbCl₂↓ + 2HNO₃.'},
{id:'y18-3',t:'ac',src:'p.159 · 2018 Q3',ref:'p.155',type:'word',q:'Name the gas produced during the action of dilute hydrochloric acid on sodium sulphide.',
 accept:['hydrogen sulphide','hydrogen sulfide','h2s','hs'],ansText:'Hydrogen sulphide (H₂S)',hint:'Sulph-IDE.',exp:'Na₂S + 2HCl → 2NaCl + H₂S.'},
{id:'y19-3',t:'ac',src:'p.159 · 2019 Q3',ref:'p.155',type:'open',q:'State one observation: a small piece of zinc is added to dilute hydrochloric acid.',
 hint:'Active metal.',model:'Brisk effervescence of a colourless gas (H₂) that burns with a pop sound; the zinc dissolves. Zn + 2HCl → ZnCl₂ + H₂.'},
{id:'y21-1ii',t:'ac',src:'p.160 · 2021-22 Q1(ii)',ref:'p.155',type:'mcq',q:'The metallic oxide which reacts with HCl and forms salt and water:',opts:['Carbon monoxide','Nitrous oxide','Ammonium hydroxide','Sodium oxide'],ans:3,
 hint:'Only one option is a metal oxide.',exp:'Na₂O + 2HCl → 2NaCl + H₂O. CO and N₂O are neutral non-metal oxides; NH₄OH is not an oxide.'},
{id:'y21-3ii',t:'ac',src:'p.160 · 2021-22 Q3(ii)',ref:'p.155',type:'open',q:'Write the balanced equation: Zinc reacts with dilute hydrochloric acid to form zinc chloride.',
 hint:'Active metal.',model:'Zn + 2HCl → ZnCl₂ + H₂'},
{id:'y23-4',t:'ac',src:'p.160 · 2023 Q4',ref:'p.155',type:'mcq',q:'The compound that will produce SO₂ gas on reaction with dil. HCl is:',opts:['Iron','Magnesium sulphite','Zinc','Sodium sulphide','Lead','Ferric chloride','Copper','Ferrous sulphate'],ans:1,
 hint:'Sulph-ITE.',exp:'MgSO₃ + 2HCl → MgCl₂ + H₂O + SO₂. Sodium sulphide gives H₂S; ferrous sulphate gives no gas.'},
{id:'y23-5',t:'ac',src:'p.160 · 2023 Q5',ref:'p.155',type:'open',q:'Write a balanced chemical equation: ferrous sulphide to hydrogen sulphide using HCl acid.',
 hint:'Iron(II) stays iron(II).',model:'FeS + 2HCl → FeCl₂ + H₂S'},
{id:'y25-1',t:'ac',src:'p.160 · 2025 Q1',ref:'p.155',type:'word',q:'Name the gas produced when ferrous sulphide reacts with dilute hydrochloric acid.',
 accept:['hydrogen sulphide','hydrogen sulfide','h2s','hs'],ansText:'Hydrogen sulphide (H₂S)',hint:'Sulph-IDE.',exp:'FeS + 2HCl → FeCl₂ + H₂S.'},
{id:'y25-2',t:'ac',src:'p.160 · 2025 Q2',ref:'p.155',type:'open',q:'Give the balanced equation for the action of dilute hydrochloric acid on ammonium carbonate.',
 hint:'Carbonate → salt + water + CO₂. The salt is NH₄Cl.',model:'(NH₄)₂CO₃ + 2HCl → 2NH₄Cl + H₂O + CO₂'},
{id:'mcq1',t:'ac',src:'p.160 · MCQ 1',ref:'p.155',type:'mcq',q:'<b>Assertion (A):</b> An aqueous solution of HCl gas is an electrolyte.<br><b>Reason (R):</b> Water being non-polar, ionizes polar covalent hydrogen chloride into free ions.',
 opts:['Both A and R are true, and R is the correct explanation of A','Both A and R are true, but R is not the correct explanation of A','A is true but R is false','A is false but R is true'],ans:2,
 hint:'Is water polar?',exp:'A is true. R is false: water is <b>polar</b>, which is why it ionises HCl.'},
{id:'mcq7',t:'ac',src:'p.160 · MCQ 7',ref:'p.155, 133',type:'mcq',q:'The metal which on reaction with dil. HCl produces effervescence in the acid:',opts:['Silver','Aluminium','Mercury','Copper'],ans:1,
 hint:'Only metals above hydrogen.',exp:'2Al + 6HCl → 2AlCl₃ + 3H₂. Ag, Hg, Cu are below hydrogen.'},
{id:'mcq8',t:'ac',src:'p.160 · MCQ 8',ref:'p.155',type:'mcq',q:'A foul-smelling gas is obtained on addition of dil. HCl to:',opts:['Sodium sulphite','Sodium sulphide','Sodium bisulphite','Sodium sulphate'],ans:1,
 hint:'Rotten eggs = H₂S.',exp:'Na₂S + 2HCl → 2NaCl + H₂S.'},
{id:'h10',t:'ac',src:'p.161 · HOTS Q10',ref:'p.155',type:'fill',q:'(a) HCl dissociates in aqueous solution producing {0}.<br>(b) The ion which imparts acidic properties to an aqueous solution of HCl acid is {1}.<br>(c) The solution of HCl in toluene {2}.',
 blanks:[{o:['2H⁺ ions','H₃O⁺ ions','H⁺ & H₃O⁺ ions'],a:1},{o:['H⁺ ion','Cl⁻ ion','both H⁺ & Cl⁻ ions'],a:0},{o:['conducts electricity','exhibits no change in blue litmus solution'],a:1}],
 hint:'H⁺ joins water at once. Toluene is non-polar.',exp:'(a) HCl ⇌ H⁺ + Cl⁻ and H⁺ + H₂O → H₃O⁺, so the solution contains <b>H₃O⁺ ions</b> (one per molecule: HCl is monobasic; "2H⁺" is wrong). (b) The H⁺ ion. (c) Toluene does not ionise HCl, so no acidic properties: no change in blue litmus, and no conduction.'},
{id:'h11',t:'ac',src:'p.161 · HOTS Q11',ref:'p.155',type:'open',q:'Give balanced equations for the reactions of dil. HCl with a metallic (a) oxide (b) carbonate (c) bicarbonate (d) sulphite (e) bisulphite (f) sulphide, each containing the <b>sodium ion</b>, and state the colour of the metallic chloride salt formed in each case.',
 hint:'All give NaCl.',model:'(a) Na₂O + 2HCl → 2NaCl + H₂O<br>(b) Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂<br>(c) NaHCO₃ + HCl → NaCl + H₂O + CO₂<br>(d) Na₂SO₃ + 2HCl → 2NaCl + H₂O + SO₂<br>(e) NaHSO₃ + HCl → NaCl + H₂O + SO₂<br>(f) Na₂S + 2HCl → 2NaCl + H₂S<br>In every case the salt is sodium chloride, which is <b>white</b> (colourless in solution).'},
{id:'u6',t:'ac',src:'p.162 · Unit test Q.6',ref:'p.155',type:'fill',q:'Choose from: metallic oxide, active metal, metallic carbonate, metallic bisulphite, metallic hydroxide, metallic bicarbonate, metallic sulphate, metallic sulphide.<br>1. {0} + HCl (dil) → salt + hydrogen<br>2. {1} + HCl (dil) → salt + water<br>3. {2} + HCl (dil) → salt + water<br>4. {3} + HCl (dil) → salt + water + carbon dioxide<br>5. {4} + HCl (dil) → salt + water + sulphur dioxide<br>6. {5} + HCl (dil) → salt + hydrogen sulphide',
 blanks:[{o:['active metal','metallic sulphate'],a:0},{o:['metallic oxide','metallic sulphate'],a:0},{o:['metallic hydroxide','metallic sulphide'],a:0},{o:['metallic carbonate','metallic sulphate'],a:0},{o:['metallic bisulphite','metallic sulphate'],a:0},{o:['metallic sulphide','metallic bisulphite'],a:0}],
 hint:'Metallic sulphate is the distractor: it gives no gas.',exp:'1 active metal · 2 and 3 metallic oxide and metallic hydroxide (bases) · 4 metallic carbonate (or bicarbonate) · 5 metallic bisulphite · 6 metallic sulphide.'},
{id:'u5-5',t:'ac',src:'p.162 · Unit test Q.5(5)',ref:'p.155',type:'mcq',q:'The acid which is <b>not</b> a monobasic acid:',opts:['Acetic','Sulphurous','Hydrochloric','Nitric','Formic'],ans:1,
 hint:'How many replaceable H⁺ per molecule?',exp:'Sulphurous acid H₂SO₃ is <b>dibasic</b> (gives 2H⁺). The others give one H⁺ each.'},
{id:'u3-4',t:'ac',src:'p.162 · Unit test Q.3(4)',ref:'p.155',type:'fill',q:'The ions which impart acidic properties to an aqueous solution of hydrogen chloride are {0} ions.',
 blanks:[{o:['chloride','hydrogen','hydronium'],a:1}],hint:'The book says “presence of hydrogen ion [H⁺]”.',exp:'<b>Hydrogen</b> ions (H⁺), which exist in water as H₃O⁺.'},

/* ===== 6. Oxidising agents, aqua regia, tests & uses ===== */
{id:'y13-1ii',t:'ox',src:'p.159 · 2013 Q1(ii)',ref:'p.156',type:'word',q:'Identify the gas evolved when concentrated hydrochloric acid is made to react with manganese dioxide.',
 accept:['chlorine','chlorine gas','cl2','cl'],ansText:'Chlorine (Cl₂)',hint:'An oxidising agent removes hydrogen from HCl.',exp:'MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂.'},
{id:'y13-2ii',t:'ox',src:'p.159 · 2013 Q2(ii)',ref:'p.157',type:'open',q:'State one appropriate observation: a few drops of dil. HCl are added to AgNO₃ solution, followed by addition of NH₄OH solution.',
 hint:'AgCl and excess ammonia.',model:'A curdy <b>white precipitate</b> of AgCl forms, which <b>dissolves</b> in excess NH₄OH to give a clear solution. AgNO₃ + HCl → AgCl↓ + HNO₃; AgCl + 2NH₄OH → [Ag(NH₃)₂]Cl + 2H₂O.'},
{id:'y15-2',t:'ox',src:'p.159 · 2015 Q2',ref:'p.157',type:'word',q:'Identify the acid which on mixing with AgNO₃ solution gives a white precipitate soluble in excess ammonium hydroxide.',
 accept:['hydrochloric acid','dilute hydrochloric acid','dil hydrochloric acid','hcl','hydrochloric'],ansText:'Hydrochloric acid (HCl)',hint:'Chloride ion.',exp:'Dil. HCl gives white AgCl, which dissolves in excess NH₄OH.'},
{id:'y16-2',t:'ox',src:'p.159 · 2016 Q2',ref:'p.157',type:'fill',q:'{0}, a white precipitate, is soluble in excess NH₄OH.',
 blanks:[{o:['AgCl','PbCl₂'],a:0}],hint:'Diammine silver chloride.',exp:'AgCl + 2NH₄OH → [Ag(NH₃)₂]Cl + 2H₂O. PbCl₂ does not dissolve.'},
{id:'y20-2ii',t:'ox',src:'p.160 · 2020 Q2(ii)',ref:'p.156',type:'mcq',q:'The acid which cannot act as an oxidizing agent is conc.:',opts:['H₂SO₄','HNO₃','HCl'],ans:2,
 hint:'Which one is itself oxidised to chlorine?',exp:'Conc. HCl is a mild <b>reducing</b> agent. Conc. HNO₃ and conc. H₂SO₄ are oxidising agents.'},
{id:'y21-3i',t:'ox',src:'p.160 · 2021-22 Q3(i)',ref:'p.156',type:'open',q:'Write the balanced chemical equation for the action of heat on manganese dioxide and conc. HCl.',
 hint:'4HCl.',model:'MnO₂ + 4HCl —(Δ)→ MnCl₂ + 2H₂O + Cl₂'},
{id:'y23-2',t:'ox',src:'p.160 · 2023 Q2',ref:'p.157',type:'fill',q:'{0} is a white precipitate that is soluble in excess of ammonium hydroxide solution.',
 blanks:[{o:['Silver chloride','Lead chloride'],a:0}],hint:'Same as 2016.',exp:'Silver chloride.'},
{id:'y24-1',t:'ox',src:'p.160 · 2024 Q1',ref:'p.156',type:'word',q:'Identify the gas evolved: MnO₂ reacts with concentrated HCl.',
 accept:['chlorine','chlorine gas','cl2','cl'],ansText:'Chlorine (Cl₂): greenish-yellow',hint:'Greenish-yellow.',exp:'MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂.'},
{id:'y25-3',t:'ox',src:'p.160 · 2025 Q3',ref:'p.155, 157, 173',type:'open',q:'Rohit added dilute HCl to two test tubes: C (AgNO₃ solution) and D (Pb(NO₃)₂ solution). The products are silver chloride and lead chloride respectively. State:<br>a] one common observation in both reactions;<br>b] the observation on adding excess ammonium hydroxide to the products in 1. test tube C 2. test tube D.',
 hint:'Which chloride dissolves in excess NH₄OH?',model:'a] A <b>white precipitate</b> forms in both.<br>b] 1. C: the white ppt of AgCl <b>dissolves</b> in excess NH₄OH (clear solution of [Ag(NH₃)₂]Cl).<br>2. D: the white ppt <b>does not dissolve</b>; it remains as a chalky white ppt (insoluble in excess NH₄OH).'},
{id:'mcq2',t:'ox',src:'p.160 · MCQ 2',ref:'p.156, 213',type:'mcq',q:'<b>Assertion (A):</b> Tri-lead tetroxide reacts with conc. HCl to give chlorine gas.<br><b>Reason (R):</b> Tri-lead tetroxide removes hydrogen from conc. HCl, liberating chlorine.',
 opts:['Both A and R are true, and R is the correct explanation of A','Both A and R are true, but R is not the correct explanation of A','A is true but R is false','A is false but R is true'],ans:0,
 hint:'Oxidation = removal of hydrogen.',exp:'Pb₃O₄ + 8HCl → 3PbCl₂ + 4H₂O + Cl₂. Pb₃O₄ is an oxidising agent: it removes hydrogen (as water) from HCl, leaving chlorine. R explains A.'},
{id:'h12',t:'ox',src:'p.161 · HOTS Q12',ref:'p.155–157',type:'open',q:'Complete and balance, and state the colour of the metallic chloride formed:<br>(a) AgNO₃ + HCl (dil.) →<br>(b) Pb(NO₃)₂ + HCl (dil.) →<br>(c) MnO₂ + HCl (conc.) →',
 hint:'Two precipitates and one oxidation.',model:'(a) AgNO₃ + HCl → AgCl↓ + HNO₃ : AgCl curdy <b>white</b><br>(b) Pb(NO₃)₂ + 2HCl → PbCl₂↓ + 2HNO₃ : PbCl₂ <b>white</b><br>(c) MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂ : MnCl₂ <b>pale pink</b> (Cl₂ greenish-yellow)'},
{id:'h13',t:'ox',src:'p.161 · HOTS Q13',ref:'p.156–157, 213',type:'fill',q:'To prove that HCl contains:<br>(a) hydrogen, react it with {0}<br>(b) chlorine, react it with a/an {1} agent',
 blanks:[{o:['Cu','Ag','Mg','Hg'],a:2},{o:['oxidising','reducing'],a:0}],
 hint:'Only an active metal gives H₂. Which agent removes hydrogen?',exp:'(a) Mg (Cu, Ag, Hg are below hydrogen): Mg + 2HCl → MgCl₂ + H₂. (b) An oxidising agent such as MnO₂ liberates Cl₂.'},
{id:'h14',t:'ox',src:'p.161 · HOTS Q14',ref:'p.156–157',type:'toggle',q:'With respect to hydrochloric acid, mark each statement True (T) or Not true (N):',labels:['T','N'],
 items:[['(a) It is a mild reducing agent',0],['(b) It reacts with AgNO₃ solution to give a curdy white ppt, insoluble in excess NH₄OH but soluble in dil. HNO₃',1]],
 hint:'Check the AgCl solubility rule carefully.',exp:'(a) True: HCl is a mild reducing agent. (b) Not true: it is the other way round. AgCl is <b>soluble</b> in excess NH₄OH and <b>insoluble</b> in dil. HNO₃. (The question continues beyond the scanned page; only (a) and (b) are visible.)'},
{id:'u2-4',t:'ox',src:'p.162 · Unit test Q.2(4)',ref:'p.157',type:'open',q:'Give a reason: Iron sheets are cleaned with hydrochloric acid before dipping into molten zinc for galvanizing.',
 hint:'Pickling.',model:'Hydrochloric acid dissolves the metallic oxide (rust) coating on the surface and cleans it (pickling), so the zinc sticks well to the clean iron.'},
{id:'u4',t:'ox',src:'p.162 · Unit test Q.4',ref:'p.153, 155–157',type:'match',q:'Choose from A: NH₄Cl, B: AgCl, C: PbCl₂, D: FeCl₂, E: Ag(NH₃)₂Cl to match:',
 left:['1] A soluble salt obtained on reaction of a metallic chloride with liquor ammonia','2] A salt insoluble in dilute nitric acid but soluble in ammonium hydroxide','3] A salt obtained on reaction of an active metal with HCl gas','4] A salt obtained when a basic gas reacts with HCl gas','5] A salt soluble in hot water but not in cold, obtained on heating an oxidising agent with conc. HCl'],
 right:['A: NH₄Cl','B: AgCl','C: PbCl₂','D: FeCl₂','E: Ag(NH₃)₂Cl'],ans:[4,1,3,0,2],
 hint:'Liquor ammonia = conc. ammonia solution. Which oxidising agent gives a lead salt?',exp:'1 → E (AgCl + 2NH₄OH → [Ag(NH₃)₂]Cl). 2 → B. 3 → D (Fe + 2HCl → FeCl₂ + H₂). 4 → A (NH₃ + HCl). 5 → C (PbO₂ + 4HCl → PbCl₂ + 2H₂O + Cl₂).'},
{id:'u5-1',t:'ox',src:'p.162 · Unit test Q.5(1)(2)(4)',ref:'p.155–156',type:'fill',q:'1. The substance reacted with conc. HCl and heated to prove that conc. HCl contains Cl₂: {0}<br>2. The metal reacted with dil. HCl to prove that dil. HCl contains hydrogen: {1}<br>4. The acid which is not an oxidising agent: {2}',
 blanks:[{o:['PbCl₂','PbO₂','PbO'],a:1},{o:['Cu','Fe','Ag','Pb'],a:1},{o:['conc. HNO₃','conc. HCl','conc. H₂SO₄'],a:1}],
 hint:'An oxidising agent; an active metal; the reducing acid.',exp:'1. PbO₂ (lead(IV) oxide, an oxidising agent): PbO₂ + 4HCl → PbCl₂ + 2H₂O + Cl₂. 2. Fe: Fe + 2HCl → FeCl₂ + H₂ (Cu and Ag are below H; Pb is quickly coated with insoluble PbCl₂). 4. Conc. HCl.'},

/* ===== 7. Equation worksheet (p.158) & conversions ===== */
{id:'ws1-2',t:'eq',src:'p.158 · Worksheet 1–2',ref:'p.149–151',type:'open',q:'Complete and balance (preparation of HCl):<br>1. H₂ + Cl₂ →<br>2. NaCl + H₂SO₄ —(&lt;200 °C)→ ______ + HCl<br>&nbsp;&nbsp;&nbsp;NaCl + NaHSO₄ —(&gt;200 °C)→ ______ + HCl<br>&nbsp;&nbsp;&nbsp;NaCl + H₂SO₄ —(&gt;200 °C)→ ______ + HCl',
 hint:'Below 200 °C acid salt; above, normal salt.',model:'1. H₂ + Cl₂ —(diffused sunlight)→ 2HCl<br>2. NaCl + H₂SO₄ → NaHSO₄ + HCl<br>&nbsp;&nbsp;&nbsp;NaCl + NaHSO₄ → Na₂SO₄ + HCl<br>&nbsp;&nbsp;&nbsp;2NaCl + H₂SO₄ → Na₂SO₄ + 2HCl'},
{id:'ws3-5',t:'eq',src:'p.158 · Worksheet 3–5',ref:'p.153, 155',type:'open',q:'Complete:<br>3. 2HCl —(&gt;500 °C)⇌ ______ + ______<br>4. NH₃ + HCl → ______<br>5. HCl —(H₂O)⇌ ______ + Cl⁻ ; [H⁺ + H₂O → ______]',
 hint:'Thermal dissociation; dense white fumes; hydronium.',model:'3. 2HCl ⇌ H₂ + Cl₂<br>4. NH₃ + HCl → NH₄Cl<br>5. HCl ⇌ H⁺ + Cl⁻ ; H⁺ + H₂O → H₃O⁺'},
{id:'ws6-7',t:'eq',src:'p.158 · Worksheet 6–7',ref:'p.155',type:'open',q:'Complete and balance (dil. HCl):<br>6. Al + HCl →<br>7. CuO + HCl → · NH₄OH + HCl →',
 hint:'Al is trivalent.',model:'6. 2Al + 6HCl → 2AlCl₃ + 3H₂<br>7. CuO + 2HCl → CuCl₂ + H₂O<br>&nbsp;&nbsp;&nbsp;NH₄OH + HCl → NH₄Cl + H₂O'},
{id:'ws8-11',t:'eq',src:'p.158 · Worksheet 8–11',ref:'p.155',type:'open',q:'Complete and balance (dil. HCl):<br>8. Na₂CO₃ + HCl →<br>9. NaHCO₃ + HCl →<br>10. Na₂SO₃ + HCl →<br>11. NaHSO₃ + HCl →',
 hint:'Normal salts need 2HCl; acid salts need 1.',model:'8. Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂<br>9. NaHCO₃ + HCl → NaCl + H₂O + CO₂<br>10. Na₂SO₃ + 2HCl → 2NaCl + H₂O + SO₂<br>11. NaHSO₃ + HCl → NaCl + H₂O + SO₂'},
{id:'ws12-15',t:'eq',src:'p.158 · Worksheet 12–15',ref:'p.155',type:'open',q:'Complete and balance (dil. HCl):<br>12. FeS + HCl →<br>13. AgNO₃ + HCl →<br>14. Pb(NO₃)₂ + HCl →<br>15. Na₂S₂O₃ + HCl →',
 hint:'Thiosulphate gives four products.',model:'12. FeS + 2HCl → FeCl₂ + H₂S<br>13. AgNO₃ + HCl → AgCl↓ + HNO₃<br>14. Pb(NO₃)₂ + 2HCl → PbCl₂↓ + 2HNO₃<br>15. Na₂S₂O₃ + 2HCl → 2NaCl + H₂O + SO₂ + S↓'},
{id:'ws16-20',t:'eq',src:'p.158 · Worksheet 16–20',ref:'p.156',type:'open',q:'Complete and balance (conc. HCl with oxidising agents):<br>16. PbO₂ + HCl →<br>17. Pb₃O₄ + HCl →<br>18. KMnO₄ + HCl →<br>19. K₂Cr₂O₇ + HCl →<br>20. HNO₃ + 3HCl → ______ + ______ + [Cl] ; Au + [Cl] →',
 hint:'Each one ends in Cl₂. KMnO₄ needs 16 HCl; K₂Cr₂O₇ needs 14.',model:'16. PbO₂ + 4HCl → PbCl₂ + 2H₂O + Cl₂<br>17. Pb₃O₄ + 8HCl → 3PbCl₂ + 4H₂O + Cl₂<br>18. 2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 8H₂O + 5Cl₂<br>19. K₂Cr₂O₇ + 14HCl → 2KCl + 2CrCl₃ + 7H₂O + 3Cl₂<br>20. HNO₃ + 3HCl → NOCl + 2H₂O + 2[Cl] ; Au + 3[Cl] → AuCl₃'},
{id:'ws21-24',t:'eq',src:'p.158 · Worksheet 21–24',ref:'p.157',type:'open',q:'Complete and balance (tests for hydrochloric acid):<br>21. NH₃ + ______ →<br>22. AgNO₃ + ______ →<br>23. AgCl + NH₄OH →<br>24. ______ + HCl → MnCl₂ + ______ + ______',
 hint:'Silver chloride dissolves as a diammine complex.',model:'21. NH₃ + HCl → NH₄Cl<br>22. AgNO₃ + HCl → AgCl↓ + HNO₃<br>23. AgCl + 2NH₄OH → [Ag(NH₃)₂]Cl + 2H₂O<br>24. MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂'},
{id:'u1-1',t:'eq',src:'p.162 · Unit test Q.1(1)',ref:'p.155–156',type:'open',q:'Give balanced equations: Conc. HCl —A→ PbCl₂ ←B— dil. HCl.',
 hint:'A: an oxidising agent containing lead. B: a soluble lead salt.',model:'A: PbO₂ + 4HCl (conc.) → PbCl₂ + 2H₂O + Cl₂ (or Pb₃O₄ + 8HCl → 3PbCl₂ + 4H₂O + Cl₂)<br>B: Pb(NO₃)₂ + 2HCl (dil.) → PbCl₂↓ + 2HNO₃'},
{id:'u1-2',t:'eq',src:'p.162 · Unit test Q.1(2)',ref:'p.150, 155',type:'open',q:'Give balanced equations: NaHCO₃ —C→ NaCl —D→ NaHSO₄.',
 hint:'C: dil. HCl. D: the lab preparation of HCl.',model:'C: NaHCO₃ + HCl → NaCl + H₂O + CO₂<br>D: NaCl + H₂SO₄ (conc.) —(&lt;200 °C)→ NaHSO₄ + HCl'},
{id:'u1-3',t:'eq',src:'p.162 · Unit test Q.1(3)',ref:'p.153, 155',type:'open',q:'Give balanced equations: FeCl₃ ←E₁— Fe —E₂→ FeCl₂.',
 hint:'HCl gives only the lower chloride. The higher chloride needs chlorine.',model:'E₁: 2Fe + 3Cl₂ → 2FeCl₃<br>E₂: Fe + 2HCl → FeCl₂ + H₂'}
];

/* ---------------- Page ---------------- */
const PAGE={key:'hcl-v1',title:'🧪 7A · Hydrogen chloride & hydrochloric acid',book:{dir:'hcl',from:149,to:162},
 pages:{158:'Equation worksheet items 1–24',159:'Previous ICSE questions 2013–2020 Q1',160:'Previous ICSE 2020 Q2 to 2025 · MCQ 1–8',161:'Additional &amp; HOTS Q.1–14',162:'Unit test paper 7A: Q.1–6'},
 formulas:`<h3>📐 Quick sheet: HCl</h3>
<table class="cmp"><tr><th></th><th></th></tr>${tr(
['Lab prep','NaCl + H₂SO₄ (conc.) —&lt;200 °C→ NaHSO₄ + HCl · dry: conc. H₂SO₄ · collect: upward displacement of air'],
['Test for HCl','NH₃ + HCl → NH₄Cl (dense white fumes) · AgNO₃ → white AgCl, soluble in excess NH₄OH'],
['Acid + ...','metal → salt + H₂ · base → salt + water · carbonate → + CO₂ · sulphite → + SO₂ · sulphide → + H₂S'],
['Precipitates','AgCl white (dissolves in NH₄OH) · PbCl₂ white (dissolves in hot water)'],
['Chlorine','MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂'],
['Aqua regia','1 conc. HNO₃ : 3 conc. HCl · HNO₃ + 3HCl → NOCl + 2H₂O + 2[Cl] · dissolves Au, Pt'],
['Numbers','VD 18.25 (air 14.4) · 1.28× air · 452 vols per vol water · b.p. −83 °C · const. boiling 22.2%'])}</table>`};
