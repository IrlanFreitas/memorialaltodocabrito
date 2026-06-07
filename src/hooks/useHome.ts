import { useQuery } from '@tanstack/react-query'
import { fetchHomeData } from '../services/opcoes'

/**
 * Carrega todos os dados da home num único request REST.
 * Endpoint: /wp-json/memorial/v1/home
 *
 * Uso recomendado para a Home.tsx — evita múltiplos fetches.
 * As seções internas ainda podem usar os hooks individuais para
 * páginas de listagem (useAcervo, useFiguras etc.).
 */
export function useHome() {
  return useQuery({
    queryKey: ['home'],
    queryFn: fetchHomeData,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  })
}
