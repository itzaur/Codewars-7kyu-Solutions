/*
Description:
Each floating-point number should be formatted that only the first two decimal places are returned. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

Don't round the numbers! Just cut them after two decimal places!

Right examples:
32.8493 is 32.84
14.3286 is 14.32

Incorrect examples (e.g. if you round the numbers):
32.8493 is 32.85
14.3286 is 14.33
*/
function twoDecimalPlaces(number) {
  return +`${number}`.split`.`.map((el, i) => (!(i % 2) ? el : el.slice(0, 2)))
    .join`.`;
  //////////////////////////////!SECTION
  //   return Math.trunc(number * 100) / 100;
  //////////////////////////////!SECTION
  //   return +number.toFixed(4).slice(0, -2);
  //////////////////////////////!SECTION
  //   return parseInt(number * 100) / 100;
  //////////////////////////////!SECTION
  //   return ~~(number * 100) / 100;
}

console.log(twoDecimalPlaces(10.1289767789)); //10.12
console.log(twoDecimalPlaces(-7488.83485834983)); //-7488.83
console.log(twoDecimalPlaces(4.653725356)); //4.65
