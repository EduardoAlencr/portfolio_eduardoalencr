import { skillGroups } from '../../data/skills'
import { Section } from '../ui/Section'
import { Tag } from '../ui/Tag'

export function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Tecnologias e práticas que uso no dia a dia." className="bg-mist">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <Tag label={skill} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
