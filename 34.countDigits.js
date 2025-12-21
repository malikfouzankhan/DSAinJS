function countDigits(n)
{
    let cnt = 0, x = n;
    while(x > 0)
    {
        cnt++;
        x = Math.floor(x / 10);
    }
    return cnt;
}

let n = 12345;
console.log(`The number of digits in ${n} is/are: ${countDigits(n)}`);