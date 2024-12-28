/*
Description:
Here at Conformity Inc. we only like even things. We need you to put a stop to anything that does not conform to our strict even only policy.

Write a function that will convert any number to its nearest even number. When the number is halfway between two even numbers it should round away from zero.

Examples

1    => 2

0.5  => 0

-1   => -2

-0.5  => 0
*/
function ensureEven(n) {
  return ~~n & (1 === 1) ? ~~n + (n > 0 ? 1 : -1) : ~~n;
  ////////////////////////////////////!SECTION
  //   return Math.round(n/2) * 2
  ////////////////////////////////////!SECTION
  //   return ~~(~~n + (n % 2));
}

console.log(ensureEven(1)); //2
console.log(ensureEven(0.5)); //0
console.log(ensureEven(-1)); //-2
console.log(ensureEven(-0.5)); //0
