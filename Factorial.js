/*
DESCRIPTION:
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

More details about factorial can be found here.
*/
function factorial(n) {
  if (n <= 0 || n > 12) {
    throw RangeError;
  }

  return n === 0
    ? 1
    : Array.from({ length: n }, (_, i) => i + 1).reduce((acc, el) => acc * el);
  ////////////////////////!SECTION
  //   try {
  //     if (n < 0) throw new RangeError();
  //   } catch (e) {
  //     console.log('Out of range!');
  //   }
  //   if (n === 0) return 1;
  //   return n * factorial(n - 1);
}

console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(2)); //2
console.log(factorial(3)); //6
