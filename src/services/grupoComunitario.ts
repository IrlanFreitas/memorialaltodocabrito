import { wpFetch, isWpConfigured } from './wordpress'
import type { WPGrupoComunitario } from '../types/cms'
import { grupoComunitarioMock } from '../data/mocks/grupoComunitario'

export async function fetchGrupoComunitario(): Promise<WPGrupoComunitario> {
  if (!isWpConfigured()) return grupoComunitarioMock

  try {
    const results = await wpFetch<WPGrupoComunitario[]>(
      `/wp-json/wp/v2/grupo_comunitario?_embed&status=publish&per_page=1`,
    )
    if (!results[0]) throw new Error('Nenhum post grupo_comunitario encontrado')
    return results[0]
  } catch (err) {
    console.warn('[WP] Falha ao buscar grupo_comunitario, usando mock:', err)
    return grupoComunitarioMock
  }
}
