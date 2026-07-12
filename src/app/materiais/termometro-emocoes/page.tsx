'use client'

import { Printer, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const emotions = [
  { level: 1, label: 'Muito Tranquilo', emoji: '😊', color: 'bg-green-400', textColor: 'text-green-800', description: 'Estou bem, calmo, feliz' },
  { level: 2, label: 'Tranquilo', emoji: '😌', color: 'bg-green-300', textColor: 'text-green-700', description: 'Estou bem, mas não muito animado' },
  { level: 3, label: 'Neutro', emoji: '😐', color: 'bg-yellow-300', textColor: 'text-yellow-700', description: 'Não estou nem bem nem mal' },
  { level: 4, label: 'Preocupado', emoji: '😟', color: 'bg-orange-300', textColor: 'text-orange-700', description: 'Estou com um pouco de medo ou preocupação' },
  { level: 5, label: 'Triste', emoji: '😢', color: 'bg-blue-300', textColor: 'text-blue-700', description: 'Estou triste, com vontade de chorar' },
  { level: 6, label: 'Com Raiva', emoji: '😠', color: 'bg-red-300', textColor: 'text-red-700', description: 'Estou com raiva, algo me deixou bravinho' },
  { level: 7, label: 'Muito Agitado', emoji: '🤬', color: 'bg-red-400', textColor: 'text-red-800', description: 'Não consigo parar, estou muito agitado' },
]

const strategies = [
  { emotion: 'Tranquilo', strategies: ['Continue o que está fazendo', 'Aproveite para brincar'] },
  { emotion: 'Preocupado', strategies: ['Respirar fundo 3 vezes', 'Conversar com alguém de confiança', 'Abracar um bichinho de pelúcia'] },
  { emotion: 'Triste', strategies: ['É normal ficar triste às vezes', 'Ouvir uma música que gosta', 'Desenhar o que está sentindo'] },
  { emotion: 'Com Raiva', strategies: ['Sair do lugar por 5 minutos', 'Bater em uma almofada', 'Contar até 10 devagar'] },
  { emotion: 'Muito Agitado', strategies: ['Encontrar um lugar tranquilo', 'Usar fone de ouvido', 'Apertar uma bola de estresse'] },
]

export default function TermometroEmocoes() {
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
          <h1 className="text-xl font-bold text-gray-800">Termômetro de Emoções</h1>
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
              🌡️ Meu Termômetro de Emoções
            </h1>
            <p className="text-gray-500 mt-2 print:text-sm">
              Aponte para como você está se sentindo agora
            </p>
          </div>

          {/* Instructions */}
          <div className="bg-primary-50 rounded-xl p-4 mb-6 print:mb-4 print:bg-gray-100">
            <h3 className="font-semibold text-primary-700 mb-2">📋 Instruções:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Pergunte: "Como você está se sentindo agora?"</li>
              <li>• Deixe a criança apontar o nível no termômetro</li>
              <li>• Converse sobre o que ela está sentindo</li>
              <li>• Junto, escolham uma estratégia para se sentir melhor</li>
            </ul>
          </div>

          {/* Thermometer */}
          <div className="flex flex-col-reverse gap-3 mb-8 print:gap-2 print:mb-4">
            {emotions.map((emotion) => (
              <div
                key={emotion.level}
                className={`flex items-center gap-4 p-4 rounded-xl ${emotion.color} ${emotion.textColor} print:p-2`}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white/50 rounded-full text-3xl print:w-10 print:h-10 print:text-2xl">
                  {emotion.emoji}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-lg print:text-base">
                    Nível {emotion.level} - {emotion.label}
                  </div>
                  <div className="text-sm opacity-80">{emotion.description}</div>
                </div>
                <div className="w-8 h-8 border-2 border-current rounded print:w-6 print:h-6" />
              </div>
            ))}
          </div>

          {/* Strategies */}
          <div className="bg-blue-50 rounded-xl p-6 print:p-4 print:bg-gray-50">
            <h3 className="font-bold text-lg text-gray-800 mb-4 print:mb-2">
              💡 O que posso fazer quando estou...
            </h3>
            <div className="grid md:grid-cols-2 gap-4 print:gap-2">
              {strategies.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 print:p-2">
                  <h4 className="font-semibold text-primary-600 mb-2">{item.emotion}</h4>
                  <ul className="space-y-1">
                    {item.strategies.map((strategy, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-accent-500">•</span>
                        {strategy}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
