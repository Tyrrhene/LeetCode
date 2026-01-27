function twoSum(nums: number[], target: number): number[] {
    for (let index = 0; index < nums.length; index++) {
        for (let secondIndex = index + 1; secondIndex < nums.length; secondIndex++) {
            if (nums[index] + nums[secondIndex] === target) {
                return [index, secondIndex]
            } 
        }
    }
};