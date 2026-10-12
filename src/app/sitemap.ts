import { MetadataRoute } from 'next'
import { EDITORIAL_ARTICLES } from '@/data/articles'
import { CATEGORY_LIST } from '@/data/categories'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://psicologiadireta.com.br'
  const lastModified = new Date()

  // Apenas páginas públicas de valor editorial, utilitário, institucional e legal (excluindo /admin, /area-paciente, /video, /download)
  const coreRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/servicos', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/materiais', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/sobre', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/metodologia-editorial', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/agendamento', priority: 0.8, changeFrequency: 'weekly' as const },
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