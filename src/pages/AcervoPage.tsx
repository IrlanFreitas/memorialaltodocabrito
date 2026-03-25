import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Search, Filter, Tag, Calendar } from 'lucide-react'
import { acervoItems } from '../data/mockData'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { Link } from 'react-router'

const categorias = ['Todas', 'Fotografia', 'Documento']

export default function AcervoPage() {
  const [filtro, setFiltro] = useState('Todas')
  const [busca, setBusca] = useState('')

  const filtered = acervoItems.filter((item) => {
    const matchCat = filtro === 'Todas' || item.categoria === filtro
    const matchBusca =
      !busca ||
      item.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      item.descricao.toLowerCase().includes(busca.toLowerCase())
    return matchCat && matchBusca
  })

  return (
    <div style={{ backgroundColor: 'var(--preto)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Page header */}
      <div
        style={{
          backgroundColor: 'var(--preto-soft)',
          borderBottom: '1px solid var(--cinza-borda)',
          padding: '40px 16px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
              <Link
                to="/"
                style={{ color: 'var(--cinza-medio)', textDecoration: 'none' }}
              >
                Início
              </Link>
              {' '}/{' '}
              <span style={{ color: 'var(--laranja)' }}>Acervo</span>
            </p>
            <h1 className="text-section" style={{ color: 'var(--white)', marginBottom: '8px' }}>
              Acervo Digital
            </h1>
            <p
              className="text-body"
              style={{ color: 'var(--cinza-texto)', maxWidth: '480px' }}
            >
              Fotografias, documentos e registros históricos que preservam a memória do Alto do Cabrito.
            </p>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 16px' }}>
        {/* Search + Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: 'flex', gap: '12px', marginBottom: '28px', flexWrap: 'wrap' }}
        >
          <div
            style={{
              flex: 1,
              minWidth: '200px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'var(--preto-card)',
              border: '1px solid var(--cinza-borda)',
              borderRadius: 'var(--radius-md)',
              padding: '0 14px',
            }}
          >
            <Search size={16} style={{ color: 'var(--cinza-medio)', flexShrink: 0 }} />
            <input
              type="search"
              placeholder="Buscar no acervo..."
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
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Filter size={16} style={{ color: 'var(--cinza-medio)' }} />
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltro(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: filtro === cat ? 'var(--laranja)' : 'var(--cinza-card-bg)',
                  color: filtro === cat ? 'var(--preto)' : 'var(--cinza-texto)',
                  border: filtro === cat ? 'none' : '1px solid var(--cinza-borda)',
                  fontSize: '13px',
                  fontWeight: 600,
                  fontFamily: 'var(--font-primary)',
                  cursor: 'pointer',
                  transition: 'all 200ms',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Count */}
        <p
          style={{
            fontSize: '13px',
            color: 'var(--cinza-medio)',
            fontFamily: 'var(--font-primary)',
            marginBottom: '20px',
          }}
        >
          {filtered.length} {filtered.length === 1 ? 'item encontrado' : 'itens encontrados'}
        </p>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '20px',
          }}
          className="sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((item, i) => (
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
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = 'rgba(255,157,0,0.4)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = 'var(--cinza-borda)')
              }
            >
              <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5 }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <ImageWithFallback
                    src={item.imagem}
                    alt={item.titulo}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </motion.div>
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    backgroundColor: 'rgba(0,0,0,0.75)',
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
                    }}
                  >
                    {item.categoria}
                  </span>
                </div>
              </div>
              <div style={{ padding: '16px' }}>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
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
                  {item.descricao}
                </p>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--cinza-medio)' }}
                >
                  <Calendar size={12} />
                  <span style={{ fontSize: '12px', fontFamily: 'var(--font-primary)', fontWeight: 500 }}>
                    {item.periodo}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--cinza-medio)' }}>
            <p style={{ fontSize: '16px', fontFamily: 'var(--font-primary)' }}>
              Nenhum item encontrado com esses filtros.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
