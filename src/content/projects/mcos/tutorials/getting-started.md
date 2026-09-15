---
title: 快速开始:三行接入 MCOS
description: 在 Android 宿主 App 中接入 mcos-android-sdk,完成组合根初始化与命令总线启动。(骨架已就位,正文逐步补充中)
order: 1
---

<!-- TODO: 教程正文整理中,以下为预留骨架,直接在各节补充内容即可;更多教程在 tutorials/ 下新建 .md 文件。 -->

## 环境准备

- Android Studio(版本要求待补充)
- JDK(版本要求待补充)
- 依赖发布在 Maven Central,坐标前缀 `io.github.morainet`

## 第一步:引入依赖

推荐走 BOM 对齐各模块版本:

```kotlin
dependencies {
    implementation(platform("io.github.morainet:mcos-bom:0.0.6"))
    implementation("io.github.morainet:mcos-android-sdk")
}
```

## 第二步:初始化组合根

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

SDK 经 manifest merge 自动带来调度/开机接收器、所需权限与 FileProvider。

## 第三步:发出第一条命令

<!-- TODO: 补充一条最小命令示例(DSL 写法 / AI 自然语言入口)。 -->

## 下一步

- 阅读[项目介绍](../../index.html)了解整体架构
- 到[仓库](https://github.com/Morainet/mcos)查看 12 篇中英双语设计文档(RFC)
