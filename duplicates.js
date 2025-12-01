function removeDuplicates(arr)
{
    let newArr = [];
    for(x of arr)
    {
        if(!newArr.includes(x))
        {
            newArr.push(x);
        }
    }
    return newArr;
}

let arr = [1,1,2,3,4,4,6,7,8,8];
console.log(`The non-duplicate array of the given array is: `,removeDuplicates(arr));