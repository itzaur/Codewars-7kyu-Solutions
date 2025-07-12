/*
Description:

Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 (but not 3) below the given integer and C is the number of multiples of 3 and 5 below the given integer.

For example, solution(20) should return [5, 2, 1]
*/
function solution(number) {
  const array = Array.from({ length: number }, (_, i) => i);

  const multiplesOf3 = array.filter((n) => n % 3 === 0 && n % 5 !== 0).length;
  const multiplesOf5 = array.filter((n) => n % 5 === 0 && n % 3 !== 0).length;
  const multiplesOf3And5 = array.filter(
    (n) => n % 3 === 0 && n % 5 === 0
  ).length;

  return [multiplesOf3, multiplesOf5, multiplesOf3And5 - 1];
}
//////////////////////////////////////////////////////////!SECTION
// const solution = (number) =>
//   ((val) => [((number / 3) ^ 0) - val, ((number / 5) ^ 0) - val, val])(
//     (--number / 15) ^ 0
//   );

console.log(solution(20)); //[5, 2, 1]
console.log(solution(2)); //[0, 0, 0]
console.log(solution(14)); //[4,2,0]
console.log(solution(30)); //[8, 4, 1]
console.log(solution(141)); //[37, 19, 9]
