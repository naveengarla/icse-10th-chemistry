/* Mole Concept 2: Avogadro's law, RAM/RMM, mole & Avogadro's number, applications (atomicity, VD), molar volume.
   Textbook (Dalal) 4.A printed p.74–86 + previous questions 4.B p.99–100 (sections B, C, D). */

/* ---------- Diagrams ---------- */
const DIA_AVLAW=svg(620,190,
 ['H₂','O₂','CO₂'].map((g,i)=>{const x=110+i*200;return `<circle cx="${x}" cy="85" r="62" fill="#e0f2fe" stroke="#0284c7"/>`+
  [[-28,-22],[18,-30],[-8,8],[28,12],[-30,30],[10,40]].map(([dx,dy])=>`<circle cx="${x+dx}" cy="${85+dy}" r="7" fill="${['#93c5fd','#fca5a5','#86efac'][i]}" stroke="#334155"/>`).join('')+
  T(x,10,'1 L of '+g,'frm')+T(x,165,'n molecules','lab')}).join('')+
 T(310,182,'Same T and P → equal volumes hold the SAME number of molecules (here 6 each)','lab'));

const DIA_NH3=svg(620,150,
 BOX(70,55,90,44,'N₂')+T(140,55,'+')+BOX(215,55,110,44,'H₂ H₂ H₂')+ARR(280,55,330,55)+BOX(420,55,130,44,'NH₃ NH₃')+
 T(70,105,'1 vol','lab')+T(215,105,'3 vols','lab')+T(420,105,'2 vols','lab')+
 T(70,125,'1 molecule','lab')+T(215,125,'3 molecules','lab')+T(420,125,'2 molecules','lab')+
 T(560,105,'experiment','lab')+T(560,125,'Avogadro','lab'));

const DIA_DOZEN=svg(640,250,
 T(160,18,'A DOZEN','frm')+T(480,18,'A MOLE','frm')+
 BOX(160,65,250,44,'1 dozen = 12 items','#fef3c7')+BOX(480,65,270,44,'1 mole = 6.023 × 10²³ particles','#fde68a')+
 BOX(160,135,250,44,'1 dozen eggs ≈ 600 g','#ecfdf5')+BOX(480,135,270,44,'1 mole C atoms = 12 g','#ecfdf5')+
 BOX(160,200,250,44,'1 dozen melons ≈ 12 kg','#ecfdf5')+BOX(480,200,270,44,'1 mole Mg atoms = 24 g','#ecfdf5')+
 T(320,240,'Same COUNT, different MASS: the mass of one mole = gram atomic / gram molecular mass','lab'));

const DIA_VD=svg(640,410,
 BOX(320,30,520,44,'VD = mass of V litres of gas ÷ mass of V litres of H₂')+ARR(320,52,320,82)+T(470,67,'Avogadro’s law (same no. of molecules)','lab')+
 BOX(320,105,520,44,'VD = mass of 1 molecule of gas ÷ mass of 1 molecule of H₂')+ARR(320,127,320,157)+T(450,142,'H₂ is diatomic','lab')+
 BOX(320,180,520,44,'VD = mass of 1 molecule of gas ÷ mass of 2 atoms of H')+ARR(320,202,320,232)+T(440,217,'multiply both sides by 2','lab')+
 BOX(320,255,520,44,'2 × VD = mass of 1 molecule ÷ mass of 1 atom of H')+ARR(320,277,320,307)+T(450,292,'this ratio is the molecular weight','lab')+
 BOX(320,330,360,48,'Molecular weight = 2 × VD','#fde68a')+
 T(320,385,'Used as M = 2 × VD  or  VD = M ÷ 2','lab'));

const DIA_MOLVOL=svg(620,150,
 [['O₂','32 g'],['N₂','28 g'],['CO₂','44 g']].map(([g,m],i)=>{const x=110+i*200;return `<rect x="${x-70}" y="20" width="140" height="80" rx="8" fill="#ecfeff" stroke="#0891b2"/>`+
  T(x,45,'1 mole '+g,'frm')+T(x,70,m,'op')+T(x,118,'22.4 L at s.t.p.','lab')+T(x,136,'6.023 × 10²³ molecules','lab')}).join(''));

const DIA_NO=svg(640,170,
 BOX(70,40,90,40,'N₂')+T(130,40,'+')+BOX(190,40,90,40,'O₂')+ARR(245,40,300,40)+BOX(380,40,130,40,'NO  NO')+
 T(70,80,'1 vol','lab')+T(190,80,'1 vol','lab')+T(380,80,'2 vols','lab')+T(550,80,'Gay-Lussac','lab')+
 T(70,100,'1 molecule','lab')+T(190,100,'1 molecule','lab')+T(380,100,'2 molecules','lab')+T(550,100,'Avogadro','lab')+
 T(70,120,'½ molecule','lab')+T(190,120,'½ molecule','lab')+T(380,120,'1 molecule','lab')+
 T(70,140,'= 1 atom','lab')+T(190,140,'= 1 atom','lab')+T(380,140,'1 NO','lab')+
 T(320,162,'½ molecule of N₂ = 1 atom → 1 molecule of N₂ = 2 atoms → DIATOMIC','lab'));

/* ---------- PAGE ---------- */
const PAGE={key:'mole-2-v1',lab:'mole-lab.html',title:'Mole Concept 2 · Mole, Avogadro’s number & vapour density',
 pages:{
  97:'Summary C worked problem (Avogadro’s law, X molecules)',
  80:'Solved problems B 1–4 (moles, mass from volume, volume from molecules, molecules in NaCl)',
  81:'Solved problems B 5–9 (atomicity, gram molecular weight, gas equation, gram atoms, gram molecules)',
  82:'Solved problems B 10–12 (SO₂ at room temp., H₂SO₄, gases A, B, C)',
  83:'Solved problems B 13, C 14–15 (Avogadro’s law), D 16 (vapour density)',
  84:'Solved problems D 17–19 (vapour density & molecular weight)',
  86:'Additional problems Q.2 (1–25) mole concept & Q.3 (1–6) vapour density',
  99:'Previous ICSE questions B: mole concept & Avogadro’s number',
  100:'Previous ICSE questions C: Avogadro’s law, D: vapour density & molecular weight'},
 formulas:`<h3>📐 Formula sheet: mole, Avogadro’s number, VD</h3>${MOLEMAP}
 <table class="cmp"><tr><th>To find</th><th>Formula</th></tr>${tr(
  ['Moles from mass','n = mass (g) ÷ gram molecular (or atomic) mass'],
  ['Moles from particles','n = number of particles ÷ 6.023 × 10²³'],
  ['Moles of gas at s.t.p.','n = volume (L) ÷ 22.4 &nbsp;(or cm³ ÷ 22400)'],
  ['Gram atoms','= mass in g ÷ relative atomic mass'],
  ['Gram molecules','= mass in g ÷ relative molecular mass'],
  ['Mass of one atom / molecule','= gram atomic (molecular) mass ÷ 6.023 × 10²³'],
  ['Atoms in a sample','= moles of molecules × atomicity × 6.023 × 10²³'],
  ['Molecular weight from volume','M = mass of 22.4 L of gas at s.t.p.'],
  ['Vapour density','VD = mass of a volume of gas ÷ mass of same volume of H₂'],
  ['VD ↔ molecular weight','M = 2 × VD &nbsp;·&nbsp; VD = M ÷ 2'],
  ['VD from mass of 1 L','VD = mass of 1 L of gas ÷ 0.09 g (1 L H₂ at s.t.p.)'],
  ['Atomicity','= molecular weight ÷ atomic weight'],
  ['Non-s.t.p. volume','P₁V₁/T₁ = P₂V₂/T₂ (s.t.p.: 760 mm Hg, 273 K)'],
  ['Avogadro’s law','same T &amp; P: equal volumes ↔ equal numbers of molecules'])}</table>`};

/* ---------- TOPICS ---------- */
const TOPICS=[
 {id:'av',name:'1. Avogadro’s law (volumes ↔ molecules)',ref:'p.74, 78'},
 {id:'ram',name:'2. RAM, RMM, gram atom & gram molecule',ref:'p.75, 79'},
 {id:'mole',name:'3. Mole & Avogadro’s number',ref:'p.76, 79'},
 {id:'vd',name:'4. Atomicity, vapour density & molecular weight',ref:'p.77–78'},
 {id:'molvol',name:'5. Molar volume (22.4 L) & gas calculations',ref:'p.79'}];

