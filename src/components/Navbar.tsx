'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/#sobre', label: 'Sobre' },
  { href: '/video-apresentacao', label: 'Vídeo' },
  { href: '/#servicos', label: 'Serviços' },
  { href: '/agendamento', label: 'Agendar' },
  { href: '/video', label: 'Videochamada' },
  { href: '/blog', label: 'Blog' },
  { href: '/materiais', label: 'Materiais' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo_completa_base.png" alt="Psicologia Direta" width={200} height={60} className="rounded-lg" unoptimized />
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
            <Link
              href="/formulario"
              className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 rounded-lg font-semibold transition-colors"
            >
              Avaliação Grátis
            </Link>
            <Link
              href="/agendamento"
              className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-lg font-semibold transition-colors"
            >
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
            <div className="flex gap-2 mx-4 mt-3">
              <Link
                href="/formulario"
                className="flex-1 bg-accent-500 hover:bg-accent-600 text-white text-center py-3 rounded-lg font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Avaliação Grátis
              </Link>
              <Link
                href="/agendamento"
                className="flex-1 bg-primary-500 hover:bg-primary-600 text-white text-center py-3 rounded-lg font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Agendar Sessão
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
