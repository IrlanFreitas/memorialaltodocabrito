import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { BotaoExplore } from './BotaoExplore'
import { useFiguras } from '../hooks/useFiguras'

export default function FigurasNotaveis() {
  const { data } = useFiguras()
  const destaque = (data ?? []).filter((f) => f.acf.destaque_home).slice(0, 4)

  return (
    <section
      style={{
        backgroundColor: 'var(--preto)',
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
          style={{ textAlign: 'center', marginBottom: '36px' }}
        >
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
            Pessoas que fizeram história
          </p>
          <h2
            className="text-section"
            style={{ color: 'var(--white)', marginBottom: '12px' }}
          >
            Descubra Pessoas Notáveis
          </h2>
          <p
            className="text-body"
            style={{
              color: 'var(--cinza-texto)',
              maxWidth: '480px',
              margin: '0 auto',
            }}
          >
            Conheça as figuras que moldaram a história, a cultura e a identidade do Alto do Cabrito.
          </p>
        </motion.div>

        {/* Cards — horizontal scroll on mobile, grid on desktop */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
          }}
          className="sm:grid-cols-2 lg:grid-cols-4"
        >
          {destaque.map((figura, i) => {
            const foto = figura._embedded?.['wp:featuredmedia']?.[0]?.source_url
              ?? figura.acf.foto?.url
              ?? ''
            return (
            <motion.div
              key={figura.id}
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
                to={`/figuras-notaveis/${figura.slug}`}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: 'var(--preto-card)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '20px 16px',
                    border: '1px solid var(--cinza-borda)',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'border-color 200ms',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,157,0,0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--cinza-borda)'
                  }}
                >
                  {/* Avatar */}
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: 'var(--radius-full)',
                      overflow: 'hidden',
                      margin: '0 auto 12px',
                      border: '2px solid var(--cinza-borda)',
                    }}
                  >
                    <ImageWithFallback
                      src={foto}
                      alt={figura.title.rendered}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </div>

                  {/* Category badge */}
                  <span
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(255,157,0,0.15)',
                      color: 'var(--laranja)',
                      fontSize: '10px',
                      fontWeight: 600,
                      fontFamily: 'var(--font-primary)',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-full)',
                      marginBottom: '8px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {figura.acf.area_atuacao}
                  </span>

                  {/* Name */}
                  <h3
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--white)',
                      fontFamily: 'var(--font-primary)',
                      lineHeight: 1.3,
                      marginBottom: '4px',
                    }}
                  >
                    {figura.title.rendered}
                  </h3>

                  {/* Period */}
                  <p
                    style={{
                      fontSize: '12px',
                      color: 'var(--cinza-medio)',
                      fontFamily: 'var(--font-primary)',
                      marginBottom: '10px',
                    }}
                  >
                    {figura.acf.periodo}
                  </p>

                  {/* Bio */}
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

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                      marginTop: '12px',
                      color: 'var(--laranja)',
                      fontSize: '12px',
                      fontWeight: 600,
                      fontFamily: 'var(--font-primary)',
                    }}
                  >
                    Saiba mais <ArrowRight size={12} />
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
          <BotaoExplore to="/figuras-notaveis" label="ver todas as figuras notáveis" />
        </motion.div>
      </div>
    </section>
  )
}
