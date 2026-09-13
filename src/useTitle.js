import { useEffect } from 'react'

// 设置页面 <title>，提升 SEO 与多标签浏览体验。
export function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · Morainet` : 'Morainet'
    return () => {
      document.title = 'Morainet'
    }
  }, [title])
}
