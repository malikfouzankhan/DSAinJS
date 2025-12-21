function secondLargest(arr)
{
    let max = -Infinity;
    let secMax = -Infinity;
    for(x of arr)
    {
        if(x > max)
        {
            secMax = max;
            max = x;
        }
        else if(x > secMax)
        {
            secMax = x;
        }
    }
    return secMax;
}

let arr = [2,6,88,334,22];
console.log(`The second largest element of the given array is: ${secondLargest(arr)}`);