const hyprland = await Service.import("hyprland");
import { ctypeOut } from "../../Taskbar.js";

export function Label_ClientTitle() {
    const ClientTitleLength = 50;
    return Widget.Label({
        class_name: (ctypeOut == "3")?
        "defaultDarkerLabel"
        :
        "defaultDarkerLaptopLabel",

        label: hyprland.active.client.bind("title").as(
            p => p.length > ClientTitleLength ? 
                p.substring(0,ClientTitleLength - 3) + "..." : 
                p 
        ),
    })
}1