import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Heart, Target, Eye, ArrowRight } from 'lucide-react'
import { grupoInfo } from '../data/mockData'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { BotaoExplore } from './BotaoExplore'

export default function GrupoComunitario() {
  return (
    <section
      style={{
        backgroundColor: 'var(--preto)',
        padding: '48px 0',
        borderTop: '1px solid var(--cinza-borda)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
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
            Quem somos
          </p>
          <h2 className="text-section" style={{ color: 'var(--white)' }}>
            Grupo Comunitário
          </h2>
        </motion.div>

        {/* Main content block */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px',
            alignItems: 'center',
          }}
          className="lg:grid-cols-2"
        >
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', position: 'relative' }}
          >
            <ImageWithFallback
              src={grupoInfo.foto}
              alt="Equipe do Grupo Comunitário Memorial Alto do Cabrito"
              style={{
                width: '100%',
                aspectRatio: '16/9',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(255,157,0,0.1) 0%, transparent 50%)',
                pointerEvents: 'none',
              }}
            />
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <p
              className="text-body"
              style={{
                color: 'var(--cinza-texto)',
                marginBottom: '28px',
                lineHeight: 1.7,
              }}
            >
              {grupoInfo.descricao}
            </p>

            {/* Mission / Vision */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  padding: '16px',
                  backgroundColor: 'var(--cinza-card-bg)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--cinza-borda)',
                }}
              >
                <Target
                  size={20}
                  style={{ color: 'var(--laranja)', flexShrink: 0, marginTop: '2px' }}
                />
                <div>
                  <p
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--laranja)',
                      fontFamily: 'var(--font-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '4px',
                    }}
                  >
                    Missão
                  </p>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--cinza-texto)',
                      fontFamily: 'var(--font-primary)',
                      lineHeight: 1.5,
                    }}
                  >
                    {grupoInfo.missao}
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  padding: '16px',
                  backgroundColor: 'var(--cinza-card-bg)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--cinza-borda)',
                }}
              >
                <Eye
                  size={20}
                  style={{ color: 'var(--laranja)', flexShrink: 0, marginTop: '2px' }}
                />
                <div>
                  <p
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--laranja)',
                      fontFamily: 'var(--font-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '4px',
                    }}
                  >
                    Visão
                  </p>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--cinza-texto)',
                      fontFamily: 'var(--font-primary)',
                      lineHeight: 1.5,
                    }}
                  >
                    {grupoInfo.visao}
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div style={{ marginBottom: '28px' }}>
              <p
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--laranja)',
                  fontFamily: 'var(--font-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '10px',
                }}
              >
                <Heart size={12} />
                Valores
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {grupoInfo.valores.map((v) => (
                  <li
                    key={v}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '14px',
                      color: 'var(--cinza-texto)',
                      fontFamily: 'var(--font-primary)',
                    }}
                  >
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--laranja)',
                        flexShrink: 0,
                      }}
                    />
                    {v}
                  </li>
                ))}
              </ul>
            </div>

            <BotaoExplore to="/sobre" label="conheça o grupo" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
