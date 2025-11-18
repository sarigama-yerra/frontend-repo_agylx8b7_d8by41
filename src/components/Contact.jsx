import { useState } from 'react'

function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if(!res.ok) throw new Error('Failed')
      setStatus('Thanks! We\'ll be in touch shortly.')
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-800">Let\'s talk</h2>
            <p className="mt-2 text-slate-600">Questions about features, pricing, or something else? Send us a note.</p>
            <div className="mt-6 rounded-2xl border border-black/5 p-6 bg-white">
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Name</label>
                  <input className="w-full border border-black/10 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-sky-300" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} required />
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Email</label>
                  <input type="email" className="w-full border border-black/10 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-sky-300" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} required />
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Message</label>
                  <textarea rows="4" className="w-full border border-black/10 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-sky-300" value={form.message} onChange={e=>setForm({...form, message: e.target.value})} required />
                </div>
                <button className="px-4 py-2 rounded-xl bg-slate-900 text-white">Send message</button>
                {status && <div className="text-sm text-slate-600 mt-2">{status}</div>}
              </form>
            </div>
          </div>
          <div className="rounded-2xl border border-black/5 p-6 bg-white">
            <h3 className="font-medium text-slate-800">We usually reply within one business day.</h3>
            <p className="mt-2 text-slate-600 text-sm">Your message will be saved securely. We\'ll reach out by email.</p>
            <ul className="mt-4 space-y-2 text-slate-600 text-sm">
              <li>• Email support included on paid plans</li>
              <li>• Priority support on Scale</li>
              <li>• Status page and incident updates</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact