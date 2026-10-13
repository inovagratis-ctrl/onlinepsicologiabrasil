'use client'

import { useState } from 'react'
import {
  Download,
  Mail,
  User,
  CheckCircle2,
  Sparkles,
  FileText,
  Calendar,
  Heart,
  School,
  Lock
} from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

export default function LeadMagnetSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !name) return

    setLoading(true)

    // Salva lead no storage local para controle
    try {
      const existing = JSON.parse(localStorage.getItem('pd_leads') || '[]')
      existing.push({ name, email, date: new Date().toISOString(), offer: 'kit-rotina-emocoes' })
      localStorage.setItem('pd_leads', JSON.stringify(existing))
    } catch (err) {
      console.warn('Storage save error:', err)
    }

    trackEvent('subscribe_newsletter', { email, name, offer: 'kit-rotina-emocoes' })

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 700)
  }

  return (
    <section className="bg-gradient-to-br from-[#236B78] via-[#1E5762] to-[#18313B] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-[#236B78]/40 relative overflow-hidden">
      {/* Detalhe de fundo decorativo */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-[#B9DCCF]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
        {/* Lado Esquerdo: Benefícios do Kit + Mockup Visual */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-[#DCEFF2] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Material Gratuito em PDF A4
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Baixe o Kit de Ferramentas TCC para Adultos e Prática Clínica
          </h2>

          <p className="text-sm sm:text-base text-[#DCEFF2] leading-relaxed max-w-xl">
            Tenha em mãos 4 recursos práticos prontos para imprimir e aplicar na sua autorregulação diária ou utilizar com seus pacientes em consultório:
          </p>

          {/* Imagem Mockup do Kit Gratuito */}
          <div className="pt-1 pb-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-lg max-w-md bg-white/5">
              <img
                src="/assets/psicologia-direta/09-mockup-kit-rotina.png"
                alt="Kit de ferramentas TCC com registro de pensamentos disfuncionais, termômetro emocional e cronograma de ativação comportamental"
                className="w-full h-44 sm:h-52 object-cover object-center"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-xs rounded-xl px-3 py-1 text-[11px] text-white flex items-center justify-between">
                <span>4 Ferramentas Clínicas Inclusas</span>
                <span className="text-[#B9DCCF] font-bold">100% Gratuito</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            <div className="bg-white/10 backdrop-blur-xs border border-white/15 p-3.5 rounded-2xl flex items-start gap-3">
              <Calendar className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs font-bold text-white block">Ativação Comportamental</strong>
                <span className="text-[11px] text-blue-200 leading-snug block">
                  Grade semanal de quebra de inércia e monitoramento de humor para depressão.
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs border border-white/15 p-3.5 rounded-2xl flex items-start gap-3">
              <Heart className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs font-bold text-white block">Termômetro de Ansiedade & Pânico</strong>
                <span className="text-[11px] text-blue-200 leading-snug block">
                  Mapeamento de 0 a 10 de sintomas físicos com técnicas de desativação rápida.
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs border border-white/15 p-3.5 rounded-2xl flex items-start gap-3">
              <FileText className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs font-bold text-white block">Registro de Pensamentos (RPD)</strong>
                <span className="text-[11px] text-blue-200 leading-snug block">
                  Modelo 5 colunas para identificar distorções cognitivas e pensamentos automáticos.
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs border border-white/15 p-3.5 rounded-2xl flex items-start gap-3">
              <Lock className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs font-bold text-white block">Checklist de Limites e Narcisismo</strong>
                <span className="text-[11px] text-blue-200 leading-snug block">
                  Guia prático para identificar manipulações e aplicar a técnica da Pedra Cinza.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito: Formulário ou Confirmação */}
        <div className="lg:col-span-5">
          <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
            {submitted ? (
              <div className="text-center space-y-4 py-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Kit Liberado com Sucesso!
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pronto, <strong>{name}</strong>! Seu kit completo de 10 páginas em PDF de alta resolução está pronto para download.
                </p>

                <div className="pt-2">
                  <a
                    href="/download?kit=rotina-emocoes"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm py-3.5 px-5 rounded-xl transition-all shadow-md shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    Baixar Kit Gratuito Agora (PDF)
                  </a>
                </div>

                <p className="text-[11px] text-slate-400">
                  Enviamos também um link de apoio para <strong>{email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 block">
                    Acesso Gratuito Imediato
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
                    Onde devemos enviar o seu kit?
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-blue-600" />
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Mariana Castro"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    Seu Melhor E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Ex: mariana@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-blue-600"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#236B78] hover:bg-[#18313B] text-white font-extrabold text-sm py-3.5 px-6 rounded-xl transition-all shadow-md shadow-[#236B78]/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <>Liberando Acesso...</>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        Quero Baixar o Kit em PDF Grátis
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                  <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Respeitamos sua privacidade (LGPD). Zero spam, cancele quando quiser.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
