function reverse(str)
{
    return str.split('').reverse().join('');
}

let str = "Malik";
console.log(`The reverse of ${str} is: ${reverse(str)}`);