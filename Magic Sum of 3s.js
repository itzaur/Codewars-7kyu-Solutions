/*
Description:
The magic sum of 3s is calculated on an array by summing up odd numbers which include the digit 3.

Complete the function which accepts an array of integers and returns its magic sum of 3s.

Example: [3, 12, 5, 8, 30, 13] results in 16 (3 + 13)

If there is no such number in the array, 0 should be returned.
*/
function magicSum(numbers) {
  return numbers.reduce((acc, el) => {
    return acc + (el % 2 && `${el}`.includes('3') ? el : 0);
  }, 0);
}

console.log(magicSum([3])); //3
console.log(magicSum([3, 13])); //16
console.log(magicSum([30, 34, 330])); //0
console.log(magicSum([3, 12, 5, 8, 30, 13])); //16
console.log(magicSum([])); //0
