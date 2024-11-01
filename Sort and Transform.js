/*
Description:
Given an array of numbers, return a string made up of four parts:

a four character 'word', made up of the characters derived from the first two and last two numbers in the array. order should be as read left to right (first, second, second last, last),

the same as above, post sorting the array into ascending order,

the same as above, post sorting the array into descending order,

the same as above, post converting the array into ASCII characters and sorting alphabetically.

The four parts should form a single string, each part separated by a hyphen (-).

Example format of solution: "asdf-tyui-ujng-wedg"

Examples
[111, 112, 113, 114, 115, 113, 114, 110]  -->  "oprn-nors-sron-nors"
[66, 101, 55, 111, 113]                   -->  "Beoq-7Boq-qoB7-7Boq"
[99, 98, 97, 96, 81, 82, 82]              -->  "cbRR-QRbc-cbRQ-QRbc"
*/
function sortTransform(a) {
  const slicedArray = (arr) => [...arr.slice(0, 2), ...arr.slice(-2)];
  const convertResult = (res) => String.fromCharCode(...res);

  const result1 = slicedArray(a);
  const result2 = slicedArray(a.sort((a, b) => a - b));
  const result3 = slicedArray(a.sort((a, b) => b - a));
  const result4 = slicedArray(
    a
      .map((el) => String.fromCharCode(el))
      .sort()
      .map((el) => el.charCodeAt(0))
  );

  return [
    convertResult(result1),
    convertResult(result2),
    convertResult(result3),
    convertResult(result4),
  ].join`-`;
}
//////////////////////////////////////////////////////!SECTION
// function sortTransform(a) {
//   let first = transform(a);
//   let second = transform(a.sort((a, b) => a - b));
//   let third = transform(a.sort((a, b) => b - a));
//   return `${first}-${second}-${third}-${second}`;
// }

// let transform = (arr) =>
//   [...arr.slice(0, 2), ...arr.slice(arr.length - 2)]
//     .map((a) => String.fromCharCode(a))
//     .join('');

console.log(sortTransform([121, 122, 123, 124, 125, 120, 122, 132])); //'yzz-xy}-}yx-xy}'
// console.log(sortTransform([111, 112, 113, 114, 115, 113, 114, 110])); //'oprn-nors-sron-nors'
console.log(sortTransform([51, 62, 73, 84, 95, 100, 99, 126])); //'3>c~-3>d~-~d>3-3>d~'
