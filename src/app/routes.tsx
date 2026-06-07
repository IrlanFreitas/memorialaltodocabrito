import React from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from '../layouts/RootLayout'
import Home from '../pages/Home'
import AcervoPage from '../pages/AcervoPage'
import MidiaPage from '../pages/MidiaPage'
import FigurasNotaveisPage from '../pages/FigurasNotaveisPage'
import FigurasNotaveisDetalhe from '../pages/FigurasNotaveisDetalhe'
import ProjetosPage from '../pages/ProjetosPage'
import ProjetoDetalhe from '../pages/ProjetoDetalhe'
import NoticiaPage from '../pages/NoticiaPage'
import NoticiaDetalhe from '../pages/NoticiaDetalhe'
import SobrePage from '../pages/SobrePage'
import HistoriaPage from '../pages/HistoriaPage'
import TimelineDetalhe from '../pages/TimelineDetalhe'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'historia', element: <HistoriaPage /> },
      { path: 'historia/:slug', element: <TimelineDetalhe /> },

      // Acervo: Hemeroteca + Biblioteca
      { path: 'acervo', element: <AcervoPage /> },

      // Mídia: Fototeca + Videoteca + Audioteca
      { path: 'midia', element: <MidiaPage /> },

      { path: 'figuras-notaveis', element: <FigurasNotaveisPage /> },
      { path: 'figuras-notaveis/:id', element: <FigurasNotaveisDetalhe /> },
      { path: 'projetos', element: <ProjetosPage /> },
      { path: 'projetos/:id', element: <ProjetoDetalhe /> },
      { path: 'noticias', element: <NoticiaPage /> },
      { path: 'noticias/:id', element: <NoticiaDetalhe /> },
      { path: 'sobre', element: <SobrePage /> },
    ],
  },
])
