import { wpFetch, WP_LIST_PARAMS } from './wordpress'
import type { WPTimeline } from '../types/cms'

/** Lista completa ordenada cronologicamente (campo `ordem` = ano numérico) */
export async function fetchTimeline(): Promise<WPTimeline[]> {
  return wpFetch<WPTimeline[]>(
    `/wp-json/wp/v2/timeline?${WP_LIST_PARAMS}&orderby=meta_value_num&meta_key=ordem&order=asc`,
  )
}

/** Apenas os marcos marcados como destaque (para a seção História da home) */
export async function fetchTimelineDestaque(): Promise<WPTimeline[]> {
  return wpFetch<WPTimeline[]>(
    '/wp-json/memorial/v1/timeline?destaque=true',
  )
}

export async function fetchTimelineBySlug(slug: string): Promise<WPTimeline | null> {
  const results = await wpFetch<WPTimeline[]>(
    `/wp-json/wp/v2/timeline?slug=${slug}&_embed`,
  )
  return results[0] ?? null
}
