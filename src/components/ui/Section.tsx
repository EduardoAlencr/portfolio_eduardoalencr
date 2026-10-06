import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  subtitle?: string
  className?: string
  children: ReactNode
}

export function Section({ id, title, subtitle, className = '', children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`px-4 py-20 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center">
          <h2 id={`${id}-title`} className="mb-4 text-3xl font-bold md:text-4xl">
            {title}
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 rounded bg-brand-600" />
          {subtitle && <p className="mx-auto max-w-2xl text-lg text-gray-600">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
