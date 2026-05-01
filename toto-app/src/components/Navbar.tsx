const NAV_LINKS = [
  { label: 'Características', href: '#features' },
  { label: 'Camisetas',       href: '#jerseys'  },
  { label: 'Sedes',           href: '#sedes'    },
]

export default function Navbar() {
  return (
    <header
      className="fixed left-0 right-0 z-50"
      style={{ top: '34px' }}  /* offset for announcement bar */
    >
      <nav
        className="flex items-center justify-between py-4 px-8"
        style={{
          background:    'rgba(5,8,16,0.6)',
          backdropFilter:'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom:  '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-bebas text-2xl tracking-widest no-underline"
          style={{ color: '#FFD700', textDecoration: 'none' }}
        >
          TOTO <span className="text-xl">⚽</span>
        </a>

        {/* Center links */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 no-underline block"
                style={{ color: 'rgba(240,236,230,0.65)', textDecoration: 'none' }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'hsl(40 6% 95%)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'rgba(240,236,230,0.65)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#descarga"
          className="liquid-glass px-5 py-2 rounded-full text-sm font-bold tracking-wide
                     transition-all duration-200 no-underline"
          style={{
            color:          '#FFD700',
            textDecoration: 'none',
            letterSpacing:  '0.5px',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,215,0,0.1)')}
          onMouseLeave={e => (e.currentTarget.style.background = '')}
        >
          Descargar Gratis
        </a>
      </nav>
    </header>
  )
}
