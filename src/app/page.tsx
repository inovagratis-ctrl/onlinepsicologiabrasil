import Link from 'next/link'
import { BookOpen, FileText, ArrowRight, Compass, CheckCircle2 } from 'lucide-react'
import Hero from '@/components/Hero'
import Sobre from '@/components/Sobre'
import Servicos from '@/components/Servicos'
import PrimeiraSessao from '@/components/PrimeiraSessao'
import ComoFunciona from '@/components/ComoFunciona'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import { CATEGORY_LIST } from '@/data/categories'
import { EDITORIAL_ARTICLES, PROFESSIONAL_CRP } from '@/data/articles'
import { OrganizationJsonLd } from '@/components/JsonLd'

export default function Home() {
  const featuredArticles = EDITORIAL_ARTICLES.slice(0, 6)

  return (
    <>
      <OrganizationJsonLd />
      <Hero />

      {/* Seção Educativa 1: Hubs de Especialidades em até 2 cliques */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary-600 flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                Guias Temáticos de Utilidade Pública
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">
                Explore por Tema de Saúde Mental e Neurodesenvolvimento
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1"
            >
              Acessar todos os artigos revisados <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORY_LIST.map((hub) => (
              <Link
                key={hub.slug}
                href={`/${hub.slug}`}
                className="group rounded-2xl border border-gray-200 bg-warm-50/50 hover:bg-white hover:border-primary-400 hover:shadow-md p-6 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                    Guia Completo
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-700 mt-3 mb-2 transition-colors">
                    {hub.shortTitle}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {hub.heroSubtitle}
                  </p>
                </div>
                <span className="text-xs font-semibold text-primary-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all pt-3 border-t border-gray-200/60">
                  Acessar guia e orientações <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Educativa 2: Artigos Fundamentais e Ferramentas Gratuitas */}
      <section className="py-16 bg-warm-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary-600 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                Leituras Práticas Revisadas ({PROFESSIONAL_CRP})
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">
                Artigos em Destaque para Pais, Educadores e Adultos
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1"
            >
              Ver todos os 10+ artigos fundamentais <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((art) => (
              <Link
                key={art.id}
                href={`/blog/${art.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-primary-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span className="font-semibold text-primary-700 bg-primary-50 px-2.5 py-0.5 rounded-full">
                      {art.category}
                    </span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg group-hover:text-primary-700 transition-colors mb-2 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-500">Revisado • {PROFESSIONAL_CRP}</span>
                  <span className="font-semibold text-primary-600 inline-flex items-center gap-1">
                    Ler guia <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Banner das 4 Ferramentas Gratuitas */}
          <div className="bg-white rounded-3xl border-2 border-accent-200 p-6 md:p-8 grid md:grid-cols-12 gap-6 items-center shadow-sm">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-700">
                <FileText className="w-4 h-4" />
                Utilidade Prática Gratuita
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Checklists e Quadros Imprimíveis para Usar em Casa e na Escola
              </h3>
              <div className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700 pt-1">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-600 flex-shrink-0" />
                  Checklist para preparar a primeira consulta
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-600 flex-shrink-0" />
                  Quadro semanal de rotina visual interativo
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-600 flex-shrink-0" />
                  Registro de situações que geram ansiedade
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-600 flex-shrink-0" />
                  Lista de perguntas para reunião escolar
                </span>
              </div>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <Link
                href="/materiais#ferramentas-interativas"
                className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors shadow-sm"
              >
                Acessar Ferramentas Gratuitas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Sobre />
      <Servicos />
      <PrimeiraSessao />
      <ComoFunciona />
      <FAQ />
      <CTA />
    </>
  )
}
