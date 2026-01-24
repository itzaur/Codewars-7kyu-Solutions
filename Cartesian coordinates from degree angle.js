/*
Description:

Write a simple function that takes polar coordinates (an angle in degrees and a radius) and returns the equivalent cartesian coordinates.

For example:

coordinates(90,1)
=> (0.0, 1.0)

coordinates(45, 1)
=> (0.7071067812, 0.7071067812)
*/
function coordinates(degrees, radius) {
  return [
    parseFloat((radius * Math.cos((degrees * Math.PI) / 180)).toFixed(10)),
    parseFloat((radius * Math.sin((degrees * Math.PI) / 180)).toFixed(10)),
  ];
}

console.log(coordinates(90, 1)); //[0, 1]
console.log(coordinates(90, 2)); //[0.0, 2.0]
console.log(coordinates(0, 1)); //[1.0, 0.0]
console.log(coordinates(45, 1)); //[0.7071067812, 0.7071067812]
console.log(coordinates(1090, 10000)); //[9848.0775301221, 1736.4817766693]
console.log(coordinates(-270, 1)); //[0.0, 1.0]