/* ---------- CONCEPT lessons ---------- */
const CONCEPT={
av:`<h3>Avogadro’s law</h3>
${hook('A 1-litre balloon of hydrogen and a 1-litre balloon of carbon dioxide sit side by side in the same room. CO₂ molecules are 22 times heavier. Which balloon holds more molecules?')}
${story('Think of a car park where every car, small or big, gets exactly one parking bay. In a gas the molecules are so far apart that their own size does not matter: the “bays” (space per molecule) are fixed by temperature and pressure only. So a litre of any gas holds the same number of molecules.')}
<p><b>Background (p.74):</b> Avogadro (1811) made the distinction between <i>atoms</i> and <i>molecules</i>. An <b>atom</b> is the smallest particle of an element that can take part in a chemical reaction and may or may not exist independently. A <b>molecule</b> is the smallest particle of an element or compound that can exist by itself. The number of atoms in a molecule is its <b>atomicity</b>.</p>
<p>★ <b>Avogadro’s law:</b> “Under the same conditions of temperature and pressure, equal volumes of all gases contain the same number of molecules.”</p>
${DIA_AVLAW}
<p>So if 1 L of O₂ holds n molecules, then 1 L of H₂, 1 L of N₂, 1 L of <i>any</i> gas holds n molecules (same T, P). It also works backwards: the same number of molecules → the same volume.</p>
${DIA_NH3}
<p>Because 1 vol N₂ + 3 vol H₂ → 2 vol NH₃, Avogadro’s law lets us read volumes as molecules: 1 molecule N₂ + 3 molecules H₂ → 2 molecules NH₃.</p>
${steps('Worked example (p.83, Q.15)',['O₂, Cl₂, SO₂ and CO₂ at the same T and P: Y molecules of O₂ occupy V litres and weigh 16 g.','Y molecules of Cl₂ → same number of molecules → same volume = <b>V litres</b>.','3Y molecules of SO₂ → three times the molecules → <b>3V litres</b>.','16 g O₂ = 16/32 = 0.5 mol → 11.2 L at s.t.p.; 11.2 L of CO₂ = 0.5 mol = 0.5 × 44 = <b>22 g</b>.'])}
${trap('Avogadro’s law is about <b>molecules</b>, not atoms: 1 L of O₂ and 1 L of O₃ have the same number of molecules but different numbers of atoms.','It is about <b>volumes</b>, not masses. “Equal masses of all gases contain the same number of molecules” is WRONG (2009 board question).','It holds only for <b>gases</b> at the <b>same temperature and pressure</b>; never apply it to solids or liquids.','Half the volume → half the molecules: 50 cc holds half as many molecules as 100 cc.')}
${cy(['100 cc of gas A contains Y molecules. How many molecules are in 25 cc of gas C (same T, P)?','Y/4.'],['Which law relates the volume of a gas to the number of its molecules?','Avogadro’s law.'],['Equal volumes of N₂ and CO₂ (same T, P). Same number of atoms?','No. They have the same number of molecules, but N₂ has 2 atoms per molecule and CO₂ has 3, so CO₂ has 1.5 times as many atoms.'])}
${exam('Under the same conditions of temperature and pressure, equal volumes of all gases contain the same number of molecules; hence Y molecules of any gas occupy the same volume as Y molecules of oxygen.')}`,

ram:`<h3>RAM, RMM, gram atom and gram molecule</h3>
${hook('An oxygen atom weighs about 2.66 × 10⁻²³ g. Nobody can weigh that on a balance, so how do we say “O = 16”?')}
${story('Instead of weighing one grain of rice, you compare it with a standard grain. Chemists chose 1/12 of a carbon-12 atom as the standard “grain” and say how many times heavier every other atom is. That ratio is a pure number: the relative atomic mass.')}
<p>Atoms are too small and light to be weighed directly, so a <b>relative</b> scale is used. Hydrogen (the lightest) was the first standard; since 1961 the standard is the <b>carbon-12 atom</b>.</p>
<table class="cmp"><tr><th>Relative atomic mass [RAM, atomic weight]</th><th>Relative molecular mass [RMM, molecular weight]</th></tr>
${tr(['★ The number of times one <b>atom</b> of an element is heavier than 1/12 the mass of an atom of carbon [C¹²].','★ The number of times one <b>molecule</b> of the substance is heavier than 1/12 the mass of an atom of carbon [C¹²].'],
 ['RAM = mass of one atom ÷ (1/12 × mass of one C¹² atom)','RMM = mass of one molecule ÷ (1/12 × mass of one C¹² atom)'],
 ['<b>Gram atomic mass (gram atom):</b> the RAM expressed in grams, e.g. 16 g of oxygen.','<b>Gram molecular mass (gram molecule):</b> the RMM expressed in grams, e.g. 32 g of O₂.'])}</table>
<p><b>Atomic mass unit:</b> 1 a.m.u. = 1/12 the mass of a C¹² atom. Oxygen = 16.000 a.m.u. Atomic weights are not whole numbers because natural elements are mixtures of isotopes, e.g. ³⁵Cl and ³⁷Cl in the ratio 3 : 1 give the average 35.5.</p>
<p>★ Gram atoms = mass in grams ÷ relative atomic mass &nbsp;·&nbsp; ★ Gram molecules = mass in grams ÷ relative molecular mass</p>
<p>(A gram atom is simply a mole of atoms; a gram molecule is a mole of molecules.)</p>
${steps('Worked example (p.81, Q.8–9)',['Gram atoms in 8 g of oxygen [O = 16]: 8 ÷ 16 = <b>0.5 gram atom</b>.','Gram molecules in 45 g of water: RMM of H₂O = 2 × 1 + 16 = 18.','45 ÷ 18 = <b>2.5 gram molecules</b>.'])}
${trap('RAM and RMM have <b>no unit</b> (they are ratios); gram atomic / gram molecular mass is in <b>grams</b>.','For a gas like nitrogen, check whether the question wants gram <b>atoms</b> (÷ 14) or gram <b>molecules</b> (÷ 28).','Do not forget the atomicity when you work out RMM: S₈ = 8 × 32 = 256, not 32.','The standard is 1/12 of C¹², not hydrogen (hydrogen was the old standard).')}
${cy(['Gram atoms in 46 g of sodium [Na = 23]?','2 gram atoms.'],['Gram molecules in 21 g of nitrogen [N = 14]?','21 ÷ 28 = 0.75.'],['Why is the atomic weight of chlorine 35.5 and not a whole number?','It is the weighted average of its isotopes ³⁵Cl and ³⁷Cl (ratio 3 : 1).'])}
${exam('Relative atomic mass of an element is the number of times one atom of the element is heavier than 1/12 the mass of an atom of carbon-12.')}`,

mole:`<h3>The mole and Avogadro’s number</h3>
${hook('A spoonful of water (18 g) holds about 600 000 000 000 000 000 000 000 molecules. How can anyone count, or even write, numbers like that?')}
${story('Shopkeepers count eggs in dozens and paper in reams. Chemists count particles in <b>moles</b>. A dozen is always 12, a mole is always 6.023 × 10²³. A dozen eggs and a dozen melons have the same count but very different masses; in the same way a mole of carbon (12 g) and a mole of magnesium (24 g) have the same count but different masses.')}
${DIA_DOZEN}
<p>★ <b>Mole:</b> the amount of substance which contains the same number of units as the number of atoms in 12.000 g of carbon-12 [₆C¹²]. It is a collection of particles (atoms, molecules or ions) equal to 6.023 × 10²³, i.e. Avogadro’s number.</p>
<p>★ <b>Avogadro’s number:</b> the number of atoms present in 12 g (gram atomic weight) of ₆C¹²; i.e. the number of elementary units in one mole of a substance. It is denoted by N<sub>A</sub> or L and its value is <b>6.023 × 10²³</b>.</p>
<table class="cmp"><tr><th>1 mole of</th><th>Mass</th><th>Volume at s.t.p.</th><th>Particles</th></tr>
${tr(['O atoms','16 g','–','6.023 × 10²³ atoms'],['O₂ molecules','32 g','22.4 L','6.023 × 10²³ molecules'],['CO₂','44 g','22.4 L','6.023 × 10²³ molecules: C atoms 6.023 × 10²³, O atoms 2 × 6.023 × 10²³'],['NH₃','17 g','22.4 L','N atoms 6.023 × 10²³, H atoms 3 × 6.023 × 10²³'],['H₂SO₄','98 g','– (liquid)','H 2 mol, S 1 mol, O 4 mol of atoms'],['BaCl₂ (ionic)','208 g','– (solid)','6.023 × 10²³ BaCl₂ units: 1 mol Ba²⁺, 2 mol Cl⁻'])}</table>
${MOLEMAP}
${steps('Worked example (p.82, Q.11): 294 g of H₂SO₄ [H = 1, S = 32, O = 16]',['Gram molecular mass of H₂SO₄ = 2 + 32 + 64 = 98 g.','Moles = 294 ÷ 98 = 3 mol.','Molecules = 3 × 6.023 × 10²³.','Each molecule has 7 atoms → atoms = 21 × 6.023 × 10²³; H atoms (2 per molecule) = 6 × 6.023 × 10²³.'])}
${trap('Always go <b>through moles</b>: mass → moles → particles. Never jump from grams straight to particles.','Molecules vs atoms: 1 mole of S₈ has 6.023 × 10²³ molecules but 8 × 6.023 × 10²³ atoms.','Mass of ONE atom = gram atomic mass ÷ 6.023 × 10²³ (a tiny number, ~10⁻²³ g). If you get a big number you multiplied instead of dividing.','Equal masses do NOT mean equal moles: the substance with the smaller molar mass has more moles.')}
${cy(['How many atoms in 60 g of neon [Ne = 20]?','3 mol → 3 × 6.023 × 10²³ atoms.'],['Which weighs more: 1 mole of CO₂ or 1 mole of CO?','CO₂ (44 g against 28 g).'],['Moles of Cl⁻ from 2 moles of ZnCl₂?','4 moles (each ZnCl₂ gives 2 Cl⁻).'])}
${exam('A mole is the amount of substance which contains the same number of units as the number of atoms in 12.000 g of carbon-12, i.e. 6.023 × 10²³ particles (Avogadro’s number).')}`,

vd:`<h3>Applications of Avogadro’s law: atomicity, molecular formula, vapour density</h3>
${hook('Hydrogen is the lightest gas. If a gas is 16 times as heavy as the same volume of hydrogen, why is its molecular weight 32 and not 16?')}
${story('Imagine two identical lunch boxes, each holding the same number of sandwiches (same T, P → same number of molecules). Weighing the boxes compares one sandwich with one sandwich. But the hydrogen “sandwich” is a pair of H atoms, while molecular weight is measured against ONE H atom, so you have to double the ratio.')}
<p><b>Uses of Avogadro’s law (p.77):</b> it a] determines the atomicity of a gas, b] determines the molecular formula of a gas, c] gives the relation between molecular weight and vapour density, d] explains Gay-Lussac’s law, e] relates gram molecular weight to gram molecular volume.</p>
<p>★ <b>Atomicity:</b> the number of atoms present in one molecule of that element. Monoatomic: He, Ne. Diatomic: H₂, O₂, Cl₂, N₂.</p>
${DIA_NO}
<p>★ <b>Molecular weight:</b> the ratio of the weight of one molecule of a substance to the weight of one atom of hydrogen.<br>
★ <b>Vapour density:</b> the ratio of the mass of a certain volume of gas or vapour to the mass of the same volume of hydrogen, both measured under the same conditions of temperature and pressure.</p>
${DIA_VD}
<p><b>Conclusion:</b> the relative molecular mass of a gas or vapour is twice its vapour density. VD has no unit. Atomicity = molecular weight ÷ atomic weight.</p>
${steps('Worked example (p.84, Q.19): 1 L of O₂ weighs 1.32 g; 1 L of H₂ (same T, P) weighs 0.0825 g',['VD = mass of 1 L of O₂ ÷ mass of 1 L of H₂.','VD = 1.32 ÷ 0.0825 = 16.','Molecular weight = 2 × VD = 2 × 16 = <b>32</b>.','Atomicity of oxygen = 32 ÷ 16 = 2 (diatomic).'])}
${trap('M = 2 × VD, not VD = 2 × M. Check: VD of CO₂ must be 22, smaller than 44.','If the question gives “1 L of H₂ weighs 0.09 g at s.t.p.”, first find the mass of 1 L of the gas at s.t.p. (convert the volume to s.t.p. if needed).','Same cylinder = same volume = same number of molecules; so VD = mass of gas ÷ mass of H₂ in that cylinder.','VD has no unit; molecular weight (as gram molecular mass) is in g.')}
${cy(['VD of CH₃OH [C = 12, H = 1, O = 16]?','M = 32, so VD = 16.'],['A gas has VD 35.5 and atomic mass 35.5. Atomicity?','M = 71; 71 ÷ 35.5 = 2.'],['A cylinder holds 150 g H₂ or 450 g of gas G. Molecular weight of G?','VD = 450/150 = 3; M = 6.'])}
${exam('Vapour density is the ratio of the mass of a certain volume of a gas to the mass of the same volume of hydrogen under the same conditions of temperature and pressure; by Avogadro’s law, molecular weight = 2 × vapour density.')}`,

molvol:`<h3>Molar volume: 22.4 litres at s.t.p.</h3>
${hook('One mole of O₂ weighs 32 g and one mole of CO₂ weighs 44 g. Would they fill the same size of bottle?')}
${story('Avogadro said “same number of molecules → same volume”. One mole is always the same number (6.023 × 10²³), so one mole of every gas fills the same box. At 0 °C and 760 mm Hg that box is 22.4 litres, roughly a cube 28 cm on each side.')}
<p>★ <b>Gram molecular mass:</b> the relative molecular mass of a substance expressed in grams (gram molecule).<br>
★ <b>Gram molecular volume (molar volume):</b> the volume occupied by 1 gram molecular weight of a gas at s.t.p.</p>
<p>Gram molecular volume = gram molecular weight ÷ weight of 1 litre at s.t.p. E.g. O₂: 32 ÷ 1.429 g/L = 22.4 L; H₂: 2.016 ÷ 0.09 g/L = 22.4 L.</p>
${DIA_MOLVOL}
<p><b>Conclusion:</b> the gram molecular weight (1 mole) of any gas occupies 22.4 litres (22 400 cc) at s.t.p.</p>
${flow('1 MOLE','weighs gram mol. wt.','occupies 22.4 L at s.t.p.','contains 6.023 × 10²³ molecules')}
<p><b>Not at s.t.p.?</b> First convert with P₁V₁/T₁ = P₂V₂/T₂ (s.t.p.: P₂ = 760 mm Hg, T₂ = 273 K; T in kelvin = °C + 273).</p>
${steps('Worked example (p.81, Q.7): 10 L of X at 27 °C and 700 mm; M of X = 60',['P₁ = 700 mm, V₁ = 10 L, T₁ = 300 K; P₂ = 760 mm, T₂ = 273 K.','V₂ = 700 × 10 × 273 ÷ (300 × 760) = 8.38 L at s.t.p.','60 g occupies 22.4 L at s.t.p.','Mass = 8.38 × 60 ÷ 22.4 = <b>22.45 g</b>.'])}
${trap('22.4 L applies only to <b>gases</b> at <b>s.t.p.</b>: never for water, H₂SO₄ or NaCl.','Units: 22.4 L = 22.4 dm³ = 22 400 cm³ (cc, ml). Don’t mix litres with cc.','Use kelvin in the gas equation (27 °C = 300 K).','Molecular weight from a volume: scale the mass up to 22.4 L (M = mass × 22.4 ÷ volume in L).')}
${cy(['Volume of 0.01 mole of CO₂ at s.t.p.?','0.224 L.'],['11.2 L of a gas at s.t.p. weighs 24 g. Molecular mass?','24 × 22.4 ÷ 11.2 = 48.'],['Volume of 320 g of SO₂ at s.t.p.?','5 mol × 22.4 = 112 L.'])}
${exam('Molar volume is the volume occupied by one gram molecular weight of a gas at s.t.p.; it is 22.4 litres for every gas.')}`
};

