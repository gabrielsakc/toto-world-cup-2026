const LOGOS = ['Vortex', 'Nimbus', 'Prysma', 'Cirrus', 'Kynder', 'Halcyn']

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 flex-shrink-0">
      {/* Liquid-glass icon */}
      <div className="liquid-glass w-8 h-8 rounded-lg flex items-center justify-center">
        <span className="text-sm font-bold text-foreground/80">{name[0]}</span>
      </div>
      <span className="text-base font-semibold text-foreground/70 whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

export default function LogoMarquee() {
  const doubled = [...LOGOS, ...LOGOS] // seamless loop

  return (
    <div className="w-full pb-10">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex items-center gap-12">

          {/* Static left label */}
          <p className="text-sm text-foreground/50 leading-snug flex-shrink-0 text-left">
            Trusted by innovators<br />across the globe
          </p>

          {/* Marquee track */}
          <div className="flex-1 overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 z-10
                            bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 z-10
                            bg-gradient-to-l from-background to-transparent pointer-events-none" />

            <div
              className="flex items-center gap-16"
              style={{ animation: 'marquee 20s linear infinite', width: 'max-content' }}
            >
              {doubled.map((name, i) => (
                <LogoItem key={`${name}-${i}`} name={name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
