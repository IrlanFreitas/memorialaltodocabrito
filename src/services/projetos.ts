import { wpFetch, WP_LIST_PARAMS } from './wordpress'
import type { WPProjeto } from '../types/cms'

export async function fetchProjetos(): Promise<WPProjeto[]> {
  return wpFetch<WPProjeto[]>(
    `/wp-json/wp/v2/projeto?${WP_LIST_PARAMS}`,
  )
}

export async function fetchProjetoById(id: number): Promise<WPProjeto> {
  return wpFetch<WPProjeto>(`/wp-json/wp/v2/projeto/${id}?_embed`)
}

export async function fetchProjetoBySlug(slug: string): Promise<WPProjeto | null> {
  const results = await wpFetch<WPProjeto[]>(
    `/wp-json/wp/v2/projeto?slug=${slug}&_embed`,
  )
  return results[0] ?? null
}
