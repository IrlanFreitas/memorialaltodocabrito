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

// ===== Timeline =====
export interface TimelineMockItem {
  slug: string
  ano: string
  titulo: string
  descricao: string
  conteudoCompleto: string
  imagem: string
  galeria: string[]
  tags: string[]
  ordem: number
}

export const timelineMock: TimelineMockItem[] = [
  {
    slug: 'primeiros-moradores-1960s',
    ano: '1960s',
    titulo: 'Os Primeiros Moradores',
    descricao: 'Famílias oriundas do interior da Bahia e de outros estados chegam às encostas do Alto do Cabrito em busca de oportunidades na capital.',
    conteudoCompleto: `<p>Na década de 1960, o Brasil vivia um intenso processo de urbanização. As grandes cidades do Sul e Nordeste atraíam levas de trabalhadores que fugiam da seca e da falta de oportunidades no campo. Salvador, capital da Bahia, foi um desses destinos escolhidos por centenas de famílias.</p>
<p>O Alto do Cabrito, situado nas encostas do subúrbio ferroviário de Salvador, recebeu seus primeiros moradores fixos nesse período. Famílias inteiras chegavam com pouco mais do que suas malas e sua determinação, construindo abrigos precários mas dignos nas encostas íngremes do bairro.</p>
<p>Os primeiros moradores vieram principalmente do Recôncavo Baiano, do sertão nordestino e de outros estados. Trouxeram consigo sua cultura, sua culinária, sua religiosidade e uma solidariedade comunitária que seria a base da identidade do Alto do Cabrito pelos próximos anos.</p>
<p>As habitações eram construídas com materiais simples — madeira, barro, telha de amianto — mas a solidez cultural e comunitária dessas primeiras famílias seria o alicerce de tudo que viria depois.</p>`,
    imagem: img('1548192746-dd526f154ed9'),
    galeria: [img('1529156069898-49953e39b3ac'), img('1590736969596-c5d6b94c6e80')],
    tags: ['Migração', 'Origens', 'Primeiros Moradores'],
    ordem: 1,
  },
  {
    slug: 'consolidacao-do-bairro-1970s',
    ano: '1970s',
    titulo: 'Consolidação do Bairro',
    descricao: 'O Alto do Cabrito se consolida como comunidade reconhecida, com o surgimento de ruas, comércios locais e a primeira escola improvisada.',
    conteudoCompleto: `<p>Na década de 1970, o Alto do Cabrito deixou de ser apenas um aglomerado de casas esparsas para se tornar uma comunidade organizada e reconhecida. O crescimento populacional foi expressivo, impulsionado pela continuação do fluxo migratório para Salvador.</p>
<p>As primeiras ruas foram abertas, ainda sem pavimentação mas já com traçado definido pelos próprios moradores. O pequeno comércio local floresceu: bares, mercearias, açougues e outros estabelecimentos que atendiam às necessidades cotidianas da comunidade.</p>
<p>A primeira escola improvisada do bairro surgiu nesse período, instalada na casa de uma moradora que se voluntariou para ensinar as crianças que não tinham como se deslocar para escolas distantes. Esse ato de solidariedade plantou a semente do que mais tarde se tornaria a Escola Comunitária do Alto do Cabrito.</p>
<p>A identidade periférica do bairro começou a se formar com traços únicos: a mistura de sotaques do Nordeste, as festas de padroeiro, os grupos de capoeira nos terreiros, a culinária que combinava influências de diversas regiões do Brasil.</p>`,
    imagem: img('1590736969596-c5d6b94c6e80'),
    galeria: [img('1509909756405-be0199881695'), img('1543269664-56d93b1e5db5')],
    tags: ['Crescimento', 'Comunidade', 'Organização'],
    ordem: 2,
  },
  {
    slug: 'associacao-de-moradores-1980',
    ano: '1980',
    titulo: 'Fundação da Associação de Moradores',
    descricao: 'Em 14 de março de 1980, é fundada oficialmente a Associação de Moradores do Alto do Cabrito, marco fundamental na organização política e social da comunidade.',
    conteudoCompleto: `<p>O dia 14 de março de 1980 ficou marcado na história do Alto do Cabrito. Naquela data, lideranças comunitárias de toda a comunidade se reuniram para fundar oficialmente a Associação de Moradores do Alto do Cabrito (AMACA).</p>
<p>A criação da AMACA foi resultado de anos de mobilização popular. Os moradores perceberam que precisavam de uma voz organizada para dialogar com o poder público e reivindicar melhorias estruturais para o bairro: pavimentação, saneamento, energia elétrica e serviços de saúde.</p>
<p>A fundação da Associação representou um marco na organização política e social da comunidade. Pela primeira vez, os moradores tinham uma entidade formal que os representava e podia negociar com a Prefeitura de Salvador e com o Estado da Bahia.</p>
<p>Nos anos seguintes, a AMACA seria protagonista de diversas conquistas importantes para o bairro, desde a instalação de postos de saúde até a construção de quadras esportivas e espaços culturais.</p>`,
    imagem: img('1468780645347-1e85b8c6d8aa'),
    galeria: [img('1590736969596-c5d6b94c6e80')],
    tags: ['AMACA', 'Organização', 'Política', 'Direitos'],
    ordem: 3,
  },
  {
    slug: 'escola-comunitaria-1985',
    ano: '1985',
    titulo: 'Escola Comunitária',
    descricao: 'A Escola Comunitária do Alto do Cabrito é fundada com recursos dos próprios moradores, oferecendo educação de qualidade para crianças do bairro.',
    conteudoCompleto: `<p>Em 1985, o sonho de educação do Alto do Cabrito ganhou forma definitiva. A Escola Comunitária do Alto do Cabrito foi fundada com recursos arrecadados pelos próprios moradores, em um esforço coletivo que envolveu doações, bazares, festas e muito trabalho voluntário.</p>
<p>O prédio da escola foi construído mutirão — cada família contribuiu com o que podia, fosse dinheiro, material de construção ou força de trabalho. O resultado foi uma escola simples, mas carregada de significado: construída pela comunidade, para a comunidade.</p>
<p>No início, a escola funcionava com professores voluntários, muitos deles moradores do próprio bairro com formação no magistério. Com o tempo, a escola passou a receber apoio da Prefeitura de Salvador, que enviou professores concursados e materiais didáticos.</p>
<p>A Escola Comunitária se tornou mais que um espaço de ensino formal. Era o lugar onde as crianças do Alto do Cabrito aprendiam não apenas matemática e português, mas também sobre a história de sua própria comunidade, sua cultura e seus valores.</p>`,
    imagem: img('1529156069898-49953e39b3ac'),
    galeria: [img('1548192746-dd526f154ed9'), img('1509909756405-be0199881695')],
    tags: ['Educação', 'Escola', 'Mutirão', 'Comunidade'],
    ordem: 4,
  },
  {
    slug: 'infraestrutura-e-conquistas-1990s',
    ano: '1990s',
    titulo: 'Infraestrutura e Conquistas',
    descricao: 'Após anos de mobilização popular, o bairro conquista melhorias significativas de infraestrutura: pavimentação, saneamento e abastecimento de água.',
    conteudoCompleto: `<p>A década de 1990 foi a das grandes conquistas de infraestrutura para o Alto do Cabrito. Após mais de uma década de mobilização da AMACA e pressão constante sobre o poder público, o bairro finalmente começou a receber os investimentos que seus moradores tanto reivindicavam.</p>
<p>A pavimentação das ruas principais foi a primeira grande vitória. As estradas de terra batida que se transformavam em lamaçal no inverno e levantavam poeira no verão deram lugar ao asfalto, facilitando o acesso de ônibus e melhorando significativamente a qualidade de vida dos moradores.</p>
<p>A ampliação da rede de saneamento básico foi outro marco importante. O esgoto a céu aberto, que representava risco de saúde pública, foi progressivamente substituído por rede coletora. A mortalidade infantil por doenças de veiculação hídrica caiu drasticamente.</p>
<p>O acesso regular ao abastecimento de água, que antes dependia de cisternas e caminhões-pipa, também foi garantido nesse período com a expansão da rede da Embasa. As famílias podiam, finalmente, contar com água encanada em suas casas.</p>`,
    imagem: img('1586339949916-3e9457bef6d3'),
    galeria: [img('1468780645347-1e85b8c6d8aa')],
    tags: ['Infraestrutura', 'Saneamento', 'Pavimentação', 'Conquistas'],
    ordem: 5,
  },
  {
    slug: 'reconhecimento-cultural-2000s',
    ano: '2000s',
    titulo: 'Reconhecimento Cultural',
    descricao: 'O Alto do Cabrito ganha visibilidade pela riqueza de suas manifestações culturais — capoeira, festas juninas, música e arte periférica.',
    conteudoCompleto: `<p>Os anos 2000 marcaram o início de um novo capítulo para o Alto do Cabrito: o reconhecimento de sua riqueza cultural. O que sempre existiu no interior das casas e nas ruas do bairro passou a ser valorizado e celebrado não apenas pela comunidade, mas também por pesquisadores, artistas e gestores culturais de fora.</p>
<p>O grupo de capoeira do Alto do Cabrito, fundado nos anos 1970 por um mestre migrante do Recôncavo, ganhou projeção estadual e passou a ser convidado para eventos em todo o Brasil. As festas juninas do bairro, famosas pela sua autenticidade e energia, atraíam visitantes de outros bairros de Salvador.</p>
<p>A cena musical do bairro também floresceu. Grupos de pagode, samba reggae, forró e funk que haviam se formado de maneira orgânica nos quintais e garagens do Alto do Cabrito passaram a se apresentar em festivais e eventos culturais na cidade.</p>
<p>Artistas plásticos e grafiteiros da comunidade começaram a ser reconhecidos além das fronteiras do bairro. Os muros do Alto do Cabrito se tornaram uma galeria a céu aberto, com obras que contavam a história e expressavam a identidade do lugar.</p>`,
    imagem: img('1543269664-56d93b1e5db5'),
    galeria: [img('1529156069898-49953e39b3ac'), img('1548192746-dd526f154ed9')],
    tags: ['Cultura', 'Capoeira', 'Arte', 'Identidade'],
    ordem: 6,
  },
  {
    slug: 'biblioteca-comunitaria-2018',
    ano: '2018',
    titulo: 'Biblioteca Comunitária',
    descricao: 'Inauguração da Biblioteca Comunitária do Alto do Cabrito, resultado de anos de sonho coletivo, com acervo de mais de 3.000 títulos.',
    conteudoCompleto: `<p>Em 2018, o Alto do Cabrito realizou um sonho antigo: inaugurou sua própria Biblioteca Comunitária. O espaço foi fruto de anos de trabalho coletivo, começando com uma campanha de arrecadação de livros usados que mobilizou toda a comunidade.</p>
<p>A biblioteca funcionaria inicialmente nas dependências da Escola Comunitária, mas a demanda foi tão grande que logo precisou de um espaço próprio. Graças a financiamento da FAPESB e a parcerias com universidades, foi possível construir e equipar um prédio exclusivo para a biblioteca.</p>
<p>Com mais de 3.000 títulos no acervo inicial, a Biblioteca Comunitária do Alto do Cabrito cobria desde literatura infantil e juvenil até obras de história, ciências, artes e tecnologia. Uma seção especial foi reservada para obras que tratavam da história das periferias brasileiras e da cultura afro-baiana.</p>
<p>Além de ser um espaço de leitura e estudo, a biblioteca rapidamente se tornou um polo cultural do bairro. Saraus de poesia, rodas de conversa, exposições de arte, oficinas de contação de histórias e grupos de estudo passaram a acontecer regularmente em suas dependências.</p>`,
    imagem: img('1509909756405-be0199881695'),
    galeria: [img('1586339949916-3e9457bef6d3'), img('1529156069898-49953e39b3ac')],
    tags: ['Biblioteca', 'Educação', 'Cultura', 'Leitura'],
    ordem: 7,
  },
  {
    slug: 'nascimento-do-memorial-2021',
    ano: '2021',
    titulo: 'Nascimento do Memorial',
    descricao: 'Um grupo de jovens moradores cria o projeto Memorial Alto do Cabrito, iniciando o trabalho de digitalização e preservação da história da comunidade.',
    conteudoCompleto: `<p>Em 2021, em plena pandemia de Covid-19, um grupo de jovens moradores do Alto do Cabrito decidiu que era hora de agir. Preocupados com o risco de que a história oral do bairro se perdesse com a morte dos mais velhos — acelerada pela pandemia — iniciaram o projeto Memorial Alto do Cabrito.</p>
<p>O grupo era formado por estudantes universitários, recém-formados e jovens aprendizes que moravam no bairro. Sem recursos mas com muita determinação, começaram visitando os moradores mais antigos para gravar seus depoimentos e digitalizar fotografias e documentos históricos que guardavam em casa.</p>
<p>Equipados com celulares, scanners domésticos e laptops, o grupo percorreu cada rua do Alto do Cabrito em busca de memórias. Encontraram fotografias raras, documentos históricos, recortes de jornal e objetos que contavam a história da comunidade de maneiras que nenhum livro poderia capturar.</p>
<p>O trabalho recebeu apoio de pesquisadores da UFBA e de parceiros acadêmicos internacionais, que ajudaram a desenvolver a metodologia de digitalização e catalogação do acervo. Em pouco tempo, o Memorial tinha acumulado milhares de itens em seu banco de dados.</p>`,
    imagem: img('1590736969596-c5d6b94c6e80'),
    galeria: [img('1543269664-56d93b1e5db5'), img('1468780645347-1e85b8c6d8aa')],
    tags: ['Memorial', 'Digitalização', 'Jovens', 'Preservação'],
    ordem: 8,
  },
  {
    slug: 'memorial-online-2026',
    ano: '2026',
    titulo: 'Memorial Online',
    descricao: 'Lançamento da plataforma digital do Memorial Alto do Cabrito, tornando o acervo histórico acessível para toda a comunidade e para pesquisadores do mundo.',
    conteudoCompleto: `<p>Em 2026, o projeto Memorial Alto do Cabrito deu um salto de qualidade com o lançamento de sua plataforma digital. O site reúne, de forma organizada e acessível, todo o acervo histórico levantado pelos jovens pesquisadores da comunidade ao longo de cinco anos de trabalho intenso.</p>
<p>A plataforma conta com acervo fotográfico, sonoro e documental; hemeroteca com recortes de jornais e revistas ao longo de décadas; perfis de figuras notáveis da comunidade; notícias e eventos; e esta própria timeline da história do bairro.</p>
<p>O lançamento da plataforma foi celebrado com um evento na Biblioteca Comunitária do Alto do Cabrito, com a presença de moradores de todas as gerações, pesquisadores, parceiros acadêmicos e representantes do poder público. Para muitos presentes, foi um momento de emoção ao ver a história de suas famílias registrada e disponível para o mundo.</p>
<p>Com a plataforma online, o Memorial Alto do Cabrito se torna acessível não apenas para os moradores do bairro, mas para pesquisadores, estudantes e interessados em todo o Brasil e no mundo. É a concretização de um sonho coletivo: garantir que a história do Alto do Cabrito seja preservada e celebrada por muitas gerações.</p>`,
    imagem: img('1548192746-dd526f154ed9'),
    galeria: [img('1590736969596-c5d6b94c6e80'), img('1529156069898-49953e39b3ac'), img('1509909756405-be0199881695')],
    tags: ['Plataforma Digital', 'Lançamento', 'Acervo', 'Memorial'],
    ordem: 9,
  },
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
