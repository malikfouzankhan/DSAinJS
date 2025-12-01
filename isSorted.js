function isSorted(arr)
{
    for(let i = 0;i < arr.length - 1;i++)
    {
        if(arr[i] >= arr[++i])
        {
            return `is not sorted`;
        }
    }
    return `is sorted`;
}

let arr = [1,2,3,4,4];
console.log(`The given array ${isSorted(arr)}`);