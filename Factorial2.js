/*
Description:
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
*/
function factorial(n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce(
    (acc, el) => acc * el,
    1
  );
  ////////////////////////////////////!SECTION
  //   return n ? factorial(n - 1) * n : 1;
}

console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(7)); //5040
console.log(factorial(18)); //6402373705728000
