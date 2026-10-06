# Portfólio · Eduardo Alencar

Portfólio pessoal de **Eduardo Alencar**, desenvolvedor front-end. Reúne meus projetos, experiências, skills e formas de contato em uma página única, responsiva e construída com **React + TypeScript + Vite + Tailwind CSS**.

🔗 **Acesse online:** https://eduardoalencr.github.io/portfolio_eduardoalencr/

---

## 📌 Sobre o projeto

O site é meu cartão de visitas profissional. Além de apresentar meu trabalho, ele próprio serve de demonstração prática das tecnologias e boas práticas que uso no dia a dia:

- interface **componentizada** em React com **TypeScript**;
- **consumo de API REST** (API pública do GitHub);
- layout **responsivo** (mobile-first) e preocupado com **acessibilidade**;
- **testes automatizados**;
- **deploy automático** com GitHub Actions.

### Seções da página

| Seção | O que mostra |
| --- | --- |
| **Início** | Apresentação, foco em front-end e atalhos para projetos e contato |
| **Projetos** | Cards dos projetos **Web** e **Mobile**, com tecnologias e links para o código |
| **No GitHub** | Meus repositórios públicos, carregados **em tempo real** pela API do GitHub |
| **Sobre mim** | Quem sou, experiência profissional e formação |
| **Skills** | Tecnologias agrupadas: Front-end, Ferramentas, Design, Mobile e Comportamental |
| **Contato** | Formulário que abre o e-mail já preenchido, além de WhatsApp, e-mail e redes sociais |

---

## 🛠️ Tecnologias

- **[React 19](https://react.dev/)**: construção da interface em componentes
- **[TypeScript](https://www.typescriptlang.org/)**: tipagem estática dos dados e componentes
- **[Vite](https://vite.dev/)**: ambiente de desenvolvimento e build
- **[Tailwind CSS 4](https://tailwindcss.com/)**: estilização utilitária e responsiva
- **[Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)**: testes
- **[Oxlint](https://oxc.rs/)**: análise estática do código (lint)
- **GitHub Actions + GitHub Pages**: integração e deploy contínuos

---

## 🔄 O que mudou nesta versão (v2)

A primeira versão era um único arquivo HTML estático, com Tailwind via CDN e posicionada só para desenvolvimento mobile. Esta versão foi **reconstruída do zero** para refletir meu foco atual em front-end.

### Arquitetura
- Migração de **HTML estático → React + TypeScript + Vite**.
- Página dividida em **componentes reutilizáveis** (`layout/`, `sections/`, `ui/`).
- **Conteúdo separado da interface:** projetos, experiências e skills ficam em `src/data/`, tipados. Para atualizar o portfólio, basta editar esses arquivos.
- Tailwind CSS instalado no projeto (não mais via CDN), com a paleta de cores original definida como tema.

### Novas funcionalidades
- **Seção "No GitHub":** consome a API pública do GitHub e lista meus repositórios mais recentes (sem forks). Mostra *skeleton* enquanto carrega e mensagem amigável se a API falhar.
- **Formulário de contato funcional:** valida os campos e abre o cliente de e-mail do visitante com assunto e mensagem preenchidos (antes era só demonstração).
- **Projetos separados em Web e Mobile**, com links reais para o código no GitHub.
- **Testes automatizados** do menu, dos cards de projeto e do consumo da API.
- **Deploy automático:** a cada push na `main`, o GitHub Actions roda lint, testes e build e publica no GitHub Pages.

### Conteúdo
- Posicionamento atualizado para **Desenvolvedor Front-end (React · TypeScript · Tailwind CSS)**, com Flutter como diferencial.
- Novos projetos em destaque: **Casa Pastelaria: Gestão de Clientes** (React + TS + TanStack Query + Zod) e o próprio portfólio.
- Experiência atualizada: trabalho atual na **Casa Pastelaria** (negócio familiar) e estágio na **UNIVASF/STI** concluído em dez/2025.
- Barras de "porcentagem de habilidade" substituídas por grupos de skills, mais objetivos.
- Todo o texto revisado e padronizado em português.

### Correções
- Links de projetos que apontavam para `#` agora levam aos repositórios.
- Links do GitHub e do LinkedIn na seção "Sobre" estavam quebrados (tag fechada antes do conteúdo).
- Removidas imagens referenciadas que não existiam no repositório e o ícone de uma rede social sem perfil.
- Stack do Taskfy corrigida (o backend é **Flask**, não Django).

### Acessibilidade e SEO
- Menu mobile com `aria-expanded` / `aria-controls` e rótulos acessíveis.
- Textos alternativos em todas as imagens, foco visível e respeito a `prefers-reduced-motion`.
- `lang="pt-BR"`, meta description, tags Open Graph e favicon próprio.

---

## 📁 Estrutura de pastas

```
├── .github/workflows/deploy.yml   # CI/CD: lint, testes, build e deploy no Pages
├── public/
│   ├── favicon.svg
│   └── imagens/                   # foto de perfil e prints dos projetos
├── src/
│   ├── components/
│   │   ├── layout/                # Navbar e Footer
│   │   ├── sections/              # Hero, Projects, ProjectCard, GitHubRepos, About, Skills, Contact
│   │   ├── ui/                    # Section, Button, Tag, ícones
│   │   └── __tests__/             # testes dos componentes
│   ├── data/                      # ✏️ conteúdo do portfólio (edite aqui)
│   │   ├── profile.ts             # nome, resumo, contatos e redes
│   │   ├── projects.ts            # projetos
│   │   ├── experience.ts          # experiências e formação
│   │   ├── skills.ts              # skills
│   │   └── navigation.ts          # links do menu
│   ├── hooks/useGitHubRepos.ts    # hook com estados loading / erro / sucesso
│   ├── services/github.ts         # cliente da API do GitHub
│   ├── types/                     # tipos TypeScript (Project, Experience, GitHubRepo…)
│   ├── utils/assetUrl.ts          # resolve caminhos de imagens no GitHub Pages
│   ├── App.tsx                    # monta a página
│   └── index.css                  # Tailwind + tema de cores
├── index.html
└── vite.config.ts                 # Vite, Tailwind e Vitest
```

### Como funciona o consumo da API

```
GitHubRepos (componente)
   └── useGitHubRepos('eduardoalencr')       → controla loading / erro / sucesso
         └── fetchRepos()                    → GET api.github.com/users/eduardoalencr/repos
                                               filtra forks e ordena por atualização
```

A requisição é cancelada com `AbortController` se o componente sair da tela antes de terminar.

---

## 🚀 Como rodar localmente

Pré-requisito: **Node.js 20+**.

```bash
# 1. Clonar o repositório
git clone https://github.com/eduardoalencr/portfolio_eduardoalencr.git
cd portfolio_eduardoalencr

# 2. Instalar as dependências
npm install

# 3. Rodar em modo desenvolvimento
npm run dev
```

Acesse **http://localhost:5173/portfolio_eduardoalencr/**.

### Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com recarregamento automático |
| `npm test` | Roda os testes (Vitest) |
| `npm run lint` | Verifica o código com Oxlint |
| `npm run build` | Checa os tipos e gera o build de produção em `dist/` |
| `npm run preview` | Serve o build de produção localmente |

---

## ✅ Testes

```bash
npm test
```

Cobrem:
- abertura e fechamento do **menu mobile**;
- renderização de um card para **cada projeto** e ausência de links vazios;
- o hook **`useGitHubRepos`**: sucesso (com filtro de forks e limite) e erro da API, usando `fetch` simulado.

---

## 🌐 Deploy

O deploy é automático pelo workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. Push na branch `main`;
2. O GitHub Actions instala as dependências e roda **lint → testes → build**;
3. Se tudo passar, a pasta `dist/` é publicada no **GitHub Pages**.

---

## 📬 Contato

- **E-mail:** eduardoalencar.contato@gmail.com
- **LinkedIn:** [linkedin.com/in/eduardoalencr](https://www.linkedin.com/in/eduardoalencr)
- **GitHub:** [github.com/eduardoalencr](https://github.com/eduardoalencr)
