'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Shield, Lock, Video, BookOpen, MessageCircle, Calendar, FileText, ArrowRight } from 'lucide-react'
import { PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'
import { trackEvent } from '@/lib/analytics'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-warm-50 to-secondary-50 py-16 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            {/* Identificação ética e regulamentar */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white rounded-full text-xs font-semibold text-primary-800 shadow-sm border border-primary-100">
                <Shield className="w-4 h-4 text-primary-600" />
                {PROFESSIONAL_AUTHOR} • {PROFESSIONAL_CRP}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white rounded-full text-xs font-semibold text-secondary-800 shadow-sm border border-secondary-100">
                <Lock className="w-4 h-4 text-secondary-600" />
                Ética CFP e Proteção LGPD
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white rounded-full text-xs font-semibold text-accent-800 shadow-sm border border-accent-100">
                <Video className="w-4 h-4 text-accent-600" />
                Atendimento Psicológico Online
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Informação confiável em{' '}
              <span className="text-primary-700">saúde mental e neurodesenvolvimento</span>{' '}
              e cuidado psicológico ético para famílias e adultos
            </h1>

            <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed">
              Um portal de utilidade prática sobre <strong>Autismo (TEA), TDAH, Dislexia, Ansiedade e Orientação Parental</strong>, aliado ao acompanhamento psicológico online conduzido pela {PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP}).
            </p>

            {/* Os 3 botões éticos obrigatórios */}
            <div className="flex flex-wrap gap-3.5 mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors shadow-sm"
              >
                <BookOpen className="w-4 h-4" />
                Conheça os conteúdos
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-300 px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-primary-600" />
                Tire suas dúvidas
              </Link>
              <Link
                href="/agendamento"
                onClick={() => trackEvent('start_booking', { location: 'home_hero' })}
                className="inline-flex items-center gap-2 bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                Agende uma conversa
              </Link>
            </div>

            {/* Nota de separação entre educação e psicoterapia */}
            <div className="mt-8 p-4 rounded-xl bg-white/90 border border-gray-200 text-xs text-gray-600 leading-relaxed">
              <strong className="text-gray-800">Compromisso com a transparência:</strong> Os artigos e ferramentas gratuitas deste portal têm finalidade educativa e de apoio à rotina familiar. O acompanhamento psicológico individualizado ocorre em ambiente clínico sigiloso mediante agendamento.
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-5">
                <Image
                  src="/icone_base.png"
                  alt="Psicologia Direta"
                  width={64}
                  height={64}
                  className="rounded-2xl"
                />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-600">
                    Acesso Rápido em 1 Clique
                  </span>
                  <h2 className="text-xl font-bold text-gray-800">
                    Como podemos ajudar hoje?
                  </h2>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  href="/materiais#ferramentas-interativas"
                  className="block p-4 rounded-2xl bg-accent-50/70 hover:bg-accent-100/70 border border-accent-200 transition-colors"
                >
                  <div className="flex items-center justify-between font-bold text-gray-800 text-sm mb-1">
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-accent-700" />
                      Ferramentas e Checklists Gratuitos
                    </span>
                    <ArrowRight className="w-4 h-4 text-accent-700" />
                  </div>
                  <p className="text-xs text-gray-600">
                    Quadro de rotina visual, checklist para primeira consulta, registro de ansiedade e roteiro para reunião escolar.
                  </p>
                </Link>

                <Link
                  href="/blog"
                  className="block p-4 rounded-2xl bg-primary-50/70 hover:bg-primary-100/70 border border-primary-200 transition-colors"
                >
                  <div className="flex items-center justify-between font-bold text-gray-800 text-sm mb-1">
                    <span className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary-700" />
                      10 Guias Fundamentais Revisados
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary-700" />
                  </div>
                  <p className="text-xs text-gray-600">
                    Orientações passo a passo sobre TDAH na infância e vida adulta, crises de ansiedade, dislexia e combinados familiares.
                  </p>
                </Link>

                <Link
                  href="/servicos"
                  className="block p-4 rounded-2xl bg-secondary-50/70 hover:bg-secondary-100/70 border border-secondary-200 transition-colors"
                >
                  <div className="flex items-center justify-between font-bold text-gray-800 text-sm mb-1">
                    <span className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-secondary-700" />
                      Atendimento Psicológico e Orientação Parental
                    </span>
                    <ArrowRight className="w-4 h-4 text-secondary-700" />
                  </div>
                  <p className="text-xs text-gray-600">
                    Veja para quem é indicado, como funcionam as sessões por videochamada segura e os limites éticos do atendimento.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
