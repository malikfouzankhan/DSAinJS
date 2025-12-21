function smallestInArray(arr)
{
    let min = Infinity;
    for(x of arr)
    {
        if(x < min)
        {
            min = x;
        }
    }
    return min;
}

let arr = [2,6,88,334,22];
console.log(`The minimum element of the given array is: ${smallestInArray(arr)}`);