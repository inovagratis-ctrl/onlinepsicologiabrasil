import { Brain, Users, BookOpen, MessageCircle, Puzzle, Heart, Sparkles, Cloud, Sun, Zap, Apple, Shield } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'Abordagem TCC',
    description: 'Terapia Cognitivo-Comportamental baseada em evidências para various demandas.',
    color: 'bg-primary-100 text-primary-600',
  },
  {
    icon: Puzzle,
    title: 'Intervenção ABA Naturalista',
    description: 'Programas de ensino baseados em evidências, no ambiente natural da criança.',
    color: 'bg-secondary-100 text-secondary-600',
  },
  {
    icon: Cloud,
    title: 'Ansiedade e Pânico',
    description: 'Tratamento para Transtorno de Ansiedade Generalizada e Síndrome do Pânico.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Sun,
    title: 'Depressão',
    description: 'Apoio e tratamento para pessoas que enfrentam depressão e tristeza persistente.',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: Zap,
    title: 'TDAH em Adultos',
    description: 'Avaliação e tratamento do Transtorno do Déficit de Atenção em adultos.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Apple,
    title: 'Compulsão Alimentar',
    description: 'Tratamento para compulsão alimentar e transtornos alimentares.',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: Shield,
    title: 'TOC',
    description: 'Tratamento para Transtorno Obsessivo-Compulsivo com TCC especializada.',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: Users,
    title: 'Orientação a Pais',
    description: 'Capacitando famílias com estratégias eficazes para o dia a dia.',
    color: 'bg-accent-100 text-accent-600',
  },
  {
    icon: MessageCircle,
    title: 'Autismo e Dislexia',
    description: 'Atendimento especializado para TEA, Deficiência Intelectual e Dislexia.',
    color: 'bg-pink-100 text-pink-600',
  },
]

export default function Servicos() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Serviços</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Atendimentos especializados para cada fase do desenvolvimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card hover:scale-105 transition-transform duration-200">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${service.color}`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Valores</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-6 bg-accent-50 rounded-xl border-2 border-accent-200">
              <span className="text-xs font-bold text-accent-600 uppercase">Promoção</span>
              <h4 className="font-semibold text-gray-800 mb-2 mt-2">Primeira Sessão</h4>
              <p className="text-3xl font-bold text-accent-600">R$ 100,00</p>
              <p className="text-sm text-gray-500 mt-1">60 minutos</p>
            </div>
            <div className="p-6 bg-primary-50 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-2">Sessão Individual</h4>
              <p className="text-3xl font-bold text-primary-600">R$ 140,00</p>
              <p className="text-sm text-gray-500 mt-1">50 minutos</p>
            </div>
            <div className="p-6 bg-secondary-50 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-2">Pacote Mensal (4 sessões)</h4>
              <p className="text-3xl font-bold text-secondary-600">R$ 120,00</p>
              <p className="text-sm text-gray-500 mt-1">por sessão</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-2">Orientação a Pais</h4>
              <p className="text-3xl font-bold text-purple-600">R$ 80,00</p>
              <p className="text-sm text-gray-500 mt-1">50 minutos</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            * Primeira sessão com valor especial para conhecer o trabalho
          </p>
        </div>
      </div>
    </section>
  )
}
