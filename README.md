# 🚀 Sistema Futurista de Agendamento

Sistema sofisticado e moderno para agendamento de serviços, com integração com Outlook, Google Calendar e iCloud, dashboards de análise e design futurista usando Next.js + Tailwind CSS.

---

## 📑 Funcionalidades Principais

- **Múltiplas telas**:
  1. Configuração inicial do tipo de negócio.
  2. Tela de agendamento com calendário embutido.
  3. Dashboard de análises com gráficos dinâmicos.
  4. Tela de configurações e integração com APIs.
- **Design** futurista com animações suaves, gradientes e glassmorphism.
- **Integração direta** com calendários:
  - Outlook
  - Google Calendar
  - iCloud
- **Responsivo** para desktop, tablet e mobile.
- **Pronto para deploy** no GitHub e Vercel.

---

## 🛠 Tecnologias Utilizadas

- **Framework**: Next.js
- **Estilo**: Tailwind CSS
- **Bibliotecas**:
  - react-big-calendar
  - chart.js / recharts
  - next-themes
- **APIs**: Microsoft Outlook, Google Calendar, Apple iCloud

---

## 📦 Instalação

### 1️⃣ Clone do Repositório

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
cd SEU_REPOSITORIO
```

### 2️⃣ Instalar Dependências

```bash
npm install
# ou
yarn install
```

## 🔌 Configuração de APIs

### Google Calendar API

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um projeto e habilite **Google Calendar API**.
3. Gere credenciais OAuth 2.0 e copie para `.env.local`.

### Outlook API (Microsoft Graph)

1. Acesse [Azure Portal](https://portal.azure.com/).
2. Registre um aplicativo e habilite permissões de Calendário.
3. Copie `CLIENT_ID` e `CLIENT_SECRET` para `.env.local`.

### iCloud Calendar

1. Habilite acesso delegado ao seu calendário iCloud.
2. Configure credenciais no `.env.local`.

### Exemplo de `.env.local`:

```env
GOOGLE_CLIENT_ID=xxx
GOOGLE_CLIENT_SECRET=xxx

OUTLOOK_CLIENT_ID=xxx
OUTLOOK_CLIENT_SECRET=xxx

ICLOUD_USER=xxx
ICLOUD_PASS=xxx
```

## ▶️ Executando em Ambiente Local

```bash
npm run dev
# ou
yarn dev
```

Acesse em: [http://localhost:3000](http://localhost:3000)

## 🚀 Deploy no Vercel

1. Suba o projeto para seu GitHub:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Acesse [Vercel](https://vercel.com) e importe o repositório.
3. Configure variáveis de ambiente (API Keys).
4. Clique em **Deploy**.

## 📊 Dashboard e Relatórios

Acesse a página `/dashboard` para visualizar:

- Agendamentos por período.
- Cancelamentos e confirmações.
- Distribuição por tipo de serviço.
- Exportar relatórios em PDF ou CSV.

## 📱 Responsividade

Design adaptável para:

- **Desktop** ≥ 1024px
- **Tablet** 768px – 1024px
- **Mobile** ≤ 768px

## 🧩 Estrutura de Pastas

```
sistema-agendamento/
├── app/
│   ├── page.tsx              # Tela inicial
│   ├── layout.tsx            # Layout principal
│   ├── agendamento/
│   │   └── page.tsx          # Tela de agendamento
│   ├── dashboard/
│   │   └── page.tsx          # Dashboard de análises
│   ├── configuracoes/
│   │   └── page.tsx          # Configurações
│   └── api/
│       └── calendar/
│           └── route.ts      # API routes
├── components/
│   ├── Calendar.tsx
│   ├── ChartCard.tsx
│   ├── BusinessSelector.tsx
│   ├── Header.tsx
│   ├── ThemeToggle.tsx
│   └── StatsCard.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── assets/
├── styles/
│   └── globals.css
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── vercel.json
└── README.md
```

## 💡 Dicas

- Use temas claro/escuro para melhorar usabilidade.
- Configure alertas visuais ao criar/cancelar agendamentos.
- Utilize glassmorphism e gradientes para reforçar o estilo futurista.

## 🏷 Licença

MIT © 2025 — Desenvolvido com ♥ para um agendamento mais inteligente.
