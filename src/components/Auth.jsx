import { useState } from 'react'

function Auth(){
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const endpoint = mode === 'login' ? '/api/auth/login' : '/api/auth/register'
      const body = mode === 'login' ? { email: form.email, password: form.password } : form
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      if(!res.ok) throw new Error('Invalid credentials')
      const data = await res.json()
      setUser(data)
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <section id="auth" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-800">Sign in</h2>
            <p className="mt-2 text-slate-600">Create an account or access your dashboard.</p>
            <div className="mt-6 rounded-2xl border border-black/5 p-6 bg-white">
              {user ? (
                <div className="text-slate-700">
                  <div className="font-medium">Welcome, {user.name}</div>
                  <div className="text-sm text-slate-600">{user.email}</div>
                </div>
              ) : (
                <>
                  <div className="flex gap-2 text-sm">
                    <button className={`px-3 py-1.5 rounded-lg border ${mode==='login' ? 'bg-slate-900 text-white' : 'bg-white text-slate-700'}`} onClick={()=>setMode('login')}>Login</button>
                    <button className={`px-3 py-1.5 rounded-lg border ${mode==='register' ? 'bg-slate-900 text-white' : 'bg-white text-slate-700'}`} onClick={()=>setMode('register')}>Register</button>
                  </div>
                  <form onSubmit={submit} className="space-y-4 mt-4">
                    {mode === 'register' && (
                      <div>
                        <label className="block text-sm text-slate-600 mb-1">Name</label>
                        <input className="w-full border border-black/10 rounded-xl px-3 py-2" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} required={mode==='register'} />
                      </div>
                    )}
                    <div>
                      <label className="block text-sm text-slate-600 mb-1">Email</label>
                      <input type="email" className="w-full border border-black/10 rounded-xl px-3 py-2" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} required />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-600 mb-1">Password</label>
                      <input type="password" className="w-full border border-black/10 rounded-xl px-3 py-2" value={form.password} onChange={e=>setForm({...form, password: e.target.value})} required />
                    </div>
                    {error && <div className="text-sm text-rose-600">{error}</div>}
                    <button className="px-4 py-2 rounded-xl bg-slate-900 text-white">{mode==='login' ? 'Sign in' : 'Create account'}</button>
                  </form>
                </>
              )}
            </div>
          </div>
          <div className="rounded-2xl border border-black/5 p-6 bg-gradient-to-br from-sky-50 to-emerald-50">
            <h3 className="font-medium text-slate-800">Why create an account?</h3>
            <ul className="mt-2 space-y-2 text-slate-600 text-sm">
              <li>• Sync across devices</li>
              <li>• Access premium features</li>
              <li>• Priority support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Auth