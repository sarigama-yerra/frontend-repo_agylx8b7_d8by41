import { Menu } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-sky-500" />
          <span className="font-semibold text-slate-800">PastelPay</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#blog" className="hover:text-slate-900">Blog</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
          <a href="#auth" className="px-4 py-2 rounded-lg bg-slate-900 text-white">Sign in</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <Menu className="h-6 w-6 text-slate-700" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3 text-slate-700">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
            <a href="#auth" className="px-4 py-2 rounded-lg bg-slate-900 text-white w-max">Sign in</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar