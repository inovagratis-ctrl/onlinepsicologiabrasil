import { put } from '@vercel/blob'
import { readFileSync } from 'fs'
import { join } from 'path'

const materials = [
  { id: 'cmrjpeqvl00006f6civuu9t93', file: 'historias-sociais-criancas.pdf' },
  { id: 'cmrjper2y00016f6cndi82utw', file: 'pecs-comunicacao-figuras.pdf' },
  { id: 'cmrjper9900026f6cz6ycvs7y', file: 'atividades-solicitacao.pdf' },
  { id: 'cmrjperfw00036f6cp4wfy4o9', file: 'cartoes-sentimentos.pdf' },
  { id: 'cmrjperm500046f6c4t2nnlzr', file: 'estrategias-regulacao.pdf' },
]

async function uploadAll() {
  for (const material of materials) {
    const filePath = join(__dirname, 'output', material.file)
    const fileBuffer = readFileSync(filePath)
    
    console.log(`Uploading ${material.file}...`)
    
    const blob = await put(`materiais/${material.file}`, fileBuffer, {
      access: 'private',
      contentType: 'application/pdf',
    })
    
    console.log(`✓ ${material.file}: ${blob.url}`)
    
    // Update material in database via API
    const response = await fetch('https://psicologiadireta.com.br/api/materials')
    const data = await response.json()
    const existing = data.materials?.find((m: any) => m.id === material.id)
    
    if (existing) {
      await fetch(`https://psicologiadireta.com.br/api/materials/${material.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pdfUrl: blob.url }),
      })
      console.log(`✓ Updated ${material.file} in database`)
    }
  }
  
  console.log('\n✅ All uploads complete!')
}

uploadAll().catch(console.error)