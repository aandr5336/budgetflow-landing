import type { ContactsBlock } from '../types'
import { appPreview } from './app-preview'
import './contacts.css'

export function contacts(block: ContactsBlock): string {
  const { anchor, title, address, preview = 'transactions' } = block
  const appUrl = (import.meta.env.VITE_APP_URL as string | undefined) || 'http://127.0.0.1:8000/'
  return `
    <section class="contacts" id="${anchor ?? 'cta'}">
      <div class="contacts__panel">
        <div class="contacts__media">
          ${appPreview(preview)}
        </div>
        <div class="contacts__body">
          <div class="contacts__copy">
            <h2 class="contacts__title">${title}</h2>
            ${address ? `<p class="contacts__note">${address}</p>` : ''}
          </div>
          <a class="btn btn--primary contacts__btn" href="${appUrl}">Відкрити Finance Helper</a>
        </div>
      </div>
    </section>
  `
}
