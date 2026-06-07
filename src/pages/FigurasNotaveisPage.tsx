import React, { useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Search, ArrowRight } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { useFiguras } from '../hooks/useFiguras'

const categorias = ['Todas', 'cultura', 'educacao', 'politica', 'religiao', 'esporte', 'comercio', 'saude', 'historia', 'outro']
const categoriaLabel: Record<string, string> = {
  cultura: 'Cultura', educacao: 'Educação', politica: 'Política',
  religiao: 'Religião', esporte: 'Esporte', comercio: 'Comércio',
  saude: 'Saúde', historia: 'História', outro: 'Outro',
}

export default function FigurasNotaveisPage() {
  const [filtro, setFiltro] = useState('Todas')
  const [busca, setBusca] = useState('')
  const { data, isLoading } = useFiguras()

  const filtered = (data ?? []).filter((f) => {
    const matchCat = filtro === 'Todas' || f.acf.area_atuacao === filtro
    const matchBusca =
      !busca ||
      f.title.rendered.toLowerCase().includes(busca.toLowerCase()) ||
      (f.acf.bio ?? '').toLowerCase().includes(busca.toLowerCase())
    return matchCat && matchBusca
  })

  return (
    <div style={{ backgroundColor: 'var(--preto)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: 'var(--preto-soft)',
          borderBottom: '1px solid var(--cinza-borda)',
          padding: '40px 16px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--cinza-medio)', fontFamily: 'var(--font-primary)', marginBottom: '8px' }}>
              <Link to="/" style={{ color: 'var(--cinza-medio)', textDecoration: 'none' }}>Início</Link>
              {' '}/ <span style={{ color: 'var(--laranja)' }}>Figuras Notáveis</span>
            </p>
            <h1 className="text-section" style={{ color: 'var(--white)', marginBottom: '8px' }}>
              Figuras Notáveis
            </h1>
            <p className="text-body" style={{ color: 'var(--cinza-texto)', maxWidth: '480px' }}>
              Pessoas que dedicaram suas vidas a construir, defender e enriquecer o Alto do Cabrito.
            </p>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 16px' }}>
        {/* Search + filters */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '28px', flexWrap: 'wrap' }}>
          <div
            style={{
              flex: 1,
              minWidth: '200px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'var(--preto-card)',
              border: '1px solid var(--cinza-borda)',
              borderRadius: 'var(--radius-md)',
              padding: '0 14px',
            }}
          >
            <Search size={16} style={{ color: 'var(--cinza-medio)', flexShrink: 0 }} />
            <input
              type="search"
              placeholder="Buscar figuras notáveis..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              style={{
                flex: 1,
                background: 'none',
                border: 'none',
                outline: 'none',
                color: 'var(--white)',
                fontFamily: 'var(--font-primary)',
                fontSize: '14px',
                padding: '12px 0',
              }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              style={{
                padding: '8px 14px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: filtro === cat ? 'var(--laranja)' : 'var(--cinza-card-bg)',
                color: filtro === cat ? 'var(--preto)' : 'var(--cinza-texto)',
                border: filtro === cat ? 'none' : '1px solid var(--cinza-borda)',
                fontSize: '13px',
                fontWeight: 600,
                fontFamily: 'var(--font-primary)',
                cursor: 'pointer',
                transition: 'all 200ms',
              }}
            >
              {cat === 'Todas' ? 'Todas' : (categoriaLabel[cat] ?? cat)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '16px' }}
          className="sm:grid-cols-2 lg:grid-cols-3"
        >
          {isLoading && (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px 0', color: 'var(--cinza-medio)', fontFamily: 'var(--font-primary)' }}>
              Carregando...
            </div>
          )}
          {filtered.map((figura, i) => {
            const foto = figura._embedded?.['wp:featuredmedia']?.[0]?.source_url
              ?? figura.acf.foto?.url
              ?? ''
            return (
            <motion.div
              key={figura.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link to={`/figuras-notaveis/${figura.slug}`} style={{ textDecoration: 'none' }}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: 'var(--preto-card)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '24px',
                    border: '1px solid var(--cinza-borda)',
                    display: 'flex',
                    gap: '16px',
                    cursor: 'pointer',
                    transition: 'border-color 200ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,157,0,0.4)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--cinza-borda)')}
                >
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: 'var(--radius-full)',
                      overflow: 'hidden',
                      flexShrink: 0,
                      border: '2px solid var(--cinza-borda)',
                    }}
                  >
                    <ImageWithFallback
                      src={foto}
                      alt={figura.title.rendered}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <span
                      style={{
                        display: 'inline-block',
                        backgroundColor: 'rgba(255,157,0,0.15)',
                        color: 'var(--laranja)',
                        fontSize: '10px',
                        fontWeight: 600,
                        fontFamily: 'var(--font-primary)',
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-full)',
                        marginBottom: '6px',
                      }}
                    >
                      {categoriaLabel[figura.acf.area_atuacao] ?? figura.acf.area_atuacao}
                    </span>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: 'var(--white)',
                        fontFamily: 'var(--font-primary)',
                        lineHeight: 1.3,
                        marginBottom: '4px',
                      }}
                    >
                      {figura.title.rendered}
                    </h3>
                    <p
                      style={{
                        fontSize: '12px',
                        color: 'var(--cinza-medio)',
                        fontFamily: 'var(--font-primary)',
                        marginBottom: '8px',
                      }}
                    >
                      {figura.acf.periodo}
                    </p>
                    <p
                      style={{
                        fontSize: '13px',
                        color: 'var(--cinza-texto)',
                        fontFamily: 'var(--font-primary)',
                        lineHeight: 1.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {figura.acf.bio}
                    </p>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '3px',
                        marginTop: '8px',
                        fontSize: '12px',
                        color: 'var(--laranja)',
                        fontFamily: 'var(--font-primary)',
                        fontWeight: 600,
                      }}
                    >
                      Ver perfil <ArrowRight size={11} />
                    </span>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
