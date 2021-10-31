(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{462:function(e,t,r){"use strict";r.r(t);var a=r(22),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"create-a-minecraft-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-a-minecraft-server"}},[e._v("#")]),e._v(" Create a Minecraft server")]),e._v(" "),r("p",[e._v("Although PojavLauncher is mainly client-side, you still can launch a server with it!")]),e._v(" "),r("p",[e._v("Currently, PojavLauncher iOS supports servers up to the latest Minecraft version. (Requires Java 16)")]),e._v(" "),r("h1",{attrs:{id:"how-to-launch-a-minecraft-server-using-terminal"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-launch-a-minecraft-server-using-terminal"}},[e._v("#")]),e._v(" How to launch a Minecraft server using terminal")]),e._v(" "),r("p",[e._v("Before doing all the steps below, make sure you installed a terminal.")]),e._v(" "),r("h3",{attrs:{id:"step-1-download-the-server-launcher"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-1-download-the-server-launcher"}},[e._v("#")]),e._v(" Step 1: Download the server launcher")]),e._v(" "),r("p",[e._v("You can use PaperMC for the best experience. Download it "),r("a",{attrs:{href:"https://papermc.io/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"step-2-launch-paper-for-the-first-time"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-2-launch-paper-for-the-first-time"}},[e._v("#")]),e._v(" Step 2: Launch Paper for the first time")]),e._v(" "),r("p",[e._v("Type these commands:\n"),r("code",[e._v("cd /var/mobile/Documents/minecraft/")])]),e._v(" "),r("p",[r("code",[e._v("/usr/lib/jvm/java-16-openjdk/bin/java -jar <path_to_file>")])]),e._v(" "),r("p",[e._v("With:")]),e._v(" "),r("p",[r("code",[e._v("<path_to_file>")]),e._v(" is the path to the downloaded jar.")]),e._v(" "),r("p",[e._v("Pro tips:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Put the Paper jar file to "),r("code",[e._v("var/mobile/Documents/minecraft")]),e._v(" for better access. After doing that, you can just type the name of the file for "),r("code",[e._v("<path_to_file>")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Create a symbolic link for "),r("code",[e._v("/usr/lib/jvm/java-16-openjdk/bin/java")]),e._v(" as "),r("code",[e._v("java")]),e._v(".")])])]),e._v(" "),r("h3",{attrs:{id:"step-3-before-running-the-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-3-before-running-the-server"}},[e._v("#")]),e._v(" Step 3: Before running the server...")]),e._v(" "),r("p",[e._v("After the first launch, you need to accept the EULA. Go to /var/mobile/Documents/minecraft and edit the eula.txt file as follows:\n"),r("code",[e._v("<something_here> eula=true")])]),e._v(" "),r("h3",{attrs:{id:"step-4-run-the-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-4-run-the-server"}},[e._v("#")]),e._v(" Step 4: Run the server")]),e._v(" "),r("p",[e._v("Before launching the server, you can configure how the server runs.")]),e._v(" "),r("p",[e._v("First, go to "),r("code",[e._v("/var/mobile/Documents/minecraft/server.properties")]),e._v(". There are many options for you to configure, like the server port, game mode, height limit for building, ...")]),e._v(" "),r("p",[e._v("After that, type these commands to start the server (type "),r("code",[e._v("java")]),e._v(" instead of "),r("code",[e._v("/usr/lib/jvm/java-16-openjdk/bin/java")]),e._v(" if you created the symbolic link as above):")]),e._v(" "),r("p",[r("code",[e._v("cd /var/mobile/Documents/minecraft")])]),e._v(" "),r("p",[r("code",[e._v("/usr/lib/jvm/java-16-openjdk/bin/java -Xmx<a_number>[<suffix>] -Xms<another_number>[<suffix>] -jar <path_to_file> --nogui")])]),e._v(" "),r("p",[e._v("With:")]),e._v(" "),r("p",[r("code",[e._v("[<suffix>]")]),e._v(" can be (nothing) for bytes, "),r("code",[e._v("K")]),e._v(" for kilobytes, "),r("code",[e._v("M")]),e._v(" for megabytes, "),r("code",[e._v("G")]),e._v(" for gigabytes.")]),e._v(" "),r("p",[r("code",[e._v("<path_to_file>")]),e._v(" is the path to the downloaded jar for Paper.")]),e._v(" "),r("p",[e._v("Example:")]),e._v(" "),r("p",[r("code",[e._v("java -jar /var/mobile/Documents/paper-1.17.1-165.jar -Xms1G -Xmx1G --nogui")])]),e._v(" "),r("p",[e._v("The server will be launched after some time.")]),e._v(" "),r("p",[r("strong",[e._v("You have read all the steps! Now just enjoy the created server!")])]),e._v(" "),r("p",[e._v("To shut down the server, simply type "),r("code",[e._v("stop")]),e._v(" or run this command:")]),e._v(" "),r("p",[r("code",[e._v("sudo killall -9 java")])]),e._v(" "),r("h3",{attrs:{id:"known-issues-with-this-method"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#known-issues-with-this-method"}},[e._v("#")]),e._v(" Known issues with this method")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("May cause a respring loop if a server is created and after that, there is too little memory left. If you experience this issue, you can reboot the device, or SSH to your device and run the "),r("code",[e._v("killall")]),e._v(" command.")])]),e._v(" "),r("li",[r("p",[e._v("If the terminal process is terminated, the server will be unable to access. A workaround is described below.")])]),e._v(" "),r("li",[r("p",[e._v("Connecting from an Android phone (or maybe an iOS phone as well) causes crash on the client. (This issue is being tested and investigated.)")])])]),e._v(" "),r("h1",{attrs:{id:"other-methods"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-methods"}},[e._v("#")]),e._v(" Other methods")]),e._v(" "),r("ul",[r("li",[e._v("The ability to run Paper on the new mod installer is being tested. An instruction will be made if the tests are successful.")])]),e._v(" "),r("h1",{attrs:{id:"going-further"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#going-further"}},[e._v("#")]),e._v(" Going further")]),e._v(" "),r("ul",[r("li",[e._v("Want to get rid of the terminal? Try setting an Activator (currently broken on iOS 14) action that launch a server with this command:")])]),e._v(" "),r("p",[r("code",[e._v("cd /var/mobile/Documents/minecraft && java -jar [<some_jvm_arguments>] paper-<version>.jar")])]),e._v(" "),r("p",[r("strong",[e._v("This is the only known way to prevent crash issue as said above.")])]),e._v(" "),r("ul",[r("li",[e._v("You can create and run multiple servers at one time! To do this, you need to modify (at least) the "),r("code",[e._v("server-port")]),e._v(" and "),r("code",[e._v("level-name")]),e._v(" keys in "),r("code",[e._v("server.properties")]),e._v(". Then simply redo step 4.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);