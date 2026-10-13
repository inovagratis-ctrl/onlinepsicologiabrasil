import Link from 'next/link'
import { Brain, Puzzle, Cloud, Zap, Users, BookOpen, ArrowRight, AlertTriangle } from 'lucide-react'

const services = [
  {
    icon: Cloud,
    title: 'Depressão no Adulto & Ativação Comportamental',
    description:
      'Protocolos da TCC para superar a anedonia, quebrar ciclos de inércia e desesperança e restabelecer a rotina com propósito.',
    href: '/depressao#servico-especializado',
    color: 'bg-indigo-100 text-indigo-700',
  },
  {
    icon: Zap,
    title: 'Ansiedade, Preocupação Crônica & Pânico',
    description:
      'Manejo de crises agudas, regulação do sistema nervoso simpático, quebra de pensamentos catastróficos e agorafobia.',
    href: '/panico#servico-especializado',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    icon: Brain,
    title: 'Compulsão Alimentar & Comer Emocional',
    description:
      'Tratamento especializado do ciclo restrição-descontrole, fome emocional e técnicas de tolerância ao mal-estar da DBT.',
    href: '/compulsao-alimentar#servico-especializado',
    color: 'bg-rose-100 text-rose-700',
  },
  {
    icon: Puzzle,
    title: 'TOC: Exposição e Prevenção de Resposta (EPR)',
    description:
      'Tratamento padrão-ouro para desarmar obsessões e rituais de checagem, contaminação, simetria e pensamentos intrusivos tabus.',
    href: '/toc#servico-especializado',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    icon: Users,
    title: 'Narcisismo, Gaslighting & Relações Tóxicas',
    description:
      'Espaço seguro para adultos superarem vínculos abusivos, romperem a culpa crônica e resgatarem a autonomia pessoal.',
    href: '/relacionamentos-narcisismo#servico-especializado',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    icon: BookOpen,
    title: 'Acervo Clínico & Supervisão para Psicólogos',
    description:
      'Ferramentas práticas de consultório (RPDs, anamneses, pranchas visuais TCC) e supervisão clínica ética individual.',
    href: '/materiais-psicologos#servico-especializado',
    color: 'bg-emerald-100 text-emerald-700',
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
