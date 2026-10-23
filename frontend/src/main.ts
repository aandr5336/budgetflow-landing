import './styles/base.css'
import { getPage, getPageFallback, getSettings, getSettingsFallback } from './api'
import { header } from './layout/header'
import { footer } from './layout/footer'
import { renderBlocks } from './renderBlocks'
import type { PageData, SiteSettings, UiState } from './types'

const app = document.querySelector('#app')

function paint(state: UiState, html?: string): void {
  if (!app) return
  if (state === 'loading') {
    app.innerHTML = `<p class="ui-status">Завантаження…</p>`
    return
  }
  if (state === 'error') {
    app.innerHTML = `<p class="ui-status ui-status--error">${html ?? 'Помилка'}</p>`
    return
  }
  app.innerHTML = html ?? ''
}

async function loadData(): Promise<{ settings: SiteSettings; page: PageData }> {
  try {
    const [settings, page] = await Promise.all([
      getSettings(),
      getPage(location.pathname),
    ])
    return { settings, page }
  } catch {
    const [settings, page] = await Promise.all([
      getSettingsFallback(),
      getPageFallback(location.pathname),
    ])
    return { settings, page }
  }
}

async function start(): Promise<void> {
  paint('loading')
  try {
    const { settings, page } = await loadData()
    document.title = `${page.title} — ${settings.siteName}`
    paint(
      'ready',
      `
      ${header(settings)}
      <main>${renderBlocks(page.blocks)}</main>
      ${footer(settings)}
    `,
    )
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Невідома помилка'
    paint('error', `Не вдалося завантажити сторінку: ${message}`)
  }
}

void start()
