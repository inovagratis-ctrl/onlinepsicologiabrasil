import { EDITORIAL_ARTICLES, getArticleBySlug } from '@/data/articles'
import BlogPostClient from './BlogPostClient'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export async function generateStaticParams() {
  return EDITORIAL_ARTICLES.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getArticleBySlug(params.slug)
  if (!post) {
    return {
      title: 'Artigo | Psicologia Direta',
    }
  }

  return {
    title: `${post.title} | Psicologia Direta`,
    description: post.excerpt,
    alternates: {
      canonical: `https://psicologiadireta.com.br/blog/${post.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getArticleBySlug(params.slug)
  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}
