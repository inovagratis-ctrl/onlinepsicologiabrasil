'use client'

import { useState } from 'react'
import { Play, ArrowLeft, Phone, Mail, MapPin, Award, Heart, Users, Star } from 'lucide-react'
import Link from 'next/link'

export default function VideoApresentacao() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-primary-600">
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Link>
          <h1 className="text-xl font-bold text-gray-800">Conheça a Psicóloga</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Video Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative aspect-video bg-gray-900">
            {/* Placeholder - Substituir pelo vídeo real */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              {!videoLoaded ? (
                <>
                  <div className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-primary-600 transition">
                    <Play className="w-12 h-12 ml-1" />
                  </div>
                  <p className="text-lg font-semibold">Apresentação da Psicóloga</p>
                  <p className="text-gray-400 text-sm mt-2">Clique para assistir</p>
                </>
              ) : (
                <p className="text-gray-400">Vídeo será inserido aqui</p>
              )}
            </div>
            
            {/* Quando tiver o vídeo, substituir por: */}
            {/* 
            <iframe
              src="URL_DO_VIDEO_YOUTUBE"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            */}
          </div>
          
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Maria do Socorro Araujo Teixeira
            </h2>
            <p className="text-primary-600 font-medium mb-4">CRP 20/07319 • Psicóloga Clínica</p>
            <p className="text-gray-600">
              Assista ao vídeo e conheça um pouco sobre minha trajetória, especialidades e como posso ajudar você ou sua criança.
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Especialidades */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary-500" />
              Especialidades
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
                Autismo (TEA)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
                TDAH (Crianças e Adultos)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
                Deficiência Intelectual
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
                Dislexia
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
                Ansiedade e Síndrome do Pânico
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
                Depressão
              </li>
            </ul>
          </div>

          {/* Abordagens */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-secondary-500" />
              Abordagens Terapêuticas
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary-500 rounded-full" />
                ABA Naturalista
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary-500 rounded-full" />
                Terapia Cognitivo-Comportamental (TCC)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary-500 rounded-full" />
                Análise do Comportamento Aplicada
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Pronta para começar?</h3>
          <p className="text-primary-100 mb-6">
            Agende sua primeira sessão e descubra como podemos ajudar.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/agendamento"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              <Play className="w-5 h-5" />
              Agendar Primeira Sessão - R$ 100
            </a>
            <a
              href="https://wa.me/5568999035300?text=Olá! Assisti ao vídeo e gostaria de agendar uma sessão."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Contato */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <Phone className="w-6 h-6 text-primary-500 mx-auto mb-2" />
            <p className="text-sm text-gray-500">WhatsApp</p>
            <p className="font-semibold text-gray-800">(68) 99903-5300</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <Mail className="w-6 h-6 text-primary-500 mx-auto mb-2" />
            <p className="text-sm text-gray-500">E-mail</p>
            <p className="font-semibold text-gray-800">psicologasocorinha@gmail.com</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <MapPin className="w-6 h-6 text-primary-500 mx-auto mb-2" />
            <p className="text-sm text-gray-500">Atendimento</p>
            <p className="font-semibold text-gray-800">Online em todo o Brasil</p>
          </div>
        </div>
      </div>
    </div>
  )
}
