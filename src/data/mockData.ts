// =============================================
// Mock Data — Memorial Alto do Cabrito
// Substitua com conteúdo real quando disponível
// =============================================

const img = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&auto=format&fit=crop&q=80`

// ===== Hero Carousel =====
export const heroSlides = [
  {
    id: 1,
    src: img('1590736969596-c5d6b94c6e80', 1200, 800),
    alt: 'Vista panorâmica do Alto do Cabrito, Salvador, Bahia',
    title: 'Memorial online do Alto do Cabrito',
    subtitle: 'Um espaço para preservar e celebrar a história da nossa comunidade',
  },
  {
    id: 2,
    src: img('1548192746-dd526f154ed9', 1200, 800),
    alt: 'Comunidade do Alto do Cabrito ao entardecer',
    title: 'Preservando memórias, construindo identidade',
    subtitle: 'Décadas de história, resistência e cultura periférica de Salvador',
  },
  {
    id: 3,
    src: img('1529156069898-49953e39b3ac', 1200, 800),
    alt: 'Moradores do Alto do Cabrito reunidos',
    title: 'A nossa história é de todos nós',
    subtitle: 'Acervo digital, figuras notáveis, hemeroteca e muito mais',
  },
  {
    id: 4,
    src: img('1468780645347-1e85b8c6d8aa', 1200, 800),
    alt: 'Ruas e casas do Alto do Cabrito',
    title: 'Cultura, memória e pertencimento',
    subtitle: 'Conheça os marcos históricos e as conquistas da nossa comunidade',
  },
]

// ===== Acervo =====
export interface AcervoItem {
  id: string
  titulo: string
  descricao: string
  periodo: string
  categoria: string
  imagem: string
}

export const acervoItems: AcervoItem[] = [
  {
    id: 'ac-001',
    titulo: 'Vista do Alto do Cabrito — Anos 1970',
    descricao: 'Fotografia aérea rara que registra a formação inicial do bairro, mostrando as primeiras ocupações nas encostas.',
    periodo: 'c. 1975',
    categoria: 'Fotografia',
    imagem: img('1590736969596-c5d6b94c6e80'),
  },
  {
    id: 'ac-002',
    titulo: 'Primeira Ata da Associação de Moradores',
    descricao: 'Documento histórico que marca a fundação oficial da Associação de Moradores do Alto do Cabrito em 14 de março de 1980.',
    periodo: '1980',
    categoria: 'Documento',
    imagem: img('1481277542427-9940a9d13d98'),
  },
  {
    id: 'ac-003',
    titulo: 'Primeira Turma da Escola Comunitária',
    descricao: 'Fotografia da primeira turma formada pela Escola Comunitária do Alto do Cabrito, um marco na educação do bairro.',
    periodo: '1985',
    categoria: 'Fotografia',
    imagem: img('1509909756405-be0199881695'),
  },
  {
    id: 'ac-004',
    titulo: 'Planta Original do Bairro',
    descricao: 'Planta cadastral original elaborada pela Prefeitura de Salvador, documentando o traçado das primeiras ruas do bairro.',
    periodo: '1968',
    categoria: 'Documento',
    imagem: img('1456541404-766d55f2e78e'),
  },
  {
    id: 'ac-005',
    titulo: 'Festa de São João — Alto do Cabrito',
    descricao: 'Registro da tradicional festa junina que reúne toda a comunidade há mais de 40 anos, celebrando a cultura popular baiana.',
    periodo: '1992',
    categoria: 'Fotografia',
    imagem: img('1480796927426-f609979314bd'),
  },
  {
    id: 'ac-006',
    titulo: 'Obras de Pavimentação da Rua Principal',
    descricao: 'Documentação fotográfica das obras de pavimentação conquistadas pela comunidade após anos de mobilização popular.',
    periodo: '2003',
    categoria: 'Fotografia',
    imagem: img('1529156069898-49953e39b3ac'),
  },
]

// ===== Figuras Notáveis =====
export interface FiguraNotavel {
  id: string
  nome: string
  periodo: string
  bio: string
  contribuicao: string
  foto: string
  categoria: string
}

export const figurasNotaveis: FiguraNotavel[] = [
  {
    id: 'fn-001',
    nome: 'Dona Maria de Jesus Santos',
    periodo: '1940 – 2018',
    bio: 'Líder comunitária que dedicou mais de 40 anos à organização dos moradores do Alto do Cabrito. Fundou a primeira associação de mães do bairro e batalhou incansavelmente por melhorias na saúde e educação.',
    contribuicao: 'Liderança Comunitária',
    foto: img('1494790108377-be9c29b29330', 400, 400),
    categoria: 'Liderança',
  },
  {
    id: 'fn-002',
    nome: 'Professor José Antônio Souza',
    periodo: '1951 – presente',
    bio: 'Educador que fundou e dirigiu a Escola Comunitária do Alto do Cabrito por mais de 20 anos. Formou centenas de crianças e jovens que hoje são referências na cidade.',
    contribuicao: 'Educação',
    foto: img('1507003211169-0a1dd7228f2d', 400, 400),
    categoria: 'Educação',
  },
  {
    id: 'fn-003',
    nome: 'Mestre Pedro Lima',
    periodo: '1938 – 2010',
    bio: 'Mestre de capoeira e guardião das tradições afro-baianas no bairro. Seu terreiro formou gerações de capoeiristas e manteve viva a cultura ancestral na comunidade.',
    contribuicao: 'Cultura e Arte',
    foto: img('1544531586-fde5298cdd40', 400, 400),
    categoria: 'Cultura',
  },
  {
    id: 'fn-004',
    nome: 'Lídice Castro',
    periodo: '1965 – presente',
    bio: 'Agente de saúde que por 30 anos levou atendimento médico básico a famílias do Alto do Cabrito. Pioneira na implementação de programas de saúde preventiva no bairro.',
    contribuicao: 'Saúde Comunitária',
    foto: img('1531746020-1ab1ceaf2ca6', 400, 400),
    categoria: 'Saúde',
  },
  {
    id: 'fn-005',
    nome: 'Seu Raimundo Ferreira',
    periodo: '1925 – 2005',
    bio: 'Um dos primeiros moradores documentados do Alto do Cabrito. Construiu sua casa com as próprias mãos na década de 1950 e foi testemunha viva da fundação e crescimento do bairro.',
    contribuicao: 'Memória Viva',
    foto: img('1560250097-0b93528c311a', 400, 400),
    categoria: 'Memória',
  },
  {
    id: 'fn-006',
    nome: 'Vitória das Neves',
    periodo: '1998 – presente',
    bio: 'Jovem ativista que aos 19 anos fundou o coletivo de juventude do bairro. Hoje lidera projetos de inclusão digital e tem sido voz ativa nos direitos dos jovens da periferia de Salvador.',
    contribuicao: 'Ativismo Jovem',
    foto: img('1494790108377-be9c29b29330', 400, 400),
    categoria: 'Juventude',
  },
]

// ===== Hemeroteca =====
export interface RecorteMedia {
  id: string
  titulo: string
  veiculo: string
  data: string
  descricao: string
  imagem: string
  link?: string
}

export const hemerotecaItems: RecorteMedia[] = [
  {
    id: 'hm-001',
    titulo: 'Bairro Alto do Cabrito: uma história de resistência e pertencimento',
    veiculo: 'A Tarde',
    data: '12 ago. 2019',
    descricao: 'Reportagem especial que traça a trajetória da comunidade desde suas origens até os dias atuais, destacando as conquistas coletivas.',
    imagem: img('1481277542427-9940a9d13d98'),
  },
  {
    id: 'hm-002',
    titulo: 'Comunidade do Alto do Cabrito ganha reconhecimento como patrimônio cultural',
    veiculo: 'Correio da Bahia',
    data: '5 nov. 2020',
    descricao: 'A Câmara Municipal de Salvador aprova título de patrimônio cultural imaterial para as manifestações tradicionais do bairro.',
    imagem: img('1456541404-766d55f2e78e'),
  },
  {
    id: 'hm-003',
    titulo: 'Jovens do Alto do Cabrito criam memorial online para preservar história',
    veiculo: 'Bahia Notícias',
    data: '18 mar. 2021',
    descricao: 'Grupo de jovens moradores lança projeto digital que reúne fotos, documentos e relatos sobre a história do bairro.',
    imagem: img('1543269664-56d93b1e5db5'),
  },
  {
    id: 'hm-004',
    titulo: 'Pesquisadores internacionais de Yale visitam Alto do Cabrito',
    veiculo: 'A Tarde',
    data: '7 jun. 2022',
    descricao: 'Delegação da Universidade de Yale realiza visita de campo para estudar práticas de memória comunitária em Salvador.',
    imagem: img('1509909756405-be0199881695'),
  },
  {
    id: 'hm-005',
    titulo: 'FAPESB apoia projeto de memória comunitária do Alto do Cabrito',
    veiculo: 'Correio da Bahia',
    data: '22 fev. 2023',
    descricao: 'Fundação de Pesquisa aprova financiamento para digitalização e preservação do acervo histórico da comunidade.',
    imagem: img('1586339949916-3e9457bef6d3'),
  },
  {
    id: 'hm-006',
    titulo: 'Memorial Alto do Cabrito é destaque em conferência de patrimônio digital',
    veiculo: 'Salvador Online',
    data: '3 out. 2024',
    descricao: 'Projeto baiano apresentado como case de sucesso em conferência internacional sobre memória e patrimônio digital comunitário.',
    imagem: img('1529156069898-49953e39b3ac'),
  },
]

// ===== Projetos =====
export interface Projeto {
  id: string
  titulo: string
  descricao: string
  descricaoCompleta: string
  ano: string
  status: 'concluido' | 'em_andamento' | 'planejado'
  imagem: string
  parceiros: string[]
  galeria?: string[]
}

export const projetos: Projeto[] = [
  {
    id: 'pj-001',
    titulo: 'Biblioteca Comunitária Alto do Cabrito',
    descricao: 'Criação e manutenção da primeira biblioteca comunitária do bairro, com acervo de mais de 3.000 títulos.',
    descricaoCompleta: 'A Biblioteca Comunitária Alto do Cabrito nasceu do sonho coletivo de criar um espaço de leitura e aprendizado para todas as idades. Inaugurada em 2018, a biblioteca já atendeu mais de 5.000 leitores e promove rodas de leitura, contação de histórias e oficinas literárias semanalmente. O acervo foi construído com doações da comunidade, da Universidade do Estado da Bahia e de parceiros internacionais.',
    ano: '2018',
    status: 'em_andamento',
    imagem: img('1481277542427-9940a9d13d98'),
    parceiros: ['FAPESB', 'Yale', 'LEU'],
    galeria: [
      img('1481277542427-9940a9d13d98'),
      img('1509909756405-be0199881695'),
      img('1543269664-56d93b1e5db5'),
    ],
  },
  {
    id: 'pj-002',
    titulo: 'Mural das Memórias',
    descricao: 'Projeto de arte urbana que transforma as paredes do bairro em telas de memória coletiva.',
    descricaoCompleta: 'O Mural das Memórias é um projeto de arte urbana participativo que convida artistas locais e moradores a criarem murais que contam a história do Alto do Cabrito. Cada mural representa um capítulo da história do bairro, desde suas origens até os dias atuais. O projeto já produziu 12 murais distribuídos por diferentes pontos do bairro.',
    ano: '2020',
    status: 'em_andamento',
    imagem: img('1543269664-56d93b1e5db5'),
    parceiros: ['CAZA', 'É ao Quadrado', 'Liverpool'],
    galeria: [
      img('1543269664-56d93b1e5db5'),
      img('1480796927426-f609979314bd'),
      img('1529156069898-49953e39b3ac'),
    ],
  },
  {
    id: 'pj-003',
    titulo: 'Cinema na Rua',
    descricao: 'Sessões mensais de cinema ao ar livre que celebram a cultura brasileira e o audiovisual periférico.',
    descricaoCompleta: 'O Cinema na Rua transforma as praças e ruas do Alto do Cabrito em salas de cinema a céu aberto. Com sessões mensais, o projeto exibe filmes nacionais, documentários sobre periferias brasileiras e produções realizadas pelos próprios moradores do bairro. Em parceria com o ISC e a AMACA, o projeto também oferece oficinas de produção audiovisual.',
    ano: '2021',
    status: 'em_andamento',
    imagem: img('1480796927426-f609979314bd'),
    parceiros: ['ISC', 'AMACA', 'Periferia em Todos os Cantos'],
    galeria: [
      img('1480796927426-f609979314bd'),
      img('1529156069898-49953e39b3ac'),
    ],
  },
  {
    id: 'pj-004',
    titulo: 'Mapeamento Participativo do Bairro',
    descricao: 'Pesquisa acadêmica em parceria com Yale e Liverpool para mapear a história oral e geográfica do Alto do Cabrito.',
    descricaoCompleta: 'Em parceria com pesquisadores das universidades de Yale (EUA) e Liverpool (UK), este projeto realiza o mapeamento participativo da história oral e geográfica do bairro. Utilizando ferramentas como RedCap e Mendeley para organização de dados, o projeto já coletou mais de 200 depoimentos de moradores e produziu um mapa histórico interativo do bairro.',
    ano: '2022',
    status: 'em_andamento',
    imagem: img('1509909756405-be0199881695'),
    parceiros: ['Yale', 'Liverpool', 'FAPESB', 'ISC', 'RedCap', 'Mendeley'],
    galeria: [
      img('1509909756405-be0199881695'),
      img('1543269664-56d93b1e5db5'),
      img('1456541404-766d55f2e78e'),
    ],
  },
]

// ===== Notícias =====
export interface Noticia {
  id: string
  titulo: string
  excerpt: string
  conteudo: string
  data: string // ISO date
  imagem: string
  categoria: string
  autor: string
}

export const noticias: Noticia[] = [
  {
    id: 'nt-001',
    titulo: 'Inauguração da Biblioteca Comunitária é celebrada com festa e cultura',
    excerpt: 'Centenas de moradores participaram da inauguração oficial do espaço que já conta com mais de 3.000 títulos doados pela comunidade.',
    conteudo: 'Texto completo da notícia...',
    data: '2025-01-15',
    imagem: img('1481277542427-9940a9d13d98'),
    categoria: 'Projetos',
    autor: 'Equipe Memorial',
  },
  {
    id: 'nt-002',
    titulo: 'Festival Cultural celebrou 40 anos do Alto do Cabrito com grande público',
    excerpt: 'A 10ª edição do Festival Cultural do Alto reuniu mais de 2.000 pessoas e apresentou shows, exposições e gastronomia local.',
    conteudo: 'Texto completo da notícia...',
    data: '2025-06-28',
    imagem: img('1480796927426-f609979314bd'),
    categoria: 'Eventos',
    autor: 'Equipe Memorial',
  },
  {
    id: 'nt-003',
    titulo: 'Pesquisadores da Universidade de Yale visitam o Memorial e registram depoimentos',
    excerpt: 'Delegação internacional permaneceu por 10 dias no bairro coletando dados para pesquisa sobre memória comunitária urbana.',
    conteudo: 'Texto completo da notícia...',
    data: '2025-10-10',
    imagem: img('1509909756405-be0199881695'),
    categoria: 'Pesquisa',
    autor: 'Equipe Memorial',
  },
  {
    id: 'nt-004',
    titulo: 'Lançamento do site Memorial Alto do Cabrito marca nova fase do projeto',
    excerpt: 'Plataforma digital reúne acervo histórico, figuras notáveis, hemeroteca e projetos comunitários em um único espaço.',
    conteudo: 'Texto completo da notícia...',
    data: '2026-01-20',
    imagem: img('1543269664-56d93b1e5db5'),
    categoria: 'Tecnologia',
    autor: 'Equipe Memorial',
  },
  {
    id: 'nt-005',
    titulo: 'Exposição fotográfica "50 anos do Alto do Cabrito" abre neste mês',
    excerpt: 'A exposição reúne mais de 100 fotografias inéditas que contam a história do bairro desde os anos 1970 até o presente.',
    conteudo: 'Texto completo da notícia...',
    data: '2026-03-10',
    imagem: img('1590736969596-c5d6b94c6e80'),
    categoria: 'Cultura',
    autor: 'Equipe Memorial',
  },
  {
    id: 'nt-006',
    titulo: 'IV Encontro de Memória Viva reúne comunidades periféricas de Salvador',
    excerpt: 'O evento vai conectar grupos de memória de diferentes bairros periféricos para troca de experiências e produção coletiva.',
    conteudo: 'Texto completo da notícia...',
    data: '2026-04-15',
    imagem: img('1529156069898-49953e39b3ac'),
    categoria: 'Eventos',
    autor: 'Equipe Memorial',
  },
]

// ===== Parceiros =====
export interface Parceiro {
  id: string
  nome: string
  logo?: string
  url?: string
  categoria: string
}

export const parceiros: Parceiro[] = [
  { id: 'p-01', nome: 'LEU', categoria: 'Parceiro Local' },
  { id: 'p-02', nome: 'CAZA', categoria: 'Parceiro Local' },
  { id: 'p-03', nome: 'LUGAR', categoria: 'Parceiro Local' },
  { id: 'p-04', nome: 'Periferia em Todos os Cantos', categoria: 'Parceiro Local' },
  { id: 'p-05', nome: 'Universidade de Liverpool', categoria: 'Parceiro Acadêmico' },
  { id: 'p-06', nome: 'Yale University', categoria: 'Parceiro Acadêmico' },
  { id: 'p-07', nome: 'FAPESB', categoria: 'Fomento' },
  { id: 'p-08', nome: 'ISC', categoria: 'Pesquisa' },
  { id: 'p-09', nome: 'RedCap', categoria: 'Tecnologia' },
  { id: 'p-10', nome: 'Mendeley', categoria: 'Tecnologia' },
  { id: 'p-11', nome: 'AMACA', categoria: 'Parceiro Local' },
  { id: 'p-12', nome: 'É ao Quadrado', categoria: 'Parceiro Local' },
  { id: 'p-13', nome: 'Jovens Inovadores', categoria: 'Parceiro Local' },
]

// ===== Grupo Comunitário =====
export const grupoInfo = {
  nome: 'Grupo Comunitário Memorial Alto do Cabrito',
  descricao:
    'Somos um grupo de moradores, pesquisadores, educadores e artistas comprometidos com a preservação e celebração da história do bairro Alto do Cabrito. Acreditamos que a memória coletiva é um instrumento de resistência, pertencimento e transformação social.',
  missao:
    'Preservar, registrar e difundir a história, a cultura e a identidade do Alto do Cabrito para as gerações presentes e futuras.',
  visao:
    'Ser referência nacional em memória comunitária periférica, contribuindo para a valorização das comunidades de Salvador e do Brasil.',
  valores: [
    'Pertencimento e identidade periférica',
    'Memória como instrumento de resistência',
    'Protagonismo comunitário',
    'Parcerias acadêmicas e institucionais',
    'Acesso democrático à cultura e informação',
  ],
  foto: img('1544531586-fde5298cdd40', 1200, 600),
  equipe: [
    { nome: 'Coordenação Geral', foto: img('1507003211169-0a1dd7228f2d', 300, 300) },
    { nome: 'Equipe de Pesquisa', foto: img('1494790108377-be9c29b29330', 300, 300) },
    { nome: 'Equipe de Comunicação', foto: img('1531746020-1ab1ceaf2ca6', 300, 300) },
    { nome: 'Equipe de Tecnologia', foto: img('1560250097-0b93528c311a', 300, 300) },
  ],
}
