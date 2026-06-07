import { useQuery } from '@tanstack/react-query'
import { fetchOpcoes } from '../services/opcoes'

/** Configurações globais do memorial (hero, parceiros, contato, timeline…) */
export function useOpcoes() {
  return useQuery({
    queryKey: ['opcoes'],
    queryFn: fetchOpcoes,
    staleTime: 30 * 60 * 1000,  // Options page raramente muda — 30 min
    retry: 1,
  })
}
