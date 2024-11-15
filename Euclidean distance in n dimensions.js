/*
Description:
Implement a function to calculate the distance between two points in n-dimensional space. The two points will be passed to your function as arrays of the same length.

Round your answers to two decimal places.
*/
function euclideanDistance(point1, point2) {
  const result = point1.map((el, i) => (point2[i] - el) ** 2);

  return (
    Math.round(Math.sqrt(result.reduce((acc, el) => acc + el, 0)) * 100) / 100
  );
  ////////////////////////////////////////!SECTION
  //   return +Math.hypot(...point1.map((x, i) => x - point2[i])).toFixed(2);
  ////////////////////////////////////////!SECTION
  //   return (
  //     Math.round(
  //       Math.sqrt(a.reduce((s, n, i) => s + Math.pow(n - b[i], 2), 0)) * 100
  //     ) / 100
  //   );
  ////////////////////////////////////////!SECTION
  //   return (
  //     Math.round(
  //       Math.hypot(...point1.map((val, idx) => val - point2[idx])) * 1e2
  //     ) / 1e2
  //   );
}

let p1 = [-1],
  p2 = [2];
console.log(euclideanDistance(p1, p2)); //3
[p1, p2] = [
  [-1, 2],
  [2, 4],
];
console.log(euclideanDistance(p1, p2)); //3.61
[p1, p2] = [
  [-1, 2, 5],
  [2, 4, 9],
];
console.log(euclideanDistance(p1, p2)); //5.39
