import type { GitHubRepo } from '../types'

const API_URL = 'https://api.github.com'

export async function fetchRepos(user: string, signal?: AbortSignal): Promise<GitHubRepo[]> {
  const response = await fetch(`${API_URL}/users/${user}/repos?sort=updated&per_page=100`, {
    headers: { Accept: 'application/vnd.github+json' },
    signal,
  })

  if (!response.ok) {
    throw new Error(`Erro ao buscar repositórios (status ${response.status})`)
  }

  const repos = (await response.json()) as GitHubRepo[]
  return repos.filter((repo) => !repo.fork)
}
