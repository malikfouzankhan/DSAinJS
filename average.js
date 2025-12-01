let arr = [1,2,3,4,5,6,7,8];
console.log(`The average of the elements given in the array is: ${(arr.reduce((acc,cur)=>acc+cur,0))/arr.length}`);