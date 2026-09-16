import { wpFetch, isWpConfigured } from './wordpress'
import type { WPOpcoes, WPHomeData } from '../types/cms'
import { heroSlidesMock } from '../data/mocks/heroSlides'

const opcoesMock = { hero_slides: heroSlidesMock } as unknown as WPOpcoes

/**
 * Campos da Options Page (Configurações Globais do Memorial).
 * Endpoint customizado — não requer autenticação.
 */
export async function fetchOpcoes(): Promise<WPOpcoes> {
  if (!isWpConfigured()) return opcoesMock

  try {
    return await wpFetch<WPOpcoes>('/wp-json/memorial/v1/opcoes')
  } catch (err) {
    console.warn('[WP] Falha ao buscar opções, usando mock:', err)
    return opcoesMock
  }
}

/**
 * Endpoint agregado: retorna todas as seções da home num único request.
 * Ideal para o carregamento inicial — evita múltiplos fetches paralelos.
 */
export async function fetchHomeData(): Promise<WPHomeData> {
  return wpFetch<WPHomeData>('/wp-json/memorial/v1/home')
}
