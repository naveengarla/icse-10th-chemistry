/* Chemical Bonding: data for lib/engine.js (converted from the original standalone page). */
const PAGE={key:'chem-bonding-v1',title:'⚗️ Chemical Bonding · Practice',
 pages:{36:'Questions p.36',37:'Questions p.37',38:'Questions p.38'}};

/* ---------------- Diagrams ---------------- */
const D={
h2:svg(260,70,L(30,35,'H',{r:'•×'})+L(60,35,'H')+T(100,35,'→')+T(175,35,'H – H &nbsp;(H₂)','frm')),
cl2:svg(280,80,L(40,40,'Cl',{t:'••',b:'••',l:'••',r:'•×'})+L(84,40,'Cl',{t:'××',b:'××',r:'××'})+T(140,40,'→')+T(210,40,'Cl – Cl &nbsp;(Cl₂)','frm')),
o2:svg(260,80,L(40,40,'O',{t:'••',b:'••',r:'•×•×'})+L(70,40,'O',{t:'××',b:'××'})+T(115,40,'→')+T(185,40,'O = O &nbsp;(O₂)','frm')),
n2:svg(260,90,L(40,45,'N',{l:'••',r:'•×•×•×'})+L(70,45,'N',{r:'××'})+T(115,45,'→')+T(185,45,'N ≡ N &nbsp;(N₂)','frm')),
hcl:svg(270,80,L(30,40,'H',{r:'×•'})+L(67,40,'Cl',{t:'••',b:'••',r:'••'})+T(125,40,'→')+T(195,40,'H – Cl','frm')),
h2o:svg(300,80,L(40,40,'H')+L(70,40,'O',{t:'••',b:'••',l:'×•',r:'•×'})+L(100,40,'H')+T(140,40,'→')+T(220,40,'H – O – H','frm')+T(150,72,'O has 2 lone pairs','lab')),
nh3:svg(300,100,L(40,35,'H')+L(70,35,'N',{t:'••',l:'×•',r:'•×',b:'•×'})+L(100,35,'H')+L(70,65,'H')+T(140,40,'→')+T(220,35,'H – N – H','frm')+T(220,52,'|','frm')+T(220,68,'H','frm')+T(150,92,'N has 1 lone pair','lab')),
ch4:svg(300,110,L(70,25,'H')+L(40,55,'H')+L(70,55,'C',{t:'•×',b:'•×',l:'×•',r:'•×'})+L(100,55,'H')+L(70,85,'H')+T(140,55,'→')+T(220,22,'H','frm')+T(220,38,'|','frm')+T(220,55,'H – C – H','frm')+T(220,72,'|','frm')+T(220,88,'H','frm')),
ccl4:svg(340,150,L(118,30,'Cl',{t:'••',l:'••',r:'••'})+L(81,75,'Cl',{t:'••',b:'••',l:'••'})+L(118,75,'C',{t:'×•',b:'×•',l:'•×',r:'×•'})+L(155,75,'Cl',{t:'••',b:'••',r:'••'})+L(118,120,'Cl',{b:'••',l:'••',r:'••'})+T(205,75,'→')+T(275,75,'CCl₄','frm')+T(275,98,'4 single bonds','lab')),
co2:svg(300,80,L(40,40,'O',{t:'••',b:'••',r:'•×•×'})+L(70,40,'C',{r:'×•×•'})+L(100,40,'O',{t:'••',b:'••'})+T(145,40,'→')+T(220,40,'O = C = O','frm')+T(150,72,'C shares 2 pairs with each O (two double bonds)','lab')),
nh4:svg(330,120,L(80,25,'H')+L(50,55,'H')+L(80,55,'N',{t:'••',l:'×•',r:'•×',b:'•×'})+L(110,55,'H')+L(80,85,'H')+T(28,55,'[','br').replace('class="br"','class="br" style="font-size:90px"')+T(132,55,']','br').replace('class="br"','class="br" style="font-size:90px"')+T(146,18,'+','chg')+T(240,50,'[NH₄]⁺','frm')+T(240,72,'top pair (••) = coordinate bond','lab')+T(240,88,'both electrons came from N','lab')),
h3o:svg(330,110,L(50,45,'H')+L(80,45,'O',{t:'••',l:'×•',r:'•×',b:'••'})+L(110,45,'H')+L(80,75,'H')+T(28,55,'[','br').replace('class="br"','class="br" style="font-size:90px"')+T(132,55,']','br').replace('class="br"','class="br" style="font-size:90px"')+T(146,15,'+','chg')+T(240,45,'[H₃O]⁺','frm')+T(240,68,'bottom pair = coordinate bond','lab')+T(240,84,'1 lone pair left on O','lab')),
oh:svg(300,90,L(70,45,'O',{t:'••',l:'••',b:'•○',r:'•×'})+L(100,45,'H')+T(118,45,']','br')+T(38,45,'[','br')+T(130,26,'–','chg')+T(210,45,'[OH]⁻','frm')+T(210,68,'○ = extra electron gained','lab')),
nacl:svg(440,80,L(30,40,'Na',{r:'•'})+T(68,40,'+')+L(110,40,'Cl',{t:'××',b:'××',l:'×',r:'××'})+T(160,40,'→')+ION(205,40,'Na',{},'+')+ION(290,40,'Cl',{t:'××',b:'××',l:'•×',r:'××'},'–')+T(390,40,'NaCl','frm')),
cao:svg(440,80,L(30,40,'Ca',{r:'••'})+T(70,40,'+')+L(108,40,'O',{t:'××',b:'××',r:'××'})+T(155,40,'→')+ION(200,40,'Ca',{},'2+')+ION(285,40,'O',{t:'××',b:'××',l:'••',r:'××'},'2–')+T(385,40,'CaO','frm')),
mgcl2:svg(560,80,L(32,40,'Cl',{t:'××',b:'××',l:'××',r:'×'})+T(72,40,'+')+L(112,40,'Mg',{l:'•',r:'•'})+T(152,40,'+')+L(192,40,'Cl',{t:'××',b:'××',r:'××',l:'×'})+T(236,40,'→')+ION(282,40,'Cl',{t:'××',b:'××',l:'××',r:'×•'},'–')+ION(362,40,'Mg',{},'2+')+ION(440,40,'Cl',{t:'××',b:'××',l:'•×',r:'××'},'–')+T(520,40,'MgCl₂','frm')),
na2s:svg(520,80,L(28,40,'Na',{r:'•'})+T(62,40,'+')+L(98,40,'S',{t:'××',b:'××',l:'×',r:'×'})+T(134,40,'+')+L(170,40,'Na',{l:'•'})+T(210,40,'→')+ION(250,40,'Na',{},'+')+ION(325,40,'S',{t:'××',b:'××',l:'•×',r:'×•'},'2–')+ION(400,40,'Na',{},'+')+T(475,40,'Na₂S','frm')),
ab2:svg(200,80,L(40,40,'B',{t:'••',b:'••',l:'••',r:'•×'})+L(70,40,'A',{t:'××',b:'××',r:'×•'})+L(100,40,'B',{t:'••',b:'••',r:'••'})+T(150,40,'AB₂','frm')),
octet:svg(480,140,shells(45,62,'He',[2])+T(45,125,'He 2 — duplet ✓','lab')+shells(150,62,'Ne',[2,8])+T(150,125,'Ne 2,8 — octet ✓','lab')+shells(270,62,'Na',[2,8,1])+T(270,125,'Na 2,8,1 — unstable','lab')+shells(400,62,'Cl',[2,8,7])+T(400,125,'Cl 2,8,7 — unstable','lab')),
transfer:svg(470,150,shells(55,70,'Na',[2,8,1])+shells(165,70,'Cl',[2,8,'×××××××'])+`<path d="M58 27 Q110 -6 160 26" fill="none" stroke="#059669" stroke-width="2" marker-end="url(#ar)"/><defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="#059669"/></marker></defs>`+T(232,70,'→')+shells(295,70,'Na',[2,8])+T(295,138,'Na⁺ 2,8','lab')+shells(410,70,'Cl',[2,8,'×××××××○'])+T(410,138,'Cl⁻ 2,8,8','lab')+T(55,138,'Na 2,8,1','lab')+T(165,138,'Cl 2,8,7','lab')),
polar:svg(440,120,T(60,30,'Non-polar: H₂ / Cl₂','lab')+L(40,60,'H')+mk(60,56,'•')+mk(60,64,'×')+L(80,60,'H')+`<ellipse cx="60" cy="60" rx="14" ry="12" fill="#6366f122"/>`+T(60,95,'pair exactly in the middle','lab')+T(300,30,'Polar: HCl','lab')+L(250,60,'H')+mk(296,56,'•')+mk(296,64,'×')+L(320,60,'Cl')+`<ellipse cx="296" cy="60" rx="14" ry="12" fill="#ef444433"/>`+T(250,36,'δ+','chg')+T(320,36,'δ–','chg')+T(290,95,'Cl pulls the pair towards itself','lab')),
lattice:(()=>{let s='';for(let r=0;r<4;r++)for(let c=0;c<5;c++){const p=(r+c)%2===0;s+=`<circle cx="${30+c*30}" cy="${30+r*28}" r="${p?9:13}" fill="${p?'#fca5a5':'#a5b4fc'}"/>`+T(30+c*30,30+r*28,p?'+':'–','lab')}
  [[230,40],[300,60],[260,110],[340,120],[380,45]].forEach(([x,y])=>{s+=`<circle cx="${x}" cy="${y}" r="10" fill="#d1fae5" stroke="#059669"/><circle cx="${x+14}" cy="${y}" r="10" fill="#d1fae5" stroke="#059669"/>`});
  return svg(420,170,s+T(90,155,'Ionic: ions locked in a lattice','lab')+T(310,155,'Covalent: separate molecules','lab'))})()
};

/* ---------------- Topics & concept cards ---------------- */
const TOPICS=[
{id:'t1',name:'1. Why atoms bond',ref:'p.23'},
{id:'t2',name:'2. Electrovalent (ionic) bond',ref:'p.24–27'},
{id:'t3',name:'3. Oxidation & reduction',ref:'p.24'},
{id:'t4',name:'4. Covalent bond',ref:'p.28–32'},
{id:'t5',name:'5. Polar & non-polar',ref:'p.28'},
{id:'t6',name:'6. Lone pair & coordinate bond',ref:'p.33'},
{id:'t7',name:'7. Electron-dot diagrams',ref:'p.25–33, chart p.35'},
{id:'t8',name:'8. Properties: ionic vs covalent',ref:'p.34'},
{id:'t9',name:'9. Predict bond & formula',ref:'all'}
];

