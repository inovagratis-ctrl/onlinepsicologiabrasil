'use client'

import { useEffect, useState } from 'react'
import { ExternalLink, BookOpen, CheckCircle2, Info } from 'lucide-react'
import {
  AffiliateProduct,
  ETHICAL_AFFILIATE_DISCLAIMER,
  getAffiliatesByIds,
  getAffiliatesByTopic,
  INITIAL_AFFILIATE_PRODUCTS,
} from '@/data/affiliates'
import { buildUtmUrl, trackEvent } from '@/lib/analytics'

interface AffiliateBoxProps {
  productIds?: string[]
  topic?: 'tdah' | 'autismo' | 'ansiedade' | 'dislexia-aprendizagem' | 'orientacao-parental' | 'saude-mental'
  campaign?: string
  title?: string
}

export default function AffiliateBox({
  productIds,
  topic,
  campaign = 'editorial_article',
  title = 'Recursos e Leituras de Apoio Recomendados',
}: AffiliateBoxProps) {
  const [products, setProducts] = useState<AffiliateProduct[]>(() => {
    if (productIds && productIds.length > 0) {
      return INITIAL_AFFILIATE_PRODUCTS.filter((p) => p.active && productIds.includes(p.id))
    }
    if (topic) {
      return INITIAL_AFFILIATE_PRODUCTS.filter((p) => p.active && p.relatedTopics.includes(topic)).slice(0, 2)
    }
    return []
  })

  useEffect(() => {
    if (productIds && productIds.length > 0) {
      setProducts(getAffiliatesByIds(productIds))
    } else if (topic) {
      setProducts(getAffiliatesByTopic(topic).slice(0, 2))
    }
  }, [productIds, topic])

  if (!products || products.length === 0) return null

  const formatVerifiedDate = (dateStr: string) => {
    try {
      return new Date(dateStr + 'T12:00:00').toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    } catch {
      return dateStr
    }
  }

  return (
    <aside
      aria-label="Recomendações editoriais e links de afiliados"
      className="my-10 rounded-2xl border border-amber-200 bg-amber-50/60 p-6 md:p-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary-700" />
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-semibold text-amber-900">
          Recomendação Editorial • Link Afiliado
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-5">
        {products.map((product) => {
          const trackedUrl = buildUtmUrl(product.affiliateUrl, campaign, product.id)
          return (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-gray-500 mb-2">
                  <span className="font-medium text-primary-700 bg-primary-50 px-2.5 py-0.5 rounded-full">
                    {product.category}
                  </span>
                  <span>Parceiro: {product.partnerName}</span>
                </div>

                <h4 className="font-bold text-gray-800 text-base mb-2">{product.title}</h4>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{product.description}</p>

                <div className="bg-gray-50 rounded-lg p-3 mb-3 text-xs text-gray-700 space-y-1">
                  <p>
                    <strong className="text-gray-800">Por que faz sentido:</strong> {product.whyRecommended}
                  </p>
                  <p>
                    <strong className="text-gray-800">Indicado para:</strong> {product.targetAudience}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-600" />
                  Link verificado em {formatVerifiedDate(product.lastVerified)}
                </span>

                <a
                  href={trackedUrl}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  onClick={() =>
                    trackEvent('click_affiliate', {
                      item_id: product.id,
                      label: product.title,
                      category: product.category,
                      location: campaign,
                    })
                  }
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 text-xs font-semibold transition-colors"
                >
                  Conferir na {product.partnerName}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex items-start gap-2.5 rounded-xl bg-white/80 border border-amber-200/80 p-3.5 text-xs text-gray-600 leading-relaxed">
        <Info className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
        <p>
          <strong>Transparência Editorial:</strong> {ETHICAL_AFFILIATE_DISCLAIMER}{' '}
          <a href="/transparencia-afiliados" className="text-primary-700 underline hover:text-primary-800">
            Saiba mais sobre nossa política de indicações
          </a>
          .
        </p>
      </div>
    </aside>
  )
}
