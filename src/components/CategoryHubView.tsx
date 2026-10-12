'use client'

import Link from 'next/link'
import {
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Shield,
  MessageCircle,
  Calendar,
  FileText,
  HelpCircle,
  Compass,
} from 'lucide-react'
import { CategoryHubData, CATEGORY_LIST } from '@/data/categories'
import { getArticlesByCategorySlug, PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'
import AffiliateBox from './AffiliateBox'
import { BreadcrumbJsonLd, FAQJsonLd } from './JsonLd'
import { trackEvent } from '@/lib/analytics'

export default function CategoryHubView({ hub }: { hub: CategoryHubData }) {
  const articles = getArticlesByCategorySlug(hub.slug)
  const otherHubs = CATEGORY_LIST.filter((c) => c.slug !== hub.slug)

  return (
    <div className="min-h-screen bg-warm-50">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', url: '/' },
          { name: hub.name, url: `/${hub.slug}` },
        ]}
      />
      <FAQJsonLd faqs={hub.faqs} />

      {/* Hero Editorial do Hub */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-secondary-800 text-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="text-xs text-primary-100 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:underline">
              Início
            </Link>
            <span>/</span>
            <span className="font-semibold text-white">{hub.name}</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3.5 py-1.5 rounded-full text-xs font-medium text-primary-50 mb-4">
            <Shield className="w-4 h-4" />
            Guia Especializado Revisado por {PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP})
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-4xl">
            {hub.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl leading-relaxed mb-8">
            {hub.heroSubtitle}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#artigos-categoria"
              className="inline-flex items-center gap-2 bg-white text-primary-800 px-5 py-3 rounded-xl font-semibold text-sm hover:bg-primary-50 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Ler Artigos Práticos ({articles.length})
            </a>
            <a
              href="#servico-especializado"
              className="inline-flex items-center gap-2 bg-primary-600/60 border border-white/30 text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-primary-600 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Como Funciona o Atendimento
            </a>
            <Link
              href="/materiais"
              className="inline-flex items-center gap-2 bg-accent-600 text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-accent-700 transition-colors"
            >
              <FileText className="w-4 h-4" />
              Ferramentas e Checklists Gratuitos
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-14">
        {/* Bloco 1: Visão Geral e O Que Observar */}
        <section className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Compreendendo {hub.shortTitle} sem Estigmas
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">{hub.description}</p>

            <h3 className="text-base font-bold text-gray-800 mb-3">
              Principais temas abordados neste guia:
            </h3>
            <ul className="space-y-2.5">
              {hub.keyTopics.map((topic, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5 bg-amber-50/70 rounded-2xl border border-amber-200 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-5 h-5 text-amber-700" />
              <h2 className="text-lg font-bold text-gray-800">
                Sinais que Merecem Observação Cuidadosa
              </h2>
            </div>
            <p className="text-xs text-gray-600 mb-4">
              Estes sinais não configuram diagnóstico automático, mas ajudam a organizar o que observar antes de conversar com um profissional:
            </p>
            <ul className="space-y-3">
              {hub.whenToObserve.map((signal, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700 bg-white/80 p-3 rounded-xl border border-amber-100">
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
            <h2 className="text-2xl font-bold text-gray-800">
              Estratégias Práticas para o Cotidiano
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Pequenos ajustes de comunicação e rotina que reduzem a sobrecarga emocional
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {hub.practicalTips.map((tip, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="w-9 h-9 rounded-xl bg-primary-50 text-primary-700 font-bold text-sm flex items-center justify-center mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bloco 3: Artigos Especializados da Categoria */}
        <section id="artigos-categoria" className="scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-600">
                Conteúdo Educativo Gratuito
              </span>
              <h2 className="text-2xl font-bold text-gray-800 mt-1">
                Artigos Aprofundados sobre {hub.name}
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1"
            >
              Ver todos os artigos do Blog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-primary-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-gray-500 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-primary-50 text-primary-700 font-semibold">
                      {article.category}
                    </span>
                    <span>Leitura: {article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-700 transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-500">
                    Revisado por {PROFESSIONAL_CRP}
                  </span>
                  <span className="font-semibold text-primary-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ler guia completo <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Bloco 4: Recursos de Apoio Éticos (Afiliados) */}
        <AffiliateBox
          topic={hub.slug}
          campaign={`hub_${hub.slug}`}
          title={`Livros e Materiais de Apoio sobre ${hub.name}`}
        />

        {/* Bloco 5: Serviço Clínico Relacionado (Separado claramente do conteúdo educativo) */}
        <section
          id="servico-especializado"
          className="scroll-mt-24 bg-white rounded-3xl border-2 border-primary-100 shadow-sm p-6 md:p-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold mb-4">
            <Shield className="w-4 h-4" />
            Atendimento Psicológico Profissional • {PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP})
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            {hub.serviceTitle}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
            {hub.serviceSummary}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-800 mb-3 text-base">Para quem é indicado:</h3>
              <ul className="space-y-2.5 text-sm text-gray-700">
                {hub.serviceAudience.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-800 mb-3 text-base">Como funciona na prática:</h3>
              <ul className="space-y-2.5 text-sm text-gray-700">
                {hub.serviceHowItWorks.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-800 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Limites éticos do serviço */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 mb-8 flex items-start gap-3 text-xs md:text-sm text-gray-700">
            <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-gray-900">Limites Éticos do Serviço:</strong> {hub.serviceLimits}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/agendamento"
              onClick={() => trackEvent('start_booking', { location: `hub_${hub.slug}` })}
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              Agende uma Conversa Inicial
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors"
            >
              Tire suas Dúvidas por Mensagem
            </Link>
            <a
              href="https://wa.me/5568999035300?text=Ol%C3%A1!%20Estava%20lendo%20o%20guia%20no%20site%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20atendimento."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_whatsapp', { location: `hub_${hub.slug}` })}
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold text-sm px-4 py-2"
            >
              <MessageCircle className="w-4 h-4" />
              Falar pelo WhatsApp (sem enviar dados sensíveis)
            </a>
          </div>
        </section>

        {/* Bloco 6: Perguntas Frequentes da Categoria */}
        <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-5 h-5 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              Perguntas Frequentes sobre {hub.name}
            </h2>
          </div>
          <div className="space-y-4">
            {hub.faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bloco 7: Navegação rápida para outros Hubs (Regra de 2 cliques) */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Explore Outros Guias Especializados do Portal
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-3">
            {otherHubs.map((other) => (
              <Link
                key={other.slug}
                href={`/${other.slug}`}
                className="bg-white rounded-xl p-4 border border-gray-200 hover:border-primary-400 hover:shadow-sm transition-all text-sm font-semibold text-gray-800 flex items-center justify-between"
              >
                <span>{other.name}</span>
                <ArrowRight className="w-4 h-4 text-primary-600 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
