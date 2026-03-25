import React, { useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { ArrowRight, CheckCircle, Loader } from 'lucide-react'
import { projetos } from '../data/mockData'
import { ImageWithFallback } from '../figma/ImageWithFallback'

const statusLabels = {
  em_andamento: 'Em andamento',
  concluido: 'Concluído',
  planejado: 'Planejado',
}

export default function ProjetosPage() {
  const [filtro, setFiltro] = useState<string>('todos')

  const filtered = filtro === 'todos' ? projetos : projetos.filter((p) => p.status === filtro)

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
              {' '}/ <span style={{ color: 'var(--laranja)' }}>Projetos</span>
            </p>
            <h1 className="text-section" style={{ color: 'var(--white)', marginBottom: '8px' }}>Projetos</h1>
            <p className="text-body" style={{ color: 'var(--cinza-texto)', maxWidth: '480px' }}>
              Iniciativas realizadas e em andamento pelo Grupo Comunitário Memorial Alto do Cabrito.
            </p>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 16px' }}>
        {/* Filters */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' }}>
          {['todos', 'em_andamento', 'concluido'].map((s) => (
            <button
              key={s}
              onClick={() => setFiltro(s)}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: filtro === s ? 'var(--laranja)' : 'var(--cinza-card-bg)',
                color: filtro === s ? 'var(--preto)' : 'var(--cinza-texto)',
                border: filtro === s ? 'none' : '1px solid var(--cinza-borda)',
                fontSize: '13px',
                fontWeight: 600,
                fontFamily: 'var(--font-primary)',
                cursor: 'pointer',
                transition: 'all 200ms',
              }}
            >
              {s === 'todos' ? 'Todos' : statusLabels[s as keyof typeof statusLabels]}
            </button>
          ))}
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px' }}
          className="sm:grid-cols-2 lg:grid-cols-2"
        >
          {filtered.map((projeto, i) => (
            <motion.div
              key={projeto.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link to={`/projetos/${projeto.id}`} style={{ textDecoration: 'none' }}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: 'var(--preto-card)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    border: '1px solid var(--cinza-borda)',
                    display: 'flex',
                    cursor: 'pointer',
                    transition: 'border-color 200ms',
                  }}
                  className="sm:flex-row"
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,157,0,0.4)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--cinza-borda)')}
                >
                  <div style={{ width: '160px', flexShrink: 0, overflow: 'hidden' }}>
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.5 }}
                      style={{ width: '100%', height: '100%' }}
                    >
                      <ImageWithFallback
                        src={projeto.imagem}
                        alt={projeto.titulo}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '120px' }}
                      />
                    </motion.div>
                  </div>
                  <div style={{ padding: '16px', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '10px',
                          fontWeight: 700,
                          color: projeto.status === 'em_andamento' ? 'var(--laranja)' : '#22c55e',
                          fontFamily: 'var(--font-primary)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {projeto.status === 'concluido' ? <CheckCircle size={10} /> : <Loader size={10} />}
                        {statusLabels[projeto.status]}
                      </span>
                      <span style={{ color: 'var(--cinza-borda)' }}>·</span>
                      <span style={{ fontSize: '12px', color: 'var(--cinza-medio)', fontFamily: 'var(--font-primary)' }}>
                        {projeto.ano}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: 'var(--white)',
                        fontFamily: 'var(--font-primary)',
                        lineHeight: 1.3,
                        marginBottom: '6px',
                      }}
                    >
                      {projeto.titulo}
                    </h3>
                    <p
                      style={{
                        fontSize: '13px',
                        color: 'var(--cinza-texto)',
                        fontFamily: 'var(--font-primary)',
                        lineHeight: 1.5,
                        marginBottom: '10px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {projeto.descricao}
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
                      Ver projeto <ArrowRight size={11} />
                    </span>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
