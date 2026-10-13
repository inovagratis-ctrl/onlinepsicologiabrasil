'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Mail,
  Shield,
  CheckCircle2,
  Send,
  BookOpen,
  FileText,
} from 'lucide-react'
import { PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { trackEvent } from '@/lib/analytics'

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Sugestão de Tema / Artigo',
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
      newErrors.message = 'Escreva sua mensagem ou sugestão editorial.'
    }
    if (!formData.lgpdConsent) {
      newErrors.lgpdConsent = 'É necessário confirmar ciência sobre a Política de Privacidade.'
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
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', url: '/' },
          { name: 'Contato Editorial', url: '/contato' },
        ]}
      />

      <section className="bg-white border-b border-slate-200 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-800 mb-4">
            <Shield className="w-4 h-4 text-blue-600" />
            Canal Editorial • {PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP})
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Contato Editorial, E-books e Parcerias
          </h1>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed">
            Utilize este canal para enviar sugestões de novos temas para artigos, tirar dúvidas sobre nossos e-books e materiais em PDF ou propor parcerias editoriais.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Informações Editoriais e Banner de Atendimento */}
          <div className="md:col-span-5 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-5">
            {/* Banner Oficial de Atendimento */}
            <div className="w-full bg-slate-100 border-b border-slate-200">
              <img
                src="/assets/psicologia-direta/11-banner-atendimento.png"
                alt="Ambiente preparado para atendimento psicológico online com notebook, caderno e espaço reservado"
                className="w-full h-auto object-cover object-center"
                loading="lazy"
              />
            </div>

            <div className="p-6 md:p-8 pt-0 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Atendimento e Contato</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Respondemos dúvidas sobre acesso a e-books, apostilas digitais, sugestões de pautas e agendamento de psicoterapia online.
                </p>
              </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">E-mail Editorial</p>
                  <a
                    href="mailto:psicologasocorinha@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    psicologasocorinha@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Psicoterapia Online para Adultos & Orientação Parental</p>
                  <p className="text-xs text-slate-600 mb-1">
                    Psicóloga Maria do Socorro ({PROFESSIONAL_CRP})
                  </p>
                  <a
                    href="https://wa.me/5568999035300?text=Ol%C3%A1%20Psic%C3%B3loga%20Maria%20do%20Socorro!%20Vim%20pelo%20portal%20Psicologia%20Direta%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20psicoterapia%20para%20adultos%20e%20orienta%C3%A7%C3%A3o%20parental."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-600 hover:underline inline-flex items-center gap-1"
                  >
                    Solicitar informações via WhatsApp →
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Acesso Rápido
              </p>
              <Link
                href="/materiais"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#236B78] hover:bg-[#18313B] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-colors"
              >
                <FileText className="w-4 h-4" />
                Ver E-books e Materiais em PDF
              </Link>
              <Link
                href="/blog"
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 py-2.5 px-4 rounded-xl text-xs font-bold transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Explorar Artigos e Guias
              </Link>
            </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-2xs">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Mensagem Recebida com Sucesso!
                </h2>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Obrigado pela sua mensagem, <strong>{formData.name}</strong>. Nossa equipe editorial responderá no e-mail informado.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        subject: 'Sugestão de Tema / Artigo',
                        message: '',
                        lgpdConsent: false,
                      })
                    }}
                    className="px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h2 className="text-xl font-bold text-slate-900">
                  Fale com a Equipe Editorial
                </h2>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Seu E-mail *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Assunto
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Informações sobre Atendimento Psicológico Online">Informações sobre Atendimento Psicológico Online</option>
                    <option value="Sugestão de Tema / Artigo">Sugestão de Tema / Artigo</option>
                    <option value="Dúvida sobre E-books e Apostilas em PDF">Dúvida sobre E-books e Apostilas em PDF</option>
                    <option value="Dúvida sobre Materiais Gratuitos">Dúvida sobre Materiais Gratuitos</option>
                    <option value="Parcerias Editoriais e Lançamentos">Parcerias Editoriais e Lançamentos</option>
                    <option value="Correção ou Revisão Editorial">Correção ou Revisão Editorial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Sua Mensagem *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escreva sua sugestão de pauta, dúvida sobre nossos e-books ou proposta de parceria..."
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                </div>

                <div>
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
                    <input
                      type="checkbox"
                      checked={formData.lgpdConsent}
                      onChange={(e) => setFormData({ ...formData, lgpdConsent: e.target.checked })}
                      className="mt-0.5 rounded text-blue-600"
                    />
                    <span>
                      Concordo com o processamento dos meus dados para retorno deste contato conforme a{' '}
                      <Link href="/politica-de-privacidade" className="text-blue-600 underline">
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
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3.5 px-6 rounded-xl font-bold text-sm transition-colors shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
