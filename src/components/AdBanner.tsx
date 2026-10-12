'use client'

import AdSlot from './AdSlot'

interface AdBannerProps {
  position: string
  category?: string
  className?: string
}

export default function AdBanner({ position, category, className = '' }: AdBannerProps) {
  return <AdSlot position={position} category={category} className={className} />
}
