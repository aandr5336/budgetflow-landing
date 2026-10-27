import type { FeaturesBlock } from '../types'
import './features.css'

export function features(block: FeaturesBlock): string {
  const { anchor, title, items } = block
  const [main, ...rest] = items
  const side = rest.slice(0, 3)

  return `
    <section class="features" id="${anchor ?? 'features'}">
      <h2 class="section-title">${title}</h2>
      <div class="features__layout">
        ${
          main
            ? `<article class="feature feature--main">
                <span class="feature__eyebrow">Основа</span>
                <span class="feature__icon">${main.icon}</span>
                <h3 class="feature__title">${main.title}</h3>
                <p class="feature__text">${main.text ?? ''}</p>
              </article>`
            : ''
        }
        <div class="features__side">
          ${side
            .map(
              ({ icon, title: itemTitle, text }) => `
            <article class="feature feature--side">
              <span class="feature__icon">${icon}</span>
              <div class="feature__body">
                <h3 class="feature__title">${itemTitle}</h3>
                <p class="feature__text">${text ?? ''}</p>
              </div>
            </article>`,
            )
            .join('')}
        </div>
      </div>
    </section>
  `
}
