/*
Description:

Convert Decimal Degrees to Degrees, Minutes, Seconds.

Remember: 1 degree = 60 minutes; 1 minute = 60 seconds.

Input: Positive number.

Output: Array [degrees, minutes, seconds]. E.g [30, 25, 25]

Trailing zeroes should be omitted in the output. E.g

convert (50)
//correct output -> [50]
//wrong output -> [50, 0, 0]

convert(80.5)
//correct output -> [ 80, 30 ]
//wrong output -> [80, 30, 0]

convert(0.0001388888888888889)
//correct output -> [ 0, 0, 1 ]
//wrong output -> [1]

Round the seconds to the nearest integer.
*/
function convert(degrees) {
  const degreesPart = ~~degrees;
  const minutes = ~~((degrees - degreesPart) * 60);
  const seconds = Math.round(
    degrees * 3600 - degreesPart * 3600 - minutes * 60,
  );

  switch (true) {
    case seconds === 60 && minutes === 59:
      return [degreesPart + 1];
    case seconds === 60:
      return [degreesPart, minutes + 1];
    case seconds === 0 && minutes === 0:
      return [degreesPart];
    case seconds === 0:
      return [degreesPart, minutes];
    default:
      return [degreesPart, minutes, seconds];
  }
}
////////////////////////////////////!SECTION
// function convert(deg) {
//   var s = Math.round(deg * 3600),
//     d = ~~(s / 3600),
//     m = ~~((s % 3600) / 60);
//   return s % 60 ? [d, m, s % 60] : m ? [d, m] : [d];
// }

console.log(convert(0)); //[0]
console.log(convert(40.567)); //[40, 34, 1]
console.log(convert(80.5)); //[ 80, 30 ]
console.log(convert(70.234).length); //3
console.log(convert(0.99999999)); //[1]
