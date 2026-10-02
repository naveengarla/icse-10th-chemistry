/* Mole 3 · Stoichiometry 1: % composition, empirical & molecular formula (Dalal 4.B, p.87–91, 95–96, 98, 100–101) */

/* ---------- diagrams ---------- */
function M3_PIE(cx,cy,r,sl){let a=-Math.PI/2,s='';
  sl.forEach(([lab,pc,col])=>{const b=a+2*Math.PI*pc/100,x1=cx+r*Math.cos(a),y1=cy+r*Math.sin(a),x2=cx+r*Math.cos(b),y2=cy+r*Math.sin(b);
    s+=`<path d="M${cx} ${cy}L${x1.toFixed(1)} ${y1.toFixed(1)}A${r} ${r} 0 ${pc>50?1:0} 1 ${x2.toFixed(1)} ${y2.toFixed(1)}Z" fill="${col}" stroke="#fff" stroke-width="2"/>`;
    const m=(a+b)/2;s+=T((cx+r*0.6*Math.cos(m)).toFixed(1),(cy+r*0.6*Math.sin(m)).toFixed(1),`${lab} ${pc}%`,'frm');a=b});return s}
const M3_PIEK=svg(620,260,
 M3_PIE(140,130,110,[['K',26.53,'#fde68a'],['Cr',35.37,'#bbf7d0'],['O',38.10,'#bfdbfe']])+
 T(440,30,'K₂Cr₂O₇: molar mass = 78 + 104 + 112 = 294 g','frm')+
 T(440,80,'K : 2 × 39 = 78 g → 78 ÷ 294 × 100 = 26.53 %','lab')+
 T(440,115,'Cr : 2 × 52 = 104 g → 104 ÷ 294 × 100 = 35.37 %','lab')+
 T(440,150,'O : 7 × 16 = 112 g → 112 ÷ 294 × 100 = 38.10 %','lab')+
 T(440,195,'Check: 26.53 + 35.37 + 38.10 = 100 %','frm')+
 T(440,230,'Each slice = mass of that element in ONE mole','lab'));
const M3_BAR=svg(620,150,
 T(310,20,'Washing soda Na₂CO₃·10H₂O (molar mass 286 g)','frm')+
 `<rect x="20" y="45" width="${(580*106/286).toFixed(1)}" height="45" fill="#e5e7eb" stroke="#6b7280"/>`+
 `<rect x="${(20+580*106/286).toFixed(1)}" y="45" width="${(580*180/286).toFixed(1)}" height="45" fill="#bfdbfe" stroke="#1d4ed8"/>`+
 T(20+290*106/286,67,'Na₂CO₃ 106 g = 37.06 %','lab')+T(20+580*106/286+290*180/286,67,'10 H₂O = 180 g = 62.94 %','frm')+
 T(310,120,'Water of crystallisation is counted as part of the molar mass!','lab'));
const M3_EF=svg(700,290,
 BOX(70,30,110,40,'Element','#f3f4f6')+BOX(200,30,110,40,'% by mass')+BOX(340,30,130,40,'÷ atomic mass')+BOX(480,30,120,40,'÷ smallest')+BOX(620,30,120,40,'whole nos.','#fde68a')+
 ARR(256,30,273,30)+ARR(406,30,419,30)+ARR(541,30,559,30)+
 [['Na','29.11','29.11 ÷ 23 = 1.266','1.266 ÷ 1.266 = 1','× 2 = 2'],['S','40.51','40.51 ÷ 32 = 1.266','1.266 ÷ 1.266 = 1','× 2 = 2'],['O','30.38','30.38 ÷ 16 = 1.898','1.898 ÷ 1.266 = 1.5','× 2 = 3']]
  .map((r,i)=>{const y=85+45*i;return `<line x1="15" y1="${y-22}" x2="685" y2="${y-22}" stroke="#e5e7eb"/>`+T(70,y,r[0],'frm')+T(200,y,r[1],'lab')+T(340,y,r[2],'lab')+T(480,y,r[3],'lab')+T(620,y,r[4],'frm')}).join('')+
 T(350,230,'1.5 is not a whole number → multiply EVERY ratio by 2','lab')+
 T(350,265,'Na : S : O = 2 : 2 : 3  →  Empirical formula = Na₂S₂O₃','frm'));
const M3_MF=svg(640,130,
 BOX(80,50,140,46,'Empirical formula')+BOX(245,50,130,46,'EF mass')+BOX(410,50,150,46,'n = M ÷ EF mass','#fde68a')+BOX(570,50,110,46,'(EF)ₙ','#bbf7d0')+
 ARR(151,50,178,50)+ARR(311,50,333,50)+ARR(486,50,513,50)+
 T(410,100,'M = 2 × vapour density (if VD is given)','lab')+T(245,100,'add atomic masses','lab'));

/* ---------- page ---------- */
const PAGE={key:'mole-3-v1',lab:'mole-lab.html',title:'Stoichiometry 1 · % composition, empirical & molecular formula',
 pages:{87:'Theory 1 (% composition) & solved problems E 1–5',88:'Theory 2: empirical formula, solved example (Na₂S₂O₃)',89:'Theory 3: molecular formula, solved example (C₂H₂O₄)',
  90:'Solved problems F 1–2',91:'Solved problems F 3–6',95:'Additional problems Q.1 (1–8) % composition & Q.2 (1–6) empirical/molecular formula',
  96:'Additional problems Q.2 (7–11)',98:'Summary problem types E (borax) & F',100:'Past ICSE: E. Percentage composition (1999–2023) & F (2018–2021-22 Q1)',101:'Past ICSE: F (2021-22 Q2–3, 2023–2025)'},
 formulas:`<h3>📐 Formula sheet</h3><table class="cmp">${tr(
  ['% of an element','(mass of element in 1 mole ÷ molar mass) × 100'],
  ['% water of crystallisation','(mass of xH₂O ÷ molar mass of hydrate) × 100'],
  ['% of element in impure sample','% in pure compound × purity ÷ 100'],
  ['Relative no. of atoms','% (or mass) ÷ atomic mass'],
  ['Simplest ratio','each atomic ratio ÷ smallest atomic ratio'],
  ['Molecular mass','M = 2 × vapour density'],
  ['n (whole number)','n = M ÷ empirical formula mass'],
  ['Molecular formula','(empirical formula)ₙ'])}</table>${M3_EF}${M3_MF}`};

const TOPICS=[
 {id:'pc',name:'1. Percentage composition of an element',ref:'p.87'},
 {id:'pa',name:'2. Using % composition: water, purity, mass of element',ref:'p.87'},
 {id:'ef',name:'3. Empirical formula',ref:'p.88'},
 {id:'mf',name:'4. Molecular formula (n = M ÷ EF mass)',ref:'p.89–91'},
 {id:'hy',name:'5. Hydrated salts: water of crystallisation in formulae',ref:'p.87, 91'}];

