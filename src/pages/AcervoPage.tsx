import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { Search, Camera, Video, Headphones, Newspaper, BookOpen, Play, Calendar, ArrowRight } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { Link, useSearchParams } from 'react-router'
import { useAcervo } from '../hooks/useAcervo'
import { useMidia } from '../hooks/useMidia'
import type { WPAcervo, WPMidia } from '../types/cms'

type Aba = 'todas' | 'fototeca' | 'videoteca' | 'audioteca' | 'biblioteca' | 'hemeroteca'
type ItemUnificado = ({ origem: 'acervo' } & WPAcervo) | ({ origem: 'midia' } & WPMidia)

const abaConfig: Record<Exclude<Aba, 'todas'>, { label: string; icon: React.ReactNode; descricao: string }> = {
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
  biblioteca: {
    label: 'Biblioteca',
    icon: <BookOpen size={14} />,
    descricao: 'Livros, teses, livretos, e-books e documentos textuais sobre o Alto do Cabrito.',
  },
  hemeroteca: {
    label: 'Hemeroteca',
    icon: <Newspaper size={14} />,
    descricao: 'Jornais, revistas, recortes de notícias e boletins antigos que documentam o bairro na imprensa.',
  },
}

const tipoLabel: Record<string, string> = {
  jornal: 'Jornal', revista: 'Revista', recorte: 'Recorte', boletim: 'Boletim',
  livro: 'Livro', tese: 'Tese', livreto: 'Livreto', ebook: 'E-book', 'documento-textual': 'Documento',
  'foto-historica': 'Foto Histórica', 'registro-evento': 'Registro de Evento', 'imagem-comunidade': 'Imagem da Comunidade',
  documentario: 'Documentário', entrevista: 'Entrevista', espetaculo: 'Espetáculo', reportagem: 'Reportagem',
  podcast: 'Podcast', 'depoimento-audio': 'Depoimento', 'historia-oral': 'História Oral', 'trilha-sonora': 'Trilha Sonora',
}

const bibliotecaTipos = ['Todos', 'livro', 'tese', 'livreto', 'ebook', 'documento-textual']

function getAba(item: ItemUnificado): Exclude<Aba, 'todas'> {
  if (item.origem === 'midia') return item.acf.subcategoria
  return item.acf.categoria
}

