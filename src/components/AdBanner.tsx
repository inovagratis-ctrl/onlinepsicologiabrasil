'use client'

interface AdBannerProps {
  position: 'top' | 'middle' | 'bottom' | 'sidebar'
  className?: string
}

export default function AdBanner({ position, className = '' }: AdBannerProps) {
  // ============================================
  // COMO COLOCAR SEU CÓDIGO DE ANÚNCIO:
  // ============================================
  //
  // 1. GOOGLE ADSENSE:
  //    - Crie conta em https://www.google.com/adsense
  //    - Crie uma unidade de anúncio para cada posição
  //    - Substitua o conteúdo abaixo pelo código do AdSense
  //
  // 2. OUTRAS REDES:
  //    - Facebook Ads, Ezoic, Mediavine, etc.
  //    - Cole o código JavaScript ou HTML no return abaixo
  //
  // ============================================

  // ============================================
  // EXEMPLO COM GOOGLE ADSENSE:
  // ============================================
  //
  // Descomente o bloco correspondente à posição
  // e cole seu código de anúncio
  //
  // --- TOP (728x90) ---
  // if (position === 'top') {
  //   return (
  //     <div className={`mb-8 ${className}`}>
  //       <ins className="adsbygoogle"
  //         style={{ display: 'block' }}
  //         data-ad-client="CAUSSEU-CODIGO"
  //         data-ad-slot="SLOT-TOPO"
  //         data-ad-format="auto"
  //         data-full-width-responsive="true"
  //       />
  //       <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
  //     </div>
  //   )
  // }
  //
  // --- MIDDLE (300x250) ---
  // if (position === 'middle') {
  //   return (
  //     <div className={`my-8 ${className}`}>
  //       <ins className="adsbygoogle"
  //         style={{ display: 'block' }}
  //         data-ad-client="CAUSSEU-CODIGO"
  //         data-ad-slot="SLOT-MEIO"
  //         data-ad-format="auto"
  //         data-full-width-responsive="true"
  //       />
  //       <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
  //     </div>
  //   )
  // }
  //
  // --- SIDEBAR (300x600) ---
  // if (position === 'sidebar') {
  //   return (
  //     <div className={`sticky top-24 ${className}`}>
  //       <ins className="adsbygoogle"
  //         style={{ display: 'block' }}
  //         data-ad-client="CAUSSEU-CODIGO"
  //         data-ad-slot="SLOT-LATERAL"
  //         data-ad-format="auto"
  //         data-full-width-responsive="true"
  //       />
  //       <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
  //     </div>
  //   )
  // }
  //
  // --- BOTTOM (728x90) ---
  // if (position === 'bottom') {
  //   return (
  //     <div className={`mt-8 ${className}`}>
  //       <ins className="adsbygoogle"
  //         style={{ display: 'block' }}
  //         data-ad-client="CAUSSEU-CODIGO"
  //         data-ad-slot="SLOT-RODAPE"
  //         data-ad-format="auto"
  //         data-full-width-responsive="true"
  //       />
  //       <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
  //     </div>
  //   )
  // }

  // ============================================
  // PLACEHOLDER (remova quando colocar anúncio real)
  // ============================================
  return (
    <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl ${getPositionStyles(position)} ${className}`}>
      <div className="flex flex-col items-center justify-center h-full min-h-[100px] text-gray-400">
        <p className="text-sm font-medium">Espaço para Anúncio</p>
        <p className="text-xs mt-1">{getPositionLabel(position)}</p>
        <p className="text-xs mt-2 px-3 py-1 bg-gray-200 rounded text-gray-500">
          {getSize(position)}
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
      return 'Banner Superior'
    case 'middle':
      return 'Anúncio Meio do Conteúdo'
    case 'bottom':
      return 'Banner Inferior'
    case 'sidebar':
      return 'Anúncio Lateral'
    default:
      return 'Anúncio'
  }
}

function getSize(position: string): string {
  switch (position) {
    case 'top':
      return '728x90 ou Responsivo'
    case 'middle':
      return '300x250 ou Responsivo'
    case 'bottom':
      return '728x90 ou Responsivo'
    case 'sidebar':
      return '300x600 ou Responsivo'
    default:
      return 'Responsivo'
  }
}
