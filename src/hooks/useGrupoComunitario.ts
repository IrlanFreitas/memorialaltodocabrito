import { useQuery } from '@tanstack/react-query'
import { fetchGrupoComunitario } from '../services/grupoComunitario'

export function useGrupoComunitario() {
  return useQuery({
    queryKey: ['grupo_comunitario'],
    queryFn: fetchGrupoComunitario,
    staleTime: 30 * 60 * 1000,
    retry: 1,
  })
}
