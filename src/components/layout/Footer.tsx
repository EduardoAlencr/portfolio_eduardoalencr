import { navLinks } from '../../data/navigation'
import { profile, socialLinks } from '../../data/profile'
import { socialIcons } from '../ui/socialIcons'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-ink px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold">{profile.name}</p>
            <p className="mt-1 text-gray-400">{profile.role}</p>
          </div>
          <ul className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-gray-300 transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            © {currentYear} {profile.name}. Feito com React, TypeScript e Tailwind CSS.
          </p>
          <ul className="flex gap-4">
            {socialLinks.map(({ label, url }) => {
              const Icon = socialIcons[label as keyof typeof socialIcons]
              return (
                <li key={label}>
                  <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-gray-400 transition hover:text-white">
                    <Icon />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}
