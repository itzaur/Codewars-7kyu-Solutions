/*
DESCRIPTION:
In this Kata you have to find the factors of integer down to the limit including the limiting number. There will be no negative numbers. Return the result as an array of numbers in ascending order.

If the limit is more than the integer, return an empty list

As a challenge, see if you can do it in one line
*/
const factors = (integer, limit) =>
  Array.from({ length: integer }, (_, i) => i + limit).filter(
    (el) => Number.isInteger(integer / el)
    //////////////////!SECTION
    //   !(integer % el)
  );

console.log(factors(5, 1)); //[1, 5]
console.log(factors(30, 2)); //[2, 3, 5, 6, 10, 15, 30]
console.log(factors(100, 75)); //[100]
console.log(factors(40, 5)); //[5, 8, 10, 20, 40]
console.log(factors(1, 5)); //[]
