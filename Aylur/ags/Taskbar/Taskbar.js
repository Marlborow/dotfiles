import { Box_Battery } from "./Modules/Box/Battery.js";
import { Box_Workspace} from "./Modules/Box/Workspace.js";

import { Label_ClientTitle } from "./Modules/Label/ClientTitle.js";
import { Label_Clock } from "./Modules/Label/Clock.js"
import { Label_langauge } from "./Modules/Label/Language.js";
import { Label_PkgCount } from "./Modules/Label/PackageCount.js";

import { computerType, computerTypeStartPolling} from "./Modules/DesktopType.js";

computerTypeStartPolling();
export const ctypeOut = computerType.getValue().toString();

function Left() {
    return Widget.Box({
        spacing: 8,
        class_name: (ctypeOut == "3")?
                    "defaultLabel"
                    :
                    "defaultLaptopLabel",
        children: [
            Label_PkgCount(),
            Label_langauge(),
            Label_ClientTitle(),
        ],
    })
}

function Right(){
    return Widget.Box({
        hpack: "end",
        spacing: 8,
        children:[
            Box_Workspace(),
            Box_Battery(),
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
        exclusive: true,
        child: Widget.CenterBox({
            start_widget: Left(),
            center_widget: Center(),
            end_widget: Right(),
        }),
    })
}
computerType.stopPoll();
