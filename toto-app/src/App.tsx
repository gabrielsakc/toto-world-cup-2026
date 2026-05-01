import { motion } from 'framer-motion'
import totoImg from './assets/toto.png'

import VideoBackground  from './components/VideoBackground'
import AnnouncementBar  from './components/AnnouncementBar'
import Navbar           from './components/Navbar'
import CountrySelector  from './components/CountrySelector'
import StatsStrip       from './components/StatsStrip'
import FeaturesSection  from './components/FeaturesSection'
import TotoVideoSection from './components/TotoVideoSection'
import JerseyGallery    from './components/JerseyGallery'
import StadiumsSection  from './components/StadiumsSection'
import DownloadSection  from './components/DownloadSection'
import FooterSection    from './components/FooterSection'

import './index.css'

// Announcement bar height (34px) + Navbar height (~65px)
const HEADER_H = 99

export default function App() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">

      {/* ── Fixed bars ─────────────────────────────── */}
      <AnnouncementBar />
      <Navbar />

      {/* ═══════════════════════════════════════════ */}
      {/* HERO SECTION                                */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Animated video backdrop */}
        <VideoBackground />

        {/* Dark blur behind left text column */}
        <div
          className="absolute pointer-events-none z-[5]"
          style={{
            top:    '50%',
            left:   '25%',
            transform: 'translate(-50%, -50%)',
            width:  '620px',
            height: '680px',
            background: 'radial-gradient(ellipse, rgba(5,8,16,0.92) 0%, transparent 70%)',
            filter: 'blur(48px)',
          }}
        />

        {/* ── LEFT column — text + selector ── */}
        <div
          className="absolute inset-y-0 left-0 z-10 flex flex-col justify-center"
          style={{
            width:       '50%',
            paddingTop:  `${HEADER_H}px`,
            paddingLeft: 'clamp(24px, 5vw, 80px)',
            paddingRight:'24px',
            paddingBottom:'48px',
          }}
        >
          <motion.div
            className="flex flex-col gap-5 max-w-[480px]"
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            {/* Eyebrow badge */}
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="text-[10px] font-black uppercase tracking-[2.5px] px-4 py-[6px] rounded-sm"
                style={{ background: '#FFD700', color: '#0A1628', boxShadow: '0 4px 16px rgba(255,215,0,0.35)' }}
              >
                ⚽ FIFA World Cup 2026
              </span>
              <span
                className="text-[11px] font-bold uppercase tracking-[1.5px]"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                USA · Canadá · México
              </span>
            </div>

            {/* Headline */}
            <h1
              className="leading-none select-none"
              style={{
                fontFamily:    "'Bebas Neue', cursive",
                fontSize:      'clamp(64px, 8.5vw, 118px)',
                letterSpacing: '3px',
                lineHeight:    0.88,
                color:         'hsl(40 6% 95%)',
              }}
            >
              TOTO
              <span
                className="block"
                style={{
                  backgroundImage:     'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  WebkitBackgroundClip:'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip:      'text',
                }}
              >
                TU
              </span>
              <span
                className="block"
                style={{
                  WebkitTextStroke: '2px hsl(40 6% 95%)',
                  color:            'transparent',
                }}
              >
                COMPAÑERO
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-[15px] leading-7 max-w-sm font-medium"
              style={{
                color:       'hsl(40 6% 72%)',
                borderLeft:  '3px solid #FFD700',
                paddingLeft: '14px',
              }}
            >
              La mascota más fiel del Mundial. Descárgalo y vive cada partido
              con tu selección favorita.
            </p>

            {/* Country Selector */}
            <CountrySelector />
          </motion.div>
        </div>

        {/* ── RIGHT column — Toto full height ── */}
        <motion.div
          className="absolute inset-y-0 right-0 z-20 flex items-end justify-center"
          style={{ width: '52%' }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
        >
          {/* Purple glow */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width:     560,
              height:    560,
              top:       '50%',
              left:      '50%',
              transform: 'translate(-50%, -50%)',
              background:'radial-gradient(circle, rgba(168,85,247,0.25) 0%, rgba(99,102,241,0.14) 45%, transparent 70%)',
              filter:    'blur(36px)',
              animation: 'glow 7s ease-in-out infinite',
            }}
          />
          {/* Gold glow */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width:     320,
              height:    320,
              bottom:    '10%',
              left:      '50%',
              transform: 'translate(-50%, 0)',
              background:'radial-gradient(circle, rgba(255,215,0,0.12) 0%, transparent 70%)',
              filter:    'blur(24px)',
              animation: 'glow 7s ease-in-out infinite 1.5s',
            }}
          />

          {/* Toto — static image, 88vh, floating */}
          <motion.img
            src={totoImg}
            alt="Toto — Tu compañero del Mundial 2026"
            className="relative z-10 select-none pointer-events-none"
            style={{
              height:          'clamp(420px, 88vh, 820px)',
              maxHeight:       '90vh',
              width:           'auto',
              filter:          'drop-shadow(0 48px 72px rgba(0,0,0,0.7))',
              transformOrigin: 'bottom center',
            }}
            animate={{ y: [0, -18, 0], scale: [1, 1.02, 1] }}
            transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
          />

          {/* Floor shadow */}
          <motion.div
            className="absolute bottom-0 rounded-full pointer-events-none"
            style={{
              left:       '50%',
              translateX: '-50%',
              width:      '340px',
              height:     '36px',
              background: 'radial-gradient(ellipse, rgba(0,0,0,0.55) 0%, transparent 70%)',
            }}
            animate={{ scaleX: [1, 0.78, 1], opacity: [0.65, 0.3, 0.65] }}
            transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
          />
        </motion.div>

      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTIONS BELOW HERO                        */}
      {/* ═══════════════════════════════════════════ */}
      <StatsStrip />
      <FeaturesSection />
      <TotoVideoSection />
      <JerseyGallery />
      <StadiumsSection />
      <DownloadSection />
      <FooterSection />

    </div>
  )
}
