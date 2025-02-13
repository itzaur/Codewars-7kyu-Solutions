/*
Description:
Challenge:

Given a multi-dimensional integer array, return the total number of integers, stored inside this array. You should not rely on the number of dimensions to solve this kata. If n is the number of dimensions, then: 1 <= n < +Infinity.

Example:

Given [[[5], 3], 0, 2, [], [4, [5, 6]]], your function should return a result of 7. This is because the array contains 7 integers.

Addendum:

Think of it as dimension-agnostic value counting. We want to know the total number of integers inside the array and we don't care for the dimensions.
*/
const realSize = (arrays) => arrays.flat(Infinity).length;
////////////////////////////////////////!SECTION
// const realSize = (arrays) =>
//   arrays.reduce(
//     (pre, val) => pre + (Array.isArray(val) ? realSize(val) : 1),
//     0
//   );
////////////////////////////////////////!SECTION
// const realSize=arr=>((arr+"").match(/\d+/g)||[]).length

console.log(realSize([])); //0
console.log(realSize([[]])); //0
console.log(realSize([1, [1]])); //2
console.log(realSize([1, [], 2, [], 3, []])); //3
console.log(realSize([0, [1, [5, [4, 3], 1], 1]])); //7
console.log(realSize([[[5], 3], 0, 2, [], [4, [5, 6]]])); //7
