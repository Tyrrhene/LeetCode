function trap(height: number[]): number {
    let totalRainWater = 0;
    const landscapeLength = height.length;
    if (landscapeLength === 0) return totalRainWater;

    const maxLeft = new Array(landscapeLength).fill(0);
    const maxRight = new Array(landscapeLength).fill(0);

    maxLeft[0] = height[0];
    for (let i = 1; i < landscapeLength; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
    }

    maxRight[landscapeLength - 1] = height[landscapeLength - 1];
    for (let i = landscapeLength - 2; i >= 0; i--) {
        maxRight[i] = Math.max(maxRight[i + 1], height[i]);
    }

    for (let i = 0; i < landscapeLength; i++) {
        const minHeight = Math.min(maxLeft[i], maxRight[i]);
        totalRainWater += Math.max(0, minHeight - height[i]);
    }

    return totalRainWater;
}