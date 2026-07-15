import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const categories = await prisma.blogPost.groupBy({
      by: ['category'],
      where: { published: true },
      _count: { category: true },
      orderBy: { _count: { category: 'desc' } },
    })

    return NextResponse.json({
      success: true,
      categories: categories.map(c => ({
        name: c.category,
        count: c._count.category,
      })),
    })
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json(
      { success: false, error: 'Erro ao buscar categorias' },
      { status: 500 }
    )
  }
}
