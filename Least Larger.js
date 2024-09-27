/*
Description:
Task
Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

Notes
Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.

Example
leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
*/
function leastLarger(a, i) {
  const sortedArray = a.slice().sort((a, b) => a - b);
  const nextNumber = sortedArray.find((el) => el > a[i]);

  return a.indexOf(nextNumber) ?? -1;
  ////////////////////////////////////!SECTION
  //   return a.indexOf(Math.min(...a.filter((n) => n > a[i])));
}

console.log(leastLarger([4, 1, 3, 5, 6], 0)); //3
console.log(leastLarger([4, 1, 3, 5, 6], 4)); //-1
console.log(leastLarger([1, 3, 5, 2, 4], 0)); //3
console.log(leastLarger([-8, -1, 2, 8, -6, -7, 4], 1)); //2
