/*
DESCRIPTION:
Write a function that sums squares of numbers in list that may contain more lists
Example:

var l = [1,2,3]
SumSquares(l) == 14

var l = [[1,2],3]
SumSquares(l) == 14

var l = [[[[[[[[[1]]]]]]]]]
SumSquares(l) == 1

var l = [10,[[10],10],[10]]
SumSquares(l) == 400
Note: your solution must NOT modify the original list

Another Kata involving nested lists here (it's still in beta - more honor points for completing :D): https://www.codewars.com/kata/5786f020e55533ebb7000153
*/
function SumSquares(list) {
  return list.flat(Infinity).reduce((acc, el) => acc + el ** 2, 0);
  ////////////////////////!SECTION
  //   return list.reduce((acc, el) => {
  //     return Array.isArray(el) ? acc + SumSquares(el) : acc + el ** 2;
  //   }, 0);
  ////////////////////////!SECTION
  //   return JSON.stringify(list)
  //     .match(/\d+/g)
  //     .reduce((acc, el) => acc + el ** 2, 0);
}

console.log(SumSquares([1, 2, 3])); //14
console.log(SumSquares([[1, 2], 3])); //14
console.log(SumSquares([[[[[[[[[1]]]]]]]]])); //1
console.log(SumSquares([10, [[10], 10], [10]])); //400
console.log(SumSquares([1, [[3], 10, 5, [2, [3], [4], [5, [6]]]], [10]])); //325
