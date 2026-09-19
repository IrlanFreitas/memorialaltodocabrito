/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WP_API_URL: string
  /** "true" desabilita a splash screen inicial (útil para testes/CI). */
  readonly VITE_DISABLE_SPLASH?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
