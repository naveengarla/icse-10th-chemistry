const svg=(w,h,inner)=>`<svg class="dia" viewBox="0 0 ${w} ${h}" style="max-width:${Math.round(w*1.3)}px">${inner}</svg>`;
const T=(x,y,t,c='op')=>`<text x="${x}" y="${y}" class="${c}" text-anchor="middle" dominant-baseline="central">${t}</text>`;
const off=s=>s.length>1?22:15;
function mk(x,y,m){
  if(m==='•')return `<circle cx="${x}" cy="${y}" r="2.8" class="e1"/>`;
  if(m==='×')return `<text x="${x}" y="${y}" class="e2" text-anchor="middle" dominant-baseline="central">×</text>`;
  if(m==='○')return `<circle cx="${x}" cy="${y}" r="2.8" class="e3"/>`;
  return '';
}
function marks(x,y,str,dir){const a=[...str],n=a.length,sp=8;return a.map((m,i)=>{const d=(i-(n-1)/2)*sp;return mk(dir==='h'?x+d:x,dir==='h'?y:y+d,m)}).join('')}
/* Lewis symbol: o = {t,b,l,r} strings of marks • × ○ */
function L(x,y,s,o={}){const d=off(s);return T(x,y,s,'sym')+(o.t?marks(x,y-15,o.t,'h'):'')+(o.b?marks(x,y+15,o.b,'h'):'')+(o.l?marks(x-d,y,o.l,'v'):'')+(o.r?marks(x+d,y,o.r,'v'):'')}
function ION(x,y,s,o,ch){const w=off(s)+(o.l||o.r?12:4);return T(x-w,y,'[','br')+L(x,y,s,o)+T(x+w,y,']','br')+T(x+w+10,y-17,ch,'chg')}
/* shell (Bohr) model: arr = numbers (dots) or strings of marks */
function shells(cx,cy,sym,arr){let s=`<circle cx="${cx}" cy="${cy}" r="11" class="nuc"/>`+T(cx,cy,sym,'ns');
  arr.forEach((n,i)=>{const r=20+11*i;s+=`<circle cx="${cx}" cy="${cy}" r="${r}" class="sh"/>`;const ms=typeof n==='number'?'•'.repeat(n):n;const a=[...ms];
  a.forEach((m,k)=>{const an=2*Math.PI*k/a.length-Math.PI/2;s+=mk((cx+r*Math.cos(an)).toFixed(1),(cy+r*Math.sin(an)).toFixed(1),m)})});return s}
const KEY_E=`<div class="key">Key: <b style="color:#1d4ed8">•</b> electrons of the first atom &nbsp; <b style="color:#dc2626">×</b> electrons of the second atom &nbsp; <b style="color:#059669">○</b> electron gained from outside</div>`;
/* arrow between two points (for maps/flow diagrams) */
const ARR=(x1,y1,x2,y2,c='#6366f1')=>`<defs><marker id="m${c.slice(1)}" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="${c}"/></marker></defs><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="2" marker-end="url(#m${c.slice(1)})"/>`;
const BOX=(x,y,w,h,txt,fill='#eef2ff')=>`<rect x="${x-w/2}" y="${y-h/2}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="#6366f1"/>`+T(x,y,txt,'frm');
const tr=(...rows)=>rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('');

/* Lesson building blocks: question to start → comparison → worked steps → exam traps → self-check → exam sentence */
const hook=t=>`<div class="hook">🤔 <b>Start with a question:</b> ${t}</div>`;
const story=t=>`<div class="story">🧠 <b>Think of it like this:</b> ${t}</div>`;
const steps=(title,l)=>`<div class="steps"><b>👣 ${title}</b><ol>${l.map(x=>`<li>${x}</li>`).join('')}</ol></div>`;
const trap=(...l)=>`<div class="trap">⚠️ <b>Exam traps (where marks are lost)</b><ul>${l.map(x=>`<li>${x}</li>`).join('')}</ul></div>`;
const cy=(...qa)=>`<div class="cy"><b>✅ Check yourself</b> <span class="key">Answer in your head first, then tap the question to see the answer.</span>${qa.map(([q,a])=>`<details><summary>${q}</summary><div>${a}</div></details>`).join('')}</div>`;
const exam=t=>`<div class="exam">📝 <b>Exam-ready answer:</b> ${t}</div>`;
const watch=q=>`<a class="watch" target="_blank" rel="noopener" href="https://www.youtube.com/results?search_query=${encodeURIComponent(q)}">▶ Watch it: ${q}</a>`;
const flow=(...l)=>`<div class="flow">${l.map(x=>`<span>${x}</span>`).join('<i>→</i>')}</div>`;

/* The "mole map": mass ↔ moles ↔ particles ↔ volume (used across the Mole chapter) */
const MOLEMAP=svg(620,300,
 BOX(310,110,150,50,'MOLES (n)','#fde68a')+BOX(85,110,150,50,'MASS (g)')+BOX(535,110,150,50,'PARTICLES')+BOX(310,255,230,50,'GAS VOLUME at STP (L)')+
 ARR(162,98,233,98)+ARR(233,122,162,122,'#059669')+T(197,80,'÷ molar mass','lab')+T(197,142,'× molar mass','lab')+
 ARR(387,98,458,98)+ARR(458,122,387,122,'#059669')+T(422,80,'× 6.023×10²³','lab')+T(422,142,'÷ 6.023×10²³','lab')+
 ARR(296,137,296,228)+ARR(324,228,324,137,'#059669')+T(250,182,'× 22.4 L','lab')+T(372,182,'÷ 22.4 L','lab')+
 T(310,22,'Always go THROUGH moles: mass → moles → anything','lab'));
