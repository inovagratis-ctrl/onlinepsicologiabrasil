import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield } from 'lucide-react'
import { PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Política de Privacidade e Proteção de Dados (LGPD) | Psicologia Direta',
  description:
    'Saiba como o portal Psicologia Direta trata seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018) e o sigilo profissional do CFP.',
  alternates: { canonical: 'https://psicologiadireta.com.br/politica-de-privacidade' },
}

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="min-h-screen bg-warm-50 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', url: '/' },
          { name: 'Política de Privacidade', url: '/politica-de-privacidade' },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 space-y-6 text-gray-700 leading-relaxed">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold">
            <Shield className="w-4 h-4" />
            Conformidade LGPD (Lei nº 13.709/2018) e Resolução CFP nº 11/2018
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Política de Privacidade
          </h1>
          <p className="text-xs text-gray-500">Última atualização: 10 de outubro de 2026</p>

          <p>
            O portal <strong>Psicologia Direta</strong> (<code>psicologiadireta.com.br</code>), sob responsabilidade técnica da <strong>{PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP})</strong>, compromete-se com a proteção da privacidade, o sigilo ético e a segurança dos dados pessoais de todos os leitores, famílias e pacientes.
          </p>

          <h2 className="text-xl font-bold text-gray-800 pt-2">
            1. Princípio da Minimização e Separação de Dados Clínicos
          </h2>
          <p>
            Adotamos o princípio da minimização de dados previsto na LGPD: coletamos apenas o estritamente necessário para a finalidade informada. <strong>Não coletamos dados clínicos sensíveis em formulários de newsletter, download de materiais educativos ou métricas de marketing.</strong> Informações clínicas relativas ao acompanhamento psicológico são tratadas exclusivamente em prontuário psicológico sigiloso, regido pelo Código de Ética Profissional do Psicólogo e resoluções do CFP.
          </p>

          <h2 className="text-xl font-bold text-gray-800 pt-2">
            2. Quais Dados Coletamos e Para Qual Finalidade
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>
              <strong>Formulário de Contato e Agendamento:</strong> nome, e-mail, telefone/WhatsApp e preferência de horário, utilizados exclusivamente para responder à sua solicitação e viabilizar o agendamento de sessões.
            </li>
            <li>
              <strong>Recebimento Opcional de Materiais Educativos por E-mail:</strong> endereço de e-mail fornecido mediante consentimento livre e expresso, com possibilidade de descadastramento imediato a qualquer momento.
            </li>
            <li>
              <strong>Dados de Navegação e Eventos Agregados:</strong> métricas anônimas de visitação e cliques em elementos de interface (sem qualquer vínculo com informações de saúde), condicionadas às suas preferências no Banner de Cookies.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-800 pt-2">
            3. Compartilhamento e Armazenamento Seguro
          </h2>
          <p>
            Não vendemos, alugamos nem compartilhamos seus dados pessoais com terceiros para fins comerciais. Quando o usuário opta por realizar pagamento online de sessão ou material, o processamento ocorre em ambiente criptografado da instituição de pagamento homologada (Mercado Pago).
          </p>

          <h2 className="text-xl font-bold text-gray-800 pt-2">
            4. Direitos do Titular dos Dados (Art. 18 da LGPD)
          </h2>
          <p>
            Você pode, a qualquer momento, solicitar a confirmação da existência de tratamento, o acesso aos seus dados pessoais, a correção de dados incompletos ou a revogação de consentimento de comunicação, entrando em contato pelo e-mail{' '}
            <a href="mailto:psicologasocorinha@gmail.com" className="text-primary-600 underline">
              psicologasocorinha@gmail.com
            </a>{' '}
            ou pela página de <Link href="/contato" className="text-primary-600 underline">Contato</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
