import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useQueryClient } from '@tanstack/react-query'
import { fetchOpcoes } from '../services/opcoes'

// Tempo fixo de exibição — futuramente vamos revisitar esse design.
const DURATION_MS = 3000

interface SplashScreenProps {
  onDone: () => void
}

export default function SplashScreen({ onDone }: SplashScreenProps) {
  const [visible, setVisible] = useState(true)
  const queryClient = useQueryClient()

  useEffect(() => {
    // Aproveita os 3s fixos para pré-carregar dados em segundo plano.
    queryClient.prefetchQuery({ queryKey: ['opcoes'], queryFn: fetchOpcoes })

    const timer = window.setTimeout(() => setVisible(false), DURATION_MS)
    return () => window.clearTimeout(timer)
  }, [queryClient])

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'var(--laranja)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
          }}
        >
          <motion.img
            src="/marca/memorial-logo.png"
            alt="Memorial Alto do Cabrito"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: '70vw', maxHeight: '55vh', objectFit: 'contain' }}
          />

          {/* Barra de carregamento horizontal */}
          <div
            style={{
              width: '70vw',
              maxWidth: '480px',
              height: '6px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(0,0,0,0.18)',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: DURATION_MS / 1000, ease: 'linear' }}
              style={{
                height: '100%',
                backgroundColor: 'var(--preto)',
                borderRadius: 'var(--radius-full)',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
