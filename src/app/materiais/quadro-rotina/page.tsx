'use client'

import { Printer, ArrowLeft, Download } from 'lucide-react'
import Link from 'next/link'

const routineItems = [
  { time: '07:00', activity: 'Acordar', icon: '☀️', color: 'bg-yellow-100' },
  { time: '07:15', activity: 'Escovar os dentes', icon: '🦷', color: 'bg-blue-100' },
  { time: '07:30', activity: 'Tomar banho', icon: '🚿', color: 'bg-blue-100' },
  { time: '08:00', activity: 'Vestir-se', icon: '👕', color: 'bg-purple-100' },
  { time: '08:30', activity: 'Café da manhã', icon: '🥣', color: 'bg-orange-100' },
  { time: '09:00', activity: 'Escola / Atividades', icon: '📚', color: 'bg-green-100' },
  { time: '12:00', activity: 'Almoço', icon: '🍽️', color: 'bg-orange-100' },
  { time: '13:00', activity: 'Descanso', icon: '😴', color: 'bg-indigo-100' },
  { time: '14:00', activity: 'Brincar', icon: '🎮', color: 'bg-pink-100' },
  { time: '16:00', activity: 'Lanche', icon: '🍎', color: 'bg-orange-100' },
  { time: '17:00', activity: 'Atividades / Terapia', icon: '🧩', color: 'bg-teal-100' },
  { time: '18:30', activity: 'Jantar', icon: '🍽️', color: 'bg-orange-100' },
  { time: '19:00', activity: 'Banho', icon: '🛁', color: 'bg-blue-100' },
  { time: '19:30', activity: 'Brincadeiras tranquilas', icon: '🧸', color: 'bg-pink-100' },
  { time: '20:00', activity: 'História / Leitura', icon: '📖', color: 'bg-green-100' },
  { time: '20:30', activity: 'Dormir', icon: '🌙', color: 'bg-indigo-100' },
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
              Complete com os horários do seu filho
            </p>
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
                  <div className="text-sm text-gray-500 font-medium">{item.time}</div>
                  <div className="text-lg font-semibold text-gray-800 print:text-base">{item.activity}</div>
                </div>
                <div className="w-6 h-6 border-2 border-gray-300 rounded print:w-5 print:h-5" />
              </div>
            ))}
          </div>

          {/* Custom Section */}
          <div className="mt-8 print:mt-4 border-2 border-dashed border-gray-300 rounded-xl p-6 print:p-4">
            <h3 className="font-semibold text-gray-700 mb-4 print:mb-2">
              ✏️ Minhas atividades personalizadas:
            </h3>
            <div className="grid grid-cols-2 gap-4 print:gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-2 border-b border-gray-200 pb-2">
                  <div className="w-20 print:w-16" />
                  <div className="flex-1 h-6 border-b border-gray-300" />
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

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:rounded-none {
            border-radius: 0 !important;
          }
        }
      `}</style>
    </div>
  )
}
