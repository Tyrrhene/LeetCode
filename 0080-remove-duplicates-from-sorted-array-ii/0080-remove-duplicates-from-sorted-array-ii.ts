function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) return nums.length;
  let write = 2;

  for (let x = 2; x < nums.length; x++) {
    if (nums[x] !== nums[write - 2]) {
      nums[write] = nums[x];
      write++;
    }
  }

  return write;
}