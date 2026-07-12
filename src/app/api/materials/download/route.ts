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

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')

    if (!token) {
      return NextResponse.json({ error: 'Token de download inválido' }, { status: 400 })
    }

    const db = await getPrisma()
    if (!db) {
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 })
    }

    const purchase = await db.materialPurchase.findUnique({
      where: { downloadToken: token },
      include: { material: true },
    })

    if (!purchase) {
      return NextResponse.json({ error: 'Compra não encontrada' }, { status: 404 })
    }

    if (purchase.status !== 'approved') {
      return NextResponse.json({ error: 'Pagamento não aprovado' }, { status: 403 })
    }

    if (!purchase.material.pdfUrl) {
      return NextResponse.json({ error: 'PDF não disponível' }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      material: {
        name: purchase.material.name,
        pdfUrl: purchase.material.pdfUrl,
      },
    })
  } catch (error) {
    console.error('Error downloading:', error)
    return NextResponse.json({ error: 'Erro ao processar download' }, { status: 500 })
  }
}
