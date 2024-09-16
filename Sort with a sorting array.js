/*
Description:
Sort an array according to the indices in another array.
It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

    sort(['x', 'y', 'z'], [1, 2, 0]) => ['z', 'x', 'y']
    sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']
*/
function sort(initialArray, sortingArray) {
  const obj = { ...initialArray };
  const res = Object.entries(obj).map(([_, value], i) => [
    sortingArray[i],
    value,
  ]);

  return res.sort((a, b) => a[0] - b[0]).map(([_, value]) => value);
  //////////////////////////////////////////!SECTION
  //   return initialArray.map((_, i, arr) => arr[sortingArray.indexOf(i)]);
  //////////////////////////////////////////!SECTION
  //   return sortingArray.reduce((acc, el, i) => {
  //     return (acc[el] = initialArray[i]), acc;
  //   }, []);
}

console.log(sort(['x', 'y', 'z'], [1, 2, 0])); //["z", "x", "y"]
console.log(sort(['x', 'y', 'z'], [0, 1, 2])); //['x', 'y', 'z']
console.log(sort([1, 2, 3, 4, 5], [0, 1, 2, 3, 4])); //[1, 2, 3, 4, 5]
console.log(sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3])); //[1, 3, 2, 5, 4]
