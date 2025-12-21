function chunks(arr)
{
    let ans = [];
    
    for(let i = 0;i < arr.length;i += 2)
    {
        ans.push([arr[i], arr[i+1]]);
    }
    if(arr.length % 2)
    {
        ans.push([arr[arr.length - 1]]);
    }
    return ans
}

let arr = [4,6,2,1,7,2,8];
console.log(`The chunks are:`, chunks(arr));