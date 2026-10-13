import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const ads = await prisma.ad.findMany({
      where: { active: true },
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json({ ads, success: true })
  } catch (error) {
    console.error('Error fetching ads:', error)
    return NextResponse.json({ ads: [], success: true })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, position, code, active } = body

    if (!title || !code) {
      return NextResponse.json({ error: 'Título e Código são obrigatórios' }, { status: 400 })
    }

    const ad = await prisma.ad.create({
      data: {
        title,
        position: position || 'in-content',
        code,
        active: active !== undefined ? active : true,
      },
    })

    return NextResponse.json({ ad, success: true }, { status: 201 })
  } catch (error) {
    console.error('Error creating ad:', error)
    return NextResponse.json({ error: 'Erro ao criar anúncio' }, { status: 500 })
  }
}
