/* 7A Hydrogen chloride: reading guide written by prompts/clear-writing.md (STE-lite).
   Standalone page (chapters/hcl-guide.html). No questions, no progress saved. */
const terms=(...rows)=>`<table class="cmp"><tr><th>📘 Term</th><th>Meaning (other names in the book)</th></tr>${tr(...rows)}</table>`;
const exact=t=>`<div class="exam">★ <b>Learn this exactly:</b> ${t}</div>`;

const GUIDE=[
{id:'intro',title:'Start here: the chapter in one page',html:`
<p>This chapter is about one substance in two forms.</p>
<ul><li><b>HCl gas</b> is hydrogen chloride as a dry gas.</li>
<li><b>Hydrochloric acid</b> is HCl gas dissolved in water.</li></ul>
<p>The chapter follows one path. Learn it in this order:</p>
${flow('🧪 Make HCl gas<br>(section B)','🔍 Study the gas<br>(C1, C2)','💧 Dissolve it in water<br>(D)','⚗️ Study the acid<br>(E1, E2)','🧫 Test for it<br>(F)','🏭 Use it<br>(G)')}
<p><b>Three ideas explain most of the chapter:</b></p>
<ol><li><b>HCl gas is very soluble in water.</b> This one fact explains the fountain experiment, the fumes in moist air, the funnel arrangement and why you cannot collect the gas over water.</li>
<li><b>HCl gas is heavier than air.</b> So you collect it in an upright jar.</li>
<li><b>Hydrochloric acid gives H⁺ ions.</b> So it acts like every other acid. It reacts with metals, bases, carbonates, sulphites and sulphides.</li></ol>
${terms(
['HCl gas','Hydrogen chloride gas. Dry. Not in water.'],
['Hydrochloric acid','HCl gas dissolved in water (old names: muriatic acid, marine acid).'],
['Conc.','Concentrated: a lot of acid, little water.'],
['Dil.','Dilute: a little acid, a lot of water.'],
['Volatile acid','An acid that turns into vapour easily. HCl and HNO₃ are volatile.'],
['Non-volatile acid','An acid with a high boiling point. Conc. H₂SO₄ boils at about 338 °C.'],
['Back suction','Water that moves back up a delivery tube into the apparatus.'],
['Ppt','Precipitate: a solid that forms in a solution.'],
['Oxidising agent','A substance that removes hydrogen from HCl (or adds oxygen).'])}
<p>In this guide, each term has only one name. The book sometimes uses other names. The table above lists them.</p>`},

{id:'a',title:'A. Introduction',ref:'p.149',html:`
<ul><li>Glauber made HCl gas in 1648. He used rock salt and conc. sulphuric acid.</li>
<li>Priestley collected pure HCl gas in 1772. He called the solution "marine acid".</li>
<li>Lavoisier later named the solution muriatic acid.</li>
<li>Davy named the gas hydrogen chloride in 1810.</li></ul>
${exact('A solution of HCl gas in water was named <b>muriatic acid</b>.')}
<p><b>Where HCl occurs free in nature:</b></p>
<ul><li>In volcanic gases.</li><li>In the gastric juice in the stomach of mammals.</li></ul>
<p><b>Bond:</b> The H–Cl bond is <b>polar covalent</b>. Chlorine pulls the shared electrons more strongly than hydrogen. (Chlorine has the higher electronegativity.)</p>`},

{id:'b',title:'B. Making dry HCl gas in the laboratory',ref:'p.149–151',html:`
${terms(
['Conc. sulphuric acid','Concentrated H₂SO₄. It does two jobs here: reactant and drying agent.'],
['Sodium bisulphate','NaHSO₄ (also: sodium hydrogen sulphate). An acid salt.'])}
${story('A non-volatile acid pushes a volatile acid out of its salt. Conc. sulphuric acid is non-volatile. HCl is volatile. So HCl leaves the flask as a gas. The gas escapes, so the reaction keeps going forward.')}
${steps('Prepare and collect the gas (book diagram p.150)',[
'Put sodium chloride in a round-bottom flask.',
'Add conc. sulphuric acid through the thistle funnel.',
'Keep the lower end of the thistle funnel below the acid. <br>Reason: if the end is above the acid, the gas escapes through the funnel.',
'Heat the flask gently. Keep the temperature below 200 °C.',
'Pass the gas through a washer bottle of conc. sulphuric acid. <br>Reason: the acid removes moisture from the gas.',
'Collect the gas in an upright gas jar. <br>Reason: HCl gas is 1.28 times heavier than air. It sinks and pushes the air up and out.',
'Hold a glass rod dipped in ammonia solution at the mouth of the jar. <br>You see: dense white fumes (ammonium chloride). The jar is full.'])}
${flow('🧪 Flask: NaCl + conc. H₂SO₄','🔥 Heat below 200 °C','🫧 Washer bottle: conc. H₂SO₄','⬆️ Upright gas jar','🧫 Ammonia rod: white fumes')}
${watch('laboratory preparation of hydrogen chloride gas')}
${exact('NaCl + H₂SO₄ (conc.) —(&lt;200 °C)→ NaHSO₄ + HCl↑')}
<table class="cmp"><tr><th>Question</th><th>Answer</th></tr>${tr(
['Why sodium chloride?','It is cheap. It is easy to get.'],
['Why conc. sulphuric acid?','It is non-volatile. It pushes out the volatile HCl.'],
['Why not nitric acid?','Nitric acid is also volatile. Its vapour comes out with the HCl. The HCl is then not pure.'],
['Why below 200 °C?','Above 200 °C, the reaction is 2NaCl + H₂SO₄ → Na₂SO₄ + 2HCl. This uses more fuel. The glass flask can crack. Sodium sulphate forms a hard crust that sticks to the flask.'],
['Why not dry with quicklime (CaO)?','Quicklime is a base. It reacts with HCl: CaO + 2HCl → CaCl₂ + H₂O.'],
['Why not dry with P₂O₅?','It reacts with HCl: 2P₂O₅ + 3HCl → POCl₃ + 3HPO₃.'],
['Why not collect over water?','HCl gas is very soluble. 1 volume of water dissolves about 452 volumes of HCl gas.'])}</table>
<p><b>Other method (p.149):</b> Hydrogen and chlorine react to make HCl gas: H₂ + Cl₂ → 2HCl.</p>
<ul><li>In diffused sunlight, the reaction is steady. Use this condition.</li>
<li>In direct sunlight, the mixture explodes.</li>
<li>In the dark, almost no reaction occurs.</li>
<li>Moisture acts as a catalyst.</li>
<li>A burning jet of hydrogen also burns in chlorine and makes HCl gas.</li></ul>
${trap('Write <b>conc.</b> next to H₂SO₄. Write <b>&lt;200 °C</b> over the arrow.','The salt is sodium <b>bisulphate</b> NaHSO₄. It is not bisulphite. It is not sulphate.','The gas jar stands <b>upright</b>. A heavy gas sinks and pushes the air up.')}
${exam('Dried by passing through conc. H₂SO₄. Collected by upward displacement of air, as HCl is heavier than air and highly soluble in water.')}`},

{id:'c1',title:'C1. Physical properties of HCl gas · two experiments',ref:'p.151–152',html:`
${terms(['Partial vacuum','A space with less gas pressure than the air outside.'])}
<table class="cmp"><tr><th>Property</th><th>HCl gas</th></tr>${tr(
['Colour','Colourless.'],
['Smell','Pungent and choking.'],
['Taste','Slightly sour.'],
['Effect on the body','Not poisonous. It burns the nose and throat if you breathe it in.'],
['Density','1.28 times heavier than air. Vapour density of HCl is 18.25. Vapour density of air is 14.4.'],
['Solubility','Very soluble. 1 volume of water dissolves about 452 volumes of HCl gas.'],
['In moist air','It fumes. The gas dissolves in the water vapour of the air. This makes a mist of tiny hydrochloric acid drops.'],
['Liquid and solid','It becomes a liquid at about 10 °C and 40 atm. The liquid boils at −83 °C. The solid melts at −113 °C.'])}</table>
${steps('Experiment 1: HCl gas is heavier than air (p.152)',[
'Put a burning candle in a gas jar.',
'Hold a jar of dry HCl gas above it.',
'Turn the upper jar and pour the gas down.',
'You see: the candle goes out.',
'Reason: HCl gas sinks into the lower jar. It pushes the air out. HCl gas does not support burning.',
'Add blue litmus solution to the lower jar. You see: it turns red.',
'Result: HCl gas is heavier than air.'])}
${steps('Experiment 2: the fountain experiment (p.152)',[
'Fill a dry round-bottom flask with dry HCl gas.',
'Close the flask with a stopper. The stopper holds a jet tube and a dropper of water.',
'Put the lower end of the jet tube in a trough of blue litmus solution.',
'Squeeze the dropper. A few drops of water go into the flask.',
'The HCl gas dissolves in these drops. The gas pressure in the flask falls. This makes a partial vacuum.',
'The air pressure outside is now higher. It pushes the litmus solution up the jet tube.',
'You see: a red fountain in the flask.',
'Result: HCl gas is very soluble in water. Its solution is an acid.'])}
${flow('💧 Water drops go in','HCl dissolves → partial vacuum','Outside air pressure is higher','Litmus solution goes up the jet','⛲ Red fountain')}
${watch('HCl fountain experiment')}
<table class="cmp"><tr><th>Gas in flask</th><th>Litmus in trough</th><th>Fountain colour</th></tr>${tr(
['HCl (acid)','Blue','Red'],['HCl (acid)','Red','Red (no change)'],['NH₃ (base)','Purple (neutral)','Blue'],['NH₃ (base)','Red','Blue'])}</table>
${trap('The flask must be <b>dry</b>. Water inside would dissolve the HCl gas before you start.','The <b>outside air pressure</b> pushes the fountain up. The gas does not "suck" the water.','Ammonia also gives a fountain, because it is also very soluble. Its fountain is blue.')}`},

{id:'c2',title:'C2. Chemical properties of HCl gas',ref:'p.153',html:`
<table class="cmp"><tr><th>Property</th><th>What happens</th></tr>${tr(
['Burning','HCl gas does not burn. It does not help other things burn. A glowing splint goes out.'],
['Blue litmus (moist)','Turns red.'],
['Methyl orange','Orange turns pink.'],
['Phenolphthalein','No change. It stays colourless.'],
['Alkaline phenolphthalein','Pink turns colourless.'],
['Strong heat (above 500 °C)','HCl gas splits into hydrogen and chlorine. The change is reversible: 2HCl ⇌ H₂ + Cl₂.'],
['Ammonia','Dense white fumes form. NH₃ + HCl → NH₄Cl. This is the test for HCl gas.'],
['Hot metals','Zn + 2HCl → ZnCl₂ + H₂ · Mg + 2HCl → MgCl₂ + H₂ · Fe + 2HCl → FeCl₂ + H₂'])}</table>
${story('Ammonia is a base gas. HCl is an acid gas. They neutralise each other in the air. The product, ammonium chloride, is a solid. Its tiny particles look like white smoke. Two gases make one solid.')}
${steps('Show the reaction with ammonia',[
'Take a jar of HCl gas.',
'Turn it upside down over a jar of ammonia gas.',
'Remove the covers between the jars.',
'You see: dense white fumes of ammonium chloride.'])}
<p>Strong heat splits ammonium chloride back into ammonia and HCl gas. When they cool, they join again. This is thermal dissociation.</p>
${watch('ammonia and hydrogen chloride white fumes')}
${trap('Plain phenolphthalein does <b>not</b> change with HCl. It is colourless in acid and in neutral solution.','Iron and HCl give iron(<b>II</b>) chloride, FeCl₂. They do not give FeCl₃. FeCl₃ needs chlorine gas: 2Fe + 3Cl₂ → 2FeCl₃.')}`},

{id:'d',title:'D. Making hydrochloric acid: the funnel arrangement',ref:'p.154',html:`
${terms(['Inverted funnel','A funnel turned upside down, joined to the end of the delivery tube.'])}
${steps('Why a plain delivery tube fails',[
'You put the end of the delivery tube in water.',
'HCl gas dissolves very fast at the end of the tube.',
'The gas pressure in the tube falls. This makes a partial vacuum.',
'The outside air pressure pushes water up the tube.',
'The water goes into the hot flask. The flask can crack. This is back suction.'])}
${flow('Tube in water','HCl dissolves very fast','Partial vacuum in the tube','Water moves <b>back</b> into the hot flask','💥 Apparatus damaged')}
${steps('How the inverted funnel stops back suction',[
'Join an inverted funnel to the end of the delivery tube.',
'Set the funnel so that its rim just touches the water.',
'HCl gas dissolves. Water rises inside the funnel.',
'The water level outside the funnel falls.',
'An air gap opens between the rim and the water.',
'Air goes in. The pressure inside and outside becomes equal.',
'The water in the funnel falls back.',
'This repeats until the water is saturated with HCl. The result is hydrochloric acid.'])}
${flow('Water rises in the funnel','Level outside falls','Air gap at the rim','Pressures equal','Water falls back ✅')}
${watch('funnel arrangement preparation of hydrochloric acid back suction')}
<p><b>The funnel does two jobs:</b></p>
<ol><li>It stops back suction.</li><li>It gives a large surface area, so the water absorbs the gas well.</li></ol>
${trap('Exams often ask for <b>both</b> jobs of the funnel.','The rim must <b>just touch</b> the water. A funnel deep in the water acts like a plain tube.')}
${exam('Direct absorption causes back suction as HCl is highly soluble; an inverted funnel whose rim just touches the water is used, which prevents back suction and gives a large surface area for absorption.')}`},

{id:'e1',title:'E1. Physical properties of hydrochloric acid',ref:'p.154',html:`
<table class="cmp"><tr><th>Property</th><th>Hydrochloric acid</th></tr>${tr(
['Colour','Colourless when pure.'],
['Smell','Slightly pungent.'],
['Taste','Sharp and sour.'],
['Effect on skin','It is corrosive. It causes blisters.'],
['Density','1.2 g/cc (40% acid by weight).'])}</table>
<p><b>Constant boiling mixture:</b></p>
<ol><li>Hydrochloric acid with 22.2% HCl by weight boils at about 110 °C.</li>
<li>At this point, HCl and water boil off in the same ratio as in the liquid.</li>
<li>So the liquid does not get stronger.</li>
<li>Result: you cannot make dilute hydrochloric acid stronger than this by boiling or distilling it.</li></ol>
${exact('HCl and water form a constant boiling mixture that boils at about 110 °C and contains 22.2% HCl by weight.')}`},

{id:'e2a',title:'E2. Dilute hydrochloric acid acts as an acid',ref:'p.155',html:`
<p><b>Why it is an acid:</b></p>
<ol><li>In water, each HCl molecule gives one H⁺ ion: HCl ⇌ H⁺ + Cl⁻.</li>
<li>The H⁺ ion joins a water molecule: H⁺ + H₂O → H₃O⁺ (hydronium ion).</li>
<li>The H⁺ ion gives the solution its acid properties.</li>
<li>One H⁺ per molecule means HCl is <b>monobasic</b>.</li></ol>
<p><b>Water and toluene (a test of the idea):</b></p>
<table class="cmp"><tr><th></th><th>HCl in water</th><th>HCl in toluene</th></tr>${tr(
['The solvent','Polar','Non-polar'],
['Does HCl form ions?','Yes','No'],
['Blue litmus','Turns red','No change'],
['Conducts electricity?','Yes (electrolyte)','No (non-electrolyte)'])}</table>
<p>HCl is a covalent compound. In water, it acts like an ionic compound.</p>
<p><b>Reactions:</b> learn the pattern in the middle column first. Then the examples are easy.</p>
<table class="cmp"><tr><th>Acid +</th><th>gives</th><th>Examples (book p.155)</th></tr>${tr(
['Active metal','salt + hydrogen','Mg + 2HCl → MgCl₂ + H₂ · Zn + 2HCl → ZnCl₂ + H₂ · Fe + 2HCl → FeCl₂ + H₂. You see bubbles (effervescence).'],
['Base (oxide or hydroxide)','salt + water only','CuO + 2HCl → CuCl₂ + H₂O · Na₂O + 2HCl → 2NaCl + H₂O · NH₄OH + HCl → NH₄Cl + H₂O'],
['Carbonate','salt + water + CO₂','Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂ · CuCO₃ + 2HCl → CuCl₂ + H₂O + CO₂ · (NH₄)₂CO₃ + 2HCl → 2NH₄Cl + H₂O + CO₂'],
['Bicarbonate','salt + water + CO₂','NaHCO₃ + HCl → NaCl + H₂O + CO₂ · Ca(HCO₃)₂ + 2HCl → CaCl₂ + 2H₂O + 2CO₂'],
['Sulphite or bisulphite','salt + water + SO₂','Na₂SO₃ + 2HCl → 2NaCl + H₂O + SO₂ · MgSO₃ + 2HCl → MgCl₂ + H₂O + SO₂ · NaHSO₃ + HCl → NaCl + H₂O + SO₂'],
['Sulphide','salt + H₂S','Na₂S + 2HCl → 2NaCl + H₂S · FeS + 2HCl → FeCl₂ + H₂S · CuS + 2HCl → CuCl₂ + H₂S. H₂S smells of rotten eggs.'],
['Silver nitrate','white ppt','AgNO₃ + HCl → AgCl↓ + HNO₃. The ppt is curdy and white.'],
['Lead nitrate','white ppt','Pb(NO₃)₂ + 2HCl → PbCl₂↓ + 2HNO₃. The ppt dissolves in hot water.'],
['Sodium thiosulphate','yellow sulphur + SO₂','Na₂S₂O₃ + 2HCl → 2NaCl + H₂O + SO₂ + S↓. The sulphur is pale yellow.'])}</table>
<table class="cmp"><tr><th>Gas</th><th>How to test it</th></tr>${tr(
['H₂','Bring a burning splint near. The gas burns with a pop.'],
['CO₂','Pass the gas through lime water. The lime water turns milky.'],
['SO₂','It smells of burning sulphur. It turns acidified K₂Cr₂O₇ from orange to green. It turns pink KMnO₄ colourless.'],
['H₂S','It smells of rotten eggs. It turns moist lead acetate paper black.'])}</table>
${watch('reaction of dilute hydrochloric acid with metals carbonates')} ${watch('lead nitrate and silver nitrate with hydrochloric acid precipitate')}
${trap('Metals below hydrogen (Cu, Ag, Hg, Au) give no hydrogen with dil. HCl.','Read the ending. Sulph<b>ite</b> gives SO₂. Sulph<b>ide</b> gives H₂S. Sulph<b>ate</b> gives no gas.','A base gives salt and water <b>only</b>. It gives no gas.')}`},

{id:'e2b',title:'E2. Conc. hydrochloric acid with oxidising agents · aqua regia',ref:'p.156',html:`
${story('An oxidising agent removes hydrogen from HCl. Take the H away from H–Cl. Chlorine is left. So every oxidising agent here gives chlorine gas. These reactions are used to make chlorine. In them, HCl acts as a reducing agent.')}
<p>Use <b>conc.</b> hydrochloric acid and heat for all of these.</p>
<table class="cmp"><tr><th>Oxidising agent</th><th>Equation</th></tr>${tr(
['MnO₂ (black-brown)','MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂. MnCl₂ is pale pink.'],
['PbO₂ (dark brown)','PbO₂ + 4HCl → PbCl₂ + 2H₂O + Cl₂. PbCl₂ is white.'],
['Pb₃O₄, red lead (bright red)','Pb₃O₄ + 8HCl → 3PbCl₂ + 4H₂O + Cl₂'],
['KMnO₄','2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 8H₂O + 5Cl₂'],
['K₂Cr₂O₇','K₂Cr₂O₇ + 14HCl → 2KCl + 2CrCl₃ + 7H₂O + 3Cl₂'],
['Conc. HNO₃','HNO₃ + 3HCl → NOCl + 2H₂O + 2[Cl]. NOCl is nitrosyl chloride. [Cl] is nascent chlorine.'])}</table>
${terms(['Nascent chlorine','Single chlorine atoms, just formed. Written [Cl]. Very reactive.'],['Noble metals','Gold and platinum. No single acid dissolves them.'])}
${exact('Aqua regia is a mixture of 1 part conc. HNO₃ and 3 parts conc. HCl by volume.')}
<ol><li>Aqua regia makes nascent chlorine.</li>
<li>Nascent chlorine reacts with gold: Au + 3[Cl] → AuCl₃ (gold(III) chloride).</li>
<li>It reacts with platinum: Pt + 4[Cl] → PtCl₄ (platinum(IV) chloride).</li>
<li>These chlorides dissolve. So aqua regia dissolves gold and platinum.</li></ol>
${watch('manganese dioxide concentrated hydrochloric acid chlorine')}
${trap('Use <b>conc.</b> HCl with the oxidising agents.','Conc. HNO₃ and conc. H₂SO₄ are oxidising agents. Conc. HCl is not.')}`},

{id:'f',title:'F. Tests for HCl gas and hydrochloric acid',ref:'p.156–157',html:`
<table class="cmp"><tr><th>Test</th><th>What you see</th></tr>${tr(
['Hold a glass rod dipped in ammonia solution near the gas.','Dense white fumes of ammonium chloride. NH₃ + HCl → NH₄Cl'],
['Put blue litmus in the solution.','It turns red.'],
['Heat conc. hydrochloric acid with MnO₂.','A greenish-yellow gas (chlorine) comes off. This proves that HCl contains chlorine.'],
['Add an active metal (Mg, Zn or Fe).','Hydrogen gas comes off. This proves that HCl contains hydrogen.'])}</table>
${steps('Silver nitrate test (also tells dil. HCl from dil. HNO₃)',[
'Add dil. HNO₃ to the solution.',
'Add silver nitrate solution.',
'You see: a curdy white ppt of silver chloride.',
'Add excess ammonium hydroxide.',
'You see: the ppt dissolves. AgCl + 2NH₄OH → [Ag(NH₃)₂]Cl + 2H₂O ([Ag(NH₃)₂]Cl is diammine silver chloride).',
'Result: the solution contains chloride. Dil. HNO₃ gives no ppt in this test.'])}
${flow('Add AgNO₃','⚪ Curdy white ppt','Add excess NH₄OH','Ppt dissolves → chloride present')}
${watch('test for chloride ion silver nitrate ammonium hydroxide')}
${trap('Silver chloride dissolves in excess NH₄OH. Lead chloride does <b>not</b>. Lead chloride dissolves in <b>hot water</b>.','Silver chloride does not dissolve in dil. HNO₃.')}`},

{id:'g',title:'G. Uses of hydrochloric acid',ref:'p.157',html:`
<table class="cmp"><tr><th>Use</th><th>How the acid helps</th></tr>${tr(
['Dyes, drugs and paints','It is a raw material.'],
['Photographic film','It makes silver chloride.'],
['Glucose','It changes starch into glucose.'],
['Tanning and soldering','It is used in these industries.'],
['Glue from bones','It dissolves the calcium phosphate in bones.'],
['Pickling (before galvanizing)','It dissolves the oxide layer. This cleans the metal surface.'],
['Aqua regia','It is part of the mixture that dissolves gold and platinum.'])}</table>`},

{id:'eq',title:'Equation bank',ref:'p.158',html:`
<p><b>How to balance these:</b></p>
<ol><li>Write the formulae of the products.</li><li>Balance the metal.</li><li>Balance chlorine last. Put the correct number in front of HCl.</li></ol>
<table class="cmp"><tr><th>Reaction</th><th>Balanced equation</th></tr>${tr(
['Synthesis','H₂ + Cl₂ → 2HCl (diffused sunlight)'],
['Laboratory, below 200 °C','NaCl + H₂SO₄ → NaHSO₄ + HCl'],
['Above 200 °C','NaCl + NaHSO₄ → Na₂SO₄ + HCl · overall: 2NaCl + H₂SO₄ → Na₂SO₄ + 2HCl'],
['Dissociation','2HCl ⇌ H₂ + Cl₂ (above 500 °C)'],
['Ammonia','NH₃ + HCl → NH₄Cl'],
['Monobasic acid','HCl ⇌ H⁺ + Cl⁻ · H⁺ + H₂O → H₃O⁺'],
['Aluminium','2Al + 6HCl → 2AlCl₃ + 3H₂'],
['Iron with chlorine (not HCl)','2Fe + 3Cl₂ → 2FeCl₃'])}</table>
<p>The equations for acid reactions, oxidising agents and tests are in sections E2 and F.</p>`}
];

document.querySelector('header').innerHTML=`<a href="../index.html" style="text-decoration:none">🏠 Home</a> <h1>📖 7A · Hydrogen chloride: reading guide</h1>
<p>Read this first. Then practise on the <a href="hcl.html">question page</a>. This guide uses short sentences and one name for each thing.</p>`;
document.getElementById('nav').innerHTML=GUIDE.map(s=>`<a href="#${s.id}" style="display:block;padding:7px 10px;color:inherit;text-decoration:none">${s.title}</a>`).join('');
document.getElementById('main').innerHTML=GUIDE.map(s=>`<section id="${s.id}" class="card"><h2>${s.title}${s.ref?` <small>· book ${s.ref}</small>`:''}</h2>${s.html}</section>`).join('');
