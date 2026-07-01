/*
Description:

Write a function which takes an argument n, (a signed 32-bit integer in 2s-complement format) and returns an array of integers of length 32, containing the bits of n. (Least Significant Bit on the right).

Assign either a 1 or a 0 to the array element depending on whether the bit at the corresponding position is a 1 or 0.

For example (input -> output):

 1 -> [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
-1 -> [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
*/
function showBits(n) {
  return Array.from({ length: 32 }, (_, i) => (n >> (31 - i)) & 1);
  //////////////////////////////////!SECTION
  //   return (n >>> 0)
  //     .toString(2)
  //     .padStart(32, '0')
  //     .split('')
  //     .map((item) => +item);
}

console.log(showBits(211)); //[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1]
