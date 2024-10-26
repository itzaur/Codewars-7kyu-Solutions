/*
Description:
Implement a function to calculate the sum of the numerical values in a nested list. For example :

sumNested([1, [2, [3, [4]]]]) => 10
*/
const sumNested = (arr) => arr.flat(Infinity).reduce((acc, el) => acc + el, 0);
//////////////////////////////////!SECTION
// const sumNested = (arr) =>
//   arr.reduce(
//     (pre, val) => pre + (Array.isArray(val) ? sumNested(val) : val),
//     0
//   );

console.log(sumNested([1])); //1
console.log(sumNested([1, 2, 3, 4])); //10
console.log(sumNested([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //55
console.log(sumNested([])); //0
