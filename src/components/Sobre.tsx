import { Award, BookOpen, Users, Heart, Play } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { icon: Users, value: '100+', label: 'Famílias Atendidas' },
  { icon: BookOpen, value: '10+', label: 'Anos de Experiência' },
  { icon: Award, value: '4', label: 'Especializações' },
  { icon: Heart, value: '100%', label: 'Dedicação' },
]

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Quem é a Psicóloga</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Conheça a profissional que cuidará do desenvolvimento do seu filho com carinho e competência
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-8 text-center">
            <div className="w-48 h-48 bg-primary-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-6xl">👩‍⚕️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Maria do Socorro Araujo Teixeira</h3>
            <p className="text-primary-600 font-medium mb-4">CRP: 20/07319</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 shadow-sm">UNINORTE</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 shadow-sm">Pós FANI</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 shadow-sm">ABA - Maira Gaiato</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 shadow-sm">TCC</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 shadow-sm">SEAB/SSP/ACRE</span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Sobre Mim</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Sou psicóloga, formada pela <strong>Faculdade Barão do Rio Branco (UNINORTE)</strong>, 
                com pós-graduação em Autismo pela <strong>FANI</strong>, formação em ABA Naturalista 
                (Análise do Comportamento Aplicada) com <strong>Maira Gaiato</strong> e 
                especialização em <strong>Terapia Cognitivo-Comportamental (TCC)</strong>.
              </p>
              <p>
                Atuei no Serviço Social do Acre (SEAB/SSP/ACRE), onde desenvolvi experiência 
                no atendimento à população vulnerável. Especializada no atendimento de crianças 
                e adultos com <strong>Autismo (TEA), TDAH, Deficiência Intelectual e Dislexia</strong>.
              </p>
              <p>
                Também atendo demandas como <strong>Ansiedade, Síndrome do Pânico, Depressão, 
                TDAH em Adultos, Compulsão Alimentar e Transtorno Obsessivo-Compulsivo (TOC)</strong>.
              </p>
              <p>
                Cada pessoa é única e merece um cuidado personalizado, baseado em evidências 
                científicas. Utilizo abordagens que respeitam o ritmo de cada paciente, 
                promovendo aprendizagens significativas no ambiente natural.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                  <stat.icon className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/video-apresentacao"
              className="mt-6 w-full flex items-center justify-center gap-2 bg-primary-500 text-white py-3 rounded-xl font-semibold hover:bg-primary-600 transition-colors"
            >
              <Play className="w-5 h-5" />
              Assista ao Vídeo de Apresentação
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
