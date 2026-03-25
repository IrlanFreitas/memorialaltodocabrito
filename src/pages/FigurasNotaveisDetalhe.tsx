import React from 'react'
import { useParams, Link } from 'react-router'
import { motion } from 'motion/react'
import { ArrowLeft } from 'lucide-react'
import { figurasNotaveis } from '../data/mockData'
import { ImageWithFallback } from '../figma/ImageWithFallback'

export default function FigurasNotaveisDetalhe() {
  const { id } = useParams()
  const figura = figurasNotaveis.find((f) => f.id === id)

  if (!figura) {
    return (
      <div
        style={{
          backgroundColor: 'var(--preto)',
          minHeight: '100vh',
          paddingTop: '80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
        }}
      >
        <p style={{ fontSize: '24px', fontWeight: 700, color: 'var(--white)', fontFamily: 'var(--font-primary)' }}>
          Figura não encontrada
        </p>
        <Link
          to="/figuras-notaveis"
          style={{
            color: 'var(--laranja)',
            textDecoration: 'none',
            fontSize: '14px',
            fontFamily: 'var(--font-primary)',
            fontWeight: 600,
          }}
        >
          ← Voltar para Figuras Notáveis
        </Link>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: 'var(--preto)', minHeight: '100vh', paddingTop: '80px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 16px' }}>
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: '32px' }}
        >
          <Link
            to="/figuras-notaveis"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--cinza-medio)',
              textDecoration: 'none',
              fontSize: '14px',
              fontFamily: 'var(--font-primary)',
              fontWeight: 500,
              transition: 'color 200ms',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--laranja)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cinza-medio)')}
          >
            <ArrowLeft size={16} />
            Figuras Notáveis
          </Link>
        </motion.div>

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            backgroundColor: 'var(--preto-card)',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            border: '1px solid var(--cinza-borda)',
          }}
        >
          {/* Header with photo */}
          <div
            style={{
              backgroundColor: 'var(--preto-soft)',
              padding: '40px 32px',
              display: 'flex',
              gap: '24px',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              borderBottom: '1px solid var(--cinza-borda)',
            }}
          >
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: 'var(--radius-full)',
                overflow: 'hidden',
                border: '3px solid var(--laranja)',
                flexShrink: 0,
              }}
            >
              <ImageWithFallback
                src={figura.foto}
                alt={figura.nome}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(255,157,0,0.15)',
                  color: 'var(--laranja)',
                  fontSize: '11px',
                  fontWeight: 600,
                  fontFamily: 'var(--font-primary)',
                  padding: '3px 12px',
                  borderRadius: 'var(--radius-full)',
                  marginBottom: '10px',
                  letterSpacing: '0.04em',
                }}
              >
                {figura.categoria}
              </span>
              <h1
                className="text-section"
                style={{ color: 'var(--white)', marginBottom: '4px' }}
              >
                {figura.nome}
              </h1>
              <p style={{ fontSize: '14px', color: 'var(--cinza-medio)', fontFamily: 'var(--font-primary)' }}>
                {figura.periodo}
              </p>
              <p
                style={{
                  marginTop: '8px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--laranja)',
                  fontFamily: 'var(--font-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                {figura.contribuicao}
              </p>
            </div>
          </div>

          {/* Bio */}
          <div style={{ padding: '32px' }}>
            <h2
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--laranja)',
                fontFamily: 'var(--font-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              Biografia
            </h2>
            <p
              className="text-body"
              style={{ color: 'var(--cinza-texto)', lineHeight: 1.8 }}
            >
              {figura.bio}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
