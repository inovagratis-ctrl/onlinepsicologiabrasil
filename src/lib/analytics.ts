'use client'

export type ConversionEventName =
  | 'click_whatsapp'
  | 'submit_contact_form'
  | 'start_booking'
  | 'download_material'
  | 'subscribe_newsletter'
  | 'click_affiliate'

export interface AnalyticsEventParams {
  location?: string
  category?: string
  label?: string
  item_id?: string
  url?: string
  [key: string]: string | number | boolean | undefined
}

// Lista de chaves bloqueadas para garantir que nenhum dado clínico ou pessoal sensível seja enviado ao Analytics (LGPD)
const BLOCKED_SENSITIVE_KEYS = [
  'name',
  'nome',
  'email',
  'phone',
  'telefone',
  'message',
  'mensagem',
  'notes',
  'queixa',
  'diagnostico',
  'sintomas',
  'cpf',
  'patient',
]

export function trackEvent(eventName: ConversionEventName, params: AnalyticsEventParams = {}) {
  if (typeof window === 'undefined') return

  // Sanitiza parâmetros para impedir envio acidental de dados pessoais ou clínicos
  const safeParams: Record<string, string | number | boolean> = {}
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) continue
    const lowerKey = key.toLowerCase()
    if (BLOCKED_SENSITIVE_KEYS.some((blocked) => lowerKey.includes(blocked))) {
      continue
    }
    safeParams[key] = value
  }

  try {
    const w = window as unknown as {
      gtag?: (...args: unknown[]) => void
      dataLayer?: Record<string, unknown>[]
    }

    if (typeof w.gtag === 'function') {
      w.gtag('event', eventName, safeParams)
    } else if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({
        event: eventName,
        ...safeParams,
        timestamp: new Date().toISOString(),
      })
    }

    // Registra contador agregado anônimo no localStorage para visualização rápida no painel Admin
    const statsRaw = localStorage.getItem('pd_analytics_counts')
    const stats = statsRaw ? JSON.parse(statsRaw) : {}
    stats[eventName] = (stats[eventName] || 0) + 1
    localStorage.setItem('pd_analytics_counts', JSON.stringify(stats))
  } catch (err) {
    console.warn('Analytics event skipped:', err)
  }
}

export function buildUtmUrl(baseUrl: string, campaign: string, contentId?: string): string {
  try {
    const url = new URL(baseUrl)
    url.searchParams.set('utm_source', 'psicologiadireta')
    url.searchParams.set('utm_medium', 'affiliate')
    url.searchParams.set('utm_campaign', campaign)
    if (contentId) {
      url.searchParams.set('utm_content', contentId)
    }
    return url.toString()
  } catch {
    const separator = baseUrl.includes('?') ? '&' : '?'
    return `${baseUrl}${separator}utm_source=psicologiadireta&utm_medium=affiliate&utm_campaign=${encodeURIComponent(campaign)}`
  }
}
