import { useQuery } from '@tanstack/react-query'
import {
  fetchMidia,
  fetchMidiaFototeca,
  fetchMidiaVideoteca,
  fetchMidiaAudioteca,
  fetchMidiaBySlug,
} from '../services/midia'

export function useMidia() {
  return useQuery({
    queryKey: ['midia'],
    queryFn: fetchMidia,
    staleTime: 10 * 60 * 1000,
    retry: 1,
  })
}

export function useMidiaFototeca() {
  return useQuery({
    queryKey: ['midia', 'fototeca'],
    queryFn: fetchMidiaFototeca,
    staleTime: 10 * 60 * 1000,
    retry: 1,
  })
}

export function useMidiaVideoteca() {
  return useQuery({
    queryKey: ['midia', 'videoteca'],
    queryFn: fetchMidiaVideoteca,
    staleTime: 10 * 60 * 1000,
    retry: 1,
  })
}

export function useMidiaAudioteca() {
  return useQuery({
    queryKey: ['midia', 'audioteca'],
    queryFn: fetchMidiaAudioteca,
    staleTime: 10 * 60 * 1000,
    retry: 1,
  })
}

export function useMidiaDetalhe(slug: string) {
  return useQuery({
    queryKey: ['midia', slug],
    queryFn: () => fetchMidiaBySlug(slug),
    staleTime: 10 * 60 * 1000,
    retry: 1,
    enabled: !!slug,
  })
}
