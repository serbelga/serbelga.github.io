+++
authors = ["Sergio Belda"]
title = "Giving powers to the Navigation Compose library"
date = "2024-04-24"
description = ""
tags = ["Navigation", "Annotations", "Multiplatform", "Compose"]
categories = []
series = []
aliases = []
+++

**Navigation Compose Extended** is a multiplatform complementary library for Navigation Compose to improve creation of navigation elements, such as destination **routes**, **arguments**, **deep links**, … in a more idiomatic way than using literals. It also provides **Safe navigation routes** and **Safe navigation arguments**.

### Usage

This library can be used programmatically or using annotations to generate classes. In the following lines, **annotations** are used to create navigation elements.

First, add the following dependencies in the module **build.gradle** file.

```kotlin
plugins {
    id("com.google.devtools.ksp") // Use ksp to use compiler library.
}

kotlin {

    sourceSets {
        val commonMain by getting {
            dependencies {
                // Add Jetbrains Navigation Compose Multiplatform dependency.
                implementation("org.jetbrains.androidx.navigation:navigation-compose:$jetbrains_nav_version")

                implementation("dev.sergiobelda.navigation.compose.extended:navigation-compose-extended:$version")
                // Use Annotations to generate NavDestinations.
                implementation("dev.sergiobelda.navigation.compose.extended:navigation-compose-extended-annotation:$version")
            }
        }
    }
}

dependencies {
    add("kspCommonMainMetadata", "dev.sergiobelda.navigation.compose.extended:navigation-compose-extended-compiler:$version")
}

// Workaround for KSP only in Common Main.
tasks.withType<org.jetbrains.kotlin.gradle.dsl.KotlinCompile<*>>().all {
    if (name != "kspCommonMainKotlinMetadata") {
        dependsOn("kspCommonMainKotlinMetadata")
    }
}

kotlin.sourceSets.commonMain {
    kotlin.srcDir("build/generated/ksp/metadata/commonMain/kotlin")
}
```

### Create a NavDestination

