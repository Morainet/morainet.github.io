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
        在 <code>src/data/projects.js</code> 中新增一个对象，关键字段：
      </p>
      <ul>
        <li><code>slug / title / icon / tagline / description</code>：基础信息；</li>
        <li><code>status</code>：可选「活跃 / 开发中 / 实验中」，决定状态标签颜色；</li>
        <li><code>tags</code>：标签数组，用于列表筛选与首页技术方向聚合；</li>
        <li><code>highlights</code>：核心特性清单（字符串数组）；</li>
        <li><code>tech</code>：技术栈（字符串数组，详情页以徽章展示）；</li>
        <li><code>repo</code> / <code>demo</code>：仓库与演示链接（demo 留空则不展示）；</li>
        <li><code>featured / order / body</code>：是否重点推进、排序、详情页正文（支持 HTML）。</li>
      </ul>
      <p>保存并推送即可自动出现在首页与列表，无需改动其他文件。</p>

      <p>
        <a href="https://github.com/Morainet" target="_blank" rel="noopener">
          前往 Morainet 组织主页 ↗
        </a>
      </p>
    </section>
  )
}
