import React from 'react'
import HeroCarousel from '../components/HeroCarousel'
import HistoriaIntro from '../components/HistoriaIntro'
import AcervoSection from '../components/AcervoSection'
import FigurasNotaveis from '../components/FigurasNotaveis'
import MidiaSection from '../components/MidiaSection'
import GrupoComunitario from '../components/GrupoComunitario'
import NoticiasSection from '../components/NoticiasSection'
import ProjetosSection from '../components/ProjetosSection'

export default function Home() {
  return (
    <>
      {/* Dobra 1: Hero + Carrossel */}
      <HeroCarousel />

      {/* Dobra 2: Nossa História */}
      <HistoriaIntro />

      {/* Dobra 3: Acervo */}
      <AcervoSection />

      {/* Dobra 4: Figuras Notáveis */}
      <FigurasNotaveis />

      {/* Dobra 5: Mídia */}
      <MidiaSection />

      {/* Dobra 6: Grupo Comunitário */}
      <GrupoComunitario />

      {/* Dobra 7: Projetos */}
      <ProjetosSection />

      {/* Dobra 8: Notícias */}
      <NoticiasSection />
    </>
  )
}
