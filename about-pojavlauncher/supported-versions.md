# Minecraft version support

With each new Minecraft release comes questions: how well does it play nice with PojavLauncher?

Thanks to the hard work from PojavLauncherTeam, both the Android and the iOS port now cover most Minecraft versions...

...with some small exceptions that will be listed below.

### Current known compatibility problems with PojavLauncher Android (as of the version `dahlia_v3-openjdk`)
| Version | Current problem | Workaround |
| ------------- | ------------- | ------------- |
| All versions before Alpha 1.0.1 | Bugs that make games unplayable | No |
| 1.2.1-1.2.4 | Game crashes while loading | [A workaround is available.](https://github.com/NotAHero04/RandomPojavThings/tree/main/Oldr) |
| Forge for Minecraft 1.3.2-1.7.2 | Game hangs at the loading stage | [A workaround is available.](https://github.com/NotAHero04/RandomPojavThings/tree/main/Forge) |
| Cursed Fabric (beta 1.7.3), Legacy Fabric (up to 1.7.10?) | Game hangs at the loading stage | No |
| LabyMod 1.8.9 | Game crashes while loading | [A workaround is available.](https://github.com/NotAHero04/RandomPojavThings/tree/main/LabyMod) |
| Fabric for Minecraft 1.14 or later | Game hangs while loading | Delete the Fabric mapping cache. For how to do, check out our [Discord server!](https://discord.gg/eDreBEDZJB) |

### Current known compatibility problems with PojavLauncher iOS (as of the version 2.0.1):

| Version | Current problem | Workaround |
| ------------- | ------------- | ------------- |
| All versions before Alpha 1.0.1 | Bugs that make games unplayable | No |
| All versions before 1.14 | Game crashes after a couple of seconds of joining the world | Turn on the VBO in your Minecraft settings (since 1.8), or specify the environment variable `LIBGL_USEVBO=0` (all versions). The instruction to do this is [here](https://pojavlauncherteam.github.io/ios/wiki/going-further/environment-variables.html). |
| 1.2.1-1.2.4 | Game crashes when loading | [An untested workaround is available.](https://github.com/NotAHero04/RandomPojavThings/tree/main/Oldr) |
| LabyMod (1.8.9, 1.12.2, 1.16.5) | Game crashes | Currently only supports iOS 14.0 or later. |
| All versions since Minecraft 1.17 | Game crashes | Switch the renderer to `tinygl4angle`. |

Hey hey! Note that this list is not complete, and therefore, a Minecraft version that's not listed here may turn out to be not working at all! Report bugs [here](https://github.com/PojavLauncherTeam/PojavLauncher/issues)

## Note for mods compatibility

Most mods should work with a compatible setting, but mods that's designed to run on a full desktop environment will not work. Report incompatible mods [here.](https://github.com/PojavLauncherTeam/PojavLauncher/issues/1948)
