import { motion } from 'framer-motion'

export default function TotoVideoSection() {
  return (
    <section
      className="py-28 px-6"
      style={{ background: 'hsl(260 87% 3%)' }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <p
          className="text-[11px] font-extrabold uppercase tracking-[3px] mb-3"
          style={{ color: '#FFD700' }}
        >
          Mira a Toto en acción
        </p>
        <h2
          className="leading-none"
          style={{
            fontFamily:    "'Bebas Neue', cursive",
            fontSize:      'clamp(44px, 7vw, 80px)',
            color:         'hsl(40 6% 95%)',
            letterSpacing: '2px',
          }}
        >
          TOTO EN<br />EL CAMPO
        </h2>
        <p
          className="text-base mt-5 max-w-md mx-auto"
          style={{ color: 'hsl(40 6% 65%)' }}
        >
          Listo para defender los colores de tu selección desde el primer pitazo.
        </p>
      </motion.div>

      {/* Video frame */}
      <motion.div
        className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden"
        style={{
          boxShadow:  '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)',
          aspectRatio:'16 / 9',
          background: '#000',
        }}
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {/* Glow ring behind frame */}
        <div
          className="absolute pointer-events-none -z-10"
          style={{
            inset:      '-40px',
            background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.18) 0%, transparent 70%)',
            filter:     'blur(32px)',
          }}
        />

        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ display: 'block' }}
        >
          <source src="/video/toto.mp4" type="video/mp4" />
        </video>

        {/* Top corner accents */}
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-[2px] flex items-center gap-1.5"
          style={{
            background: 'rgba(232,49,42,0.92)',
            color:      'white',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full inline-block animate-pulse"
            style={{ background: 'white' }}
          />
          Live
        </div>

        <div
          className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[1.5px]"
          style={{
            background:    'rgba(0,0,0,0.55)',
            color:         '#FFD700',
            backdropFilter:'blur(8px)',
            border:        '1px solid rgba(255,215,0,0.3)',
          }}
        >
          ⚽ World Cup 2026
        </div>
      </motion.div>
    </section>
  )
}
