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

    const ad = await db.ad.findUnique({ where: { id: params.id } })
    if (!ad) {
      return NextResponse.json({ error: 'Anúncio não encontrado' }, { status: 404 })
    }

    return NextResponse.json({ ad, success: true })
  } catch (error) {
    console.error('Error fetching ad:', error)
    return NextResponse.json({ error: 'Erro ao buscar anúncio' }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const db = await getPrisma()
    if (!db) {
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 })
    }

    const body = await request.json()
    const { position, title, code, active } = body

    const ad = await db.ad.update({
      where: { id: params.id },
      data: {
        ...(position && { position }),
        ...(title !== undefined && { title }),
        ...(code && { code }),
        ...(active !== undefined && { active }),
      },
    })

    return NextResponse.json({ ad, success: true })
  } catch (error) {
    console.error('Error updating ad:', error)
    return NextResponse.json({ error: 'Erro ao atualizar anúncio' }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const db = await getPrisma()
    if (!db) {
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 })
    }

    await db.ad.delete({ where: { id: params.id } })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting ad:', error)
    return NextResponse.json({ error: 'Erro ao deletar anúncio' }, { status: 500 })
  }
}
