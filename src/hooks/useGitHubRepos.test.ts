import { renderHook, waitFor } from '@testing-library/react'
import type { GitHubRepo } from '../types'
import { useGitHubRepos } from './useGitHubRepos'

const repo = (id: number, fork = false): GitHubRepo => ({
  id,
  name: `repo-${id}`,
  description: null,
  html_url: `https://github.com/user/repo-${id}`,
  homepage: null,
  language: 'TypeScript',
  stargazers_count: 0,
  updated_at: '2026-01-01T00:00:00Z',
  fork,
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('useGitHubRepos', () => {
  it('retorna os repositórios, sem forks, respeitando o limite', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({ ok: true, json: () => Promise.resolve([repo(1), repo(2, true), repo(3), repo(4)]) }),
    )

    const { result } = renderHook(() => useGitHubRepos('user', 2))
    expect(result.current.status).toBe('loading')

    await waitFor(() => expect(result.current.status).toBe('success'))
    if (result.current.status !== 'success') throw new Error('estado inesperado')
    expect(result.current.repos.map((r) => r.id)).toEqual([1, 3])
  })

  it('expõe o erro quando a API falha', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 403 }))

    const { result } = renderHook(() => useGitHubRepos('user'))

    await waitFor(() => expect(result.current.status).toBe('error'))
    if (result.current.status !== 'error') throw new Error('estado inesperado')
    expect(result.current.message).toContain('403')
  })
})
