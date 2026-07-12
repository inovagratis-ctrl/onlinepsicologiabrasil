import Link from 'next/link'
import { Brain, Heart, Shield, Video } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Cuidando do desenvolvimento com{' '}
              <span className="text-primary-600">ciência e afeto</span>
            </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Atendimento psicológico online especializado em Autismo (TEA), TDAH, 
              Deficiência Intelectual e Dislexia. Crianças e adultos.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/agendamento" className="btn-primary text-lg">
                Agendar Sessão
              </Link>
              <Link href="/#sobre" className="btn-outline text-lg">
                Saiba Mais
              </Link>
            </div>

            <div className="flex items-center gap-8 mt-10">
              <div className="flex items-center gap-2 text-gray-600">
                <Shield className="w-5 h-5 text-accent-500" />
                <span className="text-sm">CRP 20/07319</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Video className="w-5 h-5 text-accent-500" />
                <span className="text-sm">100% Online</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Heart className="w-5 h-5 text-accent-500" />
                <span className="text-sm">LGPD</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
              <Brain className="w-20 h-20 text-primary-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-center mb-4">Atendimento Especializado</h3>
              <p className="text-gray-600 text-center mb-6">
                Terapia baseada em evidências para crianças, adolescentes e adultos com Autismo.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg">
                  <div className="w-3 h-3 bg-primary-500 rounded-full" />
                  <span className="text-sm text-gray-700">Autismo, TDAH, Dislexia, DI</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg">
                  <div className="w-3 h-3 bg-primary-500 rounded-full" />
                  <span className="text-sm text-gray-700">Crianças e adultos</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg">
                  <div className="w-3 h-3 bg-primary-500 rounded-full" />
                  <span className="text-sm text-gray-700">Atendimento 100% online</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-200 rounded-full opacity-50 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary-200 rounded-full opacity-50 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
