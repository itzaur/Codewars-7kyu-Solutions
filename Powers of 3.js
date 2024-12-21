/*
Description:
Given a positive integer N, return the largest integer k such that 3^k < N.

For example,

largest_power(3) == 0
largest_power(4) == 1
You may assume that the input to your function is always a positive integer.
*/
function largestPower(n) {
  const result = Math.round(Math.log(n) / Math.log(3));

  if (result === 0) return -1;

  return 3 ** result < n ? result : Math.trunc(Math.log(n - 1) / Math.log(3));
  //////////////////////////////////////////!SECTION
  //   return Math.ceil(Math.log10(n) / Math.log10(3)) - 1;
  //////////////////////////////////////////!SECTION
  //   let res = 0;

  //   while (3 ** res < n) res++;

  //   return res - 1;
  //////////////////////////////////////////!SECTION
  //   return --n ? (Math.log(n) / Math.log(3)) ^ 0 : -1;
  //////////////////////////////////////////!SECTION
  //   return n === 1 ? -1 : (Math.log10(n - 1) / Math.log10(3)) | 0;
  //////////////////////////////////////////!SECTION
  //   var k = ~~(Math.log(n) / Math.log(3));

  //   return Math.pow(3, k) >= n ? k - 1 : k;
}

console.log(largestPower(3)); //0
console.log(largestPower(5)); //1
console.log(largestPower(7)); //1
console.log(largestPower(81)); //3
console.log(largestPower(82)); //4
console.log(largestPower(1853020188851848)); //32
