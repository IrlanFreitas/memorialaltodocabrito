import { wpFetch, WP_LIST_PARAMS } from './wordpress'
import type { WPNoticia } from '../types/cms'

export async function fetchNoticias(): Promise<WPNoticia[]> {
  return wpFetch<WPNoticia[]>(
    `/wp-json/wp/v2/noticia?${WP_LIST_PARAMS}&orderby=date&order=desc`,
  )
}

export async function fetchNoticiaById(id: number): Promise<WPNoticia> {
  return wpFetch<WPNoticia>(`/wp-json/wp/v2/noticia/${id}?_embed`)
}

export async function fetchNoticiaBySlug(slug: string): Promise<WPNoticia | null> {
  const results = await wpFetch<WPNoticia[]>(
    `/wp-json/wp/v2/noticia?slug=${slug}&_embed`,
  )
  return results[0] ?? null
}
