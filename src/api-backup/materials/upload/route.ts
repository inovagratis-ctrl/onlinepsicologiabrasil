import { NextResponse } from 'next/server'
import { put } from '@vercel/blob'

export async function POST(request: Request) {
  try {
    console.log('[UPLOAD] Iniciando upload...')
    const formData = await request.formData()
    const file = formData.get('file') as File
    const materialId = formData.get('materialId') as string
    const type = formData.get('type') as string // 'material' | 'blog'

    console.log('[UPLOAD] Iniciando upload...')
    console.log('[UPLOAD] File received:', file?.name, file?.type, file?.size)
    console.log('[UPLOAD] Type param:', type)

    if (!file) {
      console.log('[UPLOAD ERROR] No file provided')
      return NextResponse.json({ error: 'Nenhum arquivo enviado' }, { status: 400 })
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'Arquivo muito grande. Máximo 5MB' }, { status: 400 })
    }

    const isImage = file.type.startsWith('image/')
    const isPdf = file.type === 'application/pdf'

    console.log('[UPLOAD] File info:', { name: file.name, type: file.type, size: file.size })

    // Validate based on upload type
    if (type === 'blog') {
      if (!file.type.startsWith('image/')) {
        return NextResponse.json({ error: 'Para blog, apenas arquivos de imagem são aceitos (PNG, JPG, WebP, etc.)' }, { status: 400 })
      }
    } else if (type === 'material') {
      if (!file.type.startsWith('image/') && file.type !== 'application/pdf') {
        return NextResponse.json({ error: 'Para materiais, apenas arquivos PDF ou imagens são aceitos' }, { status: 400 })
      }
    } else if (!type) {
      // No type specified - allow both images and PDFs (backward compatibility)
      if (!file.type.startsWith('image/') && file.type !== 'application/pdf') {
        return NextResponse.json({ error: 'Apenas arquivos de imagem ou PDF são aceitos' }, { status: 400 })
      }
    } else {
      return NextResponse.json({ error: 'Tipo de upload inválido. Use "blog" ou "material"' }, { status: 400 })
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'Arquivo muito grande. Máximo 5MB' }, { status: 400 })
    }

    console.log('[UPLOAD] Starting Vercel Blob upload...')
    let blob
    try {
      const blob = await put(`blog/${Date.now()}-${file.name.replace(/\s+/g, '-')}`, file, {
        access: 'public',
        contentType: file.type,
      })
      console.log('[UPLOAD] Blob upload success:', blob.url)
      
      return NextResponse.json({ url: blob.url, success: true })
    } catch (blobError: any) {
      console.error('[UPLOAD] Blob error:', blobError)
      
      // Specific error handling for common Vercel Blob issues
      if (blobError.message?.includes('BLOB_READ_WRITE_TOKEN')) {
        return NextResponse.json({ 
          error: 'Token do Vercel Blob não configurado. Configure BLOB_READ_WRITE_TOKEN no Vercel.',
          details: blobError.message
        }, { status: 500 })
      }
      if (blobError.message?.includes('quota') || blobError.message?.includes('storage')) {
        return NextResponse.json({ 
          error: 'Limite de storage do Vercel Blob excedido',
          details: blobError.message 
        }, { status: 507 })
      }
      if (blobError.message?.includes('unauthorized') || blobError.message?.includes('401')) {
        return NextResponse.json({ 
          error: 'Token do Vercel Blob inválido ou expirado',
          details: blobError.message 
        }, { status: 401 })
      }
      if (blobError.message?.includes('413') || blobError.message?.includes('too large')) {
        return NextResponse.json({ 
          error: 'Arquivo muito grande para o Vercel Blob',
          details: blobError.message 
        }, { status: 413 })
      }
      // Generic blob error
      console.error('[UPLOAD] Blob error details:', blobError)
      return NextResponse.json({ 
        error: 'Erro no Vercel Blob', 
        details: blobError.message 
      }, { status: 500 })
    }
  } catch (error: any) {
    console.error('[UPLOAD] General error:', error)
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? error.message 
      : 'Erro ao fazer upload'
    return NextResponse.json({ 
      error: errorMessage,
      details: error.message 
    }, { status: 500 })
  }
}