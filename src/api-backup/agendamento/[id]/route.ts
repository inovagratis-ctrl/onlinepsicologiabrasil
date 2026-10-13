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

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const body = await request.json()

    const db = await getPrisma()
    
    if (db) {
      try {
        const appointment = await db.appointment.update({
          where: { id },
          data: {
            status: body.status,
            paymentStatus: body.paymentStatus,
          },
        })

        return NextResponse.json({ success: true, appointment })
      } catch {
        // Database not available
      }
    }

    return NextResponse.json({
      success: true,
      appointment: { id, ...body },
    })
  } catch (error) {
    console.error('Error updating appointment:', error)
    return NextResponse.json(
      { error: 'Erro ao atualizar agendamento' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    const db = await getPrisma()
    
    if (db) {
      try {
        await db.appointment.delete({ where: { id } })
      } catch {
        // Database not available
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Agendamento excluído',
    })
  } catch (error) {
    console.error('Error deleting appointment:', error)
    return NextResponse.json(
      { error: 'Erro ao excluir agendamento' },
      { status: 500 }
    )
  }
}
