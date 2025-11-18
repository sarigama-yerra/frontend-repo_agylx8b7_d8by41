import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function AuthModal({ open, onClose, onAuth }) {
  const [mode, setMode] = useState('signin')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (!open) return null

  async function submit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const url = mode === 'signup' ? `${API}/auth/register` : `${API}/auth/login`
      const payload = mode === 'signup' ? { name: form.name, email: form.email, password: form.password } : { email: form.email, password: form.password }
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error(await res.text())
      const data = await res.json()
      onAuth(data)
      onClose()
    } catch (err) {
      setError('Invalid credentials or server error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">{mode === 'signup' ? 'Create account' : 'Welcome back'}</h3>
          <button onClick={onClose} className="px-2 py-1 rounded-lg text-slate-600 hover:bg-slate-100">Close</button>
        </div>

        <div className="mt-4 flex gap-2 rounded-lg bg-slate-100 p-1">
          <button onClick={()=>setMode('signin')} className={`flex-1 py-2 rounded-md text-sm font-medium ${mode==='signin' ? 'bg-white shadow ring-1 ring-slate-200' : 'text-slate-700'}`}>Sign in</button>
          <button onClick={()=>setMode('signup')} className={`flex-1 py-2 rounded-md text-sm font-medium ${mode==='signup' ? 'bg-white shadow ring-1 ring-slate-200' : 'text-slate-700'}`}>Sign up</button>
        </div>

        <form onSubmit={submit} className="mt-4 space-y-4">
          {mode==='signup' && (
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} className="mt-1 w-full rounded-xl border-slate-200 focus:border-sky-400 focus:ring-sky-400" placeholder="Your name" required />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} className="mt-1 w-full rounded-xl border-slate-200 focus:border-sky-400 focus:ring-sky-400" placeholder="you@domain.com" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input type="password" value={form.password} onChange={(e)=>setForm({...form, password: e.target.value})} className="mt-1 w-full rounded-xl border-slate-200 focus:border-sky-400 focus:ring-sky-400" placeholder="••••••••" required />
          </div>
          <button disabled={loading} className="w-full rounded-xl bg-sky-500 text-white px-4 py-3 font-medium hover:bg-sky-600 disabled:opacity-60">
            {loading ? 'Please wait…' : (mode==='signup' ? 'Create account' : 'Sign in')}
          </button>
          {error && <p className="text-rose-600 text-sm">{error}</p>}
        </form>
      </div>
    </div>
  )
}
