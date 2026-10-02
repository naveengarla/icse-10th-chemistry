/* Mole 4 · Stoichiometry 2: calculations from chemical equations + MCQ & HOTS
   Source: Dr. Viraf J. Dalal, 4.B Stoichiometry, printed p.92–101 */

/* The "recipe": given → moles → mole ratio → moles wanted → answer */
const RECIPE=svg(800,200,
 BOX(70,95,120,50,'GIVEN','#e0f2fe')+BOX(230,95,120,50,'n (given)','#fde68a')+BOX(400,95,140,50,'MOLE RATIO','#fce7f3')+BOX(570,95,120,50,'n (wanted)','#fde68a')+BOX(730,95,120,50,'ANSWER','#dcfce7')+
 ARR(130,95,168,95)+ARR(290,95,328,95)+ARR(470,95,508,95)+ARR(630,95,668,95)+
 T(150,45,'÷ M  or  ÷ 22.4 L','lab')+T(150,62,'or ÷ 6.023×10²³','lab')+
 T(310,45,'balanced','lab')+T(310,62,'equation','lab')+
 T(490,45,'× (wanted coeff.','lab')+T(490,62,'÷ given coeff.)','lab')+
 T(650,45,'× M  or  × 22.4 L','lab')+T(650,62,'or × 6.023×10²³','lab')+
 T(70,140,'mass (g)','lab')+T(70,156,'gas volume (L)','lab')+T(70,172,'particles','lab')+
 T(400,140,'read from the','lab')+T(400,156,'coefficients','lab')+
 T(730,140,'mass (g)','lab')+T(730,156,'gas volume (L)','lab')+T(730,172,'particles','lab')+
 T(400,15,'Every equation problem is the same 4-step recipe: always pass through MOLES','lab'));

/* Book-style proportion table (p.93): equation line → mol. wt./vol. line → given/unknown line */
const PROPTAB=(head,a,b)=>`<table class="cmp"><tr>${head.map(h=>`<th>${h}</th>`).join('')}</tr><tr>${a.map(x=>`<td>${x}</td>`).join('')}</tr><tr>${b.map(x=>`<td>${x}</td>`).join('')}</tr></table>`;

/* Gas volumes as balloons for the Gay-Lussac summary (p.97) */
const BALLOONS=svg(640,150,
 [0,1].map(i=>`<circle cx="${40+i*40}" cy="70" r="16" fill="#e0f2fe" stroke="#0284c7"/>`).join('')+T(60,110,'2 vol C₂H₆','lab')+T(118,70,'+')+
 [0,1,2,3,4,5,6].map(i=>`<circle cx="${150+i*30}" cy="70" r="13" fill="#fee2e2" stroke="#dc2626"/>`).join('')+T(240,110,'7 vol O₂','lab')+
 ARR(345,70,385,70)+
 [0,1,2,3].map(i=>`<circle cx="${410+i*34}" cy="70" r="15" fill="#f3f4f6" stroke="#374151"/>`).join('')+T(461,110,'4 vol CO₂','lab')+
 T(570,70,'+ 6 H₂O','op')+T(320,18,'Gases react in simple whole-number VOLUME ratios = the coefficients','lab')+T(320,135,'×150 cc each: 300 cc C₂H₆ uses 1050 cc O₂ and gives 600 cc CO₂','lab'));

const PAGE={key:'mole-4-v1',lab:'mole-lab.html',title:'Stoichiometry 2 · Calculations from equations + MCQ & HOTS',
 pages:{
  92:'Chemical equation: information & 4-step procedure, worked example (electrolysis of water)',
  93:'Problems G: solved examples 1–3 (weight–weight and weight–volume)',
  94:'Problems G: solved examples 4–6 (moles, volume, % purity)',
  96:'Additional problems Q.3 Chemical equations (1)–(11)',
  98:'Summary G: copper + nitric acid worked problem',
  101:'Past ICSE questions G (2006–2025), MCQ 1–2, HOTS 1 (a–d)'},
 formulas:`<h3>📐 Formula sheet: calculations from equations</h3>${MOLEMAP}${RECIPE}
 <table class="cmp">${tr(
  ['Moles from mass','n = mass ÷ molar mass'],
  ['Moles of a gas at s.t.p.','n = volume (L) ÷ 22.4 &nbsp; (cc ÷ 22 400)'],
  ['Moles from particles','n = N ÷ 6.023×10²³'],
  ['Mole ratio (the key step)','n(wanted) = n(given) × coeff.(wanted) ÷ coeff.(given)'],
  ['Book method (proportion)','mass of wanted = (molar mass × coeff. of wanted) × given ÷ (molar mass × coeff. of given)'],
  ['Gas volumes only (Gay-Lussac)','volume ratio = coefficient ratio (same T and P)'],
  ['% purity','mass of pure substance ÷ mass of impure sample × 100'],
  ['Useful molar masses','H₂O 18 · CO₂ 44 · CaCO₃ 100 · H₂SO₄ 98 · HNO₃ 63 · KClO₃ 122.5 · NH₃ 17 · (NH₄)₂SO₄ 132 · Ca(NO₃)₂ 164']
 )}</table>`};

const TOPICS=[
 {id:'e1',name:'1. Reading an equation & the 4-step procedure',ref:'p.92, 98'},
 {id:'e2',name:'2. Mass → mass',ref:'p.93'},
 {id:'e3',name:'3. Mass ↔ gas volume at s.t.p.',ref:'p.93–94'},
 {id:'e4',name:'4. Moles & molecules from an equation',ref:'p.94'},
 {id:'e5',name:'5. Impure samples & % purity',ref:'p.94'},
 {id:'e6',name:'6. Linked (two-equation) problems',ref:'p.96'},
 {id:'e7',name:'7. MCQ & HOTS: quick mole checks',ref:'p.97, 101'}
];

