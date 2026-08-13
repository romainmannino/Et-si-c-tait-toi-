'use client'

import { useState } from 'react'

const questions = [
  {theme:'TRAVAIL',text:'Tu travailles 35 h par semaine. Quel minimum devrait arriver sur ton compte chaque mois ?',answers:['1 500 €','1 700 €','1 900 €','2 100 €+']},
  {theme:'RETRAITE',text:'Tu as travaillé toute ta vie. À quel âge devrait-on pouvoir arrêter ?',answers:['60 ans','62 ans','64 ans','66 ans']},
  {theme:'ÉCOLE',text:'Dans une classe de collège, combien d’élèves maximum te semble raisonnable ?',answers:['20','24','28','32']},
  {theme:'ARGENT',text:'La France reçoit 100 € mais en dépense 110 €. Tu fais quoi en premier ?',answers:['Dépenser moins','Trouver plus d’argent','Un peu des deux','Continuer ainsi']}
]

export default function Home(){
  const [started,setStarted]=useState(false)
  const [index,setIndex]=useState(0)
  const [choices,setChoices]=useState<string[]>([])
  const Logo=()=> <div className="logoMark"><div className="heads"><i/><i/></div><b>ET SI C’ÉTAIT <em>TOI ?</em></b><small>LA FRANCE. TES CHOIX.</small></div>

  if(!started)return <main className="landing"><div className="tricolor"/><Logo/><p className="kicker">LA FRANCE. TES CHOIX.</p><h1>Et si c’était <em>toi</em> ?</h1><p className="lead">Des situations simples. Tu décides. Tu vois ce que tes choix racontent.</p><button className="primary" onClick={()=>setStarted(true)}>Commencer →</button><small>Pas besoin de connaître la politique.</small></main>

  if(index>=questions.length)return <main className="landing result"><div className="tricolor"/><p className="kicker">TON PREMIER PROFIL</p><h1>Voilà tes choix.</h1><div className="summary">{questions.map((q,i)=><div key={q.theme}><span>{q.theme}</span><b>{choices[i]}</b></div>)}</div><button className="primary" onClick={()=>{setIndex(0);setChoices([])}}>Rejouer ↻</button></main>

  const q=questions[index]
  const arrows=['←','↑','→','↓']
  const answer=(value:string)=>{setChoices(c=>[...c,value]);setIndex(i=>i+1)}

  return <main className="game"><header><span>ET SI C’ÉTAIT TOI ?</span><b>{index+1}/{questions.length}</b></header><div className="bar"><i style={{width:`${(index/questions.length)*100}%`}}/></div><section className="card"><p className="kicker">{q.theme}</p><h2>{q.text}</h2><div className="answers">{q.answers.map((a,i)=><button key={a} onClick={()=>answer(a)}><strong>{arrows[i]}</strong>{a}</button>)}</div><p className="tip">Tape la direction de ton choix</p></section><footer><span>💰 Budget</span><span>👛 Ménages</span><span>🏪 Emploi</span></footer></main>
}
