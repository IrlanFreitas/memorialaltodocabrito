// Mock para projetos — substitua quando WP estiver configurado
import type { WPProjeto } from '../../types/cms'

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=800&h=600&auto=format&fit=crop&q=80`

export const projetosMock: WPProjeto[] = [
  {
    id: 1,
    slug: 'biblioteca-comunitaria',
    date: '2024-05-01T00:00:00',
    title: { rendered: 'Biblioteca Comunitária Alto do Cabrito' },
    content: { rendered: '' },
    acf: {
      resumo: 'Criação e manutenção da primeira biblioteca comunitária do bairro, com acervo de mais de 3.000 títulos.',
      descricao_completa: 'A Biblioteca Comunitária Alto do Cabrito nasceu do sonho coletivo de criar um espaço de leitura e aprendizado para todas as idades. Inaugurada em 2018, a biblioteca já atendeu mais de 5.000 leitores e promove rodas de leitura, contação de histórias e oficinas literárias semanalmente. O acervo foi construído com doações da comunidade, da Universidade do Estado da Bahia e de parceiros internacionais.',
      imagem_capa: { ID: 1, url: img('1481277542427-9940a9d13d98'), alt: 'Biblioteca Comunitária', width: 800, height: 600 },
      galeria: [
        { ID: 11, url: img('1509909756405-be0199881695'), alt: 'Acervo da biblioteca', width: 800, height: 600 },
        { ID: 12, url: img('1543269664-56d93b1e5db5'), alt: 'Leitores na biblioteca', width: 800, height: 600 },
      ],
      ano_inicio: 2018, ano_fim: null, status: 'ativo',
      parceiros: [
        { nome: 'FAPESB', logo: null, url: '' },
        { nome: 'Yale', logo: null, url: '' },
        { nome: 'LEU', logo: null, url: '' },
      ],
      numeros_impacto: [{ valor: '5.000+', label: 'leitores atendidos' }, { valor: '3.000+', label: 'títulos no acervo' }],
      ordem: 1, destaque: true, ativo: true,
    },
  },
  {
    id: 2,
    slug: 'mural-das-memorias',
    date: '2024-05-02T00:00:00',
    title: { rendered: 'Mural das Memórias' },
    content: { rendered: '' },
    acf: {
      resumo: 'Projeto de arte urbana que transforma as paredes do bairro em telas de memória coletiva.',
      descricao_completa: 'O Mural das Memórias é um projeto de arte urbana participativo que convida artistas locais e moradores a criarem murais que contam a história do Alto do Cabrito. Cada mural representa um capítulo da história do bairro, desde suas origens até os dias atuais. O projeto já produziu 12 murais distribuídos por diferentes pontos do bairro.',
      imagem_capa: { ID: 2, url: img('1543269664-56d93b1e5db5'), alt: 'Mural das Memórias', width: 800, height: 600 },
      galeria: [
        { ID: 21, url: img('1480796927426-f609979314bd'), alt: 'Mural pintado', width: 800, height: 600 },
        { ID: 22, url: img('1529156069898-49953e39b3ac'), alt: 'Artistas pintando mural', width: 800, height: 600 },
      ],
      ano_inicio: 2020, ano_fim: null, status: 'ativo',
      parceiros: [
        { nome: 'CAZA', logo: null, url: '' },
        { nome: 'É ao Quadrado', logo: null, url: '' },
        { nome: 'Liverpool', logo: null, url: '' },
      ],
      numeros_impacto: [{ valor: '12', label: 'murais produzidos' }],
      ordem: 2, destaque: true, ativo: true,
    },
  },
  {
    id: 3,
    slug: 'cinema-na-rua',
    date: '2024-05-03T00:00:00',
    title: { rendered: 'Cinema na Rua' },
    content: { rendered: '' },
    acf: {
      resumo: 'Sessões mensais de cinema ao ar livre que celebram a cultura brasileira e o audiovisual periférico.',
      descricao_completa: 'O Cinema na Rua transforma as praças e ruas do Alto do Cabrito em salas de cinema a céu aberto. Com sessões mensais, o projeto exibe filmes nacionais, documentários sobre periferias brasileiras e produções realizadas pelos próprios moradores do bairro. Em parceria com o ISC e a AMACA, o projeto também oferece oficinas de produção audiovisual.',
      imagem_capa: { ID: 3, url: img('1480796927426-f609979314bd'), alt: 'Cinema na Rua', width: 800, height: 600 },
      galeria: [
        { ID: 31, url: img('1529156069898-49953e39b3ac'), alt: 'Sessão de cinema ao ar livre', width: 800, height: 600 },
      ],
      ano_inicio: 2021, ano_fim: null, status: 'ativo',
      parceiros: [
        { nome: 'ISC', logo: null, url: '' },
        { nome: 'AMACA', logo: null, url: '' },
        { nome: 'Periferia em Todos os Cantos', logo: null, url: '' },
      ],
      numeros_impacto: [{ valor: 'Mensal', label: 'frequência das sessões' }],
      ordem: 3, destaque: false, ativo: true,
    },
  },
  {
    id: 4,
    slug: 'mapeamento-participativo',
    date: '2024-05-04T00:00:00',
    title: { rendered: 'Mapeamento Participativo do Bairro' },
    content: { rendered: '' },
    acf: {
      resumo: 'Pesquisa acadêmica em parceria com Yale e Liverpool para mapear a história oral e geográfica do Alto do Cabrito.',
      descricao_completa: 'Em parceria com pesquisadores das universidades de Yale (EUA) e Liverpool (UK), este projeto realiza o mapeamento participativo da história oral e geográfica do bairro. Utilizando ferramentas como RedCap e Mendeley para organização de dados, o projeto já coletou mais de 200 depoimentos de moradores e produziu um mapa histórico interativo do bairro.',
      imagem_capa: { ID: 4, url: img('1509909756405-be0199881695'), alt: 'Mapeamento Participativo', width: 800, height: 600 },
      galeria: [
        { ID: 41, url: img('1543269664-56d93b1e5db5'), alt: 'Entrevista de campo', width: 800, height: 600 },
        { ID: 42, url: img('1456541404-766d55f2e78e'), alt: 'Mapa histórico do bairro', width: 800, height: 600 },
      ],
      ano_inicio: 2022, ano_fim: null, status: 'ativo',
      parceiros: [
        { nome: 'Yale', logo: null, url: '' },
        { nome: 'Liverpool', logo: null, url: '' },
        { nome: 'FAPESB', logo: null, url: '' },
        { nome: 'ISC', logo: null, url: '' },
      ],
      numeros_impacto: [{ valor: '200+', label: 'depoimentos coletados' }],
      ordem: 4, destaque: true, ativo: true,
    },
  },
]
