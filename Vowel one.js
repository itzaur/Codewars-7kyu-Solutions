/*
Description:
vowelOne

Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"
*/
function vowelOne(s) {
  return s
    .replace(/[0-9]/g, 0)
    .replace(/[aeoiu]/gi, 1)
    .replace(/[a-z, !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/gi, 0);

  // return s.replace(/[^aeoiu]/gi, 0).replace(/[^\d]/g, 1)
  // return s.replace(/[^aeiou]/gi, 0).replace(/[aeiou]/gi, 1)
  // return [...s].map(el => "aeiou".includes(el) ? 1 : 0).join``
}

console.log(vowelOne("vowelOne")); //"01010101"
console.log(vowelOne("123, arou")); //"000001011"
console.log(vowelOne("123Uuuiiu, arou-"));
console.log(vowelOne("bZd#udY.UoiOEO_EDiAA&ApIianE"));
console.log(vowelOne("O)sivooia#jI'iicZAuEBNuT//aeo\\uU"));
console.log(vowelOne("o*i7ADOO%e4Oix,QyO|&PU!Ai!e+2e"));
