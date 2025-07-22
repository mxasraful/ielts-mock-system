import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    watch: {
      usePolling: true, // This can help with WSL/VM file watching issues
    },
  },
})
