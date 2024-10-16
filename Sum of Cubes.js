/*
Description:
Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/
function sumCubes(n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce(
    (acc, el) => acc + el ** 3,
    0
  );
  //////////////////////////////!SECTION
  //   return ((n * (n + 1)) / 2) ** 2;
  //////////////////////////////!SECTION
  //   if (n == 1) {
  //     return n ** 3;
  //   } else {
  //     return n ** 3 + sumCubes(n - 1);
  //   }
  //////////////////////////////!SECTION
  //   return [...Array(n + 1)].reduce((sum, _, idx) => sum + idx ** 3, 0);
}

console.log(sumCubes(2)); //9
console.log(sumCubes(3)); //36
