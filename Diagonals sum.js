/*
Description:

Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

    Matrix = array of n length whose elements are n length arrays of integers.

3x3 example:

[
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
]

returns --> 30 // 1 + 5 + 9 + 3 + 5 + 7
*/
function sum(matrix) {
  return matrix.reduce((acc, el, i) => {
    return acc + (el[i] || 0) + (el[matrix.length - 1 - i] || 0);
  }, 0);
  //////////////////////////////////////////////!SECTION
  //   return matrix.reduce(
  //     (sum, line, i) => sum + line[i] + line[matrix.length - i - 1],
  //     0
  //   );
}

console.log(sum([])); //0
console.log(sum([[4]])); //8
console.log(
  sum([
    [1, 2],
    [3, 4],
  ])
); //10
