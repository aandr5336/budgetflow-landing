import type { SiteSettings } from '../types'

export function footer(settings: SiteSettings): string {
  const year = new Date().getFullYear()
  return `
    <footer class="footer">© ${year} ${settings.siteName}. ${settings.footer.text}</footer>
  `
}
