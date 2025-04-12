/*
Description:

Implement String#six_bit_number?, which should return true if given object is a number representable by 6 bit unsigned integer (0-63), false otherwise.

It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.
*/
String.prototype.sixBitNumber = function () {
  const condition = 63;

  if (!/^(0|[1-9]\d?)$/.test(this)) return false;

  return +this >= 0 && +this <= condition;
  //////////////////////////////////////////!SECTION
  //   return /^([1-5]?\d|6[0-3])$/g.test(this);
  //////////////////////////////////////////!SECTION
  //   return String(+this) == this && +this >= 0 && 63 >= +this;
};

console.log(''.sixBitNumber()); //false
console.log('0'.sixBitNumber()); //true
console.log('00'.sixBitNumber()); //false
console.log('55'.sixBitNumber()); //true
console.log('63'.sixBitNumber()); //true
console.log('64'.sixBitNumber()); //false
console.log('-0'.sixBitNumber()); //false
console.log('-5'.sixBitNumber()); //false
console.log('05'.sixBitNumber()); //false
console.log('5'.sixBitNumber()); //true
