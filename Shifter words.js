/*
Description:

You probably know that some characters written on a piece of paper, after turning this sheet 180 degrees, can be read, although sometimes in a different way. So, uppercase letters "H", "I", "N", "O", "S", "X", "Z" after rotation are not changed, the letter "M" becomes a "W", and Vice versa, the letter "W" becomes a "M".

We will call a word "shifter" if it consists only of letters "H", "I", "N", "O", "S", "X", "Z", "M" and "W". After turning the sheet, this word can also be read, although in a different way. So, the word "WOW "turns into the word "MOM". On the other hand, the word "HOME" is not a shifter.

Find the number of unique shifter words in the input string (without duplicates). All shifters to be counted, even if they are paired (like "MOM" and "WOW"). String contains only uppercase letters.
Examples

shifter("SOS IN THE HOME") === 2 // shifter words are "SOS" and "IN"
shifter("WHO IS SHIFTER AND WHO IS NO") === 3 // shifter words are "WHO", "IS", "NO"
shifter("TASK") === 0 // no shifter words
shifter("") === 0 // no shifter words in empty string
*/
function shifter(s) {
  const options = ['H', 'I', 'N', 'O', 'S', 'X', 'Z', 'M', 'W'];

  return (
    s.length &&
    [...new Set(s.split` `)]
      .map((el) => el.split``.every((letter) => options.includes(letter)))
      .filter((el) => el).length
  );
  //////////////////////////////////////!SECTION
  //   return new Set(s.match(/\b[HINOSXZMW]+\b/g)).size;
}

console.log(shifter('ON')); //1
console.log(shifter('OS IS UPDATED')); //2
console.log(shifter('WHO IS WHO')); //2
console.log(shifter('JS')); //0
console.log(shifter('I III I III')); //2
console.log(shifter('')); //0
