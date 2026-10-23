import type { PageData, SiteSettings } from './types'

const API_URL = (import.meta.env.VITE_API_URL as string | undefined) || ''

async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`)
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`)
  }
  return res.json() as Promise<T>
}

export function getSettings(): Promise<SiteSettings> {
  return getJson<SiteSettings>('/api/common')
}

export function getPage(path: string): Promise<PageData> {
  return getJson<PageData>(`/api/page?path=${encodeURIComponent(path)}`)
}

/** Локальний fallback зі seed JSON, якщо CMS недоступна */
export async function getSettingsFallback(): Promise<SiteSettings> {
  const res = await fetch('/seed/common.json')
  if (!res.ok) throw new Error('Немає локального common.json')
  return res.json() as Promise<SiteSettings>
}

export async function getPageFallback(path: string): Promise<PageData> {
  const res = await fetch('/seed/pages.json')
  if (!res.ok) throw new Error('Немає локального pages.json')
  const pages = (await res.json()) as PageData[]
  const page = pages.find((p) => p.path === path) ?? pages[0]
  if (!page) throw new Error('Сторінку не знайдено')
  return page
}
