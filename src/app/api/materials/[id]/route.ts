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

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const db = await getPrisma()
    if (!db) {
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 })
    }

    const material = await db.material.findUnique({ where: { id: params.id } })
    if (!material) {
      return NextResponse.json({ error: 'Material não encontrado' }, { status: 404 })
    }

    return NextResponse.json({ material, success: true })
  } catch (error) {
    console.error('Error fetching material:', error)
    return NextResponse.json({ error: 'Erro ao buscar material' }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const db = await getPrisma()
    if (!db) {
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 })
    }

    const body = await request.json()
    const { slug, name, description, price, pages, pdfUrl, previewUrl, category } = body

    const material = await db.material.update({
      where: { id: params.id },
      data: {
        ...(slug && { slug }),
        ...(name && { name }),
        ...(description !== undefined && { description }),
        ...(price !== undefined && { price: parseFloat(price) }),
        ...(pages !== undefined && { pages: parseInt(pages) }),
        ...(pdfUrl !== undefined && { pdfUrl }),
        ...(previewUrl !== undefined && { previewUrl }),
        ...(category && { category }),
      },
    })

    return NextResponse.json({ material, success: true })
  } catch (error) {
    console.error('Error updating material:', error)
    return NextResponse.json({ error: 'Erro ao atualizar material' }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const db = await getPrisma()
    if (!db) {
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 })
    }

    await db.material.delete({ where: { id: params.id } })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting material:', error)
    return NextResponse.json({ error: 'Erro ao deletar material' }, { status: 500 })
  }
}
