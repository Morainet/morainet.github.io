#!/usr/bin/env node
// 构建后处理:把 HTML 里的根绝对资源路径(/_astro/*、/favicon.svg 等)改写为相对路径,
// 使构建产物不依赖服务器——双击 index.html(file://)也能完整渲染与跳转。
// canonical/OG 等绝对域名 URL 不受影响。
import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const outDir = path.resolve(process.env.OUT_DIR || 'dist')

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = path.join(dir, name)
    if (statSync(p).isDirectory()) return walk(p)
    return p.endsWith('.html') ? [p] : []
  })
}

const files = walk(outDir)
let rewritten = 0

for (const file of files) {
  const rel = path.relative(outDir, file)
  const depth = rel.split(path.sep).length - 1 // index.html -> 0;projects/mcos/index.html -> 2
  const prefix = depth === 0 ? '' : '../'.repeat(depth)
  const html = readFileSync(file, 'utf8')

  // 属性开头的根绝对路径 + srcset 中逗号后的根绝对路径(不匹配 // 开头的协议相对)
  const next = html
    .replace(/(\b(?:href|src|srcset)=")\/(?!\/)/g, `$1${prefix}`)
    .replace(/(,\s*)\/(?!\/)/g, '$1' + prefix)

  if (next !== html) {
    writeFileSync(file, next)
    rewritten++
  }
}

console.log(`[relativize] ${files.length} 个 HTML,重写资源路径 ${rewritten} 个(outDir=${path.relative(process.cwd(), outDir)})`)
