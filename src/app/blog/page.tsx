'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Search, Clock, User, ArrowRight, ShieldCheck, BookOpen, Compass } from 'lucide-react'
import AdSlot from '@/components/AdSlot'
import {
  EDITORIAL_ARTICLES,
  EditorialArticle,
  PROFESSIONAL_AUTHOR,
  PROFESSIONAL_CRP,
} from '@/data/articles'
import { CATEGORY_LIST } from '@/data/categories'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export default function BlogPage() {
  const [posts, setPosts] = useState<EditorialArticle[]>(EDITORIAL_ARTICLES)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    // Busca posts adicionais caso tenham sido criados via /admin/blog
    const fetchAll = async () => {
      try {
        const res = await fetch('/api/blog?limit=50')
        const data = await res.json()
        if (data.success && Array.isArray(data.posts) && data.posts.length > 0) {
          setPosts(data.posts)
        }
      } catch {
        // Mantém EDITORIAL_ARTICLES locais
      }
    }
    fetchAll()
  }, [])

  const categories = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const post of posts) {
      if (post.published !== false) {
        counts[post.category] = (counts[post.category] || 0) + 1
      }
    }
    return Object.entries(counts).map(([name, count]) => ({ name, count }))
  }, [posts])

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      if (post.published === false) return false
      const matchesCat =
        !selectedCategory ||
        post.category.toLowerCase() === selectedCategory.toLowerCase()
      const q = searchTerm.trim().toLowerCase()
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.content.toLowerCase().includes(q) ||
        (post.tags && post.tags.toLowerCase().includes(q))
      return matchesCat && matchesSearch
    })
  }, [posts, selectedCategory, searchTerm])

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
    } catch {
      return dateStr
    }
  }

  return (
    <div className="min-h-screen bg-warm-50">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', url: '/' },
          { name: 'Blog e Artigos Revisados', url: '/blog' },
        ]}
      />

      {/* Hero Editorial */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-secondary-800 text-white py-14 md:py-18">
        <div className="max-w-6xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="text-xs text-primary-100 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:underline">
              Início
            </Link>
            <span>/</span>
            <span className="font-semibold text-white">Blog e Guias Práticos</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-primary-50 mb-4">
            <ShieldCheck className="w-4 h-4" />
            Revisão Clínica: {PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP})
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-3xl leading-tight">
            Artigos e Guias Práticos sobre Saúde Mental e Neurodesenvolvimento
          </h1>
          <p className="text-primary-100 text-lg max-w-3xl leading-relaxed mb-8">
            Conteúdo educativo fundamentado em evidências científicas (DSM-5-TR, CFP, OMS e SBP), escrito com linguagem acessível para famílias, educadores e adultos.
          </p>

          {/* Barra de Busca */}
          <div className="max-w-xl relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              aria-label="Buscar artigos por tema, dúvida ou palavra-chave"
              placeholder="Buscar por TDAH, rotina visual, crise de ansiedade, dislexia, escola..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-800 text-sm focus:ring-2 focus:ring-primary-300 shadow-lg"
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        {/* Atalhos para os 6 Hubs Especializados */}
        <section className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-700 mb-3">
            <Compass className="w-4 h-4" />
            Guias Completos por Área Especializada (Acesso em 1 Clique)
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {CATEGORY_LIST.map((hub) => (
              <Link
                key={hub.slug}
                href={`/${hub.slug}`}
                className="px-3 py-2.5 rounded-xl bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-300 text-xs font-semibold text-gray-800 hover:text-primary-800 transition-colors flex items-center justify-between"
              >
                <span>{hub.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-primary-600 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        {/* Filtros por Categoria */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory('')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors ${
              !selectedCategory
                ? 'bg-primary-700 text-white'
                : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
            }`}
          >
            Todos os Artigos ({posts.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors ${
                selectedCategory === cat.name
                  ? 'bg-primary-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        <AdSlot position="top" category={selectedCategory || undefined} />

        {/* Lista de Artigos */}
        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h2 className="text-lg font-bold text-gray-800 mb-1">
              Nenhum artigo encontrado para &ldquo;{searchTerm}&rdquo;
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Tente buscar por termos como &ldquo;rotina&rdquo;, &ldquo;TDAH&rdquo;, &ldquo;ansiedade&rdquo;, &ldquo;escola&rdquo; ou &ldquo;consulta&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('')
              }}
              className="px-4 py-2 rounded-xl bg-primary-600 text-white text-xs font-semibold hover:bg-primary-700"
            >
              Mostrar Todos os Artigos
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-primary-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-3 bg-gradient-to-r from-primary-600 to-secondary-600" />
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-bold text-gray-800 text-lg mb-2.5 group-hover:text-primary-700 transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-700 flex items-center gap-1">
                      <User className="w-3 h-3 text-primary-600" />
                      {PROFESSIONAL_CRP}
                    </span>
                    <span>Atualizado em {formatDate(post.updatedAt || post.createdAt)}</span>
                  </div>
                  <span className="text-primary-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ler artigo <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        <AdSlot position="bottom" category={selectedCategory || undefined} />
      </div>
    </div>
  )
}
