import { wpFetch } from './wordpress'
import type { WPOpcoes, WPHomeData } from '../types/cms'
import { heroSlidesMock } from '../data/mocks/heroSlides'

/**
 * Campos da Options Page (Configurações Globais do Memorial).
 * Endpoint customizado — não requer autenticação.
 */
export async function fetchOpcoes(): Promise<WPOpcoes> {
  if (!import.meta.env.VITE_WP_API_URL) {
    return { hero_slides: heroSlidesMock } as unknown as WPOpcoes
  }
  return wpFetch<WPOpcoes>('/wp-json/memorial/v1/opcoes')
}

/**
 * Endpoint agregado: retorna todas as seções da home num único request.
 * Ideal para o carregamento inicial — evita múltiplos fetches paralelos.
 */
export async function fetchHomeData(): Promise<WPHomeData> {
  return wpFetch<WPHomeData>('/wp-json/memorial/v1/home')
}
