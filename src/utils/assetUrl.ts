/** Resolve arquivos de /public respeitando o `base` do Vite (GitHub Pages). */
export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
