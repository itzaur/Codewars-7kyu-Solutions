/*
Description:

Build a function that will take the length of each side of a triangle and return if it's either an Equilateral, an Isosceles, a Scalene or an invalid triangle.

It has to return a string with the type of triangle.
For example:

typeOfTriangle(2,2,1) --> "Isosceles"
*/
var typeOfTriangle = function (sideA, sideB, sideC) {
  switch (true) {
    case typeof sideA !== 'number' ||
      typeof sideB !== 'number' ||
      typeof sideC !== 'number':
      return 'Not a valid triangle';
    case sideA + sideB <= sideC ||
      sideA + sideC <= sideB ||
      sideB + sideC <= sideA:
      return 'Not a valid triangle';
    case sideA === sideB && sideB === sideC:
      return 'Equilateral';
    case sideA === sideB || sideA === sideC || sideB === sideC:
      return 'Isosceles';
    default:
      return 'Scalene';
  }
};
////////////////////////////////////////!SECTION
// const typeOfTriangle = (...sides) => {
//   let [a, b, c] = sides.sort((a, b) => a - b);
//   let s = +(a === b) + +(b === c);

//   return sides.every((s) => s === +s) && a + b > c
//     ? ['Scalene', 'Isosceles', 'Equilateral'][s]
//     : 'Not a valid triangle';
// };

console.log(typeOfTriangle(1, 1, 1)); //"Equilateral"
console.log(typeOfTriangle(3, 2, 4)); //"Scalene"
console.log(typeOfTriangle(2, 2, 1)); //"Isosceles"
console.log(typeOfTriangle('.', 5, 82)); //"Not a valid triangle"
console.log(typeOfTriangle(2, 2, 8)); //"Not a valid triangle"
