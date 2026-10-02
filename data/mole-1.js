/* Mole Concept 1: Gas laws & Gay-Lussac's law of combining volumes (Dalal, printed p.69–74, p.85 Q.1, p.99 section A) */

/* ---- small local SVG helpers (common.js is not edited) ---- */
const BAL=(x,y,r,t,f)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" stroke="#64748b" stroke-width="1.5"/>`+T(x,y,t,'sym');
const PLUS=(x,y)=>T(x,y,'+','op');
const BRK=(x1,x2,y,t)=>`<path d="M${x1} ${y-6}V${y}H${x2}V${y-6}" fill="none" stroke="#64748b"/>`+T((x1+x2)/2,y+14,t,'lab');
const HC='#dbeafe',OC='#fee2e2',PC='#ede9fe',NC='#dcfce7';

const DIA_WATER=svg(640,175,
 T(320,14,'Same temperature & pressure: 2 vol H₂ + 1 vol O₂ → 2 vol steam','lab')+
 BAL(55,70,27,'H₂',HC)+BAL(113,70,27,'H₂',HC)+BRK(30,138,108,'2 vol hydrogen')+PLUS(160,70)+
 BAL(205,70,27,'O₂',OC)+BRK(180,230,108,'1 vol oxygen')+
 ARR(245,70,295,70)+
 BAL(340,70,30,'H₂O',PC)+BAL(402,70,30,'H₂O',PC)+BRK(312,430,108,'2 vol steam')+
 T(540,60,'2H₂ + O₂ → 2H₂O','frm')+T(540,88,'2  :  1  :  2','frm')+
 T(320,150,'3 volumes of gas react → only 2 volumes form: gas volume is NOT conserved, mass is.','lab'));

const DIA_NH3=svg(640,190,
 T(320,14,'Same temperature & pressure: 1 vol N₂ + 3 vol H₂ → 2 vol NH₃','lab')+
 BAL(50,85,27,'N₂',NC)+BRK(25,75,124,'1 vol nitrogen')+PLUS(97,85)+
 BAL(170,55,25,'H₂',HC)+BAL(145,97,25,'H₂',HC)+BAL(195,97,25,'H₂',HC)+BRK(120,220,134,'3 vol hydrogen')+
 ARR(235,85,285,85)+
 BAL(330,85,30,'NH₃','#fef3c7')+BAL(392,85,30,'NH₃','#fef3c7')+BRK(302,420,124,'2 vol ammonia')+
 T(540,75,'N₂ + 3H₂ → 2NH₃','frm')+T(540,103,'1  :  3  :  2','frm')+
 T(320,172,'The coefficients of a balanced equation ARE the volume ratio (gases only).','lab'));

const boylePts=Array.from({length:39},(_,i)=>{const p=1+i*0.1;return `${(50+p*42).toFixed(1)},${(185-(4/p)*33).toFixed(1)}`}).join(' ');
const DIA_PVT=svg(620,230,
 /* Boyle */
 `<line x1="50" y1="190" x2="280" y2="190" stroke="#374151"/><line x1="50" y1="190" x2="50" y2="25" stroke="#374151"/>`+
 `<polyline points="${boylePts}" fill="none" stroke="#2563eb" stroke-width="2.5"/>`+
 T(270,205,'P →','lab')+T(35,30,'V','lab')+T(165,14,'Boyle: V ∝ 1/P  (T constant)','frm')+
 T(190,120,'P doubles → V halves','lab')+
 /* Charles */
 `<line x1="350" y1="190" x2="600" y2="190" stroke="#374151"/><line x1="350" y1="190" x2="350" y2="25" stroke="#374151"/>`+
 `<line x1="350" y1="190" x2="400" y2="160" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4"/><line x1="400" y1="160" x2="585" y2="49" stroke="#dc2626" stroke-width="2.5"/>`+
 T(575,205,'T (K) →','lab')+T(335,30,'V','lab')+T(350,205,'0 K','lab')+T(470,14,'Charles: V ∝ T  (P constant)','frm')+
 T(520,140,'T (K) doubles → V doubles','lab')+T(430,180,'(−273 °C)','lab'));

const DIA_XS=svg(620,170,
 T(310,14,'Solved ex. 1: 450 cm³ CO + 200 cm³ O₂  (2CO + O₂ → 2CO₂)','lab')+
 T(40,55,'Before','lab')+`<rect x="80" y="40" width="270" height="30" fill="#fde68a" stroke="#b45309"/><rect x="350" y="40" width="120" height="30" fill="${OC}" stroke="#b91c1c"/>`+
 T(215,55,'CO 450','op')+T(410,55,'O₂ 200','op')+
 T(40,115,'After','lab')+`<rect x="80" y="100" width="240" height="30" fill="${PC}" stroke="#6d28d9"/><rect x="320" y="100" width="30" height="30" fill="#fde68a" stroke="#b45309"/>`+
 T(200,115,'CO₂ 400','op')+T(400,115,'← CO 50 left','lab')+
 T(310,155,'O₂ is the limiting gas (all used). 400 CO used, 50 CO left. Total 450 cm³ → 450 cm³.','lab'));

/* ---------------- PAGE ---------------- */
const PAGE={key:'mole-1-v1',lab:'mole-lab.html',title:'Mole Concept 1 · Gas laws & Gay-Lussac’s law',
 pages:{
  97:'Summary A worked problem (ethane + O₂)',
  69:'Theory check: gases vs solids vs liquids',
  70:'Theory checks: Boyle’s law, Charles’ law, gas equation, units & s.t.p.',
  72:'Gay-Lussac’s law, solved problems 1–5',
  73:'Gay-Lussac’s law, solved problems 6–9',
  74:'Theory check: Avogadro’s law (bridge to page 2)',
  85:'Additional problems Q.1 Lussac’s law (1)–(8)',
  99:'Previous ICSE questions, section A: Gay-Lussac’s law (2015–2025)'},
 formulas:`<h3>📐 Formula sheet: gases</h3>
 <table class="cmp">${tr(
  ['Boyle’s law (T constant)','V ∝ 1/P &nbsp;→&nbsp; P₁V₁ = P₂V₂'],
  ['Charles’ law (P constant)','V ∝ T (kelvin) &nbsp;→&nbsp; V₁/T₁ = V₂/T₂'],
  ['Gas equation','P₁V₁/T₁ = P₂V₂/T₂ = constant'],
  ['Kelvin','T (K) = t (°C) + 273'],
  ['s.t.p.','0 °C = 273 K; 760 mm Hg = 76 cm Hg = 1 atm'],
  ['Volume units','1 litre = 1 dm³ = 1000 cm³ = 1000 ml (cc = cm³)'],
  ['Gay-Lussac (gases only)','volume ratio = coefficient ratio in the balanced equation'],
  ['Unknown volume','V(unknown) = V(known) × coeff(unknown) ÷ coeff(known)'],
  ['Air','20% O₂ (1/5) and 80% N₂ → V(air) = 5 × V(O₂)'],
  ['Room temperature','water is LIQUID → it has no gas volume; at 100 °C it is steam and counts'])}</table>${DIA_WATER}`};

