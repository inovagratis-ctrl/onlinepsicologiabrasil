import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Política de Cookies | Psicologia Direta',
  description:
    'Entenda como utilizamos cookies essenciais, analíticos e de publicidade contextual no portal Psicologia Direta e como gerenciar seu consentimento.',
  alternates: { canonical: 'https://psicologiadireta.com.br/politica-de-cookies' },
}

export default function PoliticaDeCookiesPage() {
  return (
    <div className="min-h-screen bg-warm-50 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', url: '/' },
          { name: 'Política de Cookies', url: '/politica-de-cookies' },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 space-y-6 text-gray-700 leading-relaxed">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Política de Cookies
          </h1>
          <p className="text-xs text-gray-500">Última atualização: 10 de outubro de 2026</p>

          <p>
            Esta Política de Cookies explica o que são cookies, quais categorias são utilizadas em <strong>psicologiadireta.com.br</strong> e como você pode controlar suas preferências em conformidade com a Lei Geral de Proteção de Dados (LGPD) e o Google Consent Mode.
          </p>

          <h2 className="text-xl font-bold text-gray-800 pt-2">
            1. O Que São Cookies?
          </h2>
          <p>
            Cookies são pequenos arquivos de texto armazenados no seu navegador para garantir o funcionamento correto das páginas, lembrar suas escolhas de privacidade e compreender de forma agregada como os conteúdos educativos são acessados.
          </p>

          <h2 className="text-xl font-bold text-gray-800 pt-2">
            2. Categorias de Cookies que Utilizamos
          </h2>
          <div className="space-y-4 text-sm">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-1">Cookies Estritamente Necessários (Essenciais)</h3>
              <p>
                Indispensáveis para a segurança do site, funcionamento dos checklists interativos locais e armazenamento da sua escolha no banner de consentimento (chave <code>pd_cookie_consent_v1</code>). Não coletam informações pessoais identificáveis.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-1">Cookies Analíticos e de Desempenho</h3>
              <p>
                Ajudam a entender quais artigos e guias práticos recebem mais leituras, permitindo melhorar a clareza do portal. Nenhum dado clínico ou conteúdo de formulário é enviado para ferramentas de análise.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-1">Cookies de Publicidade Contextual (Google AdSense)</h3>
              <p>
                Quando habilitados e consentidos pelo usuário, permitem a exibição de anúncios identificados como "Publicidade" exclusivamente em páginas informativas/editoriais elegíveis. Páginas de agendamento, contato e atendimento são estritamente isentas de publicidade.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-800 pt-2">
            3. Como Alterar ou Revogar Seu Consentimento
          </h2>
          <p>
            Você pode limpar os dados de navegação do seu navegador a qualquer momento para reabrir o banner de preferências no rodapé da página, ou desativar cookies diretamente nas configurações do seu navegador. Consulte também nossa{' '}
            <Link href="/politica-de-privacidade" className="text-primary-600 underline">
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
