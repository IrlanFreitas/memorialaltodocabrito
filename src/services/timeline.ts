import { wpFetch, wpFetchWithFallback, isWpConfigured, WP_LIST_PARAMS } from './wordpress'
import type { WPTimeline } from '../types/cms'
import { timelineMock, timelineDestaqueMock } from '../data/mocks/timeline'

const BASE = '/wp-json/wp/v2/timeline'

/** Lista completa ordenada cronologicamente (campo `ordem` = ano numérico) */
export async function fetchTimeline(): Promise<WPTimeline[]> {
  return wpFetchWithFallback<WPTimeline[]>(
    `${BASE}?${WP_LIST_PARAMS}&meta_key=ordem&order=asc`,
    timelineMock,
  )
}

/** Apenas os marcos marcados como destaque (para a seção História da home) */
export async function fetchTimelineDestaque(): Promise<WPTimeline[]> {
  return wpFetchWithFallback<WPTimeline[]>(
    '/wp-json/memorial/v1/timeline?destaque=true',
    timelineDestaqueMock,
  )
}

export async function fetchTimelineBySlug(slug: string): Promise<WPTimeline | null> {
  if (!isWpConfigured()) return timelineMock.find((item) => item.slug === slug) ?? null
  try {
    const results = await wpFetch<WPTimeline[]>(`${BASE}?slug=${slug}&_embed`)
    return results[0] ?? null
  } catch (err) {
    console.warn(`[WP] Falha ao buscar timeline slug=${slug}, usando mock:`, err)
    return timelineMock.find((item) => item.slug === slug) ?? null
  }
}
