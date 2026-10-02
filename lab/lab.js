/* Lab shell: every widget file calls LAB.add({...}); this file renders the tabs.
   Widget contract:
     LAB.add({id:'molemap', icon:'🗺️', name:'Mole Map', blurb:'one line', ref:'p.76–84 · practice page 4.2',
              mount(el){ ...build UI inside el (a <div>); keep all state inside this closure... } })
   Load order in Mole-Lab.html: common.js → lab/chem.js → lab/lab.js → widget files → LAB.start() */
var LAB={list:[],add(w){this.list.push(w)},
 start(){
  const nav=document.getElementById('nav'),main=document.getElementById('main');
  nav.innerHTML=this.list.map(w=>`<button data-id="${w.id}">${w.icon} ${w.name}<small>${w.blurb}</small></button>`).join('');
  const show=id=>{
   const w=this.list.find(x=>x.id===id)||this.list[0];
   nav.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.id===w.id));
   main.innerHTML=`<div class="thead"><h2>${w.icon} ${w.name}</h2><span class="ref">📖 ${w.ref}</span></div><div class="lab" id="w-${w.id}"></div>`;
   try{w.mount(main.querySelector('.lab'))}catch(e){main.insertAdjacentHTML('beforeend',`<p class="bad">Widget error: ${e.message}</p>`);console.error(e)}
   if(location.hash.slice(1)!==w.id)try{history.replaceState(null,'','#'+w.id)}catch(e){}
  };
  nav.onclick=e=>{const b=e.target.closest('button[data-id]');if(b){show(b.dataset.id);window.scrollTo(0,0)}};
  window.onhashchange=()=>show(location.hash.slice(1));
  show(location.hash.slice(1));
 }};
