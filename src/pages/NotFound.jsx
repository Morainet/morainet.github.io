import { Link } from 'react-router-dom'
import { useTitle } from '../useTitle.js'

export default function NotFound() {
  useTitle('页面不存在')

  return (
    <section className="section notfound container">
      <div className="notfound-code">404</div>
      <h1>页面走丢了</h1>
      <p className="empty">你访问的地址不存在，或该项目尚未公开。</p>
      <div className="notfound-actions">
        <Link to="/" className="btn">回到首页</Link>
        <Link to="/projects" className="btn-outline">浏览项目</Link>
      </div>
    </section>
  )
}
