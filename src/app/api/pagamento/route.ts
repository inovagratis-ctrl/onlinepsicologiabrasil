import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Mercado Pago configuration
// You need to create an account at https://mercadopago.com.br
// and get your access token
const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN || 'YOUR_ACCESS_TOKEN'
const MP_API_URL = 'https://api.mercadopago.com/v1'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { appointmentId, amount, description, email } = body

    // Validate
    if (!appointmentId || !amount) {
      return NextResponse.json(
        { error: 'Dados incompletos para pagamento' },
        { status: 400 }
      )
    }

    // Create payment in Mercado Pago
    const paymentData = {
      transaction_amount: parseFloat(amount),
      description: description || 'Sessão de Psicologia Online',
      payment_method_id: 'pix', // You can change to 'credit_card' or 'boleto'
      payer: {
        email: email,
      },
      external_reference: appointmentId,
    }

    // If you have a valid access token, make the real API call
    if (MP_ACCESS_TOKEN && MP_ACCESS_TOKEN !== 'YOUR_ACCESS_TOKEN') {
      const response = await fetch(`${MP_API_URL}/payments`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${MP_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      })

      const payment = await response.json()

      if (payment.id) {
        // Update appointment with payment info
        await prisma.appointment.update({
          where: { id: appointmentId },
          data: {
            paymentId: payment.id.toString(),
            paymentStatus: 'pending',
          },
        })

        return NextResponse.json({
          success: true,
          paymentId: payment.id,
          qrCode: payment.point_of_interaction?.transaction_data?.qr_code,
          qrCodeBase64: payment.point_of_interaction?.transaction_data?.qr_code_base64,
          ticketUrl: payment.ticket_url,
        })
      }
    }

    // Mock response for testing (when no MP token is configured)
    return NextResponse.json({
      success: true,
      message: 'Pagamento configurado. Configure MP_ACCESS_TOKEN para pagamentos reais.',
      mock: true,
      paymentId: `MOCK_${Date.now()}`,
    })

  } catch (error) {
    console.error('Error processing payment:', error)
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

    if (!paymentId) {
      return NextResponse.json(
        { error: 'Payment ID required' },
        { status: 400 }
      )
    }

    // Check payment status
    if (MP_ACCESS_TOKEN && MP_ACCESS_TOKEN !== 'YOUR_ACCESS_TOKEN') {
      const response = await fetch(`${MP_API_URL}/payments/${paymentId}`, {
        headers: {
          'Authorization': `Bearer ${MP_ACCESS_TOKEN}`,
        },
      })

      const payment = await response.json()

      // Update appointment status based on payment
      if (payment.status === 'approved') {
        await prisma.appointment.update({
          where: { id: payment.external_reference },
          data: { paymentStatus: 'paid', status: 'confirmed' },
        })
      }

      return NextResponse.json({
        success: true,
        status: payment.status,
        statusDetail: payment.status_detail,
      })
    }

    return NextResponse.json({
      success: true,
      status: 'pending',
      message: 'Configure MP_ACCESS_TOKEN para verificar pagamentos reais',
    })

  } catch (error) {
    console.error('Error checking payment:', error)
    return NextResponse.json(
      { error: 'Erro ao verificar pagamento' },
      { status: 500 }
    )
  }
}
