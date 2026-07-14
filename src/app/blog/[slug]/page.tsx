import { Calendar, Clock, ArrowLeft, Share2, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import AdBanner from '@/components/AdBanner'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await prisma.blogPost.findUnique({
    where: { slug: params.slug, published: true },
  })

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Post não encontrado</h1>
          <Link href="/blog" className="text-primary-600 hover:underline">
            Voltar ao blog
          </Link>
        </div>
      </div>
    )
  }

  const paragraphs = post.content.split('\n').filter(p => p.trim())
  const midpoint = Math.ceil(paragraphs.length / 2)
  const firstHalf = paragraphs.slice(0, midpoint)
  const secondHalf = paragraphs.slice(midpoint)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Voltar ao blog
        </Link>

        {/* Ad - Topo do Artigo */}
        <AdBanner position="top" />

        <div className="flex gap-8 mt-6">
          {/* Conteúdo Principal */}
          <article className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.createdAt).toLocaleDateString('pt-BR')}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-8">{post.title}</h1>

              {/* Primeira metade do conteúdo */}
              <div className="prose prose-lg max-w-none">
                {firstHalf.map((paragraph, index) => (
                  <div key={index} className="mb-6">
                    {paragraph.startsWith('###') ? (
                      <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                        {paragraph.replace('### ', '')}
                      </h2>
                    ) : paragraph.startsWith('- **') ? (
                      <li className="ml-4 mb-2">
                        <strong>{paragraph.match(/\*\*(.*?)\*\*/)?.[1]}</strong>
                        {paragraph.replace(/- \*\*.*?\*\*/, '')}
                      </li>
                    ) : paragraph.startsWith('- ') ? (
                      <li className="ml-4 mb-2 text-gray-600">{paragraph.replace('- ', '')}</li>
                    ) : (
                      <p className="text-gray-600 leading-relaxed">{paragraph}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Ad - Meio do Conteúdo */}
              <AdBanner position="middle" />

              {/* Segunda metade do conteúdo */}
              <div className="prose prose-lg max-w-none mt-6">
                {secondHalf.map((paragraph, index) => (
                  <div key={index} className="mb-6">
                    {paragraph.startsWith('###') ? (
                      <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                        {paragraph.replace('### ', '')}
                      </h2>
                    ) : paragraph.startsWith('- **') ? (
                      <li className="ml-4 mb-2">
                        <strong>{paragraph.match(/\*\*(.*?)\*\*/)?.[1]}</strong>
                        {paragraph.replace(/- \*\*.*?\*\*/, '')}
                      </li>
                    ) : paragraph.startsWith('- ') ? (
                      <li className="ml-4 mb-2 text-gray-600">{paragraph.replace('- ', '')}</li>
                    ) : (
                      <p className="text-gray-600 leading-relaxed">{paragraph}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="border-t mt-8 pt-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-primary-600">
                    <Share2 className="w-5 h-5" />
                    Compartilhar
                  </button>
                  <Link
                    href="/formulario"
                    className="flex items-center gap-2 text-gray-600 hover:text-primary-600"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Agendar Consulta
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar com Anúncio */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <AdBanner position="sidebar" />
          </aside>
        </div>

        {/* Ad - Rodapé do Artigo */}
        <AdBanner position="bottom" />
      </div>
    </div>
  )
}