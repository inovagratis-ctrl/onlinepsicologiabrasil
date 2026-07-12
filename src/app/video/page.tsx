'use client'

import { useState } from 'react'
import { Video, Copy, Check, Users, Shield, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function VideoPage() {
  const [roomName, setRoomName] = useState('')
  const [generatedLink, setGeneratedLink] = useState('')
  const [copied, setCopied] = useState(false)

  const generateRoom = () => {
    const name = roomName || `sessao-${Date.now().toString(36)}`
    const link = `https://meet.jit.si/${name}`
    setGeneratedLink(link)
  }

  const copyLink = () => {
    navigator.clipboard.writeText(generatedLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const openVideo = () => {
    window.open(generatedLink, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-primary-600">
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Link>
          <h1 className="text-xl font-bold text-gray-800">Sessão de Videochamada</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Video className="w-10 h-10 text-primary-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Videochamada Segura</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Realize suas sessões de atendimento psicológico por videochamada gratuita e segura
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <Shield className="w-8 h-8 text-accent-500 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800">Criptografado</h3>
            <p className="text-sm text-gray-500">Conexão segura e sigilosa</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <Users className="w-8 h-8 text-primary-500 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800">Gratuito</h3>
            <p className="text-sm text-gray-500">Sem custos adicionais</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <Clock className="w-8 h-8 text-secondary-500 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800">Fácil</h3>
            <p className="text-sm text-gray-500">Sem necessidade de cadastro</p>
          </div>
        </div>

        {/* Generator */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Criar Sala de Videochamada</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome da Sala (opcional)
              </label>
              <input
                type="text"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                placeholder="Ex: sessao-maria-15jul"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">
                Se deixar em branco, será gerado automaticamente
              </p>
            </div>

            <button
              onClick={generateRoom}
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <Video className="w-5 h-5" />
              Gerar Link da Sala
            </button>
          </div>

          {/* Generated Link */}
          {generatedLink && (
            <div className="mt-6 p-4 bg-accent-50 rounded-xl border border-accent-200">
              <h4 className="font-semibold text-gray-800 mb-2">Link Gerado:</h4>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={generatedLink}
                  readOnly
                  className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm"
                />
                <button
                  onClick={copyLink}
                  className="flex items-center gap-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copiado!' : 'Copiar'}
                </button>
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={openVideo}
                  className="flex-1 btn-primary flex items-center justify-center gap-2"
                >
                  <Video className="w-5 h-5" />
                  Entrar na Sala
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                📱 Envie este link para o paciente via WhatsApp. Ele não precisa ter cadastro!
              </p>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Como Usar</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm">1</span>
                Para a Psicóloga
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-accent-500">•</span>
                  Crie uma sala com nome personalizado
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500">•</span>
                  Copie o link gerado
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500">•</span>
                  Envie para o paciente via WhatsApp
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500">•</span>
                  No horário marcado, entre na sala
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-secondary-500 text-white rounded-full flex items-center justify-center text-sm">2</span>
                Para o Paciente
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-accent-500">•</span>
                  Receba o link via WhatsApp
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500">•</span>
                  Clique no link no horário da sessão
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500">•</span>
                  Permita acesso à câmera e microfone
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500">•</span>
                  Pronto! A sessão vai começar
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Videochamada via Jitsi Meet • Criptografia de ponta a ponta</p>
          <p>Conforme LGPD e CFP 11/2018</p>
        </div>
      </div>
    </div>
  )
}
