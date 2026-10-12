import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  metadataBase: new URL('https://psicologiadireta.com.br'),
  title: {
    default: 'Psicologia Direta | Saúde Mental, Neurodesenvolvimento e Orientação para Famílias (CRP 24/02327)',
    template: '%s | Psicologia Direta',
  },
  description:
    'Portal de utilidade em saúde mental, TDAH, Autismo (TEA), Dislexia, Ansiedade e Orientação Parental, com atendimento psicológico online ético — Psicóloga Maria do Socorro Araujo Teixeira (CRP 24/02327).',
  keywords: [
    'psicologia online',
    'saúde mental',
    'autismo',
    'TDAH',
    'dislexia',
    'orientação parental',
    'ansiedade',
    'terapia cognitivo-comportamental',
    'CRP 24/02327',
    'Maria do Socorro Araujo Teixeira',
    'psicologia direta',
  ],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Psicologia Direta | Saúde Mental e Orientação para Famílias (CRP 24/02327)',
    description:
      'Guias práticos, ferramentas gratuitas e atendimento psicológico online com a Psicóloga Maria do Socorro Araujo Teixeira (CRP 24/02327).',
    url: 'https://psicologiadireta.com.br',
    siteName: 'Psicologia Direta',
    locale: 'pt_BR',
    type: 'website',
    images: ['/icone_base.png'],
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
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  )
}