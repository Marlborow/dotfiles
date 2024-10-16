const battery = await Service.import("battery")

export function Box_Battery()
{
    return Widget.Box({
        class_name: "battery",
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