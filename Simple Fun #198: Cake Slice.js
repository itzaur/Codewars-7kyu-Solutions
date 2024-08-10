/*
Description:
Task
A cake is sliced with n straight lines. Your task is to calculate the maximum number of pieces the cake can have.

Example
For n = 0, the output should be 1.

For n = 1, the output should be 2.

For n = 2, the output should be 4.

For n = 3, the output should be 7.

See the following image to understand it:



Input/Output
[input] integer n
0 ≤ n ≤ 10000

[output] an integer
The maximum number of pieces the sliced cake can have.
*/
function cakeSlice(n) {
  return 1 + (n * (n + 1)) / 2;
  //////////////////////////////////!SECTION
  //   return (n ** 2 + n + 2) / 2;
  //////////////////////////////////!SECTION
  //   return n === 0 ? 1 : cakeSlice(n - 1) + n;
  //////////////////////////////////!SECTION
  //   let sum = 1;

  //   for (let i = 1; i <= n; i++) {
  //     sum += i;
  //   }

  //   return sum;
}

console.log(cakeSlice(0)); //1
console.log(cakeSlice(1)); //2
console.log(cakeSlice(2)); //4
console.log(cakeSlice(3)); //7
console.log(cakeSlice(10)); //56
console.log(cakeSlice(1664)); //1385281
