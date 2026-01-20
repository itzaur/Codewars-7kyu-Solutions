/*
Description:

Given a number n, find the number of trailing zeros in its binary representation.
Examples:

4  ->  2, because 4 is represented as 100
5  ->  0, because 5 is represented as 101
Limits:

0 < n <= 10^4
*/
function trailingZeros(n) {
  return n.toString(2).match(/0*$/)[0].length;
  //////////////////////////////////////!SECTION
  //   return Math.log2(n & -n);
  //////////////////////////////////////!SECTION
  //   return n.toString(2).split('1').at(-1).length;
}

console.log(trailingZeros(4)); //2
console.log(trailingZeros(5)); //0
console.log(trailingZeros(32)); //5
console.log(trailingZeros(25)); //0
