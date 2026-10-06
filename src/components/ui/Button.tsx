import type { AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'outline' | 'light'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
}

const variants: Record<Variant, string> = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700',
  light: 'bg-white text-brand-600 shadow-lg hover:bg-brand-50',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-brand-600',
}

export function ButtonLink({ variant = 'primary', className = '', ...props }: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 ${variants[variant]} ${className}`}
      {...props}
    />
  )
}
