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

    // Determine allowed types based on upload type
    const isImage = file.type.startsWith('image/')
    const isPdf = file.type === 'application/pdf'

    // For blog images, only allow images
    // For materials, only allow PDFs
    const isBlogUpload = type === 'blog'
    const isMaterialUpload = type === 'material' || !type

    if (isBlogUpload && !isImage) {
      return NextResponse.json({ error: 'Para blog, apenas arquivos de imagem são aceitos' }, { status: 400 })
    }

    if (isMaterialUpload && !isPdf) {
      return NextResponse.json({ error: 'Para materiais, apenas arquivos PDF são aceitos' }, { status: 400 })
    }

    // If no type specified, allow both images and PDFs (backward compatibility)
    if (!type && !isImage && !isPdf) {
      return NextResponse.json({ error: 'Apenas arquivos de imagem ou PDF são aceitos' }, { status: 400 })
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'Arquivo muito grande. Máximo 5MB' }, { status: 400 })
    }

    const folder = isBlogUpload ? 'blog' : 'materiais'
    const filename = `${folder}/${Date.now()}-${file.name.replace(/\s+/g, '-')}`
    const blob = await put(filename, file, {
      access: 'public',
      contentType: file.type,
    })

    return NextResponse.json({ url: blob.url, success: true })
  } catch (error) {
    console.error('Error uploading file:', error)
    return NextResponse.json({ error: 'Erro ao fazer upload' }, { status: 500 })
  }
}
