import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides } from '../data/mockData'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { BotaoExplore } from './BotaoExplore'

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const total = heroSlides.length

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % total) + total) % total)
    },
    [total],
  )

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    if (isHovered) return
    timerRef.current = setTimeout(next, 5000)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [current, isHovered, next])

  return (
    <section
      style={{ backgroundColor: 'var(--preto)', paddingTop: '80px' }}
      aria-label="Carrossel de imagens do Alto do Cabrito"
    >
      {/* Carousel wrapper */}
      <div
        style={{ position: 'relative', overflow: 'hidden', padding: '16px 16px 0' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
          {/* Slides */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'relative' }}
            >
              <ImageWithFallback
                src={heroSlides[current].src}
                alt={heroSlides[current].alt}
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  objectFit: 'cover',
                  display: 'block',
                  maxHeight: '520px',
                }}
              />
              {/* Gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.55) 70%, #000000 100%)',
                  pointerEvents: 'none',
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Arrow controls (desktop) */}
          <button
            onClick={prev}
            aria-label="Slide anterior"
            className="hidden sm:flex"
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              border: '1px solid var(--cinza-borda)',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--white)',
              transition: 'background-color 200ms',
              zIndex: 2,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,157,0,0.8)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)')}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Próximo slide"
            className="hidden sm:flex"
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              border: '1px solid var(--cinza-borda)',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--white)',
              transition: 'background-color 200ms',
              zIndex: 2,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,157,0,0.8)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)')}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            paddingTop: '14px',
            paddingBottom: '4px',
          }}
          role="tablist"
          aria-label="Selecionar slide"
        >
          {heroSlides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Slide ${i + 1}`}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: i === current ? 'var(--laranja)' : 'var(--cinza-medio)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'width 300ms ease, background-color 300ms ease',
              }}
            />
          ))}
        </div>
      </div>

      {/* Title section below carousel */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '32px 16px 40px',
          textAlign: 'center',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`title-${current}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-hero" style={{ color: 'var(--white)', marginBottom: '12px' }}>
              {heroSlides[current].title}
            </h1>
            <p
              className="text-body"
              style={{
                color: 'var(--cinza-texto)',
                maxWidth: '540px',
                margin: '0 auto 28px',
              }}
            >
              {heroSlides[current].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
        <div style={{ maxWidth: '412px', margin: '0 auto' }}>
          <BotaoExplore to="/acervo" label="explore o acervo" />
        </div>
      </div>
    </section>
  )
}