const TOPICS=[
 {id:'gl',name:'1. Gases & the gas laws (Boyle, Charles, s.t.p.)',ref:'p.69–70'},
 {id:'law',name:'2. Gay-Lussac’s law: simple volume ratios',ref:'p.71–74'},
 {id:'xs',name:'3. Excess gas: what is left over?',ref:'p.72–73'},
 {id:'air',name:'4. Burning fuels in air (20% O₂)',ref:'p.72–73'}];

/* ---------------- CONCEPT lessons ---------------- */
const CONCEPT={
gl:`<h3>Gases and the gas laws</h3>
${hook('Why does a bicycle tyre feel harder on a hot afternoon, and why does a balloon shrink if you squeeze it? The air inside has not changed. Only its pressure, temperature or volume has.')}
${story('Think of gas molecules as hundreds of children running about in a hall. Make the hall smaller (raise the pressure) and they are squeezed together. Give them sugar (raise the temperature) and they run faster and push the walls outward. The <b>volume</b> of a gas depends on BOTH squeezing and heating.')}
<p>A gas has no fixed volume or shape. Its molecules are far apart with negligible attraction, so its volume changes easily. The three quantities to track are:</p>
<table class="cmp"><tr><th>Temperature</th><th>Pressure</th><th>Volume</th></tr>
${tr(['Indicator of the average kinetic energy of the molecules','Average force exerted by gas molecules on the walls per unit area','Space occupied by a fixed mass of gas'],
['°C or K; 0 °C = 0 + 273 = 273 K','atmospheres; 1 atm = 76 cm = 760 mm Hg','litre, cm³, ml; 1 L = 1 dm³ = 1000 cm³ = 1000 ml'])}</table>
<p><b>★ Boyle’s law:</b> “Temperature remaining constant, the volume of a given mass of dry gas is <i>inversely</i> proportional to its pressure.” V ∝ 1/P [T constant].</p>
<p><b>★ Charles’ law:</b> “Pressure remaining constant, the volume of a given mass of dry gas is <i>directly</i> proportional to its absolute (Kelvin) temperature.” V ∝ T [P constant].</p>
<p><b>Gas equation</b> (Boyle + Charles together): PV/T = K (constant), i.e. <b>P₁V₁/T₁ = P₂V₂/T₂</b>.</p>
${DIA_PVT}
<p><b>Why s.t.p.?</b> Because a gas volume changes with T and P, volumes are only compared after converting them to the same standard: <b>standard temperature = 0 °C = 273 K</b>, <b>standard pressure = 760 mm Hg = 76 cm Hg = 1 atm</b>.</p>
${steps('Worked example: Charles’ law',['500 cm³ of a gas at 27 °C is heated to 327 °C, pressure constant. Find the new volume.','Convert to kelvin: T₁ = 27 + 273 = 300 K, T₂ = 327 + 273 = 600 K.','V₁/T₁ = V₂/T₂ → V₂ = 500 × 600 ÷ 300','V₂ = 1000 cm³ (temperature in K doubled, so volume doubled).'])}
${trap('Using °C in Charles’ law or the gas equation. ALWAYS add 273 first. 27 °C → 54 °C does NOT double the volume.','Mixing up the laws: Boyle = inverse (P up, V down); Charles = direct (T up, V up).','Forgetting the conditions: Boyle needs T constant, Charles needs P constant, both need a fixed mass of dry gas.','Unit slips: 1 dm³ = 1 litre = 1000 cm³; 76 cm Hg (not 76 mm).')}
${cy(['What is 0 °C in kelvin?','273 K'],['If the pressure on a gas is doubled at constant temperature, what happens to its volume?','It becomes half (Boyle’s law).'],['State the standard pressure in mm of Hg.','760 mm Hg (= 76 cm Hg = 1 atm).'])}
${exam('Boyle’s law states that, temperature remaining constant, the volume of a given mass of dry gas is inversely proportional to its pressure (V ∝ 1/P).')}`,

law:`<h3>Gay-Lussac’s law of combining volumes</h3>
${hook('When 2 litres of hydrogen burn in 1 litre of oxygen you get exactly 2 litres of steam: not 3, not 2.7, but 2. Why are the numbers always so neat?')}
${story('A recipe for sandwiches: 2 slices of bread + 1 slice of cheese → 1 sandwich. If you know the recipe you know exactly how much of each you need. For gases, the balanced equation is the recipe, and the <b>coefficients tell you the volumes directly</b>, as long as all the volumes are measured at the same temperature and pressure.')}
<p><b>★ Gay-Lussac’s law:</b> “When gases react they do so in volumes which bear a simple whole number ratio to one another and to the volumes of the products, if gaseous, provided the temperature and pressure of the reacting gases and their products remain constant.”</p>
${DIA_WATER}${DIA_NH3}
<p><b>How to use it:</b></p>
${flow('Write the balanced equation','Read the coefficients as volumes (gases only)','Set up a ratio: known : unknown','Multiply / divide')}
${steps('Worked example (book p.72, solved ex. 2)',['N₂ + O₂ → 2NO, so the volume ratio is 1 : 1 : 2.','We want 250 ml of NO.','N₂ needed = 250 × 1/2 = 125 ml','O₂ needed = 250 × 1/2 = 125 ml'])}
<p>The law only works for <b>gases</b>. Water at room temperature is a liquid and has no gas volume. It takes no part in the volume ratio.</p>
${trap('Using masses or grams with Gay-Lussac’s law. It is a law about VOLUMES of gases only.','Forgetting to balance the equation first. The coefficients must be the balanced ones.','Assuming total volume stays the same: 3 vol (2H₂ + O₂) → 2 vol steam. Volume is not conserved.','Leaving out “at the same temperature and pressure” when you state the law. That loses the mark.')}
${cy(['2CO + O₂ → 2CO₂. How much O₂ burns 60 ml of CO?','30 ml (ratio 2 : 1).'],['N₂ + 3H₂ → 2NH₃. How much NH₃ forms from 9 L of H₂?','6 L (3 : 2).'],['Does Gay-Lussac’s law apply to the water formed at room temperature?','No. It is a liquid, so it has no gas volume.'])}
${exam('Gay-Lussac’s law: when gases react, they do so in volumes which bear a simple whole number ratio to one another and to the volumes of the gaseous products, provided temperature and pressure remain constant.')}`,

xs:`<h3>Excess gas: what is left over?</h3>
${hook('You mix 450 cm³ of CO with 200 cm³ of O₂ and spark it. Is any gas left unburnt? Which one, and how much?')}
${story('Shoes come in pairs. With 9 left shoes and 4 right shoes you can make only 4 pairs, and 5 left shoes are left over. In a gas reaction the gas that runs out first is the <b>limiting</b> gas. The other is in <b>excess</b>, and some of it is left at the end.')}
<p><b>Method for “find the composition of the resulting mixture”:</b></p>
${flow('Balanced equation → volume ratio','Find which gas runs out (limiting)','Volumes used & formed from the limiting gas','Excess left = taken − used','List every GAS left (water at room temp is liquid)')}
${DIA_XS}
${steps('Worked example (book p.72, solved ex. 1)',['2CO + O₂ → 2CO₂, so 2 vol : 1 vol → 2 vol.','200 cm³ O₂ needs 2 × 200 = 400 cm³ CO. We have 450, so O₂ is limiting and CO is in excess.','CO left = 450 − 400 = 50 cm³.','CO₂ formed = 2 × 200 = 400 cm³.','Resulting mixture: 50 cm³ CO + 400 cm³ CO₂.'])}
<p><b>Mixtures of fuels:</b> if two or more gases burn in the same oxygen, find the O₂ used by each separately and add the amounts (book p.73 solved ex. 7 and 9).</p>
${trap('Using the bigger volume as the limiting gas. Always test which gas actually runs out, using the ratio.','Counting water vapour “at room temperature”. It condenses to liquid and is not part of the gas mixture.','Forgetting to list the leftover excess gas in the final composition.','Answering “unused O₂” with the O₂ USED. Read the question again.')}
${cy(['2H₂ + O₂ → 2H₂O. 10 ml H₂ and 10 ml O₂ are exploded and cooled. What gas is left?','5 ml O₂ (10 ml H₂ needs only 5 ml O₂).'],['H₂ + Cl₂ → 2HCl. 5 L H₂ and 3 L Cl₂. Which gas is in excess, and by how much?','H₂, 2 L left. 6 L HCl is formed.'],['Why is no volume of water given in the answer when gases are cooled to room temperature?','Water condenses to a liquid, so its gas volume is negligible.'])}
${exam('Since 2 volumes of CO react with 1 volume of O₂ (Gay-Lussac’s law), 200 cm³ of O₂ uses 400 cm³ of CO, leaving 50 cm³ of unused CO, and 400 cm³ of CO₂ is formed.')}`,

air:`<h3>Burning fuels in air</h3>
${hook('A gas stove burns methane in AIR, not pure oxygen. Most of the air is nitrogen, which does not burn. Where does all that nitrogen go?')}
${story('Air is like a box of chocolates where only 1 in 5 has a filling you want (O₂), and the other 4 are plain (N₂). If you need 10 filled chocolates you must take 50 from the box, and 40 plain ones come along and are left over.')}
<p><b>Key facts:</b> air ≈ <b>20% O₂</b> (1/5) and <b>80% N₂</b>. N₂ does not react, so it passes through unchanged and appears in the final mixture.</p>
${flow('Balanced combustion equation','O₂ needed (volume ratio)','Air = O₂ × 100/20 = 5 × O₂','N₂ = 80% of air = 4 × O₂')}
<p>Hydrocarbons burn to CO₂ + H₂O. For example: 2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O; 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O; C₃H₈ + 5O₂ → 3CO₂ + 4H₂O; CH₄ + 2O₂ → CO₂ + 2H₂O.</p>
${steps('Worked example (book p.73, solved ex. 8)',['C₂H₄ + 3O₂ → 2CO₂ + 2H₂O(g) at 100 °C: 1 : 3 : 2 : 2.','200 ml C₂H₄ needs 3 × 200 = 600 ml O₂ and forms 400 ml CO₂ + 400 ml steam.','Air used = 600 × 100/20 = 3000 ml, so N₂ = 80% of 3000 = 2400 ml.','Final mixture: 400 ml CO₂, 400 ml steam (it counts at 100 °C) and 2400 ml N₂.'])}
${trap('Giving the volume of O₂ when the question asks for the volume of AIR (multiply by 5).','Forgetting the nitrogen of the air in the final composition.','Steam counts at 100 °C but NOT at room temperature. Check the temperature in the question.','Not balancing the hydrocarbon equation (e.g. writing C₂H₂ + O₂ ratios wrongly).')}
${cy(['How much air contains 40 cm³ of O₂?','200 cm³ (40 × 5).'],['CH₄ + 2O₂ → CO₂ + 2H₂O. O₂ needed for 30 ml CH₄?','60 ml.'],['In 500 ml of air, how much is nitrogen?','400 ml (80%).'])}
${exam('By Gay-Lussac’s law 2 vol C₂H₂ need 5 vol O₂, so 50 cm³ of C₂H₂ need 125 cm³ of O₂. Since air contains 20% oxygen, the air required = 125 × 100/20 = 625 cm³.')}`};

