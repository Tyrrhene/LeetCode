function isPalindrome(x: number): boolean {
   let reverse =  x.toString().split("").reverse().join("");
   if (x === parseInt(reverse)) {
    return true
   } else {
    return false
   }
};