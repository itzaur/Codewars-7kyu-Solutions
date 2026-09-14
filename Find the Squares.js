/*
Description:
Problem

Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"
Examples

9  -->  "25-16"
5  -->  "9-4"
7  -->  "16-9"
*/
const findSquares = (num) => {
  return `${Math.pow((num + 1) / 2, 2)}-${Math.pow((num - 1) / 2, 2)}`;
};
//////////////////////////////////////!SECTION
// const findSquares = ($) =>
//   `${Math.round($ / 2) ** 2}-${Math.floor($ / 2) ** 2}`;

console.log(findSquares(81)); //'1681-1600'
console.log(findSquares(25)); //'169-144'