const CONCEPT={
e1:`<h3>A chemical equation is a recipe card</h3>
${hook('If you electrolyse 18 g of water, how many grams of oxygen bubble off? You cannot weigh the molecules one by one, so how can the equation tell you?')}
${story('A cake recipe says "2 cups flour + 1 cup sugar → 1 cake". If you only have 1 cup of flour, you instantly know you need ½ cup of sugar and you get ½ a cake. A balanced equation is exactly such a recipe, but the "cups" are <b>moles</b>.')}
<p><b>★ Chemical equation</b> – is the balanced chemical transition reaction. In a reaction the particles rearrange, so the products have properties entirely different from those of the reactants. Every reactant and product is written by its formula, which identifies each element taking part.</p>
<p><b>★ Information from a chemical equation:</b> a] the <b>molecular proportion</b> (moles), b] the <b>relative mass</b>, c] the <b>relative volumes</b> (if gaseous) of the reactants and products.</p>
<table class="cmp">${tr(['<b>2H₂O</b>','→','<b>2H₂</b>','+','<b>O₂</b>'],['2 molecules (2 mol)','','2 molecules (2 mol)','','1 molecule (1 mol)'],['2 × 18 = 36 g','','2 × 2 = 4 g','','32 g'],['(liquid)','','2 × 22.4 L at s.t.p.','','22.4 L at s.t.p.'])}</table>
<p><b>The book's 4-step procedure (p.92)</b></p>
${RECIPE}
${steps('Example (p.92): weight and volume of O₂ at s.t.p. from electrolysis of 18 g of water [H = 1, O = 16]',[
 '<b>Step I</b> – Write the balanced equation: 2H₂O → 2H₂ + O₂',
 '<b>Step II</b> – Write (number of molecules × molecular weight) under ONLY the substances asked: 2H₂O = 2 × 18 = 36 g; O₂ = 32 g (ignore H₂)',
 '<b>Step III</b> – 36 g of water liberates 32 g of O₂ ∴ 18 g liberates 32 × 18 ÷ 36 = <b>16 g</b>',
 '<b>Step IV</b> – For a gas, 1 mole = 22.4 L at s.t.p.: 36 g of water liberates 22.4 L O₂ ∴ 18 g liberates 22.4 × 18 ÷ 36 = <b>11.2 L</b>',
 'Mole way (same thing): 18 g ÷ 18 = 1 mol H₂O → ½ mol O₂ → 16 g or 11.2 L'])}
${trap('Using an <b>unbalanced</b> equation: every answer after that is wrong.','Forgetting to multiply the molar mass by the <b>coefficient</b> (writing 18 g for 2H₂O instead of 36 g).','Using 22.4 L for a substance that is not a gas at s.t.p. (water, solids).','Mixing cc and litres: 22.4 L = 22 400 cc.')}
${cy(['What three things does a balanced equation tell you?','Molecular (mole) proportion, relative masses, and relative volumes of gases.'],['In 2H₂O → 2H₂ + O₂, what mass of water gives 1 mol of O₂?','2 mol = 36 g.'],['Why do we neglect the molar mass of H₂ in the water example?','It is not asked; the book says work out only the substances in the question.'])}
${exam('From the balanced equation 2H₂O → 2H₂ + O₂, 36 g of water liberates 32 g (22.4 L at s.t.p.) of oxygen; therefore 18 g of water liberates 32 × 18 ÷ 36 = 16 g, i.e. 11.2 L of O₂ at s.t.p.')}`,

e2:`<h3>Mass → mass (weight–weight relationship)</h3>
${hook('A copper wire weighing 1.28 g is dissolved in concentrated sulphuric acid. How much blue copper sulphate can you get, without doing the experiment?')}
${story('A bakery knows that 2 trays of dough always give 3 boxes of biscuits. Weigh the dough, and the baker can predict the boxes. The equation fixes the ratio, the molar masses convert grams into "trays".')}
<p>In a weight–weight problem the mass of one substance is given and the mass of another is asked. The book sets out a three-line table: the equation, the <b>molecular weights × coefficients</b>, and the <b>given / unknown</b> weights. Then it uses simple proportion.</p>
${PROPTAB(['','Cu','+ 2H₂SO₄','→ CuSO₄','+ 2H₂O + SO₂'],['a] mol. wt.','64 g','2 × 98 = 196 g','160 g',''],['b] given / asked','1.28 g','? g','? g',''])}
${steps('Worked example (p.93, Solved 2): 1.28 g Cu → CuSO₄ and H₂SO₄ used [Cu = 64, S = 32, O = 16]',[
 'Cu + 2H₂SO₄ → CuSO₄ + 2H₂O + SO₂',
 'Molar masses: Cu = 64 g; 2H₂SO₄ = 2 × 98 = 196 g; CuSO₄ = 64 + 32 + 64 = 160 g',
 '64 g Cu gives 160 g CuSO₄ ∴ 1.28 g gives 160 × 1.28 ÷ 64 = 3.2 g',
 '64 g Cu needs 196 g H₂SO₄ ∴ 1.28 g needs 196 × 1.28 ÷ 64 = 3.92 g',
 'Mole check: 1.28 ÷ 64 = 0.02 mol Cu → 0.02 mol CuSO₄ (3.2 g) and 0.04 mol H₂SO₄ (3.92 g)'])}
${trap('Putting 98 g instead of 2 × 98 g under 2H₂SO₄.','Turning the proportion upside down: it is always (wanted ÷ given) × given mass.','Writing the equation for a reaction from memory wrongly, e.g. forgetting SO₂ in Cu + conc. H₂SO₄.','Rounding molar masses too early (use 35.5 for Cl, not 35 or 36).')}
${cy(['2KNO₃ → 2KNO₂ + O₂. What mass of KNO₂ comes from 202 g KNO₃? [K = 39, N = 14, O = 16]','202 g = 2 mol KNO₃ → 2 mol KNO₂ = 170 g.'],['In Cu + 2H₂SO₄ → …, how many moles of acid react with 1 mol Cu?','2 mol.'],['A reaction needs 3 mol of A for 1 mol of B. If you have 0.6 mol A, how many moles of B react?','0.2 mol.'])}
${exam('64 g of Cu yields 160 g of CuSO₄; therefore 1.28 g of Cu yields 160 × 1.28 ÷ 64 = 3.2 g of CuSO₄.')}`,

e3:`<h3>Mass ↔ volume of a gas at s.t.p. (weight–volume relationship)</h3>
${hook('Chalk (CaCO₃) fizzes in acid. How many litres of CO₂ does 10 g of marble give? Can a balloon-full of gas be predicted from a weighing?')}
${story('Every mole of ANY gas at s.t.p. fills the same "box" of 22.4 litres, like every football being the same size whatever team owns it. So once you know the moles of gas, the volume is just moles × 22.4 L.')}
<p>Replace the molecular-weight line under a <b>gas</b> by <b>(coefficient × 22.4 L)</b>. Solids and liquids keep their mass line. Then use proportion as before.</p>
${PROPTAB(['','CaCO₃','+ 2HCl','→ CaCl₂','+ H₂O','+ CO₂'],['a]','100 g [mol. wt.]','','111 g [mol. wt.]','','22.4 L [vol.]'],['b]','10 g [wt.]','','? g','','? L'])}
${steps('Worked example (p.93, Solved 3): 10 g CaCO₃ → mass of CaCl₂ and volume of CO₂ [Ca = 40, C = 12, O = 16, Cl = 35.5]',[
 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂',
 'CaCO₃ = 40 + 12 + 48 = 100 g; CaCl₂ = 40 + 71 = 111 g; CO₂: 1 mole = 22.4 L at s.t.p.',
 '100 g CaCO₃ gives 111 g CaCl₂ ∴ 10 g gives 111 × 10 ÷ 100 = 11.1 g',
 '100 g CaCO₃ liberates 22.4 L CO₂ ∴ 10 g liberates 22.4 × 10 ÷ 100 = 2.24 L'])}
${trap('Writing 22.4 L for one molecule of gas but forgetting the coefficient (4NO₂ means 4 × 22.4 L).','Giving the volume of a gas NOT at s.t.p.: 22.4 L only applies at s.t.p.','Volumes given in cc or cm³: divide by 22 400, not 22.4.','Using the molar mass of a gas when the question asks volume: you want the 22.4 L line.')}
${cy(['How many litres does 0.25 mol of N₂ occupy at s.t.p.?','0.25 × 22.4 = 5.6 L.'],['C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Volume of O₂ (s.t.p.) for 1 mol propane?','5 × 22.4 = 112 L.'],['6.72 litres of O₂ at s.t.p. is how many moles?','6.72 ÷ 22.4 = 0.3 mol.'])}
${exam('100 g of CaCO₃ liberates 22.4 litres of CO₂ at s.t.p.; therefore 10 g of CaCO₃ liberates 22.4 × 10 ÷ 100 = 2.24 litres of CO₂ at s.t.p.')}`,

e4:`<h3>Moles and molecules straight from the equation</h3>
${hook('The equation 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O has the number 13 in it. Is that 13 grams, 13 litres or 13 moles?')}
${story('A coefficient is a COUNT, like "13 eggs". You can count eggs by the dozen (moles) or one by one (molecules); the ratio stays the same.')}
<p>Coefficients are <b>mole ratios</b>. If a question asks for moles, you do not need molar mass for the wanted substance at all; if it asks for molecules, multiply moles by 6.023 × 10²³.</p>
${MOLEMAP}
${steps('Worked example (p.94, Solved 4): 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O, 58 g of butane [C = 12, H = 1]',[
 'C₄H₁₀ = 48 + 10 = 58 g ∴ 2C₄H₁₀ = 116 g',
 '116 g of C₄H₁₀ needs 13 moles of O₂ ∴ 58 g needs 13 × 58 ÷ 116 = 6.5 moles O₂',
 '116 g of C₄H₁₀ liberates 8 × 22.4 L of CO₂ ∴ 58 g liberates 8 × 22.4 × 58 ÷ 116 = 89.6 L',
 'Mole check: 58 g = 1 mol butane → 13/2 = 6.5 mol O₂ and 8/2 = 4 mol CO₂ = 89.6 L'])}
${trap('Writing 13 g of O₂ because "13" sits under O₂: coefficients are moles, not grams.','Forgetting to divide by the coefficient of the GIVEN substance (here 2 for butane).','Molecules: multiply by 6.023 × 10²³, never by 22.4.')}
${cy(['2KClO₃ → 2KCl + 3O₂. Moles of O₂ from 0.2 mol KClO₃?','0.2 × 3/2 = 0.3 mol.'],['How many molecules are in 0.3 mol of O₂?','0.3 × 6.023 × 10²³ = 1.807 × 10²³.'],['P + 5HNO₃ → H₃PO₄ + H₂O + 5NO₂. Moles of NO₂ from 0.3 mol P?','1.5 mol.'])}
${exam('According to the equation, 2 moles (116 g) of butane need 13 moles of oxygen; hence 58 g of butane needs 13 × 58 ÷ 116 = 6.5 moles of oxygen.')}`,

e5:`<h3>Impure samples and percentage purity</h3>
${hook('Commercial caustic soda is never 100 % NaOH. How can a single precipitate tell you how much of a sample is "the real thing"?')}
${story('A bag of rice has some small stones in it. Only the rice cooks into a meal. If 2 kg of bag gives 1 kg-worth of cooked rice, the bag is 50 % rice. Only the PURE part reacts and appears in the equation.')}
<p>Two kinds of question:</p>
<ul><li><b>Purity given</b> → first find the pure mass (e.g. 80 % of 300 g = 240 g), then use the equation.</li>
<li><b>Product given</b> → work back through the equation to the mass of pure reactant, then <b>% purity = pure mass ÷ sample mass × 100</b>.</li></ul>
${steps('Worked example (p.94, Solved 6): 2.12 g impure Na₂SO₄ + excess BaCl₂ → 1.74 g BaSO₄ [Na = 23, S = 32, O = 16, Ba = 137]',[
 'Na₂SO₄ + BaCl₂ → BaSO₄ + 2NaCl',
 'Na₂SO₄ = 46 + 32 + 64 = 142 g; BaSO₄ = 137 + 32 + 64 = 233 g',
 '233 g BaSO₄ is obtained from 142 g Na₂SO₄ ∴ 1.74 g from 142 × 1.74 ÷ 233 = 1.06 g pure Na₂SO₄',
 '% purity = 1.06 × 100 ÷ 2.12 = 50 %'])}
${trap('Putting the whole impure mass into the equation: only the pure part reacts.','Dividing the wrong way round: % = pure ÷ impure × 100 (it can never exceed 100 %).','"Excess" reagent means the other one is used up completely; do not try to use the excess quantity.')}
${cy(['300 g of 80 % pure Na₂CO₃: how much pure Na₂CO₃?','240 g.'],['A 30 g sample contains 5.8 g of NaCl. % NaCl?','19.33 %.'],['Why is the precipitate (AgCl, BaSO₄) used to find purity?','It forms only from the pure substance and can be filtered, dried and weighed accurately.'])}
${exam('233 g of BaSO₄ is obtained from 142 g of Na₂SO₄; ∴ 1.74 g of BaSO₄ is obtained from 1.06 g of pure Na₂SO₄, so the purity of the 2.12 g sample is 1.06 × 100 ÷ 2.12 = 50 %.')}`,

e6:`<h3>Linked (two-equation) problems</h3>
${hook('How much KClO₃ must you heat to make exactly enough oxygen to burn 24 g of charcoal? Two reactions, one shared substance.')}
${story('A relay race: runner 1 (first equation) hands the baton (the shared substance, here O₂) to runner 2. Work out the baton first, then pass it on.')}
<p>Find the <b>moles of the linking substance</b> from the equation where it is known, then carry that number into the second equation. Volumes "x cc" cancel: you never need to find x in cc.</p>
${steps('Worked example (p.96, Q.3 (7)): 2KClO₃ → 2KCl + 3O₂; C + O₂ → CO₂, 24 g of carbon [K = 39, Cl = 35.5, O = 16, C = 12]',[
 'Equation 2: 24 g C ÷ 12 = 2 mol C needs 2 mol O₂ (this is the volume "X")',
 'Equation 1: 3 mol O₂ comes from 2 mol KClO₃ ∴ 2 mol O₂ comes from 2 × 2 ÷ 3 = 4/3 mol KClO₃',
 'KClO₃ = 39 + 35.5 + 48 = 122.5 g',
 'Mass = 4/3 × 122.5 = 163.33 g'])}
${trap('Calculating the volume in cc and then converting back: wasteful and invites rounding errors; stay in moles.','Using the coefficient from the wrong equation for the linking substance.','Forgetting to write the decomposition of KNO₃ (2KNO₃ → 2KNO₂ + O₂) or KClO₃ correctly balanced.')}
${cy(['S + O₂ → SO₂. Moles of O₂ for 16 g of S?','0.5 mol.'],['2KNO₃ → 2KNO₂ + O₂. Moles of KNO₃ to give 0.5 mol O₂?','1 mol.'],['What is the "linking substance" in the KClO₃/carbon problem?','Oxygen.'])}
${exam('24 g of carbon (2 mol) needs 2 mol of O₂; since 2 mol of KClO₃ gives 3 mol of O₂, 4/3 mol, i.e. 163.33 g, of KClO₃ must be decomposed.')}`,

e7:`<h3>Quick mole checks: volume ratios, atoms and gram-atoms</h3>
${hook('Which is bigger: the number of moles in 10 g of N₂O or 10 g of NO? You can answer in 5 seconds if you think "same mass, smaller molar mass → more moles".')}
${story('Same pocket money, cheaper sweets → more sweets. Same mass, smaller molar mass → more moles.')}
<p><b>Gay-Lussac\'s law (summary p.97):</b> when gases react, they do so in volumes which bear a simple whole-number ratio to one another and to the gaseous products (temperature and pressure constant). The volume ratio is the coefficient ratio.</p>
${BALLOONS}
<p><b>Atoms vs molecules:</b> moles of atoms = mass ÷ atomic mass. A formula unit like CaCl₂ contains 2 Cl⁻ ions, so 1 mol CaCl₂ has 2 mol Cl⁻ ions.</p>
<p><b>Empirical formula:</b> simplest whole-number ratio of atoms, so C₆H₆ → CH.</p>
${steps('Worked example (p.101, MCQ 1): ratio of C₂H₆ to its acidic gaseous product',[
 '2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O; the acidic gas is CO₂',
 'Volume ratio = coefficient ratio = 2 : 4 (at the same temperature and pressure)'])}
${trap('Cancelling a ratio when the options keep it unsimplified (2 : 4 is the expected answer, not 1 : 2, if 2 : 4 is listed separately).','Taking "one mole of CaCl₂" as one mole of chloride ions.','Leaving C₆H₆ as an empirical formula: always divide by the highest common factor.')}
${cy(['Gram-atoms in 46 g of Na [Na = 23]?','2 gram-atoms.'],['Moles in 10 g of X₂Y vs 10 g of XY [X = 14, Y = 16]?','X₂Y = 44 → 0.227 mol; XY = 30 → 0.333 mol, so X₂Y has fewer.'],['Volume of CO₂ from 300 cc of C₂H₆ (complete burning)?','600 cc.'])}
${exam('According to Gay-Lussac\'s law, 2 volumes of ethane give 4 volumes of carbon dioxide, so the ratio of C₂H₆ to CO₂ is 2 : 4 under the same conditions of temperature and pressure.')}`
};

