import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    const post = await prisma.blogPost.findFirst({
      where: { OR: [{ id }, { slug: id }] },
    })

    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Post não encontrado' },
        { status: 404 }
      )
    }

    if (!post.published) {
      const authHeader = request.headers.get('authorization')
      if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD || 'socorrinha2026'}`) {
        return NextResponse.json(
          { success: false, error: 'Post não encontrado' },
          { status: 404 }
        )
      }
    }

    await prisma.blogPost.update({
      where: { id: post.id },
      data: { viewCount: { increment: 1 } },
    })

    return NextResponse.json({ success: true, post })
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return NextResponse.json(
      { success: false, error: 'Erro ao buscar post' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const body = await request.json()

    const existingPost = await prisma.blogPost.findUnique({ where: { id } })
    if (!existingPost) {
      return NextResponse.json(
        { success: false, error: 'Post não encontrado' },
        { status: 404 }
      )
    }

    let slug = existingPost.slug
    if (body.title && body.title !== existingPost.title) {
      slug = body.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()

      const slugExists = await prisma.blogPost.findFirst({
        where: { slug, id: { not: id } },
      })
      if (slugExists) {
        slug = `${slug}-${Date.now()}`
      }
    }

    const post = await prisma.blogPost.update({
      where: { id },
      data: {
        slug,
        title: body.title ?? existingPost.title,
        excerpt: body.excerpt ?? existingPost.excerpt,
        content: body.content ?? existingPost.content,
        category: body.category ?? existingPost.category,
        image: body.image !== undefined ? body.image : existingPost.image,
        author: body.author ?? existingPost.author,
        readTime: body.readTime ?? existingPost.readTime,
        published: body.published !== undefined ? body.published : existingPost.published,
        featured: body.featured !== undefined ? body.featured : existingPost.featured,
        tags: body.tags !== undefined ? body.tags : existingPost.tags,
        metaTitle: body.metaTitle !== undefined ? body.metaTitle : existingPost.metaTitle,
        metaDescription: body.metaDescription !== undefined ? body.metaDescription : existingPost.metaDescription,
      },
    })

    return NextResponse.json({ success: true, post })
  } catch (error) {
    console.error('Error updating blog post:', error)
    return NextResponse.json(
      { success: false, error: 'Erro ao atualizar post' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    const post = await prisma.blogPost.findUnique({ where: { id } })
    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Post não encontrado' },
        { status: 404 }
      )
    }

    await prisma.blogPost.delete({ where: { id } })

    return NextResponse.json({ success: true, message: 'Post excluído com sucesso' })
  } catch (error) {
    console.error('Error deleting blog post:', error)
    return NextResponse.json(
      { success: false, error: 'Erro ao excluir post' },
      { status: 500 }
    )
  }
}
