/** Спільні типи сторінки та блоків (розділ 2.3 звіту). */

export type ButtonVariant = 'primary' | 'secondary'

export type CtaButton = {
  text: string
  link: string
  variant: ButtonVariant
}

export type MediaImage = {
  src: string
  alt: string
}

export type AppPreviewVariant = 'dashboard' | 'transactions'

export type HeroBlock = {
  type: 'hero'
  anchor?: string
  badge?: string
  title: string
  subtitle: string
  /** @deprecated UI mock replaces static images */
  image?: MediaImage
  preview?: AppPreviewVariant
  buttons: CtaButton[]
}

export type FeatureItem = {
  icon: string
  title: string
  text?: string
}

export type FeaturesBlock = {
  type: 'features'
  anchor?: string
  title: string
  items: FeatureItem[]
}

export type TestimonialItem = {
  name: string
  text: string
  rating?: number
}

export type TestimonialsBlock = {
  type: 'testimonials'
  anchor?: string
  title: string
  items: TestimonialItem[]
}

export type ContactsBlock = {
  type: 'contacts'
  anchor?: string
  title: string
  phone?: string
  email?: string
  address?: string
  /** @deprecated UI mock replaces static images */
  image?: MediaImage
  preview?: AppPreviewVariant
}

/** Union усіх блоків лендінгу */
export type PageBlock =
  | HeroBlock
  | FeaturesBlock
  | TestimonialsBlock
  | ContactsBlock

export type PageData = {
  path: string
  title: string
  blocks: PageBlock[]
}

export type MenuItem = {
  label: string
  link: string
}

export type FooterData = {
  text: string
}

/** Intersection: налаштування сайту = імʼя + меню + футер */
export type SiteSettings = {
  siteName: string
} & {
  menu: MenuItem[]
  footer: FooterData
}

export type UiState = 'loading' | 'error' | 'ready'
