/*
Description:

Given a non-empty array of non-empty integer arrays, multiply the contents of each nested array and return the smallest total.
Example

input = [
  [1, 5],
  [2],
  [-1, -3]
]

result = 2
*/
function smallestProduct(arr) {
  return arr.reduce((acc, el) => {
    const result = el.reduce((acc, el) => acc * el, 1);

    return [...acc, result].sort((a, b) => a - b);
  }, [])[0];
}
////////////////////////////////////////////!SECTION
// const smallestProduct = (a) =>
//   Math.min(...a.map((e) => e.reduce((p, c) => p * c)));

console.log(
  smallestProduct([
    [3, 2],
    [1, 2, 1],
    [7, 8],
  ]),
); //2
console.log(smallestProduct([[10], [3, 0], [-1, -6, 2]])); //0
