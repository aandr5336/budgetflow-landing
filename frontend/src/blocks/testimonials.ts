import type { TestimonialsBlock } from '../types'
import './testimonials.css'

export function testimonials(block: TestimonialsBlock): string {
  const { anchor, title, items } = block
  const [first, ...rest] = items
  return `
    <section class="testimonials" id="${anchor ?? 'testimonials'}">
      <div class="testimonials__head">
        <h2 class="section-title">${title}</h2>
      </div>
      <div class="testimonials__layout">
        ${
          first
            ? `<blockquote class="testimonial testimonial--lead">
                <p class="testimonial__text">«${first.text}»</p>
                <footer class="testimonial__name">${first.name}${first.rating ? ` · ${'★'.repeat(first.rating)}` : ''}</footer>
              </blockquote>`
            : ''
        }
        <div class="testimonials__stack">
          ${rest
            .map(
              ({ name, text, rating }) => `
            <blockquote class="testimonial">
              <p class="testimonial__text">«${text}»</p>
              <footer class="testimonial__name">${name}${rating ? ` · ${'★'.repeat(rating)}` : ''}</footer>
            </blockquote>`,
            )
            .join('')}
        </div>
      </div>
    </section>
  `
}
