import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'

export default function Home() {
  const sorted = [...projects].sort((a, b) => a.order - b.order)
  const featured = sorted.filter((p) => p.featured)

  return (
    <>
      <section className="hero">
        <h1>Morainet</h1>
        <p className="tagline">务实、开放、探索边界的技术组织</p>
        <p className="lead">
          这里集中展示 Morainet 组织内正在推进的各类项目，涵盖人工智能、端侧智能、
          音视频生成与开发者工具等方向。
        </p>
        <Link to="/projects" className="btn">查看项目 →</Link>
      </section>

      <section className="section">
        <h2>精选项目</h2>
        <div className="grid">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>全部项目</h2>
        <div className="grid">
          {sorted.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </>
  )
}
