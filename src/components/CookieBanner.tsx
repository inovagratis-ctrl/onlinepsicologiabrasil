'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShieldCheck, Settings } from 'lucide-react'

const CONSENT_KEY = 'pd_cookie_consent_v1'

export interface CookiePreferences {
  essential: boolean
  analytics: boolean
  advertising: boolean
  updatedAt: string
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [analytics, setAnalytics] = useState(true)
  const [advertising, setAdvertising] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CONSENT_KEY)
      if (!saved) {
        setVisible(true)
      } else {
        const parsed: CookiePreferences = JSON.parse(saved)
        applyConsentMode(parsed)
      }
    } catch {
      setVisible(true)
    }
  }, [])

  const applyConsentMode = (prefs: CookiePreferences) => {
    if (typeof window === 'undefined') return
    const w = window as any
    w.dataLayer = w.dataLayer || []
    function gtag(...args: any[]) {
      w.dataLayer.push(args)
    }
    gtag('consent', 'update', {
      analytics_storage: prefs.analytics ? 'granted' : 'denied',
      ad_storage: prefs.advertising ? 'granted' : 'denied',
      ad_user_data: prefs.advertising ? 'granted' : 'denied',
      ad_personalization: prefs.advertising ? 'granted' : 'denied',
    })
  }

  const saveConsent = (prefs: CookiePreferences) => {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs))
      applyConsentMode(prefs)
    } catch {
      // Ignore storage error
    }
    setVisible(false)
  }

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      advertising: true,
      updatedAt: new Date().toISOString(),
    })
  }

  const handleRejectNonEssential = () => {
    saveConsent({
      essential: true,
      analytics: false,
      advertising: false,
      updatedAt: new Date().toISOString(),
    })
  }

  const handleSaveCustom = () => {
    saveConsent({
      essential: true,
      analytics,
      advertising,
      updatedAt: new Date().toISOString(),
    })
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Preferências de privacidade e cookies (LGPD)"
      className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6 pointer-events-none"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 md:p-6 pointer-events-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <ShieldCheck className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs md:text-sm text-gray-600 leading-relaxed">
              <p className="font-semibold text-gray-800 mb-1">
                Respeitamos sua privacidade (LGPD — Lei nº 13.709/2018)
              </p>
              <p>
                Utilizamos cookies essenciais para o funcionamento seguro do site e, mediante seu consentimento,
                cookies analíticos para aprimorar nossos conteúdos educativos. Não coletamos dados clínicos sensíveis
                via cookies. Veja nossa{' '}
                <Link href="/politica-de-privacidade" className="text-primary-600 underline hover:text-primary-700">
                  Política de Privacidade
                </Link>{' '}
                e{' '}
                <Link href="/politica-de-cookies" className="text-primary-600 underline hover:text-primary-700">
                  Política de Cookies
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-300 text-xs font-medium text-gray-700 hover:bg-gray-50"
            >
              <Settings className="w-3.5 h-3.5" />
              Preferências
            </button>
            <button
              type="button"
              onClick={handleRejectNonEssential}
              className="px-3.5 py-2 rounded-lg border border-gray-300 text-xs font-medium text-gray-700 hover:bg-gray-50"
            >
              Apenas Essenciais
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="px-4 py-2 rounded-lg bg-primary-600 text-white text-xs font-semibold hover:bg-primary-700"
            >
              Aceitar Todos
            </button>
          </div>
        </div>

        {showDetails && (
          <div className="mt-4 pt-4 border-t border-gray-100 grid sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-gray-50">
              <div className="flex items-center justify-between font-semibold text-gray-800 mb-1">
                <span>Essenciais</span>
                <span className="text-accent-700">Sempre ativos</span>
              </div>
              <p className="text-gray-500">
                Necessários para navegação segura, envio de formulários e memorização desta escolha.
              </p>
            </div>

            <label className="p-3 rounded-lg bg-gray-50 cursor-pointer block">
              <div className="flex items-center justify-between font-semibold text-gray-800 mb-1">
                <span>Desempenho e Analytics</span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="rounded text-primary-600"
                />
              </div>
              <p className="text-gray-500">
                Medem quais artigos e materiais gratuitos são mais úteis, de forma agregada e anônima.
              </p>
            </label>

            <label className="p-3 rounded-lg bg-gray-50 cursor-pointer block">
              <div className="flex items-center justify-between font-semibold text-gray-800 mb-1">
                <span>Publicidade Contextual</span>
                <input
                  type="checkbox"
                  checked={advertising}
                  onChange={(e) => setAdvertising(e.target.checked)}
                  className="rounded text-primary-600"
                />
              </div>
              <p className="text-gray-500">
                Permite exibição de anúncios do Google AdSense exclusivamente em artigos informativos.
              </p>
            </label>

            <div className="sm:col-span-3 flex justify-end">
              <button
                type="button"
                onClick={handleSaveCustom}
                className="px-4 py-2 rounded-lg bg-secondary-600 text-white font-semibold hover:bg-secondary-700"
              >
                Salvar Minhas Preferências
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
