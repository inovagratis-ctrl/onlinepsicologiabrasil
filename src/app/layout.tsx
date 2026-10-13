import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  metadataBase: new URL('https://psicologiadireta.com.br'),
  title: {
    default: 'Psicologia Direta | Artigos, Guias Práticos e E-books de Saúde Mental (CRP 24/02327)',
    template: '%s | Psicologia Direta',
  },
  description:
    'Portal editorial de artigos, guias práticos, materiais imprimíveis e e-books sobre saúde mental, TDAH, Autismo (TEA), Dislexia, Ansiedade e Orientação Parental — Revisão Técnica: Psicóloga Maria do Socorro Araujo Teixeira (CRP 24/02327).',
  keywords: [
    'artigos de psicologia',
    'saúde mental',
    'autismo',
    'TDAH',
    'dislexia',
    'orientação parental',
    'ansiedade',
    'e-books de psicologia',
    'materiais psicoeducativos',
    'CRP 24/02327',
    'Maria do Socorro Araujo Teixeira',
    'psicologia direta',
  ],
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/psicologia-direta/02-logo-mark-transparente.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/assets/psicologia-direta/02-logo-mark-transparente.png',
  },
  openGraph: {
    title: 'Psicologia Direta | Artigos, Guias Práticos e E-books (CRP 24/02327)',
    description:
      'Artigos aprofundados, ferramentas gratuitas, materiais imprimíveis e e-books revisados pela Psicóloga Maria do Socorro Araujo Teixeira (CRP 24/02327).',
    url: 'https://psicologiadireta.com.br',
    siteName: 'Psicologia Direta',
    locale: 'pt_BR',
    type: 'website',
    images: ['/assets/psicologia-direta/03-hero-home.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="google-adsense-account" content="ca-pub-3922432751903141" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Script
          id="adsbygoogle"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3922432751903141"
          strategy="afterInteractive"
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}