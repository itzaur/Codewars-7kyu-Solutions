/*
Description:
Introduction

Take a list of n numbers a1, a2, a3, ..., aN to start with.

Arithmetic mean (or average) is the sum of these numbers divided by n.

Geometric mean (or average) is the product of these numbers taken to the nth root.
Example

List of numbers: 1, 3, 9, 27, 81

    n = 5
    Arithmetic mean = (1 + 3 + 9 + 27 + 81) / 5 = 121 / 5 = 24.2
    Geometric mean = (1 * 3 * 9 * 27 * 81) ^ (1/5) = 59049 ^ (1/5) = 9

Task

You will be given a list of numbers and their arithmetic mean. However, the list is missing one number. Using this information, you must figure out and return the geometric mean of the FULL LIST, including the number that's missing.
*/
function geo_mean(nums, arith_mean) {
  const length = nums.length + 1;
  const sum = nums.reduce((acc, el) => acc + el, 0);
  const missingNumber = arith_mean * length - sum;
  const product = nums.reduce((acc, el) => acc * el, 1) * missingNumber;

  return Math.pow(product, 1 / length);
  //////////////////////////////////////////////!SECTION
  //   return (
  //     [
  //       ...nums,
  //       nums.reduce((num, el) => num - el, arith_mean * (nums.length + 1)),
  //     ].reduce((prod, el) => prod * el, 1) **
  //     (1 / (nums.length + 1))
  //   );
}

console.log(geo_mean([2], 10)); //6
console.log(geo_mean([1, 2], 3)); //2.2894284851066637
console.log(geo_mean([4, 6, 7, 2], 5)); //4.580344097847165
