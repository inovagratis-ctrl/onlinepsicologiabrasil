import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  metadataBase: new URL('https://psicologiadireta.com.br'),
  title: {
    default: 'Psicologia Direta | Ferramentas & Psicoeducação',
    template: '%s | Psicologia Direta',
  },
  description:
    'Portal de ferramentas e rastreios psicológicos educativos (Ansiedade GAD-7, Questionário de Burnout) e modelos de documentos para psicólogos (Resolução CFP nº 06/2019) — Plataforma Digital de Triagem Psicoeducativa e Gestão Documental.',
  keywords: [
    'teste de ansiedade online gratuito',
    'escala gad-7 com relatorio pdf',
    'questionario de burnout educativo',
    'rastreio de estresse ocupacional',
    'gerador de declaracao de comparecimento psicologia cfp',
    'recibo carne leao psicologo valor por extenso',
    'contrato terapeutico psicologia',
    'ferramentas clinicas gratuitas',
    'psicologia direta',
    'gestao documental psicologia',
  ],
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Psicologia Direta | Plataforma Digital de Triagem Psicoeducativa e Gestão Documental',
    description:
      'Escalas educativas de rastreio, relatórios em PDF e modelos de documentos profissionais para psicólogos — Plataforma Digital de Triagem Psicoeducativa e Gestão Documental.',
    url: 'https://psicologiadireta.com.br',
    siteName: 'Psicologia Direta',
    locale: 'pt_BR',
    type: 'website',
    images: ['/logo-psicologia-direta.png'],
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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3922432751903141"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}