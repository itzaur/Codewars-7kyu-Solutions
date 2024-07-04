/*
DESCRIPTION:
Write a function that returns only the decimal part of the given number.

You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

Examples
getDecimal(2.4)  === 0.4
getDecimal(-0.2) === 0.2
*/
function getDecimal(n) {
  const result = `${n}`.split('.');

  return +('0' + (result.length > 1 ? `.${result[1]}` : ''));
  //////////////////////////!SECTION
  //   return Math.abs(n % 1)
}

console.log(getDecimal(10)); //0
console.log(getDecimal(-1.2)); //0.2
console.log(getDecimal(4.5)); //0.5
