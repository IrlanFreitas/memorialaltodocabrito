import type { WPCampanha } from '../../types/cms'

const wpImg = (filename: string) =>
  `http://memorialaltodocabrito.local/wp-content/uploads/2026/06/${filename}`

const mockMedia = (filename: string) => ({
  source_url: wpImg(filename),
  alt_text: 'Fotografia do Alto do Cabrito',
  media_details: { width: 0, height: 0 },
})

const mockImagem = (filename: string, alt: string) => ({
  ID: 0,
  url: wpImg(filename),
  alt,
  width: 0,
  height: 0,
})

export const campanhasMock: WPCampanha[] = [
  {
    id: 1,
    slug: 'memorial-online',
    title: { rendered: 'Memorial online do Alto do Cabrito' },
    acf: {
      imagem: mockImagem('MEM_AC_Foto-75-scaled.jpg', 'Fotografia do Alto do Cabrito'),
      subtitulo: 'Um espaço para preservar e celebrar a história da nossa comunidade',
      cta_texto: 'Explore o acervo',
      cta_url: '/acervo',
      ordem: 1,
      ativo: true,
    },
    _embedded: { 'wp:featuredmedia': [mockMedia('MEM_AC_Foto-75-scaled.jpg')] },
  },
  {
    id: 2,
    slug: 'preservando-memorias',
    title: { rendered: 'Preservando memórias, construindo identidade' },
    acf: {
      imagem: mockImagem('MEM_AC_Foto-75-scaled.jpg', 'Comunidade do Alto do Cabrito'),
      subtitulo: 'Décadas de história, resistência e cultura periférica de Salvador',
      cta_texto: 'Conheça a história',
      cta_url: '/historia',
      ordem: 2,
      ativo: true,
    },
    _embedded: { 'wp:featuredmedia': [mockMedia('MEM_AC_Foto-75-scaled.jpg')] },
  },
  {
    id: 3,
    slug: 'nossa-historia',
    title: { rendered: 'A nossa história é de todos nós' },
    acf: {
      imagem: mockImagem('MEM_AC_Foto-75-scaled.jpg', 'Alto do Cabrito — Salvador, Bahia'),
      subtitulo: 'Acervo digital, figuras notáveis, hemeroteca e muito mais',
      cta_texto: 'Figuras notáveis',
      cta_url: '/figuras-notaveis',
      ordem: 3,
      ativo: true,
    },
    _embedded: { 'wp:featuredmedia': [mockMedia('MEM_AC_Foto-75-scaled.jpg')] },
  },
  {
    id: 4,
    slug: 'cultura-pertencimento',
    title: { rendered: 'Cultura, memória e pertencimento' },
    acf: {
      imagem: mockImagem('MEM_AC_Foto-75-scaled.jpg', 'Memória e cultura do bairro'),
      subtitulo: 'Conheça os marcos históricos e as conquistas da nossa comunidade',
      cta_texto: 'Ver projetos',
      cta_url: '/projetos',
      ordem: 4,
      ativo: true,
    },
    _embedded: { 'wp:featuredmedia': [mockMedia('MEM_AC_Foto-75-scaled.jpg')] },
  },
  {
    id: 5,
    slug: 'raizes-futuro',
    title: { rendered: 'Raízes que sustentam o futuro' },
    acf: {
      imagem: mockImagem('MEM_AC_Foto-75-scaled.jpg', 'Raízes históricas do Alto do Cabrito'),
      subtitulo: 'Participe da preservação da memória do Alto do Cabrito',
      cta_texto: 'Sobre o memorial',
      cta_url: '/sobre',
      ordem: 5,
      ativo: true,
    },
    _embedded: { 'wp:featuredmedia': [mockMedia('MEM_AC_Foto-75-scaled.jpg')] },
  },
]
