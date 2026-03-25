import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { BookOpen } from 'lucide-react'
import { BotaoExplore } from '../components/BotaoExplore'

const timeline = [
  { ano: '1960s', titulo: 'Os Primeiros Moradores', descricao: 'Famílias oriundas do interior da Bahia e de outros estados chegam às encostas do Alto do Cabrito em busca de oportunidades na capital. As primeiras habitações são construídas com materiais simples, mas com uma solidez cultural e comunitária profunda.' },
  { ano: '1970s', titulo: 'Consolidação do Bairro', descricao: 'O Alto do Cabrito se consolida como comunidade reconhecida, com o surgimento de ruas, comércios locais e a primeira escola improvisada. A identidade periférica começa a se formar com traços únicos.' },
  { ano: '1980', titulo: 'Fundação da Associação de Moradores', descricao: 'Em 14 de março de 1980, é fundada oficialmente a Associação de Moradores do Alto do Cabrito, marco fundamental na organização política e social da comunidade.' },
  { ano: '1985', titulo: 'Escola Comunitária', descricao: 'A Escola Comunitária do Alto do Cabrito é fundada com recursos dos próprios moradores, oferecendo educação de qualidade para crianças do bairro que antes precisavam se deslocar longas distâncias.' },
  { ano: '1990s', titulo: 'Infraestrutura e Conquistas', descricao: 'Após anos de mobilização popular, o bairro conquista melhorias significativas de infraestrutura: pavimentação de ruas principais, ampliação do saneamento básico e acesso regular ao abastecimento de água.' },
  { ano: '2000s', titulo: 'Reconhecimento Cultural', descricao: 'O Alto do Cabrito ganha visibilidade pela riqueza de suas manifestações culturais — capoeira, festas juninas, música e arte periférica. A identidade local se fortalece e passa a ser celebrada.' },
  { ano: '2018', titulo: 'Biblioteca Comunitária', descricao: 'Inauguração da Biblioteca Comunitária do Alto do Cabrito, resultado de anos de sonho coletivo. O espaço se torna polo cultural e educacional, com acervo de mais de 3.000 títulos.' },
  { ano: '2021', titulo: 'Nascimento do Memorial', descricao: 'Um grupo de jovens moradores cria o projeto Memorial Alto do Cabrito, iniciando o trabalho de digitalização e preservação da história, documentos, fotografias e depoimentos da comunidade.' },
  { ano: '2026', titulo: 'Memorial Online', descricao: 'Lançamento da plataforma digital do Memorial Alto do Cabrito, tornando o acervo histórico acessível para toda a comunidade e para pesquisadores do mundo inteiro.' },
]

export default function HistoriaPage() {
  return (
    <div style={{ backgroundColor: 'var(--preto)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: 'var(--preto-soft)',
          borderBottom: '1px solid var(--cinza-borda)',
          padding: '40px 16px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--cinza-medio)', fontFamily: 'var(--font-primary)', marginBottom: '8px' }}>
              <Link to="/" style={{ color: 'var(--cinza-medio)', textDecoration: 'none' }}>Início</Link>
              {' '}/ <span style={{ color: 'var(--laranja)' }}>Nossa História</span>
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <BookOpen size={28} style={{ color: 'var(--laranja)' }} />
              <h1 className="text-section" style={{ color: 'var(--white)' }}>Nossa História</h1>
            </div>
            <p className="text-body" style={{ color: 'var(--cinza-texto)', maxWidth: '560px' }}>
              Uma breve história do Alto do Cabrito, destacando seus principais marcos, desafios e conquistas, desde a formação da comunidade até os dias atuais.
            </p>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px' }}>
        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div
            style={{
              position: 'absolute',
              left: '20px',
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: 'var(--cinza-borda)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {timeline.map((item, i) => (
              <motion.div
                key={item.ano}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                style={{
                  display: 'flex',
                  gap: '32px',
                  paddingBottom: '40px',
                  paddingLeft: '52px',
                  position: 'relative',
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '4px',
                    width: '18px',
                    height: '18px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: i === timeline.length - 1 ? 'var(--laranja)' : 'var(--preto-soft)',
                    border: `2px solid ${i === timeline.length - 1 ? 'var(--laranja)' : 'var(--cinza-borda)'}`,
                    zIndex: 1,
                  }}
                />

                <div>
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--laranja)',
                      fontFamily: 'var(--font-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '6px',
                    }}
                  >
                    {item.ano}
                  </span>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--white)',
                      fontFamily: 'var(--font-primary)',
                      lineHeight: 1.3,
                      marginBottom: '8px',
                    }}
                  >
                    {item.titulo}
                  </h3>
                  <p
                    style={{
                      fontSize: '15px',
                      color: 'var(--cinza-texto)',
                      fontFamily: 'var(--font-primary)',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.descricao}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginTop: '16px' }}
        >
          <BotaoExplore to="/acervo" label="explorar o acervo histórico" />
        </motion.div>
      </div>
    </div>
  )
}
