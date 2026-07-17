import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // Electron file:// 协议需要相对路径
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
})
