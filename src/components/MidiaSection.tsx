import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Camera, Video, Headphones, ArrowRight, Play } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { BotaoExplore } from './BotaoExplore'
import { useMidia } from '../hooks/useMidia'

const subcatIcon: Record<string, React.ReactNode> = {
  fototeca: <Camera size={12} style={{ color: 'var(--laranja)' }} />,
  videoteca: <Video size={12} style={{ color: 'var(--laranja)' }} />,
  audioteca: <Headphones size={12} style={{ color: 'var(--laranja)' }} />,
}

export default function MidiaSection() {
  const { data } = useMidia()
  const destaque = (data ?? []).filter((item) => item.acf.destaque).slice(0, 4)

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
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            marginBottom: '32px', flexWrap: 'wrap', gap: '12px',
          }}
        >
          <div>
            <p
              style={{
                fontSize: '11px', fontWeight: 600, color: 'var(--laranja)',
                fontFamily: 'var(--font-primary)', textTransform: 'uppercase',
                letterSpacing: '0.12em', marginBottom: '8px',
              }}
            >
              Fototeca · Videoteca · Audioteca
            </p>
            <h2 className="text-section" style={{ color: 'var(--white)' }}>
              Mídia
            </h2>
          </div>
          <Link
            to="/midia"
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              color: 'var(--laranja)', fontSize: '14px', fontWeight: 600,
              fontFamily: 'var(--font-primary)', textDecoration: 'none',
              transition: 'opacity 200ms',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Ver todos <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Cards */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '16px' }}
          className="sm:grid-cols-2 lg:grid-cols-4"
        >
          {destaque.map((item, i) => {
            const imgUrl = item._embedded?.['wp:featuredmedia']?.[0]?.source_url
              ?? item.acf.imagem_principal?.url
              ?? ''
            const isMedia = item.acf.subcategoria !== 'fototeca'
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
              >
                <Link to="/midia" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <motion.article
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      backgroundColor: 'var(--preto-card)', borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden', border: '1px solid var(--cinza-borda)',
                      height: '100%', display: 'flex', flexDirection: 'column',
                    }}
                  >
                    <div
                      style={{
                        aspectRatio: '4/3', overflow: 'hidden',
                        position: 'relative', backgroundColor: 'var(--preto-card)',
                      }}
                    >
                      <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%' }}>
                        <ImageWithFallback
                          src={imgUrl}
                          alt={item.title.rendered}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                      </motion.div>
                      {/* Badge subcategoria */}
                      <div
                        style={{
                          position: 'absolute', top: '8px', left: '8px',
                          backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: 'var(--radius-full)',
                          width: '28px', height: '28px',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}
                      >
                        {subcatIcon[item.acf.subcategoria]}
                      </div>
                      {/* Play overlay */}
                      {isMedia && (
                        <div
                          style={{
                            position: 'absolute', inset: 0,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            background: 'rgba(0,0,0,0.25)',
                          }}
                        >
                          <div
                            style={{
                              width: '36px', height: '36px', borderRadius: '50%',
                              backgroundColor: 'rgba(255,157,0,0.85)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}
                          >
                            <Play size={14} style={{ color: 'var(--preto)' }} />
                          </div>
                        </div>
                      )}
                    </div>

                    <div style={{ padding: '14px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h3
                        style={{
                          fontSize: '14px', fontWeight: 600, color: 'var(--white)',
                          fontFamily: 'var(--font-primary)', lineHeight: 1.4, marginBottom: '8px', flex: 1,
                          display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                        }}
                      >
                        {item.title.rendered}
                      </h3>
                      <span
                        style={{
                          fontSize: '12px', color: 'var(--laranja)', fontFamily: 'var(--font-primary)',
                          fontWeight: 600, display: 'flex', alignItems: 'center', gap: '3px',
                        }}
                      >
                        {item.acf.subcategoria === 'fototeca' ? 'Ver imagem' : item.acf.subcategoria === 'videoteca' ? 'Assistir' : 'Ouvir'}
                        <ArrowRight size={11} />
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
          <BotaoExplore to="/midia" label="explorar mídia" />
        </motion.div>
      </div>
    </section>
  )
}
