---
title: MCOS
icon: 📱
tagline: Mobile Command OS — the open mobile command bus
description: "MCOS is an open-source mobile command bus: AI only generates commands, the Runtime enforces them after permission checks, and plugins execute. Model-agnostic with an open protocol — unifying mobile app capabilities the way HTTP unified the web."
status: 活跃
tags:
  - Android
  - Kotlin
  - AI
  - Command Protocol
repo: https://github.com/Morainet/mcos
featured: true
order: 1
highlights:
  - AI only generates commands — it never touches the device directly
  - Runtime kernel owns permissions, rate limiting, confirmation and audit
  - "Model-agnostic: OpenAI / Gemini / Qwen / Claude / on-device models are swappable"
  - Open Command Protocol + a plugin ecosystem with optional process isolation
tech:
  - Kotlin
  - Android
  - JVM
  - MCP
  - Maven Central
---

## Introduction

**MCOS (Mobile Command OS)** is an open-source mobile command bus. One-line analogy: **Kubernetes + MCP + Claude Code Runtime for your phone** — it turns every capability on a mobile device into a command that AI can invoke safely.

It fills a missing layer: the industry already has a code bus (Claude Code), a tool bus (MCP), an app-capability bus (Android App Functions), and OS-vendor-locked mobile command buses (Google App Functions / Apple App Intents) — but no **open, model-agnostic, OS-vendor-neutral** mobile command bus standard. MCOS's moat is the open command protocol itself, not any single model or vendor.

## How It Works

Natural language in, auditable commands out — **AI plans, the Runtime enforces, plugins execute**:

```text
   "Compress today's photos and send them to Tom"
                  │
                  ▼
       AI planner (model-agnostic: OpenAI · Gemini · Qwen · Claude · on-device)
                  ▼
       DSL ──► IR (typed · auditable · replayable)
                  ▼
       7-stage executor (permissions · rate limits · confirmation · stamp gates · audit)
                  ▼
       Plugins (camera · files · iot · mcp · system …, optional :mcos_plugin process isolation)
                  ▼
       HostServices (net · files · ui · secureStore · clock)
                  ▼
       Audit log (every side effect is traceable)
```

## Core Modules

| Module | Responsibility |
|:------|:------|
| `mcos-sdk` | Plugin contracts: `McosPlugin`, `CommandHandler`, `HostServices`, `AuthStamp`, `DirectorySandbox` |
| `mcos-security` | Permission kernel: AuthStamp minting/signing, rate limiting, egress policy, plugin trust gate, crash isolation, audit log |
| `mcos-runtime-core` | DSL→IR parser, command registry, 7-stage executor, priority scheduling, workflow engine, memory |
| `mcos-llm` | AI planning/dialog: multi-provider registry, grammar-constrained decoding, prompt-injection defense, multi-turn agent loop |
| `mcos-marketplace` | Plugin marketplace: install pipeline, recipe store, dependency resolution, blocklist, telemetry |
| `mcos-android-sdk` | UI-less Android host SDK: composition root, scheduler/boot receivers, MCP server management, dynamic `.mcos` loading |
| `mcos-server` | Self-hosted sync endpoint: REST contract + Bearer auth, opaque blob storage |

The plugin ecosystem includes officially maintained plugins such as `camera`, `files`, `iot`, `mcp` and `system`, each built independently.

## Quick Start

Three lines to integrate in an Android host app (the BOM is recommended for version alignment):

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
        deps = CompositionRoot.create(this)      // processIsolation = true enables process isolation
        RuntimeBootstrap.ensureRehydrated(deps)  // restore plugins + re-arm persistent scheduling
    }
}
```

Via manifest merge, the SDK automatically brings scheduler/boot receivers, 8 permissions, a FileProvider, and the optional `:mcos_plugin` isolated process.

## Get Involved

- Repository: [github.com/Morainet/mcos](https://github.com/Morainet/mcos)
- Artifacts: Maven Central `io.github.morainet` (pushing a `v<version>` tag triggers publishing)
- Design docs: 12 bilingual RFCs in the repo (vision / architecture / command protocol / security / roadmap, etc.)
- License: Apache License 2.0, PRs welcome
