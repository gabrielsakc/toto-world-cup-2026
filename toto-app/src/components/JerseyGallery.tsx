import { motion } from 'framer-motion'

const JERSEYS = [
  { label: '🇦🇷 Argentina', bg: '#74ACDF' },
  { label: '🇧🇷 Brasil',    bg: '#009B3A' },
  { label: '🇪🇸 España',    bg: '#E8312A' },
  { label: '🇫🇷 Francia',   bg: '#0033A0' },
  { label: '🇲🇽 México',    bg: '#006341' },
  { label: '+43 más',       bg: 'rgba(255,255,255,0.08)', border: true },
]

export default function JerseyGallery() {
  return (
    <section
      id="jerseys"
      className="py-28 px-6"
      style={{ background: 'hsl(260 87% 2%)' }}
    >
      {/* Section header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <p
          className="text-[11px] font-extrabold uppercase tracking-[3px] mb-3"
          style={{ color: '#E8312A' }}
        >
          La mascota de tu selección
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
          TOTO LUCE<br />TU CAMISETA
        </h2>
      </motion.div>

      {/* 2-col grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-5xl mx-auto items-center">

        {/* Image */}
        <motion.div
          className="flex items-center justify-center rounded-3xl overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.15) 0%, rgba(99,102,241,0.08) 50%, transparent 80%)',
            padding: '32px',
          }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <img
            src="/images/toto-multiposes.png"
            alt="Toto con distintas camisetas"
            className="w-full max-w-[420px] object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="flex flex-col gap-5"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <p
            className="text-[11px] font-extrabold uppercase tracking-[3px]"
            style={{ color: '#E8312A' }}
          >
            48 selecciones
          </p>

          <h3
            className="leading-none"
            style={{
              fontFamily:    "'Bebas Neue', cursive",
              fontSize:      'clamp(40px, 5vw, 62px)',
              color:         'hsl(40 6% 95%)',
              letterSpacing: '2px',
            }}
          >
            UN TOTO<br />PARA CADA<br />PAÍS
          </h3>

          <p className="text-base leading-8" style={{ color: 'hsl(40 6% 72%)' }}>
            Selecciona tu país y verás a Toto luciendo los colores de tu selección.
            Compártelo con tu familia, tus amigos y con todo el mundo.
          </p>

          {/* Jersey pills */}
          <div className="flex flex-wrap gap-2 mt-2">
            {JERSEYS.map(({ label, bg, border }) => (
              <span
                key={label}
                className="px-4 py-2 rounded-full text-[12px] font-extrabold uppercase tracking-wide text-white
                           transition-transform duration-150 hover:scale-105 cursor-default"
                style={{
                  background: bg,
                  border: border ? '1.5px solid rgba(255,255,255,0.18)' : 'none',
                  color: border ? 'hsl(40 6% 75%)' : 'white',
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
