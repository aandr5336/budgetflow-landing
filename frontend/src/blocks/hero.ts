import type { HeroBlock } from '../types'
import { appPreview } from './app-preview'
import './hero.css'

export function hero(block: HeroBlock): string {
  const { anchor, badge, title, subtitle, buttons, preview = 'dashboard' } = block
  return `
    <section class="hero" id="${anchor ?? 'top'}">
      <div class="hero__content">
        ${badge ? `<p class="hero__brand">${badge}</p>` : ''}
        <h1 class="hero__title">${title}</h1>
        <p class="hero__subtitle">${subtitle}</p>
        <div class="hero__actions">
          ${buttons
            .map(
              ({ text, link, variant }) =>
                `<a class="btn btn--${variant}" href="${link}">${text}</a>`,
            )
            .join('')}
        </div>
      </div>
      <div class="hero__media">
        ${appPreview(preview)}
      </div>
    </section>
  `
}
