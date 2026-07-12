'use client'

import { Printer, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const routineItems = [
  { activity: 'Acordar', icon: '☀️', color: 'bg-yellow-100' },
  { activity: 'Escovar os dentes', icon: '🦷', color: 'bg-blue-100' },
  { activity: 'Tomar banho', icon: '🚿', color: 'bg-blue-100' },
  { activity: 'Vestir-se', icon: '👕', color: 'bg-purple-100' },
  { activity: 'Café da manhã', icon: '🥣', color: 'bg-orange-100' },
  { activity: 'Escola / Atividades', icon: '📚', color: 'bg-green-100' },
  { activity: 'Almoço', icon: '🍽️', color: 'bg-orange-100' },
  { activity: 'Descanso', icon: '😴', color: 'bg-indigo-100' },
  { activity: 'Brincar', icon: '🎮', color: 'bg-pink-100' },
  { activity: 'Lanche', icon: '🍎', color: 'bg-orange-100' },
  { activity: 'Atividades / Terapia', icon: '🧩', color: 'bg-teal-100' },
  { activity: 'Jantar', icon: '🍽️', color: 'bg-orange-100' },
  { activity: 'Banho', icon: '🛁', color: 'bg-blue-100' },
  { activity: 'Brincadeiras tranquilas', icon: '🧸', color: 'bg-pink-100' },
  { activity: 'História / Leitura', icon: '📖', color: 'bg-green-100' },
  { activity: 'Dormir', icon: '🌙', color: 'bg-indigo-100' },
]

export default function QuadroRotina() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - hidden on print */}
      <div className="bg-white shadow-sm print:hidden">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/materiais" className="flex items-center gap-2 text-gray-600 hover:text-primary-600">
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Link>
          <h1 className="text-xl font-bold text-gray-800">Quadro de Rotina Diária</h1>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600"
          >
            <Printer className="w-5 h-5" />
            Imprimir
          </button>
        </div>
      </div>

      {/* Material - Printable */}
      <div className="max-w-4xl mx-auto px-4 py-8 print:py-0 print:px-0">
        <div className="bg-white rounded-2xl shadow-lg p-8 print:shadow-none print:rounded-none print:p-4">
          {/* Title */}
          <div className="text-center mb-8 print:mb-4">
            <h1 className="text-3xl font-bold text-primary-600 print:text-2xl">
              🗓️ Meu Quadro de Rotina
            </h1>
            <p className="text-gray-500 mt-2 print:text-sm">
              Escreva os horários do seu filho e complete com as atividades
            </p>
          </div>

          {/* Instructions */}
          <div className="bg-primary-50 rounded-xl p-4 mb-6 print:mb-4 print:bg-gray-100">
            <h3 className="font-semibold text-primary-700 mb-2">📋 Instruções:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Escreva o horário de cada atividade na coluna ao lado</li>
              <li>• Adicione ou remova atividades conforme a rotina do seu filho</li>
              <li>• Use cores diferentes para facilitar a visualização</li>
              <li>• Coloque o quadro em local visível para a criança</li>
            </ul>
          </div>

          {/* Routine Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:gap-3">
            {routineItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 rounded-xl ${item.color} print:p-2`}
              >
                <div className="text-4xl print:text-3xl">{item.icon}</div>
                <div className="flex-1">
                  <div className="text-lg font-semibold text-gray-800 print:text-base">{item.activity}</div>
                </div>
                <div className="w-24 print:w-20">
                  <input
                    type="text"
                    placeholder="__:__"
                    className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg text-center font-mono text-lg print:border-gray-400 print:p-1"
                    readOnly
                  />
                </div>
                <div className="w-6 h-6 border-2 border-gray-300 rounded print:w-5 print:h-5" />
              </div>
            ))}
          </div>

          {/* Custom Section */}
          <div className="mt-8 print:mt-4 border-2 border-dashed border-gray-300 rounded-xl p-6 print:p-4">
            <h3 className="font-semibold text-gray-700 mb-4 print:mb-2">
              ✏️ Adicione suas atividades personalizadas:
            </h3>
            <div className="space-y-3 print:space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-16 print:w-14">
                    <input
                      type="text"
                      placeholder="__:__"
                      className="w-full px-2 py-1 border-2 border-dashed border-gray-300 rounded text-center font-mono text-sm print:border-gray-400"
                      readOnly
                    />
                  </div>
                  <div className="flex-1 border-b-2 border-dashed border-gray-300 h-8 print:border-gray-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="mt-6 bg-warm-100 rounded-xl p-4 print:mt-3 print:bg-gray-100">
            <h4 className="font-semibold text-gray-700 mb-2">💡 Dicas:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Mantenha horários fixos sempre que possível</li>
              <li>• Use ícones visuais para crianças que ainda não leem</li>
              <li>• Inclua a criança na organização da rotina</li>
              <li>• Celebre quando a rotina for cumprida!</li>
            </ul>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-400 print:mt-4">
            <p>Psicologia Online Brasil • CRP 20/07319</p>
            <p>www.psicologiabrasilonline.com.br</p>
          </div>
        </div>
      </div>
    </div>
  )
}
