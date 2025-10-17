import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'], // Include file JPG maiuscoli come asset
  server: {
    port: 3000,
    open: true
  }
})
