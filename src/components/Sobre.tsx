import { GraduationCap, BookOpen, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'

const credentials = [
  {
    icon: ShieldCheck,
    title: 'Registro Profissional Ativo',
    detail: `${PROFESSIONAL_CRP} — Atuação em conformidade com o Código de Ética do CFP`,
  },
  {
    icon: GraduationCap,
    title: 'Formação Acadêmica',
    detail: 'Graduação em Psicologia (UNINORTE) e Pós-Graduação em Autismo (FANI)',
  },
  {
    icon: BookOpen,
    title: 'Abordagens Baseadas em Evidências',
    detail: 'Terapia Cognitivo-Comportamental (TCC) e Práticas de ABA Naturalista',
  },
  {
    icon: HeartHandshake,
    title: 'Escuta Acolhedora e Contextualizada',
    detail: 'Atendimento sem promessas irreais, respeitando o ritmo de cada pessoa e família',
  },
]

export default function Sobre() {
  return (
    <section id="sobre" className="py-16 md:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-600">
            Responsabilidade Clínica e Editorial
          </span>
          <h2 className="section-title mt-1">Quem é a Psicóloga Responsável</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Conheça a formação e os princípios éticos que orientam os conteúdos educativos e os atendimentos psicológicos deste portal
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 bg-gradient-to-br from-primary-50 to-warm-100 rounded-3xl p-8 text-center border border-primary-100">
            <div className="w-56 h-56 mx-auto mb-6 relative">
              <Image
                src="/SOCORRINHA%20PSICOLOGIA%20DIRETA.png"
                alt={`${PROFESSIONAL_AUTHOR} - ${PROFESSIONAL_CRP}`}
                width={224}
                height={224}
                className="rounded-full object-cover shadow-md border-4 border-white"
                priority
                unoptimized
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              Maria do Socorro Araujo Teixeira
            </h3>
            <p className="text-primary-700 font-semibold mb-4">Psicóloga • {PROFESSIONAL_CRP}</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm">
                Psicologia UNINORTE
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm">
                Pós em Autismo (FANI)
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm">
                ABA Naturalista
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm">
                Especialização em TCC
              </span>
            </div>
          </div>

          <div className="md:col-span-7">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ciência Psicológica Aplicada com Ética e Clareza
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                Sou psicóloga graduada pela <strong>Faculdade Barão do Rio Branco (UNINORTE)</strong>, inscrita no Conselho Regional de Psicologia sob o número <strong>{PROFESSIONAL_CRP}</strong>, com pós-graduação em Autismo pela <strong>FANI</strong>, formação em <strong>ABA Naturalista</strong> e especialização em <strong>Terapia Cognitivo-Comportamental (TCC)</strong>.
              </p>
              <p>
                Ao longo da minha trajetória clínica e institucional (incluindo atuação no Serviço Social do Acre — SEAB/SSP/ACRE), compreendi como a orientação clara e livre de estigmas transforma a rotina de pais, educadores e adultos que convivem com <strong>Autismo (TEA), TDAH, Dislexia e Ansiedade</strong>.
              </p>
              <p>
                Cada pessoa e cada família possuem uma história única. Por isso, tanto nos guias abertos deste site quanto nas sessões online, nosso trabalho é pautado pela escuta qualificada, pelo respeito às evidências científicas e pela ausência de fórmulas mágicas ou promessas padronizadas.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {credentials.map((cred, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <cred.icon className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <h4 className="font-bold text-gray-800 text-sm">{cred.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{cred.detail}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-primary-700 transition-colors"
              >
                Ver Currículo e Metodologia Editorial <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/video-apresentacao"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-5 py-3 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                Vídeo de Apresentação
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
