interface TagProps {
  label: string
}

export function Tag({ label }: TagProps) {
  return (
    <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-600">
      {label}
    </span>
  )
}
