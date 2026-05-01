import { motion } from 'framer-motion'

const CARDS = [
  {
    icon:    '🍎',
    store:   'Descarga en',
    name:    'App Store',
    note:    'iOS 15+',
    href:    '#',
    accent:  false,
  },
  {
    icon:    '🤖',
    store:   'Descarga en',
    name:    'Google Play',
    note:    'Android 9+',
    href:    '#',
    accent:  true,
  },
  {
    icon:    '💻',
    store:   'Descarga para',
    name:    'Windows PC',
    note:    'Windows 10 / 11',
    href:    'Images/TotoAgent (1).exe',
    download:true,
    accent:  false,
  },
]

export default function DownloadSection() {
  return (
    <section
      id="descarga"
      className="py-28 px-6 text-center"
      style={{ background: 'hsl(260 87% 3%)' }}
    >
      {/* Header */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <p
          className="text-[11px] font-extrabold uppercase tracking-[3px] mb-4"
          style={{ color: '#E8312A' }}
        >
          Disponible ahora — Gratis
        </p>
        <h2
          className="leading-none mb-4"
          style={{
            fontFamily:    "'Bebas Neue', cursive",
            fontSize:      'clamp(44px, 7vw, 80px)',
            color:         'hsl(40 6% 95%)',
            letterSpacing: '2px',
          }}
        >
          DESCARGA<br />A TOTO
        </h2>
        <p className="text-base mt-3" style={{ color: 'hsl(40 6% 55%)' }}>
          Para todos tus dispositivos. Listo para el Mundial 2026.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-wrap gap-5 justify-center mt-14">
        {CARDS.map(({ icon, store, name, note, href, download, accent }, i) => (
          <motion.a
            key={name}
            href={href}
            {...(download ? { download: true } : {})}
            className="flex flex-col items-center gap-3 rounded-[22px] px-14 py-11 min-w-[200px]
                       no-underline transition-all duration-300 hover:-translate-y-3"
            style={{
              background: accent ? '#E8312A' : '#0A1628',
              boxShadow:  accent
                ? '0 8px 32px rgba(232,49,42,0.28)'
                : '0 8px 32px rgba(10,22,40,0.5)',
              color: 'white',
              textDecoration: 'none',
            }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            whileHover={{
              boxShadow: accent
                ? '0 28px 56px rgba(232,49,42,0.4)'
                : '0 28px 56px rgba(10,22,40,0.7)',
            }}
          >
            <span className="text-5xl">{icon}</span>
            <span
              className="text-[10px] uppercase tracking-[2.5px] font-bold"
              style={{ opacity: 0.55 }}
            >
              {store}
            </span>
            <span
              style={{
                fontFamily:    "'Bebas Neue', cursive",
                fontSize:      '28px',
                letterSpacing: '2px',
              }}
            >
              {name}
            </span>
            <span className="text-[11px]" style={{ opacity: 0.4, marginTop: '-8px' }}>
              {note}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Stars */}
      <motion.div
        className="mt-14 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-2xl" style={{ color: '#FFD700' }}>★</span>
          ))}
        </div>
        <p className="text-sm" style={{ color: 'hsl(40 6% 45%)' }}>
          ¡Únete a la hinchada más fiel del Mundial!
        </p>
      </motion.div>
    </section>
  )
}
