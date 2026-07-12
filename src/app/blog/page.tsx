import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const posts = [
  {
    slug: 'o-que-e-autismo',
    title: 'O que é Autismo? Entendendo o Transtorno do Espectro Autista',
    excerpt: 'Uma visão completa sobre o TEA, seus sinais e como o diagnóstico precoce pode transformar vidas.',
    date: '2026-07-01',
    readTime: '8 min',
    category: 'Autismo',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&h=400&fit=crop',
  },
  {
    slug: 'aba-naturalista-como-funciona',
    title: 'ABA Naturalista: Como Funciona essa Abordagem?',
    excerpt: 'Conheça os princípios da Análise do Comportamento Aplicada em contexto natural e por que ela é eficaz.',
    date: '2026-06-25',
    readTime: '10 min',
    category: 'ABA',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=400&fit=crop',
  },
  {
    slug: 'tdah-em-criancas',
    title: 'TDAH em Crianças: Sinais, Diagnóstico e Tratamento',
    excerpt: 'Como identificar o Transtorno do Déficit de Atenção com Hiperatividade e quais as melhores abordagens.',
    date: '2026-06-18',
    readTime: '7 min',
    category: 'TDAH',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=400&fit=crop',
  },
  {
    slug: 'dislexia-estrategias',
    title: 'Dislexia: Estratégias para o Dia a Dia',
    excerpt: 'Dicas práticas para auxiliar crianças e adultos com dislexia nas atividades de leitura e escrita.',
    date: '2026-06-10',
    readTime: '6 min',
    category: 'Dislexia',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=400&fit=crop',
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Artigos, dicas e informações sobre Autismo, TDAH, Dislexia e neurodesenvolvimento
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Link href={`/blog/${posts[0].slug}`}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={posts[0].image}
                    alt={posts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                      {posts[0].category}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {posts[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-primary-600 transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-4">{posts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(posts[0].date).toLocaleDateString('pt-BR')}
                    </span>
                    <span className="text-primary-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                      Ler mais <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </span>
                    <span className="text-primary-600 text-sm font-medium flex items-center gap-1">
                      Ler mais <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
