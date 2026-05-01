import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path resolution:
//   • Local dev (`vite`)                    → '/'
//   • Vercel build (env VERCEL=1)            → '/'
//   • Manual build for GitHub Pages          → '/toto-world-cup-2026/'
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base:
    command === 'build' && !process.env.VERCEL
      ? '/toto-world-cup-2026/'
      : '/',
}))
