/*
Description:
The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

Given a string of binary, return the version the photocopier gives you as a string.
*/
function broken(x) {
  return [...x].map((el) => (el == '0' ? '1' : '0')).join``;
  //////////////////////////////////////!SECTION
  //   return x.replace(/\d/g, (val) => val ^ 1);
  //////////////////////////////////////!SECTION
  //   return x.replace(/[10]/gi, (match) => (match === '0' ? '1' : '0'));
  //////////////////////////////////////!SECTION
  //   return x.replace(/[01]/g, (m) => '10'[m]);
}

console.log(broken('1')); //'0'
console.log(broken('10000000101101111110011001000')); //'01111111010010000001100110111'
console.log(broken('100010')); //'011101'
