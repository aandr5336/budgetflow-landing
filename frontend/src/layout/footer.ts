import type { SiteSettings } from '../types'

const APP_URL = (import.meta.env.VITE_APP_URL as string | undefined) || 'http://127.0.0.1:8000/'

function joinApp(path: string): string {
  const base = APP_URL.replace(/\/?$/, '/')
  return `${base}${path.replace(/^\//, '')}`
}

export function footer(settings: SiteSettings): string {
  const year = new Date().getFullYear()
  const tagline =
    settings.footer?.text?.trim() ||
    'Простий спосіб тримати гроші під контролем.'

  return `
    <footer class="footer">
      <div class="footer__grid">
        <div class="footer__brand">
          <a class="footer__logo" href="/">
            <span class="footer__logo-icon" aria-hidden="true">↗</span>
            ${settings.siteName}
          </a>
          <p class="footer__tagline">${tagline}</p>
        </div>

        <div class="footer__col">
          <div class="footer__heading">Продукт</div>
          <ul class="footer__links">
            <li><a href="#features">Можливості</a></li>
            <li><a href="#testimonials">Відгуки</a></li>
            <li><a href="${APP_URL}">Відкрити Finance Helper</a></li>
          </ul>
        </div>

        <div class="footer__col">
          <div class="footer__heading">Акаунт</div>
          <ul class="footer__links">
            <li><a href="${joinApp('accounts/login/')}">Увійти</a></li>
            <li><a href="${joinApp('accounts/register/')}">Реєстрація</a></li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">© ${year} ${settings.siteName}</div>
    </footer>
  `
}
