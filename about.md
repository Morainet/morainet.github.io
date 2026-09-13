---
layout: default
title: 关于
permalink: /about/
---
<section class="section">
  <h1>关于本站点</h1>
  <p>这是 <strong>{{ site.org.name }}</strong> 的<strong>项目展示站</strong>，集中介绍组织内正在推进的各个项目。组织层面的整体介绍请见我们的 GitHub 组织主页。</p>
  <p>在这里你可以：</p>
  <ul>
    <li>在<a href="{{ '/projects/' | relative_url }}">项目列表</a>中浏览全部项目；</li>
    <li>点进任意项目，查看简介、技术栈与仓库链接；</li>
    <li>通过 GitHub 向任意项目提交 Issue 或 PR，参与共建。</li>
  </ul>

  <h2>如何新增一个项目</h2>
  <p>在仓库的 <code>_projects/</code> 目录新增一个 <code>.md</code> 文件（参考已有示例的字段：title / icon / tagline / description / status / tags / repo / featured / order），推送到 <code>main</code> 即可自动生成页面。详见仓库 README。</p>

  <p><a href="{{ site.org.github }}" target="_blank" rel="noopener">前往 Morainet 组织主页 ↗</a></p>
</section>
