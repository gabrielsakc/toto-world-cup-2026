/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'hero-sub': 'hsl(var(--hero-sub))',
        red:    '#E8312A',
        gold:   '#FFD700',
        green:  '#00A651',
        navy:   '#0A1628',
      },
      fontFamily: {
        sans:     ['Geist Sans', 'sans-serif'],
        headline: ['General Sans', 'sans-serif'],
        bebas:    ["'Bebas Neue'", 'cursive'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%':       { transform: 'translateY(-22px) scale(1.03)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.7', transform: 'translate(-50%, -50%) scale(1)' },
          '50%':      { opacity: '1',   transform: 'translate(-50%, -50%) scale(1.08)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%':      { transform: 'translateX(-6px)' },
          '40%':      { transform: 'translateX(6px)' },
          '60%':      { transform: 'translateX(-4px)' },
          '80%':      { transform: 'translateX(4px)' },
        },
      },
      animation: {
        float:   'float 7s ease-in-out infinite',
        marquee: 'marquee 20s linear infinite',
        glow:    'glow 7s ease-in-out infinite',
        shake:   'shake 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}
