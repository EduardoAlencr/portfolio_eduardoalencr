# Portfólio · Eduardo Alencar

Portfólio pessoal desenvolvido com **React + TypeScript + Vite + Tailwind CSS**.

🔗 **Online:** https://eduardoalencr.github.io/portfolio_eduardoalencr/

## Destaques técnicos

- **Componentização:** UI dividida em componentes pequenos e reutilizáveis (`ui/`, `layout/`, `sections/`).
- **Dados separados da interface:** o conteúdo (projetos, experiências, skills) fica em `src/data`, tipado com TypeScript.
- **Consumo de API:** a seção "No GitHub" busca meus repositórios na API pública do GitHub, com estados de carregamento e de erro (`services/github.ts` + hook `useGitHubRepos`).
- **Responsivo e acessível:** mobile-first, menu com `aria-expanded`, textos alternativos e foco visível.
- **Testes:** Vitest + Testing Library.
- **CI/CD:** lint, testes e build rodam a cada push na `main`, com deploy automático no GitHub Pages via GitHub Actions.

## Estrutura

```
src/
├── components/
│   ├── layout/      # Navbar, Footer
│   ├── sections/    # Hero, Projects, GitHubRepos, About, Skills, Contact
│   ├── ui/          # Section, Button, Tag, Icons
│   └── __tests__/
├── data/            # conteúdo do portfólio
├── hooks/           # useGitHubRepos
├── services/        # cliente da API do GitHub
├── types/
└── utils/
```

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm test         # testes
npm run lint     # lint
npm run build    # build de produção
```
