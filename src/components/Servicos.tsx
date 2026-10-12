import Link from 'next/link'
import { Brain, Puzzle, Cloud, Zap, Users, BookOpen, ArrowRight, AlertTriangle } from 'lucide-react'

const services = [
  {
    icon: Puzzle,
    title: 'Orientação para Pais de Crianças Autistas (TEA)',
    description:
      'Suporte estruturado aos pais para organização de rotina visual, comunicação funcional e manejo de crises no ambiente natural.',
    href: '/autismo#servico-especializado',
    color: 'bg-primary-100 text-primary-700',
  },
  {
    icon: Zap,
    title: 'Atendimento Psicológico para Adultos com TDAH',
    description:
      'Psicoterapia em TCC focada em funções executivas, organização de tarefas e ambiente, manejo de procrastinação e regulação emocional.',
    href: '/tdah#servico-especializado',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    icon: Cloud,
    title: 'Atendimento para Ansiedade e Crises de Pânico',
    description:
      'Acompanhamento em Terapia Cognitivo-Comportamental para compreensão de gatilhos, regulação fisiológica e retomada gradual da autonomia.',
    href: '/ansiedade#servico-especializado',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    icon: Users,
    title: 'Orientação Parental e Relação Família-Escola',
    description:
      'Construção de combinados familiares sem recorrer a punições constantes e preparação técnica para reuniões e parceria com a escola.',
    href: '/orientacao-parental#servico-especializado',
    color: 'bg-accent-100 text-accent-700',
  },
  {
    icon: BookOpen,
    title: 'Apoio em Dislexia e Dificuldades de Aprendizagem',
    description:
      'Orientação sobre adaptação de tarefas escolares em casa, fortalecimento da autoestima e manejo da ansiedade de desempenho.',
    href: '/dislexia-aprendizagem#servico-especializado',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    icon: Brain,
    title: 'Psicoterapia Individual e Avaliação Inicial (Saúde Mental)',
    description:
      'Escuta clínica ética e sigilosa para adultos e famílias que buscam compreender demandas emocionais e planejar cuidados baseados em evidências.',
    href: '/saude-mental#servico-especializado',
    color: 'bg-secondary-100 text-secondary-700',
  },
]

export default function Servicos() {
  return (
    <section id="servicos" className="py-16 md:py-20 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-600">
            Cuidado Clínico Individualizado
          </span>
          <h2 className="section-title mt-1">Modalidades de Atendimento Psicológico</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Conheça nossas áreas de atuação clínica online, para quem cada acompanhamento é indicado e como funcionam as sessões
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.description}</p>
              </div>
              <Link
                href={service.href}
                className="text-xs font-semibold text-primary-700 hover:text-primary-800 inline-flex items-center gap-1 pt-3 border-t border-gray-100"
              >
                Ver como funciona e limites do serviço <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white rounded-2xl border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-3 max-w-2xl">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              <strong className="text-gray-800">Informação ética importante:</strong> O atendimento psicológico online ocorre mediante agendamento prévio e não substitui atendimento médico ou psiquiátrico de emergência (em crises agudas, ligue 188 — CVV ou 192 — SAMU).
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/servicos" className="btn-outline text-sm">
              Detalhes dos Serviços
            </Link>
            <Link href="/agendamento" className="btn-primary text-sm">
              Agende uma Conversa
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
