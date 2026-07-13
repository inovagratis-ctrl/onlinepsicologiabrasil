const { PDFDocument, rgb, StandardFonts } = require('pdf-lib')
const fs = require('fs')
const path = require('path')

const OUTPUT = path.join(__dirname, 'output')
if (!fs.existsSync(OUTPUT)) fs.mkdirSync(OUTPUT, { recursive: true })

const W = 595, H = 842, MARGIN = 50, LINE_H = 16

function addLines(page, lines, startY, font, bold, color) {
  let y = startY
  for (const l of lines) {
    if (y < 70) break
    if (l.h === 1) { page.drawText(l.t, { x: MARGIN, y, size: 16, font: bold, color: rgb(0.2, 0.1, 0.4) }); y -= 24 }
    else if (l.h === 2) { page.drawText(l.t, { x: MARGIN, y, size: 13, font: bold, color: rgb(0.4, 0.2, 0.6) }); y -= 20 }
    else if (l.b) {
      page.drawRectangle({ x: MARGIN, y: y - 30, width: W - 100, height: 45, color: rgb(0.96, 0.93, 1), borderColor: rgb(0.7, 0.5, 0.9), borderWidth: 1 })
      page.drawText(l.t, { x: MARGIN + 15, y: y - 12, size: 10, font, color: rgb(0.3, 0.1, 0.5) }); y -= 55
    }
    else if (l.i) { page.drawText(`  •  ${l.t}`, { x: MARGIN + 10, y, size: 10, font, color: rgb(0.3, 0.3, 0.3) }); y -= 14 }
    else if (l.e) { y -= 12 }
    else { page.drawText(l.t, { x: MARGIN, y, size: 11, font, color }); y -= LINE_H }
  }
  return y
}

async function makePDF(title, sub, totalPages, getLines) {
  const doc = await PDFDocument.create()
  const font = await doc.embedFont(StandardFonts.Helvetica)
  const bold = await doc.embedFont(StandardFonts.HelveticaBold)
  for (let i = 0; i < totalPages; i++) {
    const p = doc.addPage([W, H])
    if (i === 0) {
      p.drawRectangle({ x: 0, y: 0, width: W, height: H, color: rgb(0.95, 0.91, 0.84) })
      p.drawRectangle({ x: 50, y: H/2-90, width: W-100, height: 180, color: rgb(1,1,1), borderColor: rgb(0.4,0.2,0.6), borderWidth: 2 })
      p.drawText(title, { x: 70, y: H/2+40, size: 22, font: bold, color: rgb(0.2,0.1,0.4) })
      p.drawText(sub, { x: 70, y: H/2, size: 11, font, color: rgb(0.4,0.4,0.4) })
      p.drawText('Psicologia Direta', { x: 70, y: H/2-25, size: 10, font, color: rgb(0.5,0.5,0.5) })
      p.drawText('Maria do Socorro Araujo Teixeira - CRP 20/07319', { x: 70, y: H/2-42, size: 10, font, color: rgb(0.5,0.5,0.5) })
      p.drawText('psicologiadireta.com.br', { x: 70, y: H/2-59, size: 10, font, color: rgb(0.5,0.5,0.5) })
    } else {
      p.drawText(`${title}  |  Pág. ${i+1}/${totalPages}`, { x: MARGIN, y: H-35, size: 8, font, color: rgb(0.6,0.6,0.6) })
      p.drawLine({ start: {x:MARGIN,y:H-42}, end: {x:W-MARGIN,y:H-42}, thickness: 0.5, color: rgb(0.8,0.8,0.8) })
      addLines(p, getLines(i), H-65, font, bold, rgb(0.2,0.2,0.2))
      p.drawText('Psicologia Direta | psicologiadireta.com.br | CRP 20/07319', { x: MARGIN, y: 30, size: 8, font, color: rgb(0.7,0.7,0.7) })
    }
  }
  return doc
}

