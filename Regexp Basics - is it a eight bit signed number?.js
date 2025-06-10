/*
Description:

Implement:

String.prototype.signedEightBitNumber()

which should return true if given object is a number representable by 8 bit signed integer (-128 to -1 or 0 to 127), false otherwise.

It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.
*/
String.prototype.signedEightBitNumber = function () {
  const minNum = -128;
  const maxNum = 127;

  if (this == '-0') return false;

  return (
    /^-?(0|[1-9][0-9]{0,2})$/.test(this) &&
    parseInt(this, 10) >= minNum &&
    parseInt(this, 10) <= maxNum
  );
  ////////////////////////////////////////////!SECTION
  //   return /^(-?([1-9]\d?|1[01]\d|12[0-7])|-128|0)$/.test(this);
  ////////////////////////////////////////////!SECTION
  //   return (((Number(this) + 384) % 256) - 128).toString() == this;
  ////////////////////////////////////////////!SECTION
  //   return `${+this}` == this && +this < 128 && +this >= -128;
};

console.log(''.signedEightBitNumber()); //false
console.log('0'.signedEightBitNumber()); //true
console.log('00'.signedEightBitNumber()); //false
console.log('-0'.signedEightBitNumber()); //false
console.log('55'.signedEightBitNumber()); //true
console.log('-23'.signedEightBitNumber()); //true
console.log('042'.signedEightBitNumber()); //false
console.log('127'.signedEightBitNumber()); //true
console.log('128'.signedEightBitNumber()); //false
console.log('999'.signedEightBitNumber()); //false
console.log('-128'.signedEightBitNumber()); //true
console.log('-129'.signedEightBitNumber()); //false
console.log('-999'.signedEightBitNumber()); //false
console.log('1\n'.signedEightBitNumber()); //false
console.log('1 '.signedEightBitNumber()); //false
console.log(' 1'.signedEightBitNumber()); //false
console.log('1\n2'.signedEightBitNumber()); //false
console.log('+1'.signedEightBitNumber()); //false
console.log('--1'.signedEightBitNumber()); //false
