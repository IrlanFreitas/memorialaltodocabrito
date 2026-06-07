import React, { useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Calendar, Clock, ArrowRight, Filter } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { useNoticias } from '../hooks/useNoticias'

function formatDate(iso: string) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}

function isPast(iso: string) {
  if (!iso) return false
  return new Date(iso) < new Date()
}

export default function NoticiaPage() {
  const [filtro, setFiltro] = useState<'todas' | 'passadas' | 'proximas'>('todas')
  const { data, isLoading } = useNoticias()

  const filtered = (data ?? []).filter((n) => {
    const data = n.acf.data_evento || n.date
    if (filtro === 'passadas') return isPast(data)
    if (filtro === 'proximas') return !isPast(data)
    return true
  })

  const sorted = [...filtered].sort((a, b) => {
    const aData = a.acf.data_evento || a.date
    const bData = b.acf.data_evento || b.date
    const aPast = isPast(aData)
    const bPast = isPast(bData)
    if (aPast !== bPast) return aPast ? 1 : -1
    return new Date(bData).getTime() - new Date(aData).getTime()
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--cinza-medio)', fontFamily: 'var(--font-primary)', marginBottom: '8px' }}>
              <Link to="/" style={{ color: 'var(--cinza-medio)', textDecoration: 'none' }}>Início</Link>
              {' '}/ <span style={{ color: 'var(--laranja)' }}>Notícias</span>
            </p>
            <h1 className="text-section" style={{ color: 'var(--white)', marginBottom: '8px' }}>Notícias</h1>
            <p className="text-body" style={{ color: 'var(--cinza-texto)', maxWidth: '480px' }}>
              Acompanhe os acontecimentos, eventos e novidades do Memorial Alto do Cabrito.
            </p>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 16px' }}>
        {/* Filter + Legend */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '12px',
            flexWrap: 'wrap',
          }}
        >
          <Filter size={16} style={{ color: 'var(--cinza-medio)' }} />
          {[
            { key: 'todas', label: 'Todas' },
            { key: 'proximas', label: 'Próximas/Atuais' },
            { key: 'passadas', label: 'Passadas' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFiltro(key as typeof filtro)}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: filtro === key ? 'var(--laranja)' : 'var(--cinza-card-bg)',
                color: filtro === key ? 'var(--preto)' : 'var(--cinza-texto)',
                border: filtro === key ? 'none' : '1px solid var(--cinza-borda)',
                fontSize: '13px',
                fontWeight: 600,
                fontFamily: 'var(--font-primary)',
                cursor: 'pointer',
                transition: 'all 200ms',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <p
          style={{
            fontSize: '12px',
            color: 'var(--cinza-medio)',
            fontFamily: 'var(--font-primary)',
            marginBottom: '24px',
            fontStyle: 'italic',
          }}
        >
          Eventos passados aparecem em cinza — clique para ver o resumo do que aconteceu.
        </p>

        {/* News list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {isLoading && (
            <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--cinza-medio)', fontFamily: 'var(--font-primary)' }}>
              Carregando...
            </div>
          )}
          {sorted.map((noticia, i) => {
            const dataEvento = noticia.acf.data_evento || noticia.date
            const past = isPast(dataEvento)
            const img = noticia._embedded?.['wp:featuredmedia']?.[0]?.source_url
              ?? noticia.acf.imagem_capa?.url
              ?? ''
            return (
              <motion.div
                key={noticia.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link to={`/noticias/${noticia.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <motion.article
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      padding: '20px 0',
                      borderBottom: '1px solid var(--cinza-borda)',
                      opacity: past ? 0.65 : 1,
                      transition: 'opacity 200ms',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = past ? '0.65' : '1')}
                  >
                    {/* Thumbnail */}
                    <div
                      style={{
                        width: '100px',
                        height: '70px',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        flexShrink: 0,
                      }}
                    >
                      <ImageWithFallback
                        src={img}
                        alt={noticia.title.rendered}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          filter: past ? 'grayscale(50%)' : 'none',
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          {past ? (
                            <Clock size={11} style={{ color: 'var(--cinza-medio)' }} />
                          ) : (
                            <Calendar size={11} style={{ color: 'var(--laranja)' }} />
                          )}
                          <span
                            style={{
                              fontSize: '12px',
                              color: past ? 'var(--cinza-medio)' : 'var(--laranja)',
                              fontFamily: 'var(--font-primary)',
                              fontWeight: 500,
                            }}
                          >
                            {formatDate(dataEvento)}
                          </span>
                        </div>
                        <span
                          style={{
                            fontSize: '10px',
                            fontWeight: 600,
                            color: past ? 'var(--cinza-medio)' : 'var(--laranja)',
                            fontFamily: 'var(--font-primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            backgroundColor: past ? 'var(--cinza-card-bg)' : 'rgba(255,157,0,0.12)',
                            padding: '2px 8px',
                            borderRadius: 'var(--radius-full)',
                          }}
                        >
                          {noticia.acf.categoria}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: '16px',
                          fontWeight: 600,
                          color: past ? 'var(--cinza-medio)' : 'var(--white)',
                          fontFamily: 'var(--font-primary)',
                          lineHeight: 1.4,
                          marginBottom: '6px',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {noticia.title.rendered}
                      </h3>

                      <span
                        style={{
                          fontSize: '12px',
                          color: past ? 'var(--cinza-medio)' : 'var(--laranja)',
                          fontFamily: 'var(--font-primary)',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '3px',
                        }}
                      >
                        {past ? 'Ver resumo' : 'Ver detalhes'} <ArrowRight size={11} />
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
