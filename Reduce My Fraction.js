/*
Description:

Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]

All numerators and denominators will be positive integers.

Note: This is an introductory Kata for a series... coming soon!
*/
function reduce(fraction) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const [numerator, denominator] = fraction;

  return fraction.map((el) => el / gcd(numerator, denominator));
}

console.log(reduce([45, 120])); // [3, 8]
