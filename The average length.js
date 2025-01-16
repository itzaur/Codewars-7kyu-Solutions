/*
Description:
Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
If the average length is not an integer, use Math.round().
The input array's length > 1
*/
function averageLength(...args) {
  for (array of args) {
    const result = Math.round(
      array.reduce((acc, el) => acc + el.length, 0) / array.length
    );

    return array.map((el) => el[0].repeat(result));
  }
}
////////////////////////////////////////!SECTION
// const averageLength = (arr) =>
//   arr.map((e) => e[0].repeat(Math.round(arr.join('').length / arr.length)));

console.log(averageLength(['u', 'y'])); //['u', 'y']
console.log(averageLength(['aa', 'bbb', 'cccc'])); //['aaa', 'bbb', 'ccc']
console.log(averageLength(['aa', 'bb', 'ddd', 'eee'])); //['aaa', 'bbb', 'ddd', 'eee']
