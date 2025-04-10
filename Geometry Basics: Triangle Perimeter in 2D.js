/*
Description:

This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Triangle objects have attributes a, b, c describing their corners, each of them is a Point.

Write a function calculating perimeter of a Triangle defined this way.
*/
function trianglePerimeter(triangle) {
  return (
    Math.hypot(triangle.a.x - triangle.b.x, triangle.a.y - triangle.b.y) +
    Math.hypot(triangle.b.x - triangle.c.x, triangle.b.y - triangle.c.y) +
    Math.hypot(triangle.a.x - triangle.c.x, triangle.a.y - triangle.c.y)
  );
}
////////////////////////////////////////////////!SECTION
// function trianglePerimeter({ a, b, c }) {
//   return sectionLength(a, b) + sectionLength(b, c) + sectionLength(c, a);
// }

// const sectionLength = (a, b) => {
//   return Math.hypot(a.x - b.x, a.y - b.y);
// };

console.log(
  +trianglePerimeter(
    new Triangle(new Point(10, 10), new Point(40, 10), new Point(10, 50))
  ).toFixed(6)
); //120
console.log(
  +trianglePerimeter(
    new Triangle(new Point(15, -10), new Point(40, 20), new Point(20, 50))
  ).toFixed(6)
); //135.314734
