'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit, Trash2, Save, X, Code, ArrowLeft, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'

interface Ad {
  id: string
  position: string
  title: string
  code: string
  active: boolean
  createdAt: string
}

const positions = [
  { value: 'top', label: 'Topo do Blog', size: '728x90' },
  { value: 'middle', label: 'Meio do Conteúdo', size: '300x250' },
  { value: 'bottom', label: 'Rodapé do Blog', size: '728x90' },
  { value: 'sidebar', label: 'Lateral (Sidebar)', size: '300x600' },
  { value: 'article-top', label: 'Topo do Artigo', size: '728x90' },
  { value: 'article-middle', label: 'Meio do Artigo', size: '300x250' },
  { value: 'article-bottom', label: 'Rodapé do Artigo', size: '728x90' },
]

export default function AdminAds() {
  const [ads, setAds] = useState<Ad[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<Ad | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [formData, setFormData] = useState({
    position: 'top',
    title: '',
    code: '',
    active: true,
  })

  useEffect(() => {
    fetchAds()
  }, [])

  const fetchAds = async () => {
    try {
      const response = await fetch('/api/ads')
      const data = await response.json()
      if (data.success) {
        setAds(data.ads)
      }
    } catch (error) {
      console.error('Error fetching ads:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    try {
      const method = editing ? 'PUT' : 'POST'
      const url = editing ? `/api/ads/${editing.id}` : '/api/ads'
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (data.success) {
        setEditing(null)
        setIsCreating(false)
        setFormData({ position: 'top', title: '', code: '', active: true })
        fetchAds()
      } else {
        alert(data.error || 'Erro ao salvar')
      }
    } catch (error) {
      console.error('Error saving ad:', error)
      alert('Erro ao salvar')
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este anúncio?')) return

    try {
      const response = await fetch(`/api/ads/${id}`, { method: 'DELETE' })
      const data = await response.json()
      if (data.success) {
        fetchAds()
      }
    } catch (error) {
      console.error('Error deleting ad:', error)
    }
  }

  const toggleActive = async (ad: Ad) => {
    try {
      await fetch(`/api/ads/${ad.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ active: !ad.active }),
      })
      fetchAds()
    } catch (error) {
      console.error('Error toggling ad:', error)
    }
  }

  const startEditing = (ad: Ad) => {
    setEditing(ad)
    setIsCreating(false)
    setFormData({
      position: ad.position,
      title: ad.title,
      code: ad.code,
      active: ad.active,
    })
  }

  const startCreating = () => {
    setIsCreating(true)
    setEditing(null)
    setFormData({ position: 'top', title: '', code: '', active: true })
  }

  const getPositionLabel = (pos: string) => {
    return positions.find(p => p.value === pos)?.label || pos
  }

  const getPositionSize = (pos: string) => {
    return positions.find(p => p.value === pos)?.size || ''
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <Link href="/admin" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Voltar ao Painel
        </Link>
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Gerenciar Anúncios</h1>
            <p className="text-gray-500 mt-1">Adicione e edite anúncios pelo painel</p>
          </div>
          <button
            onClick={startCreating}
            className="flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600"
          >
            <Plus className="w-4 h-4" />
            Novo Anúncio
          </button>
        </div>

        {/* Form Modal */}
        {(isCreating || editing) && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-800">
                    {editing ? 'Editar Anúncio' : 'Novo Anúncio'}
                  </h2>
                  <button onClick={() => { setEditing(null); setIsCreating(false) }} className="text-gray-400 hover:text-gray-600">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Posição</label>
                    <select
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                    >
                      {positions.map((pos) => (
                        <option key={pos.value} value={pos.value}>
                          {pos.label} ({pos.size})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Anúncio</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                      placeholder="Ex: Anúncio AdSense Topo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Código do Anúncio (HTML/JS)
                    </label>
                    <textarea
                      value={formData.code}
                      onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 font-mono text-sm"
                      rows={8}
                      placeholder={`<ins className="adsbygoogle"\n  style={{ display: 'block' }}\n  data-ad-client="ca-pub-SEU-CODIGO"\n  data-ad-slot="SEU-SLOT"\n  data-ad-format="auto"\n  data-full-width-responsive="true"\n/>\n<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>`}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Cole aqui o código HTML/JS do Google AdSense ou qualquer outra rede de anúncios
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="active"
                      checked={formData.active}
                      onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                      className="w-4 h-4 text-primary-500 rounded"
                    />
                    <label htmlFor="active" className="text-sm font-medium text-gray-700">
                      Anúncio Ativo
                    </label>
                  </div>

                  {/* Preview */}
                  {formData.code && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pré-visualização</label>
                      <div className="border rounded-lg p-4 bg-gray-50">
                        <div dangerouslySetInnerHTML={{ __html: formData.code }} />
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={handleSave}
                    className="flex-1 flex items-center justify-center gap-2 bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600"
                  >
                    <Save className="w-4 h-4" />
                    {editing ? 'Salvar Alterações' : 'Criar Anúncio'}
                  </button>
                  <button
                    onClick={() => { setEditing(null); setIsCreating(false) }}
                    className="px-6 py-3 border rounded-lg hover:bg-gray-50"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Ads List */}
        {loading ? (
          <p className="text-center text-gray-500">Carregando...</p>
        ) : ads.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <Code className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">Nenhum anúncio configurado</p>
            <button onClick={startCreating} className="btn-primary">
              Criar Primeiro Anúncio
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {ads.map((ad) => (
              <div key={ad.id} className={`bg-white rounded-xl shadow p-6 ${!ad.active ? 'opacity-60' : ''}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                        {getPositionLabel(ad.position)}
                      </span>
                      <span className="text-xs text-gray-400">{getPositionSize(ad.position)}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        ad.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                      }`}>
                        {ad.active ? 'Ativo' : 'Inativo'}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-800">{ad.title || 'Sem título'}</h3>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2 font-mono">{ad.code.substring(0, 100)}...</p>
                  </div>
                  
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => toggleActive(ad)}
                      className={`flex items-center gap-1 px-3 py-2 text-sm rounded-lg transition-colors ${
                        ad.active 
                          ? 'bg-green-50 text-green-600 hover:bg-green-100' 
                          : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                      }`}
                    >
                      {ad.active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      {ad.active ? 'Ativo' : 'Inativo'}
                    </button>
                    <button
                      onClick={() => startEditing(ad)}
                      className="flex items-center gap-1 px-3 py-2 text-sm bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(ad.id)}
                      className="flex items-center gap-1 px-3 py-2 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
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
    </div>
  )
}
