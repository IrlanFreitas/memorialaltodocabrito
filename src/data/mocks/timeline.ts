// Mock para timeline — substitua quando WP estiver configurado
import type { WPTimeline, ACFImage } from '../../types/cms'

const img = (id: string): string =>
  `https://images.unsplash.com/photo-${id}?w=800&h=600&auto=format&fit=crop&q=80`

const imgObj = (id: string, alt: string): ACFImage => ({
  ID: 0, url: img(id), alt, width: 800, height: 600,
})

export const timelineMock: WPTimeline[] = [
  {
    id: 1,
    slug: 'primeiros-moradores-1960s',
    date: '2024-06-01T00:00:00',
    title: { rendered: 'Os Primeiros Moradores' },
    content: { rendered: '' },
    acf: {
      ano: '1960s',
      descricao: 'Famílias oriundas do interior da Bahia e de outros estados chegam às encostas do Alto do Cabrito em busca de oportunidades na capital.',
      conteudo_completo: '<p>Na década de 1960, o Brasil vivia um intenso processo de urbanização. As grandes cidades do Sul e Nordeste atraíam levas de trabalhadores que fugiam da seca e da falta de oportunidades no campo. Salvador, capital da Bahia, foi um desses destinos escolhidos por centenas de famílias.</p><p>O Alto do Cabrito, situado nas encostas do subúrbio ferroviário de Salvador, recebeu seus primeiros moradores fixos nesse período. Famílias inteiras chegavam com pouco mais do que suas malas e sua determinação, construindo abrigos precários mas dignos nas encostas íngremes do bairro.</p><p>Os primeiros moradores vieram principalmente do Recôncavo Baiano, do sertão nordestino e de outros estados. Trouxeram consigo sua cultura, sua culinária, sua religiosidade e uma solidariedade comunitária que seria a base da identidade do Alto do Cabrito pelos próximos anos.</p>',
      imagem: imgObj('1548192746-dd526f154ed9', 'Alto do Cabrito nos anos 1960'),
      galeria: [imgObj('1529156069898-49953e39b3ac', 'Moradores nas encostas'), imgObj('1590736969596-c5d6b94c6e80', 'Vista panorâmica')],
      tags: 'Migração, Origens, Primeiros Moradores',
      ordem: 1, destaque: true, ativo: true,
    },
  },
  {
    id: 2,
    slug: 'consolidacao-do-bairro-1970s',
    date: '2024-06-02T00:00:00',
    title: { rendered: 'Consolidação do Bairro' },
    content: { rendered: '' },
    acf: {
      ano: '1970s',
      descricao: 'O Alto do Cabrito se consolida como comunidade reconhecida, com o surgimento de ruas, comércios locais e a primeira escola improvisada.',
      conteudo_completo: '<p>Na década de 1970, o Alto do Cabrito deixou de ser apenas um aglomerado de casas esparsas para se tornar uma comunidade organizada e reconhecida. O crescimento populacional foi expressivo, impulsionado pela continuação do fluxo migratório para Salvador.</p><p>As primeiras ruas foram abertas, ainda sem pavimentação mas já com traçado definido pelos próprios moradores. O pequeno comércio local floresceu: bares, mercearias, açougues e outros estabelecimentos que atendiam às necessidades cotidianas da comunidade.</p><p>A primeira escola improvisada do bairro surgiu nesse período, instalada na casa de uma moradora que se voluntariou para ensinar as crianças que não tinham como se deslocar para escolas distantes.</p>',
      imagem: imgObj('1590736969596-c5d6b94c6e80', 'Ruas do bairro nos anos 1970'),
      galeria: [imgObj('1509909756405-be0199881695', 'Comércio local'), imgObj('1543269664-56d93b1e5db5', 'Primeira escola improvisada')],
      tags: 'Crescimento, Comunidade, Organização',
      ordem: 2, destaque: false, ativo: true,
    },
  },
  {
    id: 3,
    slug: 'associacao-de-moradores-1980',
    date: '2024-06-03T00:00:00',
    title: { rendered: 'Fundação da Associação de Moradores' },
    content: { rendered: '' },
    acf: {
      ano: '1980',
      descricao: 'Em 14 de março de 1980, é fundada oficialmente a Associação de Moradores do Alto do Cabrito, marco fundamental na organização política e social da comunidade.',
      conteudo_completo: '<p>O dia 14 de março de 1980 ficou marcado na história do Alto do Cabrito. Naquela data, lideranças comunitárias de toda a comunidade se reuniram para fundar oficialmente a Associação de Moradores do Alto do Cabrito (AMACA).</p><p>A criação da AMACA foi resultado de anos de mobilização popular. Os moradores perceberam que precisavam de uma voz organizada para dialogar com o poder público e reivindicar melhorias estruturais para o bairro.</p><p>Nos anos seguintes, a AMACA seria protagonista de diversas conquistas importantes para o bairro, desde a instalação de postos de saúde até a construção de quadras esportivas e espaços culturais.</p>',
      imagem: imgObj('1468780645347-1e85b8c6d8aa', 'Fundação da AMACA'),
      galeria: [imgObj('1590736969596-c5d6b94c6e80', 'Reunião de fundação')],
      tags: 'AMACA, Organização, Política, Direitos',
      ordem: 3, destaque: true, ativo: true,
    },
  },
  {
    id: 4,
    slug: 'escola-comunitaria-1985',
    date: '2024-06-04T00:00:00',
    title: { rendered: 'Escola Comunitária' },
    content: { rendered: '' },
    acf: {
      ano: '1985',
      descricao: 'A Escola Comunitária do Alto do Cabrito é fundada com recursos dos próprios moradores, oferecendo educação de qualidade para crianças do bairro.',
      conteudo_completo: '<p>Em 1985, o sonho de educação do Alto do Cabrito ganhou forma definitiva. A Escola Comunitária do Alto do Cabrito foi fundada com recursos arrecadados pelos próprios moradores, em um esforço coletivo que envolveu doações, bazares, festas e muito trabalho voluntário.</p><p>O prédio da escola foi construído em mutirão — cada família contribuiu com o que podia, fosse dinheiro, material de construção ou força de trabalho.</p><p>A Escola Comunitária se tornou mais que um espaço de ensino formal. Era o lugar onde as crianças do Alto do Cabrito aprendiam não apenas matemática e português, mas também sobre a história de sua própria comunidade.</p>',
      imagem: imgObj('1529156069898-49953e39b3ac', 'Escola Comunitária'),
      galeria: [imgObj('1548192746-dd526f154ed9', 'Construção da escola'), imgObj('1509909756405-be0199881695', 'Primeira turma')],
      tags: 'Educação, Escola, Mutirão, Comunidade',
      ordem: 4, destaque: false, ativo: true,
    },
  },
  {
    id: 5,
    slug: 'infraestrutura-e-conquistas-1990s',
    date: '2024-06-05T00:00:00',
    title: { rendered: 'Infraestrutura e Conquistas' },
    content: { rendered: '' },
    acf: {
      ano: '1990s',
      descricao: 'Após anos de mobilização popular, o bairro conquista melhorias significativas de infraestrutura: pavimentação, saneamento e abastecimento de água.',
      conteudo_completo: '<p>A década de 1990 foi a das grandes conquistas de infraestrutura para o Alto do Cabrito. Após mais de uma década de mobilização da AMACA e pressão constante sobre o poder público, o bairro finalmente começou a receber os investimentos que seus moradores tanto reivindicavam.</p><p>A pavimentação das ruas principais foi a primeira grande vitória, facilitando o acesso de ônibus e melhorando significativamente a qualidade de vida.</p><p>O acesso regular ao abastecimento de água, que antes dependia de cisternas e caminhões-pipa, também foi garantido nesse período.</p>',
      imagem: imgObj('1586339949916-3e9457bef6d3', 'Obras de infraestrutura'),
      galeria: [imgObj('1468780645347-1e85b8c6d8aa', 'Pavimentação de rua')],
      tags: 'Infraestrutura, Saneamento, Pavimentação, Conquistas',
      ordem: 5, destaque: false, ativo: true,
    },
  },
  {
    id: 6,
    slug: 'reconhecimento-cultural-2000s',
    date: '2024-06-06T00:00:00',
    title: { rendered: 'Reconhecimento Cultural' },
    content: { rendered: '' },
    acf: {
      ano: '2000s',
      descricao: 'O Alto do Cabrito ganha visibilidade pela riqueza de suas manifestações culturais — capoeira, festas juninas, música e arte periférica.',
      conteudo_completo: '<p>Os anos 2000 marcaram o início de um novo capítulo para o Alto do Cabrito: o reconhecimento de sua riqueza cultural.</p><p>O grupo de capoeira do Alto do Cabrito ganhou projeção estadual. As festas juninas do bairro, famosas pela sua autenticidade e energia, atraíam visitantes de outros bairros de Salvador.</p><p>Artistas plásticos e grafiteiros da comunidade começaram a ser reconhecidos além das fronteiras do bairro.</p>',
      imagem: imgObj('1543269664-56d93b1e5db5', 'Manifestações culturais'),
      galeria: [imgObj('1529156069898-49953e39b3ac', 'Roda de capoeira'), imgObj('1548192746-dd526f154ed9', 'Festa junina')],
      tags: 'Cultura, Capoeira, Arte, Identidade',
      ordem: 6, destaque: false, ativo: true,
    },
  },
  {
    id: 7,
    slug: 'biblioteca-comunitaria-2018',
    date: '2024-06-07T00:00:00',
    title: { rendered: 'Biblioteca Comunitária' },
    content: { rendered: '' },
    acf: {
      ano: '2018',
      descricao: 'Inauguração da Biblioteca Comunitária do Alto do Cabrito, resultado de anos de sonho coletivo, com acervo de mais de 3.000 títulos.',
      conteudo_completo: '<p>Em 2018, o Alto do Cabrito realizou um sonho antigo: inaugurou sua própria Biblioteca Comunitária. O espaço foi fruto de anos de trabalho coletivo, começando com uma campanha de arrecadação de livros usados.</p><p>Com mais de 3.000 títulos no acervo inicial, a biblioteca cobria desde literatura infantil e juvenil até obras de história, ciências, artes e tecnologia.</p><p>A biblioteca rapidamente se tornou um polo cultural do bairro, com saraus, rodas de conversa e oficinas regulares.</p>',
      imagem: imgObj('1509909756405-be0199881695', 'Biblioteca Comunitária'),
      galeria: [imgObj('1586339949916-3e9457bef6d3', 'Inauguração'), imgObj('1529156069898-49953e39b3ac', 'Acervo de livros')],
      tags: 'Biblioteca, Educação, Cultura, Leitura',
      ordem: 7, destaque: true, ativo: true,
    },
  },
  {
    id: 8,
    slug: 'nascimento-do-memorial-2021',
    date: '2024-06-08T00:00:00',
    title: { rendered: 'Nascimento do Memorial' },
    content: { rendered: '' },
    acf: {
      ano: '2021',
      descricao: 'Um grupo de jovens moradores cria o projeto Memorial Alto do Cabrito, iniciando o trabalho de digitalização e preservação da história da comunidade.',
      conteudo_completo: '<p>Em 2021, em plena pandemia de Covid-19, um grupo de jovens moradores do Alto do Cabrito decidiu que era hora de agir, preocupados com o risco de que a história oral do bairro se perdesse.</p><p>Equipados com celulares, scanners domésticos e laptops, o grupo percorreu cada rua do Alto do Cabrito em busca de memórias.</p><p>O trabalho recebeu apoio de pesquisadores da UFBA e de parceiros acadêmicos internacionais.</p>',
      imagem: imgObj('1590736969596-c5d6b94c6e80', 'Nascimento do Memorial'),
      galeria: [imgObj('1543269664-56d93b1e5db5', 'Coleta de depoimentos'), imgObj('1468780645347-1e85b8c6d8aa', 'Digitalização de acervo')],
      tags: 'Memorial, Digitalização, Jovens, Preservação',
      ordem: 8, destaque: true, ativo: true,
    },
  },
  {
    id: 9,
    slug: 'memorial-online-2026',
    date: '2024-06-09T00:00:00',
    title: { rendered: 'Memorial Online' },
    content: { rendered: '' },
    acf: {
      ano: '2026',
      descricao: 'Lançamento da plataforma digital do Memorial Alto do Cabrito, tornando o acervo histórico acessível para toda a comunidade e para pesquisadores do mundo.',
      conteudo_completo: '<p>Em 2026, o projeto Memorial Alto do Cabrito deu um salto de qualidade com o lançamento de sua plataforma digital, reunindo todo o acervo levantado pelos jovens pesquisadores da comunidade ao longo de cinco anos de trabalho.</p><p>A plataforma conta com acervo fotográfico, sonoro e documental; hemeroteca; perfis de figuras notáveis; notícias e eventos; e esta própria timeline da história do bairro.</p><p>Com a plataforma online, o Memorial se torna acessível para pesquisadores, estudantes e interessados em todo o Brasil e no mundo.</p>',
      imagem: imgObj('1548192746-dd526f154ed9', 'Lançamento do Memorial Online'),
      galeria: [imgObj('1590736969596-c5d6b94c6e80', 'Evento de lançamento'), imgObj('1529156069898-49953e39b3ac', 'Comunidade reunida'), imgObj('1509909756405-be0199881695', 'Plataforma digital')],
      tags: 'Plataforma Digital, Lançamento, Acervo, Memorial',
      ordem: 9, destaque: true, ativo: true,
    },
  },
]

export const timelineDestaqueMock: WPTimeline[] = timelineMock.filter((t) => t.acf.destaque)
