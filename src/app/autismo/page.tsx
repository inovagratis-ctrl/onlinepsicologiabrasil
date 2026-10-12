import type { Metadata } from 'next'
import CategoryHubView from '@/components/CategoryHubView'
import { CATEGORY_HUBS } from '@/data/categories'

const hub = CATEGORY_HUBS['autismo']

export const metadata: Metadata = {
  title: `${hub.shortTitle} e Orientação para Pais | Psicologia Direta — CRP 24/02327`,
  description: hub.heroSubtitle,
  alternates: { canonical: 'https://psicologiadireta.com.br/autismo' },
}

export default function AutismoPage() {
  return <CategoryHubView hub={hub} />
}
