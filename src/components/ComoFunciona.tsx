import { Calendar, MessageCircle, Video, FileText, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Calendar,
    title: 'Agende Online',
    description: 'Escolha o melhor horário diretamente pelo site. Rápido e sem complicações.',
    step: '01',
  },
  {
    icon: MessageCircle,
    title: 'Primeiro Contato',
    description: 'Receba um questionário inicial para conhecer melhor as necessidades do paciente.',
    step: '02',
  },
  {
    icon: Video,
    title: 'Sessão por Vídeo',
    description: 'Atendimento sigiloso por videochamada segura. No conforto da sua casa.',
    step: '03',
  },
  {
    icon: FileText,
    title: 'Plano Personalizado',
    description: 'Receba um plano de intervenção baseado em evidências e adaptado ao seu caso.',
    step: '04',
  },
  {
    icon: CheckCircle,
    title: 'Acompanhamento',
    description: 'Sessões regulares com avaliação de progresso e ajustes quando necessário.',
    step: '05',
  },
]

export default function ComoFunciona() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Como Funciona</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Processo simples e acolhedor para iniciar o atendimento
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <step.icon className="w-8 h-8 text-primary-600" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-200" style={{ transform: 'translateX(-50%)' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
