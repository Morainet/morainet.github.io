---
title: "Quick Start: Integrate MCOS in Three Lines"
description: Integrate mcos-android-sdk in an Android host app, initialize the composition root and start the command bus. (Skeleton in place, content being filled in)
order: 1
---

<!-- TODO: Tutorial content in progress; the skeleton below is ready — fill in each section directly.
     More tutorials: create new .en.md files in tutorials/. -->

## Prerequisites

- Android Studio (minimum version TBD)
- JDK (minimum version TBD)
- Artifacts are published on Maven Central under the `io.github.morainet` prefix

## Step 1: Add the Dependencies

The BOM is recommended to keep module versions aligned:

```kotlin
dependencies {
    implementation(platform("io.github.morainet:mcos-bom:0.0.6"))
    implementation("io.github.morainet:mcos-android-sdk")
}
```

## Step 2: Initialize the Composition Root

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

Via manifest merge, the SDK automatically brings scheduler/boot receivers, the required permissions and a FileProvider.

## Step 3: Issue Your First Command

<!-- TODO: add a minimal command example (DSL syntax / natural-language entry). -->

## Next Steps

- Read the [project introduction](/projects/mcos/) for the big-picture architecture
- Browse the 12 bilingual design RFCs in the [repository](https://github.com/Morainet/mcos)
