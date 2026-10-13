'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Shield, MessageSquare, ChevronDown, BookOpen, Sparkles, FileText, Heart } from 'lucide-react'
import { PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'

const THEME_DROPDOWN_ITEMS = [
  { href: '/depressao', label: 'Depressão no Adulto', desc: 'Ativação comportamental e humor' },
  { href: '/ansiedade', label: 'Ansiedade & Preocupação', desc: 'Regulação fisiológica e TCC' },
  { href: '/panico', label: 'Síndrome do Pânico', desc: 'Manejo de crises e agorafobia' },
  { href: '/compulsao-alimentar', label: 'Compulsão Alimentar', desc: 'Comer emocional e ciclo da culpa' },
  { href: '/toc', label: 'TOC (Obsessões & Rituais)', desc: 'Prevenção de resposta (EPR)' },
  { href: '/relacionamentos-narcisismo', label: 'Narcisismo & Vínculos Tóxicos', desc: 'Gaslighting e resgate da autonomia' },
  { href: '/tdah-adulto', label: 'TDAH em Adultos', desc: 'Organização, foco e procrastinação' },
  { href: '/materiais-psicologos', label: 'Recursos para Psicólogos', desc: 'Protocolos clínicos, RPDs e ferramentas' },
]

const MAIN_NAV_ITEMS = [
  { href: '/blog', label: 'Artigos' },
  { href: '/materiais', label: 'E-books & Ferramentas' },
  { href: '/materiais-psicologos', label: 'Área do Psicólogo' },
  { href: '/sobre', label: 'Sobre a Psicóloga' },
  { href: '/contato', label: 'Psicoterapia para Adultos' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [themesOpen, setThemesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setThemesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="bg-slate-50 border-b border-slate-200 text-slate-700 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 font-medium">
            <Shield className="w-3.5 h-3.5 text-[#236B78]" />
            Portal Editorial e E-books • Revisão Técnica: {PROFESSIONAL_AUTHOR} (<strong>{PROFESSIONAL_CRP}</strong>)
          </span>
          <div className="hidden sm:flex items-center gap-4 text-slate-600 text-xs">
            <Link href="/metodologia-editorial" className="hover:text-[#236B78] font-medium">
              Metodologia Editorial
            </Link>
            <span>•</span>
            <Link href="/materiais" className="hover:text-[#236B78] font-medium">
              E-books & Materiais em PDF
            </Link>
            <span>•</span>
            <Link href="/contato" className="hover:text-[#236B78] font-semibold text-[#236B78]">
              Atendimento Online ({PROFESSIONAL_CRP})
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          <Link href="/" className="flex items-center gap-3 shrink-0 py-1.5 group">
            <img
              src="/assets/psicologia-direta/01-logo-horizontal.png"
              alt="Psicologia Direta — Artigos, Guias e Recursos para Saúde Mental e Neurodesenvolvimento"
              className="h-14 sm:h-18 md:h-20 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              width="360"
              height="72"
            />
          </Link>

          {/* Navegação Desktop com Tipografia Aumentada e Legível */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2" aria-label="Navegação Principal">
            {/* Dropdown de Temas */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setThemesOpen(!themesOpen)}
                className={`inline-flex items-center gap-1.5 font-bold text-sm xl:text-[15px] px-3.5 py-2.5 rounded-xl transition-all cursor-pointer ${
                  themesOpen
                    ? 'text-[#236B78] bg-[#DCEFF2]/60'
                    : 'text-slate-700 hover:text-[#236B78] hover:bg-slate-50'
                }`}
                aria-expanded={themesOpen}
              >
                <span>Temas & Guias</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${themesOpen ? 'rotate-180 text-[#236B78]' : 'text-slate-400'}`} />
              </button>

              {themesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5">
                    Áreas de Especialidade
                  </div>
                  <div className="space-y-1">
                    {THEME_DROPDOWN_ITEMS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setThemesOpen(false)}
                        className="block p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="font-bold text-sm text-slate-900 group-hover:text-[#236B78] transition-colors">
                          {item.label}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {item.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Links Principais com Fonte Maior */}
            {MAIN_NAV_ITEMS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-[#236B78] hover:bg-slate-50 font-bold text-sm xl:text-[15px] px-3.5 py-2.5 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Botão de Destaque para Atendimento Online */}
            <a
              href="https://wa.me/5568999035300?text=Ol%C3%A1%20Psic%C3%B3loga%20Maria%20do%20Socorro!%20Vim%20pelo%20portal%20Psicologia%20Direta%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20psicol%C3%B3gico%20online."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 bg-[#236B78] hover:bg-[#18313B] text-white px-5 py-3 rounded-xl font-extrabold text-sm transition-all shadow-md shadow-[#236B78]/20 cursor-pointer hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4" />
              Atendimento Online
            </a>
          </nav>

          {/* Botão Mobile */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu de navegação"
            className="lg:hidden p-2.5 text-slate-700 hover:bg-slate-100 rounded-xl cursor-pointer"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Menu Mobile Expandido e Agradável */}
        {isOpen && (
          <div className="lg:hidden pb-6 border-t border-slate-100 pt-4 space-y-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#236B78] mb-2 px-1">
                Temas & Cadernos
              </div>
              <div className="grid grid-cols-2 gap-2">
                {THEME_DROPDOWN_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="py-2.5 px-3.5 text-xs font-bold text-slate-800 bg-slate-50 hover:bg-[#DCEFF2] hover:text-[#236B78] rounded-xl border border-slate-200/80 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
                Navegação
              </div>
              <div className="grid grid-cols-2 gap-2">
                {MAIN_NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="py-2.5 px-3.5 text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/5568999035300?text=Ol%C3%A1%20Psic%C3%B3loga%20Maria%20do%20Socorro!%20Vim%20pelo%20portal%20Psicologia%20Direta%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20psicol%C3%B3gico%20online."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#236B78] hover:bg-[#18313B] text-white py-3.5 px-4 rounded-xl font-extrabold text-sm transition-all shadow-md shadow-[#236B78]/20"
              >
                <MessageSquare className="w-4 h-4" />
                Falar com a Psicóloga no WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
