import { useEffect, useState } from 'react'

function Blog(){
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/blog`)
        const data = await res.json()
        setPosts(data)
      } catch (e) {
        setPosts([])
      }
    }
    run()
  }, [])
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-800">Latest posts</h2>
            <p className="mt-2 text-slate-600">Quick updates and product notes.</p>
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.length === 0 && (
            <div className="col-span-full text-slate-500">No posts yet. Add some documents to the "post" collection to see them here.</div>
          )}
          {posts.map((p, i) => (
            <article key={i} className="rounded-2xl border border-black/5 overflow-hidden bg-white hover:shadow-sm transition">
              {p.cover_image && (
                <img src={p.cover_image} alt="" className="h-40 w-full object-cover" />
              )}
              <div className="p-6">
                <div className="text-sm text-slate-500">{new Date(p.created_at || Date.now()).toLocaleDateString()}</div>
                <h3 className="mt-1 font-medium text-slate-800">{p.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog