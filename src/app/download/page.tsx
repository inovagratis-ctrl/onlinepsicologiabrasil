'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Download, CheckCircle, XCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'

interface Material {
  name: string
  pdfUrl: string
}

function DownloadContent() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const [material, setMaterial] = useState<Material | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (token) {
      fetchDownload()
    } else {
      setLoading(false)
      setError('Token de download não encontrado')
    }
  }, [token])

  const fetchDownload = async () => {
    try {
      const response = await fetch(`/api/materials/download?token=${token}`)
      const data = await response.json()
      
      if (data.success) {
        setMaterial(data.material)
      } else {
        setError(data.error || 'Erro ao carregar material')
      }
    } catch (err) {
      setError('Erro ao conectar com o servidor')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-primary-500 mx-auto mb-4 animate-spin" />
          <p className="text-gray-600">Carregando material...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <XCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Erro</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link href="/" className="btn-primary">
            Voltar ao Início
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Pagamento Aprovado!</h1>
        <p className="text-gray-600 mb-6">
          Seu material <strong>{material?.name}</strong> está pronto para download.
        </p>
        
        {token && (
          <a
            href={`/api/materials/download?token=${token}&download=true`}
            className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg"
          >
            <Download className="w-5 h-5" />
            Baixar PDF
          </a>
        )}

        <div className="mt-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function DownloadPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-primary-500 mx-auto mb-4 animate-spin" />
      </div>
    }>
      <DownloadContent />
    </Suspense>
  )
}
