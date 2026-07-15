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

function ensureAdSenseLoader(): Promise<void> {
  return new Promise((resolve) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any
    if (w.adsbygoogle) {
      resolve()
      return
    }

    const existingScript = document.querySelector(
      'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
    )
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve())
      resolve()
      return
    }

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3922432751903141'
    script.crossOrigin = 'anonymous'
    script.onload = () => resolve()
    script.onerror = () => resolve()
    document.head.appendChild(script)
  })
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
    scripts.forEach((s) => s.remove())

    container.innerHTML = temp.innerHTML

    ensureAdSenseLoader().then(() => {
      scripts.forEach((oldScript) => {
        const newScript = document.createElement('script')
        if (oldScript.src) {
          newScript.src = oldScript.src
          newScript.async = true
        } else {
          newScript.textContent = oldScript.textContent
        }
        container.appendChild(newScript)
      })

      const insElements = container.querySelectorAll('ins.adsbygoogle')
      insElements.forEach(() => {
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const w = window as any
          w.adsbygoogle = w.adsbygoogle || []
          w.adsbygoogle.push({})
        } catch (e) {
          console.error('AdSense push error:', e)
        }
      })
    })
  }, [ad])

  if (!ad) return null

  return (
    <div className={`ad-banner ${className}`} data-position={position}>
      <div className="text-xs text-gray-400 text-center mb-1">Publicidade</div>
      <div ref={containerRef} />
    </div>
  )
}
