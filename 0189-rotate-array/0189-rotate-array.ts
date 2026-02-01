/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    if (nums.length === 1) return
    if (k > nums.length) k = k % nums.length;
    const originalLength = nums.length
    for (let x = k; x > 0; x--) {
        nums.push(nums[originalLength - x])
    }
    for (let i = 0; i < originalLength - k; i++) {
        nums.push(nums[i])
    }
    nums.splice(0, originalLength)
};