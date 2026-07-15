import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true, featured: true },
      orderBy: { createdAt: 'desc' },
      take: 5,
      select: {
        id: true,
        slug: true,
        title: true,
        excerpt: true,
        category: true,
        image: true,
        author: true,
        readTime: true,
        createdAt: true,
      },
    })

    return NextResponse.json({ success: true, posts })
  } catch (error) {
    console.error('Error fetching featured posts:', error)
    return NextResponse.json(
      { success: false, error: 'Erro ao buscar posts em destaque' },
      { status: 500 }
    )
  }
}
