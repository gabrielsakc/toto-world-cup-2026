import { motion } from 'framer-motion'

const FEATURES = [
  {
    icon:  '⚽',
    name:  'Resultados en Vivo',
    desc:  'Toto te mantiene al tanto de todos los partidos. Goles, expulsiones y estadísticas al instante.',
    accent:'#E8312A',
  },
  {
    icon:  '🏆',
    name:  'Pronostica y Gana',
    desc:  'Haz tus predicciones antes de cada partido, compite con amigos y escala la tabla de clasificación.',
    accent:'#FFD700',
  },
  {
    icon:  '🎽',
    name:  'Camisetas del Mundo',
    desc:  'Viste a Toto con la camiseta de tu selección. ¡Hay una camiseta por cada país participante!',
    accent:'#00A651',
  },
  {
    icon:  '🗓️',
    name:  'Agenda del Mundial',
    desc:  'Nunca más te pierdas un partido. Toto te recuerda los horarios en tu zona horaria.',
    accent:'#3B82F6',
  },
]

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-28 px-6"
      style={{ background: 'hsl(260 87% 4%)' }}
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
          ¿Qué puede hacer Toto?
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
          TU FAN #1<br />DEL MUNDIAL
        </h2>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {FEATURES.map(({ icon, name, desc, accent }, i) => (
          <motion.div
            key={name}
            className="rounded-2xl p-9 flex flex-col gap-4 cursor-default
                       transition-all duration-300 hover:-translate-y-2"
            style={{
              background:   'rgba(255,255,255,0.04)',
              border:       `1.5px solid rgba(255,255,255,0.08)`,
              borderTop:    `4px solid ${accent}`,
              backdropFilter:'blur(12px)',
              boxShadow:    '0 4px 24px rgba(0,0,0,0.3)',
            }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            whileHover={{ boxShadow: `0 20px 48px rgba(0,0,0,0.5), 0 0 0 1px ${accent}22` }}
          >
            <div className="text-5xl">{icon}</div>
            <h3
              style={{
                fontFamily:    "'Bebas Neue', cursive",
                fontSize:      '28px',
                letterSpacing: '1px',
                color:         'hsl(40 6% 95%)',
              }}
            >
              {name}
            </h3>
            <p className="text-sm leading-7" style={{ color: 'hsl(40 6% 72%)' }}>
              {desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
