/*
DESCRIPTION:
Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

Vowels are (in this kata): a, e, i, o, u

Note: all provided input strings are lowercase.

Examples
"day"    ==>  "dya"
"apple"  ==>  "pplae"
*/
function moveVowel(input) {
  const vowels = [...input].filter((el) => el.match(/[aeiou]/)).join``;
  const consonants = [...input].filter((el) => !el.match(/[aeiou]/)).join``;

  return consonants + vowels;

  //   return input.replace(/[aeiou]/g, '') + input.replace(/[^aeiou]/g, '');
}

console.log(moveVowel('day')); //'dya'
console.log(moveVowel('apple')); //'pplae'
console.log(moveVowel('peace')); //'pceae'
console.log(moveVowel('maker')); //'mkrae'
