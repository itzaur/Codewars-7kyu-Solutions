/*
Description:
You have two arrays of single letters, array1 and array2, where the elements are without duplicates(but the element of the first array can be equal to the element of the second array).

Return a new array containing the first n elements from the two arrays in alphabetical order.

For example:

thatUnitesUs(['a', 'z', 'c'], ['b', 'f', 'z'], 3) => ['a', 'b', 'c']
thatUnitesUs(['z', 'g', 'f'], ['g', 'f', 'c'], 3) => ['c', 'f', 'g']
thatUnitesUs(['f', 'g', 'z'], ['c', 'f', 'g'], 2) => ['c', 'f']
P.S. Array's length >= n
*/
function thatUnitesUs(array1, array2, n) {
  return [...new Set(array1.concat(array2))].sort().slice(0, n);
  //////////////////////////////////////!SECTION
  //   return array1
  //     .concat(array2)
  //     .sort()
  //     .filter((elem, i, array) => array.indexOf(elem) === i)
  //     .slice(0, n);
}

console.log(thatUnitesUs(['a', 'c', 'z'], ['b', 'f', 'z'], 3)); //['a', 'b', 'c']
console.log(thatUnitesUs(['f', 'g', 'z'], ['c', 'f', 'g'], 3)); //['c', 'f', 'g']
console.log(thatUnitesUs(['f', 'g', 'z'], ['c', 'f', 'g'], 2)); //['c', 'f']
