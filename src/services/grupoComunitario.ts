import { wpFetch } from './wordpress'
import type { WPGrupoComunitario } from '../types/cms'
import { grupoComunitarioMock } from '../data/mocks/grupoComunitario'

export async function fetchGrupoComunitario(): Promise<WPGrupoComunitario> {
  if (!import.meta.env.VITE_WP_API_URL) return grupoComunitarioMock

  const results = await wpFetch<WPGrupoComunitario[]>(
    `/wp-json/wp/v2/grupo_comunitario?_embed&status=publish&per_page=1`,
  )
  if (!results[0]) throw new Error('Nenhum post grupo_comunitario encontrado')
  return results[0]
}
