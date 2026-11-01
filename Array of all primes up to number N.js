/*
Description:

Code a function which will return an array with all prime numbers smaller than or equal to an arbitrary parameter "n".

Assume that all parameters will be numbers.

Remember that in some test cases with a big enough "n", performance might be (more) important.
*/
var primeArray = function (n) {
  var result = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) result.push(i);
  }

  return result.length ? result : [];
};

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }

  return number > 1;
}
//////////////////////////////////!SECTION
// function primeArray(n) {
//   const primeArray = [];
//   for (let p = 2; p <= n; p++) {
//     if (primeArray.every((d) => p % d !== 0)) primeArray.push(p);
//   }
//   return primeArray;
// }

console.log(primeArray(1)); //[]
console.log(primeArray(2)); //[2]
console.log(primeArray(4)); //[2,3]
