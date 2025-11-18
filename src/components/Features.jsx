function Features(){
  const items = [
    { title: 'Secure authentication', desc: 'Email-based sign in with hashed passwords and token sessions.', color: 'from-sky-200 to-emerald-200' },
    { title: 'Transparent pricing', desc: 'Simple plans to get started and scale as you grow.', color: 'from-rose-200 to-amber-200' },
    { title: 'Built-in blog', desc: 'Share updates with a lightweight, searchable blog.', color: 'from-violet-200 to-sky-200' },
  ]
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-800">Everything you need</h2>
        <p className="mt-2 text-slate-600">Modern building blocks with a soft pastel aesthetic.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <div key={i} className="rounded-2xl border border-black/5 p-6 bg-gradient-to-br shadow-sm hover:shadow transition " style={{
            }}>
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${f.color} mb-4`} />
              <h3 className="font-medium text-slate-800">{f.title}</h3>
              <p className="text-slate-600 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features