/*
Description:

In this kata, your task is to write a function to_bytes(n) (or toBytes(n) depending on language) that produces a list of bytes that represent a given non-negative integer n. Each byte in the list is represented by a string of '0' and '1' of length 8. The most significant byte is first in the list. The example test cases should provide you with all the details. You may assume that the argument n is valid.
*/
function toBytes(n) {
  return n
    .toString(2)
    .padStart(Math.ceil(n.toString(2).length / 8) * 8, '0')
    .match(/.{8}/g);
}
////////////////////////////////////!SECTION
// const toBytes = (n) => `0000000${n.toString(2)}`.match(/.{8}(?=(?:.{8})*$)/g);

console.log(toBytes(0)); //['00000000']
console.log(toBytes(1)); //['00000001']
console.log(toBytes(257)); //['00000001', '00000001']
console.log(toBytes(0x101)); //['00000001', '00000001']
