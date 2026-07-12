'use client'

import { Printer, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const communicationCards = [
  // Necessidades Básicas
  { category: 'Necessidades', items: [
    { icon: '💧', label: 'Água' },
    { icon: '🍽️', label: 'Comer' },
    { icon: '🚽', label: 'Banheiro' },
    { icon: '😴', label: 'Dormir' },
    { icon: '🧥', label: 'Frio' },
    { icon: '🥵', label: 'Calor' },
  ]},
  // Sentimentos
  { category: 'Sentimentos', items: [
    { icon: '😊', label: 'Feliz' },
    { icon: '😢', label: 'Triste' },
    { icon: '😠', label: 'Bravo' },
    { icon: '😨', label: 'Com medo' },
    { icon: '🤢', label: 'Enjoado' },
    { icon: '❤️', label: 'Gosto de você' },
  ]},
  // Ações
  { category: 'Ações', items: [
    { icon: '🚰', label: 'Querer beber' },
    { icon: '🍽️', label: 'Querer comer' },
    { icon: '🚽', label: 'Ir ao banheiro' },
    { icon: '🛏️', label: 'Descansar' },
    { icon: '🎮', label: 'Brincar' },
    { icon: '📺', label: 'Assistir' },
  ]},
  // Social
  { category: 'Social', items: [
    { icon: '👋', label: 'Olá' },
    { icon: '🙏', label: 'Obrigado' },
    { icon: '❌', label: 'Não quero' },
    { icon: '✅', label: 'Sim' },
    { icon: '🤝', label: 'Ajuda' },
    { icon: '🗣️', label: 'Quero falar' },
  ]},
]

export default function ComunicacaoFuncional() {
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
          <h1 className="text-xl font-bold text-gray-800">Quadro de Comunicação</h1>
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
              🗣️ Meu Quadro de Comunicação
            </h1>
            <p className="text-gray-500 mt-2 print:text-sm">
              Aponte para o que você precisa ou sente
            </p>
          </div>

          {/* Communication Cards */}
          <div className="space-y-6 print:space-y-4">
            {communicationCards.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-lg font-bold text-gray-700 mb-3 print:mb-2 print:text-base">
                  {category.category}
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 print:gap-2">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex flex-col items-center justify-center p-4 bg-primary-50 rounded-xl border-2 border-primary-200 hover:border-primary-400 transition-colors cursor-pointer print:p-2"
                    >
                      <span className="text-4xl mb-2 print:text-3xl">{item.icon}</span>
                      <span className="text-sm font-medium text-gray-700 text-center">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Custom Section */}
          <div className="mt-8 print:mt-4 border-2 border-dashed border-gray-300 rounded-xl p-6 print:p-4">
            <h3 className="font-semibold text-gray-700 mb-4 print:mb-2">
              ✏️ Adicione seus próprios cards:
            </h3>
            <div className="grid grid-cols-3 gap-3 print:gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 print:p-2">
                  <div className="text-4xl mb-2 print:text-3xl">➕</div>
                  <div className="w-full h-4 border-b border-gray-300" />
                </div>
              ))}
            </div>
          </div>

          {/* How to use */}
          <div className="mt-6 bg-warm-100 rounded-xl p-4 print:mt-3 print:bg-gray-100">
            <h4 className="font-semibold text-gray-700 mb-2">📋 Como usar:</h4>
            <ol className="text-sm text-gray-600 space-y-1">
              <li>1. Imprima e recorte os cards (ou use a folha inteira)</li>
              <li>2. Coloque em local acessível para a criança</li>
              <li>3. Quando a criança apontar um card, repita o que ela está comunicando</li>
              <li>4. Sempre respeite a comunicação da criança</li>
            </ol>
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
