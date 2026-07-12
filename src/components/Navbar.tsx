'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Brain } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/#sobre', label: 'Sobre' },
  { href: '/video-apresentacao', label: 'Vídeo' },
  { href: '/#servicos', label: 'Serviços' },
  { href: '/agendamento', label: 'Agendar' },
  { href: '/video', label: 'Videochamada' },
  { href: '/blog', label: 'Blog' },
  { href: '/materiais', label: 'Materiais' },
  { href: '/formulario', label: 'Avaliação' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-800">Psicologia Online Brasil</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/agendamento" className="btn-primary">
              Agendar Sessão
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 px-4 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/agendamento"
              className="block mx-4 mt-2 btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Agendar Sessão
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
