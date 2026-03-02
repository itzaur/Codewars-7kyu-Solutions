/*
Description:

No Story

No Description

Only by Thinking and Testing

Look at the results of the testcases, and guess the code!
*/
function testit(a, b) {
  return [
    a[0] * b[0] + a[1] * b[2],
    a[0] * b[1] + a[1] * b[3],
    a[2] * b[0] + a[3] * b[2],
    a[2] * b[1] + a[3] * b[3],
  ];
}
//////////////////////////////////////!SECTION
// const testit = (a, b) =>
//   a.map((_, idx) => a[idx & 2] * b[idx & 1] + a[idx | 1] * b[idx | 2]);

console.log(testit([0, 0, 0, 0], [0, 0, 0, 0])); //[0,0,0,0]
console.log(testit([22, 88, 0, 0], [0, 100, 0, 100])); //[0,11000,0,0]
console.log(testit([0, 0, 96, 49], [86, 0, 53, 0])); //[0,0,10853,0]
console.log(testit([0, 0, 83, 88], [0, 27, 0, 99])); //[0,0,0,10953]
