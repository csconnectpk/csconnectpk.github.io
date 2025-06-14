import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  // Set base path for GitHub Pages deployment
  base: '/ccweb/',
  plugins: [react()],
  publicDir: 'public', // Ensure public directory is processed
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          animations: ['framer-motion', 'gsap']
        }
      }
    },
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false,
    target: 'es2015',
    copyPublicDir: true // Ensure public files are copied
  }
})
