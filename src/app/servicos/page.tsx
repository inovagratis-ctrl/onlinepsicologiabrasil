'use client'

import Link from 'next/link'
import {
  Shield,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  MessageCircle,
  ArrowRight,
  Lock,
  Video,
  PhoneCall,
} from 'lucide-react'
import { CATEGORY_LIST } from '@/data/categories'
import { PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { trackEvent } from '@/lib/analytics'

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-warm-50">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', url: '/' },
          { name: 'Serviços Psicológicos', url: '/servicos' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-secondary-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-primary-50 mb-4">
            <Shield className="w-4 h-4" />
            Atendimento Psicológico Ético • {PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP})
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-3xl leading-tight">
            Serviços Psicológicos Online e Orientação Especializada para Famílias
          </h1>
          <p className="text-lg text-primary-100 max-w-3xl leading-relaxed mb-8">
            Conheça em detalhes para quem é cada modalidade de acompanhamento, como funcionam as sessões por videochamada segura e quais são os limites éticos do atendimento psicológico online.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/agendamento"
              onClick={() => trackEvent('start_booking', { location: 'servicos_hero' })}
              className="inline-flex items-center gap-2 bg-white text-primary-800 px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-primary-50 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Agende uma Conversa
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-primary-600/60 border border-white/30 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-primary-600 transition-colors"
            >
              Tire suas Dúvidas
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {/* Princípios Éticos CFP */}
        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <Shield className="w-6 h-6 text-primary-600 mb-3" />
            <h2 className="font-bold text-gray-800 mb-2">Regulamentação CFP</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Atendimento conduzido pela {PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP}), em conformidade com o Código de Ética Profissional e a Resolução CFP nº 11/2018.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <Lock className="w-6 h-6 text-secondary-600 mb-3" />
            <h2 className="font-bold text-gray-800 mb-2">Sigilo e Proteção de Dados</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sessões individuais ou com responsáveis sem gravação e com proteção estrita de dados pessoais conforme a LGPD (Lei nº 13.709/2018).
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <Video className="w-6 h-6 text-accent-600 mb-3" />
            <h2 className="font-bold text-gray-800 mb-2">Sem Promessas Irreais</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Na Psicologia ética não existem promessas de cura rápida ou resultados padronizados. Cada plano terapêutico respeita a singularidade e o contexto do paciente.
            </p>
          </div>
        </section>

        {/* Detalhamento de Cada Serviço */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Modalidades de Atendimento e Orientação
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Veja para quem cada serviço é indicado, como funciona passo a passo e seus limites técnicos:
            </p>
          </div>

          {CATEGORY_LIST.map((hub) => (
            <div
              key={hub.slug}
              id={`servico-${hub.slug}`}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 scroll-mt-24"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold">
                  Área: {hub.name}
                </span>
                <Link
                  href={`/${hub.slug}`}
                  className="text-xs font-semibold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1"
                >
                  Acessar Guia Educativo de {hub.name} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                {hub.serviceTitle}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">{hub.serviceSummary}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="font-bold text-gray-800 text-sm mb-3">Para quem é este serviço:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {hub.serviceAudience.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="font-bold text-gray-800 text-sm mb-3">Como funciona:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {hub.serviceHowItWorks.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-800 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 mb-6 text-xs md:text-sm text-gray-700 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Limites do serviço:</strong> {hub.serviceLimits}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/agendamento"
                  onClick={() => trackEvent('start_booking', { location: `servicos_${hub.slug}` })}
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Agendar Primeira Conversa
                </Link>
                <a
                  href={`https://wa.me/5568999035300?text=${encodeURIComponent(`Olá! Gostaria de tirar uma dúvida sobre o serviço: ${hub.serviceTitle}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click_whatsapp', { location: `servicos_${hub.slug}` })}
                  className="inline-flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  Tirar Dúvidas no WhatsApp
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Aviso Importante de Emergência e Urgência */}
        <section className="bg-red-50 border border-red-200 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-3">
            <PhoneCall className="w-6 h-6 text-red-700 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-bold text-red-900 mb-2">
                Atenção: O Atendimento Online Não é Serviço de Emergência
              </h2>
              <p className="text-sm text-red-800 leading-relaxed mb-3">
                Conforme as diretrizes do Conselho Federal de Psicologia, o atendimento psicológico online ocorre com horário previamente agendado e não é indicado para situações de urgência médica, crise psiquiátrica aguda ou risco iminente à vida.
              </p>
              <p className="text-sm text-red-900 font-semibold">
                Em caso de crise emocional grave ou emergência: ligue gratuitamente para o <strong>CVV — Centro de Valorização da Vida no número 188</strong> (disponível 24 horas em todo o Brasil), acione o <strong>SAMU (192)</strong> ou dirija-se ao pronto-socorro ou CAPS mais próximo.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
