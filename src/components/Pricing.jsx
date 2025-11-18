import { useEffect, useState } from 'react'

function Pricing(){
  const [plans, setPlans] = useState([])
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/pricing`)
        const data = await res.json()
        setPlans(data.plans || [])
      } catch (e) {
        setPlans([])
      }
    }
    fetchPlans()
  }, [])

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-800">Simple pricing</h2>
        <p className="mt-2 text-slate-600">Start free, upgrade when you need more.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className={`rounded-2xl border border-black/5 p-6 bg-white shadow-sm ${p.highlight ? 'ring-2 ring-sky-300' : ''}`}>
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-medium text-slate-800">{p.name}</h3>
              </div>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-semibold text-slate-900">{p.price === 0 ? 'Free' : `$${p.price}`}</span>
                {p.price !== 0 && <span className="text-slate-500">/{p.period}</span>}
              </div>
              <ul className="mt-4 space-y-2 text-slate-600">
                {p.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>
              <button className={`mt-6 w-full px-4 py-2 rounded-xl ${p.highlight ? 'bg-sky-600 text-white' : 'bg-slate-900 text-white'}`}>{p.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing