import type { Project } from '../types'

const github = 'https://github.com/eduardoalencr'

export const projects: Project[] = [
  {
    title: 'Casa Pastelaria: Gestão de Clientes',
    description:
      'Sistema web para cadastro, listagem e exclusão de clientes. O front-end consome uma API REST com cache e estado de servidor via TanStack Query, e os formulários são validados com React Hook Form e Zod.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'TanStack Query', 'Zod'],
    repoUrl: `${github}/devclientes`,
    category: 'web',
  },
  {
    title: 'Portfólio Pessoal',
    description:
      'Este site. Componentizado em React com TypeScript, lista meus repositórios em tempo real pela API do GitHub, tem testes com Vitest e faz deploy automático com GitHub Actions.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vitest', 'GitHub Actions'],
    repoUrl: `${github}/portfolio_eduardoalencr`,
    liveUrl: 'https://eduardoalencr.github.io/portfolio_eduardoalencr/',
    category: 'web',
  },
  {
    title: 'Taskfy: Gerenciador de Tarefas',
    description:
      'Aplicação de tarefas com interface em React que consome, via Axios, uma API REST em Python (Flask + SQLite) para listar e cadastrar tarefas.',
    tags: ['React', 'JavaScript', 'Axios', 'Flask'],
    repoUrl: `${github}/taskfy`,
    category: 'web',
  },
  {
    title: 'UM: UNIVASF Mobile',
    description:
      'Meu trabalho de conclusão de curso: um aplicativo que centraliza as informações acadêmicas da universidade, com foco em usabilidade e acesso rápido à informação.',
    tags: ['Flutter', 'Docker', 'UI/UX'],
    image: 'imagens/projeto3.png',
    repoUrl: `${github}/um-univasf-mobile`,
    category: 'mobile',
  },
  {
    title: 'Pichuruco: Cofrinho Digital',
    description:
      'Aplicativo para casais controlarem economias conjuntas, com sincronização de dados, histórico de depósitos e metas de economia.',
    tags: ['Flutter', 'Firebase', 'UI/UX'],
    image: 'imagens/projeto1.png',
    repoUrl: `${github}/pichuruco-app`,
    category: 'mobile',
  },
  {
    title: 'Sistema de Patrimônio Mobile',
    description:
      'Adaptação do sistema web de patrimônio da UNIVASF para a versão mobile. Projeto institucional desenvolvido no estágio.',
    tags: ['Flutter', 'Docker', 'PHP'],
    image: 'imagens/projeto2.png',
    category: 'mobile',
  },
]
