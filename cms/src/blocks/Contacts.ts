import type { Block } from 'payload'

export const Contacts: Block = {
  slug: 'contacts',
  labels: { singular: 'Контакти / CTA', plural: 'Контакти / CTA' },
  fields: [
    { name: 'anchor', type: 'text', label: 'ID секції' },
    { name: 'title', type: 'text', label: 'Заголовок', required: true },
    { name: 'phone', type: 'text', label: 'Телефон' },
    { name: 'email', type: 'text', label: 'Email' },
    { name: 'address', type: 'textarea', label: 'Адреса / підказка' },
    {
      name: 'image',
      type: 'group',
      label: 'Зображення',
      fields: [
        { name: 'src', type: 'text', label: 'URL' },
        { name: 'alt', type: 'text', label: 'Alt' },
      ],
    },
  ],
}
