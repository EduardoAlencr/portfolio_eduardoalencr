import { education, experiences } from '../../data/experience'
import { Section } from '../ui/Section'

export function About() {
  return (
    <Section id="sobre" title="Sobre mim">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="space-y-4 text-gray-600">
          <p>
            Sou estudante de Engenharia da Computação na UNIVASF e atuo com desenvolvimento web e mobile. Gosto de
            pegar um layout, quebrar em componentes reutilizáveis e entregar uma interface que funcione bem em
            qualquer tela.
          </p>
          <p>
            No front-end, trabalho com React, TypeScript e Tailwind CSS, consumindo APIs REST e organizando o código
            para que seja fácil de manter. Minha experiência com Flutter e UI/UX me ajuda a pensar na experiência do
            usuário desde o protótipo no Figma até a entrega.
          </p>
          <p>
            Sou curioso, gosto de pesquisar quando não sei algo e de aprender com o time. Quero crescer junto com uma
            equipe, participando de projetos reais. Fora do código, gosto de explorar novas tecnologias, jogar com os
            amigos e conhecer lugares novos.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-lg">
          <h3 className="mb-6 text-xl font-semibold">Experiência</h3>
          <ol className="space-y-6">
            {experiences.map((item) => (
              <li key={`${item.company}-${item.period}`} className="border-l-2 border-brand-100 pl-4">
                <p className="font-semibold">{item.role}</p>
                <p className="text-sm text-brand-600">{item.company}</p>
                <p className="mb-2 text-sm text-gray-500">{item.period}</p>
                <p className="text-gray-600">{item.description}</p>
              </li>
            ))}
          </ol>

          <h3 className="mb-3 mt-8 text-xl font-semibold">Formação</h3>
          <p className="font-medium">{education.course}</p>
          <p className="text-gray-600">{education.institution}</p>
          <p className="text-sm text-gray-500">{education.detail}</p>
        </div>
      </div>
    </Section>
  )
}
