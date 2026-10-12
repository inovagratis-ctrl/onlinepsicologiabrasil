export interface SiteGovernanceConfig {
  adsenseGlobalEnabled: boolean
  adsenseClientId: string
  // Categorias e páginas onde o AdSense pode aparecer (apenas páginas editoriais/educativas)
  allowedCategories: Record<string, boolean>
  allowedPages: Record<string, boolean>
  // Controle de indexação (noindex) por rota
  noindexRoutes: Record<string, boolean>
}

// Rotas onde o AdSense é ESTRITAMENTE PROIBIDO por ética clínica e experiência do usuário
export const FORBIDDEN_ADSENSE_ROUTES = [
  '/agendamento',
  '/contato',
  '/formulario',
  '/area-paciente',
  '/admin',
  '/video',
  '/video-apresentacao',
  '/servicos',
  '/politica-de-privacidade',
  '/politica-de-cookies',
  '/termos-de-uso',
  '/transparencia-afiliados',
]

export const DEFAULT_GOVERNANCE_CONFIG: SiteGovernanceConfig = {
  adsenseGlobalEnabled: false, // Desativado por padrão até aprovação final e ativação consciente no painel
  adsenseClientId: 'ca-pub-3922432751903141',
  allowedCategories: {
    TDAH: true,
    Autismo: true,
    Ansiedade: true,
    'Dislexia e Aprendizagem': true,
    'Orientação Parental': true,
    'Saúde Mental': true,
  },
  allowedPages: {
    '/blog': true,
    '/blog/[slug]': true,
    '/tdah': false,
    '/autismo': false,
    '/ansiedade': false,
    '/dislexia-aprendizagem': false,
    '/orientacao-parental': false,
    '/saude-mental': false,
    '/': false,
    '/materiais': false,
  },
  noindexRoutes: {
    '/admin': true,
    '/admin/blog': true,
    '/admin/ads': true,
    '/admin/materials': true,
    '/area-paciente': true,
    '/video': true,
    '/download': true,
  },
}

const GOVERNANCE_STORAGE_KEY = 'pd_site_governance_v1'

export function getGovernanceConfig(): SiteGovernanceConfig {
  if (typeof window === 'undefined') {
    return DEFAULT_GOVERNANCE_CONFIG
  }
  try {
    const raw = localStorage.getItem(GOVERNANCE_STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      return {
        ...DEFAULT_GOVERNANCE_CONFIG,
        ...parsed,
        allowedCategories: {
          ...DEFAULT_GOVERNANCE_CONFIG.allowedCategories,
          ...(parsed.allowedCategories || {}),
        },
        allowedPages: {
          ...DEFAULT_GOVERNANCE_CONFIG.allowedPages,
          ...(parsed.allowedPages || {}),
        },
        noindexRoutes: {
          ...DEFAULT_GOVERNANCE_CONFIG.noindexRoutes,
          ...(parsed.noindexRoutes || {}),
        },
      }
    }
  } catch (e) {
    console.warn('Error reading governance config:', e)
  }
  return DEFAULT_GOVERNANCE_CONFIG
}

export function saveGovernanceConfig(config: SiteGovernanceConfig): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(GOVERNANCE_STORAGE_KEY, JSON.stringify(config))
  } catch (e) {
    console.warn('Error saving governance config:', e)
  }
}

export function isAdSenseAllowed(pathname: string, category?: string): boolean {
  // Nunca permitir em rotas proibidas
  if (
    FORBIDDEN_ADSENSE_ROUTES.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`)
    )
  ) {
    return false
  }

  const config = getGovernanceConfig()
  if (!config.adsenseGlobalEnabled) return false

  if (category && config.allowedCategories[category] === false) {
    return false
  }

  if (pathname.startsWith('/blog/') && pathname !== '/blog') {
    return config.allowedPages['/blog/[slug]'] ?? true
  }

  return config.allowedPages[pathname] ?? false
}
