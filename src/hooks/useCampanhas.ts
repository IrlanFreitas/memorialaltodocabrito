import { useQuery } from '@tanstack/react-query'
import { fetchCampanhas } from '../services/campanhas'

export function useCampanhas() {
  return useQuery({
    queryKey: ['campanhas'],
    queryFn: fetchCampanhas,
    staleTime: 15 * 60 * 1000,
    retry: 1,
  })
}
