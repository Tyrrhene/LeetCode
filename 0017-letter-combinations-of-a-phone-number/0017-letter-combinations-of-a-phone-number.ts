function letterCombinations(digits) {
    if (digits.length === 0) return [];
    
    const digitLettersMap = {
        '1': [''],
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };

    function generateCombinations(currentIndex) {
        if (currentIndex === digits.length) {
            return [''];
        }

        const currentDigit = digits[currentIndex];
        const letters = digitLettersMap[currentDigit];

        return letters.flatMap(letter => generateCombinations(currentIndex + 1).map(combination => letter + combination));
    }

    return generateCombinations(0);
}