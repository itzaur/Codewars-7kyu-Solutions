/*
Description:
Task

Write a method remainder which takes two integer arguments, dividend and divisor, and returns the remainder when dividend is divided by divisor. Do NOT use the modulus operator (%) to calculate the remainder!
Assumption

Dividend will always be greater than or equal to divisor.
Notes

Make sure that the implemented remainder function works exactly the same as the Modulus operator (%).
*/
const remainder = (D, d) => D - Math.floor(D / d) * d;
//////////////////////////////////////!SECTION
// const remainder = (D, d) => D - ((D / d) | 0) * d;
//////////////////////////////////////!SECTION
// const remainder = (a, b) => a < b ? a : remainder(a - b, b)

console.log(remainder(3, 2)); //1
console.log(remainder(19, 2)); //1
console.log(remainder(10, 2)); //0
console.log(remainder(34, 7)); //6
console.log(remainder(27, 5)); //2
