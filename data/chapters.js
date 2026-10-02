/* Every page shown on the home page (index.html), in order.
   {grp}                       → a group heading
   {f, t, d, key, n}           → a practice page: file in chapters/, title, description,
                                 its PAGE.key (progress) and question count (shown before first visit)
   {f, t, d, lab:1}            → a Lab / tools page (no progress bar)
   To add a chapter: add data/<name>.js, chapters/<name>.html, and one line here. */
const CHAPTERS=[
 {grp:'CHAPTER 2: CHEMICAL BONDING'},
 {f:'bonding.html',t:'Chemical Bonding',d:'Electrovalent, covalent & coordinate bonds, electron-dot structures, properties (p.21–38)',key:'chem-bonding-v1',n:70},

 {grp:'CHAPTER 4: MOLE CONCEPT & STOICHIOMETRY'},
 {f:'mole-1-gas-laws.html',t:'4.1 Gas laws & Gay-Lussac’s law',d:'Boyle, Charles, gas equation, s.t.p., Gay-Lussac’s law of combining volumes (p.69–74, 85, 97, 99)',key:'mole-1-v1',n:33},
 {f:'mole-2-mole-avogadro-vd.html',t:'4.2 Mole, Avogadro’s number & vapour density',d:'RAM, RMM, mole, 6.023×10²³, molar volume 22.4 L, gram atom / molecule, VD & molecular weight (p.74–86, 97, 99–100)',key:'mole-2-v1',n:90},
 {f:'mole-3-formulae.html',t:'4.3 % composition, empirical & molecular formula',d:'Percentage composition, water of crystallisation, empirical & molecular formula (p.87–101)',key:'mole-3-v1',n:56},
 {f:'mole-4-equations.html',t:'4.4 Calculations from equations + MCQ & HOTS',d:'Mass–mass, mass–volume, volume–volume from balanced equations; MCQs and HOTS (p.92–101)',key:'mole-4-v1',n:34},
 {f:'mole-lab.html',t:'🧪 Mole Lab: interactive tools',d:'Mole map converter, Gay-Lussac gas reactor, empirical formula builder, equation recipe scaler, Avogadro’s boxes, gas-law sliders, how big is a mole',lab:1},

 {grp:'CHAPTER 5: ELECTROLYSIS'},
 {f:'electrolysis-1.html',t:'5.1 Electrolytes, ions & selective discharge',d:'Electrolytes vs non-electrolytes, strong & weak, anode/cathode, oxidation & reduction, dissociation vs ionisation, the 3 rules of selective discharge (p.102–111, 123–126)',key:'electrolysis-1-v1',n:59},
 {f:'electrolysis-2.html',t:'5.2 Standard cells, electroplating, refining & extraction',d:'Molten PbBr₂, acidified water, CuSO₄ (Cu vs Pt), Ni & Ag plating, refining of copper, electrometallurgy, equation worksheet (p.112–126)',key:'electrolysis-2-v1',n:87},
 {f:'electrolysis-lab.html',t:'⚡ Electrolysis Lab: cell simulator',d:'Predict which ion is discharged, then watch ions migrate, gases bubble and metal deposit, for every cell in the syllabus',lab:1},

 {grp:'CHAPTER 7A: HYDROGEN CHLORIDE'},
 {f:'hcl-guide.html',t:'📖 7A Reading guide (read this first)',d:'The whole chapter in short, clear sentences: the big picture, one name for each term, numbered steps and &ldquo;Why?&rdquo; tables. No questions.',lab:1},
 {f:'hcl.html',t:'7A Hydrogen chloride & hydrochloric acid',d:'Lab preparation, fountain experiment, funnel arrangement, acidic properties, oxidising agents, aqua regia, tests &amp; uses (p.149–162)',key:'hcl-v1',n:96},

 {grp:'CHAPTER 7B: AMMONIA'},
 {f:'ammonia.html',t:'7B Ammonia',d:'Lab preparation from NH₄Cl &amp; nitrides, Haber’s process, fountain experiment, burning &amp; catalytic oxidation, basic nature &amp; precipitates, reducing action (CuO, PbO, Cl₂), tests &amp; uses (p.163–182)',key:'ammonia-v1',n:102},
 {grp:'CHAPTER 7C: NITRIC ACID'},
 {f:'nitric.html',t:'7C Nitric acid',d:'Lab preparation in an all-glass retort, Ostwald’s process, colour &amp; stability, acidic properties, oxidising action on C, S, P &amp; metals, passivity, aqua regia, brown ring test, nitrates &amp; uses (p.183–202)',key:'nitric-v1',n:146},
];
