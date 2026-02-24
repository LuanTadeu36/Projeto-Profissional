
<!-- Instruções para agentes de IA / Copilot -->
# Objetivo do Projeto

Desenvolver uma landing page estratégica para:

- Apresentar o conceito do aplicativo NoCorre
- Fortalecer a identidade do projeto
- Gerar autoridade no segmento de corrida
- Captar interessados (lista de espera)
- Medir o interesse do público antes do lançamento oficial

## Estrutura da Página

A landing page contará com as seguintes seções:

1. **Seção Principal (Hero):** Nome, identidade visual, frase de impacto, botão de chamada para ação (entrar na lista de espera) e mockup ilustrativo do app.
2. **Sobre o Projeto:** Quem somos, origem da ideia, missão e propósito.
3. **Benefícios do Aplicativo:** Evolução na corrida, acompanhamento de desempenho, comunidade, desafios e diferenciais.
4. **Treinos e Alongamentos:** Conteúdo informativo para gerar autoridade.
5. **Documentário:** Incorporação de vídeo do YouTube apresentando a história do projeto.
6. **O que Está por Vir:** Funcionalidades futuras e roadmap inicial.
7. **Lista de Espera:** Campo para nome e e-mail, consentimento LGPD, armazenamento dos contatos e possibilidade de comunicação futura.
8. **Redes Sociais:** Integração com Instagram e Facebook.
9. **Rodapé Profissional:** Contato, política de privacidade e termos de uso.

# Repository Overview

- Purpose: Single-page React application scaffolded with Vite. Minimal app composed of a header and a hero section.
- Entry points: `src/main.jsx` (app bootstrap) and `src/App.jsx` (root component). See `src/components/Header.jsx` and `src/sections/Hero.jsx` for component examples.
- Build system: Vite with `@vitejs/plugin-react` configured in `vite.config.js`.

# Quick Commands

- Dev server: `npm run dev` (runs `vite`).
- Build: `npm run build` (runs `vite build`).
- Preview production build: `npm run preview` (runs `vite preview`).
- Lint: `npm run lint` (runs `eslint .`).

# Big Picture & Architecture

- This is a front-end-only project (no server or API layer present). Components are organized by role:
  - `src/components/` — reusable UI components (example: `Header.jsx`).
  - `src/sections/` — page sections (example: `Hero.jsx`).
  - `src/assets/` — static assets referenced by components.
  - `public/` — static files served by Vite.
- Styling is imported at the app root (`src/main.jsx` imports `index.css`) and component-level CSS files can be placed under `src/styles/` or alongside components.

# Coding Conventions (observable in repo)

- File extensions: use `.jsx` for React components (this repo uses `.jsx` everywhere).
- Component exports: components use default exports (e.g., `export default Header`). Follow that pattern when adding new components.
- Imports: use relative paths from the file root (see `src/App.jsx` importing `./components/Header`).
- StrictMode: app is mounted inside React `StrictMode` in `src/main.jsx` — preserve that unless intentionally changing root behavior.

# Linting & Formatting

- ESLint config: `eslint.config.js` targets `**/*.{js,jsx}` and includes `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`.
- Notable rule: `'no-unused-vars'` is configured to ignore identifiers that start with a capital letter or underscore (`varsIgnorePattern: '^[A-Z_]'`). When introducing new variables that ESLint would otherwise flag, prefer adjusting usage rather than disabling rules.

# Integration Points & What’s Not Here

- No network/service layer detected — components are currently static and self-contained.
- No tests or test runner configured in `package.json`.
- If you add external libraries, update `package.json` and run `npm install` (or `pnpm`/`yarn` depending on team preference).

# Examples (copyable)

- Start development server:

  npm run dev

- App bootstrap reference: `src/main.jsx` renders `<App />` inside `StrictMode`.

- Add a new component:
  1. Create `src/components/MyComponent.jsx` with a default export.
  2. Import where needed: `import MyComponent from "./components/MyComponent"`.
  3. Add styles in `src/styles/` or next to the component and import them from the component file.

# Notes for AI Agents

- Work within existing structure: place UI code under `src/components` or `src/sections` and import from `src/App.jsx` when composing pages.
- Avoid changing root build config (`vite.config.js`) unless necessary. If you do change it, keep `@vitejs/plugin-react` enabled.
- Preserve ESLint rules and file conventions; prefer minimal, focused changes and follow the `.jsx` default-export pattern.
- When suggesting new project-level workflows (tests, CI), present the minimal changes required and include commands to run locally.

# If You Merge This File

- If the repository already contains a `.github/copilot-instructions.md`, merge by preserving any project-specific operational commands and examples while adopting the structure above.

---
If anything here is unclear or you want the file to include additional workflows (CI, tests, or deployment steps), tell me which area to expand. 
