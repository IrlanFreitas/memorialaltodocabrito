import { useQuery } from '@tanstack/react-query'
import { fetchNoticias, fetchNoticiaBySlug } from '../services/noticias'

export function useNoticias() {
  return useQuery({
    queryKey: ['noticias'],
    queryFn: fetchNoticias,
    staleTime: 5 * 60 * 1000,  // Notícias ficam stale mais rápido (5 min)
    retry: 1,
  })
}

export function useNoticiaDetalhe(slug: string) {
  return useQuery({
    queryKey: ['noticias', slug],
    queryFn: () => fetchNoticiaBySlug(slug),
    staleTime: 5 * 60 * 1000,
    retry: 1,
    enabled: !!slug,
  })
}
