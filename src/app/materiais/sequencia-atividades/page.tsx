'use client'

import { Printer, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const sequences = [
  {
    title: 'Escovar os Dentes',
    icon: '🦷',
    steps: [
      { step: 1, text: 'Pegar a escova', icon: '🪥' },
      { step: 2, text: 'Colocar creme', icon: '🧴' },
      { step: 3, text: 'Escovar os dentes', icon: '😁' },
      { step: 4, text: 'Enxaguar a boca', icon: '💧' },
      { step: 5, text: 'Lavar a escova', icon: '🚿' },
    ],
  },
  {
    title: 'Fazer um Lanche',
    icon: '🍎',
    steps: [
      { step: 1, text: 'Lavar as mãos', icon: '🧼' },
      { step: 2, text: 'Pegar o lanche', icon: '🥪' },
      { step: 3, text: 'Sentar à mesa', icon: '🪑' },
      { step: 4, text: 'Comer', icon: '🍽️' },
      { step: 5, text: 'Guardar a louça', icon: '📦' },
    ],
  },
  {
    title: 'Sair de Casa',
    icon: '🏠',
    steps: [
      { step: 1, text: 'Vestir as roupas', icon: '👕' },
      { step: 2, text: 'Colocar o sapato', icon: '👟' },
      { step: 3, text: 'Pegar a mochila', icon: '🎒' },
      { step: 4, text: 'Despedir-se', icon: '👋' },
      { step: 5, text: 'Fechar a porta', icon: '🚪' },
    ],
  },
  {
    title: 'Tomar Banho',
    icon: '🛁',
    steps: [
      { step: 1, text: 'Entrar no banho', icon: '🚶' },
      { step: 2, text: 'Molhar o corpo', icon: '💧' },
      { step: 3, text: 'Passar sabonete', icon: '🧼' },
      { step: 4, text: 'Enxaguar', icon: '🚿' },
      { step: 5, text: 'Secar com toalha', icon: ' towel' },
    ],
  },
]

export default function SequenciaAtividades() {
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
          <h1 className="text-xl font-bold text-gray-800">Sequência de Atividades</h1>
          <button onClick={handlePrint} className="flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600">
            <Printer className="w-5 h-5" />
            Imprimir
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 print:py-0 print:px-0">
        <div className="bg-white rounded-2xl shadow-lg p-8 print:shadow-none print:rounded-none print:p-4">
          <div className="text-center mb-8 print:mb-4">
            <h1 className="text-3xl font-bold text-primary-600 print:text-2xl">📋 Sequência de Atividades</h1>
            <p className="text-gray-500 mt-2 print:text-sm">Passo a passo para atividades do dia a dia</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 print:gap-4">
            {sequences.map((sequence, index) => (
              <div key={index} className="bg-primary-50 rounded-xl p-5 print:p-3">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl">{sequence.icon}</span>
                  <h3 className="text-lg font-bold text-gray-800">{sequence.title}</h3>
                </div>
                <div className="space-y-2">
                  {sequence.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-3 print:p-2">
                      <span className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </span>
                      <span className="text-xl">{step.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{step.text}</span>
                      <div className="ml-auto w-5 h-5 border-2 border-gray-300 rounded print:w-4 print:h-4" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-warm-100 rounded-xl p-4 print:mt-4">
            <h4 className="font-semibold text-gray-700 mb-2">📋 Como usar:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Imprima cada sequência em uma folha separada</li>
              <li>• Coloque em local visível (banheiro, cozinha, etc)</li>
              <li>• Ensine a criança a seguir os passos na ordem</li>
              <li>• Use os ícones como guia visual</li>
              <li>• Pratique até a criança conseguir sozinha</li>
            </ul>
          </div>

          <div className="mt-8 text-center text-sm text-gray-400 print:mt-4">
            <p>Psicologia Online Brasil • CRP 20/07319</p>
          </div>
        </div>
      </div>
    </div>
  )
}
