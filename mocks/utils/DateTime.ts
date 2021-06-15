export const randomDate = (
    start: Date = new Date(),
    end: Date = new Date(new Date().getTime() + 86400000),
    startHour: number = 1,
    endHour: number = 23
) => {
    const startTime = start.getTime();
    const endTime = end.getTime();
    const date = new Date(startTime + Math.random() * (endTime - startTime + 1e3));
    const hour = startHour + Math.random() * (endHour - startHour);
    const minute = 0 + Math.random() * (60 - 0);
    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}