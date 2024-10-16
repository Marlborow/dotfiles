const hyprland = await Service.import("hyprland");


const currentWorkspace = Variable("",{
    poll: [100, ['bash', '-c', "hyprctl activeworkspace | grep 'workspace ID' | awk '{print $3}'"], out => out]
})

const spacing = "    ";

export function Box_Workspace()
{
    return Widget.Box({
        class_name: "workspace",
        visible: true,
        children: [
            Widget.Label({
                label:(currentWorkspace.bind("value")).as
                (
                    p => p == "1"? 
                    "🚀🌍"
                    : 
                    " 🌍"
                )
            }),
            Widget.Label({label:spacing}),
            Widget.Label({
                label:(currentWorkspace.bind("value")).as
                (
                    p => p == "2"? 
                    "🚀🛰️"
                    : 
                    " 🛰️"
                )
            }),
            Widget.Label({label:spacing}),
            Widget.Label({
                label:(currentWorkspace.bind("value")).as
                (
                    p => p == "3"? 
                    "🚀🌕"
                    : 
                    " 🌕"
                )
            }),
            Widget.Label({label:spacing}),
            Widget.Label({
                label:(currentWorkspace.bind("value")).as
                (
                    p => p == "4"? 
                    "🚀🛸"
                    : 
                    " 🛸"
                )
            }),
            Widget.Label({label:spacing}),
            Widget.Label({
                label:(currentWorkspace.bind("value")).as
                (
                    p => p == "5"? 
                    "🚀🪐"
                    : 
                    " 🪐"
                )
            }),
            Widget.Label({label:spacing}),
            Widget.Label({
                label:(currentWorkspace.bind("value")).as
                (
                    p => p == "6"? 
                    "🚀☄️"
                    : 
                    " ☄️"
                )
            }),
            Widget.Label({label:spacing}),
            Widget.Label({
                label:(currentWorkspace.bind("value")).as
                (
                    p => p == "7"? 
                    "🚀💫"
                    : 
                    " 💫"
                )
            }),
            Widget.Label({label:spacing}),
            Widget.Label({
                label:(currentWorkspace.bind("value")).as
                (
                    p => p == "8"? 
                    "🚀⭐"
                    : 
                    " ⭐"
                )
            }),
            Widget.Label({label:spacing}),
            Widget.Label({
                label:(currentWorkspace.bind("value")).as
                (
                    p => p == "9"? 
                    "🚀🌞"
                    : 
                    " 🌞"
                )
            }),

            Widget.Label({label:spacing}),
            Widget.Label({
                label:(currentWorkspace.bind("value")).as
                (
                    p => p == "10"?
                    "🚀🌚"
                    : 
                    " 🌚"
                )
            }),

            Widget.Label({label:spacing}),
        ],
    })
}