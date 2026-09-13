import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import { useTitle } from '../useTitle.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const sorted = [...projects].sort((a, b) => a.order - b.order)
  const index = sorted.findIndex((p) => p.slug === slug)
  const project = sorted[index]

  useTitle(project ? project.title : '未找到')

  if (!project) {
    return (
      <section className="section">
        <h1>未找到该项目</h1>
        <p className="empty">链接可能已失效，或该项目尚未公开。</p>
        <p className="back"><Link to="/projects">← 返回项目列表</Link></p>
      </section>
    )
  }

  const prev = index > 0 ? sorted[index - 1] : null
  const next = index < sorted.length - 1 ? sorted[index + 1] : null

  return (
    <section className="section project-detail">
      <div className="project-head">
        <div className="project-icon">{project.icon}</div>
        <div>
          <h1>{project.title}</h1>
          <p className="card-tagline">{project.tagline}</p>
        </div>
      </div>

      <div className="project-meta">
        <span className={`status status-${project.status}`}>{project.status}</span>
        {project.repo && (
          <a className="btn-outline" href={project.repo} target="_blank" rel="noopener">查看仓库 ↗</a>
        )}
        {project.demo && (
          <a className="btn-outline" href={project.demo} target="_blank" rel="noopener">在线演示 ↗</a>
        )}
      </div>

      <p className="project-desc">{project.description}</p>

      {project.highlights?.length > 0 && (
        <div className="block">
          <h2>核心特性</h2>
          <ul className="highlight-list">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      )}

      {project.tech?.length > 0 && (
        <div className="block">
          <h2>技术栈</h2>
          <div className="tech-badges">
            {project.tech.map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        </div>
      )}

      <div className="content" dangerouslySetInnerHTML={{ __html: project.body }} />

      <nav className="proj-nav">
        {prev ? (
          <Link to={`/projects/${prev.slug}`} className="proj-nav-item prev">
            <span className="proj-nav-label">← 上一个</span>
            <span className="proj-nav-title">{prev.title}</span>
          </Link>
        ) : <span />}
        {next ? (
          <Link to={`/projects/${next.slug}`} className="proj-nav-item next">
            <span className="proj-nav-label">下一个 →</span>
            <span className="proj-nav-title">{next.title}</span>
          </Link>
        ) : <span />}
      </nav>

      <p className="back"><Link to="/projects">← 返回项目列表</Link></p>
    </section>
  )
}
