function findPoisonedDuration(timeSeries: number[], duration: number): number {
    let poisonedSecondsTotal = 0
    let resetCount = 0
    while (resetCount < timeSeries.length) {
        if (resetCount === timeSeries.length - 1) {
            poisonedSecondsTotal += duration
        } else {
            const gap = timeSeries[resetCount + 1] - timeSeries[resetCount]
            poisonedSecondsTotal += Math.min(gap, duration)
        }
        resetCount += 1
    }
    return poisonedSecondsTotal
};