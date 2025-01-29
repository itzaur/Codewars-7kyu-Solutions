/*
Description:
Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.
*/
String.prototype.vowel = function () {
  return /^[aeiou]$/i.test(this);
  ////////////////////////////////////!SECTION
  //   return 'aeiou'.split('').includes(this.toLowerCase());
};

console.log(''.vowel()); //false
console.log('a'.vowel()); //true
console.log('E'.vowel()); //true
console.log('ou'.vowel()); //false
console.log('z'.vowel()); //false
console.log('lol'.vowel()); //false
