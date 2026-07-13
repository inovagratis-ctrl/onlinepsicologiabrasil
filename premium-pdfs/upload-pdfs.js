const fs = require('fs')
const path = require('path')

const PDF_DIR = path.join(__dirname, 'output')
const API_URL = 'https://psicologiadireta.com.br/api/materials/upload'
const UPDATE_URL = 'https://psicologiadireta.com.br/api/materials'

const materials = [
  { id: 'cmrjpeqvl00006f6civuu9t93', file: 'historias-sociais-criancas.pdf', slug: 'historias-sociais-criancas' },
  { id: 'cmrjper2y00016f6cndi82utw', file: 'pecs-comunicacao-figuras.pdf', slug: 'pecs-comunicacao-figuras' },
  { id: 'cmrjper9900026f6cz6ycvs7y', file: 'atividades-solicitacao.pdf', slug: 'atividades-solicitacao' },
  { id: 'cmrjperfw00036f6cp4wfy4o9', file: 'cartoes-sentimentos.pdf', slug: 'cartoes-sentimentos' },
  { id: 'cmrjperm500046f6c4t2nnlzr', file: 'estrategias-regulacao.pdf', slug: 'estrategias-regulacao' },
]

async function uploadPDF(materialId, filename) {
  const filePath = path.join(PDF_DIR, filename)
  const fileBuffer = fs.readFileSync(filePath)
  
  const formData = new FormData()
  const blob = new Blob([fileBuffer], { type: 'application/pdf' })
  formData.append('file', blob, filename)
  formData.append('materialId', materialId)

  const res = await fetch(API_URL, {
    method: 'POST',
    body: formData,
  })
  const data = await res.json()
  return data
}

async function updateMaterial(materialId, pdfUrl) {
  const res = await fetch(`${UPDATE_URL}/${materialId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pdfUrl }),
  })
  const data = await res.json()
  return data
}

async function main() {
  console.log('Enviando 5 PDFs para Vercel Blob...\n')

  for (const m of materials) {
    try {
      console.log(`📤 Enviando ${m.file}...`)
      const uploadResult = await uploadPDF(m.id, m.file)
      
      if (uploadResult.success) {
        console.log(`   URL: ${uploadResult.url}`)
        const updateResult = await updateMaterial(m.id, uploadResult.url)
        if (updateResult.success) {
          console.log(`✅ ${m.file} enviado e atualizado!`)
        } else {
          console.log(`⚠️  Upload OK mas update falhou: ${updateResult.error}`)
        }
      } else {
        console.log(`❌ Falha no upload: ${uploadResult.error}`)
      }
    } catch (err) {
      console.log(`❌ Erro: ${err.message}`)
    }
  }
}

main()
