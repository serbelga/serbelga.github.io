+++
authors = ["Sergio Belda"]
title = "Transforming Android XML Vector drawables into Compose Multiplatform ImageVectors"
date = "2024-02-05"
description = ""
tags = ["ImageVector", "Multiplatform", "Compose"]
categories = []
series = []
aliases = []
+++

[**Compose Vectorize**](https://github.com/serbelga/compose-vectorize/) is a Kotlin Multiplatform library to generate `compose.ui.graphics.vector.ImageVector` from XML files. It is built on top of AndroidX `material-icons` vector generator, but it allows transforming not only solid plain icons but also illustrations and creates categories for resources automatically based on folder structure.

### How to use

First, add the gradle plugin in your project. Inside `plugins{}` block in build.gradle root file.

```kotlin
plugins {
    id("dev.sergiobelda.compose.vectorize") version "$VERSION" apply false
}
```

To use the generated ImageVectors, you must add the `compose-vectorize-core` dependency to your project. Depending on whether your project is Kotlin Multiplatform or not, add the following dependency to the dependencies block.

For Android only projects:

```kotlin
plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("dev.sergiobelda.compose.vectorize") version "$VERSION"
}
dependencies {
    implementation("dev.sergiobelda.compose.vectorize:compose-vectorize-core:$VERSION")
}
```

For Kotlin Multiplatform projects:

```kotlin
plugins {
    kotlin("multiplatform")
    id("org.jetbrains.compose")
    id("dev.sergiobelda.compose.vectorize") version "$VERSION"
}
kotlin {
    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(compose.ui)
                implementation("dev.sergiobelda.compose.vectorize:compose-vectorize-core:$VERSION")
            }
        }
    }
}
```

Create a folder called `xml-images` in the module folder.

![](/images/2024-02-05/common_xml_images.png)

To generate the ImageVectors, call the gradle task `generateImages` or launch the application:

```bash
./gradlew generateImages
```

This task will create the Kotlin files inside module’s build folder, in the `images` folder. The default package name for generated files is `dev.sergiobelda.compose.vectorize.images`

You can set a custom **packageName** for your images resources, using `composeVectorize` function in the build.gradle file.

```kotlin
composeVectorize {
    packageName = "dev.example.myproject"
}
```

![](/images/2024-02-05/common_build.png)

Inside `xml-images` you can create folders to categorize these resources. The library will automatically create a tree structure of objects to access to the variables.

```kotlin
public object Images {
    public object Illustrations

    public object Icons {
        public object Rounded

        public object Outlined
    }
}
```

For example, for the previous screenshot, we can access to `Home` icons using the `Images` object and navigate to the variables through the object structure.

```kotlin
Icon(
    imageVector = Images.Icons.Outlined.Home,
    contentDescription = null
)
```

```kotlin
Icon(
    imageVector = Images.Icons.Rounded.Home,
    contentDescription = null
)
```

![Compose Vectorize on different platforms](/images/2024-02-05/multiplatform.png)

### Reference

- [Project website](https://sergiobelda.dev/compose-vectorize/)
- [GitHub](https://github.com/serbelga/compose-vectorize/)
- [Read on Medium](https://medium.com/@sergiobelda/transforming-xml-vector-drawables-into-compose-imagevectors-a43985dfc500)