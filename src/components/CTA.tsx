import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Pronto para começar?
        </h2>
        <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
          Agende agora sua primeira sessão e dê o primeiro passo para o desenvolvimento do seu filho.
          Atendimento online para todo o Brasil.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/agendamento"
            className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg"
          >
            Agendar Sessão
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="https://wa.me/5568999035300"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-lg"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
