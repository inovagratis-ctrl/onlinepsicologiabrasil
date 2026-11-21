import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Checklist de Conformidade Ética Documental (Resolução CFP nº 06/2019)',
  description:
    'Ferramenta interativa para psicólogos conferirem itens obrigatórios e vedações éticas antes da emissão de declarações, atestados, relatórios e recibos clínicos.',
  alternates: {
    canonical: 'https://psicologiadireta.com.br/ferramentas/checklist-documentos-cfp',
  },
}

export default function ChecklistCfpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
