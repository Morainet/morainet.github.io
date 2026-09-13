import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 组织主页部署在根路径 https://morainet.github.io/，因此 base 为 '/'
export default defineConfig({
  base: '/',
  plugins: [react()],
})
