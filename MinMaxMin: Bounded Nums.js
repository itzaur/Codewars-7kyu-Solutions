/*
Description:
Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.

For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, the largest number is 24, and the smallest number between the array bounds is -22. You may assume the input is well-formed.

You solution should return an array [smallest, minimumAbsent, largest]

The smallest integer should be the integer from the array with the lowest value.

The largest integer should be the integer from the array with the highest value.

The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.

minMinMax([-1, 4, 5, -23, 24]); //[-23, -22, 24]
minMinMax([1, 3, -3, -2, 8, -1]); //[-3, 0, 8]
minMinMax([2, -4, 8, -5, 9, 7]); //[-5, -3,9]
*/
function minMinMax(array) {
  const result = array.sort((a, b) => a - b);
  const min = result[0];
  const max = result.at(-1);
  const arr = [];

  for (let i = 1; i < result.length - 1; i++) {
    if (!result.includes(result[i] + 1)) {
      arr.push(result[i] + 1);
    }
  }

  return [min, result.includes(min + 1) ? arr[0] : min + 1, max];
  //////////////////////////////////////////!SECTION
  //   b = Math.min(...array);

  //   while (array.includes(b) == true) {
  //     b += 1;
  //   }

  //   return [Math.min(...array), b, Math.max(...array)];
  //////////////////////////////////////////!SECTION
  //   const min = Math.min(...array);
  //   const max = Math.max(...array);
  //   const mid = (x) => (array.indexOf(x) >= 0 ? mid(x + 1) : x);

  //   return [min, mid(min + 1), max];
}

console.log(minMinMax([-1, 4, 5, -23, 24])); //[-23, -22, 24]
console.log(minMinMax([1, 3, -3, -2, 8, -1])); //[-3, 0, 8]
console.log(minMinMax([2, -4, 8, -5, 9, 7])); //[-5, -3, 9]
