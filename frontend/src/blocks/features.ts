import type { FeaturesBlock } from '../types'
import './features.css'

export function features(block: FeaturesBlock): string {
  const { anchor, title, items } = block
  return `
    <section class="features" id="${anchor ?? 'features'}">
      <h2 class="section-title">${title}</h2>
      <div class="features__grid">
        ${items
          .map(
            ({ icon, title: itemTitle, text }) => `
          <article class="feature">
            <span class="feature__icon">${icon}</span>
            <h3 class="feature__title">${itemTitle}</h3>
            <p class="feature__text">${text ?? ''}</p>
          </article>`,
          )
          .join('')}
      </div>
    </section>
  `
}