/* ---------- lessons ---------- */
const CONCEPT={
pc:`<h3>Percentage composition</h3>
${hook('Potassium dichromate is orange, but how much of every 100 g of it is actually potassium metal? Can you find out without a laboratory, just with a pencil?')}
${story('Think of a fruit basket that weighs 294 g: it holds 78 g of oranges, 104 g of apples and 112 g of grapes. The fraction of oranges is 78/294, i.e. 26.53 %. A molecule is the same kind of basket: the "fruits" are atoms, and their weights are atomic masses.')}
<p>★ <b>Percentage composition</b> is the percentage by weight of each element in the compound.</p>
<p style="text-align:center"><b>% of element = (wt. of the element in one molecule of the compound ÷ gram molecular weight of the compound) × 100</b></p>
<p>[% composition is also the % by mass of atoms of an element present in one mole of the compound.]</p>
${M3_PIEK}
${steps('Worked example: % of potassium in K₂Cr₂O₇ [K = 39, Cr = 52, O = 16]',[
 'Write the formula and count atoms: 2 K, 2 Cr, 7 O.',
 'Molar mass = 2 × 39 + 2 × 52 + 7 × 16 = 78 + 104 + 112 = 294 g.',
 'Mass of K in one mole = 2 × 39 = 78 g (remember the subscript 2!).',
 '% K = 78 ÷ 294 × 100 = <b>26.53 %</b>.'])}
${trap('Forgetting the subscript: K₂ means 2 × 39 = 78, not 39.','Forgetting brackets: in Ca₃(PO₄)₂ there are 2 P and 8 O atoms.','Leaving out the water of crystallisation from the molar mass of a hydrate (Na₂CO₃·10H₂O = 286, not 106).','Dividing by the wrong total: always divide by the molar mass of the WHOLE compound.')}
${cy(['% of C in CO₂? [C = 12, O = 16]','12 ÷ 44 × 100 = 27.27 %'],['% of N in NH₄NO₃? [N = 14, H = 1, O = 16]','28 ÷ 80 × 100 = 35 %'],['Which has more % nitrogen: urea CO(NH₂)₂ or NH₄NO₃?','Urea: 28/60 = 46.67 %; NH₄NO₃: 28/80 = 35 %. Urea is richer.'])}
${exam('Molecular mass of K₂Cr₂O₇ = 294. 294 g of K₂Cr₂O₇ contains 78 g of potassium; ∴ 100 g contains 78 × 100 ÷ 294 = 26.53 % potassium.')}`,

pa:`<h3>Using percentage composition</h3>
${hook('A farmer spreads 5 kg of urea on a field. How many grams of nitrogen actually reach the soil? And if iron ore is only 80 % pure, how much iron is really in it?')}
${story('Buying a 1 kg box of cereal that is only 80 % cereal (the rest is packaging) gives you 800 g to eat. In the same way, an ore that is 80 % pure Fe₂O₃ gives you only 80 % of the iron that pure Fe₂O₃ would.')}
<p>Once you know "molar mass contains so many grams of the element", use it as a <b>unitary-method ratio</b>:</p>
<ul><li><b>Mass of element in a given mass</b>: 60 g urea contains 28 g N ⇒ 5000 g urea contains 28 × 5000 ÷ 60 g N.</li>
<li><b>% water of crystallisation</b>: (mass of all the H₂O in one mole ÷ molar mass of the hydrate) × 100.</li>
<li><b>Impure sample</b>: % of element in the sample = % in pure compound × purity ÷ 100.</li></ul>
${M3_BAR}
${steps('Worked example: % of pure iron in 10 kg of Fe₂O₃ of 80 % purity [Fe = 56, O = 16]',[
 'Pure Fe₂O₃ in the sample = 80 % of 10 kg = 8 kg = 8000 g.',
 'Molar mass of Fe₂O₃ = 2 × 56 + 3 × 16 = 160 g, containing 112 g Fe.',
 'Fe in 8000 g = 112 × 8000 ÷ 160 = 5600 g = 5.6 kg.',
 '% Fe in the 10 kg sample = 5.6 ÷ 10 × 100 = <b>56 %</b>.'])}
${trap('For impure samples, multiply by the purity; do not divide.','Convert kg to g (or keep both in kg) before using the ratio.','In a hydrate, "10H₂O" means 10 × 18 = 180 g of water.','When asked for the mass of the element, the answer is in grams, not %.')}
${cy(['% water in CuSO₄·5H₂O? [Cu = 64, S = 32, O = 16, H = 1]','90 ÷ 250 × 100 = 36 %'],['% C in a 55 % pure sample of CaCO₃?','Pure CaCO₃ has 12 %; × 0.55 = 6.6 %'],['Mass of N in 120 g of urea?','28 × 120 ÷ 60 = 56 g'])}
${exam('Molecular weight of urea = 60. 60 g of urea contains 28 g of nitrogen; ∴ 5000 g of urea contains 28 × 5000 ÷ 60 = 2333.3 g of nitrogen.')}`,

ef:`<h3>Empirical formula</h3>
${hook('Glucose is C₆H₁₂O₆ and formaldehyde is CH₂O. Two completely different substances, yet a chemist analysing them finds exactly the same percentages of C, H and O. Why?')}
${story('A recipe for 6 cakes uses 6 eggs, 12 spoons of sugar and 6 cups of flour. The simplest recipe (for 1 cake) is 1 egg : 2 spoons : 1 cup. Analysis only tells you the recipe RATIO; the empirical formula is that simplest recipe.')}
<p>★ <b>Empirical formula</b> is the formula of a compound which shows the simplest whole number ratio between the atoms of the elements in the compound.</p>
<table class="cmp">${tr(['<b>Compound</b>','<b>Molecular formula</b>','<b>Whole numbers</b>','<b>Empirical formula</b>'],['Glucose','C₆H₁₂O₆','1 : 2 : 1','CH₂O'],['Benzene','C₆H₆','1 : 1','CH'])}</table>
<p><b>Method</b> (p.88):</p><ol><li>Write the % composition (or mass) and the atomic weight of each element.</li><li>Divide % by atomic weight → relative number of atoms.</li><li>Divide every ratio by the smallest one. If a ratio is not whole (e.g. 1.5), multiply all by the smallest suitable integer.</li><li>Write the empirical formula.</li></ol>
${M3_EF}
${steps('Worked example: Na = 29.11 %, S = 40.51 %, O = 30.38 % [Na = 23, S = 32, O = 16]',[
 'Relative atoms: Na 29.11 ÷ 23 = 1.266; S 40.51 ÷ 32 = 1.266; O 30.38 ÷ 16 = 1.898.',
 'Divide by the smallest (1.266): Na 1, S 1, O 1.5.',
 '1.5 is not whole → multiply all by 2: Na 2, S 2, O 3.',
 'Empirical formula = <b>Na₂S₂O₃</b>.'])}
${trap('Rounding 1.5 to 2 (or 1.33 to 1). Instead multiply by 2 (or 3). Only round values like 1.98 or 2.03.','Dividing by the LARGEST ratio instead of the smallest.','Forgetting the element given as "the rest": find it as 100 − (sum of the others).','Using the atomic number instead of the atomic mass.')}
${cy(['Empirical formula of C₆H₁₂O₆?','CH₂O'],['Ratio C : H = 1 : 2.5. What do you do?','Multiply both by 2 → C₂H₅'],['Masses (not %) are given, e.g. 0.60 g C and 0.10 g H. Can you still use the method?','Yes: divide each MASS by the atomic mass: 0.05 : 0.1 = 1 : 2 → CH₂'])}
${exam('Element | % | At. wt. | Relative no. of atoms | Simplest ratio. Na 29.11/23 = 1.266 → 1 × 2 = 2; S 40.51/32 = 1.266 → 1 × 2 = 2; O 30.38/16 = 1.898 → 1.5 × 2 = 3. Simplest ratio of whole numbers is 2 : 2 : 3. Hence empirical formula is Na₂S₂O₃.')}`,

mf:`<h3>Molecular formula</h3>
${hook('The empirical formula CH₂O fits formaldehyde, acetic acid AND glucose. What extra piece of information tells you which one you really have?')}
${story('If a box set of books is "1 red : 2 blue" and the whole set weighs 3 times a 1-red-2-blue bundle, then the set has 3 red and 6 blue books. The molecular mass tells you how many "bundles" (empirical units) are in one molecule.')}
<p>★ <b>Molecular formula</b> is the chemical formula which represents the actual number of atoms of each element present in a molecule of the compound.</p>
<table class="cmp">${tr(['<b>Compound</b>','<b>Molecular formula</b>','<b>Actual number of atoms</b>'],['Glucose','C₆H₁₂O₆','6 C, 12 H, 6 O'],['Sulphuric acid','H₂SO₄','2 H, 1 S, 4 O'])}</table>
<p><b>Method</b> (p.89): Step I: empirical formula weight. Step II: molecular weight (M = 2 × V.D.). Step III: <b>n = molecular weight ÷ empirical formula weight</b> (a whole number). Step IV: molecular formula = (empirical formula)ₙ.</p>
${M3_MF}
${steps('Worked example: C = 40 %, H = 6.7 %, O = 53.3 %, V.D. = 30 [C = 12, H = 1, O = 16]',[
 'C 40 ÷ 12 = 3.33; H 6.7 ÷ 1 = 6.70; O 53.3 ÷ 16 = 3.33 → ratio 1 : 2 : 1 → empirical formula CH₂O.',
 'Empirical formula weight = 12 + 2 + 16 = 30.',
 'Molecular weight = 2 × V.D. = 2 × 30 = 60.',
 'n = 60 ÷ 30 = 2 → molecular formula = (CH₂O)₂ = <b>C₂H₄O₂</b>.'])}
${trap('Using the V.D. itself as the molecular mass: M = 2 × V.D.','Multiplying only one element by n: (CH₂O)₂ is C₂H₄O₂, every subscript doubles.','If n comes out as 1, the molecular formula equals the empirical formula; that is allowed.','Going backwards (molecular → empirical), divide all subscripts by their HCF, e.g. C₈H₁₈ → C₄H₉.')}
${cy(['Empirical formula CH, V.D. 39. Molecular formula?','M = 78, EF mass 13, n = 6 → C₆H₆'],['Empirical formula of C₅H₁₀?','CH₂'],['If the empirical formula mass equals the vapour density, what is n?','n = 2 × V.D. ÷ EF mass = 2'])}
${exam('Empirical formula weight of CH₂O = 12 + 2 + 16 = 30. Molecular weight = 2 × V.D. = 60. n = 60/30 = 2. Molecular formula = (CH₂O)₂ = C₂H₄O₂.')}`,

hy:`<h3>Hydrated salts: water of crystallisation</h3>
${hook('Blue copper sulphate crystals turn white and lose weight when heated. From the weight lost, can you work out the "x" in CuSO₄·xH₂O?')}
${story('A wet sponge weighs more than a dry one; the difference is the water. Heating a crystal "wrings out" its water of crystallisation, and the mass lost tells you how many water molecules each formula unit held.')}
<p><b>Two kinds of problem</b>:</p>
<ol><li><b>Find x from masses</b>: mass of water = mass of hydrate − mass of anhydrous salt. Then (18x ÷ molar mass of anhydrous salt) = (mass of water ÷ mass of anhydrous salt). Or use the % water: 18x ÷ (molar mass of salt + 18x) = % water ÷ 100.</li>
<li><b>Formula from % composition</b>, "all the hydrogen is present as water of crystallisation": find the formula as usual, then take every 2 H with 1 O as one H₂O. Example: Na₂S₂H₁₀O₈ → 10 H + 5 O = 5H₂O, leaving Na₂S₂O₃ → <b>Na₂S₂O₃·5H₂O</b>.</li></ol>
${steps('Worked example: 10 g CuSO₄·xH₂O gives 6.4 g anhydrous CuSO₄ [Cu = 64, S = 32, O = 16, H = 1]',[
 'Mass of water = 10 − 6.4 = 3.6 g.',
 'Molar mass of CuSO₄ = 64 + 32 + 64 = 160; of H₂O = 18.',
 'Mass of water ÷ mass of anhydrous CuSO₄: 18x ÷ 160 = 3.6 ÷ 6.4.',
 'x = 3.6 × 160 ÷ (6.4 × 18) = <b>5</b> → CuSO₄·5H₂O.'])}
${trap('Comparing water with the HYDRATE in one place and with the anhydrous salt in the other: keep both sides the same.','When the % of water is given as "the remaining %", treat H₂O as one unit with molar mass 18.','Each H₂O uses 2 H and only 1 O: subtract those O atoms from the salt part.','x must be a whole number: 2.008 → 2.')}
${cy(['% water in CuSO₄·5H₂O (Cu = 64)?','90/250 × 100 = 36 %'],['A formula works out to ZnSH₁₄O₁₁ with all H as water. Write it properly.','14 H + 7 O = 7H₂O → ZnSO₄·7H₂O'],['Water ÷ 18 = 2.0 and CuSO₄ ratio = 0.4. Value of x?','2.0 ÷ 0.4 = 5'])}
${exam('Mass of water = 10 − 6.4 = 3.6 g. Mass of water / mass of anhydrous CuSO₄ = 18x/160 = 3.6/6.4 ∴ x = 3.6 × 160/(6.4 × 18) = 5. Formula: CuSO₄·5H₂O.')}`
};

