/*
Description:

Complete the function which will return the area of a circle with the given radius.

Returned value is expected to be accurate up to tolerance of 0.01.

If the radius is not positive, throw Error.

Example:

circleArea(43.2673);     // returns 5881.248  (± 0.01)
circleArea(68);          // returns 14526.724 (± 0.01)
circleArea(0);           // throws Error
circleArea(-1);          // throws Error
*/
function circleArea(radius) {
  return radius > 0
    ? Math.round(Math.PI * radius * radius * 1000) / 1000
    : (() => {
        throw new Error('Error');
      })();
}

console.log(circleArea(1)); //3.141
console.log(circleArea(43.2673)); //5881.248
console.log(circleArea(68)); //14526.724
console.log(circleArea(0)); //Error
console.log(circleArea(-1)); //Error
