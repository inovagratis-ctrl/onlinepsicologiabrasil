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
  active: boolean
}

export default function AdBanner({ position, className = '' }: AdBannerProps) {
  const [ad, setAd] = useState<Ad | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchAd()
  }, [position])

  const fetchAd = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/ads')
      const data = await response.json()
      console.log('[AdBanner] API response:', data)
      if (data.success && data.ads) {
        const found = data.ads.find((a: any) => a.position === position && a.code && a.active)
        console.log('[AdBanner] Found ad for position', position, ':', found ? 'YES' : 'NO', found ? { id: found.id, title: found.title } : '')
        setAd(found || null)
      } else {
        console.warn('[AdBanner] API returned no ads or error:', data)
        setAd(null)
      }
    } catch (error) {
      console.error('[AdBanner] Error fetching ad:', error)
      setError('Erro ao carregar anúncio')
    } finally {
      setLoading(false)
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

  // Loading state
  if (loading) {
    return (
      <div className={`${getPositionStyles(position)} ${className}`}>
        <div className="animate-pulse bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl">
          <div className="flex flex-col items-center justify-center h-full min-h-[100px] text-gray-400">
            <p className="text-sm font-medium">Carregando anúncio...</p>
          </div>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className={`${getPositionStyles(position)} ${className}`}>
        <div className="bg-red-50 border-2 border-red-200 rounded-xl">
          <div className="flex flex-col items-center justify-center h-full min-h-[100px] text-red-600">
            <p className="text-sm font-medium">Erro ao carregar anúncio</p>
            <p className="text-xs mt-1">{error}</p>
            <a href="/admin/ads" className="text-xs mt-2 text-primary-500 hover:text-primary-600">
              Configurar no Admin →
            </a>
          </div>
        </div>
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
