/*
Description:

Imagine there's a big cube consisting of n3 n^3 n3 small cubes. Calculate, how many small cubes are not visible from outside.

For example, if we have a cube which has 4 cubes in a row, then the function should return 8, because there are 8 cubes inside our cube (2 cubes in each dimension)

For a visual representation: --> https://imgur.com/a/AN8A5DJ
*/
function notVisibleCubes(n) {
  return n < 3 ? 0 : (n - 2) ** 3;
  //////////////////////////////!SECTION
  //   return Math.max(0, (n - 2) ** 3);
}

console.log(notVisibleCubes(0)); //0
console.log(notVisibleCubes(1)); //0
console.log(notVisibleCubes(2)); //0
console.log(notVisibleCubes(3)); //1
console.log(notVisibleCubes(5)); //27
