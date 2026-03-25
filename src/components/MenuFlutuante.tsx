import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import { Archive, X, BookOpen, Users, Newspaper, FolderOpen, Radio } from 'lucide-react'

const quickLinks = [
  { to: '/acervo', label: 'Acervo', icon: Archive },
  { to: '/figuras-notaveis', label: 'Figuras Notáveis', icon: Users },
  { to: '/hemeroteca', label: 'Hemeroteca', icon: Newspaper },
  { to: '/projetos', label: 'Projetos', icon: FolderOpen },
  { to: '/noticias', label: 'Notícias', icon: Radio },
]

export default function MenuFlutuante() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '20px',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '8px',
          }}
        >
          {/* Quick links menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  backgroundColor: 'var(--preto-soft)',
                  border: '1px solid var(--cinza-borda)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-float)',
                  minWidth: '180px',
                }}
              >
                {quickLinks.map(({ to, label, icon: Icon }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    <Link
                      to={to}
                      onClick={() => setIsOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '12px 16px',
                        textDecoration: 'none',
                        color: 'var(--white)',
                        fontSize: '14px',
                        fontWeight: 600,
                        fontFamily: 'var(--font-primary)',
                        borderBottom: i < quickLinks.length - 1 ? '1px solid var(--cinza-borda)' : 'none',
                        transition: 'background-color 150ms',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = 'var(--cinza-card-bg)')
                      }
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <Icon size={16} style={{ color: 'var(--laranja)', flexShrink: 0 }} />
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* FAB button */}
          <motion.button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Fechar menu rápido' : 'Acessar menu rápido do acervo'}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            style={{
              width: '56px',
              height: '56px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: isOpen ? 'var(--preto)' : 'var(--laranja)',
              border: isOpen ? '2px solid var(--laranja)' : 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-float)',
              transition: 'background-color 200ms',
            }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <X size={22} style={{ color: 'var(--laranja)' }} strokeWidth={2.5} />
              ) : (
                <BookOpen size={22} style={{ color: 'var(--preto)' }} strokeWidth={2.5} />
              )}
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
