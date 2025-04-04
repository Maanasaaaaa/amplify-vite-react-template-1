import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_APP_LANG': JSON.stringify(process.env.VITE_APP_LANG || navigator?.language?.split('-')[0] || 'en')
  }
})