A **NavDestination** represents some Destination in the Navigation graph. It’s defined by a **destinationId**, a list of **arguments** and a list of **deepLinks**. You can check more information on API Reference [here](https://sergiobelda.dev/navigation-compose-extended/api/navigation-compose-extended/dev.sergiobelda.navigation.compose.extended/-nav-destination/index.html).

Annotate your Composable with `@NavDestination` annotation.

```kotlin
@NavDestination(
    destinationId = "home",
    name = "Home", // Optional: NavDestination name.
)
@Composable
fun HomeScreen() {}
```

The compiler will generate a `NavDestination` object associated with this destination.

```kotlin
public object HomeNavDestination : NavDestination<HomeNavArgumentKeys>() {
  override val destinationId: String = "home"
}
```

### Using the NavDestination into the NavHost

This library also provides some wrappers for [NavHost](https://sergiobelda.dev/navigation-compose-extended/api/navigation-compose-extended/dev.sergiobelda.navigation.compose.extended/-nav-host.html), [composable](https://sergiobelda.dev/navigation-compose-extended/api/navigation-compose-extended/dev.sergiobelda.navigation.compose.extended/composable.html), [navigation](https://sergiobelda.dev/navigation-compose-extended/api/navigation-compose-extended/dev.sergiobelda.navigation.compose.extended/navigation.html) functions as syntax sugar to declare the navigation host and use `NavDestinations`. In the following code the `NavDestination` object is set to `navDestination` parameter, and `composable` function will set `route`, `arguments` and `deepLinks` implicitly.

```kotlin
NavHost(navController = navController, startNavDestination = HomeNavDestination) {
    composable(navDestination = HomeNavDestination) {
        HomeScreen()
    }
}
```

If you don’t want to use these wrappers, `NavDestination` base class also offers `route`, `arguments` and `deepLinks` getters that can be used as follows:

```kotlin
NavHost(navController = navController, startDestination = HomeNavDestination.route) {
    composable(
        route = HomeNavDestination.route,
        arguments = HomeNavDestination.arguments,
        deepLinks = HomeNavDestination.deepLinks
    ) {
        HomeScreen()
    }
}
```

### Navigate

We can navigate to some destination using the actions functions provided by the [NavAction](https://sergiobelda.dev/navigation-compose-extended/api/navigation-compose-extended/dev.sergiobelda.navigation.compose.extended/-nav-action/index.html) class. The `NavAction.navigate()` function receive a [NavRoute](https://sergiobelda.dev/navigation-compose-extended/api/navigation-compose-extended/dev.sergiobelda.navigation.compose.extended/-nav-route/index.html) instance to navigate to some destination. This `NavRoute` associated with a destination can be obtained using the `navRoute()` function in the `NavDestination` class or the `safeNavRoute()` function if we are using annotations.

```kotlin
val navAction = rememberNavAction(navController)
NavHost(navController = navController, startNavDestination = HomeNavDestination) {
    composable(navDestination = HomeNavDestination) {
        HomeScreen(
            navigateToSettings = {
                navAction.navigate(
                    SettingsNavDestination.navRoute()
                )
            },
        )
    }
```

### Navigate with arguments

You can add navigation arguments using the `arguments` parameter in `@NavDestination` annotation:

```kotlin
@NavDestination(
    name = "Settings",
    destinationId = "settings",
    arguments = [        NavArgument(name = "userId", type = NavArgumentType.Int),
        NavArgument(name = "text", type = NavArgumentType.String, defaultValue = "Default"),
        NavArgument(name = "result", type = NavArgumentType.Boolean, defaultValue = "true"),
    ],
)
@Composable
fun SettingsScreen(
    viewModel: SettingsViewModel
) {}
```

You can navigate to the destination using the generated `safeNavRoute()`:

```kotlin
composable(navDestination = HomeNavDestination) {
    HomeScreen(
        navigateToSettings = {
            navAction.navigate(
                SettingsNavDestination.safeNavRoute(
                    userId = 1,
                    text = "Text",
                    // Here are not passing result parameter because has a defaultValue
                )
            )
        },
    )
}
```

### Retrieving the navigation arguments values

The value of navigation arguments can be obtained using the [NavArgs](https://sergiobelda.dev/navigation-compose-extended/api/navigation-compose-extended/dev.sergiobelda.navigation.compose.extended/-nav-args/index.html) class. The `NavDestination.navArgs()` provides an instance of this class.

If we use annotations, a `**SafeNavArgs**` class is generated with getters for each navigation argument:

```kotlin
// Generated class SettingsSafeNavArgs
public class SettingsSafeNavArgs(
  navBackStackEntry: NavBackStackEntry,
) {
  private val navArgs: NavArgs<SettingsNavArgumentKeys> by lazy {
    SettingsNavDestination.navArgs(navBackStackEntry)
  }
  public val userId: Int?
    get() = navArgs.getInt(SettingsNavArgumentKeys.UserIdNavArgumentKey)
  public val text: String?
    get() = navArgs.getString(SettingsNavArgumentKeys.TextNavArgumentKey)
  public val result: Boolean?
    get() = navArgs.getBoolean(SettingsNavArgumentKeys.ResultNavArgumentKey)
}
```

```kotlin
composable(navDestination = SettingsNavDestination) { navBackStackEntry ->
    val navArgs = SettingsSafeNavArgs(navBackStackEntry)
    SettingsScreen(
        userId =  navArgs.userId ?: 0,
```

### Navigate with Deep Links (Android only)

In the `AndroidManifest.xml`:

```xml
<activity
    ...>
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="sample" android:host="home" />
    </intent-filter>
</activity>
```

Use the `deepLinkUris` parameter in the `@NavDestination`:

```kotlin
@NavDestination(
    destinationId = "home",
    deepLinkUris = [        "sample://home",
    ]
)
@Composable
fun HomeScreen(navigateToSettings: () -> Unit) {}
```

### Create Top Level Destinations

There’s a special kind of destination to represent the top level destinations in the navigation graph. This is useful for destinations associated to items in a BottomNavigationBar where we can navigate to different screens by clicking on each navigation bar item. To avoid building up a large stack of destinations on the back stack when we click on navigation items and to avoid multiple copies of the same destination when we reselect the same item, we can use this kind of destination.

```kotlin
@NavDestination(
    ...
    isTopLevelNavDestination = true, // Mark NavDestination as a top-level destination.
)
@Composable
fun HomeScreen() {}
```

### Source code
