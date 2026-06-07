import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Calendar, Tag, ArrowRight } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { BotaoAcervo } from './BotaoAcervo'
import { useAcervo } from '../hooks/useAcervo'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true },
}

export default function AcervoSection() {
  const { data } = useAcervo()
  const destaque = (data ?? []).slice(0, 3)

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
          {...fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '32px',
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
              Documentos & Fotografias
            </p>
            <h2 className="text-section" style={{ color: 'var(--white)' }}>
              Acervo
            </h2>
          </div>
          <BotaoAcervo to="/acervo" label="Ver Acervo Completo" variant="outline" />
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '16px',
          }}
          className="sm:grid-cols-2 lg:grid-cols-3"
        >
          {destaque.map((item, i) => {
            const img = item._embedded?.['wp:featuredmedia']?.[0]?.source_url
              ?? item.acf.imagem_principal?.url
              ?? ''
            return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.15,
              }}
            >
              <Link
                to={`/acervo`}
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
                    boxShadow: 'var(--shadow-card)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = 'var(--shadow-card)')
                  }
                >
                  {/* Image */}
                  <div style={{ overflow: 'hidden', position: 'relative', aspectRatio: '16/9' }}>
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.5 }}
                      style={{ width: '100%', height: '100%' }}
                    >
                      <ImageWithFallback
                        src={img}
                        alt={item.title.rendered}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    </motion.div>
                    {/* Category badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor: 'rgba(0,0,0,0.75)',
                        border: '1px solid var(--cinza-borda)',
                        borderRadius: 'var(--radius-full)',
                        padding: '4px 10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Tag size={10} style={{ color: 'var(--laranja)' }} />
                      <span
                        style={{
                          fontSize: '10px',
                          fontWeight: 600,
                          color: 'var(--white)',
                          fontFamily: 'var(--font-primary)',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {item.acf.categoria}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '16px' }}>
                    <h3
                      className="text-card-title"
                      style={{
                        color: 'var(--white)',
                        marginBottom: '8px',
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title.rendered}
                    </h3>
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'var(--cinza-texto)',
                        fontFamily: 'var(--font-primary)',
                        lineHeight: 1.5,
                        marginBottom: '12px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {item.acf.descricao}
                    </p>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          color: 'var(--cinza-medio)',
                        }}
                      >
                        <Calendar size={12} />
                        <span
                          style={{
                            fontSize: '12px',
                            fontFamily: 'var(--font-primary)',
                            fontWeight: 500,
                          }}
                        >
                          {item.acf.data_aproximada || item.acf.data_exata}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: '12px',
                          color: 'var(--laranja)',
                          fontFamily: 'var(--font-primary)',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '3px',
                        }}
                      >
                        Ver item <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
            )
          })}
        </div>

        {/* Mobile bottom CTA */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="sm:hidden"
          style={{ marginTop: '24px' }}
        >
          <BotaoAcervo to="/acervo" label="Ver Acervo Completo" fullWidth />
        </motion.div>
      </div>
    </section>
  )
}
