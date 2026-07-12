# Psicologia Online Brasil

Plataforma completa para psicólogos especializados em Autismo e ABA Naturalista.

## Funcionalidades

- **Site Institucional** - Landing page profissional
- **Agendamento Online** - Pacientes agendam sessões pelo site
- **WhatsApp Integrado** - Botão flutuante para contato rápido
- **Blog** - Artigos sobre autismo e ABA
- **Área do Paciente** - Acesso a materiais e histórico
- **Formulário de Avaliação** - Questionário completo para novos pacientes
- **Materiais Visuais** - Biblioteca de recursos gratuitos e premium

## Tecnologias

- Next.js 14 (React)
- Tailwind CSS
- TypeScript
- Lucide React (ícones)

## Como Rodar

### 1. Instalar Node.js
Acesse https://nodejs.org e instale a versão LTS (18+).

### 2. Instalar Dependências
```bash
cd psicologia-app
npm install
```

### 3. Rodar o Projeto
```bash
npm run dev
```

Acesse http://localhost:3000 no navegador.

## Como Deployar (Vercel)

1. Crie uma conta em https://vercel.com
2. Conecte seu repositório GitHub
3. O Vercel detecta automaticamente o Next.js
4. Clique em "Deploy"

## Personalização

### Alterar Dados da Psicóloga
Edite os arquivos em `src/components/` para atualizar:
- Nome e CRP
- Telefone/WhatsApp
- Valores das sessões
- Textos descritivos

### Alterar Cores
Edite `tailwind.config.js` para mudar as cores do tema.

### Adicionar Posts no Blog
Edite `src/app/blog/page.tsx` para adicionar novos artigos.

### Adicionar Materiais
Edite `src/app/materiais/page.tsx` para adicionar novos recursos.

## Estrutura do Projeto

```
psicologia-app/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Página principal
│   │   ├── agendamento/      # Sistema de agendamento
│   │   ├── blog/             # Blog com artigos
│   │   ├── materiais/        # Biblioteca de materiais
│   │   ├── formulario/       # Formulário de avaliação
│   │   ├── area-paciente/    # Área do paciente
│   │   └── api/              # Rotas da API
│   └── components/           # Componentes React
├── public/                   # Arquivos estáticos
└── package.json              # Dependências
```

## Próximos Passos

- [ ] Integrar banco de dados (PostgreSQL/Supabase)
- [ ] Adicionar autenticação de pacientes
- [ ] Integrar com Google Calendar
- [ ] Adicionar pagamentos online
- [ ] Criar sistema de videochamada integrado
- [ ] Adicionar IA para notas clínicas

## Licença

MIT
