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
        const found = data.ads.find((a: Ad) => a.position === position && a.active)
        setAd(found || null)
      }
    } catch (error) {
      console.error('Error fetching ad:', error)
    }
  }

  if (!ad) return null

  return (
    <div className={`ad-banner ${className}`} data-position={position}>
      <div className="text-xs text-gray-400 text-center mb-1">Publicidade</div>
      <div dangerouslySetInnerHTML={{ __html: ad.code }} />
    </div>
  )
}
