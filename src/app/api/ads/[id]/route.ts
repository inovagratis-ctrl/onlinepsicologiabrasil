import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const body = await request.json()
    const { title, position, code, active } = body

    const ad = await prisma.ad.update({
      where: { id },
      data: {
        title: title ?? undefined,
        position: position ?? undefined,
        code: code ?? undefined,
        active: active !== undefined ? active : undefined,
      },
    })

    return NextResponse.json({ ad, success: true })
  } catch (error) {
    console.error('Error updating ad:', error)
    return NextResponse.json({ error: 'Erro ao atualizar anúncio' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    await prisma.ad.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting ad:', error)
    return NextResponse.json({ error: 'Erro ao deletar anúncio' }, { status: 500 })
  }
}
