import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, Clock, Shield, Heart, PhoneCall } from 'lucide-react'
import { CATEGORY_LIST } from '@/data/categories'
import { PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Faixa informativa de emergência (CVV 188) */}
      <div className="bg-gray-800 border-b border-gray-700 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-300">
          <span className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>
              <strong>Importante:</strong> Este site não realiza atendimento de urgência ou emergência médica/psiquiátrica.
            </span>
          </span>
          <span>
            Em crise aguda, ligue gratuitamente para o <strong>CVV (188 — 24h)</strong> ou acione o <strong>SAMU (192)</strong>.
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo_completa_base.png"
                alt="Psicologia Direta"
                width={180}
                height={50}
                className="rounded-lg"
                unoptimized
              />
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed max-w-sm">
              Portal de utilidade em saúde mental, neurodesenvolvimento e orientação para famílias, aliado ao atendimento psicológico online ético.
            </p>
            <div className="space-y-1.5 text-sm text-gray-300">
              <div className="flex items-center gap-2 font-semibold text-white">
                <Shield className="w-4 h-4 text-primary-400" />
                <span>
                  {PROFESSIONAL_AUTHOR} — {PROFESSIONAL_CRP}
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Atuação regulamentada conforme Resolução CFP nº 11/2018 e Código de Ética do Psicólogo.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-200">
              Guias e Especialidades
            </h3>
            <div className="space-y-2 text-sm">
              {CATEGORY_LIST.map((hub) => (
                <Link
                  key={hub.slug}
                  href={`/${hub.slug}`}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {hub.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-200">
              Navegação e Institucional
            </h3>
            <div className="space-y-2 text-sm">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                Início
              </Link>
              <Link href="/servicos" className="block text-gray-400 hover:text-white transition-colors">
                Serviços Psicológicos
              </Link>
              <Link href="/materiais" className="block text-gray-400 hover:text-white transition-colors">
                Materiais e Checklists Gratuitos
              </Link>
              <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors">
                Blog e Artigos Revisados
              </Link>
              <Link href="/sobre" className="block text-gray-400 hover:text-white transition-colors">
                Sobre a Psicóloga e Autoria
              </Link>
              <Link href="/metodologia-editorial" className="block text-gray-400 hover:text-white transition-colors">
                Metodologia Editorial
              </Link>
              <Link href="/agendamento" className="block text-gray-400 hover:text-white transition-colors">
                Agendar Conversa
              </Link>
              <Link href="/contato" className="block text-gray-400 hover:text-white transition-colors">
                Contato e Dúvidas
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-200">
              Contato e Transparência
            </h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <a
                href="mailto:psicologasocorinha@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">psicologasocorinha@gmail.com</span>
              </a>
              <a
                href="tel:+5568999035300"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(68) 99903-5300</span>
              </a>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p>Seg - Sex: 08:00 - 20:00</p>
                  <p>Sábado: 08:00 - 12:00</p>
                </div>
              </div>
              <div className="pt-3 border-t border-gray-800 space-y-1.5 text-xs">
                <Link href="/politica-de-privacidade" className="block hover:text-white">
                  Política de Privacidade (LGPD)
                </Link>
                <Link href="/politica-de-cookies" className="block hover:text-white">
                  Política de Cookies
                </Link>
                <Link href="/termos-de-uso" className="block hover:text-white">
                  Termos de Uso
                </Link>
                <Link href="/transparencia-afiliados" className="block hover:text-white">
                  Transparência e Afiliados
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-xs">
                © {new Date().getFullYear()} Psicologia Direta ({PROFESSIONAL_AUTHOR} — {PROFESSIONAL_CRP}). Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Conteúdos informativos não substituem avaliação psicológica ou médica individualizada.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-primary-400" />
                Conformidade CFP e LGPD
              </span>
              <span className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-accent-400" />
                Sigilo Profissional
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
