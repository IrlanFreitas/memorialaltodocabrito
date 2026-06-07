import { wpFetch, WP_LIST_PARAMS } from './wordpress'
import type { WPFiguraNotavel } from '../types/cms'

export async function fetchFiguras(): Promise<WPFiguraNotavel[]> {
  return wpFetch<WPFiguraNotavel[]>(
    `/wp-json/wp/v2/figura-notavel?${WP_LIST_PARAMS}`,
  )
}

export async function fetchFiguraById(id: number): Promise<WPFiguraNotavel> {
  return wpFetch<WPFiguraNotavel>(`/wp-json/wp/v2/figura-notavel/${id}?_embed`)
}

export async function fetchFiguraBySlug(slug: string): Promise<WPFiguraNotavel | null> {
  const results = await wpFetch<WPFiguraNotavel[]>(
    `/wp-json/wp/v2/figura-notavel?slug=${slug}&_embed`,
  )
  return results[0] ?? null
}
