import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Auth from './components/Auth'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Blog />
        <Auth />
        <Contact />
      </main>
      <footer className="border-t border-black/5 py-10">
        <div className="max-w-6xl mx-auto px-6 text-sm text-slate-500 flex items-center justify-between">
          <div>© {new Date().getFullYear()} PastelPay</div>
          <div className="flex gap-4">
            <a href="#pricing">Pricing</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App