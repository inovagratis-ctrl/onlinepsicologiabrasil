import { NextResponse } from 'next/server'
import { put } from '@vercel/blob'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const materialId = formData.get('materialId') as string
    const type = formData.get('type') as string // 'material' | 'blog'

    if (!file) {
      return NextResponse.json({ error: 'Nenhum arquivo enviado' }, { status: 400 })
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'Arquivo muito grande. Máximo 5MB' }, { status: 400 })
    }

    const isImage = file.type.startsWith('image/')
    const isPdf = file.type === 'application/pdf'

    // Validate based on upload type
    const uploadType = type === 'blog' ? 'blog' : type === 'material' ? 'material' : null

    if (type === 'blog') {
      // Blog uploads: only images allowed
      if (!file.type.startsWith('image/')) {
        return NextResponse.json({ error: 'Para blog, apenas arquivos de imagem são aceitos (PNG, JPG, WebP, etc.)' }, { status: 400 })
      }
    } else if (type === 'material') {
      // For materials, allow both PDFs and images
      if (!file.type.startsWith('image/') && file.type !== 'application/pdf') {
        return NextResponse.json({ error: 'Para materiais, apenas arquivos PDF ou imagens são aceitos' }, { status: 400 })
      }
    } else if (!type) {
      // No type specified - allow both images and PDFs (backward compatibility)
      if (!file.type.startsWith('image/') && file.type !== 'application/pdf') {
        return NextResponse.json({ error: 'Apenas arquivos de imagem ou PDF são aceitos' }, { status: 400 })
      }
    } else {
      // Unknown type
      return NextResponse.json({ error: 'Tipo de upload inválido. Use "blog" ou "material"' }, { status: 400 })
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'Arquivo muito grande. Máximo 5MB' }, { status: 400 })
    }

    const folder = type === 'blog' ? 'blog' : 'materiais'
    const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`
    const blob = await put(`${type === 'blog' ? 'blog' : 'materiais'}/${Date.now()}-${file.name.replace(/\s+/g, '-')}`, file, {
      access: 'public',
      contentType: file.type,
    })

    return NextResponse.json({ url: blob.url, success: true })
  } catch (error) {
    console.error('Error uploading file:', error)
    return NextResponse.json({ error: 'Erro ao fazer upload' }, { status: 500 })
  }
}
