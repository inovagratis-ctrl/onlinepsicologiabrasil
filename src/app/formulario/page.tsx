'use client'

import { useState } from 'react'
import { ClipboardList, CheckCircle, Send, AlertCircle } from 'lucide-react'

type FaixaEtaria = 'crianca' | 'adolescente' | 'adulto' | 'idoso'

interface Question {
  id: string
  label: string
  type: 'text' | 'number' | 'textarea' | 'select' | 'radio' | 'info'
  options?: string[]
  required: boolean
  showFor?: FaixaEtaria[]
}

interface Section {
  title: string
  questions: Question[]
  showFor?: FaixaEtaria[]
}

const faixasEtarias = [
  { value: 'crianca', label: 'Criança (0-12 anos)' },
  { value: 'adolescente', label: 'Adolescente (13-17 anos)' },
  { value: 'adulto', label: 'Adulto (18-59 anos)' },
  { value: 'idoso', label: 'Idoso (60+ anos)' },
]

const getSections = (faixaEtaria: FaixaEtaria): Section[] => [
  {
    title: 'Dados Pessoais',
    questions: [
      { id: 'nome', label: 'Nome completo do paciente', type: 'text', required: true },
      { id: 'idade', label: 'Idade', type: 'number', required: true },
      { id: 'sexo', label: 'Sexo', type: 'radio', options: ['Masculino', 'Feminino', 'Outro', 'Prefiro não informar'], required: true },
      { id: 'estado_civil', label: 'Estado civil', type: 'select', options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União estável', 'Outro'], required: false, showFor: ['adulto', 'idoso'] },
      { id: 'escolaridade', label: 'Escolaridade', type: 'select', options: ['Não estudou', 'Ensino Fundamental incompleto', 'Ensino Fundamental completo', 'Ensino Médio incompleto', 'Ensino Médio completo', 'Superior incompleto', 'Superior completo', 'Pós-graduação'], required: true },
      { id: 'profissao', label: 'Profissão / Ocupação', type: 'text', required: false, showFor: ['adulto', 'idoso'] },
      { id: 'escola', label: 'Nome da escola / Série / Ano', type: 'text', required: false, showFor: ['crianca', 'adolescente'] },
    ],
  },
  {
    title: 'Dados de Contato',
    questions: [
      { id: 'nome_responsavel', label: 'Nome do responsável / Responsável legal', type: 'text', required: true, showFor: ['crianca', 'adolescente'] },
      { id: 'parentesco', label: 'Grau de parentesco', type: 'select', options: ['Mãe', 'Pai', 'Avó/Avô', 'Outro familiar', 'Responsável legal'], required: true, showFor: ['crianca', 'adolescente'] },
      { id: 'telefone', label: 'Telefone / WhatsApp', type: 'text', required: true },
      { id: 'email', label: 'E-mail', type: 'text', required: false },
      { id: 'como_conheceu', label: 'Como conheceu nosso serviço?', type: 'select', options: ['Indicação', 'Redes sociais', 'Google', 'Outro'], required: false },
    ],
  },
  {
    title: 'Termo de Consentimento e Acompanhamento',
    showFor: ['crianca', 'adolescente'],
    questions: [
      { id: 'ciencia_responsavel', label: 'Declaro que sou responsável legal pelo(a) paciente e estou ciente de que:', type: 'info', required: false },
      { id: 'concordancia_acomp', label: 'Concordo em acompanhar as sessões de avaliação e tratamento?', type: 'radio', options: ['Sim, participarei de todas as sessões', 'Sim, participarei quando possível', 'Não poderei acompanhar, mas autorizo o atendimento'], required: true },
      { id: 'disponibilidade', label: 'Qual sua disponibilidade para Comparecer às sessões?', type: 'select', options: ['Segunda a sexta, manhã', 'Segunda a sexta, tarde', 'Sábados', 'Horário comercial', 'Flexível'], required: true },
      { id: 'aceite_termos', label: 'Li e aceito os termos de atendimento psicológico conforme Resolução CFP 11/2018 e LGPD?', type: 'radio', options: ['Sim, aceito'], required: true },
      { id: 'observacoes_responsavel', label: 'Observações do responsável (opcional)', type: 'textarea', required: false },
    ],
  },
  {
    title: 'Queixa Principal',
    questions: [
      { id: 'queixa_principal', label: 'Qual o motivo da busca por atendimento psicológico?', type: 'textarea', required: true },
      { id: 'tempo_queixa', label: 'Há quanto tempo apresenta essa dificuldade?', type: 'select', options: ['Menos de 1 mês', '1-6 meses', '6 meses a 1 ano', '1-3 anos', 'Mais de 3 anos', 'Desde a infância'], required: true },
      { id: 'quem_indicou', label: 'Quem indicou buscar atendimento?', type: 'select', options: ['Médico', 'Escola', 'Familiar', 'Próprio(a)', 'Amigo(a)', 'Outro profissional de saúde'], required: false },
    ],
  },
  {
    title: 'Histórico de Saúde',
    questions: [
      { id: 'diagnostico_previo', label: 'Possui algum diagnóstico anterior? Se sim, qual?', type: 'textarea', required: false },
      { id: 'tratamento_atual', label: 'Está em tratamento médico ou psicológico atualmente?', type: 'radio', options: ['Sim', 'Não'], required: true },
      { id: 'medicacoes', label: 'Toma alguma medicação? Se sim, quais?', type: 'textarea', required: false },
      { id: 'historico_familiar', label: 'Existe histórico de transtornos psicológicos na família? Se sim, quais?', type: 'textarea', required: false },
      { id: 'internacoes', label: 'Já passou por internação psiquiátrica ou hospitalar por questões emocionais?', type: 'radio', options: ['Sim', 'Não'], required: false },
    ],
  },
  {
    title: 'Rotina e Funcionamento',
    questions: [
      { id: 'sono', label: 'Como está a qualidade do sono?', type: 'select', options: ['Boa', 'Regular', 'Ruim', 'Muito ruim (insônia, pesadelos)'], required: true },
      { id: 'alimentacao', label: 'Como está a alimentação?', type: 'select', options: ['Regular e saudável', 'Irregular', 'Compulsiva', 'Restritiva', 'Outro'], required: true },
      { id: 'atividade_fisica', label: 'Pratica atividade física?', type: 'select', options: ['Sim, regularmente', 'Às vezes', 'Não'], required: false },
      { id: 'uso_substancias', label: 'Consome álcool ou outras substâncias?', type: 'select', options: ['Não', 'Socialmente', 'Frequentemente', 'Diariamente'], required: false, showFor: ['adolescente', 'adulto', 'idoso'] },
      { id: 'rotina_diaria', label: 'Descreva brevemente sua rotina diária (trabalho, estudos, lazer)', type: 'textarea', required: false },
    ],
  },
  {
    title: 'Relacionamentos e Social',
    questions: [
      { id: 'relacionamento_familiar', label: 'Como descreveria o relacionamento com sua família?', type: 'select', options: ['Muito bom', 'Bom', 'Regular', 'Conflituoso', 'Distante'], required: true },
      { id: 'amizades', label: 'Possui amigos próximos? Quantas pessoas considera próximas?', type: 'select', options: ['Muitos', 'Alguns', 'Poucos', 'Nenhum'], required: false },
      { id: 'dificuldade_social', label: 'Sente dificuldade em situações sociais? Qual?', type: 'textarea', required: false },
      { id: 'aspectos_positivos', label: 'Quais são seus maiores pontos fortes / qualidades?', type: 'textarea', required: false },
    ],
  },
  {
    title: 'Expectativas',
    questions: [
      { id: 'expectativas', label: 'Quais são suas expectativas com a terapia?', type: 'textarea', required: true },
      { id: 'objetivos', label: 'O que gostaria de alcançar / melhorar?', type: 'textarea', required: true },
      { id: 'experiencias_terapia', label: 'Já realizou terapia antes? Se sim, como foi a experiência?', type: 'textarea', required: false },
      { id: 'observacoes', label: 'Alguma informação adicional que considera importante?', type: 'textarea', required: false },
    ],
  },
]

export default function Formulario() {
  const [faixaEtaria, setFaixaEtaria] = useState<FaixaEtaria | null>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const sections = faixaEtaria ? getSections(faixaEtaria) : []

  const handleInputChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }))
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[id]
        return newErrors
      })
    }
  }

  const validateCurrentSection = (): boolean => {
    const section = sections[currentSection]
    const newErrors: Record<string, string> = {}

    section.questions.forEach((question) => {
      if (question.showFor && !question.showFor.includes(faixaEtaria!)) return
      if (question.required && !formData[question.id]?.trim()) {
        newErrors[question.id] = 'Este campo é obrigatório'
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (!validateCurrentSection()) return
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
    }
  }

  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
      setErrors({})
    }
  }

  const buildWhatsAppMessage = (): string => {
    const faixaLabel = faixasEtarias.find(f => f.value === faixaEtaria)?.label
    let msg = `*Formulário de Avaliação Inicial*\n`
    msg += `*Faixa etária:* ${faixaLabel}\n\n`

    sections.forEach((section) => {
      const hasVisibleQuestions = section.questions.some(q => {
        if (q.showFor && !q.showFor.includes(faixaEtaria!)) return false
        return formData[q.id]?.trim()
      })
      if (!hasVisibleQuestions) return

      msg += `*${section.title}*\n`
      section.questions.forEach((question) => {
        if (question.showFor && !question.showFor.includes(faixaEtaria!)) return
        const value = formData[question.id]
        if (value?.trim()) {
          msg += `• ${question.label}: ${value}\n`
        }
      })
      msg += `\n`
    })

    return encodeURIComponent(msg)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateCurrentSection()) return

    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (!faixaEtaria) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <ClipboardList className="w-16 h-16 text-primary-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Formulário de Avaliação Inicial</h1>
            <p className="text-gray-600">
              Para direcionar melhor as perguntas, informe a faixa etária do paciente
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {faixasEtarias.map((faixa) => (
              <button
                key={faixa.value}
                onClick={() => setFaixaEtaria(faixa.value as FaixaEtaria)}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 text-left hover:border-primary-500 hover:bg-primary-50 transition-all"
              >
                <span className="text-lg font-semibold text-gray-800">{faixa.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (isSubmitted) {
    const whatsappMsg = buildWhatsAppMessage()
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Formulário Preenchido!</h1>
          <p className="text-gray-600 mb-8">
            Obrigado! Clique no botão abaixo para enviar suas respostas diretamente para a psicóloga via WhatsApp.
          </p>
          <a
            href={`https://wa.me/5568999035300?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors text-lg"
          >
            <Send className="w-5 h-5" />
            Enviar via WhatsApp
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Após enviar, a psicóloga entrará em contato para agendar a primeira sessão.
          </p>
        </div>
      </div>
    )
  }

  const section = sections[currentSection]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <ClipboardList className="w-16 h-16 text-primary-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Formulário de Avaliação Inicial</h1>
          <p className="text-gray-600">
            {faixasEtarias.find(f => f.value === faixaEtaria)?.label}
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Seção {currentSection + 1} de {sections.length}</span>
            <span>{section.title}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{section.title}</h2>

            <div className="space-y-6">
              {section.questions.map((question) => {
                if (question.showFor && !question.showFor.includes(faixaEtaria)) return null
                const hasError = !!errors[question.id]

                return (
                  <div key={question.id}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {question.label}
                      {question.required && <span className="text-red-500 ml-1">*</span>}
                    </label>

                    {question.type === 'text' && (
                      <input
                        type="text"
                        value={formData[question.id] || ''}
                        onChange={(e) => handleInputChange(question.id, e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${hasError ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                      />
                    )}

                    {question.type === 'number' && (
                      <input
                        type="number"
                        min="0"
                        max="120"
                        value={formData[question.id] || ''}
                        onChange={(e) => handleInputChange(question.id, e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${hasError ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                      />
                    )}

                    {question.type === 'textarea' && (
                      <textarea
                        value={formData[question.id] || ''}
                        onChange={(e) => handleInputChange(question.id, e.target.value)}
                        rows={3}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${hasError ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                      />
                    )}

                    {question.type === 'select' && question.options && (
                      <select
                        value={formData[question.id] || ''}
                        onChange={(e) => handleInputChange(question.id, e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${hasError ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                      >
                        <option value="">Selecione...</option>
                        {question.options.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    )}

                    {question.type === 'radio' && question.options && (
                      <div className="flex flex-wrap gap-4">
                        {question.options.map((option) => (
                          <label key={option} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name={question.id}
                              value={option}
                              checked={formData[question.id] === option}
                              onChange={(e) => handleInputChange(question.id, e.target.value)}
                              className="w-4 h-4 text-primary-600"
                            />
                            <span className="text-gray-700">{option}</span>
                          </label>
                        ))}
                      </div>
                    )}

                    {question.type === 'info' && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
                        <ul className="list-disc list-inside space-y-1">
                          <li>As sessões são realizadas de forma sigilosa conforme Resolução CFP 11/2018</li>
                          <li>O responsável legal deverá estar presente nas sessões iniciais de avaliação</li>
                          <li>Os dados pessoais são protegidos pela Lei Geral de Proteção de Dados (LGPD)</li>
                          <li>O tratamento somente será iniciado com autorização expressa do responsável</li>
                        </ul>
                      </div>
                    )}

                    {hasError && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors[question.id]}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={currentSection === 0 ? () => setFaixaEtaria(null) : handlePrev}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
            >
              {currentSection === 0 ? 'Voltar' : 'Anterior'}
            </button>

            {currentSection < sections.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="btn-primary"
              >
                Próxima
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary flex items-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Preparando...' : (
                  <>
                    <Send className="w-5 h-5" />
                    Finalizar
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
