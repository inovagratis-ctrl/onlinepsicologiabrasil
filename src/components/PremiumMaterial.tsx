'use client'

import { useState } from 'react'
import { ArrowLeft, ShoppingCart, Lock, Eye, Download, Star, Check } from 'lucide-react'
import Link from 'next/link'

interface PremiumMaterialProps {
  title: string
  description: string
  pages: number
  price: number
  priceId: string
  features: string[]
  previewContent: React.ReactNode
}

export default function PremiumMaterial({
  title,
  description,
  pages,
  price,
  priceId,
  features,
  previewContent,
}: PremiumMaterialProps) {
  const [showPreview, setShowPreview] = useState(false)

  const handlePurchase = async () => {
    try {
      const response = await fetch('/api/pagamento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          appointmentId: `MAT_${Date.now()}`,
          amount: price,
          title: title,
          description: `Material: ${title}`,
          email: 'paciente@email.com',
          materialId: priceId,
        }),
      })

      const data = await response.json()
      
      if (data.success && data.initPoint) {
        window.location.href = data.initPoint
      } else {
        alert('Erro ao processar pagamento. Tente novamente.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Erro ao conectar com o servidor.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/materiais" className="flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-4">
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Lock className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-medium text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                Premium
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
            <p className="text-gray-600 mb-6">{description}</p>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-gray-500">{pages} páginas</span>
              <span className="text-2xl font-bold text-primary-600">R$ {price.toFixed(2).replace('.', ',')}</span>
            </div>

            <div className="bg-white rounded-xl shadow p-6 mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">O que inclui:</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handlePurchase}
              className="w-full btn-primary flex items-center justify-center gap-2 text-lg py-4"
            >
              <ShoppingCart className="w-5 h-5" />
              Comprar por R$ {price.toFixed(2).replace('.', ',')}
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Pagamento seguro via Mercado Pago • Acesso imediato
            </p>
          </div>

          {/* Preview */}
          <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">Pré-visualização</h3>
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700"
                >
                  <Eye className="w-4 h-4" />
                  {showPreview ? 'Ocultar' : 'Ver'}
                </button>
              </div>
              
              {showPreview ? (
                <div className="p-6">
                  {previewContent}
                </div>
              ) : (
                <div className="p-6 text-center text-gray-500">
                  <Lock className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p>Clique em "Ver" para visualizar uma prévia</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
