import React from 'react'

export default function MapaSection() {
  return (
    <section
      style={{
        width: '100%',
        height: '300px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'inset 0 18px 32px rgba(0,0,0,0.75), inset 0 -18px 32px rgba(0,0,0,0.75)',
      }}
    >
      <iframe
        src="https://www.google.com/maps/d/embed?mid=14wdxo90q_73RcyIotZ1KAXAf3TDWJDM&ehbc=2E312F&noprof=1"
        width="100%"
        height="100%"
        style={{ border: 0, display: 'block' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa do Alto do Cabrito"
      />
    </section>
  )
}
