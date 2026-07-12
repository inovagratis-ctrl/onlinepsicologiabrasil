import { NextResponse } from 'next/server'
import { put } from '@vercel/blob'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const materialId = formData.get('materialId') as string

    if (!file) {
      return NextResponse.json({ error: 'Nenhum arquivo enviado' }, { status: 400 })
    }

    if (file.type !== 'application/pdf') {
      return NextResponse.json({ error: 'Apenas arquivos PDF são aceitos' }, { status: 400 })
    }

    const filename = `materiais/${materialId || Date.now()}-${file.name}`
    const blob = await put(filename, file, {
      access: 'public',
      contentType: 'application/pdf',
    })

    return NextResponse.json({ url: blob.url, success: true })
  } catch (error) {
    console.error('Error uploading file:', error)
    return NextResponse.json({ error: 'Erro ao fazer upload' }, { status: 500 })
  }
}
