'use client'

import { useState, useEffect } from 'react'

interface AdBannerProps {
  position: 'top' | 'middle' | 'bottom' | 'sidebar' | 'article-top' | 'article-middle' | 'article-bottom'
  className?: string
}

interface Ad {
  id: string
  position: string
  code: string
}

export default function AdBanner({ position, className = '' }: AdBannerProps) {
  const [ad, setAd] = useState<Ad | null>(null)

  useEffect(() => {
    fetchAd()
  }, [position])

  const fetchAd = async () => {
    try {
      const response = await fetch('/api/ads')
      const data = await response.json()
      if (data.success) {
        const found = data.ads.find((a: Ad) => a.position === position && a.code)
        setAd(found || null)
      }
    } catch (error) {
      console.error('Error fetching ad:', error)
    }
  }

  // Se tem anúncio no banco, renderiza ele
  if (ad) {
    return (
      <div className={`${getPositionStyles(position)} ${className}`}>
        <div dangerouslySetInnerHTML={{ __html: ad.code }} />
      </div>
    )
  }

  // Se não tem anúncio, mostra placeholder
  return (
    <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl ${getPositionStyles(position)} ${className}`}>
      <div className="flex flex-col items-center justify-center h-full min-h-[100px] text-gray-400">
        <p className="text-sm font-medium">Espaço para Anúncio</p>
        <p className="text-xs mt-1">{getPositionLabel(position)}</p>
        <p className="text-xs mt-2 px-3 py-1 bg-gray-200 rounded text-gray-500">
          {getSize(position)}
        </p>
        <a href="/admin/ads" className="text-xs mt-2 text-primary-500 hover:text-primary-600">
          Configurar no Admin →
        </a>
      </div>
    </div>
  )
}

function getPositionStyles(position: string): string {
  switch (position) {
    case 'top':
    case 'article-top':
      return 'mb-8'
    case 'middle':
    case 'article-middle':
      return 'my-8'
    case 'bottom':
    case 'article-bottom':
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
      return 'Banner Superior'
    case 'middle':
      return 'Anúncio Meio do Conteúdo'
    case 'bottom':
      return 'Banner Inferior'
    case 'sidebar':
      return 'Anúncio Lateral'
    case 'article-top':
      return 'Topo do Artigo'
    case 'article-middle':
      return 'Meio do Artigo'
    case 'article-bottom':
      return 'Rodapé do Artigo'
    default:
      return 'Anúncio'
  }
}

function getSize(position: string): string {
  switch (position) {
    case 'top':
    case 'bottom':
    case 'article-top':
    case 'article-bottom':
      return '728x90 ou Responsivo'
    case 'middle':
    case 'article-middle':
      return '300x250 ou Responsivo'
    case 'sidebar':
      return '300x600 ou Responsivo'
    default:
      return 'Responsivo'
  }
}
