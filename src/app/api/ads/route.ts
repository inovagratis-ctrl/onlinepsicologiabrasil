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
      return NextResponse.json({ ads: [], success: true })
    }

    const ads = await db.adSlot.findMany({
      where: { active: true },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ ads, success: true })
  } catch (error) {
    console.error('Error fetching ads:', error)
    return NextResponse.json({ ads: [], success: true })
  }
}

export async function POST(request: Request) {
  try {
    const db = await getPrisma()
    if (!db) {
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 })
    }

    const body = await request.json()
    const { name, slotId, position, active } = body

    if (!name || !slotId) {
      return NextResponse.json({ error: 'Nome e Slot ID são obrigatórios' }, { status: 400 })
    }

    const ad = await prisma.adSlot.create({
      data: {
        name,
        slotId,
        position: position || 'in-content',
        active: active ?? true,
      },
    })

    return NextResponse.json({ ad, success: true })
  } catch (error) {
    console.error('Error creating ad:', error)
    return NextResponse.json({ error: 'Erro ao criar anúncio' }, { status: 500 })
  }
}