const CONCEPT={
t1:`<h3>Why do atoms bond at all?</h3>
${hook('Neon exists all alone as single atoms, happily, for ever. Sodium is never found alone in nature: it is always combined, as in NaCl. What does neon have that sodium does not?')}
<p>The answer is in the <b>outermost shell</b>. Look at the diagram: He and Ne have <b>full</b> outer shells. Na and Cl do not.</p>
${D.octet}
${story('Think of the outer shell as homework. Noble gases have <b>finished their homework</b> (full outer shell), so they have nothing to do and don\'t interact with anyone: they are <b>unreactive</b>. Every other atom has <b>unfinished homework</b>, so it "deals" with other atoms (gives away, takes or shares electrons) until its outer shell is complete. That dealing is <b>chemical bonding</b>.')}
<p>"Complete" means one of two things:</p>
<ul><li><b>Octet rule:</b> 8 electrons in the outermost shell (Ne, Ar …).</li>
<li><b>Duplet rule:</b> 2 electrons, when the atom has <b>only one shell</b> (like He). This is why H wants just 2.</li></ul>
${steps('How to work out what any atom will do',[
'Write the electronic configuration, e.g. Na = 2,8,<b>1</b>; Cl = 2,8,<b>7</b>; C = 2,<b>4</b>.',
'Find the nearest noble gas: Na → Ne (2,8); Cl → Ar (2,8,8).',
'Choose the <b>easier</b> path, i.e. fewer electrons to move. Na: lose 1 (easy) or gain 7 (very hard)? It <b>loses 1</b>. Cl: gain 1 or lose 7? It <b>gains 1</b>.',
'If both paths are hard (C 2,4: lose 4 or gain 4?), the atom <b>shares</b> electrons instead. That is why carbon forms covalent bonds.'])}
<table class="cmp"><tr><th>Chemical <u>bond</u></th><th>Chemical <u>bonding</u></th></tr><tr><td>The <b>force</b> that holds the atoms together (a thing)</td><td>The <b>process</b> of atoms combining to become stable (an event)</td></tr></table>
${trap('He is stable with <b>2</b>, not 8. So write "stable outer shell (duplet or octet)", not just "8 electrons".','Noble gases are unreactive <b>because</b> their outer shell is complete. Always give that reason.','Bond = force; bonding = process. Board questions ask you to "differentiate".')}
${cy(['Mg is 2,8,2. Which noble gas will it copy, and how?','Neon (2,8). It <b>loses 2</b> electrons. Losing 2 is much easier than gaining 6.'],['Why is He stable with only 2 electrons?','It has only one shell (K), and K can hold at most 2. A full K shell = <b>duplet</b>.'],['N is 2,5. Lose, gain or share?','Losing 5 or gaining 3 are both hard, so it mostly <b>shares</b> 3 (as in N₂, NH₃).'])}
${exam('Atoms other than noble gases have an incomplete outermost shell and are unstable. They combine by losing, gaining or sharing electrons to attain the stable electronic configuration (duplet or octet) of the nearest noble gas. The force holding them together is the chemical bond.')}
<div class="tip">Textbook: p.23.</div>`,

t2:`<h3>Electrovalent (ionic) bond: electrons are TRANSFERRED</h3>
${hook('Sodium is a metal that catches fire in water. Chlorine is a poisonous gas. Yet together they make the salt you eat. What happens between them?')}
${D.transfer}
${story('Sodium holds its single outer electron <b>loosely</b>, like a loose coin in an open pocket (<b>low ionisation potential</b>). Chlorine is <b>desperate</b> for one more electron (<b>high electron affinity</b>). So the electron simply moves from Na to Cl. Now Na has become <b>+</b> and Cl has become <b>–</b>, and opposite charges stick together like magnets. <b>The bond is that magnetic-like pull (electrostatic attraction), not the transfer itself.</b>')}
${steps('Follow the charges, counting protons and electrons (the key idea)',[
'Na atom: 11 protons (+), 11 electrons (–) → overall charge 0.',
'Na loses 1 electron: 11 protons, <b>10</b> electrons → one extra + → <b>Na⁺</b> (2,8).',
'Cl atom: 17 protons, 17 electrons → 0. It gains 1: 17 protons, <b>18</b> electrons → <b>Cl⁻</b> (2,8,8).',
'<b>Protons never change in bonding.</b> Charge = protons − electrons. That is how you can always check an ion.',
'Na⁺ and Cl⁻ attract each other → <b>NaCl</b>. In a crystal, each ion pulls on all its neighbours in every direction.'])}
<h3>Getting the formula right: balance the electrons</h3>
<p>Electrons lost must equal electrons gained. Mg loses <b>2</b>, but one Cl can take only <b>1</b>, so you need <b>2 Cl</b> → MgCl₂.</p>
<p>Shortcut (criss-cross): write the charges, then swap them as subscripts. Al³⁺ and O²⁻ give <b>Al₂O₃</b>. Check: 2 × 3 = 6 electrons lost = 3 × 2 = 6 gained ✔</p>
<p><b>Ionic bonds form easily when:</b> the metal has a low ionisation potential, the non-metal has a high electron affinity, and the <b>electronegativity difference is large</b>.</p>
${trap('Na⁺ has the <b>same configuration</b> as Ne, but it is <b>not</b> neon: it still has 11 protons.','In the dot diagram, ions <b>must</b> have [brackets] and charges. Without them you lose the mark.','"Shared" is the wrong word for ionic bonds. Electrons are <b>transferred</b>.','Electrovalency of Mg is <b>2</b> (electrons lost), of O is <b>2</b> (electrons gained).')}
${cy(['How many electrons does Mg²⁺ have?','12 − 2 = <b>10</b> (2,8).'],['Formula of the compound of K and S?','K⁺ and S²⁻ → <b>K₂S</b> (2 K each give 1 electron to 1 S).'],['Why do opposite ions stay together?','Strong <b>electrostatic force of attraction</b> between opposite charges.'])}
${exam('An electrovalent bond is the chemical bond formed between two atoms by the transfer of one or more electrons from the atom of a metallic (electropositive) element to an atom of a non-metallic (electronegative) element.')}
<div class="tip">Textbook: p.24–27; summary chart p.35.</div>`,

t3:`<h3>Oxidation & reduction: the electron way of looking at it</h3>
${hook('When Na becomes Na⁺ in NaCl, no oxygen is involved at all. Yet chemists say sodium was "oxidised". Why?')}
<p>In class 10 the definition changes: it is about <b>electrons</b>, not oxygen.</p>
<p style="font-size:20px;text-align:center"><b>OIL RIG</b>: <b>O</b>xidation <b>I</b>s <b>L</b>oss, <b>R</b>eduction <b>I</b>s <b>G</b>ain (of electrons)</p>
${story('Electrons are <b>negative</b>. Losing something negative makes you more positive, just as giving away a debt makes your balance go up. So: <b>lose e⁻ → charge goes UP → oxidation</b>; <b>gain e⁻ → charge goes DOWN → reduction</b>.')}
${(()=>{let s=`<line x1="30" y1="45" x2="410" y2="45" stroke="#6b7280" stroke-width="2"/>`;[-2,-1,0,1,2,3].forEach((n,i)=>{const x=50+i*70;s+=`<line x1="${x}" y1="39" x2="${x}" y2="51" stroke="#6b7280"/>`+T(x,64,(n>0?'+':'')+n,'lab')});
 return svg(440,100,s+T(220,18,'OXIDATION (lose e⁻): charge moves RIGHT → (e.g. Fe²⁺ → Fe³⁺, S²⁻ → S)','lab')+T(220,88,'← REDUCTION (gain e⁻): charge moves LEFT (e.g. Cu²⁺ → Cu, Cl₂ → Cl⁻)','lab'))})()}
${steps('How to decide in any equation',[
'Are electrons written? <b>e⁻ added on the left</b> (… + 2e⁻ →) means <b>gain</b> = reduction. <b>e⁻ on the right / subtracted</b> means <b>loss</b> = oxidation.',
'No electrons written? Compare the <b>charges</b> before and after. Up = oxidation; down = reduction.',
'Element on its own (Cl₂, Cu, S, Zn) = charge <b>0</b>.'])}
<table class="cmp"><tr><th>Oxidation</th><th>Reduction</th></tr>
<tr><td><b>Loss</b> of electrons</td><td><b>Gain</b> of electrons</td></tr>
<tr><td>Fe²⁺ → Fe³⁺, Cl⁻ → Cl₂ (–1 → 0)</td><td>Cu²⁺ → Cu, S → S²⁻</td></tr></table>
<p><b>Redox</b> = both happen together, because the electrons one substance loses must go somewhere. In Zn + CuSO₄ → ZnSO₄ + Cu: Zn → Zn²⁺ (<b>oxidised</b>) and Cu²⁺ → Cu (<b>reduced</b>). In every ionic bond the metal is oxidised and the non-metal is reduced.</p>
${trap('Cl⁻ → Cl₂ is <b>oxidation</b> (–1 → 0, it loses an electron), even though nothing looks "added".','Fe³⁺ → Fe²⁺ is <b>reduction</b>: the charge went down.','Don\'t write "gain of oxygen" when the question says "in terms of electrons".')}
${cy(['Zn → Zn²⁺ + 2e⁻ : oxidation or reduction?','<b>Oxidation</b>: electrons lost (written on the right).'],['S + 2e⁻ → S²⁻ ?','<b>Reduction</b>: electrons gained.'],['In 2FeCl₂ + Cl₂ → 2FeCl₃, what is oxidised?','Fe²⁺ → Fe³⁺: <b>Fe²⁺ (FeCl₂) is oxidised</b>; Cl₂ is reduced to Cl⁻.'])}
${exam('Oxidation is the process in which an atom or ion loses electrons. Reduction is the process in which an atom or ion gains electrons.')}
<div class="tip">Textbook: p.24.</div>`,

t4:`<h3>Covalent bond: electrons are SHARED</h3>
${hook('Two chlorine atoms meet. Each one wants one more electron, and neither is willing to give one up. Who wins?')}
${story('Neither wins: they <b>share</b>. Imagine two students who each have 7 of the 8 cards in a set. Each puts one card into a <b>shared album</b> between them. Now <b>each</b> can count 8 cards: their own 6 plus the 2 in the shared album. A <b>shared pair counts for BOTH atoms.</b> That is the whole secret of covalent bonding.')}
${D.cl2}
${steps('Counting electrons around Cl in Cl₂ (do this for every molecule)',[
'Draw an imaginary circle around one Cl, including the shared pair between the atoms.',
'Count: 6 unshared (3 lone pairs) + 2 shared = <b>8</b> ✔. Do the same for the other Cl: also 8 ✔.',
'One shared pair = one bond = a single line: <b>Cl–Cl</b>.'])}
<p><b>How many pairs must an atom share?</b> As many as it is short of 8 (or 2 for H). <b>Pairs = 8 − valence electrons.</b></p>
<table class="cmp"><tr><th>Atom</th><th>Valence e⁻</th><th>Short by</th><th>Bond in X₂</th><th>Lone pairs on each atom</th></tr>
<tr><td>H</td><td>1</td><td>1 (to 2)</td><td>single H–H</td><td>0</td></tr>
<tr><td>Cl</td><td>7</td><td>1</td><td>single Cl–Cl</td><td>3</td></tr>
<tr><td>O</td><td>6</td><td>2</td><td>double O=O</td><td>2</td></tr>
<tr><td>N</td><td>5</td><td>3</td><td>triple N≡N</td><td>1</td></tr></table>
${D.h2}${D.o2}${D.n2}${KEY_E}
<p>Pattern: <b>more pairs shared → fewer lone pairs left</b>. Lone pairs = (valence electrons − electrons used in bonds) ÷ 2.</p>
<p><b>Why only non-metals?</b> Both atoms hold electrons tightly (high ionisation potential and electron affinity, small electronegativity difference). Neither will let go, so transfer is impossible and they share.</p>
<p><b>Covalency</b> = the number of electron pairs an atom shares: H 1, Cl 1, O 2, N 3, C 4.</p>
${trap('Each atom contributes <b>one</b> electron to each shared pair. Use • for one atom and × for the other so the examiner can see this.','Don\'t forget the <b>lone pairs</b> (N₂ has one on each N; Cl₂ has 3 on each Cl).','H can never have more than <b>2</b> electrons around it.')}
${cy(['How many lone pairs are there in Cl₂ altogether?','<b>6</b> (3 on each Cl).'],['Covalency of O in H₂O?','<b>2</b>: it shares 2 pairs, one with each H.'],['Why is N₂ so unreactive?','Its <b>triple bond</b> (3 shared pairs) is very strong and hard to break.'])}
${exam('A covalent bond is the chemical bond formed by the mutual sharing of electron pairs between two atoms (generally non-metals), each atom contributing one electron to each shared pair, so that both attain a stable configuration.')}
<div class="tip">Textbook: p.28–32; chart p.35.</div>`,

t5:`<h3>Polar vs non-polar: is the sharing FAIR?</h3>
${hook('In H₂ and in HCl, the two atoms share one pair. Is the pair shared equally in both? Look at the diagram.')}
${D.polar}
${story('Think of a <b>tug-of-war</b> where the rope is the shared electron pair. In H–H, two equal teams pull: the rope stays exactly in the middle. That is <b>non-polar</b>. In H–Cl, Cl is the stronger team (more <b>electronegative</b>), so the rope shifts towards Cl. Cl becomes <b>slightly</b> negative (δ–) and H <b>slightly</b> positive (δ+). The electron is pulled closer, not taken: that would be ionic.')}
${flow('<b>Equal sharing</b><br>H₂, Cl₂: non-polar covalent','<b>Unequal sharing</b><br>HCl, H₂O, NH₃: polar covalent','<b>Complete transfer</b><br>NaCl: ionic')}
<p class="key" style="text-align:center">As the electronegativity difference grows, a bond moves from left to right along this line.</p>
<p><b>But CCl₄ and CH₄ are non-polar, even though the atoms are different. Why?</b> Picture a ring pulled by <b>four equal teams</b> from four symmetrical directions. The pulls cancel, so the ring doesn't move. Symmetrical molecules have no overall charge separation.</p>
<ul><li><b>Non-polar:</b> H₂, Cl₂, O₂, N₂, CH₄, CCl₄. They dissolve in organic solvents, not in water.</li>
<li><b>Polar:</b> HCl, H₂O, NH₃. They dissolve in water, and HCl and NH₃ form ions there, so their solutions conduct.</li></ul>
${trap('δ+ and δ– mean <b>partial</b> charges. Never write H⁺Cl⁻ for the HCl molecule.','A polar compound is still <b>covalent</b>. Pure (dry) HCl has no ions.','The three polar examples in the syllabus are HCl, H₂O and NH₃. Learn them as a set.')}
${cy(['Which is polar: N₂ or NH₃?','<b>NH₃</b>: N pulls the shared pairs away from H. N₂ has two identical atoms.'],['In HCl, which atom gets δ–?','<b>Cl</b>: it is more electronegative.'],['Cl is very electronegative. Why is CCl₄ still non-polar?','Its shape is <b>symmetrical</b>, so the four pulls cancel out.'])}
${exam('In a non-polar covalent compound the shared electron pair is equally distributed between the atoms (e.g. Cl₂, CH₄). In a polar covalent compound it is unequally distributed, because one atom is more electronegative, so that atom acquires a partial negative charge (δ–) and the other a partial positive charge (δ+) (e.g. HCl, H₂O).')}
<div class="tip">Textbook: p.28.</div>`,

t6:`<h3>Lone pairs & the coordinate bond</h3>
${hook('H⁺ is just a proton, with <b>zero</b> electrons. A covalent bond needs each atom to bring one electron. So how does H⁺ manage to bond with NH₃ to make NH₄⁺?')}
${story('In a normal covalent bond, two friends each bring <b>half</b> a lunch and share it. In a <b>coordinate bond</b>, one friend brings the <b>whole lunch</b> (a lone pair) and shares it with a friend who brought nothing (H⁺). Once they are eating, it is just a shared lunch. In NH₄⁺, all four N–H bonds end up <b>identical</b>; you cannot tell which one was coordinate.')}
<p><b>Lone pair</b> = a pair of valence electrons on an atom that is <b>not shared</b>. It is the "spare lunch" that can be donated.</p>
<p>A coordinate bond needs two things: a <b>donor</b> with a lone pair (N in NH₃, O in H₂O) and an <b>acceptor</b> with room but no electrons (H⁺).</p>
${steps('Drawing NH₄⁺ step by step',[
'Draw NH₃: N with 3 shared pairs (to 3 H) and <b>1 lone pair</b>.',
'Bring in H⁺. It has <b>no</b> electrons to offer.',
'N\'s lone pair now becomes the shared pair between N and the new H. Show it as <b>N → H</b> (the arrow goes from donor to acceptor).',
'Put the whole ion in <b>[brackets]</b> with <b>+</b> outside. The + charge came with H⁺ and now belongs to the whole ion.'])}
${D.nh4}
<p>Water does exactly the same: H₂O + H⁺ → <b>H₃O⁺</b> (hydronium). O had 2 lone pairs, gives 1, and keeps 1.</p>
${D.h3o}
<p>The other way round, H₂O ⇌ H⁺ + <b>OH⁻</b>: O keeps both electrons of the O–H bond it lost, so OH⁻ has 3 lone pairs and a – charge.</p>${D.oh}
<table class="cmp"><tr><th>Species</th><th>NH₃</th><th>H₂O</th><th>CH₄</th><th>NH₄⁺</th><th>H₃O⁺</th><th>OH⁻</th></tr>
<tr><td>Lone pairs on N / O / C</td><td>1</td><td>2</td><td>0</td><td>0</td><td>1</td><td>3</td></tr></table>
<p><b>NH₄Cl</b> has all three bond types: <b>ionic</b> (NH₄⁺ … Cl⁻), <b>covalent</b> (3 N–H) and <b>coordinate</b> (N→H).</p>
${trap('The arrow points <b>from</b> the donor (N or O) <b>to</b> the acceptor (H⁺).','CH₄ <b>cannot</b> form a coordinate bond: C has no lone pair.','H₃O⁺ still has <b>1</b> lone pair left. Students often draw 0.','Brackets and charge on NH₄⁺ and H₃O⁺ are compulsory.')}
${cy(['Why can\'t CH₄ form a coordinate bond with H⁺?','Carbon has <b>no lone pair</b>: all 4 pairs are shared.'],['How many lone pairs does O have in H₃O⁺?','<b>1</b> (it had 2 and donated 1).'],['Name the three types of bond in NH₄Cl.','Ionic, covalent and coordinate.'])}
${exam('A coordinate bond is a covalent bond in which both electrons of the shared pair are contributed by one atom (the donor), and the other atom (the acceptor) contributes none. It is also called a dative bond. E.g. NH₃ + H⁺ → NH₄⁺, where the lone pair of N is donated to H⁺.')}
<div class="tip">Textbook: p.33.</div>`,

t7:`<h3>How to draw an electron-dot (dot & cross) structure</h3>
${hook('Examiners give 2–3 marks for one diagram, and most lost marks come from small slips. Learn one routine and use it every time.')}
${steps('The routine',[
'Write each atom\'s configuration and take only the <b>valence</b> (outer) electrons.',
'Use <b style="color:#1d4ed8">•</b> for one atom\'s electrons and <b style="color:#dc2626">×</b> for the other\'s, so the examiner can see who gave what.',
'<b>Ionic?</b> (metal + non-metal) Show the electron moving with an arrow, then write each ion in <b>[ ]</b> with its <b>charge</b>, then the formula.',
'<b>Covalent?</b> (non-metal + non-metal) Put the <b>shared pairs between</b> the symbols and the rest as <b>lone pairs</b> around the atom.',
'<b>Final check</b>: draw a circle around each atom. Is it 8 (H: 2)? Total dots + crosses = total valence electrons?'])}
<h3>Worked example 1: NaCl (ionic)</h3>
<p>Na has 1 valence e⁻ (•) and Cl has 7 (×). The • moves to Cl. Result: [Na]⁺ with no outer dots, and [Cl]⁻ with 8 (7× + 1•).</p>${D.nacl}
<h3>Worked example 2: H₂O (covalent)</h3>
<p>O has 6 valence e⁻ and each H has 1. O pairs one of its electrons with each H's electron (2 bonds) and keeps 4 as <b>2 lone pairs</b>. Check: O = 4 + 2 + 2 = 8 ✔; each H = 2 ✔; total 6 + 1 + 1 = 8 electrons drawn ✔.</p>${D.h2o}${KEY_E}
${trap('Missing lone pairs on Cl, O or N: the most common lost mark.','Ions without brackets or charges.','Giving H more than 2 electrons.','Ionic diagrams drawn with shared pairs (ionic = transfer!).')}
${cy(['How many electrons surround Cl in [Cl]⁻?','<b>8</b> (7 of its own + 1 gained).'],['How many dots + crosses in total in CH₄?','4 (from C) + 4 × 1 (from H) = <b>8</b>.'],['NH₃: how many lone pairs must you draw?','<b>1</b>, on N.'])}
<div class="tip">Textbook: the chart on <b>p.35</b> shows all 11 structures. Cover it, draw them yourself, then compare.</div>`,

t8:`<h3>Properties: every reason comes from the particles</h3>
${hook('Common salt (NaCl) melts at 801 °C. Carbon tetrachloride (CCl₄) boils at just 77 °C. Both are made of atoms held by bonds. Why is the difference so huge?')}
${D.lattice}
${story('An <b>ionic</b> solid is like a huge crowd where <b>everyone holds hands with all their neighbours</b> (+ attracts – in every direction). To melt it you must pull this whole network apart, which takes lots of energy. A <b>covalent</b> substance is made of <b>separate small groups</b> (molecules). Inside each group the grip is strong, but the groups only <b>brush against each other weakly</b>. To melt or boil it you only separate the groups, and that is easy.')}
<p><b>Key insight:</b> boiling CCl₄ does <b>not</b> break any C–Cl bond. It only separates whole CCl₄ molecules from each other (weak intermolecular forces).</p>
<table class="cmp"><tr><th>Property</th><th>Ionic (electrovalent)</th><th>Covalent</th><th>Because…</th></tr>
<tr><td>State</td><td>Hard crystalline solids</td><td>Gases, liquids, soft solids</td><td>Strong electrostatic forces between ions vs weak forces between molecules</td></tr>
<tr><td>M.P./B.P.</td><td>High</td><td>Low</td><td>Breaking strong forces needs a lot of energy; weak forces need little</td></tr>
<tr><td>Volatility</td><td>Non-volatile</td><td>Volatile</td><td>Same reason</td></tr>
<tr><td>Electricity</td><td>Solid: no. Molten/aq: <b>yes</b></td><td>No (polar ones like HCl and NH₃ conduct in water)</td><td>Current needs <b>mobile charged particles</b>. Ions are locked in the solid but free when molten or dissolved. Molecules have no charge.</td></tr>
<tr><td>Solubility</td><td>Water ✓, organic ✗</td><td>Organic ✓, water ✗</td><td>Water is polar and pulls the ions apart. "Like dissolves like."</td></tr>
<tr><td>Reactions</td><td>Fast</td><td>Slow</td><td>Free ions react at once; covalent bonds must break and re-form</td></tr>
<tr><td>In solution</td><td><b>Dissociation</b></td><td><b>Ionisation</b></td><td>see below</td></tr></table>
${story('<b>Dissociation vs ionisation.</b> Dissociation is like a class of students already wearing name tags simply walking apart: the ions <b>already exist</b> in NaCl and just separate. Ionisation is like <b>printing new name tags</b>: HCl has no ions, and they are <b>created</b> when it reacts with water (HCl → H⁺ + Cl⁻).')}
${steps('How to write any "give reason" answer (2 marks)',['Name the <b>particles</b>: ions or molecules.','Name the <b>force</b>: strong electrostatic or weak intermolecular.','Link it to the property: more or less energy needed, ions free to move or not.'])}
${trap('"Covalent bonds are weak" is <b>wrong</b>. The forces <b>between molecules</b> are weak.','Solid NaCl does <b>not</b> conduct. The ions are present but not free to move.','Pure HCl gas does not conduct; HCl in water does (ionisation).')}
${cy(['Why does solid NaCl not conduct, but molten NaCl does?','In the solid, the ions are held in fixed positions in the lattice. When molten, the ions are <b>free to move</b> and carry current.'],['Why is CCl₄ a liquid at room temperature?','It is made of molecules held by <b>weak intermolecular forces</b>, which need little energy to overcome.'],['Is NaCl in water ionisation or dissociation?','<b>Dissociation</b>: the ions already existed.'])}
<div class="tip">Textbook: <b>p.34</b>. Every row there has a REASON, and the board asks these.</div>`,

t9:`<h3>Predicting the bond type & formula from atomic numbers</h3>
${hook('The question says only "Element X has atomic number 12 and Y has 17." That sounds like too little information, but it is all you need.')}
${flow('Atomic number','Configuration','Valence e⁻','1–3: <b>metal</b> (loses)<br>4–7: <b>non-metal</b> (gains/shares)','Metal + non-metal → <b>ionic</b><br>Non-metal + non-metal → <b>covalent</b>')}
${steps('Worked example 1: X (12) and Y (17)',[
'X = 2,8,<b>2</b> → metal, loses 2 → X²⁺ (valency 2).',
'Y = 2,8,<b>7</b> → non-metal, gains 1 → Y⁻ (valency 1).',
'Metal + non-metal → <b>electrovalent</b>.',
'Formula: swap the valencies → <b>XY₂</b> (it is MgCl₂).'])}
${steps('Worked example 2: A (6) and B (17)',[
'A = 2,<b>4</b> → shares 4 (valency 4). B = 2,8,<b>7</b> → shares 1 (valency 1).',
'Non-metal + non-metal → <b>covalent</b>.',
'Formula → <b>AB₄</b> (it is CCl₄). The dot diagram has 4 single bonds.'])}
<p>Valency rule: metals = valence electrons; non-metals = <b>8 − valence electrons</b> (H = 1).</p>
${trap('H behaves like a <b>non-metal</b> when it bonds with non-metals (H₂O, NH₃, HCl are covalent).','Valency of a non-metal is 8 − v, not v (O has 6 valence e⁻ but valency 2).','Simplify the formula: Ca²⁺ + O²⁻ → CaO, not Ca₂O₂.')}
${cy(['Z = 19 and Z = 8: bond type and formula?','K (2,8,8,1) and O (2,6) → ionic, <b>K₂O</b>.'],['Z = 7 and Z = 1?','N (2,5) and H → covalent, <b>NH₃</b>.'],['Z = 16: valency?','2,8,6 → 8 − 6 = <b>2</b> (S).'])}`
};

