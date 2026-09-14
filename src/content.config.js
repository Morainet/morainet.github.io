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
  schema: z.object({
    /** 项目名 */
    title: z.string(),
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

export const collections = { projects }
