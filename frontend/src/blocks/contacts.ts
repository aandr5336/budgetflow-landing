import type { ContactsBlock } from '../types'
import './contacts.css'

export function contacts(block: ContactsBlock): string {
  const { anchor, title, phone, email, address } = block
  const appUrl = (import.meta.env.VITE_APP_URL as string | undefined) || 'http://127.0.0.1:8000/'
  return `
    <section class="contacts" id="${anchor ?? 'cta'}">
      <h2 class="section-title">${title}</h2>
      <div class="contacts__card">
        ${phone ? `<p><strong>Тел.:</strong> ${phone}</p>` : ''}
        ${email ? `<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>` : ''}
        ${address ? `<p>${address}</p>` : ''}
        <a class="btn btn--primary" href="${appUrl}">Перейти до вебзастосунку</a>
      </div>
    </section>
  `
}
