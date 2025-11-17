import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600" />
            <span className="text-xl font-bold tracking-tight">Nimbus</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Sign in</a>
            <a href="#pricing" className="inline-flex items-center text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-lg">Start free</a>
          </div>

          <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-lg border border-gray-200">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#features" className="block px-2 py-2 rounded-lg hover:bg-gray-50">Features</a>
            <a href="#pricing" className="block px-2 py-2 rounded-lg hover:bg-gray-50">Pricing</a>
            <a href="#faq" className="block px-2 py-2 rounded-lg hover:bg-gray-50">FAQ</a>
            <div className="pt-2 flex gap-2">
              <a href="#" className="flex-1 text-center text-sm font-medium px-4 py-2 rounded-lg border">Sign in</a>
              <a href="#pricing" className="flex-1 text-center text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-lg">Start free</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
