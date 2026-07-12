import Link from 'next/link'
import { Brain, Heart, Shield, Video, Lock, Award, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-warm-50 to-secondary-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 backdrop-blur rounded-full text-sm text-primary-700 shadow-sm">
                <Shield className="w-4 h-4" />
                CRP 20/07319
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 backdrop-blur rounded-full text-sm text-secondary-700 shadow-sm">
                <Lock className="w-4 h-4" />
                100% Sigiloso
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 backdrop-blur rounded-full text-sm text-accent-700 shadow-sm">
                <Video className="w-4 h-4" />
                Online
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Cuide da sua saúde mental com{' '}
              <span className="text-primary-600">acolhimento e ciência</span>
            </h1>
            
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Atendimento psicológico online especializado em Autismo (TEA), TDAH, 
              Deficiência Intelectual e Dislexia. Para crianças e adultos.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/agendamento" className="btn-primary text-lg flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Agendar Primeira Sessão
              </Link>
              <Link href="/formulario" className="btn-outline text-lg">
                Avaliação Gratuita
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full" />
                <span>Atendimento sigiloso</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full" />
                <span>Conforme LGPD</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full" />
                <span>Videochamada segura</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
              <Brain className="w-20 h-20 text-primary-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-center mb-4">Primeira Sessão</h3>
              <p className="text-gray-600 text-center mb-6">
                Acolhimento, escuta qualificada e plano personalizado para você ou seu filho.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg">
                  <div className="w-3 h-3 bg-primary-500 rounded-full" />
                  <span className="text-sm text-gray-700">Avaliação comportamental completa</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg">
                  <div className="w-3 h-3 bg-primary-500 rounded-full" />
                  <span className="text-sm text-gray-700">Plano de intervenção personalizado</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg">
                  <div className="w-3 h-3 bg-primary-500 rounded-full" />
                  <span className="text-sm text-gray-700">Orientação a pais e cuidadores</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-warm-100 rounded-lg text-center">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Primeira sessão:</span> conheça o processo sem compromisso
                </p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-200 rounded-full opacity-30 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary-200 rounded-full opacity-30 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
