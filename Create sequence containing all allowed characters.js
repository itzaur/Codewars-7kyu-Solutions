/*
Description:

Define createSequence(regex) function that returns a string of all characters (in ASCII order) matching specified regular expression one-character criterion.
Examples

let digits = /[0-9]/;
// createSequence(digits) === '0123456789'

let hexadecimal = /[0-9A-F]/;
// createSequence(hexadecimal) === '0123456789ABCDEF'
*/
const createSequence = (regex) => {
  let result = '';

  for (let i = 32; i <= 126; i++) {
    const char = String.fromCharCode(i);

    if (regex.test(char)) {
      result += char;
    }
  }

  return result;
  ////////////////////////////////////!SECTION
  //   return Array.from({ length: 256 }, (_, i) => String.fromCharCode(i))
  //     .filter((x) => regex.test(x))
  //     .join('');
};

console.log(createSequence(/[a-c]/)); //'abc'
console.log(createSequence(/[0-9A-F]/)); //'0123456789ABCDEF'
