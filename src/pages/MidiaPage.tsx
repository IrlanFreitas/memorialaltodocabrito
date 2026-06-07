import React, { useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Search, Camera, Video, Mic, Play, Headphones, Calendar, ArrowRight } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { useMidia } from '../hooks/useMidia'
import type { WPMidia } from '../types/cms'

type Aba = 'todas' | 'fototeca' | 'videoteca' | 'audioteca'

const abaConfig: Record<string, { label: string; icon: React.ReactNode; descricao: string }> = {
  fototeca: {
    label: 'Fototeca',
    icon: <Camera size={14} />,
    descricao: 'Fotos históricas, registros de eventos e imagens da comunidade ao longo do tempo.',
  },
  videoteca: {
    label: 'Videoteca',
    icon: <Video size={14} />,
    descricao: 'Documentários, entrevistas gravadas, registros de espetáculos e reportagens.',
  },
  audioteca: {
    label: 'Audioteca',
    icon: <Headphones size={14} />,
    descricao: 'Podcasts, depoimentos em áudio, gravações de história oral e trilhas sonoras.',
  },
}

const tipoLabel: Record<string, string> = {
  'foto-historica': 'Foto Histórica',
  'registro-evento': 'Registro de Evento',
  'imagem-comunidade': 'Imagem da Comunidade',
  documentario: 'Documentário',
  entrevista: 'Entrevista',
  espetaculo: 'Espetáculo',
  reportagem: 'Reportagem',
  podcast: 'Podcast',
  'depoimento-audio': 'Depoimento',
  'historia-oral': 'História Oral',
  'trilha-sonora': 'Trilha Sonora',
}

function MediaIcon({ item }: { item: WPMidia }) {
  if (item.acf.subcategoria === 'videoteca') return <Play size={18} style={{ color: 'var(--laranja)' }} />
  if (item.acf.subcategoria === 'audioteca') return <Headphones size={18} style={{ color: 'var(--laranja)' }} />
  return null
}

