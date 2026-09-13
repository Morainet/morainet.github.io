import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <section className="section">
        <h1>未找到该项目</h1>
        <p className="back"><Link to="/projects">← 返回项目列表</Link></p>
      </section>
    )
  }

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
        {project.tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
        {project.repo && (
          <a className="btn-outline" href={project.repo} target="_blank" rel="noopener">
            查看仓库 ↗
          </a>
        )}
      </div>
      <div className="content" dangerouslySetInnerHTML={{ __html: project.body }} />
      <p className="back"><Link to="/projects">← 返回项目列表</Link></p>
    </section>
  )
}
