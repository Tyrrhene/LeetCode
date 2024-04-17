function majorityElement(numberArray: number[]): number {
    let currentLeaderCount = 0;
    let currentLeader = null;

    for (const number of numberArray) {
        if (currentLeaderCount === 0) {
            currentLeader = number;
        }
        currentLeaderCount += (number === currentLeader) ? 1 : -1;
    }

    currentLeaderCount = 0;
    for (const number of numberArray) {
        if (number === currentLeader) {
            currentLeaderCount++;
        }
    }

    if (currentLeaderCount > numberArray.length / 2) {
        return currentLeader;
    }
};