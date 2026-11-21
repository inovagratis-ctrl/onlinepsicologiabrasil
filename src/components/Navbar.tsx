'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronDown,
  Activity,
  Flame,
  FileSignature,
  Wrench,
  Menu,
  X,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Scale,
} from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [toolsDropdown, setToolsDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setToolsDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-[#F5F8F6]/95 backdrop-blur-md border-b border-slate-200/80">
      {/* Top Banner Suave de Apoio e Emergência */}
      <div className="bg-[#123F42] text-emerald-100 text-[11px] py-1 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#7BAE9B]" />
            <span>
              Psicologia Direta • Plataforma Digital de Triagem Psicoeducativa e Gestão Documental
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-300">Apoio emocional gratuito:</span>
            <a
              href="tel:188"
              className="inline-flex items-center gap-1 bg-[#0F5B5B] hover:bg-[#184e4e] text-white font-semibold px-2 py-0.5 rounded transition"
              title="Centro de Valorização da Vida"
            >
              <PhoneCall className="w-3 h-3" />
              Ligue 188 (CVV 24h)
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xs border border-slate-200/90 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-4">
          
          {/* Logo Oficial com Ícone + Tipografia + Subtítulo */}
          <Link href="/" className="flex items-center gap-3 sm:gap-3.5 group shrink-0">
            <div className="w-11 h-11 sm:w-12 sm:h-12 relative shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/logo-icon.png"
                alt="Psicologia Direta Logo"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            
            <div className="flex flex-col justify-center leading-none">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#0F5B5B] whitespace-nowrap">
                Psicologia Direta
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-slate-500 mt-1 whitespace-nowrap">
                Ferramentas &amp; Psicoeducação
              </span>
            </div>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-[#123F42]">
            <Link
              href="/"
              className="px-3.5 py-2 rounded-xl hover:text-[#0F5B5B] hover:bg-[#F5F8F6] transition"
            >
              Início
            </Link>

            {/* Dropdown de Ferramentas */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setToolsDropdown(!toolsDropdown)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition ${
                  toolsDropdown
                    ? 'text-[#0F5B5B] bg-[#F5F8F6] font-semibold'
                    : 'hover:text-[#0F5B5B] hover:bg-[#F5F8F6]'
                }`}
                aria-expanded={toolsDropdown}
              >
                <span>Ferramentas</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    toolsDropdown ? 'rotate-180 text-[#0F5B5B]' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Menu Dropdown Suspenso */}
              {toolsDropdown && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 space-y-1 animate-in fade-in zoom-in-95 duration-150 z-50">
                  <Link
                    href="/testes/ansiedade-gad7"
                    onClick={() => setToolsDropdown(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F5F8F6] transition group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-[#0F5B5B]">
                        Teste GAD-7 (Ansiedade)
                      </span>
                      <span className="text-[11px] text-slate-500 block leading-tight">
                        Rastreio de 7 itens com resumo de pontuação
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="/testes/burnout"
                    onClick={() => setToolsDropdown(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F5F8F6] transition group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-orange-700">
                        Termômetro de Burnout
                      </span>
                      <span className="text-[11px] text-slate-500 block leading-tight">
                        Autorreflexão nos 3 eixos da CID-11 (QD85)
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="/ferramentas/plano-autocuidado"
                    onClick={() => setToolsDropdown(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F5F8F6] transition group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Sparkles className="w-4 h-4 text-[#0F5B5B]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-[#0F5B5B]">
                        Plano de Autocuidado
                      </span>
                      <span className="text-[11px] text-slate-500 block leading-tight">
                        Roteiro pessoal com geração de PDF A4
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="/ferramentas/gerador-documentos"
                    onClick={() => setToolsDropdown(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F5F8F6] transition group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <FileSignature className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-teal-700">
                        Gerador de Documentos
                      </span>
                      <span className="text-[11px] text-slate-500 block leading-tight">
                        Modelos editáveis baseados na Res. CFP 06/2019
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="/ferramentas/checklist-documentos-cfp"
                    onClick={() => setToolsDropdown(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F5F8F6] transition group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Scale className="w-4 h-4 text-[#0F5B5B]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-[#0F5B5B]">
                        Checklist Ético CFP
                      </span>
                      <span className="text-[11px] text-slate-500 block leading-tight">
                        Conferência de normas da Res. CFP 06/2019
                      </span>
                    </div>
                  </Link>

                  <div className="pt-1 border-t border-slate-100">
                    <Link
                      href="/ferramentas"
                      onClick={() => setToolsDropdown(false)}
                      className="flex items-center gap-2 p-2 rounded-xl text-xs font-bold text-[#0F5B5B] hover:bg-[#F5F8F6] transition"
                    >
                      <Wrench className="w-3.5 h-3.5" />
                      <span>Ver todas as ferramentas gratuitas</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/ferramentas/gerador-documentos"
              className="px-3.5 py-2 rounded-xl hover:text-[#0F5B5B] hover:bg-[#F5F8F6] transition"
            >
              Para profissionais
            </Link>

            <Link
              href="/sobre"
              className="px-3.5 py-2 rounded-xl hover:text-[#0F5B5B] hover:bg-[#F5F8F6] transition"
            >
              Sobre
            </Link>
          </nav>

          {/* CTA Desktop em Destaque Oficial */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/ferramentas"
              className="inline-flex items-center justify-center bg-[#0F5B5B] hover:bg-[#123F42] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition shadow-sm hover:shadow"
            >
              Acessar ferramentas
            </Link>
          </div>

          {/* Botão Menu Mobile */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-xl bg-[#F5F8F6] border border-slate-200 text-[#0F5B5B] flex items-center justify-center hover:bg-slate-100 transition"
              aria-label="Abrir menu de navegação"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Recolhido / Expandido */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 space-y-3 shadow-lg">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center px-3 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-[#F5F8F6] hover:text-[#0F5B5B]"
          >
            Início
          </Link>

          <div className="space-y-1 pl-3 border-l-2 border-[#7BAE9B]/50 ml-2">
            <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block px-2 py-1">
              Ferramentas &amp; Rastreios
            </span>
            <Link
              href="/testes/ansiedade-gad7"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-2 py-2 text-sm text-slate-700 hover:text-[#0F5B5B]"
            >
              <Activity className="w-4 h-4 text-emerald-600" />
              Teste GAD-7 (Ansiedade)
            </Link>
            <Link
              href="/testes/burnout"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-2 py-2 text-sm text-slate-700 hover:text-[#0F5B5B]"
            >
              <Flame className="w-4 h-4 text-orange-600" />
              Termômetro de Burnout
            </Link>
            <Link
              href="/ferramentas/plano-autocuidado"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-2 py-2 text-sm text-slate-700 hover:text-[#0F5B5B]"
            >
              <Sparkles className="w-4 h-4 text-[#0F5B5B]" />
              Plano de Autocuidado (PDF)
            </Link>
            <Link
              href="/ferramentas/gerador-documentos"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-2 py-2 text-sm text-slate-700 hover:text-[#0F5B5B]"
            >
              <FileSignature className="w-4 h-4 text-teal-600" />
              Gerador de Documentos CFP
            </Link>
            <Link
              href="/ferramentas/checklist-documentos-cfp"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-2 py-2 text-sm text-slate-700 hover:text-[#0F5B5B]"
            >
              <Scale className="w-4 h-4 text-teal-600" />
              Checklist Ético CFP
            </Link>
          </div>

          <Link
            href="/ferramentas/gerador-documentos"
            onClick={() => setIsOpen(false)}
            className="flex items-center px-3 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-[#F5F8F6] hover:text-[#0F5B5B]"
          >
            Para profissionais
          </Link>

          <Link
            href="/sobre"
            onClick={() => setIsOpen(false)}
            className="flex items-center px-3 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-[#F5F8F6] hover:text-[#0F5B5B]"
          >
            Sobre
          </Link>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/ferramentas"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 bg-[#0F5B5B] hover:bg-[#123F42] text-white rounded-xl font-bold text-sm shadow"
            >
              Acessar ferramentas
            </Link>
            <a
              href="tel:188"
              className="w-full text-center py-2.5 border border-[#7BAE9B] text-[#0F5B5B] rounded-xl font-medium text-xs flex items-center justify-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Central de Apoio CVV: Ligue 188
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
