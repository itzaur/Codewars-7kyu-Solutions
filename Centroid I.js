/*
Description:

Write a function to calculate the centroid of 3D coordinates.

Return the results as a list of 3 floats.
*/
function centroid(c) {
  return c
    .reduce((acc, el) => acc.map((num, i) => num + el[i]), [0, 0, 0])
    .map((el) => el / c.length);
}
////////////////////////////////////////!SECTION
// const centroid = (c) =>
//   [...Array(3)].map(
//     (_, idx) =>
//       +(c.reduce((acc, cur) => acc + cur[idx], 0) / c.length).toFixed(2),
//   );

console.log(
  centroid([
    [1, 0, 5],
    [0, 1, 5],
    [2, 2, 5],
  ]),
); //[1, 1, 5]
console.log(
  centroid([
    [7, 0, 5],
    [3, 1, 5],
    [2, 1, 5],
  ]),
); //[4, 0.67, 5]
