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
      return NextResponse.json({ materials: [], success: true })
    }

    const materials = await db.material.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ materials, success: true })
  } catch (error) {
    console.error('Error fetching materials:', error)
    return NextResponse.json({ materials: [], success: true })
  }
}

export async function POST(request: Request) {
  try {
    const db = await getPrisma()
    if (!db) {
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 })
    }

    const body = await request.json()
    const { slug, name, description, price, pages, pdfUrl, previewUrl, category } = body

    if (!slug || !name || !price) {
      return NextResponse.json({ error: 'Slug, nome e preço são obrigatórios' }, { status: 400 })
    }

    const existing = await db.material.findUnique({ where: { slug } })
    if (existing) {
      return NextResponse.json({ error: 'Já existe um material com esse slug' }, { status: 400 })
    }

    const material = await db.material.create({
      data: {
        slug,
        name,
        description: description || '',
        price: parseFloat(price),
        pages: parseInt(pages) || 0,
        pdfUrl,
        previewUrl,
        category: category || 'Geral',
      },
    })

    return NextResponse.json({ material, success: true })
  } catch (error) {
    console.error('Error creating material:', error)
    return NextResponse.json({ error: 'Erro ao criar material' }, { status: 500 })
  }
}