const CHAPTER=[
 {id:'s-pc',title:'1. Percentage composition (term)',ref:'p.87',t:['pc'],html:CONCEPT.pc},
 {id:'s-pa',title:'E. Percentage composition: problems based on them',ref:'p.87',t:['pa'],html:`<p>The book solves five types of % composition problems on p.87: % of an element (K in K₂Cr₂O₇, P in Ca₃(PO₄)₂), mass of an element supplied by a given mass (N from 5 kg urea), % of water of crystallisation (washing soda), % of pure metal in an impure ore (Fe in 80 % pure Fe₂O₃), and x in a hydrate (CuSO₄·xH₂O). Try them in the Practice tab.</p>${CONCEPT.pa}`},
 {id:'s-ef',title:'2. Empirical formula: term & determination',ref:'p.88',t:['ef'],html:CONCEPT.ef},
 {id:'s-mf',title:'3. Molecular formula: term & determination; F. solved problems',ref:'p.89–91',t:['mf'],html:CONCEPT.mf+`<p><b>Other types solved on p.90–91</b>: masses instead of % (10.47 g compound with 6.21 g X → XY₄); "EF mass = V.D." (XY₂ → X₂Y₄, n = 2); molecular → empirical (C₅H₁₀ → CH₂; H₂CO₂ stays H₂CO₂); empirical from molecular formula and EF mass (C₈H₆O₄, EF mass 83 → n = 2 → C₄H₃O₂).</p>`},
 {id:'s-hy',title:'Hydrated salts (water of crystallisation)',ref:'p.87, 91',t:['hy'],html:CONCEPT.hy},
 {id:'s-sum',title:'Summary: laws & terms; solving types E & F',ref:'p.95, 98',t:['pc','ef','mf'],html:`<h3>Summary: laws & terms (p.95)</h3><ul>
 <li>★ <b>Percentage composition</b>: is the percentage by weight of each element present in the compound.</li>
 <li>★ <b>Empirical formula</b>: is the formula of a compound which shows the simplest whole number ratio between the atoms of the elements in the compound.</li>
 <li>★ <b>Molecular formula</b>: is the chemical formula which represents the actual number of atoms of each element present in a molecule of the compound.</li></ul>
 <h3>E. Percentage composition: how to solve (p.98)</h3>
 ${flow('Wt. of element in 1 molecule','÷ gram molecular wt. of compound','× 100')}
 <p>Example: % of boron in borax Na₂B₄O₇·10H₂O: wt. of B = 11 × 4 = 44; GMW = 23 × 2 + 11 × 4 + 16 × 7 + 10(2 + 16) = 382; % B = 44/382 × 100 = 11.5 %.</p>
 <h3>F. Empirical & molecular formula: how to solve (p.98)</h3>
 <table class="cmp">${tr(['<b>Element</b>','Write the names of the elements'],['<b>% Comp.</b>','Write their % composition as given'],['<b>At. wt.</b>','Write the atomic weights'],['<b>At. ratio</b>','% composition ÷ atomic weight (relative no. of atoms)'],['<b>Simplest ratio</b>','each atomic ratio ÷ smallest atomic ratio (whole numbers)'])}</table>
 <p>Then: molecular formula = empirical formula × n, where n = (molecular wt. or 2 × V.D.) ÷ empirical formula weight. Example: C 40 %, H 6.7 %, O 53.3 %, V.D. 30 → CH₂O, n = 60/30 = 2 → C₂H₄O₂.</p>`}
];
const TOPIC_SEC={pc:'s-pc',pa:'s-pa',ef:'s-ef',mf:'s-mf',hy:'s-hy'};

