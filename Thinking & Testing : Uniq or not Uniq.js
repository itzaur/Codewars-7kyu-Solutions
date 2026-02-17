/*
Description:

No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/
function testit(a, b) {
  return [...new Set(a), ...new Set(b)].sort((a, b) => a - b);
}

console.log(testit([0], [1])); //[0,1]
console.log(testit([1, 2], [3, 4])); //[1,2,3,4]
console.log(testit([1], [2, 3, 4])); //[1,2,3,4]
console.log(testit([1, 2, 3], [4])); //[1,2,3,4]
console.log(testit([1, 2], [1, 2])); //[1,1,2,2]
