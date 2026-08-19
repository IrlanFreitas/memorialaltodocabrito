import type { WPGrupoComunitario } from '../../types/cms'

const wpImg = (filename: string) =>
  `http://memorialaltodocabrito.local/wp-content/uploads/2026/06/${filename}`

export const grupoComunitarioMock: WPGrupoComunitario = {
  id: 1,
  slug: 'grupo-comunitario-alto-do-cabrito',
  title: { rendered: 'Grupo Comunitário do Alto do Cabrito' },
  acf: {
    descricao:
      'O Grupo Comunitário do Alto do Cabrito é uma organização de base fundada pelos próprios moradores do bairro. Ao longo de décadas, tem sido o principal agente de mobilização cultural, social e histórica da comunidade, promovendo ações de preservação da memória e fortalecimento da identidade local.',
    missao:
      'Preservar e difundir a história e a cultura do Alto do Cabrito, promovendo o pertencimento, a resistência e a educação popular entre moradores de todas as gerações.',
    visao:
      'Ser reconhecido como referência na preservação da memória e história das comunidades periféricas de Salvador, contribuindo para a valorização da cultura e identidade local.',
    valores:
      'Memória coletiva\nPertencimento\nResistência cultural\nInclusão comunitária\nEducação popular',
    foto: {
      ID: 1,
      url: wpImg('MEM_AC_Foto-75-scaled.jpg'),
      alt: 'Equipe do Grupo Comunitário Memorial Alto do Cabrito',
      width: 0,
      height: 0,
    },
    equipe_texto:
      'Coordenação Geral\nPesquisa e Documentação\nComunicação e Acervo Digital\nEducação Popular\nMobilização Comunitária',
    equipe_foto: null,
  },
}
