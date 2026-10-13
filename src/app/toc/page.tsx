import type { Metadata } from 'next'
import CategoryHubView from '@/components/CategoryHubView'
import { CATEGORY_HUBS } from '@/data/categories'

const hub = CATEGORY_HUBS['toc']

export const metadata: Metadata = {
  title: `${hub.shortTitle} | Psicologia Direta — CRP 24/02327`,
  description: hub.heroSubtitle,
  alternates: { canonical: 'https://psicologiadireta.com.br/toc' },
}

export default function TocPage() {
  return <CategoryHubView hub={hub} />
}