export default function AcervoPage() {
  const [searchParams] = useSearchParams()
  const tabParam = searchParams.get('tab') as Aba | null
  const [aba, setAba] = useState<Aba>(tabParam && tabParam in abaConfig ? tabParam : 'todas')
  const [bibliotecaTipo, setBibliotecaTipo] = useState('Todos')
  const [busca, setBusca] = useState('')

  useEffect(() => {
    if (tabParam && tabParam in abaConfig) setAba(tabParam)
  }, [tabParam])

  const { data: acervoData, isLoading: acervoLoading } = useAcervo()
  const { data: midiaData, isLoading: midiaLoading } = useMidia()
  const isLoading = acervoLoading || midiaLoading

  const itens: ItemUnificado[] = useMemo(() => [
    ...(acervoData ?? []).map((item) => ({ origem: 'acervo' as const, ...item })),
    ...(midiaData ?? []).map((item) => ({ origem: 'midia' as const, ...item })),
  ], [acervoData, midiaData])

  const filtered = itens.filter((item) => {
    const itemAba = getAba(item)
    const matchAba = aba === 'todas' || itemAba === aba
    const matchBiblioteca = itemAba !== 'biblioteca' || bibliotecaTipo === 'Todos' || item.acf.tipo === bibliotecaTipo
    const matchBusca =
      !busca ||
      item.title.rendered.toLowerCase().includes(busca.toLowerCase()) ||
      (item.acf.descricao ?? '').toLowerCase().includes(busca.toLowerCase()) ||
      (item.origem === 'acervo' && (item.acf.veiculo ?? '').toLowerCase().includes(busca.toLowerCase())) ||
      (item.origem === 'acervo' && (item.acf.autor ?? '').toLowerCase().includes(busca.toLowerCase()))
    return matchAba && matchBiblioteca && matchBusca
  })

  return (
    <div style={{ backgroundColor: 'var(--preto)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Page header */}
      <div style={{ backgroundColor: 'var(--preto-soft)', borderBottom: '1px solid var(--cinza-borda)', padding: '40px 16px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--cinza-medio)', fontFamily: 'var(--font-primary)', marginBottom: '8px' }}>
              <Link to="/" style={{ color: 'var(--cinza-medio)', textDecoration: 'none' }}>Início</Link>
              {' '}/ <span style={{ color: 'var(--laranja)' }}>Acervo</span>
            </p>
            <h1 className="text-section" style={{ color: 'var(--white)', marginBottom: '8px' }}>Acervo Digital</h1>
            <p className="text-body" style={{ color: 'var(--cinza-texto)', maxWidth: '620px' }}>
              Documentação histórica e audiovisual organizada em cinco acervos: <strong style={{ color: 'var(--white)' }}>Fototeca</strong>,{' '}
              <strong style={{ color: 'var(--white)' }}>Videoteca</strong>, <strong style={{ color: 'var(--white)' }}>Audioteca</strong>,{' '}
              <strong style={{ color: 'var(--white)' }}>Biblioteca</strong> e <strong style={{ color: 'var(--white)' }}>Hemeroteca</strong>.
            </p>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 16px' }}>
        {/* Abas principais */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          style={{ display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '1px solid var(--cinza-borda)', flexWrap: 'wrap' }}
        >
          {(['todas', 'fototeca', 'videoteca', 'audioteca', 'biblioteca', 'hemeroteca'] as Aba[]).map((a) => (
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

        {/* Conteúdo (article) — largura de leitura, centralizado */}
        <div className="@container" style={{ maxWidth: '800px', margin: '0 auto' }}>

        {/* Descrição da aba ativa */}
        {aba !== 'todas' && (
          <motion.p
            key={aba}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ fontSize: '13px', color: 'var(--cinza-texto)', fontFamily: 'var(--font-primary)', marginBottom: '16px' }}
          >
            {abaConfig[aba].descricao}
          </motion.p>
        )}

        {/* Sub-abas da Biblioteca */}
        {aba === 'biblioteca' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}
          >
            {bibliotecaTipos.map((t) => (
              <button
                key={t}
                onClick={() => setBibliotecaTipo(t)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: bibliotecaTipo === t ? 'var(--laranja)' : 'var(--cinza-card-bg)',
                  color: bibliotecaTipo === t ? 'var(--preto)' : 'var(--cinza-texto)',
                  border: bibliotecaTipo === t ? 'none' : '1px solid var(--cinza-borda)',
                  fontSize: '12px', fontWeight: 600, fontFamily: 'var(--font-primary)',
                  cursor: 'pointer', transition: 'all 200ms',
                }}
              >
                {t === 'Todos' ? 'Todos' : (tipoLabel[t] ?? t)}
              </button>
            ))}
          </motion.div>
        )}

        {/* Busca */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
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
            placeholder="Buscar no acervo..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            style={{
              flex: 1, background: 'none', border: 'none', outline: 'none',
              color: 'var(--white)', fontFamily: 'var(--font-primary)', fontSize: '14px', padding: '12px 0',
            }}
          />
        </motion.div>

        {/* Contagem */}
        <p style={{ fontSize: '13px', color: 'var(--cinza-medio)', fontFamily: 'var(--font-primary)', marginBottom: '20px' }}>
          {isLoading ? 'Carregando...' : `${filtered.length} ${filtered.length === 1 ? 'item encontrado' : 'itens encontrados'}`}
        </p>

        {/* Grid */}
        <div style={{ display: 'grid', gap: '20px' }} className="grid-cols-1 @min-[480px]:grid-cols-2 @min-[700px]:grid-cols-3">
          {filtered.map((item, i) => {
            const itemAba = getAba(item)
            const imgUrl = item._embedded?.['wp:featuredmedia']?.[0]?.source_url
              ?? item.acf.imagem_principal?.url
              ?? ''
            const isHemeroteca = itemAba === 'hemeroteca'
            const isAudioteca = itemAba === 'audioteca'
            const isVideoteca = itemAba === 'videoteca'
            const aspectRatio = isAudioteca ? '1/1' : '16/9'
            const dataLabel = item.origem === 'acervo'
              ? (item.acf.data_aproximada || item.acf.data_exata)
              : (item.acf.data_aproximada || item.acf.data_registro)

            return (
              <motion.article
                key={`${item.origem}-${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                style={{
                  backgroundColor: 'var(--preto-card)', borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden', border: '1px solid var(--cinza-borda)',
                  cursor: 'pointer', transition: 'border-color 200ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,157,0,0.4)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--cinza-borda)')}
              >
                <div style={{ aspectRatio, overflow: 'hidden', position: 'relative' }}>
                  <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%' }}>
                    <ImageWithFallback
                      src={imgUrl}
                      alt={item.title.rendered}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: isHemeroteca ? 'grayscale(20%)' : 'none' }}
                    />
                  </motion.div>

                  {/* Badge categoria */}
                  <div
                    style={{
                      position: 'absolute', top: '10px', left: '10px',
                      backgroundColor: 'rgba(0,0,0,0.78)', borderRadius: 'var(--radius-full)',
                      padding: '4px 10px', display: 'flex', alignItems: 'center', gap: '5px',
                    }}
                  >
                    {abaConfig[itemAba].icon}
                    <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--white)', fontFamily: 'var(--font-primary)' }}>
                      {tipoLabel[item.acf.tipo] ?? item.acf.tipo}
                    </span>
                  </div>

                  {/* Overlay play/áudio */}
                  {(isVideoteca || isAudioteca) && (
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(255,157,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {isVideoteca ? <Play size={18} style={{ color: 'var(--preto)' }} /> : <Headphones size={18} style={{ color: 'var(--preto)' }} />}
                      </div>
                    </div>
                  )}
                </div>

                <div style={{ padding: '16px' }}>
                  {item.origem === 'acervo' && isHemeroteca && item.acf.veiculo && (
                    <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--laranja)', fontFamily: 'var(--font-primary)', textTransform: 'uppercase', marginBottom: '6px' }}>
                      {item.acf.veiculo}
                    </p>
                  )}
                  {item.origem === 'acervo' && itemAba === 'biblioteca' && item.acf.autor && (
                    <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--cinza-medio)', fontFamily: 'var(--font-primary)', marginBottom: '6px' }}>
                      {item.acf.autor}{item.acf.ano_publicacao && ` — ${item.acf.ano_publicacao}`}
                    </p>
                  )}
                  {item.origem === 'midia' && item.acf.duracao && (
                    <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--laranja)', fontFamily: 'var(--font-primary)', marginBottom: '6px' }}>
                      {item.acf.duracao}{item.acf.diretor_credito && ` · ${item.acf.diretor_credito}`}
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
                      <span style={{ fontSize: '12px', fontFamily: 'var(--font-primary)', fontWeight: 500 }}>{dataLabel}</span>
                    </div>
                    {item.origem === 'midia' && (
                      <span style={{ fontSize: '12px', color: 'var(--laranja)', fontFamily: 'var(--font-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '3px' }}>
                        {itemAba === 'fototeca' ? 'Ver imagem' : itemAba === 'videoteca' ? 'Assistir' : 'Ouvir'}
                        <ArrowRight size={11} />
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {!isLoading && filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--cinza-medio)' }}>
            <p style={{ fontSize: '16px', fontFamily: 'var(--font-primary)' }}>Nenhum item encontrado com esses filtros.</p>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}
