import { useMemo, useState } from 'react'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'

export default function Projects() {
  const allTags = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tags))).sort(),
    []
  )
  const [activeTag, setActiveTag] = useState('全部')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return [...projects]
      .sort((a, b) => a.order - b.order)
      .filter((p) => (activeTag === '全部' ? true : p.tags.includes(activeTag)))
      .filter((p) =>
        q === ''
          ? true
          : [p.title, p.tagline, p.description, ...p.tags]
              .join(' ')
              .toLowerCase()
              .includes(q)
      )
  }, [activeTag, query])

  return (
    <section className="section">
      <h1>我们的项目</h1>
      <p className="lead">这里集中展示 Morainet 组织内正在推进的各类项目。</p>

      <div className="filters">
        <input
          className="search"
          type="search"
          placeholder="搜索项目…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="tag-filters">
          {['全部', ...allTags].map((t) => (
            <button
              key={t}
              className={`chip ${activeTag === t ? 'chip-active' : ''}`}
              onClick={() => setActiveTag(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      ) : (
        <p className="empty">没有匹配的项目。</p>
      )}
    </section>
  )
}
