import { resolve as PathResolve } from 'path'
import { defineConfig } from 'vite'

import { svelte } from '@sveltejs/vite-plugin-svelte'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte()
  ],
  build: {
    rollupOptions: {
      input: {
        main: PathResolve(__dirname, 'index.html'),
        free: PathResolve(__dirname, 'Free', 'index.html'),
        pro: PathResolve(__dirname, 'Pro', 'index.html'),
      }
    }
  }
})
