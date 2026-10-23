import type { PageBlock } from './types'
import { hero } from './blocks/hero'
import { features } from './blocks/features'
import { testimonials } from './blocks/testimonials'
import { contacts } from './blocks/contacts'

type RendererMap = {
  [K in PageBlock['type']]: (block: Extract<PageBlock, { type: K }>) => string
}

const renderers: RendererMap = {
  hero,
  features,
  testimonials,
  contacts,
}

export function renderBlocks(blocks: PageBlock[]): string {
  return blocks
    .map((block) => {
      const render = renderers[block.type] as (b: PageBlock) => string
      if (!render) {
        console.warn(`Немає рендерера для блоку: ${block.type}`)
        return ''
      }
      return render(block)
    })
    .join('')
}
