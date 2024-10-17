const battery = await Service.import("battery")
import { ctypeOut } from "../../Taskbar.js"

export function Box_Battery()
{
    return Widget.Box({
        class_name: (ctypeOut == "3")?
                    "defaultLabel"
                    :
                    "defaultLaptopLabel",

        visible: battery.bind("available"),
        children: [
            Widget.Label({
                label: (battery.bind("energy")).as(
                    p => p > 50?    
                        "Battery: 🔋" + Math.ceil(p).toString() + "%"
                        : 
                        "Battery: 🪫" + Math.ceil(p).toString() + "%"
                ),
            })
        ],
    })
}