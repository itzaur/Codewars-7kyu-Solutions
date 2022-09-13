/*
Description:

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function addBinary(a, b) {
  let arr = [];
  const sum = a + b;
  let divide = Math.floor(sum / 2);
  let firstElement = sum - divide * 2;

  while (divide >= 2) {
    divide = Math.floor(divide / 2);
    arr.push(divide % 2);
  }

  arr.unshift(firstElement, Math.floor(sum / 2) % 2);

  return arr.reverse``.join``;

  //   return (a + b).toString(2);

  //   let sum = a + b;
  //   let str = "";
  //   while (sum >= 1) {
  //     str = (sum % 2) + str;
  //     sum = Math.floor(sum / 2);
  //   }

  //   return str;
}

console.log(addBinary(1, 1)); //10
console.log(addBinary(5, 10)); //1111
