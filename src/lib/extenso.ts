// Conversor de valores numéricos em moeda para extenso em Português (Brasil)
// Utilizado para emissão de recibos psicológicos (IRPF / Carnê-Leão)

const UNIDADES = [
  '',
  'um',
  'dois',
  'três',
  'quatro',
  'cinco',
  'seis',
  'sete',
  'oito',
  'nove',
  'dez',
  'onze',
  'doze',
  'treze',
  'quatorze',
  'quinze',
  'dezesseis',
  'dezessete',
  'dezoito',
  'dezenove',
]

const DEZENAS = [
  '',
  '',
  'vinte',
  'trinta',
  'quarenta',
  'cinquenta',
  'sessenta',
  'setenta',
  'oitenta',
  'noventa',
]

const CENTENAS = [
  '',
  'cento',
  'duzentos',
  'trezentos',
  'quatrocentos',
  'quinhentos',
  'seiscentos',
  'setecentos',
  'oitocentos',
  'novecentos',
]

function converterGrupo(n: number): string {
  if (n === 0) return ''
  if (n === 100) return 'cem'

  const c = Math.floor(n / 100)
  const d = Math.floor((n % 100) / 10)
  const u = n % 10

  const partes: string[] = []

  if (c > 0) partes.push(CENTENAS[c])

  const resto = n % 100
  if (resto > 0 && resto < 20) {
    partes.push(UNIDADES[resto])
  } else {
    if (d > 0) partes.push(DEZENAS[d])
    if (u > 0) partes.push(UNIDADES[u])
  }

  return partes.join(' e ')
}

export function valorPorExtenso(valor: number): string {
  if (isNaN(valor) || valor <= 0) return 'zero reais'

  const valorFixado = valor.toFixed(2)
  const [reaisStr, centavosStr] = valorFixado.split('.')
  const totalReais = parseInt(reaisStr, 10)
  const totalCentavos = parseInt(centavosStr, 10)

  const partesExtenso: string[] = []

  if (totalReais > 0) {
    const milhoes = Math.floor(totalReais / 1000000)
    const milhares = Math.floor((totalReais % 1000000) / 1000)
    const centenas = totalReais % 1000

    if (milhoes > 0) {
      partesExtenso.push(
        `${converterGrupo(milhoes)} ${milhoes === 1 ? 'milhão' : 'milhões'}`
      )
    }

    if (milhares > 0) {
      partesExtenso.push(`${converterGrupo(milhares)} mil`)
    }

    if (centenas > 0) {
      partesExtenso.push(converterGrupo(centenas))
    }

    partesExtenso.push(totalReais === 1 ? 'real' : 'reais')
  }

  if (totalCentavos > 0) {
    const extensoCentavos = converterGrupo(totalCentavos)
    const palavraCentavo = totalCentavos === 1 ? 'centavo' : 'centavos'
    if (partesExtenso.length > 0) {
      partesExtenso.push(`e ${extensoCentavos} ${palavraCentavo}`)
    } else {
      partesExtenso.push(`${extensoCentavos} ${palavraCentavo}`)
    }
  }

  return partesExtenso.join(' ').replace(/\s+/g, ' ').trim()
}
