'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Clock,
  Calendar,
  Tag,
  Share2,
  ShieldCheck,
  CheckCircle2,
  ListOrdered,
  BookMarked,
  HelpCircle,
  FileText,
  ArrowRight,
  MessageCircle,
} from 'lucide-react'
import AdSlot from '@/components/AdSlot'
import AffiliateBox from '@/components/AffiliateBox'
import {
  getRelatedArticles,
  EditorialArticle,
  PROFESSIONAL_AUTHOR,
  PROFESSIONAL_CRP,
} from '@/data/articles'
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'
import { trackEvent } from '@/lib/analytics'

export default function BlogPostClient({ post }: { post: EditorialArticle }) {
  const [error] = useState('')

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    } catch {
      return dateStr
    }
  }

  const handleShare = () => {
    if (typeof window === 'undefined') return
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link do artigo copiado para a área de transferência!')
    }
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-warm-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 max-w-md text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            {error || 'Artigo não encontrado'}
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            O conteúdo que você tentou acessar pode ter mudado de endereço. Explore nosso acervo completo abaixo:
          </p>
          <Link href="/blog" className="btn-primary text-sm inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Blog
          </Link>
        </div>
      </div>
    )
  }

  const tags = post.tags
    ? post.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean)
    : []

  const relatedArticles = getRelatedArticles(post.slug, post.categorySlug || 'saude-mental', 3)
  const categoryHref = post.categorySlug ? `/${post.categorySlug}` : '/saude-mental'

  return (
    <div className="min-h-screen bg-warm-50 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.category, url: categoryHref },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        slug={post.slug}
        datePublished={post.createdAt}
        dateModified={post.updatedAt || post.createdAt}
        category={post.category}
      />
      {post.faqs && post.faqs.length > 0 && <FAQJsonLd faqs={post.faqs} />}

      {/* Cabeçalho do Artigo */}
      <header className="bg-gradient-to-br from-primary-800 via-primary-700 to-secondary-800 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="text-xs text-primary-100 mb-5 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:underline">
              Início
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <span>/</span>
            <Link href={categoryHref} className="hover:underline font-medium text-white">
              {post.category}
            </Link>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Link
              href={categoryHref}
              className="bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full transition-colors"
            >
              Guia de {post.category}
            </Link>
            <span className="inline-flex items-center gap-1 text-xs text-primary-100 bg-black/20 px-3 py-1 rounded-full">
              <Clock className="w-3.5 h-3.5" />
              Leitura de {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6">
            {post.title}
          </h1>

          {/* Bloco de Autoria e Revisão Clínica Obrigatória (CFP / YMYL) */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-primary-50">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-semibold text-white text-sm">
                <ShieldCheck className="w-4 h-4 text-accent-300 flex-shrink-0" />
                <span>
                  Autoria e Revisão Clínica: {post.reviewedBy || PROFESSIONAL_AUTHOR} ({post.reviewerCrp || PROFESSIONAL_CRP})
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-primary-100">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Publicado em {formatDate(post.createdAt)}
                </span>
                <span>•</span>
                <span>
                  Última revisão em {formatDate(post.updatedAt || post.createdAt)}
                </span>
                <span>•</span>
                <Link href="/metodologia-editorial" className="underline hover:text-white">
                  Metodologia Editorial
                </Link>
              </div>
            </div>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white px-3.5 py-2 rounded-xl font-medium self-start sm:self-auto transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              Compartilhar
            </button>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl shadow-md border border-gray-200 p-6 md:p-12">
          {/* 1. Resumo Direto Inicial (O Que Você Vai Aprender) */}
          {post.summaryBox && post.summaryBox.length > 0 && (
            <section
              aria-label="Resumo direto do artigo"
              className="mb-8 rounded-2xl bg-primary-50/80 border border-primary-200 p-5 md:p-6"
            >
              <h2 className="text-base font-bold text-primary-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary-700" />
                Resumo Direto: Principais Pontos deste Guia
              </h2>
              <ul className="space-y-2 text-sm text-gray-800 leading-relaxed">
                {post.summaryBox.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="font-bold text-primary-700">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 2. Índice de Conteúdo (TOC) */}
          {post.toc && post.toc.length > 0 && (
            <nav
              aria-label="Índice de conteúdo do artigo"
              className="mb-8 rounded-2xl bg-gray-50 border border-gray-200 p-5"
            >
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-3 flex items-center gap-2">
                <ListOrdered className="w-4 h-4 text-primary-600" />
                Índice deste Artigo
              </h2>
              <ol className="grid sm:grid-cols-2 gap-2 text-sm">
                {post.toc.map((item, idx) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-primary-700 hover:text-primary-900 hover:underline flex items-start gap-1.5"
                    >
                      <span className="font-semibold text-gray-400">{idx + 1}.</span>
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <AdSlot position="article-top" category={post.category} />

          {/* 3. Corpo Principal do Artigo */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:scroll-mt-24 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900 prose-ul:my-4 prose-ol:my-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* 4. Atalho para Ferramenta Gratuita Relacionada */}
          {post.relatedMaterialLink && (
            <div className="my-8 p-5 rounded-2xl bg-accent-50 border border-accent-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-accent-700 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-800 block">
                    Ferramenta Prática Gratuita
                  </span>
                  <p className="text-sm font-bold text-gray-800">{post.relatedMaterialLink.title}</p>
                </div>
              </div>
              <Link
                href={post.relatedMaterialLink.href}
                onClick={() =>
                  trackEvent('download_material', {
                    label: post.relatedMaterialLink?.title,
                    location: `article_${post.slug}`,
                  })
                }
                className="inline-flex items-center gap-1.5 bg-accent-600 hover:bg-accent-700 text-white px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors"
              >
                Abrir Ferramenta Imprimível <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          <AdSlot position="article-middle" category={post.category} />

          {/* 5. Bloco de Recomendação de Afiliados Éticos */}
          <AffiliateBox
            productIds={post.affiliateIds}
            topic={post.categorySlug}
            campaign={`art_${post.slug}`}
          />

          {/* 6. Perguntas Frequentes (FAQ) do Artigo */}
          {post.faqs && post.faqs.length > 0 && (
            <section className="my-10 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary-600" />
                Perguntas Frequentes sobre este Tema
              </h2>
              <div className="space-y-4">
                {post.faqs.map((faq, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                    <h3 className="font-bold text-gray-800 text-base mb-2">{faq.question}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 7. Fontes Científicas e Institucionais */}
          {post.sources && post.sources.length > 0 && (
            <section className="my-8 p-5 rounded-2xl bg-gray-50 border border-gray-200">
              <h2 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                <BookMarked className="w-4 h-4 text-primary-600" />
                Referências Científicas e Oficiais Consultadas
              </h2>
              <ul className="space-y-1.5 text-xs text-gray-600">
                {post.sources.map((src, idx) => (
                  <li key={idx}>
                    • <strong>{src.title}</strong> — {src.institution}
                    {src.year ? ` (${src.year})` : ''}.
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 8. Card da Autora e Revisora Clínica */}
          <section className="my-8 p-6 rounded-2xl bg-primary-50/60 border border-primary-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-primary-700 uppercase tracking-wider">
                Sobre a Autora e Revisora Técnica
              </p>
              <h3 className="text-lg font-bold text-gray-800">
                {PROFESSIONAL_AUTHOR} — {PROFESSIONAL_CRP}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-2xl">
                Psicóloga clínica formada pela UNINORTE, pós-graduada em Autismo (FANI), com formação em ABA Naturalista e especialização em Terapia Cognitivo-Comportamental (TCC). Este texto tem caráter educativo e não substitui avaliação individualizada.
              </p>
            </div>
            <Link
              href="/sobre"
              className="text-xs font-semibold text-primary-700 hover:text-primary-900 underline whitespace-nowrap"
            >
              Conhecer trajetória →
            </Link>
          </section>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="my-6 flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-gray-400" />
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* 9. CTA Ético de Atendimento (Separado de Anúncios) */}
          <section className="mt-10 bg-gradient-to-br from-primary-800 to-secondary-800 text-white rounded-2xl p-6 md:p-8">
            <span className="text-xs uppercase tracking-wider text-primary-200 font-semibold">
              Acompanhamento Profissional Individualizado
            </span>
            <h3 className="text-xl md:text-2xl font-bold mt-1 mb-2">
              Deseja orientação psicológica personalizada para o seu caso ou para sua família?
            </h3>
            <p className="text-sm text-primary-100 leading-relaxed mb-6 max-w-2xl">
              Conheça como funcionam as sessões online de psicoterapia e orientação parental com a {PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP}).
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/agendamento"
                onClick={() => trackEvent('start_booking', { location: `article_cta_${post.slug}` })}
                className="inline-flex items-center gap-2 bg-white text-primary-800 px-5 py-3 rounded-xl font-semibold text-sm hover:bg-primary-50 transition-colors"
              >
                Agende uma Conversa
              </Link>
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 bg-primary-700/60 border border-white/30 text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-primary-700 transition-colors"
              >
                Conhecer os Serviços
              </Link>
              <a
                href="https://wa.me/5568999035300?text=Ol%C3%A1!%20Li%20um%20artigo%20no%20site%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20atendimento."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_whatsapp', { location: `article_cta_${post.slug}` })}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Tire suas Dúvidas
              </a>
            </div>
          </section>
        </div>

        {/* 10. Artigos Relacionados */}
        {relatedArticles.length > 0 && (
          <section className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Artigos Relacionados para Continuar Lendo
              </h2>
              <Link href={categoryHref} className="text-sm font-semibold text-primary-600 hover:underline">
                Ver guia de {post.category} →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="bg-white rounded-2xl border border-gray-200 p-5 hover:border-primary-400 hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-2.5 py-0.5 rounded-full">
                      {rel.category}
                    </span>
                    <h3 className="font-bold text-gray-800 text-base mt-3 mb-2 line-clamp-2">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {rel.excerpt}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-primary-600 mt-4 inline-flex items-center gap-1">
                    Ler artigo <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  )
}
