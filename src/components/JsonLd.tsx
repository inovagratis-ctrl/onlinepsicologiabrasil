import React from 'react'
import { PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'

const SITE_URL = 'https://psicologiadireta.com.br'

export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Psicologia Direta — Maria do Socorro Araujo Teixeira',
    url: SITE_URL,
    logo: `${SITE_URL}/logo_completa_base.png`,
    description:
      'Portal de utilidade em saúde mental, neurodesenvolvimento e orientação para famílias, com atendimento psicológico online ético (CRP 24/02327).',
    medicalSpecialty: 'Psychiatric',
    founder: {
      '@type': 'Person',
      name: 'Maria do Socorro Araujo Teixeira',
      jobTitle: 'Psicóloga Clínica',
      identifier: PROFESSIONAL_CRP,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-68-99903-5300',
      contactType: 'customer service',
      availableLanguage: ['Portuguese'],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  if (!faqs || faqs.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ArticleJsonLd({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  category,
}: {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified: string
  category: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Article', 'MedicalWebPage'],
    headline: title,
    description,
    articleSection: category,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: PROFESSIONAL_AUTHOR,
      jobTitle: `Psicóloga (${PROFESSIONAL_CRP})`,
      url: `${SITE_URL}/sobre`,
    },
    reviewedBy: {
      '@type': 'Person',
      name: PROFESSIONAL_AUTHOR,
      jobTitle: `Psicóloga Responsável (${PROFESSIONAL_CRP})`,
      url: `${SITE_URL}/metodologia-editorial`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Psicologia Direta',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo_completa_base.png`,
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
