/*
DESCRIPTION:
Given an array containing only integers, add all the elements and return the binary equivalent of that sum.

If the array contains any non-integer element (e.g. an object, a float, a string and so on), return false.

Note: The sum of an empty array is zero.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == false
*/
function arr2bin(arr) {
  if (!arr.length) return '0';

  return arr.every((el) => typeof el === 'number')
    ? arr.reduce((acc, el) => acc + el).toString(2)
    : false;

  //   return (
  //     arr.every(Number.isInteger) &&
  //     arr.reduce((pre, val) => pre + val, 0).toString(2)
  //   );
}

console.log(arr2bin([]));
console.log(arr2bin([8, 89, true, 90, 28, 34, 79, 90, 60, 99, 23, 17, 60])); //'11'
console.log(arr2bin([1, 2])); //'11'
console.log(arr2bin([1, 2, 3, 4, 5])); //'1111'
console.log(arr2bin([1, 10, 100, 1000])); //'10001010111'
