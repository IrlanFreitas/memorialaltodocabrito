import { wpFetch, wpFetchWithFallback, isWpConfigured, WP_LIST_PARAMS } from './wordpress'
import type { WPFiguraNotavel } from '../types/cms'
import { figurasMock } from '../data/mocks/figuras'

const BASE = '/wp-json/wp/v2/figura-notavel'

export async function fetchFiguras(): Promise<WPFiguraNotavel[]> {
  return wpFetchWithFallback<WPFiguraNotavel[]>(`${BASE}?${WP_LIST_PARAMS}`, figurasMock)
}

export async function fetchFiguraById(id: number): Promise<WPFiguraNotavel> {
  if (!isWpConfigured()) {
    const found = figurasMock.find((item) => item.id === id)
    if (!found) throw new Error(`Figura notável ${id} não encontrada no mock`)
    return found
  }
  try {
    return await wpFetch<WPFiguraNotavel>(`${BASE}/${id}?_embed`)
  } catch (err) {
    console.warn(`[WP] Falha ao buscar figura notável id=${id}, usando mock:`, err)
    const found = figurasMock.find((item) => item.id === id)
    if (!found) throw err
    return found
  }
}

export async function fetchFiguraBySlug(slug: string): Promise<WPFiguraNotavel | null> {
  if (!isWpConfigured()) return figurasMock.find((item) => item.slug === slug) ?? null
  try {
    const results = await wpFetch<WPFiguraNotavel[]>(`${BASE}?slug=${slug}&_embed`)
    return results[0] ?? null
  } catch (err) {
    console.warn(`[WP] Falha ao buscar figura notável slug=${slug}, usando mock:`, err)
    return figurasMock.find((item) => item.slug === slug) ?? null
  }
}