/* ---------- CHAPTER (book order) ---------- */
const CHAPTER=[
 {id:'s-avlaw',title:'2. Avogadro’s law',ref:'p.74',t:['av'],html:CONCEPT.av},
 {id:'s-ram',title:'Recap: RAM, RMM, gram atom, gram molecule',ref:'p.75',t:['ram'],html:CONCEPT.ram+
  `<h4>Atomic and molecular weights on the C¹² scale (p.75)</h4><table class="cmp"><tr><th>Element</th><th>RAM</th><th>Gram atom</th><th>Substance</th><th>RMM</th><th>Gram molecule</th></tr>
  ${tr(['Aluminium (Al)','26.98','27 g','Nitrogen','28.014','28 g'],['Carbon (C)','12.0000','12 g','Oxygen','31.998','32 g'],['Chlorine (Cl)','35.453','35.5 g','Chlorine','70.906','71 g'],['Hydrogen (H)','1.008','1 g','Carbon dioxide','43.998','44 g'],['Iron (Fe)','55.847','56 g','Sulphur dioxide','64.062','64 g'],['Nitrogen (N)','14.007','14 g','Sulphuric acid','98.076','98 g'],['Oxygen (O)','15.999','16 g','',' ',' '])}</table>
  <p>Molecular weight of SO₂ is 64 a.m.u., i.e. one molecule of SO₂ is 64 times as heavy as 1/12 the mass of a C¹² atom.</p>`},
 {id:'s-mole',title:'3. Mole & Avogadro’s number',ref:'p.76',t:['mole'],html:CONCEPT.mole},
 {id:'s-apps',title:'4. Applications of Avogadro’s law: atomicity, molecular formula, VD, Gay-Lussac',ref:'p.77–78',t:['vd','av'],html:CONCEPT.vd+
  `<h4>a] Atomicity of nitrogen (p.77)</h4><p>1 vol N₂ + 1 vol O₂ → 2 vols NO (Gay-Lussac) → 1 molecule + 1 molecule → 2 molecules (Avogadro) → ½ molecule + ½ molecule → 1 molecule. An atom is indivisible, so ½ molecule of nitrogen = 1 atom; one molecule of nitrogen contains 2 atoms: nitrogen is DIATOMIC. Similarly N₂ + 3H₂ → 2NH₃ (1 vol : 3 vols : 2 vols = 1 : 3 : 2 molecules).</p>
  <h4>b] Molecular formula of a gas (p.77)</h4><p>★ <b>Molecular formula:</b> a chemical formula which gives the actual or exact number of atoms of the elements present in one molecule of a compound.</p>
  <p>1 vol H₂ + 1 vol Cl₂ → 2 vols HCl → 1 molecule + 1 molecule → 2 molecules. Hydrogen and chlorine are diatomic, so 2 atoms of H + 2 atoms of Cl give 2 molecules of hydrogen chloride: 1 atom of H combines with 1 atom of Cl to give 1 molecule. <b>Molecular formula of hydrogen chloride = HCl.</b></p>
  <h4>d] Avogadro’s law explains Gay-Lussac’s law (p.78)</h4>
  <table class="cmp"><tr><th></th><th>Hydrogen</th><th>Chlorine</th><th>Hydrogen chloride</th></tr>${tr(['Gay-Lussac','1 vol','1 vol','2 vols'],['Avogadro (1 vol = n molecules)','n molecules','n molecules','2n molecules'],['Diatomic (1 molecule = 2 atoms)','2 atoms','2 atoms','2 molecules'])}</table>
  <p>So one molecule of HCl is formed from one atom of hydrogen and one atom of chlorine. <b>Conclusion:</b> Avogadro’s law (equal volumes of gases at the same T and P contain the same number of molecules) explains Gay-Lussac’s law of combining volumes: whole-number volume ratios are simply whole-number molecule ratios.</p>`},
 {id:'s-molvol',title:'e] Gram molecular mass & gram molecular volume; mole relations',ref:'p.79',t:['molvol','ram','mole'],html:CONCEPT.molvol+
  `<h4>Relating mole, atomic mass and molecular mass (p.79)</h4><ul>
  <li><b>1 mole of an atom</b> weighs 1 gram atomic mass, e.g. 1 mole of O atoms = 16 g. Gram atoms = mass in g ÷ relative atomic mass.</li>
  <li><b>1 mole of any substance (molecule)</b> weighs 1 gram molecular mass, e.g. 1 mole of O₂ = 32 g. Gram molecules = mass in g ÷ relative molecular mass.</li>
  <li><b>1 mole of a gas</b> weighs 1 gram molecular mass and occupies 22.4 L (molar volume) at s.t.p.</li>
  <li><b>1 MOLE</b> weighs the g. mol. wt., occupies 22.4 L (22 400 cc) at s.t.p., and contains 6.023 × 10²³ molecules (atoms/ions).</li></ul>`},
 {id:'s-solved',title:'Problems B, C, D: how the book sets out a mole problem',ref:'p.80–84',t:['mole','molvol','av','vd'],html:
  `<p>The book solves every problem with a two-line “unitary method”:</p>
  ${flow('a] 1 MOLE','weighs G. MOL. WT.','occupies 22.4 L at s.t.p.','contains 6.023 × 10²³')}
  ${flow('b] ? moles','given weight','given volume','? molecules')}
  <p>Write line a] for the substance, put the given quantity under the matching column in line b], and cross-multiply. This is the same as going through moles on the mole map:</p>${MOLEMAP}
  <ul><li><b>B (p.80–83):</b> mole concept & Avogadro’s number (moles, mass, volume, molecules, atoms, ions, gram atoms, gram molecules).</li>
  <li><b>C (p.83):</b> Avogadro’s law (same T, P: volume ∝ number of molecules).</li>
  <li><b>D (p.83–84):</b> vapour density & molecular weight (M = 2 × VD).</li></ul>
  <p>All 19 solved problems are practice cards: try each before revealing the book’s steps.</p>`},
 {id:'s-summary',title:'Summary: laws & terms',ref:'p.85',t:['av','ram','mole','vd','molvol'],html:
  `<table class="cmp"><tr><th>Law / term</th><th>Statement (★ learn word for word)</th></tr>${tr(
  ['Gay-Lussac’s law','When gases react, they do so in volumes which bear a simple whole-number ratio to one another and to the volumes of the products, if gaseous, provided the temperature and pressure of the reacting gases and their products remain constant.'],
  ['Avogadro’s law','Under the same conditions of temperature and pressure, equal volumes of all gases contain the same number of molecules.'],
  ['Relative atomic mass [atomic weight]','The number of times one atom of an element is heavier than 1/12 the mass of an atom of carbon [C¹²].'],
  ['Gram atomic mass [gram atom]','The relative atomic mass of an element expressed in grams.'],
  ['Relative molecular mass [molecular weight]','The number of times one molecule of the substance (element or compound) is heavier than 1/12 the mass of an atom of carbon [C¹²].'],
  ['Gram molecular mass [gram molecule]','The relative molecular mass of a substance expressed in grams.'],
  ['Avogadro’s number','The number of atoms present in 12 g [gram atomic wt.] of carbon ₆C¹² (6.023 × 10²³).'],
  ['Vapour density','The ratio of the mass of a certain volume of gas or vapour to the mass of the same volume of hydrogen, measured under the same conditions of temperature and pressure.'],
  ['Mole','The amount of substance which contains the same number of units as the number of atoms in 12.000 g of carbon-12 [₆C¹²].'],
  ['Atomicity','The number of atoms present in one molecule of that element, e.g. He (monoatomic).'],
  ['Molar volume','The volume occupied by 1 gram molecular weight of a gas at s.t.p. (22.4 L).'])}</table>`}];

const TOPIC_SEC={av:'s-avlaw',ram:'s-ram',mole:'s-mole',vd:'s-apps',molvol:'s-molvol'};

