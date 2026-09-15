/**
 * 拼接站点内根绝对链接:href('projects/mcos/') -> '/projects/mcos/'。
 *
 * 全站链接必须使用根绝对路径,不能改回相对路径:View Transitions 换页时,
 * 新页面的 <link>/<img> 会按「旧页面所在目录」解析相对路径,跨目录跳转后
 * 样式表 404、整页无样式(须手动刷新)。绝对路径与页面深度无关,从根本上
 * 规避该问题;404.html 出现在任意深层路径下也能正确引用资源。
 * 代价:产物不再支持 file:// 双击直开(部署到 GitHub Pages / Vercel 不受影响)。
 */
export function href(path: string): string {
  return `/${path.replace(/^\//, '')}`
}
