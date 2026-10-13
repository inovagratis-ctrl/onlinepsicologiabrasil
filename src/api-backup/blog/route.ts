import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { EDITORIAL_ARTICLES, PROFESSIONAL_AUTHOR } from '@/data/articles'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    const all = searchParams.get('all') === 'true'

    let dbPosts: any[] = []
    try {
      dbPosts = await prisma.blogPost.findMany({
        orderBy: { createdAt: 'desc' },
      })
    } catch {
      // Fallback silencioso para EDITORIAL_ARTICLES caso o banco não esteja acessível no momento
      dbPosts = []
    }

    // Mescla os artigos fundamentais com os do banco (priorizando a versão rica do EDITORIAL_ARTICLES para os 10 artigos base)
    const staticSlugs = new Set(EDITORIAL_ARTICLES.map((a) => a.slug))
    const customDbPosts = dbPosts.filter((p) => !staticSlugs.has(p.slug))

    let combined = [...EDITORIAL_ARTICLES, ...customDbPosts]

    if (!all) {
      combined = combined.filter((p) => p.published)
    }

    if (category) {
      combined = combined.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase() || p.categorySlug === category.toLowerCase()
      )
    }

    if (search) {
      const q = search.toLowerCase()
      combined = combined.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.content.toLowerCase().includes(q) ||
          (p.tags && p.tags.toLowerCase().includes(q))
      )
    }

    const total = combined.length
    const start = (page - 1) * limit
    const paginated = combined.slice(start, start + limit)

    return NextResponse.json({
      success: true,
      posts: paginated,
      pagination: {
        page,
        limit,
        total,
        pages: Math.max(1, Math.ceil(total / limit)),
      },
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      {
        success: true,
        posts: EDITORIAL_ARTICLES,
        pagination: { page: 1, limit: 12, total: EDITORIAL_ARTICLES.length, pages: 1 },
      },
      { status: 200 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      title,
      excerpt,
      content,
      category,
      image,
      author,
      readTime,
      published,
      featured,
      tags,
      metaTitle,
      metaDescription,
    } = body

    if (!title || !excerpt || !content || !category) {
      return NextResponse.json(
        { success: false, error: 'Título, resumo, conteúdo e categoria são obrigatórios' },
        { status: 400 }
      )
    }

    const slug = title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()

    const existingPost = await prisma.blogPost.findUnique({ where: { slug } })
    const finalSlug = existingPost ? `${slug}-${Date.now()}` : slug

    const post = await prisma.blogPost.create({
      data: {
        slug: finalSlug,
        title,
        excerpt,
        content,
        category,
        image: image || null,
        author: author || PROFESSIONAL_AUTHOR,
        readTime: readTime || '6 min',
        published: published || false,
        featured: featured || false,
        tags: tags || null,
        metaTitle: metaTitle || null,
        metaDescription: metaDescription || null,
      },
    })

    return NextResponse.json({ success: true, post }, { status: 201 })
  } catch (error) {
    console.error('Error creating blog post:', error)
    return NextResponse.json(
      { success: false, error: 'Erro ao criar post' },
      { status: 500 }
    )
  }
}
