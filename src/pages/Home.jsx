import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import { useTitle } from '../useTitle.js'

export default function Home() {
  useTitle('')

  const sorted = [...projects].sort((a, b) => a.order - b.order)
  const featured = sorted.filter((p) => p.featured)

  // 技术方向聚合（标签 + 计数），用于首页标签云
  const tagCount = {}
  projects.forEach((p) => p.tags.forEach((t) => { tagCount[t] = (tagCount[t] || 0) + 1 }))
  const directions = Object.entries(tagCount).sort((a, b) => b[1] - a[1])

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

      <section className="stats container">
        <div className="stat">
          <span className="stat-num">{projects.length}</span>
          <span className="stat-label">开源项目</span>
        </div>
        <div className="stat">
          <span className="stat-num">{directions.length}</span>
          <span className="stat-label">技术方向</span>
        </div>
        <div className="stat">
          <span className="stat-num">{featured.length}</span>
          <span className="stat-label">重点推进</span>
        </div>
      </section>

      <section className="section container">
        <h2>技术方向</h2>
        <div className="tag-cloud">
          {directions.map(([tag, count]) => (
            <span key={tag} className="cloud-chip" title={`${count} 个项目`}>
              {tag}<sup>{count}</sup>
            </span>
          ))}
        </div>
      </section>

      <section className="section container">
        <h2>重点推进</h2>
        <div className="grid">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="section container">
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
