import { motion } from 'framer-motion'

const STADIUMS = [
  {
    img:   '/images/hard-rock-stadium.webp',
    name:  'Hard Rock Stadium',
    city:  'Miami Gardens, Florida · USA',
  },
  {
    img:   '/images/estadio-bbva.webp',
    name:  'Estadio BBVA',
    city:  'Monterrey, Nuevo León · México',
  },
]

export default function StadiumsSection() {
  return (
    <section
      id="sedes"
      className="py-28"
      style={{ background: '#0A1628' }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12 px-6"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <p
          className="text-[11px] font-extrabold uppercase tracking-[3px] mb-3"
          style={{ color: '#FFD700' }}
        >
          Las Sedes del Mundial 2026
        </p>
        <h2
          className="leading-none"
          style={{
            fontFamily:    "'Bebas Neue', cursive",
            fontSize:      'clamp(44px, 7vw, 80px)',
            color:         'white',
            letterSpacing: '2px',
          }}
        >
          ESTADIOS<br />ÉPICOS
        </h2>
      </motion.div>

      {/* Horizontal scroll */}
      <div
        className="flex gap-6 px-6 md:px-14 pb-4 overflow-x-auto scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
      >
        {STADIUMS.map(({ img, name, city }, i) => (
          <motion.div
            key={name}
            className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer"
            style={{
              width:          'min(520px, 85vw)',
              height:         '320px',
              scrollSnapAlign:'start',
            }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={img}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 flex flex-col justify-end p-7"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 55%)',
              }}
            >
              <h3
                style={{
                  fontFamily:    "'Bebas Neue', cursive",
                  fontSize:      '26px',
                  letterSpacing: '1.5px',
                  color:         'white',
                }}
              >
                {name}
              </h3>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {city}
              </p>
            </div>
          </motion.div>
        ))}

        {/* More card */}
        <motion.div
          className="flex-shrink-0 rounded-2xl flex flex-col items-center justify-center gap-3"
          style={{
            width:          'min(260px, 70vw)',
            height:         '320px',
            scrollSnapAlign:'start',
            background:     'rgba(255,255,255,0.04)',
            border:         '2px dashed rgba(255,255,255,0.12)',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <span className="text-5xl">🏟️</span>
          <p
            style={{
              fontFamily:    "'Bebas Neue', cursive",
              fontSize:      '18px',
              letterSpacing: '2px',
              color:         'rgba(255,255,255,0.3)',
              textAlign:     'center',
              padding:       '0 20px',
            }}
          >
            MÁS SEDES<br />POR DESCUBRIR
          </p>
        </motion.div>
      </div>
    </section>
  )
}
