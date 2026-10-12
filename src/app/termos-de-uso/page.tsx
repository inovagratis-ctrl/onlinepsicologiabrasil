import type { Metadata } from 'next'
import Link from 'next/link'
import { PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Termos de Uso e Aviso Médico-Psicológico | Psicologia Direta',
  description:
    'Termos e condições de uso do portal Psicologia Direta, limites do conteúdo psicoeducativo e regras éticas do atendimento psicológico online.',
  alternates: { canonical: 'https://psicologiadireta.com.br/termos-de-uso' },
}

export default function TermosDeUsoPage() {
  return (
    <div className="min-h-screen bg-warm-50 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', url: '/' },
          { name: 'Termos de Uso', url: '/termos-de-uso' },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 space-y-6 text-gray-700 leading-relaxed">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Termos de Uso
          </h1>
          <p className="text-xs text-gray-500">Última atualização: 10 de outubro de 2026</p>

          <p>
            Bem-vindo(a) ao portal <strong>Psicologia Direta</strong> (<code>psicologiadireta.com.br</code>), sob responsabilidade técnica da <strong>{PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP})</strong>. Ao acessar este site e utilizar nossos artigos, checklists e serviços de agendamento, você concorda com os termos descritos abaixo.
          </p>

          <h2 className="text-xl font-bold text-gray-800 pt-2">
            1. Caráter Educativo dos Artigos e Ferramentas Gratuitas
          </h2>
          <p>
            Todo o conteúdo aberto publicado no Blog, nos Guias de Categorias e na seção de Materiais Gratuitos possui finalidade estritamente <strong>educativa, informativa e de apoio à organização cotidiana</strong>. A leitura de artigos ou o preenchimento de checklists interativos não estabelece vínculo psicoterapêutico nem substitui avaliação clínica individualizada (psicológica, médica, fonoaudiológica ou multidisciplinar).
          </p>

          <h2 className="text-xl font-bold text-gray-800 pt-2">
            2. Condições do Atendimento Psicológico Online
          </h2>
          <p>
            A prestação de serviços psicológicos por meio de tecnologia da informação e comunicação segue rigorosamente a <strong>Resolução CFP nº 11/2018</strong> e o Código de Ética Profissional do Psicólogo:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>O atendimento para crianças e adolescentes requer autorização expressa e participação inicial de pelo menos um responsável legal;</li>
            <li>É vedada a gravação de áudio ou imagem das sessões por qualquer uma das partes sem consentimento formal específico;</li>
            <li>O atendimento online com hora marcada não configura plantão de urgência ou emergência. Em caso de crise aguda, procure o <strong>CVV (188)</strong> ou o <strong>SAMU (192)</strong>.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-800 pt-2">
            3. Propriedade Intelectual
          </h2>
          <p>
            Os textos, tabelas, checklists e materiais em PDF disponibilizados neste site podem ser impressos gratuitamente para uso pessoal, familiar ou escolar não comercial, desde que mantida a citação da fonte e autoria ({PROFESSIONAL_AUTHOR} — {PROFESSIONAL_CRP}). É proibida a reprodução integral para fins comerciais ou revenda sem autorização prévia.
          </p>

          <div className="pt-4 border-t border-gray-100 text-sm">
            Consulte também nossa{' '}
            <Link href="/politica-de-privacidade" className="text-primary-600 underline">
              Política de Privacidade
            </Link>{' '}
            e nossa{' '}
            <Link href="/transparencia-afiliados" className="text-primary-600 underline">
              Política de Transparência e Afiliados
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  )
}
