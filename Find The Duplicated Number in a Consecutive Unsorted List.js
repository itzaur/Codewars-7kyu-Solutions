/*
DESCRIPTION:
You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

The array is unsorted.

An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

You should return the duplicate value as a single integer.
*/
function findDup(arr) {
  const occurrences = arr.reduce((acc, el) => {
    return { ...acc, [el]: (acc[el] || 0) + 1 };
  }, {});

  return arr.filter((el) => occurrences[el] > 1)[0];
  //////////////////////!SECTION
  //   return arr.reduce((a, b, i) => a ^ b ^ i, 0);
  //////////////////////!SECTION
  //   return arr.find((x) => arr.indexOf(x) != arr.lastIndexOf(x));
}

console.log(findDup([1, 2, 2, 3])); //2
console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6])); //5
console.log(findDup([5, 4, 3, 2, 1, 1])); //1
console.log(findDup([5, 4, 5, 3, 1, 2])); //5
