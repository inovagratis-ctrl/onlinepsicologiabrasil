import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Psicologia Direta | Atendimento Online - Autismo, TDAH, Dislexia',
  description: 'Psicologia Direta - Atendimento psicológico online especializado em Autismo (TEA), TDAH, Deficiência Intelectual e Dislexia. Psicóloga Maria do Socorro - CRP 20/07319',
  keywords: ['psicologia online', 'psicólogo online', 'autismo', 'TDAH', 'dislexia', 'deficiência intelectual', 'ABA', 'terapia online', 'CRP 20/07319', 'psicologia direta'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
