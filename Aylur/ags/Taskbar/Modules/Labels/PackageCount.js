const pkgCount = Variable('', {
    poll: [10000, ['bash', '-c', 'checkupdates | wc -l'], out => ' Package Count: ' + out],
});


export function Label_PkgCount() {
    return Widget.Label({
        class_name: "pkgcount",
        label: pkgCount.bind(),
    })
}
