/*
Description:
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/
function findLongest(array) {
  return array.sort((a, b) => `${b}`.length - `${a}`.length)[0];
  //////////////////////////////////////////!SECTION
  //   return array.reduce((pre, val) =>
  //     `${val}`.length > `${pre}`.length ? val : pre
  //   );
}

console.log(findLongest([1, 10, 100])); //100
console.log(findLongest([9000, 8, 800])); //9000
console.log(findLongest([8, 900, 500])); //900
