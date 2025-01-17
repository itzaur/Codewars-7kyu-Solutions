/*
Description:
You are given an array of non-negative integers, your task is to complete the series from 0 to the highest number in the array.

If the numbers in the sequence provided are not in order you should order them, but if a value repeats, then you must return a sequence with only one item, and the value of that item must be 0. like this:

inputs        outputs
[2,1]     ->  [0,1,2]
[1,4,4,6] ->  [0]
Notes: all numbers are positive integers.

This is set of example outputs based on the input sequence.

inputs        outputs
[0,1]   ->    [0,1]
[1,4,6] ->    [0,1,2,3,4,5,6]
[3,4,5] ->    [0,1,2,3,4,5]
[0,1,0] ->    [0]
*/
function completeSeries(arr) {
  const result = arr.sort((a, b) => a - b);

  return new Set(result).size === result.length
    ? Array.from({ length: Math.max(...result) + 1 }, (_, i) => i++)
    : [0];
  //////////////////////////////////////////////////!SECTION
  //   return new Set(arr).size === arr.length
  //     ? [...Array(Math.max(...arr) + 1).keys()]
  //     : [0];
}

let test1 = [0, 1],
  test2 = [1, 4, 6],
  test3 = [3, 4, 5],
  test4 = [2, 1],
  test5 = [1, 4, 4, 6],
  sol1 = [0, 1],
  sol2 = [0, 1, 2, 3, 4, 5, 6],
  sol3 = [0, 1, 2, 3, 4, 5],
  sol4 = [0, 1, 2],
  sol5 = [0];

console.log(completeSeries(test1)); //sol1
console.log(completeSeries(test2)); //sol2
console.log(completeSeries(test3)); //sol3
console.log(completeSeries(test4)); //sol4
console.log(completeSeries(test5)); //sol5
