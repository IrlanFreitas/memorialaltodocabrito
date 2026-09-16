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

/** true quando VITE_WP_API_URL está configurado */
export function isWpConfigured(): boolean {
  return Boolean(BASE_URL)
}

/**
 * Busca na API do WordPress usando o mock como fallback.
 * - Se a API não estiver configurada, retorna o mock direto (sem tentar a rede).
 * - Se a API estiver configurada mas a requisição falhar, cai no mock e avisa no console.
 */
export async function wpFetchWithFallback<T>(path: string, mock: T): Promise<T> {
  if (!isWpConfigured()) return mock

  try {
    return await wpFetch<T>(path)
  } catch (err) {
    console.warn(`[WP] Falha ao buscar ${path}, usando dados de mock:`, err)
    return mock
  }
}