/* ---------- Questions ---------- */
const NA=6.023e23;
const LAW={a:'Avogadro’s law',alt:["Avogadro's law",'Avogadros law','Avogadro law','Avogadro’s hypothesis']};
const Q=[
/* ===== Solved problems B (p.80–83) ===== */
{id:'s80-1',t:'mole',src:'p.80 · Solved B 1',ref:'p.76, 79',solved:true,type:'num',
 q:'Calculate the number of moles of nitrogen in 7 g of nitrogen. [N = 14]',
 hint:'Mass → moles: divide by the gram molecular mass of N₂ (not N).',
 parts:[{l:'Moles of N₂',a:0.25,u:'mol'}],
 steps:['1 mole of any substance = 1 gram molecular weight of it.','Molecular weight of N₂ = 14 × 2 = 28 → 1 mole N₂ = 28 g.','28 g of N₂ = 1 mole, so 7 g of N₂ = 1 × 7 ÷ 28.']},
{id:'s80-2',t:'molvol',src:'p.80 · Solved B 2',ref:'p.79',solved:true,type:'num',
 q:'Calculate the mass of 50 cc of CO at s.t.p. [C = 12, O = 16]',
 hint:'1 mole = 28 g of CO = 22 400 cc at s.t.p. Scale down to 50 cc.',
 parts:[{l:'Mass of CO',a:0.0625,u:'g'}],
 steps:['Gram molecular mass of CO = 12 + 16 = 28 g.','1 mole of CO = 28 g and occupies 22 400 cc at s.t.p.','Mass of 50 cc = 28 × 50 ÷ 22 400.']},
{id:'s80-3',t:'molvol',src:'p.80 · Solved B 3',ref:'p.79',solved:true,type:'num',
 q:'Calculate the volume at s.t.p. occupied by 6.023 × 10²² molecules of a gas X.',
 hint:'Molecules → moles (÷ 6.023 × 10²³) → volume (× 22.4 L).',
 parts:[{l:'Volume',a:2.24,u:'L'}],
 steps:['1 mole of any gas contains 6.023 × 10²³ molecules and occupies 22.4 L at s.t.p.','6.023 × 10²² molecules = 6.023 × 10²² ÷ 6.023 × 10²³ = 0.1 mole.','Volume = 0.1 × 22.4 L.']},
{id:'s80-4',t:'mole',src:'p.80 · Solved B 4',ref:'p.76, 79',solved:true,type:'num',
 q:'Calculate the number of molecules in 1 kg of sodium chloride. [Na = 23, Cl = 35.5]',
 hint:'Change kg to g, then mass → moles → molecules (formula units).',
 parts:[{l:'Molecules',a:1000/58.5*NA,show:'17.1 × 6.023 × 10²³',u:'molecules'}],
 steps:['Molecular weight of NaCl = 23 + 35.5 = 58.5 → 58.5 g contains 6.023 × 10²³ molecules.','1 kg = 1000 g.','Moles = 1000 ÷ 58.5 = 17.1.','Molecules = 17.1 × 6.023 × 10²³.']},
{id:'s81-5',t:'vd',src:'p.81 · Solved B 5',ref:'p.77, 79',solved:true,type:'num',
 q:'Calculate the atomicity of a gas ‘X’, if 1 g of ‘X’ occupies 11 200 cc at s.t.p. [at. wt. of ‘X’ = 1]',
 hint:'Find the gram molecular weight (mass of 22 400 cc), then atomicity = mol. wt. ÷ at. wt.',
 parts:[{l:'Atomicity',a:2,u:''}],
 steps:['1 mole (1 g. mol. wt.) occupies 22 400 cc at s.t.p.','1 g occupies 11 200 cc, so g. mol. wt. = 22 400 × 1 ÷ 11 200 = 2 g.','Atomicity = g. mol. wt. ÷ at. wt. = 2 ÷ 1.']},
{id:'s81-6',t:'molvol',src:'p.81 · Solved B 6',ref:'p.79',solved:true,type:'num',
 q:'0.48 g of a gas forms 100 cm³ of vapours at s.t.p. Calculate the gram molecular weight of the gas.',
 hint:'Scale the mass of 100 cm³ up to 22 400 cm³.',
 parts:[{l:'Gram molecular weight',a:107.52,u:'g'}],
 steps:['22.4 L (22 400 cm³) of gas at s.t.p. = 1 g. mol. wt.','100 cm³ weighs 0.48 g.','22 400 cm³ weighs 22 400 × 0.48 ÷ 100.']},
{id:'s81-7',t:'molvol',src:'p.81 · Solved B 7',ref:'p.79',solved:true,type:'num',
 q:'Calculate the weight of a substance X which in gaseous form occupies 10 litres at 27 °C and 700 mm pressure. The molecular weight of X is 60.',
 hint:'First convert the volume to s.t.p. with P₁V₁/T₁ = P₂V₂/T₂, then 60 g ↔ 22.4 L.',
 parts:[{l:'Weight of X',a:22.45,u:'g'}],
 steps:['P₁ = 700 mm, V₁ = 10 L, T₁ = 27 + 273 = 300 K; P₂ = 760 mm, T₂ = 273 K.','V₂ = 700 × 10 × 273 ÷ (300 × 760) = 8.38 L at s.t.p.','60 g of X occupies 22.4 L at s.t.p.','Mass = 8.38 × 60 ÷ 22.4.']},
{id:'s81-8',t:'ram',src:'p.81 · Solved B 8',ref:'p.75, 79',solved:true,type:'num',
 q:'Calculate the gram atoms present in 8 g of oxygen. [O = 16]',
 hint:'Gram atoms = mass in grams ÷ relative ATOMIC mass.',
 parts:[{l:'Gram atoms',a:0.5,u:'g. atoms'}],
 steps:['Gram atom is the relative atomic mass expressed in grams.','Gram atoms = mass in grams ÷ relative atomic mass = 8 ÷ 16.']},
{id:'s81-9',t:'ram',src:'p.81 · Solved B 9',ref:'p.75, 79',solved:true,type:'num',
 q:'Calculate the gram molecules present in 45 g of water. [H = 1, O = 16]',
 hint:'Gram molecules = mass in grams ÷ relative MOLECULAR mass.',
 parts:[{l:'Gram molecules',a:2.5,u:'g. molecules'}],
 steps:['Relative molecular mass of H₂O = 2 × 1 + 16 = 18.','Gram molecules = mass in grams ÷ relative molecular mass = 45 ÷ 18.']},
{id:'s82-10',t:'molvol',src:'p.82 · Solved B 10',ref:'p.76, 79',solved:true,type:'num',
 q:'1 mole of SO₂ occupies 24 dm³ at room temperature and pressure. Calculate the following at room temperature and pressure: i] the mass of 6 litres of SO₂ ii] the volume occupied by 80 g of SO₂ iii] the number of molecules in 0.64 g of SO₂ if one mole of SO₂ contains N molecules iv] the weight of 0.5 gm. molecules of SO₂. [S = 32, O = 16; 1 dm³ = 1 litre]',
 hint:'Here 1 mole = 64 g = 24 L (room conditions, not 22.4 L) = N molecules. Use proportion for each part.',
 parts:[{l:'i] Mass of 6 L',a:16,u:'g'},{l:'ii] Volume of 80 g',a:30,u:'dm³'},{l:'iii] Molecules in 0.64 g',a:'N/100',alt:['0.01N','N/100molecules'],u:'molecules'},{l:'iv] Weight of 0.5 g. molecules',a:32,u:'g'}],
 steps:['g. mol. wt. of SO₂ = 32 + 16 × 2 = 64 g; 1 mole = 64 g = 24 L = N molecules.','i] 64 g occupies 24 L, so 6 L has 64 × 6 ÷ 24 = 16 g.','ii] 80 g occupies 24 × 80 ÷ 64 = 30 dm³.','iii] 0.64 g contains N × 0.64 ÷ 64 = N/100 molecules.','iv] Mass = gram molecules × mol. wt. = 0.5 × 64.']},
{id:'s82-11',t:'mole',src:'p.82 · Solved B 11',ref:'p.76',solved:true,type:'num',
 q:'Calculate i] the number of moles ii] the total number of molecules iii] the total number of atoms iv] the number of hydrogen atoms in 294 g of sulphuric acid. [H = 1, S = 32, O = 16]',
 hint:'Mass → moles → molecules; then × atoms per molecule (7 in H₂SO₄, of which 2 are H).',
 parts:[{l:'i] Moles',a:3,u:'mol'},{l:'ii] Molecules',a:3*NA,show:'3 × 6.023 × 10²³',u:'molecules'},{l:'iii] Atoms',a:21*NA,show:'21 × 6.023 × 10²³',u:'atoms'},{l:'iv] H atoms',a:6*NA,show:'6 × 6.023 × 10²³',u:'atoms'}],
 steps:['g. mol. wt. of H₂SO₄ = 2 + 32 + 16 × 4 = 98 g.','Moles = 294 ÷ 98 = 3; molecules = 3 × 6.023 × 10²³.','1 molecule of H₂SO₄ contains 7 atoms [2 H + 1 S + 4 O] → atoms = 7 × 3 × 6.023 × 10²³.','1 molecule contains 2 H atoms → H atoms = 2 × 3 × 6.023 × 10²³.']},
{id:'s82-12',t:'mole',src:'p.82 · Solved B 12',ref:'p.76',solved:true,type:'mcq',
 q:'If gases ‘A’, ‘B’, ‘C’ are arranged in increasing order of their relative molecular mass and the mass of each gas is 10 g at s.t.p., state which gas will contain the least number of molecules and which the most.',
 hint:'Molecules in 10 g = 6.023 × 10²³ × 10 ÷ M. A bigger M gives fewer molecules.',
 opts:['C least, A most','A least, C most','All contain the same number','B least, A most'],ans:0,
 exp:'Take M of A = X, B = 2X, C = 3X. 10 g of A contains 6.023 × 10²³ × 10/X molecules, B: …/2X, C: …/3X. So gas C (heaviest molecules) contains the least and gas A the maximum number of molecules.'},
{id:'s83-13',t:'mole',src:'p.83 · Solved B 13',ref:'p.76',solved:true,type:'num',
 q:'Calculate the number of moles of zinc [Zn²⁺] ions and chloride [Cl¹⁻] ions which will be obtained from 272 g of ZnCl₂. [Zn = 65, Cl = 35.5]',
 hint:'Moles of ZnCl₂ first; then ZnCl₂ → Zn²⁺ + 2Cl¹⁻.',
 parts:[{l:'Zn²⁺ ions',a:2,u:'mol'},{l:'Cl¹⁻ ions',a:4,u:'mol'}],
 steps:['Relative molecular mass of ZnCl₂ = 65 + 35.5 × 2 = 136 g.','Moles of ZnCl₂ = 272 ÷ 136 = 2 moles.','ZnCl₂ → Zn²⁺ + 2Cl¹⁻: 1 mole gives 1 mole Zn²⁺ and 2 moles Cl¹⁻.','2 moles give 2 moles Zn²⁺ and 4 moles Cl¹⁻.']},
/* ===== Solved problems C (p.83) ===== */
{id:'s83-14',t:'av',src:'p.83 · Solved C 14',ref:'p.74',solved:true,type:'num',
 q:'If 100 cc of a gas A contains Y molecules, how many molecules of gas B will be present in 50 cc of B and of gas C in 25 cc of C? The gases A, B and C are under the same conditions of temperature and pressure.',
 hint:'Avogadro’s law: equal volumes → equal numbers of molecules, so molecules ∝ volume.',
 parts:[{l:'Molecules in 50 cc of B',a:'Y/2',alt:['0.5Y'],u:''},{l:'Molecules in 25 cc of C',a:'Y/4',alt:['0.25Y'],u:''}],
 steps:['Avogadro’s law: under the same T and P, equal volumes of all gases contain the same number of molecules.','100 cc of A has Y molecules, so 100 cc of B and 100 cc of C also have Y molecules.','50 cc of B is half of 100 cc; 25 cc of C is a quarter of 100 cc.']},
{id:'s83-15',t:'av',src:'p.83 · Solved C 15',ref:'p.74, 79',solved:true,type:'num',
 q:'Under the same conditions of temperature and pressure O₂, Cl₂, SO₂, CO₂ contain the same number of molecules represented by ‘Y’. The molecules of oxygen gas occupy V litres and have a mass of 16 g. Under the same conditions, state the volume occupied by i] Y molecules of chlorine ii] 3Y molecules of SO₂ iii] State the mass of CO₂ in grams.',
 hint:'Same number of molecules → same volume. For iii] find the volume of 16 g of O₂ at s.t.p., then the mass of the same volume of CO₂.',
 parts:[{l:'i] Volume of Y molecules Cl₂',a:'V',alt:['Vlitres'],u:'litres'},{l:'ii] Volume of 3Y molecules SO₂',a:'3V',alt:['3Vlitres'],u:'litres'},{l:'iii] Mass of CO₂',a:22,u:'g'}],
 steps:['Avogadro’s law: same number of molecules → same volume, so Y molecules of Cl₂ occupy V litres and 3Y molecules of SO₂ occupy 3V litres.','1 mole O₂ = 32 g = 22.4 L at s.t.p., so 16 g O₂ occupies 22.4 × 16 ÷ 32 = 11.2 L.','The same volume (11.2 L) of CO₂ is present.','1 mole CO₂ = 44 g = 22.4 L, so 11.2 L of CO₂ = 44 × 11.2 ÷ 22.4.']},
/* ===== Solved problems D (p.83–84) ===== */
{id:'s83-16',t:'vd',src:'p.83 · Solved D 16',ref:'p.78',solved:true,type:'num',
 q:'A gas cylinder filled with hydrogen holds 50 g of the gas. The same cylinder holds 200 g of a gas A and 500 g of gas B. Considering the same conditions of temperature and pressure in the cylinder, calculate the relative molecular masses (molecular weights) of gas A and B.',
 hint:'Same cylinder = same volume → VD = mass of gas ÷ mass of H₂; then M = 2 × VD.',
 parts:[{l:'Molecular weight of A',a:8,u:'g'},{l:'Molecular weight of B',a:20,u:'g'}],
 steps:['VD = wt. of a certain volume of gas ÷ wt. of an equal volume of H₂ (same T, P).','Gas A: VD = 200 ÷ 50 = 4 → M = 2 × 4.','Gas B: VD = 500 ÷ 50 = 10 → M = 2 × 10.']},
{id:'s84-17',t:'vd',src:'p.84 · Solved D 17',ref:'p.74, 78',solved:true,type:'num',
 q:'A gas cylinder can hold 1 kg of hydrogen at room temperature and pressure. Calculate a] the weight of carbon dioxide it can hold under similar conditions of temperature and pressure. b] If the number of molecules of hydrogen in the cylinder is X, state the number of molecules of carbon dioxide in the cylinder. [C = 12, O = 16, H = 1]',
 hint:'VD of CO₂ = 44 ÷ 2. The cylinder holds VD times the mass of hydrogen. Same volume → same number of molecules.',
 parts:[{l:'a] Weight of CO₂',a:22,u:'kg'},{l:'b] Molecules of CO₂',a:'X',u:'molecules'}],
 steps:['Molecular weight of CO₂ = 12 + 32 = 44; V.D. = 44 ÷ 2 = 22.','V.D. = wt. of a certain volume of CO₂ ÷ wt. of the same volume of H₂.','22 = wt. of CO₂ ÷ 1 kg → wt. of CO₂ = 22 kg.','b] Avogadro’s law: equal volumes at the same T and P contain the same number of molecules.']},
{id:'s84-18',t:'vd',src:'p.84 · Solved D 18',ref:'p.78–79',solved:true,type:'num',
 q:'A gas occupies 700 ml at a pressure of 700 mm of Hg and a temperature of 57 °C. If at s.t.p. the mass of the gas is 1.5 g, find the vapour density and the molecular weight of the gas. (Given 1 litre of hydrogen weighs 0.09 g at s.t.p.)',
 hint:'Convert 700 ml to s.t.p.; find the mass of 1 L at s.t.p.; VD = that ÷ 0.09; M = 2 × VD.',
 parts:[{l:'Vapour density',a:31.25,u:''},{l:'Molecular weight',a:62.5,u:'g'}],
 steps:['P₁ = 700 mm, V₁ = 700 ml, T₁ = 57 + 273 = 330 K; P₂ = 760 mm, T₂ = 273 K.','V₂ = 700 × 700 × 273 ÷ (760 × 330) = 533.37 ml at s.t.p.','1000 ml of the gas weighs 1.5 × 1000 ÷ 533.37 = 2.8123 g.','VD = wt. of 1 L of gas ÷ wt. of 1 L of H₂ = 2.8123 ÷ 0.09 = 31.25; M = 2 × VD.']},
{id:'s84-19',t:'vd',src:'p.84 · Solved D 19',ref:'p.78',solved:true,type:'num',
 q:'KMnO₄ decomposes on heating according to the equation 2KMnO₄ → K₂MnO₄ + MnO₂ + O₂ [K₂MnO₄ and MnO₂ are the solid residues]. On heating KMnO₄, 1 litre of oxygen was collected at room temp. and it was found that the test tube had undergone a loss in mass of 1.32 g. If one litre of hydrogen under the same conditions of temp. and press. has a mass of 0.0825 g, calculate the relative molecular mass of oxygen.',
 hint:'The loss in mass is the mass of the O₂ that escaped. VD = mass of 1 L O₂ ÷ mass of 1 L H₂.',
 parts:[{l:'Relative molecular mass of O₂',a:32,u:'g'}],
 steps:['The solids stay in the tube, so the loss in mass (1.32 g) = mass of 1 L of O₂.','VD of oxygen = wt. of 1 L of O₂ ÷ wt. of 1 L of H₂ (same T, P).','VD = 1.32 ÷ 0.0825 = 16.','Relative molecular mass = 2 × VD.']},

/* ===== Additional problems Q.2 (p.86) ===== */
{id:'a86-2-1',t:'molvol',src:'p.86 · Q.2 (1)',ref:'p.79–80',type:'num',
 q:'Calculate the mass of 2.8 litres of CO₂ at s.t.p. [C = 12, O = 16]',
 hint:'Volume → moles (÷ 22.4) → mass (× molar mass of CO₂).',
 parts:[{l:'Mass of CO₂',a:5.5,u:'g'}],
 steps:['Molar mass of CO₂ = 12 + 2 × 16 = 44 g.','Moles = 2.8 ÷ 22.4 = 0.125 mol.','Mass = 0.125 × 44.']},
{id:'a86-2-2',t:'molvol',src:'p.86 · Q.2 (2)',ref:'p.79–80',type:'num',
 q:'Calculate the volume occupied by 53.5 g of Cl₂ at s.t.p. [Cl = 35.5]',
 hint:'Mass → moles (÷ 71, chlorine is diatomic) → volume (× 22.4 L).',
 parts:[{l:'Volume',a:53.5/71*22.4,show:'16.88',u:'L'}],
 steps:['Molar mass of Cl₂ = 2 × 35.5 = 71 g.','Moles = 53.5 ÷ 71 = 0.7535 mol.','Volume = 0.7535 × 22.4 L.'],
 exp:'Book prints 16.87 L; the exact calculation gives 16.88 L (rounding).'},
{id:'a86-2-3',t:'mole',src:'p.86 · Q.2 (3)',ref:'p.76',type:'num',
 q:'Calculate the number of molecules in 109.5 g of HCl. [H = 1, Cl = 35.5]',
 hint:'Mass → moles (÷ 36.5) → molecules (× 6.023 × 10²³).',
 parts:[{l:'Molecules',a:3*NA,show:'3 × 6.023 × 10²³',u:'molecules'}],
 steps:['Molar mass of HCl = 1 + 35.5 = 36.5 g.','Moles = 109.5 ÷ 36.5 = 3.','Molecules = 3 × 6.023 × 10²³.']},
{id:'a86-2-4',t:'mole',src:'p.86 · Q.2 (4)',ref:'p.76',type:'num',
 q:'Calculate the number of i] molecules ii] atoms in 192 g of sulphur [S₈]. [S = 32]',
 hint:'Sulphur exists as S₈: molar mass 256. Molecules from moles, atoms = 8 × molecules.',
 parts:[{l:'i] Molecules',a:0.75*NA,show:'0.75 × 6.023 × 10²³',u:'molecules'},{l:'ii] Atoms',a:6*NA,show:'6 × 6.023 × 10²³',u:'atoms'}],
 steps:['Molar mass of S₈ = 8 × 32 = 256 g.','Moles of S₈ = 192 ÷ 256 = 0.75 → molecules = 0.75 × 6.023 × 10²³.','Each S₈ molecule has 8 atoms → atoms = 8 × 0.75 × 6.023 × 10²³ (= 192 ÷ 32 = 6 mol of atoms).']},
{id:'a86-2-5',t:'mole',src:'p.86 · Q.2 (5)',ref:'p.76',type:'num',
 q:'Calculate the mass of Na which will contain 6.023 × 10²³ atoms. [Na = 23]',
 hint:'6.023 × 10²³ atoms is exactly one mole of atoms.',
 parts:[{l:'Mass of Na',a:23,u:'g'}],
 steps:['6.023 × 10²³ atoms = 1 mole of sodium atoms.','1 mole of atoms weighs 1 gram atomic mass = 23 g.']},
{id:'a86-2-6',t:'mole',src:'p.86 · Q.2 (6)',ref:'p.76',type:'num',
 q:'Calculate the number of atoms of potassium present in 117 g of K. [K = 39]',
 hint:'Mass → moles of atoms (÷ 39) → atoms.',
 parts:[{l:'Atoms',a:3*NA,show:'3 × 6.023 × 10²³',u:'atoms'}],
 steps:['Moles of K = 117 ÷ 39 = 3.','Atoms = 3 × 6.023 × 10²³.']},
{id:'a86-2-7',t:'mole',src:'p.86 · Q.2 (7)',ref:'p.76',type:'num',
 q:'Calculate the number of moles and molecules in 19.86 g of Pb(NO₃)₂. [Pb = 207, N = 14, O = 16]',
 hint:'Molar mass of Pb(NO₃)₂ first (the bracket doubles NO₃), then moles, then molecules.',
 parts:[{l:'Moles',a:0.06,u:'mol'},{l:'Molecules',a:0.06*NA,show:'0.06 × 6.023 × 10²³',u:'molecules'}],
 steps:['Molar mass of Pb(NO₃)₂ = 207 + 2 × (14 + 48) = 331 g.','Moles = 19.86 ÷ 331 = 0.06.','Molecules = 0.06 × 6.023 × 10²³.']},
{id:'a86-2-8',t:'mole',src:'p.86 · Q.2 (8)',ref:'p.76',type:'num',
 q:'Calculate the mass of an atom of lead. [Pb = 202]',
 hint:'Mass of 1 atom = gram atomic mass ÷ 6.023 × 10²³.',
 parts:[{l:'Mass of 1 atom',a:202/NA,show:'33.53 × 10⁻²³',u:'g'}],
 steps:['1 mole of Pb atoms = 202 g and contains 6.023 × 10²³ atoms.','Mass of 1 atom = 202 ÷ 6.023 × 10²³ = 3.353 × 10⁻²².'],
 exp:'The book uses Pb = 202 here (the usual value is 207); the answer follows the data given.'},
{id:'a86-2-9',t:'mole',src:'p.86 · Q.2 (9)',ref:'p.76',type:'num',
 q:'Calculate the number of molecules in 1½ litres of water. [density of water 1.0 g/cc, ∴ mass of water = vol. × density]',
 hint:'Volume → mass (1 cc = 1 g) → moles (÷ 18) → molecules. Water is a liquid: do NOT use 22.4 L!',
 parts:[{l:'Molecules',a:1500/18*NA,show:'83.33 × 6.023 × 10²³',u:'molecules'}],
 steps:['1.5 L = 1500 cc; mass = 1500 × 1.0 = 1500 g.','Molar mass of H₂O = 18 g → moles = 1500 ÷ 18 = 83.33.','Molecules = 83.33 × 6.023 × 10²³.']},
{id:'a86-2-10',t:'ram',src:'p.86 · Q.2 (10)',ref:'p.75, 79',type:'num',
 q:'Calculate the gram-atoms in 88.75 g of chlorine. [Cl = 35.5]',
 hint:'Gram atoms = mass ÷ relative ATOMIC mass (35.5, not 71).',
 parts:[{l:'Gram atoms',a:2.5,u:'g. atoms'}],
 steps:['Gram atoms = mass in grams ÷ relative atomic mass.','= 88.75 ÷ 35.5.']},
{id:'a86-2-11',t:'mole',src:'p.86 · Q.2 (11)',ref:'p.76',type:'num',
 q:'Calculate the number of hydrogen atoms in 0.25 mole of H₂SO₄.',
 hint:'Each H₂SO₄ molecule has 2 H atoms: moles of H atoms = 2 × moles of H₂SO₄.',
 parts:[{l:'H atoms',a:0.5*NA,show:'0.5 × 6.023 × 10²³',u:'atoms'}],
 steps:['1 molecule of H₂SO₄ contains 2 atoms of hydrogen.','Moles of H atoms = 2 × 0.25 = 0.5 mol.','H atoms = 0.5 × 6.023 × 10²³.']},
{id:'a86-2-12',t:'ram',src:'p.86 · Q.2 (12)',ref:'p.75, 79',type:'num',
 q:'Calculate the gram molecules in 21 g of nitrogen. [N = 14]',
 hint:'Gram molecules = mass ÷ relative MOLECULAR mass of N₂ (28).',
 parts:[{l:'Gram molecules',a:0.75,u:'g. molecules'}],
 steps:['Relative molecular mass of N₂ = 2 × 14 = 28.','Gram molecules = 21 ÷ 28.']},
{id:'a86-2-13',t:'molvol',src:'p.86 · Q.2 (13)',ref:'p.76, 79',type:'num',
 q:'Calculate the number of atoms in 10 litres of ammonia at s.t.p. [N = 14, H = 1]',
 hint:'Volume → moles (÷ 22.4) → molecules; NH₃ has 4 atoms per molecule.',
 parts:[{l:'Atoms',a:10/22.4*4*NA,show:'1.786 × 6.023 × 10²³',u:'atoms'}],
 steps:['Moles of NH₃ = 10 ÷ 22.4 = 0.4464 mol.','Each NH₃ molecule has 1 N + 3 H = 4 atoms.','Moles of atoms = 4 × 0.4464 = 1.786 → atoms = 1.786 × 6.023 × 10²³.']},
{id:'a86-2-14',t:'mole',src:'p.86 · Q.2 (14)',ref:'p.76',type:'num',
 q:'Calculate the number of atoms in 60 g of neon. [Ne = 20]',
 hint:'Neon is monoatomic: moles of atoms = mass ÷ 20.',
 parts:[{l:'Atoms',a:3*NA,show:'3 × 6.023 × 10²³',u:'atoms'}],
 steps:['Neon is monoatomic, gram atomic mass = 20 g.','Moles = 60 ÷ 20 = 3.','Atoms = 3 × 6.023 × 10²³.']},
{id:'a86-2-15',t:'ram',src:'p.86 · Q.2 (15)',ref:'p.75, 79',type:'num',
 q:'Calculate the number of moles of ‘X’ atoms in 93 g of ‘X’. [X is phosphorus = 31]',
 hint:'Moles of atoms (gram atoms) = mass ÷ atomic mass.',
 parts:[{l:'Moles of X atoms',a:3,u:'mol'}],
 steps:['Moles of atoms = mass ÷ relative atomic mass.','= 93 ÷ 31.']},
{id:'a86-2-16',t:'molvol',src:'p.86 · Q.2 (16)',ref:'p.79',type:'num',
 q:'Calculate the volume occupied by 3.5 g of O₂ gas at 27 °C and 740 mm pressure. [O = 16]',
 hint:'Find the volume at s.t.p. first (moles × 22.4), then convert to 27 °C and 740 mm with P₁V₁/T₁ = P₂V₂/T₂.',
 parts:[{l:'Volume',a:2.765,show:'2.76',u:'L'}],
 steps:['Moles of O₂ = 3.5 ÷ 32 = 0.1094 mol.','Volume at s.t.p. = 0.1094 × 22.4 = 2.45 L.','760 × 2.45 ÷ 273 = 740 × V ÷ 300.','V = 2.45 × 760 × 300 ÷ (273 × 740).']},
{id:'a86-2-17',t:'mole',src:'p.86 · Q.2 (17)',ref:'p.76',type:'num',
 q:'Calculate the moles of sodium hydroxide contained in 160 g of it. [Na = 23, O = 16, H = 1]',
 hint:'Moles = mass ÷ molar mass of NaOH.',
 parts:[{l:'Moles',a:4,u:'mol'}],
 steps:['Molar mass of NaOH = 23 + 16 + 1 = 40 g.','Moles = 160 ÷ 40.']},
{id:'a86-2-18',t:'mole',src:'p.86 · Q.2 (18)',ref:'p.76',type:'num',
 q:'Calculate the weight in g of 2.5 moles of ethane [C₂H₆]. [C = 12, H = 1]',
 hint:'Mass = moles × molar mass.',
 parts:[{l:'Weight',a:75,u:'g'}],
 steps:['Molar mass of C₂H₆ = 2 × 12 + 6 × 1 = 30 g.','Mass = 2.5 × 30.']},
{id:'a86-2-19',t:'molvol',src:'p.86 · Q.2 (19)',ref:'p.79',type:'num',
 q:'Calculate the molecular weight of 2.6 g of a gas which occupies 2.24 litres at 0 °C and 760 mm pressure.',
 hint:'0 °C and 760 mm is s.t.p. Scale the mass up to 22.4 L.',
 parts:[{l:'Molecular weight',a:26,u:'g'}],
 steps:['0 °C and 760 mm = s.t.p., where 1 g. mol. wt. occupies 22.4 L.','2.24 L weighs 2.6 g.','22.4 L weighs 2.6 × 22.4 ÷ 2.24.']},
{id:'a86-2-20',t:'ram',src:'p.86 · Q.2 (20)',ref:'p.75, 79',type:'num',
 q:'Calculate the gram atoms in 46 g of sodium. [Na = 23]',
 hint:'Gram atoms = mass ÷ atomic mass.',
 parts:[{l:'Gram atoms',a:2,u:'g. atoms'}],
 steps:['Gram atoms = mass in grams ÷ relative atomic mass.','= 46 ÷ 23.']},
{id:'a86-2-21',t:'mole',src:'p.86 · Q.2 (21)',ref:'p.76',type:'num',
 q:'Calculate the number of moles of KClO₃ that will be required to give 6 moles of oxygen.',
 hint:'Write the balanced equation 2KClO₃ → 2KCl + 3O₂ and use the mole ratio.',
 parts:[{l:'Moles of KClO₃',a:4,u:'mol'}],
 steps:['2KClO₃ → 2KCl + 3O₂.','2 moles KClO₃ give 3 moles O₂.','Moles of KClO₃ for 6 moles O₂ = 2 × 6 ÷ 3.']},
{id:'a86-2-22',t:'molvol',src:'p.86 · Q.2 (22)',ref:'p.79',type:'num',
 q:'Calculate the weight of the substance if its molecular weight is 70 and in the gaseous form it occupies 10 litres at 27 °C and 700 mm pressure.',
 hint:'Convert 10 L to s.t.p. (P₁V₁/T₁ = P₂V₂/T₂), then 70 g ↔ 22.4 L.',
 parts:[{l:'Weight',a:26.19,show:'26.18',u:'g'}],
 steps:['P₁ = 700 mm, V₁ = 10 L, T₁ = 300 K; P₂ = 760 mm, T₂ = 273 K.','V₂ = 700 × 10 × 273 ÷ (300 × 760) = 8.38 L at s.t.p.','70 g occupies 22.4 L at s.t.p.','Mass = 8.38 × 70 ÷ 22.4.']},
{id:'a86-2-23',t:'mole',src:'p.86 · Q.2 (23)',ref:'p.76',type:'mcq',
 q:'State which has the higher number of moles: 5 g of N₂O or 5 g of NO? [N = 14, O = 16]',
 hint:'Same mass: the one with the smaller molar mass has more moles.',
 opts:['5 g of N₂O','5 g of NO'],ans:1,
 exp:'N₂O = 44 g/mol → 5/44 = 0.114 mol; NO = 30 g/mol → 5/30 = 0.167 mol. Same mass, smaller molar mass → more moles.'},
{id:'a86-2-24',t:'mole',src:'p.86 · Q.2 (24)',ref:'p.76',type:'mcq',
 q:'State which has a higher mass: 1 mole of CO₂ or 1 mole of CO? [C = 12, O = 16]',
 hint:'1 mole weighs its gram molecular mass.',
 opts:['1 mole of CO₂','1 mole of CO'],ans:0,
 exp:'1 mole CO₂ = 44 g; 1 mole CO = 28 g.'},
{id:'a86-2-25',t:'mole',src:'p.86 · Q.2 (25)',ref:'p.76',type:'mcq',
 q:'State which has a higher number of atoms: 1 g of O₂ or 1 g of Cl₂? [O = 16, Cl = 35.5]',
 hint:'Both are diatomic, so compare the moles of molecules: 1/32 vs 1/71.',
 opts:['1 g of O₂','1 g of Cl₂'],ans:0,
 exp:'1 g O₂ = 1/32 mol → 2/32 = 0.0625 mol atoms; 1 g Cl₂ = 1/71 mol → 2/71 = 0.028 mol atoms. O₂ has more atoms.'},

/* ===== Additional problems Q.3 (p.86) ===== */
{id:'a86-3-1',t:'vd',src:'p.86 · Q.3 (1)',ref:'p.78',type:'num',
 q:'500 ml of a gas ‘X’ at s.t.p. weighs 0.50 g. Calculate the vapour density and molecular weight of the gas. [1 lit. of H₂ at s.t.p. weighs 0.09 g]',
 hint:'Find the mass of 1 L at s.t.p.; VD = that ÷ 0.09; M = 2 × VD.',
 parts:[{l:'Vapour density',a:1/0.09,show:'11.1',u:''},{l:'Molecular weight',a:2/0.09,show:'22.2',u:'g'}],
 steps:['500 ml weighs 0.50 g, so 1000 ml (1 L) weighs 1.0 g at s.t.p.','VD = wt. of 1 L of gas ÷ wt. of 1 L of H₂ = 1.0 ÷ 0.09 = 11.1.','Molecular weight = 2 × VD.']},
{id:'a86-3-2',t:'vd',src:'p.86 · Q.3 (2)',ref:'p.78',type:'num',
 q:'A gas cylinder holds 85 g of a gas ‘X’. The same cylinder when filled with hydrogen holds 8.5 g of hydrogen under the same conditions of temperature and pressure. Calculate the molecular weight of ‘X’.',
 hint:'Same cylinder → VD = mass of X ÷ mass of H₂; M = 2 × VD.',
 parts:[{l:'Molecular weight',a:20,u:'g'}],
 steps:['VD = wt. of gas ÷ wt. of the same volume of H₂ = 85 ÷ 8.5 = 10.','Molecular weight = 2 × VD = 2 × 10.']},
{id:'a86-3-3',t:'vd',src:'p.86 · Q.3 (3)',ref:'p.78–79',type:'num',
 q:'Calculate the relative molecular mass (molecular weight) of 290 ml of a gas ‘A’ at 17 °C and 1520 mm pressure which weighs 2.73 g at s.t.p. [1 litre of hydrogen at s.t.p. weighs 0.09 g]',
 hint:'Convert 290 ml at 17 °C, 1520 mm to s.t.p.; find the mass of 1 L at s.t.p.; VD = ÷ 0.09; M = 2 × VD.',
 parts:[{l:'Molecular weight',a:2.73/0.546/0.09*2,show:'111.11',u:'g'}],
 steps:['P₁ = 1520 mm, V₁ = 290 ml, T₁ = 17 + 273 = 290 K; P₂ = 760 mm, T₂ = 273 K.','V₂ = 1520 × 290 × 273 ÷ (290 × 760) = 546 ml at s.t.p.','1000 ml at s.t.p. weighs 2.73 × 1000 ÷ 546 = 5.0 g.','VD = 5.0 ÷ 0.09 = 55.56; M = 2 × VD.'],
 exp:'The wording is a little ambiguous: “weighs 2.73 g at s.t.p.” means this sample (290 ml at 17 °C, 1520 mm = 546 ml at s.t.p.) has a mass of 2.73 g. Using 22.4 L directly gives 5.0 × 22.4 = 112; the book’s 111.11 comes from 1 L of H₂ = 0.09 g.'},
{id:'a86-3-4',t:'vd',src:'p.86 · Q.3 (4)',ref:'p.78–79',type:'num',
 q:'State the volume occupied by 40 g of a hydrocarbon CH₄ at s.t.p. if its V.D. is 8.',
 hint:'M = 2 × VD → moles = 40 ÷ M → volume = moles × 22.4.',
 parts:[{l:'Volume',a:56,u:'L'}],
 steps:['Molecular weight = 2 × VD = 2 × 8 = 16.','Moles = 40 ÷ 16 = 2.5 mol.','Volume = 2.5 × 22.4 L.']},
{id:'a86-3-5',t:'vd',src:'p.86 · Q.3 (5)',ref:'p.77–78',type:'num',
 q:'Calculate the atomicity of a gas X [at. mass 35.5] whose vapour density is equal to its relative atomic mass.',
 hint:'VD = 35.5 → M = 2 × VD; atomicity = M ÷ atomic mass.',
 parts:[{l:'Atomicity',a:2,u:''}],
 steps:['VD = relative atomic mass = 35.5.','Molecular weight = 2 × VD = 71.','Atomicity = molecular weight ÷ atomic weight = 71 ÷ 35.5.']},
{id:'a86-3-6',t:'vd',src:'p.86 · Q.3 (6)',ref:'p.78–79',type:'num',
 q:'Calculate the relative molecular mass and vapour density of methyl alcohol [CH₃OH] if 160 g of the alcohol on vaporization has a volume of 112 litres at s.t.p.',
 hint:'Moles = 112 ÷ 22.4; M = mass ÷ moles; VD = M ÷ 2.',
 parts:[{l:'Relative molecular mass',a:32,u:'g'},{l:'Vapour density',a:16,u:''}],
 steps:['Moles of vapour = 112 ÷ 22.4 = 5 mol.','Gram molecular mass = 160 ÷ 5 = 32 g.','VD = molecular mass ÷ 2.']},

/* ===== Previous ICSE questions B (p.99) ===== */
{id:'pB-2009-1',t:'molvol',src:'p.99 · B · 2009 Q1',ref:'p.76, 79',type:'num',
 q:'Define the term mole. A gas cylinder contains 24 × 10²⁴ molecules of nitrogen gas. If Avogadro’s number is 6 × 10²³ and the relative atomic mass of N is 14, calculate: i] the mass of nitrogen gas in the cylinder ii] the volume of nitrogen at STP in dm³.',
 hint:'Molecules → moles (÷ 6 × 10²³) → mass (× 28) and volume (× 22.4).',
 parts:[{l:'i] Mass',a:1120,u:'g'},{l:'ii] Volume',a:896,u:'dm³'}],
 steps:['Moles of N₂ = 24 × 10²⁴ ÷ 6 × 10²³ = 40 mol.','Molar mass of N₂ = 28 g → mass = 40 × 28.','Volume = 40 × 22.4 dm³.'],
 exp:'Definition: a mole is the amount of substance which contains the same number of units as the number of atoms in 12.000 g of carbon-12, i.e. 6.023 × 10²³ particles.'},
{id:'pB-2009-2',t:'molvol',src:'p.99 · B · 2009 Q2',ref:'p.79',type:'num',
 q:'Gas ‘X’ occupies a volume of 100 cm³ at S.T.P. and weighs 0.5 g. Find its relative molecular mass.',
 hint:'Scale the mass up to 22 400 cm³.',
 parts:[{l:'Relative molecular mass',a:112,u:''}],
 steps:['1 g. mol. wt. occupies 22 400 cm³ at s.t.p.','100 cm³ weighs 0.5 g.','22 400 cm³ weighs 0.5 × 22 400 ÷ 100.']},
{id:'pB-2010-1',t:'mole',src:'p.99 · B · 2010 Q1',ref:'p.76, 79',type:'num',
 q:'Dil. HCl is reacted with 4.5 moles of CaCO₃ (CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂). Calculate i] the mass of 4.5 moles of CaCO₃ ii] the volume of CO₂ liberated at stp iii] the mass of CaCl₂ formed iv] the no. of moles of the acid HCl used in the reaction. [relative molecular mass of CaCO₃ is 100 and of CaCl₂ is 111]',
 hint:'Use the mole ratio CaCO₃ : HCl : CaCl₂ : CO₂ = 1 : 2 : 1 : 1.',
 parts:[{l:'i] Mass of CaCO₃',a:450,u:'g'},{l:'ii] Volume of CO₂',a:100.8,u:'L'},{l:'iii] Mass of CaCl₂',a:499.5,u:'g'},{l:'iv] Moles of HCl',a:9,u:'mol'}],
 steps:['CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂: 1 mol CaCO₃ gives 1 mol CO₂ and 1 mol CaCl₂ and uses 2 mol HCl.','i] Mass = 4.5 × 100 = 450 g.','ii] CO₂ = 4.5 mol → 4.5 × 22.4 = 100.8 L.','iii] CaCl₂ = 4.5 × 111 = 499.5 g; iv] HCl = 2 × 4.5 = 9 mol.']},
{id:'pB-2011-1',t:'mole',src:'p.99 · B · 2011 Q1',ref:'p.76',type:'num',
 q:'Calculate the mass of i] 10²² atoms of sulphur ii] 0.1 mole of carbon dioxide. [S = 32, C = 12, O = 16 and Avogadro’s number = 6 × 10²³]',
 hint:'Atoms → moles (÷ 6 × 10²³) → mass (× 32). Moles → mass (× 44).',
 parts:[{l:'i] Mass of S',a:1e22/6e23*32,show:'0.533',u:'g'},{l:'ii] Mass of CO₂',a:4.4,u:'g'}],
 steps:['Moles of S atoms = 10²² ÷ 6 × 10²³ = 0.01667.','Mass of S = 0.01667 × 32 = 0.533 g.','Molar mass of CO₂ = 44 g → mass = 0.1 × 44.']},
{id:'pB-2011-2',t:'molvol',src:'p.99 · B · 2011 Q2',ref:'p.79',type:'num',
 q:'Calculate the volume of 320 g of SO₂ at stp. [S = 32 and O = 16]',
 hint:'Mass → moles (÷ 64) → volume (× 22.4).',
 parts:[{l:'Volume',a:112,u:'L'}],
 steps:['Molar mass of SO₂ = 32 + 32 = 64 g.','Moles = 320 ÷ 64 = 5.','Volume = 5 × 22.4 L.']},
{id:'pB-2012-1',t:'molvol',src:'p.99 · B · 2012 Q1',ref:'p.79',type:'num',
 q:'The mass of 5.6 dm³ of a gas at stp is 12.0 g. Calculate the relative molecular mass of the gas.',
 hint:'Scale the mass up to 22.4 dm³.',
 parts:[{l:'Relative molecular mass',a:48,u:''}],
 steps:['1 g. mol. wt. occupies 22.4 dm³ at s.t.p.','5.6 dm³ weighs 12.0 g → 22.4 dm³ weighs 12.0 × 22.4 ÷ 5.6.']},
{id:'pB-2013-1',t:'vd',src:'p.99 · B · 2013 Q1',ref:'p.78–79',type:'num',
 q:'The vapour density of a gas is 8. What would be the volume occupied by 24.0 g of the gas at STP?',
 hint:'M = 2 × VD → moles → volume.',
 parts:[{l:'Volume',a:33.6,u:'L'}],
 steps:['Molecular weight = 2 × VD = 16.','Moles = 24.0 ÷ 16 = 1.5.','Volume = 1.5 × 22.4 L.']},
{id:'pB-2013-2',t:'molvol',src:'p.99 · B · 2013 Q2',ref:'p.79',type:'num',
 q:'Calculate the volume occupied by 0.01 mole of CO₂ at STP.',
 hint:'Moles × 22.4 L.',
 parts:[{l:'Volume',a:0.224,u:'L'}],
 steps:['1 mole of any gas occupies 22.4 L at s.t.p.','Volume = 0.01 × 22.4 L.']},
{id:'pB-2014-1',t:'molvol',src:'p.99 · B · 2014 Q1',ref:'p.74, 79',type:'num',
 q:'State Avogadro’s Law. A cylinder contains 68 g of ammonia gas at s.t.p. i] What is the volume occupied by this gas? ii] How many moles and molecules of NH₃ are present in the cylinder? [N = 14, H = 1]',
 hint:'Mass → moles (÷ 17) → volume (× 22.4) and molecules (× 6.023 × 10²³).',
 parts:[{l:'i] Volume',a:89.6,u:'L'},{l:'ii] Moles',a:4,u:'mol'},{l:'ii] Molecules',a:4*NA,show:'4 × 6.023 × 10²³',u:'molecules'}],
 steps:['Molar mass of NH₃ = 14 + 3 = 17 g.','Moles = 68 ÷ 17 = 4.','Volume = 4 × 22.4 L; molecules = 4 × 6.023 × 10²³.'],
 exp:'Avogadro’s law: under the same conditions of temperature and pressure, equal volumes of all gases contain the same number of molecules.'},
{id:'pB-2015-1',t:'mole',src:'p.99 · B · 2015 Q1',ref:'p.76, 79',type:'mcq',
 q:'From A, B, C, D, which weighs the least? [Ag = 108, N = 14, O = 16, C = 12]',
 hint:'Turn each into grams: gram atoms × atomic mass; moles × molar mass; 22.4 L at s.t.p. = 1 mole.',
 opts:['A: 2 g. atoms of nitrogen','B: 1 mole of silver','C: 22.4 L of O₂ gas at 1 atmos. press. and 273 K','D: 6.02 × 10²³ atoms of carbon'],ans:3,
 exp:'A = 2 × 14 = 28 g; B = 108 g; C = 1 mole O₂ = 32 g; D = 1 mole C atoms = 12 g (least).'},
{id:'pB-2015-2',t:'mole',src:'p.99 · B · 2015 Q2',ref:'p.76',type:'num',
 q:'Calculate the mass of calcium that will contain the same number of atoms as are present in 3.2 g of sulphur. [S = 32, Ca = 40]',
 hint:'Same number of atoms = same moles of atoms.',
 parts:[{l:'Mass of Ca',a:4,u:'g'}],
 steps:['Moles of S atoms = 3.2 ÷ 32 = 0.1.','Same number of atoms → 0.1 mol of Ca atoms.','Mass of Ca = 0.1 × 40.']},
{id:'pB-2016-1',t:'mole',src:'p.99 · B · 2016 Q1',ref:'p.76',type:'mcq',
 q:'The ratio between the number of molecules in 2 g of hydrogen and 32 g of oxygen is: [H = 1, O = 16]',
 hint:'Find the moles of each.',
 opts:['A 1 : 2','B 1 : 0.01','C 1 : 1','D 0.01 : 1'],ans:2,
 exp:'2 g H₂ = 1 mol, 32 g O₂ = 1 mol → equal numbers of molecules, 1 : 1.'},
{id:'pB-2016-2',t:'molvol',src:'p.99 · B · 2016 Q2',ref:'p.79',type:'num',
 q:'A gas of mass 32 gms has a volume of 20 litres at S.T.P. Calculate the gram mol. weight of the gas.',
 hint:'Scale the mass up to 22.4 L.',
 parts:[{l:'Gram molecular weight',a:35.84,u:'g'}],
 steps:['1 g. mol. wt. occupies 22.4 L at s.t.p.','20 L weighs 32 g → 22.4 L weighs 32 × 22.4 ÷ 20.']},
{id:'pB-2016-3',t:'molvol',src:'p.99 · B · 2016 Q3',ref:'p.76, 79',type:'num',
 q:'A gas cylinder contains 12 × 10²⁴ molecules of O₂ gas. Calculate: i] the mass of O₂ in the cylinder ii] the volume of O₂ at S.T.P. present in the cylinder. [O = 16]',
 hint:'Molecules → moles (÷ Avogadro’s number) → mass (× 32) and volume (× 22.4).',
 parts:[{l:'i] Mass',a:640,u:'g'},{l:'ii] Volume',a:448,u:'L'}],
 steps:['Moles of O₂ = 12 × 10²⁴ ÷ 6 × 10²³ = 20 mol.','Mass = 20 × 32 g.','Volume = 20 × 22.4 L.'],
 exp:'The book’s answers (640 g, 448 L) take Avogadro’s number as 6 × 10²³. With 6.023 × 10²³ you get 19.92 mol → 637.6 g and 446.3 L; both are accepted.'},
{id:'pB-2017-1',t:'ram',src:'p.99 · B · 2017 Q1',ref:'p.75, 79',type:'num',
 q:'Calculate the number of gram atoms in 4.6 grams of sodium. [Na = 23]',
 hint:'Gram atoms = mass ÷ atomic mass.',
 parts:[{l:'Gram atoms',a:0.2,u:'g. atoms'}],
 steps:['Gram atoms = mass in grams ÷ relative atomic mass.','= 4.6 ÷ 23.'],
 exp:'The book’s answer column gives this as 0.2 × 6.023 × 10²³ atoms; 0.2 gram atom contains 0.2 × 6.023 × 10²³ atoms.'},
{id:'pB-2017-2',t:'molvol',src:'p.99 · B · 2017 Q2',ref:'p.79',type:'num',
 q:'The mass of 11.2 litres of a certain gas at s.t.p. is 24 g. Find the gram molecular mass of the gas.',
 hint:'11.2 L is half a mole.',
 parts:[{l:'Gram molecular mass',a:48,u:'g'}],
 steps:['11.2 L at s.t.p. = 11.2 ÷ 22.4 = 0.5 mol.','Gram molecular mass = 24 ÷ 0.5.']},
{id:'pB-2019-1',t:'mole',src:'p.99 · B · 2019 Q1',ref:'p.76',type:'num',
 q:'Calculate: i] the number of moles in 12 g of oxygen gas [O = 16] ii] the weight of 10²² atoms of carbon. [C = 12, Avogadro’s No. = 6.023 × 10²³]',
 hint:'Oxygen gas is O₂ (32 g/mol). Atoms → moles → mass.',
 parts:[{l:'i] Moles',a:0.375,u:'mol'},{l:'ii] Weight',a:1e22/NA*12,show:'0.2',u:'g'}],
 steps:['i] Molar mass of O₂ = 32 g → moles = 12 ÷ 32.','ii] Moles of C atoms = 10²² ÷ 6.023 × 10²³ = 0.0166.','Weight = 0.0166 × 12 = 0.199 g.']},
{id:'pB-2020-1',t:'molvol',src:'p.99 · B · 2020 Q1',ref:'p.79',type:'num',
 q:'Calculate the volume occupied by 80 g of carbon dioxide at STP.',
 hint:'Mass → moles (÷ 44) → volume (× 22.4).',
 parts:[{l:'Volume',a:80/44*22.4,show:'40.73',u:'L'}],
 steps:['Molar mass of CO₂ = 44 g.','Moles = 80 ÷ 44 = 1.818.','Volume = 1.818 × 22.4 L.']},
{id:'pB-2020-2',t:'mole',src:'p.99 · B · 2020 Q2',ref:'p.76',type:'num',
 q:'Calculate the number of molecules in 4.4 gm of CO₂. [C = 12, O = 16]',
 hint:'Mass → moles → molecules.',
 parts:[{l:'Molecules',a:0.1*NA,show:'6.023 × 10²²',u:'molecules'}],
 steps:['Molar mass of CO₂ = 44 g.','Moles = 4.4 ÷ 44 = 0.1.','Molecules = 0.1 × 6.023 × 10²³.']},
{id:'pB-2020-3',t:'mole',src:'p.99 · B · 2020 Q3',ref:'p.76',type:'mcq',
 q:'Fill in the blank: The number of moles in 11 gm of nitrogen gas is ____. [N = 14]',
 hint:'Nitrogen gas is N₂ (28 g/mol).',
 opts:['0.39','0.49','0.29'],ans:0,
 exp:'11 ÷ 28 = 0.39 moles.'},
{id:'pB-2020-4',t:'vd',src:'p.99 · B · 2020 Q4',ref:'p.78–79',type:'num',
 q:'i] State the volume occupied by 40 gm of methane at S.T.P., if its vapour density (V.D.) is 8. ii] Calculate the number of moles present in 160 gm of NaOH. [Na = 23, H = 1, O = 16]',
 hint:'i] M = 2 × VD → moles → × 22.4. ii] mass ÷ molar mass.',
 parts:[{l:'i] Volume',a:56,u:'L'},{l:'ii] Moles of NaOH',a:4,u:'mol'}],
 steps:['i] M = 2 × 8 = 16 → moles of CH₄ = 40 ÷ 16 = 2.5.','Volume = 2.5 × 22.4 L.','ii] Molar mass of NaOH = 40 g → moles = 160 ÷ 40.']},
{id:'pB-2024-1',t:'molvol',src:'p.99 · B · 2024 Q1',ref:'p.79',type:'open',
 q:'Define the term: Molar volume.',
 hint:'Think: the volume of ONE mole (1 gram molecular weight) of a gas, under which conditions?',
 model:'Molar volume is the volume occupied by one gram molecular weight (one mole) of a gas at s.t.p. It is 22.4 litres (22.4 dm³).'},
{id:'pB-2024-2',t:'molvol',src:'p.99 · B · 2024 Q2',ref:'p.76, 79',type:'mcq',
 q:'Which of the following would occupy 22.4 litres at S.T.P.? i] 32 g of oxygen gas ii] 2 moles of hydrogen gas iii] 6.022 × 10²³ moles of ammonia [O = 16, H = 1, N = 14]',
 hint:'22.4 L at s.t.p. = exactly 1 mole of gas.',
 opts:['1 & 2','1 & 3','2 & 3','1, 2 & 3'],ans:1,
 exp:'32 g O₂ = 1 mole (22.4 L). 2 moles H₂ = 44.8 L. 6.022 × 10²³ (molecules) of ammonia = 1 mole (22.4 L). The printed “moles of ammonia” is meant as “molecules”, so the answer is b] 1 & 3.'},
{id:'pB-2024-3',t:'mole',src:'p.99 · B · 2024 Q3',ref:'p.76',type:'word',
 q:'State the term: The amount of substance which contains the same no. of units as the no. of atoms in carbon-12.',
 hint:'The chemist’s “counting unit”, like a dozen.',
 accept:['mole','a mole','the mole','mol'],ansText:'Mole'},
{id:'pB-2024-4',t:'mole',src:'p.99 · B · 2024 Q4',ref:'p.76, 79',type:'num',
 q:'Calcium carbonate reacts with dilute hydrochloric acid as given: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. [Relative molecular mass of CaCO₃ is 100] i] What is the mass of 5 moles of calcium carbonate? ii] How many moles of HCl will react with 5 moles of calcium carbonate? iii] What is the volume of carbon dioxide liberated at S.T.P. at the same time?',
 hint:'Mole ratio CaCO₃ : HCl : CO₂ = 1 : 2 : 1.',
 parts:[{l:'i] Mass of CaCO₃',a:500,u:'g'},{l:'ii] Moles of HCl',a:10,u:'mol'},{l:'iii] Volume of CO₂',a:112,u:'L'}],
 steps:['i] Mass = 5 × 100 g.','ii] 1 mol CaCO₃ reacts with 2 mol HCl → 2 × 5 mol.','iii] 1 mol CaCO₃ gives 1 mol CO₂ → 5 mol × 22.4 L.']},

/* ===== Previous ICSE questions C (p.100) ===== */
{id:'pC-2002-1',t:'av',src:'p.100 · C · 2002 Q1',ref:'p.74, 79',type:'num',
 q:'Samples of O₂, N₂, CO and CO₂ under the same conditions of temp. and press. contain the same no. of molecules represented by X. The molecules of oxygen occupy V litres and have a mass of 8 g. Under the same conditions of temp. and press., what is the volume occupied by: i] X molecules of N₂ ii] 3X molecules of CO iii] What is the mass of CO₂ in g? iv] In answering the above questions, whose law has been used? [C = 12, N = 14, O = 16]',
 hint:'Same number of molecules → same volume. 8 g O₂ = how many moles? CO₂ has the same number of moles.',
 parts:[{l:'i] Volume of X molecules N₂',a:'V',alt:['Vlitres'],u:'litres'},{l:'ii] Volume of 3X molecules CO',a:'3V',alt:['3Vlitres'],u:'litres'},{l:'iii] Mass of CO₂',a:11,u:'g'},{l:'iv] Law used',...LAW,u:''}],
 steps:['Avogadro’s law: equal numbers of molecules occupy equal volumes (same T, P).','i] X molecules N₂ → V litres; ii] 3X molecules CO → 3V litres.','iii] 8 g O₂ = 8 ÷ 32 = 0.25 mol, so X molecules = 0.25 mol of any gas.','Mass of CO₂ = 0.25 × 44 g.']},
{id:'pC-2005-1',t:'ram',src:'p.100 · C · 2005 Q1',ref:'p.75, 85',type:'open',
 q:'Define the term ‘atomic weight’.',
 hint:'Compare one atom with 1/12 of a carbon-12 atom.',
 model:'Relative atomic mass (atomic weight) of an element is the number of times one atom of the element is heavier than 1/12 the mass of an atom of carbon-12 [C¹²].'},
{id:'pC-2008-1',t:'av',src:'p.100 · C · 2008 Q1',ref:'p.74',type:'mcq',
 q:'The gas law which relates the volume of a gas to the number of molecules of the gas is:',
 hint:'Which law talks about “the same number of molecules”?',
 opts:['A: Avogadro’s Law','B: Gay-Lussac’s Law','C: Boyle’s Law','D: Charles’ Law'],ans:0,
 exp:'Avogadro’s law: equal volumes of all gases at the same T and P contain the same number of molecules.'},
{id:'pC-2009-1',t:'av',src:'p.100 · C · 2009 Q1',ref:'p.74',type:'open',
 q:'Correct the following: Equal masses of all gases under identical conditions contain the same no. of molecules.',
 hint:'Avogadro’s law is about volumes, not masses.',
 model:'Equal <b>volumes</b> of all gases under identical conditions (same temperature and pressure) contain the same number of molecules.'},
{id:'pC-2013-1',t:'av',src:'p.100 · C · 2013 Q1',ref:'p.74',type:'word',
 q:'A vessel contains X number of molecules of H₂ gas at a certain temp. and press. Under the same conditions of temp. and pressure, how many molecules of N₂ gas would be present in the same vessel?',
 hint:'Same vessel = same volume; same T and P.',
 accept:['x','x molecules','x molecules of n2'],ansText:'X molecules (Avogadro’s law: same volume, same T and P → same number of molecules)'},
{id:'pC-2017-1',t:'av',src:'p.100 · C · 2017 Q1',ref:'p.74, 78',type:'num',
 q:'A gas cylinder can hold 1 kg of H₂ at room temp. and press.: i] Find the no. of moles of H₂ present. ii] What weight of CO₂ can the cylinder hold under similar conditions of temp. and press.? iii] If the number of molecules of hydrogen in the cylinder is X, calculate the number of CO₂ molecules in the cylinder under the same conditions of temp. and press. iv] State the law that helped you to arrive at the above result. [H = 1, C = 12, O = 16]',
 hint:'1 kg = 1000 g ÷ 2. The same cylinder holds the same number of moles of CO₂.',
 parts:[{l:'i] Moles of H₂',a:500,u:'mol'},{l:'ii] Weight of CO₂',a:22,u:'kg'},{l:'iii] CO₂ molecules',a:'X',u:'molecules'},{l:'iv] Law',...LAW,u:''}],
 steps:['i] Moles of H₂ = 1000 g ÷ 2 = 500 mol.','Same volume, T and P → same number of moles: 500 mol of CO₂.','ii] Mass of CO₂ = 500 × 44 = 22 000 g = 22 kg (or VD of CO₂ = 22 → 22 × 1 kg).','iii] Same number of molecules as hydrogen (Avogadro’s law).'],
 exp:'Same as solved problem p.84 Q.17.'},
{id:'pC-2018-1',t:'av',src:'p.100 · C · 2018 Q1',ref:'p.74',type:'num',
 q:'If 150 cc of gas A contains X molecules, how many molecules of gas B will be present in 75 cc of B? [Gases under the same conditions of temp. and pressure]. Name the law on which the problem is based.',
 hint:'Molecules ∝ volume (same T, P).',
 parts:[{l:'Molecules of B',a:'X/2',alt:['0.5X'],u:''},{l:'Law',...LAW,u:''}],
 steps:['Avogadro’s law: equal volumes at the same T and P contain equal numbers of molecules.','150 cc of B would contain X molecules.','75 cc is half of 150 cc.']},

/* ===== Previous ICSE questions D (p.100) ===== */
{id:'pD-2004-1',t:'vd',src:'p.100 · D · 2004 Q1',ref:'p.78',type:'num',
 q:'2KMnO₄ → K₂MnO₄ + MnO₂ + O₂ [K₂MnO₄ + MnO₂ are solid residues]. Potassium permanganate was heated in a test tube. After collecting one litre of oxygen at room temp., it was found that the test tube had undergone a loss in mass of 1.32 g. If one litre of H₂ under the same conditions of temp. and pressure has a mass of 0.0825 g, calculate the relative molecular mass of oxygen.',
 hint:'Loss in mass = mass of 1 L O₂. VD = ÷ mass of 1 L H₂; M = 2 × VD.',
 parts:[{l:'Relative molecular mass',a:32,u:'g'}],
 steps:['Loss in mass = mass of 1 L of O₂ = 1.32 g.','VD = 1.32 ÷ 0.0825 = 16.','M = 2 × VD.'],
 exp:'Same as solved problem p.84 Q.19.'},
{id:'pD-2009-1',t:'vd',src:'p.100 · D · 2009 Q1',ref:'p.78',type:'mcq',
 q:'A gas cylinder of capacity 20 dm³ is filled with gas X, the mass of which is 10 g. When the same cylinder is filled with H₂ gas at the same temp. and pressure, the mass of the hydrogen is 2 g. Hence the relative molecular mass of the gas is:',
 hint:'VD = 10 ÷ 2; M = 2 × VD.',
 opts:['A: 5','B: 10','C: 15','D: 20'],ans:1,
 exp:'VD = 10 ÷ 2 = 5 → M = 2 × 5 = 10.'},
{id:'pD-2012-1',t:'vd',src:'p.100 · D · 2012 Q1',ref:'p.78',type:'mcq',
 q:'The vapour density of carbon dioxide [C = 12, O = 16] is:',
 hint:'VD = M ÷ 2.',
 opts:['A: 32','B: 16','C: 44','D: 22'],ans:3,
 exp:'M of CO₂ = 44 → VD = 44 ÷ 2 = 22.'},
{id:'pD-2014-1',t:'vd',src:'p.100 · D · 2014 Q1',ref:'p.78',type:'word',
 q:'Give one word or phrase for: The ratio of the mass of a certain volume of gas to the mass of an equal volume of hydrogen under the same conditions of temperature and pressure.',
 hint:'Two words; the second is “density”.',
 accept:['vapour density','vapor density','vd','v d'],ansText:'Vapour density'},
{id:'pD-2023-1',t:'vd',src:'p.100 · D · 2023 Q1',ref:'p.78',type:'mcq',
 q:'The vapour density of CH₃OH is: [C = 12, H = 1, O = 16]',
 hint:'Molecular mass of CH₃OH first, then halve it.',
 opts:['i] 32','ii] 18','iii] 16','iv] 34'],ans:2,
 exp:'M = 12 + 4 × 1 + 16 = 32 → VD = 16.'},
{id:'pD-2023-2',t:'vd',src:'p.100 · D · 2023 Q2',ref:'p.78',type:'word',
 q:'State the term: The ratio of the mass of a certain volume of gas to the same volume of hydrogen, measured under the same conditions of temperature and pressure.',
 hint:'Same definition as the 2014 question.',
 accept:['vapour density','vapor density','vd','v d'],ansText:'Vapour density'},
{id:'pD-2025-1',t:'vd',src:'p.100 · D · 2025 Q1',ref:'p.78',type:'num',
 q:'A gas cylinder can hold 150 g of hydrogen under certain conditions of temperature and pressure. If an identical cylinder with the same capacity can hold 450 g of gas ‘G’ under the same conditions of temperature and pressure, find: a] the vapour density of the gas ‘G’ b] the molecular weight of gas ‘G’.',
 hint:'Same volume → VD = mass of G ÷ mass of H₂; M = 2 × VD.',
 parts:[{l:'a] Vapour density',a:3,u:''},{l:'b] Molecular weight',a:6,u:'g'}],
 steps:['VD = wt. of a volume of G ÷ wt. of the same volume of H₂.','VD = 450 ÷ 150 = 3.','Molecular weight = 2 × VD.']},
{id:'a97-C',t:'av',src:'p.97 · Summary C problem',ref:'p.74, 97',type:'num',solved:true,
 q:'If 30 lits. of O₂ contains ‘X’ no. of molecules, state the no. of molecules in 10 lits. of H₂, 60 lits. of Cl₂ and 5 lits. of NH₃. All gases collected under the same conditions of temp. & press.',
 hint:'Avogadro’s law: equal volumes → equal numbers of molecules. So molecules ∝ volume.',
 parts:[{l:'10 L H₂',a:'X/3',u:'molecules'},{l:'60 L Cl₂',a:'2X',u:'molecules'},{l:'5 L NH₃',a:'X/6',u:'molecules'}],
 steps:['Avogadro’s law: same T & P → equal volumes contain equal numbers of molecules','30 L ↔ X molecules, so 1 L ↔ X/30 molecules','H₂: 10 × X/30; Cl₂: 60 × X/30; NH₃: 5 × X/30']}
];
