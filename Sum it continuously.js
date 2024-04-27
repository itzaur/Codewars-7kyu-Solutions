/*
DESCRIPTION:
Make a function "add" that will be able to sum elements of list continuously and return a new list of sums.

For example:

add [1,2,3,4,5] == [1, 3, 6, 10, 15], because it's calculated like
this : [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4, 1 + 2 + 3 + 4 + 5]
If you want to learn more see https://en.wikipedia.org/wiki/Prefix_sum
*/
function add(arr) {
  return arr.map((_, i) => reducer(arr.slice(0, i + 1)));
  ////////////////////!SECTION
  //   return arr.reduce((acc, el) => {
  //     return [...acc, ~~acc.at(-1) + el];
  //   }, []);
  ////////////////////!SECTION
  //   let count = 0;
  //   return arr.map((el) => (count += el));
  ////////////////////!SECTION
  //   return arr.reduce((acc, el) => {
  //     acc[acc.length] = acc.at(-1) ? acc.at(-1) + el : el;
  //     return acc;
  //   }, []);
}

function reducer(el) {
  return [...el].reduce((acc, el) => acc + el, 0);
}

console.log(add([0])); //[0]
console.log(add([-33])); //[-33]
console.log(add([32, -9, 2, 0])); //[32, 23, 25, 25]
console.log(add([1, 2, 3, 4, 5])); //[1, 3, 6, 10, 15]
console.log(add([2, 4, 6, 8, 10])); //[2, 6, 12, 20, 30]
console.log(add([1, 8, 27, 64, 125])); //[1, 9, 36, 100, 225]
console.log(add([9, 18, 27, 36, 45, 54])); //[9, 27, 54, 90, 135, 189]
console.log(add([6, 12, 18, 24, 30, 36, 42])); //[6, 18, 36, 60, 90, 126, 168]
console.log(add([8, 16, 24, 32, 40, 48, 56, 64])); //[8, 24, 48, 80, 120, 168, 224, 288]
