import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  // 站点根域名,用于 canonical / OG 等绝对链接。
  // 单项目独立部署时用 SITE 环境变量覆盖,如 SITE=https://quill.morainet.cn
  site: process.env.SITE || 'https://morainet.github.io',
  output: 'static',
  // 单项目独立构建时由 scripts/build-project.mjs 指定输出目录
  outDir: process.env.OUT_DIR || 'dist',
})
