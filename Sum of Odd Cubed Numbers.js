/*
Description:
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/
function cubeOdd(arr) {
  return arr.every((el) => typeof el === 'number')
    ? arr.reduce((acc, el) => (el ** 3 % 2 ? acc + el ** 3 : acc), 0)
    : undefined;
  ////////////////////////////////////////////!SECTION
  //   return arr.some((val) => isNaN(val))
  //     ? undefined
  //     : arr.reduce((pre, val) => pre + (val & 1 ? val ** 3 : 0), 0);
}

console.log(cubeOdd([1, 2, 3, 4])); //28
console.log(cubeOdd([-3, -2, 2, 3])); //0
console.log(cubeOdd(['a', 12, 9, 'z', 42])); //undefined
console.log(cubeOdd([38, 'a', 19, 0, 23, 25])); //undefined
