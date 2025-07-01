import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // Base path for GitHub Pages deployment
  base: '/ccweb/',
  plugins: [react()],
  publicDir: 'public', // Ensures public directory is used for static assets
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias for cleaner imports
    },
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei'], // Prebundle these for optimization
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Split vendor chunks
          three: ['three', '@react-three/fiber', '@react-three/drei'], // Split Three.js chunks
          animations: ['framer-motion', 'gsap'], // Split animations chunks
        },
      },
    },
    assetsDir: 'assets', // Store static assets in the 'assets' directory
    emptyOutDir: true, // Clean the output directory before building
    sourcemap: false, // Disable source maps for production
    target: 'es2015', // Ensure compatibility with modern browsers
    copyPublicDir: true, // Ensures public files are copied correctly
  },
});
