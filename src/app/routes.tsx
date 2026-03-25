import React from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from '../layouts/RootLayout'
import Home from '../pages/Home'
import AcervoPage from '../pages/AcervoPage'
import FigurasNotaveisPage from '../pages/FigurasNotaveisPage'
import FigurasNotaveisDetalhe from '../pages/FigurasNotaveisDetalhe'
import HemerotecaPage from '../pages/HemerotecaPage'
import ProjetosPage from '../pages/ProjetosPage'
import ProjetoDetalhe from '../pages/ProjetoDetalhe'
import NoticiaPage from '../pages/NoticiaPage'
import NoticiaDetalhe from '../pages/NoticiaDetalhe'
import SobrePage from '../pages/SobrePage'
import HistoriaPage from '../pages/HistoriaPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'historia',
        element: <HistoriaPage />,
      },
      {
        path: 'acervo',
        element: <AcervoPage />,
      },
      {
        path: 'figuras-notaveis',
        element: <FigurasNotaveisPage />,
      },
      {
        path: 'figuras-notaveis/:id',
        element: <FigurasNotaveisDetalhe />,
      },
      {
        path: 'hemeroteca',
        element: <HemerotecaPage />,
      },
      {
        path: 'projetos',
        element: <ProjetosPage />,
      },
      {
        path: 'projetos/:id',
        element: <ProjetoDetalhe />,
      },
      {
        path: 'noticias',
        element: <NoticiaPage />,
      },
      {
        path: 'noticias/:id',
        element: <NoticiaDetalhe />,
      },
      {
        path: 'sobre',
        element: <SobrePage />,
      },
    ],
  },
])
