import React from 'react'
import { motion } from 'motion/react'
import { BotaoExplore } from './BotaoExplore'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
}

export default function HistoriaIntro() {
  return (
    <section
      style={{
        backgroundColor: 'var(--preto)',
        padding: '48px 0',
        borderTop: '1px solid var(--cinza-borda)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 16px',
        }}
      >
        <motion.div
          {...fadeUp}
          style={{
            maxWidth: '560px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontSize: '11px',
              fontWeight: 600,
              color: 'var(--laranja)',
              fontFamily: 'var(--font-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '12px',
            }}
          >
            Conheça o bairro
          </p>

          {/* H2 */}
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-section"
            style={{ color: 'var(--white)', marginBottom: '20px' }}
          >
            Nossa história
          </motion.h2>

          {/* Body */}
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-body"
            style={{
              color: 'var(--cinza-texto)',
              marginBottom: '32px',
              lineHeight: 1.7,
            }}
          >
            O Alto do Cabrito é um bairro periférico de Salvador com uma história rica em resistência,
            cultura e identidade coletiva. Fundado nas encostas da cidade, o bairro cresceu através
            do esforço de seus moradores, construindo tradições, conquistando direitos e forjando
            uma identidade única na paisagem urbana baiana. Aqui, preservamos esses marcos,
            desafios e conquistas para as gerações presentes e futuras.
          </motion.p>

          {/* Stats row */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '32px',
              marginBottom: '36px',
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: '50+', label: 'Anos de história' },
              { value: '3.000+', label: 'Famílias' },
              { value: '200+', label: 'Itens no acervo' },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '28px',
                    fontWeight: 800,
                    color: 'var(--laranja)',
                    fontFamily: 'var(--font-primary)',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: 'var(--cinza-medio)',
                    fontFamily: 'var(--font-primary)',
                    fontWeight: 500,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <BotaoExplore to="/historia" label="explore nossa história" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
