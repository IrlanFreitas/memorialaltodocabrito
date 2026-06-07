import { wpFetch, WP_LIST_PARAMS } from './wordpress'
import type { WPAcervo } from '../types/cms'
import { acervoMock } from '../data/mocks/acervo'

const BASE = '/wp-json/wp/v2/acervo'

function useMock(): boolean {
  return !import.meta.env.VITE_WP_API_URL
}

export async function fetchAcervo(): Promise<WPAcervo[]> {
  if (useMock()) return acervoMock
  return wpFetch<WPAcervo[]>(`${BASE}?${WP_LIST_PARAMS}`)
}

// Filtros por categoria — client-side sobre o fetch completo
// WP Tags de referência: acervo-hemeroteca | acervo-biblioteca
export async function fetchAcervoHemeroteca(): Promise<WPAcervo[]> {
  const all = await fetchAcervo()
  return all.filter((item) => item.acf.categoria === 'hemeroteca')
}

export async function fetchAcervoBiblioteca(): Promise<WPAcervo[]> {
  const all = await fetchAcervo()
  return all.filter((item) => item.acf.categoria === 'biblioteca')
}

export async function fetchAcervoById(id: number): Promise<WPAcervo> {
  if (useMock()) {
    const found = acervoMock.find((item) => item.id === id)
    if (!found) throw new Error(`Acervo item ${id} não encontrado no mock`)
    return found
  }
  return wpFetch<WPAcervo>(`${BASE}/${id}?_embed`)
}

export async function fetchAcervoBySlug(slug: string): Promise<WPAcervo | null> {
  if (useMock()) return acervoMock.find((item) => item.slug === slug) ?? null
  const results = await wpFetch<WPAcervo[]>(`${BASE}?slug=${slug}&_embed`)
  return results[0] ?? null
}
