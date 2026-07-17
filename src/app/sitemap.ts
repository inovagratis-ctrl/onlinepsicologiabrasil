import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://psicologiadireta.com.br'

  const staticRoutes = [
    '',
    '/agendamento',
    '/blog',
    '/materiais',
    '/video',
    '/video-apresentacao',
    '/formulario',
    '/download',
    '/area-paciente',
  ]

  const lastModified = new Date()

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}