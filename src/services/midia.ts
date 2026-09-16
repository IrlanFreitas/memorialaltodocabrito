// CPT: midia — Fototeca, Videoteca, Audioteca
// WP Tags: midia-fototeca | midia-videoteca | midia-audioteca
import { wpFetch, wpFetchWithFallback, isWpConfigured, WP_LIST_PARAMS } from './wordpress'
import type { WPMidia } from '../types/cms'
import { midiaMock } from '../data/mocks/midia'

const BASE = '/wp-json/wp/v2/midia'

export async function fetchMidia(): Promise<WPMidia[]> {
  return wpFetchWithFallback<WPMidia[]>(`${BASE}?${WP_LIST_PARAMS}`, midiaMock)
}

// Filtros por subcategoria — client-side sobre o fetch completo
export async function fetchMidiaFototeca(): Promise<WPMidia[]> {
  const all = await fetchMidia()
  return all.filter((item) => item.acf.subcategoria === 'fototeca')
}

export async function fetchMidiaVideoteca(): Promise<WPMidia[]> {
  const all = await fetchMidia()
  return all.filter((item) => item.acf.subcategoria === 'videoteca')
}

export async function fetchMidiaAudioteca(): Promise<WPMidia[]> {
  const all = await fetchMidia()
  return all.filter((item) => item.acf.subcategoria === 'audioteca')
}

export async function fetchMidiaById(id: number): Promise<WPMidia> {
  if (!isWpConfigured()) {
    const found = midiaMock.find((item) => item.id === id)
    if (!found) throw new Error(`Mídia item ${id} não encontrado no mock`)
    return found
  }
  try {
    return await wpFetch<WPMidia>(`${BASE}/${id}?_embed`)
  } catch (err) {
    console.warn(`[WP] Falha ao buscar mídia id=${id}, usando mock:`, err)
    const found = midiaMock.find((item) => item.id === id)
    if (!found) throw err
    return found
  }
}

export async function fetchMidiaBySlug(slug: string): Promise<WPMidia | null> {
  if (!isWpConfigured()) return midiaMock.find((item) => item.slug === slug) ?? null
  try {
    const results = await wpFetch<WPMidia[]>(`${BASE}?slug=${slug}&_embed`)
    return results[0] ?? null
  } catch (err) {
    console.warn(`[WP] Falha ao buscar mídia slug=${slug}, usando mock:`, err)
    return midiaMock.find((item) => item.slug === slug) ?? null
  }
}
