const PAGE={key:'organic-1-v1',title:"8.1 Carbon, families & functional groups",book:{dir:'organic',from:219,to:258}};
const TOPICS=ALL_TOPICS.filter(t=>["carbon", "groups", "series"].includes(t.id));
const CHAPTER=ALL_CHAPTER.filter(s=>s.t.some(t=>TOPICS.some(x=>x.id===t)));
const Q=[
 {
  "id": "organic-12",
  "t": "carbon",
  "src": "p.253 · ICSE 2018 Q2",
  "ref": "p.220, 222, 246",
  "type": "open",
  "q": "Name the tendency of an element to form chains of identical atoms.",
  "hint": "Count bond orders at every carbon: the total must be four.",
  "model": "Catenation."
 },
 {
  "id": "organic-18",
  "t": "series",
  "src": "p.253 · ICSE 2018 Q6(a)",
  "ref": "p.221, 227",
  "type": "open",
  "q": "For open-chain hydrocarbons with formula CₙH₂ₙ₋₂, state (i) the series, (ii) characteristic bond, (iii) first member’s IUPAC name.",
  "hint": "Use the family formula. Adjacent homologues differ by CH₂ and mass 14.",
  "model": "Series: alkynes. Characteristic bond: C≡C. First member: ethyne (C₂H₂)."
 },
 {
  "id": "organic-19",
  "t": "series",
  "src": "p.253 · ICSE 2018 Q6(b)",
  "ref": "p.221, 227",
  "type": "open",
  "q": "For open-chain hydrocarbons with formula CₙH₂ₙ₊₂, state (i) the series, (ii) characteristic bond, (iii) first member’s IUPAC name.",
  "hint": "Use the family formula. Adjacent homologues differ by CH₂ and mass 14.",
  "model": "Series: alkanes. Characteristic bonds: single bonds. First member: methane (CH₄)."
 },
 {
  "id": "organic-21",
  "t": "groups",
  "src": "p.253 · ICSE 2018 Q7(ii)",
  "ref": "p.222, 226",
  "type": "open",
  "q": "For the same reaction, draw X, the vinegar-smelling compound.",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "model": "X is ethanoic acid.<figure style=\"margin:12px 0\"><img src=\"../assets/organic/ethanoic-acid.svg\" alt=\"Expanded structural formula of ethanoic acid\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>ethanoic acid · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>"
 },
 {
  "id": "organic-30",
  "t": "series",
  "src": "p.253 · ICSE 2019 Q4(iii)",
  "ref": "p.221, 227",
  "type": "open",
  "q": "Name the saturated hydrocarbon containing two carbon atoms.",
  "hint": "Use the family formula. Adjacent homologues differ by CH₂ and mass 14.",
  "model": "Ethane, C₂H₆."
 },
 {
  "id": "organic-31",
  "t": "groups",
  "src": "p.253 · ICSE 2019 Q4(iv)",
  "ref": "p.222, 226",
  "type": "open",
  "q": "Give the structural formula of acetic acid.",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/ethanoic-acid.svg\" alt=\"Expanded structural formula of ethanoic acid\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>ethanoic acid · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-32",
  "t": "series",
  "src": "p.253 · ICSE 2019 Q5",
  "ref": "p.221, 227",
  "type": "open",
  "q": "Arrange ethane, methane, ethene and ethyne in increasing relative molecular mass. C=12, H=1.",
  "hint": "Use the family formula. Adjacent homologues differ by CH₂ and mass 14.",
  "model": "Methane (16) &lt; ethyne (26) &lt; ethene (28) &lt; ethane (30).",
  "steps": [
   "Calculate 12 × carbon count + hydrogen count for each compound.",
   "Order the masses from smallest to largest."
  ]
 },
 {
  "id": "organic-36",
  "t": "groups",
  "src": "p.253 · ICSE 2019 Q7(i)",
  "ref": "p.222, 226",
  "type": "open",
  "q": "Name the three-carbon compound whose functional group is carboxyl.",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "model": "Propanoic acid."
 },
 {
  "id": "organic-37",
  "t": "series",
  "src": "p.253 · ICSE 2019 Q7(ii)",
  "ref": "p.221, 227",
  "type": "open",
  "q": "Name the first member of the open-chain series CₙH₂ₙ.",
  "hint": "Use the family formula. Adjacent homologues differ by CH₂ and mass 14.",
  "model": "Ethene."
 },
 {
  "id": "organic-42",
  "t": "series",
  "src": "p.253 · ICSE 2020 Q1",
  "ref": "p.221, 227",
  "type": "mcq",
  "q": "Which open-chain hydrocarbon contains a carbon–carbon triple bond?",
  "hint": "Use the family formula. Adjacent homologues differ by CH₂ and mass 14.",
  "opts": [
   "C₃H₄",
   "C₃H₆",
   "C₃H₈",
   "C₄H₁₀"
  ],
  "ans": 0,
  "exp": "C₃H₄ matches CₙH₂ₙ₋₂ with n=3."
 },
 {
  "id": "organic-48",
  "t": "groups",
  "src": "p.253 · ICSE 2020 Q4(ii-A)",
  "ref": "p.222, 226",
  "type": "open",
  "q": "Give the IUPAC name of acetaldehyde.",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "model": "Ethanal."
 },
 {
  "id": "organic-49",
  "t": "groups",
  "src": "p.253 · ICSE 2020 Q4(ii-B)",
  "ref": "p.222, 226",
  "type": "open",
  "q": "Give the IUPAC name of acetylene.",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "model": "Ethyne."
 },
 {
  "id": "organic-53",
  "t": "series",
  "src": "p.253 · ICSE 2020 Q8",
  "ref": "p.221, 227",
  "type": "open",
  "q": "Complete: alkenes are __ [saturated/unsaturated], formula __ [CₙH₂ₙ₊₂/CₙH₂ₙ]. They undergo __ [addition/substitution] and __ [hydrogenation/dehydrogenation] to form alkanes.",
  "hint": "Use the family formula. Adjacent homologues differ by CH₂ and mass 14.",
  "model": "Unsaturated; CₙH₂ₙ; addition; hydrogenation."
 },
 {
  "id": "organic-54",
  "t": "groups",
  "src": "p.253 · ICSE 2021–22 Q1(i)",
  "ref": "p.222, 226",
  "type": "mcq",
  "q": "The IUPAC name of formic acid is:",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "opts": [
   "Propanoic acid",
   "Methanoic acid",
   "Ethanoic acid",
   "Butanoic acid"
  ],
  "ans": 1,
  "exp": "Formic acid is HCOOH."
 },
 {
  "id": "organic-57",
  "t": "carbon",
  "src": "p.254 · ICSE 2021–22 Q3",
  "ref": "p.220, 222, 246",
  "type": "open",
  "q": "Name the property by which carbon links with itself to form a long chain.",
  "hint": "Count bond orders at every carbon: the total must be four.",
  "model": "Catenation."
 },
 {
  "id": "organic-67",
  "t": "groups",
  "src": "p.254 · ICSE 2021–22 Q7(i)",
  "ref": "p.222, 226",
  "type": "open",
  "q": "Match aldehydes to –OH, –CHO or –COOH.",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "model": "–CHO."
 },
 {
  "id": "organic-68",
  "t": "groups",
  "src": "p.254 · ICSE 2021–22 Q7(ii)",
  "ref": "p.222, 226",
  "type": "open",
  "q": "Match carboxylic acids to –OH, –CHO or –COOH.",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "model": "–COOH."
 },
 {
  "id": "organic-69",
  "t": "groups",
  "src": "p.254 · ICSE 2021–22 Q7(iii)",
  "ref": "p.222, 226",
  "type": "open",
  "q": "Match alcohols to –OH, –CHO or –COOH.",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "model": "–OH."
 },
 {
  "id": "organic-70",
  "t": "carbon",
  "src": "p.254 · ICSE 2023 Q1(i)",
  "ref": "p.220, 222, 246",
  "type": "mcq",
  "q": "Which is cyclic?",
  "hint": "Count bond orders at every carbon: the total must be four.",
  "opts": [
   "Propene",
   "Pentene",
   "Butene",
   "Benzene"
  ],
  "ans": 3,
  "exp": "Benzene contains a closed six-carbon ring."
 },
 {
  "id": "organic-72",
  "t": "series",
  "src": "p.254 · ICSE 2023 Q1(iii)",
  "ref": "p.221, 227",
  "type": "mcq",
  "q": "The open-chain hydrocarbon series with only single bonds has formula:",
  "hint": "Use the family formula. Adjacent homologues differ by CH₂ and mass 14.",
  "opts": [
   "CₙH₂ₙ₊₂",
   "CₙH₂ₙ",
   "CₙH₂ₙ₋₂",
   "CₙH₂ₙ₋₆"
  ],
  "ans": 0,
  "exp": "Alkanes have formula CₙH₂ₙ₊₂."
 },
 {
  "id": "organic-75",
  "t": "carbon",
  "src": "p.254 · ICSE 2023 Q4",
  "ref": "p.220, 222, 246",
  "type": "open",
  "q": "State the term: tendency to form chains of identical atoms.",
  "hint": "Count bond orders at every carbon: the total must be four.",
  "model": "Catenation."
 },
 {
  "id": "organic-85",
  "t": "series",
  "src": "p.254 · ICSE 2023 Q7(ii)",
  "ref": "p.221, 227",
  "type": "open",
  "q": "Name a group of organic compounds with a regular structural pattern and successive members differing by CH₂.",
  "hint": "Use the family formula. Adjacent homologues differ by CH₂ and mass 14.",
  "model": "Homologous series."
 },
 {
  "id": "organic-86",
  "t": "series",
  "src": "p.254 · ICSE 2023 Q8",
  "ref": "p.221, 227",
  "type": "open",
  "q": "Arrange C₂H₂, C₃H₆, CH₄ and C₂H₄ in increasing relative molecular mass.",
  "hint": "Use the family formula. Adjacent homologues differ by CH₂ and mass 14.",
  "model": "CH₄ (16) &lt; C₂H₂ (26) &lt; C₂H₄ (28) &lt; C₃H₆ (42).",
  "steps": [
   "Calculate each mass using C=12 and H=1.",
   "Order the calculated masses."
  ]
 },
 {
  "id": "organic-90",
  "t": "groups",
  "src": "p.254 · ICSE 2024 Q2",
  "ref": "p.222, 226",
  "type": "open",
  "q": "Name the group obtained by removing one hydrogen atom from an alkane.",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "model": "Alkyl group."
 },
 {
  "id": "organic-98",
  "t": "groups",
  "src": "p.254 · ICSE 2024 Q5(a)",
  "ref": "p.222, 226",
  "type": "open",
  "q": "From ethene, ethanoic acid, ethanol and methanal, select the compound without any double bond.",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "model": "Ethanol. Both ethanoic acid and methanal contain C=O."
 },
 {
  "id": "organic-101",
  "t": "carbon",
  "src": "p.254 · ICSE 2024 Q6",
  "ref": "p.220, 222, 246",
  "type": "open",
  "q": "Differentiate saturated and unsaturated hydrocarbons by their carbon–carbon bonds.",
  "hint": "Count bond orders at every carbon: the total must be four.",
  "model": "Saturated: only single C–C bonds. Unsaturated: at least one C=C or C≡C bond."
 },
 {
  "id": "organic-103",
  "t": "series",
  "src": "p.255 · ICSE 2025 Q1",
  "ref": "p.221, 227",
  "type": "mcq",
  "q": "Which formula is a saturated open-chain hydrocarbon?",
  "hint": "Use the family formula. Adjacent homologues differ by CH₂ and mass 14.",
  "opts": [
   "C₄H₈",
   "C₅H₁₂",
   "C₄H₆",
   "C₅H₁₀"
  ],
  "ans": 1,
  "exp": "C₅H₁₂ matches CₙH₂ₙ₊₂."
 },
 {
  "id": "organic-106",
  "t": "series",
  "src": "p.255 · ICSE 2025 Q4",
  "ref": "p.221, 227",
  "type": "mcq",
  "q": "Which set contains members of the same homologous series?",
  "hint": "Use the family formula. Adjacent homologues differ by CH₂ and mass 14.",
  "opts": [
   "CH₄, C₂H₆, C₃H₈",
   "CH₄, C₂H₆, C₃H₆",
   "C₃H₄, C₃H₆, C₃H₈",
   "C₂H₄, C₃H₆, C₄H₁₀"
  ],
  "ans": 0,
  "exp": "All members of the first set are alkanes."
 },
 {
  "id": "organic-115",
  "t": "carbon",
  "src": "p.255 · ICSE 2025 Q8",
  "ref": "p.220, 222, 246",
  "type": "open",
  "q": "Which element exhibits catenation in this chapter?",
  "hint": "Count bond orders at every carbon: the total must be four.",
  "model": "Carbon."
 },
 {
  "id": "organic-123",
  "t": "series",
  "src": "p.255 · MCQ Q5",
  "ref": "p.221, 227",
  "type": "mcq",
  "q": "Within the open-chain hydrocarbon families, C₄₀H₇₈ is:",
  "hint": "Use the family formula. Adjacent homologues differ by CH₂ and mass 14.",
  "opts": [
   "Paraffin",
   "Olefin",
   "Aldehyde",
   "Alkyne"
  ],
  "ans": 3,
  "exp": "2 × 40 − 2 = 78, so it fits an alkyne. Formula alone does not uniquely specify structure outside this context."
 },
 {
  "id": "organic-128",
  "t": "carbon",
  "src": "p.256 · Additional Q1(a)",
  "ref": "p.220, 222, 246",
  "type": "mcq",
  "q": "Which is a consequence rather than a fundamental cause of carbon’s unique nature?",
  "hint": "Count bond orders at every carbon: the total must be four.",
  "opts": [
   "Isomerism",
   "Covalency",
   "Catenation",
   "Tetravalency"
  ],
  "ans": 0,
  "exp": "The expected choice is isomerism. It follows from carbon’s bonding possibilities."
 },
 {
  "id": "organic-129",
  "t": "carbon",
  "src": "p.256 · Additional Q1(b)",
  "ref": "p.220, 222, 246",
  "type": "mcq",
  "q": "Which is a closed-chain cyclic compound with double bonds?",
  "hint": "Count bond orders at every carbon: the total must be four.",
  "opts": [
   "Ethane",
   "Ethyne",
   "Benzene",
   "Ethene"
  ],
  "ans": 2,
  "exp": "Benzene is the ring compound."
 },
 {
  "id": "organic-130",
  "t": "carbon",
  "src": "p.256 · Additional Q2",
  "ref": "p.220, 222, 246",
  "type": "open",
  "q": "Justify the textbook statement: almost 90% of known compounds are organic.",
  "hint": "Count bond orders at every carbon: the total must be four.",
  "model": "Carbon is tetravalent and forms strong covalent bonds. Catenation permits long, branched and cyclic structures. Isomerism increases the number of possible compounds. Treat the 90% figure as the textbook’s approximate statement, not a precise current census."
 },
 {
  "id": "organic-131",
  "t": "series",
  "src": "p.256 · Additional Q3(a)",
  "ref": "p.221, 227",
  "type": "open",
  "q": "Define the term illustrated by CH₄, C₂H₆, C₃H₈…",
  "hint": "Use the family formula. Adjacent homologues differ by CH₂ and mass 14.",
  "model": "Homologous series. <div class=\"exam\">★ <b>Learn this exactly:</b> A series of organic compounds which follow a regular structural pattern, in which the successive compounds differing by a ‘CH₂ group’.</div>"
 },
 {
  "id": "organic-132",
  "t": "series",
  "src": "p.256 · Additional Q3(b)",
  "ref": "p.221, 227",
  "type": "open",
  "q": "Which increase or change down a homologous series: molecular weight, functional group, physical properties, chemical properties?",
  "hint": "Use the family formula. Adjacent homologues differ by CH₂ and mass 14.",
  "model": "Molecular weight increases. Physical properties change gradually. The functional group remains the same and chemical properties remain similar."
 },
 {
  "id": "organic-133",
  "t": "series",
  "src": "p.256 · Additional Q3(c-i)",
  "ref": "p.221, 227",
  "type": "open",
  "q": "Give names, molecular formulae and relative molecular masses of the first five members with general formula CₙH₂ₙ₊₂. Use C=12, H=1.",
  "hint": "Use the family formula. Adjacent homologues differ by CH₂ and mass 14.",
  "model": "<table class=\"cmp\"><tr><th>Name</th><th>Formula</th><th>Relative molecular mass</th></tr><tr><td>methane</td><td>C1H4</td><td>16</td></tr><tr><td>ethane</td><td>C2H6</td><td>30</td></tr><tr><td>propane</td><td>C3H8</td><td>44</td></tr><tr><td>butane</td><td>C4H10</td><td>58</td></tr><tr><td>pentane</td><td>C5H12</td><td>72</td></tr></table>"
 },
 {
  "id": "organic-134",
  "t": "series",
  "src": "p.256 · Additional Q3(c-ii)",
  "ref": "p.221, 227",
  "type": "open",
  "q": "Give names, molecular formulae and relative molecular masses of the first five members with general formula CₙH₂ₙ. Use C=12, H=1.",
  "hint": "Use the family formula. Adjacent homologues differ by CH₂ and mass 14.",
  "model": "<table class=\"cmp\"><tr><th>Name</th><th>Formula</th><th>Relative molecular mass</th></tr><tr><td>ethene</td><td>C2H4</td><td>28</td></tr><tr><td>propene</td><td>C3H6</td><td>42</td></tr><tr><td>but-1-ene</td><td>C4H8</td><td>56</td></tr><tr><td>pent-1-ene</td><td>C5H10</td><td>70</td></tr><tr><td>hex-1-ene</td><td>C6H12</td><td>84</td></tr></table>"
 },
 {
  "id": "organic-135",
  "t": "series",
  "src": "p.256 · Additional Q3(c-iii)",
  "ref": "p.221, 227",
  "type": "open",
  "q": "Give names, molecular formulae and relative molecular masses of the first five members with general formula CₙH₂ₙ₋₂. Use C=12, H=1.",
  "hint": "Use the family formula. Adjacent homologues differ by CH₂ and mass 14.",
  "model": "<table class=\"cmp\"><tr><th>Name</th><th>Formula</th><th>Relative molecular mass</th></tr><tr><td>ethyne</td><td>C2H2</td><td>26</td></tr><tr><td>propyne</td><td>C3H4</td><td>40</td></tr><tr><td>but-1-yne</td><td>C4H6</td><td>54</td></tr><tr><td>pent-1-yne</td><td>C5H8</td><td>68</td></tr><tr><td>hex-1-yne</td><td>C6H10</td><td>82</td></tr></table>"
 },
 {
  "id": "organic-136",
  "t": "carbon",
  "src": "p.256 · Additional Q4(a)",
  "ref": "p.220, 222, 246",
  "type": "open",
  "q": "Differentiate molecular and structural formulae by the number and arrangement of atoms.",
  "hint": "Count bond orders at every carbon: the total must be four.",
  "model": "Molecular formula gives the actual number of each kind of atom. Structural formula shows their arrangement and bonding."
 },
 {
  "id": "organic-137",
  "t": "carbon",
  "src": "p.256 · Additional Q4(b-i)",
  "ref": "p.220, 222, 246",
  "type": "open",
  "q": "Draw an alkane with two carbon atoms.",
  "hint": "Count bond orders at every carbon: the total must be four.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/ethane.svg\" alt=\"Expanded structural formula of ethane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>ethane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-138",
  "t": "carbon",
  "src": "p.256 · Additional Q4(b-ii)",
  "ref": "p.220, 222, 246",
  "type": "open",
  "q": "Draw an alkene with three carbon atoms.",
  "hint": "Count bond orders at every carbon: the total must be four.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/propene.svg\" alt=\"Expanded structural formula of propene\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>propene · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-139",
  "t": "carbon",
  "src": "p.256 · Additional Q4(b-iii)",
  "ref": "p.220, 222, 246",
  "type": "open",
  "q": "Draw an alkyne with four carbon atoms (one valid example).",
  "hint": "Count bond orders at every carbon: the total must be four.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/but-1-yne.svg\" alt=\"Expanded structural formula of but-1-yne\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>but-1-yne · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-140",
  "t": "groups",
  "src": "p.256 · Additional Q4(c-i)",
  "ref": "p.222, 226",
  "type": "open",
  "q": "Define alkyl group.",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "model": "A group derived from its parent alkane by loss of one hydrogen atom."
 },
 {
  "id": "organic-141",
  "t": "groups",
  "src": "p.256 · Additional Q4(c-ii)",
  "ref": "p.222, 226",
  "type": "open",
  "q": "Name the alkyl groups derived from the fourth and fifth alkane members.",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "model": "Butyl (C₄H₉–) and pentyl (C₅H₁₁–). Different attachment positions can give different alkyl-group structures."
 },
 {
  "id": "organic-142",
  "t": "groups",
  "src": "p.256 · Additional Q4(d-definition)",
  "ref": "p.222, 226",
  "type": "open",
  "q": "Define functional group.",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "model": "An atom, radical or bond which defines the structure of organic compounds and confers characteristic properties to it."
 },
 {
  "id": "organic-143",
  "t": "groups",
  "src": "p.256 · Additional Q4(d-A)",
  "ref": "p.222, 226",
  "type": "open",
  "q": "Name and draw the functional group of Alkene.",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "model": "C=C. <figure style=\"margin:12px 0\"><img src=\"../assets/organic/ethene.svg\" alt=\"Expanded structural formula of ethene\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>ethene · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>"
 },
 {
  "id": "organic-144",
  "t": "groups",
  "src": "p.256 · Additional Q4(d-B)",
  "ref": "p.222, 226",
  "type": "open",
  "q": "Name and draw the functional group of Alkyne.",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "model": "C≡C. <figure style=\"margin:12px 0\"><img src=\"../assets/organic/ethyne.svg\" alt=\"Expanded structural formula of ethyne\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>ethyne · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>"
 },
 {
  "id": "organic-145",
  "t": "groups",
  "src": "p.256 · Additional Q4(d-C)",
  "ref": "p.222, 226",
  "type": "open",
  "q": "Name and draw the functional group of Alcohol.",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "model": "–OH on a saturated carbon. <figure style=\"margin:12px 0\"><img src=\"../assets/organic/ethanol.svg\" alt=\"Expanded structural formula of ethanol\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>ethanol · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>"
 },
 {
  "id": "organic-146",
  "t": "groups",
  "src": "p.256 · Additional Q4(d-D)",
  "ref": "p.222, 226",
  "type": "open",
  "q": "Name and draw the functional group of Carboxylic acid.",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "model": "–C(=O)OH, written –COOH. <figure style=\"margin:12px 0\"><img src=\"../assets/organic/ethanoic-acid.svg\" alt=\"Expanded structural formula of ethanoic acid\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>ethanoic acid · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>"
 },
 {
  "id": "organic-147",
  "t": "groups",
  "src": "p.256 · Additional Q4(d-E)",
  "ref": "p.222, 226",
  "type": "open",
  "q": "Name and draw the functional group of Alkyl halide.",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "model": "–Cl, –Br, –I or –F. <figure style=\"margin:12px 0\"><img src=\"../assets/organic/bromoethane.svg\" alt=\"Expanded structural formula of bromoethane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>bromoethane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>"
 },
 {
  "id": "organic-148",
  "t": "groups",
  "src": "p.256 · Additional Q4(d-F)",
  "ref": "p.222, 226",
  "type": "open",
  "q": "Name and draw the functional group of Aldehyde.",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "model": "–C(=O)H, written –CHO. <figure style=\"margin:12px 0\"><img src=\"../assets/organic/ethanal.svg\" alt=\"Expanded structural formula of ethanal\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>ethanal · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>"
 },
 {
  "id": "organic-149",
  "t": "groups",
  "src": "p.256 · Additional Q4(d-G)",
  "ref": "p.222, 226",
  "type": "open",
  "q": "Name and draw the functional group of Ketone.",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "model": "–C(=O)– within the chain. <figure style=\"margin:12px 0\"><img src=\"../assets/organic/propanone.svg\" alt=\"Expanded structural formula of propanone\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>propanone · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>"
 },
 {
  "id": "organic-150",
  "t": "groups",
  "src": "p.256 · Additional Q4(d-H)",
  "ref": "p.222, 226",
  "type": "open",
  "q": "Name and draw the functional group of Ether.",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "model": "C–O–C. <figure style=\"margin:12px 0\"><img src=\"../assets/organic/methoxymethane.svg\" alt=\"Expanded structural formula of methoxymethane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>methoxymethane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>"
 },
 {
  "id": "organic-163",
  "t": "series",
  "src": "p.256 · Additional Q7(a)",
  "ref": "p.221, 227",
  "type": "open",
  "q": "Define hydrocarbons. State the two main groups with examples.",
  "hint": "Use the family formula. Adjacent homologues differ by CH₂ and mass 14.",
  "model": "Hydrocarbons are organic compounds containing carbon and hydrogen only. Saturated: alkanes, such as ethane. Unsaturated: alkenes such as ethene, and alkynes such as ethyne."
 },
 {
  "id": "organic-164",
  "t": "series",
  "src": "p.256 · Additional Q7(b)",
  "ref": "p.221, 227",
  "type": "open",
  "q": "Compare the first three members of alkanes, alkenes and alkynes by (i) C–C bond, (ii) general formula, (iii) formula and structure, (iv) availability of multiple-bond electrons, (v) reactivity, (vi) characteristic reaction.",
  "hint": "Use the family formula. Adjacent homologues differ by CH₂ and mass 14.",
  "model": "<table class=\"cmp\"><tr><th>Criterion</th><th>Alkanes</th><th>Alkenes</th><th>Alkynes</th></tr><tr><td>C–C bond</td><td>Single</td><td>Double</td><td>Triple</td></tr><tr><td>General formula</td><td>CₙH₂ₙ₊₂</td><td>CₙH₂ₙ</td><td>CₙH₂ₙ₋₂</td></tr><tr><td>First three</td><td>CH₄, C₂H₆, C₃H₈</td><td>C₂H₄, C₃H₆, C₄H₈</td><td>C₂H₂, C₃H₄, C₄H₆</td></tr><tr><td>Multiple-bond electrons</td><td>None</td><td>Present</td><td>Present</td></tr><tr><td>Reactivity</td><td>Comparatively less reactive</td><td>Readily undergo addition</td><td>Readily undergo addition</td></tr><tr><td>Characteristic reaction</td><td>Substitution</td><td>Addition</td><td>Addition</td></tr></table><figure style=\"margin:12px 0\"><img src=\"../assets/organic/methane.svg\" alt=\"Expanded structural formula of methane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>methane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure><figure style=\"margin:12px 0\"><img src=\"../assets/organic/ethane.svg\" alt=\"Expanded structural formula of ethane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>ethane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure><figure style=\"margin:12px 0\"><img src=\"../assets/organic/propane.svg\" alt=\"Expanded structural formula of propane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>propane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure><figure style=\"margin:12px 0\"><img src=\"../assets/organic/ethene.svg\" alt=\"Expanded structural formula of ethene\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>ethene · Every bond is shown. Check four bonds at each carbon.</figcaption></figure><figure style=\"margin:12px 0\"><img src=\"../assets/organic/propene.svg\" alt=\"Expanded structural formula of propene\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>propene · Every bond is shown. Check four bonds at each carbon.</figcaption></figure><figure style=\"margin:12px 0\"><img src=\"../assets/organic/but-1-ene.svg\" alt=\"Expanded structural formula of but-1-ene\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>but-1-ene · Every bond is shown. Check four bonds at each carbon.</figcaption></figure><figure style=\"margin:12px 0\"><img src=\"../assets/organic/ethyne.svg\" alt=\"Expanded structural formula of ethyne\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>ethyne · Every bond is shown. Check four bonds at each carbon.</figcaption></figure><figure style=\"margin:12px 0\"><img src=\"../assets/organic/propyne.svg\" alt=\"Expanded structural formula of propyne\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>propyne · Every bond is shown. Check four bonds at each carbon.</figcaption></figure><figure style=\"margin:12px 0\"><img src=\"../assets/organic/but-1-yne.svg\" alt=\"Expanded structural formula of but-1-yne\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>but-1-yne · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>"
 },
 {
  "id": "organic-297",
  "t": "series",
  "src": "p.258 · Unit test Q2(1)",
  "ref": "p.221, 227",
  "type": "mcq",
  "q": "Vapour density of the fifth alkane member is:",
  "hint": "Use the family formula. Adjacent homologues differ by CH₂ and mass 14.",
  "opts": [
   "22",
   "36",
   "29"
  ],
  "ans": 1,
  "exp": "Pentane is C₅H₁₂. Relative molecular mass = 72. Vapour density = 72/2 = 36."
 },
 {
  "id": "organic-301",
  "t": "groups",
  "src": "p.258 · Unit test Q2(5)",
  "ref": "p.222, 226",
  "type": "mcq",
  "q": "The functional group of ethanoic acid is:",
  "hint": "Look for the complete functional group, including its carbonyl oxygen.",
  "opts": [
   "Aldehydic",
   "Carboxyl",
   "Hydroxyl"
  ],
  "ans": 1,
  "exp": "–COOH is the complete group."
 }
];
