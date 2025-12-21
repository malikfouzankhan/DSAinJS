function union(arr1, arr2)
{
    let newArr = [];
    for(x of arr1.concat(arr2))
    {
        if(!newArr.includes(x))
        {
            newArr.push(x);
        }
    }
    return newArr;
}

let arr1 = [1,2,3], arr2 = [3,4,5];
console.log(`The union of the given two arrays is: `, union(arr1, arr2));