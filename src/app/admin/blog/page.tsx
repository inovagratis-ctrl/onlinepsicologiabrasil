'use client'

import { useState, useEffect, useRef } from 'react'
import { Plus, Edit3, Trash2, Eye, EyeOff, Star, StarOff, Search, X, Save, Image, Tag, Bold, Italic, Heading1, Link2, List, Quote, Code } from 'lucide-react'

interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  image: string | null
  author: string
  readTime: string
  published: boolean
  featured: boolean
  tags: string | null
  metaTitle: string | null
  metaDescription: string | null
  viewCount: number
  createdAt: string
  updatedAt: string
}

interface FormData {
  title: string
  excerpt: string
  content: string
  category: string
  image: string
  author: string
  readTime: string
  published: boolean
  featured: boolean
  tags: string
  metaTitle: string
  metaDescription: string
}

const CATEGORIES = [
  'Ansiedade',
  'Depressão',
  'Terapia Infantil',
  'Terapia de Casal',
  'Autoconhecimento',
  'Saúde Mental',
  'Psicologia Online',
  'Desenvolvimento Pessoal',
  'Transtornos',
  'Bem-estar',
]

export default function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('')
  const [saving, setSaving] = useState(false)
  const [uploadingImage, setUploadingImage] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLTextAreaElement>(null)
  const [showImageModal, setShowImageModal] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [imageAlt, setImageAlt] = useState('')
  const [formData, setFormData] = useState<FormData>({
    title: '',
    excerpt: '',
    content: '',
    category: 'Ansiedade',
    image: '',
    author: 'Maria do Socorro',
    readTime: '5 min',
    published: false,
    featured: false,
    tags: '',
    metaTitle: '',
    metaDescription: '',
  })

  useEffect(() => {
    const saved = localStorage.getItem('admin_auth')
    if (saved === 'socorrinha2026') {
      setIsAuthenticated(true)
      fetchPosts()
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'socorrinha2026') {
      localStorage.setItem('admin_auth', password)
      setIsAuthenticated(true)
      fetchPosts()
    } else {
      alert('Senha incorreta!')
    }
  }

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog?all=true')
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

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      alert('Imagem muito grande. Máximo 5MB.')
      return
    }

    setUploadingImage(true)
    try {
      const formDataUpload = new FormData()
      formDataUpload.append('file', file)
      formDataUpload.append('type', 'blog')

      const response = await fetch('/api/materials/upload', {
        method: 'POST',
        body: formDataUpload,
      })

      const data = await response.json()
      if (data.success) {
        setFormData(prev => ({ ...prev, image: data.url }))
      } else {
        alert('Erro ao fazer upload da imagem')
      }
    } catch (error) {
      console.error('Upload error:', error)
      alert('Erro ao fazer upload')
    } finally {
      setUploadingImage(false)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const url = editingPost ? `/api/blog/${editingPost.id}` : '/api/blog'
      const method = editingPost ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (data.success) {
        setShowForm(false)
        setEditingPost(null)
        resetForm()
        fetchPosts()
      } else {
        alert(data.error || 'Erro ao salvar post')
      }
    } catch (error) {
      console.error('Error saving post:', error)
      alert('Erro ao salvar post')
    } finally {
      setSaving(false)
    }
  }

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post)
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      image: post.image || '',
      author: post.author,
      readTime: post.readTime,
      published: post.published,
      featured: post.featured,
      tags: post.tags || '',
      metaTitle: post.metaTitle || '',
      metaDescription: post.metaDescription || '',
    })
    setShowForm(true)
  }

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Excluir o post "${title}"?`)) return

    try {
      const response = await fetch(`/api/blog/${id}`, { method: 'DELETE' })
      const data = await response.json()
      if (data.success) {
        fetchPosts()
      } else {
        alert('Erro ao excluir post')
      }
    } catch (error) {
      console.error('Error deleting post:', error)
      alert('Erro ao excluir post')
    }
  }

  const togglePublished = async (post: BlogPost) => {
    try {
      const response = await fetch(`/api/blog/${post.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: !post.published }),
      })
      const data = await response.json()
      if (data.success) {
        fetchPosts()
      }
    } catch (error) {
      console.error('Error toggling published:', error)
    }
  }

  const toggleFeatured = async (post: BlogPost) => {
    try {
      const response = await fetch(`/api/blog/${post.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ featured: !post.featured }),
      })
      const data = await response.json()
      if (data.success) {
        fetchPosts()
      }
    } catch (error) {
      console.error('Error toggling featured:', error)
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: 'Ansiedade',
      image: '',
      author: 'Maria do Socorro',
      readTime: '5 min',
      published: false,
      featured: false,
      tags: '',
      metaTitle: '',
      metaDescription: '',
    })
  }

  const insertAtCursor = (before: string, after: string = '') => {
    const textarea = contentRef.current
    if (!textarea) return
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selected = formData.content.substring(start, end)
    const newContent = formData.content.substring(0, start) + before + selected + after + formData.content.substring(end)
    setFormData(prev => ({ ...prev, content: newContent }))
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + before.length, start + before.length + selected.length)
    }, 0)
  }

  const handleInsertImage = () => {
    if (imageUrl) {
      const html = `<figure className="my-6"><img src="${imageUrl}" alt="${imageAlt || 'Imagem do artigo'}" className="w-full rounded-lg" /><figcaption className="text-center text-sm text-gray-500 mt-2">${imageAlt || ''}</figcaption></figure>`
      insertAtCursor('\n' + html + '\n')
      setShowImageModal(false)
      setImageUrl('')
      setImageAlt('')
    }
  }

  const handleImageUploadForContent = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploadingImage(true)
    try {
      const formDataUpload = new FormData()
      formDataUpload.append('file', file)
      formDataUpload.append('type', 'blog')
      const response = await fetch('/api/materials/upload', { method: 'POST', body: formDataUpload })
      const data = await response.json()
      if (data.success) {
        setImageUrl(data.url)
      } else {
        alert('Erro ao fazer upload')
      }
    } catch (error) {
      alert('Erro ao fazer upload')
    } finally {
      setUploadingImage(false)
    }
  }

  const filteredPosts = posts.filter(post => {
    const matchesSearch = !searchTerm ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !filterCategory || post.category === filterCategory
    return matchesSearch && matchesCategory
  })

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Admin Blog</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="Digite a senha"
              />
            </div>
            <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 font-medium">
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
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Gerenciar Blog</h1>
            <p className="text-gray-500 mt-1">{posts.length} posts cadastrados</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="/admin" className="text-gray-600 hover:text-gray-800">
              ← Voltar
            </a>
            <button
              onClick={() => { resetForm(); setEditingPost(null); setShowForm(true) }}
              className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
            >
              <Plus className="w-4 h-4" />
              Novo Post
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow p-4 mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Todas categorias</option>
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center overflow-y-auto py-10">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl mx-4">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-xl font-bold text-gray-800">
                  {editingPost ? 'Editar Post' : 'Novo Post'}
                </h2>
                <button
                  onClick={() => { setShowForm(false); setEditingPost(null) }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Imagem de Capa</label>
                  <div className="flex items-start gap-4">
                    {formData.image ? (
                      <div className="relative">
                        <img
                          src={formData.image}
                          alt="Preview"
                          className="w-40 h-28 object-cover rounded-lg border"
                        />
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, image: '' }))}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <div className="w-40 h-28 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                        <Image className="w-8 h-8 text-gray-300" />
                      </div>
                    )}
                    <div className="flex-1">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploadingImage}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50"
                      >
                        {uploadingImage ? 'Enviando...' : 'Selecionar Imagem'}
                      </button>
                      <p className="text-xs text-gray-500 mt-2">JPG, PNG ou WebP. Máximo 5MB.</p>
                      <input
                        type="text"
                        placeholder="Ou cole a URL da imagem"
                        value={formData.image}
                        onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                        className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Título *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="Título do post"
                  />
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Resumo *</label>
                  <textarea
                    required
                    rows={2}
                    value={formData.excerpt}
                    onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="Breve resumo do post"
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Conteúdo * (HTML permitido)</label>
                  {/* Toolbar */}
                  <div className="flex flex-wrap gap-1 p-2 bg-gray-100 border border-b-0 rounded-t-lg">
                    <button type="button" onClick={() => insertAtCursor('<strong>', '</strong>')} className="p-2 hover:bg-gray-200 rounded text-gray-700" title="Negrito">
                      <Bold className="w-4 h-4" />
                    </button>
                    <button type="button" onClick={() => insertAtCursor('<em>', '</em>')} className="p-2 hover:bg-gray-200 rounded text-gray-700" title="Itálico">
                      <Italic className="w-4 h-4" />
                    </button>
                    <button type="button" onClick={() => insertAtCursor('<h2>', '</h2>')} className="p-2 hover:bg-gray-200 rounded text-gray-700" title="Título H2">
                      <Heading1 className="w-4 h-4" />
                    </button>
                    <button type="button" onClick={() => insertAtCursor('<h3>', '</h3>')} className="p-2 hover:bg-gray-200 rounded text-gray-700" title="Título H3">
                      <span className="text-xs font-bold">H3</span>
                    </button>
                    <button type="button" onClick={() => insertAtCursor('<ul>\n  <li>', '</li>\n</ul>')} className="p-2 hover:bg-gray-200 rounded text-gray-700" title="Lista">
                      <List className="w-4 h-4" />
                    </button>
                    <button type="button" onClick={() => insertAtCursor('<blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-600 my-4">', '</blockquote>')} className="p-2 hover:bg-gray-200 rounded text-gray-700" title="Citação">
                      <Quote className="w-4 h-4" />
                    </button>
                    <button type="button" onClick={() => insertAtCursor('<a href="" target="_blank">', '</a>')} className="p-2 hover:bg-gray-200 rounded text-gray-700" title="Link">
                      <Link2 className="w-4 h-4" />
                    </button>
                    <div className="w-px bg-gray-300 mx-1" />
                    <button type="button" onClick={() => setShowImageModal(true)} className="flex items-center gap-1 px-3 py-1.5 bg-purple-100 text-purple-700 hover:bg-purple-200 rounded text-sm font-medium" title="Inserir imagem no conteúdo">
                      <Image className="w-4 h-4" />
                      Inserir Imagem
                    </button>
                    <button type="button" onClick={() => insertAtCursor('<p className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg my-4">', '</p>')} className="p-2 hover:bg-gray-200 rounded text-gray-700" title="Destaque">
                      <Code className="w-4 h-4" />
                    </button>
                  </div>
                  <textarea
                    ref={contentRef}
                    required
                    rows={14}
                    value={formData.content}
                    onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-b-lg focus:ring-2 focus:ring-purple-500 font-mono text-sm"
                    placeholder="Conteúdo completo do post. Use os botões acima para formatar."
                  />
                  <p className="text-xs text-gray-400 mt-1">Dica: Selecione o texto e clique nos botões para formatar</p>
                </div>

                {/* Category + Author + ReadTime */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Categoria *</label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    >
                      {CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Autora</label>
                    <input
                      type="text"
                      value={formData.author}
                      onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tempo de Leitura</label>
                    <input
                      type="text"
                      value={formData.readTime}
                      onChange={(e) => setFormData(prev => ({ ...prev, readTime: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                      placeholder="5 min"
                    />
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Tag className="w-4 h-4 inline mr-1" />
                    Tags (separadas por vírgula)
                  </label>
                  <input
                    type="text"
                    value={formData.tags}
                    onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="ansiedade, saúde mental, terapia"
                  />
                </div>

                {/* SEO */}
                <div className="border-t pt-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">SEO</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Meta Título</label>
                      <input
                        type="text"
                        value={formData.metaTitle}
                        onChange={(e) => setFormData(prev => ({ ...prev, metaTitle: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                        placeholder="Título para SEO (opcional)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Meta Descrição</label>
                      <textarea
                        rows={2}
                        value={formData.metaDescription}
                        onChange={(e) => setFormData(prev => ({ ...prev, metaDescription: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                        placeholder="Descrição para SEO (opcional)"
                      />
                    </div>
                  </div>
                </div>

                {/* Toggles */}
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.published}
                      onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
                      className="w-4 h-4 text-purple-600 rounded"
                    />
                    <span className="text-sm text-gray-700">Publicado</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                      className="w-4 h-4 text-purple-600 rounded"
                    />
                    <span className="text-sm text-gray-700">Destaque</span>
                  </label>
                </div>

                {/* Submit */}
                <div className="flex justify-end gap-4 pt-4 border-t">
                  <button
                    type="button"
                    onClick={() => { setShowForm(false); setEditingPost(null) }}
                    className="px-6 py-3 text-gray-600 hover:text-gray-800"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    {saving ? 'Salvando...' : editingPost ? 'Atualizar' : 'Criar Post'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Image Insert Modal */}
        {showImageModal && (
          <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">Inserir Imagem no Conteúdo</h3>
                <button onClick={() => setShowImageModal(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">URL da Imagem</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUploadForContent}
                    className="hidden"
                    id="content-image-upload"
                  />
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="https://... ou faça upload"
                    />
                    <label
                      htmlFor="content-image-upload"
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 cursor-pointer text-sm whitespace-nowrap"
                    >
                      {uploadingImage ? 'Enviando...' : 'Upload'}
                    </label>
                  </div>
                </div>
                {imageUrl && (
                  <div>
                    <img src={imageUrl} alt="Preview" className="w-full h-40 object-cover rounded-lg border" />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Texto Alternativo (alt)</label>
                  <input
                    type="text"
                    value={imageAlt}
                    onChange={(e) => setImageAlt(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="Descrição da imagem"
                  />
                </div>
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    onClick={() => { setShowImageModal(false); setImageUrl(''); setImageAlt('') }}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleInsertImage}
                    disabled={!imageUrl}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 text-sm"
                  >
                    Inserir Imagem
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Posts List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
            <p className="text-gray-500 mt-4">Carregando posts...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-12 text-center">
            <p className="text-gray-500 text-lg">Nenhum post encontrado</p>
            <button
              onClick={() => { resetForm(); setEditingPost(null); setShowForm(true) }}
              className="mt-4 text-purple-600 hover:text-purple-700 font-medium"
            >
              Criar primeiro post
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full md:w-40 h-28 object-cover rounded-lg"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
                        {post.category}
                      </span>
                      {post.published ? (
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Publicado</span>
                      ) : (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Rascunho</span>
                      )}
                      {post.featured && (
                        <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">Destaque</span>
                      )}
                      <span className="text-xs text-gray-400">{post.viewCount} visualizações</span>
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg">{post.title}</h3>
                    <p className="text-gray-500 text-sm mt-1 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                      <span>{new Date(post.createdAt).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                  <div className="flex md:flex-col gap-2">
                    <button
                      onClick={() => handleEdit(post)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                      title="Editar"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => togglePublished(post)}
                      className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                      title={post.published ? 'Despublicar' : 'Publicar'}
                    >
                      {post.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => toggleFeatured(post)}
                      className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg"
                      title={post.featured ? 'Remover destaque' : 'Destacar'}
                    >
                      {post.featured ? <StarOff className="w-4 h-4" /> : <Star className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => handleDelete(post.id, post.title)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      title="Excluir"
                    >
                      <Trash2 className="w-4 h-4" />
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
