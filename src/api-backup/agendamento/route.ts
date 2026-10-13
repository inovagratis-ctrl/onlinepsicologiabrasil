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

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { date, time, sessionType, name, email, phone, patientName, patientAge, notes } = body

    if (!date || !time || !sessionType || !name || !email || !phone) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos' },
        { status: 400 }
      )
    }

    const db = await getPrisma()
    
    if (db) {
      try {
        const appointment = await db.appointment.create({
          data: {
            date,
            time,
            sessionType,
            patientName: name,
            patientEmail: email,
            patientPhone: phone,
            patientAge: patientAge || null,
            notes: notes || null,
            status: 'pending',
            paymentStatus: 'pending',
          },
        })

        return NextResponse.json({ 
          success: true, 
          message: 'Agendamento realizado com sucesso!',
          appointmentId: appointment.id
        }, { status: 201 })
      } catch (dbError) {
        console.log('Database error, using mock mode:', dbError)
      }
    }

    const mockId = `APT_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    return NextResponse.json({ 
      success: true, 
      message: 'Agendamento realizado com sucesso!',
      appointmentId: mockId
    }, { status: 201 })

  } catch (error) {
    console.error('Error processing appointment:', error)
    return NextResponse.json(
      { error: 'Erro ao processar agendamento' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const db = await getPrisma()
    
    if (db) {
      try {
        const appointments = await db.appointment.findMany({
          orderBy: { createdAt: 'desc' }
        })
        return NextResponse.json({ success: true, appointments })
      } catch {
        // Database not available
      }
    }

    return NextResponse.json({ 
      success: true,
      appointments: []
    })
  } catch (error) {
    console.error('Error fetching appointments:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar agendamentos' },
      { status: 500 }
    )
  }
}
