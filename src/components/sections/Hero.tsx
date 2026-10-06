import { profile } from '../../data/profile'
import { assetUrl } from '../../utils/assetUrl'
import { ButtonLink } from '../ui/Button'

export function Hero() {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-br from-brand-600 to-[#232323] px-4 pb-20 pt-32 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 md:flex-row">
        <div className="md:w-3/5">
          <p className="mb-3 font-medium text-brand-400">Olá, eu sou</p>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">{profile.name}</h1>
          <p className="mb-6 text-xl text-brand-100 md:text-2xl">
            {profile.role} <span className="text-brand-400">|</span> {profile.stack.join(' · ')}
          </p>
          <p className="mb-8 max-w-xl text-lg text-brand-100">{profile.summary}</p>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="#projetos" variant="light">
              Ver projetos
            </ButtonLink>
            <ButtonLink href="#contato" variant="outline">
              Entrar em contato
            </ButtonLink>
          </div>
        </div>
        <div className="flex justify-center md:w-2/5">
          <img
            src={assetUrl(profile.photo)}
            alt={`Foto de ${profile.name}`}
            width={320}
            height={320}
            className="h-56 w-56 rounded-full border-4 border-white/20 object-cover shadow-xl md:h-80 md:w-80"
          />
        </div>
      </div>
    </section>
  )
}
