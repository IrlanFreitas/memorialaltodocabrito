import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Calendar, ArrowRight, Clock } from 'lucide-react'
import { noticias } from '../data/mockData'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { BotaoExplore } from './BotaoExplore'

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
}

function isPast(iso: string) {
  return new Date(iso) < new Date()
}

export default function NoticiasSection() {
  const destaque = noticias.slice(0, 4)

  return (
    <section
      style={{
        backgroundColor: 'var(--preto-soft)',
        padding: '48px 0',
        borderTop: '1px solid var(--cinza-borda)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '12px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div>
            <p
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--laranja)',
                fontFamily: 'var(--font-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '8px',
              }}
            >
              Acontecimentos
            </p>
            <h2 className="text-section" style={{ color: 'var(--white)' }}>
              Notícias
            </h2>
          </div>
          <Link
            to="/noticias"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--laranja)',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'var(--font-primary)',
              textDecoration: 'none',
              transition: 'opacity 200ms',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Ver todas <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex',
            gap: '20px',
            marginBottom: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--white)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: '12px',
                color: 'var(--cinza-texto)',
                fontFamily: 'var(--font-primary)',
              }}
            >
              Próximos/atuais
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--cinza-medio)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: '12px',
                color: 'var(--cinza-texto)',
                fontFamily: 'var(--font-primary)',
              }}
            >
              Eventos passados (ver resumo)
            </span>
          </div>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '16px',
          }}
          className="sm:grid-cols-2 lg:grid-cols-2"
        >
          {destaque.map((noticia, i) => {
            const past = isPast(noticia.data)
            return (
              <motion.div
                key={noticia.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.12,
                }}
              >
                <Link
                  to={`/noticias/${noticia.id}`}
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <motion.article
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      backgroundColor: 'var(--preto-card)',
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      border: '1px solid var(--cinza-borda)',
                      display: 'flex',
                      flexDirection: 'column',
                      opacity: past ? 0.7 : 1,
                      transition: 'opacity 200ms',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '1'
                      e.currentTarget.style.borderColor = past
                        ? 'var(--cinza-borda)'
                        : 'rgba(255,157,0,0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = past ? '0.7' : '1'
                      e.currentTarget.style.borderColor = 'var(--cinza-borda)'
                    }}
                  >
                    {/* Image */}
                    <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
                      <motion.div
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.5 }}
                        style={{ width: '100%', height: '100%' }}
                      >
                        <ImageWithFallback
                          src={noticia.imagem}
                          alt={noticia.titulo}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            filter: past ? 'grayscale(40%)' : 'none',
                          }}
                        />
                      </motion.div>

                      {/* Status badge */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '10px',
                          left: '10px',
                          backgroundColor: past ? 'rgba(0,0,0,0.75)' : 'rgba(255,157,0,0.9)',
                          borderRadius: 'var(--radius-full)',
                          padding: '4px 10px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        {past ? (
                          <Clock size={10} style={{ color: 'var(--cinza-medio)' }} />
                        ) : (
                          <span
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--preto)',
                            }}
                          />
                        )}
                        <span
                          style={{
                            fontSize: '10px',
                            fontWeight: 700,
                            color: past ? 'var(--cinza-medio)' : 'var(--preto)',
                            fontFamily: 'var(--font-primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {past ? 'Passado' : 'Próximo'}
                        </span>
                      </div>

                      {/* Category */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          backgroundColor: 'rgba(0,0,0,0.75)',
                          border: '1px solid var(--cinza-borda)',
                          borderRadius: 'var(--radius-full)',
                          padding: '4px 10px',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '10px',
                            fontWeight: 600,
                            color: 'var(--cinza-texto)',
                            fontFamily: 'var(--font-primary)',
                          }}
                        >
                          {noticia.categoria}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      {/* Date */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          marginBottom: '8px',
                        }}
                      >
                        <Calendar
                          size={12}
                          style={{ color: past ? 'var(--cinza-medio)' : 'var(--laranja)' }}
                        />
                        <span
                          style={{
                            fontSize: '12px',
                            color: past ? 'var(--cinza-medio)' : 'var(--laranja)',
                            fontFamily: 'var(--font-primary)',
                            fontWeight: 500,
                          }}
                        >
                          {formatDate(noticia.data)}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontSize: '16px',
                          fontWeight: 600,
                          color: past ? 'var(--cinza-medio)' : 'var(--white)',
                          fontFamily: 'var(--font-primary)',
                          lineHeight: 1.4,
                          marginBottom: '8px',
                          flex: 1,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {noticia.titulo}
                      </h3>

                      {/* Excerpt */}
                      <p
                        style={{
                          fontSize: '13px',
                          color: 'var(--cinza-texto)',
                          fontFamily: 'var(--font-primary)',
                          lineHeight: 1.5,
                          marginBottom: '12px',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          opacity: past ? 0.7 : 1,
                        }}
                      >
                        {past
                          ? `Resumo: ${noticia.excerpt}`
                          : noticia.excerpt}
                      </p>

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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          style={{ marginTop: '32px', maxWidth: '412px', margin: '32px auto 0' }}
        >
          <BotaoExplore to="/noticias" label="ver todas as notícias" />
        </motion.div>
      </div>
    </section>
  )
}
