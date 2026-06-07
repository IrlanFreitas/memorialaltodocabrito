import React from 'react'
import { Link } from 'react-router'
import { Instagram, Youtube, MapPin, Mail, ExternalLink } from 'lucide-react'
import { useOpcoes } from '../hooks/useOpcoes'

export default function Footer() {
  const year = new Date().getFullYear()
  const { data } = useOpcoes()
  const parceiros = data?.parceiros ?? []
  const instagramUrl = data?.instagram_url || 'https://instagram.com'
  const youtubeUrl = data?.youtube_url || 'https://youtube.com'
  const email = data?.email || 'contato@memorialaltodocabrito.org'
  const endereco = data?.endereco || 'Alto do Cabrito, Salvador, Bahia, Brasil'

  return (
    <footer
      style={{
        backgroundColor: 'var(--preto)',
        borderTop: '1px solid var(--cinza-borda)',
        paddingTop: '48px',
        paddingBottom: '32px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        {/* Main grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '40px',
          }}
          className="sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Col 1: About */}
          <div>
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 800,
                color: 'var(--white)',
                fontFamily: 'var(--font-primary)',
                marginBottom: '12px',
                lineHeight: 1.2,
              }}
            >
              Memorial<br />Alto do Cabrito
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--cinza-texto)',
                fontFamily: 'var(--font-primary)',
                lineHeight: 1.6,
                marginBottom: '16px',
              }}
            >
              Um espaço para preservar e celebrar a história da comunidade do Alto do Cabrito, Salvador, Bahia.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Memorial"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--cinza-card-bg)',
                  border: '1px solid var(--cinza-borda)',
                  color: 'var(--white)',
                  transition: 'color 200ms, border-color 200ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--laranja)'
                  e.currentTarget.style.borderColor = 'var(--laranja)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--white)'
                  e.currentTarget.style.borderColor = 'var(--cinza-borda)'
                }}
              >
                <Instagram size={18} />
              </a>
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube do Memorial"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--cinza-card-bg)',
                  border: '1px solid var(--cinza-borda)',
                  color: 'var(--white)',
                  transition: 'color 200ms, border-color 200ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--laranja)'
                  e.currentTarget.style.borderColor = 'var(--laranja)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--white)'
                  e.currentTarget.style.borderColor = 'var(--cinza-borda)'
                }}
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Explore */}
          <div>
            <h4
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--laranja)',
                fontFamily: 'var(--font-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              Explorar
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { to: '/historia', label: 'Nossa História' },
                { to: '/acervo', label: 'Acervo Digital' },
                { to: '/figuras-notaveis', label: 'Figuras Notáveis' },
                { to: '/midia', label: 'Mídia' },
                { to: '/projetos', label: 'Projetos' },
                { to: '/noticias', label: 'Notícias' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: 'var(--cinza-texto)',
                      fontFamily: 'var(--font-primary)',
                      transition: 'color 200ms',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--laranja)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cinza-texto)')}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Institutional */}
          <div>
            <h4
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--laranja)',
                fontFamily: 'var(--font-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              Institucional
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { to: '/sobre', label: 'Quem Somos' },
                { to: '/projetos', label: 'Projetos Realizados' },
                { to: '/acervo', label: 'Contribuir com o Acervo' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: 'var(--cinza-texto)',
                      fontFamily: 'var(--font-primary)',
                      transition: 'color 200ms',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--laranja)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cinza-texto)')}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://pinacoteca.org.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    textDecoration: 'none',
                    fontSize: '14px',
                    color: 'var(--cinza-texto)',
                    fontFamily: 'var(--font-primary)',
                    transition: 'color 200ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--laranja)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cinza-texto)')}
                >
                  Pinacoteca (inspiração)
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--laranja)',
                fontFamily: 'var(--font-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              Contato
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  color: 'var(--cinza-texto)',
                  fontSize: '14px',
                  fontFamily: 'var(--font-primary)',
                }}
              >
                <MapPin
                  size={16}
                  style={{ color: 'var(--laranja)', flexShrink: 0, marginTop: '2px' }}
                />
                <span>{endereco}</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'var(--cinza-texto)',
                  fontSize: '14px',
                  fontFamily: 'var(--font-primary)',
                }}
              >
                <Mail size={16} style={{ color: 'var(--laranja)', flexShrink: 0 }} />
                <a
                  href={`mailto:${email}`}
                  style={{
                    color: 'var(--cinza-texto)',
                    textDecoration: 'none',
                    transition: 'color 200ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--laranja)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cinza-texto)')}
                >
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            backgroundColor: 'var(--cinza-borda)',
            margin: '40px 0 32px',
          }}
        />

        {/* Partners grid */}
        <div style={{ marginBottom: '32px' }}>
          <p
            style={{
              fontSize: '11px',
              fontWeight: 600,
              color: 'var(--cinza-medio)',
              fontFamily: 'var(--font-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '16px',
            }}
          >
            Parceiros & Apoiadores
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '8px',
            }}
            className="sm:grid-cols-5 lg:grid-cols-7"
          >
            {parceiros.map((p: { nome: string; url?: string }, i: number) => (
              <div
                key={p.url || p.nome || i}
                title={p.nome}
                style={{
                  padding: '10px 8px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--cinza-card-bg)',
                  border: '1px solid var(--cinza-borda)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '44px',
                  transition: 'border-color 200ms',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = 'rgba(255,157,0,0.4)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = 'var(--cinza-borda)')
                }
              >
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    color: 'var(--cinza-medio)',
                    fontFamily: 'var(--font-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    textAlign: 'center',
                    lineHeight: 1.2,
                  }}
                >
                  {p.nome}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            textAlign: 'center',
          }}
          className="sm:flex-row sm:justify-between"
        >
          <p
            style={{
              fontSize: '13px',
              color: 'var(--cinza-medio)',
              fontFamily: 'var(--font-primary)',
            }}
          >
            © {year} Memorial Alto do Cabrito. Todos os direitos reservados.
          </p>
          <p
            style={{
              fontSize: '13px',
              color: 'var(--cinza-medio)',
              fontFamily: 'var(--font-primary)',
            }}
          >
            Salvador, Bahia, Brasil
          </p>
        </div>
      </div>
    </footer>
  )
}
