import { wpFetch, wpFetchWithFallback, isWpConfigured, WP_LIST_PARAMS } from './wordpress'
import type { WPHemeroteca } from '../types/cms'
import { hemerotecaMock } from '../data/mocks/hemeroteca'

const BASE = '/wp-json/wp/v2/hemeroteca'

export async function fetchHemeroteca(): Promise<WPHemeroteca[]> {
  return wpFetchWithFallback<WPHemeroteca[]>(`${BASE}?${WP_LIST_PARAMS}`, hemerotecaMock)
}

export async function fetchHemerotecaById(id: number): Promise<WPHemeroteca> {
  if (!isWpConfigured()) {
    const found = hemerotecaMock.find((item) => item.id === id)
    if (!found) throw new Error(`Hemeroteca item ${id} não encontrado no mock`)
    return found
  }
  try {
    return await wpFetch<WPHemeroteca>(`${BASE}/${id}?_embed`)
  } catch (err) {
    console.warn(`[WP] Falha ao buscar hemeroteca id=${id}, usando mock:`, err)
    const found = hemerotecaMock.find((item) => item.id === id)
    if (!found) throw err
    return found
  }
}

export async function fetchHemerotecaBySlug(slug: string): Promise<WPHemeroteca | null> {
  if (!isWpConfigured()) return hemerotecaMock.find((item) => item.slug === slug) ?? null
  try {
    const results = await wpFetch<WPHemeroteca[]>(`${BASE}?slug=${slug}&_embed`)
    return results[0] ?? null
  } catch (err) {
    console.warn(`[WP] Falha ao buscar hemeroteca slug=${slug}, usando mock:`, err)
    return hemerotecaMock.find((item) => item.slug === slug) ?? null
  }
}
