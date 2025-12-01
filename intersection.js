function intersection(arr1, arr2)
{
    let newArr = [];
    for(x of arr1)
    {
        if(arr2.includes(x))
        {
            newArr.push(x);
        }
    }
    return newArr;
}

let arr1 = [1,2,3], arr2 = [4];
console.log(`The intersecting elements of the two arrays is/are: `,intersection(arr1, arr2));