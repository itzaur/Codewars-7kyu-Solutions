/*
Description:
In this Kata, you will be given a multi-dimensional array containing 2 or more sub-arrays of integers. Your task is to find the maximum product that can be formed by taking any one element from each sub-array.

Examples:
solve( [[1, 2],[3, 4]] ) = 8. The max product is given by 2 * 4
solve( [[10,-15],[-1,-3]] ) = 45, given by (-15) * (-3)
solve( [[1,-1],[2,3],[10,-100]] ) = 300, given by (-1) * 3 * (-100)
More examples in test cases. Good luck!
*/
function solve(arr, acc = 1) {
  return Math.max(
    ...arr[0].map((el) =>
      arr.length > 1 ? solve(arr.slice(1), acc * el) : acc * el
    )
  );
  //////////////////////////////////////////////!SECTION
  //   return Math.max(
  //     ...arr.reduce((pre, val) =>
  //       [].concat(...pre.map((v) => val.map((val) => val * v)))
  //     )
  //   );
}

console.log(
  solve([
    [1, 2],
    [3, 4],
  ])
); //8
console.log(
  solve([
    [10, -15],
    [-1, -3],
  ])
); //45
console.log(
  solve([
    [-1, 2, -3, 4],
    [1, -2, 3, -4],
  ])
); //12
console.log(
  solve([
    [-11, -6],
    [-20, -20],
    [18, -4],
    [-20, 1],
  ])
); //17600
console.log(
  solve([
    [14, 2],
    [0, -16],
    [-12, -16],
  ])
); //3584
console.log(
  solve([
    [-3, -4],
    [1, 2, -3],
  ])
); //12
