import React, { useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Search, Calendar, Newspaper, ArrowRight } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { useHemeroteca } from '../hooks/useHemeroteca'

export default function HemerotecaPage() {
  const [busca, setBusca] = useState('')
  const { data, isLoading } = useHemeroteca()

  const filtered = (data ?? []).filter(
    (item) =>
      !busca ||
      item.title.rendered.toLowerCase().includes(busca.toLowerCase()) ||
      (item.acf.veiculo ?? '').toLowerCase().includes(busca.toLowerCase()),
  )

  return (
    <div style={{ backgroundColor: 'var(--preto)', minHeight: '100vh', paddingTop: '80px' }}>
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
              {' '}/ <span style={{ color: 'var(--laranja)' }}>Hemeroteca</span>
            </p>
            <h1 className="text-section" style={{ color: 'var(--white)', marginBottom: '8px' }}>
              Hemeroteca
            </h1>
            <p className="text-body" style={{ color: 'var(--cinza-texto)', maxWidth: '480px' }}>
              Recortes de mídia, reportagens e notícias que documentam a presença do Alto do Cabrito nos veículos de comunicação.
            </p>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 16px' }}>
        {/* Search */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: 'var(--preto-card)',
            border: '1px solid var(--cinza-borda)',
            borderRadius: 'var(--radius-md)',
            padding: '0 14px',
            marginBottom: '28px',
            maxWidth: '480px',
          }}
        >
          <Search size={16} style={{ color: 'var(--cinza-medio)', flexShrink: 0 }} />
          <input
            type="search"
            placeholder="Buscar por título ou veículo..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              outline: 'none',
              color: 'var(--white)',
              fontFamily: 'var(--font-primary)',
              fontSize: '14px',
              padding: '12px 0',
            }}
          />
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px' }}
          className="sm:grid-cols-2 lg:grid-cols-3"
        >
          {isLoading && (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px 0', color: 'var(--cinza-medio)', fontFamily: 'var(--font-primary)' }}>
              Carregando...
            </div>
          )}
          {filtered.map((item, i) => {
            const img = item._embedded?.['wp:featuredmedia']?.[0]?.source_url
              ?? item.acf.imagem_recorte?.url
              ?? ''
            return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              style={{
                backgroundColor: 'var(--preto-card)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--cinza-borda)',
                cursor: 'pointer',
                transition: 'border-color 200ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,157,0,0.4)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--cinza-borda)')}
            >
              <div style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5 }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <ImageWithFallback
                    src={img}
                    alt={item.title.rendered}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      filter: 'grayscale(20%)',
                    }}
                  />
                </motion.div>
                <div
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    borderRadius: 'var(--radius-full)',
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Newspaper size={12} style={{ color: 'var(--laranja)' }} />
                </div>
              </div>
              <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--laranja)',
                      fontFamily: 'var(--font-primary)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.acf.veiculo}
                  </span>
                  <span style={{ color: 'var(--cinza-borda)' }}>·</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: 'var(--cinza-medio)' }}>
                    <Calendar size={10} />
                    <span style={{ fontSize: '11px', fontFamily: 'var(--font-primary)' }}>{item.acf.data_publicacao}</span>
                  </div>
                </div>
                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: 'var(--white)',
                    fontFamily: 'var(--font-primary)',
                    lineHeight: 1.4,
                    marginBottom: '8px',
                  }}
                >
                  {item.title.rendered}
                </h3>
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
                  }}
                >
                  {item.acf.resumo}
                </p>
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
                  Ver recorte <ArrowRight size={11} />
                </span>
              </div>
            </motion.article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
