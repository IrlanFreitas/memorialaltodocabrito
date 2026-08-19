import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import {
  Menu, X, ArrowRight, ChevronDown,
  Home, BookOpen, Clock, Users, HeartHandshake,
  Archive, Camera, Video, Headphones, Library, Newspaper,
  Rocket, MapPin, Rss, CalendarDays, FileText,
  type LucideIcon,
} from 'lucide-react'

interface NavChild {
  href: string
  label: string
  icon: LucideIcon
}

interface NavLink {
  href: string
  label: string
  icon: LucideIcon
  children?: NavChild[]
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Início', icon: Home },
  {
    href: '/historia', label: 'Nossa História', icon: BookOpen,
    children: [
      { href: '/historia/linha-do-tempo', label: 'Linha do Tempo', icon: Clock },
      { href: '/historia/figuras-notaveis', label: 'Figuras Notáveis', icon: Users },
      { href: '/historia/grupo-comunitario', label: 'Grupo Comunitário', icon: HeartHandshake },
    ],
  },
  {
    href: '/acervo', label: 'Acervo', icon: Archive,
    children: [
      { href: '/acervo?tab=fototeca', label: 'Fototeca', icon: Camera },
      { href: '/acervo?tab=videoteca', label: 'Videoteca', icon: Video },
      { href: '/acervo?tab=audioteca', label: 'Audioteca', icon: Headphones },
      { href: '/acervo?tab=biblioteca', label: 'Biblioteca', icon: Library },
      { href: '/acervo?tab=hemeroteca', label: 'Hemeroteca', icon: Newspaper },
    ],
  },
  { href: '/projetos', label: 'Projetos', icon: Rocket },
  { href: '/mapa', label: 'Mapa do Bairro', icon: MapPin },
  {
    href: '/blog', label: 'Blog', icon: Rss,
    children: [
      { href: '/blog?tab=noticias', label: 'Notícias', icon: Newspaper },
      { href: '/blog?tab=eventos', label: 'Eventos || Agenda', icon: CalendarDays },
      { href: '/blog?tab=postagens', label: 'Postagens', icon: FileText },
    ],
  },
]

function isLinkActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setOpenDropdown(null)
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
            {/* Mobile: logotipo SVG */}
            <img
              src="/marca/memorial-logotipo.svg"
              alt="Memorial Alto do Cabrito"
              className="lg:hidden"
              style={{ height: '48px', width: 'auto' }}
            />
            {/* Desktop: logo PNG */}
            <img
              src="/marca/memorial-logo.png"
              alt="Memorial Alto do Cabrito"
              className="hidden lg:block"
              style={{ height: '56px', width: 'auto' }}
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex"
            style={{ alignItems: 'center', gap: '6px', flex: 1, justifyContent: 'center' }}
          >
            {navLinks.map((link) => {
              const isActive = isLinkActive(location.pathname, link.href)
              const Icon = link.icon
              const hasChildren = !!link.children?.length
              const isOpen = openDropdown === link.href

              return (
                <div
                  key={link.href}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => hasChildren && setOpenDropdown(link.href)}
                  onMouseLeave={() => hasChildren && setOpenDropdown(null)}
                >
                  <Link
                    to={link.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: 600,
                      fontFamily: 'var(--font-primary)',
                      color: 'var(--preto)',
                      opacity: isActive ? 1 : 0.75,
                      transition: 'opacity 200ms',
                      whiteSpace: 'nowrap',
                      padding: '8px 10px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: isOpen ? 'rgba(0,0,0,0.06)' : 'transparent',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = isActive ? '1' : '0.75')}
                  >
                    <Icon size={15} />
                    {link.label}
                    {hasChildren && (
                      <ChevronDown
                        size={13}
                        style={{ transition: 'transform 200ms', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                    )}
                  </Link>

                  {/* Dropdown desktop */}
                  <AnimatePresence>
                    {hasChildren && isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15 }}
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 6px)',
                          left: 0,
                          minWidth: '220px',
                          backgroundColor: 'var(--preto-soft)',
                          border: '1px solid var(--cinza-borda)',
                          borderRadius: 'var(--radius-lg)',
                          boxShadow: 'var(--shadow-card-hover)',
                          padding: '8px',
                          zIndex: 60,
                        }}
                      >
                        {link.children!.map((child) => {
                          const ChildIcon = child.icon
                          return (
                            <Link
                              key={child.href}
                              to={child.href}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '10px 12px',
                                borderRadius: 'var(--radius-md)',
                                textDecoration: 'none',
                                color: 'var(--white)',
                                fontSize: '13px',
                                fontWeight: 500,
                                fontFamily: 'var(--font-primary)',
                                transition: 'background-color 150ms',
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,157,0,0.12)')}
                              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                            >
                              <ChildIcon size={15} />
                              {child.label}
                            </Link>
                          )
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </nav>

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
                width: '300px',
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
                  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
                >
                  <img
                    src="/marca/memorial-logotipo.svg"
                    alt="Memorial Alto do Cabrito"
                    style={{ height: '40px', width: 'auto' }}
                  />
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
                  const isActive = isLinkActive(location.pathname, link.href)
                  const Icon = link.icon
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                      style={{ borderBottom: '1px solid var(--cinza-borda)' }}
                    >
                      <Link
                        to={link.href}
                        onClick={closeMenu}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '14px 24px',
                          textDecoration: 'none',
                          fontSize: '17px',
                          fontWeight: 700,
                          color: isActive ? 'var(--laranja)' : 'var(--white)',
                          fontFamily: 'var(--font-primary)',
                          transition: 'color 150ms',
                        }}
                      >
                        <Icon size={18} />
                        {link.label}
                      </Link>

                      {link.children && (
                        <div style={{ paddingBottom: '10px' }}>
                          {link.children.map((child) => {
                            const ChildIcon = child.icon
                            return (
                              <Link
                                key={child.href}
                                to={child.href}
                                onClick={closeMenu}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '10px',
                                  padding: '10px 24px 10px 52px',
                                  textDecoration: 'none',
                                  fontSize: '14px',
                                  fontWeight: 500,
                                  color: 'var(--cinza-texto)',
                                  fontFamily: 'var(--font-primary)',
                                }}
                              >
                                <ChildIcon size={15} />
                                {child.label}
                              </Link>
                            )
                          })}
                        </div>
                      )}
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
