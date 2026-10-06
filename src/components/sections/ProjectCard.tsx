import type { Project } from '../../types'
import { assetUrl } from '../../utils/assetUrl'
import { ExternalIcon, GitHubIcon } from '../ui/Icons'
import { Tag } from '../ui/Tag'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tags, image, repoUrl, liveUrl } = project

  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-48 items-center justify-center bg-gradient-to-br from-brand-600 to-brand-400">
        {image ? (
          <img src={assetUrl(image)} alt={`Tela do projeto ${title}`} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <span aria-hidden className="px-6 text-center font-mono text-lg font-semibold text-white/90">
            {'</'} {tags.slice(0, 2).join(' + ')} {'>'}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="mb-4 flex-1 text-gray-600">{description}</p>
        <ul className="mb-5 flex flex-wrap gap-2" aria-label="Tecnologias">
          {tags.map((tag) => (
            <li key={tag}>
              <Tag label={tag} />
            </li>
          ))}
        </ul>
        {(repoUrl || liveUrl) && (
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand-600 hover:underline">
                <GitHubIcon width={16} height={16} /> Código
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand-600 hover:underline">
                <ExternalIcon /> Ver online
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
