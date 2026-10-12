import { NextResponse } from 'next/server'
import { EDITORIAL_ARTICLES } from '@/data/articles'

export async function GET() {
  const featured = EDITORIAL_ARTICLES.filter((p) => p.published && p.featured).slice(0, 6)
  return NextResponse.json({ success: true, posts: featured })
}
