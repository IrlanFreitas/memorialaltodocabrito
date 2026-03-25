import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

interface BotaoExploreProps {
  to?: string
  onClick?: () => void
  label?: string
  fullWidth?: boolean
  className?: string
}

export function BotaoExplore({
  to = '/acervo',
  onClick,
  label = 'explore',
  fullWidth = true,
  className = '',
}: BotaoExploreProps) {
  const style: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    backgroundColor: 'var(--laranja)',
    color: 'var(--preto)',
    padding: '16px 32px',
    borderRadius: 'var(--radius-xl)',
    fontSize: '18px',
    fontWeight: 700,
    fontFamily: 'var(--font-primary)',
    textDecoration: 'none',
    minHeight: '56px',
    width: fullWidth ? '100%' : 'auto',
    border: 'none',
    cursor: 'pointer',
  }

  const content = (
    <>
      <span>{label}</span>
      <ArrowRight size={20} strokeWidth={2.5} />
    </>
  )

  if (onClick) {
    return (
      <motion.button
        onClick={onClick}
        style={style}
        className={className}
        whileHover={{ scale: 1.02, backgroundColor: 'var(--laranja-dark)' }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {content}
      </motion.button>
    )
  }

  return (
    <motion.div
      style={{ width: fullWidth ? '100%' : 'auto' }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      <Link to={to} style={{ ...style, width: fullWidth ? '100%' : 'auto' }}>
        {content}
      </Link>
    </motion.div>
  )
}
