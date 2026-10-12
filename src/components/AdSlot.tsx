'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { isAdSenseAllowed, getGovernanceConfig } from '@/data/adConfig'

interface AdSlotProps {
  position: string
  category?: string
  className?: string
  slotId?: string
}

export default function AdSlot({ position, category, className = '', slotId }: AdSlotProps) {
  const pathname = usePathname() || '/'
  const [allowed, setAllowed] = useState(false)
  const [clientId, setClientId] = useState('ca-pub-3922432751903141')
  const [customSlot, setCustomSlot] = useState<string | null>(slotId || null)

  useEffect(() => {
    const canShow = isAdSenseAllowed(pathname, category)
    setAllowed(canShow)
    if (!canShow) return

    const gov = getGovernanceConfig()
    if (gov.adsenseClientId) {
      setClientId(gov.adsenseClientId)
    }

    // Busca slot customizado se cadastrado na API de anúncios
    const checkApiAd = async () => {
      try {
        const res = await fetch('/api/ads')
        const data = await res.json()
        if (data.success && Array.isArray(data.ads)) {
          const found = data.ads.find((a: any) => a.position === position && a.active)
          if (found && found.code) {
            const slotMatch = found.code.match(/data-ad-slot="([^"]+)"/)
            if (slotMatch?.[1]) {
              setCustomSlot(slotMatch[1])
            }
          }
        }
      } catch {
        // Ignora erro silenciosamente
      }
    }
    checkApiAd()
  }, [pathname, category, position])

  useEffect(() => {
    if (!allowed || !customSlot) return
    const timer = setTimeout(() => {
      try {
        const w = window as any
        w.adsbygoogle = w.adsbygoogle || []
        w.adsbygoogle.push({})
      } catch {
        // Ignora se já carregado
      }
    }, 600)
    return () => clearTimeout(timer)
  }, [allowed, customSlot])

  // NUNCA renderiza em rotas clínicas/conversão ou quando desativado no painel de governança
  if (!allowed) return null

  return (
    <div
      className={`my-6 rounded-xl border border-gray-200 bg-gray-50/70 p-3 min-h-[120px] flex flex-col items-center justify-center ${className}`}
      data-ad-position={position}
      aria-label="Espaço publicitário identificado"
    >
      <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium mb-2">
        Publicidade
      </span>
      {customSlot ? (
        <ins
          className="adsbygoogle w-full"
          style={{ display: 'block', minHeight: '90px' }}
          data-ad-client={clientId}
          data-ad-slot={customSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      ) : (
        <div className="text-xs text-gray-400 text-center py-4">
          Espaço reservado para publicidade contextual (AdSense elegível)
        </div>
      )}
    </div>
  )
}
