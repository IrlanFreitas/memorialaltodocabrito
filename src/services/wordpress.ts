// ─────────────────────────────────────────────────────────────────────────────
// Memorial Alto do Cabrito — Cliente WordPress REST API
// ─────────────────────────────────────────────────────────────────────────────

const BASE_URL = import.meta.env.VITE_WP_API_URL as string | undefined

/** Retorna a URL base do WordPress (sem barra final) */
export function wpBaseUrl(): string {
  if (!BASE_URL) {
    throw new Error(
      'VITE_WP_API_URL não configurado.\n' +
      'Crie o arquivo .env.local na raiz do projeto com:\n' +
      'VITE_WP_API_URL=http://memorialaltodocabrito.local',
    )
  }
  return BASE_URL
}

/** Fetch genérico com tratamento de erros */
export async function wpFetch<T>(path: string): Promise<T> {
  const url = `${wpBaseUrl()}${path}`

  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
  })

  if (!res.ok) {
    throw new Error(
      `WordPress API error ${res.status} em ${path}\n` +
      `URL: ${url}`,
    )
  }

  return res.json() as Promise<T>
}

/**
 * Parâmetros comuns para listagens de CPTs.
 * Inclui embed para featured media e ordena por menu_order (campo "ordem" ACF).
 */
export const WP_LIST_PARAMS = '_embed&status=publish&per_page=100'
