function containsDuplicate(nums: number[]): boolean {
  const alreadyExists = new Set<number>();

  for (const number of nums) {
    if (alreadyExists.has(number)) return true;
    alreadyExists.add(number);
  }
  return false;
}