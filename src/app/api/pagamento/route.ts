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

const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN
const MP_API_URL = 'https://api.mercadopago.com'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { appointmentId, amount, description, email, title } = body

    console.log('Payment request:', { appointmentId, amount, email })

    if (!appointmentId || !amount) {
      return NextResponse.json(
        { error: 'Dados incompletos para pagamento' },
        { status: 400 }
      )
    }

    if (!MP_ACCESS_TOKEN) {
      console.error('MP_ACCESS_TOKEN not configured')
      return NextResponse.json(
        { error: 'Mercado Pago não configurado' },
        { status: 500 }
      )
    }

    console.log('MP_ACCESS_TOKEN exists:', MP_ACCESS_TOKEN.substring(0, 20) + '...')

    const preferenceData = {
      items: [
        {
          id: appointmentId,
          title: title || description || 'Sessão de Psicologia Online',
          quantity: 1,
          unit_price: parseFloat(amount),
        },
      ],
      payer: {
        email: email || 'paciente@email.com',
      },
      external_reference: appointmentId,
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://onlinepsicologiabrasil.vercel.app'}/agendamento?status=sucesso`,
        failure: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://onlinepsicologiabrasil.vercel.app'}/agendamento?status=erro`,
        pending: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://onlinepsicologiabrasil.vercel.app'}/agendamento?status=pendente`,
      },
      auto_return: 'approved',
      payment_methods: {
        installments: 1,
      },
    }

    console.log('Calling Mercado Pago API...')

    const response = await fetch(`${MP_API_URL}/checkout/preferences`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(preferenceData),
    })

    console.log('Mercado Pago response status:', response.status)

    const preference = await response.json()

    console.log('Mercado Pago response:', JSON.stringify(preference).substring(0, 500))

    if (preference.id) {
      const db = await getPrisma()
      if (db) {
        try {
          await db.appointment.update({
            where: { id: appointmentId },
            data: {
              paymentId: preference.id,
              paymentStatus: 'pending',
            },
          })
        } catch {
          // Database not available, continue
        }
      }

      return NextResponse.json({
        success: true,
        preferenceId: preference.id,
        initPoint: preference.init_point,
        sandboxInitPoint: preference.sandbox_init_point,
      })
    }

    console.error('Mercado Pago error:', JSON.stringify(preference))
    return NextResponse.json(
      { 
        error: 'Erro ao criar preferência de pagamento', 
        details: preference.cause || preference.message || preference,
        status: response.status 
      },
      { status: 400 }
    )

  } catch (error) {
    console.error('Error creating payment preference:', error)
    return NextResponse.json(
      { error: 'Erro ao processar pagamento' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const paymentId = searchParams.get('paymentId')

    if (!paymentId || !MP_ACCESS_TOKEN) {
      return NextResponse.json(
        { error: 'Payment ID required' },
        { status: 400 }
      )
    }

    const response = await fetch(`${MP_API_URL}/payments/${paymentId}`, {
      headers: {
        'Authorization': `Bearer ${MP_ACCESS_TOKEN}`,
      },
    })

    const payment = await response.json()

    if (payment.status === 'approved') {
      const db = await getPrisma()
      if (db) {
        try {
          await db.appointment.update({
            where: { id: payment.external_reference },
            data: { paymentStatus: 'paid', status: 'confirmed' },
          })
        } catch {
          // Database not available
        }
      }
    }

    return NextResponse.json({
      success: true,
      status: payment.status,
      statusDetail: payment.status_detail,
    })

  } catch (error) {
    console.error('Error checking payment:', error)
    return NextResponse.json(
      { error: 'Erro ao verificar pagamento' },
      { status: 500 }
    )
  }
}
