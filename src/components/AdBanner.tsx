'use client'

import { useEffect, useState, useRef } from 'react'

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
  const containerRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    fetchAd()
  }, [position])

  useEffect(() => {
    if (!ad || !containerRef.current) return

    const container = containerRef.current
    container.innerHTML = ''

    const temp = document.createElement('div')
    temp.innerHTML = ad.code

    const scripts = Array.from(temp.querySelectorAll('script'))

    const nonScriptHtml = temp.innerHTML
    container.innerHTML = nonScriptHtml

    scripts.forEach((oldScript) => {
      const newScript = document.createElement('script')
      if (oldScript.src) {
        newScript.src = oldScript.src
        newScript.async = true
      } else {
        newScript.textContent = oldScript.textContent
      }
      if (oldScript.className) newScript.className = oldScript.className
      container.appendChild(newScript)
    })

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any
      w.adsbygoogle = w.adsbygoogle || []
      w.adsbygoogle.push({})
    } catch (e) {
      // AdSense not yet loaded, retry after scripts load
    }
  }, [ad])

  if (!ad) return null

  return (
    <div className={`ad-banner ${className}`} data-position={position}>
      <div className="text-xs text-gray-400 text-center mb-1">Publicidade</div>
      <div ref={containerRef} />
    </div>
  )
}
