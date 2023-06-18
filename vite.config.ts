import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "./node_modules"
    }
  },
  build: {
    outDir: "docs", // Github Docs
    cssMinify: true,
    manifest: true,
    sourcemap: true
  }
})
