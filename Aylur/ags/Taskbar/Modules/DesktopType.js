export const computerType = Variable('unknown', {
    poll: [100, ['bash', '-c', "cat /sys/class/dmi/id/chassis_type"], out => out.toString().trim()]
});

export function computerTypeStartPolling()
{
    if(!computerType.is_polling)
        computerType.startPoll()
}