/* ---------------- Questions (every question from textbook p.36–38) ---------------- */
const Q=[
/* ===== T1 ===== */
{id:'p37-1a',t:'t1',src:'p.37 · Q1(a)',ref:'p.23',type:'open',q:'Differentiate between <b>chemical bond</b> and <b>chemical bonding</b>, with an illustration.',
 hint:'One is a <i>force</i>, the other is a <i>process</i>.',
 model:`<table class="cmp"><tr><th>Chemical bond</th><th>Chemical bonding</th></tr><tr><td>The <b>force of attraction</b> holding two atoms together in a molecule or compound.</td><td>The <b>process</b> by which atoms combine, by transfer or sharing of electrons, to form a bond.</td></tr><tr><td>e.g. the electrovalent bond between Na⁺ and Cl⁻ in NaCl.</td><td>e.g. Na transferring 1 electron to Cl.</td></tr></table>`},
{id:'p37-1b',t:'t1',src:'p.37 · Q1(b)',ref:'p.23',type:'open',q:'Differentiate between <b>stable</b> and <b>unstable</b> electronic configuration, with an illustration.',
 hint:'Count the electrons in the outermost shell. Is it 8 (or 2)?',
 model:`<table class="cmp"><tr><th>Stable</th><th>Unstable</th></tr><tr><td>Outermost shell has <b>8 electrons</b> (octet), or <b>2</b> if it is the only shell (duplet).</td><td>Outermost shell has <b>fewer than 8</b> (or fewer than 2).</td></tr><tr><td>Unreactive. e.g. Ne (2,8), He (2), Ar (2,8,8)</td><td>Reactive: loses, gains or shares e⁻. e.g. Na (2,8,1), Cl (2,8,7)</td></tr></table>`},
{id:'p37-1c',t:'t1',src:'p.37 · Q1(c)',ref:'p.23',type:'open',q:'Differentiate between the <b>duplet rule</b> and the <b>octet rule</b>, with an illustration.',
 hint:'Duplet → like helium (2). Octet → like neon/argon (8).',
 model:`<table class="cmp"><tr><th>Duplet rule</th><th>Octet rule</th></tr><tr><td>Atoms tend to get <b>2 electrons</b> in their outermost (K) shell, like <b>helium</b>.</td><td>Atoms tend to get <b>8 electrons</b> in their outermost shell, like <b>neon or argon</b>.</td></tr><tr><td>e.g. each H in H₂ (H:H) has 2; Li⁺ (2)</td><td>e.g. Na⁺ (2,8), Cl⁻ (2,8,8), each Cl in Cl₂</td></tr></table>`},
{id:'p37-1d',t:'t1',src:'p.37 · Q1(d)',ref:'p.23–28',type:'open',q:'Differentiate between <b>electron transfer</b> and <b>electron sharing</b>, with an illustration.',
 hint:'Transfer → ions → ionic bond. Sharing → shared pairs → covalent bond.',
 model:`<table class="cmp"><tr><th>Electron transfer</th><th>Electron sharing</th></tr><tr><td>Electrons are <b>completely transferred</b> from a metal atom to a non-metal atom.</td><td>Electron <b>pairs are mutually shared</b> between non-metal atoms.</td></tr><tr><td>Ions are formed, giving an <b>electrovalent</b> bond.</td><td>No ions; a <b>covalent</b> bond.</td></tr><tr><td>e.g. Na → Na⁺ + e⁻; Cl + e⁻ → Cl⁻ (NaCl)</td><td>e.g. Cl + Cl → Cl:Cl (Cl₂)</td></tr></table>`},
{id:'p37-2a',t:'t1',src:'p.37 · Q2(a)',ref:'p.23',type:'open',q:'Give reason: <b>Noble gases are unreactive</b>, while atoms of elements other than noble gases are chemically reactive.',
 hint:'What do noble gases already have in their outer shell?',
 model:`Noble gases already have a <b>stable electronic configuration</b>: a complete <b>octet</b> (a duplet for He) in the valence shell. So they have no tendency to lose, gain or share electrons, and are unreactive.<br>Atoms of other elements have an <b>incomplete</b> valence shell, so they react (lose, gain or share electrons) to reach the stable configuration of the nearest noble gas.`},
{id:'p37-2b',t:'t1',src:'p.37 · Q2(b)',ref:'p.23',type:'open',q:'Give reason: <b>Chemical bonding between atoms results in formation of a molecule.</b>',
 hint:'After bonding, each atom is stable. What do we call the stable combined unit?',
 model:`During bonding, atoms transfer or share electrons so that each one gets a <b>stable octet or duplet</b>. The bonded atoms then exist together as a <b>stable, lower-energy unit</b> held by chemical bonds, and that unit is a <b>molecule</b>. e.g. H + H → H:H (H₂ molecule).`},

/* ===== T2 ===== */
{id:'p36-25-2',t:'t2',src:'p.36 · 2025 Q2',ref:'p.22',type:'mcq',q:'Given four ions: Cl⁻, Li⁺, Al³⁺, K⁺. Identify the pair of ions which have the <b>same electronic configuration</b>. [Cl=17, Li=3, Al=13, K=19]',
 opts:['Cl⁻ & Li⁺','Al³⁺ & K⁺','Cl⁻ & K⁺','Li⁺ & K⁺'],ans:2,
 hint:'Electrons in an ion = atomic no. − charge. Work out all four.',
 exp:'Cl⁻: 17+1 = 18 → 2,8,8. K⁺: 19−1 = 18 → 2,8,8 ✓. Li⁺ = 2 (2). Al³⁺ = 10 (2,8).'},
{id:'p37-3a',t:'t2',src:'p.37 · Q3(a)',ref:'p.24',type:'fill',q:'Given: A − 2e⁻ → A²⁺ ; &nbsp; B + 2e⁻ → B²⁻ ; &nbsp; A²⁺ + B²⁻ → AB<br>i] {0} is a metal. &nbsp;&nbsp; ii] {1} is an anion.',
 blanks:[{o:['A','B'],a:0},{o:['A²⁺','B²⁻'],a:1}],
 hint:'Metals LOSE electrons. Anion = negative ion.',
 exp:'A loses electrons, so A is the metal. B²⁻ is negative, so it is the anion.'},
{id:'p37-6',t:'t2',src:'p.37 · Q6',ref:'p.25–27',type:'fill',q:`Fill in the blanks:<br>• <b>Sodium chloride</b> [NaCl], an electrovalent compound, is formed by transfer of {0} valence electron/s from metallic sodium to non-metallic chlorine.<br>• <b>Calcium oxide</b> [CaO] is similarly formed by transfer of {1} valence electron/s from metallic calcium to non-metallic oxygen.<br>• <b>Magnesium chloride</b> [MgCl₂] is formed by transfer of {2} valence electron/s from {3} magnesium atom/s to {4} chlorine atom/s.`,
 blanks:[{o:['one','two','three'],a:0},{o:['one','two','three'],a:1},{o:['one','two','three'],a:1},{o:['one','two'],a:0},{o:['one','two'],a:1}],
 hint:'Na 2,8,1 · Ca 2,8,8,2 · Mg 2,8,2 · Cl 2,8,7 (needs only 1).',
 exp:'Mg has 2 valence electrons and each Cl needs only 1. So <b>one</b> Mg atom gives <b>one</b> electron to <b>each of two</b> Cl atoms, giving MgCl₂. (The handwritten "two" Mg atoms in the book is wrong.)'},
{id:'p38-4-5',t:'t2',src:'p.38 · Q4.5',ref:'p.24',type:'fill',q:'For formation of an electrovalent bond between elements X and Y, which are a metal and a non-metal respectively, X should have a {0} ionisation potential and Y a {1} electron affinity.',
 blanks:[{o:['high','low'],a:1},{o:['high','low'],a:0}],
 hint:'The metal must lose electrons EASILY. The non-metal must be EAGER to gain them.',
 exp:'Low ionisation potential means X loses electrons easily. High electron affinity means Y gains electrons readily.'},
{id:'p37-3b',t:'t2',src:'p.37 · Q3(b)',ref:'p.24',type:'open',q:'Oppositely charged ions (cations and anions) attract one another to form an <i>electrovalent bond</i>, leading to formation of an <i>electrovalent compound</i>. <b>Define</b> the terms in italics.',
 hint:'Both definitions use: transfer of electrons, metal → non-metal.',
 model:`<b>Electrovalent bond:</b> the chemical bond formed between two atoms by the <b>transfer of one or more electrons</b> from the atom of a <b>metallic</b> element to the atom of a <b>non-metallic</b> element.<br><b>Electrovalent compound:</b> the chemical compound formed as a result of the transfer of electrons from a metal atom to a non-metal atom. It is made of oppositely charged ions held together by electrostatic forces (e.g. NaCl).`},
{id:'p37-3c1',t:'t2',src:'p.37 · Q3(c)(i)',ref:'p.24',type:'open',q:'Give reason: <b>Na [at. no. 11] has an electropositive valency of +1</b> and <b>Cl [at. no. 17] an electronegative valency of −1.</b>',
 hint:'Write 2,8,1 and 2,8,7. What is the easiest way for each to reach an octet?',
 model:`Na (2,8,1) <b>loses 1 electron</b> to get the stable octet (2,8) and becomes Na⁺. The number of electrons lost (1) gives an electropositive valency of <b>+1</b>.<br>Cl (2,8,7) <b>gains 1 electron</b> to get the octet (2,8,8) and becomes Cl⁻. The number of electrons gained (1) gives an electronegative valency of <b>−1</b>.`},
{id:'p37-3c2',t:'t2',src:'p.37 · Q3(c)(ii)',ref:'p.24',type:'open',q:'Give reason: <b>Atoms are electrically neutral, while ions are charged particles</b> and exist independently in solution.',
 hint:'Compare protons and electrons in each.',
 model:`In an atom, <b>number of protons = number of electrons</b>, so the charges cancel and the atom is neutral.<br>An ion is formed by <b>loss or gain of electrons</b>, so protons ≠ electrons and it carries a net charge.<br>In solution, water weakens the electrostatic attraction between the ions, so they move about <b>freely and independently</b>.`},
{id:'p38-1-5',t:'t2',src:'p.38 · Q1.5',ref:'p.26',type:'open',q:'Give reason: In the formation of MgO the magnesium atom [at. no. 12] <b>loses two electrons</b> from its valence shell.',
 hint:'Mg = 2,8,2. Is it easier to lose 2 or gain 6?',
 model:`Mg is 2,8,2. Losing its <b>2 valence electrons</b> gives it the stable octet of neon (2,8) and makes it Mg²⁺. That takes much less energy than gaining 6 electrons. Oxygen (2,6) accepts the 2 electrons and becomes O²⁻ (2,8). Mg²⁺ and O²⁻ attract to form MgO.`},

/* ===== T3 ===== */
{id:'p36-21-5',t:'t3',src:'p.36 · 2021-22 Q5',ref:'p.24',type:'mcq',q:'State the <b>oxidation</b> reaction from:',
 opts:['Fe³⁺ + 3e⁻ → Fe','Fe²⁺ − 1e⁻ → Fe³⁺','Cl₂ + 2e⁻ → 2Cl⁻','Cu²⁺ + 2e⁻ → Cu'],ans:1,
 hint:'OIL RIG: Oxidation Is Loss of electrons.',
 exp:'Fe²⁺ <b>loses</b> 1 electron (charge goes up from +2 to +3), so it is oxidation. The others gain electrons, so they are reduction.'},
{id:'p37-4a',t:'t3',src:'p.37 · Q4(a)',ref:'p.24',type:'toggle',q:'State which are <b>oxidation (O)</b> and which are <b>reduction (R)</b> reactions:',
 items:[['i] Cu → Cu²⁺ + 2e⁻',0],['ii] Cu²⁺ + 2e⁻ → Cu',1],['iii] Sn⁴⁺ + 2e⁻ → Sn²⁺',1],['iv] 2Cl⁻ → Cl₂ + 2e⁻',0],['v] Fe²⁺ → Fe³⁺ + 1e⁻',0],['vi] X + 2e⁻ → X²⁻',1],['vii] Y − 1e⁻ → Y¹⁺',0],['viii] Z³⁺ + 1e⁻ → Z²⁺',1]],
 hint:'Electrons on the RIGHT side (or subtracted) = lost = oxidation. Electrons added on the LEFT = gained = reduction.',
 exp:'Oxidation: i, iv, v, vii (electrons lost). Reduction: ii, iii, vi, viii (electrons gained).'},
{id:'p37-4b',t:'t3',src:'p.37 · Q4(b)',ref:'p.24',type:'toggle',q:'No electrons are shown here, so look at the <b>charge</b>. Oxidation (O) or reduction (R)?',
 items:[['i] Zn → Zn²⁺',0],['ii] S → S²⁻',1],['iii] Sn²⁺ → Sn',1],['iv] Fe²⁺ → Fe³⁺',0]],
 hint:'Charge goes UP (more +) → electrons were lost → oxidation.',
 exp:'Zn 0 → +2: lost 2e⁻ (O). S 0 → −2: gained 2e⁻ (R). Sn +2 → 0: gained 2e⁻ (R). Fe +2 → +3: lost 1e⁻ (O).'},
{id:'p38-4-2',t:'t3',src:'p.38 · Q4.2',ref:'p.24',type:'fill',q:'In the reaction Cl₂ + 2KI → 2KCl + I₂, the conversion of 2I⁻ to I₂ is deemed as {0}.',
 blanks:[{o:['oxidation','reduction'],a:0}],
 hint:'I⁻ (−1) → I₂ (0). Did the charge go up or down?',
 exp:'2I⁻ → I₂ + 2e⁻: electrons are lost, so it is <b>oxidation</b>.'},
{id:'p38-1-3',t:'t3',src:'p.38 · Q1.3',ref:'p.24',type:'open',q:'Give reason: <b>Iron displaces copper</b> from a solution of a copper salt. The reaction is deemed as a <b>redox</b> reaction.',
 hint:'Write the two half-reactions: what happens to Fe, and what happens to Cu²⁺?',
 model:`Iron is <b>more reactive</b> than copper, so it displaces copper: Fe + CuSO₄ → FeSO₄ + Cu.<br>Fe → Fe²⁺ + 2e⁻ (loss of electrons = <b>oxidation</b>)<br>Cu²⁺ + 2e⁻ → Cu (gain of electrons = <b>reduction</b>)<br>Oxidation and reduction happen <b>together</b>, so it is a redox reaction.`},

/* ===== T4 ===== */
{id:'p36-20-2',t:'t4',src:'p.36 · 2020 Q2',ref:'p.28',type:'word',q:'Give one word or phrase for: The chemical bond formed by a shared pair of electrons, each bonding atom contributing one electron to the pair.',
 accept:['covalent bond','covalent','covalent bonding','covalent linkage'],ansText:'Covalent bond',
 hint:'"Shared" is the key word.',exp:'Sharing a pair, with each atom contributing one electron, is a <b>covalent bond</b>.'},
{id:'p36-21-4',t:'t4',src:'p.36 · 2021-22 Q4',ref:'p.35',type:'mcq',q:'The type of bonding present in <b>hydrogen chloride</b> is:',
 opts:['Metallic','Ionic','Covalent','Coordinate'],ans:2,
 hint:'H and Cl are both non-metals.',exp:'Two non-metals share one pair (H:Cl), so the bond is covalent. It is a polar covalent bond.'},
{id:'p36-mcq2',t:'t4',src:'p.36 · MCQ Q2',ref:'p.29–31',type:'mcq',q:'The compound which does <b>not</b> contain one single, a double or a triple covalent bond in its molecule:',
 opts:['Nitrogen','Chlorine','Methane','Oxygen'],ans:2,
 hint:'N₂ = triple, O₂ = double, Cl₂ = ONE single. What about CH₄?',
 exp:'Methane has <b>four</b> single bonds, not one single, a double or a triple. Nitrogen has a triple bond, oxygen a double and chlorine one single.'},
{id:'p38-4-3',t:'t4',src:'p.38 · Q4.3',ref:'p.32',type:'mcq',q:'The covalent molecule containing <b>three single covalent bonds</b> is:',
 opts:['water','methane','ammonia'],ans:2,
 hint:'Count the H atoms attached to the central atom.',exp:'NH₃ has 3 N–H bonds. Water has 2 and methane has 4.'},
{id:'p37-7a',t:'t4',src:'p.37 · Q7(a)',ref:'p.28',type:'match',q:'Formation of covalent compounds involves sharing of electron pairs between non-metallic atoms. <b>Match Column A with Column B.</b>',
 left:['i] 5 valence electrons','ii] 7 valence electrons','iii] 6 valence electrons'],
 right:['Share 2 pairs of electrons between the atoms','Form a covalent compound with a triple covalent bond','Share 1 pair of electrons between the atoms'],ans:[1,2,0],
 hint:'Pairs needed = 8 − valence electrons.',exp:'5 → needs 3 → triple (N₂). 7 → needs 1 → 1 pair (Cl₂). 6 → needs 2 → 2 pairs (O₂).'},
{id:'p36-25-1',t:'t4',src:'p.36 · 2025 Q1',ref:'p.28',type:'mcq',q:`The diagram shows bonding in the covalent molecule <b>AB₂</b> (the textbook draws it with shells on p.36; here is the dot-cross version). Which option shows the electronic configuration of A and B <b>before combining</b>?${D.ab2}<span class="key">A's electrons = ×, B's electrons = •</span>`,
 opts:['A: 2,4 &nbsp; B: 2,8,6','A: 2,4 &nbsp; B: 2,8,7','A: 2,8 &nbsp; B: 2,8,8','A: 2,6 &nbsp; B: 2,8,7'],ans:3,
 hint:'Count the × marks (A has 6 valence electrons) and the • marks around one B (7 valence electrons).',
 exp:'A has 6 valence electrons (2,6, like oxygen) and shares 1 pair with each B. Each B has 7 (2,8,7, like chlorine) and shares 1 pair.'},
{id:'p37-9',t:'t4',src:'p.37 · Q9',ref:'p.29–30',type:'open',q:'Give reasons: Molecules of hydrogen and chlorine have <b>single</b> covalent bonds, while oxygen has a <b>double</b> and nitrogen a <b>triple</b> covalent bond.',
 hint:'For each atom: how many electrons short of a duplet or octet?',
 model:`<ul><li><b>H</b> (1) needs 1 more electron for a duplet, so each H shares <b>1 pair</b>: H–H.</li><li><b>Cl</b> (2,8,7) needs 1, so it shares <b>1 pair</b>: Cl–Cl.</li><li><b>O</b> (2,6) needs 2, so it shares <b>2 pairs</b>: O=O.</li><li><b>N</b> (2,5) needs 3, so it shares <b>3 pairs</b>: N≡N.</li></ul>${D.o2}${D.n2}`},
{id:'p37-7b',t:'t4',src:'p.37 · Q7(b)',ref:'p.28',type:'open',q:'Define: i] Covalent bond &nbsp; ii] Covalent or molecular compound &nbsp; iii] Covalency &nbsp; iv] Shared pair of electrons',
 hint:'Keywords: mutual sharing, non-metals, pairs.',
 model:`<b>i] Covalent bond:</b> the chemical bond formed by <b>mutual sharing of one or more pairs of electrons</b> between two atoms of non-metallic elements, each atom contributing equally.<br><b>ii] Covalent (molecular) compound:</b> a compound formed by sharing of electron pairs between atoms of non-metals. It exists as <b>molecules</b> (e.g. CH₄, H₂O).<br><b>iii] Covalency:</b> the <b>number of electron pairs</b> an atom shares with other atoms when forming a covalent compound (N in NH₃ = 3).<br><b>iv] Shared pair:</b> a pair of electrons, <b>one contributed by each atom</b>, that belongs to both atoms and forms the covalent bond.`},
{id:'p38-1-4',t:'t4',src:'p.38 · Q1.4',ref:'p.28',type:'open',q:'Give reason: A non-metallic atom [at. no. 9] forms a molecule of the same, containing a <b>single covalent bond</b>.',
 hint:'At. no. 9 = 2,7. How many more electrons are needed?',
 model:`At. no. 9 is fluorine (2,7). It needs <b>only 1 electron</b> to complete its octet. Two F atoms each contribute 1 electron and share <b>one pair</b>, so both get 2,8. That gives one single covalent bond: F–F (F₂).`},

/* ===== T5 ===== */
{id:'p36-19-1',t:'t5',src:'p.36 · 2019 Q1',ref:'p.28',type:'word',q:'The term for: The covalent bond in which the electrons are shared <b>equally</b> between the combining atoms.',
 accept:['non-polar covalent bond','non polar covalent bond','nonpolar covalent bond','non-polar covalent','nonpolar covalent','non polar covalent','non-polar bond','nonpolar bond'],ansText:'Non-polar covalent bond',
 hint:'Equal sharing → no poles (no δ+ / δ−).',exp:'Equal sharing means no charge separation, so it is a <b>non-polar covalent bond</b> (e.g. H₂, Cl₂).'},
{id:'p36-25-3',t:'t5',src:'p.36 · 2025 Q3',ref:'p.28',type:'word',q:'State the term for: The type of covalent bond in which electrons are shared <b>unequally</b> between the combining atoms.',
 accept:['polar covalent bond','polar covalent','polar bond'],ansText:'Polar covalent bond',
 hint:'Unequal sharing creates δ+ and δ− ends (poles).',exp:'<b>Polar covalent bond</b> (e.g. HCl, H₂O).'},
{id:'p36-24-4',t:'t5',src:'p.36 · 2024 Q4',ref:'p.28',type:'fill',q:'Carbon tetrachloride is a {0} covalent molecule.',
 blanks:[{o:['polar','non-polar'],a:1}],hint:'CCl₄ is perfectly symmetrical: 4 Cl around C.',exp:'CCl₄ is symmetrical, so the pulls cancel and it is <b>non-polar</b>.'},
{id:'p38-4-1',t:'t5',src:'p.38 · Q4.1',ref:'p.28',type:'fill',q:'The bond between two elements in group 17 [VIIA] of the periodic table is likely to be {0}.',
 blanks:[{o:['ionic','covalent'],a:1}],hint:'Group 17 = halogens (F, Cl, Br, I). Metal or non-metal?',exp:'Both are non-metals and both want to <b>gain</b> 1 electron, so they share: <b>covalent</b> (e.g. Cl–Cl, I–Cl).'},
{id:'p36-20-3',t:'t5',src:'p.36 · 2020 Q3',ref:'p.34',type:'fill',q:'The <b>polar</b> covalent compound in <b>gaseous</b> state that does not conduct electricity is {0}.',
 blanks:[{o:['carbon tetrachloride','ammonia','methane'],a:1}],hint:'Which one is polar? (Remember: HCl, H₂O, NH₃.)',
 exp:'Ammonia is a polar covalent gas. As a gas it does not conduct (only molecules, no ions). CCl₄ and CH₄ are non-polar.'},
{id:'p37-7c1',t:'t5',src:'p.37 · Q7(c)',ref:'p.28',type:'multi',q:'Choose the <b>polar</b> covalent compounds from:',
 opts:['H₂','H₂O','Cl₂','CCl₄','N₂','NH₃','O₂','CH₄','HCl'],ans:[1,5,8],
 hint:'Same atoms → non-polar. Symmetrical (CH₄, CCl₄) → non-polar.',exp:'Polar: <b>H₂O, NH₃, HCl</b>. The rest are either identical atoms or symmetrical molecules.'},
{id:'p38-2',t:'t5',src:'p.38 · Q2',ref:'p.28, 32',type:'fill',q:'With reference to a molecule of water [H=1, O=8]: Water is a {0} covalent molecule in which the atom of {1} attracts electrons more strongly towards itself. The water molecule shows the presence of {2} covalent bond/s and {3} lone pair/s of electrons present in the {4} atom.',
 blanks:[{o:['non-polar','polar'],a:1},{o:['hydrogen','oxygen'],a:1},{o:['double','one single','two single'],a:2},{o:['one','two'],a:1},{o:['hydrogen','oxygen'],a:1}],
 hint:'Draw H:O:H. O has 6 valence electrons; 2 are used in sharing.',exp:`Polar; oxygen (more electronegative); two single bonds (H–O–H); two lone pairs on oxygen.${D.h2o}`},
{id:'p37-7c2',t:'t5',src:'p.37 · Q7(c) contd.',ref:'p.28',type:'open',q:'<b>Differentiate</b> polar covalent compounds from non-polar covalent compounds with reference to: i] distribution of shared pair of electrons between atoms &nbsp; ii] charge separation between atoms.',
 hint:'Think of HCl vs Cl₂.',
 model:`<table class="cmp"><tr><th></th><th>Polar (e.g. HCl)</th><th>Non-polar (e.g. Cl₂, CH₄)</th></tr><tr><td>i] Shared pair</td><td><b>Unequally</b> distributed, shifted towards the more electronegative atom</td><td><b>Equally</b> distributed, in the middle</td></tr><tr><td>ii] Charge separation</td><td><b>Present</b>: partial charges δ+ and δ− (H<sup>δ+</sup>–Cl<sup>δ−</sup>)</td><td><b>Absent</b>: no partial charges</td></tr></table>${D.polar}`},

/* ===== T6 ===== */
{id:'p36-21-2',t:'t6',src:'p.36 · 2021-22 Q2',ref:'p.32',type:'mcq',q:'State which has <b>two</b> lone pairs of electrons:',
 opts:['Ammonia','Methane','Water','Ammonium ion'],ans:2,hint:'O has 6 valence e⁻ and uses 2 in bonds. N has 5 and uses 3.',exp:'Water: O keeps 2 lone pairs. NH₃ has 1; CH₄ and NH₄⁺ have 0.'},
{id:'p36-24-1',t:'t6',src:'p.36 · 2024 Q1',ref:'p.32',type:'mcq',q:'In the molecule of water, the oxygen atom has ____ of electrons:',
 opts:['One shared pair','Three shared pairs','Two lone pairs','One lone pair'],ans:2,hint:'Look at the H₂O dot structure (chart p.35, box 9).',exp:'O shares 2 pairs (one with each H) and keeps <b>2 lone pairs</b>.'},
{id:'p36-mcq4',t:'t6',src:'p.36 · MCQ Q4',ref:'p.33',type:'mcq',q:'The ion containing <b>one</b> lone pair of electrons:',
 opts:['OH⁻','H₃O⁺','NH₄⁺','H⁺'],ans:1,hint:'H₂O had 2 lone pairs. When it takes an H⁺, how many are left?',
 exp:'H₂O (2 lone pairs) uses 1 to bind H⁺, so H₃O⁺ has <b>1</b> left. OH⁻ has 3, NH₄⁺ has 0 and H⁺ has none.'},
{id:'p36-mcq3',t:'t6',src:'p.36 · MCQ Q3',ref:'p.33',type:'mcq',q:'A compound containing an <b>electrovalent, covalent and a coordinate</b> bond:',
 opts:['C⇆O (carbon monoxide)','H–O–N=O with N→O (nitric acid)','Na⁺[O–H]⁻ (sodium hydroxide)','[NH₄]⁺Cl⁻ (ammonium chloride)'],ans:3,
 hint:'You need an ionic part (brackets + charges) AND an arrow (coordinate) inside.',
 exp:'NH₄Cl: ionic between NH₄⁺ and Cl⁻, 3 covalent N–H bonds, and 1 coordinate N→H⁺. NaOH has no coordinate bond. CO and HNO₃ have no ionic bond.'},
{id:'p38-4-4',t:'t6',src:'p.38 · Q4.4',ref:'p.33',type:'fill',q:'The molecule of water combines with a {0} to form a hydronium ion.',
 blanks:[{o:['hydrogen atom','proton','hydrogen molecule'],a:1}],hint:'The hydronium ion is H₃O⁺. What is H⁺?',exp:'H₂O + H⁺ → H₃O⁺. H⁺ is a <b>proton</b>: it has no electrons, so it accepts O\'s lone pair.'},
{id:'p36-25-5',t:'t6',src:'p.36 · 2025 Q5',ref:'p.33',type:'open',q:'Define <b>co-ordinate bond</b>.',
 hint:'It is a special covalent bond. Who supplies the electrons?',
 model:`A co-ordinate bond is a type of covalent bond in which the <b>shared pair of electrons is contributed by one atom only</b> (the donor) but is <b>shared by both atoms</b> (donor and acceptor). It is shown by an arrow from donor to acceptor, e.g. H₃N → H⁺ in NH₄⁺.`},
{id:'p37-10a',t:'t6',src:'p.37 · Q10 (i, ii)',ref:'p.33',type:'open',q:'Explain the terms: i] <b>Lone pair</b> of electrons &nbsp; ii] <b>Coordinate bond</b>.',
 hint:'Lone = not shared. Coordinate = both electrons from one side.',
 model:`<b>i] Lone pair:</b> a pair of valence electrons that is <b>not shared</b> with any other atom (e.g. N in NH₃ has 1; O in H₂O has 2).<br><b>ii] Coordinate bond:</b> a covalent bond in which <b>both electrons of the shared pair come from one atom</b> (donor) and are shared with an atom or ion that needs electrons (acceptor). Shown as donor → acceptor.`},
{id:'p37-10b',t:'t6',src:'p.37 · Q10 (a, b)',ref:'p.33',type:'open',q:'Explain <b>diagrammatically</b> the lone pair effect of:<br>(a) the nitrogen atom of the ammonia molecule, leading to formation of the ammonium ion [NH₄]⁺<br>(b) the oxygen atom of the H₂O molecule, leading to formation of the hydronium [H₃O]⁺ and hydroxyl [OH]⁻ ions.',
 hint:'H⁺ has NO electrons. It needs a pair, and the lone pair supplies it.',
 model:`<b>(a)</b> NH₃ + H⁺ → [NH₄]⁺. The <b>lone pair on N</b> is donated to H⁺, forming a coordinate bond (H₃N → H⁺).${D.nh4}
<b>(b)</b> H₂O + H⁺ → [H₃O]⁺. O donates <b>one of its two lone pairs</b> to H⁺.${D.h3o}
Hydroxyl ion: when water ionises (H₂O ⇌ H⁺ + OH⁻), H⁺ leaves <b>without</b> its electron, so the shared pair stays on O. That gives [OH]⁻ with 3 lone pairs.${D.oh}${KEY_E}`},

/* ===== T7 ===== */
{id:'p36-21-3',t:'t7',src:'p.36 · 2021-22 Q3',ref:'p.32',type:'mcq',q:'📖 <b>Look at the four diagrams in your textbook, p.36 (2021-22 Q3).</b> State which electron arrangement for the outer-shell electrons in a covalent compound is <b>correct</b>.',
 opts:['Diagram i]','Diagram ii]','Diagram iii]','Diagram iv]'],ans:2,
 hint:'Check: does each H have exactly 2 electrons? Does the central atom have 8, including its lone pair?',
 exp:`<b>iii]</b> is NH₃ drawn correctly: N has 1 lone pair (••) plus 3 shared pairs = 8, and each H has 2.<br>i] and ii] give H too many electrons. iv] is missing N's lone pair (N would have only 6).${D.nh3}`},
{id:'p36-19-2',t:'t7',src:'p.36 · 2019 Q2',ref:'p.30, 25',type:'open',q:'Draw the electron dot diagram of: i] Nitrogen molecule [N=7] &nbsp; ii] Sodium chloride [Na=11, Cl=17]',
 hint:'N 2,5 → shares 3 pairs. Na 2,8,1 → gives 1 e⁻ to Cl 2,8,7.',model:`${D.n2}${D.nacl}${KEY_E}<div class="tip">Check: N₂ has a triple bond and 1 lone pair on each N. NaCl has brackets and charges.</div>`},
{id:'p36-20-4',t:'t7',src:'p.36 · 2020 Q4',ref:'p.26, 29, 32',type:'open',q:'Draw the electron dot diagram for: i] Calcium oxide &nbsp; ii] Chlorine molecule &nbsp; iii] Water molecule. Represent the electrons by [•] and [×]. [Ca=20, O=8, Cl=17, H=1]',
 hint:'Ca 2,8,8,2 gives 2 e⁻ to O 2,6. Cl shares 1 pair. O shares 1 pair with each H.',model:`${D.cao}${D.cl2}${D.h2o}${KEY_E}`},
{id:'p36-23-3',t:'t7',src:'p.36 · 2023 Q3',ref:'p.33, 30',type:'open',q:'Draw the electron dot structure for: i] Ammonium ion &nbsp; ii] A molecule of nitrogen [N=7, H=1]',
 hint:'NH₄⁺ = NH₃ + H⁺ (the lone pair of N goes to H⁺). N₂ = triple bond.',model:`${D.nh4}${D.n2}${KEY_E}`},
{id:'p36-24-2',t:'t7',src:'p.36 · 2024 Q2',ref:'p.31, 30',type:'open',q:'Draw the electron dot structure of: a] Methane &nbsp; b] Nitrogen [N=7, C=6, H=1]',
 hint:'C 2,4 shares 1 pair with each of 4 H.',model:`${D.ch4}${D.n2}${KEY_E}`},
{id:'p36-25-4',t:'t7',src:'p.36 · 2025 Q4',ref:'p.27, 35, 33',type:'open',q:'Draw the dot and cross structure of:<br>a] An ionic compound formed when Mg reacts with dilute HCl.<br>b] A covalent compound formed when H₂ reacts with Cl₂.<br>c] The positive ion produced when ammonia gas is dissolved in water. [Mg=12, Cl=17, H=1, N=7]',
 hint:'First name the products: Mg + 2HCl → MgCl₂ + H₂; H₂ + Cl₂ → 2HCl; NH₃ + H₂O → NH₄⁺ + OH⁻.',
 model:`a] MgCl₂: ${D.mgcl2} b] HCl: ${D.hcl} c] NH₄⁺: ${D.nh4}${KEY_E}`},
{id:'p37-5a',t:'t7',src:'p.37 · Q5(a)',ref:'p.25',type:'open',q:'Give i] the ionic equation and ii] the electron dot structure for the electrovalent compound formed between <b>A [2,8,1] and B [2,8,7]</b> [A = Na, B = Cl].',
 hint:'Write: metal → ion + e⁻, non-metal + e⁻ → ion, then combine.',model:`i] Na → Na⁺ + e⁻ ; &nbsp; Cl + e⁻ → Cl⁻ ; &nbsp; Na⁺ + Cl⁻ → NaCl<br>ii]${D.nacl}${KEY_E}`},
{id:'p37-5b',t:'t7',src:'p.37 · Q5(b)',ref:'p.26',type:'open',q:'Give i] the ionic equation and ii] the electron dot structure for the compound formed between <b>C [2,8,8,2] and D [2,6]</b> [C = Ca, D = O].',
 hint:'Ca gives 2, O takes 2.',model:`i] Ca → Ca²⁺ + 2e⁻ ; &nbsp; O + 2e⁻ → O²⁻ ; &nbsp; Ca²⁺ + O²⁻ → CaO<br>ii]${D.cao}${KEY_E}`},
{id:'p37-5c',t:'t7',src:'p.37 · Q5(c)',ref:'p.27',type:'open',q:'Give i] the ionic equation and ii] the electron dot structure for the compound formed between <b>E [2,8,2] and B [2,8,7]</b> [E = Mg, B = Cl].',
 hint:'Mg gives 2 but each Cl takes only 1, so you need 2 Cl.',model:`i] Mg → Mg²⁺ + 2e⁻ ; &nbsp; 2Cl + 2e⁻ → 2Cl⁻ ; &nbsp; Mg²⁺ + 2Cl⁻ → MgCl₂<br>ii]${D.mgcl2}${KEY_E}`},
{id:'p37-5d',t:'t7',src:'p.37 · Q5(d)',ref:'p.25–27',type:'open',q:'Give i] the ionic equation and ii] the electron dot structure for the compound formed between <b>A [2,8,1] and E [2,8,6]</b> [A = Na, E = S].',
 hint:'S needs 2 but each Na gives only 1, so you need 2 Na.',model:`i] 2Na → 2Na⁺ + 2e⁻ ; &nbsp; S + 2e⁻ → S²⁻ ; &nbsp; 2Na⁺ + S²⁻ → Na₂S<br>ii]${D.na2s}${KEY_E}`},
{id:'p37-8a',t:'t7',src:'p.37 · Q8 (a–d)',ref:'p.29–30, chart p.35',type:'open',q:'Draw the electron dot diagram for the formation of: (a) Hydrogen (b) Chlorine (c) Oxygen (d) Nitrogen. [H=1, O=8, N=7, Cl=17]',
 hint:'Single, single, double, triple.',model:`${D.h2}${D.cl2}${D.o2}${D.n2}${KEY_E}`},
{id:'p37-8b',t:'t7',src:'p.37 · Q8 (e–i)',ref:'p.31–32, chart p.35',type:'open',q:'Draw the electron dot diagram for the formation of: (e) Water (f) Methane (g) Carbon tetrachloride (h) Ammonia (i) Carbon dioxide. [H=1, C=6, N=7, O=8, Cl=17]',
 hint:'Central atom: O shares 2 pairs, N 3, C 4. In CO₂, C makes 2 double bonds.',model:`(e)${D.h2o}(f)${D.ch4}(g)${D.ccl4}(h)${D.nh3}(i)${D.co2}${KEY_E}`},

/* ===== T8 ===== */
{id:'p36-20-1',t:'t8',src:'p.36 · 2020 Q1',ref:'p.34',type:'mcq',q:'A compound with a <b>low boiling point</b> is:',
 opts:['NaCl','CaCl₂','KCl','CCl₄'],ans:3,hint:'Low boiling point → weak forces → covalent. Which one has no metal?',exp:'CCl₄ is covalent (weak van der Waals forces between molecules). The others are ionic.'},
{id:'p36-21-1',t:'t8',src:'p.36 · 2021-22 Q1',ref:'p.34',type:'mcq',q:'State which of the following compounds <b>neither dissociates nor ionises</b> in water:',
 opts:['Hydrochloric acid','Sodium hydroxide','Potassium nitrate','Carbon tetrachloride'],ans:3,
 hint:'Ionic compounds dissociate. Polar covalent HCl ionises. What is left?',exp:'CCl₄ is non-polar covalent and does not form ions at all. NaOH and KNO₃ dissociate; HCl ionises.'},
{id:'p36-mcq1',t:'t8',src:'p.36 · MCQ Q1',ref:'p.34',type:'mcq',q:'<b>Assertion (A):</b> Ionic compounds are hard solids at room temperature.<br><b>Reason (R):</b> The charged particles in them are closely packed, with strong force of attraction.',
 opts:['Both A & R are true, and R is the correct explanation of A','Both A & R are true, but R is not the correct explanation of A','A is true but R is false','A is false but R is true'],ans:0,
 hint:'Is R exactly the reason given on p.34 for "hard solids"?',exp:'Both are true, and closely packed ions with strong electrostatic forces is exactly why ionic compounds are hard solids.'},
{id:'p36-mcq5',t:'t8',src:'p.36 · MCQ Q5',ref:'p.34',type:'mcq',q:'The property which is true for <b>covalent hydrogen chloride gas</b>:',
 opts:['Good conductor of heat','Constituent units in compounds are ions','Soluble in water & solution conducts electricity','Undergoes electrolytic dissociation'],ans:2,
 hint:'HCl is POLAR covalent. What happens when it meets water?',exp:'HCl is polar, so it dissolves in water and <b>ionises</b> (HCl → H⁺ + Cl⁻), and the solution conducts. "Electrolytic dissociation" applies to ionic compounds only.'},
{id:'p36-23-2',t:'t8',src:'p.36 · 2023 Q2',ref:'p.34',type:'fill',q:'Non-polar covalent compounds are {0} conductors of heat and electricity.',
 blanks:[{o:['good','bad'],a:1}],hint:'Do they have free ions or free electrons?',exp:'They have no free ions, so they are <b>bad</b> conductors.'},
{id:'p36-23-1',t:'t8',src:'p.36 · 2023 Q1',ref:'p.34, 24, 32',type:'match',q:'<b>Match Column A with Column B.</b>',
 left:['i] Sodium chloride','ii] Hydrogen chloride gas','iii] Oxidation reaction','iv] Water'],
 right:['a] has two shared pairs of electrons','b] has high melting & boiling points','c] has low melting & boiling points','d] Zn − 2e⁻ → Zn²⁺','e] S + 2e⁻ → S²⁻'],ans:[1,2,3,0],
 hint:'One option in Column B is a distractor (a reduction reaction).',exp:'i-b (ionic), ii-c (covalent), iii-d (loss of e⁻), iv-a (H–O–H). e] is reduction, so it is not used.'},
{id:'p38-5',t:'t8',src:'p.38 · Q5',ref:'p.34',type:'fill',q:`Electronic configurations: Na = 2,8,1 · H = 1 · C = 2,4 · Cl = 2,8,7 · Li = 2,1. State which compounds a] have high/low boiling points, b] are soluble/insoluble in organic solvents.
<table class="cmp"><tr><th>Compound</th><th>a] Boiling point</th><th>b] In organic solvents</th></tr>
<tr><td>A: Hydrogen chloride</td><td>{0}</td><td>{1}</td></tr><tr><td>B: Sodium chloride</td><td>{2}</td><td>{3}</td></tr><tr><td>C: Sodium hydride</td><td>{4}</td><td>{5}</td></tr><tr><td>D: Lithium chloride</td><td>{6}</td><td>{7}</td></tr><tr><td>E: Carbon tetrachloride</td><td>{8}</td><td>{9}</td></tr></table>`,
 blanks:[0,1,0,1,0,1,0,1,1,0].map((v,i)=>i%2===0?{o:['high','low'],a:v}:{o:['soluble','insoluble'],a:v}),
 hint:'Step 1: decide ionic or covalent (does it contain a metal: Na, Li?). Step 2: apply the p.34 rules.',
 exp:'Ionic (contain the metals Na or Li): NaCl, NaH (Na⁺H⁻), LiCl → high b.p., insoluble in organic solvents. Covalent: HCl, CCl₄ → low b.p., soluble in organic solvents.'},
{id:'p36-23-4',t:'t8',src:'p.36 · 2023 Q4',ref:'p.34',type:'open',q:'Give a reason: <b>Ionic compounds do not conduct electricity in the solid state.</b>',
 hint:'Conduction needs FREE MOVING charged particles.',
 model:`In the solid state the ions are held in <b>fixed positions</b> in the crystal lattice by <b>strong electrostatic forces</b>. They cannot move, so there are no free ions to carry the current. In the molten or aqueous state the force is weakened or removed, so the ions become free and conduct.`},
{id:'p36-24-3',t:'t8',src:'p.36 · 2024 Q3',ref:'p.34',type:'open',q:'Give reasons: <b>Covalent compounds have low melting and boiling points.</b>',
 hint:'What holds the molecules to each other: strong or weak forces?',
 model:`Covalent compounds are made of <b>molecules</b> held together by <b>weak van der Waals forces</b> of attraction. <b>Less energy</b> is needed to overcome these weak forces, so their melting and boiling points are low.`},
{id:'p38-1-1',t:'t8',src:'p.38 · Q1.1',ref:'p.33–34',type:'open',q:'Give reason: <b>NH₃ gas</b>, a covalent compound, does not conduct electricity, but its aqueous solution NH₄OH is a <b>weak electrolyte</b>.',
 hint:'Gas = only molecules. In water, NH₃ reacts and gives a FEW ions.',
 model:`NH₃ gas is covalent and has only <b>molecules, no free ions</b>, so it does not conduct.<br>In water it forms NH₄OH, which <b>ionises only partially</b>: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻. The few ions present conduct weakly, so it is a <b>weak electrolyte</b>.`},
{id:'p38-1-2',t:'t8',src:'p.38 · Q1.2',ref:'p.34',type:'open',q:'Give reason: <b>MgCl₂</b> is soluble in water but insoluble in acetone, while <b>methane</b> is insoluble in water but soluble in acetone.',
 hint:'"Like dissolves like." Which is ionic, which is non-polar? Water is polar; acetone is an organic solvent.',
 model:`MgCl₂ is <b>ionic</b>. Water is a <b>polar</b> solvent with a <b>high dielectric constant</b>, which weakens the attraction between Mg²⁺ and Cl⁻ ions so they dissolve. Acetone (organic, low dielectric constant) cannot do this.<br>Methane is <b>non-polar covalent</b>. Like dissolves like, so it dissolves in the organic solvent acetone but not in polar water.`},
{id:'p37-11',t:'t8',src:'p.37 · Q11',ref:'p.34',type:'open',q:'Give specific reasons for <b>each</b> point:<br><b>Electrovalent compounds</b> are soluble in water, insoluble in organic solvents, good conductors of electricity in molten or aqueous state, have high melting points and undergo electrolytic dissociation on passage of electric current.<br><b>Covalent compounds</b> are soluble in organic solvents, insoluble in water, non-conductors of electricity, have low melting points and undergo ionisation on passage of electric current.',
 hint:'Open the 📘 Concept table and cover the "Because…" column. Can you say each reason?',
 model:`<table class="cmp"><tr><th>Point</th><th>Electrovalent: reason</th><th>Covalent: reason</th></tr>
<tr><td>Solubility</td><td>Water is polar with a high dielectric constant, so it weakens the forces between ions. Organic solvents (non-polar, low dielectric constant) cannot.</td><td>Non-polar molecules dissolve in non-polar organic solvents ("like dissolves like") but not in polar water.</td></tr>
<tr><td>Conduction</td><td>In the molten or aqueous state the ions are free to move to the electrodes.</td><td>Only molecules, no free ions, so they don't conduct.</td></tr>
<tr><td>Melting point</td><td>Strong electrostatic forces between ions need a lot of energy to break.</td><td>Weak van der Waals forces between molecules need little energy.</td></tr>
<tr><td>Dissociation / ionisation</td><td>Ions are <b>already present</b> and just separate: NaCl ⇌ Na⁺ + Cl⁻.</td><td>Ions are <b>formed</b> from molecules that had no ions: HCl → H⁺ + Cl⁻ (in solution).</td></tr></table>`},

/* ===== T9 ===== */
{id:'p38-3',t:'t9',src:'p.38 · Q3',ref:'p.24–28',type:'fill',q:`Complete the table:
<table class="cmp"><tr><th>Element</th><th>Element</th><th>Type of bond</th><th>Formula</th></tr>
<tr><td>A: at. no. 20</td><td>B: at. no. 8</td><td>{0}</td><td>{1}</td></tr>
<tr><td>A: at. no. 20</td><td>C: at. no. 17</td><td>{2}</td><td>{3}</td></tr>
<tr><td>D: at. no. 9</td><td>D: at. no. 9</td><td>{4}</td><td>{5}</td></tr>
<tr><td>E: at. no. 12</td><td>F: at. no. 16</td><td>{6}</td><td>{7}</td></tr>
<tr><td>G: at. no. 1</td><td>F: at. no. 16</td><td>{8}</td><td>{9}</td></tr></table>`,
 blanks:[{o:['electrovalent','covalent'],a:0},{o:['AB','A₂B','AB₂'],a:0},{o:['electrovalent','covalent'],a:0},{o:['AC','A₂C','AC₂'],a:2},{o:['electrovalent','covalent'],a:1},{o:['D','D₂','D₃'],a:1},{o:['electrovalent','covalent'],a:0},{o:['EF','E₂F','EF₂'],a:0},{o:['electrovalent','covalent'],a:1},{o:['GF','G₂F','GF₂'],a:1}],
 hint:'20 = Ca (metal, 2+), 8 = O (2−), 17 = Cl (1−), 9 = F (1−), 12 = Mg (2+), 16 = S (2−), 1 = H (1). Metal + non-metal = electrovalent.',
 exp:'CaO (electrovalent), CaCl₂ (electrovalent), F₂ (covalent), MgS (electrovalent), H₂S (covalent).'},
{id:'p38-6',t:'t9',src:'p.38 · Q6',ref:'p.24–28',type:'fill',q:`A compound has the formula <b>H₂Y</b>, where Y is a non-metal. State:<br>1. The electronic configuration of Y: {0}<br>2. The valency of Y: {1}<br>3. The bonding present in H₂Y: {2}<br>4. The bonding in the compound formed between potassium [³⁹₁₉K] and Y: {3}<br>5. The formula of the compound formed between calcium [⁴⁰₂₀Ca] and Y: {4}`,
 blanks:[{o:['2,4','2,5','2,6','2,7'],a:2},{o:['1','2','3'],a:1},{o:['electrovalent','covalent','coordinate'],a:1},{o:['electrovalent','covalent','coordinate'],a:0},{o:['CaY','CaY₂','Ca₂Y'],a:0}],
 hint:'Two H atoms (valency 1) → Y has valency 2 → Y needs 2 electrons → 6 valence electrons.',
 exp:'Y has valency 2, so it has 6 valence electrons: 2,6 (like O; S, 2,8,6, also fits). H₂Y is covalent (non-metals). K + Y gives K₂Y, which is electrovalent. Ca²⁺ + Y²⁻ gives <b>CaY</b>.'}
];


