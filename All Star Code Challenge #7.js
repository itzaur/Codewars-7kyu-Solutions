/*
Description:

This Kata is intended as a small challenge for my students

Create a function, called compute, that accepts an integer argument, N, and returns the value of the following expression, where N is a odd positive integer given by the user

Expression : 1 +....+ 1/(N)^2

For example, when N = 9, compute() should evaluate the following: 1 + 1/(3)^2 + 1/(5)^2 + 1/(7)^2 + 1/(9)^2 == ~1.1838649533887629

Note: User input of an even number OR a number less than 3 should return 0.

compute(5); // => 1.1511111111111112
compute(9); // => 1.1838649533887629
compute(-1); // => 0
compute(8); // => 0
*/
function compute(n) {
  const result = Array.from({ length: n }, (_, i) => i + 1).filter(
    (el) => el % 2,
  );

  return !(n % 2) || n < 3
    ? 0
    : result.reduce((acc, el) => acc + 1 / el ** 2, 0);
}
//////////////////////////////////////!SECTION
// const compute = (n) => (n % 2 == 1 ? 1 / n ** 2 + compute(n - 2) : 0);

console.log(compute(5)); //1.1511111111111112
console.log(compute(9)); //1.1838649533887629
console.log(compute(-1)); //0
console.log(compute(8)); //0
