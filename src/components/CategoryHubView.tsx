'use client'

import Link from 'next/link'
import {
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Shield,
  FileText,
  HelpCircle,
  Compass,
  Sparkles,
} from 'lucide-react'
import { CategoryHubData, CATEGORY_LIST } from '@/data/categories'
import { getArticlesByCategorySlug, PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'
import AffiliateBox from './AffiliateBox'
import { BreadcrumbJsonLd, FAQJsonLd } from './JsonLd'

export default function CategoryHubView({ hub }: { hub: CategoryHubData }) {
  const articles = getArticlesByCategorySlug(hub.slug)
  const otherHubs = CATEGORY_LIST.filter((c) => c.slug !== hub.slug)

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', url: '/' },
          { name: hub.name, url: `/${hub.slug}` },
        ]}
      />
      <FAQJsonLd faqs={hub.faqs} />

      {/* Hero Editorial do Hub (100% Light Mode) */}
      <section className="bg-white border-b border-slate-200 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-blue-600">
              Início
            </Link>
            <span>/</span>
            <span className="font-semibold text-slate-900">{hub.name}</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-800 mb-4">
            <Shield className="w-4 h-4 text-blue-600" />
            Caderno Editorial Revisado por {PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP})
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center mb-8">
            <div className="lg:col-span-8">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#18313B] leading-tight mb-4">
                {hub.heroTitle}
              </h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                {hub.heroSubtitle}
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <img
                  src={
                    hub.slug === 'orientacao-parental'
                      ? '/assets/psicologia-direta/04-categoria-orientacao-parental.png'
                      : hub.slug === 'ansiedade' || hub.slug === 'saude-mental'
                      ? '/assets/psicologia-direta/06-categoria-emocoes-ansiedade.png'
                      : '/assets/psicologia-direta/05-categoria-neurodesenvolvimento.png'
                  }
                  alt={
                    hub.slug === 'orientacao-parental'
                      ? 'Adulto e criança organizando juntos um quadro visual de rotina e atividades'
                      : hub.slug === 'ansiedade' || hub.slug === 'saude-mental'
                      ? 'Cartões visuais de emoções e termômetro emocional sobre uma mesa de apoio'
                      : 'Cartões visuais, timer e materiais de leitura organizados para apoiar a aprendizagem e a rotina'
                  }
                  className="w-full h-48 sm:h-56 object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#artigos-categoria"
              className="inline-flex items-center gap-2 bg-[#236B78] text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-[#18313B] transition-colors shadow-xs"
            >
              <BookOpen className="w-4 h-4" />
              Ler Artigos Práticos ({articles.length})
            </a>
            <Link
              href="/materiais"
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 px-5 py-3 rounded-xl font-bold text-sm transition-colors shadow-xs"
            >
              <FileText className="w-4 h-4 text-[#236B78]" />
              E-books & Materiais Imprimíveis
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-14">
        {/* Bloco 1: Visão Geral e O Que Observar */}
        <section className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 bg-white rounded-2xl shadow-2xs border border-slate-200 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Compreendendo {hub.shortTitle} sem Estigmas
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">{hub.description}</p>

            <h3 className="text-base font-bold text-slate-900 mb-3">
              Principais temas abordados neste caderno:
            </h3>
            <ul className="space-y-2.5">
              {hub.keyTopics.map((topic, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5 bg-amber-50/70 rounded-2xl border border-amber-200 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-5 h-5 text-amber-700" />
              <h2 className="text-lg font-bold text-slate-900">
                Pontos de Observação no Cotidiano
              </h2>
            </div>
            <p className="text-xs text-slate-600 mb-4">
              Estes pontos ajudam pais, educadores e adultos a compreender padrões de comportamento no dia a dia:
            </p>
            <ul className="space-y-3">
              {hub.whenToObserve.map((signal, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 bg-white p-3 rounded-xl border border-amber-100">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bloco 2: Orientações Práticas Imediatas */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Estratégias Práticas para o Cotidiano
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Pequenos ajustes de comunicação e rotina que reduzem a sobrecarga emocional
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {hub.practicalTips.map((tip, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-2xs p-6">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 font-bold text-sm flex items-center justify-center mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{tip.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bloco 3: Artigos Especializados da Categoria */}
        <section id="artigos-categoria" className="scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Conteúdo Educativo Gratuito
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Artigos Aprofundados sobre {hub.name}
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
            >
              Ver todos os artigos do Portal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold">
                      {article.category}
                    </span>
                    <span>Leitura: {article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">
                    Revisado por {PROFESSIONAL_CRP}
                  </span>
                  <span className="font-bold text-blue-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ler guia completo <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Bloco 4: Recursos de Apoio Éticos (Afiliados / Livros) */}
        <AffiliateBox
          topic={hub.slug}
          campaign={`hub_${hub.slug}`}
          title={`Livros e Recursos Recomendados sobre ${hub.name}`}
        />

        {/* Bloco 5: E-books, Apostilas Digitais e Materiais Imprimíveis */}
        <section className="bg-white rounded-3xl border border-slate-200 shadow-2xs p-6 md:p-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold mb-4">
            <Sparkles className="w-4 h-4" />
            E-books, Apostilas Digitais e Materiais em PDF
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Materiais práticos e e-books para aplicar no dia a dia
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">
            Acesse nossos quadros de rotina visual, histórias sociais ilustradas, cartões de regulação emocional e checklists imprimíveis desenvolvidos para apoiar famílias e educadores.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/materiais"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-colors shadow-xs"
            >
              <FileText className="w-4 h-4" />
              Acessar E-books e Materiais em PDF
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-slate-50 border border-slate-300 hover:bg-slate-100 text-slate-800 px-6 py-3.5 rounded-xl font-bold text-sm transition-colors"
            >
              Explorar Todos os Artigos
            </Link>
          </div>
        </section>

        {/* Bloco 6: Perguntas Frequentes da Categoria */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              Perguntas Frequentes sobre {hub.name}
            </h2>
          </div>
          <div className="space-y-4">
            {hub.faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bloco 7: Navegação rápida para outros Hubs */}
        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Explore Outros Cadernos Temáticos do Portal
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-3">
            {otherHubs.map((other) => (
              <Link
                key={other.slug}
                href={`/${other.slug}`}
                className="bg-white rounded-xl p-4 border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all text-sm font-semibold text-slate-800 flex items-center justify-between"
              >
                <span>{other.name}</span>
                <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
