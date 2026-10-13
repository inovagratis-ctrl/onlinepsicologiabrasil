import Link from 'next/link'
import { Shield, Info } from 'lucide-react'
import { CATEGORY_LIST } from '@/data/categories'
import { PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-700 border-t border-slate-200">
      <div className="bg-amber-50 border-b border-amber-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-amber-900">
          <span className="flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <span>
              <strong>Aviso Editorial:</strong> Todo o conteúdo deste portal (artigos, e-books e materiais) tem caráter exclusivamente educativo e informativo.
            </span>
          </span>
          <span>
            Em caso de crise emocional aguda, ligue gratuitamente para o <strong>CVV (188 — 24h)</strong>.
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4 group">
              <img
                src="/assets/psicologia-direta/01-logo-horizontal.png"
                alt="Psicologia Direta — Artigos, Guias e Recursos para Saúde Mental e Neurodesenvolvimento"
                className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                width="280"
                height="56"
              />
            </Link>
            <p className="text-slate-600 text-xs mb-3 leading-relaxed">
              Portal especializado em psicoterapia para adultos (depressão, ansiedade, pânico, TOC, compulsão alimentar e narcisismo) e acervo de materiais e ferramentas clínicas para psicólogos.
            </p>
            <div className="text-xs text-slate-700 flex items-center gap-1.5 font-semibold">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>Revisão Técnica: {PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP})</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-xs uppercase tracking-wider text-slate-900">
              Temas e Guias
            </h3>
            <ul className="space-y-2 text-xs">
              {CATEGORY_LIST.map((hub) => (
                <li key={hub.slug}>
                  <Link href={`/${hub.slug}`} className="text-slate-600 hover:text-blue-600">
                    {hub.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-xs uppercase tracking-wider text-slate-900">
              Publicações & Recursos
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/blog" className="text-slate-600 hover:text-blue-600">Todos os Artigos e Guias</Link></li>
              <li><Link href="/materiais" className="text-slate-600 hover:text-blue-600">E-books, Apostilas e PDFs</Link></li>
              <li><Link href="/materiais#ferramentas-interativas" className="text-slate-600 hover:text-blue-600">Quadros de Rotina e Checklists</Link></li>
              <li><Link href="/sobre" className="text-slate-600 hover:text-blue-600">Sobre o Portal e Autoria</Link></li>
              <li><Link href="/contato" className="text-slate-600 hover:text-blue-600">Contato Editorial e Parcerias</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-xs uppercase tracking-wider text-slate-900">
              Transparência e Legal
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/metodologia-editorial" className="text-slate-600 hover:text-blue-600">Metodologia e Revisão Técnica</Link></li>
              <li><Link href="/transparencia-afiliados" className="text-slate-600 hover:text-blue-600">Transparência de Afiliados</Link></li>
              <li><Link href="/politica-de-privacidade" className="text-slate-600 hover:text-blue-600">Política de Privacidade (LGPD)</Link></li>
              <li><Link href="/politica-de-cookies" className="text-slate-600 hover:text-blue-600">Política de Cookies</Link></li>
              <li><Link href="/termos-de-uso" className="text-slate-600 hover:text-blue-600">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>&copy; 2026 Psicologia Direta — Portal de Artigos e E-books ({PROFESSIONAL_AUTHOR} — {PROFESSIONAL_CRP}). Todos os direitos reservados.</p>
          <p><Link href="/sitemap.xml" className="hover:text-blue-600">Sitemap XML</Link> • <Link href="/robots.txt" className="hover:text-blue-600">Robots.txt</Link></p>
        </div>
      </div>
    </footer>
  )
}
