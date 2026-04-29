/*
Description:

Return 1 when any odd bit of x equals 1; 0 otherwise.

Assume that:

    x is an unsigned, 32-bit integer;
    the bits are zero-indexed (the least significant bit is position 0)

Examples

  2  -->  1 (true) because at least one odd bit is 1 (2 = 0b10)
  5  -->  0 (false) because none of the odd bits are 1 (5 = 0b101)
170  -->  1 (true) because all of the odd bits are 1 (170 = 0b10101010)
*/
function anyOdd(x) {
  return x.toString(2).split``.reverse().some((el, i) => el === '1' && i % 2)
    ? 1
    : 0;
}
//////////////////////////////////////!SECTION
// const anyOdd = (x) => 2_863_311_530 & x && 1;
//////////////////////////////////////!SECTION
// const anyOdd = (x) => Number(Boolean(x & parseInt('10'.repeat(16), 2)));

console.log(anyOdd(2863311530)); //1
console.log(anyOdd(128)); //1
console.log(anyOdd(131)); //1
console.log(anyOdd(2)); //1
console.log(anyOdd(1)); //0
console.log(anyOdd(1365)); //0
