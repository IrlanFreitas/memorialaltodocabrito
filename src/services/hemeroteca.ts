import { wpFetch, WP_LIST_PARAMS } from './wordpress'
import type { WPHemeroteca } from '../types/cms'

export async function fetchHemeroteca(): Promise<WPHemeroteca[]> {
  return wpFetch<WPHemeroteca[]>(
    `/wp-json/wp/v2/hemeroteca?${WP_LIST_PARAMS}`,
  )
}

export async function fetchHemerotecaById(id: number): Promise<WPHemeroteca> {
  return wpFetch<WPHemeroteca>(`/wp-json/wp/v2/hemeroteca/${id}?_embed`)
}

export async function fetchHemerotecaBySlug(slug: string): Promise<WPHemeroteca | null> {
  const results = await wpFetch<WPHemeroteca[]>(
    `/wp-json/wp/v2/hemeroteca?slug=${slug}&_embed`,
  )
  return results[0] ?? null
}
