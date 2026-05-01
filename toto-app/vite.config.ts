import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev → base '/'  |  Build (GitHub Pages) → base '/toto-world-cup-2026/'
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/toto-world-cup-2026/' : '/',
}))
