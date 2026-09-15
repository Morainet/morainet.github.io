/**
 * 单项目独立构建过滤:build:project 时(PROJECT_SLUG 环境变量)只保留该项目,
 * 整站构建时原样返回全部项目。各页面的 getStaticPaths 共用。
 */
import type { CollectionEntry } from 'astro:content'

export function onlyStandalone(
  list: CollectionEntry<'projects'>[],
): CollectionEntry<'projects'>[] {
  const only = process.env.PROJECT_SLUG
  return only ? list.filter((p) => p.id === only) : list
}
