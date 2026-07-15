'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar, Tag, Share2 } from 'lucide-react'

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
  tags: string | null
  metaTitle: string | null
  metaDescription: string | null
  viewCount: number
  createdAt: string
}

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (params.slug) {
      fetchPost(params.slug as string)
    }
  }, [params.slug])

  const fetchPost = async (slug: string) => {
    try {
      const response = await fetch(`/api/blog/${slug}`)
      const data = await response.json()
      if (data.success) {
        setPost(data.post)
      } else {
        setError('Post não encontrado')
      }
    } catch (err) {
      setError('Erro ao carregar post')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  }

  const formatContent = (text: string) => {
    if (!text) return ''
    if (text.includes('<p>') || text.includes('<h2>') || text.includes('<h3>') || text.includes('<ul>')) {
      return text
    }
    const paragraphs = text.split(/\n\n+/)
    return paragraphs
      .map(p => {
        p = p.trim()
        if (!p) return ''
        if (p.startsWith('- ') || p.startsWith('• ')) {
          const items = p.split(/\n/).map(item => `<li>${item.replace(/^[-•]\s*/, '')}</li>`).join('')
          return `<ul>${items}</ul>`
        }
        if (/^\d+\.\s/.test(p)) {
          const items = p.split(/\n/).map(item => `<li>${item.replace(/^\d+\.\s*/, '')}</li>`).join('')
          return `<ol>${items}</ol>`
        }
        if (p.match(/^(O que é|Principais|Como|Estratégias|Tratamento|Quando|Considerações|Vale lembrar|O diagnóstico)/i)) {
          return `<h2>${p}</h2>`
        }
        return `<p>${p.replace(/\n/g, '<br/>')}</p>`
      })
      .join('\n')
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copiado!')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{error || 'Post não encontrado'}</h1>
          <Link href="/blog" className="text-purple-600 hover:text-purple-700 font-medium">
            ← Voltar ao Blog
          </Link>
        </div>
      </div>
    )
  }

  const tags = post.tags ? post.tags.split(',').map(t => t.trim()).filter(Boolean) : []

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      {post.image && (
        <div className="relative h-64 md:h-96 w-full">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      <article className="max-w-4xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-6 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Blog
          </Link>

          {/* Category */}
          <div className="mb-4">
            <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(post.createdAt)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <button
              onClick={handleShare}
              className="flex items-center gap-1 text-purple-600 hover:text-purple-700 ml-auto"
            >
              <Share2 className="w-4 h-4" />
              Compartilhar
            </button>
          </div>

          {/* Excerpt */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
            {post.excerpt}
          </p>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-purple-600 prose-strong:text-gray-800 prose-li:text-gray-600 prose-ul:my-4 prose-ol:my-4 prose-li:my-1"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-8 pt-8 border-t">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-gray-400" />
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 bg-purple-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Precisa de ajuda?
            </h3>
            <p className="text-gray-600 mb-4">
              Agende uma consulta com Maria do Socorro Araujo Teixeira
            </p>
            <a
              href="https://wa.me/5568999035300?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 font-medium"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </article>

      {/* Spacer */}
      <div className="h-16" />
    </div>
  )
}
