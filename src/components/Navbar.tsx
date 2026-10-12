'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Calendar, BookOpen } from 'lucide-react'
import Image from 'next/image'
import { CATEGORY_LIST } from '@/data/categories'
import { PROFESSIONAL_CRP } from '@/data/articles'
import { trackEvent } from '@/lib/analytics'

const mainLinks = [
  { href: '/', label: 'Início' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/materiais', label: 'Materiais Gratuitos' },
  { href: '/blog', label: 'Blog' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hubsOpen, setHubsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      {/* Barra superior ética discreta */}
      <div className="bg-primary-900 text-primary-50 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <span>
            Psicóloga Maria do Socorro Araujo Teixeira • <strong>{PROFESSIONAL_CRP}</strong>
          </span>
          <div className="hidden sm:flex items-center gap-4 text-primary-200">
            <Link href="/metodologia-editorial" className="hover:text-white">
              Metodologia Editorial
            </Link>
            <span>•</span>
            <span>Emergência emocional: ligue 188 (CVV)</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo_completa_base.png"
              alt="Psicologia Direta"
              width={185}
              height={54}
              className="rounded-lg"
              unoptimized
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {/* Menu Dropdown de Guias / Especialidades em 1 clique */}
            <div
              className="relative"
              onMouseEnter={() => setHubsOpen(true)}
              onMouseLeave={() => setHubsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setHubsOpen(!hubsOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-primary-700 font-medium text-sm py-2 transition-colors"
              >
                <BookOpen className="w-4 h-4 text-primary-600" />
                <span>Guias e Especialidades</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {hubsOpen && (
                <div className="absolute left-0 top-full w-72 bg-white rounded-2xl shadow-xl border border-gray-200 p-2 z-50">
                  {CATEGORY_LIST.map((hub) => (
                    <Link
                      key={hub.slug}
                      href={`/${hub.slug}`}
                      onClick={() => setHubsOpen(false)}
                      className="block px-3.5 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-800 font-medium transition-colors"
                    >
                      {hub.shortTitle}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-700 font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/agendamento"
              onClick={() => trackEvent('start_booking', { location: 'navbar' })}
              className="inline-flex items-center gap-1.5 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              Agende uma Conversa
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu de navegação"
            className="lg:hidden p-2 text-gray-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-5 border-t border-gray-100 pt-3 space-y-2">
            <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-700">
              Guias por Especialidade
            </div>
            <div className="grid grid-cols-2 gap-1.5 px-2 pb-2">
              {CATEGORY_LIST.map((hub) => (
                <Link
                  key={hub.slug}
                  href={`/${hub.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="py-2 px-3 text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-primary-50 hover:text-primary-700 rounded-lg"
                >
                  {hub.name}
                </Link>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-2">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 px-3 text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-700 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex gap-2 px-2 pt-2">
              <Link
                href="/contato"
                className="flex-1 border border-gray-300 text-gray-800 text-center py-2.5 rounded-xl text-sm font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Tire suas Dúvidas
              </Link>
              <Link
                href="/agendamento"
                className="flex-1 bg-primary-600 text-white text-center py-2.5 rounded-xl text-sm font-semibold"
                onClick={() => {
                  trackEvent('start_booking', { location: 'navbar_mobile' })
                  setIsOpen(false)
                }}
              >
                Agende uma Conversa
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
