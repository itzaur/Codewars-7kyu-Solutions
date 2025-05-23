/*
Description:
Task

You're given a two-dimensional array of integers matrix. Your task is to determine the smallest non-negative integer that is not present in this array.
Input/Output

    [input] 2D integer array matrix

A non-empty rectangular matrix.

1 ≤ matrix.length ≤ 10

1 ≤ matrix[0].length ≤ 10

    [output] an integer

The smallest non-negative integer that is not present in matrix.
Example

For

  matrix = [  [0, 2],  [5, 1]] the result should be 3

0,1,2,(3)...5
*/
function smallestInteger(matrix) {
  const set = [...new Set(matrix.flat().sort((a, b) => a - b))].filter(
    (el, i) => el >= 0
  );
  const maxNumber = Math.max(...set);
  const array = Array.from({ length: maxNumber + 2 }, (_, i) => i);

  return (
    //Set IS AWESOME! new Set(set).symmetricDifference(new Set(array)).values().next().value || 0
    array.find((el) => !set.includes(el)) || 0
  );
  //////////////////////////////////////////////////!SECTION
  //   let count = 0;

  //   while (matrix.flat().includes(count)) count++;

  //   return count;
}
//////////////////////////////////////////////////!SECTION
// let smallestInteger = (f = (matrix, min = 0) =>
//   `${matrix}`.split`,`.includes(`${min}`) ? f(matrix, ++min) : min);

console.log(
  smallestInteger([
    [0, 2],
    [5, 1],
  ])
); //3

console.log(
  smallestInteger([
    [4, 5, 3, 21, 3, 8],
    [2, 2, 6, 5, 10, 9],
    [7, 5, 6, 8, 2, 6],
    [1, 4, 7, 8, 9, 0],
    [1, 3, 6, 5, 5, 1],
    [2, 7, 3, 4, 4, 3],
  ])
); //11

console.log(
  smallestInteger([
    [4, 5, 3, -4, 3, 8],
    [2, 0, 6, 5, 4, 9],
    [7, 5, 6, 8, 2, 6],
    [1, 4, 7, 8, 9, 11],
    [1, 3, 10, 5, 5, 1],
    [12, 7, 3, 4, 4, 3],
  ])
); //13

console.log(
  smallestInteger([
    [1, 2],
    [3, 4],
  ])
); //0

console.log(
  smallestInteger([
    [0, 1],
    [2, 3],
  ])
); //4

console.log(
  smallestInteger([
    [4, 5, 13, 0, 3],
    [2, 6, 5, 10, 9],
    [7, 5, -6, 8, 6],
    [1, 4, 7, 8, 9],
    [2, 3, 4, 44, 3],
  ])
); //11

console.log(
  smallestInteger([
    [-1, 100, -1, 100],
    [100, -1, 100, -1],
    [-1, 100, -1, 100],
    [100, -1, 100, -1],
  ])
); //0

console.log(
  smallestInteger([
    [-1, -1],
    [-1, -1],
  ])
); //0
