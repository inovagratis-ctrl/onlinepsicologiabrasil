'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit, Trash2, Save, X, FileText, ArrowLeft, Image as ImageIcon, Trash2 as Trash2Icon, Upload } from 'lucide-react'
import Link from 'next/link'

interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  image: string | null
  readTime: string
  published: boolean
  createdAt: string
}

export default function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<BlogPost | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    excerpt: '',
    content: '',
    category: 'Autismo',
    image: '',
    readTime: '5 min',
    published: false,
  })
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [imageUploading, setImageUploading] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog')
      const data = await response.json()
      if (data.success) {
        setPosts(data.posts)
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleImageUpload = async (file: File) => {
    if (!file) return

    setImageUploading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('type', 'blog') // Add type to allow images

      const response = await fetch('/api/materials/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success && data.url) {
        setFormData(prev => ({ ...prev, image: data.url }))
        setImagePreview(data.url)
      } else {
        alert(data.error || 'Erro ao fazer upload da imagem')
      }
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('Erro ao fazer upload da imagem')
    } finally {
      setImageUploading(false)
    }
  }

  const removeImage = () => {
    setFormData(prev => ({ ...prev, image: '' }))
    setImagePreview(null)
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const handleSave = async () => {
    try {
      const method = editing ? 'PUT' : 'POST'
      const url = editing ? `/api/blog/${editing.id}` : '/api/blog'

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
          title: '',
          excerpt: '',
          content: '',
          category: 'Autismo',
          image: '',
          readTime: '5 min',
          published: false,
        })
        setImagePreview(null)
        fetchPosts()
      } else {
        alert(data.error || 'Erro ao salvar')
      }
    } catch (error) {
      console.error('Error saving post:', error)
      alert('Erro ao salvar')
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir?')) return

    try {
      const response = await fetch(`/api/blog/${id}`, { method: 'DELETE' })
      const data = await response.json()
      if (data.success) {
        fetchPosts()
      }
    } catch (error) {
      console.error('Error deleting post:', error)
    }
  }

  const startEditing = (post: BlogPost) => {
    setEditing(post)
    setIsCreating(false)
    setFormData({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      image: post.image || '',
      readTime: post.readTime,
      published: post.published,
    })
    setImagePreview(post.image || null)
  }

  const startCreating = () => {
    setIsCreating(true)
    setEditing(null)
    setFormData({
      slug: '',
      title: '',
      excerpt: '',
      content: '',
      category: 'Autismo',
      image: '',
      readTime: '5 min',
      published: false,
    })
    setImagePreview(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <Link href="/admin" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Voltar ao Painel
        </Link>

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Gerenciar Blog</h1>
          <button
            onClick={startCreating}
            className="flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600"
          >
            <Plus className="w-4 h-4" />
            Novo Artigo
          </button>
        </div>

        {/* Form Modal */}
        {(isCreating || editing) && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-800">
                    {editing ? 'Editar Artigo' : 'Novo Artigo'}
                  </h2>
                  <button onClick={() => { setEditing(null); setIsCreating(false) }} className="text-gray-400 hover:text-gray-600">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => {
                        const title = e.target.value
                        setFormData({
                          ...formData,
                          title,
                          slug: editing?.slug || generateSlug(title),
                        })
                      }}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                      placeholder="Título do artigo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                      placeholder="slug-do-artigo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Resumo</label>
                    <textarea
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                      rows={2}
                      placeholder="Resumo curto do artigo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Conteúdo (use ### para subtítulos)</label>
                    <textarea
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 font-mono text-sm"
                      rows={12}
                      placeholder="Conteúdo do artigo aqui...&#10;&#10;### Subtítulo&#10;&#10;Parágrafo do artigo...&#10;&#10;- Item de lista&#10;- Outro item"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="Autismo">Autismo</option>
                        <option value="TDAH">TDAH</option>
                        <option value="Dislexia">Dislexia</option>
                        <option value="ABA">ABA</option>
                        <option value="Orientação a Pais">Orientação a Pais</option>
                        <option value="Neurodesenvolvimento">Neurodesenvolvimento</option>
                        <option value="Geral">Geral</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tempo de Leitura</label>
                      <input
                        type="text"
                        value={formData.readTime}
                        onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                        placeholder="5 min"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Imagem do Artigo</label>
                    <div className="space-y-3">
                      {/* Preview da imagem */}
                      {imagePreview && (
                        <div className="relative group">
                          <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                            <img
                              src={imagePreview}
                              alt="Preview da imagem"
                              className="w-full h-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={removeImage}
                              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition-opacity"
                              title="Remover imagem"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-3">
                        <label className="flex-1 flex flex-col">
                          <span className="text-sm font-medium text-gray-700 mb-1">URL da Imagem (ou faça upload)</span>
                          <input
                            type="text"
                            value={formData.image}
                            onChange={(e) => {
                              setFormData(prev => ({ ...prev, image: e.target.value }))
                              if (e.target.value) setImagePreview(e.target.value)
                            }}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                            placeholder="https://images.unsplash.com/... ou faça upload abaixo"
                          />
                        </label>
                        <label className="flex items-end">
                          <span className="text-sm font-medium text-gray-700 mb-1 block w-full text-center">OU</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])}
                            disabled={imageUploading}
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 cursor-pointer hover:bg-gray-50"
                          />
                        </label>
                      </div>
                      {imageUploading && (
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-500 border-t-transparent"></div>
                          <span>Enviando imagem...</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="published"
                      checked={formData.published}
                      onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                      className="w-4 h-4 text-primary-500 rounded"
                    />
                    <label htmlFor="published" className="text-sm font-medium text-gray-700">
                      Publicado
                    </label>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={handleSave}
                    className="flex-1 flex items-center justify-center gap-2 bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600"
                  >
                    <Save className="w-4 h-4" />
                    {editing ? 'Salvar Alterações' : 'Criar Artigo'}
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

        {/* Posts List */}
        {loading ? (
          <p className="text-center text-gray-500">Carregando...</p>
        ) : posts.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">Nenhum artigo encontrado</p>
            <button onClick={startCreating} className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600">
              Criar Primeiro Artigo
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        post.published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {post.published ? 'Publicado' : 'Rascunho'}
                      </span>
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 text-lg">{post.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">/{post.slug}</p>
                    {post.excerpt && (
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{post.excerpt}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-2">
                      Criado em {new Date(post.createdAt).toLocaleDateString('pt-BR')}
                    </p>
                  </div>

                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => startEditing(post)}
                      className="flex items-center gap-1 px-3 py-2 text-sm bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="flex items-center gap-1 px-3 py-2 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                    >
                      <Trash2Icon className="w-4 h-4" />
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