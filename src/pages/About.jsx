import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="section">
      <h1>关于本站点</h1>
      <p>
        这是 <strong>Morainet</strong> 的<strong>项目展示站</strong>，集中介绍组织内正在推进的各个项目。
        组织层面的整体介绍请见我们的 GitHub 组织主页。
      </p>
      <ul>
        <li>在<Link to="/projects">项目列表</Link>中浏览全部项目；</li>
        <li>点进任意项目，查看简介、技术栈与仓库链接；</li>
        <li>通过 GitHub 向任意项目提交 Issue 或 PR，参与共建。</li>
      </ul>

      <h2>如何新增一个项目</h2>
      <p>
        在 <code>src/data/projects.js</code> 中新增一个对象（包含 slug / title / icon / tagline /
        description / status / tags / repo / featured / order / body），保存并推送即可自动出现在首页与列表。
      </p>

      <p>
        <a href="https://github.com/Morainet" target="_blank" rel="noopener">
          前往 Morainet 组织主页 ↗
        </a>
      </p>
    </section>
  )
}
