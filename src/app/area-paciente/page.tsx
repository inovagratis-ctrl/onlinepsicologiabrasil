'use client'

import { useState } from 'react'
import { User, Lock, Calendar, FileText, Download, Video } from 'lucide-react'

export default function AreaPaciente() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would authenticate with your backend
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <User className="w-16 h-16 text-primary-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800">Área do Paciente</h1>
            <p className="text-gray-600 mt-2">Acesse seus materiais e histórico</p>
          </div>
          
          <form onSubmit={handleLogin} className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Senha
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Entrar
              </button>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Esqueceu a senha? <a href="#" className="text-primary-600 hover:underline">Recuperar</a>
            </p>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Bem-vindo(a)!</h1>
            <p className="text-gray-600">Sua área personalizada</p>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            Sair
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Próximas Sessões */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary-500" />
                Próximas Sessões
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">Sessão Individual</p>
                    <p className="text-sm text-gray-500">Terça-feira, 15/07/2026</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary-600">14:00</p>
                    <button className="text-sm text-primary-600 hover:underline flex items-center gap-1">
                      <Video className="w-4 h-4" />
                      Entrar
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">Orientação a Pais</p>
                    <p className="text-sm text-gray-500">Quinta-feira, 17/07/2026</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary-600">15:30</p>
                    <button className="text-sm text-primary-600 hover:underline flex items-center gap-1">
                      <Video className="w-4 h-4" />
                      Entrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Rápido */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Ações Rápidas</h2>
              <div className="space-y-2">
                <a href="/agendamento" className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <Calendar className="w-5 h-5 text-primary-500" />
                  <span>Agendar Sessão</span>
                </a>
                <a href="/materiais" className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <FileText className="w-5 h-5 text-primary-500" />
                  <span>Ver Materiais</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <Download className="w-5 h-5 text-primary-500" />
                  <span>Downloads</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Meu Progresso</h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Sessões realizadas</span>
                    <span className="font-medium">8/12</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '66%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Habilidades trabalhadas</span>
                    <span className="font-medium">5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Materiais */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary-500" />
            Materiais para Casa
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Roteiro de Comunicação', type: 'PDF' },
              { name: 'Atividades de Habilidades Sociais', type: 'PDF' },
              { name: 'Cronograma de Rotina', type: 'PDF' },
            ].map((material, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-red-500" />
                  <div>
                    <p className="font-medium text-gray-800">{material.name}</p>
                    <p className="text-sm text-gray-500">{material.type}</p>
                  </div>
                </div>
                <button className="text-primary-600 hover:text-primary-700">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
