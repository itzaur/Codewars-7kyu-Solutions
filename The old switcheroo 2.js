/*
Description:
This is a follow up from my kata The old switcheroo

Write the function :

function encode(str)
that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
encode('codewars') == '315452311819'
encode('abc-#@5') == '123-#@5'
String are case sensitive.

// Bonus point if you don't use toLowerCase()
*/
function encode(str) {
  const aASCIICode = 97;
  const AASCIICode = 65;

  return [...str].map((el) =>
    el.match(/^[a-z]/gi)
      ? el.charCodeAt() - (el == el.toLowerCase() ? aASCIICode : AASCIICode) + 1
      : el
  ).join``;
  //////////////////////////////////////////!SECTION
  //   return str.replace(/[a-z]/gi, (c) => c.charCodeAt() - (c < 'a' ? 64 : 96));
  //////////////////////////////////////////!SECTION
  //   return str.toLowerCase().replace(/[a-z]/g, ($) => $.codePointAt() - 96);
  //////////////////////////////////////////!SECTION
  //   return str.replace(/[A-Z]/gi, (val) => val.charCodeAt() & 31);
}

console.log(encode('abc')); //'123
console.log(encode('ABCD')); //'1234'
console.log(encode('ZzzzZ')); //'2626262626'
console.log(encode('abc-#@5')); //'123-#@5'
