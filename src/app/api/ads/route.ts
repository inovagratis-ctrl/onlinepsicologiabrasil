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
      console.log('[Ads API] Prisma not available')
      return NextResponse.json({ ads: [], success: true })
    }

    const ads = await db.ad.findMany({
      where: { active: true },
      orderBy: { createdAt: 'desc' },
    })

    console.log('[Ads API] Found', ads.length, 'active ads:', ads.map((a: any) => ({ id: a.id, position: a.position, title: a.title, active: a.active, hasCode: !!a.code })))
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
        active: active !== undefined ? active : true,
      },
    })

    console.log('[Ads API] Created ad:', ad.id, ad.position, ad.title, 'active:', ad.active)
    return NextResponse.json({ ad, success: true })
  } catch (error) {
    console.error('Error creating ad:', error)
    return NextResponse.json({ error: 'Erro ao criar anúncio' }, { status: 500 })
  }
}
