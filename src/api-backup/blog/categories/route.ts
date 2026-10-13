import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { EDITORIAL_ARTICLES } from '@/data/articles'

export async function GET() {
  try {
    const counts: Record<string, number> = {}
    for (const art of EDITORIAL_ARTICLES) {
      if (art.published) {
        counts[art.category] = (counts[art.category] || 0) + 1
      }
    }

    try {
      const staticSlugs = new Set(EDITORIAL_ARTICLES.map((a) => a.slug))
      const dbPosts = await prisma.blogPost.findMany({
        where: { published: true },
        select: { slug: true, category: true },
      })
      for (const p of dbPosts) {
        if (!staticSlugs.has(p.slug)) {
          counts[p.category] = (counts[p.category] || 0) + 1
        }
      }
    } catch {
      // Ignora falha de conexão ao banco e retorna categorias dos artigos editoriais
    }

    const categories = Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)

    return NextResponse.json({
      success: true,
      categories,
    })
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json({
      success: true,
      categories: [],
    })
  }
}
