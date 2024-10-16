const date = Variable("", {
    poll: [1000, 'date "+%B %d, %Y, %I:%M %P"'],
})

export function Label_Clock() {
    return Widget.Label({
        class_name: "clock",
        label: date.bind(),
        justification: "center"
    })
}