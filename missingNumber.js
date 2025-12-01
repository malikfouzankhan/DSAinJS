let arr = [1, 2, 3, 4, 5, 6, 7, 9];
let sum = (arr[arr.length - 1] * (arr[arr.length - 1] + 1)) / 2;
let missing = sum - arr.reduce((acc, cur) => acc + cur, 0);


if (!missing) {
  console.log(
    `No number is missing from the array having elements from 1 to N`
  );
} else {
  console.log(
    `The missing number in the array having elements from 1 to N is: ${missing}`
  );
}
