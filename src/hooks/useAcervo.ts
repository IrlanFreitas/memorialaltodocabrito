import { useQuery } from '@tanstack/react-query'
import {
  fetchAcervo,
  fetchAcervoHemeroteca,
  fetchAcervoBiblioteca,
  fetchAcervoBySlug,
} from '../services/acervo'

export function useAcervo() {
  return useQuery({
    queryKey: ['acervo'],
    queryFn: fetchAcervo,
    staleTime: 10 * 60 * 1000,
    retry: 1,
  })
}

export function useAcervoHemeroteca() {
  return useQuery({
    queryKey: ['acervo', 'hemeroteca'],
    queryFn: fetchAcervoHemeroteca,
    staleTime: 10 * 60 * 1000,
    retry: 1,
  })
}

export function useAcervoBiblioteca() {
  return useQuery({
    queryKey: ['acervo', 'biblioteca'],
    queryFn: fetchAcervoBiblioteca,
    staleTime: 10 * 60 * 1000,
    retry: 1,
  })
}

export function useAcervoDetalhe(slug: string) {
  return useQuery({
    queryKey: ['acervo', slug],
    queryFn: () => fetchAcervoBySlug(slug),
    staleTime: 10 * 60 * 1000,
    retry: 1,
    enabled: !!slug,
  })
}
