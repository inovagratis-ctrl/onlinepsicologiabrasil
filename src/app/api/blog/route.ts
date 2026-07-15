import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    const all = searchParams.get('all') === 'true'

    const where: any = {}
    if (!all) {
      where.published = true
    }
    if (category) {
      where.category = category
    }
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
      ]
    }

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          slug: true,
          title: true,
          excerpt: true,
          content: true,
          category: true,
          image: true,
          author: true,
          readTime: true,
          published: true,
          featured: true,
          tags: true,
          metaTitle: true,
          metaDescription: true,
          viewCount: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
      prisma.blogPost.count({ where }),
    ])

    return NextResponse.json({
      success: true,
      posts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      { success: false, error: 'Erro ao buscar posts' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, excerpt, content, category, image, author, readTime, published, featured, tags, metaTitle, metaDescription } = body

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
        author: author || 'Maria do Socorro',
        readTime: readTime || '5 min',
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
