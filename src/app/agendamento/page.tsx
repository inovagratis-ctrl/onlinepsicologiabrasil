'use client'

import { useState } from 'react'
import { Calendar, Clock, User, Mail, Phone, MessageCircle, CheckCircle, CreditCard } from 'lucide-react'

const timeSlots = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
]

const sessionTypes = [
  { id: 'primeira', name: 'Primeira Sessão', duration: '60 min', price: 100, highlight: true },
  { id: 'sessao', name: 'Sessão Individual', duration: '50 min', price: 140, highlight: false },
  { id: 'orientacao', name: 'Orientação a Pais', duration: '50 min', price: 80, highlight: false },
]

export default function Agendamento() {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [selectedType, setSelectedType] = useState<string>('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    patientName: '',
    patientAge: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [appointmentId, setAppointmentId] = useState<string>('')
  const [showPayment, setShowPayment] = useState(false)

  const selectedSession = sessionTypes.find(t => t.id === selectedType)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
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
        alert('Erro ao agendar. Tente novamente.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Erro ao conectar com o servidor.')
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
        console.error('Payment error:', data)
        const errorMsg = data.details || data.error || 'Erro desconhecido'
        alert(`Erro ao criar pagamento: ${errorMsg}`)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Erro ao conectar com o servidor de pagamento.')
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
      if (date.getDay() !== 0) { // No Sundays
        dates.push(date.toISOString().split('T')[0])
      }
    }
    return dates
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <CheckCircle className="w-20 h-20 text-accent-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Agendamento Confirmado!</h1>
          <p className="text-gray-600 mb-6">
            Você receberá um e-mail de confirmação com todos os detalhes da sessão.
          </p>
          <div className="bg-white rounded-xl shadow-lg p-6 text-left">
            <h3 className="font-semibold text-gray-800 mb-4">Resumo do Agendamento:</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Tipo:</span> {selectedSession?.name}</p>
              <p><span className="font-medium">Data:</span> {new Date(selectedDate + 'T12:00:00').toLocaleDateString('pt-BR')}</p>
              <p><span className="font-medium">Horário:</span> {selectedTime}</p>
              <p><span className="font-medium">Paciente:</span> {formData.patientName || formData.name}</p>
              <p><span className="font-medium">Valor:</span> R$ {selectedSession?.price},00</p>
            </div>
          </div>
          <a
            href={`https://wa.me/5568999035300?text=${encodeURIComponent(`Olá! Agendei uma sessão para ${new Date(selectedDate + 'T12:00:00').toLocaleDateString('pt-BR')} às ${selectedTime}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Confirmar via WhatsApp
          </a>
        </div>
      </div>
    )
  }

  // Payment step
  if (showPayment) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <CreditCard className="w-16 h-16 text-primary-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Pagamento</h1>
              <p className="text-gray-600">Escolha como deseja pagar</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">Resumo do Pedido</h3>
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
                  <span>Total</span>
                  <span className="text-primary-600">R$ {selectedSession?.price},00</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={handlePayment}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <CreditCard className="w-5 h-5" />
                Pagar com PIX
              </button>
              
              <button
                onClick={skipPayment}
                className="w-full py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
              >
                Pagar Depois (combinar via WhatsApp)
              </button>
            </div>

            <p className="text-center text-xs text-gray-500 mt-6">
              Pagamento seguro via Mercado Pago
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Agende sua Sessão</h1>
          <p className="text-lg text-gray-600">
            Escolha o melhor horário e comece seu atendimento
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Session Type */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary-500" />
              Tipo de Sessão
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {sessionTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setSelectedType(type.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    selectedType === type.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <h3 className="font-semibold text-gray-800">{type.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{type.duration}</p>
                  <p className="text-lg font-bold text-primary-600 mt-2">R$ {type.price},00</p>
                </button>
              ))}
            </div>
          </div>

          {/* Date Selection */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary-500" />
              Escolha a Data
            </h2>
            <div className="grid grid-cols-7 gap-2">
              {getAvailableDates().map((date) => {
                const d = new Date(date + 'T12:00:00')
                const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
                return (
                  <button
                    key={date}
                    type="button"
                    onClick={() => setSelectedDate(date)}
                    className={`p-3 rounded-lg text-center transition-all ${
                      selectedDate === date
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <div className="text-xs">{dayNames[d.getDay()]}</div>
                    <div className="font-semibold">{d.getDate()}</div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Time Selection */}
          {selectedDate && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-500" />
                Escolha o Horário
              </h2>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-lg font-medium transition-all ${
                      selectedTime === time
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Patient Info */}
          {selectedDate && selectedTime && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-primary-500" />
                Dados do Paciente
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome do Paciente (se menor de idade)
                  </label>
                  <input
                    type="text"
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Idade do Paciente
                  </label>
                  <input
                    type="text"
                    value={formData.patientAge}
                    onChange={(e) => setFormData({ ...formData, patientAge: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Conte brevemente sobre o motivo da consulta..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Submit */}
          {selectedDate && selectedTime && selectedType && (
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary text-lg px-12 py-4 disabled:opacity-50"
              >
                {isSubmitting ? 'Agendando...' : 'Continuar para Pagamento'}
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Você será redirecionado para o pagamento
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
