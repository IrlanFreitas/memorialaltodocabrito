import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { MapPin, Waves, Landmark, Home, Trees, Church } from 'lucide-react'
import MapaSection from '../components/MapaSection'

const pontosImportantes = [
  {
    icon: Waves,
    titulo: 'O Dique',
    descricao: 'Marco central do bairro, ponto de encontro e referência geográfica para quem chega e sai do Alto do Cabrito.',
  },
  {
    icon: Church,
    titulo: 'Igreja da comunidade',
    descricao: 'Espaço de fé, celebrações e articulação comunitária ao longo de gerações.',
  },
  {
    icon: Home,
    titulo: 'Sede do Grupo Comunitário',
    descricao: 'Onde acontecem reuniões, oficinas e a organização das ações do memorial.',
  },
  {
    icon: Trees,
    titulo: 'Áreas de convivência',
    descricao: 'Praças e vielas que historicamente reúnem moradores para lazer e encontros do dia a dia.',
  },
  {
    icon: Landmark,
    titulo: 'Pontos históricos',
    descricao: 'Locais que guardam parte da memória e da formação do bairro ao longo do tempo.',
  },
]

export default function MapaPage() {
  return (
    <div style={{ backgroundColor: 'var(--preto)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Header */}
      <div style={{ backgroundColor: 'var(--preto-soft)', borderBottom: '1px solid var(--cinza-borda)', padding: '40px 16px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--cinza-medio)', fontFamily: 'var(--font-primary)', marginBottom: '8px' }}>
              <Link to="/" style={{ color: 'var(--cinza-medio)', textDecoration: 'none' }}>Início</Link>
              {' '}/ <span style={{ color: 'var(--laranja)' }}>Mapa do Bairro</span>
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <MapPin size={28} style={{ color: 'var(--laranja)' }} />
              <h1 className="text-section" style={{ color: 'var(--white)' }}>Mapa do Bairro</h1>
            </div>
            <p className="text-body" style={{ color: 'var(--cinza-texto)', maxWidth: '560px' }}>
              Um retrato geográfico do Alto do Cabrito: o Dique e os pontos que marcam a história e o cotidiano da comunidade.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mapa embutido */}
      <MapaSection />

      {/* Pontos importantes */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px' }}>
        <p
          style={{
            fontSize: '11px', fontWeight: 600, color: 'var(--laranja)', fontFamily: 'var(--font-primary)',
            textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '20px',
          }}
        >
          Pontos importantes
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }} className="sm:grid-cols-2 lg:grid-cols-3">
          {pontosImportantes.map((ponto, i) => {
            const Icon = ponto.icon
            return (
              <motion.div
                key={ponto.titulo}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                style={{
                  padding: '20px', backgroundColor: 'var(--preto-card)',
                  borderRadius: 'var(--radius-lg)', border: '1px solid var(--cinza-borda)',
                  display: 'flex', gap: '14px',
                }}
              >
                <Icon size={20} style={{ color: 'var(--laranja)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--white)', fontFamily: 'var(--font-primary)', marginBottom: '6px' }}>
                    {ponto.titulo}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--cinza-texto)', fontFamily: 'var(--font-primary)', lineHeight: 1.6 }}>
                    {ponto.descricao}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
