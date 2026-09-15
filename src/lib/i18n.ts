/**
 * 多语言内容与链接辅助。
 * 内容策略:对应语言缺失的条目回退中文 —— 英文页面始终与中文页面一一对应,
 * 翻译是渐进式的,新增 index.en.md / <名称>.en.md 即逐步替换。
 */
import { getCollection, type CollectionEntry } from 'astro:content'
import type { Locale } from '../i18n/ui'

/** 取项目列表:en 缺失的条目回退中文版 */
export async function getProjects(locale: Locale): Promise<CollectionEntry<'projects'>[]> {
  const zh = await getCollection('projects')
  if (locale === 'zh') return zh
  const en = (await getCollection('projects_en')) as unknown as CollectionEntry<'projects'>[]
  const byId = new Map(en.map((p) => [p.id, p]))
  return zh.map((p) => byId.get(p.id) ?? p)
}

/** 取教程列表(全站,含项目前缀 id):en 缺失的条目回退中文版 */
export async function getTutorials(locale: Locale): Promise<CollectionEntry<'tutorials'>[]> {
  const zh = await getCollection('tutorials')
  if (locale === 'zh') return zh
  const en = (await getCollection('tutorials_en')) as unknown as CollectionEntry<'tutorials'>[]
  const byId = new Map(en.map((x) => [x.id, x]))
  return zh.map((x) => byId.get(x.id) ?? x)
}

/** 站点内路径加语言前缀:en -> "en/<path>",zh 保持原样 */
export function pathFor(locale: Locale, path: string): string {
  return locale === 'en' ? `en/${path}` : path
}

/**
 * 计算当前页在另一语言下的同页地址(相对路径 + 显式 index.html,file:// 可用)。
 * localeHref('/projects/mcos/', 'en')   -> '../../en/projects/mcos/index.html'
 * localeHref('/en/projects/mcos/', 'zh') -> '../projects/mcos/index.html'
 */
export function localeHref(pathname: string, target: Locale): string {
  const clean = pathname.replace(/[^/]+\.html?$/, '').replace(/\/$/, '')
  const stripped = clean.replace(/^\/en/, '')
  const targetPath = target === 'en' ? `/en${stripped}` : stripped
  const fromParts = clean.split('/').filter(Boolean)
  const toParts = targetPath.split('/').filter(Boolean)
  let common = 0
  while (common < fromParts.length && common < toParts.length && fromParts[common] === toParts[common]) {
    common++
  }
  const ups = fromParts.length - common
  const rel = [...Array.from({ length: ups }, () => '..'), ...toParts.slice(common)].join('/')
  return `${rel || '.'}/index.html`
}
