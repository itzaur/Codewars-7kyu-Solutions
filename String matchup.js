/*
Description:

Given two arrays of strings, return the number of times each string of the second array appears in the first array.
Example

array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
array2 = ['abc', 'cde', 'uap']

How many times do the elements in array2 appear in array1?

    'abc' appears twice in the first array (2)
    'cde' appears only once (1)
    'uap' does not appear in the first array (0)

Therefore, solve(array1, array2) = [2, 1, 0]
*/
function solve(a, b) {
  const occurrences = a.reduce((acc, el) => {
    return { ...acc, [el]: (acc[el] || 0) + 1 };
  }, {});

  return b.map((el) => occurrences[el] || 0);
  ////////////////////////////////////////!SECTION
  //   return b.map((x) => a.filter((n) => n === x).length);
  ////////////////////////////////////////!SECTION
  //   return b.map((x) => a.reduce((n, y) => (x === y ? n + 1 : n), 0));
}

console.log(solve(['abc', 'abc', 'xyz', 'abcd', 'cde'], ['abc', 'cde', 'uap'])); //[2, 1, 0]
console.log(solve(['abc', 'xyz', 'abc', 'xyz', 'cde'], ['abc', 'cde', 'xyz'])); //[2, 1, 2]
console.log(
  solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox'])
); //[2, 0, 1]
