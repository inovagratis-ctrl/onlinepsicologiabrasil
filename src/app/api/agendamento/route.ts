import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const { date, time, sessionType, name, email, phone, patientName, patientAge, notes } = body

    // Validate required fields
    if (!date || !time || !sessionType || !name || !email || !phone) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos' },
        { status: 400 }
      )
    }

    // Save to database
    const appointment = await prisma.appointment.create({
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

    return NextResponse.json(
      { 
        success: true, 
        message: 'Agendamento realizado com sucesso!',
        appointmentId: appointment.id
      },
      { status: 201 }
    )
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
    const appointments = await prisma.appointment.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    return NextResponse.json({ 
      success: true,
      appointments 
    })
  } catch (error) {
    console.error('Error fetching appointments:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar agendamentos' },
      { status: 500 }
    )
  }
}
