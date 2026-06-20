// ─────────────────────────────────────────────────────────────────────────────
// Memorial Alto do Cabrito — Tipos do CMS (WordPress REST API + ACF)
// ─────────────────────────────────────────────────────────────────────────────

/** Estrutura de imagem retornada pelo ACF (return_format: 'array') */
export interface ACFImage {
  ID: number
  url: string
  alt: string
  width: number
  height: number
  sizes?: Record<string, string>
}

/** Wrapper padrão do WordPress para texto renderizado */
export interface WPRendered {
  rendered: string
}

/** Mídia em destaque embutida (_embed) */
export interface WPFeaturedMedia {
  source_url: string
  alt_text: string
  media_details?: {
    width: number
    height: number
    sizes?: {
      medium?: { source_url: string }
      large?: { source_url: string }
      full?: { source_url: string }
    }
  }
}

// ─── CPT: Acervo ─────────────────────────────────────────────────────────────
// Duas subcategorias: hemeroteca e biblioteca
// WP Tags de referência: acervo-hemeroteca | acervo-biblioteca

export interface ACFAcervo {
  categoria: 'hemeroteca' | 'biblioteca'

  // Tipo específico dentro da categoria:
  // hemeroteca → jornal | revista | recorte | boletim
  // biblioteca  → livro | tese | livreto | ebook | documento-textual
  tipo: string

  descricao: string
  imagem_principal: ACFImage | null
  galeria: ACFImage[]

  // Campos Hemeroteca
  veiculo: string          // nome do jornal/revista/veículo
  data_publicacao: string  // Y-m-d
  transcricao: string      // texto do recorte digitalizado

  // Campos Biblioteca
  autor: string
  ano_publicacao: string
  editora: string
  arquivo_pdf_url: string

  // Campos comuns
  data_aproximada: string
  data_exata: string       // Y-m-d
  local: string
  doador: string
  palavras_chave: string
  ordem: number
  destaque: boolean
  ativo: boolean
}

export interface WPAcervo {
  id: number
  slug: string
  date: string
  title: WPRendered
  content: WPRendered
  acf: ACFAcervo
  _embedded?: {
    'wp:featuredmedia'?: WPFeaturedMedia[]
  }
}

// ─── CPT: Figura Notável ──────────────────────────────────────────────────────

export interface ACFFiguraNotavel {
  apelido: string
  foto: ACFImage | null
  periodo: string
  area_atuacao: 'cultura' | 'educacao' | 'politica' | 'religiao' | 'esporte' | 'comercio' | 'saude' | 'historia' | 'outro'
  bio: string
  resumo: string
  destaques: Array<{ texto: string }>
  galeria: ACFImage[]
  ordem: number
  destaque_home: boolean
  ativo: boolean
}

export interface WPFiguraNotavel {
  id: number
  slug: string
  date: string
  title: WPRendered
  content: WPRendered
  acf: ACFFiguraNotavel
  _embedded?: {
    'wp:featuredmedia'?: WPFeaturedMedia[]
  }
}

// ─── CPT: Mídia ───────────────────────────────────────────────────────────────
// Três subcategorias: fototeca, videoteca, audioteca
// WP Tags de referência: midia-fototeca | midia-videoteca | midia-audioteca

export interface ACFMidia {
  subcategoria: 'fototeca' | 'videoteca' | 'audioteca'

  // Tipo específico dentro da subcategoria:
  // fototeca  → foto-historica | registro-evento | imagem-comunidade
  // videoteca → documentario | entrevista | espetaculo | reportagem
  // audioteca → podcast | depoimento-audio | historia-oral | trilha-sonora
  tipo: string

  descricao: string
  imagem_principal: ACFImage | null
  galeria: ACFImage[]

  // Fototeca
  creditos_foto: string
  local: string
  pessoas: string

  // Videoteca / Audioteca
  url_media: string        // URL do YouTube, Vimeo, ou arquivo de áudio
  duracao: string          // ex: "12:34"
  diretor_credito: string  // diretor (vídeo) ou locutora/apresentador (áudio)

  // Comuns
  data_registro: string    // Y-m-d
  data_aproximada: string
  palavras_chave: string
  creditos: string
  destaque: boolean
  ativo: boolean
}

export interface WPMidia {
  id: number
  slug: string
  date: string
  title: WPRendered
  content: WPRendered
  acf: ACFMidia
  _embedded?: {
    'wp:featuredmedia'?: WPFeaturedMedia[]
  }
}

// ─── CPT: Hemeroteca (LEGADO — migrado para Acervo/categoria:hemeroteca) ──────

export interface ACFHemeroteca {
  tipo: 'jornal' | 'revista' | 'tv' | 'radio' | 'online' | 'outro'
  veiculo: string
  data_publicacao: string   // Y-m-d
  data_aproximada: string
  imagem_recorte: ACFImage | null
  resumo: string
  transcricao: string
  link_original: string
  palavras_chave: string
  destaque: boolean
  ativo: boolean
}

export interface WPHemeroteca {
  id: number
  slug: string
  date: string
  title: WPRendered
  content: WPRendered
  acf: ACFHemeroteca
  _embedded?: {
    'wp:featuredmedia'?: WPFeaturedMedia[]
  }
}

// ─── CPT: Projeto ─────────────────────────────────────────────────────────────

