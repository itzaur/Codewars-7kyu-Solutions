/*
DESCRIPTION:
Create a function that takes a number and finds the factors of it, listing them in descending order in an array.

If the parameter is not an integer or less than 1, return -1. In C# return an empty array.

For Example: factors(54) should return [54, 27, 18, 9, 6, 3, 2, 1]
*/
function factors(x) {
  return Number.isInteger(x) && x > 0
    ? Array.from({ length: x }, (_, i) => i + 1)
        .filter((el) => !(x % el))
        .sort((a, b) => b - a)
    : -1;
}

console.log(factors(54)); //[54, 27, 18, 9, 6, 3, 2, 1]
console.log(factors(9)); //[9, 3, 1]
console.log(factors(-1)); //-1
