import { useEffect, useState } from 'react'
import { fetchRepos } from '../services/github'
import type { GitHubRepo } from '../types'

type State =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; repos: GitHubRepo[] }

export function useGitHubRepos(user: string, limit = 6): State {
  const [state, setState] = useState<State>({ status: 'loading' })

  useEffect(() => {
    const controller = new AbortController()

    fetchRepos(user, controller.signal)
      .then((repos) => setState({ status: 'success', repos: repos.slice(0, limit) }))
      .catch((error: unknown) => {
        if (controller.signal.aborted) return
        const message = error instanceof Error ? error.message : 'Erro inesperado'
        setState({ status: 'error', message })
      })

    return () => controller.abort()
  }, [user, limit])

  return state
}
