'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheck,
  Calendar,
  MessageSquare,
  Lock,
  Heart,
  Video,
  Clock,
  ArrowRight,
  ExternalLink
} from 'lucide-react'
import { PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'
import { trackEvent } from '@/lib/analytics'

export default function ConsultationCallout() {
  const handleConsultationClick = () => {
    trackEvent('click_whatsapp', { source: 'home_consultation_callout' })
  }

  return (
    <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 lg:p-12 shadow-sm">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Coluna Visual: Foto Profissional da Psicóloga + Imagem do Ambiente Online */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-3xl border border-slate-200 p-5 text-center shadow-xs">
            <div className="relative w-36 h-36 mx-auto rounded-2xl overflow-hidden border-2 border-white shadow-md mb-3 bg-slate-100">
              <Image
                src="/psicologa-maria-do-socorro.png"
                alt={`${PROFESSIONAL_AUTHOR} - ${PROFESSIONAL_CRP}`}
                fill
                className="object-cover object-top"
                sizes="144px"
                priority
              />
            </div>

            <h3 className="text-base font-extrabold text-[#18313B]">
              {PROFESSIONAL_AUTHOR}
            </h3>
            <p className="text-[11px] font-bold text-[#236B78] bg-[#DCEFF2] px-3 py-0.5 rounded-full mt-1 inline-block">
              Psicóloga Clínica • Registro {PROFESSIONAL_CRP}
            </p>
            <span className="text-[11px] text-slate-500 mt-1 block">
              Psicoterapia para Adultos & Supervisão para Psicólogos
            </span>
          </div>

          {/* Imagem do ambiente de atendimento online */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100">
            <img
              src="/assets/psicologia-direta/12-imagem-atendimento-online.png"
              alt="Ambiente preparado para atendimento psicológico online com notebook, caderno e espaço reservado"
              className="w-full h-36 object-cover object-center"
              loading="lazy"
            />
            <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-xs rounded-lg px-2.5 py-1 text-[11px] text-slate-700 flex items-center justify-between">
              <span>Sessões em Ambiente Seguro e Sigiloso</span>
              <span className="font-bold text-[#236B78]">Videochamada</span>
            </div>
          </div>
        </div>

        {/* Proposta Ética de Atendimento */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCEFF2] border border-[#B9DCCF] text-[#236B78] text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-[#236B78]" />
            Psicoterapia para Adultos & Supervisão Clínica • CFP
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18313B] tracking-tight leading-tight">
            Precisa de psicoterapia especializada para adultos ou supervisão clínica?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Se você está enfrentando depressão, crises de ansiedade, síndrome do pânico, TOC, compulsão alimentar ou os impactos de relacionamentos narcisistas, oferecemos acompanhamento em TCC individual. Para psicólogos, disponibilizamos mentoria clínica e recursos estruturados.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-1">
            <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <Video className="w-4 h-4 text-[#236B78] shrink-0 mt-0.5" />
              <span>Sessões individuais de 50 minutos por videochamada criptografada.</span>
            </div>
            <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <Lock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Sigilo absoluto conforme o Código de Ética Profissional do Psicólogo.</span>
            </div>
            <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <Heart className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>Práticas baseadas em evidências (Terapia Cognitivo-Comportamental).</span>
            </div>
            <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>Horários flexíveis para atendimento de adultos em todo o Brasil e exterior.</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="https://wa.me/5568999035300?text=Ol%C3%A1%20Psic%C3%B3loga%20Maria%20do%20Socorro!%20Vim%20pelo%20portal%20Psicologia%20Direta%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20psicoterapia%20para%20adultos%20ou%20supervis%C3%A3o%20cl%C3%ADnica."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleConsultationClick}
              className="w-full sm:w-auto bg-[#236B78] hover:bg-[#18313B] text-white font-extrabold text-sm py-3.5 px-6 rounded-xl transition-all shadow-md shadow-[#236B78]/20 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
            >
              <MessageSquare className="w-4 h-4" />
              Solicitar Informações / Agendar Conversa
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <Link
              href="/contato"
              className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm py-3.5 px-5 rounded-xl transition-colors inline-flex items-center justify-center gap-1.5"
            >
              Enviar Mensagem pelo Formulário
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
            * Em caso de crise aguda com ideação suicida ou risco imediato, ligue gratuitamente para o <strong>CVV (188 — 24 horas)</strong> ou procure o pronto-atendimento médico mais próximo.
          </p>
        </div>
      </div>
    </section>
  )
}
