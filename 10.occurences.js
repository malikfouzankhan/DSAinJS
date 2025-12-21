function occurencesOfElements(arr)
{
    let occ = {};
    for(let i = 0;i < arr.length;i++)
    {
        occ[arr[i]] = occ[arr[i]] || 0;
        occ[arr[i]]++;
    }
    return occ;
}

let arr = [1,2,2,3,4,4,4,5,6,7,8,5,4,3];
console.log(`The occurences of the elements of the given array is/are: `, occurencesOfElements(arr));