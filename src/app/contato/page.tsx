'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Mail,
  Phone,
  Clock,
  Shield,
  AlertTriangle,
  CheckCircle2,
  MessageCircle,
  Send,
  PhoneCall,
} from 'lucide-react'
import { PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { trackEvent } from '@/lib/analytics'

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Dúvida sobre Atendimento Online',
    message: '',
    lgpdConsent: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Informe seu nome para podermos responder.'
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Informe um e-mail válido.'
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Escreva brevemente sua dúvida administrativa ou de agendamento.'
    }
    if (!formData.lgpdConsent) {
      newErrors.lgpdConsent = 'É necessário confirmar ciência sobre a Política de Privacidade e proteção de dados.'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    trackEvent('submit_contact_form', {
      location: 'contato_page',
      category: formData.subject,
    })

    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-warm-50">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', url: '/' },
          { name: 'Contato', url: '/contato' },
        ]}
      />

      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-secondary-800 text-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 bg-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-primary-50 mb-4">
            <Shield className="w-4 h-4" />
            Canal Oficial • {PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP})
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Entre em Contato e Tire suas Dúvidas
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl leading-relaxed">
            Utilize este canal para dúvidas sobre funcionamento das sessões, horários disponíveis, parcerias institucionais ou sugestões editoriais.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Aviso Crítico de Privacidade Clínica e Emergência */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div className="text-xs md:text-sm text-gray-700 leading-relaxed">
              <strong className="text-gray-900 block mb-1">
                Proteção de Dados Sensíveis (LGPD e Sigilo):
              </strong>
              Por segurança da sua privacidade, <strong>não envie laudos médicos, histórico clínico detalhado ou relatos íntimos sensíveis</strong> por este formulário ou por mensagem inicial. Essas informações são acolhidas exclusivamente durante a sessão segura.
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-5 flex items-start gap-3">
            <PhoneCall className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
            <div className="text-xs md:text-sm text-red-900 leading-relaxed">
              <strong className="block mb-1">
                Atenção — Situações de Crise ou Emergência:
              </strong>
              Este site não oferece plantão de emergência psicológica ou psiquiátrica. Em caso de crise aguda ou risco imediato à vida, ligue gratuitamente para o <strong>CVV (188 — 24h)</strong>, acione o <strong>SAMU (192)</strong> ou procure o pronto-socorro mais próximo.
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Informações de Contato */}
          <div className="md:col-span-5 bg-white rounded-2xl border border-gray-200 p-6 md:p-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Canais Diretos</h2>
              <p className="text-sm text-gray-600">
                Respondemos mensagens em horário comercial, por ordem de recebimento.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">WhatsApp / Telefone</p>
                  <a
                    href="https://wa.me/5568999035300?text=Ol%C3%A1!%20Gostaria%20de%20informacoes%20sobre%20horarios%20de%20atendimento."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('click_whatsapp', { location: 'contato_sidebar' })}
                    className="text-primary-600 hover:underline font-medium"
                  >
                    (68) 99903-5300
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">Apenas informações de agendamento e funcionamento</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">E-mail Profissional</p>
                  <a
                    href="mailto:psicologasocorinha@gmail.com"
                    className="text-primary-600 hover:underline"
                  >
                    psicologasocorinha@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Horário de Atendimento</p>
                  <p className="text-gray-600">Segunda a Sexta: 08h às 20h</p>
                  <p className="text-gray-600">Sábado: 08h às 12h</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-3">
                Prefere já escolher um horário na agenda?
              </p>
              <Link
                href="/agendamento"
                onClick={() => trackEvent('start_booking', { location: 'contato_sidebar' })}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-xl text-sm font-semibold transition-colors"
              >
                Ir para Agendamento Online
              </Link>
            </div>
          </div>

          {/* Formulário */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Mensagem Recebida com Sucesso!
                </h2>
                <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                  Obrigado pelo seu contato, <strong>{formData.name}</strong>. Para agilizar o retorno sobre horários disponíveis, você também pode confirmar sua mensagem diretamente no WhatsApp abaixo:
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <a
                    href={`https://wa.me/5568999035300?text=${encodeURIComponent(
                      `Olá! Meu nome é ${formData.name}. Enviei uma dúvida pelo site sobre: ${formData.subject}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('click_whatsapp', { location: 'contato_success' })}
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Continuar no WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'Dúvida sobre Atendimento Online',
                        message: '',
                        lgpdConsent: false,
                      })
                    }}
                    className="px-5 py-3 rounded-xl border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h2 className="text-xl font-bold text-gray-800">
                  Envie sua Dúvida (Sem Dados Clínicos Sensíveis)
                </h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Como prefere ser chamado(a)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-primary-500"
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Seu E-mail *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-primary-500"
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      WhatsApp / Telefone (Opcional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(00) 00000-0000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="Dúvida sobre Atendimento Online">Dúvida sobre Atendimento Online</option>
                    <option value="Orientação para Pais (TEA / TDAH)">Orientação para Pais (TEA / TDAH)</option>
                    <option value="Atendimento para Adultos (TDAH / Ansiedade)">Atendimento para Adultos (TDAH / Ansiedade)</option>
                    <option value="Dúvida sobre Materiais do Site">Dúvida sobre Materiais do Site</option>
                    <option value="Sugestão ou Correção Editorial">Sugestão ou Correção Editorial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sua Mensagem *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Informe sua disponibilidade de turnos ou sua dúvida geral sobre o funcionamento das sessões (evite relatar detalhes clínicos sensíveis neste campo)."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-primary-500"
                  />
                  {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                </div>

                <div>
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-gray-600">
                    <input
                      type="checkbox"
                      checked={formData.lgpdConsent}
                      onChange={(e) => setFormData({ ...formData, lgpdConsent: e.target.checked })}
                      className="mt-0.5 rounded text-primary-600"
                    />
                    <span>
                      Estou ciente de que este formulário destina-se apenas ao contato inicial administrativo, não substitui atendimento de emergência e concordo com a{' '}
                      <Link href="/politica-de-privacidade" className="text-primary-600 underline">
                        Política de Privacidade (LGPD)
                      </Link>
                      . *
                    </span>
                  </label>
                  {errors.lgpdConsent && (
                    <p className="text-xs text-red-600 mt-1">{errors.lgpdConsent}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white py-3.5 px-6 rounded-xl font-semibold text-sm transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensagem com Segurança
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
