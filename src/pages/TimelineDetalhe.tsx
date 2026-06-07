import React from 'react'
import { useParams, Link } from 'react-router'
import { motion } from 'motion/react'
import { ArrowLeft, Clock, Tag, Image as ImageIcon, Loader } from 'lucide-react'
import { useTimelineDetalhe } from '../hooks/useTimeline'
import { timelineMock } from '../data/mockData'
import { ImageWithFallback } from '../figma/ImageWithFallback'

export default function TimelineDetalhe() {
  const { slug } = useParams<{ slug: string }>()

  const { data: wpItem, isLoading } = useTimelineDetalhe(slug ?? '')

  // --- Normalização: WP ou mock ---
  const item = React.useMemo(() => {
    if (wpItem) {
      const img = wpItem._embedded?.['wp:featuredmedia']?.[0]?.source_url
        ?? wpItem.acf?.imagem?.url
        ?? null

      const galeria: string[] = (wpItem.acf?.galeria ?? [])
        .map((g: { url?: string }) => g?.url)
        .filter(Boolean) as string[]

      const tags: string[] = wpItem.acf?.tags
        ? wpItem.acf.tags.split(',').map((t: string) => t.trim()).filter(Boolean)
        : []

      return {
        slug: wpItem.slug,
        ano: wpItem.acf?.ano ?? String(new Date(wpItem.date).getFullYear()),
        titulo: wpItem.title.rendered,
        descricao: wpItem.acf?.descricao ?? '',
        conteudoHtml: wpItem.acf?.conteudo_completo || wpItem.content.rendered || '',
        imagem: img,
        galeria,
        tags,
      }
    }

    const mock = timelineMock.find((t) => t.slug === slug)
    if (!mock) return null

    return {
      slug: mock.slug,
      ano: mock.ano,
      titulo: mock.titulo,
      descricao: mock.descricao,
      conteudoHtml: mock.conteudoCompleto,
      imagem: mock.imagem,
      galeria: mock.galeria,
      tags: mock.tags,
    }
  }, [wpItem, slug])

  // --- Loading ---
  if (isLoading) {
    return (
      <div style={{ backgroundColor: 'var(--preto)', minHeight: '100vh', paddingTop: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Loader size={28} style={{ color: 'var(--laranja)', animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  // --- Not found ---
  if (!item) {
    return (
      <div style={{ backgroundColor: 'var(--preto)', minHeight: '100vh', paddingTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
        <p style={{ fontSize: '24px', fontWeight: 700, color: 'var(--white)', fontFamily: 'var(--font-primary)' }}>
          Marco histórico não encontrado
        </p>
        <Link
          to="/historia"
          style={{ color: 'var(--laranja)', textDecoration: 'none', fontSize: '14px', fontFamily: 'var(--font-primary)', fontWeight: 600 }}
        >
          ← Voltar para Nossa História
        </Link>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: 'var(--preto)', minHeight: '100vh', paddingTop: '80px' }}>
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '40px 16px 64px' }}>

        {/* Breadcrumb / Voltar */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} style={{ marginBottom: '32px' }}>
          <Link
            to="/historia"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--cinza-medio)', textDecoration: 'none', fontSize: '14px', fontFamily: 'var(--font-primary)', fontWeight: 500, transition: 'color 200ms' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--laranja)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cinza-medio)')}
          >
            <ArrowLeft size={16} />
            Nossa História
          </Link>
        </motion.div>

        {/* Hero image */}
        {item.imagem && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', marginBottom: '36px', aspectRatio: '16/7' }}
          >
            <ImageWithFallback
              src={item.imagem}
              alt={item.titulo}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </motion.div>
        )}

        {/* Cabeçalho do marco */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          style={{ marginBottom: '32px' }}
        >
          {/* Ano */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <Clock size={14} style={{ color: 'var(--laranja)' }} />
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--laranja)',
                fontFamily: 'var(--font-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              {item.ano}
            </span>
          </div>

          {/* Título */}
          <h1
            className="text-section"
            style={{ color: 'var(--white)', marginBottom: '14px', lineHeight: 1.25 }}
          >
            {item.titulo}
          </h1>

          {/* Lead / resumo */}
          {item.descricao && (
            <p
              style={{
                fontSize: '18px',
                color: 'var(--off-white)',
                fontFamily: 'var(--font-primary)',
                lineHeight: 1.7,
                fontWeight: 500,
                borderLeft: '3px solid var(--laranja)',
                paddingLeft: '16px',
              }}
            >
              {item.descricao}
            </p>
          )}
        </motion.div>

        {/* Divisor */}
        <div style={{ height: '1px', backgroundColor: 'var(--cinza-borda)', marginBottom: '32px' }} />

        {/* Conteúdo completo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: item.conteudoHtml }}
            style={{
              color: 'var(--cinza-texto)',
              fontFamily: 'var(--font-primary)',
              fontSize: '16px',
              lineHeight: 1.85,
              marginBottom: '40px',
            }}
          />
        </motion.div>

        {/* Tags */}
        {item.tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}
          >
            <Tag size={14} style={{ color: 'var(--cinza-medio)', flexShrink: 0 }} />
            {item.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(255,157,0,0.1)',
                  border: '1px solid rgba(255,157,0,0.25)',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--laranja)',
                  fontFamily: 'var(--font-primary)',
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        )}

        {/* Galeria */}
        {item.galeria.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px',
              }}
            >
              <ImageIcon size={14} style={{ color: 'var(--laranja)' }} />
              <h2
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--laranja)',
                  fontFamily: 'var(--font-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Galeria de Imagens
              </h2>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: item.galeria.length === 1 ? '1fr' : 'repeat(2, 1fr)',
                gap: '10px',
              }}
            >
              {item.galeria.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    aspectRatio: '4/3',
                    border: '1px solid var(--cinza-borda)',
                  }}
                >
                  <ImageWithFallback
                    src={img}
                    alt={`${item.titulo} — imagem ${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Navegação: voltar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginTop: '56px', paddingTop: '24px', borderTop: '1px solid var(--cinza-borda)' }}
        >
          <Link
            to="/historia"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--cinza-medio)', textDecoration: 'none', fontSize: '14px', fontFamily: 'var(--font-primary)', fontWeight: 500, transition: 'color 200ms' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--laranja)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cinza-medio)')}
          >
            <ArrowLeft size={16} />
            Ver toda a linha do tempo
          </Link>
        </motion.div>
      </div>

      {/* Estilos para o conteúdo WordPress */}
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .wp-content p { margin-bottom: 20px; }
        .wp-content p:last-child { margin-bottom: 0; }
        .wp-content h2, .wp-content h3 {
          color: var(--white);
          font-family: var(--font-primary);
          font-weight: 700;
          margin: 28px 0 12px;
          line-height: 1.3;
        }
        .wp-content h2 { font-size: 22px; }
        .wp-content h3 { font-size: 18px; }
        .wp-content strong { color: var(--off-white); font-weight: 600; }
        .wp-content em { font-style: italic; }
        .wp-content a { color: var(--laranja); text-decoration: underline; }
        .wp-content ul, .wp-content ol {
          padding-left: 20px;
          margin-bottom: 20px;
        }
        .wp-content li { margin-bottom: 6px; }
        .wp-content blockquote {
          border-left: 3px solid var(--laranja);
          padding-left: 16px;
          margin: 24px 0;
          color: var(--off-white);
          font-style: italic;
        }
      `}</style>
    </div>
  )
}
