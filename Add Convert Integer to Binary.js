/*
Description:

Convert integers to binary as simple as that. You would be given an integer as a argument and you have to return its binary form. To get an idea about how to convert a decimal number into a binary number, visit here.

Notes: negative numbers should be handled as two's complement; assume all numbers are integers stored using 4 bytes (or 32 bits) in any language.

Your output should ignore leading 0s.
Examples (input --> output):

3  --> "11"
-3 -->"11111111111111111111111111111101"

Be Ready for Large Numbers. Happy Coding ^_^
*/
function toBinary(n) {
  let num = n < 0 ? 2 ** 32 + n : n;
  let binary = '';

  if (num === 0) return '0';

  while (num > 0) {
    binary = (num % 2) + binary;
    num = ~~(num / 2);
  }

  return binary;
  ////////////////////////////////////!SECTION
  //   return (n >>> 0).toString(2);
  ////////////////////////////////////!SECTION
  //   if (n < 0) {
  //     n += Math.pow(2, 32);
  //   }

  //   return n.toString(2);
}

console.log(toBinary(2)); //"10"
console.log(toBinary(3)); //"11"
console.log(toBinary(-3)); //"11111111111111111111111111111101"
console.log(toBinary(4)); //"100"
console.log(toBinary(5)); //"101"
