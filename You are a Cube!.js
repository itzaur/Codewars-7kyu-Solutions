/*
Description:

In geometry, a cube is a three-dimensional solid object bounded by six square faces, facets or sides, with three meeting at each vertex.The cube is the only regular hexahedron and is one of the five Platonic solids. It has 12 edges, 6 faces and 8 vertices.The cube is also a square parallelepiped, an equilateral cuboid and a right rhombohedron. It is a regular square prism in three orientations, and a trigonal trapezohedron in four orientations.

You are given a task of finding if the provided positive integer is a perfect cube -- a number that is the cube of an integer!
*/
const youAreACube = (value) => value > 0 && Math.cbrt(value) % 1 === 0;
//////////////////////////////!SECTION
// const youAreACube = (value) => !(Math.cbrt(value) % 1);
//////////////////////////////!SECTION
// function youAreACube(value) {
//   return Number.isInteger(Math.cbrt(value));
// }

console.log(youAreACube(27)); //true
console.log(youAreACube(1)); //true
console.log(youAreACube(2)); //false
console.log(youAreACube(99)); //false
console.log(youAreACube(64)); //true
