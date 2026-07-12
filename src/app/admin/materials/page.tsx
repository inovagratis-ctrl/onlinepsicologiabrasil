'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit, Trash2, Save, X, Upload, FileText } from 'lucide-react'

interface Material {
  id: string
  slug: string
  name: string
  description: string
  price: number
  pages: number
  pdfUrl: string | null
  previewUrl: string | null
  category: string
  createdAt: string
}

export default function AdminMaterials() {
  const [materials, setMaterials] = useState<Material[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<Material | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [formData, setFormData] = useState({
    slug: '',
    name: '',
    description: '',
    price: '',
    pages: '',
    pdfUrl: '',
    previewUrl: '',
    category: 'Materiais Premium',
  })

  useEffect(() => {
    fetchMaterials()
  }, [])

  const fetchMaterials = async () => {
    try {
      const response = await fetch('/api/materials')
      const data = await response.json()
      if (data.success) {
        setMaterials(data.materials)
      }
    } catch (error) {
      console.error('Error fetching materials:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    try {
      const method = editing ? 'PUT' : 'POST'
      const url = editing ? `/api/materials/${editing.id}` : '/api/materials'
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (data.success) {
        setEditing(null)
        setIsCreating(false)
        setFormData({
          slug: '',
          name: '',
          description: '',
          price: '',
          pages: '',
          pdfUrl: '',
          previewUrl: '',
          category: 'Materiais Premium',
        })
        fetchMaterials()
      } else {
        alert(data.error || 'Erro ao salvar')
      }
    } catch (error) {
      console.error('Error saving material:', error)
      alert('Erro ao salvar')
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir?')) return

    try {
      const response = await fetch(`/api/materials/${id}`, { method: 'DELETE' })
      const data = await response.json()
      if (data.success) {
        fetchMaterials()
      }
    } catch (error) {
      console.error('Error deleting material:', error)
    }
  }

  const handleUpload = async (materialId: string, file: File) => {
    setUploading(true)
    try {
      const formDataUpload = new FormData()
      formDataUpload.append('file', file)
      formDataUpload.append('materialId', materialId)

      const response = await fetch('/api/materials/upload', {
        method: 'POST',
        body: formDataUpload,
      })

      const data = await response.json()
      if (data.success) {
        // Update material with PDF URL
        await fetch(`/api/materials/${materialId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ pdfUrl: data.url }),
        })
        fetchMaterials()
        alert('PDF enviado com sucesso!')
      } else {
        alert(data.error || 'Erro ao enviar')
      }
    } catch (error) {
      console.error('Error uploading:', error)
      alert('Erro ao enviar PDF')
    } finally {
      setUploading(false)
    }
  }

  const startEditing = (material: Material) => {
    setEditing(material)
    setIsCreating(false)
    setFormData({
      slug: material.slug,
      name: material.name,
      description: material.description,
      price: material.price.toString(),
      pages: material.pages.toString(),
      pdfUrl: material.pdfUrl || '',
      previewUrl: material.previewUrl || '',
      category: material.category,
    })
  }

  const startCreating = () => {
    setIsCreating(true)
    setEditing(null)
    setFormData({
      slug: '',
      name: '',
      description: '',
      price: '',
      pages: '',
      pdfUrl: '',
      previewUrl: '',
      category: 'Materiais Premium',
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Gerenciar Materiais</h1>
          <button
            onClick={startCreating}
            className="flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600"
          >
            <Plus className="w-4 h-4" />
            Novo Material
          </button>
        </div>

        {/* Form Modal */}
        {(isCreating || editing) && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-800">
                    {editing ? 'Editar Material' : 'Novo Material'}
                  </h2>
                  <button onClick={() => { setEditing(null); setIsCreating(false) }} className="text-gray-400 hover:text-gray-600">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        const name = e.target.value
                        setFormData({
                          ...formData,
                          name,
                          slug: editing?.slug || name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-'),
                        })
                      }}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                      placeholder="Nome do material"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                      rows={3}
                      placeholder="Descrição do material"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preço (R$)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                        placeholder="14.90"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Páginas</label>
                      <input
                        type="number"
                        value={formData.pages}
                        onChange={(e) => setFormData({ ...formData, pages: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                        placeholder="20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
                    <input
                      type="text"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                      placeholder="Materiais Premium"
                    />
                  </div>

                  {editing?.pdfUrl && (
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-700 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        PDF já enviado
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={handleSave}
                    className="flex-1 flex items-center justify-center gap-2 bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600"
                  >
                    <Save className="w-4 h-4" />
                    {editing ? 'Salvar Alterações' : 'Criar Material'}
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

        {/* Materials List */}
        {loading ? (
          <p className="text-center text-gray-500">Carregando...</p>
        ) : materials.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">Nenhum material encontrado</p>
            <button onClick={startCreating} className="btn-primary">
              Criar Primeiro Material
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {materials.map((material) => (
              <div key={material.id} className="bg-white rounded-xl shadow p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                        {material.category}
                      </span>
                      <span className="text-lg font-bold text-primary-600">
                        R$ {material.price.toFixed(2)}
                      </span>
                      <span className="text-xs text-gray-400">{material.pages} págs</span>
                      {material.pdfUrl && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                          PDF ✓
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-800 text-lg">{material.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">/{material.slug}</p>
                    {material.description && (
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{material.description}</p>
                    )}
                  </div>
                  
                  <div className="flex gap-2 flex-shrink-0">
                    <label className={`flex items-center gap-1 px-3 py-2 text-sm rounded-lg cursor-pointer transition-colors ${uploading ? 'bg-gray-100 text-gray-400' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}>
                      <Upload className="w-4 h-4" />
                      PDF
                      <input
                        type="file"
                        accept=".pdf"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) handleUpload(material.id, file)
                        }}
                        disabled={uploading}
                      />
                    </label>
                    <button
                      onClick={() => startEditing(material)}
                      className="flex items-center gap-1 px-3 py-2 text-sm bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(material.id)}
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