const CHAPTER=[
 {id:'s-eq',title:'5. Chemical equations: term, information & procedure',ref:'p.92',t:['e1'],html:CONCEPT.e1},
 {id:'s-ww',title:'G. Problems based on equations: a] weight–weight',ref:'p.93',t:['e2'],html:CONCEPT.e2+`<p><b>Also solved on p.93:</b> Solved 1: 2KNO₃ → 2KNO₂ + O₂; 2 × 101 g of KNO₃ yield 2 × 85 g of KNO₂ ∴ 15.15 g yield 15.15 × 85 × 2 ÷ (101 × 2) = 12.75 g of KNO₂.</p>`},
 {id:'s-wv',title:'G. Problems based on equations: b] weight–volume, moles & molecules',ref:'p.93–94',t:['e3','e4'],html:CONCEPT.e3+CONCEPT.e4+`<p><b>Also solved on p.94:</b> Solved 5: 2Ca(NO₃)₂ → 2CaO + 4NO₂ + O₂ (relative molecular mass 164). 328 g liberates 4 × 22.4 L NO₂ ∴ 16.4 g liberates 4.48 L; 328 g gives 112 g CaO ∴ 16.4 g gives 5.6 g CaO.</p>`},
 {id:'s-pur',title:'G. Problems: impure mixtures & % purity',ref:'p.94',t:['e5'],html:CONCEPT.e5},
 {id:'s-add',title:'Additional problems Q.3: chemical equations (incl. linked equations)',ref:'p.95–96',t:['e6','e2','e3','e5'],html:`<p><b>Summary – laws & terms (p.95)</b></p><ul><li><b>★ Percentage composition</b> – is the percentage by weight of each element present in the compound.</li><li><b>★ Empirical formula</b> – is the formula of a compound which shows the simplest whole number ratio between the atoms of the elements in the compound.</li><li><b>★ Molecular formula</b> – is the chemical formula which represents the actual number of atoms of each element present in a molecule of the compound.</li></ul><p>Additional problems Q.3 (p.96) mix all the types above: mass–mass (AgCl, ammonia for (NH₄)₂SO₄), mass–volume (O₂ from KClO₃, NO from Cu + HNO₃, NH₃, NO₂ + O₂ from lead nitrate), moles (SO₂ from ZnS), purity (Na₂CO₃, Mg) and two linked equations. The method is always the same recipe.</p>`+CONCEPT.e6},
 {id:'s-sum',title:'Summary: solving different types of problems (A Gay-Lussac, G Chemical equations)',ref:'p.97–98',t:['e1','e7'],html:`<h3>A. Gay-Lussac\'s law – problems based on them (p.97)</h3>
 <p><b>Problem:</b> 4000 cc of O₂ was burnt with 300 cc of ethane. Calculate the volume of unused O₂ and CO₂ formed.</p>
 ${BALLOONS}
 <ol><li><b>Write the balanced equation</b> with volumes below: 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O (2 vols : 7 vols → 4 vols : 6 vols).</li>
 <li><b>Represent it as per Lussac\'s law</b> – when gases react, they do so in volumes which bear a simple whole-number ratio to one another and to the products (temp. & press. constant). Ratio 2 : 7 : 4 : 6; since 2 × 150 = 300 cc, multiply each by 150.</li>
 <li>2 × 150 : 7 × 150 : 4 × 150 = 300 cc : 1050 cc : 600 cc.</li>
 <li><b>Ans.</b> 600 cc of CO₂ formed; unused O₂ = 4000 − 1050 = 2950 cc.</li></ol>
 <p>(Summaries B–F on p.97–98, mole concept, Avogadro\'s law, vapour density, % composition and formulae, are taught in the earlier Mole pages.)</p>
 <h3>G. Chemical equations – problems based on them (p.98)</h3>
 <p><b>Problem:</b> Copper reacts with dilute nitric acid to give copper nitrate, water and nitric oxide. Calculate i] the mass of copper needed to react with 126 g of HNO₃, ii] the volume of nitric oxide obtained at the same time [Cu = 64, H = 1, O = 16, N = 14].</p>
 <p><b>Write the balanced equation</b>, then complete the corresponding columns a] and b]:</p>
 ${PROPTAB(['','3Cu','+ 8HNO₃','→ 3Cu(NO₃)₂ + 4H₂O','+ 2NO'],['a]','3 × 64 = 192 g','8[1 + 14 + 48] = 504 g','','2 × 22.4 = 44.8 L'],['b]','? g','126 g','','? L'])}
 <p>i] 504 g HNO₃ reacts with 192 g Cu ∴ 126 g reacts with 192 × 126 ÷ 504 = <b>48 g Cu</b>. ii] 504 g HNO₃ liberates 44.8 L NO ∴ 126 g liberates 44.8 × 126 ÷ 504 = <b>11.2 L NO</b>.</p>`},
 {id:'s-mcq',title:'Previous ICSE questions G, MCQ & HOTS',ref:'p.101',t:['e7'],html:`<p>The past board questions (2006–2025) on p.101 are all one-step or two-step uses of the recipe below; practise them in the Practice tab.</p>${RECIPE}`+CONCEPT.e7}
];

