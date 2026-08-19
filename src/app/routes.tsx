import React from 'react'
import { createBrowserRouter, Navigate, useParams } from 'react-router'
import RootLayout from '../layouts/RootLayout'
import Home from '../pages/Home'
import HistoriaHubPage from '../pages/HistoriaHubPage'
import HistoriaPage from '../pages/HistoriaPage'
import TimelineDetalhe from '../pages/TimelineDetalhe'
import FigurasNotaveisPage from '../pages/FigurasNotaveisPage'
import FigurasNotaveisDetalhe from '../pages/FigurasNotaveisDetalhe'
import SobrePage from '../pages/SobrePage'
import AcervoPage from '../pages/AcervoPage'
import ProjetosPage from '../pages/ProjetosPage'
import ProjetoDetalhe from '../pages/ProjetoDetalhe'
import MapaPage from '../pages/MapaPage'
import BlogPage from '../pages/BlogPage'
import NoticiaDetalhe from '../pages/NoticiaDetalhe'

/** Redireciona rotas legadas preservando o parâmetro dinâmico, se houver. */
function RedirectWithParam({ to }: { to: (params: Record<string, string | undefined>) => string }) {
  const params = useParams()
  return <Navigate to={to(params)} replace />
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      // 2 - Nossa história
      { path: 'historia', element: <HistoriaHubPage /> },
      { path: 'historia/linha-do-tempo', element: <HistoriaPage /> },
      { path: 'historia/linha-do-tempo/:slug', element: <TimelineDetalhe /> },
      { path: 'historia/figuras-notaveis', element: <FigurasNotaveisPage /> },
      { path: 'historia/figuras-notaveis/:id', element: <FigurasNotaveisDetalhe /> },
      { path: 'historia/grupo-comunitario', element: <SobrePage /> },

      // 3 - Acervo (Fototeca, Videoteca, Audioteca, Biblioteca, Hemeroteca)
      { path: 'acervo', element: <AcervoPage /> },

      // 4 - Projetos
      { path: 'projetos', element: <ProjetosPage /> },
      { path: 'projetos/:id', element: <ProjetoDetalhe /> },

      // 5 - Mapa do Bairro
      { path: 'mapa', element: <MapaPage /> },

      // 6 - Blog (Notícias, Eventos || Agenda, Postagens)
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:id', element: <NoticiaDetalhe /> },

      // ─── Redirects legados ───────────────────────────────────────────────
      { path: 'historia/:slug', element: <RedirectWithParam to={(p) => `/historia/linha-do-tempo/${p.slug}`} /> },
      { path: 'figuras-notaveis', element: <Navigate to="/historia/figuras-notaveis" replace /> },
      { path: 'figuras-notaveis/:id', element: <RedirectWithParam to={(p) => `/historia/figuras-notaveis/${p.id}`} /> },
      { path: 'sobre', element: <Navigate to="/historia/grupo-comunitario" replace /> },
      { path: 'midia', element: <Navigate to="/acervo" replace /> },
      { path: 'noticias', element: <Navigate to="/blog" replace /> },
      { path: 'noticias/:id', element: <RedirectWithParam to={(p) => `/blog/${p.id}`} /> },
    ],
  },
])
