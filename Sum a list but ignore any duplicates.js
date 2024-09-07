/*
Description:
Please write a function that sums a list, but ignores any duplicated items in the list.

For instance, for the list [3, 4, 3, 6] the function should return 10,
and for the list [1, 10, 3, 10, 10] the function should return 4.
*/
function sumNoDuplicates(numList) {
  const occurrences = numList.reduce((acc, el) => {
    return { ...acc, [el]: (acc[el] || 0) + 1 };
  }, {});

  return numList
    .filter((el) => occurrences[el] < 2)
    .reduce((acc, el) => acc + el, 0);
  //////////////////////////////!SECTION
  //   return numList.reduce(
  //     (a, b) => (numList.indexOf(b) === numList.lastIndexOf(b) ? a + b : a),
  //     0
  //   );
  //////////////////////////////!SECTION
  //   return numList.reduce(
  //     (sum, num) =>
  //       sum + num * (numList.indexOf(num) === numList.lastIndexOf(num)),
  //     0
  //   );
}

console.log(sumNoDuplicates([1, 4, 3, 8, 9, 4, 7, 5, 10, 10, 7, 6, 9, 3])); //20
console.log(sumNoDuplicates([2, 0, 4, 2, 2, 3, 6, 7, 3, 8, 10, 6, 8])); //21
console.log(sumNoDuplicates([7, 9, 5, 6, 1, 0, 5, 0, 4, 7, 1, 2, 8, 9, 6, 1])); //14
