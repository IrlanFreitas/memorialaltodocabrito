import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { BookOpen, ArrowRight, Loader } from 'lucide-react'
import { BotaoExplore } from '../components/BotaoExplore'
import { useTimeline } from '../hooks/useTimeline'
import { timelineMock } from '../data/mockData'

export default function HistoriaPage() {
  const { data: wpTimeline, isLoading, isError } = useTimeline()

  /** Normaliza dados do WP ou usa mock como fallback */
  const items = React.useMemo(() => {
    if (wpTimeline && wpTimeline.length > 0) {
      return wpTimeline
        .filter((t) => t.acf?.ativo !== false)
        .sort((a, b) => (a.acf?.ordem ?? 0) - (b.acf?.ordem ?? 0))
        .map((t) => ({
          slug: t.slug,
          ano: t.acf?.ano ?? String(new Date(t.date).getFullYear()),
          titulo: t.title.rendered,
          descricao: t.acf?.descricao ?? t.content.rendered.replace(/<[^>]*>/g, '').slice(0, 200),
          isLast: false,
        }))
    }
    return timelineMock.map((t) => ({
      slug: t.slug,
      ano: t.ano,
      titulo: t.titulo,
      descricao: t.descricao,
      isLast: false,
    }))
  }, [wpTimeline])

  const itemsWithLast = items.map((item, i) => ({ ...item, isLast: i === items.length - 1 }))

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
              {' '}/ <span style={{ color: 'var(--laranja)' }}>Nossa História</span>
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <BookOpen size={28} style={{ color: 'var(--laranja)' }} />
              <h1 className="text-section" style={{ color: 'var(--white)' }}>Nossa História</h1>
            </div>
            <p className="text-body" style={{ color: 'var(--cinza-texto)', maxWidth: '560px' }}>
              Uma breve história do Alto do Cabrito, destacando seus principais marcos, desafios e conquistas,
              desde a formação da comunidade até os dias atuais.
            </p>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px' }}>

        {/* Loading state */}
        {isLoading && (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '48px 0' }}>
            <Loader size={24} style={{ color: 'var(--laranja)', animation: 'spin 1s linear infinite' }} />
          </div>
        )}

        {/* Timeline */}
        {!isLoading && (
          <div style={{ position: 'relative' }}>
            {/* Linha vertical */}
            <div
              style={{
                position: 'absolute',
                left: '20px',
                top: 0,
                bottom: 0,
                width: '2px',
                backgroundColor: 'var(--cinza-borda)',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {itemsWithLast.map((item, i) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                  style={{
                    display: 'flex',
                    gap: '32px',
                    paddingBottom: '40px',
                    paddingLeft: '52px',
                    position: 'relative',
                  }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '12px',
                      top: '4px',
                      width: '18px',
                      height: '18px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: item.isLast ? 'var(--laranja)' : 'var(--preto-soft)',
                      border: `2px solid ${item.isLast ? 'var(--laranja)' : 'var(--cinza-borda)'}`,
                      zIndex: 1,
                      transition: 'all 200ms',
                    }}
                  />

                  {/* Card clicável */}
                  <Link
                    to={`/historia/${item.slug}`}
                    style={{ textDecoration: 'none', flex: 1 }}
                  >
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        padding: '20px 24px',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--cinza-borda)',
                        backgroundColor: 'var(--preto-card)',
                        cursor: 'pointer',
                        transition: 'border-color 200ms, background-color 200ms',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,157,0,0.4)'
                        e.currentTarget.style.backgroundColor = 'var(--preto-soft)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--cinza-borda)'
                        e.currentTarget.style.backgroundColor = 'var(--preto-card)'
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: '12px',
                          fontWeight: 700,
                          color: 'var(--laranja)',
                          fontFamily: 'var(--font-primary)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          marginBottom: '6px',
                        }}
                      >
                        {item.ano}
                      </span>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                        <div style={{ flex: 1 }}>
                          <h3
                            style={{
                              fontSize: '18px',
                              fontWeight: 700,
                              color: 'var(--white)',
                              fontFamily: 'var(--font-primary)',
                              lineHeight: 1.3,
                              marginBottom: '8px',
                            }}
                          >
                            {item.titulo}
                          </h3>
                          <p
                            style={{
                              fontSize: '15px',
                              color: 'var(--cinza-texto)',
                              fontFamily: 'var(--font-primary)',
                              lineHeight: 1.7,
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                            }}
                          >
                            {item.descricao}
                          </p>
                        </div>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: 'var(--laranja)',
                            fontFamily: 'var(--font-primary)',
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                            marginTop: '22px',
                          }}
                        >
                          Ver mais <ArrowRight size={13} />
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginTop: '16px' }}
          >
            <BotaoExplore to="/acervo" label="explorar o acervo histórico" />
          </motion.div>
        )}
      </div>

      {/* CSS animation for the loader */}
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}
