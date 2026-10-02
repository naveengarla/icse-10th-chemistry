/* Shared chemistry helpers for the Lab widgets.
   Atomic masses use the ICSE textbook values (Dalal). */
const NA=6.023e23, VM=22.4;          // Avogadro number, molar volume at s.t.p. (L)
const AM={H:1,He:4,C:12,N:14,O:16,F:19,Ne:20,Na:23,Mg:24,Al:27,Si:28,P:31,S:32,Cl:35.5,Ar:40,K:39,Ca:40,
 Cr:52,Mn:55,Fe:56,Cu:64,Zn:65,Br:80,Ag:108,I:127,Ba:137,Pt:195,Pb:207};

/* 'Ca(OH)2' / 'CuSO4.5H2O' / 'CuSO₄·5H₂O' → {Ca:1,O:2,H:2} */
function parseFormula(f){
 f=String(f).replace(/[₀-₉]/g,d=>'₀₁₂₃₄₅₆₇₈₉'.indexOf(d)).replace(/[·•*]/g,'.').replace(/\s/g,'');
 const total={};
 for(const part of f.split('.')){
  const m=part.match(/^(\d+)(.*)$/), k=m?+m[1]:1, body=m?m[2]:part;
  const stack=[{}];let i=0;
  while(i<body.length){
   const c=body[i];
   if(c==='('||c==='['){stack.push({});i++;continue}
   if(c===')'||c===']'){i++;let n='';while(/\d/.test(body[i]||''))n+=body[i++];const g=stack.pop(),t=stack[stack.length-1];
    for(const e in g)t[e]=(t[e]||0)+g[e]*(+n||1);continue}
   const e=body.slice(i).match(/^([A-Z][a-z]?)(\d*)/);
   if(!e)throw new Error('Cannot read formula: '+f);
   if(!(e[1] in AM))throw new Error('Unknown element: '+e[1]);
   const t=stack[stack.length-1];t[e[1]]=(t[e[1]]||0)+(+e[2]||1);i+=e[0].length;
  }
  for(const e in stack[0])total[e]=(total[e]||0)+stack[0][e]*k;
 }
 return total;
}
const molarMass=f=>{const c=parseFormula(f);return Object.keys(c).reduce((s,e)=>s+AM[e]*c[e],0)};

/* 'H2SO4' → 'H₂SO₄', '5H2O' keeps leading coefficient, '.' → '·' */
const sub=f=>String(f).replace(/\./g,'·').replace(/([A-Za-z\)\]])(\d+)/g,(m,a,d)=>a+[...d].map(x=>'₀₁₂₃₄₅₆₇₈₉'[x]).join(''));
const sup=n=>String(n).replace(/[-\d]/g,x=>x==='-'?'⁻':'⁰¹²³⁴⁵⁶⁷⁸⁹'[x]);

/* Number formatting: sensible significant figures; big/small → a × 10ⁿ */
function fmt(x,sig=4){
 if(!isFinite(x))return '—';
 if(x===0)return '0';
 const a=Math.abs(x);
 if(a>=1e5||a<1e-3){const e=Math.floor(Math.log10(a)),m=x/10**e;return `${+m.toFixed(3)} × 10${sup(e)}`}
 return String(+x.toPrecision(sig));
}
/* Read what a student typed: '6.023x10^23', '6.023e23', '3 × 10²³', '1,000' */
function readNum(s){
 s=String(s).trim().replace(/,/g,'').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]/g,c=>c==='⁻'?'-':'⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c));
 const m=s.match(/^([-+]?[\d.]+)\s*(?:[x×*]\s*10\s*\^?\s*([-+]?\d+)|e([-+]?\d+))?/i);
 if(!m)return NaN;
 return parseFloat(m[1])*10**(+(m[2]??m[3]??0));
}
const gcd=(a,b)=>b?gcd(b,a%b):a;
