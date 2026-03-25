import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Archive } from 'lucide-react'

interface BotaoAcervoProps {
  to?: string
  label?: string
  fullWidth?: boolean
  variant?: 'solid' | 'outline'
  className?: string
}

export function BotaoAcervo({
  to = '/acervo',
  label = 'ACERVO',
  fullWidth = false,
  variant = 'solid',
  className = '',
}: BotaoAcervoProps) {
  const style: React.CSSProperties =
    variant === 'solid'
      ? {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'var(--laranja)',
          color: 'var(--preto)',
          padding: '12px 24px',
          borderRadius: 'var(--radius-md)',
          fontSize: '14px',
          fontWeight: 700,
          fontFamily: 'var(--font-primary)',
          textDecoration: 'none',
          letterSpacing: '0.05em',
          width: fullWidth ? '100%' : 'auto',
          justifyContent: 'center',
        }
      : {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'transparent',
          color: 'var(--laranja)',
          padding: '10px 20px',
          borderRadius: 'var(--radius-md)',
          fontSize: '14px',
          fontWeight: 700,
          fontFamily: 'var(--font-primary)',
          textDecoration: 'none',
          letterSpacing: '0.05em',
          border: '1.5px solid var(--laranja)',
          width: fullWidth ? '100%' : 'auto',
          justifyContent: 'center',
        }

  return (
    <motion.div
      whileHover={{ scale: 1.02, opacity: 0.9 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={className}
      style={{ display: 'inline-block', width: fullWidth ? '100%' : 'auto' }}
    >
      <Link to={to} style={style}>
        <Archive size={16} strokeWidth={2} />
        <span>{label}</span>
      </Link>
    </motion.div>
  )
}
