/*
Description:
Task
Some people are standing in a row in a park. There are trees between them which cannot be moved.

Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

Example
For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be

[-1, 150, 160, 170, -1, -1, 180, 190].

Input/Output
[input] integer array a

If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

Constraints:

5 ≤ a.length ≤ 30,

-1 ≤ a[i] ≤ 200.

[output] an integer array

Sorted array a with all the trees untouched.
*/
function sortByHeight(a) {
  let index = 0;
  const positiveNumbers = a.filter((el) => el > 0).sort((a, b) => a - b);

  return a.map((el) => (el < 0 ? el : positiveNumbers[index++]));
  ////////////////////////////////////////!SECTION
  //   const sorted = a.filter((v) => v !== -1).sort((a, b) => b - a);
  //   return a.map((v) => (v == -1 ? -1 : sorted.pop()));
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])); //[-1, 150, 160, 170, -1, -1, 180, 190]
console.log(sortByHeight([-1, -1, -1, -1, -1])); //[-1, -1, -1, -1, -1]
console.log(sortByHeight([4, 2, 9, 11, 2, 16])); //[2, 2, 4, 9, 11, 16]
