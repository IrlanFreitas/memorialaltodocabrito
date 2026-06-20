// Mock para hero_slides — imagens do WP local enquanto API não estiver configurada
import type { HeroSlide } from '../../types/cms'

const wpImg = (filename: string) =>
  `http://memorialaltodocabrito.local/wp-content/uploads/2026/06/${filename}`

export const heroSlidesMock: HeroSlide[] = [
  {
    imagem: {
      ID: 1,
      url: wpImg('MEM_AC_Foto-75-scaled.jpg'),
      alt: 'Fotografia do Alto do Cabrito',
      width: 0,
      height: 0,
    },
    titulo: 'Memorial online do Alto do Cabrito',
    subtitulo: 'Um espaço para preservar e celebrar a história da nossa comunidade',
    cta_texto: 'Explore o acervo',
    cta_url: '/acervo',
  },
  {
    imagem: {
      ID: 2,
      url: wpImg('MEM_AC_Foto-75-scaled.jpg'),
      alt: 'Comunidade do Alto do Cabrito',
      width: 0,
      height: 0,
    },
    titulo: 'Preservando memórias, construindo identidade',
    subtitulo: 'Décadas de história, resistência e cultura periférica de Salvador',
    cta_texto: 'Conheça a história',
    cta_url: '/historia',
  },
  {
    imagem: {
      ID: 3,
      url: wpImg('MEM_AC_Foto-75-scaled.jpg'),
      alt: 'Alto do Cabrito — Salvador, Bahia',
      width: 0,
      height: 0,
    },
    titulo: 'A nossa história é de todos nós',
    subtitulo: 'Acervo digital, figuras notáveis, hemeroteca e muito mais',
    cta_texto: 'Figuras notáveis',
    cta_url: '/figuras-notaveis',
  },
  {
    imagem: {
      ID: 4,
      url: wpImg('MEM_AC_Foto-75-scaled.jpg'),
      alt: 'Memória e cultura do bairro',
      width: 0,
      height: 0,
    },
    titulo: 'Cultura, memória e pertencimento',
    subtitulo: 'Conheça os marcos históricos e as conquistas da nossa comunidade',
    cta_texto: 'Ver projetos',
    cta_url: '/projetos',
  },
  {
    imagem: {
      ID: 5,
      url: wpImg('MEM_AC_Foto-75-scaled.jpg'),
      alt: 'Raízes históricas do Alto do Cabrito',
      width: 0,
      height: 0,
    },
    titulo: 'Raízes que sustentam o futuro',
    subtitulo: 'Participe da preservação da memória do Alto do Cabrito',
    cta_texto: 'Sobre o memorial',
    cta_url: '/sobre',
  },
]
