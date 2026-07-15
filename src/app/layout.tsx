import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Psicologia Direta | Atendimento Online - Autismo, TDAH, Dislexia',
  description: 'Psicologia Direta - Atendimento psicológico online especializado em Autismo (TEA), TDAH, Deficiência Intelectual e Dislexia. Psicóloga Maria do Socorro - CRP 20/07319',
  keywords: ['psicologia online', 'psicólogo online', 'autismo', 'TDAH', 'dislexia', 'deficiência intelectual', 'ABA', 'terapia online', 'CRP 20/07319', 'psicologia direta'],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Psicologia Direta | Atendimento Online',
    description: 'Atendimento psicológico online especializado em Autismo, TDAH, Dislexia',
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
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Script
          id="adsterra-autotag"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){if(!window.aclib){window.aclib={runAutoTag:function(){var u=arguments;if(!aclib.runAutoTag.q){aclib.runAutoTag.q=[]}aclib.runAutoTag.q.push(u)}};var s=document.createElement('script');s.async='async';s.defer='defer';s.src='//acdn.adnxs.com/ast/ast.js';var p=document.getElementsByTagName('script')[0];p.parentNode.insertBefore(s,p)}})();
              aclib.runAutoTag({zoneId: 'u0rrrdetg1'});
            `,
          }}
        />
      </body>
    </html>
  )
}