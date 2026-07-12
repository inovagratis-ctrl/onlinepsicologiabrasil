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

    const ads = await db.ad.findMany({
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
    const { position, title, code, active } = body

    if (!position || !code) {
      return NextResponse.json({ error: 'Posição e código são obrigatórios' }, { status: 400 })
    }

    const ad = await db.ad.create({
      data: {
        position,
        title: title || `Anúncio ${position}`,
        code,
        active: active ?? true,
      },
    })

    return NextResponse.json({ ad, success: true })
  } catch (error) {
    console.error('Error creating ad:', error)
    return NextResponse.json({ error: 'Erro ao criar anúncio' }, { status: 500 })
  }
}
