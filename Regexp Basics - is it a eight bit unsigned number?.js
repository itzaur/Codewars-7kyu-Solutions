/*
Description:

Implement String#eight_bit_number?, which should return true if given object is a number representable by 8 bit unsigned integer (0-255), false otherwise.

It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.
*/
String.prototype.eightBitNumber = function () {
  return /^([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(this);
  ////////////////////////////////////////!SECTION
  //   return /^(2([0-4]\d|5[0-5])|1\d\d|[1-9]?\d)$/.test(this);
  ////////////////////////////////////////!SECTION
  // return String(+this) == this && +this >= 0 && +this <=255;
};

console.log(''.eightBitNumber()); //false
console.log('0'.eightBitNumber()); //true
console.log('00'.eightBitNumber()); //false
console.log('55'.eightBitNumber()); //true
console.log('042'.eightBitNumber()); //false
console.log('123'.eightBitNumber()); //true
console.log('255'.eightBitNumber()); //true
console.log('256'.eightBitNumber()); //false
console.log('999'.eightBitNumber()); //false
