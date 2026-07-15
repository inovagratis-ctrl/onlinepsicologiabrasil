import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, Clock, Shield, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image src="/logo_completa_base.png" alt="Psicologia Direta" width={180} height={50} className="rounded-lg" unoptimized />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Atendimento psicológico online especializado em Autismo, TDAH, 
              Deficiência Intelectual e Dislexia.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Shield className="w-4 h-4 text-primary-400" />
              <span>CRP 20/07319</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">Início</Link>
              <Link href="/agendamento" className="block text-gray-400 hover:text-white transition-colors">Agendar</Link>
              <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors">Blog</Link>
              <Link href="/materiais" className="block text-gray-400 hover:text-white transition-colors">Materiais</Link>
              <Link href="/formulario" className="block text-gray-400 hover:text-white transition-colors">Avaliação</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Especialidades</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Autismo (TEA)</p>
              <p>TDAH</p>
              <p>Deficiência Intelectual</p>
              <p>Dislexia</p>
              <p>ABA Naturalista</p>
              <p>TCC</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <a href="mailto:psicologasocorinha@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                psicologasocorinha@gmail.com
              </a>
              <a href="tel:+5568999035300" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                (68) 99903-5300
              </a>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <div>
                  <p>Seg - Sex: 08:00 - 20:00</p>
                  <p>Sábado: 08:00 - 12:00</p>
                </div>
              </div>
              <p className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Atendimento 100% Online
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">© 2026 Psicologia Direta. Todos os direitos reservados.</p>
              <p className="text-gray-500 text-xs mt-1">Conforme CFP 11/2018 e LGPD</p>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                Dados protegidos
              </span>
              <span className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                Sigilo garantido
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
