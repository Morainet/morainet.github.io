import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <div className="card-icon">{project.icon}</div>
      <h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3>
      <p className="card-tagline">{project.tagline}</p>
      <p className="card-desc">{project.description}</p>
      <div className="tags">
        {project.tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
      <div className="card-meta">
        <span className={`status status-${project.status}`}>{project.status}</span>
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noopener">仓库 ↗</a>
        )}
      </div>
    </article>
  )
}
