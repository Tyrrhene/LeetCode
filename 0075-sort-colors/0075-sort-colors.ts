/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let swapped = true;
    for(let x = 0; x < nums.length; x++) {
        swapped = false;
        for(let z = 0; z < nums.length; z++) {
            if (nums[z] > nums[z + 1]) {
                [nums[z], nums[z + 1]] = [nums[z + 1], nums[z]];
                swapped = true;
            }
        }
    }
};