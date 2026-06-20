import { wpFetch, WP_LIST_PARAMS } from './wordpress'
import type { WPCampanha } from '../types/cms'
import { campanhasMock } from '../data/mocks/campanhas'

export async function fetchCampanhas(): Promise<WPCampanha[]> {
  if (!import.meta.env.VITE_WP_API_URL) return campanhasMock

  const all = await wpFetch<WPCampanha[]>(
    `/wp-json/wp/v2/campanha?${WP_LIST_PARAMS}&meta_key=ordem`,
  )
  return all.filter((c) => c.acf.ativo)
}
