import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [react()],
      build: {
        outDir: 'dist'
      },
      server: {
        port: 3000,
        open: true,
        proxy: {
          '/api': {
            target: 'http://localhost:3001',
            secure: false,
            changeOrigin: true
          }
        }
      }
    }
  } else {
    return {
      plugins: [react()],
      build: {
        outDir: 'dist'
      }
    }
  }
})