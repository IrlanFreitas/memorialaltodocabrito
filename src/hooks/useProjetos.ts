import { useQuery } from '@tanstack/react-query'
import { fetchProjetos, fetchProjetoBySlug } from '../services/projetos'

export function useProjetos() {
  return useQuery({
    queryKey: ['projetos'],
    queryFn: fetchProjetos,
    staleTime: 10 * 60 * 1000,
    retry: 1,
  })
}

export function useProjetoDetalhe(slug: string) {
  return useQuery({
    queryKey: ['projetos', slug],
    queryFn: () => fetchProjetoBySlug(slug),
    staleTime: 10 * 60 * 1000,
    retry: 1,
    enabled: !!slug,
  })
}
