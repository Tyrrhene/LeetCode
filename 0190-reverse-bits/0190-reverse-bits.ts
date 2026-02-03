function reverseBits(n: number): number {
  const bits = (n >>> 0).toString(2).padStart(32, "0");
  return parseInt(bits.split("").reverse().join(""), 2) >>> 0;
}