import { ctypeOut } from "../../Taskbar.js"

const date = Variable("", {
    poll: [1000, 'date "+%B %d, %Y, %I:%M %P"'],
})

export function Label_Clock() {
    return Widget.Label({
        class_name: (ctypeOut == "3")?
                    "defaultLabel"
                    :
                    "defaultLaptopLabel",
        label: date.bind(),
        justification: "center"
    })
}