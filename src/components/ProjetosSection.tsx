import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { ArrowRight, CheckCircle, Loader } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { BotaoExplore } from './BotaoExplore'
import { useProjetos } from '../hooks/useProjetos'
import { useOpcoes } from '../hooks/useOpcoes'

export default function ProjetosSection() {
  const { data: projetosData } = useProjetos()
  const { data: opcoes } = useOpcoes()
  const destaque = (projetosData ?? []).filter((p) => p.acf.destaque).slice(0, 3)
  const parceiros = opcoes?.parceiros ?? []

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
              Realizações do grupo
            </p>
            <h2 className="text-section" style={{ color: 'var(--white)' }}>
              Projetos Realizados pelo Grupo Comunitário
            </h2>
          </div>
          <Link
            to="/projetos"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--laranja)',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'var(--font-primary)',
              textDecoration: 'none',
              transition: 'opacity 200ms',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Ver todos <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Project cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '16px',
            marginBottom: '48px',
          }}
          className="sm:grid-cols-2 lg:grid-cols-3"
        >
          {destaque.map((projeto, i) => {
            const img = projeto._embedded?.['wp:featuredmedia']?.[0]?.source_url
              ?? projeto.acf.imagem_capa?.url
              ?? ''
            const nomeParceiros = (projeto.acf.parceiros ?? []).map((p) => p.nome)
            return (
            <motion.div
              key={projeto.id}
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
                to={`/projetos/${projeto.slug}`}
                style={{ textDecoration: 'none', display: 'block', height: '100%' }}
              >
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: 'var(--preto-card)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    border: '1px solid var(--cinza-borda)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = 'rgba(255,157,0,0.4)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = 'var(--cinza-borda)')
                  }
                >
                  {/* Image */}
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.5 }}
                      style={{ width: '100%', height: '100%' }}
                    >
                      <ImageWithFallback
                        src={img}
                        alt={projeto.title.rendered}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </motion.div>
                    {/* Status badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor:
                          projeto.acf.status === 'ativo'
                            ? 'rgba(255,157,0,0.85)'
                            : projeto.acf.status === 'concluido'
                              ? 'rgba(34,197,94,0.85)'
                              : 'rgba(99,102,241,0.85)',
                        borderRadius: 'var(--radius-full)',
                        padding: '4px 10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      {projeto.acf.status === 'concluido' ? (
                        <CheckCircle size={10} style={{ color: 'white' }} />
                      ) : (
                        <Loader size={10} style={{ color: 'white' }} />
                      )}
                      <span
                        style={{
                          fontSize: '10px',
                          fontWeight: 700,
                          color:
                            projeto.acf.status === 'ativo' ? 'var(--preto)' : 'white',
                          fontFamily: 'var(--font-primary)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {projeto.acf.status === 'ativo'
                          ? 'Em andamento'
                          : projeto.acf.status === 'concluido'
                            ? 'Concluído'
                            : 'Pausado'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginBottom: '8px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          color: 'var(--cinza-medio)',
                          fontFamily: 'var(--font-primary)',
                        }}
                      >
                        Desde {projeto.acf.ano_inicio}
                      </span>
                    </div>

                    <h3
                      className="text-card-title"
                      style={{
                        color: 'var(--white)',
                        marginBottom: '8px',
                        lineHeight: 1.3,
                        flex: 1,
                      }}
                    >
                      {projeto.title.rendered}
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
                      {projeto.acf.resumo}
                    </p>

                    {/* Partners chips */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '12px' }}>
                      {nomeParceiros.slice(0, 3).map((p) => (
                        <span
                          key={p}
                          style={{
                            fontSize: '10px',
                            fontWeight: 600,
                            color: 'var(--cinza-medio)',
                            fontFamily: 'var(--font-primary)',
                            backgroundColor: 'var(--cinza-card-bg)',
                            border: '1px solid var(--cinza-borda)',
                            borderRadius: 'var(--radius-full)',
                            padding: '2px 8px',
                          }}
                        >
                          {p}
                        </span>
                      ))}
                      {nomeParceiros.length > 3 && (
                        <span
                          style={{
                            fontSize: '10px',
                            fontWeight: 600,
                            color: 'var(--laranja)',
                            fontFamily: 'var(--font-primary)',
                            padding: '2px 4px',
                          }}
                        >
                          +{nomeParceiros.length - 3}
                        </span>
                      )}
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
                      Ver projeto <ArrowRight size={11} />
                    </span>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
            )
          })}
        </div>

        {/* Partners section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            padding: '32px',
            backgroundColor: 'var(--preto-card)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--cinza-borda)',
            marginBottom: '32px',
          }}
        >
          <p
            style={{
              fontSize: '11px',
              fontWeight: 600,
              color: 'var(--laranja)',
              fontFamily: 'var(--font-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            Parceiros & Apoiadores Institucionais
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '8px',
            }}
            className="sm:grid-cols-5 lg:grid-cols-7"
          >
            {parceiros.map((p: { nome: string }, i: number) => (
              <motion.div
                key={p.nome || i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                style={{
                  padding: '10px 6px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--cinza-card-bg)',
                  border: '1px solid var(--cinza-borda)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '52px',
                  textAlign: 'center',
                  transition: 'border-color 200ms, background-color 200ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,157,0,0.4)'
                  e.currentTarget.style.backgroundColor = 'rgba(255,157,0,0.06)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--cinza-borda)'
                  e.currentTarget.style.backgroundColor = 'var(--cinza-card-bg)'
                }}
              >
                <span
                  style={{
                    fontSize: '9px',
                    fontWeight: 700,
                    color: 'var(--cinza-medio)',
                    fontFamily: 'var(--font-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    lineHeight: 1.3,
                  }}
                >
                  {p.nome}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          style={{ maxWidth: '412px', margin: '0 auto' }}
        >
          <BotaoExplore to="/projetos" label="ver todos os projetos" />
        </motion.div>
      </div>
    </section>
  )
}
