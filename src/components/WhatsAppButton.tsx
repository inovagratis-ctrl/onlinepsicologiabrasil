'use client'

import { MessageCircle } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

export default function WhatsAppButton() {
  const phoneNumber = '5568999035300'
  const message = encodeURIComponent(
    'Olá! Vim pelo portal Psicologia Direta e gostaria de tirar uma dúvida sobre o atendimento online.'
  )

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('click_whatsapp', { location: 'floating_button' })}
      className="whatsapp-float bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-colors"
      aria-label="Tirar dúvidas via WhatsApp"
      title="Tirar dúvidas via WhatsApp (não envie dados clínicos sensíveis)"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  )
}
