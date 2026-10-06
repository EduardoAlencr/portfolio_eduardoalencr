import { render, screen } from '@testing-library/react'
import { projects } from '../../data/projects'
import { Projects } from '../sections/Projects'

describe('Projects', () => {
  it('renderiza um card para cada projeto', () => {
    render(<Projects projects={projects} />)

    expect(screen.getAllByRole('article')).toHaveLength(projects.length)
    for (const project of projects) {
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument()
    }
  })

  it('não tem links vazios', () => {
    render(<Projects projects={projects} />)

    for (const link of screen.getAllByRole('link')) {
      expect(link.getAttribute('href')).toMatch(/^https:\/\//)
    }
  })
})
