# morainet.github.io

Morainet 组织的**项目展示站**（React + Vite 构建，GitHub Pages 自动部署）。
访问地址：<https://morainet.github.io>

> 组织层面的整体介绍在另一个仓库维护；本仓库只负责「项目展示」。

## 技术栈

- React 18 + React Router（SPA，三层路由：首页 / 项目列表 / 项目详情）
- Vite 构建
- GitHub Actions 自动构建并发布到 GitHub Pages（无需本地构建）

## 本地开发

```bash
npm install
npm run dev      # 启动开发服务器 http://localhost:5173
npm run build    # 产物输出到 dist/
npm run preview  # 本地预览构建产物
```

## 如何新增一个项目

编辑 `src/data/projects.js`，复制一个对象并修改字段：

```js
{
  slug: 'my-project',        // 详情页路径：/projects/my-project
  title: '项目名',
  icon: '🚀',               // 卡片图标（emoji）
  tagline: '一句话简介',
  description: '卡片与列表用的简短描述',
  status: '活跃',            // 活跃 / 开发中 / 实验中（决定状态标签颜色）
  tags: ['标签1', '标签2'],  // 用于列表筛选与首页技术方向聚合
  repo: 'https://github.com/Morainet/my-project',
  demo: '',                 // 演示链接，留空则不展示
  featured: true,           // true 会出现在首页「精选项目」
  order: 5,                 // 排序，越小越靠前
  highlights: ['核心特性一', '核心特性二'],  // 详情页特性清单
  tech: ['React', 'Rust'],  // 详情页技术栈徽章
  body: '<h2>项目介绍</h2><p>详情页正文（支持 HTML）</p>',
}
```

保存并推送到 `main`，GitHub Actions 会自动重新构建部署。

## 启用 GitHub Pages

仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
（首次推送后 Actions 会自动完成首次部署。）
