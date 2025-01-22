/*
Description:
You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.
*/
function arraySum(arr) {
  return arr
    .flat(Infinity)
    .filter(Number)
    .reduce((acc, el) => acc + el, 0);
  ////////////////////////////////////////////!SECTION
  //   return arr.reduce(
  //     (n, x) => n + (Array.isArray(x) ? arraySum(x) : isNaN(x) ? 0 : x),
  //     0
  //   );
}

console.log(arraySum([1, 2])); //3
console.log(arraySum([1, 2, 3])); //6
console.log(arraySum([1, 2, [1, 2]])); //6
