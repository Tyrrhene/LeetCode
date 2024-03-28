function maximumUnits(boxTypes: number[][], truckSize: number): number {
    boxTypes.sort((boxTypeA, boxTypeB) => boxTypeB[1] - boxTypeA[1]);
    
    let totalUnits = 0;
    
    for (const box of boxTypes) {
        const boxesCount = Math.min(box[0], truckSize);
        totalUnits += boxesCount * box[1];
        
        truckSize -= boxesCount;
        
        if (truckSize === 0) break;
    }
    
    return totalUnits;
}
