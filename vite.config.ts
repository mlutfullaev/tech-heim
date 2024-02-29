import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: "@import '@/assets/styles/variables'\n\n",
      },
    },
  },
})
