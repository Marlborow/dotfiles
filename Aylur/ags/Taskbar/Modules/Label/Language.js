const currentLang = Variable('', {
    poll: [250, ['bash', '-c', "hyprctl devices -j | jq -r '.keyboards[] | .active_keymap' | head -n1 | cut -c1-2 | tr 'a-z' 'A-Z'"], out => out],
});


export function Label_langauge() {
    return Widget.Label({
        class_name: "lang",
        label: currentLang.bind().as(
            p => p == "EN"? 
            "🇬🇧"
            :
            "🇷🇺"
        ),
    })
}

