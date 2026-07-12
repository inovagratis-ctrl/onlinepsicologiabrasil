'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, User, Phone, Mail, CheckCircle, XCircle, Filter, Video, MessageCircle } from 'lucide-react'

interface Appointment {
  id: string
  date: string
  time: string
  sessionType: string
  patientName: string
  patientEmail: string
  patientPhone: string
  patientAge: string | null
  notes: string | null
  status: string
  paymentStatus: string
  createdAt: string
}

export default function Admin() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')

  // Simple password protection (in production, use proper auth)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'socorrinha2026') {
      setIsAuthenticated(true)
      fetchAppointments()
    } else {
      alert('Senha incorreta!')
    }
  }

  const fetchAppointments = async () => {
    try {
      const response = await fetch('/api/agendamento')
      const data = await response.json()
      if (data.success) {
        setAppointments(data.appointments)
      }
    } catch (error) {
      console.error('Error fetching appointments:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch('/api/agendamento/' + id, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      fetchAppointments()
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const filteredAppointments = appointments.filter(apt => {
    if (filter === 'all') return true
    if (filter === 'pending') return apt.status === 'pending'
    if (filter === 'confirmed') return apt.status === 'confirmed'
    if (filter === 'cancelled') return apt.status === 'cancelled'
    return true
  })

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Painel Admin</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                placeholder="Digite a senha"
              />
            </div>
            <button type="submit" className="w-full btn-primary">
              Entrar
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Painel Admin</h1>
          <div className="flex items-center gap-4">
            <a href="/admin/blog" className="text-primary-600 hover:text-primary-700 font-medium">
              Blog
            </a>
            <a href="/admin/materials" className="text-primary-600 hover:text-primary-700 font-medium">
              Materiais
            </a>
            <a href="/admin/ads" className="text-primary-600 hover:text-primary-700 font-medium">
              Anúncios
            </a>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              Sair
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-primary-500 text-white' : 'bg-white text-gray-600'}`}
          >
            Todos ({appointments.length})
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded-lg ${filter === 'pending' ? 'bg-yellow-500 text-white' : 'bg-white text-gray-600'}`}
          >
            Pendentes ({appointments.filter(a => a.status === 'pending').length})
          </button>
          <button
            onClick={() => setFilter('confirmed')}
            className={`px-4 py-2 rounded-lg ${filter === 'confirmed' ? 'bg-green-500 text-white' : 'bg-white text-gray-600'}`}
          >
            Confirmados ({appointments.filter(a => a.status === 'confirmed').length})
          </button>
          <button
            onClick={() => setFilter('cancelled')}
            className={`px-4 py-2 rounded-lg ${filter === 'cancelled' ? 'bg-red-500 text-white' : 'bg-white text-gray-600'}`}
          >
            Cancelados ({appointments.filter(a => a.status === 'cancelled').length})
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow p-4">
            <p className="text-sm text-gray-500">Total</p>
            <p className="text-2xl font-bold text-gray-800">{appointments.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <p className="text-sm text-gray-500">Pendentes</p>
            <p className="text-2xl font-bold text-yellow-500">{appointments.filter(a => a.paymentStatus === 'pending').length}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <p className="text-sm text-gray-500">Pagos</p>
            <p className="text-2xl font-bold text-green-500">{appointments.filter(a => a.paymentStatus === 'paid').length}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <p className="text-sm text-gray-500">Receita</p>
            <p className="text-2xl font-bold text-primary-500">
              R$ {appointments.filter(a => a.paymentStatus === 'paid').reduce((acc, a) => {
                if (a.sessionType === 'Primeira Sessão') return acc + 100
                if (a.sessionType === 'Sessão Individual') return acc + 140
                if (a.sessionType === 'Orientação a Pais') return acc + 80
                return acc + 140
              }, 0)},00
            </p>
          </div>
        </div>

        {/* Appointments List */}
        {loading ? (
          <p className="text-center text-gray-500">Carregando...</p>
        ) : filteredAppointments.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Nenhum agendamento encontrado</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredAppointments.map((apt) => (
              <div key={apt.id} className="bg-white rounded-xl shadow p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        apt.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                        apt.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {apt.status === 'confirmed' ? 'Confirmado' :
                         apt.status === 'cancelled' ? 'Cancelado' : 'Pendente'}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        apt.paymentStatus === 'paid' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {apt.paymentStatus === 'paid' ? 'Pago' : 'Aguardando Pagamento'}
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {apt.patientName}
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-2 mt-2 text-sm text-gray-600">
                      <p className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(apt.date + 'T12:00:00').toLocaleDateString('pt-BR')}
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {apt.time}
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {apt.patientPhone}
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {apt.patientEmail}
                      </p>
                    </div>
                    
                    <p className="mt-2 text-sm text-gray-500">
                      Tipo: <span className="font-medium">{apt.sessionType}</span>
                      {apt.patientAge && ` | Idade: ${apt.patientAge}`}
                    </p>
                    
                    {apt.notes && (
                      <p className="mt-2 text-sm text-gray-500 italic">
                        Nota: {apt.notes}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex gap-2 flex-wrap">
                    {apt.status === 'confirmed' && (
                      <>
                        <a
                          href={`https://meet.jit.si/sessao-${apt.id.slice(-8)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 text-sm"
                        >
                          <Video className="w-4 h-4" />
                          Videochamada
                        </a>
                        <a
                          href={`https://wa.me/55${apt.patientPhone.replace(/\D/g, '')}?text=${encodeURIComponent(`Olá! Sua sessão é hoje às ${apt.time}. Clique no link para entrar: https://meet.jit.si/sessao-${apt.id.slice(-8)}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Enviar Link
                        </a>
                      </>
                    )}
                    {apt.status === 'pending' && (
                      <>
                        <button
                          onClick={() => updateStatus(apt.id, 'confirmed')}
                          className="flex items-center gap-1 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Confirmar
                        </button>
                        <button
                          onClick={() => updateStatus(apt.id, 'cancelled')}
                          className="flex items-center gap-1 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                        >
                          <XCircle className="w-4 h-4" />
                          Cancelar
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
