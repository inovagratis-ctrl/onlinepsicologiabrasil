'use client'

import { Settings } from 'lucide-react'

export default function ManageCookiesLink({
  label = 'Preferências de Cookies',
  className = '',
}: {
  label?: string
  className?: string
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('openCookiePreferences'))
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        className ||
        'hover:text-white transition flex items-center gap-1 text-xs text-left cursor-pointer'
      }
    >
      <Settings className="w-3.5 h-3.5 text-[#7BAE9B]" />
      <span>{label}</span>
    </button>
  )
}