/* ---------- questions ---------- */
const HYD=f=>[f.replace('·','.'),f.replace('·',''),f.replace('·','*')];
const Q=[
/* ---- p.87 solved problems E ---- */
{id:'s87-1',t:'pc',src:'p.87 · Solved E 1',ref:'p.87',solved:true,type:'num',
 q:'Calculate the percentage by weight of the following: a] Potassium in potassium dichromate [K = 39, Cr = 52, O = 16] b] Phosphorus in calcium phosphate Ca₃(PO₄)₂ [Ca = 40, P = 31, O = 16]',
 hint:'Molar mass of the compound; mass of the element in one mole (count subscripts); divide and × 100.',
 parts:[{l:'a] % K',a:26.53,u:'%'},{l:'b] % P',a:20,u:'%'}],
 steps:['a] Molecular weight of K₂Cr₂O₇ = 78 + 104 + 112 = 294','294 g contains 2 × 39 = 78 g K → % K = 78 × 100 ÷ 294','b] Molecular weight of Ca₃(PO₄)₂ = 3 × 40 + 62 + 8 × 16 = 310','310 g contains 2 × 31 = 62 g P → % P = 62 × 100 ÷ 310']},
{id:'s87-2',t:'pa',src:'p.87 · Solved E 2',ref:'p.87',solved:true,type:'num',
 q:'Calculate the mass of nitrogen supplied to the soil by 5 kg of urea [CO(NH₂)₂]. [N = 14, C = 12, O = 16, H = 1]',
 hint:'Find grams of N in one mole of urea, then scale up to 5000 g.',
 parts:[{l:'Mass of nitrogen',a:2333.3,u:'g'}],
 steps:['Molecular weight of urea CO(NH₂)₂ = 12 + 16 + 28 + 4 = 60 g','60 g of urea contains 28 g of nitrogen','5 × 1000 g of urea contains 28 × 5000 ÷ 60 g of nitrogen']},
{id:'s87-3',t:'pa',src:'p.87 · Solved E 3',ref:'p.87',solved:true,type:'num',
 q:'Calculate the percentage of water of crystallisation in washing soda Na₂CO₃·10H₂O. [Na = 23, C = 12, O = 16, H = 1]',
 hint:'Molar mass of the WHOLE hydrate; mass of 10 H₂O; divide × 100.',
 parts:[{l:'% water of crystallisation',a:62.94,u:'%'}],
 steps:['Molecular weight of Na₂CO₃·10H₂O = 23 × 2 + 12 + 16 × 3 + 10(18) = 286','286 g contains 10 × 18 = 180 g of water of crystallisation','100 g contains 180 × 100 ÷ 286']},
{id:'s87-4',t:'pa',src:'p.87 · Solved E 4',ref:'p.87',solved:true,type:'num',
 q:'Calculate the percentage of pure iron in 10 kg of iron(III) oxide [Fe₂O₃] of 80 % purity. [Fe = 56, O = 16]',
 hint:'Mass of pure Fe₂O₃ = 80 % of 10 kg; then the Fe in it; then % of the 10 kg.',
 parts:[{l:'% pure iron',a:56,u:'%'}],
 steps:['Pure Fe₂O₃ = 80 % of 10 kg = 8000 g','Molecular weight of Fe₂O₃ = 56 × 2 + 16 × 3 = 160; 160 g contains 112 g Fe','8000 g of pure Fe₂O₃ contains 112 × 8000 ÷ 160 = 5600 g = 5.6 kg Fe','% of pure Fe in 10 kg = 5.6 ÷ 10 × 100']},
{id:'s87-5',t:'hy',src:'p.87 · Solved E 5',ref:'p.87',solved:true,type:'num',
 q:'Calculate the number of molecules of water of crystallisation in copper sulphate crystals, if 10 g of hydrous copper sulphate crystals gives 6.4 g of anhydrous CuSO₄ on heating. [Cu = 64, S = 32, O = 16]',
 hint:'Water lost = 10 − 6.4. Then 18x ÷ 160 = mass of water ÷ mass of anhydrous CuSO₄.',
 parts:[{l:'x (molecules of water)',a:5,u:''}],
 steps:['Mass of CuSO₄·xH₂O = 10 g; mass of anhydrous CuSO₄ = 6.4 g ∴ mass of xH₂O = 3.6 g','Mol. wt. of CuSO₄ = 64 + 32 + 16 × 4 = 160; mol. wt. of H₂O = 18','Mass of water ÷ mass of anhydrous CuSO₄: 18x ÷ 160 = 3.6 ÷ 6.4','x = 3.6 × 160 ÷ (6.4 × 18)']},
/* ---- p.88–89 theory examples ---- */
{id:'s88-ef',t:'ef',src:'p.88 · Solved example (empirical formula)',ref:'p.88',solved:true,type:'num',
 q:'Determine the empirical formula of a compound of sodium, sulphur and oxygen having the percentage composition Na = 29.11 %, S = 40.51 %, O = 30.38 %. [Na = 23, S = 32, O = 16]',
 hint:'% ÷ atomic weight → divide by the smallest → if you get 1.5, multiply all by 2.',
 parts:[{l:'Empirical formula',a:'Na₂S₂O₃'}],
 steps:['Relative no. of atoms: Na 29.11 ÷ 23 = 1.266; S 40.51 ÷ 32 = 1.266; O 30.38 ÷ 16 = 1.898','Divide by the smallest (1.266): Na 1, S 1, O 1.5','1.5 is not whole → multiply each by 2: Na 2, S 2, O 3','Simplest ratio of whole numbers is 2 : 2 : 3']},
{id:'s89-mf',t:'mf',src:'p.89 · Solved example (molecular formula)',ref:'p.89',solved:true,type:'num',
 q:'Determine the molecular formula of a compound having the percentage composition C = 26.59 %, H = 2.22 %, O = 71.19 %. Vapour density of the compound = 45. [C = 12, H = 1, O = 16] (Give the empirical formula too.)',
 hint:'Empirical formula first; then M = 2 × V.D. and n = M ÷ EF weight.',
 parts:[{l:'Empirical formula',a:'CHO₂'},{l:'Molecular formula',a:'C₂H₂O₄',alt:['H2C2O4','(COOH)2','(CHO2)2']}],
 steps:['C 26.59 ÷ 12 = 2.216; H 2.22 ÷ 1 = 2.22; O 71.19 ÷ 16 = 4.449 → ratio 1 : 1 : 2 → CHO₂','Empirical formula weight = 12 + 1 + 16 × 2 = 45','Molecular weight = 2 × V.D. = 2 × 45 = 90','n = 90 ÷ 45 = 2 → molecular formula = [CHO₂]₂']},
/* ---- p.90–91 solved problems F ---- */
{id:'s90-1',t:'mf',src:'p.90 · Solved F 1',ref:'p.89–90',solved:true,type:'num',
 q:'A compound of carbon, hydrogen and oxygen is found to contain 40 % of carbon, 6.7 % of hydrogen and 53.3 % of oxygen. Calculate its empirical formula. If its vapour density is 30, calculate the molecular formula. [C = 12, H = 1, O = 16]',
 hint:'% ÷ at. wt. → ÷ smallest → EF; n = 2 × V.D. ÷ EF weight.',
 parts:[{l:'Empirical formula',a:'CH₂O'},{l:'Molecular formula',a:'C₂H₄O₂',alt:['CH3COOH','(CH2O)2']}],
 steps:['C 40 ÷ 12 = 3.33; H 6.70 ÷ 1 = 6.70; O 53.3 ÷ 16 = 3.33','Divide by 3.33: C 1, H 2, O 1 → empirical formula CH₂O','Molecular weight = 2 × V.D. = 60; empirical formula weight = 12 + 2 + 16 = 30','n = 60 ÷ 30 = 2 → CH₂O × 2']},
{id:'s90-2',t:'ef',src:'p.90 · Solved F 2',ref:'p.88–90',solved:true,type:'num',
 q:'A chemical reaction showed that 10.47 g of the compound contained 6.21 g of metal ‘X’ and the rest of a non-metal ‘Y’. Calculate the empirical formula of the compound formed between ‘X’ and ‘Y’. [At. wt. of X = 207, Y = 35.5]',
 hint:'Mass of Y = 10.47 − 6.21. Convert both to % (or use the masses directly), ÷ at. wt., ÷ smallest.',
 parts:[{l:'Empirical formula',a:'XY₄'}],
 steps:['% X = 6.21 ÷ 10.47 × 100 = 59.31 %','Mass of Y = 10.47 − 6.21 = 4.26 g → % Y = 4.26 ÷ 10.47 × 100 = 40.69 %','Atomic ratio: X 59.31 ÷ 207 = 0.286; Y 40.69 ÷ 35.5 = 1.146','Simplest ratio: 0.286 ÷ 0.286 = 1; 1.146 ÷ 0.286 = 4']},
{id:'s91-3',t:'hy',src:'p.91 · Solved F 3',ref:'p.89–91',solved:true,type:'num',
 q:'A compound has the following percentage composition: Na = 18.60 %, S = 25.80 %, H = 4.03 % and O = 51.58 %. Calculate the molecular formula of the crystalline salt assuming that all the hydrogen in the compound is in combination with the oxygen as water of crystallisation. Molecular weight of the compound is 248. [Na = 23, S = 32, H = 1, O = 16]',
 hint:'Empirical formula → n = 248 ÷ EF weight → then group every 2 H with 1 O as H₂O.',
 parts:[{l:'Empirical formula',a:'NaSH₅O₄'},{l:'Molecular formula',a:'Na₂S₂O₃·5H₂O',alt:HYD('Na2S2O3·5H2O')}],
 steps:['Atomic ratio: Na 18.60 ÷ 23 = 0.80; S 25.80 ÷ 32 = 0.80; H 4.03 ÷ 1 = 4.03; O 51.58 ÷ 16 = 3.22','÷ 0.80 → Na 1, S 1, H 5, O 4 → empirical formula NaSH₅O₄','Empirical formula weight = 23 + 32 + 5 + 64 = 124; n = 248 ÷ 124 = 2 → Na₂S₂H₁₀O₈','10 atoms of H and 5 atoms of O = 5H₂O; 3 atoms of O remain with Na₂S₂']},
{id:'s91-4',t:'mf',src:'p.91 · Solved F 4',ref:'p.89–91',solved:true,type:'num',
 q:'Empirical formula of a compound is XY₂. If its empirical formula weight is equal to its vapour density, calculate the molecular formula of the compound.',
 hint:'n = molecular weight ÷ EF weight = 2 × V.D. ÷ EF weight. What happens if V.D. = EF weight?',
 parts:[{l:'Molecular formula',a:'X₂Y₄'}],
 steps:['Molecular formula = empirical formula × n','n = molecular weight ÷ EF weight = 2 × V.D. ÷ EF weight','But V.D. = EF weight (given) ∴ n = 2','Molecular formula = XY₂ × 2']},
{id:'s91-5',t:'ef',src:'p.91 · Solved F 5',ref:'p.88',solved:true,type:'num',
 q:'State the empirical formula of each compound whose molecular formula is: a] C₅H₁₀ b] H₂CO₂',
 hint:'Divide all subscripts by their highest common factor. If the HCF is 1, nothing changes.',
 parts:[{l:'a] Empirical formula of C₅H₁₀',a:'CH₂',alt:['H2C']},{l:'b] Empirical formula of H₂CO₂',a:'H₂CO₂',alt:['CH2O2','HCOOH']}],
 steps:['a] Ratio of C and H is 5 : 10 → simplest ratio 1 : 2','b] Ratio of H, C and O is 2 : 1 : 2: no common factor, already simplest']},
{id:'s91-6',t:'mf',src:'p.91 · Solved F 6',ref:'p.89–91',solved:true,type:'num',
 q:'Calculate the empirical formula of a compound whose molecular formula is C₈H₆O₄ and empirical formula weight is 83. [C = 12, H = 1, O = 16]',
 hint:'Molecular weight of C₈H₆O₄ ÷ 83 = n; divide every subscript by n.',
 parts:[{l:'Empirical formula',a:'C₄H₃O₂'}],
 steps:['Molecular weight of C₈H₆O₄ = 96 + 6 + 64 = 166','n = 166 ÷ 83 = 2','C₈H₆O₄ = empirical formula × 2 → divide every subscript by 2']},
/* ---- p.95 Additional problems Q.1 Percentage composition ---- */
{id:'a95-1-1',t:'pc',src:'p.95 · Q.1 (1)',ref:'p.87',type:'num',
 q:'Calculate the percentage by weight of: a] C in carbon dioxide, b] Na in sodium carbonate, c] Al in aluminium nitride. [C = 12, O = 16, H = 1, Na = 23, Al = 27, N = 14]',
 hint:'For each: (mass of the element in one mole ÷ molar mass) × 100. Formulae: CO₂, Na₂CO₃, AlN.',
 parts:[{l:'a] % C in CO₂',a:27.27,u:'%'},{l:'b] % Na in Na₂CO₃',a:43.40,u:'%'},{l:'c] % Al in AlN',a:65.85,u:'%'}],
 steps:['a] CO₂ = 12 + 32 = 44 → % C = 12 ÷ 44 × 100','b] Na₂CO₃ = 46 + 12 + 48 = 106 → % Na = 46 ÷ 106 × 100','c] AlN = 27 + 14 = 41 → % Al = 27 ÷ 41 × 100']},
{id:'a95-1-2',t:'pc',src:'p.95 · Q.1 (2)',ref:'p.87',type:'num',
 q:'Calculate the percentage of iron in K₃Fe(CN)₆. [K = 39, Fe = 56, C = 12, N = 14]',
 hint:'(CN)₆ means 6 C and 6 N. Molar mass, then 56 ÷ molar mass × 100.',
 parts:[{l:'% Fe',a:17.02,u:'%'}],
 steps:['Molar mass of K₃Fe(CN)₆ = 3 × 39 + 56 + 6 × 12 + 6 × 14','= 117 + 56 + 72 + 84 = 329','% Fe = 56 ÷ 329 × 100']},
{id:'a95-1-3',t:'pc',src:'p.95 · Q.1 (3)',ref:'p.87',type:'num',
 q:'Calculate which of the following, calcium nitrate or ammonium sulphate, has a higher % of nitrogen. [Ca = 40, O = 16, S = 32, N = 14, H = 1]',
 hint:'Find % N in Ca(NO₃)₂ and in (NH₄)₂SO₄ separately; both contain 2 N.',
 parts:[{l:'% N in Ca(NO₃)₂',a:17.07,u:'%'},{l:'% N in (NH₄)₂SO₄',a:21.21,u:'%'},{l:'Higher % N (formula)',a:'(NH₄)₂SO₄',alt:['ammonium sulphate','(NH4)2SO4','NH42SO4','ammonium sulfate']}],
 steps:['Ca(NO₃)₂ = 40 + 2 × 14 + 6 × 16 = 164 → % N = 28 ÷ 164 × 100','(NH₄)₂SO₄ = 2 × 18 + 32 + 64 = 132 → % N = 28 ÷ 132 × 100','Compare the two percentages']},
{id:'a95-1-4',t:'pa',src:'p.95 · Q.1 (4)',ref:'p.87',type:'num',
 q:'Calculate the percentage of pure aluminium in 10 kg of aluminium oxide [Al₂O₃] of 90 % purity. [Al = 27, O = 16]',
 hint:'Pure Al₂O₃ = 90 % of 10 kg; Al in it from 54/102; then % of 10 kg.',
 parts:[{l:'% pure Al',a:47.65,u:'%'}],
 steps:['Pure Al₂O₃ = 90 % of 10 kg = 9 kg','Al₂O₃ = 54 + 48 = 102; 102 kg contains 54 kg Al','9 kg contains 54 × 9 ÷ 102 = 4.765 kg Al','% Al in 10 kg = 4.765 ÷ 10 × 100'],
 exp:'Book prints 47.64 %; 47.65 % is the same answer (rounding).'},
{id:'a95-1-5',t:'pc',src:'p.95 · Q.1 (5)',ref:'p.87',type:'num',
 q:'State which of the following are better fertilizers: i] Potassium phosphate [K₃PO₄] or potassium nitrate [KNO₃] ii] Urea [NH₂CONH₂] or ammonium phosphate [(NH₄)₃PO₄]. [K = 39, P = 31, O = 16, N = 14, H = 1]',
 hint:'Compare % K for pair i] and % N for pair ii]. Higher % of the nutrient = better fertilizer.',
 parts:[{l:'i] % K in K₃PO₄',a:55.19,u:'%'},{l:'i] % K in KNO₃',a:38.61,u:'%'},{l:'i] better (formula)',a:'K₃PO₄',alt:['potassium phosphate']},
  {l:'ii] % N in urea',a:46.67,u:'%'},{l:'ii] % N in (NH₄)₃PO₄',a:28.19,u:'%'},{l:'ii] better',a:'urea',alt:['NH2CONH2','CO(NH2)2']}],
 steps:['K₃PO₄ = 117 + 31 + 64 = 212 → % K = 117 ÷ 212 × 100','KNO₃ = 39 + 14 + 48 = 101 → % K = 39 ÷ 101 × 100','Urea = 60 → % N = 28 ÷ 60 × 100','(NH₄)₃PO₄ = 3 × 18 + 31 + 64 = 149 → % N = 42 ÷ 149 × 100'],
 exp:'Book prints 55.18 % for K₃PO₄ (55.19 % on rounding).'},
{id:'a95-1-6',t:'pa',src:'p.95 · Q.1 (6)',ref:'p.87',type:'num',
 q:'Calculate the percentage of carbon in a 55 % pure sample of calcium carbonate. [Ca = 40, C = 12, O = 16]',
 hint:'% C in pure CaCO₃, then × 55/100.',
 parts:[{l:'% carbon',a:6.6,u:'%'}],
 steps:['CaCO₃ = 40 + 12 + 48 = 100 → pure CaCO₃ has 12 % C','Only 55 % of the sample is CaCO₃','% C = 12 × 55 ÷ 100']},
{id:'a95-1-7',t:'pa',src:'p.95 · Q.1 (7)',ref:'p.87',type:'num',
 q:'Calculate the percentage of water of crystallisation in hydrated copper sulphate [CuSO₄·5H₂O]. [Cu = 63.5, S = 32, O = 16, H = 1]',
 hint:'Molar mass of the hydrate (including 5H₂O), then 90 ÷ molar mass × 100.',
 parts:[{l:'% water',a:36.07,u:'%'}],
 steps:['CuSO₄·5H₂O = 63.5 + 32 + 64 + 5 × 18 = 249.5','Mass of water = 5 × 18 = 90 g','% water = 90 ÷ 249.5 × 100'],
 exp:'Book answer: 36 %.'},
{id:'a95-1-8',t:'hy',src:'p.95 · Q.1 (8)',ref:'p.87',type:'num',
 q:'Hydrated calcium sulphate [CaSO₄·xH₂O] contains 21 % of water of crystallisation. Calculate the number of molecules of water of crystallisation, i.e. ‘X’ in the hydrated compound. [Ca = 40, S = 32, O = 16, H = 1]',
 hint:'18x ÷ (136 + 18x) = 21 ÷ 100; solve for x.',
 parts:[{l:'x',a:2,u:''},{l:'Formula',a:'CaSO₄·2H₂O',alt:HYD('CaSO4·2H2O')}],
 steps:['CaSO₄ = 40 + 32 + 64 = 136; water = 18x','18x ÷ (136 + 18x) = 0.21','18x = 28.56 + 3.78x → 14.22x = 28.56','x = 2.008 ≈ 2']},
/* ---- p.95–96 Q.2 Empirical & molecular formula ---- */
{id:'a95-2-1',t:'mf',src:'p.95 · Q.2 (1)',ref:'p.88–90',type:'num',
 q:'A compound gave the following data: C = 57.82 %, O = 38.58 % and the rest hydrogen. Its vapour density is 83. Find its empirical and molecular formula. [C = 12, O = 16, H = 1]',
 hint:'H = 100 − (57.82 + 38.58). Ratios will give a 1.5 → multiply by 2. Then n = 2 × 83 ÷ EF weight.',
 parts:[{l:'Empirical formula',a:'C₄H₃O₂'},{l:'Molecular formula',a:'C₈H₆O₄'}],
 steps:['H = 100 − 96.40 = 3.60 %','C 57.82 ÷ 12 = 4.818; O 38.58 ÷ 16 = 2.411; H 3.60 ÷ 1 = 3.60','÷ 2.411 → C 2, O 1, H 1.5 → × 2 → C 4, H 3, O 2 → C₄H₃O₂','EF weight = 48 + 3 + 32 = 83; M = 2 × 83 = 166; n = 166 ÷ 83 = 2']},
{id:'a95-2-2',t:'ef',src:'p.95 · Q.2 (2)',ref:'p.88–90',type:'num',
 q:'Four g of a metallic chloride contains 1.89 g of the metal ‘X’. Calculate the empirical formula of the metallic chloride. [At. wt. of ‘X’ = 64, Cl = 35.5]',
 hint:'Mass of Cl = 4 − 1.89. Divide each mass by its atomic weight, then by the smaller.',
 parts:[{l:'Empirical formula',a:'XCl₂'}],
 steps:['Mass of Cl = 4 − 1.89 = 2.11 g','X: 1.89 ÷ 64 = 0.0295; Cl: 2.11 ÷ 35.5 = 0.0594','÷ 0.0295 → X 1, Cl 2.01 ≈ 2']},
{id:'a95-2-3',t:'mf',src:'p.95 · Q.2 (3)',ref:'p.89',type:'num',
 q:'Calculate the molecular formula of a compound whose empirical formula is CH₂O and vapour density is 30.',
 hint:'M = 2 × V.D.; n = M ÷ EF weight.',
 parts:[{l:'Molecular formula',a:'C₂H₄O₂',alt:['CH3COOH','(CH2O)2']}],
 steps:['EF weight of CH₂O = 12 + 2 + 16 = 30','Molecular weight = 2 × 30 = 60','n = 60 ÷ 30 = 2 → (CH₂O)₂']},
{id:'a95-2-4',t:'mf',src:'p.95 · Q.2 (4)',ref:'p.88–90',type:'num',
 q:'A compound has the following percentage composition: Al = 0.2675 g; P = 0.3505 g; O = 0.682 g. If the molecular weight of the compound is 122 and its original weight which on analysis gave the above results is 1.30 g, calculate the molecular formula of the compound. [Al = 27, P = 31, O = 16]',
 hint:'Divide each mass by its atomic weight, find the nearest simple ratio, then check against M = 122.',
 parts:[{l:'Molecular formula',a:'AlPO₄'}],
 steps:['Al 0.2675 ÷ 27 = 0.0099; P 0.3505 ÷ 31 = 0.0113; O 0.682 ÷ 16 = 0.0426','÷ 0.0099 → Al 1 : P 1.14 : O 4.3 ≈ 1 : 1 : 4 → empirical formula AlPO₄','EF weight = 27 + 31 + 64 = 122 = molecular weight → n = 1'],
 exp:'The printed data are slightly inconsistent (the ratio is 1 : 1.14 : 4.3, not exactly 1 : 1 : 4; pure AlPO₄ in 1.30 g would hold 0.288 g Al and 0.330 g P). The molecular weight 122 confirms AlPO₄, the book’s answer.'},
{id:'a95-2-5',t:'mf',src:'p.95 · Q.2 (5)',ref:'p.89',type:'num',
 q:'Two organic compounds ‘X’ and ‘Y’ containing carbon and hydrogen only have vapour densities 13 and 39 respectively. State the molecular formula of ‘X’ and ‘Y’. [C = 12, H = 1]',
 hint:'M = 2 × V.D. → 26 and 78. Which hydrocarbons have these masses? (Both have empirical formula CH = 13.)',
 parts:[{l:'X',a:'C₂H₂'},{l:'Y',a:'C₆H₆'}],
 steps:['M(X) = 2 × 13 = 26; M(Y) = 2 × 39 = 78','A CH unit weighs 13: X has n = 26 ÷ 13 = 2 → (CH)₂','Y: n = 78 ÷ 13 = 6 → (CH)₆']},
{id:'a95-2-6',t:'hy',src:'p.95 · Q.2 (6)',ref:'p.91',type:'num',
 q:'A compound has the following % composition: Zn = 22.65 %; S = 11.15 %; O = 61.32 % and H = 4.88 %. Its relative molecular mass is 287 g. Calculate its molecular formula assuming that all the hydrogen in the compound is present in combination with oxygen as water of crystallisation. [Zn = 65, S = 32, O = 16, H = 1]',
 hint:'Empirical formula → check mass vs 287 → group 2 H + 1 O as H₂O.',
 parts:[{l:'Molecular formula',a:'ZnSO₄·7H₂O',alt:HYD('ZnSO4·7H2O')}],
 steps:['Zn 22.65 ÷ 65 = 0.348; S 11.15 ÷ 32 = 0.348; O 61.32 ÷ 16 = 3.83; H 4.88 ÷ 1 = 4.88','÷ 0.348 → Zn 1, S 1, O 11, H 14 → ZnSH₁₄O₁₁','EF weight = 65 + 32 + 14 + 176 = 287 = molecular mass → n = 1','14 H + 7 O = 7H₂O; 4 O remain with Zn and S']},
{id:'a96-2-7',t:'mf',src:'p.96 · Q.2 (7)',ref:'p.89',type:'num',
 q:'A hydrocarbon contains 82.8 % of carbon. Find its molecular formula if its vapour density is 29. [H = 1, C = 12]',
 hint:'H = 100 − 82.8. Ratio gives 2.5 → × 2. Then n from M = 58.',
 parts:[{l:'Molecular formula',a:'C₄H₁₀'}],
 steps:['H = 17.2 %','C 82.8 ÷ 12 = 6.9; H 17.2 ÷ 1 = 17.2 → 1 : 2.49 → × 2 → C₂H₅','EF weight = 24 + 5 = 29; M = 2 × 29 = 58','n = 58 ÷ 29 = 2 → (C₂H₅)₂']},
{id:'a96-2-8',t:'mf',src:'p.96 · Q.2 (8)',ref:'p.88–89',type:'num',
 q:'An organic compound on analysis gave H = 6.48 % and O = 51.42 %. Determine its empirical formula if the compound contains 12 atoms of carbon. [C = 12, H = 1, O = 16]',
 hint:'C = 100 − (6.48 + 51.42). Find the ratio C : H : O, then scale it so that C = 12.',
 parts:[{l:'Formula with 12 C',a:'C₁₂H₂₂O₁₁'}],
 steps:['C = 100 − 57.90 = 42.10 %','C 42.10 ÷ 12 = 3.508; H 6.48 ÷ 1 = 6.48; O 51.42 ÷ 16 = 3.214','÷ 3.214 → C 1.09 : H 2.02 : O 1','Scale to 12 C (× 12 ÷ 1.09 = × 10.99): H 22.2 ≈ 22, O 11'],
 exp:'Book prints C₁₂H₂₄O₁₂, but that does not fit the data (C₁₂H₂₄O₁₂ would have 40 % C, 6.7 % H, 53.3 % O). The given % fit C₁₂H₂₂O₁₁ (sucrose: C 42.1 %, H 6.43 %, O 51.46 %).'},
{id:'a96-2-9',t:'hy',src:'p.96 · Q.2 (9)',ref:'p.91',type:'num',
 q:'A hydrated salt contains Cu = 25.50 %, S = 12.90 %, O = 25.60 % and the remaining % is water of crystallization. Calculate the empirical formula of the salt. [Cu = 64, S = 32, O = 16, H = 1]',
 hint:'Water % = 100 − rest; treat H₂O as one unit of mass 18.',
 parts:[{l:'Empirical formula',a:'CuSO₄·5H₂O',alt:HYD('CuSO4·5H2O')}],
 steps:['Water = 100 − (25.50 + 12.90 + 25.60) = 36.0 %','Cu 25.50 ÷ 64 = 0.398; S 12.90 ÷ 32 = 0.403; O 25.60 ÷ 16 = 1.60; H₂O 36.0 ÷ 18 = 2.0','÷ 0.398 → Cu 1, S 1, O 4, H₂O 5']},
{id:'a96-2-10',t:'mf',src:'p.96 · Q.2 (10)',ref:'p.88–89',type:'num',
 q:'A gaseous hydrocarbon weighs 0.70 g and contains 0.60 g of carbon. Find the molecular formula of the compound if its molecular weight is 70. [C = 12, H = 1]',
 hint:'Mass of H = 0.70 − 0.60. Masses ÷ atomic masses → EF; then n = 70 ÷ EF weight.',
 parts:[{l:'Molecular formula',a:'C₅H₁₀'}],
 steps:['Mass of H = 0.70 − 0.60 = 0.10 g','C 0.60 ÷ 12 = 0.05; H 0.10 ÷ 1 = 0.10 → 1 : 2 → CH₂','EF weight = 14; n = 70 ÷ 14 = 5 → (CH₂)₅']},
{id:'a96-2-11',t:'ef',src:'p.96 · Q.2 (11)',ref:'p.88',type:'num',
 q:'A salt has the following % composition: Al = 10.50 %, K = 15.1 %, S = 24.8 % and the remaining oxygen. Calculate the empirical formula of the salt. [Al = 27, K = 39, S = 32, O = 16]',
 hint:'O = 100 − rest. ÷ at. wt. → ÷ smallest. Write S and O together as sulphate.',
 parts:[{l:'Empirical formula',a:'AlK(SO₄)₂',alt:['KAl(SO4)2','AlKS2O8','KAlS2O8']}],
 steps:['O = 100 − (10.50 + 15.1 + 24.8) = 49.6 %','Al 10.50 ÷ 27 = 0.389; K 15.1 ÷ 39 = 0.387; S 24.8 ÷ 32 = 0.775; O 49.6 ÷ 16 = 3.10','÷ 0.387 → Al 1, K 1, S 2, O 8 → AlKS₂O₈ = AlK(SO₄)₂']},
/* ---- p.98 summary problems ---- */
{id:'m98-E',t:'pc',src:'p.98 · Summary E (problem)',ref:'p.87, 98',solved:true,type:'num',
 q:'Calculate the percentage of boron [B] in borax Na₂B₄O₇·10H₂O. [H = 1, B = 11, O = 16, Na = 23]',
 hint:'Include the 10 H₂O in the gram molecular weight.',
 parts:[{l:'% boron',a:11.52,u:'%'}],
 steps:['Weight of boron in the molecule = 11 × 4 = 44','Gram mol. wt. of borax = 23 × 2 + 11 × 4 + 16 × 7 + 10(2 + 16) = 382','% B = 44 ÷ 382 × 100'],
 exp:'Book: 11.5 %.'},
{id:'m98-F',t:'mf',src:'p.98 · Summary F (problem)',ref:'p.89–90, 98',solved:true,type:'num',
 q:'A compound has the following % composition: C = 40 %, H = 6.7 %, O = 53.3 %; the vapour density of the compound is 30. Calculate its molecular formula. [C = 12, H = 1, O = 16]',
 hint:'Element | % | at. wt. | at. ratio | simplest ratio → EF; n = 2 × V.D. ÷ EF weight.',
 parts:[{l:'Molecular formula',a:'C₂H₄O₂',alt:['CH3COOH','(CH2O)2']}],
 steps:['At. ratio: C 40 ÷ 12 = 3.33; H 6.7 ÷ 1 = 6.70; O 53.3 ÷ 16 = 3.33','Simplest ratio 1 : 2 : 1 → empirical formula CH₂O','n = 2 × V.D. ÷ EF weight = 2 × 30 ÷ (12 + 2 + 16) = 60 ÷ 30 = 2']},
/* ---- p.100 past ICSE: E. Percentage composition ---- */
{id:'y100-1999',t:'pa',src:'p.100 · 1999 Q1',ref:'p.87',type:'num',
 q:'If a crop of wheat removes 20 kg of nitrogen per hectare of soil, what mass in kg of the fertilizer calcium nitrate would be required to replace the nitrogen in a 10 hectare field? [N = 14; O = 16; Ca = 40]',
 hint:'Total N = 20 × 10 kg. Ca(NO₃)₂: 164 kg contains 28 kg N → scale.',
 parts:[{l:'Mass of Ca(NO₃)₂',a:1171.4,u:'kg'}],
 steps:['Nitrogen needed = 20 × 10 = 200 kg','Ca(NO₃)₂ = 40 + 28 + 96 = 164; 164 kg contains 28 kg N','Mass of Ca(NO₃)₂ = 164 × 200 ÷ 28'],
 exp:'Book: 1171 kg.'},
{id:'y100-2001',t:'pc',src:'p.100 · 2001 Q1',ref:'p.87',type:'num',
 q:'Calculate the percentage of phosphorus in the fertilizer superphosphate Ca(H₂PO₄)₂ [correct to 1 dp]. [H = 1; O = 16; P = 31; Ca = 40]',
 hint:'Molar mass of Ca(H₂PO₄)₂ (2 P atoms); 62 ÷ molar mass × 100.',
 parts:[{l:'% P',a:26.5,u:'%'}],
 steps:['Ca(H₂PO₄)₂ = 40 + 2(2 + 31 + 64) = 40 + 194 = 234','Mass of P = 2 × 31 = 62','% P = 62 ÷ 234 × 100 = 26.50']},
{id:'y100-2002',t:'pc',src:'p.100 · 2002 Q1',ref:'p.87',type:'num',
 q:'Calculate the percentage of platinum in ammonium chloroplatinate (NH₄)₂PtCl₆ [correct to the nearest whole number]. [N = 14, H = 1, Cl = 35.5, Pt = 195]',
 hint:'Molar mass = 2 × 18 + 195 + 6 × 35.5.',
 parts:[{l:'% Pt',a:44,u:'%'}],
 steps:['(NH₄)₂PtCl₆ = 36 + 195 + 213 = 444','% Pt = 195 ÷ 444 × 100 = 43.92','Nearest whole number']},
{id:'y100-2005',t:'pc',src:'p.100 · 2005 Q1',ref:'p.87',type:'num',
 q:'Calculate the percentage of nitrogen in aluminium nitride. [Al = 27, N = 14]',
 hint:'Formula AlN, molar mass 41.',
 parts:[{l:'% N',a:34.15,u:'%'}],
 steps:['AlN = 27 + 14 = 41','% N = 14 ÷ 41 × 100']},
{id:'y100-2006',t:'pc',src:'p.100 · 2006 Q1',ref:'p.87',type:'num',
 q:'Calculate the percentage of sodium in sodium aluminium fluoride [Na₃AlF₆] [correct to the nearest whole number]. [F = 19; Na = 23; Al = 27]',
 hint:'Molar mass = 3 × 23 + 27 + 6 × 19.',
 parts:[{l:'% Na',a:33,u:'%'}],
 steps:['Na₃AlF₆ = 69 + 27 + 114 = 210','% Na = 69 ÷ 210 × 100 = 32.86','Nearest whole number']},
{id:'y100-2007',t:'pc',src:'p.100 · 2007 Q1',ref:'p.87',type:'num',
 q:'Determine the percentage of oxygen in ammonium nitrate. [O = 16] (N = 14, H = 1)',
 hint:'NH₄NO₃ has 3 O atoms; molar mass 80.',
 parts:[{l:'% O',a:60,u:'%'}],
 steps:['NH₄NO₃ = 14 + 4 + 14 + 48 = 80','Mass of O = 3 × 16 = 48','% O = 48 ÷ 80 × 100']},
{id:'y100-2010',t:'pc',src:'p.100 · 2010 Q1',ref:'p.87',type:'num',
 q:'If the relative molecular mass of ammonium nitrate is 80, calculate the percentage of nitrogen and oxygen in ammonium nitrate. [N = 14, H = 1, O = 16]',
 hint:'NH₄NO₃ contains 2 N and 3 O.',
 parts:[{l:'% N',a:35,u:'%'},{l:'% O',a:60,u:'%'}],
 steps:['Mass of N = 2 × 14 = 28 → % N = 28 ÷ 80 × 100','Mass of O = 3 × 16 = 48 → % O = 48 ÷ 80 × 100']},
{id:'y100-2012',t:'pc',src:'p.100 · 2012 Q1',ref:'p.87',type:'num',
 q:'Find the total percentage of magnesium in magnesium nitrate crystals, Mg(NO₃)₂·6H₂O. [Mg = 24; N = 14; O = 16 and H = 1]',
 hint:'Include 6H₂O in the molar mass.',
 parts:[{l:'% Mg',a:9.375,show:'9.38',u:'%'}],
 steps:['Mg(NO₃)₂ = 24 + 28 + 96 = 148; 6H₂O = 108','Mg(NO₃)₂·6H₂O = 148 + 108 = 256','% Mg = 24 ÷ 256 × 100']},
{id:'y100-2017',t:'pa',src:'p.100 · 2017 Q1',ref:'p.87',type:'num',
 q:'Calculate the percentage of water of crystallization in CuSO₄·5H₂O. [H = 1, O = 16, S = 32, Cu = 64]',
 hint:'5 × 18 ÷ molar mass of the hydrate × 100.',
 parts:[{l:'% water',a:36,u:'%'}],
 steps:['CuSO₄·5H₂O = 64 + 32 + 64 + 90 = 250','Water = 5 × 18 = 90','% water = 90 ÷ 250 × 100']},
{id:'y100-2020',t:'pc',src:'p.100 · 2020 Q1',ref:'p.87',type:'num',
 q:'Calculate the percentage of: i] Fluorine ii] Sodium iii] Aluminium in sodium aluminium fluoride [Na₃AlF₆] [to the nearest whole no.]. [Na = 23, Al = 27, F = 19]',
 hint:'Molar mass 210; masses: F 114, Na 69, Al 27.',
 parts:[{l:'i] % F',a:54,u:'%'},{l:'ii] % Na',a:33,u:'%'},{l:'iii] % Al',a:13,u:'%'}],
 steps:['Na₃AlF₆ = 69 + 27 + 114 = 210','% F = 114 ÷ 210 × 100 = 54.29','% Na = 69 ÷ 210 × 100 = 32.86','% Al = 27 ÷ 210 × 100 = 12.86 (round each to a whole number)']},
{id:'y100-2122E',t:'pc',src:'p.100 · 2021-22 (E) Q1',ref:'p.87',type:'mcq',
 q:'The percentage of hydrogen present in NaOH is: [relative molecular mass of NaOH = 40; H = 1]',
 hint:'1 ÷ 40 × 100.',opts:['2.5','25','0.25','0.025'],ans:0,exp:'% H = 1 ÷ 40 × 100 = 2.5 %.'},
{id:'y100-2023',t:'pc',src:'p.100 · 2023 Q1',ref:'p.87',type:'num',
 q:'Calculate the percentage of phosphorus in the fertilizer super phosphate Ca(H₂PO₄)₂ [correct to 1 decimal point]. [H = 1, P = 31, O = 16, Ca = 40]',
 hint:'Same method as 2001: 2 P in 234.',
 parts:[{l:'% P',a:26.5,u:'%'}],
 steps:['Ca(H₂PO₄)₂ = 40 + 2 × (2 + 31 + 64) = 234','Mass of P = 62','% P = 62 ÷ 234 × 100 = 26.50']},
/* ---- p.100–101 past ICSE: F. Empirical & molecular formula ---- */
{id:'y100-2018',t:'ef',src:'p.100 · 2018 Q1',ref:'p.88',type:'num',
 q:'The percentage composition of a gas is: Nitrogen 82.35 %, Hydrogen 17.64 %. Find the empirical formula of the gas. [N = 14, H = 1]',
 hint:'% ÷ at. wt., then ÷ the smaller.',
 parts:[{l:'Empirical formula',a:'NH₃',alt:['H3N']}],
 steps:['N 82.35 ÷ 14 = 5.88; H 17.64 ÷ 1 = 17.64','÷ 5.88 → N 1, H 3']},
{id:'y100-2019-1',t:'ef',src:'p.100 · 2019 Q1',ref:'p.88',type:'num',
 q:'Molecular formula of a compound is C₆H₁₈O₃. Find its empirical formula.',
 hint:'Divide all subscripts by their HCF.',
 parts:[{l:'Empirical formula',a:'C₂H₆O',alt:['C2H5OH']}],
 steps:['Ratio C : H : O = 6 : 18 : 3','HCF = 3 → divide each by 3 → 2 : 6 : 1']},
{id:'y100-2019-2',t:'mf',src:'p.100 · 2019 Q2',ref:'p.88–89',type:'num',
 q:'Find the empirical and molecular formula of an organic compound from the data given: C = 75.92 %, H = 6.32 % and N = 17.76 %. The vapour density of the compound is 39.5. [C = 12, H = 1, N = 14]',
 hint:'EF from the %; M = 2 × 39.5; n = M ÷ EF weight.',
 parts:[{l:'Empirical formula',a:'C₅H₅N'},{l:'Molecular formula',a:'C₅H₅N'}],
 steps:['C 75.92 ÷ 12 = 6.33; H 6.32 ÷ 1 = 6.32; N 17.76 ÷ 14 = 1.27','÷ 1.27 → C 5, H 5, N 1 → C₅H₅N','EF weight = 60 + 5 + 14 = 79; M = 2 × 39.5 = 79','n = 79 ÷ 79 = 1 → molecular formula = empirical formula']},
{id:'y100-2122-1',t:'mf',src:'p.100 · 2021-22 (F) Q1',ref:'p.89',type:'mcq',
 q:'If relative molecular mass of butane [C₄H₁₀] is 58, its vapour density will be:',
 hint:'V.D. = M ÷ 2.',opts:['58','29','32','16'],ans:1,exp:'V.D. = 58 ÷ 2 = 29.'},
{id:'y101-2122-2',t:'mf',src:'p.101 · 2021-22 (F) Q2',ref:'p.89',type:'mcq',
 q:'If the empirical mass of the formula PQ₂ is 10 and the relative molecular mass is 30, then the molecular formula will be:',
 hint:'n = 30 ÷ 10; multiply every subscript by n.',opts:['PQ₂','P₃Q₂','P₆Q₃','P₃Q₆'],ans:3,exp:'n = 30 ÷ 10 = 3 → (PQ₂)₃ = P₃Q₆.'},
{id:'y101-2122-3',t:'mf',src:'p.101 · 2021-22 (F) Q3',ref:'p.89',type:'mcq',
 q:'If the empirical formula of a compound is CH and its vapour density is 13, then its molecular formula will be: [C = 12, H = 1]',
 hint:'M = 2 × V.D.; EF weight of CH = 13.',opts:['CH','C₂H₂','C₄H₄','C₃H₃'],ans:1,exp:'M = 26; n = 26 ÷ 13 = 2 → C₂H₂.'},
{id:'y101-2023',t:'mf',src:'p.101 · 2023 Q1',ref:'p.88–89',type:'num',
 q:'The empirical formula of a compound is CHCl₂. If its relative molecular mass is 168, what is its molecular formula? [C = 12, H = 1, Cl = 35.5]. Write the empirical formula of C₈H₁₈.',
 hint:'n = 168 ÷ EF weight of CHCl₂. For C₈H₁₈ divide by the HCF.',
 parts:[{l:'Molecular formula',a:'C₂H₂Cl₄'},{l:'Empirical formula of C₈H₁₈',a:'C₄H₉'}],
 steps:['EF weight of CHCl₂ = 12 + 1 + 71 = 84','n = 168 ÷ 84 = 2 → (CHCl₂)₂','C₈H₁₈: HCF of 8 and 18 is 2 → divide by 2']},
{id:'y101-2024',t:'ef',src:'p.101 · 2024 Q1',ref:'p.88',type:'word',
 q:'State the term: the formula that represents the simplest ratio between the atoms of elements in a compound.',
 hint:'It is the "simplest" formula.',accept:['empirical formula','empirical','empirical formulae','the empirical formula'],ansText:'Empirical formula'},
{id:'y101-2025-1',t:'mf',src:'p.101 · 2025 Q1',ref:'p.89',type:'mcq',
 q:'An organic compound has a vapour density of 22. The molecular formula of the organic compound is: [Atomic weight: C = 12, H = 1]',
 hint:'M = 2 × 22. Which formula has this mass?',opts:['CH₄','C₂H₄','C₂H₆','C₃H₈'],ans:3,exp:'M = 44; C₃H₈ = 36 + 8 = 44.'},
{id:'y101-2025-2',t:'mf',src:'p.101 · 2025 Q2',ref:'p.88–89',type:'num',
 q:'An organic compound ‘X’ contains carbon, oxygen & hydrogen only. The percentage of carbon & hydrogen are 47.4 % & 10.5 % respectively. The relative molecular mass of ‘X’ is 76. Find the empirical formula and the molecular formula of ‘X’. [Atomic weight: C = 12, O = 16, H = 1]',
 hint:'O = 100 − (47.4 + 10.5). Ratio gives 1.5 → × 2. Then n = 76 ÷ EF weight.',
 parts:[{l:'Empirical formula',a:'C₃H₈O₂'},{l:'Molecular formula',a:'C₃H₈O₂'}],
 steps:['O = 100 − 57.9 = 42.1 %','C 47.4 ÷ 12 = 3.95; H 10.5 ÷ 1 = 10.5; O 42.1 ÷ 16 = 2.63','÷ 2.63 → C 1.5, H 4, O 1 → × 2 → C 3, H 8, O 2 → C₃H₈O₂','EF weight = 36 + 8 + 32 = 76 → n = 76 ÷ 76 = 1']}
];
