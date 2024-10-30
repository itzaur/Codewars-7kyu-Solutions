/*
Description:
While surfing in web I found interesting math problem called "Always perfect". That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square. For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25, since the result number is a perfect square the square root of 25 would be 5.

So now lets write a function which takes numbers separated by commas in string format and returns the number which is a perfect square and the square root of that number.

If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".

If string contains 4 numbers but not consecutive it returns "not consecutive".
*/
function checkRoot(string) {
  const length = 4;
  const array = string.split(',').map(Number);

  const multiplication = array.reduce((acc, el) => acc * el) + 1;

  const isSquare = Number.isInteger(Math.sqrt(multiplication))
    ? Math.sqrt(multiplication)
    : null;

  const result =
    multiplication && isSquare
      ? `${multiplication}, ${isSquare}`
      : 'not consecutive';

  if (!array.every(Number) || array.length !== length) return 'incorrect input';

  for (let i = 0; i < array.length; i++) {
    if (array[i] + 1 !== (array[i + 1] || array.at(-1) + 1))
      return 'not consecutive';
  }

  return result;
}
//////////////////////////////////////////////////!SECTION
// const checkRoot = (string) =>
//   ((arr, [a, b, c, d] = arr) =>
//     arr.length !== 4 || arr.some(isNaN) || !arr.every(Boolean)
//       ? `incorrect input`
//       : (b - a) * (c - b) * (d - c) !== 1
//       ? `not consecutive`
//       : `${a * b * c * d + 1}, ${a * d + 1}`)(string.split(`,`).map(Number));

console.log(checkRoot('4,5,6,7')); //'841, 29'
console.log(checkRoot('3,s,5,6')); //'incorrect input'
console.log(checkRoot('11,13,14,15')); //'not consecutive'
console.log(checkRoot('1,1,1,3')); //'not consecutive'
