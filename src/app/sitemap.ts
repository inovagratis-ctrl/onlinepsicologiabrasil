import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://psicologiadireta.com.br'
  const lastModified = new Date()

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/ferramentas', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/testes/ansiedade-gad7', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/testes/burnout', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/ferramentas/plano-autocuidado', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/ferramentas/gerador-documentos', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/ferramentas/checklist-documentos-cfp', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/sobre', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/politica-de-privacidade', priority: 0.7, changeFrequency: 'yearly' as const },
    { path: '/politica-de-cookies', priority: 0.7, changeFrequency: 'yearly' as const },
    { path: '/termos-de-uso', priority: 0.7, changeFrequency: 'yearly' as const },
    { path: '/isencao-de-responsabilidade', priority: 0.7, changeFrequency: 'yearly' as const },
    { path: '/contato', priority: 0.7, changeFrequency: 'yearly' as const },
  ]

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
