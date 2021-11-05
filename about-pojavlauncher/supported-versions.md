# Minecraft version support

With each new Minecraft release comes questions: how well does it play nice with PojavLauncher?

Thanks to the hard work from PojavLauncherTeam, both the Android and the iOS port now cover most Minecraft versions...

...with some small exceptions that will be listed below.

### Current known compatibility problems with PojavLauncher Android (as of the version `crocus_v3-openjdk`)

**Vanilla**

| Version | Current problem | Workaround |
| ------------- | ------------- | ------------- |
| 1.13 to 1.13.2 | Unable to access video settings menu | Unknown; the only way to change these settings is to use options.txt. |
| 1.14 to 1.14.2 (1.14.3 is not yet tested) | Crashes with java.lang.NullPointerException after a few taps | Unknown |
| Up to 1.8.9 | Game crashes a couple of minutes after joining the world | Enable VBO in Minecraft settings. Avoid using OptiFine. |
| 1.17 or later | Game crashes when loading or exits when initializing | Be sure to check [this guide](https://pojavlauncherteam.github.io/updates/117.html). |

**Modded**

| Version | Current problem | Workaround |
| ------------- | ------------- | ------------- |
| Fabric 1.14+ | Game crashes on startup | - Go to /sdcard/games/PojavLauncher/.minecraft/.fabric/remappedJars/minecraft-__**[Minecraft version]**__ (for Android 10+: /sdcard/Android/data/net.kdt.pojavlaunch(.debug)/.minecraft/.fabric/remappedJars/minecraft-__**[Minecraft version]**__), then rename zipfstmp__**[random number]**__.tmp to intermediary-fabric-loader-__**[Fabric loader version]**__-__**[Minecraft version]**__.jar |
| Forge 1.17.1 | Game crashes on startup | Unknown |
| LabyMod 1.8.9 | Game crashes when loading to 75% | Unknown |

### Current known compatibility problems with PojavLauncher iOS (as of the version 2.0~alpha8)

**Vanilla**

| Version | Current problem | Workaround |
| ------------- | ------------- | ------------- |
| 1.8.9 or below (up to 1.12.2 on some testers) | Game crashes after a couple of seconds of joining the world | If on 1.8 or later, try enabling VBO from Minecraft video settings. If that method doesn’t work, or you are playing 1.7.10 or older, specify the environment variable `LIBGL_USEVBO=0`. The instruction to do this is [here](https://pojavlauncherteam.github.io/ios/wiki/going-further/environment-variables.html). OptiFine is not yet tested, however, it's thought to be unstable. |
| 1.2.1-1.2.4 ~~and 1.4.4-1.4.7~~ | Game crashes when initializing | 1.4.4-1.4.7: Specify the environment variable `LIBGL_VERSION=2.1` (it seems to be fixed in an older build). 1.2.1-1.2.4: Unknown (the cause of problem is the same, but the trick above doesn't work). Forge 1.2.3-1.2.4 are known to work (but without FML loaded?) |
| All RubyDung versions | Black screen | Unknown |
| 1.17 or later | Game crashes | Be sure to check [this guide](https://pojavlauncherteam.github.io/updates/117.html). Note that some testers reported that the assets-v0 trick stops working from 21w37a onwards. |
| [Upcoming] 1.18 snapshots | InvocationTargetException thrown when using Java 16 | Switch to Java 17 in launcher settings. |

**Modded**

| Version | Current problem | Workaround |
| ------------- | ------------- | ------------- |
| Forge 1.1-1.2.4 | FML is not loaded | Unknown |
| Forge 1.3.2-1.4.x (1.4.2-1.4.7 untested) | The game doesn’t load | Unknown |
| Forge 1.5-1.6.4 | NullPointerException thrown | Modify the json for Forge 1.7.10 and import it to these versions. A full instruction or a preset json will be added. |
| Forge 1.17.1 | InvocationTargetException thrown | Unknown |
| LabyMod 1.8.9, 1.12.2, 1.16.5 | Game crashes when it’s nearly done loading. | This bug currently affects iOS 13 or below; a workaround for these versions is unknown. |

## Note for PojavLauncher iOS version 1.2:

This version can not launch any version from 1.5.2 or below and any Forge build before 36.1.0 (for 1.16.5). This is because of the need to use OpenJDK 16, which was already ported to iOS by [@Diatrus](https://twitter.com/diatrus).

This build is incompatible with 1.17 or above.

## Note for PojavLauncher Android build 20210321 backwards:

Due to the fact that this version doesn’t have the ability to add Java runtimes, and also bundled with Java 8, it’s not compatible with 1.17 or above.

## Note for PojavLauncher Android with 32-bit systems:

Java 17 builds for 32-bit platforms is incomplete, so 1.17 or later will not work.
