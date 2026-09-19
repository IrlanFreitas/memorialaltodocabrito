import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { BookOpen, Clock, Users, HeartHandshake, ArrowRight } from 'lucide-react'

const secoes = [
  {
    to: '/historia/linha-do-tempo',
    icon: Clock,
    titulo: 'Linha do Tempo',
    descricao: 'Os principais marcos, desafios e conquistas do Alto do Cabrito, desde a formação da comunidade até os dias atuais.',
  },
  {
    to: '/historia/figuras-notaveis',
    icon: Users,
    titulo: 'Figuras Notáveis',
    descricao: 'Pessoas que fizeram — e fazem — a história do bairro em diferentes áreas de atuação.',
  },
  {
    to: '/historia/grupo-comunitario',
    icon: HeartHandshake,
    titulo: 'Grupo Comunitário',
    descricao: 'Quem mantém viva a memória do Alto do Cabrito: missão, visão, valores e equipe.',
  },
]

export default function HistoriaHubPage() {
  return (
    <div style={{ backgroundColor: 'var(--preto)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Header */}
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
              {' '}/ <span style={{ color: 'var(--laranja)' }}>Nossa História</span>
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <BookOpen size={28} style={{ color: 'var(--laranja)' }} />
              <h1 className="text-section" style={{ color: 'var(--white)' }}>Nossa História</h1>
            </div>
            <p className="text-body" style={{ color: 'var(--cinza-texto)', maxWidth: '560px' }}>
              Conheça a trajetória do Alto do Cabrito por três caminhos: a linha do tempo da comunidade,
              as figuras notáveis que a marcaram e o grupo comunitário que mantém essa memória viva.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cards de navegação */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}
          className="md:grid-cols-3"
        >
          {secoes.map((secao, i) => {
            const Icon = secao.icon
            return (
              <motion.div
                key={secao.to}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to={secao.to} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      height: '100%',
                      padding: '28px 24px',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--cinza-borda)',
                      backgroundColor: 'var(--preto-card)',
                      cursor: 'pointer',
                      transition: 'border-color 200ms, background-color 200ms',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,157,0,0.4)'
                      e.currentTarget.style.backgroundColor = 'var(--preto-soft)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--cinza-borda)'
                      e.currentTarget.style.backgroundColor = 'var(--preto-card)'
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'rgba(255,157,0,0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '18px',
                      }}
                    >
                      <Icon size={22} style={{ color: 'var(--laranja)' }} />
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--white)', fontFamily: 'var(--font-primary)', marginBottom: '8px' }}>
                      {secao.titulo}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--cinza-texto)', fontFamily: 'var(--font-primary)', lineHeight: 1.6, marginBottom: '16px' }}>
                      {secao.descricao}
                    </p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: 600, color: 'var(--laranja)', fontFamily: 'var(--font-primary)' }}>
                      Explorar <ArrowRight size={13} />
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