/* ---------------- CHAPTER (book order) ---------------- */
const CHAPTER=[
 {id:'s-intro',title:'A. Introduction: gases, solids & liquids',ref:'p.69',t:['gl'],html:`<h3>Part A: Gay-Lussac’s law, Avogadro’s law, mole concept</h3>
 <p>The syllabus for this part: the idea of the mole, Avogadro’s law, <b>Gay-Lussac’s law of combining volumes</b>, molar volume (22.4 L at s.t.p.), and simple calculations based on the molar volume and Gay-Lussac’s law. This page covers the gas part. The mole comes next.</p>
 <table class="cmp"><tr><th></th><th>Gases</th><th>Solids</th><th>Liquids</th></tr>
 ${tr(['Volume & shape','No definite volume or shape, no rigidity','Definite volume and shape, highly rigid','Definite volume, no definite shape, less rigid'],
 ['Intermolecular space','Maximum','Minimum','More than solids'],
 ['Force of attraction','Negligible','Maximum','Less than solids'],
 ['Pressure','Exerted on the walls of the container','Only downwards','Only downwards (partially)'],
 ['Density','Generally low (fewest particles per unit volume)','Generally high','Less than solids'],
 ['Miscibility','High: particles diffuse rapidly into other gases','None','Slight: may diffuse into another liquid'])}</table>
 <p>Because gas particles are far apart and hardly attract each other, gas volumes change easily with temperature and pressure. That is why we need the gas laws.</p>`},
 {id:'s-gaslaws',title:'B. Gas laws, gas equation & s.t.p.',ref:'p.70',t:['gl'],html:`<p>Gas laws are rules a gas follows when its temperature, pressure or volume is changed. A change in any one of them affects the other two.</p>`+CONCEPT.gl},
 {id:'s-glaw',title:'1. Gay-Lussac’s law: the law',ref:'p.71',t:['law'],html:`<h3>History</h3><ul>
 <li><b>1800, John Dalton:</b> atoms combine in simple whole-number ratios.</li>
 <li><b>1801, Boyle & Charles:</b> the gas laws show that equal volumes of all gases behave alike when T and P change.</li>
 <li><b>1805, Gay-Lussac:</b> found from experiments a simple relation between the combining volumes of gases used and produced at the same T and P.</li>
 <li><b>1811, Amedeo Avogadro:</b> explained these laws by saying equal volumes of all gases at the same T and P contain equal numbers of molecules. This also corrected Dalton’s theory.</li></ul>
 <p>Book examples (same T & P): (a) 2 vol H₂ + 1 vol O₂ → 2 vol steam, ratio 2 : 1 : 2; (b) 1 vol N₂ + 3 vol H₂ → 2 vol NH₃, ratio 1 : 3 : 2. “1 volume” means any particular volume at the given temperature and pressure.</p>`+CONCEPT.law},
 {id:'s-probA',title:'A. Problems on Gay-Lussac’s law: excess & mixtures',ref:'p.72–73',t:['xs','law'],html:CONCEPT.xs},
 {id:'s-air',title:'A. Problems on Gay-Lussac’s law: burning in air',ref:'p.72–73',t:['air'],html:CONCEPT.air},
 {id:'s-avo',title:'2. Avogadro’s law (bridge to page 2)',ref:'p.74',t:['law'],html:`<h3>Avogadro’s law, in brief</h3>
 <p>In 1811 Avogadro distinguished between <b>atoms</b> (the smallest particle of an element that takes part in a reaction, which may or may not exist independently) and <b>molecules</b> (the smallest particle of an element or compound that can exist by itself). The number of atoms in a molecule is its <b>atomicity</b>.</p>
 <p><b>★ Avogadro’s law:</b> “Under the same conditions of temperature and pressure, equal volumes of all gases contain the same number of molecules.”</p>
 <p>This explains Gay-Lussac’s law. If 1 litre of any gas holds n molecules, then “1 vol N₂ + 3 vol H₂ → 2 vol NH₃” means 1 molecule N₂ + 3 molecules H₂ → 2 molecules NH₃. <b>A volume ratio is a molecule ratio.</b></p>${DIA_NH3}
 <p>The full treatment of Avogadro’s law, the mole and molar volume is on the next practice page (Mole Concept 2).</p>`},
 {id:'s-summary',title:'Summary: laws & terms (gas part)',ref:'p.85',t:['law'],html:`<table class="cmp">${tr(
  ['★ Gay-Lussac’s law','When gases react they do so in volumes which bear a simple whole number ratio to one another and to the volumes of the products, if gaseous, provided the temperature and pressure of the reacting gases and their products remain constant.'],
  ['★ Avogadro’s law','Under the same conditions of temperature and pressure, equal volumes of all gases contain the same number of molecules.'],
  ['Atomicity','The number of atoms present in one molecule of an element, e.g. He is monoatomic.'],
  ['Molar volume','The volume occupied by one gram-molecular weight of a gas at s.t.p. (22.4 litres).'])}</table>`}];
