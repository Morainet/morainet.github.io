// 所有项目集中在此维护。
// 新增项目：复制下面一个对象，改好字段即可（首页/列表/详情页会自动生成）。
// status 可选值：活跃 / 开发中 / 实验中（决定状态标签颜色）
// highlights：核心特性清单（字符串数组）
// tech：技术栈（字符串数组，详情页以徽章展示）
// demo：可选项目演示链接（留空则不展示）
// body 为详情页正文，支持 HTML 字符串。

export const projects = [
  {
    slug: 'morainet-ai',
    title: 'Morainet AI',
    icon: '🤖',
    tagline: '智能代理与自动化工具集',
    description:
      'Morainet AI 是一组围绕大语言模型智能代理与任务自动化展开的开源项目，探索把 AI 能力落地到真实工作流。',
    status: '活跃',
    tags: ['AI', 'Agent', '自动化', 'Python'],
    repo: 'https://github.com/Morainet/morainet-ai',
    demo: '',
    featured: true,
    order: 1,
    highlights: [
      '可扩展的工具插件体系',
      '多步任务编排与记忆机制',
      '与现有开发流程的集成',
    ],
    tech: ['Python', 'LLM', 'Agent', '工具调用'],
    body: `
      <h2>项目介绍</h2>
      <p>Morainet AI 聚焦于将大语言模型能力封装为可用的智能代理，覆盖从对话、任务编排到工具调用的完整链路，目标是让 Agent 真正能完成端到端的任务。</p>
      <h2>技术方向</h2>
      <ul>
        <li>可扩展的工具插件体系</li>
        <li>多步任务编排与记忆机制</li>
        <li>与现有开发流程的集成</li>
      </ul>
      <h2>获取与参与</h2>
      <p>仓库地址：<a href="https://github.com/Morainet/morainet-ai" target="_blank" rel="noopener">github.com/Morainet/morainet-ai</a></p>
    `,
  },
  {
    slug: 'music-gen-platform',
    title: 'MusicGen Platform',
    icon: '🎵',
    tagline: '文本到音乐的生成平台',
    description:
      '基于 Java Spring Boot、Python MusicGen 与 React 的全栈音乐生成平台，使用 Docker Compose 统一编排各类中间件。',
    status: '活跃',
    tags: ['音乐生成', 'Spring Boot', 'React', 'Docker'],
    repo: 'https://github.com/Morainet/music-gen-platform',
    demo: '',
    featured: true,
    order: 2,
    highlights: [
      '自然语言描述生成音乐',
      '后端任务调度与模型推理',
      'React 试听与创作界面',
      'Docker Compose 一键编排',
    ],
    tech: ['Java Spring Boot', 'Python', 'MusicGen', 'React', 'Docker', 'PostgreSQL', 'Redis', 'RabbitMQ', 'MinIO'],
    body: `
      <h2>项目介绍</h2>
      <p>MusicGen Platform 让用户用自然语言描述即可生成音乐。后端负责任务调度与模型推理，前端提供友好的创作与试听界面。</p>
      <h2>技术栈</h2>
      <ul>
        <li>后端：Java Spring Boot</li>
        <li>推理：Python MusicGen</li>
        <li>前端：React</li>
        <li>基础设施：PostgreSQL、Redis、RabbitMQ、MinIO（Docker Compose 编排）</li>
      </ul>
      <h2>获取与参与</h2>
      <p>仓库地址：<a href="https://github.com/Morainet/music-gen-platform" target="_blank" rel="noopener">github.com/Morainet/music-gen-platform</a></p>
    `,
  },
  {
    slug: 'quill',
    title: 'Quill',
    icon: '📄',
    tagline: '基于 Tauri 的 macOS PDF 阅读器',
    description:
      'Quill 是一个用 Tauri 构建的轻量 macOS 应用，专注于 PDF 查看、文本选择与复制等阅读体验。',
    status: '开发中',
    tags: ['Tauri', 'macOS', 'Rust', 'PDF'],
    repo: 'https://github.com/Morainet/quill-app',
    demo: '',
    featured: false,
    order: 3,
    highlights: [
      '基于 pdfjs 的查看器',
      '文本选择与复制',
      '轻量原生 macOS 体验',
      'Tauri + Rust 安全架构',
    ],
    tech: ['Tauri', 'Rust', 'React', 'pdfjs', 'TypeScript'],
    body: `
      <h2>项目介绍</h2>
      <p>Quill 基于 Tauri（Rust + Web 技术）打造，目标是提供一个轻量、原生体验的 PDF 阅读器。当前版本已实现基于 pdfjs 的查看器与文本选择/复制能力。</p>
      <h2>技术栈</h2>
      <ul>
        <li>Tauri（universal-apple-darwin）</li>
        <li>Rust</li>
        <li>pdfjs（TextLayer 文本选择）</li>
      </ul>
      <h2>获取与参与</h2>
      <p>仓库地址：<a href="https://github.com/Morainet/quill-app" target="_blank" rel="noopener">github.com/Morainet/quill-app</a></p>
    `,
  },
  {
    slug: 'android-widget',
    title: 'Android Glance Widget',
    icon: '📱',
    tagline: '基于 Jetpack Glance 的 Android 小组件',
    description:
      '使用 Jetpack Glance 框架构建的 Android 桌面小组件，包含可复用的 widget-dsl 与示例模块。',
    status: '实验中',
    tags: ['Android', 'Jetpack Glance', 'Kotlin'],
    repo: 'https://github.com/Morainet/android-widget',
    demo: '',
    featured: false,
    order: 4,
    highlights: [
      '声明式 Glance 组件',
      '可复用 widget-dsl',
      '示例 sample 模块',
      'CounterWidget 状态管理示例',
    ],
    tech: ['Kotlin', 'Jetpack Glance', 'Android'],
    body: `
      <h2>项目介绍</h2>
      <p>探索用 Jetpack Glance 声明式地构建 Android 桌面小组件。包含可复用的 <code>widget-dsl</code> 与 <code>sample</code> 示例模块，并以 CounterWidget 为例演示状态管理与广播交互。</p>
      <h2>技术栈</h2>
      <ul>
        <li>Kotlin</li>
        <li>Jetpack Glance</li>
        <li>Android 桌面小组件</li>
      </ul>
      <h2>获取与参与</h2>
      <p>仓库地址：<a href="https://github.com/Morainet/android-widget" target="_blank" rel="noopener">github.com/Morainet/android-widget</a></p>
    `,
  },
]
