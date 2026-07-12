import { NextResponse } from 'next/server'

let prisma: any = null

async function getPrisma() {
  try {
    const { prisma: p } = await import('@/lib/prisma')
    prisma = p
    return prisma
  } catch {
    return null
  }
}

export async function GET() {
  try {
    const db = await getPrisma()
    if (!db) {
      return NextResponse.json({ posts: [], success: true })
    }

    const posts = await db.blogPost.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ posts, success: true })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json({ posts: [], success: true })
  }
}

export async function POST(request: Request) {
  try {
    const db = await getPrisma()
    if (!db) {
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 })
    }

    const body = await request.json()
    const { slug, title, excerpt, content, category, image, readTime, published } = body

    if (!slug || !title || !content) {
      return NextResponse.json({ error: 'Slug, título e conteúdo são obrigatórios' }, { status: 400 })
    }

    const existingPost = await db.blogPost.findUnique({ where: { slug } })
    if (existingPost) {
      return NextResponse.json({ error: 'Já existe um post com esse slug' }, { status: 400 })
    }

    const post = await db.blogPost.create({
      data: {
        slug,
        title,
        excerpt: excerpt || '',
        content,
        category: category || 'Geral',
        image,
        readTime: readTime || '5 min',
        published: published ?? false,
      },
    })

    return NextResponse.json({ post, success: true })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json({ error: 'Erro ao criar post' }, { status: 500 })
  }
}
