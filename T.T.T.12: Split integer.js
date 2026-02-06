/*
Description:
Task

Given a positive integer n (n>=2), split it into the sum of at least TWO positive integers and maximize the product of those integers. Return the maximum product you can get.

For example:

if n = 2, should return 1 (2 = 1 + 1, 1 x 1 = 1);

If n = 10, should return 36 (10 = 3 + 3 + 4, 3 x 3 x 4 = 36).
*/
function splitInt(n) {
  if (n <= 3) return n - 1;

  let count = 1;

  while (n > 4) {
    count *= 3;
    n -= 3;
  }

  return count * n;
  ////////////////////////////////////!SECTION
  //   return n <= 3
  //     ? n - 1
  //     : Math.pow(3, ~~(n / 3) - (n % 3 === 1)) *
  //         (n % 3 === 0 ? 1 : n % 3 === 1 ? 4 : 2);
}

console.log(splitInt(2)); //1
console.log(splitInt(3)); //2
console.log(splitInt(4)); //4
console.log(splitInt(5)); //6
console.log(splitInt(7)); //12
console.log(splitInt(8)); //18
console.log(splitInt(10)); //36
console.log(splitInt(20)); //1458
