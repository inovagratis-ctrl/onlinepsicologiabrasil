import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck, CheckCircle2, XCircle } from 'lucide-react'
import { ETHICAL_AFFILIATE_DISCLAIMER } from '@/data/affiliates'
import { PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Transparência Editorial, Publicidade e Links de Afiliados | Psicologia Direta',
  description:
    'Conheça os critérios éticos para indicação de livros e recursos visuais, regras de links afiliados e política de separação publicitária do portal Psicologia Direta.',
  alternates: { canonical: 'https://psicologiadireta.com.br/transparencia-afiliados' },
}

export default function TransparenciaAfiliadosPage() {
  return (
    <div className="min-h-screen bg-warm-50 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', url: '/' },
          { name: 'Transparência e Afiliados', url: '/transparencia-afiliados' },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 space-y-6 text-gray-700 leading-relaxed">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" />
            Compromisso de Independência e Ética Editorial
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Política de Transparência, Publicidade e Links de Afiliados
          </h1>
          <p className="text-xs text-gray-500">Última atualização: 10 de outubro de 2026</p>

          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-sm text-gray-800">
            <strong>Aviso Padrão de Transparência:</strong> &ldquo;{ETHICAL_AFFILIATE_DISCLAIMER}&rdquo;
          </div>

          <h2 className="text-xl font-bold text-gray-800 pt-2">
            1. Como Mantemos a Produção de Conteúdo e Ferramentas Gratuitas
          </h2>
          <p>
            O portal <strong>Psicologia Direta</strong> disponibiliza gratuitamente artigos aprofundados, guias para famílias e ferramentas interativas imprimíveis. Para ajudar a custear a infraestrutura tecnológica e a produção editorial sem cobrar pelo acesso aos artigos, utilizamos duas fontes complementares e estritamente reguladas:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>
              <strong>Links de Afiliados Identificados:</strong> indicações de livros técnicos, obras para pais, quadros de rotina visual e recursos pedagógicos em lojas parceiras (como Amazon Brasil), sempre marcados com <code>rel=&quot;sponsored nofollow&quot;</code> e selo visual de <em>Link Afiliado</em>.
            </li>
            <li>
              <strong>Publicidade Contextual (quando ativada):</strong> blocos identificados como &ldquo;Publicidade&rdquo; exclusivamente em artigos informativos, nunca em páginas de agendamento, contato ou serviços clínicos.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-800 pt-2">
            2. O Que Recomendamos vs. O Que NUNCA Recomendamos
          </h2>
          <p>
            Por tratar de saúde mental e neurodesenvolvimento sob supervisão da <strong>{PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP})</strong>, adotamos um filtro ético inegociável:
          </p>

          <div className="grid md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-accent-50/60 border border-accent-200">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-accent-600" />
                Produtos Elegíveis para Indicação
              </h3>
              <ul className="space-y-2 text-xs text-gray-700">
                <li>• Livros de psicologia, educação e orientação parental baseados em evidências;</li>
                <li>• Quadros magnéticos de rotina, planejadores e timers visuais silenciosos;</li>
                <li>• Jogos educativos de regulação emocional e habilidades sociais;</li>
                <li>• Recursos simples de acessibilidade escolar (como réguas de leitura guiada).</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2 text-sm">
                <XCircle className="w-4 h-4 text-red-600" />
                Estritamente Proibidos no Site
              </h3>
              <ul className="space-y-2 text-xs text-gray-700">
                <li>• Suplementos, vitaminas, florais ou compostos com promessa de &ldquo;foco&rdquo; ou &ldquo;calma&rdquo;;</li>
                <li>• Cursos ou produtos que prometam &ldquo;cura&rdquo; para autismo, TDAH ou dislexia;</li>
                <li>• Testes online pagos que prometam substituir avaliação diagnóstica profissional;</li>
                <li>• Qualquer produto incompatível com a ética do Conselho Federal de Psicologia.</li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 text-sm">
            Dúvidas sobre nossa política editorial podem ser enviadas na página de{' '}
            <Link href="/contato" className="text-primary-600 underline">
              Contato
            </Link>{' '}
            ou consultadas em nossa{' '}
            <Link href="/metodologia-editorial" className="text-primary-600 underline">
              Metodologia Editorial
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  )
}
