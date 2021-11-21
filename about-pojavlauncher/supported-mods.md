# Supported mods

PojavLauncher supports many mods for Forge and Fabric.

Aside from conflicted mods (user side), there are some mods that doesn’t currently work well with PojavLauncher.

### List of mods that don’t work out-of-box with PojavLauncher

| Mod platform and version | Mod | Issue | Fix/Workaround for Android | Fix/Workaround for iOS |
| ------- | ------- | ------- | ------- | ------- |
| Vanilla and Forge, **1.17.1** | OptiFine | Startup loop then crash | Run [this patcher](https://cdn.discordapp.com/attachments/724163890803638277/888992640819925032/PojavOF117AssetsPatcher.jar) or use the new `virgl` renderer | Use gl4es with shader conversion disabled, or run [this patcher](https://cdn.discordapp.com/attachments/724163890803638277/888992640819925032/PojavOF117AssetsPatcher.jar), or use `tinygl4angle` renderer. |
| Fabric, **1.16.1-1.16.5** and **1.17.1** | Sodium (all versions) | Crash when joining world | 0.1.x: Disable Compact vertex format and Fog occlusion option, or use `virgl` renderer. 0.2.0: Use `virgl` renderer (but it’s slower than 0.1.x with `gl4es` renderer). Note that you need to disable multidraw, otherwise the game will crash after rendering some frames. Compact vertex format and fog occlusion __**is**__ supported. 0.3.x: unknown. | Unknown. |
| Forge **1.8**, **1.8.9**, **1.9.4**, **1.10-1.12.2**, Fabric **1.14.4**, **1.15.2**, **1.16-1.17.1** | Replay | Can’t load the files | (Not yet tested) Include the `ffmpeg` binary in the launcher(?) | Install `ffmpeg` package from your package manager (Cydia, Sileo, Zebra or Installer) |
| Forge 1.7.10, 1.8.9, 1.9.4, 1.10.2, 1.11.2, **1.12.2** | Vic’s Modern Warfare | Forge 14.23.4.2759 breaks the mod | Recommended solution: If you visit `./<your_minecraft_folder>/config` and locate `forge.cfg` - open it and look for `allowEmissiveItems` and turn it to `false`. The other two solutions are: Install OptiFine or downgrade your Forge version (which is hard to do if you don’t have enough knowledge). | Recommended solution: If you visit `./<your_minecraft_folder>/config` and locate `forge.cfg` - open it and look for `allowEmissiveItems` and turn it to `false`. The other two solutions are: Install OptiFine or downgrade your Forge version (which is hard to do if you don’t have enough knowledge). |

### List of mods that don’t work with PojavLauncher (confirmed by testers)

| Mod platform and version | Mod | Issue |
| - | - | - |
| Fabric 1.15.2, **1.16.2-1.16.5**, **1.17.1** | OptiFabric | Can not load the mapped files normally |

### List of mods that don’t work with PojavLauncher (reported by users; see issue [#1948](https://github.com/PojavLauncherTeam/PojavLauncher/issues/1948))

| Mod platform and version | Mod | Issue |
| ------- | ------- | ------- |
| Forge 1.14.4, 1.15.2, **1.16.3-1.16.5** | Create | Crash on startup due to `GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT` on version 1.16.5_v0.3.2b. An user reported that the 1.16.3 version works. Not yet tested on iOS. |
| Forge 1.12.2, Fabric 1.14-1.17.1, LiteLoader 1.12.x, Rift 1.13.x | Litematica | No information. |
| Forge 1.7.10, 1.10.2, **1.12.2**, 1.16.5 | Modular Powersuits | White screen after opening menu (caused by a missing LWJGL OpenGL method |
Note: bold **version numbers** represent a version (or a version on the provided range) of Minecraft which the mod is confirmed to not work.
