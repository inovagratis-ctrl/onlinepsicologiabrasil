import type { Metadata } from 'next'
import Link from 'next/link'
import { Scale, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Termos e Condições de Uso | Psicologia Direta',
  description:
    'Termos e condições para uso das ferramentas, rastreios clínicos e serviços informativos do portal Psicologia Direta.',
  alternates: { canonical: 'https://psicologiadireta.com.br/termos-de-uso' },
}

export default function TermosUsoPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 mb-6 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Voltar para a página inicial
        </Link>

        <article className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm text-slate-700 space-y-6 text-xs sm:text-sm leading-relaxed">
          <header className="border-b border-slate-200 pb-6">
            <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">
              Termos Legais &amp; Uso Aceitável
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Termos e Condições de Uso da Plataforma
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Última atualização: Novembro de 2026.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e utilizar os recursos do portal <strong>Psicologia Direta</strong> (<code>psicologiadireta.com.br</code>), você expressa sua plena concordância com os presentes Termos e Condições de Uso. Caso não concorde com qualquer disposição, solicitamos que não utilize os instrumentos e serviços disponibilizados.
            </p>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
              2. Natureza Exclusivamente Informativa e Psicoeducativa dos Testes
            </h2>
            <p>
              As ferramentas de rastreio sintomático (incluindo a <strong>Escala GAD-7</strong> e o <strong>Termômetro de Burnout</strong>) são disponibilizadas com finalidade meramente educativa, preventiva e de autoavaliação inicial. Os resultados obtidos <strong>não constituem laudo psicológico, parecer pericial ou diagnóstico nosológico médico-psiquiátrico</strong>.
            </p>
            <p>
              A tomada de decisões clínicas, terapêuticas ou ocupacionais não deve se basear unicamente nas pontuações geradas por estes questionários, sendo indispensável a consulta com um psicólogo inscrito no Conselho Regional de Psicologia (CRP) ou médico psiquiatra (CRM).
            </p>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
              3. Uso do Gerador de Documentos para Psicólogos
            </h2>
            <p>
              O gerador de modelos de declaração, recibo e contrato é uma ferramenta de apoio administrativo. A responsabilidade técnica, a veracidade das informações inseridas e a assinatura dos documentos emitidos recaem integral e exclusivamente sobre o profissional que os preenche e assina, cabendo-lhe atuar em estrita conformidade com o <strong>Código de Ética Profissional do Psicólogo</strong> e a <strong>Resolução CFP nº 06/2019</strong>.
            </p>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
              4. Propriedade Intelectual e Gratuidade
            </h2>
            <p>
              O acesso aos questionários, relatórios e modelos de documentos deste portal é oferecido de forma 100% gratuita a qualquer cidadão ou profissional. É vedada a comercialização, cobrança de taxa de acesso ou republicação desautorizada do código-fonte ou layout da plataforma.
            </p>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
              5. Foro de Eleição
            </h2>
            <p>
              Estes Termos são regidos e interpretados em conformidade com a legislação da República Federativa do Brasil, elegendo-se o foro da comarca competente para dirimir quaisquer eventuais controvérsias decorrentes do uso da plataforma.
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
