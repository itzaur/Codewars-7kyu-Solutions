/*
Description:
There exist two zeroes: +0 (or just 0) and -0.

Write a function that returns true if the input number is -0 and false otherwise (True and False for Python).

In JavaScript / TypeScript / Coffeescript the input will be a number.

In Python / Java / C / NASM / Haskell / the input will be a float.
*/
function isNegativeZero(n) {
  if (n !== 0) return false;

  return n.toLocaleString()[0] == '-';
  ////////////////////////////////////!SECTION
  //   return Object.is(-0, n);
  ////////////////////////////////////!SECTION
  // return 1 / Math.sign(n) === -Infinity;
  ////////////////////////////////////!SECTION
  // return Math.atan2(n, n) === -Math.PI;
}

console.log(isNegativeZero(-0)); //true
console.log(isNegativeZero(-Infinity)); //false
console.log(isNegativeZero(-5)); //false
console.log(isNegativeZero(-4)); //false
console.log(isNegativeZero(-3)); //false
console.log(isNegativeZero(-2)); //false
console.log(isNegativeZero(-1)); //false
console.log(isNegativeZero(-Number.MIN_VALUE)); //false
console.log(isNegativeZero(0)); //false
console.log(isNegativeZero(Number.MIN_VALUE)); //false
console.log(isNegativeZero(1)); //false
console.log(isNegativeZero(2)); //false
console.log(isNegativeZero(3)); //false
console.log(isNegativeZero(4)); //false
console.log(isNegativeZero(5)); //false
console.log(isNegativeZero(Infinity)); //false
