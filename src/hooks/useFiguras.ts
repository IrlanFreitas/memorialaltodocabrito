import { useQuery } from '@tanstack/react-query'
import { fetchFiguras, fetchFiguraBySlug } from '../services/figuras'

export function useFiguras() {
  return useQuery({
    queryKey: ['figuras'],
    queryFn: fetchFiguras,
    staleTime: 10 * 60 * 1000,
    retry: 1,
  })
}

export function useFiguraDetalhe(slug: string) {
  return useQuery({
    queryKey: ['figuras', slug],
    queryFn: () => fetchFiguraBySlug(slug),
    staleTime: 10 * 60 * 1000,
    retry: 1,
    enabled: !!slug,
  })
}
