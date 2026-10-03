const PAGE={key:'organic-4-v1',title:"8.5 Ethanol, ethanoic acid & chemical tests",book:{dir:'organic',from:219,to:258}};
const TOPICS=ALL_TOPICS.filter(t=>["acid", "alcohol", "tests"].includes(t.id));
const CHAPTER=ALL_CHAPTER.filter(s=>s.t.some(t=>TOPICS.some(x=>x.id===t)));
const Q=[
 {
  "id": "organic-17",
  "t": "alcohol",
  "src": "p.253 · ICSE 2018 Q5",
  "ref": "p.240–241, 252",
  "type": "open",
  "q": "Name the gas produced when ethanol reacts with sodium.",
  "hint": "Aqueous KOH gives an alcohol. Alcoholic KOH gives an alkene.",
  "model": "Hydrogen. <p class=\"eq\"><b>2C<sub>2</sub>H<sub>5</sub>OH + 2Na → 2C<sub>2</sub>H<sub>5</sub>ONa + H<sub>2</sub></b></p><p><b>Conditions:</b> Room temperature.</p><p><b>What changes:</b> H of the OH group is replaced by Na.</p>"
 },
 {
  "id": "organic-20",
  "t": "acid",
  "src": "p.253 · ICSE 2018 Q7(i)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "X has a vinegar-like smell. X + ethanol, with acid Z, gives fruity Y and water. Identify Y and Z.",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "Y: ethyl ethanoate. Z: concentrated sulphuric acid."
 },
 {
  "id": "organic-22",
  "t": "acid",
  "src": "p.253 · ICSE 2018 Q7(iii)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Name the reaction of vinegar-smelling X with ethanol in acid Z, producing fruity Y and water.",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "Esterification."
 },
 {
  "id": "organic-38",
  "t": "acid",
  "src": "p.253 · ICSE 2019 Q7(iii)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Name the compound reacting with acetic acid to form ethyl ethanoate.",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "Ethanol."
 },
 {
  "id": "organic-40",
  "t": "acid",
  "src": "p.253 · ICSE 2019 Q8",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Identify the organic compound that forms an ice-like mass when solidified.",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "Pure ethanoic acid, called glacial acetic acid."
 },
 {
  "id": "organic-43",
  "t": "alcohol",
  "src": "p.253 · ICSE 2020 Q2",
  "ref": "p.240–241, 252",
  "type": "open",
  "q": "State one observation when sodium is placed in ethanol at room temperature.",
  "hint": "Aqueous KOH gives an alcohol. Alcoholic KOH gives an alkene.",
  "model": "Effervescence is observed due to evolution of hydrogen gas. <p class=\"eq\"><b>2C<sub>2</sub>H<sub>5</sub>OH + 2Na → 2C<sub>2</sub>H<sub>5</sub>ONa + H<sub>2</sub></b></p><p><b>Conditions:</b> Room temperature.</p><p><b>What changes:</b> H of the OH group is replaced by Na.</p>"
 },
 {
  "id": "organic-51",
  "t": "acid",
  "src": "p.253 · ICSE 2020 Q6",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Name the reaction of a carboxylic acid with alcohol and concentrated H₂SO₄, giving a fruity substance.",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "Esterification."
 },
 {
  "id": "organic-88",
  "t": "acid",
  "src": "p.254 · ICSE 2024 Q1(ii)",
  "ref": "p.244–245, 252",
  "type": "mcq",
  "q": "Alcohol + carboxylic acid, with concentrated H₂SO₄, is called:",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "opts": [
   "Halogenation",
   "Esterification",
   "Hydrogenation",
   "Dehydrohalogenation"
  ],
  "ans": 1,
  "exp": "An ester and water form."
 },
 {
  "id": "organic-99",
  "t": "acid",
  "src": "p.254 · ICSE 2024 Q5(b)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "From ethene, ethanoic acid, ethanol and methanal, select the pure compound forming an ice-like solid on cooling.",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "Ethanoic acid."
 },
 {
  "id": "organic-105",
  "t": "alcohol",
  "src": "p.255 · ICSE 2025 Q3",
  "ref": "p.240–241, 252",
  "type": "open",
  "q": "State the textbook term: undistilled alcohol containing a large amount of methanol.",
  "hint": "Aqueous KOH gives an alcohol. Alcoholic KOH gives an alkene.",
  "model": "Spurious alcohol."
 },
 {
  "id": "organic-114",
  "t": "acid",
  "src": "p.255 · ICSE 2025 Q7(b)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Complete and balance: CH₃COOH + Mg → ?",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "<p class=\"eq\"><b>2CH<sub>3</sub>COOH + Mg → (CH<sub>3</sub>COO)<sub>2</sub>Mg + H<sub>2</sub></b></p><p><b>Conditions:</b> Room temperature.</p><p><b>What changes:</b> Magnesium ethanoate and hydrogen form.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-118",
  "t": "acid",
  "src": "p.255 · ICSE 2025 Q9(c)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "<table class=\"cmp\"><tr><th>Letter</th><th>Structure</th></tr><tr><td>A</td><td>CH₃COOH</td></tr><tr><td>B</td><td>CH₃CH₂OH</td></tr><tr><td>C</td><td>CH₂=CH₂</td></tr><tr><td>D</td><td>CH₃CH₂CH₂CH₃</td></tr><tr><td>E</td><td>CH₃CH₃</td></tr><tr><td>F</td><td>CH₃CH(CH₃)CH₃</td></tr></table>Use letters only. Which two react in concentrated H₂SO₄ to form a fruity-smelling product?",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "A and B. Ethanoic acid and ethanol give ethyl ethanoate."
 },
 {
  "id": "organic-122",
  "t": "alcohol",
  "src": "p.255 · MCQ Q4",
  "ref": "p.240–241, 252",
  "type": "mcq",
  "q": "An alkene of relative molecular mass 28 is absorbed in concentrated H₂SO₄ at 80°C under pressure. Hydrolysis of the product gives Y. Y’s functional group is:",
  "hint": "Aqueous KOH gives an alcohol. Alcoholic KOH gives an alkene.",
  "opts": [
   "–COOH",
   ">C=O",
   "–OH",
   "–CHO"
  ],
  "ans": 2,
  "exp": "The alkene is ethene. The product Y is ethanol."
 },
 {
  "id": "organic-127",
  "t": "tests",
  "src": "p.255 · MCQ Q9",
  "ref": "p.249–252",
  "type": "open",
  "q": "Which reagent distinguishes C₂H₆ and C₃H₄ (propyne)? (a) Bromine in CCl₄; (b) ammoniacal AgNO₃; (c) alkaline KMnO₄; (d) both (a) and (b).",
  "hint": "Write the reagent, the observation and the conclusion.",
  "model": "(d) is a valid listed combination. (a), (b) and (c) each distinguish ethane from propyne under the stated test conditions. Thus the single-answer question is not unique. Propyne is a terminal alkyne and forms a silver acetylide precipitate."
 },
 {
  "id": "organic-230",
  "t": "alcohol",
  "src": "p.257 · Additional Q10(9)",
  "ref": "p.240–241, 252",
  "type": "open",
  "q": "Give the laboratory preparation equation and conditions: ethanol from bromoethane.",
  "hint": "Aqueous KOH gives an alcohol. Alcoholic KOH gives an alkene.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>5</sub>Br + KOH → C<sub>2</sub>H<sub>5</sub>OH + KBr</b></p><p><b>Conditions:</b> Boil with aqueous KOH.</p><p><b>What changes:</b> OH replaces Br. This is hydrolysis, not elimination.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-231",
  "t": "alcohol",
  "src": "p.257 · Additional Q10(10)",
  "ref": "p.240–241, 252",
  "type": "open",
  "q": "Prepare ethanol from ethene. Give both balanced stages and conditions.",
  "hint": "Aqueous KOH gives an alcohol. Alcoholic KOH gives an alkene.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>4</sub> + H<sub>2</sub>SO<sub>4</sub> → C<sub>2</sub>H<sub>5</sub>HSO<sub>4</sub></b></p><p><b>Conditions:</b> Conc. H2SO4 at 80°C under 30 atmospheres.</p><p><b>What changes:</b> Ethyl hydrogen sulphate forms.</p><p class=\"eq\"><b>C<sub>2</sub>H<sub>5</sub>HSO<sub>4</sub> + H<sub>2</sub>O → C<sub>2</sub>H<sub>5</sub>OH + H<sub>2</sub>SO<sub>4</sub></b></p><p><b>Conditions:</b> Hydrolyse with steam.</p><p><b>What changes:</b> Hydrolysis gives ethanol and regenerates the acid.</p>"
 },
 {
  "id": "organic-232",
  "t": "acid",
  "src": "p.257 · Additional Q10(11)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Give the laboratory preparation equation and conditions: ethanoic acid from ethanol.",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>5</sub>OH + 2[O] → CH<sub>3</sub>COOH + H<sub>2</sub>O</b></p><p><b>Conditions:</b> Warm with acidified K2Cr2O7.</p><p><b>What changes:</b> Further oxidation gives ethanoic acid.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-236",
  "t": "alcohol",
  "src": "p.257 · Additional Q11-methane(4)",
  "ref": "p.240–241, 252",
  "type": "open",
  "q": "Give a balanced equation and conditions: Methanol → methanal.",
  "hint": "Aqueous KOH gives an alcohol. Alcoholic KOH gives an alkene.",
  "model": "<p class=\"eq\"><b>CH<sub>3</sub>OH + [O] → HCHO + H<sub>2</sub>O</b></p><p><b>Conditions:</b> Acidified K2Cr2O7, controlled oxidation.</p><p><b>What changes:</b> Alcohol → aldehyde.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-237",
  "t": "acid",
  "src": "p.257 · Additional Q11-methane(5)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Give a balanced equation and conditions: Methanal → methanoic acid.",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "<p class=\"eq\"><b>HCHO + [O] → HCOOH</b></p><p><b>Conditions:</b> Acidified K2Cr2O7.</p><p><b>What changes:</b> Aldehyde → carboxylic acid.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-243",
  "t": "alcohol",
  "src": "p.257 · Additional Q11-ethane(4)",
  "ref": "p.240–241, 252",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethanol → ethanal.",
  "hint": "Aqueous KOH gives an alcohol. Alcoholic KOH gives an alkene.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>5</sub>OH + [O] → CH<sub>3</sub>CHO + H<sub>2</sub>O</b></p><p><b>Conditions:</b> Acidified K2Cr2O7, controlled oxidation.</p><p><b>What changes:</b> Alcohol → aldehyde.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-244",
  "t": "acid",
  "src": "p.257 · Additional Q11-ethane(5)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethanal → ethanoic acid.",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "<p class=\"eq\"><b>CH<sub>3</sub>CHO + [O] → CH<sub>3</sub>COOH</b></p><p><b>Conditions:</b> Acidified K2Cr2O7.</p><p><b>What changes:</b> Aldehyde → carboxylic acid.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-259",
  "t": "tests",
  "src": "p.257 · Additional Q11-ethyne(7)",
  "ref": "p.249–252",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethyne → copper acetylide.",
  "hint": "Write the reagent, the observation and the conclusion.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>2</sub> + 2CuCl + 2NH<sub>4</sub>OH → Cu<sub>2</sub>C<sub>2</sub> + 2NH<sub>4</sub>Cl + 2H<sub>2</sub>O</b></p><p><b>Conditions:</b> Ammoniacal copper(I) chloride, room temperature.</p><p><b>What changes:</b> Red precipitate of copper acetylide. CuCl is correct, not CuCl2.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-260",
  "t": "tests",
  "src": "p.257 · Additional Q11-ethyne(8)",
  "ref": "p.249–252",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethyne → silver acetylide.",
  "hint": "Write the reagent, the observation and the conclusion.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>2</sub> + 2AgNO<sub>3</sub> + 2NH<sub>4</sub>OH → Ag<sub>2</sub>C<sub>2</sub> + 2NH<sub>4</sub>NO<sub>3</sub> + 2H<sub>2</sub>O</b></p><p><b>Conditions:</b> Ammoniacal silver nitrate, room temperature.</p><p><b>What changes:</b> White precipitate of silver acetylide.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-261",
  "t": "alcohol",
  "src": "p.257 · Additional Q11-ethanol(1)",
  "ref": "p.240–241, 252",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethanol → carbon dioxide.",
  "hint": "Aqueous KOH gives an alcohol. Alcoholic KOH gives an alkene.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>5</sub>OH + 3O<sub>2</sub> → 2CO<sub>2</sub> + 3H<sub>2</sub>O</b></p><p><b>Conditions:</b> Ignite in excess oxygen.</p><p><b>What changes:</b> Complete combustion.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-262",
  "t": "alcohol",
  "src": "p.257 · Additional Q11-ethanol(2)",
  "ref": "p.240–241, 252",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethanol → ethanal.",
  "hint": "Aqueous KOH gives an alcohol. Alcoholic KOH gives an alkene.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>5</sub>OH + [O] → CH<sub>3</sub>CHO + H<sub>2</sub>O</b></p><p><b>Conditions:</b> Acidified K2Cr2O7, controlled oxidation.</p><p><b>What changes:</b> Alcohol → aldehyde.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-263",
  "t": "acid",
  "src": "p.257 · Additional Q11-ethanol(3)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethanal → ethanoic acid.",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "<p class=\"eq\"><b>CH<sub>3</sub>CHO + [O] → CH<sub>3</sub>COOH</b></p><p><b>Conditions:</b> Acidified K2Cr2O7.</p><p><b>What changes:</b> Aldehyde → carboxylic acid.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-264",
  "t": "alcohol",
  "src": "p.257 · Additional Q11-ethanol(4)",
  "ref": "p.240–241, 252",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethanol → sodium ethoxide.",
  "hint": "Aqueous KOH gives an alcohol. Alcoholic KOH gives an alkene.",
  "model": "<p class=\"eq\"><b>2C<sub>2</sub>H<sub>5</sub>OH + 2Na → 2C<sub>2</sub>H<sub>5</sub>ONa + H<sub>2</sub></b></p><p><b>Conditions:</b> Room temperature.</p><p><b>What changes:</b> H of the OH group is replaced by Na.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-265",
  "t": "acid",
  "src": "p.257 · Additional Q11-ethanol(5)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethanol → ethyl ethanoate.",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "<p class=\"eq\"><b>CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH → CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O</b></p><p><b>Conditions:</b> Warm with concentrated H2SO4. The reaction is reversible.</p><p><b>What changes:</b> Ethanoic acid + ethanol → ethyl ethanoate + water.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-267",
  "t": "acid",
  "src": "p.257 · Additional Q11-acid(1)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethanoic acid → sodium ethanoate.",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "<p class=\"eq\"><b>CH<sub>3</sub>COOH + NaOH → CH<sub>3</sub>COONa + H<sub>2</sub>O</b></p><p><b>Conditions:</b> Aqueous alkali.</p><p><b>What changes:</b> Neutralisation gives sodium ethanoate and water.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-268",
  "t": "acid",
  "src": "p.257 · Additional Q11-acid(2)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethanoic acid → calcium ethanoate.",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "<p class=\"eq\"><b>2CH<sub>3</sub>COOH + Ca(OH)<sub>2</sub> → (CH<sub>3</sub>COO)<sub>2</sub>Ca + 2H<sub>2</sub>O</b></p><p><b>Conditions:</b> Aqueous alkali.</p><p><b>What changes:</b> Calcium ethanoate and water form.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-269",
  "t": "acid",
  "src": "p.257 · Additional Q11-acid(3)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethanoic acid → ammonium ethanoate.",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "<p class=\"eq\"><b>CH<sub>3</sub>COOH + NH<sub>4</sub>OH → CH<sub>3</sub>COONH<sub>4</sub> + H<sub>2</sub>O</b></p><p><b>Conditions:</b> Ammonium hydroxide solution.</p><p><b>What changes:</b> Ammonium ethanoate and water form.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-270",
  "t": "acid",
  "src": "p.257 · Additional Q11-acid(4)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Give a balanced equation and conditions: Ethanoic acid → ethyl ethanoate.",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "<p class=\"eq\"><b>CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH → CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O</b></p><p><b>Conditions:</b> Warm with concentrated H2SO4. The reaction is reversible.</p><p><b>What changes:</b> Ethanoic acid + ethanol → ethyl ethanoate + water.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-275",
  "t": "acid",
  "src": "p.257 · Additional Q12(4)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Why is ethanoic acid aliphatic and monocarboxylic?",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "It has an open carbon chain and one carboxyl group per molecule."
 },
 {
  "id": "organic-276",
  "t": "alcohol",
  "src": "p.257 · Additional Q13(1)",
  "ref": "p.240–241, 252",
  "type": "open",
  "q": "Explain denatured alcohol.",
  "hint": "Aqueous KOH gives an alcohol. Alcoholic KOH gives an alkene.",
  "model": "Ethanol made unfit for drinking by additives such as pyridine or copper sulphate."
 },
 {
  "id": "organic-277",
  "t": "acid",
  "src": "p.257 · Additional Q13(2)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Explain glacial acetic acid.",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "Pure ethanoic acid that forms an ice-like crystalline mass on sufficient cooling."
 },
 {
  "id": "organic-278",
  "t": "acid",
  "src": "p.257 · Additional Q13(3)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Explain esterification.",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "The reaction of an alcohol with a carboxylic acid to form an ester and water, usually with an acid catalyst."
 },
 {
  "id": "organic-279",
  "t": "tests",
  "src": "p.257 · Additional Q14(i)",
  "ref": "p.249–252",
  "type": "open",
  "q": "Give chemical tests distinguishing ethane, ethene and ethyne.",
  "hint": "Write the reagent, the observation and the conclusion.",
  "model": "First use bromine in CCl₄ without UV: ethane retains brown colour; ethene and ethyne decolourise it. Then use ammoniacal AgNO₃: ethyne gives a white precipitate; ethene does not. Ammoniacal CuCl gives a red precipitate with ethyne instead."
 },
 {
  "id": "organic-280",
  "t": "tests",
  "src": "p.257 · Additional Q14(ii)",
  "ref": "p.249–252",
  "type": "open",
  "q": "Give a chemical test distinguishing ethanol and ethanoic acid.",
  "hint": "Write the reagent, the observation and the conclusion.",
  "model": "Add sodium hydrogencarbonate. Ethanoic acid gives CO₂ effervescence. Ethanol gives no such effervescence. <p class=\"eq\"><b>CH<sub>3</sub>COOH + NaHCO<sub>3</sub> → CH<sub>3</sub>COONa + H<sub>2</sub>O + CO<sub>2</sub></b></p><p><b>Conditions:</b> Aqueous sodium hydrogencarbonate.</p><p><b>What changes:</b> Effervescence of CO2 identifies an acid.</p>"
 },
 {
  "id": "organic-281",
  "t": "tests",
  "src": "p.257 · Additional Q15(1)",
  "ref": "p.249–252",
  "type": "open",
  "q": "Give the main uses of methane.",
  "hint": "Write the reagent, the observation and the conclusion.",
  "model": "Domestic fuel; manufacture of methanol, formaldehyde, chloroform and carbon black."
 },
 {
  "id": "organic-282",
  "t": "tests",
  "src": "p.257 · Additional Q15(2)",
  "ref": "p.249–252",
  "type": "open",
  "q": "Give the main uses of ethane.",
  "hint": "Write the reagent, the observation and the conclusion.",
  "model": "Gaseous fuel; raw material for other organic chemicals."
 },
 {
  "id": "organic-283",
  "t": "tests",
  "src": "p.257 · Additional Q15(3)",
  "ref": "p.249–252",
  "type": "open",
  "q": "Give the main uses of ethene.",
  "hint": "Write the reagent, the observation and the conclusion.",
  "model": "Artificial ripening of fruit; manufacture of polyethylene and other organic chemicals; oxy-ethylene torch."
 },
 {
  "id": "organic-284",
  "t": "tests",
  "src": "p.257 · Additional Q15(4)",
  "ref": "p.249–252",
  "type": "open",
  "q": "Give the main uses of ethyne.",
  "hint": "Write the reagent, the observation and the conclusion.",
  "model": "Oxy-acetylene welding and metal cutting; manufacture of organic compounds and polymers. The book also lists fruit ripening, but ethene is the appropriate example for current teaching."
 },
 {
  "id": "organic-285",
  "t": "tests",
  "src": "p.257 · Additional Q15(5)",
  "ref": "p.249–252",
  "type": "open",
  "q": "Give the main uses of ethanol.",
  "hint": "Write the reagent, the observation and the conclusion.",
  "model": "Solvent for gums and resins; industrial feedstock; manufacture of ethanal and ethanoic acid."
 },
 {
  "id": "organic-286",
  "t": "tests",
  "src": "p.257 · Additional Q15(6)",
  "ref": "p.249–252",
  "type": "open",
  "q": "Give the main uses of ethanoic acid.",
  "hint": "Write the reagent, the observation and the conclusion.",
  "model": "Vinegar for food preservation and flavouring; manufacture of vinyl acetate, acetic anhydride and other chemicals."
 },
 {
  "id": "organic-303",
  "t": "tests",
  "src": "p.258 · Unit test Q3(B)",
  "ref": "p.249–252",
  "type": "open",
  "q": "Give a balanced equation and conditions for arrow B: Acetylene → silver acetylide.",
  "hint": "Write the reagent, the observation and the conclusion.",
  "model": "<p class=\"eq\"><b>C<sub>2</sub>H<sub>2</sub> + 2AgNO<sub>3</sub> + 2NH<sub>4</sub>OH → Ag<sub>2</sub>C<sub>2</sub> + 2NH<sub>4</sub>NO<sub>3</sub> + 2H<sub>2</sub>O</b></p><p><b>Conditions:</b> Ammoniacal silver nitrate, room temperature.</p><p><b>What changes:</b> White precipitate of silver acetylide.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-310",
  "t": "alcohol",
  "src": "p.258 · Unit test Q3(G2)",
  "ref": "p.240–241, 252",
  "type": "open",
  "q": "Give a balanced equation and conditions for arrow G2: Methanol → methanal.",
  "hint": "Aqueous KOH gives an alcohol. Alcoholic KOH gives an alkene.",
  "model": "<p class=\"eq\"><b>CH<sub>3</sub>OH + [O] → HCHO + H<sub>2</sub>O</b></p><p><b>Conditions:</b> Acidified K2Cr2O7, controlled oxidation.</p><p><b>What changes:</b> Alcohol → aldehyde.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-311",
  "t": "acid",
  "src": "p.258 · Unit test Q3(G3)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Give a balanced equation and conditions for arrow G3: Methanal → methanoic acid.",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "<p class=\"eq\"><b>HCHO + [O] → HCOOH</b></p><p><b>Conditions:</b> Acidified K2Cr2O7.</p><p><b>What changes:</b> Aldehyde → carboxylic acid.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-312",
  "t": "acid",
  "src": "p.258 · Unit test Q3(H)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Give a balanced equation and conditions for arrow H: Acetic acid → sodium acetate and hydrogen.",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "<p class=\"eq\"><b>2CH<sub>3</sub>COOH + 2Na → 2CH<sub>3</sub>COONa + H<sub>2</sub></b></p><p><b>Conditions:</b> Room temperature.</p><p><b>What changes:</b> Acid + active metal → salt + hydrogen.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-313",
  "t": "acid",
  "src": "p.258 · Unit test Q3(H1)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Give a balanced equation and conditions for arrow H1: Acetic acid → ethyl ethanoate.",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "<p class=\"eq\"><b>CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH → CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O</b></p><p><b>Conditions:</b> Warm with concentrated H2SO4. The reaction is reversible.</p><p><b>What changes:</b> Ethanoic acid + ethanol → ethyl ethanoate + water.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-315",
  "t": "tests",
  "src": "p.258 · Unit test Q4(2)",
  "ref": "p.249–252",
  "type": "open",
  "q": "A: ammoniacal CuCl₂ (printed); B: trichloromethane; C: trichloroethane; D: bromine solution; E: aqueous KOH; F: ethene; G: soda lime; H: ethanol; I: ethyne. Use the letters. Which reagent distinguishes ethene and ethyne?",
  "hint": "Write the reagent, the observation and the conclusion.",
  "model": "A is intended, but the formula must be CuCl, copper(I) chloride. Ethyne gives a red copper acetylide precipitate."
 },
 {
  "id": "organic-316",
  "t": "alcohol",
  "src": "p.258 · Unit test Q4(3)",
  "ref": "p.240–241, 252",
  "type": "open",
  "q": "A: ammoniacal CuCl₂ (printed); B: trichloromethane; C: trichloroethane; D: bromine solution; E: aqueous KOH; F: ethene; G: soda lime; H: ethanol; I: ethyne. Use the letters. Which reacts with bromoethane to give ethanol?",
  "hint": "Aqueous KOH gives an alcohol. Alcoholic KOH gives an alkene.",
  "model": "E, aqueous KOH."
 },
 {
  "id": "organic-318",
  "t": "acid",
  "src": "p.258 · Unit test Q4(5)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "A: ammoniacal CuCl₂ (printed); B: trichloromethane; C: trichloroethane; D: bromine solution; E: aqueous KOH; F: ethene; G: soda lime; H: ethanol; I: ethyne. Use the letters. Which reacts with acetic acid to form CH₃COOC₂H₅?",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "H, ethanol. Although the printed instruction says A–G, the necessary answer H is in the displayed A–I list."
 },
 {
  "id": "organic-323",
  "t": "acid",
  "src": "p.258 · Unit test Q5(5)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Give one balanced example with conditions: A carboxylic acid → an ammonium salt.",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "<p class=\"eq\"><b>CH<sub>3</sub>COOH + NH<sub>4</sub>OH → CH<sub>3</sub>COONH<sub>4</sub> + H<sub>2</sub>O</b></p><p><b>Conditions:</b> Ammonium hydroxide solution.</p><p><b>What changes:</b> Ammonium ethanoate and water form.</p>",
  "steps": [
   "Recognise the starting family and the required product.",
   "Choose the reagent and conditions for that transformation.",
   "Write the products and balance every element."
  ]
 },
 {
  "id": "organic-324",
  "t": "acid",
  "src": "p.258 · Unit test Q6(1)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Why add concentrated H₂SO₄ during esterification?",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "It acts as an acid catalyst and removes water, favouring formation of the ester."
 },
 {
  "id": "organic-328",
  "t": "acid",
  "src": "p.258 · Unit test Q6(5)",
  "ref": "p.244–245, 252",
  "type": "open",
  "q": "Why is acetic acid an aliphatic monocarboxylic acid?",
  "hint": "Acid reactions involve –COOH. Esterification combines an acid and an alcohol.",
  "model": "It has an open-chain structure with one carboxyl group per molecule."
 }
];
