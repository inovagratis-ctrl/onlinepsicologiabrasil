'use client'

import { useState } from 'react'
import { ClipboardList, CheckCircle, Send } from 'lucide-react'

const sections = [
  {
    title: 'Dados da Criança',
    questions: [
      { id: 'nome', label: 'Nome completo', type: 'text', required: true },
      { id: 'idade', label: 'Idade', type: 'text', required: true },
      { id: 'diagnostico', label: 'Já possui diagnóstico de TEA?', type: 'select', options: ['Sim', 'Não', 'Em investigação'], required: true },
      { id: 'diagnostico_quando', label: 'Se sim, quando recebeu o diagnóstico?', type: 'text', required: false },
      { id: 'escola', label: 'Tipo de escola (regular, especial, etc)', type: 'text', required: true },
    ],
  },
  {
    title: 'Comunicação e Linguagem',
    questions: [
      { id: 'comunicacao_verbal', label: 'A criança se comunica verbalmente?', type: 'select', options: ['Sim, frases', 'Sim, palavras isoladas', 'Não, apenas gestos', 'Não se comunica'], required: true },
      { id: 'comunicacao_gestual', label: 'Utiliza alguma forma de comunicação alternativa (PECS, tablet, etc)?', type: 'textarea', required: false },
      { id: 'compreensao', label: 'Nível de compreensão de instruções', type: 'select', options: ['Compreende frases complexas', 'Compreende frases simples', 'Compreende apenas palavras-chave', 'Dificuldade significativa'], required: true },
      { id: 'echolalia', label: 'Apresenta ecolalia (repetição de falas)?', type: 'select', options: ['Sim, frequente', 'Sim, às vezes', 'Não'], required: true },
    ],
  },
  {
    title: 'Comportamento',
    questions: [
      { id: 'comportamentos_repetitivos', label: 'Comportamentos repetitivos ou estereotipados', type: 'textarea', required: false },
      { id: 'interesses_restritos', label: 'Interesses restritos ou focados', type: 'textarea', required: false },
      { id: 'rigidez', label: 'Dificuldade com mudanças de rotina', type: 'select', options: ['Muita dificuldade', 'Alguma dificuldade', 'Pouca dificuldade', 'Não se aplica'], required: true },
      { id: 'crises', label: 'Episódios de crises / choro intenso / agitação', type: 'select', options: ['Frequentes', 'Ocasionais', 'Raros', 'Não se aplica'], required: true },
    ],
  },
  {
    title: 'Interação Social',
    questions: [
      { id: 'contato_visual', label: 'Contato visual', type: 'select', options: ['Bom', 'Variável', 'Limitado', 'Ausente'], required: true },
      { id: 'interesse_pares', label: 'Interesse em interagir com outras crianças', type: 'select', options: ['Muito interessado', 'Interessado às vezes', 'Pouco interesse', 'Não demonstra interesse'], required: true },
      { id: 'brincadeiras', label: 'Tipo de brincadeiras (funcionais, simbólicas, repetitivas)', type: 'textarea', required: false },
      { id: 'resposta_nome', label: 'Responde quando chamado pelo nome', type: 'select', options: ['Sempre', 'Às vezes', 'Raramente', 'Nunca'], required: true },
    ],
  },
  {
    title: 'Autocuidado',
    questions: [
      { id: 'alimentacao', label: 'Alimentação (seletividade, texturas, etc)', type: 'textarea', required: false },
      { id: 'sono', label: 'Sono (horários, dificuldades, rotinas)', type: 'textarea', required: false },
      { id: 'higiene', label: 'Participação em rotinas de higiene', type: 'select', options: ['Participa com apoio mínimo', 'Necessita de apoio moderado', 'Necessita de apoio intenso'], required: true },
      { id: 'vestimenta', label: 'Vestimenta (dependência)', type: 'select', options: ['Independente', 'Parcialmente independente', 'Dependente'], required: true },
    ],
  },
  {
    title: 'Expectativas dos Pais',
    questions: [
      { id: 'expectativas', label: 'Quais são suas principais expectativas com a terapia?', type: 'textarea', required: true },
      { id: 'preocupacoes', label: 'Quais são suas maiores preocupações?', type: 'textarea', required: true },
      { id: 'experiencias', label: 'Já realizou outros tipos de terapia? Se sim, qual?', type: 'textarea', required: false },
    ],
  },
]

export default function Formulario() {
  const [currentSection, setCurrentSection] = useState(0)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form data:', formData)
    setIsSubmitted(true)
  }

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
    }
  }

  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <CheckCircle className="w-20 h-20 text-accent-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Formulário Enviado!</h1>
          <p className="text-gray-600 mb-6">
            Recebemos suas respostas. A psicóloga analisará o formulário e entrará em contato para agendar a primeira sessão.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Olá! Preenchi o formulário de avaliação inicial no site."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            <Send className="w-5 h-5" />
            Enviar mensagem via WhatsApp
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <ClipboardList className="w-16 h-16 text-primary-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Formulário de Avaliação Inicial</h1>
          <p className="text-gray-600">
            Preencha este formulário para nos ajudar a conhecer melhor o perfil do paciente
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Seção {currentSection + 1} de {sections.length}</span>
            <span>{sections[currentSection].title}</span>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {sections[currentSection].title}
            </h2>

            <div className="space-y-6">
              {sections[currentSection].questions.map((question) => (
                <div key={question.id}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {question.label}
                    {question.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  
                  {question.type === 'text' && (
                    <input
                      type="text"
                      required={question.required}
                      value={formData[question.id] || ''}
                      onChange={(e) => handleInputChange(question.id, e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  )}
                  
                  {question.type === 'textarea' && (
                    <textarea
                      required={question.required}
                      value={formData[question.id] || ''}
                      onChange={(e) => handleInputChange(question.id, e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  )}
                  
                  {question.type === 'select' && question.options && (
                    <select
                      required={question.required}
                      value={formData[question.id] || ''}
                      onChange={(e) => handleInputChange(question.id, e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Selecione...</option>
                      {question.options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentSection === 0}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Anterior
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
                className="btn-primary flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Formulário
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
