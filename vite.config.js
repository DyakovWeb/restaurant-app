import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ include: "**/*.svg" })],

  server: {
    open: true,
    port: 3000
  },

  define: {
    __API__: JSON.stringify("http://localhost:8000")
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
