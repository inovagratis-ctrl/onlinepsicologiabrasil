'use client'

import { Printer, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const socialSkills = [
  {
    title: 'Iniciar uma Conversa',
    icon: '👋',
    steps: [
      'Olhe para a pessoa (contato visual por 2-3 segundos)',
      'Diga "Oi" ou "Olá"',
      'Faça uma pergunta simples: "Tudo bem?"',
      'Espere a resposta',
      'Continue com outro assunto se quiser',
    ],
    example: '"Oi, tudo bem? O que você está fazendo?"',
    tips: ['Comece com pessoas que você conhece', 'Pratique em frente ao espelho'],
  },
  {
    title: 'Manter uma Conversa',
    icon: '💬',
    steps: [
      'Ouça o que a pessoa está dizendo',
      'Responda com algo relacionado',
      'Faça perguntas sobre o assunto',
      'Compartilhe algo sobre você também',
      'Observe se a pessoa está interessada',
    ],
    example: '"Legal! E você gosta de...?"',
    tips: ['Não fale só de você', 'Observe a linguagem corporal'],
  },
  {
    title: 'Pedir Ajuda',
    icon: '🙋',
    steps: [
      'Espere um momento oportuno',
      'Olhe para a pessoa',
      'Diga o que precisa de forma clara',
      'Agradeça quando receber a ajuda',
    ],
    example: '"Por favor, pode me ajudar com isso?"',
    tips: ['Não tenha vergonha de pedir', 'Agradeça sempre'],
  },
  {
    title: 'Dizer "Não"',
    icon: '🚫',
    steps: [
      'Ouça o pedido',
      'Pense se pode ou quer fazer',
      'Se não, diga "não" de forma educada',
      'Explique brevemente o motivo (se quiser)',
    ],
    example: '"Desculpa, não posso agora. Depois eu ajudo."',
    tips: ['É normal dizer não', 'Não precisa dar muitas desculpas'],
  },
  {
    title: 'Compartilhar',
    icon: '🤝',
    steps: [
      'Observe se a pessoa quer brincar/juntar',
      'Ofereça algo: "Quer brincar junto?"',
      'Espere a resposta',
      'Compartilhe os materiais',
    ],
    example: '"Quer jogar comigo? Tenho um jogo legal!"',
    tips: ['Comece com uma coisa só', 'Espere sua vez'],
  },
  {
    title: 'Esperar sua Vez',
    icon: '⏳',
    steps: [
      'Observe que outra pessoa está usando algo',
      'Espere pacientemente',
      'Não interrompa',
      'Quando terminar, pergunte: "Posso usar agora?"',
    ],
    example: '"Posso usar quando você terminar?"',
    tips: ['Conte até 10 se estiver com pressa', 'Encontre algo para fazer enquanto espera'],
  },
]

export default function InteracaoSocial() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm print:hidden">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/materiais" className="flex items-center gap-2 text-gray-600 hover:text-primary-600">
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Link>
          <h1 className="text-xl font-bold text-gray-800">Roteiro de Interação Social</h1>
          <button onClick={handlePrint} className="flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600">
            <Printer className="w-5 h-5" />
            Imprimir
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 print:py-0 print:px-0">
        <div className="bg-white rounded-2xl shadow-lg p-8 print:shadow-none print:rounded-none print:p-4">
          <div className="text-center mb-8 print:mb-4">
            <h1 className="text-3xl font-bold text-primary-600 print:text-2xl">🤝 Roteiro de Interação Social</h1>
            <p className="text-gray-500 mt-2 print:text-sm">Como se comunicar e interagir com outras pessoas</p>
          </div>

          <div className="space-y-6 print:space-y-4">
            {socialSkills.map((skill, index) => (
              <div key={index} className="bg-primary-50 rounded-xl p-6 print:p-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800">{skill.title}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Passos:</h4>
                    <ol className="space-y-1">
                      {skill.steps.map((step, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-primary-500 font-bold">{i + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <div className="bg-white rounded-lg p-3 mb-3">
                      <h4 className="font-semibold text-gray-700 mb-1">Exemplo:</h4>
                      <p className="text-sm text-primary-600 italic">{skill.example}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <h4 className="font-semibold text-gray-700 mb-1">Dicas:</h4>
                      <ul className="space-y-1">
                        {skill.tips.map((tip, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-accent-500">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-gray-400 print:mt-4">
            <p>Psicologia Online Brasil • CRP 20/07319</p>
          </div>
        </div>
      </div>
    </div>
  )
}
