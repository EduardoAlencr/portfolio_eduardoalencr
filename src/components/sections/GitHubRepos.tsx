import { profile } from '../../data/profile'
import { useGitHubRepos } from '../../hooks/useGitHubRepos'
import { ButtonLink } from '../ui/Button'
import { Section } from '../ui/Section'

const dateFormatter = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })

export function GitHubRepos() {
  const state = useGitHubRepos(profile.githubUser)

  return (
    <Section
      id="github"
      title="No GitHub"
      subtitle="Repositórios carregados em tempo real pela API pública do GitHub."
      className="bg-mist"
    >
      {state.status === 'loading' && (
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3" aria-busy="true" aria-label="Carregando repositórios">
          {Array.from({ length: 6 }, (_, index) => (
            <li key={index} className="h-32 animate-pulse rounded-xl bg-white/70" />
          ))}
        </ul>
      )}

      {state.status === 'error' && (
        <p role="alert" className="text-center text-gray-600">
          Não foi possível carregar os repositórios agora.{' '}
          <a href={`https://github.com/${profile.githubUser}`} className="font-medium text-brand-600 underline">
            Ver direto no GitHub
          </a>
        </p>
      )}

      {state.status === 'success' && (
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {state.repos.map((repo) => (
            <li key={repo.id}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col rounded-xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="mb-1 break-words font-semibold text-brand-600">{repo.name}</span>
                <span className="mb-4 flex-1 text-sm text-gray-600">{repo.description ?? 'Sem descrição'}</span>
                <span className="flex items-center justify-between text-xs text-gray-500">
                  <span>{repo.language ?? '—'}</span>
                  <span>Atualizado em {dateFormatter.format(new Date(repo.updated_at))}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-10 text-center">
        <ButtonLink href={`https://github.com/${profile.githubUser}`} target="_blank" rel="noopener noreferrer">
          Ver perfil completo
        </ButtonLink>
      </div>
    </Section>
  )
}
