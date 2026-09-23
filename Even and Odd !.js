/*
Description:

Given an integer N, can you fabricate the two numbers NE and NO such that NE is formed by even digits of N and NO is formed by odd digits of N ?

Return an array (tuple in Python) of two elements such as the first is NE and the second is NO.
Examples:
input 	NE 	NO
126453 	264 	153
3012 	2 	31
4628 	4628 	0
*/
function evenAndOdd(num) {
  return [...`${num}`]
    .reduce(
      (acc, el) => {
        if (!(el % 2)) {
          acc[0] += el;
        } else {
          acc[1] += el;
        }
        return acc;
      },
      ['', ''],
    )
    .map(Number);
}

console.log(evenAndOdd(126453)); //[264, 153]
console.log(evenAndOdd(3012)); //[2, 31]
console.log(evenAndOdd(4628)); //[4628, 0]
