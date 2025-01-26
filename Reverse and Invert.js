/*
Description:
Reverse and invert all integer values in a given list.

[1,12,'a',3.4,87,99.9,-42,50,5.6] --> [-1,-21,-78,24,-5]
Remove all types other than integer.
*/
function reverseInvert(array) {
  return array
    .filter((el) => Number.isInteger(el))
    .map((el) =>
      el >= 0
        ? -`${el}`.split``.reverse().join``
        : +`${el}`.slice(1).split``.reverse().join``
    );
  //////////////////////////////////////////////!SECTION
  //   return array
  //     .filter((val) => Number.isInteger(val))
  //     .map((val) => [...`${Math.abs(val)}`].reverse().join(``) * -Math.sign(val));
  //////////////////////////////////////////////!SECTION
  //   return array
  //     .filter(Number.isInteger)
  //     .map((n) => -Math.sign(n) * parseInt([...`${n}`].reverse().join('')));
}

console.log(reverseInvert([1, 2, 3, 4, 5])); //[-1,-2,-3,-4,-5]
console.log(reverseInvert([-10])); //[1]
console.log(reverseInvert([-9, -18, 99])); //[9,81,-99]
console.log(reverseInvert([1, 12, 'a', 3.4, 87, 99.9, -42, 50, 5.6])); //[-1,-21,-78,24,-5]
console.log(reverseInvert([])); //[]