function t(text) { return { t: text } }
function h(text) { return { t: text, h: 1 } }
function s(text) { return { t: text, h: 2 } }
function p(text) { return { t: text } }
function i(text) { return { t: text, i: true } }
function e() { return { e: true } }
function b(text) { return { t: text, b: true } }

const L1 = [
  h('Histórias Sociais para Crianças'),
  p('Material para crianças com TEA entenderem situações do dia a dia.'),
  e(),
  s('Como usar'),
  i('Leia a história com a criança em momento calmo'),
  i('Use imagens ou gestos para reforçar'),
  i('Repita várias vezes'),
  i('Pratique na vida real'),
  e(),
  s('História 1: Indo ao Supermercado'),
  p('Vou ao supermercado com minha mãe. Pode fazer barulho. As pessoas caminham e escolhem produtos.'),
  p('Posso ficar incomodado. Posso usar fone. Caminho devagar. Espero minha mãe.'),
  p('Na fila, espero minha vez. Não pego coisas sem permissão. Agradeço e saímos.'),
  e(),
  s('História 2: Sala de Aula'),
  p('Entro na sala, vou à minha carteira. Coloco a mochila. Espero o professor.'),
  p('Se tiver dúvida, levanto a mão. Presto atenção. Se precisar ir ao banheiro, peço.'),
  e(),
  s('História 3: Fazendo Amigos'),
  p('Fazer amigos é possível. Começo cumprimentando: "oi", "bom dia".'),
  p('Pergunto o nome. Se tivermos interesses parecidos, brincamos juntos.'),
  p('Respeito o espaço do outro. Se não quiser, tudo bem. Tento com outro.'),
  e(),
  s('História 4: Indo ao Médico'),
  p('O médico ajuda minha saúde. Na sala de espera, posso esperar.'),
  p('O médico examina, pode doer um pouco. Se tiver medo, seguro a mão de alguém.'),
  p('Depois do exame, sou corajoso. Ir ao médico é importante.'),
  e(),
  s('História 5: Brincando no Parque'),
  p('O parque tem escorregador, balanço, areia. Muitas crianças.'),
  p('Espero minha vez. Não empurro. Se cair, me levanto.'),
  p('Se cansar, sento na sombra. Vou embora com minha família.'),
  e(),
  s('História 6: Tomando Banho'),
  p('Tiro as roupas. Uso sabonete. Enxáguo. Me seco com toalha.'),
  e(),
  s('História 7: Fazendo Aniversário'),
  p('Pessoas cantam para mim. Tem bolo e presentes.'),
  p('Se precisar de um tempo sozinho, tudo bem.'),
  e(),
  b('Personalize as histórias com situações reais da criança.'),
]

const L2 = [
  h('PECS - Comunicação por Figuras'),
  p('Guia das 6 fases do PECS para comunicação alternativa.'),
  e(),
  s('Fase 1: Como Filosofar'),
  p('A criança troca uma figura por um item desejado.'),
  i('Escolha item altamente motivador'),
  i('Segure o item à vista'),
  i('Coloque a figura na mesa'),
  i('Guie a criança a entregar a figura'),
  i('Dê o item imediatamente'),
  e(),
  s('Fase 2: Distância e Persistência'),
  p('Troque figuras em diferentes contextos e distâncias.'),
  i('Varie os locais'),
  i('Mude os comunicadores'),
  i('Aumente a distância aos poucos'),
  e(),
  s('Fase 3: Discriminação de Figuras'),
  p('Escolha entre duas ou mais figuras.'),
  i('Use pasta com figuras preferidas e não preferidas'),
  i('Posicione para que a criança escolha'),
  i('Reforce escolhas corretas'),
  i('Aumente o número de figuras aos poucos'),
  e(),
  s('Fase 4: Construindo Frases'),
  p('Use "Eu quero" + figura com tira de frases.'),
  i('Use tira com "Eu quero" pré-colada'),
  i('Criança coloca figura ao lado'),
  i('Guie entrega da frase completa'),
  e(),
  s('Fase 5: Perguntando'),
  p('Responda "O que você quer?" usando PECS.'),
  i('Faça a pergunta'),
  i('Guie a construção da frase'),
  i('Reforce a resposta'),
  e(),
  s('Fase 6: Comentando'),
  p('Comente sobre o que vê, ouve ou sente.'),
  i('Use figuras de adjetivos: bonito, grande, rápido'),
  i('Modele: "Eu vejo [figura]"'),
  i('Reforce comentários espontâneos'),
  e(),
  b('Use figuras claras e vibrantes. Comece com alta motivação.'),
]

