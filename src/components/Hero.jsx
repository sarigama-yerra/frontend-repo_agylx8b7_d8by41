import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full h-[78vh] min-h-[520px] overflow-hidden bg-gradient-to-b from-rose-50 via-sky-50 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/10 to-white pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-black/5 text-sm text-slate-600 mb-4">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Launch faster with a pastel, modern SaaS theme
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-800">
            Minimal fintech experience for modern teams
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Authentication, pricing, a simple blog, and a contact form — all in one clean template. Crafted with soft pastels and subtle depth.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#pricing" className="px-5 py-3 rounded-xl bg-sky-500 text-white shadow-sm hover:bg-sky-600 transition">View pricing</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white border border-black/10 text-slate-700 hover:bg-slate-50 transition">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;