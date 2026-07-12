'use client'

import { Printer, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const rules = [
  { rule: 'Cumprimentar quando encontrar alguém', icon: '👋', category: 'Educacao' },
  { rule: 'Dizer "por favor" quando pedir algo', icon: '🙏', category: 'Educacao' },
  { rule: 'Dizer "obrigado" quando receber algo', icon: '💝', category: 'Educacao' },
  { rule: 'Dizer "desculpa" quando errar', icon: '😔', category: 'Educacao' },
  { rule: 'Esperar sua vez para falar', icon: '⏳', category: 'Conversa' },
  { rule: 'Não interromper quando alguém está falando', icon: '🗣️', category: 'Conversa' },
  { rule: 'Olhar para quem está falando', icon: '👀', category: 'Conversa' },
  { rule: 'Falar em volume adequado', icon: '🔊', category: 'Conversa' },
  { rule: 'Respeitar o espaço dos outros', icon: '📏', category: 'Espaco' },
  { rule: 'Pedir antes de tocar nas coisas dos outros', icon: '✋', category: 'Espaco' },
  { rule: 'Esperar sua vez para brincar', icon: '🎮', category: 'Brincadeira' },
  { rule: 'Compartilhar materiais', icon: '📦', category: 'Brincadeira' },
  { rule: 'Não ficar bravo se perder', icon: '😤', category: 'Brincadeira' },
  { rule: 'Parabenizar quem ganhou', icon: '🎉', category: 'Brincadeira' },
  { rule: 'Manter a ordem no ambiente', icon: '🏠', category: 'Ambiente' },
  { rule: 'Pedir licença para passar', icon: '🚶', category: 'Ambiente' },
]

const categories = ['Educacao', 'Conversa', 'Espaco', 'Brincadeira', 'Ambiente']
const categoryColors: Record<string, string> = {
  'Educacao': 'bg-blue-100',
  'Conversa': 'bg-green-100',
  'Espaco': 'bg-purple-100',
  'Brincadeira': 'bg-orange-100',
  'Ambiente': 'bg-pink-100',
}

export default function RegrasSociais() {
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
          <h1 className="text-xl font-bold text-gray-800">Jogo de Regras Sociais</h1>
          <button onClick={handlePrint} className="flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600">
            <Printer className="w-5 h-5" />
            Imprimir
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 print:py-0 print:px-0">
        <div className="bg-white rounded-2xl shadow-lg p-8 print:shadow-none print:rounded-none print:p-4">
          <div className="text-center mb-8 print:mb-4">
            <h1 className="text-3xl font-bold text-primary-600 print:text-2xl">🎲 Jogo de Regras Sociais</h1>
            <p className="text-gray-500 mt-2 print:text-sm">Aprenda as regras de convívio em sociedade</p>
          </div>

          {categories.map((category) => (
            <div key={category} className="mb-6">
              <h3 className="text-lg font-bold text-gray-700 mb-3">{category}</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {rules.filter(r => r.category === category).map((item, index) => (
                  <div key={index} className={`flex items-center gap-3 p-3 rounded-lg ${categoryColors[category]} print:p-2`}>
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{item.rule}</span>
                    <div className="ml-auto w-5 h-5 border-2 border-gray-300 rounded print:w-4 print:h-4" />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-8 bg-warm-100 rounded-xl p-4 print:mt-4">
            <h4 className="font-semibold text-gray-700 mb-2">📋 Como usar:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Imprima e recorte as cartas de regras</li>
              <li>• Leia uma regra por vez com a criança</li>
              <li>• Explique com exemplos do dia a dia</li>
              <li>• Pratique em situações reais</li>
              <li>• Celebre quando a criança seguir a regra!</li>
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
