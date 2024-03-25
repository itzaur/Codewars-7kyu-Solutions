/*
DESCRIPTION:
Write a function, isItLetter or is_it_letter, which tells us if a given character is an, uppercase or lowercase, letter.
*/
function isItLetter(character) {
  return !!character.match(/[a-z]/gi);
  ////////////////!SECTION
  //   return /[a-z]/i.test(character);
}

console.log(isItLetter('a')); //true
console.log(isItLetter('1')); //false
console.log(isItLetter('[')); //false
