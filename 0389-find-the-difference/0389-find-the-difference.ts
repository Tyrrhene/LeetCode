function findTheDifference(s: string, t: string): string {
    const sSorted = s.split("").sort()
    const tSorted = t.split("").sort()

    for (let x = 0; x < t.length; x++) {
        if (sSorted[x] !== tSorted[x]) {
            return tSorted[x]
        }
    }
}