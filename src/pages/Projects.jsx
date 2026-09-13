import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'

export default function Projects() {
  const sorted = [...projects].sort((a, b) => a.order - b.order)

  return (
    <section className="section">
      <h1>我们的项目</h1>
      <p className="lead">这里集中展示 Morainet 组织内正在推进的各类项目。</p>
      <div className="grid">
        {sorted.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}
