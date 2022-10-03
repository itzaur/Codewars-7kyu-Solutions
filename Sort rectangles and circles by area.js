/*
Description:

In this kata you will be given an array of the dimensions of rectangles (array with width and length) and circles (radius - just a number). Your task is to sort the objects by their area in ascending order and return the sorted array of areas. Round the values of the areas to a maximum of two decimal places.

For example,

var array = [[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]];  // [rectangle, circle, circle, reactangle]
sortByArea(array); // should return [ 4.31, 4.75, 27.2, 37.26 ]
 */
function sortByArea(array) {
  return array
    .map((el) =>
      Array.isArray(el)
        ? +(el[0] * el[1]).toFixed(2)
        : +(el ** 2 * Math.PI).toFixed(2)
    )
    .sort((a, b) => a - b);

  //   let arr = [];
  //   for (let i = 0; i < array.length; i++) {
  //     if (typeof array[i] === "number") {
  //       arr.push(Math.round(array[i] ** 2 * Math.PI * 100) / 100);
  //     } else {
  //       arr.push(Math.round(array[i][0] * array[i][1] * 100) / 100);
  //     }
  //   }
  //   arr.sort((a, b) => a - b);
  //   return arr;
}

console.log(sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]])); //[4.31, 4.75, 27.2, 37.26]
console.log(sortByArea([[2, 5], 6])); //[10, 113.1]
console.log(sortByArea([])); //[]
