import { NextResponse } from 'next/server'

let prisma: any = null

async function getPrisma() {
  try {
    const { prisma: p } = await import('@/lib/prisma')
    prisma = p
    return prisma
  } catch {
    return null
  }
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const db = await getPrisma()
    if (!db) {
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 })
    }

    const post = await db.blogPost.findUnique({ where: { id: params.id } })
    if (!post) {
      return NextResponse.json({ error: 'Post não encontrado' }, { status: 404 })
    }

    return NextResponse.json({ post, success: true })
  } catch (error) {
    console.error('Error fetching post:', error)
    return NextResponse.json({ error: 'Erro ao buscar post' }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const db = await getPrisma()
    if (!db) {
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 })
    }

    const body = await request.json()
    const { slug, title, excerpt, content, category, image, readTime, published } = body

    const post = await db.blogPost.update({
      where: { id: params.id },
      data: {
        ...(slug && { slug }),
        ...(title && { title }),
        ...(excerpt !== undefined && { excerpt }),
        ...(content && { content }),
        ...(category && { category }),
        ...(image !== undefined && { image }),
        ...(readTime && { readTime }),
        ...(published !== undefined && { published }),
      },
    })

    return NextResponse.json({ post, success: true })
  } catch (error) {
    console.error('Error updating post:', error)
    return NextResponse.json({ error: 'Erro ao atualizar post' }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const db = await getPrisma()
    if (!db) {
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 })
    }

    await db.blogPost.delete({ where: { id: params.id } })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting post:', error)
    return NextResponse.json({ error: 'Erro ao deletar post' }, { status: 500 })
  }
}
