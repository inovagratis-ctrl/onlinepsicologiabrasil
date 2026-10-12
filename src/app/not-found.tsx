'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search, Compass, BookOpen, FileText, Home, Calendar, ArrowRight } from 'lucide-react'
import { CATEGORY_LIST } from '@/data/categories'

export default function NotFound() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/blog')
  }

  return (
    <div className="min-h-[80vh] bg-warm-50 py-16 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-12 text-center space-y-8">
        <div>
          <span className="inline-block px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider mb-3">
            Página não encontrada (404)
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Não encontramos este endereço, mas podemos ajudar você a achar o que procura
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Utilize a busca abaixo para explorar nossos artigos revisados ou acesse diretamente um dos nossos guias especializados:
          </p>
        </div>

        <form onSubmit={handleSearch} className="max-w-lg mx-auto flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por TDAH, rotina visual, ansiedade, escola..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-colors"
          >
            Buscar
          </button>
        </form>

        <div className="text-left">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-primary-600" />
            Guias Especializados por Tema
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {CATEGORY_LIST.map((hub) => (
              <Link
                key={hub.slug}
                href={`/${hub.slug}`}
                className="p-3 rounded-xl bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-300 text-xs font-semibold text-gray-800 flex items-center justify-between transition-colors"
              >
                <span>{hub.shortTitle}</span>
                <ArrowRight className="w-3.5 h-3.5 text-primary-600 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold transition-colors"
          >
            <Home className="w-4 h-4" />
            Página Inicial
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary-50 hover:bg-primary-100 text-primary-800 text-xs font-semibold transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            Artigos do Blog
          </Link>
          <Link
            href="/materiais"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-accent-50 hover:bg-accent-100 text-accent-800 text-xs font-semibold transition-colors"
          >
            <FileText className="w-4 h-4" />
            Materiais Gratuitos
          </Link>
          <Link
            href="/agendamento"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Agendar Conversa
          </Link>
        </div>
      </div>
    </div>
  )
}
