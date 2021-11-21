# Supported mods

PojavLauncher supports many mods for Forge and Fabric.

Aside from conflicted mods (user side), there are some mods that doesn’t currently work well with PojavLauncher.

### List of mods that doesn’t work out-of-box with PojavLauncher

| Mod platform and version | Mod | Issue | Fix/Workaround for Android | Fix/Workaround for iOS |
| ------- | ------- | ------- | ------- | ------- |
| Vanilla, 1.17.1 | OptiFine | Startup loop then crash | Run [this patcher](https://cdn.discordapp.com/attachments/724163890803638277/888992640819925032/PojavOF117AssetsPatcher.jar) or use the new `virgl` renderer | Use gl4es with shader conversion disabled, or run [this patcher](https://cdn.discordapp.com/attachments/724163890803638277/888992640819925032/PojavOF117AssetsPatcher.jar), or use `tinygl4angle` renderer. |
| Fabric, 1.16.5 and 1.17.1 | Sodium (all versions) | Crash when joining world | 0.1.x: Disable Compact vertex format and Fog occlusion option, or use `virgl` renderer. 0.2.0: Use `virgl` renderer (but it’s slower than 0.1.x with `gl4es` renderer). Note that you need to disable multidraw, otherwise the game will crash after rendering some frames. Compact vertex format and fog occlusion __**is**__ supported. 0.3.x: unknown. | Unknown. |
