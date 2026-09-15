---
title: MCOS
icon: 📱
logo: ./assets/logo.jpeg
tagline: 移动命令操作系统 —— 开放的移动命令总线
description: MCOS 是开源的移动命令总线：AI 只生成命令，Runtime 在权限校验后执法，插件负责执行。模型无关、协议开放，像 HTTP 统一 Web 一样统一移动应用能力。
status: 活跃
tags:
  - Android
  - Kotlin
  - AI
  - 命令协议
repo: https://github.com/Morainet/mcos
featured: true
order: 1
highlights:
  - AI 只生成命令，不直接触碰设备
  - Runtime 内核掌管权限、限流、确认与审计
  - 模型无关：OpenAI / Gemini / Qwen / Claude / 端侧模型可随时更换
  - 开放 Command Protocol + 可选进程隔离的插件生态
tech:
  - Kotlin
  - Android
  - JVM
  - MCP
  - Maven Central
---

## 项目介绍

**MCOS(Mobile Command OS,移动命令操作系统)** 是一个开源的移动命令总线。一句话类比：**手机端的 Kubernetes + MCP + Claude Code Runtime**——让手机上的每一个能力，都变成 AI 可以安全调用的命令。

它要补上层级的空缺：业界已有代码总线(Claude Code)、工具总线(MCP)、应用能力总线(Android App Functions),以及 OS 厂商锁定的移动命令总线(Google App Functions / Apple App Intents)——唯独缺一个**开放的、模型无关的、不锁定单一 OS 厂商**的移动命令总线标准。MCOS 的护城河是开放的命令协议本身,而不是某个模型或厂商。

## 运行原理

自然语言进、可审计命令出——**AI 负责规划,Runtime 负责执法,插件负责执行**:

```text
   "把今天拍的照片压缩一下发给 Tom"
                  │
                  ▼
       AI 规划器(模型无关:OpenAI · Gemini · Qwen · Claude · 端侧模型)
                  ▼
       DSL ──► IR(类型化 · 可审计 · 可重放)
                  ▼
       7 阶段执行器(权限 · 限流 · 确认 · stamp 域门 · 审计)
                  ▼
       插件(camera · files · iot · mcp · system …,可选 :mcos_plugin 进程隔离)
                  ▼
       HostServices(net · files · ui · secureStore · clock)
                  ▼
       审计日志(每一个副作用都有据可查)
```

```text
> camera.scan        "帮我扫一下这个二维码"
> photo.compress     "把今天拍的照片压缩一下"
> iot.ac.set         "打开空调，24 度"
> home.light.set     "把客厅灯调到 50% 亮度"
```

## 核心模块

| 模块 | 职责 |
|:------|:------|
| `mcos-sdk` | 插件契约:`McosPlugin`、`CommandHandler`、`HostServices`、`AuthStamp`、`DirectorySandbox` |
| `mcos-security` | 权限内核:AuthStamp 铸造/签名、限流、出网策略、插件信任门、崩溃隔离、审计日志 |
| `mcos-runtime-core` | DSL→IR 解析器、命令注册中心、7 阶段执行器、优先级调度、工作流引擎、记忆 |
| `mcos-llm` | AI 规划/对话:多 Provider 注册、语法约束解码、提示注入防护、多轮 Agent 循环 |
| `mcos-marketplace` | 插件市场:安装流水线、配方商店、依赖解析、封禁清单、遥测 |
| `mcos-android-sdk` | 无 UI Android 宿主 SDK:组合根、调度/开机接收器、MCP 服务器管理、动态 `.mcos` 加载 |
| `mcos-server` | 自托管同步端点:REST 契约 + Bearer 认证,不透明 blob 存储 |

插件生态含 `camera`、`files`、`iot`、`mcp`、`system` 等独立构建的官方插件。

## 快速开始

Android 宿主 App 三行接入(推荐走 BOM 对齐版本):

```kotlin
dependencies {
    implementation(platform("io.github.morainet:mcos-bom:0.0.6"))
    implementation("io.github.morainet:mcos-android-sdk")
}
```

```kotlin
class MyApplication : Application(), McosHostApp {
    override lateinit var deps: AppDeps
    override fun onCreate() {
        super.onCreate()
        deps = CompositionRoot.create(this)      // processIsolation = true 开启进程隔离
        RuntimeBootstrap.ensureRehydrated(deps)  // 恢复插件 + 重整备持久化调度
    }
}
```

SDK 经 manifest merge 免费带来调度/开机接收器、8 项权限、FileProvider,以及可选的 `:mcos_plugin` 隔离进程。

## 获取与参与

- 仓库:[github.com/Morainet/mcos](https://github.com/Morainet/mcos)
- 制品:Maven Central `io.github.morainet`(推送 `v<版本>` 标签自动发布)
- 设计文档:仓库内中英双语 RFC(愿景 / 架构 / 命令协议 / 安全 / 路线图等 12 篇)
- License:Apache License 2.0,欢迎 PR
