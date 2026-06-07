import { useQuery } from '@tanstack/react-query'
import { fetchTimeline, fetchTimelineDestaque, fetchTimelineBySlug } from '../services/timeline'

/**
 * Lista completa da timeline, ordenada cronologicamente.
 * Usar na página /historia ou equivalente.
 */
export function useTimeline() {
  return useQuery({
    queryKey: ['timeline'],
    queryFn: fetchTimeline,
    staleTime: 10 * 60 * 1000,
    retry: 1,
  })
}

/**
 * Apenas os marcos marcados como destaque.
 * Usar na seção História da home — evita carregar a timeline completa.
 */
export function useTimelineDestaque() {
  return useQuery({
    queryKey: ['timeline', 'destaque'],
    queryFn: fetchTimelineDestaque,
    staleTime: 10 * 60 * 1000,
    retry: 1,
  })
}

/** Detalhe de um marco histórico pelo slug */
export function useTimelineDetalhe(slug: string) {
  return useQuery({
    queryKey: ['timeline', slug],
    queryFn: () => fetchTimelineBySlug(slug),
    staleTime: 10 * 60 * 1000,
    retry: 1,
    enabled: !!slug,
  })
}
