import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Search, Tag, Calendar, BookOpen, Newspaper } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { Link } from 'react-router'
import { useAcervo } from '../hooks/useAcervo'

type Aba = 'todas' | 'hemeroteca' | 'biblioteca'

const tipoLabel: Record<string, string> = {
  // Hemeroteca
  jornal: 'Jornal', revista: 'Revista', recorte: 'Recorte', boletim: 'Boletim',
  // Biblioteca
  livro: 'Livro', tese: 'Tese', livreto: 'Livreto', ebook: 'E-book',
  'documento-textual': 'Documento',
}

const abaIcon: Record<string, React.ReactNode> = {
  hemeroteca: <Newspaper size={14} />,
  biblioteca: <BookOpen size={14} />,
}

export default function AcervoPage() {
  const [aba, setAba] = useState<Aba>('todas')
  const [busca, setBusca] = useState('')
  const { data, isLoading } = useAcervo()

  const filtered = (data ?? []).filter((item) => {
    const matchAba = aba === 'todas' || item.acf.categoria === aba
    const matchBusca =
      !busca ||
      item.title.rendered.toLowerCase().includes(busca.toLowerCase()) ||
      (item.acf.descricao ?? '').toLowerCase().includes(busca.toLowerCase()) ||
      (item.acf.veiculo ?? '').toLowerCase().includes(busca.toLowerCase()) ||
      (item.acf.autor ?? '').toLowerCase().includes(busca.toLowerCase())
    return matchAba && matchBusca
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
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--cinza-medio)', fontFamily: 'var(--font-primary)', marginBottom: '8px' }}>
              <Link to="/" style={{ color: 'var(--cinza-medio)', textDecoration: 'none' }}>Início</Link>
              {' '}/ <span style={{ color: 'var(--laranja)' }}>Acervo</span>
            </p>
            <h1 className="text-section" style={{ color: 'var(--white)', marginBottom: '8px' }}>
              Acervo Digital
            </h1>
            <p className="text-body" style={{ color: 'var(--cinza-texto)', maxWidth: '520px' }}>
              Documentação histórica organizada em duas categorias: <strong style={{ color: 'var(--white)' }}>Hemeroteca</strong> (jornais, revistas e recortes) e <strong style={{ color: 'var(--white)' }}>Biblioteca</strong> (livros, teses e documentos textuais).
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
          style={{ display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '1px solid var(--cinza-borda)', paddingBottom: '0' }}
        >
          {(['todas', 'hemeroteca', 'biblioteca'] as Aba[]).map((a) => (
            <button
              key={a}
              onClick={() => setAba(a)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 18px',
                background: 'none',
                border: 'none',
                borderBottom: aba === a ? '2px solid var(--laranja)' : '2px solid transparent',
                color: aba === a ? 'var(--laranja)' : 'var(--cinza-texto)',
                fontFamily: 'var(--font-primary)',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                marginBottom: '-1px',
                transition: 'color 200ms, border-color 200ms',
              }}
            >
              {a !== 'todas' && abaIcon[a]}
              {a === 'todas' ? 'Todas' : a.charAt(0).toUpperCase() + a.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Descrição da aba ativa */}
        {aba !== 'todas' && (
          <motion.p
            key={aba}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ fontSize: '13px', color: 'var(--cinza-texto)', fontFamily: 'var(--font-primary)', marginBottom: '20px' }}
          >
            {aba === 'hemeroteca'
              ? 'Jornais, revistas, recortes de notícias e boletins antigos que documentam a presença do bairro na imprensa.'
              : 'Livros, teses, livretos, e-books e documentos textuais digitais sobre o Alto do Cabrito e suas comunidades.'}
          </motion.p>
        )}

        {/* Busca */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: 'var(--preto-card)',
            border: '1px solid var(--cinza-borda)',
            borderRadius: 'var(--radius-md)',
            padding: '0 14px',
            marginBottom: '24px',
            maxWidth: '440px',
          }}
        >
          <Search size={16} style={{ color: 'var(--cinza-medio)', flexShrink: 0 }} />
          <input
            type="search"
            placeholder={aba === 'hemeroteca' ? 'Buscar por título ou veículo...' : aba === 'biblioteca' ? 'Buscar por título ou autor...' : 'Buscar no acervo...'}
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
        </motion.div>

        {/* Contagem */}
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
            const isHemeroteca = item.acf.categoria === 'hemeroteca'
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
                <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
                  <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%' }}>
                    <ImageWithFallback
                      src={imgUrl}
                      alt={item.title.rendered}
                      style={{
                        width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                        filter: isHemeroteca ? 'grayscale(20%)' : 'none',
                      }}
                    />
                  </motion.div>
                  {/* Badge categoria */}
                  <div
                    style={{
                      position: 'absolute', top: '10px', left: '10px',
                      backgroundColor: 'rgba(0,0,0,0.78)',
                      borderRadius: 'var(--radius-full)',
                      padding: '4px 10px',
                      display: 'flex', alignItems: 'center', gap: '5px',
                    }}
                  >
                    {isHemeroteca ? <Newspaper size={10} style={{ color: 'var(--laranja)' }} /> : <BookOpen size={10} style={{ color: 'var(--laranja)' }} />}
                    <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--white)', fontFamily: 'var(--font-primary)' }}>
                      {(tipoLabel[item.acf.tipo] ?? item.acf.tipo) || item.acf.categoria}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '16px' }}>
                  {isHemeroteca && item.acf.veiculo && (
                    <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--laranja)', fontFamily: 'var(--font-primary)', textTransform: 'uppercase', marginBottom: '6px' }}>
                      {item.acf.veiculo}
                    </p>
                  )}
                  {!isHemeroteca && item.acf.autor && (
                    <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--cinza-medio)', fontFamily: 'var(--font-primary)', marginBottom: '6px' }}>
                      {item.acf.autor}{item.acf.ano_publicacao && ` — ${item.acf.ano_publicacao}`}
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--cinza-medio)' }}>
                    <Calendar size={12} />
                    <span style={{ fontSize: '12px', fontFamily: 'var(--font-primary)', fontWeight: 500 }}>
                      {item.acf.data_aproximada || item.acf.data_exata}
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
