/*
Description:
The Collatz sequence is a set of numbers formed by taking an arbitrary positive integer and applying an operation to it: if the number is even, divide it by two, and if it's odd, multiply by three and add one. Repeat this process, taking the result as the input for the next step, until the resulting number is one.

The following function is not working. It's purpose is to return the length of any Collatz sequence. Can you fix it?
*/
function collatz(n, count = 0) {
  if (n <= 1) return count + 1;
  const res = n % 2 === 0 ? n / 2 : n * 3 + 1;

  return res > 1 ? collatz(res, count + 1) : count + 2;
  ////////////////////////////////////////////!SECTION
  //   if (n <= 1) {
  //     return 1;
  //   }

  //   return 1 + collatz(n % 2 === 0 ? n / 2 : n * 3 + 1, count + 1);
}
////////////////////////////////////////////!SECTION
// function collatz(n, count = 1) {
//   return n <= 1 ? count : collatz(n % 2 === 0 ? n / 2 : n * 3 + 1, count + 1);
// }

console.log(collatz(2)); //2
console.log(collatz(4)); //3
console.log(collatz(6)); //9
console.log(collatz(1)); //1
