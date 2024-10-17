export const ComputerTypeEnum = {
    Laptop: 10,
    Desktop: 3,
};
Object.freeze(ComputerTypeEnum);


export const computerType = Variable('unknown', {
    poll: [100, ['bash', '-c', "cat /sys/class/dmi/id/chassis_type"], out => out.toString().trim()]
});

if(!computerType.is_polling)
    computerType.startPoll()





