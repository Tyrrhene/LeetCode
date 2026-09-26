function calPoints(operations: string[]): number {
    let operationCount = 0
    let operatedArray = []
    let score = 0
    while (operations.length > operationCount) {
        if (!isNaN(Number(operations[operationCount]))) {
            operatedArray.push(Number(operations[operationCount]))
        } else if (operations[operationCount] === 'C') {
            operatedArray.pop()
        } else if (operations[operationCount] === 'D') {
            operatedArray.push(operatedArray[operatedArray.length - 1] * 2)
        } else if (operations[operationCount] === '+') {
            let secondLast = operatedArray[operatedArray.length - 2];
            let last = operatedArray[operatedArray.length - 1];
            if (typeof secondLast === 'number' && typeof last === 'number') {
                operatedArray.push(secondLast + last);
            }
        }
        operationCount += 1
    }
    return operatedArray.reduce((total, n) => total + n, 0);
};
