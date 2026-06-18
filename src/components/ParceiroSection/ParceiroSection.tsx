import { motion } from 'motion/react'
import s from './ParceiroSection.module.scss'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
}

interface Parceiro {
  nome: string
  descricao: string
  iniciais: string
  imagem?: string
}

const apoiadores: Parceiro[] = [
  {
    nome: 'Moradores do Alto do Cabrito',
    descricao: 'Residentes que concederam entrevistas e fizeram doações ao acervo, tornando possível a preservação da memória viva do bairro.',
    iniciais: 'MAC',
  },
  {
    nome: 'Equipe de Ciências Sociais — UFBA',
    descricao: 'Professores e pesquisadores da Universidade Federal da Bahia que contribuíram com metodologia, pesquisa de campo e análise histórica.',
    iniciais: 'CS',
  },
]

const realizadores: Parceiro[] = [
  {
    nome: 'Grupo Comunitário do Alto do Cabrito',
    descricao: 'Organização de base que lidera as iniciativas culturais e sociais do bairro, mobilizando moradores em torno da identidade coletiva.',
    iniciais: 'GC',
  },
  {
    nome: 'Cia de Arte Cultural É ao Quadrado',
    descricao: 'Coletivo artístico e cultural responsável pela produção criativa, design e narrativa do Memorial Alto do Cabrito.',
    iniciais: 'E²',
  },
]

function Card({ parceiro, delay }: { parceiro: Parceiro; delay: number }) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={s.card}
    >
      <div className={s.logo}>
        {parceiro.imagem
          ? <img src={parceiro.imagem} alt={parceiro.nome} />
          : <span className={s.logoInitials}>{parceiro.iniciais}</span>
        }
      </div>
      <div className={s.cardBody}>
        <p className={s.cardName}>{parceiro.nome}</p>
        <p className={s.cardDesc}>{parceiro.descricao}</p>
      </div>
    </motion.div>
  )
}

export default function ParceiroSection() {
  return (
    <section className={s.section}>
      <div className={s.container}>

        <motion.div {...fadeUp} className={s.header}>
          <p className={s.eyebrow}>Quem faz acontecer</p>
          <h2 className={s.title}>Parceiros & Apoiadores</h2>
        </motion.div>

        <div className={s.groups}>

          {/* Apoiadores */}
          <div className={s.group}>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className={s.groupLabel}
            >
              Apoiadores
            </motion.p>
            {apoiadores.map((p, i) => (
              <Card key={p.nome} parceiro={p} delay={0.15 + i * 0.08} />
            ))}
          </div>

          {/* Realizadores */}
          <div className={s.group}>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className={s.groupLabel}
            >
              Realizadores
            </motion.p>
            {realizadores.map((p, i) => (
              <Card key={p.nome} parceiro={p} delay={0.25 + i * 0.08} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
