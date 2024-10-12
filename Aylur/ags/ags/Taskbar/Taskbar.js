import { Label_Battery } from "./Modules/Labels/Battery.js";
import { Label_ClientTitle } from "./Modules/Labels/ClientTitle.js";
import { Label_Clock } from "./Modules/Labels/Clock.js"
import { Label_PkgCount } from "./Modules/Labels/PackageCount.js";


function Left() {
    return Widget.Box({
        spacing: 8,
        class_name: "left",
        children: [
            Label_PkgCount(),
            Label_ClientTitle(),
        ],
    })
}

function Right(){
    return Widget.Box({
        hpack: "end",
        spacing: 8,
        children:[
            Label_Battery(),
        ]
    });
}

function Center() {
    return Widget.Box({
        spacing: 8,
        children: [
            Label_Clock(),
        ],
    })
}

export function taskBar(monitor = 0)
{
    return Widget.Window({
        name: `bar-${monitor}`,
        class_name: "bar",
        monitor,
        anchor: ["top", "left", "right"],
        exclusivity: "exclusive",
        child: Widget.CenterBox({
            start_widget: Left(),
            center_widget: Center(),
            end_widget: Right(),
        }),
    })
}