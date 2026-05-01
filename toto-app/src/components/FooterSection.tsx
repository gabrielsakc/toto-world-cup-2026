const LINKS = [
  { label: 'Privacidad',      href: '#' },
  { label: 'Términos de uso', href: '#' },
  { label: 'Contacto',        href: '#' },
  { label: 'Soporte',         href: '#' },
]

export default function FooterSection() {
  return (
    <footer
      className="flex flex-col items-center gap-5 py-14 px-6 text-center"
      style={{ background: '#050810' }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily:    "'Bebas Neue', cursive",
          fontSize:      '52px',
          color:         '#FFD700',
          letterSpacing: '5px',
        }}
      >
        TOTO ⚽
      </div>

      {/* Tagline */}
      <p className="text-sm leading-7" style={{ color: 'rgba(255,255,255,0.35)' }}>
        Tu compañero de confianza para el FIFA World Cup 2026™<br />
        USA · Canadá · México
      </p>

      {/* Divider */}
      <div
        className="w-16 h-[2px] rounded"
        style={{ background: '#FFD700', opacity: 0.25 }}
      />

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-8">
        {LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-[11px] font-bold uppercase tracking-[1.5px] transition-colors duration-200 no-underline"
            style={{ color: 'rgba(255,255,255,0.3)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.18)' }}>
        © 2026 Toto World Cup. Todos los derechos reservados.
      </p>
    </footer>
  )
}
