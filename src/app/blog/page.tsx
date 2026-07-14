import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import AdBanner from '@/components/AdBanner'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export default async function Blog() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Artigos, dicas e informações sobre Autismo, TDAH, Dislexia e neurodesenvolvimento
          </p>
        </div>

        {/* Ad - Topo */}
        <AdBanner position="top" />

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum artigo publicado ainda.</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            <div className="mb-8">
              <Link href={`/blog/${posts[0].slug}`}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={posts[0].image || 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&h=400&fit=crop'}
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
                          {new Date(posts[0].createdAt).toLocaleDateString('pt-BR')}
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

            {/* Ad - Meio */}
            <AdBanner position="middle" />

            {/* Posts Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {posts.slice(1).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                    <img
                      src={post.image || 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=400&fit=crop'}
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
                          {new Date(post.createdAt).toLocaleDateString('pt-BR')}
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
          </>
        )}

        {/* Ad - Rodapé */}
        <AdBanner position="bottom" />
      </div>
    </div>
  )
}