const CHAPTER=[
{id:'s-a',title:'A. Introduction — atom & chemical bond',ref:'p.21',t:['t1'],html:`
${hook('Everything around you, including water, salt, air and even you, is made of atoms stuck together. What is the "glue"?')}
<p><b>Chemical bond</b> = the force which holds <b>two or more atoms</b> together in a stable molecule. This chapter is about what that glue is and why atoms want it.</p>
${story('An atom is like a tiny solar system. A heavy <b>nucleus</b> (protons + neutrons) sits in the middle, and light <b>electrons</b> move around it in shells. In chemistry <b>only the outermost electrons take part</b>; the nucleus never changes. So the whole chapter is really about one thing: what happens to the <b>outer electrons</b>.')}
${svg(150,135,shells(75,62,'C',[2,4])+T(75,128,'Carbon atom 6p, 6n: 2,4','lab'))}
<table class="cmp"><tr><th>Particle</th><th>Charge</th><th>Mass</th></tr>${tr(['Proton ¹₁p','+1','1 a.m.u.'],['Neutron ¹₀n','0','1 a.m.u.'],['Electron ⁰₋₁e','–1','negligible'])}</table>
<ul><li><b>Metals</b> have 1, 2 or 3 valence electrons. They <b>lose</b> them and become <b>cations (+)</b>.</li>
<li><b>Non-metals</b> have 4–7 valence electrons. They <b>gain</b> (4), 3, 2 or 1 electrons and become <b>anions (–)</b>.</li>
<li>Atoms combine in two ways: <b>transfer</b> of electrons (metal → non-metal) or <b>sharing</b> of electrons (generally non-metal + non-metal).</li></ul>
${flow('Metal + non-metal','<b>transfer</b> of e⁻','ions (+ and –)','<b>electrovalent</b> bond')}${flow('Non-metal + non-metal','<b>sharing</b> of e⁻','molecules','<b>covalent</b> bond')}
<p class="key" style="text-align:center">This is the map of the whole chapter. Every later section fills in one box.</p>`},
{id:'s-pt',title:'Periodic chart & ion configurations',ref:'p.22',t:['t9'],html:`
<p>The first 20 elements. Learn the configurations, because almost every "predict the bond" question starts here.</p>
<table class="cmp"><tr><th>Z</th><th>El.</th><th>Config.</th><th>Z</th><th>El.</th><th>Config.</th></tr>${tr(
['1','H','1','11','Na','2,8,1'],['2','He','2','12','Mg','2,8,2'],['3','Li','2,1','13','Al','2,8,3'],['4','Be','2,2','14','Si','2,8,4'],['5','B','2,3','15','P','2,8,5'],
['6','C','2,4','16','S','2,8,6'],['7','N','2,5','17','Cl','2,8,7'],['8','O','2,6','18','Ar','2,8,8'],['9','F','2,7','19','K','2,8,8,1'],['10','Ne','2,8','20','Ca','2,8,8,2'])}</table>
<p><b>Mass number</b> = protons + neutrons. <b>Atomic number</b> = protons = electrons (in the neutral atom).</p>
<table class="cmp"><tr><th>Atom</th><th>→ Ion</th><th>How</th></tr>${tr(['Li 2,1','Li⁺ 2','loses 1 e⁻'],['Mg 2,8,2','Mg²⁺ 2,8','loses 2 e⁻'],['Al 2,8,3','Al³⁺ 2,8','loses 3 e⁻'],['Cl 2,8,7','Cl⁻ 2,8,8','gains 1 e⁻'],['K 2,8,8,1','K⁺ 2,8,8','loses 1 e⁻'])}</table>
${CONCEPT.t9}`},
{id:'s-b',title:'B. Chemical bonding — noble gases, duplet & octet',ref:'p.23',t:['t1'],html:`
${CONCEPT.t1}
<table class="cmp"><tr><th>Noble gas</th><th>Z</th><th>Configuration</th></tr>${tr(['He','2','<b>2</b>'],['Ne','10','2,<b>8</b>'],['Ar','18','2,8,<b>8</b>'],['Kr','36','2,8,18,<b>8</b>'],['Xe','54','2,8,18,18,<b>8</b>'],['Rn','86','2,8,18,32,18,<b>8</b>'])}</table>
<p><b>Driving force:</b> each atom tends to attain the stable configuration of the <b>nearest noble gas</b>. 2 electrons in the outer shell = <b>duplet rule</b> (He); 8 = <b>octet rule</b>.</p>
<p><b>Methods:</b> electron <b>transfer</b> → electrovalent (ionic) compound; electron <b>sharing</b> → covalent compound.</p>
<h3>Periodic properties that decide the bond type</h3>
<table class="cmp"><tr><th>Property</th><th>Ionic compound forms when…</th><th>Covalent compound forms when…</th></tr>${tr(
['Ionisation potential','<b>low</b> for the metal (loses e⁻ easily → cation)','high for both atoms'],
['Electron affinity','<b>high</b> for the non-metal (gains e⁻ easily → anion)','high for both atoms'],
['Electronegativity difference','<b>large</b>','<b>negligible</b>'])}</table>`},
{id:'s-c',title:'C. Electrovalent bonding — formation & definitions',ref:'p.24',t:['t2'],html:`
${CONCEPT.t2}
<h3>Definitions (learn word for word ★)</h3>
<p><b>Electrovalent (ionic) bond:</b> the chemical bond formed between two atoms by <b>transfer of one or more electrons</b> from the atom of a metallic, electropositive element to an atom of a non-metallic, electronegative element.</p>
<p><b>Electrovalent compound:</b> the chemical compound formed as a result of that transfer of one or more electrons from a metallic to a non-metallic atom.</p>
<p><b>Electrovalency:</b> the number of electrons <b>donated or accepted</b> by the valence shell of an atom to achieve a stable electronic configuration. Mg (2,8,2) → +2; O (2,6) → –2.</p>
<h3>Atoms vs ions</h3>
<table class="cmp"><tr><th>Atoms</th><th>Ions</th></tr>${tr(['Electrically <b>neutral</b>','Electrically <b>charged</b> (cation +, anion –)'],['May or may not exist independently','Exist independently in solution'],['Outer shell may or may not have a duplet/octet','Outer shell has a <b>complete</b> duplet/octet'])}</table>`},
{id:'s-ox',title:'C (contd). Oxidation & reduction — redox',ref:'p.24',t:['t3'],html:`
${CONCEPT.t3}
<table class="cmp"><tr><th>Oxidation (loss of e⁻)</th><th>Reduction (gain of e⁻)</th></tr>${tr(['Na – 1e⁻ → Na⁺','Cl₂ + 2e⁻ → 2Cl⁻'],['Zn – 2e⁻ → Zn²⁺','Cu²⁺ + 2e⁻ → Cu'],['Fe²⁺ – 1e⁻ → Fe³⁺','Fe³⁺ + 1e⁻ → Fe²⁺'],['S²⁻ – 2e⁻ → S','S + 2e⁻ → S²⁻'])}</table>
<p><b>Redox example 1:</b> 2FeCl₂ + Cl₂ → 2FeCl₃. Here 2Fe²⁺ → 2Fe³⁺ is oxidation (–2e⁻) and Cl₂ → 2Cl⁻ is reduction (+2e⁻).</p>
<p><b>Redox example 2:</b> Zn + CuSO₄ → ZnSO₄ + Cu. Here Zn → Zn²⁺ is oxidation and Cu²⁺ → Cu is reduction.</p>`},
{id:'s-d',title:'D. Structures of electrovalent compounds — NaCl, CaO, MgCl₂',ref:'p.25–27',t:['t2','t7'],html:`
${hook('Why is it NaCl but MgCl₂? Why not MgCl? This section answers that, using the same story told three times.')}
<p>For every structure the book follows the same 4 steps. Learn them once and you can explain any ionic compound:</p>
<ol><li>Configurations and the nearest noble gas.</li><li>The metal loses e⁻ (<b>oxidation</b>) and the non-metal gains e⁻ (<b>reduction</b>).</li><li>Ionic equation.</li><li>Electron-dot structure with <b>[brackets]</b> and <b>charges</b>.</li></ol>
<h3>I. Sodium chloride (p.25)</h3>
<p>Na (2,8,1) – 1e⁻ → Na⁺ (2,8) like <b>Neon</b>. &nbsp; Cl (2,8,7) + 1e⁻ → Cl⁻ (2,8,8) like <b>Argon</b>. &nbsp; Na⁺ + Cl⁻ → NaCl</p>
${D.nacl}
<h3>II. Calcium oxide (p.26)</h3>
<p>Ca (2,8,8,2) – 2e⁻ → Ca²⁺ (2,8,8) like <b>Argon</b>. &nbsp; O (2,6) + 2e⁻ → O²⁻ (2,8) like <b>Neon</b>. &nbsp; Ca²⁺ + O²⁻ → CaO</p>
${D.cao}
<h3>III. Magnesium chloride (p.27)</h3>
<p>Mg (2,8,2) – 2e⁻ → Mg²⁺ (2,8). Each Cl (2,8,7) can accept <b>only one</b> electron, so a <b>second Cl atom</b> is needed for the other electron. So 1 Mg + 2 Cl → MgCl₂.</p>
${D.mgcl2}${KEY_E}
${story('Think of it as <b>balancing a deal</b>: every electron given away must have someone to take it. Na gives 1 and Cl takes 1, so the deal is 1 : 1 (NaCl). Ca gives 2 and O takes 2, again 1 : 1 (CaO). Mg gives 2 but Cl takes only 1, so Mg needs <b>two</b> Cl partners (MgCl₂).')}
${cy(['Why is it CaO and not CaO₂?','Ca gives 2 and one O takes exactly 2. The deal is balanced 1 : 1.'],['Electronic configuration of Ca²⁺ and O²⁻?','Ca²⁺ = 2,8,8 (like Ar); O²⁻ = 2,8 (like Ne).'],['In forming MgCl₂, which atom is oxidised?','<b>Mg</b> (it loses 2 electrons). Cl is reduced.'])}
<div class="tip">Same pattern: K + Cl → KCl; 2Na + S → Na₂S (see the Practice tab).</div>`},
{id:'s-e',title:'E. Covalent bonding — formation & definitions',ref:'p.28',t:['t4'],html:`
${CONCEPT.t4}
<table class="cmp"><tr><th>Atoms</th><th>Pairs shared</th><th>Result</th></tr>${tr(
['two atoms with 7 valence e⁻ (X 2,7)','1','X–X single bond'],['two atoms with 6 (Y 2,6)','2','Y=Y double bond'],['two atoms with 5 (Z 2,5)','3','Z≡Z triple bond'],['dissimilar: A (1) + B (2,6) + A (1)','1 + 1','A–B–A: two single bonds'])}</table>
<h3>Definitions (★)</h3>
<p><b>Covalent bond:</b> the chemical bond formed due to <b>mutual sharing of electrons</b> between pairs of atoms of non-metallic elements. Each bonding atom contributes one electron to the pair.</p>
<p><b>Covalent compound:</b> the compound formed by that mutual sharing of electrons, which forms a covalent bond between the atoms.</p>
<p><b>Covalency:</b> the number of <b>electron pairs</b> an atom shares with one or more atoms (of the same or different kind) to achieve a stable configuration.</p>`},
{id:'s-pol',title:'E (contd). Polar & non-polar covalent compounds',ref:'p.28',t:['t5'],html:`
${CONCEPT.t5}
<table class="cmp"><tr><th>Non-polar</th><th>Polar</th></tr>${tr(['Shared pair <b>equally</b> distributed','Shared pair <b>unequally</b> distributed'],['No charge separation; molecule symmetrical and electrically neutral','Charge separation: the more electronegative atom gets δ–, the other δ+'],['H₂, Cl₂, O₂, N₂, CH₄, CCl₄','H₂O, NH₃, HCl'])}</table>`},
{id:'s-f',title:'F. Structures of covalent compounds (8 molecules)',ref:'p.29–32',t:['t4','t5','t7'],html:`
${hook('Eight molecules to learn sounds like a lot. But they all follow one rule, so you don’t need to memorise them; you can work each one out.')}
${story('Each atom brings a fixed number of "hands" (its valency) and every hand must hold exactly one hand of another atom. H has 1 hand, O has 2, N has 3, C has 4. So C holds 4 H (CH₄), N holds 3 H (NH₃), O holds 2 H (H₂O), and two O atoms hold each other with both hands (O=O). Leftover electrons that aren’t holding hands are the <b>lone pairs</b>.')}
<p>For each molecule the book gives the configuration, the nearest noble gas, the electrons needed, and the dot structure. <b>Cover the right-hand columns and test yourself.</b></p>
<table class="cmp"><tr><th>Molecule</th><th>Atoms need</th><th>Bonds</th><th>Type</th></tr>${tr(
['H₂ (p.29)','H: 1 e⁻ → duplet (He)','1 single H–H','non-polar'],['Cl₂ (p.29)','Cl 2,8,7: 1 e⁻ → Ar','1 single Cl–Cl','non-polar'],
['O₂ (p.30)','O 2,6: 2 e⁻ → Ne','1 double O=O','non-polar'],['N₂ (p.30)','N 2,5: 3 e⁻ → Ne','1 triple N≡N (1 lone pair on each N)','non-polar'],
['CCl₄ (p.31)','C 2,4: 4 e⁻; Cl: 1 e⁻','4 single C–Cl','non-polar'],['CH₄ (p.31)','C: 4 e⁻; H: 1 e⁻','4 single C–H','non-polar'],
['H₂O (p.32)','O: 2 e⁻; H: 1 e⁻','2 single O–H, 2 lone pairs on O','<b>polar</b>'],['NH₃ (p.32)','N: 3 e⁻; H: 1 e⁻','3 single N–H, 1 lone pair on N','<b>polar</b>'])}</table>
${D.h2}${D.cl2}${D.o2}${D.n2}${D.ccl4}${D.ch4}${D.h2o}${D.nh3}${KEY_E}
<p><b>Spot the pattern</b> in the central atom: C (4 valence e⁻) makes 4 bonds and has 0 lone pairs; N (5) makes 3 bonds and has 1 lone pair; O (6) makes 2 bonds and has 2 lone pairs. <b>Bonds + 2 × lone pairs = valence electrons.</b> That is why H₂O and NH₃ can later donate lone pairs (section G), but CH₄ can’t.</p>
${cy(['Why is CH₄ non-polar, but NH₃ polar?','CH₄ is symmetrical (4 identical C–H around C, so the pulls cancel). In NH₃, N is more electronegative and the shape is not symmetrical (there is a lone pair on one side).'],['How many electrons are shared in total in N₂?','3 pairs = <b>6</b> electrons.'],['In CCl₄, how many lone pairs in total?','4 Cl × 3 = <b>12</b>.'])}`},
{id:'s-g',title:'G. Coordinate bond — lone pair, H₃O⁺, OH⁻, NH₄⁺',ref:'p.33',t:['t6'],html:`
<p><b>Coordinate bond (★ definition):</b> a type of covalency in which <b>one</b> of the combining atoms contributes <b>both</b> the shared electrons. It is also called a <b>dative</b> or <b>co-ionic</b> bond and has properties of both ionic and covalent bonds.</p>
${CONCEPT.t6}
<h3>Why does this matter? Acids and ammonia in water</h3>
<h3>In water</h3>
<p>An acid (HCl, polar) in water (a polar solvent) releases <b>H⁺</b>. H₂O + H⁺ → <b>H₃O⁺</b> (hydronium ion): O donates a lone pair → O→H. Also H₂O ⇌ H⁺ + <b>OH⁻</b>.</p>${D.oh}
<h3>In ammonia</h3>
<p>NH₃ + H⁺ (from water) → <b>NH₄⁺</b> + OH⁻ ⇌ NH₄OH. N donates its lone pair → N→H.</p>
<table class="cmp"><tr><th>Lone pairs</th><td>OH⁻: 3</td><td>H₃O⁺: 1</td><td>NH₄⁺: 0</td><td>H⁺: 0</td></tr></table>
<h3>Compounds with mixed bonds (BQT)</h3>
<table class="cmp">${tr(['Electrovalent + covalent','NaOH (Na⁺[O–H]⁻), CaCO₃'],['Covalent + coordinate','CO (C≡O), HNO₃'],['Ionic + covalent + coordinate','NH₄Cl, K₄[Fe(CN)₆]'])}</table>`},
{id:'s-prop',title:'Properties & comparison of ionic vs covalent',ref:'p.34',t:['t8'],html:CONCEPT.t8},
{id:'s-chart',title:'Electron-dot structures — summary chart',ref:'p.35',t:['t7'],html:`${CONCEPT.t7}
<p>The chart on p.35 shows the structures already covered here. Ionic: NaCl, MgCl₂, CaO (section D). Covalent: H₂, Cl₂, O₂, N₂, CH₄, CCl₄, H₂O, NH₃ (section F). Coordinate: NH₄⁺, H₃O⁺ (section G). <b>Close the book and redraw all of them</b>, then check.</p>`}
];
const TOPIC_SEC={t1:'s-b',t2:'s-c',t3:'s-ox',t4:'s-e',t5:'s-pol',t6:'s-g',t7:'s-chart',t8:'s-prop',t9:'s-pt'};
