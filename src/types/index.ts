export interface Project {
  title: string
  description: string
  tags: string[]
  image?: string
  repoUrl?: string
  liveUrl?: string
  /** Destaque visual para os projetos web, foco da candidatura */
  category: 'web' | 'mobile'
}

export interface Experience {
  role: string
  company: string
  period: string
  description: string
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface SocialLink {
  label: string
  url: string
}

/** Subconjunto dos campos retornados por GET /users/:user/repos */
export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  updated_at: string
  fork: boolean
}
