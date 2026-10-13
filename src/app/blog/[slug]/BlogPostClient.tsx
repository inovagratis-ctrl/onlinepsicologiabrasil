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
  BookOpen,
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
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 max-w-md text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-3">
            {error || 'Artigo não encontrado'}
          </h1>
          <p className="text-sm text-slate-600 mb-6">
            O conteúdo que você tentou acessar pode ter mudado de endereço. Explore nosso acervo completo abaixo:
          </p>
          <Link href="/blog" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm">
            <ArrowLeft className="w-4 h-4" />
            Voltar para Artigos
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
    <div className="min-h-screen bg-[#F8FAFC] pb-16 text-slate-900">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', url: '/' },
          { name: 'Artigos', url: '/blog' },
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

      {/* Cabeçalho do Artigo (100% Light Mode) */}
      <header className="bg-white border-b border-slate-200 py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-blue-600">
              Início
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600">
              Artigos
            </Link>
            <span>/</span>
            <Link href={categoryHref} className="hover:text-blue-600 font-semibold text-slate-800">
              {post.category}
            </Link>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Link
              href={categoryHref}
              className="bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold px-3 py-1 rounded-full transition-colors"
            >
              Caderno de {post.category}
            </Link>
            <span className="inline-flex items-center gap-1 text-xs text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
              <Clock className="w-3.5 h-3.5" />
              Leitura de {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>

          {/* Bloco de Autoria e Revisão Técnica */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-600">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>
                  Autoria e Revisão Técnica: {post.reviewedBy || PROFESSIONAL_AUTHOR} ({post.reviewerCrp || PROFESSIONAL_CRP})
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Publicado em {formatDate(post.createdAt)}
                </span>
                <span>•</span>
                <span>
                  Última revisão em {formatDate(post.updatedAt || post.createdAt)}
                </span>
                <span>•</span>
                <Link href="/metodologia-editorial" className="underline hover:text-blue-600">
                  Metodologia Editorial
                </Link>
              </div>
            </div>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 px-3.5 py-2 rounded-xl font-semibold self-start sm:self-auto transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              Compartilhar
            </button>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-3xl shadow-2xs border border-slate-200 p-6 md:p-12">
          {/* 1. Resumo Direto Inicial */}
          {post.summaryBox && post.summaryBox.length > 0 && (
            <section
              aria-label="Resumo direto do artigo"
              className="mb-8 rounded-2xl bg-blue-50/70 border border-blue-200 p-5 md:p-6"
            >
              <h2 className="text-base font-bold text-blue-950 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                Resumo Direto: Principais Pontos deste Guia
              </h2>
              <ul className="space-y-2 text-sm text-slate-800 leading-relaxed">
                {post.summaryBox.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="font-bold text-blue-700">•</span>
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
              className="mb-8 rounded-2xl bg-slate-50 border border-slate-200 p-5"
            >
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                <ListOrdered className="w-4 h-4 text-blue-600" />
                Índice deste Artigo
              </h2>
              <ol className="grid sm:grid-cols-2 gap-2 text-sm">
                {post.toc.map((item, idx) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-blue-700 hover:text-blue-900 hover:underline flex items-start gap-1.5"
                    >
                      <span className="font-semibold text-slate-400">{idx + 1}.</span>
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
            className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:scroll-mt-24 prose-p:text-slate-700 prose-p:leading-relaxed prose-li:text-slate-700 prose-strong:text-slate-900 prose-ul:my-4 prose-ol:my-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* 4. Atalho para Ferramenta Gratuita Relacionada */}
          {post.relatedMaterialLink && (
            <div className="my-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                    Ferramenta & Material Imprimível
                  </span>
                  <p className="text-sm font-bold text-slate-900">{post.relatedMaterialLink.title}</p>
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
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors"
              >
                Abrir Material Imprimível <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          <AdSlot position="article-middle" category={post.category} />

          {/* 5. Bloco de Recomendação de Livros e Recursos */}
          <AffiliateBox
            productIds={post.affiliateIds}
            topic={post.categorySlug}
            campaign={`art_${post.slug}`}
          />

          {/* 6. Perguntas Frequentes (FAQ) do Artigo */}
          {post.faqs && post.faqs.length > 0 && (
            <section className="my-10 pt-8 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-blue-600" />
                Perguntas Frequentes sobre este Tema
              </h2>
              <div className="space-y-4">
                {post.faqs.map((faq, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <h3 className="font-bold text-slate-900 text-base mb-2">{faq.question}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 7. Fontes Científicas e Institucionais */}
          {post.sources && post.sources.length > 0 && (
            <section className="my-8 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h2 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <BookMarked className="w-4 h-4 text-blue-600" />
                Referências Científicas e Oficiais Consultadas
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {post.sources.map((src, idx) => (
                  <li key={idx}>
                    • <strong>{src.title}</strong> — {src.institution}
                    {src.year ? ` (${src.year})` : ''}.
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 8. Card da Autora e Revisora Técnica */}
          <section className="my-8 p-6 rounded-2xl bg-blue-50/50 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                Sobre a Autora e Revisora Técnica
              </p>
              <h3 className="text-lg font-bold text-slate-900">
                {PROFESSIONAL_AUTHOR} — {PROFESSIONAL_CRP}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                Psicóloga formada pela UNINORTE, pós-graduada em Autismo (FANI), com formação em ABA Naturalista e especialização em Terapia Cognitivo-Comportamental (TCC). Este artigo tem caráter educativo e informativo.
              </p>
            </div>
            <Link
              href="/sobre"
              className="text-xs font-bold text-blue-700 hover:text-blue-900 underline whitespace-nowrap"
            >
              Sobre o portal →
            </Link>
          </section>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="my-6 flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-slate-400" />
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* 9. CTA de E-books e Materiais Práticos em PDF (100% Light Mode) */}
          <section className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
            <span className="text-xs uppercase tracking-wider text-blue-700 font-bold">
              E-books, Apostilas & Ferramentas Imprimíveis
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-1 mb-2">
              Baixe nossos materiais visuais, checklists e apostilas em PDF
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-2xl">
              Explore quadros de rotina visual, histórias sociais ilustradas, cartões de sentimentos e guias práticos elaborados por {PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP}).
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/materiais"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Ver E-books e Materiais em PDF
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-800 px-5 py-3 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Explorar Mais Artigos
              </Link>
            </div>
          </section>
        </div>

        {/* 10. Artigos Relacionados */}
        {relatedArticles.length > 0 && (
          <section className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Artigos Relacionados para Continuar Lendo
              </h2>
              <Link href={categoryHref} className="text-sm font-bold text-blue-600 hover:underline">
                Ver caderno de {post.category} →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full">
                      {rel.category}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base mt-3 mb-2 line-clamp-2">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {rel.excerpt}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 mt-4 inline-flex items-center gap-1">
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
