function sumOfEvenAndOdd(arr)
{
    let evenSum = 0, oddSum = 0;
    for(x of arr)
    {
        if(x%2 == 0){
            evenSum += x;
        }
        else{
            oddSum += x;
        }
    }
    return {evenSum, oddSum};
}

let arr = [1,2,3,4,5,6,7,8,9];
console.log(`The sum of even and odd numbers in the array is: `, sumOfEvenAndOdd(arr));