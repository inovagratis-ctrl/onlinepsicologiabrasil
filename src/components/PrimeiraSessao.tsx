import { MessageCircle, Search, FileText, Heart } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    title: 'Primeiro Contato',
    description: 'Entre em contato pelo WhatsApp ou formulário. Vamos conversar brevemente sobre suas necessidades.',
    detail: 'Sem compromisso. Tire todas as suas dúvidas.',
  },
  {
    icon: Search,
    title: 'Avaliação Inicial',
    description: 'Na primeira sessão, vamos nos conhecer. A psicóloga vai ouvir sua história e entender suas necessidades.',
    detail: 'Duração: 50 minutos. Valor: R$ 170,00',
  },
  {
    icon: FileText,
    title: 'Plano Personalizado',
    description: 'Com base na avaliação, será criado um plano de intervenção com objetivos claros e alcançáveis.',
    detail: 'Você recebe o plano por e-mail.',
  },
  {
    icon: Heart,
    title: 'Acompanhamento',
    description: 'Sessões regulares com avaliação de progresso. Ajustamos o plano conforme sua evolução.',
    detail: 'Flexibilidade de horários.',
  },
]

export default function PrimeiraSessao() {
  return (
    <section className="py-20 bg-warm-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Como Funciona a Primeira Sessão</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Entenda o processo de atendimento e se sinta segura para dar o primeiro passo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <p className="text-sm text-primary-600 font-medium">{step.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                O que esperar na primeira sessão?
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 mt-1">✓</span>
                  <span>Espaço acolhedor e sem julgamentos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 mt-1">✓</span>
                  <span>Escuta ativa e empática</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 mt-1">✓</span>
                  <span>Entendimento do histórico e dificuldades</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 mt-1">✓</span>
                  <span>Orientações iniciais práticas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 mt-1">✓</span>
                  <span>Definição de próximos passos</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary-50 rounded-xl p-6 text-center">
              <p className="text-gray-600 mb-4">
                "A primeira sessão é um momento de acolhimento. Não há pressão para se abrir imediatamente. 
                Vamos no seu ritmo."
              </p>
              <p className="font-semibold text-primary-700">— Psic. Maria do Socorro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
