import type { Project } from '../../types'
import { Section } from '../ui/Section'
import { ProjectCard } from './ProjectCard'

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  const web = projects.filter((project) => project.category === 'web')
  const mobile = projects.filter((project) => project.category === 'mobile')

  return (
    <Section id="projetos" title="Projetos" subtitle="Projetos pessoais, acadêmicos e de estágio, do layout à integração com APIs.">
      <h3 className="mb-6 text-2xl font-semibold text-brand-600">Web</h3>
      <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {web.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <h3 className="mb-6 text-2xl font-semibold text-brand-600">Mobile</h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {mobile.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}