const L3 = [
  h('Atividades de Solicitação'),
  p('Práticas para ensinar crianças com TEA a solicitar o que desejam.'),
  e(),
  s('Atividade 1: Caixa de Solicitação'),
  p('Materiais: caixa, figuras, velcro.'),
  i('Coloque figuras dos itens preferidos na caixa'),
  i('Ensine a abrir e escolher uma figura'),
  i('Guie a entregar para o adulto'),
  i('Dê o item imediatamente'),
  e(),
  s('Atividade 2: Quadro de Solicitação'),
  p('Quadro com figuras dos itens mais usados.'),
  i('Use quadro de feltro ou velcro'),
  i('Cole figuras: água, banana, brinquedo, abraço'),
  i('Criança pega figura e entrega'),
  i('Reforce: "Você pediu água! Ótimo!"'),
  e(),
  s('Atividade 3: Jogo da Solicitação'),
  p('Esconda itens e incentive a pedir para encontrar.'),
  i('Esconda 3-5 itens pela sala'),
  i('Criança pede pistas'),
  i('Use: "Onde está?" ou "Me ajuda"'),
  i('Recompense com o item encontrado'),
  e(),
  s('Atividade 4: Menu Visual'),
  p('Cardápio visual com opções.'),
  i('Cartaz com fotos ou figuras'),
  i('Criança aponta ou entrega figura'),
  i('Varie as opções diariamente'),
  e(),
  s('Atividade 5: Torneio em Grupo'),
  p('Jogo em roda com 2-4 crianças.'),
  i('Cada criança tem sua pasta de figuras'),
  i('Em roda, cada uma pede seu item'),
  i('Reforce todas as solicitações'),
  e(),
  b('Pratique todos os dias. Celebre cada conquista!'),
]

const L4 = [
  h('Cartões de Sentimentos'),
  p('Identifique e expresse emoções com cartões visuais.'),
  e(),
  s('Feliz'),
  p('Quando estou feliz, quero sorrir. Meu corpo fica leve.'),
  i('Fazer: Sorrir, contar para alguém, dançar'),
  i('Sinais: Bochechas levantadas, sorriso'),
  e(),
  s('Triste'),
  p('Quando estou triste, quero ficar sozinho. Meu corpo fica pesado.'),
  i('Fazer: Pedir abraço, desenhar, ouvir música'),
  i('Sinais: Lágrimas, boca para baixo, ombros caídos'),
  e(),
  s('Com Raiva'),
  p('Sinto o corpo quente. Posso querer gritar. É normal, mas preciso me acalmar.'),
  i('Fazer: Respirar fundo, contar até 10, bater em travesseiro'),
  i('Sinais: Testa franzida, punhos cerrados'),
  e(),
  s('Com Medo'),
  p('Quero fugir ou me esconder. Meu coração fica rápido.'),
  i('Fazer: Pedir ajuda, abraçar algo fofo, respirar devagar'),
  i('Sinais: Olhos arregalados, corpo travado, suor'),
  e(),
  s('Surpreso'),
  p('Algo inesperado acontece. Posso ficar sem saber o que fazer.'),
  i('Fazer: Olhar com atenção, perguntar o que aconteceu'),
  i('Sinais: Olhos arregalados, boca aberta'),
  e(),
  s('Cansado'),
  p('Meus olhos ficam pesados. Posso ficar irritado sem motivo.'),
  i('Fazer: Dormir, descansar, pedir para ficar quieto'),
  i('Sinais: Bocejos, olhos fechados, corpo mole'),
  e(),
  b('Use os cartões diariamente. Pergunte: "Como você está se sentindo?"'),
]

