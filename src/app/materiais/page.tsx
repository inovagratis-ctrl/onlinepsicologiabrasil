import { Download, Eye, Lock, Puzzle, MessageCircle, BookOpen, Heart, Star, Printer, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

const categories = [
  {
    icon: Puzzle,
    title: 'Habilidades Sociais',
    description: 'Atividades para desenvolver interação e comunicação social',
    color: 'bg-primary-100 text-primary-600',
    materials: [
      { name: 'Roteiro de Interação Social', type: 'PDF', pages: 15, free: true, link: '/materiais/interacao-social' },
      { name: 'Jogo de Regras Sociais', type: 'PDF', pages: 10, free: true, link: '/materiais/regras-sociais' },
      { name: 'Histórias Sociais para Crianças', type: 'PDF', pages: 20, free: false, price: 14.90, link: '/materiais/historias-sociais' },
    ],
  },
  {
    icon: MessageCircle,
    title: 'Comunicação',
    description: 'Materiais para estimular a comunicação funcional',
    color: 'bg-secondary-100 text-secondary-600',
    materials: [
      { name: 'Quadro de Comunicação Funcional', type: 'PDF', pages: 8, free: true, link: '/materiais/comunicacao-funcional' },
      { name: 'PECS - Sistema de Comunicação por Figuras', type: 'PDF', pages: 25, free: false, price: 17.90, link: '/materiais/pecs' },
      { name: 'Atividades de Solicitação', type: 'PDF', pages: 12, free: false, price: 9.90, link: '/materiais/atividades-solicitacao' },
    ],
  },
  {
    icon: BookOpen,
    title: 'Rotinas e Organização',
    description: 'Quadros e rotinas visuais para o dia a dia',
    color: 'bg-accent-100 text-accent-600',
    materials: [
      { name: 'Quadro de Rotina Diária', type: 'PDF', pages: 5, free: true, link: '/materiais/quadro-rotina' },
      { name: 'Sequência de Atividades', type: 'PDF', pages: 10, free: true, link: '/materiais/sequencia-atividades' },
      { name: 'Timer Visual para Transições', type: 'PDF', pages: 3, free: true, link: '/materiais/timer-visual' },
    ],
  },
  {
    icon: Heart,
    title: 'Regulação Emocional',
    description: 'Estratégias para lidar com emoções e crises',
    color: 'bg-purple-100 text-purple-600',
    materials: [
      { name: 'Termômetro de Emoções', type: 'PDF', pages: 6, free: true, link: '/materiais/termometro-emocoes' },
      { name: 'Cartões de Sentimentos', type: 'PDF', pages: 15, free: false, price: 12.90, link: '/materiais/cartoes-sentimentos' },
      { name: 'Estratégias de Regulação', type: 'PDF', pages: 12, free: false, price: 9.90, link: '/materiais/estrategias-regulacao' },
    ],
  },
]

export default function Materiais() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Materiais Visuais</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recursos gratuitos e pagos para apoiar o desenvolvimento e a comunicação
          </p>
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-3 h-3 bg-accent-400 rounded-full" />
              <span>Gratuito</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Lock className="w-4 h-4 text-gray-400" />
              <span>Premium (a partir de R$ 9,90)</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">{category.title}</h2>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  {category.materials.map((material, mIndex) => (
                    <div
                      key={mIndex}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        material.free
                          ? 'border-accent-200 bg-accent-50 hover:border-accent-400'
                          : 'border-amber-200 bg-amber-50 hover:border-amber-400'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          {material.free ? (
                            <Star className="w-5 h-5 text-accent-500 fill-current" />
                          ) : (
                            <Lock className="w-5 h-5 text-amber-500" />
                          )}
                          <span className="text-xs font-medium text-gray-500">{material.type}</span>
                        </div>
                        <span className="text-xs text-gray-500">{material.pages} págs</span>
                      </div>
                      
                      <h3 className="font-semibold text-gray-800 mb-3">{material.name}</h3>
                      
                      {!material.free && material.price && (
                        <p className="text-lg font-bold text-amber-600 mb-3">
                          R$ {material.price.toFixed(2).replace('.', ',')}
                        </p>
                      )}
                      
                      <div className="flex gap-2">
                        {material.free && material.link !== '#' ? (
                          <Link
                            href={material.link}
                            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                            Ver
                          </Link>
                        ) : (
                          <Link
                            href={material.link || '#'}
                            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                            Ver
                          </Link>
                        )}
                        {material.free && material.link !== '#' ? (
                          <Link
                            href={material.link}
                            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-sm bg-accent-500 text-white hover:bg-accent-600 rounded-lg transition-colors"
                          >
                            <Printer className="w-4 h-4" />
                            Imprimir
                          </Link>
                        ) : (
                          <Link
                            href={material.link || '#'}
                            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-sm bg-amber-500 text-white hover:bg-amber-600 rounded-lg transition-colors"
                          >
                            <ShoppingCart className="w-4 h-4" />
                            Comprar
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Premium */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Pack Completo de Materiais</h3>
          <p className="text-primary-100 mb-6 max-w-xl mx-auto">
            Compre todos os 5 materiais premium com desconto e tenha acesso a mais de 80 páginas de atividades prontas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/agendamento"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Ver Materiais
            </a>
            <a
              href="https://wa.me/5568999035300?text=Olá! Gostaria de saber mais sobre os materiais premium."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Tirar Dúvidas
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
