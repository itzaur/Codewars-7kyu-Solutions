/*
Description:
The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used. There are several algorithms for efficient computing of the Hamming weight for numbers. In this Kata, speaking technically, you have to find out the number of '1' bits in a binary representation of a number. Thus,

hammingWeight(10) // 1010  => 2
hammingWeight(21) // 10101 => 3
The interesting part of this task is that you have to do it without string operation (hey, it's not really interesting otherwise)
*/
function hammingWeight(x) {
  const result = [];

  while (x >= 1) {
    result.push(~~(x % 2));
    x = x / 2;
  }

  return result.filter((el) => el === 1).length;
  //////////////////////////////////////////!SECTION
  //   return x && (x % 2) + hammingWeight(x >> 1);
}

console.log(hammingWeight(10)); // 2
console.log(hammingWeight(21)); // 3
