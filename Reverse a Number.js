/*
Description:

Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
Examples

 123 ->  321
-456 -> -654
1000 ->    1
*/
function reverseNumber(n) {
  const result = `${n}`.split``.reverse().join``;

  return result.at(-1) === '-' ? +('-' + result.slice(0, -1)) : +result;
}

console.log(reverseNumber(123)); //321
console.log(reverseNumber(-123)); //-321
console.log(reverseNumber(1000)); //1
console.log(reverseNumber(4321234)); //4321234
console.log(reverseNumber(5)); //5
console.log(reverseNumber(0)); //0
console.log(reverseNumber(98989898)); //89898989