export default function MidiaPage() {
  const [aba, setAba] = useState<Aba>('todas')
  const [busca, setBusca] = useState('')
  const { data, isLoading } = useMidia()

  const filtered = (data ?? []).filter((item) => {
    const matchAba = aba === 'todas' || item.acf.subcategoria === aba
    const matchBusca =
      !busca ||
      item.title.rendered.toLowerCase().includes(busca.toLowerCase()) ||
      (item.acf.descricao ?? '').toLowerCase().includes(busca.toLowerCase())
    return matchAba && matchBusca
  })

  return (
    <div style={{ backgroundColor: 'var(--preto)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Header */}
      <div style={{ backgroundColor: 'var(--preto-soft)', borderBottom: '1px solid var(--cinza-borda)', padding: '40px 16px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--cinza-medio)', fontFamily: 'var(--font-primary)', marginBottom: '8px' }}>
              <Link to="/" style={{ color: 'var(--cinza-medio)', textDecoration: 'none' }}>Início</Link>
              {' '}/ <span style={{ color: 'var(--laranja)' }}>Mídia</span>
            </p>
            <h1 className="text-section" style={{ color: 'var(--white)', marginBottom: '8px' }}>
              Mídia
            </h1>
            <p className="text-body" style={{ color: 'var(--cinza-texto)', maxWidth: '520px' }}>
              Acervo audiovisual organizado em <strong style={{ color: 'var(--white)' }}>Fototeca</strong>, <strong style={{ color: 'var(--white)' }}>Videoteca</strong> e <strong style={{ color: 'var(--white)' }}>Audioteca</strong>.
            </p>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 16px' }}>
        {/* Abas */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          style={{ display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '1px solid var(--cinza-borda)' }}
        >
          {(['todas', 'fototeca', 'videoteca', 'audioteca'] as Aba[]).map((a) => (
            <button
              key={a}
              onClick={() => setAba(a)}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '10px 18px', background: 'none', border: 'none',
                borderBottom: aba === a ? '2px solid var(--laranja)' : '2px solid transparent',
                color: aba === a ? 'var(--laranja)' : 'var(--cinza-texto)',
                fontFamily: 'var(--font-primary)', fontSize: '14px', fontWeight: 600,
                cursor: 'pointer', marginBottom: '-1px',
                transition: 'color 200ms, border-color 200ms',
              }}
            >
              {a !== 'todas' && abaConfig[a].icon}
              {a === 'todas' ? 'Todas' : abaConfig[a].label}
            </button>
          ))}
        </motion.div>

        {/* Descrição da aba */}
        {aba !== 'todas' && (
          <motion.p
            key={aba}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ fontSize: '13px', color: 'var(--cinza-texto)', fontFamily: 'var(--font-primary)', marginBottom: '20px' }}
          >
            {abaConfig[aba].descricao}
          </motion.p>
        )}

        {/* Busca */}
        <div
          style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            backgroundColor: 'var(--preto-card)', border: '1px solid var(--cinza-borda)',
            borderRadius: 'var(--radius-md)', padding: '0 14px',
            marginBottom: '24px', maxWidth: '440px',
          }}
        >
          <Search size={16} style={{ color: 'var(--cinza-medio)', flexShrink: 0 }} />
          <input
            type="search"
            placeholder="Buscar na mídia..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            style={{
              flex: 1, background: 'none', border: 'none', outline: 'none',
              color: 'var(--white)', fontFamily: 'var(--font-primary)', fontSize: '14px', padding: '12px 0',
            }}
          />
        </div>

        <p style={{ fontSize: '13px', color: 'var(--cinza-medio)', fontFamily: 'var(--font-primary)', marginBottom: '20px' }}>
          {isLoading ? 'Carregando...' : `${filtered.length} ${filtered.length === 1 ? 'item encontrado' : 'itens encontrados'}`}
        </p>

        {/* Grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px' }}
          className="sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((item, i) => {
            const imgUrl = item._embedded?.['wp:featuredmedia']?.[0]?.source_url
              ?? item.acf.imagem_principal?.url
              ?? ''
            const aspectRatio = item.acf.subcategoria === 'audioteca' ? '1/1' : '16/9'
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
                {/* Thumbnail */}
                <div style={{ aspectRatio, overflow: 'hidden', position: 'relative' }}>
                  <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%' }}>
                    <ImageWithFallback
                      src={imgUrl}
                      alt={item.title.rendered}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </motion.div>
                  {/* Badge subcategoria */}
                  <div
                    style={{
                      position: 'absolute', top: '10px', left: '10px',
                      backgroundColor: 'rgba(0,0,0,0.78)',
                      borderRadius: 'var(--radius-full)', padding: '4px 10px',
                      display: 'flex', alignItems: 'center', gap: '5px',
                    }}
                  >
                    {abaConfig[item.acf.subcategoria]?.icon}
                    <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--white)', fontFamily: 'var(--font-primary)' }}>
                      {tipoLabel[item.acf.tipo] ?? item.acf.tipo}
                    </span>
                  </div>
                  {/* Overlay play/áudio */}
                  {(item.acf.subcategoria === 'videoteca' || item.acf.subcategoria === 'audioteca') && (
                    <div
                      style={{
                        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'rgba(0,0,0,0.3)',
                      }}
                    >
                      <div
                        style={{
                          width: '48px', height: '48px', borderRadius: '50%',
                          backgroundColor: 'rgba(255,157,0,0.9)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}
                      >
                        <MediaIcon item={item} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Conteúdo */}
                <div style={{ padding: '16px' }}>
                  {item.acf.duracao && (
                    <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--laranja)', fontFamily: 'var(--font-primary)', marginBottom: '6px' }}>
                      {item.acf.duracao}
                      {item.acf.diretor_credito && ` · ${item.acf.diretor_credito}`}
                    </p>
                  )}
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--white)', fontFamily: 'var(--font-primary)', lineHeight: 1.3, marginBottom: '8px' }}>
                    {item.title.rendered}
                  </h3>
                  <p
                    style={{
                      fontSize: '13px', color: 'var(--cinza-texto)', fontFamily: 'var(--font-primary)',
                      lineHeight: 1.5, marginBottom: '12px',
                      display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                    }}
                  >
                    {item.acf.descricao}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--cinza-medio)' }}>
                      <Calendar size={12} />
                      <span style={{ fontSize: '12px', fontFamily: 'var(--font-primary)', fontWeight: 500 }}>
                        {item.acf.data_aproximada || item.acf.data_registro}
                      </span>
                    </div>
                    <span style={{ fontSize: '12px', color: 'var(--laranja)', fontFamily: 'var(--font-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '3px' }}>
                      {item.acf.subcategoria === 'fototeca' ? 'Ver imagem' : item.acf.subcategoria === 'videoteca' ? 'Assistir' : 'Ouvir'}
                      <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {!isLoading && filtered.length === 0 && (
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
