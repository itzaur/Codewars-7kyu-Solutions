/*
Description:
Task

Tranform of input array of zeros and ones to array in which counts number of continuous ones. If there is none, return an empty array
Example

[1, 1, 1, 0, 1] -> [3,1]
[1, 1, 1, 1, 1] -> [5]
[0, 0, 0, 0, 0] -> []
*/
function onesCounter(input) {
  return input.join``
    .split('0')
    .filter((el) => el)
    .map((el) => el.length);
  //////////////////////////////////!SECTION
  //   return (input.join``.match(/1+/g) || []).map((x) => x.length);
}

console.log(onesCounter([0, 0, 0, 0, 0, 0, 0, 0])); //[]
console.log(onesCounter([1, 1, 1, 1, 1])); //[5]
console.log(onesCounter([1, 1, 1, 0, 0, 1, 0, 1, 1, 0])); //[3, 1, 2]
console.log(onesCounter([0, 0, 0, 1, 0, 0, 1, 1])); //[1, 2]
console.log(onesCounter([1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1])); //[1, 2, 4, 1]
