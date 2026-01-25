import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// cd C:/Users/vlad2/WebstormProjects/VueRouter_project_2026
// npm run build
// gh-pages -d dist
// https://vite.dev/config/
export default defineConfig({
  base: 'VUE_Website',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  }
})