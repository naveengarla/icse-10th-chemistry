const PAGE={key:'organic-2-v1',title:"8.2 Naming & isomerism",book:{dir:'organic',from:219,to:258}};
const TOPICS=ALL_TOPICS.filter(t=>["isomers", "naming"].includes(t.id));
const CHAPTER=ALL_CHAPTER.filter(s=>s.t.some(t=>TOPICS.some(x=>x.id===t)));
const Q=[
 {
  "id": "organic-1",
  "t": "naming",
  "src": "p.225 · Worked naming example 2-methylbutane",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-methylbutane.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "2-methylbutane.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ],
  "solved": true
 },
 {
  "id": "organic-2",
  "t": "naming",
  "src": "p.225 · Worked naming example 4-methylpentan-2-ol",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/4-methylpentan-2-ol.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "4-methylpentan-2-ol.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ],
  "solved": true
 },
 {
  "id": "organic-3",
  "t": "naming",
  "src": "p.225 · Worked naming example 2-bromo-4-chloropentane",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-bromo-4-chloropentane.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "2-bromo-4-chloropentane.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ],
  "solved": true
 },
 {
  "id": "organic-4",
  "t": "naming",
  "src": "p.225 · Worked naming example 3-methylpent-2-ene",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/3-methylpent-2-ene.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "3-methylpent-2-ene.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ],
  "solved": true
 },
 {
  "id": "organic-5",
  "t": "naming",
  "src": "p.225 · Worked naming example 1,2-dichloroethene",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/1-2-dichloroethene.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "1,2-dichloroethene.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ],
  "solved": true
 },
 {
  "id": "organic-6",
  "t": "naming",
  "src": "p.225 · Worked naming example 1,1,2,2-tetrabromoethane",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/1-1-2-2-tetrabromoethane.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "1,1,2,2-tetrabromoethane.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ],
  "solved": true
 },
 {
  "id": "organic-7",
  "t": "naming",
  "src": "p.225 · Worked naming example 2-iodo-2-methylpropane",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-iodo-2-methylpropane.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "2-iodo-2-methylpropane.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ],
  "solved": true
 },
 {
  "id": "organic-8",
  "t": "naming",
  "src": "p.225 · Worked name-to-structure example",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of 2-chloro-3-methylbut-2-ene.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-chloro-3-methylbut-2-ene.svg\" alt=\"Expanded structural formula of 2-chloro-3-methylbut-2-ene\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>2-chloro-3-methylbut-2-ene · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ],
  "solved": true
 },
 {
  "id": "organic-9",
  "t": "naming",
  "src": "p.225 · Worked naming example 3-ethyl-5-methylheptane",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/3-ethyl-5-methylheptane.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "3-ethyl-5-methylheptane.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ],
  "solved": true
 },
 {
  "id": "organic-11",
  "t": "naming",
  "src": "p.253 · ICSE 2018 Q1",
  "ref": "p.224–226, 247–248",
  "type": "mcq",
  "q": "The IUPAC name of dimethyl ether is:",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "opts": [
   "Ethoxymethane",
   "Methoxymethane",
   "Methoxyethane",
   "Ethoxyethane"
  ],
  "ans": 1,
  "exp": "CH₃–O–CH₃ is methoxymethane."
 },
 {
  "id": "organic-13",
  "t": "naming",
  "src": "p.253 · ICSE 2018 Q3(1)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/methanal.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "methanal.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ]
 },
 {
  "id": "organic-14",
  "t": "naming",
  "src": "p.253 · ICSE 2018 Q3(2)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/propan-1-ol.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "propan-1-ol.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ]
 },
 {
  "id": "organic-15",
  "t": "naming",
  "src": "p.253 · ICSE 2018 Q3(3)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/but-2-ene.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "but-2-ene.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ]
 },
 {
  "id": "organic-16",
  "t": "isomers",
  "src": "p.253 · ICSE 2018 Q4",
  "ref": "p.223, 247–248",
  "type": "open",
  "q": "Draw the structural formulae of the two isomers of butane.",
  "hint": "Compare formulae first. Then compare skeletons and group positions.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/butane.svg\" alt=\"Expanded structural formula of butane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>butane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure><figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-methylpropane.svg\" alt=\"Expanded structural formula of 2-methylpropane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>2-methylpropane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>"
 },
 {
  "id": "organic-27",
  "t": "naming",
  "src": "p.253 · ICSE 2019 Q4(i-A)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/propyne.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "propyne.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ]
 },
 {
  "id": "organic-28",
  "t": "naming",
  "src": "p.253 · ICSE 2019 Q4(i-B)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/ethanal.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "ethanal.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ]
 },
 {
  "id": "organic-46",
  "t": "naming",
  "src": "p.253 · ICSE 2020 Q4(i-A)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of 2,2-dimethylpentane.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-2-dimethylpentane.svg\" alt=\"Expanded structural formula of 2,2-dimethylpentane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>2,2-dimethylpentane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-47",
  "t": "naming",
  "src": "p.253 · ICSE 2020 Q4(i-B)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of methanol.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/methanol.svg\" alt=\"Expanded structural formula of methanol\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>methanol · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-52",
  "t": "isomers",
  "src": "p.253 · ICSE 2020 Q7",
  "ref": "p.223, 247–248",
  "type": "open",
  "q": "Draw all three chain isomers of pentane.",
  "hint": "Compare formulae first. Then compare skeletons and group positions.",
  "model": "All have C₅H₁₂.<figure style=\"margin:12px 0\"><img src=\"../assets/organic/pentane.svg\" alt=\"Expanded structural formula of pentane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>pentane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure><figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-methylbutane.svg\" alt=\"Expanded structural formula of 2-methylbutane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>2-methylbutane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure><figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-2-dimethylpropane.svg\" alt=\"Expanded structural formula of 2,2-dimethylpropane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>2,2-dimethylpropane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>"
 },
 {
  "id": "organic-56",
  "t": "isomers",
  "src": "p.254 · ICSE 2021–22 Q2",
  "ref": "p.223, 247–248",
  "type": "open",
  "q": "Define isomerism.",
  "hint": "Compare formulae first. Then compare skeletons and group positions.",
  "model": "The phenomenon in which organic compounds have the same molecular formula but differ in molecular arrangement or structural formula."
 },
 {
  "id": "organic-58",
  "t": "naming",
  "src": "p.254 · ICSE 2021–22 Q4(i)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the structural formula of pentanal.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/pentanal.svg\" alt=\"Expanded structural formula of pentanal\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>pentanal · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-59",
  "t": "naming",
  "src": "p.254 · ICSE 2021–22 Q4(ii)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the structural formula of propanol (use propan-1-ol).",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/propan-1-ol.svg\" alt=\"Expanded structural formula of propan-1-ol\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>propan-1-ol · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-60",
  "t": "naming",
  "src": "p.254 · ICSE 2021–22 Q4(iii)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the structural formula of but-2-ene.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/but-2-ene.svg\" alt=\"Expanded structural formula of but-2-ene\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>but-2-ene · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-64",
  "t": "naming",
  "src": "p.254 · ICSE 2021–22 Q6(i)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/ethene.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "ethene.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ]
 },
 {
  "id": "organic-65",
  "t": "naming",
  "src": "p.254 · ICSE 2021–22 Q6(ii)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/propanal.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "propanal.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ]
 },
 {
  "id": "organic-66",
  "t": "naming",
  "src": "p.254 · ICSE 2021–22 Q6(iii)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/3-methylpentane.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "3-methylpentane.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ]
 },
 {
  "id": "organic-76",
  "t": "naming",
  "src": "p.254 · ICSE 2023 Q5(i-a)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of 2-chlorobutane.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-chlorobutane.svg\" alt=\"Expanded structural formula of 2-chlorobutane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>2-chlorobutane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-77",
  "t": "naming",
  "src": "p.254 · ICSE 2023 Q5(i-b)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of methanal.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/methanal.svg\" alt=\"Expanded structural formula of methanal\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>methanal · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-78",
  "t": "naming",
  "src": "p.254 · ICSE 2023 Q5(i-c)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of but-2-yne.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/but-2-yne.svg\" alt=\"Expanded structural formula of but-2-yne\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>but-2-yne · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-79",
  "t": "naming",
  "src": "p.254 · ICSE 2023 Q5(ii-a)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/ethanoic-acid.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "ethanoic acid.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ]
 },
 {
  "id": "organic-80",
  "t": "naming",
  "src": "p.254 · ICSE 2023 Q5(ii-b)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/butan-2-ol.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "butan-2-ol.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ]
 },
 {
  "id": "organic-84",
  "t": "isomers",
  "src": "p.254 · ICSE 2023 Q7(i)",
  "ref": "p.223, 247–248",
  "type": "open",
  "q": "Name compounds with the same molecular formula but different structural formulae.",
  "hint": "Compare formulae first. Then compare skeletons and group positions.",
  "model": "Isomers."
 },
 {
  "id": "organic-91",
  "t": "naming",
  "src": "p.254 · ICSE 2024 Q3(a-1)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-3-dichloropentane.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "2,3-dichloropentane.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ]
 },
 {
  "id": "organic-92",
  "t": "naming",
  "src": "p.254 · ICSE 2024 Q3(a-2)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/propanoic-acid.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "propanoic acid.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ]
 },
 {
  "id": "organic-93",
  "t": "naming",
  "src": "p.254 · ICSE 2024 Q3(b-1)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of 3-methylpentane.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/3-methylpentane.svg\" alt=\"Expanded structural formula of 3-methylpentane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>3-methylpentane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-94",
  "t": "naming",
  "src": "p.254 · ICSE 2024 Q3(b-2)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of propyne.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/propyne.svg\" alt=\"Expanded structural formula of propyne\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>propyne · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-95",
  "t": "naming",
  "src": "p.254 · ICSE 2024 Q3(b-3)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of methanal.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/methanal.svg\" alt=\"Expanded structural formula of methanal\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>methanal · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-104",
  "t": "isomers",
  "src": "p.255 · ICSE 2025 Q2",
  "ref": "p.223, 247–248",
  "type": "open",
  "q": "State the term: organic compounds with the same molecular formula but different structural formulae.",
  "hint": "Compare formulae first. Then compare skeletons and group positions.",
  "model": "Isomers."
 },
 {
  "id": "organic-107",
  "t": "naming",
  "src": "p.255 · ICSE 2025 Q5(a-i)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of 2-methylprop-1-ene.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-methylprop-1-ene.svg\" alt=\"Expanded structural formula of 2-methylprop-1-ene\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>2-methylprop-1-ene · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-108",
  "t": "naming",
  "src": "p.255 · ICSE 2025 Q5(a-ii)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of butanal.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/butanal.svg\" alt=\"Expanded structural formula of butanal\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>butanal · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-109",
  "t": "naming",
  "src": "p.255 · ICSE 2025 Q5(b-i)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/1-1-2-2-tetrachloroethane.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "1,1,2,2-tetrachloroethane.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ]
 },
 {
  "id": "organic-110",
  "t": "naming",
  "src": "p.255 · ICSE 2025 Q5(b-ii)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/butanoic-acid.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "butanoic acid.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ]
 },
 {
  "id": "organic-111",
  "t": "naming",
  "src": "p.255 · ICSE 2025 Q5(b-iii)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/pent-2-ene.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "pent-2-ene.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ]
 },
 {
  "id": "organic-117",
  "t": "isomers",
  "src": "p.255 · ICSE 2025 Q9(b)",
  "ref": "p.223, 247–248",
  "type": "open",
  "q": "<table class=\"cmp\"><tr><th>Letter</th><th>Structure</th></tr><tr><td>A</td><td>CH₃COOH</td></tr><tr><td>B</td><td>CH₃CH₂OH</td></tr><tr><td>C</td><td>CH₂=CH₂</td></tr><tr><td>D</td><td>CH₃CH₂CH₂CH₃</td></tr><tr><td>E</td><td>CH₃CH₃</td></tr><tr><td>F</td><td>CH₃CH(CH₃)CH₃</td></tr></table>Use letters only. Which two have the same molecular formula?",
  "hint": "Compare formulae first. Then compare skeletons and group positions.",
  "model": "D and F: both C₄H₁₀."
 },
 {
  "id": "organic-121",
  "t": "naming",
  "src": "p.255 · MCQ Q3",
  "ref": "p.224–226, 247–248",
  "type": "mcq",
  "q": "CH₃–O–CH₃ is:",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "opts": [
   "Ethoxyethane",
   "Methoxymethane",
   "Methoxyethane",
   "Dimethyl ether"
  ],
  "ans": 1,
  "exp": "The requested IUPAC name is methoxymethane. Dimethyl ether is the common name."
 },
 {
  "id": "organic-126",
  "t": "isomers",
  "src": "p.255 · MCQ Q8",
  "ref": "p.223, 247–248",
  "type": "open",
  "q": "Which pair are position isomers? (a) CH₃CH₂CH₂C≡CH; (b) CH₃CH₂C≡CH; (c) CH₃CH(CH₃)C≡CH; (d) CH₃CH₂C≡CCH₃.",
  "hint": "Compare formulae first. Then compare skeletons and group positions.",
  "model": "(a) and (d): pent-1-yne and pent-2-yne. They have the same five-carbon skeleton and C₅H₈ formula."
 },
 {
  "id": "organic-151",
  "t": "isomers",
  "src": "p.256 · Additional Q5(a-i)",
  "ref": "p.223, 247–248",
  "type": "open",
  "q": "Why do n-butane and isobutane have the same formula and similar chemical properties but different structures and physical properties?",
  "hint": "Compare formulae first. Then compare skeletons and group positions.",
  "model": "Both are C₄H₁₀ alkanes. One has a straight chain and the other a branched skeleton. Both have single bonds, giving similar characteristic chemical behaviour. Their shapes differ, changing physical properties."
 },
 {
  "id": "organic-152",
  "t": "isomers",
  "src": "p.256 · Additional Q5(a-ii)",
  "ref": "p.223, 247–248",
  "type": "open",
  "q": "Distinguish chain and position isomerism, with suitable examples.",
  "hint": "Compare formulae first. Then compare skeletons and group positions.",
  "model": "Chain: a different carbon skeleton, such as butane and 2-methylpropane. Position: the same skeleton with a different group or multiple-bond position, such as but-1-ene and but-2-ene."
 },
 {
  "id": "organic-153",
  "t": "isomers",
  "src": "p.256 · Additional Q5(b-i)",
  "ref": "p.223, 247–248",
  "type": "open",
  "q": "Draw the two butane isomers.",
  "hint": "Compare formulae first. Then compare skeletons and group positions.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/butane.svg\" alt=\"Expanded structural formula of butane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>butane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure><figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-methylpropane.svg\" alt=\"Expanded structural formula of 2-methylpropane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>2-methylpropane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>"
 },
 {
  "id": "organic-154",
  "t": "isomers",
  "src": "p.256 · Additional Q5(b-ii)",
  "ref": "p.223, 247–248",
  "type": "open",
  "q": "Draw the three pentane isomers.",
  "hint": "Compare formulae first. Then compare skeletons and group positions.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/pentane.svg\" alt=\"Expanded structural formula of pentane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>pentane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure><figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-methylbutane.svg\" alt=\"Expanded structural formula of 2-methylbutane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>2-methylbutane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure><figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-2-dimethylpropane.svg\" alt=\"Expanded structural formula of 2,2-dimethylpropane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>2,2-dimethylpropane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>"
 },
 {
  "id": "organic-155",
  "t": "isomers",
  "src": "p.256 · Additional Q5(b-iii)",
  "ref": "p.223, 247–248",
  "type": "open",
  "q": "Draw the structural isomers of but-1-ene in the chapter.",
  "hint": "Compare formulae first. Then compare skeletons and group positions.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/but-1-ene.svg\" alt=\"Expanded structural formula of but-1-ene\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>but-1-ene · Every bond is shown. Check four bonds at each carbon.</figcaption></figure><figure style=\"margin:12px 0\"><img src=\"../assets/organic/but-2-ene.svg\" alt=\"Expanded structural formula of but-2-ene\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>but-2-ene · Every bond is shown. Check four bonds at each carbon.</figcaption></figure><figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-methylprop-1-ene.svg\" alt=\"Expanded structural formula of 2-methylprop-1-ene\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>2-methylprop-1-ene · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>"
 },
 {
  "id": "organic-156",
  "t": "naming",
  "src": "p.256 · Additional Q6(a-i)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "State the term for assigning names to organic compounds.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "Nomenclature."
 },
 {
  "id": "organic-157",
  "t": "naming",
  "src": "p.256 · Additional Q6(a-ii)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Why is systematic assignment of names necessary?",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "Many compounds and isomers exist. A systematic name communicates a specific molecular structure."
 },
 {
  "id": "organic-158",
  "t": "naming",
  "src": "p.256 · Additional Q6(a-iii)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "State the basic rules of trivial and IUPAC naming.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "Trivial names may reflect source, properties or Latin/Greek origins. IUPAC uses the parent chain, numbering, substituents and suffixes to specify structure."
 },
 {
  "id": "organic-159",
  "t": "naming",
  "src": "p.256 · Additional Q6(b)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Explain the name 4-methylpentan-2-ol using the longest-chain and lowest-functional-group-number rules.<figure style=\"margin:12px 0\"><img src=\"../assets/organic/4-methylpentan-2-ol.svg\" alt=\"Expanded structural formula of 4-methylpentan-2-ol\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>4-methylpentan-2-ol · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "The principal chain contains five carbons and the OH group. Numbering gives OH position 2, not 4. The methyl branch is at position 4."
 },
 {
  "id": "organic-160",
  "t": "naming",
  "src": "p.256 · Additional Q6(c-i)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of 3-methylpent-2-ene.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/3-methylpent-2-ene.svg\" alt=\"Expanded structural formula of 3-methylpent-2-ene\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>3-methylpent-2-ene · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-161",
  "t": "naming",
  "src": "p.256 · Additional Q6(c-ii)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of 2,3-dimethylbutane.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-3-dimethylbutane.svg\" alt=\"Expanded structural formula of 2,3-dimethylbutane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>2,3-dimethylbutane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-162",
  "t": "naming",
  "src": "p.256 · Additional Q6(c-iii)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of 2-methylprop-1-ene.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-methylprop-1-ene.svg\" alt=\"Expanded structural formula of 2-methylprop-1-ene\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>2-methylprop-1-ene · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-217",
  "t": "naming",
  "src": "p.257 · Additional Q9(i)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/3-methylbutan-1-ol.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "3-methylbutan-1-ol.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ]
 },
 {
  "id": "organic-218",
  "t": "naming",
  "src": "p.257 · Additional Q9(ii)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-2-dimethylpropan-1-ol.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "2,2-dimethylpropan-1-ol.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ]
 },
 {
  "id": "organic-219",
  "t": "naming",
  "src": "p.257 · Additional Q9(iii)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/3-bromo-2-methylbutanoic-acid.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "3-bromo-2-methylbutanoic acid.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ]
 },
 {
  "id": "organic-220",
  "t": "naming",
  "src": "p.257 · Additional Q9(iv)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/3-methylbutanal.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "3-methylbutanal.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ]
 },
 {
  "id": "organic-221",
  "t": "naming",
  "src": "p.257 · Additional Q9(v)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Give the IUPAC name of this compound:<figure style=\"margin:12px 0\"><img src=\"../assets/organic/3-methylbutan-2-one.svg\" alt=\"Unlabelled organic structure to identify\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>Structure to identify · Every atom and bond is shown.</figcaption></figure>",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "3-methylbutan-2-one.",
  "steps": [
   "Identify the principal chain and its carbon count.",
   "Locate the group or multiple bond and number the chain.",
   "Combine the branch positions, parent name and ending."
  ]
 },
 {
  "id": "organic-287",
  "t": "naming",
  "src": "p.258 · Unit test Q1(1)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of pent-1-ene.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/pent-1-ene.svg\" alt=\"Expanded structural formula of pent-1-ene\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>pent-1-ene · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-288",
  "t": "naming",
  "src": "p.258 · Unit test Q1(2)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of but-2-yne.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/but-2-yne.svg\" alt=\"Expanded structural formula of but-2-yne\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>but-2-yne · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-289",
  "t": "naming",
  "src": "p.258 · Unit test Q1(3)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of 3-methylpentane.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/3-methylpentane.svg\" alt=\"Expanded structural formula of 3-methylpentane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>3-methylpentane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-290",
  "t": "naming",
  "src": "p.258 · Unit test Q1(4)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of 2-methylprop-1-ene.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-methylprop-1-ene.svg\" alt=\"Expanded structural formula of 2-methylprop-1-ene\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>2-methylprop-1-ene · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-291",
  "t": "naming",
  "src": "p.258 · Unit test Q1(5)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of pentan-3-ol.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/pentan-3-ol.svg\" alt=\"Expanded structural formula of pentan-3-ol\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>pentan-3-ol · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-292",
  "t": "naming",
  "src": "p.258 · Unit test Q1(6)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of 1,1,2,2-tetrabromoethane.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/1-1-2-2-tetrabromoethane.svg\" alt=\"Expanded structural formula of 1,1,2,2-tetrabromoethane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>1,1,2,2-tetrabromoethane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-293",
  "t": "naming",
  "src": "p.258 · Unit test Q1(7)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of 2-methylbutan-2-ol.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-methylbutan-2-ol.svg\" alt=\"Expanded structural formula of 2-methylbutan-2-ol\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>2-methylbutan-2-ol · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-294",
  "t": "naming",
  "src": "p.258 · Unit test Q1(8)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of 2,2-dimethylpropan-1-ol.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-2-dimethylpropan-1-ol.svg\" alt=\"Expanded structural formula of 2,2-dimethylpropan-1-ol\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>2,2-dimethylpropan-1-ol · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-295",
  "t": "naming",
  "src": "p.258 · Unit test Q1(9)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of 2,2-dimethylpropane.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-2-dimethylpropane.svg\" alt=\"Expanded structural formula of 2,2-dimethylpropane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>2,2-dimethylpropane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-296",
  "t": "naming",
  "src": "p.258 · Unit test Q1(10)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Draw the expanded structural formula of 2-bromo-4-chloropentane.",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "<figure style=\"margin:12px 0\"><img src=\"../assets/organic/2-bromo-4-chloropentane.svg\" alt=\"Expanded structural formula of 2-bromo-4-chloropentane\" style=\"display:block;max-width:100%;height:auto\" loading=\"lazy\"><figcaption>2-bromo-4-chloropentane · Every bond is shown. Check four bonds at each carbon.</figcaption></figure>",
  "steps": [
   "Draw the principal carbon chain from the name.",
   "Place the multiple bond, branch or functional group at its numbered position.",
   "Add hydrogens until each carbon has four bonds."
  ]
 },
 {
  "id": "organic-298",
  "t": "isomers",
  "src": "p.258 · Unit test Q2(2)",
  "ref": "p.223, 247–248",
  "type": "mcq",
  "q": "Which pentane isomer has a carbon attached to four other carbons?",
  "hint": "Compare formulae first. Then compare skeletons and group positions.",
  "opts": [
   "n-pentane",
   "isopentane",
   "neopentane"
  ],
  "ans": 2,
  "exp": "Neopentane is 2,2-dimethylpropane."
 },
 {
  "id": "organic-300",
  "t": "naming",
  "src": "p.258 · Unit test Q2(4)",
  "ref": "p.224–226, 247–248",
  "type": "mcq",
  "q": "Methyl acetylene is:",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "opts": [
   "But-1-yne",
   "Propyne",
   "Ethyne"
  ],
  "ans": 1,
  "exp": "CH₃C≡CH is propyne."
 },
 {
  "id": "organic-325",
  "t": "isomers",
  "src": "p.258 · Unit test Q6(2)",
  "ref": "p.223, 247–248",
  "type": "open",
  "q": "Why can isomers in the same homologous series differ physically but have similar chemical properties?",
  "hint": "Compare formulae first. Then compare skeletons and group positions.",
  "model": "They have the same functional group but different structural arrangements. The group gives similar characteristic chemistry; the structure affects physical properties."
 },
 {
  "id": "organic-326",
  "t": "naming",
  "src": "p.258 · Unit test Q6(3)",
  "ref": "p.224–226, 247–248",
  "type": "open",
  "q": "Why does systematic IUPAC naming assign a specific name to a compound?",
  "hint": "Find the parent chain. Give the key group or multiple bond its lowest locant.",
  "model": "The naming rules identify the parent chain, group positions and substituents systematically, avoiding ambiguity. The textbook’s “only one name” refers to a consistent preferred name, not the impossibility of other acceptable names."
 }
];
