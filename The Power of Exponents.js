/*
Description:

This kata is based on: Exponent Method

Create a method called power that takes two integers and returns the value of the first argument raised to the power of the second.

Unlike the Exponent Method, you should also take in account negative exponents.

Your solution won't be tested against special cases leading to undefined values (0**-2 for example)

Note: The ** operator (JS: Math.pow) has been disabled.

Examples:

power(2, 3)   // 8
power(4, -2)  // 0.0625
*/
function power(base, exponent) {
  const result = Array.from(
    { length: exponent * (exponent > 0 ? 1 : -1) },
    () => base
  ).reduce((acc, val) => acc * val, 1);

  return exponent >= 0 ? result : 1 / result;
}
////////////////////////////////////!SECTION
// const power = (b, e) =>
//   e > 1 ? b * power(b, --e) : e < 1 ? (1 / b) * power(b, ++e) : b;

console.log(power(2, 3)); //8
console.log(power(4, -2)); //0.0625
