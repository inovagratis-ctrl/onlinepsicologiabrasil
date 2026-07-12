'use client'

import { useState } from 'react'

interface AdBannerProps {
  position: 'top' | 'middle' | 'bottom' | 'sidebar'
  className?: string
}

export default function AdBanner({ position, className = '' }: AdBannerProps) {
  const [adLoaded, setAdLoaded] = useState(true)

  // Coloque seu código de anúncio aqui
  // Exemplo para Google AdSense:
  /*
  return (
    <div className={`ad-container ${className}`}>
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="CAQUSEU_CODIGO"
        data-ad-slot="SEU_SLOT"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
  */

  // Placeholder para demonstração (remover quando colocar anúncio real)
  return (
    <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl ${getPositionStyles(position)} ${className}`}>
      <div className="flex flex-col items-center justify-center h-full min-h-[100px] text-gray-400">
        <p className="text-sm font-medium">Espaço para Anúncio</p>
        <p className="text-xs mt-1">{getPositionLabel(position)}</p>
        <p className="text-xs mt-2 px-3 py-1 bg-gray-200 rounded text-gray-500">
          Código: {position === 'top' ? '728x90' : position === 'middle' ? '300x250' : position === 'sidebar' ? '300x600' : '728x90'}
        </p>
      </div>
    </div>
  )
}

function getPositionStyles(position: string): string {
  switch (position) {
    case 'top':
      return 'mb-8'
    case 'middle':
      return 'my-8'
    case 'bottom':
      return 'mt-8'
    case 'sidebar':
      return 'sticky top-24'
    default:
      return ''
  }
}

function getPositionLabel(position: string): string {
  switch (position) {
    case 'top':
      return 'Banner Superior (728x90)'
    case 'middle':
      return 'Anúncio Meio do Conteúdo (300x250)'
    case 'bottom':
      return 'Banner Inferior (728x90)'
    case 'sidebar':
      return 'Anúncio Lateral (300x600)'
    default:
      return 'Anúncio'
  }
}
