// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url' // <-- NEW: import fileURLToPath

// NEW: Define __dirname for es module compatibility
const __filename = fileURLToPath(import.meta.url) // Gets the path to the current file
const __dirname = path.dirname(__filename) // Gets the directory of the current file
// ---------------------------------------------------

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})