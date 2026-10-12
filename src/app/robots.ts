import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/', '/api/', '/area-paciente', '/video', '/download'],
      },
    ],
    sitemap: 'https://psicologiadireta.com.br/sitemap.xml',
  }
}
