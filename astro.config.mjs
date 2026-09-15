import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  // 站点根域名,用于 canonical / OG 等绝对链接。
  // 单项目独立部署时用 SITE 环境变量覆盖,如 SITE=https://quill.morainet.cn
  site: process.env.SITE || 'https://morainet.github.io',
  output: 'static',
  // 单项目独立构建时由 scripts/build-project.mjs 指定输出目录
  outDir: process.env.OUT_DIR || 'dist',
  // 多语言:中文为默认语言(URL 不带前缀),英文挂 /en/ 下
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    prefixDefaultLocale: false,
  },
  // sitemap 仅整站构建需要(单项目独立站由部署平台自行收录)
  integrations: process.env.PROJECT_SLUG
    ? []
    : [
        sitemap({
          i18n: {
            defaultLocale: 'zh',
            locales: { zh: 'zh-CN', en: 'en' },
          },
        }),
      ],
})