const TOPIC_SEC={gl:'s-gaslaws',law:'s-glaw',xs:'s-probA',air:'s-air'};

/* ---------------- Questions ---------------- */
const Q=[
/* ---- Topic gl: theory checks from p.69–70 (the book has no gas-law numericals on these pages) ---- */
{id:'t69-1',t:'gl',src:'p.69 · Theory check (Introduction)',ref:'p.69',type:'mcq',
 q:'Which state of matter has the <b>maximum</b> intermolecular space, <b>negligible</b> force of attraction and high miscibility?',
 opts:['Solid','Liquid','Gas'],ans:2,
 exp:'Gases: no definite volume or shape, maximum intermolecular space, negligible attraction, low density, and they diffuse rapidly into one another.'},
{id:'t70-1',t:'gl',src:'p.70 · Theory check: Boyle’s law',ref:'p.70',type:'open',
 q:'State Boyle’s law and write it in symbols.',
 hint:'Which quantity is kept constant? Is the relation direct or inverse?',
 model:'Temperature remaining constant, the volume of a given mass of dry gas is <b>inversely</b> proportional to its pressure. V ∝ 1/P [T constant], i.e. P₁V₁ = P₂V₂.'},
{id:'t70-2',t:'gl',src:'p.70 · Theory check: Charles’ law',ref:'p.70',type:'open',
 q:'State Charles’ law and write it in symbols.',
 hint:'Pressure is kept constant. Which temperature scale must be used?',
 model:'Pressure remaining constant, the volume of a given mass of dry gas is <b>directly</b> proportional to its absolute (Kelvin) temperature. V ∝ T [P constant], i.e. V₁/T₁ = V₂/T₂.'},
{id:'t70-3',t:'gl',src:'p.70 · Theory check: gas equation & s.t.p.',ref:'p.70',type:'fill',
 q:'Combining Boyle’s and Charles’ laws gives the gas equation P₁V₁/T₁ = {0}. Standard temperature is {1} and standard pressure is {2}.',
 blanks:[{o:['P₂V₂/T₂','P₂T₂/V₂','V₂/P₂T₂'],a:0},{o:['0 K','273 K (0 °C)','298 K (25 °C)'],a:1},{o:['760 cm of Hg','76 mm of Hg','760 mm of Hg (1 atm)'],a:2}],
 hint:'PV/T is constant. s.t.p. means 0 °C and 1 atmosphere.'},
{id:'t70-4',t:'gl',src:'p.70 · Theory check: units',ref:'p.70',type:'num',
 q:'Using the units on p.70, convert: (i) 27 °C into kelvin (ii) 1 dm³ into cm³ (iii) 760 mm of Hg into cm of Hg.',
 hint:'K = °C + 273; 1 litre = 1 dm³; 10 mm = 1 cm.',
 parts:[{l:'(i)',a:300,u:'K'},{l:'(ii)',a:1000,u:'cm³'},{l:'(iii)',a:76,u:'cm Hg'}],
 steps:['Kelvin temperature = Celsius temperature + 273 → 27 + 273','1 litre = 1 dm³ = 1000 cm³ = 1000 ml','1 cm = 10 mm → 760 ÷ 10']},

/* ---- Topic law ---- */
{id:'p99-2023-1',t:'law',src:'p.99 · 2023 Q1',ref:'p.71',type:'open',
 q:'State Gay-Lussac’s law of combining volumes.',
 hint:'Three ideas: a simple whole-number ratio of volumes, it includes the gaseous products, and the condition on T and P.',
 model:'When gases react, they do so in volumes which bear a simple whole number ratio to one another and to the volumes of the products, if gaseous, provided the temperature and pressure of the reacting gases and their products remain constant.'},
{id:'a72-2',t:'law',src:'p.72 · Solved ex. 2',ref:'p.71–72',type:'num',solved:true,
 q:'One volume of nitrogen combines with one volume of oxygen to form two volumes of nitric oxide. Calculate the amount of each reactant required to produce 250 ml of nitric oxide.',
 hint:'N₂ + O₂ → 2NO is 1 : 1 : 2. Go from NO to each reactant.',
 parts:[{l:'N₂ required',a:125,u:'ml'},{l:'O₂ required',a:125,u:'ml'}],
 steps:['N₂(g) + O₂(g) → 2NO(g), i.e. 1 vol : 1 vol → 2 vol [by Lussac’s law]','NO : N₂ = 2 : 1 → 250 : x → x = 250/2','NO : O₂ = 2 : 1 → 250 : x → x = 250/2']},
{id:'a73-7',t:'law',src:'p.73 · Solved ex. 7',ref:'p.71–73',type:'num',solved:true,
 q:'Calculate the volume of oxygen required to burn completely a mixture of 22.4 dm³ of CH₄ and 11.2 dm³ of H₂. [All volumes measured at s.t.p.] [1 dm³ = 1 litre]',
 hint:'Two separate equations. Find the O₂ for each fuel, then add.',
 parts:[{l:'Total O₂',a:50.4,u:'dm³'}],
 steps:['(i) CH₄ + 2O₂ → CO₂ + 2H₂O: 1 vol : 2 vol','O₂ for CH₄ = 2 × 22.4 = 44.8 dm³','(ii) 2H₂ + O₂ → 2H₂O: 2 vol : 1 vol','O₂ for H₂ = 11.2 ÷ 2 = 5.6 dm³','Total O₂ = 44.8 + 5.6']},
{id:'a85-1-1',t:'law',src:'p.85 · Q.1 (1)',ref:'p.71–72',type:'num',
 q:'Nitrogen reacts with hydrogen to give ammonia. Calculate the volume of the ammonia gas formed when nitrogen reacts with 6 litres of hydrogen. All volumes measured at s.t.p.',
 hint:'Balance N₂ + H₂ → NH₃ first, then use the H₂ : NH₃ ratio.',
 parts:[{l:'NH₃ formed',a:4,u:'litres'}],
 steps:['N₂ + 3H₂ → 2NH₃: 1 vol : 3 vol → 2 vol','H₂ : NH₃ = 3 : 2','NH₃ = 6 × 2/3']},
{id:'a85-1-4',t:'law',src:'p.85 · Q.1 (4)',ref:'p.71–72',type:'num',
 q:'224 cm³ of ammonia undergoes catalytic oxidation in presence of Pt to give nitric oxide and water vapour. Calculate the volume of oxygen required for the reaction. All volumes measured at room temperature and pressure.',
 hint:'4NH₃ + 5O₂ → 4NO + 6H₂O. Use NH₃ : O₂ = 4 : 5.',
 parts:[{l:'O₂ required',a:280,u:'cm³'}],
 steps:['4NH₃ + 5O₂ → 4NO + 6H₂O: 4 vol : 5 vol','NH₃ : O₂ = 4 : 5','O₂ = 224 × 5/4']},
{id:'a85-1-7',t:'law',src:'p.85 · Q.1 (7)',ref:'p.71–72',type:'num',
 q:'Ammonia is formed from the reactants nitrogen and hydrogen in presence of a catalyst under suitable conditions. Assuming all volumes are measured in litres at s.t.p., calculate the volume of ammonia formed if only 10% conversion has taken place. <i>(Take 1 litre of N₂ reacting with 3 litres of H₂, as the book’s answer does.)</i>',
 hint:'Full conversion first (N₂ + 3H₂ → 2NH₃), then take 10% of it.',
 parts:[{l:'NH₃ formed',a:0.2,u:'litres'}],
 steps:['N₂ + 3H₂ → 2NH₃: 1 vol : 3 vol → 2 vol','1 L N₂ + 3 L H₂ would give 2 L NH₃ at 100% conversion','At 10% conversion: NH₃ = 10/100 × 2'],
 exp:'The book gives no starting volumes. Its answer “0.2 litres, or 20% (1/5th) of the volume of N₂” assumes 1 litre of N₂ with 3 litres of H₂. In general, NH₃ formed = 0.2 × volume of N₂ taken.'},
{id:'p99-2016',t:'law',src:'p.99 · 2016 Q1',ref:'p.71–72',type:'num',
 q:'The equation 4NH₃ + 5O₂ → 4NO + 6H₂O represents the catalytic oxidation of ammonia. If 100 cm³ of ammonia is used, calculate the volume of oxygen required to oxidise the ammonia completely.',
 hint:'NH₃ : O₂ = 4 : 5.',
 parts:[{l:'O₂ required',a:125,u:'cm³'}],
 steps:['4NH₃ + 5O₂ → 4NO + 6H₂O: 4 vol : 5 vol','O₂ = 100 × 5/4']},
{id:'p99-2020',t:'law',src:'p.99 · 2020 Q1',ref:'p.71–72',type:'num',
 q:'Calculate the amount of each reactant required to produce 750 ml of CO₂ as per the equation 2CO + O₂ → 2CO₂. State the law associated with the question.',
 hint:'2 : 1 : 2. Work back from CO₂ to each reactant. The law is about combining volumes.',
 parts:[{l:'CO required',a:750,u:'ml'},{l:'O₂ required',a:375,u:'ml'}],
 steps:['2CO + O₂ → 2CO₂: 2 vol : 1 vol → 2 vol','CO = 750 × 2/2','O₂ = 750 × 1/2'],
 exp:'Law: <b>Gay-Lussac’s law of combining volumes</b>. When gases react, they do so in volumes which bear a simple whole number ratio to one another and to the volumes of the gaseous products, at constant temperature and pressure.'},
{id:'t74-1',t:'law',src:'p.74 · Theory check: Avogadro’s law',ref:'p.74',type:'open',
 q:'State Avogadro’s law. How does it explain why 1 vol N₂ + 3 vol H₂ gives 2 vol NH₃?',
 hint:'Equal volumes ↔ equal numbers of molecules.',
 model:'Under the same conditions of temperature and pressure, equal volumes of all gases contain the same number of molecules. So the volume ratio 1 : 3 : 2 is also a molecule ratio: 1 molecule N₂ + 3 molecules H₂ → 2 molecules NH₃.'},

/* ---- Topic xs: excess / leftover ---- */
{id:'a72-1',t:'xs',src:'p.72 · Solved ex. 1',ref:'p.71–72',type:'num',solved:true,
 q:'450 cm³ of carbon monoxide and 200 cm³ of oxygen are mixed together and ignited. Calculate the composition of the resulting mixture.',
 hint:'2CO + O₂ → 2CO₂. Which gas runs out first? Then work out what is left and what is formed.',
 parts:[{l:'Unused CO',a:50,u:'cm³'},{l:'CO₂ formed',a:400,u:'cm³'}],
 steps:['2CO(g) + O₂(g) → 2CO₂(g), i.e. 2 vol : 1 vol → 2 vol [by Lussac’s law]','CO : O₂ = 2 : 1 → x : 200 → CO used = 400 cm³','Unused CO = 450 − 400 = 50 cm³','O₂ : CO₂ = 1 : 2 → 200 : x₁ → CO₂ = 400 cm³ (total mixture 450 cm³)']},
{id:'a72-4',t:'xs',src:'p.72 · Solved ex. 4',ref:'p.71–72',type:'num',solved:true,
 q:'3000 cc of oxygen was burnt with 600 cc of ethane (C₂H₆). Calculate the volume of unused oxygen.',
 hint:'2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O. O₂ used = 7/2 × ethane.',
 parts:[{l:'Unused O₂',a:900,u:'cc'}],
 steps:['2C₂H₆(g) + 7O₂(g) → 4CO₂(g) + 6H₂O: 2 vol : 7 vol → 4 vol : 6 vol','600 ml ethane = 2 × 300, so O₂ used = 7 × 300 = 2100 cc','Unused O₂ = 3000 − 2100']},
{id:'a72-5',t:'xs',src:'p.72 · Solved ex. 5',ref:'p.71–72',type:'num',solved:true,
 q:'60 cc of oxygen was added to 24 cc of carbon monoxide and the mixture ignited. Calculate the volume of oxygen used up and the volume of carbon dioxide formed.',
 hint:'2CO + O₂ → 2CO₂. Is CO or O₂ the limiting gas here?',
 parts:[{l:'O₂ used up',a:12,u:'cc'},{l:'CO₂ formed',a:24,u:'cc'}],
 steps:['2CO(g) + O₂(g) → 2CO₂(g): 2 vol : 1 vol → 2 vol','24 cc CO = 2 × 12, so CO is limiting (O₂ is in excess)','O₂ used = 1 × 12; CO₂ formed = 2 × 12']},
{id:'a73-6',t:'xs',src:'p.73 · Solved ex. 6',ref:'p.71–73',type:'num',solved:true,
 q:'200 cm³ of carbon monoxide is mixed with 200 cm³ of oxygen at room temperature and ignited. Calculate the volume of CO₂ formed on cooling to room temperature. What other gas, if any, may also be present?',
 hint:'2CO + O₂ → 2CO₂. Find the O₂ actually used; the rest is left over.',
 parts:[{l:'CO₂ formed',a:200,u:'cm³'},{l:'O₂ left over',a:100,u:'cm³'}],
 steps:['2CO(g) + O₂(g) → 2CO₂(g): 2 vol : 1 vol → 2 vol','200 cm³ CO = 2 × 100, so O₂ used = 1 × 100 = 100 cm³','CO₂ formed = 2 × 100','O₂ left = 200 − 100: the other gas present is oxygen']},
{id:'a85-1-2',t:'xs',src:'p.85 · Q.1 (2)',ref:'p.71–72',type:'num',
 q:'2500 cc of oxygen was burnt with 600 cc of ethane [C₂H₆]. Calculate the volume of unused oxygen and the volume of carbon dioxide formed.',
 hint:'2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O. Use ethane (fully burnt) to find O₂ used and CO₂ formed.',
 parts:[{l:'Unused O₂',a:400,u:'cc'},{l:'CO₂ formed',a:1200,u:'cc'}],
 steps:['2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O: 2 : 7 : 4','O₂ used = 600 × 7/2 = 2100 cc','Unused O₂ = 2500 − 2100','CO₂ = 600 × 4/2']},
{id:'a85-1-3',t:'xs',src:'p.85 · Q.1 (3)',ref:'p.71–73',type:'num',
 q:'20 ml each of oxygen and hydrogen and 10 ml of carbon monoxide are exploded in an enclosure. What will be the volume and composition of the mixture of the gases when they are cooled to room temperature?',
 hint:'Two fuels (H₂ and CO) share the same O₂. Add up the O₂ used. Water is liquid at room temperature.',
 parts:[{l:'O₂ left',a:5,u:'ml'},{l:'CO₂',a:10,u:'ml'},{l:'Total volume',a:15,u:'ml'}],
 steps:['2H₂ + O₂ → 2H₂O: 20 ml H₂ uses 10 ml O₂ (water condenses on cooling)','2CO + O₂ → 2CO₂: 10 ml CO uses 5 ml O₂ and forms 10 ml CO₂','O₂ left = 20 − (10 + 5) = 5 ml','Mixture = 5 ml O₂ + 10 ml CO₂'],
 exp:'Book answer: O₂ 5 ml, CO₂ 10 ml. The total volume asked for is 5 + 10 = 15 ml.'},
{id:'a85-1-8',t:'xs',src:'p.85 · Q.1 (8)',ref:'p.71–73',type:'num',
 q:'100 cc each of water gas and oxygen are ignited and the resultant mixture of gases cooled to room temperature. Calculate the composition of the resultant mixture. [Water gas contains CO & H₂ in equal ratio]',
 hint:'Split the water gas: 50 cc CO + 50 cc H₂. Find the O₂ each uses.',
 parts:[{l:'O₂ left',a:50,u:'cc'},{l:'CO₂ formed',a:50,u:'cc'}],
 steps:['Water gas 100 cc = 50 cc CO + 50 cc H₂','2CO + O₂ → 2CO₂: 50 cc CO uses 25 cc O₂ and forms 50 cc CO₂','2H₂ + O₂ → 2H₂O: 50 cc H₂ uses 25 cc O₂ (water is liquid at room temp)','O₂ left = 100 − (25 + 25)']},
{id:'p99-2015',t:'xs',src:'p.99 · 2015 Q1',ref:'p.71–72',type:'num',
 q:'If 6 litres of hydrogen and 4 litres of chlorine are mixed and exploded, and if water is added to the gases formed, find the volume of the residual gas.',
 hint:'H₂ + Cl₂ → 2HCl. Which gas is in excess? HCl is very soluble in water.',
 parts:[{l:'Residual H₂',a:2,u:'litres'}],
 steps:['H₂ + Cl₂ → 2HCl: 1 vol : 1 vol → 2 vol','4 L Cl₂ reacts with 4 L H₂ and forms 8 L HCl','HCl dissolves completely in the water that is added','Residual gas = unused H₂ = 6 − 4']},
{id:'p99-2018',t:'xs',src:'p.99 · 2018 Q1',ref:'p.71–72',type:'num',
 q:'Ethane burns in O₂ to form CO₂ and H₂O: 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O. If 1250 cc of oxygen is burnt with 300 cc of ethane, calculate: (i) the volume of CO₂ formed (ii) the volume of unused O₂.',
 hint:'Ethane is fully burnt. Use 2 : 7 : 4.',
 parts:[{l:'(i) CO₂ formed',a:600,u:'cc'},{l:'(ii) Unused O₂',a:200,u:'cc'}],
 steps:['2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O: 2 : 7 : 4','CO₂ = 300 × 4/2','O₂ used = 300 × 7/2 = 1050 cc','Unused O₂ = 1250 − 1050']},
{id:'p99-2023-2',t:'xs',src:'p.99 · 2023 Q2',ref:'p.71–73',type:'num',
 q:'Ethane burns in oxygen according to the equation 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O. If 80 ml of ethane is burnt in 300 ml of O₂, find the composition of the resultant gaseous mixture when measured at room temperature.',
 hint:'Ethane : O₂ : CO₂ = 2 : 7 : 4. Subtract the O₂ used from 300.',
 parts:[{l:'O₂ left',a:20,u:'ml'},{l:'CO₂ formed',a:160,u:'ml'}],
 steps:['2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O: 2 : 7 : 4 : 6','O₂ used = 80 × 7/2 = 280 ml → O₂ left = 300 − 280','CO₂ = 80 × 4/2'],
 exp:'The book’s answer also lists “240 ml of water vapour” (80 × 6/2). Strictly, at room temperature the water condenses to a liquid, so the gaseous mixture is 20 ml O₂ + 160 ml CO₂. Write 240 ml H₂O only if the water is taken as vapour.'},
{id:'p99-2024',t:'xs',src:'p.99 · 2024 Q1',ref:'p.71–73',type:'num',
 q:'Ammonia burns in oxygen as shown: 4NH₃ + 3O₂ → 2N₂ + 6H₂O. If 240 cc of ammonia is burnt in 300 cc of oxygen, find the composition of the resultant gaseous mixture at room temperature.',
 hint:'NH₃ : O₂ : N₂ = 4 : 3 : 2. Water is liquid at room temperature.',
 parts:[{l:'Unused O₂',a:120,u:'cc'},{l:'N₂ formed',a:120,u:'cc'}],
 steps:['4NH₃ + 3O₂ → 2N₂ + 6H₂O: 4 : 3 : 2','O₂ used = 240 × 3/4 = 180 cc → O₂ left = 300 − 180','N₂ = 240 × 2/4','Water is liquid at room temperature, so it is not counted']},
{id:'p99-2025',t:'xs',src:'p.99 · 2025 Q1',ref:'p.71–73',type:'mcq',
 q:'40 cm³ of methane [CH₄] is reacted with 60 cm³ of oxygen. The equation for the reaction is CH₄ + 2O₂ → CO₂ + 2H₂O. All volumes are measured at room temperature. What is the total volume of the gases remaining at the end of the reaction?',
 opts:['60 cm³','40 cm³','45 cm³','50 cm³'],ans:1,
 hint:'Find the limiting gas: 40 cm³ CH₄ would need 80 cm³ O₂. Water is liquid at room temperature.',
 exp:'O₂ is limiting: 60 cm³ O₂ burns 30 cm³ CH₄ and forms 30 cm³ CO₂. CH₄ left = 40 − 30 = 10 cm³. Total gas = 10 + 30 = <b>40 cm³</b> (the water is liquid).'},

/* ---- Topic air: combustion & air ---- */
{id:'a72-3',t:'air',src:'p.72 · Solved ex. 3',ref:'p.71–72',type:'num',solved:true,
 q:'What volume of oxygen would be required to burn completely 400 ml of acetylene (C₂H₂)? Also calculate the volume of carbon dioxide formed.',
 hint:'2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O. 400 ml = 2 × 200.',
 parts:[{l:'O₂ required',a:1000,u:'ml'},{l:'CO₂ formed',a:800,u:'ml'}],
 steps:['2C₂H₂(g) + 5O₂(g) → 4CO₂(g) + 2H₂O: 2 vol : 5 vol → 4 vol : 2 vol','400 ml = 2 × 200','O₂ = 5 × 200; CO₂ = 4 × 200']},
{id:'a73-8',t:'air',src:'p.73 · Solved ex. 8',ref:'p.71–73',type:'num',solved:true,
 q:'200 ml of C₂H₄ is burnt in just sufficient air [containing 20% oxygen] as per the equation C₂H₄ + 3O₂ → 2CO₂ + 2H₂O(g). Calculate the resultant mixture composition [at 100 °C and constant pressure].',
 hint:'Find O₂ needed, then air = O₂ × 100/20; N₂ is 80% of the air. At 100 °C the steam counts.',
 parts:[{l:'CO₂',a:400,u:'ml'},{l:'Steam',a:400,u:'ml'},{l:'N₂',a:2400,u:'ml'}],
 steps:['C₂H₄ + 3O₂ → 2CO₂ + 2H₂O: 1 : 3 : 2 : 2','O₂ = 3 × 200 = 600 ml; CO₂ = 2 × 200 = 400 ml; steam = 2 × 200 = 400 ml','When O₂ is 20%, N₂ is 80% → N₂ = 80 × 600/20 = 2400 ml','Ethylene left = 200 − 200 = 0; O₂ left = 600 − 600 = 0 (at 100 °C steam has volume)']},
{id:'a73-9',t:'air',src:'p.73 · Solved ex. 9',ref:'p.71–73',type:'num',solved:true,
 q:'A mixture of 10 cm³ of CO, 60 cm³ of H₂ and 25 cc of CH₄ is mixed with 750 cm³ of air [containing 20% oxygen] and ignited. Calculate the composition of the resultant mixture on cooling to room temperature.',
 hint:'Three separate equations. Add up the O₂ used. O₂ in air = 20% of 750. N₂ passes through unchanged.',
 parts:[{l:'CO₂',a:35,u:'cm³'},{l:'O₂ left',a:65,u:'cm³'},{l:'N₂',a:600,u:'cm³'}],
 steps:['2CO + O₂ → 2CO₂: 10 cm³ CO uses 5 cm³ O₂, forms 10 cm³ CO₂','2H₂ + O₂ → 2H₂O: 60 cm³ H₂ uses 30 cm³ O₂ (water liquid on cooling)','CH₄ + 2O₂ → CO₂ + 2H₂O: 25 cm³ CH₄ uses 50 cm³ O₂, forms 25 cm³ CO₂','O₂ in air = 20/100 × 750 = 150 cm³ → O₂ left = 150 − (5 + 30 + 50); CO₂ = 10 + 25','N₂ = 750 − 150; CO, H₂ and CH₄ left = 0']},
{id:'a85-1-5',t:'air',src:'p.85 · Q.1 (5)',ref:'p.71–73',type:'num',
 q:'Acetylene [C₂H₂] burns in air forming carbon dioxide and water vapour. Calculate the volume of air required to completely burn 50 cm³ of acetylene. [Assume air contains 20% oxygen]',
 hint:'2C₂H₂ + 5O₂ → … gives the O₂; then air = O₂ × 100/20.',
 parts:[{l:'Air required',a:625,u:'cm³'}],
 steps:['2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O: 2 vol : 5 vol','O₂ = 50 × 5/2 = 125 cm³','Air = 125 × 100/20']},
{id:'a85-1-6',t:'air',src:'p.85 · Q.1 (6)',ref:'p.71–73',type:'num',
 q:'On igniting a mixture of acetylene [C₂H₂] and oxygen, 200 cm³ of CO₂ is collected at s.t.p. Calculate the volume of acetylene and of O₂ at s.t.p. in the original mixture.',
 hint:'Work backwards from CO₂ using 2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O.',
 parts:[{l:'Acetylene',a:100,u:'cm³'},{l:'Oxygen',a:250,u:'cm³'}],
 steps:['2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O: 2 : 5 : 4','C₂H₂ = 200 × 2/4','O₂ = 200 × 5/4']},
{id:'p99-2017',t:'air',src:'p.99 · 2017 Q1',ref:'p.71–73',type:'num',
 q:'Propane burns in air according to the equation C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. What volume of propane is consumed on using 1000 cm³ of air, considering only 20% of air contains oxygen?',
 hint:'First find the O₂ in the air, then use C₃H₈ : O₂ = 1 : 5.',
 parts:[{l:'Propane consumed',a:40,u:'cm³'}],
 steps:['O₂ in air = 20/100 × 1000 = 200 cm³','C₃H₈ + 5O₂ → 3CO₂ + 4H₂O: 1 vol : 5 vol','Propane = 200 × 1/5']},
{id:'a97-A',t:'xs',src:'p.97 · Summary A problem',ref:'p.71–73, 97',type:'num',solved:true,
 q:'4000 cc of O₂ was burnt with 300 cc of ethane. Calculate the volume of unused O₂ and CO₂ formed.',
 hint:'2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O. Ethane is used up completely; scale 2 : 7 : 4 so that 2 → 300.',
 parts:[{l:'CO₂ formed',a:600,u:'cc'},{l:'Unused O₂',a:2950,u:'cc'}],
 steps:['2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O: ratio 2 : 7 : 4 : 6','300 cc ethane = 2 × 150, so multiply every ratio by 150','O₂ used = 7 × 150 = 1050 cc; CO₂ formed = 4 × 150 = 600 cc','Unused O₂ = 4000 − 1050']}
];
