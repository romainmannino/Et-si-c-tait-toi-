'use client'

import { useRef, useState } from 'react'

const questions=[
{theme:'TRAVAIL',text:'Tu travailles 35 h par semaine. Quel minimum devrait arriver sur ton compte chaque mois ?',answers:['1 500 €','1 700 €','1 900 €','2 100 €+']},
{theme:'RETRAITE',text:'Tu as travaillé toute ta vie. À quel âge devrait-on pouvoir arrêter ?',answers:['60 ans','62 ans','64 ans','66 ans']},
{theme:'ÉCOLE',text:'Dans une classe de collège, combien d’élèves maximum te semble raisonnable ?',answers:['20','24','28','32']},
{theme:'ARGENT',text:'La France reçoit 100 € mais en dépense 110 €. Tu fais quoi en premier ?',answers:['Dépenser moins','Trouver plus d’argent','Un peu des deux','Continuer ainsi']}
]

export default function Home(){
 const[started,setStarted]=useState(false),[index,setIndex]=useState(0),[choices,setChoices]=useState<string[]>([])
 const touch=useRef<{x:number,y:number}|null>(null)
 const Logo=()=> <div className="logoMark"><div className="heads"><i/><i/></div><b>ET SI C’ÉTAIT <em>TOI ?</em></b><small>LA FRANCE. TES CHOIX.</small></div>
 if(!started)return <main className="landing"><div className="tricolor"/><Logo/><p className="kicker">LA FRANCE. TES CHOIX.</p><h1>Et si c’était <em>toi</em> ?</h1><p className="lead">Des situations simples. Tu décides. Tu vois ce que tes choix racontent.</p><button className="primary" onClick={()=>setStarted(true)}>Commencer →</button><small>Pas besoin de connaître la politique.</small></main>
 if(index>=questions.length)return <main className="landing result"><div className="tricolor"/><p className="kicker">TON PREMIER PROFIL</p><h1>Voilà tes choix.</h1><div className="summary">{questions.map((q,i)=><div key={q.theme}><span>{q.theme}</span><b>{choices[i]}</b></div>)}</div><button className="primary" onClick={()=>{setIndex(0);setChoices([])}}>Rejouer ↻</button></main>
 const q=questions[index],arrows=['←','↑','→','↓']
 const answer=(i:number)=>{setChoices(c=>[...c,q.answers[i]]);setIndex(n=>n+1)}
 const end=(x:number,y:number)=>{if(!touch.current)return;const dx=x-touch.current.x,dy=y-touch.current.y;touch.current=null;if(Math.max(Math.abs(dx),Math.abs(dy))<45)return;if(Math.abs(dx)>Math.abs(dy))answer(dx<0?0:2);else answer(dy<0?1:3)}
 return <main className="game"><header><span>ET SI C’ÉTAIT TOI ?</span><b>{index+1}/{questions.length}</b></header><div className="bar"><i style={{width:`${(index/questions.length)*100}%`}}/></div><section className="card" onTouchStart={e=>touch.current={x:e.touches[0].clientX,y:e.touches[0].clientY}} onTouchEnd={e=>end(e.changedTouches[0].clientX,e.changedTouches[0].clientY)}><p className="kicker">{q.theme}</p><h2>{q.text}</h2><div className="answers">{q.answers.map((a,i)=><button key={a} onClick={()=>answer(i)}><strong>{arrows[i]}</strong>{a}</button>)}</div><p className="tip">Glisse la carte dans la direction de ton choix</p></section><footer><span>💰 Budget</span><span>👛 Ménages</span><span>🏪 Emploi</span></footer></main>
}