const L5 = [
  h('Estratégias de Regulação Emocional'),
  p('Técnicas para lidar com emoções intensas e crises.'),
  e(),
  s('Estratégia 1: Respiração da Borboleta'),
  p('Mãos no peito (asas). Inspire narinas (sobem). Expire boca (descem).'),
  i('Pratique 3-5 vezes por dia'),
  i('Use na crise: "Vamos respirar como borboleta?"'),
  i('Conta: 4 inspirar, 4 segurar, 4 expirar'),
  e(),
  s('Estratégia 2: Canto da Calma'),
  p('Canto com almofadas, fones, livros e brinquedos sensoriais.'),
  i('Criança vai quando sobrecarregada'),
  i('Não é punição, é conforto'),
  i('Permaneça quanto precisar'),
  e(),
  s('Estratégia 3: Timer Visual'),
  p('Mostre o tempo restante para reduzir ansiedade nas transições.'),
  i('Use apps de timer ou ampulheta colorida'),
  i('Mostre visualmente quanto falta'),
  i('Avise: "Faltam 2 minutos"'),
  e(),
  s('Estratégia 4: Pesos e Compressão'),
  p('Objetos pesados acalmam o sistema nervoso.'),
  i('Use coletes, cobertores pesados ou bolsas de areia'),
  i('Sempre sob supervisão profissional'),
  i('Comece pouco e aumente aos poucos'),
  e(),
  s('Estratégia 5: Contar até 10'),
  p('Ensine a criança a contar devagar quando estiver agitada.'),
  i('Use cores ou dedos para ajudar'),
  i('Combine com respiração'),
  i('Pratique em situações calmas primeiro'),
  e(),
  b('Cada criança é única. Teste diferentes estratégias.'),
]

async function main() {
  console.log('Gerando 5 materiais premium...\n')
  const d1 = await makePDF('Histórias Sociais para Crianças', 'Material para Crianças com TEA', 20, (p) => L1.slice(p*3, p*3+3))
  fs.writeFileSync(path.join(OUTPUT, 'historias-sociais-criancas.pdf'), await d1.save())
  console.log('1/5 Histórias Sociais (20 págs)')

  const d2 = await makePDF('PECS - Comunicação por Figuras', 'Guia das 6 Fases', 25, (p) => L2.slice(p*3, p*3+3))
  fs.writeFileSync(path.join(OUTPUT, 'pecs-comunicacao-figuras.pdf'), await d2.save())
  console.log('2/5 PECS (25 págs)')

  const d3 = await makePDF('Atividades de Solicitação', 'Comunicação Funcional', 12, (p) => L3.slice(p*3, p*3+3))
  fs.writeFileSync(path.join(OUTPUT, 'atividades-solicitacao.pdf'), await d3.save())
  console.log('3/5 Atividades de Solicitação (12 págs)')

  const d4 = await makePDF('Cartões de Sentimentos', 'Identificando Emoções', 15, (p) => L4.slice(p*3, p*3+3))
  fs.writeFileSync(path.join(OUTPUT, 'cartoes-sentimentos.pdf'), await d4.save())
  console.log('4/5 Cartões de Sentimentos (15 págs)')

  const d5 = await makePDF('Estratégias de Regulação', 'Lidando com Emoções e Crises', 12, (p) => L5.slice(p*3, p*3+3))
  fs.writeFileSync(path.join(OUTPUT, 'estrategias-regulacao.pdf'), await d5.save())
  console.log('5/5 Estratégias de Regulação (12 págs)')

  console.log('\nTodos os 5 PDFs gerados em premium-pdfs/output/')
}
main().catch(console.error)
