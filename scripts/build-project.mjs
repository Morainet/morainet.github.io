#!/usr/bin/env node
// 单项目独立构建:把某个项目介绍页构建为一个自包含静态站点,
// 可直接部署到 Vercel / 任意静态托管并绑定独立域名。
//
// 用法:
//   npm run build:project -- quill
//   SITE=https://quill.example.com npm run build:project -- quill  # 指定独立域名(用于 canonical)
//
// 产物输出到 dist-project/<slug>/。
import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const slug = process.argv[2]
if (!slug) {
  console.error('用法: npm run build:project -- <项目slug>(如 quill)')
  console.error('可选项目见 src/content/projects/ 下的目录名。')
  process.exit(1)
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const build = spawnSync('npx', ['astro', 'build'], {
  stdio: 'inherit',
  cwd: root,
  env: {
    ...process.env,
    PROJECT_SLUG: slug,
    OUT_DIR: path.join('dist-project', slug),
  },
  shell: process.platform === 'win32',
})
if (build.status !== 0) process.exit(build.status ?? 1)
