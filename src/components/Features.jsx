import React from 'react'
export default function Features(){
  const cards = [
    {icon:'🎯', title:'Expert Planning', text:'15+ years organizing educational tours.'},
    {icon:'🛡️', title:'Safety First', text:'Comprehensive safety and support.'},
    {icon:'📚', title:'Learning Focused', text:'Tours complement classroom learning.'},
    {icon:'💰', title:'Best Value', text:'Competitive pricing and group rates.'}
  ]
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((c,i)=>(<div key={i} className="bg-white p-5 rounded-2xl shadow text-center">
        <div className="text-3xl mb-2">{c.icon}</div>
        <h3 className="text-primary font-semibold">{c.title}</h3>
        <p className="text-sm text-gray-600">{c.text}</p>
      </div>))}
    </div>
  )
}
