import type { TestimonialsBlock } from '../types'
import './testimonials.css'

export function testimonials(block: TestimonialsBlock): string {
  const { anchor, title, items } = block
  return `
    <section class="testimonials" id="${anchor ?? 'testimonials'}">
      <h2 class="section-title">${title}</h2>
      <div class="testimonials__grid">
        ${items
          .map(
            ({ name, text, rating }) => `
          <article class="testimonial">
            <p class="testimonial__text">«${text}»</p>
            <p class="testimonial__name">${name}${rating ? ` · ${'★'.repeat(rating)}` : ''}</p>
          </article>`,
          )
          .join('')}
      </div>
    </section>
  `
}
