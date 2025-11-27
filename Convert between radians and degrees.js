/*
Description:

Extend the Math object/module to convert degrees to radians and vice versa. Return the result in string format, rounded to two decimal points when not an integer, otherwise truncate the result (see the examples).

Note that all methods of Math object are static.
Examples

Math.degrees(Math.PI)  -->  "180deg"
Math.radians(180)      -->  "3.14rad"
*/
Math.degrees = function (radians) {
  const degrees = (radians * 180) / Math.PI;

  return Number.isInteger(degrees)
    ? `${degrees}deg`
    : `${Math.round(degrees * 100) / 100}deg`;
};

Math.radians = function (degrees) {
  const radians = (degrees * Math.PI) / 180;

  return Number.isInteger(radians)
    ? `${radians}rad`
    : `${Math.round(radians * 100) / 100}rad`;
};
//////////////////////////////////////////!SECTION
// Math.degrees = (val) => `${Math.round((val / Math.PI) * 18000) / 1e2}deg`;
// Math.radians = (val) => `${Math.round((val / 1.8) * Math.PI) / 1e2}rad`;

console.log(Math.degrees(Math.PI)); //'180deg'
console.log(Math.radians(180)); //'3.14rad'
console.log(Math.radians(905)); //'15.8rad'