export interface ACFProjeto {
  resumo: string
  descricao_completa: string
  imagem_capa: ACFImage | null
  galeria: ACFImage[]
  ano_inicio: number
  ano_fim: number | null
  status: 'ativo' | 'concluido' | 'pausado'
  parceiros: Array<{
    nome: string
    logo: ACFImage | null
    url: string
  }>
  numeros_impacto: Array<{
    valor: string
    label: string
  }>
  ordem: number
  destaque: boolean
  ativo: boolean
}

export interface WPProjeto {
  id: number
  slug: string
  date: string
  title: WPRendered
  content: WPRendered
  acf: ACFProjeto
  _embedded?: {
    'wp:featuredmedia'?: WPFeaturedMedia[]
  }
}

// ─── CPT: Notícia / Evento ────────────────────────────────────────────────────

export interface ACFNoticia {
  tipo: 'passado' | 'futuro' | 'noticia'
  data_evento: string    // Y-m-d H:i:s
  local_evento: string
  imagem_capa: ACFImage | null
  categoria: 'memoria' | 'evento' | 'projeto' | 'educacao' | 'saude' | 'esporte' | 'arte' | 'outro'
  resumo_passado: string
  ativo: boolean
}

export interface WPNoticia {
  id: number
  slug: string
  date: string
  title: WPRendered
  excerpt: WPRendered
  content: WPRendered
  acf: ACFNoticia
  _embedded?: {
    'wp:featuredmedia'?: WPFeaturedMedia[]
  }
}

// ─── CPT: Timeline ───────────────────────────────────────────────────────────

export interface ACFTimeline {
  ano: string                  // e.g. "1960s", "1980"
  descricao: string            // resumo curto para a listagem
  conteudo_completo: string    // rich text para a página de detalhe
  imagem: ACFImage | null
  galeria: ACFImage[]
  tags: string                 // palavras-chave separadas por vírgula
  ordem: number
  destaque: boolean
  ativo: boolean
}

export interface WPTimeline {
  id: number
  slug: string
  date: string
  title: WPRendered
  content: WPRendered
  acf: ACFTimeline
  _embedded?: {
    'wp:featuredmedia'?: WPFeaturedMedia[]
  }
}

export type WPTimelineFormatado = WPPostFormatado & { acf: ACFTimeline }

// ─── CPT: Campanha (Hero Carousel) ───────────────────────────────────────────

export interface ACFCampanha {
  imagem: ACFImage | null
  subtitulo: string
  cta_texto: string
  cta_url: string
  ordem: number
  ativo: boolean
}

export interface WPCampanha {
  id: number
  slug: string
  title: WPRendered
  acf: ACFCampanha
  _embedded?: {
    'wp:featuredmedia'?: WPFeaturedMedia[]
  }
}

// ─── CPT: Grupo Comunitário ───────────────────────────────────────────────────

export interface ACFGrupoComunitario {
  descricao: string
  missao: string
  visao: string
  valores: Array<{ texto: string }>
  membros: Array<{ nome: string; papel: string; foto: ACFImage | null }>
}

export interface WPGrupoComunitario {
  id: number
  slug: string
  title: WPRendered
  acf: ACFGrupoComunitario
  _embedded?: {
    'wp:featuredmedia'?: WPFeaturedMedia[]
  }
}

// ─── Options Page: Configurações Globais ──────────────────────────────────────

export interface HeroSlide {
  imagem: ACFImage | null
  titulo: string
  subtitulo: string
  cta_texto: string
  cta_url: string
}

export interface TimelineItem {
  ano: number
  titulo: string
  descricao: string
  imagem: ACFImage | null
}

export interface MembroGrupo {
  nome: string
  papel: string
  foto: ACFImage | null
}

export interface Parceiro {
  nome: string
  logo: ACFImage | null
  url: string
}

export interface WPOpcoes {
  // Hero
  hero_slides: HeroSlide[]
  // História
  historia_titulo: string
  historia_intro: string
  historia_imagem: ACFImage | null
  timeline: TimelineItem[]
  // Grupo Comunitário
  grupo_texto: string
  grupo_missao: string
  grupo_membros: MembroGrupo[]
  // Parceiros
  parceiros: Parceiro[]
  // Contato
  endereco: string
  email: string
  telefone: string
  instagram_url: string
  facebook_url: string
  youtube_url: string
  texto_footer: string
}

// ─── Endpoint agregado /memorial/v1/home ──────────────────────────────────────

export interface WPHomeData {
  opcoes: WPOpcoes
  acervo: WPAcervoFormatado[]
  figuras: WPFiguraFormatada[]
  midia: WPMidiaFormatada[]
  projetos: WPProjetoFormatado[]
  noticias: WPNoticiaFormatada[]
  timeline: WPTimelineFormatado[]
}

/** Formato retornado pelo endpoint /memorial/v1/home (memorial_format_post) */
export interface WPPostFormatado {
  id: number
  slug: string
  titulo: string
  conteudo: string
  excerpt: string
  data: string
  thumbnail: string | null
  type: string
  acf: Record<string, unknown>
}

export type WPAcervoFormatado     = WPPostFormatado & { acf: ACFAcervo }
export type WPFiguraFormatada     = WPPostFormatado & { acf: ACFFiguraNotavel }
export type WPMidiaFormatada      = WPPostFormatado & { acf: ACFMidia }
export type WPHemerotecaFormatada = WPPostFormatado & { acf: ACFHemeroteca }
export type WPProjetoFormatado    = WPPostFormatado & { acf: ACFProjeto }
export type WPNoticiaFormatada    = WPPostFormatado & { acf: ACFNoticia }
