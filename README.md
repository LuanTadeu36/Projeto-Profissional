# NoCorre — Superando Limites 🏃‍♂️

Landing page do **NoCorre**, um projeto que une treino, evolução e comunidade para corredores de todos os níveis.

🔗 **[nocorre.vercel.app](https://nocorre.vercel.app)**

---

## Sobre o Projeto

O NoCorre nasceu de uma conversa entre amigos corredores que perceberam a falta de uma plataforma que unisse treino, desempenho e comunidade em um só lugar. Esta landing page é o primeiro passo: apresentar o conceito, gerar autoridade no segmento e captar interessados para a lista de espera antes do lançamento oficial do aplicativo.

## Seções da Página

| Seção | Rota | Descrição |
|-------|------|-----------|
| **Hero** | `/` | Frase de impacto, CTA e imagem de fundo |
| **Quem Somos** | `/sobre` | Timeline com a origem e evolução do projeto |
| **Evolução** | `/evolucao` | Benefícios e diferenciais do app |
| **Documentário** | `/documentario` | Vídeo do YouTube contando a história do NoCorre |
| **Nosso App** | `/roadmap` | Funcionalidades futuras em layout zig-zag |
| **Redes** | `/redes` | Links para Instagram, WhatsApp e TikTok |
| **Lista de Espera** | `/lista-espera` | Formulário com envio para Google Sheets (LGPD) |

## Tecnologias

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| [React](https://react.dev) | 19 | Biblioteca de UI |
| [Vite](https://vite.dev) | 7 | Build tool e dev server |
| [Tailwind CSS](https://tailwindcss.com) | 3.4 | Estilização utility-first |
| [React Router](https://reactrouter.com) | 7 | Roteamento SPA |
| [Vercel](https://vercel.com) | — | Hospedagem e deploy contínuo |
| [Vercel Analytics](https://vercel.com/analytics) | 1.6 | Métricas de acesso |
| [Google Fonts](https://fonts.google.com) | — | Bebas Neue (títulos) + Montserrat (corpo) |
| [Google Apps Script](https://developers.google.com/apps-script) | — | Backend do formulário → Google Sheets |

## Estrutura do Projeto

```
src/
├── main.jsx               # Bootstrap (StrictMode + Analytics)
├── index.css              # Tailwind directives + fonte global
├── App.jsx                # Router, lazy loading, ErrorBoundary
├── components/
│   ├── Header.jsx         # Navegação + menu mobile (portal)
│   ├── Footer.jsx         # Rodapé
│   ├── ScrollToTop.jsx    # Scroll ao topo ao mudar rota
│   ├── ErrorBoundary.jsx  # Captura de erros em runtime
│   └── NotFound.jsx       # Página 404
├── sections/
│   ├── Hero.jsx           # Seção principal
│   ├── Sobre.jsx          # Timeline "Quem Somos"
│   ├── Evolucao.jsx       # Grid de benefícios
│   ├── Documentario.jsx   # Embed YouTube (privacy mode)
│   ├── Roadmap.jsx        # Features do app
│   ├── Redes.jsx          # Cards de redes sociais
│   └── ListaEspera.jsx    # Formulário + Google Sheets
└── assets/
    ├── grupo-corrida.jpg  # Background do Hero
    └── logo-nocorre.png   # Logo NoCorre
```

## Como Rodar

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview da build
npm run preview

# Lint
npm run lint
```

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz:

```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SEU_ID/exec
```

## Destaques Técnicos

- **Code splitting** — Cada seção é carregada sob demanda via `React.lazy` + `Suspense`
- **SEO** — Meta tags Open Graph, Twitter Card, canonical, robots e theme-color
- **Acessibilidade** — Labels nos formulários, `aria-hidden` em SVGs decorativos, `aria-label` nos botões, Escape fecha menu mobile
- **Segurança** — Headers HTTP (HSTS, X-Frame-Options, CSP, Referrer-Policy) via `vercel.json`
- **Privacidade** — YouTube embed via domínio `youtube-nocookie.com`, consentimento LGPD no formulário
- **Performance** — Imagens otimizadas, iframe `loading="lazy"`, fontes com `preconnect`
- **Design system** — Cores (`amarelo`, `preto`) e fontes centralizadas no `tailwind.config.js`

## Deploy

O projeto faz deploy automático na Vercel a cada push na branch principal.

---

Feito com 💛 pelo time NoCorre.
