import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/sdk.tsx'),
      name: 'eKYCSDK',
      fileName: 'ekyc-sdk',
      formats: ['umd', 'iife']
    },
    rollupOptions: {
      // Bundle React and ReactDOM for easier embedding (no external dependencies needed)
      // Remove 'react' and 'react-dom' from external to bundle them
      external: [],
      output: {
        // No globals needed since we're bundling everything
      }
    }
  }
})
