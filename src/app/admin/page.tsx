'use client'

import { useState, useEffect } from 'react'
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle,
  XCircle,
  Video,
  MessageCircle,
  Trash2,
  Link2,
  ShieldAlert,
  BarChart3,
  Save,
  RotateCcw,
} from 'lucide-react'
import {
  AffiliateProduct,
  getAffiliateProducts,
  saveAffiliateProducts,
  INITIAL_AFFILIATE_PRODUCTS,
} from '@/data/affiliates'
import {
  SiteGovernanceConfig,
  getGovernanceConfig,
  saveGovernanceConfig,
  DEFAULT_GOVERNANCE_CONFIG,
  FORBIDDEN_ADSENSE_ROUTES,
} from '@/data/adConfig'

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
  const [activeTab, setActiveTab] = useState<'appointments' | 'affiliates' | 'governance'>('appointments')
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')

  // Estado da tabela de parceiros afiliados
  const [affiliates, setAffiliates] = useState<AffiliateProduct[]>(INITIAL_AFFILIATE_PRODUCTS)
  const [affSavedMsg, setAffSavedMsg] = useState('')

  // Estado de governança AdSense + noindex
  const [govConfig, setGovConfig] = useState<SiteGovernanceConfig>(DEFAULT_GOVERNANCE_CONFIG)
  const [govSavedMsg, setGovSavedMsg] = useState('')
  const [analyticsCounts, setAnalyticsCounts] = useState<Record<string, number>>({})

  useEffect(() => {
    const saved = localStorage.getItem('admin_auth')
    if (saved === 'socorrinha2026') {
      setIsAuthenticated(true)
      fetchAppointments()
    }
    setAffiliates(getAffiliateProducts())
    setGovConfig(getGovernanceConfig())
    try {
      const rawStats = localStorage.getItem('pd_analytics_counts')
      if (rawStats) setAnalyticsCounts(JSON.parse(rawStats))
    } catch {
      // ignore
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'socorrinha2026') {
      localStorage.setItem('admin_auth', password)
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

  const deleteAppointment = async (id: string) => {
    if (!confirm('Excluir este agendamento permanentemente?')) return
    try {
      await fetch('/api/agendamento/' + id, { method: 'DELETE' })
      fetchAppointments()
    } catch (error) {
      console.error('Error deleting appointment:', error)
    }
  }

  const handleSaveAffiliates = () => {
    saveAffiliateProducts(affiliates)
    setAffSavedMsg('Tabela de afiliados atualizada com sucesso!')
    setTimeout(() => setAffSavedMsg(''), 3000)
  }

  const handleResetAffiliates = () => {
    setAffiliates(INITIAL_AFFILIATE_PRODUCTS)
    saveAffiliateProducts(INITIAL_AFFILIATE_PRODUCTS)
    setAffSavedMsg('Tabela restaurada para os produtos éticos padrão.')
    setTimeout(() => setAffSavedMsg(''), 3000)
  }

  const handleSaveGovernance = () => {
    saveGovernanceConfig(govConfig)
    setGovSavedMsg('Configurações de AdSense e Indexação salvas!')
    setTimeout(() => setGovSavedMsg(''), 3000)
  }

  const filteredAppointments = appointments.filter((apt) => {
    if (filter === 'all') return true
    return apt.status === filter
  })

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md border border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">Painel de Governança</h1>
          <p className="text-xs text-gray-500 text-center mb-6">
            Área restrita administrativa (noindex)
          </p>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Senha de Acesso</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500"
                placeholder="Digite a senha"
              />
            </div>
            <button type="submit" className="w-full btn-primary">
              Entrar no Painel
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Painel Administrativo e Governança Editorial
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Gerencie agendamentos, links centralizados de afiliados, regras de AdSense e indexação
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a href="/admin/blog" className="px-3.5 py-2 rounded-xl bg-primary-50 text-primary-700 font-semibold hover:bg-primary-100">
              Editor de Blog
            </a>
            <a href="/admin/materials" className="px-3.5 py-2 rounded-xl bg-primary-50 text-primary-700 font-semibold hover:bg-primary-100">
              Materiais PDF
            </a>
            <a href="/admin/ads" className="px-3.5 py-2 rounded-xl bg-primary-50 text-primary-700 font-semibold hover:bg-primary-100">
              Slots de Anúncios
            </a>
            <button
              type="button"
              onClick={() => {
                localStorage.removeItem('admin_auth')
                setIsAuthenticated(false)
              }}
              className="px-3.5 py-2 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              Sair
            </button>
          </div>
        </div>

        {/* Abas principais do Admin */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('appointments')}
            className={`px-5 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-colors ${
              activeTab === 'appointments'
                ? 'bg-primary-700 text-white shadow-sm'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            <Calendar className="w-4 h-4" />
            Agendamentos ({appointments.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('affiliates')}
            className={`px-5 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-colors ${
              activeTab === 'affiliates'
                ? 'bg-primary-700 text-white shadow-sm'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            <Link2 className="w-4 h-4" />
            Tabela Central de Afiliados ({affiliates.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('governance')}
            className={`px-5 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-colors ${
              activeTab === 'governance'
                ? 'bg-primary-700 text-white shadow-sm'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            Controle de AdSense, Noindex e Conversões
          </button>
        </div>

        {/* ABA 1: AGENDAMENTOS */}
        {activeTab === 'appointments' && (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-xl text-sm font-medium ${
                  filter === 'all' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 border'
                }`}
              >
                Todos ({appointments.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter('pending')}
                className={`px-4 py-2 rounded-xl text-sm font-medium ${
                  filter === 'pending' ? 'bg-yellow-500 text-white' : 'bg-white text-gray-600 border'
                }`}
              >
                Pendentes ({appointments.filter((a) => a.status === 'pending').length})
              </button>
              <button
                type="button"
                onClick={() => setFilter('confirmed')}
                className={`px-4 py-2 rounded-xl text-sm font-medium ${
                  filter === 'confirmed' ? 'bg-green-600 text-white' : 'bg-white text-gray-600 border'
                }`}
              >
                Confirmados ({appointments.filter((a) => a.status === 'confirmed').length})
              </button>
            </div>

            {loading ? (
              <p className="text-center text-gray-500 py-8">Carregando agendamentos...</p>
            ) : filteredAppointments.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
                <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 text-sm">Nenhum agendamento encontrado neste filtro.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredAppointments.map((apt) => (
                  <div key={apt.id} className="bg-white rounded-2xl border border-gray-200 p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              apt.status === 'confirmed'
                                ? 'bg-green-100 text-green-700'
                                : apt.status === 'cancelled'
                                ? 'bg-red-100 text-red-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}
                          >
                            {apt.status === 'confirmed'
                              ? 'Confirmado'
                              : apt.status === 'cancelled'
                              ? 'Cancelado'
                              : 'Pendente'}
                          </span>
                          <span className="text-xs text-gray-500 font-medium">{apt.sessionType}</span>
                        </div>

                        <h3 className="font-bold text-gray-800 flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {apt.patientName}
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-2 mt-2 text-sm text-gray-600">
                          <p className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(apt.date + 'T12:00:00').toLocaleDateString('pt-BR')} às {apt.time}
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
                      </div>

                      <div className="flex gap-2 flex-wrap">
                        {apt.status === 'confirmed' && (
                          <>
                            <a
                              href={`https://meet.jit.si/sessao-${apt.id.slice(-8)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 px-3 py-2 bg-primary-600 text-white rounded-lg text-xs font-semibold"
                            >
                              <Video className="w-4 h-4" />
                              Sala de Vídeo
                            </a>
                            <a
                              href={`https://wa.me/55${apt.patientPhone.replace(/\D/g, '')}?text=${encodeURIComponent(
                                `Olá! Sua sessão é hoje às ${apt.time}. Link seguro: https://meet.jit.si/sessao-${apt.id.slice(-8)}`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white rounded-lg text-xs font-semibold"
                            >
                              <MessageCircle className="w-4 h-4" />
                              Enviar Link
                            </a>
                          </>
                        )}
                        {apt.status === 'pending' && (
                          <>
                            <button
                              type="button"
                              onClick={() => updateStatus(apt.id, 'confirmed')}
                              className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white rounded-lg text-xs font-semibold"
                            >
                              <CheckCircle className="w-4 h-4" />
                              Confirmar
                            </button>
                            <button
                              type="button"
                              onClick={() => updateStatus(apt.id, 'cancelled')}
                              className="flex items-center gap-1 px-3 py-2 bg-red-600 text-white rounded-lg text-xs font-semibold"
                            >
                              <XCircle className="w-4 h-4" />
                              Cancelar
                            </button>
                          </>
                        )}
                        <button
                          type="button"
                          onClick={() => deleteAppointment(apt.id)}
                          className="flex items-center gap-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold"
                        >
                          <Trash2 className="w-4 h-4" />
                          Excluir
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ABA 2: TABELA CENTRALIZADA DE PARCEIROS AFILIADOS */}
        {activeTab === 'affiliates' && (
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Gerenciador Central de Parceiros e Links de Afiliados
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Substitua URLs de afiliados, atualize a data de verificação ou desative recomendações sem precisar editar artigo por artigo.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleResetAffiliates}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Restaurar Padrão
                </button>
                <button
                  type="button"
                  onClick={handleSaveAffiliates}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold"
                >
                  <Save className="w-3.5 h-3.5" />
                  Salvar Alterações
                </button>
              </div>
            </div>

            {affSavedMsg && (
              <div className="p-3 rounded-xl bg-accent-50 border border-accent-200 text-accent-800 text-xs font-semibold">
                {affSavedMsg}
              </div>
            )}

            <div className="space-y-4">
              {affiliates.map((item, idx) => (
                <div key={item.id} className="p-4 rounded-xl border border-gray-200 bg-gray-50/60 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono bg-gray-200 text-gray-700 px-2 py-0.5 rounded">
                        ID: {item.id}
                      </span>
                      <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-2.5 py-0.5 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <label className="flex items-center gap-2 text-xs font-semibold text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={item.active}
                        onChange={(e) => {
                          const copy = [...affiliates]
                          copy[idx] = { ...copy[idx], active: e.target.checked }
                          setAffiliates(copy)
                        }}
                        className="rounded text-primary-600"
                      />
                      <span>Exibir nos Artigos</span>
                    </label>
                  </div>

                  <div className="grid md:grid-cols-12 gap-3">
                    <div className="md:col-span-4">
                      <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                        Título do Produto Ético
                      </label>
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => {
                          const copy = [...affiliates]
                          copy[idx] = { ...copy[idx], title: e.target.value }
                          setAffiliates(copy)
                        }}
                        className="w-full px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                        URL de Afiliado Centralizada (rel=&quot;sponsored nofollow&quot; + UTM automático)
                      </label>
                      <input
                        type="url"
                        value={item.affiliateUrl}
                        onChange={(e) => {
                          const copy = [...affiliates]
                          copy[idx] = { ...copy[idx], affiliateUrl: e.target.value }
                          setAffiliates(copy)
                        }}
                        className="w-full px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg font-mono"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                        Última Verificação do Link
                      </label>
                      <input
                        type="date"
                        value={item.lastVerified}
                        onChange={(e) => {
                          const copy = [...affiliates]
                          copy[idx] = { ...copy[idx], lastVerified: e.target.value }
                          setAffiliates(copy)
                        }}
                        className="w-full px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ABA 3: GOVERNANÇA DE ADSENSE, NOINDEX E CONVERSÕES */}
        {activeTab === 'governance' && (
          <div className="space-y-6">
            {/* Resumo de Eventos de Conversão Éticos */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5 text-primary-600" />
                <h2 className="text-lg font-bold text-gray-800">
                  Métricas de Conversão Registradas (Agregadas e Sem Dados Sensíveis)
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { key: 'click_whatsapp', label: 'Cliques WhatsApp' },
                  { key: 'start_booking', label: 'Início Agendamento' },
                  { key: 'submit_contact_form', label: 'Envios Contato' },
                  { key: 'download_material', label: 'Uso/Impressão Materiais' },
                  { key: 'subscribe_newsletter', label: 'Inscrições E-mail' },
                  { key: 'click_affiliate', label: 'Cliques Afiliados' },
                ].map((ev) => (
                  <div key={ev.key} className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                    <p className="text-xs text-gray-500">{ev.label}</p>
                    <p className="text-2xl font-bold text-primary-700 mt-1">
                      {analyticsCounts[ev.key] || 0}
                    </p>
                    <p className="text-[10px] font-mono text-gray-400 mt-0.5">{ev.key}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Controle de AdSense e Noindex */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Controle de Exibição do Google AdSense e Indexação (noindex)
                  </h2>
                  <p className="text-xs text-gray-500 mt-1">
                    Ative ou desative anúncios por página ou categoria editorial.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleSaveGovernance}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold"
                >
                  <Save className="w-4 h-4" />
                  Salvar Regras de Governança
                </button>
              </div>

              {govSavedMsg && (
                <div className="p-3 rounded-xl bg-accent-50 border border-accent-200 text-accent-800 text-xs font-semibold">
                  {govSavedMsg}
                </div>
              )}

              {/* Chave Geral do AdSense */}
              <div className="p-4 rounded-xl bg-primary-50/60 border border-primary-200 flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-800 text-sm">
                    Habilitar Google AdSense nas Páginas Editoriais Elegíveis
                  </p>
                  <p className="text-xs text-gray-600">
                    Mesmo quando ativado, o sistema bloqueia automaticamente qualquer anúncio em rotas de agendamento, contato ou atendimento.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={govConfig.adsenseGlobalEnabled}
                  onChange={(e) =>
                    setGovConfig({ ...govConfig, adsenseGlobalEnabled: e.target.checked })
                  }
                  className="w-5 h-5 rounded text-primary-600"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Categorias Editoriais */}
                <div className="p-4 rounded-xl border border-gray-200 space-y-3">
                  <h3 className="font-bold text-gray-800 text-sm">AdSense por Categoria do Blog</h3>
                  {Object.keys(govConfig.allowedCategories).map((cat) => (
                    <label key={cat} className="flex items-center justify-between text-xs text-gray-700 cursor-pointer">
                      <span>{cat}</span>
                      <input
                        type="checkbox"
                        checked={govConfig.allowedCategories[cat]}
                        onChange={(e) =>
                          setGovConfig({
                            ...govConfig,
                            allowedCategories: {
                              ...govConfig.allowedCategories,
                              [cat]: e.target.checked,
                            },
                          })
                        }
                        className="rounded text-primary-600"
                      />
                    </label>
                  ))}
                </div>

                {/* Páginas Elegíveis vs Bloqueadas */}
                <div className="p-4 rounded-xl border border-gray-200 space-y-3">
                  <h3 className="font-bold text-gray-800 text-sm">AdSense por Tipo de Página</h3>
                  {Object.keys(govConfig.allowedPages).map((route) => (
                    <label key={route} className="flex items-center justify-between text-xs text-gray-700 cursor-pointer">
                      <span className="font-mono">{route}</span>
                      <input
                        type="checkbox"
                        checked={govConfig.allowedPages[route]}
                        onChange={(e) =>
                          setGovConfig({
                            ...govConfig,
                            allowedPages: {
                              ...govConfig.allowedPages,
                              [route]: e.target.checked,
                            },
                          })
                        }
                        className="rounded text-primary-600"
                      />
                    </label>
                  ))}
                  <div className="pt-2 border-t text-[11px] text-red-700">
                    <strong>Bloqueio permanente (ética clínica):</strong>{' '}
                    {FORBIDDEN_ADSENSE_ROUTES.slice(0, 6).join(', ')}
                  </div>
                </div>

                {/* Controle de Noindex */}
                <div className="p-4 rounded-xl border border-gray-200 space-y-3">
                  <h3 className="font-bold text-gray-800 text-sm">Diretiva Noindex (Áreas Internas)</h3>
                  {Object.keys(govConfig.noindexRoutes).map((route) => (
                    <label key={route} className="flex items-center justify-between text-xs text-gray-700 cursor-pointer">
                      <span className="font-mono">{route}</span>
                      <input
                        type="checkbox"
                        checked={govConfig.noindexRoutes[route]}
                        onChange={(e) =>
                          setGovConfig({
                            ...govConfig,
                            noindexRoutes: {
                              ...govConfig.noindexRoutes,
                              [route]: e.target.checked,
                            },
                          })
                        }
                        className="rounded text-primary-600"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
