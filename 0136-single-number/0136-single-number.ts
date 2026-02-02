function singleNumber(nums: number[]): number {
    const counts = new Map<number, number>();

    for (const number of nums) {
        counts.set(number, (counts.get(number) ?? 0) + 1)
    }

    for (const [key, value] of counts) {
        if (value === 1) {
            return key
        }
    }
};