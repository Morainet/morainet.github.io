import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// 项目集合:src/content/projects/<slug>/index.md
// 目录名即 slug,详情页路径为 /projects/<slug>/。
// 新增项目 = 新建一个目录 + index.md,无需改动任何代码。
// 项目截图等资源放在同目录 assets/ 下,正文中用 ![说明](./assets/xxx.png) 引用。
const projects = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/projects',
    // 用目录名(而非文件名)作为 slug:quill/index.md -> quill
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  // image() 由 Astro 注入,用于声明图片型字段(构建期处理与校验)
  schema: ({ image }) =>
    z.object({
    /** 项目名 */
    title: z.string(),
    /** 项目 logo(可选,经构建管线优化;详情页 Hero 处展示,替代 emoji 图标) */
    logo: image().optional(),
    /** 卡片图标(emoji) */
    icon: z.string().default('📦'),
    /** 一句话简介 */
    tagline: z.string(),
    /** 卡片与 SEO description 用的简短描述 */
    description: z.string(),
    /** 状态,决定标签颜色:活跃 / 开发中 / 实验中 */
    status: z.enum(['活跃', '开发中', '实验中']),
    /** 标签,用于首页筛选与技术方向聚合 */
    tags: z.array(z.string()).default([]),
    /** 仓库地址 */
    repo: z.string().url().optional(),
    /** 在线演示,留空则不展示 */
    demo: z.string().url().optional(),
    /** 重点推进(卡片会带 ⭐ 标记) */
    featured: z.boolean().default(false),
    /** 排序,越小越靠前 */
    order: z.number().default(99),
    /** 核心特性清单 */
    highlights: z.array(z.string()).default([]),
    /** 技术栈徽章 */
    tech: z.array(z.string()).default([]),
  }),
})

// 教程集合:src/content/projects/<slug>/tutorials/*.md
// 教程归属所在项目目录,页面路径为 /projects/<slug>/tutorials/<名称>/。
// generateId 形如 "mcos/getting-started"(去掉 tutorials/ 目录层与扩展名),
// 首段即项目 slug,用于把教程挂到对应项目下。
const tutorials = defineCollection({
  loader: glob({
    pattern: '*/tutorials/**/*.md',
    base: './src/content/projects',
    generateId: ({ entry }) => {
      const parts = entry.split('/')
      parts.splice(1, 1) // 去掉 tutorials/ 目录层
      return parts.join('/').replace(/\.md$/, '')
    },
  }),
  schema: z.object({
    /** 教程标题 */
    title: z.string(),
    /** 一句话简介,教程列表页展示 */
    description: z.string().optional(),
    /** 排序,越小越靠前 */
    order: z.number().default(99),
  }),
})

export const collections = { projects, tutorials }
