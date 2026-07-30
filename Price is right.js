/*
Description:

Given an array of integers, and a target integer, return the largest integer from the array that is less than or equal to the target.

If there is no number that is less than or equal to the target number then return undefined.

The array of integers may be empty, but will always be an array.
*/
function priceIsRight(numbers, target) {
  return numbers.filter((el) => el <= target).sort((a, b) => b - a)[0];
}

console.log(priceIsRight([1, 2, 3, 4], 1)); //1
console.log(priceIsRight([1, 2, 3, 4], 2)); //2
console.log(priceIsRight([1, 2, 3, 4], 3)); //3
console.log(priceIsRight([1, 2, 3, 4], 4)); //4
console.log(priceIsRight([1, 2, 3, 4], 5)); //4
console.log(priceIsRight([1, 2, 3, 4], 0)); //undefined
