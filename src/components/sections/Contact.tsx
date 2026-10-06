import { useState, type FormEvent } from 'react'
import { profile, socialLinks } from '../../data/profile'
import { MailIcon, PhoneIcon, PinIcon } from '../ui/Icons'
import { socialIcons } from '../ui/socialIcons'
import { Section } from '../ui/Section'

const inputClass =
  'w-full rounded-lg border border-mist bg-cream px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-400'

export function Contact() {
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const subject = String(data.get('subject') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (!name || !subject || !message) {
      setError('Preencha todos os campos.')
      return
    }

    setError('')
    const body = `${message}\n\n${name}`
    // Abre o cliente de e-mail do visitante com a mensagem preenchida
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const contacts = [
    { icon: MailIcon, label: 'E-mail', value: profile.email, href: `mailto:${profile.email}` },
    { icon: PhoneIcon, label: 'WhatsApp', value: profile.phone, href: profile.whatsappUrl },
    { icon: PinIcon, label: 'Localização', value: `${profile.location} · disponível para trabalho remoto` },
  ]

  return (
    <Section id="contato" title="Contato" subtitle="Tem uma vaga ou projeto em mente? Fale comigo.">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-xl bg-white p-8 shadow-md">
          <div>
            <label htmlFor="name" className="mb-2 block font-medium">
              Nome
            </label>
            <input id="name" name="name" type="text" autoComplete="name" required className={inputClass} placeholder="Seu nome" />
          </div>
          <div>
            <label htmlFor="subject" className="mb-2 block font-medium">
              Assunto
            </label>
            <input id="subject" name="subject" type="text" required className={inputClass} placeholder="Assunto" />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block font-medium">
              Mensagem
            </label>
            <textarea id="message" name="message" rows={5} required className={inputClass} placeholder="Sua mensagem" />
          </div>
          {error && (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full rounded-lg bg-brand-600 py-3 font-medium text-white transition hover:bg-brand-700"
          >
            Enviar pelo e-mail
          </button>
        </form>

        <div className="rounded-xl bg-white p-8 shadow-md">
          <h3 className="mb-6 text-xl font-semibold">Informações de contato</h3>
          <ul className="mb-8 space-y-6">
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <Icon />
                </span>
                <span className="min-w-0">
                  <span className="block font-medium">{label}</span>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="break-words text-gray-600 hover:text-brand-600">
                      {value}
                    </a>
                  ) : (
                    <span className="text-gray-600">{value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="mb-4 text-xl font-semibold">Redes</h3>
          <ul className="flex gap-4">
            {socialLinks.map(({ label, url }) => {
              const Icon = socialIcons[label as keyof typeof socialIcons]
              return (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-600 transition hover:bg-brand-600 hover:text-white"
                  >
                    <Icon />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Section>
  )
}
