import type { SiteSettings } from '../types'

export function header(settings: SiteSettings): string {
  const { siteName, menu } = settings
  return `
    <header class="header">
      <a class="header__logo" href="/">${siteName}</a>
      <nav class="header__nav">
        ${menu
          .map(
            ({ label, link }) =>
              `<a class="header__link" href="${link}">${label}</a>`,
          )
          .join('')}
      </nav>
    </header>
  `
}
