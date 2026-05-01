import { motion } from 'framer-motion'
import totoImg from '../assets/toto.png'

export default function TotoCharacter() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Ambient purple/indigo glow behind Toto */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width:  500,
          height: 500,
          top:    '50%',
          left:   '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(168,85,247,0.28) 0%, rgba(99,102,241,0.16) 45%, transparent 70%)',
          filter: 'blur(28px)',
          animation: 'glow 7s ease-in-out infinite',
        }}
      />

      {/* Secondary warm glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width:  320,
          height: 320,
          top:    '60%',
          left:   '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(252,211,77,0.12) 0%, transparent 70%)',
          filter: 'blur(20px)',
          animation: 'glow 7s ease-in-out infinite 1s',
        }}
      />

      {/* Floor shadow */}
      <motion.div
        className="absolute bottom-[-12px] left-1/2 rounded-full pointer-events-none"
        style={{
          width: 220,
          height: 28,
          translateX: '-50%',
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.45) 0%, transparent 70%)',
        }}
        animate={{ scaleX: [1, 0.82, 1], opacity: [0.55, 0.3, 0.55] }}
        transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
      />

      {/* Toto — floating + subtle scale pulse */}
      <motion.img
        src={totoImg}
        alt="Toto — Tu compañero del Mundial 2026"
        className="relative z-10 select-none pointer-events-none"
        style={{
          height: 'clamp(260px, 32vh, 420px)',
          width:  'auto',
          filter: 'drop-shadow(0 28px 48px rgba(0,0,0,0.55))',
        }}
        animate={{
          y:     [0, -22, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 7,
          ease:     'easeInOut',
          repeat:   Infinity,
        }}
      />
    </div>
  )
}
