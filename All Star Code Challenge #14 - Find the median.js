/*
DESCRIPTION:
Your non-profit company has assigned you the task of calculating some simple statistics on donations. You have an array of integers, representing various amounts of donations your company has been given. In particular, you're interested in the median value for donations.

The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.

Write a function that takes an array of integers as an argument and returns the median of those integers.

Notes:

The sorting step is vital.
Input arrays are non-empty.
Examples
Median of [33,99,100,30,29,50] is 41.5.
Median of [3,2,1] is 2.
*/
function median(array) {
  const result = array.sort((a, b) => a - b);

  return array.length % 2 === 0
    ? reducer(result.slice(result.length / 2 - 1, result.length / 2 + 1)) / 2
    : result.slice(result.length / 2)[0];
  ////////////////////////!SECTION
  //   const isEvenLength = array.sort((a, b) => a - b).length % 2;
  //   const middle = Math.floor(array.length / 2);

  //   return isEvenLength ? array[middle] : (array[middle - 1] + array[middle]) / 2;
}

function reducer(items) {
  return items.reduce((acc, el) => acc + el, 0);
}

console.log(median([3, 2, 1])); //2
console.log(median([33, 99, 100, 30, 29, 50])); //41.5
console.log(median([1234, 345, 78])); //345
