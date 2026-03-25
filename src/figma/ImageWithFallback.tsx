import React, { useState } from 'react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
}

export function ImageWithFallback({ src, alt, className, style }: ImageWithFallbackProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={className}
        style={{
          ...style,
          background: 'var(--preto-card)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--cinza-medio)',
          fontFamily: 'var(--font-primary)',
          fontSize: '13px',
          fontWeight: 500,
          textAlign: 'center',
          padding: '16px',
        }}
      >
        <span>{alt}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setError(true)}
      loading="lazy"
    />
  )
}
