/*
Description:

In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:

    If a letter is a upper case consonants, replace that character with "Iron".
    If a letter is a lower case consonants or a non-alpha character, do nothing to that character
    If a letter is a upper case vowel, replace that character with "Iron Yard".
    If a letter is a lower case vowel, replace that character with "Yard".

Ready?
*/
function tiyFizzBuzz(sentence) {
  return sentence.split``.map((char) => {
    switch (char) {
      case /[AEIOU]/.test(char) && char:
        return 'Iron Yard';
      case /[aeiou]/.test(char) && char:
        return 'Yard';
      case /[BCDFGHJKLMNPQRSTVWXYZ]/.test(char) && char:
        return 'Iron';
      default:
        return char;
    }
  }).join``;
  ////////////////////////////////////////////!SECTION
  //   return sentence.replace(/[A-Zaeiou]/g, (x) =>
  //     x == x.toLowerCase() ? 'Yard' : /[AEIOU]/.test(x) ? 'Iron Yard' : 'Iron',
  //   );
}
////////////////////////////////////////////!SECTION
// const tiyFizzBuzz = (sentence) =>
//   sentence.replace(/[A-Zaeiou]/g, (val) =>
//     /[AEIOU]/.test(val) ? `Iron Yard` : /[aeiou]/.test(val) ? `Yard` : `Iron`,
//   );

console.log(tiyFizzBuzz(' ')); //" "
console.log(tiyFizzBuzz('H')); //"Iron"
console.log(tiyFizzBuzz('b')); //"b"
console.log(tiyFizzBuzz('A')); //"Iron Yard"
console.log(tiyFizzBuzz('a')); //"Yard"
console.log(tiyFizzBuzz('Hello WORLD!')); //"IronYardllYard IronIron YardIronIronIron!"
