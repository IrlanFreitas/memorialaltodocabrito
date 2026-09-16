import { wpFetch, isWpConfigured, WP_LIST_PARAMS } from './wordpress'
import type { WPCampanha } from '../types/cms'
import { campanhasMock } from '../data/mocks/campanhas'

export async function fetchCampanhas(): Promise<WPCampanha[]> {
  if (!isWpConfigured()) return campanhasMock

  try {
    const all = await wpFetch<WPCampanha[]>(
      `/wp-json/wp/v2/campanha?${WP_LIST_PARAMS}&meta_key=ordem`,
    )
    return all.filter((c) => c.acf.ativo)
  } catch (err) {
    console.warn('[WP] Falha ao buscar campanhas, usando mock:', err)
    return campanhasMock
  }
}
