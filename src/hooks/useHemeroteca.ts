import { useQuery } from '@tanstack/react-query'
import { fetchHemeroteca, fetchHemerotecaBySlug } from '../services/hemeroteca'

export function useHemeroteca() {
  return useQuery({
    queryKey: ['hemeroteca'],
    queryFn: fetchHemeroteca,
    staleTime: 10 * 60 * 1000,
    retry: 1,
  })
}

export function useHemerotecaDetalhe(slug: string) {
  return useQuery({
    queryKey: ['hemeroteca', slug],
    queryFn: () => fetchHemerotecaBySlug(slug),
    staleTime: 10 * 60 * 1000,
    retry: 1,
    enabled: !!slug,
  })
}
