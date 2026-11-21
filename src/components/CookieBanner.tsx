'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShieldCheck, Settings, Check } from 'lucide-react'

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
    const handleOpen = () => {
      setVisible(true)
      setShowDetails(true)
    }
    window.addEventListener('openCookiePreferences', handleOpen)

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

    return () => window.removeEventListener('openCookiePreferences', handleOpen)
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
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-200 p-5 md:p-6 pointer-events-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0F5B5B] flex items-center justify-center shrink-0 border border-emerald-100">
              <ShieldCheck className="w-5 h-5 text-[#0F5B5B]" />
            </div>
            <div className="text-xs md:text-sm text-slate-600 leading-relaxed">
              <p className="font-bold text-slate-900 mb-0.5">
                Respeitamos a sua privacidade (LGPD — Lei nº 13.709/2018)
              </p>
              <p>
                Utilizamos cookies essenciais para o funcionamento do portal e, mediante seu consentimento, cookies de publicidade (Google AdSense) e métricas para manter o acesso gratuito. <strong>Suas respostas nos testes e dados clínicos são processados 100% no seu navegador e nunca são transmitidos via cookies</strong>. Veja nossa{' '}
                <Link href="/politica-de-privacidade" className="text-[#0F5B5B] font-semibold underline hover:text-[#123F42]">
                  Política de Privacidade
                </Link>{' '}
                e{' '}
                <Link href="/politica-de-cookies" className="text-[#0F5B5B] font-semibold underline hover:text-[#123F42]">
                  Política de Cookies
                </Link>.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end shrink-0">
            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              <Settings className="w-3.5 h-3.5" />
              Preferências
            </button>
            <button
              type="button"
              onClick={handleRejectNonEssential}
              className="px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              Apenas Essenciais
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="px-4 py-2 rounded-xl bg-[#0F5B5B] hover:bg-[#123F42] text-white text-xs font-bold shadow-xs transition"
            >
              Aceitar Todos
            </button>
          </div>
        </div>

        {showDetails && (
          <div className="mt-5 pt-5 border-t border-slate-100 grid sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                <span>1. Estritamente Essenciais</span>
                <span className="text-emerald-700 font-semibold text-[11px] bg-emerald-100/70 px-2 py-0.5 rounded-full">Sempre ativos</span>
              </div>
              <p className="text-slate-500 text-[11px] leading-tight">
                Necessários para navegação segura, integridade de sessões e memorização das suas escolhas de privacidade.
              </p>
            </div>

            <label className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer block hover:bg-slate-100/60 transition">
              <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                <span>2. Medição &amp; Analytics</span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="rounded text-[#0F5B5B] focus:ring-[#0F5B5B] w-4 h-4"
                />
              </div>
              <p className="text-slate-500 text-[11px] leading-tight">
                Métricas de audiência e páginas mais lidas, coletadas de forma agregada e totalmente anônima.
              </p>
            </label>

            <label className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer block hover:bg-slate-100/60 transition">
              <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                <span>3. Publicidade (Google AdSense)</span>
                <input
                  type="checkbox"
                  checked={advertising}
                  onChange={(e) => setAdvertising(e.target.checked)}
                  className="rounded text-[#0F5B5B] focus:ring-[#0F5B5B] w-4 h-4"
                />
              </div>
              <p className="text-slate-500 text-[11px] leading-tight">
                Permite a entrega e mensuração de anúncios institucionais para custear as ferramentas gratuitas.
              </p>
            </label>

            <div className="sm:col-span-3 flex justify-end pt-2">
              <button
                type="button"
                onClick={handleSaveCustom}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0F5B5B] hover:bg-[#123F42] text-white text-xs font-bold transition shadow-xs"
              >
                <Check className="w-3.5 h-3.5" />
                Salvar Minhas Preferências
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
