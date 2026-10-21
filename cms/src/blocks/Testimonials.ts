import type { Block } from 'payload'

export const Testimonials: Block = {
  slug: 'testimonials',
  labels: { singular: 'Відгуки', plural: 'Відгуки' },
  fields: [
    { name: 'anchor', type: 'text', label: 'ID секції' },
    { name: 'title', type: 'text', label: 'Заголовок секції', required: true },
    {
      name: 'items',
      type: 'array',
      label: 'Відгуки',
      fields: [
        { name: 'name', type: 'text', label: 'Імʼя', required: true },
        { name: 'text', type: 'textarea', label: 'Текст', required: true },
        {
          name: 'rating',
          type: 'number',
          label: 'Оцінка',
          min: 1,
          max: 5,
          defaultValue: 5,
        },
      ],
    },
  ],
}
