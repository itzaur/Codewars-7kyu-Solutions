/*
DESCRIPTION:
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/
function sumDigits(number) {
  return +(Math.abs(number) + '').split``.reduce((acc, el) => +acc + +el);
}

console.log(sumDigits(10)); //1
console.log(sumDigits(99)); //18
console.log(sumDigits(-32)); //5
console.log(sumDigits(0)); //0
