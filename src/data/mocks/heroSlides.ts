// Mock para hero_slides — substitua quando WP estiver configurado
import type { HeroSlide } from '../../types/cms'

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=1200&h=675&auto=format&fit=crop&q=80`

export const heroSlidesMock: HeroSlide[] = [
  {
    imagem: {
      ID: 1,
      url: img('1477959858617-67f85cf4f1df'),
      alt: 'Paisagem urbana — skyline da cidade ao amanhecer',
      width: 1200,
      height: 675,
    },
    titulo: 'Memorial online do Alto do Cabrito',
    subtitulo: 'Um espaço para preservar e celebrar a história da nossa comunidade',
    cta_texto: 'Explore o acervo',
    cta_url: '/acervo',
  },
  {
    imagem: {
      ID: 2,
      url: img('1519501025264-65ba15a82390'),
      alt: 'Centro urbano iluminado à noite',
      width: 1200,
      height: 675,
    },
    titulo: 'Preservando memórias, construindo identidade',
    subtitulo: 'Décadas de história, resistência e cultura periférica de Salvador',
    cta_texto: 'Conheça a história',
    cta_url: '/historia',
  },
  {
    imagem: {
      ID: 3,
      url: img('1444723121867-7a241cacace9'),
      alt: 'Rua urbana com casas coloridas e movimento',
      width: 1200,
      height: 675,
    },
    titulo: 'A nossa história é de todos nós',
    subtitulo: 'Acervo digital, figuras notáveis, hemeroteca e muito mais',
    cta_texto: 'Figuras notáveis',
    cta_url: '/figuras-notaveis',
  },
  {
    imagem: {
      ID: 4,
      url: img('1480442227898-cf5f4a7a23c3'),
      alt: 'Bairro periférico visto do alto — casas e ruas',
      width: 1200,
      height: 675,
    },
    titulo: 'Cultura, memória e pertencimento',
    subtitulo: 'Conheça os marcos históricos e as conquistas da nossa comunidade',
    cta_texto: 'Ver projetos',
    cta_url: '/projetos',
  },
  {
    imagem: {
      ID: 5,
      url: img('1449824913935-59a10b8d2000'),
      alt: 'Pôr do sol sobre a cidade — horizonte urbano',
      width: 1200,
      height: 675,
    },
    titulo: 'Raízes que sustentam o futuro',
    subtitulo: 'Participe da preservação da memória do Alto do Cabrito',
    cta_texto: 'Sobre o memorial',
    cta_url: '/sobre',
  },
]
