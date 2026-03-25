import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/historia', label: 'Nossa História' },
  { href: '/acervo', label: 'Acervo' },
  { href: '/figuras-notaveis', label: 'Figuras Notáveis' },
  { href: '/hemeroteca', label: 'Hemeroteca' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/noticias', label: 'Notícias' },
]

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }, [location.pathname])

  const openMenu = () => {
    setIsMenuOpen(true)
    document.body.style.overflow = 'hidden'
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: '80px',
          backgroundColor: 'var(--laranja)',
          boxShadow: isScrolled ? 'var(--shadow-navbar)' : 'none',
          transition: 'box-shadow 200ms ease',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            height: '100%',
            padding: '0 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          {/* Hamburger — mobile only */}
          <button
            onClick={openMenu}
            aria-label="Abrir menu de navegação"
            className="lg:hidden"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: 'var(--preto)',
              display: 'flex',
              alignItems: 'center',
              borderRadius: '4px',
              flexShrink: 0,
            }}
          >
            <Menu size={24} strokeWidth={2} />
          </button>

          {/* Logo */}
          <Link
            to="/"
            aria-label="Memorial Alto do Cabrito — página inicial"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            {/* Mobile: centered logo text */}
            <span
              className="lg:hidden"
              style={{
                fontSize: '15px',
                fontWeight: 800,
                color: 'var(--preto)',
                fontFamily: 'var(--font-primary)',
                lineHeight: 1.2,
                textAlign: 'center',
              }}
            >
              Memorial<br />Alto do Cabrito
            </span>
            {/* Desktop: logo text */}
            <span
              className="hidden lg:block"
              style={{
                fontSize: '18px',
                fontWeight: 800,
                color: 'var(--preto)',
                fontFamily: 'var(--font-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              Memorial Alto do Cabrito
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex"
            style={{ alignItems: 'center', gap: '28px', flex: 1, justifyContent: 'center' }}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-primary)',
                    color: 'var(--preto)',
                    opacity: isActive ? 1 : 0.7,
                    transition: 'opacity 200ms',
                    whiteSpace: 'nowrap',
                    borderBottom: isActive ? '2px solid var(--preto)' : '2px solid transparent',
                    paddingBottom: '2px',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = isActive ? '1' : '0.7')}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/acervo"
            className="hidden lg:flex"
            style={{
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'var(--preto)',
              color: 'var(--white)',
              padding: '10px 18px',
              borderRadius: 'var(--radius-md)',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 700,
              fontFamily: 'var(--font-primary)',
              whiteSpace: 'nowrap',
              transition: 'opacity 200ms',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Explorar Acervo
            <ArrowRight size={14} strokeWidth={2.5} />
          </Link>

          {/* Mobile spacer (mirrors the hamburger) */}
          <div className="lg:hidden" style={{ width: '40px', flexShrink: 0 }} />
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 98,
                backgroundColor: 'rgba(0,0,0,0.75)',
                backdropFilter: 'blur(2px)',
              }}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                width: '280px',
                maxWidth: '85vw',
                zIndex: 99,
                backgroundColor: 'var(--preto-soft)',
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto',
              }}
            >
              {/* Drawer header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '24px 24px 20px',
                  borderBottom: '1px solid var(--cinza-borda)',
                  backgroundColor: 'var(--laranja)',
                }}
              >
                <Link
                  to="/"
                  onClick={closeMenu}
                  style={{
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: 800,
                    color: 'var(--preto)',
                    fontFamily: 'var(--font-primary)',
                  }}
                >
                  Memorial Alto do Cabrito
                </Link>
                <button
                  onClick={closeMenu}
                  aria-label="Fechar menu"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--preto)',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '4px',
                  }}
                >
                  <X size={22} strokeWidth={2} />
                </button>
              </div>

              {/* Drawer nav links */}
              <nav style={{ flex: 1, padding: '16px 0' }}>
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.href
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                    >
                      <Link
                        to={link.href}
                        onClick={closeMenu}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '14px 24px',
                          textDecoration: 'none',
                          fontSize: '18px',
                          fontWeight: 700,
                          color: isActive ? 'var(--laranja)' : 'var(--white)',
                          fontFamily: 'var(--font-primary)',
                          borderBottom: '1px solid var(--cinza-borda)',
                          transition: 'color 150ms',
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              {/* Drawer CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                style={{ padding: '20px 24px 32px' }}
              >
                <Link
                  to="/acervo"
                  onClick={closeMenu}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    backgroundColor: 'var(--laranja)',
                    color: 'var(--preto)',
                    padding: '16px 32px',
                    borderRadius: 'var(--radius-xl)',
                    textDecoration: 'none',
                    fontSize: '18px',
                    fontWeight: 700,
                    fontFamily: 'var(--font-primary)',
                    width: '100%',
                    minHeight: '56px',
                  }}
                >
                  Explorar Acervo
                  <ArrowRight size={20} strokeWidth={2.5} />
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
