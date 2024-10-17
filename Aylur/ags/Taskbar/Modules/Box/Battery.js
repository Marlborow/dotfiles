const battery = await Service.import("battery")

export function Box_Battery()
{
    return Widget.Box({
        class_name: "battery",
        visible: battery.bind("available"),
        children: [
            Widget.Label({
                label: "Battery"
            }),
            Widget.Label({
                label: (battery.bind("charging")).as( p => p == true? "(⚡):" : ":"),
            }),
            Widget.Label({
                label: (battery.bind("energy")).as(
                    p => p > 50?    
                        " 🔋" + Math.ceil(p).toString() + "%"
                        : 
                        " 🪫" + Math.ceil(p).toString() + "%"
                ),
            })
        ],
    })
}