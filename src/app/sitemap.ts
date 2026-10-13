import { MetadataRoute } from 'next'
import { EDITORIAL_ARTICLES } from '@/data/articles'
import { CATEGORY_LIST } from '@/data/categories'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://psicologiadireta.com.br'
  const lastModified = new Date()

  const coreRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/materiais', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/materiais/historias-sociais', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/materiais/pecs', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/materiais/cartoes-sentimentos', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/materiais/estrategias-regulacao', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/materiais/atividades-solicitacao', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/materiais/quadro-rotina', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/materiais/termometro-emocoes', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/materiais/timer-visual', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/sobre', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/metodologia-editorial', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contato', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/politica-de-privacidade', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/politica-de-cookies', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/termos-de-uso', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/transparencia-afiliados', priority: 0.6, changeFrequency: 'yearly' as const },
  ]

  const categoryEntries: MetadataRoute.Sitemap = CATEGORY_LIST.map((cat) => ({
    url: `${baseUrl}/${cat.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  const articleEntries: MetadataRoute.Sitemap = EDITORIAL_ARTICLES.filter((a) => a.published).map(
    (art) => ({
      url: `${baseUrl}/blog/${art.slug}`,
      lastModified: new Date(art.updatedAt || art.createdAt),
      changeFrequency: 'monthly',
      priority: 0.85,
    })
  )

  const staticEntries: MetadataRoute.Sitemap = coreRoutes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  return [...staticEntries, ...categoryEntries, ...articleEntries]
}