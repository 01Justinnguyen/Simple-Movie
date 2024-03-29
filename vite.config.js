import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/pagead': 'https://googleads.g.doubleclick.net'
    },
    port: 8080
  },
  resolve: {
    alias: {
      src: '/src'
    }
  }
})
