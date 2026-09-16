import { wpFetch, wpFetchWithFallback, isWpConfigured, WP_LIST_PARAMS } from './wordpress'
import type { WPNoticia } from '../types/cms'
import { noticiasMock } from '../data/mocks/noticias'

const BASE = '/wp-json/wp/v2/noticia'

export async function fetchNoticias(): Promise<WPNoticia[]> {
  return wpFetchWithFallback<WPNoticia[]>(`${BASE}?${WP_LIST_PARAMS}&order=desc`, noticiasMock)
}

export async function fetchNoticiaById(id: number): Promise<WPNoticia> {
  if (!isWpConfigured()) {
    const found = noticiasMock.find((item) => item.id === id)
    if (!found) throw new Error(`Notícia ${id} não encontrada no mock`)
    return found
  }
  try {
    return await wpFetch<WPNoticia>(`${BASE}/${id}?_embed`)
  } catch (err) {
    console.warn(`[WP] Falha ao buscar notícia id=${id}, usando mock:`, err)
    const found = noticiasMock.find((item) => item.id === id)
    if (!found) throw err
    return found
  }
}

export async function fetchNoticiaBySlug(slug: string): Promise<WPNoticia | null> {
  if (!isWpConfigured()) return noticiasMock.find((item) => item.slug === slug) ?? null
  try {
    const results = await wpFetch<WPNoticia[]>(`${BASE}?slug=${slug}&_embed`)
    return results[0] ?? null
  } catch (err) {
    console.warn(`[WP] Falha ao buscar notícia slug=${slug}, usando mock:`, err)
    return noticiasMock.find((item) => item.slug === slug) ?? null
  }
}
