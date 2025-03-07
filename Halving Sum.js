/*
Description:
Task
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/
function halvingSum(n) {
  const arr = [];

  for (let i = 2; i < n; i *= 2) {
    arr.push(i);
  }

  return arr.reduce((acc, el) => acc + ~~(n / el), n);
  //////////////////////////////////!SECTION
  //   return n > 1 ? n + halvingSum((n / 2) | 0) : n;
  //////////////////////////////////!SECTION
  //   return n + (n > 1 && halvingSum(n >> 1));
}

console.log(halvingSum(25)); //47
console.log(halvingSum(127)); //247
