import React, { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { motion } from 'motion/react'
import { Calendar, Clock, ArrowRight, Newspaper, CalendarDays, FileText, Mail, Phone, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { useNoticias } from '../hooks/useNoticias'
import { useOpcoes } from '../hooks/useOpcoes'
import type { WPNoticia } from '../types/cms'

type Aba = 'todas' | 'noticias' | 'eventos' | 'postagens'

const abaConfig: Record<Exclude<Aba, 'todas'>, { label: string; icon: React.ReactNode }> = {
  noticias: { label: 'Notícias', icon: <Newspaper size={14} /> },
  eventos: { label: 'Agenda', icon: <CalendarDays size={14} /> },
  postagens: { label: 'Postagens', icon: <FileText size={14} /> },
}

function getBlogAba(item: WPNoticia): Exclude<Aba, 'todas'> {
  if (item.acf.tipo === 'passado' || item.acf.tipo === 'futuro') return 'eventos'
  if (item.acf.categoria === 'memoria') return 'postagens'
  return 'noticias'
}

function formatDate(iso: string) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}

function isPast(iso: string) {
  if (!iso) return false
  return new Date(iso) < new Date()
}

export default function BlogPage() {
  const [searchParams] = useSearchParams()
  const tabParam = searchParams.get('tab') as Aba | null
  const [aba, setAba] = useState<Aba>(tabParam && tabParam in abaConfig ? tabParam : 'todas')

  useEffect(() => {
    if (tabParam && tabParam in abaConfig) setAba(tabParam)
  }, [tabParam])

  const { data, isLoading } = useNoticias()
  const { data: opcoes } = useOpcoes()

  const filtered = useMemo(() => (data ?? []).filter((n) => aba === 'todas' || getBlogAba(n) === aba), [data, aba])

  const sorted = [...filtered].sort((a, b) => {
    const aData = a.acf.data_evento || a.date
    const bData = b.acf.data_evento || b.date
    const aPast = isPast(aData)
    const bPast = isPast(bData)
    if (aPast !== bPast) return aPast ? 1 : -1
    return new Date(bData).getTime() - new Date(aData).getTime()
  })

  const contatos = [
    opcoes?.email && { icon: Mail, label: opcoes.email, href: `mailto:${opcoes.email}` },
    opcoes?.telefone && { icon: Phone, label: opcoes.telefone, href: `tel:${opcoes.telefone.replace(/\D/g, '')}` },
    opcoes?.instagram_url && { icon: Instagram, label: 'Instagram', href: opcoes.instagram_url },
    opcoes?.facebook_url && { icon: Facebook, label: 'Facebook', href: opcoes.facebook_url },
    opcoes?.youtube_url && { icon: Youtube, label: 'YouTube', href: opcoes.youtube_url },
  ].filter(Boolean) as { icon: typeof Mail; label: string; href: string }[]

  const whatsappHref = opcoes?.telefone
    ? `https://wa.me/${opcoes.telefone.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Vim pelo site do Memorial Alto do Cabrito e gostaria de saber mais.')}`
    : null

  return (
    <div style={{ backgroundColor: 'var(--preto)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Header */}
      <div style={{ backgroundColor: 'var(--preto-soft)', borderBottom: '1px solid var(--cinza-borda)', padding: '40px 16px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--cinza-medio)', fontFamily: 'var(--font-primary)', marginBottom: '8px' }}>
              <Link to="/" style={{ color: 'var(--cinza-medio)', textDecoration: 'none' }}>Início</Link>
              {' '}/ <span style={{ color: 'var(--laranja)' }}>Blog</span>
            </p>
            <h1 className="text-section" style={{ color: 'var(--white)', marginBottom: '8px' }}>Blog</h1>
            <p className="text-body" style={{ color: 'var(--cinza-texto)', maxWidth: '520px' }}>
              Notícias, eventos e publicações do Memorial Alto do Cabrito.
            </p>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '32px 16px' }}>
        {/* Abas */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
          {(['todas', 'noticias', 'eventos', 'postagens'] as Aba[]).map((a) => (
            <button
              key={a}
              onClick={() => setAba(a)}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '8px 16px', borderRadius: 'var(--radius-full)',
                backgroundColor: aba === a ? 'var(--laranja)' : 'var(--cinza-card-bg)',
                color: aba === a ? 'var(--preto)' : 'var(--cinza-texto)',
                border: aba === a ? 'none' : '1px solid var(--cinza-borda)',
                fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-primary)',
                cursor: 'pointer', transition: 'all 200ms',
              }}
            >
              {a !== 'todas' && abaConfig[a].icon}
              {a === 'todas' ? 'Todas' : abaConfig[a].label}
            </button>
          ))}
        </div>

        {/* News list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {isLoading && (
            <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--cinza-medio)', fontFamily: 'var(--font-primary)' }}>
              Carregando...
            </div>
          )}
          {!isLoading && sorted.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--cinza-medio)', fontFamily: 'var(--font-primary)' }}>
              Nenhuma publicação encontrada nesta categoria.
            </div>
          )}
          {sorted.map((noticia, i) => {
            const dataEvento = noticia.acf.data_evento || noticia.date
            const past = isPast(dataEvento)
            const img = noticia._embedded?.['wp:featuredmedia']?.[0]?.source_url
              ?? noticia.acf.imagem_capa?.url
              ?? ''
            return (
              <motion.div
                key={noticia.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link to={`/blog/${noticia.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <motion.article
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      padding: '20px 0',
                      borderBottom: '1px solid var(--cinza-borda)',
                      opacity: past ? 0.65 : 1,
                      transition: 'opacity 200ms',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = past ? '0.65' : '1')}
                  >
                    {/* Thumbnail */}
                    <div style={{ width: '100px', height: '70px', borderRadius: 'var(--radius-md)', overflow: 'hidden', flexShrink: 0 }}>
                      <ImageWithFallback
                        src={img}
                        alt={noticia.title.rendered}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: past ? 'grayscale(50%)' : 'none' }}
                      />
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          {past ? <Clock size={11} style={{ color: 'var(--cinza-medio)' }} /> : <Calendar size={11} style={{ color: 'var(--laranja)' }} />}
                          <span style={{ fontSize: '12px', color: past ? 'var(--cinza-medio)' : 'var(--laranja)', fontFamily: 'var(--font-primary)', fontWeight: 500 }}>
                            {formatDate(dataEvento)}
                          </span>
                        </div>
                        <span
                          style={{
                            fontSize: '10px', fontWeight: 600, color: past ? 'var(--cinza-medio)' : 'var(--laranja)',
                            fontFamily: 'var(--font-primary)', textTransform: 'uppercase', letterSpacing: '0.05em',
                            backgroundColor: past ? 'var(--cinza-card-bg)' : 'rgba(255,157,0,0.12)', padding: '2px 8px', borderRadius: 'var(--radius-full)',
                          }}
                        >
                          {abaConfig[getBlogAba(noticia)].label}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: '16px', fontWeight: 600, color: past ? 'var(--cinza-medio)' : 'var(--white)',
                          fontFamily: 'var(--font-primary)', lineHeight: 1.4, marginBottom: '6px',
                          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                        }}
                      >
                        {noticia.title.rendered}
                      </h3>

                      <span style={{ fontSize: '12px', color: past ? 'var(--cinza-medio)' : 'var(--laranja)', fontFamily: 'var(--font-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '3px' }}>
                        {past ? 'Ver resumo' : 'Ver detalhes'} <ArrowRight size={11} />
                      </span>
                    </div>
                  </motion.article>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Banner de Participação || Colaboração */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 16px 48px' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: 'var(--preto-card)',
            border: '1px solid var(--cinza-borda)',
            borderRadius: 'var(--radius-lg)',
            padding: '28px 24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--white)', fontFamily: 'var(--font-primary)', marginBottom: '6px' }}>
              Quer participar ou colaborar?
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--cinza-texto)', fontFamily: 'var(--font-primary)' }}>
              Fale com o Grupo Comunitário e acompanhe nossos canais.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
            {contatos.map((c) => {
              const Icon = c.icon
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    padding: '8px 14px', borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--cinza-card-bg)', border: '1px solid var(--cinza-borda)',
                    color: 'var(--white)', textDecoration: 'none',
                    fontSize: '13px', fontFamily: 'var(--font-primary)', fontWeight: 600,
                    transition: 'border-color 200ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--laranja)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--cinza-borda)')}
                >
                  <Icon size={14} style={{ color: 'var(--laranja)' }} />
                  {c.label}
                </a>
              )
            })}
            {whatsappHref && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  padding: '8px 16px', borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--laranja)', border: 'none',
                  color: 'var(--preto)', textDecoration: 'none',
                  fontSize: '13px', fontFamily: 'var(--font-primary)', fontWeight: 700,
                  transition: 'opacity 200ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <MessageCircle size={14} />
                Enviar mensagem no WhatsApp
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
