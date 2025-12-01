function isPalindrome(str)
{
    return str === str.split('').reverse().join('') ? `a palindrome` : `not a palindrome`;
}

let str = "Code";
console.log(`${str} is ${isPalindrome(str.toLowerCase())}`);