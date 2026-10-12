'use client'

import Link from 'next/link'
import { ArrowRight, MessageCircle, Shield, BookOpen, Calendar } from 'lucide-react'
import { PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'
import { trackEvent } from '@/lib/analytics'

export default function CTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary-700 to-secondary-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-1.5 rounded-full text-xs font-medium">
            <Shield className="w-4 h-4" />
            {PROFESSIONAL_AUTHOR} • {PROFESSIONAL_CRP}
          </span>
          <span className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-1.5 rounded-full text-xs font-medium">
            Sigilo Profissional e Conformidade LGPD
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Cuidado psicológico ético, acolhedor e baseado em evidências
        </h2>
        <p className="text-base sm:text-lg text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Explore nossos guias gratuitos sobre desenvolvimento infantil, TDAH, autismo e ansiedade, ou entre em contato para conhecer o funcionamento das sessões online.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-white text-primary-800 px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-primary-50 transition-colors shadow-md"
          >
            <BookOpen className="w-4 h-4" />
            Conheça os conteúdos
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-primary-600 border border-white/30 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-primary-500 transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            Tire suas dúvidas
          </Link>
          <Link
            href="/agendamento"
            onClick={() => trackEvent('start_booking', { location: 'footer_cta' })}
            className="inline-flex items-center gap-2 bg-accent-600 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-accent-700 transition-colors shadow-md"
          >
            <Calendar className="w-4 h-4" />
            Agende uma conversa
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
