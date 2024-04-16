function plusOne(digits: number[]): number[] {
    const number = BigInt(digits.join('')) + BigInt(1);
    return Array.from(number.toString()).map(Number);
}
