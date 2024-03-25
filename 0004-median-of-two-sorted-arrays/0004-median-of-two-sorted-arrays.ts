function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const length = mergedArray.length;
    if (length % 2 === 0) {
        const middleIndex = length / 2;
        return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
    } else {
        return mergedArray[Math.floor(length / 2)];
    }
}