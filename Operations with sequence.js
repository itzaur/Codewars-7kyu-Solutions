/*
DESCRIPTION:
Steps

Square the numbers that are greater than zero.
Multiply by 3 every third number.
Multiply by -1 every fifth number.
Return the sum of the sequence.
Example
{ -2, -1, 0, 1, 2 } returns -6

1. { -2, -1, 0, 1 * 1, 2 * 2 }
2. { -2, -1, 0 * 3, 1, 4 }
3. { -2, -1, 0, 1, -1 * 4 }
4. -6
P.S.: The sequence consists only of integers. And try not to use "for", "while" or "loop" statements.
*/
const calc = (a) =>
  a
    .map((el) => (el > 0 ? el ** 2 : el))
    .map((el, i) => ((i + 1) % 3 == 0 ? el * 3 : el))
    .map((el, i) => ((i + 1) % 5 == 0 ? el * -1 : el))
    .reduce((acc, el) => acc + el, 0);
//////////////!SECTION
// const calc = (a) =>
//   a.reduce(
//     (s, n, i) =>
//       s + (n > 0 ? n * n : n) * (i % 3 == 2 ? 3 : 1) * (i % 5 == 4 ? -1 : 1),
//     0
//   );

console.log(calc([-2, -1, 0, 1, 2])); //-6
console.log(calc([0, 2, 1, -6, -3, 3])); //31
console.log(calc([0])); //0
console.log(calc([1, 1, 1, 1, 1])); //5
