// CPT: midia — Fototeca, Videoteca, Audioteca
// WP Tags: midia-fototeca | midia-videoteca | midia-audioteca
import { wpFetch, WP_LIST_PARAMS } from './wordpress'
import type { WPMidia } from '../types/cms'
import { midiaMock } from '../data/mocks/midia'

const BASE = '/wp-json/wp/v2/midia'

function useMock(): boolean {
  return !import.meta.env.VITE_WP_API_URL
}

export async function fetchMidia(): Promise<WPMidia[]> {
  if (useMock()) return midiaMock
  return wpFetch<WPMidia[]>(`${BASE}?${WP_LIST_PARAMS}`)
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
  if (useMock()) {
    const found = midiaMock.find((item) => item.id === id)
    if (!found) throw new Error(`Mídia item ${id} não encontrado no mock`)
    return found
  }
  return wpFetch<WPMidia>(`${BASE}/${id}?_embed`)
}

export async function fetchMidiaBySlug(slug: string): Promise<WPMidia | null> {
  if (useMock()) return midiaMock.find((item) => item.slug === slug) ?? null
  const results = await wpFetch<WPMidia[]>(`${BASE}?slug=${slug}&_embed`)
  return results[0] ?? null
}
