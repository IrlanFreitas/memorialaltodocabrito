import { wpFetch, wpFetchWithFallback, isWpConfigured, WP_LIST_PARAMS } from './wordpress'
import type { WPProjeto } from '../types/cms'
import { projetosMock } from '../data/mocks/projetos'

const BASE = '/wp-json/wp/v2/projeto'

export async function fetchProjetos(): Promise<WPProjeto[]> {
  return wpFetchWithFallback<WPProjeto[]>(`${BASE}?${WP_LIST_PARAMS}`, projetosMock)
}

export async function fetchProjetoById(id: number): Promise<WPProjeto> {
  if (!isWpConfigured()) {
    const found = projetosMock.find((item) => item.id === id)
    if (!found) throw new Error(`Projeto ${id} não encontrado no mock`)
    return found
  }
  try {
    return await wpFetch<WPProjeto>(`${BASE}/${id}?_embed`)
  } catch (err) {
    console.warn(`[WP] Falha ao buscar projeto id=${id}, usando mock:`, err)
    const found = projetosMock.find((item) => item.id === id)
    if (!found) throw err
    return found
  }
}

export async function fetchProjetoBySlug(slug: string): Promise<WPProjeto | null> {
  if (!isWpConfigured()) return projetosMock.find((item) => item.slug === slug) ?? null
  try {
    const results = await wpFetch<WPProjeto[]>(`${BASE}?slug=${slug}&_embed`)
    return results[0] ?? null
  } catch (err) {
    console.warn(`[WP] Falha ao buscar projeto slug=${slug}, usando mock:`, err)
    return projetosMock.find((item) => item.slug === slug) ?? null
  }
}
