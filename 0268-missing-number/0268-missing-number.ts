function missingNumber(numbers: number[]): number {
    const n = numbers.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;

    for (let i = 0; i < n; i++) {
        actualSum += numbers[i];
    }

    return expectedSum - actualSum;
}