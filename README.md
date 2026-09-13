# morainet.github.io

Morainet 组织的静态展示站，由 GitHub Pages（Jekyll）自动构建，访问地址：<https://morainet.github.io>

## 站点结构

```
morainet.github.io/
├── _config.yml              # 站点与组织信息
├── _layouts/                # 页面骨架（default / project）
├── _includes/               # 可复用片段（导航 / 页脚 / 项目卡片）
├── _projects/               # 每个项目一个 .md，自动生成详情页
├── projects/index.html      # 项目总览页
├── about.md                 # 关于页
├── index.html               # 首页（英雄区 + 项目网格）
└── assets/                  # CSS / JS
```

页面层级：**首页 → 项目列表 → 单个项目详情页**，支持持续扩展。

## 如何新增一个项目

在 `_projects/` 下新建一个 `.md` 文件，例如 `_projects/my-project.md`：

```yaml
---
title: 项目名
icon: "🚀"            # 卡片图标（emoji）
layout: project
tagline: 一句话简介
description: 用于卡片与列表的简短描述。
status: 活跃          # 活跃 / 开发中 / 实验中（决定状态标签颜色）
tags: [标签1, 标签2]
repo: "https://github.com/Morainet/my-project"
featured: true        # true 会出现在首页「精选项目」
order: 5              # 排序，数字越小越靠前
---

## 项目介绍
这里写详情页正文（支持 Markdown）。
```

保存后推送到 `main`，GitHub Pages 会自动重新构建。

## 本地预览（可选）

```bash
bundle install
bundle exec jekyll serve
# 打开 http://localhost:4000
```

## 启用 GitHub Pages

仓库 **Settings → Pages → Build and deployment → Source** 选择
`Deploy from a branch`，Branch 选 `main` / `(root)`，保存即可。
（Jekyll 会被 GitHub 自动构建，无需额外 CI。）
