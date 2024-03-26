function isPalindrome(x: number): boolean {
    const string = x.toString();
    if (string.length === 1) {
        return true;
    }
    
    const len = Math.floor(string.length / 2);
    for (let i = 0; i < len; i++) {
        if (string[i] !== string[string.length - i - 1]) {
            return false;
        }
    }
    return true;
}
