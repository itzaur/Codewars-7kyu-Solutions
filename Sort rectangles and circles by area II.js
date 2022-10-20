/*
Description:

In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
Your task is to return a new sequence of dimensions, sorted ascending by area.

For example,

const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]

This kata inspired by Sort rectangles and circles by area.
*/
function sortByArea(array) {
  if (array.length < 1) return [];
  const arr = array.map((el) =>
    Array.isArray(el) ? el[0] * el[1] : el ** 2 * Math.PI
  );
  const result = arr.sort((a, b) => a - b);
  let newIndexArray = [],
    indexResult;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      indexResult = array[i][0] * array[i][1];
    } else {
      indexResult = array[i] ** 2 * Math.PI;
    }

    newIndexArray.push(result.indexOf(indexResult));
  }

  let resultIndexArray;
  // let obj = {};
  // for (let num = 0; num < newIndexArray.length; num++) {
  //   (obj[newIndexArray[num]] ??= []).push(num);
  // }

  resultIndexArray = newIndexArray.reduce((acc, el, i) => {
    return { ...acc, [el]: i };
  }, {});

  return array.map((el, _, arr) => {
    let finalResult = [];
    for (let ind of Object.values(resultIndexArray)) {
      finalResult.push(arr[ind]);
    }
    return finalResult;
  })[0];

  // const getResult = el => Array.isArray(el) ? el[0] * el[1] : el ** 2 * Math.PI;
  // return [...array].sort((a, b) => getResult(a) - getResult(b))
  // return array.sort(
  //   (a, b) =>
  //     (typeof a === "number" ? a ** 2 * Math.PI : a[0] * a[1]) -
  //     (typeof b === "number" ? b ** 2 * Math.PI : b[0] * b[1])
  // );
  // return array
  //   .map((el) => typeof el === "number" ? el = [el ** 2 * Math.PI, el] : el = [el[0] * el[1], el])
  //   .sort((a, b) => a[0] - b[0]).map(item => item[1]);
}

console.log(sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]])); // [1.342, 3.212],1.23,[4.23, 6.43],3.444,
console.log(sortByArea([[2, 5], 6])); //[[2, 5], 6]
console.log(sortByArea([])); //[]
console.log(sortByArea([3.1, 2.91, 0.1, [4, 6.03], 9.39]));
