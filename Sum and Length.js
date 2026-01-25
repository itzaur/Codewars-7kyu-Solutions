/*
Description:
Sum and Length

In this kata you must return a string value, where the first part is the sum of positive numbers and the second part is the number of negative numbers.
Knowing that the first '0' is negative, the second is positive, the third is negative, and so on...

For example :

sumLength([-1,2,3,4,0,1,0,-2,0,-3])
return '10 5' (10 = 1 + 2 + 3 + 4 and 5 = 3 + 2 => 3 negatives numbers + second 0 as negative)
*/
function sumLength(arr) {
  const positiveCount = arr.reduce((acc, el) => (el > 0 ? acc + el : acc), 0);
  const negativeCount = arr.filter((el) => el < 0).length;
  const zeroCount = Math.round(arr.filter((el) => el === 0).length / 2);

  return `${positiveCount} ${negativeCount + zeroCount}`;
}

console.log(sumLength([1, 2, 3, 4, -1, -2, -3])); //'10 3'
console.log(sumLength([1, 2, 3, 4, 0, -1, -2, -3])); //'10 4'
console.log(sumLength([-1, 2, 3, 4, 0, 1, 0, -2, 0, -3])); //'10 5'
console.log(sumLength([-1, -2, -3, -4, 0, -1, 0, -2, 0, -3])); //'0 9'
console.log(sumLength([1, 2, 3, 4, 1, 2, 3])); //'16 0'
console.log(sumLength([0, 0, 0, 0, 0, 0, 0])); //'0 4'
console.log(sumLength([])); //'0 0'
