import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plano Pessoal de Autocuidado e Segurança Emocional',
  description:
    'Roteiro interativo e privado para organizar suas estratégias de alívio, âncoras de tranquilidade, rede de apoio e contatos em momentos de sobrecarga. Gerador de PDF gratuito.',
  alternates: {
    canonical: 'https://psicologiadireta.com.br/ferramentas/plano-autocuidado',
  },
}

export default function PlanoAutocuidadoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
