/*
Description:

In mathematics, an nth root of a number x, where n is usually assumed to be a positive integer, is a number r which, when raised to the power n, yields x:
rn=xr^n=xrn=x

Given number n, such that n > 1, find if its 2nd root, 4th root and 8th root are all integers (fractional part is 0). Return true if yes, false if no.
Examples

// 2nd root of 256 is 16
// 4th root of 256 is 4
// 8th root of 256 is 2
256 --> true

// 2nd root of 16 is 4
// 4th root of 16 is 2
// 8th root of 16 is 1.4142135... --> not an integer
16 --> false
*/
function perfectRoots(n) {
  return (
    Number.isInteger(n ** (1 / 2)) &&
    Number.isInteger(n ** (1 / 4)) &&
    Number.isInteger(n ** (1 / 8))
  );
  ////////////////////////////////!SECTION
  //   return [2, 4, 8].every((r) => Math.pow(n, 1 / r) % 1 == 0);
  ////////////////////////////////!SECTION
  //   return Math.pow(n, 1 / 8) % 1 === 0 ? true : false;
  ////////////////////////////////!SECTION
  //   return Math.pow(n, 1 / 8) % 1 === 0;
  ////////////////////////////////!SECTION
  //   return ![2, 4, 8].some((pow) => n ** (1 / pow) % 1);
}

console.log(perfectRoots(256)); //true
console.log(perfectRoots(1000)); //false
console.log(perfectRoots(6561)); //true
