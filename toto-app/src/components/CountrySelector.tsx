import { useState } from 'react'

const REGIONS = [
  {
    label: '🌎 Américas',
    options: [
      { value: 'ar', label: '🇦🇷 Argentina' },
      { value: 'bo', label: '🇧🇴 Bolivia' },
      { value: 'br', label: '🇧🇷 Brasil' },
      { value: 'ca', label: '🇨🇦 Canadá' },
      { value: 'cl', label: '🇨🇱 Chile' },
      { value: 'co', label: '🇨🇴 Colombia' },
      { value: 'cr', label: '🇨🇷 Costa Rica' },
      { value: 'ec', label: '🇪🇨 Ecuador' },
      { value: 'us', label: '🇺🇸 Estados Unidos' },
      { value: 'hn', label: '🇭🇳 Honduras' },
      { value: 'jm', label: '🇯🇲 Jamaica' },
      { value: 'mx', label: '🇲🇽 México' },
      { value: 'pa', label: '🇵🇦 Panamá' },
      { value: 'py', label: '🇵🇾 Paraguay' },
      { value: 'pe', label: '🇵🇪 Perú' },
      { value: 'uy', label: '🇺🇾 Uruguay' },
      { value: 've', label: '🇻🇪 Venezuela' },
    ],
  },
  {
    label: '🌍 Europa',
    options: [
      { value: 'de', label: '🇩🇪 Alemania' },
      { value: 'at', label: '🇦🇹 Austria' },
      { value: 'be', label: '🇧🇪 Bélgica' },
      { value: 'hr', label: '🇭🇷 Croacia' },
      { value: 'dk', label: '🇩🇰 Dinamarca' },
      { value: 'es', label: '🇪🇸 España' },
      { value: 'sco', label: '🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escocia' },
      { value: 'fr', label: '🇫🇷 Francia' },
      { value: 'gb', label: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra' },
      { value: 'it', label: '🇮🇹 Italia' },
      { value: 'nl', label: '🇳🇱 Países Bajos' },
      { value: 'pl', label: '🇵🇱 Polonia' },
      { value: 'pt', label: '🇵🇹 Portugal' },
      { value: 'rs', label: '🇷🇸 Serbia' },
      { value: 'ch', label: '🇨🇭 Suiza' },
      { value: 'tr', label: '🇹🇷 Turquía' },
      { value: 'ua', label: '🇺🇦 Ucrania' },
    ],
  },
  {
    label: '🌍 África',
    options: [
      { value: 'dz', label: '🇩🇿 Argelia' },
      { value: 'cm', label: '🇨🇲 Camerún' },
      { value: 'eg', label: '🇪🇬 Egipto' },
      { value: 'gh', label: '🇬🇭 Ghana' },
      { value: 'ci', label: '🇨🇮 Costa de Marfil' },
      { value: 'ma', label: '🇲🇦 Marruecos' },
      { value: 'ng', label: '🇳🇬 Nigeria' },
      { value: 'sn', label: '🇸🇳 Senegal' },
      { value: 'za', label: '🇿🇦 Sudáfrica' },
      { value: 'tn', label: '🇹🇳 Túnez' },
    ],
  },
  {
    label: '🌏 Asia y Oceanía',
    options: [
      { value: 'sa', label: '🇸🇦 Arabia Saudita' },
      { value: 'au', label: '🇦🇺 Australia' },
      { value: 'cn', label: '🇨🇳 China' },
      { value: 'kr', label: '🇰🇷 Corea del Sur' },
      { value: 'ir', label: '🇮🇷 Irán' },
      { value: 'jp', label: '🇯🇵 Japón' },
      { value: 'nz', label: '🇳🇿 Nueva Zelanda' },
      { value: 'qa', label: '🇶🇦 Qatar' },
      { value: 'uz', label: '🇺🇿 Uzbekistán' },
    ],
  },
]

export default function CountrySelector() {
  const [selected, setSelected] = useState('')
  const [shaking, setShaking] = useState(false)

  function goToCountry(code: string) {
    window.location.href = `paises/${code}/index.html`
  }

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const code = e.target.value
    setSelected(code)
    if (code) goToCountry(code)
  }

  function handleGo() {
    if (!selected) {
      setShaking(true)
      setTimeout(() => setShaking(false), 500)
      return
    }
    goToCountry(selected)
  }

  return (
    <div className="flex flex-col gap-3 w-full max-w-[380px]">
      <p
        className="text-[11px] font-bold uppercase tracking-[2px]"
        style={{ color: '#FFD700', opacity: 0.85 }}
      >
        ELIGE TU PAÍS · CONOCE A TOTO
      </p>

      {/* Select dropdown */}
      <div className="relative">
        <select
          value={selected}
          onChange={handleChange}
          className={`
            w-full appearance-none rounded-xl px-5 py-4 pr-12
            text-sm font-semibold cursor-pointer
            focus:outline-none transition-all duration-200
            ${shaking ? 'animate-shake' : ''}
          `}
          style={{
            background:    'rgba(255,255,255,0.07)',
            color:         'hsl(40 6% 95%)',
            border:        shaking
                             ? '2px solid #E8312A'
                             : '1.5px solid rgba(255,255,255,0.18)',
            backdropFilter:'blur(8px)',
            boxShadow:     shaking
                             ? '0 0 0 4px rgba(232,49,42,0.2)'
                             : 'inset 0 1px 1px rgba(255,255,255,0.08)',
          }}
        >
          <option value="" style={{ background: '#0b0b1f', color: '#ccc' }}>
            — Selecciona tu país —
          </option>
          {REGIONS.map(region => (
            <optgroup key={region.label} label={region.label} style={{ background: '#0b0b1f' }}>
              {region.options.map(opt => (
                <option
                  key={opt.value}
                  value={opt.value}
                  style={{ background: '#0b0b1f', color: '#f0ece6' }}
                >
                  {opt.label}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        <span
          className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-lg"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          ▾
        </span>
      </div>

      {/* GO button */}
      <button
        onClick={handleGo}
        className="w-full py-[17px] rounded-xl font-bebas text-xl tracking-[2px] text-white cursor-pointer
                   flex items-center justify-center gap-2
                   transition-all duration-200 hover:-translate-y-1 active:translate-y-0"
        style={{
          background: 'linear-gradient(135deg, #E8312A 0%, #b01f18 100%)',
          boxShadow:  '0 8px 28px rgba(232,49,42,0.42)',
          letterSpacing: '2.5px',
        }}
      >
        ¡VER A TOTO EN MI IDIOMA! &nbsp;⚽
      </button>

      {/* Download quick links */}
      <div className="flex gap-2">
        {[
          { href: '#descarga', icon: '📱', label: 'Móvil' },
          { href: 'Images/TotoAgent (1).exe', icon: '💻', label: 'PC', download: true },
        ].map(({ href, icon, label, download }) => (
          <a
            key={label}
            href={href}
            {...(download ? { download: true } : {})}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg
                       text-xs font-bold uppercase tracking-wide
                       transition-all duration-200 hover:-translate-y-0.5"
            style={{
              color:         'rgba(240,236,230,0.65)',
              background:    'rgba(255,255,255,0.05)',
              border:        '1.5px solid rgba(255,255,255,0.12)',
              backdropFilter:'blur(4px)',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'hsl(40 6% 95%)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,236,230,0.65)')}
          >
            <span className="text-base">{icon}</span> {label}
          </a>
        ))}
      </div>
    </div>
  )
}
