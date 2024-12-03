/*
Description:
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/
function isSortedAndHow(array) {
  //use modern toSorted()
  //   switch (true) {
  //     case array.toSorted((a, b) => a - b).toString() == array:
  //       return 'yes, ascending';
  //     case array.toSorted((a, b) => b - a).toString() == array:
  //       return 'yes, descending';
  //     default:
  //       return 'no';
  //   }
  switch (true) {
    case array
      .slice()
      .sort((a, b) => a - b)
      .toString() == array:
      return 'yes, ascending';
    case array
      .slice()
      .sort((a, b) => b - a)
      .toString() == array:
      return 'yes, descending';
    default:
      return 'no';
  }
}
//////////////////////////////////////////////!SECTION
// const isSortedAndHow = (array) =>
//   array.slice(1).every((val, idx) => val >= array[idx])
//     ? `yes, ascending`
//     : array.slice(1).every((val, idx) => val <= array[idx])
//     ? `yes, descending`
//     : `no`;

console.log(isSortedAndHow([1, 2])); //'yes, ascending'
console.log(isSortedAndHow([15, 7, 3, -8])); //'yes, descending'
console.log(isSortedAndHow([4, 2, 30])); //'no'
