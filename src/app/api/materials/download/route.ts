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
    const download = searchParams.get('download')

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

    // If download=true, stream the PDF file
    if (download === 'true') {
      const response = await fetch(purchase.material.pdfUrl, {
        headers: {
          Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}`,
        },
      })

      if (!response.ok) {
        console.error('Failed to fetch blob:', response.status, response.statusText)
        return NextResponse.json({ error: 'Erro ao acessar arquivo' }, { status: 500 })
      }

      const pdfBuffer = await response.arrayBuffer()

      return new NextResponse(pdfBuffer, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="${purchase.material.name}.pdf"`,
          'Cache-Control': 'no-cache',
        },
      })
    }

    // Otherwise return material info as JSON
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