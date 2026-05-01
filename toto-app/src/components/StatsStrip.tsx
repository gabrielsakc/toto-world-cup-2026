import { motion } from 'framer-motion'

const STATS = [
  { num: '48',   label: 'Selecciones',        bg: '#E8312A', numColor: '#FFD700' },
  { num: '3',    label: 'Países Sede',         bg: '#0A1628', numColor: '#FFFFFF' },
  { num: '104',  label: 'Partidos',            bg: '#00A651', numColor: '#FFD700' },
  { num: '2026', label: 'El Año del Mundial',  bg: '#1a3a5c', numColor: '#FFFFFF' },
]

export default function StatsStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 w-full shadow-2xl">
      {STATS.map(({ num, label, bg, numColor }, i) => (
        <motion.div
          key={label}
          className="flex flex-col items-center justify-center gap-1 py-7 text-center"
          style={{ background: bg }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div
            style={{
              fontFamily:    "'Bebas Neue', cursive",
              fontSize:      'clamp(40px, 5vw, 54px)',
              color:         numColor,
              letterSpacing: '2px',
              lineHeight:    1,
            }}
          >
            {num}
          </div>
          <div className="text-[10px] font-extrabold tracking-[1.5px] uppercase text-white/55">
            {label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
