# morainet.github.io

Morainet 的**项目介绍平台**(Astro 静态站,GitHub Pages 自动部署)。
访问地址:<https://morainet.github.io>

> 分工:`Morainet/morainet` + 主站 <https://morainet.liumingzhi.cn> 承载**组织介绍**;
> 本仓库只负责**各个单独项目的详细介绍**,并被主站关联引用。

## 架构

```
morainet.github.io/
├── astro.config.mjs              # site / outDir,支持 SITE 环境变量覆盖
├── scripts/
│   └── build-project.mjs         # 单项目独立构建(输出自包含站点,可部署 Vercel)
├── src/
│   ├── content.config.js         # projects 集合定义(frontmatter schema)
│   ├── content/projects/         # ★ 每个项目一个目录
│   │   ├── mcos/
│   │   │   ├── index.md          # 元数据(frontmatter)+ 正文(Markdown)
│   │   │   └── assets/           # 项目截图等资源(可选)
│   │   └── morainet-ai/index.md
│   ├── layouts/Base.astro        # <head>/SEO/主题脚本/导航/页脚
│   ├── components/               # Nav / Footer / ProjectCard / ProjectPage
│   ├── pages/
│   │   ├── index.astro           # 项目总目录(hero + 统计 + 技术方向 + 搜索筛选)
│   │   ├── projects/[slug].astro # 项目详情页(整站与独立构建共用视图)
│   │   └── 404.astro
│   └── styles/global.css         # 全站样式(CSS 变量 + 暗色模式)
└── .github/workflows/deploy.yml  # push main → 自动构建发布 GitHub Pages
```

两种构建模式,共用同一份内容:

| 模式 | 命令 | 产物 | 用途 |
|---|---|---|---|
| 整站 | `npm run build` | `dist/` | GitHub Pages(morainet.github.io),聚合所有项目 |
| 单项目独立站 | `npm run build:project -- <slug>` | `dist-project/<slug>/` | 部署到 Vercel 等并绑定独立域名,首页即该项目详情 |

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 整站构建 → dist/
npm run preview  # 本地预览构建产物
```

## 如何新增一个项目

新建目录 `src/content/projects/<slug>/index.md`(目录名即详情页路径):

```markdown
---
title: 我的项目
icon: 🚀
tagline: 一句话简介
description: 卡片与搜索用的简短描述
status: 活跃          # 活跃 / 开发中 / 实验中(决定状态标签颜色)
tags: [标签1, 标签2]   # 用于首页筛选与技术方向聚合
repo: https://github.com/Morainet/my-project
demo: ''              # 可选,留空不展示
featured: true        # ⭐ 重点推进标记
order: 5              # 排序,越小越靠前
highlights:           # 详情页「核心特性」清单
  - 特性一
  - 特性二
tech: [React, Rust]   # 详情页「技术栈」徽章
---

## 项目介绍

正文用 Markdown 书写,构建时渲染为静态 HTML。

![界面截图](./assets/screenshot.png)   <!-- 截图放同目录 assets/ 下 -->
```

保存并推送到 `main`,GitHub Actions 自动重新构建部署。

## 单项目独立发布(可选)

某个项目需要独立域名/独立部署时(如 `quill.morainet.cn`):

```bash
# 构建自包含单项目站点 → dist-project/quill/
npm run build:project -- quill

# 有独立域名时指定,保证 canonical/OG 链接正确
SITE=https://quill.morainet.cn npm run build:project -- quill
```

产物是标准静态站点,直接导入 Vercel:

- **Vercel 控制台**:New Project → Import 本仓库 → Build Command 填
  `npm run build:project -- quill`,Output Directory 填 `dist-project/quill`
- 或本地构建后 `vercel deploy dist-project/quill`

后续接入 Vercel 时,也可以为每个项目单独建 Vercel Project,各自绑定域名、互不影响。

## 技术栈

- [Astro 5](https://astro.build) 静态站:每个页面构建期渲染为真实 HTML,SEO 友好,默认零运行时 JS
- 交互(主题切换、搜索、筛选)为少量原生 JS,无框架运行时
- GitHub Actions 自动构建并发布到 GitHub Pages
