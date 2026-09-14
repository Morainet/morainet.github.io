/**
 * 计算当前页面到站点根目录的相对前缀。
 * 页内链接全部使用相对路径,使构建产物在 file:// 直开(双击 index.html)时也能跳转。
 *
 * relToRoot("/")               -> "."
 * relToRoot("/projects/mcos/") -> "../.."
 * relToRoot("/404.html")       -> "."(文件型页面按所在目录计)
 */
export function relToRoot(pathname: string): string {
  const clean = pathname.replace(/[^/]+\.html?$/, '')
  const parts = clean.split('/').filter(Boolean)
  return parts.length ? parts.map(() => '..').join('/') : '.'
}

/**
 * 拼接站点内相对链接。目录型目标显式落到 index.html:
 * file:// 协议不会自动补 index.html(会显示目录列表),显式写出让构建产物双击即可导航。
 *
 * link('.', '')              -> './index.html'
 * link('../..', 'projects/mcos/') -> '../../projects/mcos/index.html'
 */
export function link(rel: string, path: string): string {
  const dir = path.replace(/\/$/, '')
  const file = dir === '' ? 'index.html' : `${dir}/index.html`
  return rel === '.' ? `./${file}` : `${rel}/${file}`
}
