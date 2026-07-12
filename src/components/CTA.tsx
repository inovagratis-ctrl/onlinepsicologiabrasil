import Link from 'next/link'
import { ArrowRight, MessageCircle, Shield } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-4 mb-6">
          <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm">
            <Shield className="w-4 h-4" />
            100% Sigiloso
          </span>
          <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm">
            Conforme LGPD
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Pronto para começar sua jornada?
        </h2>
        <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
          Agende agora sua primeira sessão e descubra como podemos ajudar você ou seu filho. 
          Atendimento online para todo o Brasil.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/agendamento"
            className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg"
          >
            Agendar Primeira Sessão
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="https://wa.me/5568999035300?text=Olá! Gostaria de saber mais sobre o atendimento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Tirar Dúvidas no WhatsApp
          </a>
        </div>
        
        <p className="text-primary-200 text-sm mt-6">
          Primeira sessão: R$ 170,00 • Duração: 50 minutos
        </p>
      </div>
    </section>
  )
}
