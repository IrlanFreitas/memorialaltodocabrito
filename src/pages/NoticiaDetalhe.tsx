import React from 'react'
import { useParams, Link } from 'react-router'
import { motion } from 'motion/react'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { useNoticiaDetalhe } from '../hooks/useNoticias'

function formatDate(iso: string) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })
}

function isPast(iso: string) {
  if (!iso) return false
  return new Date(iso) < new Date()
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '')
}

export default function NoticiaDetalhe() {
  const { id } = useParams()
  const { data: noticia, isLoading } = useNoticiaDetalhe(id ?? '')

  if (isLoading) {
    return (
      <div style={{ backgroundColor: 'var(--preto)', minHeight: '100vh', paddingTop: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'var(--laranja)', fontFamily: 'var(--font-primary)', fontSize: '16px' }}>Carregando...</p>
      </div>
    )
  }

  if (!noticia) {
    return (
      <div style={{ backgroundColor: 'var(--preto)', minHeight: '100vh', paddingTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
        <p style={{ fontSize: '24px', fontWeight: 700, color: 'var(--white)', fontFamily: 'var(--font-primary)' }}>Notícia não encontrada</p>
        <Link to="/noticias" style={{ color: 'var(--laranja)', textDecoration: 'none', fontSize: '14px', fontFamily: 'var(--font-primary)', fontWeight: 600 }}>
          ← Voltar para Notícias
        </Link>
      </div>
    )
  }

  const dataEvento = noticia.acf.data_evento || noticia.date
  const past = isPast(dataEvento)
  const img = noticia._embedded?.['wp:featuredmedia']?.[0]?.source_url
    ?? noticia.acf.imagem_capa?.url
    ?? ''
  const excerptText = stripHtml(noticia.excerpt.rendered)
  const conteudoHtml = noticia.content.rendered

  return (
    <div style={{ backgroundColor: 'var(--preto)', minHeight: '100vh', paddingTop: '80px' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '40px 16px' }}>
        {/* Back */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginBottom: '32px' }}>
          <Link
            to="/noticias"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--cinza-medio)', textDecoration: 'none', fontSize: '14px', fontFamily: 'var(--font-primary)', fontWeight: 500, transition: 'color 200ms' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--laranja)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cinza-medio)')}
          >
            <ArrowLeft size={16} />
            Notícias
          </Link>
        </motion.div>

        {/* Status banner */}
        {past && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              backgroundColor: 'rgba(153,153,153,0.1)',
              border: '1px solid var(--cinza-borda)',
              borderRadius: 'var(--radius-md)',
              padding: '10px 16px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Clock size={14} style={{ color: 'var(--cinza-medio)', flexShrink: 0 }} />
            <p style={{ fontSize: '13px', color: 'var(--cinza-medio)', fontFamily: 'var(--font-primary)' }}>
              Este evento já aconteceu. Abaixo você encontra um resumo do que ocorreu.
            </p>
          </motion.div>
        )}

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', marginBottom: '32px', aspectRatio: '16/9' }}
        >
          <ImageWithFallback
            src={img}
            alt={noticia.title.rendered}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: past ? 'grayscale(20%)' : 'none',
            }}
          />
        </motion.div>

        {/* Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {/* Meta */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {past ? (
                <Clock size={13} style={{ color: 'var(--cinza-medio)' }} />
              ) : (
                <Calendar size={13} style={{ color: 'var(--laranja)' }} />
              )}
              <span
                style={{
                  fontSize: '13px',
                  color: past ? 'var(--cinza-medio)' : 'var(--laranja)',
                  fontFamily: 'var(--font-primary)',
                  fontWeight: 500,
                }}
              >
                {formatDate(dataEvento)}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--cinza-medio)' }}>
              <Tag size={12} />
              <span style={{ fontSize: '13px', fontFamily: 'var(--font-primary)' }}>{noticia.acf.categoria}</span>
            </div>
          </div>

          <h1
            className="text-section"
            style={{ color: past ? 'var(--cinza-texto)' : 'var(--white)', marginBottom: '16px', lineHeight: 1.3 }}
          >
            {noticia.title.rendered}
          </h1>

          {/* Lead */}
          <p
            style={{
              fontSize: '18px',
              color: past ? 'var(--cinza-texto)' : 'var(--off-white)',
              fontFamily: 'var(--font-primary)',
              lineHeight: 1.7,
              marginBottom: '24px',
              fontWeight: 500,
              borderLeft: `3px solid ${past ? 'var(--cinza-borda)' : 'var(--laranja)'}`,
              paddingLeft: '16px',
            }}
          >
            {excerptText}
          </p>

          <div
            style={{
              height: '1px',
              backgroundColor: 'var(--cinza-borda)',
              marginBottom: '24px',
            }}
          />

          {conteudoHtml ? (
            <div
              className="text-body"
              style={{ color: 'var(--cinza-texto)', lineHeight: 1.8 }}
              dangerouslySetInnerHTML={{ __html: conteudoHtml }}
            />
          ) : (
            <p
              className="text-body"
              style={{ color: 'var(--cinza-texto)', lineHeight: 1.8, marginBottom: '16px' }}
            >
              {past
                ? `Este evento aconteceu em ${formatDate(dataEvento)}. ${excerptText}`
                : `Confira os detalhes sobre este próximo evento: ${excerptText}`}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
