function distributeCandies(candyType: number[]): number {
    const uniqueTypes = new Set(candyType).size;
    const allowance = candyType.length / 2;
    return Math.min(uniqueTypes, allowance);
};