const TOPIC_SEC={e1:'s-eq',e2:'s-ww',e3:'s-wv',e4:'s-wv',e5:'s-pur',e6:'s-add',e7:'s-mcq'};

const Q=[
/* ---------- p.92 procedure example ---------- */
{id:'b92-ex',t:'e1',src:'p.92 · Example (procedure)',ref:'p.92',type:'num',solved:true,
 q:'Calculate the weight and volume of oxygen at s.t.p. which will be evolved on electrolysis of 18 g of water. [H = 1, O = 16]',
 hint:'Balanced equation → 36 g water gives 32 g (22.4 L) of O₂ → scale to 18 g.',
 parts:[{l:'Weight of O₂',a:16,u:'g'},{l:'Volume of O₂',a:11.2,u:'L'}],
 steps:['Step I: 2H₂O → 2H₂ + O₂','Step II: 2H₂O = 2[1 × 2 + 16] = 36 g; O₂ = 2 × 16 = 32 g','Step III: 36 g of water liberates 32 g of O₂ ∴ 18 g liberates 32 × 18 ÷ 36','Step IV: 32 g = 1 mole O₂ = 22.4 L at s.t.p. ∴ 18 g of water liberates 22.4 × 18 ÷ 36']},

/* ---------- p.93 solved ---------- */
{id:'b93-s1',t:'e2',src:'p.93 · Solved ex. G1',ref:'p.92–93',type:'num',solved:true,
 q:'Calculate the weight of potassium nitrite formed by thermal decomposition of 15.15 g of potassium nitrate. [K = 39, N = 14, O = 16]',
 hint:'2KNO₃ → 2KNO₂ + O₂. Mass → moles → same moles of KNO₂ → mass.',
 parts:[{l:'Mass of KNO₂',a:12.75,u:'g'}],
 steps:['2KNO₃ —Δ→ 2KNO₂ + O₂','2KNO₃ = 2[39 + 14 + 3 × 16] = 2 × 101 g; 2KNO₂ = 2[39 + 14 + 2 × 16] = 2 × 85 g','2 × 101 g of KNO₃ yield 2 × 85 g of KNO₂','∴ 15.15 g yield 15.15 × 85 × 2 ÷ (101 × 2)']},
{id:'b93-s2',t:'e2',src:'p.93 · Solved ex. G2',ref:'p.92–93',type:'num',solved:true,
 q:'Copper on reacting with conc. H₂SO₄ produces copper [II] sulphate. If 1.28 g of copper is to be converted to copper sulphate, find i] the weight of the copper sulphate formed and ii] the weight of the acid required. [Cu = 64, S = 32, O = 16]',
 hint:'Cu + 2H₂SO₄ → CuSO₄ + 2H₂O + SO₂. Remember the 2 in front of H₂SO₄.',
 parts:[{l:'i] CuSO₄',a:3.2,u:'g'},{l:'ii] H₂SO₄',a:3.92,u:'g'}],
 steps:['Cu + 2H₂SO₄ → CuSO₄ + 2H₂O + SO₂','Cu = 64 g; CuSO₄ = 64 + 32 + 4 × 16 = 160 g; 2H₂SO₄ = 2[2 + 32 + 64] = 196 g','64 g of Cu yields 160 g of CuSO₄ ∴ 1.28 g yields 160 × 1.28 ÷ 64','196 g of H₂SO₄ react with 64 g Cu ∴ acid for 1.28 g = 1.28 × 196 ÷ 64']},
{id:'b93-s3',t:'e3',src:'p.93 · Solved ex. G3',ref:'p.92–93',type:'num',solved:true,
 q:'From the equation CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂, calculate the weight of CaCl₂ obtained from 10 g of CaCO₃ and the volume at s.t.p. of CO₂ obtained at the same time. [Ca = 40, C = 12, O = 16, Cl = 35.5]',
 hint:'Under CaCO₃ and CaCl₂ write molar masses; under CO₂ write 22.4 L. Then proportion.',
 parts:[{l:'CaCl₂',a:11.1,u:'g'},{l:'CO₂ at s.t.p.',a:2.24,u:'L'}],
 steps:['CaCO₃ = 40 + 12 + 48 = 100 g; CaCl₂ = 40 + 71 = 111 g; CO₂ = 1 mole = 22.4 L','100 g of CaCO₃ gives 111 g of CaCl₂ ∴ 10 g gives 111 × 10 ÷ 100','100 g of CaCO₃ liberate 22.4 L of CO₂ at s.t.p. ∴ 10 g liberate 22.4 × 10 ÷ 100']},

/* ---------- p.94 solved ---------- */
{id:'b94-s4',t:'e4',src:'p.94 · Solved ex. G4',ref:'p.93–94',type:'num',solved:true,
 q:'Combustion of butane takes place as follows: 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O. Calculate a] the number of moles of oxygen needed for complete combustion of 58 g of butane, b] the volume of carbon dioxide formed at s.t.p. at the same time. [H = 1, C = 12]',
 hint:'Coefficients are moles: 116 g butane ↔ 13 mol O₂ ↔ 8 × 22.4 L CO₂.',
 parts:[{l:'a] O₂',a:6.5,u:'mol'},{l:'b] CO₂',a:89.6,u:'L'}],
 steps:['2C₄H₁₀ = 2[48 + 10] = 116 g; 13O₂ = 13 moles; 8CO₂ = 8 × 22.4 L at s.t.p.','116 g of C₄H₁₀ needs 13 moles of O₂ ∴ 58 g needs 13 × 58 ÷ 116','116 g of C₄H₁₀ liberates 8 × 22.4 L of CO₂ ∴ 58 g liberates 22.4 × 8 × 58 ÷ 116']},
{id:'b94-s5',t:'e3',src:'p.94 · Solved ex. G5',ref:'p.93–94',type:'num',solved:true,
 q:'Thermal decomposition of calcium nitrate takes place as follows: 2Ca(NO₃)₂ → 2CaO + 4NO₂ + O₂. If the relative molecular mass of calcium nitrate is 164, a] calculate the volume of nitrogen dioxide obtained at s.t.p. and b] the weight of calcium oxide obtained when 16.4 g of calcium nitrate is heated to constant weight. [Ca = 40, O = 16, N = 14]',
 hint:'328 g Ca(NO₃)₂ ↔ 4 × 22.4 L NO₂ ↔ 112 g CaO.',
 parts:[{l:'a] NO₂',a:4.48,u:'L'},{l:'b] CaO',a:5.6,u:'g'}],
 steps:['2Ca(NO₃)₂ = 2 × 164 = 328 g; 2CaO = 2[40 + 16] = 112 g; 4NO₂ = 4 × 22.4 L at s.t.p.','328 g of Ca(NO₃)₂ liberates 4 × 22.4 L of NO₂ ∴ 16.4 g liberates 4 × 22.4 × 16.4 ÷ 328','328 g of Ca(NO₃)₂ gives 112 g of CaO ∴ 16.4 g gives 112 × 16.4 ÷ 328']},
{id:'b94-s6',t:'e5',src:'p.94 · Solved ex. G6',ref:'p.94',type:'num',solved:true,
 q:'2.12 g of an impure mixture containing anhydrous sodium sulphate is dissolved in water. An excess of barium chloride solution is added when 1.74 g of barium sulphate is obtained as a dry precipitate. Calculate the percentage purity of the impure sample. [Na = 23, S = 32, O = 16, Ba = 137]',
 hint:'Na₂SO₄ + BaCl₂ → BaSO₄ + 2NaCl. Precipitate → mass of pure Na₂SO₄ → ÷ sample × 100.',
 parts:[{l:'% purity',a:50,u:'%'}],
 steps:['Na₂SO₄ + BaCl₂ → BaSO₄ + 2NaCl','Na₂SO₄ = 2 × 23 + 32 + 4 × 16 = 142 g; BaSO₄ = 137 + 32 + 64 = 233 g','233 g of BaSO₄ is obtained from 142 g of Na₂SO₄ ∴ 1.74 g from 142 × 1.74 ÷ 233 = 1.06 g pure Na₂SO₄','% purity = 1.06 × 100 ÷ 2.12']},

/* ---------- p.96 Additional problems Q.3 ---------- */
{id:'b96-3-1',t:'e2',src:'p.96 · Q.3 (1)',ref:'p.92–93',type:'num',
 q:'What mass of silver chloride will be obtained by adding an excess of hydrochloric acid to a solution of 0.34 g of silver nitrate? [Cl = 35.5, Ag = 108, N = 14, O = 16, H = 1]',
 hint:'AgNO₃ + HCl → AgCl + HNO₃ (1 : 1). Mass AgNO₃ → moles → mass AgCl.',
 parts:[{l:'AgCl',a:0.287,u:'g'}],
 steps:['AgNO₃ + HCl → AgCl + HNO₃','AgNO₃ = 108 + 14 + 48 = 170 g; AgCl = 108 + 35.5 = 143.5 g','170 g of AgNO₃ gives 143.5 g of AgCl','∴ 0.34 g gives 143.5 × 0.34 ÷ 170']},
{id:'b96-3-2',t:'e3',src:'p.96 · Q.3 (2)',ref:'p.93–94',type:'num',
 q:'What volume of oxygen at s.t.p. will be obtained by the action of heat on 20 g of KClO₃? [K = 39, Cl = 35.5, O = 16]',
 hint:'2KClO₃ → 2KCl + 3O₂: 245 g gives 3 × 22.4 L.',
 parts:[{l:'O₂ at s.t.p.',a:5.486,u:'L'}],
 steps:['2KClO₃ —Δ→ 2KCl + 3O₂','2KClO₃ = 2[39 + 35.5 + 48] = 245 g; 3O₂ = 3 × 22.4 = 67.2 L','245 g of KClO₃ gives 67.2 L of O₂','∴ 20 g gives 67.2 × 20 ÷ 245']},
{id:'b96-3-3',t:'e3',src:'p.96 · Q.3 (3)',ref:'p.93–94',type:'num',
 q:'From the equation: 3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 4H₂O + 2NO. Calculate (i) the mass of copper needed to react with 63 g of nitric acid, (ii) the volume of nitric oxide collected at the same time. [Cu = 64, H = 1, O = 16, N = 14]',
 hint:'504 g HNO₃ ↔ 192 g Cu ↔ 2 × 22.4 L NO.',
 parts:[{l:'(i) Cu',a:24,u:'g'},{l:'(ii) NO',a:5.6,u:'L'}],
 steps:['3Cu = 3 × 64 = 192 g; 8HNO₃ = 8 × 63 = 504 g; 2NO = 2 × 22.4 = 44.8 L','504 g HNO₃ reacts with 192 g Cu ∴ 63 g reacts with 192 × 63 ÷ 504','504 g HNO₃ liberates 44.8 L NO ∴ 63 g liberates 44.8 × 63 ÷ 504']},
{id:'b96-3-4',t:'e4',src:'p.96 · Q.3 (4)',ref:'p.93–94',type:'num',
 q:'Zinc blende [ZnS] is roasted in air. Calculate: a] the number of moles of sulphur dioxide liberated by 776 g of ZnS and b] the weight of ZnS required to produce 22.4 lits of SO₂ at s.t.p. [S = 32, Zn = 65, O = 16]',
 hint:'Write 2ZnS + 3O₂ → 2ZnO + 2SO₂: ZnS and SO₂ are 1 : 1.',
 parts:[{l:'a] SO₂',a:8,u:'mol'},{l:'b] ZnS',a:97,u:'g'}],
 steps:['2ZnS + 3O₂ → 2ZnO + 2SO₂','ZnS = 65 + 32 = 97 g; moles of ZnS = 776 ÷ 97 = 8','ZnS : SO₂ = 2 : 2 = 1 : 1 ∴ moles of SO₂ = moles of ZnS','22.4 L SO₂ = 1 mole ∴ needs 1 mole of ZnS = 97 g']},
{id:'b96-3-5',t:'e3',src:'p.96 · Q.3 (5)',ref:'p.93–94',type:'num',
 q:'Ammonia reacts with sulphuric acid to give the fertilizer ammonium sulphate. Calculate the volume of ammonia [at s.t.p.] used to form 59 g of ammonium sulphate. [N = 14, H = 1, S = 32, O = 16]',
 hint:'2NH₃ + H₂SO₄ → (NH₄)₂SO₄: 132 g of salt needs 2 × 22.4 L NH₃.',
 parts:[{l:'NH₃ at s.t.p.',a:20.02,u:'L'}],
 steps:['2NH₃ + H₂SO₄ → (NH₄)₂SO₄','(NH₄)₂SO₄ = 2[14 + 4] + 32 + 64 = 132 g; 2NH₃ = 2 × 22.4 = 44.8 L','132 g of (NH₄)₂SO₄ needs 44.8 L of NH₃','∴ 59 g needs 44.8 × 59 ÷ 132']},
{id:'b96-3-6',t:'e3',src:'p.96 · Q.3 (6)',ref:'p.93–94',type:'num',
 q:'Heat on lead nitrate gives yellow lead [II] oxide, nitrogen dioxide & oxygen. Calculate the total volume of NO₂ & O₂ produced on heating 8.5 g of lead nitrate. [Pb = 207, N = 14, O = 16]',
 hint:'2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂: 662 g gives 4 × 22.4 L NO₂ and 22.4 L O₂.',
 parts:[{l:'NO₂',a:1.15,u:'L'},{l:'O₂',a:0.287,u:'L'},{l:'Total',a:1.437,u:'L'}],
 exp:'The book prints "8.5 of lead nitrate"; the unit g is missing. Exact working gives 1.1505 L, 0.2876 L and 1.438 L.',
 steps:['2Pb(NO₃)₂ —Δ→ 2PbO + 4NO₂ + O₂','Pb(NO₃)₂ = 207 + 2[14 + 48] = 331 g ∴ 2Pb(NO₃)₂ = 662 g','662 g gives 4 × 22.4 = 89.6 L NO₂ ∴ 8.5 g gives 89.6 × 8.5 ÷ 662','662 g gives 22.4 L O₂ ∴ 8.5 g gives 22.4 × 8.5 ÷ 662','Total = NO₂ + O₂']},
{id:'b96-3-7',t:'e6',src:'p.96 · Q.3 (7)',ref:'p.93–96',type:'num',
 q:'2KClO₃ —Δ→ 2KCl + 3O₂; C + O₂ —Δ→ CO₂. Calculate the amount of KClO₃ which on thermal decomposition gives \'X\' vol. of O₂, which is the volume required for combustion of 24 g of carbon. [K = 39, Cl = 35.5, O = 16, C = 12]',
 hint:'Carbon → moles of O₂ (the link) → moles of KClO₃ (× 2/3) → mass.',
 parts:[{l:'KClO₃',a:163.33,u:'g'}],
 steps:['C + O₂ → CO₂: 24 g C = 24 ÷ 12 = 2 mol, needs 2 mol O₂ (= X)','2KClO₃ → 2KCl + 3O₂: 3 mol O₂ from 2 mol KClO₃','∴ 2 mol O₂ from 2 × 2 ÷ 3 = 4/3 mol KClO₃','KClO₃ = 39 + 35.5 + 48 = 122.5 g ∴ mass = 4/3 × 122.5']},
{id:'b96-3-8',t:'e2',src:'p.96 · Q.3 (8)',ref:'p.92–93',type:'num',
 q:'Calculate the weight of ammonia gas a] required for reacting with sulphuric acid to give 78 g of fertilizer ammonium sulphate, b] obtained when 32.6 g of ammonium chloride reacts with calcium hydroxide during the laboratory preparation of ammonia. [2NH₄Cl + Ca(OH)₂ → CaCl₂ + 2H₂O + 2NH₃] [N = 14, H = 1, O = 16, S = 32, Cl = 35.5]',
 hint:'a] 2NH₃ + H₂SO₄ → (NH₄)₂SO₄: 34 g ↔ 132 g. b] NH₄Cl : NH₃ = 1 : 1.',
 parts:[{l:'a] NH₃',a:20.09,u:'g'},{l:'b] NH₃',a:10.36,u:'g'}],
 steps:['a] 2NH₃ + H₂SO₄ → (NH₄)₂SO₄; 2NH₃ = 34 g; (NH₄)₂SO₄ = 132 g','132 g of salt needs 34 g NH₃ ∴ 78 g needs 34 × 78 ÷ 132','b] 2NH₄Cl = 2 × 53.5 = 107 g gives 2NH₃ = 34 g','∴ 32.6 g NH₄Cl gives 34 × 32.6 ÷ 107']},
{id:'b96-3-9',t:'e5',src:'p.96 · Q.3 (9)',ref:'p.94',type:'num',
 q:'Sodium carbonate reacts with dil. H₂SO₄ to give the respective salt, water and carbon dioxide. Calculate the mass of pure salt formed when 300 g of Na₂CO₃ of 80% purity reacts with dil. H₂SO₄. [Na = 23, C = 12, O = 16, H = 1, S = 32]',
 hint:'First the pure mass (80% of 300 g), then Na₂CO₃ : Na₂SO₄ = 1 : 1.',
 parts:[{l:'Na₂SO₄',a:321.51,u:'g'}],
 steps:['Na₂CO₃ + H₂SO₄ → Na₂SO₄ + H₂O + CO₂','Pure Na₂CO₃ = 80 × 300 ÷ 100 = 240 g','Na₂CO₃ = 46 + 12 + 48 = 106 g; Na₂SO₄ = 46 + 32 + 64 = 142 g','106 g gives 142 g ∴ 240 g gives 142 × 240 ÷ 106']},
{id:'b96-3-10',t:'e6',src:'p.96 · Q.3 (10)',ref:'p.93–96',type:'num',
 q:'Sulphur burns in oxygen to give sulphur dioxide. If 16 g of sulphur burns in \'x\' cc of oxygen, calculate the amount of potassium nitrate which must be heated to produce \'x\' cc of oxygen. [S = 32, K = 39, N = 14, O = 16]',
 hint:'S → moles of O₂ (the link) → 2KNO₃ → 2KNO₂ + O₂ → mass of KNO₃.',
 parts:[{l:'KNO₃',a:101,u:'g'}],
 steps:['S + O₂ → SO₂: 16 g S = 0.5 mol, needs 0.5 mol O₂ (= x cc)','2KNO₃ → 2KNO₂ + O₂: 1 mol O₂ from 2 mol KNO₃','∴ 0.5 mol O₂ from 1 mol KNO₃','KNO₃ = 39 + 14 + 48 = 101 g']},
{id:'b96-3-11',t:'e5',src:'p.96 · Q.3 (11)',ref:'p.94',type:'num',
 q:'Sample of impure magnesium is reacted with dilute sulphuric acid to give the respective salt and hydrogen. If 1 g of the impure sample gave 298.6 cc of hydrogen at s.t.p., calculate the % purity of the sample. [Mg = 24, H = 1]',
 hint:'Mg + H₂SO₄ → MgSO₄ + H₂: 24 g Mg ↔ 22 400 cc H₂. Find pure Mg, then ÷ 1 g × 100.',
 parts:[{l:'% purity',a:31.99,u:'%'}],
 steps:['Mg + H₂SO₄ → MgSO₄ + H₂','22 400 cc of H₂ at s.t.p. comes from 24 g of Mg','∴ 298.6 cc comes from 24 × 298.6 ÷ 22 400 = 0.3199 g pure Mg','% purity = 0.3199 × 100 ÷ 1']},

/* ---------- p.98 summary G ---------- */
{id:'b98-g',t:'e1',src:'p.98 · Summary G problem',ref:'p.92, 98',type:'num',solved:true,
 q:'Copper reacts with dilute nitric acid to give copper nitrate, water and nitric oxide. Calculate i] the mass of copper needed to react with 126 g of HNO₃, ii] the volume of nitric oxide obtained at the same time. [Cu = 64, H = 1, O = 16, N = 14]',
 hint:'Write and balance 3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 4H₂O + 2NO, then complete the columns a] and b].',
 parts:[{l:'i] Cu',a:48,u:'g'},{l:'ii] NO',a:11.2,u:'L'}],
 steps:['3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 4H₂O + 2NO','a] 3 × 64 = 192 g Cu; 8[1 + 14 + 48] = 504 g HNO₃; 2 × 22.4 = 44.8 L NO','i] 504 g HNO₃ reacts with 192 g Cu ∴ 126 g reacts with 192 × 126 ÷ 504','ii] 504 g HNO₃ liberates 44.8 L ∴ 126 g liberates 44.8 × 126 ÷ 504']},

/* ---------- p.101 Past ICSE questions G ---------- */
{id:'b101-2006',t:'e3',src:'p.101 · 2006 Q1',ref:'p.93–94',type:'num',
 q:'The relative molecular mass [mol. wt.] of copper oxide is 80. What vol. of NH₃ [at s.t.p.] is required to completely reduce 120 g of CuO? [3CuO + 2NH₃ → 3Cu + 3H₂O + N₂]',
 hint:'CuO → moles (÷ 80) → × 2/3 → × 22.4 L.',
 parts:[{l:'NH₃',a:22.4,u:'L'}],
 steps:['3CuO = 3 × 80 = 240 g; 2NH₃ = 2 × 22.4 = 44.8 L','Moles of CuO = 120 ÷ 80 = 1.5','Moles of NH₃ = 1.5 × 2 ÷ 3 = 1 mol','Volume = 1 × 22.4 L']},
{id:'b101-2007',t:'e3',src:'p.101 · 2007 Q1',ref:'p.93–94',type:'num',
 q:'Ammonium nitrate when heated yields 8.96 litres of steam [measured at s.t.p.]. NH₄NO₃ → N₂O + 2H₂O. i] What volume of dinitrogen oxide is produced at the same time as 8.96 litres of steam? ii] What mass of ammonium nitrate should be heated to produce 8.96 litres of steam? [Relative molecular mass of NH₄NO₃ is 80]',
 hint:'Steam: 8.96 ÷ 22.4 mol. N₂O : H₂O = 1 : 2 and NH₄NO₃ : H₂O = 1 : 2.',
 parts:[{l:'i] N₂O',a:4.48,u:'L'},{l:'ii] NH₄NO₃',a:16,u:'g'}],
 steps:['Moles of steam = 8.96 ÷ 22.4 = 0.4 mol','N₂O : H₂O = 1 : 2 ∴ N₂O = 0.2 mol = 0.2 × 22.4 L (or simply half the volume, by Gay-Lussac)','NH₄NO₃ : H₂O = 1 : 2 ∴ NH₄NO₃ = 0.2 mol','Mass = 0.2 × 80']},
{id:'b101-2008',t:'e3',src:'p.101 · 2008 Q1',ref:'p.93–94',type:'num',
 q:'From the equation: C + 2H₂SO₄ → CO₂ + 2H₂O + 2SO₂, calculate: i] the mass of carbon oxidized by 49 g of sulphuric acid [C = 12; rel. mol. mass of H₂SO₄ = 98], ii] the volume of SO₂ measured at s.t.p., liberated at the same time.',
 hint:'196 g H₂SO₄ ↔ 12 g C ↔ 2 × 22.4 L SO₂.',
 parts:[{l:'i] C',a:3,u:'g'},{l:'ii] SO₂',a:11.2,u:'dm³'}],
 steps:['2H₂SO₄ = 2 × 98 = 196 g; C = 12 g; 2SO₂ = 44.8 L','Moles of H₂SO₄ = 49 ÷ 98 = 0.5 mol','C = 0.5 ÷ 2 = 0.25 mol = 0.25 × 12 g','SO₂ : H₂SO₄ = 2 : 2 ∴ SO₂ = 0.5 mol = 0.5 × 22.4 L']},
{id:'b101-2009',t:'e5',src:'p.101 · 2009 Q1',ref:'p.94',type:'num',
 q:'Commercial NaOH weighing 30 g has some NaCl in it. The mixture on dissolving in water & treatment with excess AgNO₃ soln. formed a precipitate weighing 14.3 g. What is the percentage of NaCl in the commercial sample of NaOH? NaCl + AgNO₃ → AgCl + Na&#78;O₃. [Relative molecular mass of NaCl = 58; AgCl = 143]',
 hint:'Precipitate AgCl → mass of NaCl (1 : 1) → ÷ 30 g × 100.',
 parts:[{l:'% NaCl',a:19.33,u:'%'}],
 steps:['NaCl + AgNO₃ → AgCl + Na&#78;O₃ (1 : 1)','143 g AgCl comes from 58 g NaCl ∴ 14.3 g comes from 58 × 14.3 ÷ 143 = 5.8 g NaCl','% NaCl = 5.8 × 100 ÷ 30']},
{id:'b101-2011',t:'e3',src:'p.101 · 2011 Q1',ref:'p.93–94',type:'num',
 q:'Calculate the volume of oxygen required for the complete combustion of 8.8 g of propane [C₃H₈]. [C = 12, O = 16, H = 1, Molar Volume = 22.4 dm³ at stp]',
 hint:'Write C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. 44 g propane needs 5 × 22.4 L O₂.',
 parts:[{l:'O₂',a:22.4,u:'L'}],
 steps:['C₃H₈ + 5O₂ → 3CO₂ + 4H₂O','C₃H₈ = 36 + 8 = 44 g; 5O₂ = 5 × 22.4 = 112 L','Moles of propane = 8.8 ÷ 44 = 0.2 mol','O₂ = 0.2 × 5 = 1 mol = 22.4 L']},
{id:'b101-2012',t:'e4',src:'p.101 · 2012 Q1',ref:'p.94',type:'num',
 q:'P + 5HNO₃ [conc.] → H₃PO₄ + H₂O + 5NO₂. If 9.3 g of phosphorus was used in the reaction, calculate: i] number of moles of phosphorus taken, ii] the mass of phosphoric acid formed, iii] the volume of NO₂ produced at stp. [H = 1, N = 14, P = 31, O = 16]',
 hint:'Moles of P first (÷ 31), then 1 : 1 for H₃PO₄ and 1 : 5 for NO₂.',
 parts:[{l:'i] P',a:0.3,u:'mol'},{l:'ii] H₃PO₄',a:29.4,u:'g'},{l:'iii] NO₂',a:33.6,u:'L'}],
 steps:['Moles of P = 9.3 ÷ 31 = 0.3 mol','H₃PO₄ = 3 + 31 + 64 = 98 g; P : H₃PO₄ = 1 : 1 ∴ 0.3 mol × 98','P : NO₂ = 1 : 5 ∴ NO₂ = 1.5 mol × 22.4 L']},
{id:'b101-2013',t:'e4',src:'p.101 · 2013 Q1',ref:'p.94',type:'num',
 q:'2KClO₃ —MnO₂→ 2KCl + 3O₂. i] Calculate the mass of KClO₃ required to produce 6.72 litre of O₂ at STP. [K = 39, Cl = 35.5, O = 16] ii] Calculate the no. of moles of O₂ in the above volume & also the no. of molecules.',
 hint:'6.72 ÷ 22.4 = moles of O₂; × 2/3 → KClO₃; × 6.023 × 10²³ → molecules.',
 parts:[{l:'i] KClO₃',a:24.5,u:'g'},{l:'ii] O₂',a:0.3,u:'mol'},{l:'ii] molecules',a:0.3*6.023e23,show:'0.3 × 6.023 × 10²³',u:'molecules'}],
 steps:['Moles of O₂ = 6.72 ÷ 22.4 = 0.3 mol','KClO₃ : O₂ = 2 : 3 ∴ KClO₃ = 0.3 × 2 ÷ 3 = 0.2 mol','KClO₃ = 122.5 g ∴ mass = 0.2 × 122.5','Molecules of O₂ = 0.3 × 6.023 × 10²³']},
{id:'b101-2015',t:'e4',src:'p.101 · 2015 Q1',ref:'p.94',type:'num',
 q:'From the equation: (NH₄)₂Cr₂O₇ —heat→ N₂(g) + 4H₂O(g) + Cr₂O₃. Calculate: i] the quantity in moles of (NH₄)₂Cr₂O₇ if 63 g of (NH₄)₂Cr₂O₇ is heated, ii] the quantity in moles of N₂ formed, iii] the volume in litres or dm³ of N₂ evolved at s.t.p., iv] the mass in grams of Cr₂O₃ formed at the same time. [H = 1, Cr = 52, N = 14, O = 16]',
 hint:'Molar mass of (NH₄)₂Cr₂O₇ = 252; everything else is 1 : 1.',
 parts:[{l:'i]',a:0.25,u:'mol'},{l:'ii] N₂',a:0.25,u:'mol'},{l:'iii] N₂',a:5.6,u:'L'},{l:'iv] Cr₂O₃',a:38,u:'g'}],
 steps:['(NH₄)₂Cr₂O₇ = 2[14 + 4] + 104 + 112 = 252 g','Moles = 63 ÷ 252 = 0.25 mol; N₂ : dichromate = 1 : 1','Volume of N₂ = 0.25 × 22.4 L','Cr₂O₃ = 104 + 48 = 152 g; 0.25 mol × 152']},
{id:'b101-2016',t:'e3',src:'p.101 · 2016 Q1',ref:'p.93–94',type:'num',
 q:'How much calcium oxide is formed when 82 g of calcium nitrate is heated? Find the volume of nitrogen dioxide evolved: 2Ca(NO₃)₂ → 2CaO + 4NO₂ + O₂ [Ca = 40, N = 14, O = 16]',
 hint:'328 g Ca(NO₃)₂ ↔ 112 g CaO ↔ 4 × 22.4 L NO₂.',
 parts:[{l:'CaO',a:28,u:'g'},{l:'NO₂',a:22.4,u:'L'}],
 steps:['Ca(NO₃)₂ = 40 + 2[14 + 48] = 164 g; moles = 82 ÷ 164 = 0.5 mol','CaO : Ca(NO₃)₂ = 1 : 1 ∴ 0.5 mol × 56 g','NO₂ : Ca(NO₃)₂ = 4 : 2 ∴ 1 mol NO₂ = 22.4 L']},
{id:'b101-2018',t:'e3',src:'p.101 · 2018 Q1',ref:'p.93–94',type:'num',
 q:'Aluminium carbide reacts with water: Al₄C₃ + 12H₂O → 4Al(OH)₃ + 3CH₄. i] State what mass of aluminium hydroxide is formed from 12 g of aluminium carbide. ii] State the volume of methane at s.t.p., obtained from 12 g of aluminium carbide. [relative molecular weight of Al₄C₃ = 144; Al(OH)₃ = 78]',
 hint:'12 ÷ 144 mol carbide; × 4 for Al(OH)₃, × 3 for CH₄.',
 parts:[{l:'i] Al(OH)₃',a:26,u:'g'},{l:'ii] CH₄',a:5.6,u:'L'}],
 steps:['144 g Al₄C₃ gives 4 × 78 = 312 g Al(OH)₃ and 3 × 22.4 = 67.2 L CH₄','∴ 12 g gives 312 × 12 ÷ 144 g Al(OH)₃','∴ 12 g gives 67.2 × 12 ÷ 144 L CH₄']},
{id:'b101-2019',t:'e2',src:'p.101 · 2019 Q1',ref:'p.92–93',type:'num',
 q:'Copper [II] sulphate soln. reacts with sodium hydroxide soln. to form copper hydroxide according to the equation: 2NaOH + CuSO₄ → Na₂SO₄ + Cu(OH)₂↓. What mass of copper hydroxide is precipitated by using 200 g of NaOH? [H = 1, O = 16, Na = 23, S = 32, Cu = 64]',
 hint:'80 g (2 mol) NaOH gives 98 g Cu(OH)₂.',
 parts:[{l:'Cu(OH)₂',a:245,u:'g'}],
 steps:['2NaOH = 2 × 40 = 80 g; Cu(OH)₂ = 64 + 34 = 98 g','80 g NaOH precipitates 98 g Cu(OH)₂','∴ 200 g precipitates 98 × 200 ÷ 80']},
{id:'b101-2025',t:'e2',src:'p.101 · 2025 Q1',ref:'p.92–94',type:'num',
 q:'The reaction between concentrated sulphuric acid and magnesium can be represented by the equation: Mg + 2H₂SO₄ → MgSO₄ + 2H₂O + SO₂. If 60 g of magnesium is used in the reaction, calculate a] the mass of sulphuric acid needed for the reaction, b] the volume of sulphur dioxide gas liberated at S.T.P. [Mg = 24, H = 1, S = 32, O = 16]',
 hint:'60 ÷ 24 mol Mg; × 2 for H₂SO₄ (× 98), × 1 for SO₂ (× 22.4).',
 parts:[{l:'a] H₂SO₄',a:490,u:'g'},{l:'b] SO₂',a:56,u:'L'}],
 steps:['Moles of Mg = 60 ÷ 24 = 2.5 mol','H₂SO₄ = 2 × 2.5 = 5 mol; H₂SO₄ = 98 g ∴ 5 × 98','SO₂ = 2.5 mol × 22.4 L']},

/* ---------- p.101 MCQ & HOTS ---------- */
{id:'b101-mcq1',t:'e7',src:'p.101 · MCQ 1',ref:'p.97',type:'mcq',
 q:'A gas \'X\' – C₂H₆ undergoes combustion. Under the same conditions & pressure, the ratio of the gas to its acidic gaseous product is:',
 hint:'Write the balanced equation; the acidic gas is CO₂. Gay-Lussac: volume ratio = coefficient ratio.',
 opts:['2 : 2','2 : 4','1 : 2','2 : 1'],ans:1,
 exp:'2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O, so C₂H₆ : CO₂ = 2 : 4. The book gives (b); 1 : 2 is the same ratio simplified, but the book expects the coefficient form.'},
{id:'b101-mcq2',t:'e7',src:'p.101 · MCQ 2',ref:'p.76–80',type:'mcq',
 q:'The number of atoms in 40 g of a gas \'X\' [X = 20] is:',
 hint:'Gram-atoms = mass ÷ atomic mass, then × 6.023 × 10²³.',
 opts:['3 × 6.023 × 10²³ atoms','4 × 6.023 × 10²³ atoms','2 × 6.023 × 10²³ atoms','6.023 × 10²³ atoms'],ans:2,
 exp:'40 ÷ 20 = 2 gram-atoms → 2 × 6.023 × 10²³ atoms. The book treats X (atomic mass 20, like neon) as a monatomic gas.'},
{id:'b101-hots1',t:'e7',src:'p.101 · HOTS 1 (a–d)',ref:'p.76–94',type:'toggle',labels:['False','True'],
 q:'State which of the statements is false. If false write the correct statement.',
 hint:'Check each with a one-line mole calculation: ions per formula, simplest ratio, mass ÷ atomic mass, mass ÷ molar mass.',
 items:[['a] CaCl₂ contains one mole of chloride ions.',0],['b] The empirical formula of an organic compound containing 6 atoms each of C & H is C₆H₆.',0],['c] The gram atoms in 69 g of an element \'X\' is 3 g atom [X = 23].',1],['d] 10 g of X₂Y has lesser number of moles than 10 g of XY [X = 14, Y = 16].',1]],
 exp:'Corrections: (a) One mole of CaCl₂ contains <b>two</b> moles of chloride ions. (b) The empirical formula is <b>CH</b> (C₆H₆ is the molecular formula). (c) 69 ÷ 23 = 3 g atoms: true. (d) X₂Y = 44 → 0.227 mol; XY = 30 → 0.333 mol: true.'}
];
