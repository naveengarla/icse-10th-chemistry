const PAGE={key:'organic-3-v1',title:"8.4 Hydrocarbon preparation & reactions",book:{dir:'organic',from:219,to:258}};
const TOPICS=ALL_TOPICS.filter(t=>["alkanes", "alkenes", "alkynes"].includes(t.id));
const CHAPTER=ALL_CHAPTER.filter(s=>s.t.some(t=>TOPICS.some(x=>x.id===t)));
const Q=[
 {
  "id": "organic-10",
  "t": "alkanes",
  "src": "p.253 · ICSE 2018 opening substitution item",
  "ref": "p.228–231, 249",
  "type": "mcq",
  "q": "Which organic compound undergoes characteristic substitution?",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "opts": [
   "C₂H₂",
   "C₂H₄",
   "C₁₀H₁₈",
   "C₂H₆"
  ],
  "ans": 3,
  "exp": "C₂H₆ is an alkane."
 },
 {
  "id": "organic-23",
  "t": "alkanes",
  "src": "p.253 · ICSE 2019 Q1",
  "ref": "p.228–231, 249",
  "type": "mcq",
  "q": "Which hydrocarbon is a greenhouse gas?",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "opts": [
   "Acetylene",
   "Ethylene",
   "Ethane",
   "Methane"
  ],
  "ans": 3,
  "exp": "Methane contributes to the greenhouse effect."
 },
 {
  "id": "organic-24",
  "t": "alkenes",
  "src": "p.253 · ICSE 2019 Q2(i)",
  "ref": "p.232–233, 250",
  "type": "mcq",
  "q": "Ethanol → ethene using concentrated H₂SO₄ is:",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "opts": [
   "Dehydration",
   "Dehydrogenation",
   "Dehydrohalogenation"
  ],
  "ans": 0,
  "exp": "H₂O is eliminated at 170°C."
 },
 {
  "id": "organic-25",
  "t": "alkanes",
  "src": "p.253 · ICSE 2019 Q2(ii)",
  "ref": "p.228–231, 249",
  "type": "mcq",
  "q": "Substitution is characteristic of:",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "opts": [
   "Alkynes",
   "Alkenes",
   "Alkanes"
  ],
  "ans": 2,
  "exp": "Alkanes have no carbon–carbon multiple bond for characteristic addition."
 },
 {
  "id": "organic-26",
  "t": "alkenes",
  "src": "p.253 · ICSE 2019 Q3",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Write a balanced equation: chlorine gas reacts with ethene.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>4</sub> + Cl<sub>2</sub> → C<sub>2</sub>H<sub>4</sub>Cl<sub>2</sub></b></p><p><b>Conditions:</b> Halogen in inert solvent CCl4, room temperature.</p><p><b>What changes:</b> Addition gives a 1,2-dihaloethane.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-29",
  "t": "alkynes",
  "src": "p.253 · ICSE 2019 Q4(ii)",
  "ref": "p.236–239, 251",
  "type": "open",
  "q": "State the special structural feature of ethyne.",
  "hint": "A triple bond can undergo addition in two stages.",
  "model": "Its two carbon atoms are joined by a triple covalent bond, sharing three electron pairs."
 },
 {
  "id": "organic-33",
  "t": "alkenes",
  "src": "p.253 · ICSE 2019 Q6(i)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Prepare ethene from bromoethane. Give a balanced equation and conditions.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>5</sub>Br + KOH → C<sub>2</sub>H<sub>4</sub> + KBr + H<sub>2</sub>O</b></p><p><b>Conditions:</b> Hot concentrated alcoholic KOH.</p><p><b>What changes:</b> Dehydrohalogenation removes HBr.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-34",
  "t": "alkynes",
  "src": "p.253 · ICSE 2019 Q6(ii)",
  "ref": "p.236–239, 251",
  "type": "open",
  "q": "Prepare ethyne using calcium carbide. Give a balanced equation and conditions.",
  "hint": "A triple bond can undergo addition in two stages.",
  "model": "<p class=\"eq\"><b>CaC<sub>2</sub> + 2H<sub>2</sub>O → C<sub>2</sub>H<sub>2</sub> + Ca(OH)<sub>2</sub></b></p><p><b>Conditions:</b> Add cold water dropwise at room temperature.</p><p><b>What changes:</b> Calcium carbide releases ethyne on reaction with water.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-35",
  "t": "alkanes",
  "src": "p.253 · ICSE 2019 Q6(iii)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Prepare methane from sodium ethanoate. Give a balanced equation and conditions.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>CH<sub>3</sub>COONa + NaOH → CH<sub>4</sub> + Na<sub>2</sub>CO<sub>3</sub></b></p><p><b>Conditions:</b> Heat with soda lime (NaOH + CaO).</p><p><b>What changes:</b> Remove the carboxyl carbon. Two-carbon salt gives one-carbon alkane.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-39",
  "t": "alkynes",
  "src": "p.253 · ICSE 2019 Q7(iv)",
  "ref": "p.236–239, 251",
  "type": "open",
  "q": "Name the product of complete chlorination of ethyne.",
  "hint": "A triple bond can undergo addition in two stages.",
  "model": "1,1,2,2-tetrachloroethane."
 },
 {
  "id": "organic-41",
  "t": "alkenes",
  "src": "p.253 · ICSE 2019 Q9",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Name the gas formed when ethene undergoes hydrogenation.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "Ethane. Hydrogen is consumed, not evolved.<p class=\"eq\"><b>C<sub>2</sub>H<sub>4</sub> + H<sub>2</sub> → C<sub>2</sub>H<sub>6</sub></b></p><p><b>Conditions:</b> Nickel catalyst, about 300°C.</p><p><b>What changes:</b> Add one H to each carbon. Double bond becomes single.</p>"
 },
 {
  "id": "organic-44",
  "t": "alkanes",
  "src": "p.253 · ICSE 2020 Q3(i)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Prepare ethane from bromoethane using Zn/Cu couple in alcohol. Write a balanced equation.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>5</sub>Br + 2[H] → C<sub>2</sub>H<sub>6</sub> + HBr</b></p><p><b>Conditions:</b> Zn/Cu couple in alcohol.</p><p><b>What changes:</b> Replace Br with H.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-45",
  "t": "alkanes",
  "src": "p.253 · ICSE 2020 Q3(ii)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Write the complete combustion equation for ethane.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>2C<sub>2</sub>H<sub>6</sub> + 7O<sub>2</sub> → 4CO<sub>2</sub> + 6H<sub>2</sub>O</b></p><p><b>Conditions:</b> Ignite in excess oxygen.</p><p><b>What changes:</b> Balance C, then H, then O.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-50",
  "t": "alkanes",
  "src": "p.253 · ICSE 2020 Q5",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Give one reason for using soda lime rather than sodium hydroxide alone in methane preparation.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "Soda lime does not attack the glass apparatus as sodium hydroxide alone does. It is also not deliquescent."
 },
 {
  "id": "organic-55",
  "t": "alkenes",
  "src": "p.253 · ICSE 2021–22 Q1(ii)",
  "ref": "p.232–233, 250",
  "type": "mcq",
  "q": "The catalyst used for ethene → ethane is:",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "opts": [
   "Iron",
   "Nickel",
   "Cobalt",
   "Molybdenum"
  ],
  "ans": 1,
  "exp": "Nickel catalyses hydrogenation."
 },
 {
  "id": "organic-61",
  "t": "alkenes",
  "src": "p.254 · ICSE 2021–22 Q5(i)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Complete and balance: C2H4 + Cl2  → ? State conditions.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>4</sub> + Cl<sub>2</sub> → C<sub>2</sub>H<sub>4</sub>Cl<sub>2</sub></b></p><p><b>Conditions:</b> Halogen in inert solvent CCl4, room temperature.</p><p><b>What changes:</b> Addition gives a 1,2-dihaloethane.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-62",
  "t": "alkanes",
  "src": "p.254 · ICSE 2021–22 Q5(ii)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Complete and balance: 2C2H6 + 7O2  → ? State conditions.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>2C<sub>2</sub>H<sub>6</sub> + 7O<sub>2</sub> → 4CO<sub>2</sub> + 6H<sub>2</sub>O</b></p><p><b>Conditions:</b> Ignite in excess oxygen.</p><p><b>What changes:</b> Balance C, then H, then O.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-63",
  "t": "alkanes",
  "src": "p.254 · ICSE 2021–22 Q5(iii)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Complete and balance: CH4 + 2O2  → ? State conditions.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O</b></p><p><b>Conditions:</b> Ignite in excess oxygen.</p><p><b>What changes:</b> Complete combustion gives CO2 and water.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-71",
  "t": "alkanes",
  "src": "p.254 · ICSE 2023 Q1(ii)",
  "ref": "p.228–231, 249",
  "type": "mcq",
  "q": "Sodium propanoate heated with soda lime gives:",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "opts": [
   "Methane",
   "Ethane",
   "Ethene",
   "Propane"
  ],
  "ans": 1,
  "exp": "One carbon is removed, giving ethane."
 },
 {
  "id": "organic-73",
  "t": "alkanes",
  "src": "p.254 · ICSE 2023 Q2",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Match methane with the correct description(s): (a) two shared electron pairs; (b) high melting and boiling points; (c) greenhouse gas; (d) low melting and boiling points.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "(c) and (d) are both true. Methane has four shared electron pairs. The printed single-answer wording is not unique."
 },
 {
  "id": "organic-74",
  "t": "alkenes",
  "src": "p.254 · ICSE 2023 Q3",
  "ref": "p.232–233, 250",
  "type": "mcq",
  "q": "Ethene → ethane is:",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "opts": [
   "Hydration",
   "Hydrogenation"
  ],
  "ans": 1,
  "exp": "H₂ is added, not H₂O."
 },
 {
  "id": "organic-81",
  "t": "alkenes",
  "src": "p.254 · ICSE 2023 Q6(i)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Prepare ethene from ethanol. Give equation and conditions.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>5</sub>OH → C<sub>2</sub>H<sub>4</sub> + H<sub>2</sub>O</b></p><p><b>Conditions:</b> Conc. H2SO4 at 170°C, or Al2O3 at 350°C.</p><p><b>What changes:</b> Dehydration removes H2O and creates a C=C bond.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-82",
  "t": "alkynes",
  "src": "p.254 · ICSE 2023 Q6(ii)",
  "ref": "p.236–239, 251",
  "type": "open",
  "q": "Prepare ethyne from calcium carbide. Give equation and conditions.",
  "hint": "A triple bond can undergo addition in two stages.",
  "model": "<p class=\"eq\"><b>CaC<sub>2</sub> + 2H<sub>2</sub>O → C<sub>2</sub>H<sub>2</sub> + Ca(OH)<sub>2</sub></b></p><p><b>Conditions:</b> Add cold water dropwise at room temperature.</p><p><b>What changes:</b> Calcium carbide releases ethyne on reaction with water.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-83",
  "t": "alkanes",
  "src": "p.254 · ICSE 2023 Q6(iii)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Prepare monochloromethane from methane. Give equation and conditions.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>CH<sub>4</sub> + Cl<sub>2</sub> → CH<sub>3</sub>Cl + HCl</b></p><p><b>Conditions:</b> Diffused sunlight or ultraviolet light.</p><p><b>What changes:</b> One H is replaced by Cl.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-87",
  "t": "alkenes",
  "src": "p.254 · ICSE 2024 Q1(i)",
  "ref": "p.232–233, 250",
  "type": "mcq",
  "q": "The characteristic reaction of unsaturated hydrocarbons is:",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "opts": [
   "Addition",
   "Substitution",
   "Oxidation",
   "Redox"
  ],
  "ans": 0,
  "exp": "Addition occurs at the multiple bond. Unsaturated compounds can also undergo oxidation."
 },
 {
  "id": "organic-89",
  "t": "alkenes",
  "src": "p.254 · ICSE 2024 Q1(iii)",
  "ref": "p.232–233, 250",
  "type": "mcq",
  "q": "Ethanol → ethene using concentrated H₂SO₄ involves:",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "opts": [
   "Dehydration",
   "Dehydrogenation",
   "Dehydrohalogenation",
   "Hydrolysis"
  ],
  "ans": 0,
  "exp": "H₂O is eliminated."
 },
 {
  "id": "organic-96",
  "t": "alkanes",
  "src": "p.254 · ICSE 2024 Q4(a)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Complete: C₂H₅COONa + NaOH —heat/CaO→ ?",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>5</sub>COONa + NaOH → C<sub>2</sub>H<sub>6</sub> + Na<sub>2</sub>CO<sub>3</sub></b></p><p><b>Conditions:</b> Heat with soda lime.</p><p><b>What changes:</b> Three-carbon salt gives two-carbon alkane.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-97",
  "t": "alkynes",
  "src": "p.254 · ICSE 2024 Q4(b)",
  "ref": "p.236–239, 251",
  "type": "open",
  "q": "Complete: C₂H₄Br₂ + alcoholic KOH —heat→ ?",
  "hint": "A triple bond can undergo addition in two stages.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>4</sub>Br<sub>2</sub> + 2KOH → C<sub>2</sub>H<sub>2</sub> + 2KBr + 2H<sub>2</sub>O</b></p><p><b>Conditions:</b> Heat with concentrated alcoholic KOH (textbook route).</p><p><b>What changes:</b> Two HBr units are eliminated.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-100",
  "t": "alkenes",
  "src": "p.254 · ICSE 2024 Q5(c)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "From ethene, ethanoic acid, ethanol and methanal, select the fruit-ripening compound.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "Ethene."
 },
 {
  "id": "organic-102",
  "t": "alkanes",
  "src": "p.254 · ICSE 2024 Q7",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Identify the gas formed by complete combustion of methane.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "Carbon dioxide. Water is also formed, initially as vapour.<p class=\"eq\"><b>CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O</b></p><p><b>Conditions:</b> Ignite in excess oxygen.</p><p><b>What changes:</b> Complete combustion gives CO2 and water.</p>"
 },
 {
  "id": "organic-112",
  "t": "alkenes",
  "src": "p.255 · ICSE 2025 Q6",
  "ref": "p.232–233, 250",
  "type": "mcq",
  "q": "Choose the textbook catalyst for C₂H₄ + H₂ → C₂H₆.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "opts": [
   "Vanadium pentoxide",
   "Nickel",
   "Iron",
   "Concentrated sulphuric acid",
   "Platinum"
  ],
  "ans": 1,
  "exp": "Nickel is the taught catalyst. Platinum can also catalyse hydrogenation, so the unrestricted options are not chemically unique."
 },
 {
  "id": "organic-113",
  "t": "alkanes",
  "src": "p.255 · ICSE 2025 Q7(a)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Complete and balance: CH₃COONa + NaOH —heat/CaO→ ?",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>CH<sub>3</sub>COONa + NaOH → CH<sub>4</sub> + Na<sub>2</sub>CO<sub>3</sub></b></p><p><b>Conditions:</b> Heat with soda lime (NaOH + CaO).</p><p><b>What changes:</b> Remove the carboxyl carbon. Two-carbon salt gives one-carbon alkane.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-116",
  "t": "alkenes",
  "src": "p.255 · ICSE 2025 Q9(a)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "<table class=\"cmp\"><tr><th>Letter</th><th>Structure</th></tr><tr><td>A</td><td>CH₃COOH</td></tr><tr><td>B</td><td>CH₃CH₂OH</td></tr><tr><td>C</td><td>CH₂=CH₂</td></tr><tr><td>D</td><td>CH₃CH₂CH₂CH₃</td></tr><tr><td>E</td><td>CH₃CH₃</td></tr><tr><td>F</td><td>CH₃CH(CH₃)CH₃</td></tr></table>Use letters only. Which gives a single addition product with bromine?",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "C. Ethene gives 1,2-dibromoethane."
 },
 {
  "id": "organic-119",
  "t": "alkenes",
  "src": "p.255 · MCQ Q1",
  "ref": "p.232–233, 250",
  "type": "mcq",
  "q": "A: Ethanol with concentrated H₂SO₄ at 170°C gives ethene. R: The acid removes the elements of water.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "opts": [
   "Both A and R are true; R correctly explains A.",
   "Both A and R are true; R does not correctly explain A.",
   "A is true; R is false.",
   "A is false; R is true."
  ],
  "ans": 0,
  "exp": "Both are true. Dehydration explains ethene formation."
 },
 {
  "id": "organic-120",
  "t": "alkanes",
  "src": "p.255 · MCQ Q2",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Assertion–reason: A: Saturated organic compounds undergo characteristic substitution reactions only. R: Substitution replaces H atoms with Cl or Br in alkanes. Choose from: <table class=\"cmp\"><tr><th>Option</th><th>Meaning</th></tr><tr><td>a</td><td>Both A and R are true; R correctly explains A.</td></tr><tr><td>b</td><td>Both A and R are true; R does not correctly explain A.</td></tr><tr><td>c</td><td>A is true; R is false.</td></tr><tr><td>d</td><td>A is false; R is true.</td></tr></table>",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "In the intended characteristic-reaction comparison, both statements are true. R defines substitution but does not itself explain why saturation favours it, so (b) is defensible. The source gives no answer key. “Only” must not exclude combustion and other reactions. The lack of a multiple bond explains the characteristic contrast."
 },
 {
  "id": "organic-124",
  "t": "alkenes",
  "src": "p.255 · MCQ Q6",
  "ref": "p.232–233, 250",
  "type": "mcq",
  "q": "A: sodium propanoate heated with soda lime. B: chloroethane heated with concentrated alcoholic KOH. Which classifies both?",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "opts": [
   "Both dehydrohalogenation",
   "A decarboxylation; B dehydrohalogenation",
   "Both decarboxylation",
   "Only B is dehydrohalogenation"
  ],
  "ans": 1,
  "exp": "The complete classification is (b). Option (d) is also a true partial statement, so the printed question has overlapping options."
 },
 {
  "id": "organic-125",
  "t": "alkanes",
  "src": "p.255 · MCQ Q7",
  "ref": "p.228–231, 249",
  "type": "mcq",
  "q": "Ethyl bromide reduced using Zn/Cu in alcohol produces a compound containing:",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "opts": [
   "4 hydrogen atoms",
   "2 hydrogen atoms",
   "1 carbon atom",
   "6 hydrogen atoms"
  ],
  "ans": 3,
  "exp": "The product is ethane, C₂H₆."
 },
 {
  "id": "organic-222",
  "t": "alkanes",
  "src": "p.257 · Additional Q10(1)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Give the laboratory preparation equation and conditions: methane from sodium ethanoate.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>CH<sub>3</sub>COONa + NaOH → CH<sub>4</sub> + Na<sub>2</sub>CO<sub>3</sub></b></p><p><b>Conditions:</b> Heat with soda lime (NaOH + CaO).</p><p><b>What changes:</b> Remove the carboxyl carbon. Two-carbon salt gives one-carbon alkane.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-223",
  "t": "alkanes",
  "src": "p.257 · Additional Q10(2)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Give the laboratory preparation equation and conditions: methane from iodomethane.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>CH<sub>3</sub>I + 2[H] → CH<sub>4</sub> + HI</b></p><p><b>Conditions:</b> Zn/Cu couple in alcohol.</p><p><b>What changes:</b> Replace I with H: reduction of an alkyl halide.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-224",
  "t": "alkanes",
  "src": "p.257 · Additional Q10(3)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Give the laboratory preparation equation and conditions: ethane from sodium propanoate.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>5</sub>COONa + NaOH → C<sub>2</sub>H<sub>6</sub> + Na<sub>2</sub>CO<sub>3</sub></b></p><p><b>Conditions:</b> Heat with soda lime.</p><p><b>What changes:</b> Three-carbon salt gives two-carbon alkane.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-225",
  "t": "alkanes",
  "src": "p.257 · Additional Q10(4)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Give the laboratory preparation equation and conditions: ethane from bromoethane.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>5</sub>Br + 2[H] → C<sub>2</sub>H<sub>6</sub> + HBr</b></p><p><b>Conditions:</b> Zn/Cu couple in alcohol.</p><p><b>What changes:</b> Replace Br with H.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-226",
  "t": "alkenes",
  "src": "p.257 · Additional Q10(5)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Give the laboratory preparation equation and conditions: ethene from ethanol.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>5</sub>OH → C<sub>2</sub>H<sub>4</sub> + H<sub>2</sub>O</b></p><p><b>Conditions:</b> Conc. H2SO4 at 170°C, or Al2O3 at 350°C.</p><p><b>What changes:</b> Dehydration removes H2O and creates a C=C bond.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-227",
  "t": "alkenes",
  "src": "p.257 · Additional Q10(6)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Give the laboratory preparation equation and conditions: ethene from bromoethane.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>5</sub>Br + KOH → C<sub>2</sub>H<sub>4</sub> + KBr + H<sub>2</sub>O</b></p><p><b>Conditions:</b> Hot concentrated alcoholic KOH.</p><p><b>What changes:</b> Dehydrohalogenation removes HBr.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-228",
  "t": "alkynes",
  "src": "p.257 · Additional Q10(7)",
  "ref": "p.236–239, 251",
  "type": "open",
  "q": "Give the laboratory preparation equation and conditions: ethyne from calcium carbide.",
  "hint": "A triple bond can undergo addition in two stages.",
  "model": "<p class=\"eq\"><b>CaC<sub>2</sub> + 2H<sub>2</sub>O → C<sub>2</sub>H<sub>2</sub> + Ca(OH)<sub>2</sub></b></p><p><b>Conditions:</b> Add cold water dropwise at room temperature.</p><p><b>What changes:</b> Calcium carbide releases ethyne on reaction with water.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-229",
  "t": "alkynes",
  "src": "p.257 · Additional Q10(8)",
  "ref": "p.236–239, 251",
  "type": "open",
  "q": "Give the laboratory preparation equation and conditions: ethyne from 1,2-dibromoethane.",
  "hint": "A triple bond can undergo addition in two stages.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>4</sub>Br<sub>2</sub> + 2KOH → C<sub>2</sub>H<sub>2</sub> + 2KBr + 2H<sub>2</sub>O</b></p><p><b>Conditions:</b> Heat with concentrated alcoholic KOH (textbook route).</p><p><b>What changes:</b> Two HBr units are eliminated.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-233",
  "t": "alkanes",
  "src": "p.257 · Additional Q11-methane(1)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Give a balanced equation and conditions: Methane → carbon tetrachloride.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>CH<sub>4</sub> + 4Cl<sub>2</sub> → CCl<sub>4</sub> + 4HCl</b></p><p><b>Conditions:</b> Excess chlorine, diffused sunlight.</p><p><b>What changes:</b> All four H atoms are replaced.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-234",
  "t": "alkanes",
  "src": "p.257 · Additional Q11-methane(2)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Give a balanced equation and conditions: Methane → carbon dioxide.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O</b></p><p><b>Conditions:</b> Ignite in excess oxygen.</p><p><b>What changes:</b> Complete combustion gives CO2 and water.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-235",
  "t": "alkanes",
  "src": "p.257 · Additional Q11-methane(3)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Give a balanced equation and conditions: Methane → methanol.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>2CH<sub>4</sub> + O<sub>2</sub> → 2CH<sub>3</sub>OH</b></p><p><b>Conditions:</b> Cu catalyst, 200°C, 100 atmospheres (source conditions).</p><p><b>What changes:</b> Controlled catalytic oxidation gives methanol.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-238",
  "t": "alkanes",
  "src": "p.257 · Additional Q11-methane(6)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Give a balanced equation and conditions: Methane → methanal directly.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>CH<sub>4</sub> + O<sub>2</sub> → HCHO + H<sub>2</sub>O</b></p><p><b>Conditions:</b> Molybdenum oxide catalyst, 350–500°C (source).</p><p><b>What changes:</b> Controlled catalytic oxidation gives methanal.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-239",
  "t": "alkynes",
  "src": "p.257 · Additional Q11-methane(7)",
  "ref": "p.236–239, 251",
  "type": "open",
  "q": "Give a balanced equation and conditions: Methane → ethyne.",
  "hint": "A triple bond can undergo addition in two stages.",
  "model": "<p class=\"eq\"><b>2CH<sub>4</sub> → C<sub>2</sub>H<sub>2</sub> + 3H<sub>2</sub></b></p><p><b>Conditions:</b> About 1500°C, electric arc, absence of air.</p><p><b>What changes:</b> Pyrolysis removes hydrogen and forms ethyne.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-240",
  "t": "alkanes",
  "src": "p.257 · Additional Q11-ethane(1)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethane → hexachloroethane.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>6</sub> + 6Cl<sub>2</sub> → C<sub>2</sub>Cl<sub>6</sub> + 6HCl</b></p><p><b>Conditions:</b> Excess chlorine, diffused sunlight.</p><p><b>What changes:</b> All six H atoms are replaced.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-241",
  "t": "alkanes",
  "src": "p.257 · Additional Q11-ethane(2)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethane → carbon dioxide.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>2C<sub>2</sub>H<sub>6</sub> + 7O<sub>2</sub> → 4CO<sub>2</sub> + 6H<sub>2</sub>O</b></p><p><b>Conditions:</b> Ignite in excess oxygen.</p><p><b>What changes:</b> Balance C, then H, then O.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-242",
  "t": "alkanes",
  "src": "p.257 · Additional Q11-ethane(3)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethane → ethanol.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>2C<sub>2</sub>H<sub>6</sub> + O<sub>2</sub> → 2C<sub>2</sub>H<sub>5</sub>OH</b></p><p><b>Conditions:</b> Cu catalyst, 200°C, 100 atmospheres (source conditions).</p><p><b>What changes:</b> Controlled catalytic oxidation gives ethanol.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-245",
  "t": "alkanes",
  "src": "p.257 · Additional Q11-ethane(6)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethane → ethanal directly.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>6</sub> + O<sub>2</sub> → CH<sub>3</sub>CHO + H<sub>2</sub>O</b></p><p><b>Conditions:</b> Molybdenum oxide catalyst, 350–500°C (source).</p><p><b>What changes:</b> Controlled catalytic oxidation gives ethanal.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-246",
  "t": "alkenes",
  "src": "p.257 · Additional Q11-ethane(7)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethane → ethene.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>6</sub> → C<sub>2</sub>H<sub>4</sub> + H<sub>2</sub></b></p><p><b>Conditions:</b> About 500°C, silica–alumina catalyst, absence of air (source).</p><p><b>What changes:</b> Dehydrogenation removes H2.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-247",
  "t": "alkenes",
  "src": "p.257 · Additional Q11-ethene(1)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethene → ethane.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>4</sub> + H<sub>2</sub> → C<sub>2</sub>H<sub>6</sub></b></p><p><b>Conditions:</b> Nickel catalyst, about 300°C.</p><p><b>What changes:</b> Add one H to each carbon. Double bond becomes single.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-248",
  "t": "alkenes",
  "src": "p.257 · Additional Q11-ethene(2)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethene → 1,2-dichloroethane.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>4</sub> + Cl<sub>2</sub> → C<sub>2</sub>H<sub>4</sub>Cl<sub>2</sub></b></p><p><b>Conditions:</b> Halogen in inert solvent CCl4, room temperature.</p><p><b>What changes:</b> Addition gives a 1,2-dihaloethane.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-249",
  "t": "alkenes",
  "src": "p.257 · Additional Q11-ethene(3)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethene → 1,2-dibromoethane.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>4</sub> + Br<sub>2</sub> → C<sub>2</sub>H<sub>4</sub>Br<sub>2</sub></b></p><p><b>Conditions:</b> Halogen in inert solvent CCl4, room temperature.</p><p><b>What changes:</b> Addition gives a 1,2-dihaloethane.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-250",
  "t": "alkenes",
  "src": "p.257 · Additional Q11-ethene(4)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethene → 1,2-diiodoethane.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>4</sub> + I<sub>2</sub> → C<sub>2</sub>H<sub>4</sub>I<sub>2</sub></b></p><p><b>Conditions:</b> Halogen in inert solvent CCl4, room temperature.</p><p><b>What changes:</b> Addition gives a 1,2-dihaloethane.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-251",
  "t": "alkenes",
  "src": "p.257 · Additional Q11-ethene(5)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethene → bromoethane.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>4</sub> + HBr → C<sub>2</sub>H<sub>5</sub>Br</b></p><p><b>Conditions:</b> Room temperature (source).</p><p><b>What changes:</b> Hydrogen halide adds across the double bond.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-252",
  "t": "alkenes",
  "src": "p.257 · Additional Q11-ethene(6)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethene → chloroethane.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>4</sub> + HCl → C<sub>2</sub>H<sub>5</sub>Cl</b></p><p><b>Conditions:</b> Room temperature (source).</p><p><b>What changes:</b> Hydrogen halide adds across the double bond.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-253",
  "t": "alkynes",
  "src": "p.257 · Additional Q11-ethyne(1)",
  "ref": "p.236–239, 251",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethyne → ethane in two stages.",
  "hint": "A triple bond can undergo addition in two stages.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>2</sub> + H<sub>2</sub> → C<sub>2</sub>H<sub>4</sub></b></p><p><b>Conditions:</b> Controlled partial hydrogenation. The source shows Ni and limited H2.</p><p><b>What changes:</b> One stage: triple bond becomes double. Continued reaction gives ethane.</p><p class=\"eq\"><b>C<sub>2</sub>H<sub>4</sub> + H<sub>2</sub> → C<sub>2</sub>H<sub>6</sub></b></p><p><b>Conditions:</b> Nickel catalyst, about 300°C.</p><p><b>What changes:</b> Add one H to each carbon. Double bond becomes single.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-254",
  "t": "alkynes",
  "src": "p.257 · Additional Q11-ethyne(2)",
  "ref": "p.236–239, 251",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethyne → 1,1,2,2-tetrachloroethane in two stages.",
  "hint": "A triple bond can undergo addition in two stages.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>2</sub> + Cl<sub>2</sub> → C<sub>2</sub>H<sub>2</sub>Cl<sub>2</sub></b></p><p><b>Conditions:</b> Room temperature. Iodine addition is difficult (source).</p><p><b>What changes:</b> First stage gives a 1,2-dihaloethene.</p><p>C₂H₂Cl₂ + Cl₂ → C₂H₂Cl₄, CCl₄ solvent.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-255",
  "t": "alkynes",
  "src": "p.257 · Additional Q11-ethyne(3)",
  "ref": "p.236–239, 251",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethyne → 1,1,2,2-tetrabromoethane in two stages.",
  "hint": "A triple bond can undergo addition in two stages.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>2</sub> + Br<sub>2</sub> → C<sub>2</sub>H<sub>2</sub>Br<sub>2</sub></b></p><p><b>Conditions:</b> Room temperature. Iodine addition is difficult (source).</p><p><b>What changes:</b> First stage gives a 1,2-dihaloethene.</p><p>C₂H₂Br₂ + Br₂ → C₂H₂Br₄, CCl₄ solvent.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-256",
  "t": "alkynes",
  "src": "p.257 · Additional Q11-ethyne(4)",
  "ref": "p.236–239, 251",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethyne → 1,2-diiodoethene.",
  "hint": "A triple bond can undergo addition in two stages.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>2</sub> + I<sub>2</sub> → C<sub>2</sub>H<sub>2</sub>I<sub>2</sub></b></p><p><b>Conditions:</b> Room temperature. Iodine addition is difficult (source).</p><p><b>What changes:</b> First stage gives a 1,2-dihaloethene.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-257",
  "t": "alkynes",
  "src": "p.257 · Additional Q11-ethyne(5)",
  "ref": "p.236–239, 251",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethyne → 1,1-dibromoethane.",
  "hint": "A triple bond can undergo addition in two stages.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>2</sub> + 2HBr → C<sub>2</sub>H<sub>4</sub>Br<sub>2</sub></b></p><p><b>Conditions:</b> Two successive additions, room temperature (source).</p><p><b>What changes:</b> Final product is 1,1-dihaloethane.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-258",
  "t": "alkynes",
  "src": "p.257 · Additional Q11-ethyne(6)",
  "ref": "p.236–239, 251",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethyne → 1,1-dichloroethane.",
  "hint": "A triple bond can undergo addition in two stages.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>2</sub> + 2HCl → C<sub>2</sub>H<sub>4</sub>Cl<sub>2</sub></b></p><p><b>Conditions:</b> Two successive additions, room temperature (source).</p><p><b>What changes:</b> Final product is 1,1-dihaloethane.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-266",
  "t": "alkenes",
  "src": "p.257 · Additional Q11-ethanol(6)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethanol → ethene.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>5</sub>OH → C<sub>2</sub>H<sub>4</sub> + H<sub>2</sub>O</b></p><p><b>Conditions:</b> Conc. H2SO4 at 170°C, or Al2O3 at 350°C.</p><p><b>What changes:</b> Dehydration removes H2O and creates a C=C bond.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-271",
  "t": "alkenes",
  "src": "p.257 · Additional Q11-ethene(polymer)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Convert ethene to polyethylene. Give equation and conditions.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "n CH₂=CH₂ → (–CH₂–CH₂–)ₙ, high temperature and pressure, with a catalyst. The double bond opens to form single bonds linking monomer units."
 },
 {
  "id": "organic-272",
  "t": "alkanes",
  "src": "p.257 · Additional Q12(1)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Why are alkanes saturated?",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "They contain only single carbon–carbon bonds. They have the maximum hydrogen count for the open-chain carbon skeleton."
 },
 {
  "id": "organic-273",
  "t": "alkenes",
  "src": "p.257 · Additional Q12(2)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Why are alkenes called olefins?",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "They form oily addition products with halogens. Olefin means oil-forming."
 },
 {
  "id": "organic-274",
  "t": "alkenes",
  "src": "p.257 · Additional Q12(3)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Why are alkenes more reactive than alkanes in addition reactions?",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "The carbon–carbon double bond contains electrons available for addition. Alkanes have only single bonds."
 },
 {
  "id": "organic-299",
  "t": "alkenes",
  "src": "p.258 · Unit test Q2(3)",
  "ref": "p.232–233, 250",
  "type": "mcq",
  "q": "The IUPAC name of ethene’s product with HBr is:",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "opts": [
   "Ethyl bromide",
   "Bromoethane",
   "Dibromoethane"
  ],
  "ans": 1,
  "exp": "Bromoethane is the IUPAC name. Ethyl bromide is the common name."
 },
 {
  "id": "organic-302",
  "t": "alkynes",
  "src": "p.258 · Unit test Q3(A)",
  "ref": "p.236–239, 251",
  "type": "open",
  "q": "Give a balanced equation and conditions for arrow A: 1,2-dibromoethane → acetylene.",
  "hint": "A triple bond can undergo addition in two stages.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>4</sub>Br<sub>2</sub> + 2KOH → C<sub>2</sub>H<sub>2</sub> + 2KBr + 2H<sub>2</sub>O</b></p><p><b>Conditions:</b> Heat with concentrated alcoholic KOH (textbook route).</p><p><b>What changes:</b> Two HBr units are eliminated.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-304",
  "t": "alkenes",
  "src": "p.258 · Unit test Q3(C)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Give a balanced equation and conditions for arrow C: Ethanol → ethene.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>5</sub>OH → C<sub>2</sub>H<sub>4</sub> + H<sub>2</sub>O</b></p><p><b>Conditions:</b> Conc. H2SO4 at 170°C, or Al2O3 at 350°C.</p><p><b>What changes:</b> Dehydration removes H2O and creates a C=C bond.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-305",
  "t": "alkenes",
  "src": "p.258 · Unit test Q3(D)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Give a balanced equation and conditions for arrow D: Ethene → ethyl iodide.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>4</sub> + HI → C<sub>2</sub>H<sub>5</sub>I</b></p><p><b>Conditions:</b> Room temperature (source).</p><p><b>What changes:</b> Hydrogen halide adds across the double bond.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-306",
  "t": "alkanes",
  "src": "p.258 · Unit test Q3(E)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Give a balanced equation and conditions for arrow E: Bromoethane → ethane.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>5</sub>Br + 2[H] → C<sub>2</sub>H<sub>6</sub> + HBr</b></p><p><b>Conditions:</b> Zn/Cu couple in alcohol.</p><p><b>What changes:</b> Replace Br with H.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-307",
  "t": "alkanes",
  "src": "p.258 · Unit test Q3(F)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Give a balanced equation and conditions for arrow F: Sodium propanoate → ethane.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>5</sub>COONa + NaOH → C<sub>2</sub>H<sub>6</sub> + Na<sub>2</sub>CO<sub>3</sub></b></p><p><b>Conditions:</b> Heat with soda lime.</p><p><b>What changes:</b> Three-carbon salt gives two-carbon alkane.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-308",
  "t": "alkanes",
  "src": "p.258 · Unit test Q3(G)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Give a balanced equation and conditions for arrow G: Sodium ethanoate → marsh gas.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>CH<sub>3</sub>COONa + NaOH → CH<sub>4</sub> + Na<sub>2</sub>CO<sub>3</sub></b></p><p><b>Conditions:</b> Heat with soda lime (NaOH + CaO).</p><p><b>What changes:</b> Remove the carboxyl carbon. Two-carbon salt gives one-carbon alkane.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-309",
  "t": "alkanes",
  "src": "p.258 · Unit test Q3(G1)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Give a balanced equation and conditions for arrow G1: Marsh gas → methanol.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>2CH<sub>4</sub> + O<sub>2</sub> → 2CH<sub>3</sub>OH</b></p><p><b>Conditions:</b> Cu catalyst, 200°C, 100 atmospheres (source conditions).</p><p><b>What changes:</b> Controlled catalytic oxidation gives methanol.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-314",
  "t": "alkanes",
  "src": "p.258 · Unit test Q4(1)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "A: ammoniacal CuCl₂ (printed); B: trichloromethane; C: trichloroethane; D: bromine solution; E: aqueous KOH; F: ethene; G: soda lime; H: ethanol; I: ethyne. Use the letters. Which forms carbon tetrachloride on reaction with chlorine?",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "B. CHCl₃ + Cl₂ → CCl₄ + HCl, diffused sunlight."
 },
 {
  "id": "organic-317",
  "t": "alkenes",
  "src": "p.258 · Unit test Q4(4)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "A: ammoniacal CuCl₂ (printed); B: trichloromethane; C: trichloroethane; D: bromine solution; E: aqueous KOH; F: ethene; G: soda lime; H: ethanol; I: ethyne. Use the letters. Which gives bromoethane on reaction with hydrogen bromide?",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "F, ethene."
 },
 {
  "id": "organic-319",
  "t": "alkynes",
  "src": "p.258 · Unit test Q5(1)",
  "ref": "p.236–239, 251",
  "type": "open",
  "q": "Give one balanced example with conditions: An alkyne → an alkene.",
  "hint": "A triple bond can undergo addition in two stages.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>2</sub> + H<sub>2</sub> → C<sub>2</sub>H<sub>4</sub></b></p><p><b>Conditions:</b> Controlled partial hydrogenation. The source shows Ni and limited H2.</p><p><b>What changes:</b> One stage: triple bond becomes double. Continued reaction gives ethane.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-320",
  "t": "alkenes",
  "src": "p.258 · Unit test Q5(2)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Give one balanced example with conditions: An alkene → an alkane.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>4</sub> + H<sub>2</sub> → C<sub>2</sub>H<sub>6</sub></b></p><p><b>Conditions:</b> Nickel catalyst, about 300°C.</p><p><b>What changes:</b> Add one H to each carbon. Double bond becomes single.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-321",
  "t": "alkanes",
  "src": "p.258 · Unit test Q5(3)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Give one balanced example with conditions: An alkane → an alcohol.",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "<p class=\"eq\"><b>2CH<sub>4</sub> + O<sub>2</sub> → 2CH<sub>3</sub>OH</b></p><p><b>Conditions:</b> Cu catalyst, 200°C, 100 atmospheres (source conditions).</p><p><b>What changes:</b> Controlled catalytic oxidation gives methanol.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-322",
  "t": "alkenes",
  "src": "p.258 · Unit test Q5(4)",
  "ref": "p.232–233, 250",
  "type": "open",
  "q": "Give one balanced example with conditions: An alcohol → an alkene.",
  "hint": "Decide whether the route removes H₂O/HX or adds across C=C.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>5</sub>OH → C<sub>2</sub>H<sub>4</sub> + H<sub>2</sub>O</b></p><p><b>Conditions:</b> Conc. H2SO4 at 170°C, or Al2O3 at 350°C.</p><p><b>What changes:</b> Dehydration removes H2O and creates a C=C bond.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-327",
  "t": "alkanes",
  "src": "p.258 · Unit test Q6(4)",
  "ref": "p.228–231, 249",
  "type": "open",
  "q": "Why is substitution characteristic of saturated compounds in this chapter?",
  "hint": "Decarboxylation removes one carbon. Substitution replaces H without changing the carbon skeleton.",
  "model": "They have no carbon–carbon multiple bond for characteristic addition. Substitution replaces atoms without changing the saturated carbon skeleton."
 }
];
