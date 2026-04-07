/*
Description:

Given an array of integers.

Return a number that is the sum of

    The product of all the non-negative numbers
    The sum of all the negative numbers

Edge cases

    If there are no non-negative numbers, assume the product of them to be 1.
    Similarly, if there are no negative numbers, assume the sum of them to be 0.
    If the array is null, result should be 0.

For example:

mathEngine([1, 2, 3, -4, -5]) // should return -3
*/
function mathEngine(arr) {
  if (arr === null) {
    return 0;
  }

  const nonNegativeSum = arr
    .filter((el) => el >= 0)
    .reduce((acc, el) => acc * el, 1);
  const negativeSum = arr
    .filter((el) => el < 0)
    .reduce((acc, el) => acc + el, 0);

  return nonNegativeSum + negativeSum;
  //////////////////////////////////////////////!SECTION
  //   return arr
  //     ? arr.filter((x) => x >= 0).reduce((a, b) => a * b, 1) +
  //         arr.filter((x) => x < 0).reduce((a, b) => a + b, 0)
  //     : 0;
}

console.log(mathEngine([1, 2, 3, -4, -5])); //-3
console.log(mathEngine(null));
