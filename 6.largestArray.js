function largestInArray(arr)
{
    let max = -Infinity;
    for(x of arr)
    {
        if(x > max)
        {
            max = x;
        }
    }
    return max;
}

let arr = [2,6,88,334,22];
console.log(`The maximum element of the given array is: ${largestInArray(arr)}`);