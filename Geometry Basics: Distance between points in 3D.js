/*
Description:

This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y, and z attributes. For Haskell there are Point data types described with record syntax with fields x, y, and z.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places. Tests in Haskell will not round.
*/
function distanceBetweenPoints(a, b) {
  return Math.sqrt(
    Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2) + Math.pow(a.z - b.z, 2)
  );
  //////////////////////////////////////////!SECTION
  //   return Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
}

class Point {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

console.log(distanceBetweenPoints(new Point(1, 3, 5), new Point(1, 3, 5))); //0
console.log(distanceBetweenPoints(new Point(1, 3, 6), new Point(4, 3, 2))); //5
console.log(
  distanceBetweenPoints(new Point(-10.2, 12.5, 8.4), new Point(0.3, 14.7, -2.8))
); //15.509030
