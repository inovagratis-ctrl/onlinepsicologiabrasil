import { Brain, Users, BookOpen, MessageCircle, Puzzle, Heart } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'Avaliação Comportamental',
    description: 'Análise completa do comportamento para identificar necessidades e potencializar habilidades.',
    color: 'bg-primary-100 text-primary-600',
  },
  {
    icon: Puzzle,
    title: 'Intervenção ABA Naturalista',
    description: 'Programas de ensino baseados em evidências, no ambiente natural da criança.',
    color: 'bg-secondary-100 text-secondary-600',
  },
  {
    icon: Users,
    title: 'Orientação a Pais',
    description: 'Capacitando famílias com estratégias eficazes para o dia a dia com TEA, TDAH e outras condições.',
    color: 'bg-accent-100 text-accent-600',
  },
  {
    icon: BookOpen,
    title: 'Avaliação de TDAH',
    description: 'Avaliação e encaminhamento para Transtorno do Déficit de Atenção com Hiperatividade.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: MessageCircle,
    title: 'Apoio em Dislexia',
    description: 'Estratégias de compensação e desenvolvimento de habilidades de leitura e escrita.',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: Heart,
    title: 'Atendimento Inclusivo',
    description: 'Acolhimento para crianças e adultos com Deficiência Intelectual e condições do neurodesenvolvimento.',
    color: 'bg-red-100 text-red-600',
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
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-primary-50 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-2">Sessão Individual</h4>
              <p className="text-3xl font-bold text-primary-600">R$ 170,00</p>
              <p className="text-sm text-gray-500 mt-1">50 minutos</p>
            </div>
            <div className="p-6 bg-secondary-50 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-2">Pacote Mensal (4 sessões)</h4>
              <p className="text-3xl font-bold text-secondary-600">R$ 140,00</p>
              <p className="text-sm text-gray-500 mt-1">por sessão</p>
            </div>
            <div className="p-6 bg-accent-50 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-2">Orientação a Pais</h4>
              <p className="text-3xl font-bold text-accent-600">R$ 120,00</p>
              <p className="text-sm text-gray-500 mt-1">50 minutos</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            * Valores para atendimento online. Consulte condições especiais.
          </p>
        </div>
      </div>
    </section>
  )
}
