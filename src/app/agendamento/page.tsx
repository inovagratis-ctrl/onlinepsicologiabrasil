'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Calendar,
  Clock,
  User,
  MessageCircle,
  CheckCircle,
  CreditCard,
  Shield,
  AlertTriangle,
} from 'lucide-react'
import { PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'
import { trackEvent } from '@/lib/analytics'

const timeSlots = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
]

const sessionTypes = [
  {
    id: 'primeira',
    name: 'Primeira Sessão (Acolhimento e Avaliação Inicial)',
    duration: '50 a 60 min',
    price: 100,
    description: 'Para adultos ou entrevista inicial exclusivamente com os pais/responsáveis.',
  },
  {
    id: 'sessao',
    name: 'Sessão de Psicoterapia Individual (TCC)',
    duration: '50 min',
    price: 140,
    description: 'Acompanhamento psicológico individualizado por videochamada segura.',
  },
  {
    id: 'orientacao',
    name: 'Orientação Parental (TEA, TDAH e Rotina Familiar)',
    duration: '50 min',
    price: 80,
    description: 'Sessão focada em estratégias práticas para pais, cuidadores e relação com a escola.',
  },
]

export default function Agendamento() {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [selectedType, setSelectedType] = useState<string>('primeira')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    patientName: '',
    patientAge: '',
    message: '',
    consent: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [appointmentId, setAppointmentId] = useState<string>('')
  const [showPayment, setShowPayment] = useState(false)

  const selectedSession = sessionTypes.find((t) => t.id === selectedType)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.consent) {
      alert('Por favor, confirme ciência sobre os termos éticos e de privacidade antes de prosseguir.')
      return
    }
    setIsSubmitting(true)

    trackEvent('start_booking', {
      location: 'agendamento_form_submit',
      category: selectedSession?.id || 'sessao',
    })

    try {
      const response = await fetch('/api/agendamento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: selectedDate,
          time: selectedTime,
          sessionType: selectedSession?.name || selectedType,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          patientName: formData.patientName || formData.name,
          patientAge: formData.patientAge,
          notes: formData.message,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setAppointmentId(data.appointmentId)
        setShowPayment(true)
      } else {
        // Caso o banco esteja indisponível localmente, permite confirmar diretamente via WhatsApp
        setIsSubmitted(true)
      }
    } catch {
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePayment = async () => {
    try {
      const response = await fetch('/api/pagamento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          appointmentId,
          amount: selectedSession?.price,
          title: selectedSession?.name,
          description: `Sessão: ${selectedSession?.name}`,
          email: formData.email,
        }),
      })

      const data = await response.json()

      if (data.success && data.initPoint) {
        window.location.href = data.initPoint
      } else {
        setIsSubmitted(true)
      }
    } catch {
      setIsSubmitted(true)
    }
  }

  const skipPayment = () => {
    setIsSubmitted(true)
  }

  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      if (date.getDay() !== 0) {
        dates.push(date.toISOString().split('T')[0])
      }
    }
    return dates
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-warm-50 py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <CheckCircle className="w-20 h-20 text-accent-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Solicitação de Agendamento Registrada!
          </h1>
          <p className="text-gray-600 mb-6">
            Confira o resumo abaixo e envie a confirmação pelo WhatsApp para receber o link seguro da sua sessão.
          </p>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 text-left">
            <h3 className="font-semibold text-gray-800 mb-4">Resumo do Agendamento:</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <span className="font-medium">Profissional:</span> {PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP})
              </p>
              <p>
                <span className="font-medium">Modalidade:</span> {selectedSession?.name}
              </p>
              <p>
                <span className="font-medium">Data:</span>{' '}
                {new Date(selectedDate + 'T12:00:00').toLocaleDateString('pt-BR')}
              </p>
              <p>
                <span className="font-medium">Horário:</span> {selectedTime}
              </p>
              <p>
                <span className="font-medium">Responsável / Paciente:</span>{' '}
                {formData.patientName || formData.name}
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/5568999035300?text=${encodeURIComponent(
              `Olá! Solicitei o agendamento de "${selectedSession?.name}" para o dia ${new Date(
                selectedDate + 'T12:00:00'
              ).toLocaleDateString('pt-BR')} às ${selectedTime}. Meu nome é ${formData.name}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click_whatsapp', { location: 'agendamento_confirmacao' })}
            className="mt-6 inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Confirmar Horário via WhatsApp
          </a>
        </div>
      </div>
    )
  }

  if (showPayment) {
    return (
      <div className="min-h-screen bg-warm-50 py-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <div className="text-center mb-8">
              <CreditCard className="w-14 h-14 text-primary-600 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Finalizar Agendamento</h1>
              <p className="text-gray-600 text-sm">
                Você pode concluir o pagamento agora ou combinar diretamente na confirmação via WhatsApp.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">Resumo da Sessão</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{selectedSession?.name}</span>
                  <span>R$ {selectedSession?.price},00</span>
                </div>
                <div className="flex justify-between">
                  <span>Data</span>
                  <span>{new Date(selectedDate + 'T12:00:00').toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Horário</span>
                  <span>{selectedTime}</span>
                </div>
                <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                  <span>Valor da Sessão</span>
                  <span className="text-primary-700">R$ {selectedSession?.price},00</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={handlePayment}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <CreditCard className="w-5 h-5" />
                Pagar Online via Mercado Pago / PIX
              </button>

              <button
                type="button"
                onClick={skipPayment}
                className="w-full py-3 border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Confirmar Primeiro pelo WhatsApp e Pagar Depois
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-warm-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold mb-3">
            <Shield className="w-4 h-4" />
            Atendimento Online Sigiloso • {PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP})
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Agende uma Conversa Inicial ou Sessão
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Escolha a modalidade de atendimento, selecione sua preferência de data e horário e preencha apenas seus dados básicos de contato.
          </p>
        </div>

        {/* Aviso Ético de Privacidade e Emergência */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 flex items-start gap-3 text-xs md:text-sm text-gray-700">
          <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-gray-900">Importante (LGPD e Ética CFP):</strong> Não envie relatórios clínicos extensos ou dados sensíveis no campo de observações antes da sessão. Este agendamento não substitui pronto-socorro médico ou psiquiátrico (em crise aguda, ligue <strong>188 — CVV</strong> ou <strong>192 — SAMU</strong>).
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* 1. Modalidade */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary-600" />
              1. Selecione a Modalidade de Atendimento
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {sessionTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setSelectedType(type.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-all flex flex-col justify-between ${
                    selectedType === type.id
                      ? 'border-primary-600 bg-primary-50/70'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">{type.name}</h3>
                    <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">{type.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200/70 flex items-center justify-between">
                    <span className="text-xs text-gray-500">{type.duration}</span>
                    <span className="text-base font-bold text-primary-700">R$ {type.price},00</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Data */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary-600" />
              2. Escolha a Data Preferencial
            </h2>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {getAvailableDates().map((date) => {
                const d = new Date(date + 'T12:00:00')
                const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
                const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
                return (
                  <button
                    key={date}
                    type="button"
                    onClick={() => setSelectedDate(date)}
                    className={`p-3 rounded-xl text-center transition-all border ${
                      selectedDate === date
                        ? 'bg-primary-600 text-white border-primary-600'
                        : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-800'
                    }`}
                  >
                    <div className="text-xs opacity-80">{dayNames[d.getDay()]}</div>
                    <div className="font-bold text-base">{d.getDate()}</div>
                    <div className="text-[11px] opacity-80">{months[d.getMonth()]}</div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 3. Horário */}
          {selectedDate && (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-600" />
                3. Escolha o Horário (Horário de Brasília)
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-xl font-semibold text-sm transition-all border ${
                      selectedTime === time
                        ? 'bg-primary-600 text-white border-primary-600'
                        : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 4. Dados de Contato */}
          {selectedDate && selectedTime && (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <User className="w-5 h-5 text-primary-600" />
                4. Seus Dados de Contato para Confirmação
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Seu E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Faixa Etária (ex.: Criança 7 anos / Adulto)
                  </label>
                  <input
                    type="text"
                    value={formData.patientAge}
                    onChange={(e) => setFormData({ ...formData, patientAge: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Observação Breve Administrativa (Opcional — não insira dados clínicos sensíveis)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={2}
                    placeholder="Ex.: Preferência por atendimento para orientação parental / primeira conversa."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-gray-600 pt-2">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 rounded text-primary-600"
                />
                <span>
                  Declaro estar ciente dos{' '}
                  <Link href="/termos-de-uso" className="text-primary-600 underline">
                    Termos de Uso
                  </Link>{' '}
                  e da{' '}
                  <Link href="/politica-de-privacidade" className="text-primary-600 underline">
                    Política de Privacidade (LGPD)
                  </Link>
                  , compreendendo que o atendimento online segue a Resolução CFP nº 11/2018 e não substitui pronto-socorro de emergência. *
                </span>
              </label>
            </div>
          )}

          {selectedDate && selectedTime && selectedType && (
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary text-base px-10 py-4 rounded-xl disabled:opacity-50"
              >
                {isSubmitting ? 'Registrando solicitação...' : 'Confirmar Solicitação de Agendamento'}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
