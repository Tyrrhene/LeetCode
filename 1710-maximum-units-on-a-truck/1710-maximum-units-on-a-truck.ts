function maximumUnits(boxTypes: number[][], truckSize: number): number {
    boxTypes.sort((boxTypeA, boxTypeB) => boxTypeB[1] - boxTypeA[1]);
    
    let totalUnits = 0;
    
    for (const [numberOfBoxes, unitsPerBox] of boxTypes) {
        const boxesToLoad = Math.min(numberOfBoxes, truckSize);
        totalUnits += boxesToLoad * unitsPerBox;
        truckSize -= boxesToLoad;
        
        if (truckSize === 0) {
            break;
        }
    }
    
    return totalUnits;
}
