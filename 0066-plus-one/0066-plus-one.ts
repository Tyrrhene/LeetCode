function plusOne(digits: number[]): number[] {
    const number = BigInt(digits.join('')) + BigInt(1); // Using BigInt to handle large numbers
    return Array.from(String(number), (digit, index) => index === 0 ? digit : Number(digit)) as number[];
}