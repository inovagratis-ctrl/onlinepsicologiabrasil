'use client'

import { useEffect, useState } from 'react'

interface Ad {
  id: string
  position: string
  title: string
  code: string
  active: boolean
}

interface AdBannerProps {
  position: string
  className?: string
}

function extractAdSlot(html: string): { client: string; slot: string; format: string; layout?: string; style?: string } | null {
  const clientMatch = html.match(/data-ad-client="([^"]+)"/)
  const slotMatch = html.match(/data-ad-slot="([^"]+)"/)
  const formatMatch = html.match(/data-ad-format="([^"]+)"/)
  const layoutMatch = html.match(/data-ad-layout="([^"]+)"/)
  const styleMatch = html.match(/style="([^"]+)"/)

  if (!clientMatch || !slotMatch) return null

  return {
    client: clientMatch[1],
    slot: slotMatch[1],
    format: formatMatch?.[1] || 'auto',
    layout: layoutMatch?.[1],
    style: styleMatch?.[1] || 'display:block',
  }
}

export default function AdBanner({ position, className = '' }: AdBannerProps) {
  const [ad, setAd] = useState<Ad | null>(null)
  const [adInfo, setAdInfo] = useState<{ client: string; slot: string; format: string; layout?: string; style?: string } | null>(null)

  useEffect(() => {
    const fetchAd = async () => {
      try {
        const response = await fetch('/api/ads')
        const data = await response.json()
        if (data.success) {
          const found = data.ads.find((a: Ad) => a.position === position && a.active)
          if (found) {
            setAd(found)
            setAdInfo(extractAdSlot(found.code))
          }
        }
      } catch (error) {
        console.error('Error fetching ad:', error)
      }
    }
    fetchAd()
  }, [position])

  useEffect(() => {
    if (!adInfo) return

    const timer = setTimeout(() => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const w = window as any
        w.adsbygoogle = w.adsbygoogle || []
        w.adsbygoogle.push({})
      } catch (e) {
        console.error('AdSense push error:', e)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [adInfo])

  if (!ad || !adInfo) return null

  return (
    <div className={`ad-banner ${className}`} data-position={position}>
      <div className="text-xs text-gray-400 text-center mb-1">Publicidade</div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adInfo.client}
        data-ad-slot={adInfo.slot}
        data-ad-format={adInfo.format}
        data-ad-layout={adInfo.layout}
        data-full-width-responsive="true"
      />
    </div>
  )
}
